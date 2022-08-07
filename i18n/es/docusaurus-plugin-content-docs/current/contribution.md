---
title: Contribución
sidebar_position: 3
slug: /contribution
description: Una lista de toneladas de útiles recursos y utilidades de Discord para todo tipo de usuarios, desde principiantes hasta usuarios avanzados.
---

```mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
```

# Contribución

¿Has encontrado un error o una falta de ortografia? ¿Tienes un buen recurso que encaja en esta lista? ¡Convierte en un contribuyente y esté en la gloriosa lista de contribuyentes abajo!<br/>
Para contribuir, estas mas que bienvenido a hacer un PR la wiki o enviar un MD a @755792681313108018 para editar la wiki y tu mismo en la lista.
Tambien puedes unirte al [Servidor Oficial del Proyecto](https://discord.gg/yxbqz9pNxS) para contribuir ahi.

## Contribuyentes

¡Este proyecto ha necesitado mas de un par de manos y estamos orgullosos de tener este equipo de contribuyentes que nos han ayudado con este proyecto!<br/>
Queremos agradecer a:<br/>
@795977947558182954 - Mantenedor de la Wiki <br/>
@885165099847929887 - <https://dis.wiki/> Propietario de la Redirección <br/>
@856780995629154305 - Mantenedor del Sitio Web <br/>
@347727875266576395 - Arquitecto de la Wiki <br/>
@391660873409888277 - Fijador de la Wiki <br/>
@363481883369013259 - Manager de GitHub / Organizador de Documentación<br/>
@337654195526303746 - Explorador de Recursos / Mantenedor<br/>
@337104786593939456 - Organizador de Documentación<br/>
@135877336804360194 - Mantenedor de la Pagina Web <br/>
@485676072176713729 - Explorador de Recursos / Mantenedor<br/>
@762387276595724308 - Explorador de Recursos / Mantenedor<br/>
@378537973215657984 - Manager de Comunidad y Contenido / Organizador de Documentación<br/>
@287711497118023692 - Explorador de Recursos / Organizador de Documentación<br/>
@192060404501839872 - Diseñador<br/>
@386861188891279362 - Arquitecto de la Pagina Web / Organizador de Documentación<br/>
@102102717165506560 - Consultor de Crecimiento / Curador de Recursos<br/>
@755792681313108018 - *He tenido la idea y he hecho todo lo de arriba*  <br/>
@480495309491798037 - <http://discord.wiki/> Propietario de la Redirección <br/>
@421991668556759042 - [PreMid Presence](https://premid.app/store/presences/Discord%20Resources) Creador <br/>
## Equipo de Traducción al Español
@658113072283516939 (Lider)
@438390132538605589
@893135042111479808
@209011861683830787
@427146305651998721
@528059449231933442

## Como probar cambios localmente

¿Tienes un buen PR pero no sabes como se ve? ¡No hay problema!<br/>

Los requisitos són:<br/>
Node.js version >= ```16.5.0```<br/>

Si estás usando Yarn:<br/>
Yarn version >= ```1.22.0```

Fork the GitHub repo and then clone it locally.

```bash
git clone https://github.com/tunombredeusuario/Discord-Resources-Wiki
```

Despues, abre el directorio de `Discord-Resources-Wiki` y ejecuta el siguiente comando:
  
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

Esto descargará todos los repositorios requeridos por nuestro sistema de documentación (Docusaurus). Solo neecesita ejecutar esto una sola vez.

Para ver los nombres de usuario como en la pagina web, debes crear una nueva aplicación de Discord y hacerla un Bot.
Sigue este [enlace](https://github.com/reactiflux/discord-irc/wiki/Creating-a-discord-bot-&-getting-a-token) para crear una nueva aplicación.

Para obtener tu nuevo token para el bot, ves a los ajustes de tu aplicación y haz click en el apartado "Bot".
Haz click en el botón "Token" y verás el token de tu bot.

Ahora crea un nuevo archivo llamado .env en el directorio principal y pega lo siguiente:

```env
DISCORD_TOKEN=<tokenaqui>
```

Guarda el archivo.

Para probar tus cambios localmente, ejecuta el siguiente comando:

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

Este comando inicia el servidor web (```localhost:3000``` por predeterminado) y tiene que ser ejecutado cada vez que quieras empezar a editar.
Sin embargo, no necesitaser ejecutado para cada cambio que hagas, ya que Docusaurus reiniciará automaticamente  el servidor si detecta cambios.

Una vez tengas una instancia de la pagina web ejecutandose localmente, ¡estas listo para empezar a contribuir!
Notas: Porfavor usa ```<br/>``` para los caracteres de salto de linea.
