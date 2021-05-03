const { MessageEmbed } = require('discord.js')
const suggestionSchema = require('../../schemas/guild.js')

const statusMessages = {
  WAITING: {
    text: '📊 Waiting for community feedback, please vote!',
    color: 0xffea00,
  },
  ACCEPTED: {
    text: '✅ Accepted idea! Will be implemented soon!',
    color: 0x34eb5b,
  },
  DENIED: {
    text:
      '❌ Thank you for the feedback, but we are not interested at the moment.',
    color: 0xc20808,
  },
}

let suggestionCache = {};

const fetchSuggestionChannels = async (guildId) => {
  let query = {}

  if (guildId) {
    query.id = guildId
  }

  const results = await suggestionSchema.find(query)

  for (const result of results) {
    const { id, channelId } = result
    suggestionCache[id] = channelId
  }
}

module.exports = (client) => {
  fetchSuggestionChannels()

  client.on('message', (message) => {
    const { guild, channel, content, member } = message

    const cachedChannelId = suggestionCache[guild.id]
    if (cachedChannelId && cachedChannelId === channel.id && !member.user.bot) {
      message.delete()

      const status = statusMessages.WAITING

      const embed = new MessageEmbed()
        .setColor(status.color)
        .setAuthor(member.displayName, member.user.displayAvatarURL())
        .setDescription(content)
        .addFields({
          name: 'Status',
          value: status.text,
        })
        .setFooter('Want to suggest something? Simply type it in this channel')

      channel.send(embed).then((message) => {
        message.react('👍').then(() => {
          message.react('👎')
        })
      })
    }
  })
}

module.exports.fetchSuggestionChannels = fetchSuggestionChannels

module.exports.statusMessages = statusMessages

module.exports.suggestionCache = () => {
  return suggestionCache
}
