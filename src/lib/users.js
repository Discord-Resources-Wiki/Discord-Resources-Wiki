const {REST} = require('@discordjs/rest');
const {Routes} = require('discord-api-types/v9');

const discordToken = process.env.DISCORD_TOKEN
const discordRest = new REST({version: '9'}).setToken(discordToken)

const users = {}

async function fetchUserByIdentifier(identifier) {
    // TODO: add support for other platforms like github
    if (users[identifier]) return users[identifier]

    let user = null
    if (discordToken) {
        try {
            user = await discordRest.get(Routes.user(identifier))
        } catch {
            console.log(`Failed to fetch discord user with the id ${identifier}.`)
        }
    }
    users[identifier] = user

    return user
}

module.exports = {users, fetchUserByIdentifier}