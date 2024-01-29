require('dotenv').config();

const env = process.env;

module.exports = {
    "token": env.BOT_TOKEN,
    "clientId": env.APP_ID,
    "guildId": env.GUILD_ID,
    "prefix": env.PREFIX
};