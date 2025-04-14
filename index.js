require('dotenv').config(); // Load environment variables from .env
const { Telegraf } = require('telegraf');
const axios = require('axios');

// Use the token from .env file
const bot = new Telegraf(process.env.BOT_TOKEN);

// 🔹 Aapke Telegram Channels (Channel IDs)
const channel1 = '-1002494596204'; // desi earning
const channel2 = '-1002262588651'; // prediction tool
const channel3 = '-1002382031113'; // wingo prediction

// 🔹 Start Command
bot.start(async (ctx) => {
   await ctx.replyWithPhoto(
        'https://t.me/Only_4_photos/4',
        {
            caption: "👋 ᴡᴇʟᴄᴏᴍᴇ! ᴊᴏɪɴ ᴀʟʟ ᴄʜᴀɴɴᴇʟꜱ ᴀɴᴅ ᴄʟɪᴄᴋ ᴠᴇʀɪꜰʏ.",
            reply_markup: {
                inline_keyboard: [
                    [
                        { text: "📢 𝗝𝗢𝗜𝗡 𝗖𝗛𝗔𝗡𝗡𝗘𝗟 𝟭", url: "https://t.me/+KsAa0h2iRmw3YjI1" },
                        { text: "📢 𝗝𝗢𝗜𝗡 𝗖𝗛𝗔𝗡𝗡𝗘𝗟 𝟮", url: "https://t.me/+gpt7bMQia4kyMzJl" }
                    ],
                    [
                        { text: "📢 𝗝𝗢𝗜𝗡 𝗖𝗛𝗔𝗡𝗡𝗘𝗟 𝟯", url: "https://t.me/+6PJfm3k9NThmOThl" }
                    ],

                    [
                        { text: "✅ 𝗩𝗘𝗥𝗜𝗙𝗬", callback_data: "verify" }
                    ]
                ]
            }
        }
    );
});

// 🔹 Verification Button
bot.action('verify', async (ctx) => {
    const userId = ctx.from.id;

    try {
        const res1 = await ctx.telegram.getChatMember(channel1, userId);
        const isMember1 = ['member', 'administrator', 'creator', 'restricted'].includes(res1.status);

        const res2 = await ctx.telegram.getChatMember(channel2, userId);
        const isMember2 = ['member', 'administrator', 'creator', 'restricted'].includes(res2.status);

        const res3 = await ctx.telegram.getChatMember(channel2, userId);
        const isMember3 = ['member', 'administrator', 'creator', 'restricted'].includes(res3.status);

        if (isMember1 && isMember2 && isMember3) {
            await ctx.replyWithPhoto(
                'https://t.me/Only_4_photos/38',
                {
                    caption: `🎉 *Congratulations, ${ctx.from.first_name}!* 🎉\n\n✅ You have successfully verified!\n\n🚀 Now, click "START PREDICTION" and start Earning! 🎮🔥`,
                    parse_mode: "Markdown",
                    reply_markup: {
                        inline_keyboard: [
                            [{ text: "START PREDICTION", web_app: { url: "https://www.desiearning19.site/" } }]
                        ]
                    }
                }
            );
        } else {
            await ctx.reply("⚠️ ʏᴏᴜ ᴍᴜꜱᴛ ᴊᴏɪɴ ᴀʟʟ ᴄʜᴀɴɴᴇʟꜱ ᴛᴏ ᴄᴏɴᴛɪɴᴜᴇ.");
        }
    } catch (error) {
        console.error("Verification Error:", error);
        await ctx.reply("⚠️ Error checking your membership. Please try again later.");
    }
});


// 🔹 Bot Launch
bot.launch();
console.log("🤖 Bot is running...");
