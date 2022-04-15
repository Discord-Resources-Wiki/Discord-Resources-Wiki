const findAndReplace = require("mdast-util-find-and-replace");

function inviteWidgetPlugin() {
  const linebreakRegex = / \\/g;

  return function transformer(markdownAST) {
    let found = true;
    while (found) {
      found = false;
      findAndReplace(markdownAST, linebreakRegex, () => {
        found = true;
        return {
          type: "html",
          value: "<br/>",
        };
      });
    }
    return markdownAST;
  };
}

module.exports = inviteWidgetPlugin;
