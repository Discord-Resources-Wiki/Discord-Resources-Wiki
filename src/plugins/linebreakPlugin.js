const findAndReplace = require('mdast-util-find-and-replace');

function inviteWidgetPlugin() {
    const linebreakRegex = / \\/g

    return function transformer(markdownAST) {
        findAndReplace(markdownAST, linebreakRegex, {
            type: 'html',
            value: '<br/>'
        })
        return markdownAST
    }
}

module.exports = inviteWidgetPlugin