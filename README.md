<h1 align="center"> Hurricano™  🌀</h1>
<p align="center">
<a href="https://github.com/HurricanoBot/Hurricano/blob/main/LICENSE.md"><img alt="GitHub license" src="https://img.shields.io/github/license/HurricanoBot/Hurricano?style=for-the-badge"></a>
<a href="https://github.com/HurricanoBot/Hurricano/stargazers"><img alt="GitHub stars" src="https://img.shields.io/github/stars/HurricanoBot/Hurricano?style=for-the-badge"></a> 
<a href="https://github.com/HurricanoBot/Hurricano/network"><img alt="GitHub forks" src="https://img.shields.io/github/forks/HurricanoBot/Hurricano?style=for-the-badge"></a>
<a href="https://discord.gg/HdYnCvQTxk"><img alt="GitHub forks" src="https://img.shields.io/badge/Discord-7289DA?style=for-the-badge&logo=discord&logoColor=white"></a>
</p>
<h3 align="center">An open source Discord bot!</h3> 

<h2>Invite Hurricano 🌀</h2>
<a href="https://top.gg/bot/803169312827113483">
    <img src="https://top.gg/api/widget/803169312827113483.svg" alt="HurricanoBot"/>
</a>

<h2>Features⭐ :</h2>

⭐ Mongoose-Based Command Cooldowns
<br/>
⭐ Command Permissions
<br/>
⭐ Slash Command Handler
<br/>
⭐ Subcommands system
<br/>
⭐ OwnerOnly Commands
<br/>
⭐ Args required or not Option
<br/>
⭐ Permissions handler
<br/>
⭐ Role-Requirement Giveaways
<br/>
⭐ Customizable server settings using MongoDB
<br/>
⭐ Button help-menu
<br/>
⭐ Logging
<br/>
⭐ a lot of / commands
<br/>
⭐ ...And many interesting commands! 


<h1> Getting Started  🚀</h1>

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

<h2> Prerequisites 📋 </h2>
You'll need Git and Node.js (which comes with NPM) installed on your computer.
</br>
</br>

```
node@v14.0.0 or higher
npm@7.0.0 or higher
git@2.17.1 or higher
```
<hr>
<h2>Bot setup  🔧</h2>
1. Lets get started by cloning Hurricano on your local machine.
</br>
</br>

```bash
# cloning the repository
$ git clone https://github.com/HurricanoBot/Hurricano.git

# go into the repository
$ cd Hurricano

```
2. Now rename the config.example.json file to config.json and the required enviormental variables like bot token, ownerIds etc.
```json
{
  "token": "Your bot token",
  "mongouri": "Mongodb uri",
  "prefix": "Your prefix",
  "ownerIds": ["Owner's USER IDs", "Like this", "can be as many"],
  "statcordKey": "optional, leave empty if you don't want statcord",
  "website": {
    "enabled": false,
    "ip": "Website IP",
    "port": "Port"
  },
  "topgg": {
    "enabled": false,
    "token": "only put something here if you set top.gg api to true",
    "webhook": {
      "enabled": false,
      "webhookPassword": "top.gg vote webhook password",
      "webhookPort": 1234,
      "channelID": "vote webhook channel ID",
      "webhookIP": "vote webhook IP"
    }
  },
  "botChannels": {
    "bugReport": "...",
    "feedback": "...",
    "serverJoinChannel": "..."
  }
}
```

3. Now install all the required dependecies for the bot and run the bot.

```bash
# install the required dependencies 
$ npm install

# Run the bot
$ node .

```

<h2>Star Chart 🌟 </h2>
<a href="https://github.com/HurricanoBot/Hurricano/stargazers">
    <img src="https://starchart.cc/HurricanoBot/Hurricano.svg" alt="HurricanoBot"/>
</a>

## Project Maintainers ✨

<table>
  <tr>
    <td align="center"><a href="https://github.com/Dragonizedpizza"><img src="https://avatars.githubusercontent.com/u/70718540?v=4" width="100px;" alt=""/><br /><sub><b>Dragonizedpizza
</b></sub></a></td>
    <td align="center"><a href="https://github.com/Militia21"><img src="https://avatars.githubusercontent.com/u/70501605?v=4" width="100px;" alt=""/><br /><sub><b>Militia21</b></sub></a></td>
  </tr>
</table>

