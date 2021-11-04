const findAndReplace = require('mdast-util-find-and-replace');

const {REST} = require('@discordjs/rest');
const {Routes} = require('discord-api-types/v9');

const discordToken = process.env.DISCORD_TOKEN
const rest = new REST({version: '9'}).setToken(discordToken)
const loadedUsers = {}

function userWidgetInlinePlugin(options) {
    const widgetMarkupRegex = /@[0-9]+/g

    return async function transformer(markdownAST) {
        markdownAST.children.splice(0, 0, {
            type: 'import',
            value: 'import UserWidgetInline from \'@site/src/components/UserWidgetInline\';'
        })

        const toLoad = []

        function replaceOrCollect(match) {
            const userId = match.substring(1)
            if (loadedUsers.hasOwnProperty(userId)) {
                const user = loadedUsers[userId]
                return {
                    type: 'jsx',
                    value: `<UserWidgetInline data={${JSON.stringify(user)}}/>`
                }
            } else {
                toLoad.push(userId)
                return {
                    type: 'text',
                    value: `@${userId}`
                }
            }
        }

        findAndReplace(markdownAST, widgetMarkupRegex, replaceOrCollect)

        if (toLoad.length) {
            console.log(`Fetching ${toLoad.length} user(s) ...`)
        }

        await Promise.all(toLoad.map(async userId => {
            let user = {id: userId}
            if (discordToken) {
                try {
                    user = await rest.get(Routes.user(userId))
                } catch {
                    console.log(`Failed to fetch user with the id ${userId}, using fallback data instead.`)
                }
            }
            loadedUsers[userId] = user
        }))

        findAndReplace(markdownAST, widgetMarkupRegex, replaceOrCollect)

        return markdownAST
    }
}

module.exports = userWidgetInlinePlugin