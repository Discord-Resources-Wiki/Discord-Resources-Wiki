---
title: Beitragen
sidebar_position: 3
slug: /contribution
description: Eine Liste mit tonnenweise nützlichen Discord-Ressourcen und -Hilfsmitteln für alle Arten von Nutzern, von Anfängern bis hin zu Power-Usern.
---

```mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
```

# Beitrag

Hast du einen Fehler oder einen Tippfehler gefunden? Hast du eine gute Quelle, die in diese Liste passt? Werde ein Mitwirkender und kommen auf die glorreiche Liste der Mitwirkenden oben!<br/>
Um einen Beitrag zu leisten, bist du herzlich eingeladen,einen PR zu machen oder eine DM an @755792681313108018 zu schicken, um das Wiki zu bearbeiten und sich in die Liste einzutragen.
Du darfst auch dem [Offiziellen Projekt Server](https://discord.gg/yxbqz9pNxS) beitreten um dort einen Beitrag zu leisten.

## Mitwirkende

Für dieses Projekt waren mehr als nur ein paar Hände nötig, und wir sind stolz darauf, dieses Team von Mitarbeitern zu haben, die uns bei diesem Projekt geholfen haben!<br/>
Ein Dank geht an:<br/>
@795977947558182954 - Website-Betreuer <br/>
@885165099847929887 - <https://dis.wiki/> Weiterleit-links Besitzer <br/>
@856780995629154305 - Website-Betreuer <br/>
@347727875266576395 - Wiki Architekt <br/>
@391660873409888277 - Wiki fixer <br/>
@363481883369013259 - GitHub Manager / Organisator der Dokumentation<br/>
@337654195526303746 - Resources Researcher / Maintainer<br/>
@337104786593939456 - Organisator der Dokumentation<br/>
@135877336804360194 - Website-Betreuer <br/>
@485676072176713729 - Resources Researcher / Maintainer<br/>
@762387276595724308 - Resources Researcher / Maintainer<br/>
@378537973215657984 - Community & Content Manager / Organisator der Dokumentation<br/>
@287711497118023692 - Resources Researcher / Organisator der Dokumentation<br/>
@192060404501839872 - Designer<br/>
@386861188891279362 - Website-Architekt / Organisator der Dokumentation<br/>
@102102717165506560 - Wachstumsberatung / Ressourcenkurator<br/>
@280094303429197844 - Übersetzung ins Deutsche<br/>
@755792681313108018 - *Ich hatte diese Idee und habe alle oben genannten Dinge getan*<br/>
@480495309491798037 - <http://discord.wiki/> Weiterleit-links Besitzer <br/>
@421991668556759042 - [PreMid Presence](https://premid.app/store/presences/Discord%20Resources) Gründer / Übersetzung ins Deutsche<br/>

## Wie man Änderungen lokal testet

Du bist an einem PR am arbeiten, aber weißt nicht wie dieser aussieht? Das ist kein Problem!<br/>
Wenn du dich in einem Fork des Repositorys befindest, ist es so einfach wie die Ausführung dieser 2 Befehle:

Vorraussetzungen sind:<br/>
Node.js Version >= ```16.5.0```<br/>

Wenn du Yarn benutzt:<br/>
Yarn Version >= ```1.22.0```

Forke das GitHub-Repository und klone es dann lokal.

```bash
git clone https://github.com/yourusername/Discord-Resources-Wiki
```

Dann, öffne das `Discord-Resources-Wiki` Verzeichnis und führe den folgenden Befehl aus:
  
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

Damit werden alle für unser Dokumentationssystem (Docusaurus) benötigten Repositories heruntergeladen. Du musst diesen Vorgang nur einmal ausführen.

Um Benutzernamen wie auf der Webseite zu sehen, musst du eine neue Discord-Anwendung erstellen und sie als Bot einrichten.
Folge dann diesem [link](https://github.com/reactiflux/discord-irc/wiki/Creating-a-discord-bot-&-getting-a-token) um eine neue Anwendung zu erstellen.

Um dein frisch erstellten Bot-Token zu erhalten, gehe zu deinen Anwendungseinstellungen und klicke auf die Registerkarte "Bot".
Klicke auf die Schaltfläche "Token" und du wirst dein Bot-Token sehen.

Erstelle nun eine neue Datei namens .env im Stammverzeichnis und füge Folgendes ein:

```env
DISCORD_TOKEN=<token_hier>
```

Speicher die Datei.

Um deine Änderungen lokal zu testen, führe den folgenden Befehl aus:

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

Dieser Befehl startet den Webserver (Standartmäßig ```localhost:3000```) und muss jedes Mal ausgeführt werden, wenn du mit der Bearbeitung beginnen willst.
Es muss jedoch nicht bei jeder Änderung ausgeführt werden, da Docusaurus den Server automatisch neu startet, wenn es Änderungen feststellt!

Sobald du eine lokale Instanz der Website eingerichtet hast, kannst du mit der Arbeit beginnen!
Notiz: Bitte benutz ```<br/>``` für das line break Zeichen.