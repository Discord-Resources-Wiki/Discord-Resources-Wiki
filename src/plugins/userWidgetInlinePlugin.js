const findAndReplace = require('mdast-util-find-and-replace');

const {users, fetchUserByIdentifier} = require('../lib/users');

function userWidgetInlinePlugin(options) {
    const widgetMarkupRegex = /@[0-9a-zA-Z-_]+/g

    return async function transformer(markdownAST) {
        markdownAST.children.splice(0, 0, {
            type: 'import',
            value: 'import UserWidgetInline from \'@site/src/components/UserWidgetInline\';'
        })

        const toLoad = []

        function replaceOrCollect(match) {
            const userId = match.substring(1)
            if (users.hasOwnProperty(userId)) {
                let loadedUser = users[userId]
                return {
                    type: 'jsx',
                    value: `<UserWidgetInline data={${JSON.stringify(loadedUser)}}/>`
                }
            } else {
                toLoad.push(userId)
                return {
                    type: 'text',
                    value: `@${userId}`
                }
            }
        }

        // this finds all instances and already replaces them if the users have already been loaded by other pages
        findAndReplace(markdownAST, widgetMarkupRegex, replaceOrCollect)

        while (toLoad.length) {
            for (let userId of toLoad) {
                await fetchUserByIdentifier(userId)
            }
            toLoad.splice(0, toLoad.length)

            // this replaces the instances that have just been loaded
            findAndReplace(markdownAST, widgetMarkupRegex, replaceOrCollect)

            // the implementation seems to have issues finding multiple instances in one node
            // the loop ensures that all instances are replaced by searching again after the last one was already replaced
            findAndReplace(markdownAST, widgetMarkupRegex, replaceOrCollect)
        }

        return markdownAST
    }
}

module.exports = userWidgetInlinePlugin