---
title: Contribution
sidebar_position: 3
slug: /contribution
description: Een lijst met heel veel handige discord hulpbronnen voor alle gebruikers, van beginners tot powerusers.
---

```mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
```

# Contribution

Heb je een error of typfout gevonden? Heb je een goede hulpbron gevonden die in deze lijst past? Wordt een bijdrager en kom op de roemrijke lijst met bijdragers hieronder!<br/>
Om bij te dragen ben je meer dan welkom om een PR te maken of om een DM te sturen naar @755792681313108018 om de wiki te bewerken.
Je kan ook onderdeel worden van de [Officiële Project Server](https://discord.gg/yxbqz9pNxS) om daar bijdrages te doen.

## Contributors

Dit project heeft meer dan één paar handen gekost, en we zijn er trots op dat dit team van bijdragers ons heeft geholpen met dit project!<br/>
We willen de volgende personen graag bedanken:<br/>
@856780995629154305 - Website Onderhouder <br/>
@347727875266576395 - Wiki Architect <br/>
@391660873409888277 - Wiki fixer <br/>
@363481883369013259 - GitHub Manager / Documentatie Organisator<br/>
@337654195526303746 - Hulpbronnen Onderzoeker / Onderhouder<br/>
@337104786593939456 - Documentatie Organisator<br/>
@485676072176713729 - Hulpbronnen Onderzoeker / Onderhouder<br/>
@762387276595724308 - Hulpbronnen Onderzoeker / Onderhouder<br/>
@378537973215657984 - Community & Content Manager / Documentatie Organisator<br/>
@287711497118023692 - Hulpbronnen Onderzoeker / Documentatie Organisator<br/>
@192060404501839872 - Designer<br/>
@386861188891279362 - Website Architect / Documentatie Organisator<br/>
@102102717165506560 - Groeiadvies en Hulpbron curator<br/>
@755792681313108018 - *Ik had dit idee en heb al het bovenstaande gedaan*<br/>
@480495309491798037 - <http://discord.wiki/> Doorstuur eigenaar <br/>
@421991668556759042 - [PreMiD Presence](https://premid.app/store/presences/Discord%20Resources) Maker <br/>
@427146305651998721 - Onderhouder <br/>
@209609796704403456 - Nederlandse vertaling <br/>
@357156679684718592 - Nederlandse vertaling <br/>
@857161228882018304 - Nederlandse vertaling <br/>
@426809593922846731 - Nederlandse vertaling <br/>
@460085286567936001 - Nederlandse vertaling <br/>

## Hoe test je veranderingen lokaal

Heb je een geweldige PR maar weet je niet hoe het eruit ziet? Geen probleem!<br/>

Vereisten zijn:<br/>
Node.js versie >= ```16.5.0```<br/>

Als je Yarn gebruikt:<br/>
Yarn versie >= ```1.22.0```

Fork de GitHub repo en kloon de repo dan lokaal

```bash
git clone https://github.com/jouwgebruikersnaam/Discord-Resources-Wiki
```

Daarna, open de `Discord-Resources-Wiki` folder en run het volgende command:

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

Dit download alle benodigdheden die nodig zijn voor ons documentatie syteem (Docusaurus). Je hoeft dit maar één keer uit te voeren.

Om gebruikersnamen te zien zoals op de website, moet je een nieuwe Discord applicatie aanmaken en er een Bot van maken.
Volg deze [link](https://github.com/reactiflux/discord-irc/wiki/Creating-a-discord-bot-&-getting-a-token) om een nieuwe applicatie te maken.

Om je vers gemaakte bot token te krijgen, ga je naar je applicatie instellingen en dan klik je op op het "Bot" tabblad.
Klik op de "Token" knop en je ziet je bot token.

Maak nu een fle aan genaamd .env in de hoofd directory en plaats daar het volgende in:

```env
DISCORD_TOKEN=<tokenhier>
```

Sla het bestand op.

Om je aanpassingen lokaal te testen, run het volgende command:

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

Dit command start de web server (standaard is dit ```localhost:3000```) en dit moet je elke keer uitvoeren als je aanpassingen wilt maken.
Het hoeft daarentegen niet voor elke verandering te worden uitgevoerd, omdat Docusaurus automatisch de server herstarts als het veranderingen ziet!

Wanneer je een lokale versie hebt draaien van de website, ben je klaar om te gaan bijdragen!

Notities: Gebruik alsjeblieft ```<br/>``` voor regeleinde tekens.
