const findAndReplace = require('mdast-util-find-and-replace');

function inviteWidgetPlugin() {
    const widgetMarkupRegex = /@gg\/([a-zA-Z0-9-_]+)/g

    function replace(match) {
        return [
            {
                type: 'jsx',
                value: `<InviteWidget invite="${match.substring(4)}"/>`
            }
        ]
    }

    return function transformer(markdownAST) {
        markdownAST.children.splice(0, 0, {
            type: 'import',
            value: 'import InviteWidget from \'@site/src/components/InviteWidget.jsx\';'
        })

        findAndReplace(markdownAST, widgetMarkupRegex, replace)
        return markdownAST
    }
}

module.exports = inviteWidgetPlugin