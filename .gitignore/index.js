const Discord = require('discord.js')
const bot = new Discord.Client()
const ytdl = require('ytdl-core');
var prefix = '!'
var botGame = 'HistoryRP | !help'
var vol = 1;
var streamOptions = { seek: 0, volume: vol };
var abcd = ["a", "b", "c", "d", "e", ,"f" ,"g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

bot.on('ready', function () {
	bot.user.setActivity(botGame)
	bot.user.setStatus('online')
	bot.user.setAvatar('./logo.png')
	console.log('Je suis prêt ^^')
	bot.user.setStatus("online");
})
bot.on('guildMemberAdd', function (member) {
	member.addRole('456233901736591371')
})
bot.on('message', async message =>{
if (message.channel.type === 'dm') {
	if (message.author.bot) return;
	message.channel.send(':x: Error: **Je ne peux pas répondre correctement à vos messages, je suis un bot tout de même !** \nhttps://www.tenor.co/GAaY.gif')
}

if (message.content === prefix + 'help') {
	let color = '#87E110'
	message.channel.send(`Vous avez reçu l'aide en privé ${message.author}`)
	let p = new Discord.RichEmbed()
	.setTitle('~HELP~')
	.setDescription('!rp Pour voir les règles rp !')
	.setColor(color)
	let h = new Discord.RichEmbed()
	.setTitle('~HELP RP~')
	.setDescription("Voici l'aide rp")
	.setColor(color)
	.addField('Pas encore fait')
	let ah = new Discord.RichEmbed()
	.setTitle('~HELP ADMIN~')
	.setDescription("Voici l'aide des admins")
	.setColor(color)
	.addField('!mute <pseudo>', 'Muter un utilisateur.')
	.addField('!unmute <pseudo>', 'Unmuter un utilisateur.')
	.addField('!kick <pseudo> <raison>', 'Kick un utilisateur.')
	.addField('!ban <pseudo> <raison>', 'Ban un utilisateur.')
	message.author.send(p)
	message.author.send(h)
	if (!message.member.hasPermission('MANAGE_MESSAGES')) return;
	message.author.send(ah)
}
if (message.content === prefix + 'rp') {
	message.author.send("**__Règlement :__**\n \nPréambule :\n\nCe règlement devra être __lu et accepté__ par tous les membres (actifs ou non) du serveur Discord **HistoryRP**. Si vous n’acceptez pas le règlement, vous serez contraint de partir car le règlement est **obligatoire**.\n\n1.    **__Le règlement principal__**\n```\na.    Les grossièretés sont interdites, vous risquerez d’encourir un mute d’un jour.\nb.    Les contenus à caractères pornographiques/pédopornographiques/screamers ou autres ne sont pas autorisés. Vous risquez d’encourir au minimum un mute de 5 heures jusqu’à un warn.\nc.    Nous vous demandons d’écrire dans un français correct, surtout dans les scènes RP, veuillez ne pas utiliser un langage « SMS » merci.\nd.    La provocation est également interdite, si vous provoquez un membre vous risquerez d’être mute pendant un jour puis si récidive d’être mute pendant sept jours.\ne.    La pub est strictement interdite. Si vous venez sur le serveur pour faire une pub, votre message sera supprimé automatiquement ! Si on remarque dans les logs que vous avez fait une pub, nous vous bannirons du serveur définitivement.\nf.    Le spam est interdit, vous recevrez un warn si vous spammez de trop !\n```\n2.    La syntaxe à utiliser pour le RP :\n```\nNormal : Dialogue\nItalique : Pensée (*TEXT*)\nGras : Action (**TEXT**)\nGras-Italique : Narration (***TEXT***)\n```\n\nMerci d’avoir pris le temps d’avoir lu le règlement du serveur. \n\n-------------------------------------------------------------------------------------------------\n\n**__Contexte du RP :__**\n\nL'histoire commence en 2022, la crise économique est toujours présente. Le début d'une 2eme guerre froide approche, les tensions sont fortement élèvées. l'Union Européenne va mal, de plus en plus de pays veulent suivre le même chemin qu'a pris le Royaume Uni.\n\nPendant ce temps là vous, vous essayerez d'obtenir le pouvoir de votre pays natal, vous allez peut-être enfin pouvoir réaliser votre rêve, celui de devenir le dirigeant de votre propre pays !")
	message.channel.send('Regardez vos mp !')
}
if(message.content.startsWith(prefix + 'clear')) {
	let args = message.content.split(' ')
    const deleteCount = parseInt(args[1], 10);
    if(!deleteCount || deleteCount < 2 || deleteCount > 100)
      return message.reply("Le nombre de message à suprimmer doit être compris entre 2 et 100.");
    const fetched = await message.channel.fetchMessages({limit: deleteCount});
    message.channel.bulkDelete(fetched)
      .catch(error => message.reply(`Couldn't delete messages because of: ${error}`));
  }
});
bot.on("message", async message => {
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;


  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);

  if(cmd === (prefix + 'kick')){


    let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!kUser) return message.channel.send("Utilisateur non trouvé.");
    let kReason = args.join(" ").slice(22);
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Je ne peux pas faire ça!");
    if(kUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Cette personne ne peut être kické!")
    let kickEmbed = new Discord.RichEmbed()
    .setDescription("~Kick~")
    .setColor("#e74c3c")
    .addField("Utilisateur kické", `${kUser} with ID ${kUser.id}`)
    .addField("Kické par", `<@${message.author.id}> with ID ${message.author.id}`)
    .addField("Kické dans", message.channel)
    .addField("Jour du kick", message.createdAt)
    .addField("Raison", kReason);

    message.guild.member(kUser).kick(kReason);
    message.channel.send(kickEmbed);

    return;
  }

  if(cmd === (prefix + 'ban')){

    let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!bUser) return message.channel.send("Utilisateur non trouvé.");
    let bReason = args.join(" ").slice(22);
    if(!message.member.hasPermission("MANAGE_MEMBERS")) return message.channel.send("Je ne peux pas faire ça!");
    if(bUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Cette personne ne peut être kické!");

    let banEmbed = new Discord.RichEmbed()
    .setDescription("~Ban~")
    .setColor("#e74c3c")
    .addField("Utilisateur banni", `${bUser} with ID ${bUser.id}`)
    .addField("Banni par", `<@${message.author.id}> with ID ${message.author.id}`)
    .addField("Banni dans", message.channel)
    .addField("Jour du ban", message.createdAt)
    .addField("Raison", bReason);

    message.guild.member(bUser).ban(bReason);
    message.channel.send(banEmbed);


    return;
  }
if(cmd === prefix + "mute"){

    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Vous n'avez pas les droits pour muter un utilisateur !");

    let toMute = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
    if(!toMute) return message.channel.send("Merci d'entrer un utilisateur !");
    let role = message.guild.roles.find(r => r.name === "Muted");
    if(!role){
      try {
        role = await message.guild.createRole({
          name: "Muted",
          color:"#000000",
          permissions:[]
        });

        message.guild.channels.forEach(async (channel, id) => {
          await channel.overwritePermissions(role, {
            SEND_MESSAGES: false,
            ADD_REACTIONS: false
          });
        });
      } catch (e) {
        console.log(e.stack)
      }
    }

    if(toMute.roles.has(role.id)) return message.channel.send('Cet utilisateur est déjà muté !');

    await(toMute.addRole(role));
    message.channel.send(`${toMute} est désomais muté !`);

    return;
  }
  if (cmd === prefix + 'unmute') {
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Vous n'avez pas les droits pour unmuter un utilisateur !");
let toMute = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
if(!toMute) return message.channel.send("Merci d'entrer un utilisateur !");
let role = message.guild.roles.find(r => r.name === "Muted");
if (!toMute.roles.has(role.id)) return message.channel.send("Cette personne n'est pas mute !")
  toMute.removeRole(role.id)
message.channel.send(`${toMute} est désomais unmté !`)
  }
});
bot.on('message', message => {
  if (message.content.startsWith(prefix + 'play')) {
    if (message.member.voiceChannel) {
    	let args = message.content.split(' ')
    	const voiceChannel = message.member.voiceChannel
    	const connection = message.member.voiceChannel.join();
      	const ytdl = require('ytdl-core');
		voiceChannel.join()
  		.then(connection => {
   		const stream = ytdl(args[1], { filter : 'audioonly' });
    	const dispatcher = connection.playStream(stream, streamOptions);
    	message.channel.send("J'ai lancer votre vidéo " + message.author + " !")
  })
  .catch(console.error);
    } else {
      message.reply('Vous devez être dans un channel vocal !');
    }
  }
  if (message.content === prefix + 'leave') {
  	if (message.member.voiceChannel) {
      const connection = message.member.voiceChannel.leave();
      message.reply(" j'ai quitté le channel !")
    }else {
    	message.reply('Vous devez être dans un channel vocal !');
    }}
    if (message.content.startsWith(prefix + 'volume')) {
    	let args = message.content.split(' ')
    	if (args[1].indexOf(abcd) !== -1) {
    		message.channel.send('Le volume est réglable de **1** à **100** !')
    	} else {
    		if (args[1] >= 1) {
    			if (args[1] <= 100) {
    			vol = args[1]
    		message.channel.send(`J'ai mis le volume sur **${vol}** !`)
    	} else {
    		message.channel.send('Le volume est trop **fort** ! (1 à 100)')
    	}
    } else {
    	message.channel.send("Le volume n'est **pas asser fort** ! (1 à 100)")
    }	
    	}
    }
})
bot.login(process.env.TOKEN)
