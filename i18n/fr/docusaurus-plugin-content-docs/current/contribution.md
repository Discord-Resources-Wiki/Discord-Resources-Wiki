---
title: Contributions
sidebar_position: 3
slug: /contribution
description: A list of tons of useful discord resources and utilities for all types of users, from beginners to power users.
---

```mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
```

# Contribution

Vous avez trouvé une erreur ou une coquille? Vous avez des ressources à ajouter à cette liste? Devenez un contributeur et soyez sur la glorieuse liste de contributeurs ci-dessous.<br/>
Pour contribuez, vous pouvez PR ce wiki ou envoyez un mp à  @755792681313108018 pour éditer le wiki, et vous ajouter à la liste.
> Vous pouvez aussi rejoindre le [Serveur Officiel du Projet](https://discord.gg/yxbqz9pNxS) pour contribuer là bas.

## Contributeurs

Ce projet a requis plus que quelques paires de mains, et nous sommes fiers d'avoir cette équipe de contributeurs pour nous assister avec ce projet.<br/>
Nous voudrions remercier:<br/>
@795977947558182954 - Mainteneur du Wiki <br/>
@885165099847929887 - Propriétaire du domaine <https://dis.wiki/> <br/>
@856780995629154305 - Mainteneur du Site <br/>
@347727875266576395 - Architecte du Wiki <br/>
@391660873409888277 - Réparateur du Wiki <br/>
@363481883369013259 - Gestionnaire du GitHub / Organisateur de la Documentation <br/>
@337654195526303746 - Rechercheur de ressources / Mainteneur / Traducteur Français <br/>
@337104786593939456 - Organisateur de la Documentation <br/>
@135877336804360194 - Mainteneur du Site <br/>
@485676072176713729 - Rechercheur de ressources / Mainteneur <br/>
@762387276595724308 - Rechercheur de ressources / Mainteneur <br/>
@378537973215657984 - Gestionnaire du Projet / Organisateur de la Documentation <br/>
@287711497118023692 - Rechercheur de ressources / Organisateur de la Documentation <br/>
@192060404501839872 - Graphiste <br/>
@386861188891279362 - Architecte du Wiki / Organisateur de la Documentation <br/>
@102102717165506560 - Conseil en croissance / Curateur de ressources <br/>
@755792681313108018 - *J'ai eu cette idée et fait tout ça*  <br/>
@480495309491798037 - Propriétaire du domaine <http://discord.wiki/> <br/>
@421991668556759042 - Créateur de la [PreMiD Presence](https://premid.app/store/presences/Discord%20Resources) <br/>
@582211583938134028 - Mainteneur / Traducteur français <br/>
@242843345196548097 - Helpeur / Traducteur français et anglais <br/>

## Comment tester des changements localement

Vous avez une super PR en attente mais vous ne savez pas à quoi le résultat ressemble? Pas de problème!<br/>

Prérequis:<br/>
Node.js version >= ```16.5.0```<br/>

Si vous utilisez Yarn Yarn:<br/>
Yarn version >= ```1.22.0```

Forkez la repo GitHub et clonez la localement.

```bash
git clone https://github.com/yourusername/Discord-Resources-Wiki
```

Ensuite, ouvrez le dossier `Discord-Resources-Wiki` et entrez ces commandes:
  
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

Cela télécharge toutes les repos nécessaire pour notre système de documentation (Docusaurus). Vous avez seulement besoin de le lancer une fois.

Pour voir les noms d'utilisateur comme sur le site, vous devez créer une nouvelle application Discord et créer un bot.
Suivez ce [lien](https://github.com/reactiflux/discord-irc/wiki/Creating-a-discord-bot-&-getting-a-token) pour créer une application.

Pour avoir votre token tout frais, allez dans les paramètres de votre application et cliquez sur l'onglet "Bot".
Cliquez sur le bouton du Token et vous verez celui-ci.

Maintenant créez le fichier .env dans la racine et collez ce qui suit:

```env
DISCORD_TOKEN=<tokenhere>
```

Enregistrez le fichier.

Pour tester vos changements localement, executez ces commandes:

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

Cette commande lance votre serveur web (```localhost:3000``` par défaut) et doit être exécuté à chaque fois que vous voulez éditer.
Vous n'aurez pas besoin de le relancer à chaque changement cependant, car docusaurus rédemarrera automatiquement le serveur lorsqu'il détecte des changements!

Dès que vous avez une instance ouverte localement, vous êtes près à contribuer!
Notes: S'il-vous-plaît, utilisez ```<br/>``` pour les retours à la ligne.
