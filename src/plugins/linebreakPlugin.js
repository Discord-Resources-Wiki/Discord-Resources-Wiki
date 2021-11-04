const findAndReplace = require('mdast-util-find-and-replace');

function inviteWidgetPlugin() {
    const linebreakRegex = / \\/g

    return function transformer(markdownAST) {
        let found = true
        while (found) {
            found = false
            findAndReplace(markdownAST, linebreakRegex, {
                type: 'html',
                value: () => {
                    found = true
                    return '<br/>'
                }
            })
        }
        return markdownAST
    }
}

module.exports = inviteWidgetPlugin