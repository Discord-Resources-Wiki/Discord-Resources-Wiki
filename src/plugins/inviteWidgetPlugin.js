const findAndReplace = require('mdast-util-find-and-replace');

function inviteWidgetPlugin() {
    const widgetMarkupRegex = /@gg\/([a-zA-Z0-9-_]+)/g

    return function transformer(markdownAST) {
        markdownAST.children.splice(0, 0, {
            type: 'import',
            value: 'import InviteWidget from \'@site/src/components/InviteWidget.jsx\';'
        })

        let found = true
        function replace(match) {
            found = true
            return [
                {
                    type: 'jsx',
                    value: `<InviteWidget invite="${match.substring(4)}"/>`
                }
            ]
        }

        while (found) {
            found = false
            // the implementation seems to have issues finding multiple instances in one node
            // the loop ensures that all instances are replaced by searching again after the last one was already replaced
            findAndReplace(markdownAST, widgetMarkupRegex, replace)
        }

        return markdownAST
    }
}

module.exports = inviteWidgetPlugin