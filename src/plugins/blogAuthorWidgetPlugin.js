const findAndReplace = require("mdast-util-find-and-replace");

const {
  users,
  fetchUserByIdentifier,
  userIdentifierRegex,
} = require("../lib/users");

function blogAuthorWidgetPlugin(options) {
  const identifierRegex = new RegExp(
    `@authors/${userIdentifierRegex}(,${userIdentifierRegex})*`,
    "g"
  );

  return async function transformer(markdownAST) {
    markdownAST.children.splice(0, 0, {
      type: "import",
      value:
        "import BlogAuthorWidget from '@site/src/components/BlogAuthorWidget';",
    });

    const toLoad = [];

    function replaceOrCollect(match) {
      const userIds = match.substring(9).split(",");

      let ready = true;
      for (let userId of userIds) {
        if (!users.hasOwnProperty(userId)) {
          ready = false;
          toLoad.push(userId);
        }
      }

      if (ready) {
        const loadedUsers = userIds.map((userId) => users[userId]);
        return {
          type: "jsx",
          value: `<BlogAuthorWidget data={${JSON.stringify(loadedUsers)}}/>`,
        };
      } else {
        return {
          type: "text",
          value: `@authors/${userIds.join(",")}`,
        };
      }
    }

    findAndReplace(markdownAST, identifierRegex, replaceOrCollect);

    while (toLoad.length) {
      for (let userId of toLoad) {
        await fetchUserByIdentifier(userId);
      }

      toLoad.splice(0, toLoad.length);

      findAndReplace(markdownAST, identifierRegex, replaceOrCollect);
      findAndReplace(markdownAST, identifierRegex, replaceOrCollect);
    }

    return markdownAST;
  };
}

module.exports = blogAuthorWidgetPlugin;
