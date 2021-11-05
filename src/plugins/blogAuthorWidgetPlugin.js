const findAndReplace = require('mdast-util-find-and-replace');

const {REST} = require('@discordjs/rest');
const {Routes} = require('discord-api-types/v9');

const discordToken = process.env.DISCORD_TOKEN
const rest = new REST({version: '9'}).setToken(discordToken)
const loadedUsers = {}

function blogAuthorWidgetPlugin(options) {
    const widgetMarkupRegex = /@authors\/[0-9]+(,[0-9]+)*/g

    return async function transformer(markdownAST) {
        markdownAST.children.splice(0, 0, {
            type: 'import',
            value: 'import BlogAuthorWidget from \'@site/src/components/BlogAuthorWidget\';'
        })

        const toLoad = []

        function replaceOrCollect(match) {
            const userIds = match.substring(9).split(',')

            let ready = true
            for (let userId of userIds) {
                if (!loadedUsers[userId]) {
                    ready = false
                    toLoad.push(userId)
                }
            }

            if (ready) {
                const users = userIds.map(userId => loadedUsers[userId])
                return {
                    type: 'jsx',
                    value: `<BlogAuthorWidget data={${JSON.stringify(users)}}/>`
                }
            } else {
                return {
                    type: 'text',
                    value: `@authors/${userIds.join(',')}`
                }
            }
        }

        findAndReplace(markdownAST, widgetMarkupRegex, replaceOrCollect)

        while (toLoad.length) {
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

            toLoad.splice(0, toLoad.length)

            findAndReplace(markdownAST, widgetMarkupRegex, replaceOrCollect)
            findAndReplace(markdownAST, widgetMarkupRegex, replaceOrCollect)
        }

        return markdownAST
    }
}

module.exports = blogAuthorWidgetPlugin