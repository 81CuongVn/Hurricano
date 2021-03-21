const Discord = require("discord.js");
const { readdirSync } = require("fs");
const ascii = require("ascii-table");
let table = new ascii("Commands");
table.setHeading("Command File", "Command Name", "Load status");
const fs = require("fs");
const { Player } = require("discord-player");
const giveawaysManager = require("./utilities/giveaway");

/**
 * Extend Client class
 * @extends Discord.Client
 */
class Client extends Discord.Client {
  /**
   * Create a new client
   * @param {Object} config
   * @param {ClientOptions} options
   */
  constructor(config, options = {}) {
    super(options);

    /**
     * Add Credentials
     */
    this.config = config;

    this.token = config.token;

    /**
     * Commands
     */
    this.commands = new Discord.Collection();

    /**
     * Aliases
     */
    this.aliases = new Discord.Collection();

    /**
     * Mongo Database
     * @type {Object}
     */
    this.db = require("./handlers/db.js");
    /**
     * Logger
     */
    this.logger = require('./utilities/logger.js')
    /**
     * Import Schemas
     */
    this.schemas = {
      guild: require("./schemas/guild"),
    };

    /**
     * Cooldowns
     */
    this.cooldowns = new Discord.Collection();

    /**
     * Giveaways Manager
     */
    this.giveawaysManager = new giveawaysManager(this, {
      updateCountdownEvery: 5 * 1000,
      default: {
        botsCanWin: false,
        exemptPermissions: [],
        embedColor: "#034ea2",
        reaction: "🎉",
      },
    });

    /**
     * E m o j i s
     * @type {Object}
     */
    this._emojis = require("./utilities/emojis.json");

    /**
     * Music
     */
    this.player = new Player(this);

    /**
     * Filters for Moosik
     */
    this.filters = [
      "8D",
      "gate",
      "haas",
      "phaser",
      "treble",
      "tremolo",
      "vibrato",
      "reverse",
      "karaoke",
      "flanger",
      "mcompand",
      "pulsator",
      "subboost",
      "bassboost",
      "vaporwave",
      "nightcore",
      "normalizer",
      "surrounding",
    ];
  }

  // ---------------------------------------------------   Functions    -------------------------------------------------------------
  loadEvents() {
    // BOT EVENTS
    const botevents = fs
      .readdirSync("./bot/events/bot")
      .filter((file) => file.endsWith(".js"));
    for (const file of botevents) {
      const event = require(`./events/bot/${file}`);
      if (event.once) {
        this.once(event.name, (...args) => event.run(...args, this));
      } else {
        this.on(event.name, (...args) => event.run(...args, this));
      }
    }
    // MUSIC EVENTS
    const musicevents = fs
      .readdirSync("./bot/events/music")
      .filter((file) => file.endsWith(".js"));
    for (const file of musicevents) {
      const event = require(`./events/music/${file}`);
      this.player.on(event.name, (...args) => event.run(...args, this));
    }
    // GIVEAWAYS EVENTS
    const giveawaysevents = fs
      .readdirSync("./bot/events/giveaways")
      .filter((file) => file.endsWith(".js"));
    for (const file of giveawaysevents) {
      const event = require(`./events/giveaways/${file}`);
      this.giveawaysManager.on(event.name, (...args) =>
        event.run(...args, this)
      );
    }
  }
  loadStructures() {
    const structures = fs
      .readdirSync("./bot/structures")
      .filter((file) => file.endsWith(".js"));

    for (const file of structures) {
      require("./structures/" + file);
    }
  }

  loadCommands() {
    readdirSync("./bot/commands").forEach((dir) => {
      const commands = readdirSync(`./bot/commands/${dir}/`).filter((file) =>
        file.endsWith(".js")
      );
      for (let file of commands) {
        let pull = require(`./commands/${dir}/${file}`);
        if (pull.name) {
          this.commands.set(pull.name, pull);
          table.addRow(file, pull.name, "Loaded!");
        } else {
          table.addRow(
            file,
            pull.name,
            "Not Loaded -> Missing a help.name, or help.name is not a string."
          );
          continue;
        }
        if (pull.aliases && Array.isArray(pull.aliases))
          pull.aliases.forEach((alias) => this.aliases.set(alias, pull.name));
      }
    });
    console.log(table.toString());
  }
  loadTopgg() {
    if (this.config.topggapi && typeof this.config.topggapi === "boolean") {
      let DBL = require("dblapi.js");
      let dbl = new DBL(this.config.toptoken, this);
      super.on("ready", () => {
        setInterval(() => {
          dbl.postStats(this.guilds.cache.size);
        }, 900000);
      });
    }
  }
}
module.exports = Client;
