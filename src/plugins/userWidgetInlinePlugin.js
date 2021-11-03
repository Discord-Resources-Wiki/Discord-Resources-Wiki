const findAndReplace = require('mdast-util-find-and-replace');

function userWidgetInlinePlugin(options) {
    const widgetMarkupRegex = /@[0-9]+/g

    function replace(match) {
        return [
            {
                type: 'jsx',
                value: `<UserWidgetInline id="${match.substring(1)}"/>`
            }
        ]
    }

    return function transformer(markdownAST) {
        markdownAST.children.splice(0, 0, {
            type: 'import',
            value: 'import UserWidgetInline from \'@site/src/components/UserWidgetInline\';'
        })

        findAndReplace(markdownAST, widgetMarkupRegex, replace)
        return markdownAST
    }
}

module.exports = userWidgetInlinePlugin