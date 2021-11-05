const {REST} = require('@discordjs/rest');
const {Routes} = require('discord-api-types/v9');
const {Octokit} = require("@octokit/rest");

const discordToken = process.env.DISCORD_TOKEN
const discordRest = new REST({version: '9'}).setToken(discordToken)
const octokit = new Octokit()

const users = {}

function discordUserAvatarUrl({id, discriminator, avatar}, size = 128) {
    const DISCORD_CDN = 'https://cdn.discordapp.com'

    if (avatar) {
        if (avatar.startsWith('a_')) {
            return `${DISCORD_CDN}/avatars/${id}/${avatar}.gif?size=${size}`
        } else {
            return `${DISCORD_CDN}/avatars/${id}/${avatar}.webp?size=${size}`
        }
    } else {
        return `${DISCORD_CDN}/embed/avatars/${parseInt(discriminator ?? id) % 5}.png?size=32`
    }
}

const discordSnowflakeRegex = /^[0-9]+$/

async function fetchUserByIdentifier(identifier) {
    if (users[identifier]) return users[identifier]

    let user = {
        notFound: true,
        type: 'discord',
        id: identifier,
        name: 'Unknown User',
        username: '',
        discriminator: '0000',
        avatarUrl: discordUserAvatarUrl({id: identifier}),
        url: `https://discord.com/users/${identifier}`
    }

    if (discordSnowflakeRegex.exec(identifier)) {
        if (discordToken) {
            try {
                const discordUser = await discordRest.get(Routes.user(identifier))
                user = {
                    type: 'discord',
                    id: discordUser.id,
                    name: discordUser.username,
                    username: `${discordUser.username}#${discordUser.discriminator}`,
                    discriminator: discordUser.discriminator,
                    avatarUrl: discordUserAvatarUrl(discordUser),
                    url: ``
                }
            } catch {
                console.log(`Failed to fetch discord user with the id ${identifier}.`)
            }
        }
    } else {
        try {
            const resp = await octokit.rest.users.getByUsername({username: identifier})
            if (resp.status === 200) {
                const githubUser = resp.data
                user = {
                    type: 'github',
                    id: githubUser.id,
                    name: githubUser.name,
                    username: githubUser.login,
                    avatarUrl: githubUser.avatar_url,
                    url: `https://github.com/${githubUser.login}`
                }
            } else {
                console.log(`Failed to fetch github user with the username ${identifier}.`)
            }
        } catch {
            console.log(`Failed to fetch github user with the username ${identifier}.`)
        }
    }

    users[identifier] = user
    return user
}

module.exports = {users, fetchUserByIdentifier, discordUserAvatarUrl}