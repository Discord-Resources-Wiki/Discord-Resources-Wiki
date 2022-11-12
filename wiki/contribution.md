---
title: Contribution
sidebar_position: 3
slug: /contribution
description: A list of tons of useful Discord resources and utilities for all types of users, from beginners to power users.
---

```mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
```

# Contribution

Found an error or a typo? Have a good resource that fits this list? Become a contributor and be on the glorious list of contributors below!<br/>
To contribute, you are more than welcome to PR this wiki or send a DM to @755792681313108018 in order to edit the wiki, and yourself into the list.
You can also join the [Official Project Guild](https://discord.gg/yxbqz9pNxS) to contribute there.

## Contributors

This project took more than one set of hands, and we are proud to have this team of contributors who helped us with this project!<br/>
We want to thank:<br/>
@795977947558182954 - Wiki Maintainer <br/>
@885165099847929887 - <https://dis.wiki/> Redirect Owner <br/>
@856780995629154305 - Website Maintainer <br/>
@347727875266576395 - Wiki Architect <br/>
@391660873409888277 - Wiki fixer <br/>
@363481883369013259 - GitHub Manager / Documentation Organizer<br/>
@337654195526303746 - Resources Researcher / Maintainer<br/>
@337104786593939456 - Documentation Organizer<br/>
@135877336804360194 - Website Maintainer <br/>
@485676072176713729 - Resources Researcher / Maintainer<br/>
@762387276595724308 - Resources Researcher / Maintainer<br/>
@378537973215657984 - Project Manager / Documentation Organizer<br/>
@287711497118023692 - Resources Researcher / Documentation Organizer<br/>
@192060404501839872 - Designer<br/>
@386861188891279362 - Website Architect / Documentation Organizer<br/>
@102102717165506560 - Growth Consulting / Resource Curator<br/>
@755792681313108018 - *I had this idea and did all of the above*  <br/>
@480495309491798037 - <http://discord.wiki/> Redirect Owner <br/>
@421991668556759042 - [PreMiD Presence](https://premid.app/store/presences/Discord%20Resources) Maker <br/>
@427146305651998721 - Maintainer <br/>
@582211583938134028 - Maintainer <br/>

## How to test changes locally

Got a great PR going but don't know what it looks like? Not a problem!<br/>

Requirements are:<br/>
Node.js version >= ```16.5.0```<br/>

If you are using Yarn:<br/>
Yarn version >= ```1.22.0```

Fork the GitHub repo and then clone it locally.

```bash
git clone https://github.com/yourusername/Discord-Resources-Wiki
```

Then, open the `Discord-Resources-Wiki` directory and run the following command:
  
```mdx-code-block
<Tabs>
<TabItem value="npm">
```

```bash
npm install
```

```mdx-code-block
</TabItem>
<TabItem value="yarn">
```

```bash
yarn install
```

```mdx-code-block
</TabItem>
</Tabs>
```

This downloads all the repositories needed by our documentation system (Docusaurus). You only need to run this once.

To see usernames like on the website, you must create new Discord application and make it as a Bot.
Follow this [link](https://github.com/reactiflux/discord-irc/wiki/Creating-a-discord-bot-&-getting-a-token) to create a new application.

To get your freshly made bot token, go to your application settings and click on the "Bot" tab.
Click on the "Token" button and you will see your bot token.

Now create new file called .env in the root directory and paste the following:

```env
DISCORD_TOKEN=<tokenhere>
```

Save the file.

To test your changes locally, run the following command:

```mdx-code-block
<Tabs>
<TabItem value="npm">
```

```bash
npm start
```

```mdx-code-block
</TabItem>
<TabItem value="yarn">
```

```bash
yarn start
```

```mdx-code-block
</TabItem>
</Tabs>

This command starts the web server (```localhost:3000``` by default) and must be ran every time you want to start editing.
It does not need to be ran for every change you make however, as Docusaurus will automatically restart the server if it detects changes!

Once you've got a running instance of the website locally, you're ready to start contributing!
Notes: Please use ```<br/>``` for line break characters.
