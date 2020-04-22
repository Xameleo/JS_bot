const Discord = require("discord.js");
const fs = require('fs');
const client = new Discord.Client();
const Prefix ="!";

client.commands = new Discord.Collection();
fs.readdir('./commands', (err, files)=> 
{ 
	if (err) {console.log(err);}

	let jsfile = files.filter(f => f.split('.').pop() === 'js');
	if (jsfile.length <=0 ) {return console.log('eror commands not found')}

	console.log(`Loaded ${jsfile.length} commands`);
	jsfile.forEach((f,i) => {
	  let props = require(`./commands/${f}`);
	  client.commands.set(props.help.name, props);
		
	});

});
client.on('message', async message => {
    let prefix = config.prefix
    let messageArray = message.content.split(' ') // разделение пробелами
    let command = messageArray[0] // команда после префикса
    let args = messageArray.slice(1) // аргументы после команды

    let command_file = client.commands.get(command.slice(prefix.length)) // получение команды из коллекции
    if (command_file) command_file.run(client, message, args)

    await exp(message.author)
})
client.login("NjY5MTk4MDYyOTE2NDY4NzQ3.XicVUw.-dDHTROqBqJFDBBcYo9yc6BrPqY");
client.on("ready", ()=> {
    console.log( 'bot online');
   // client.user.setPresence({status: "Jopa",game:{ "TOXIC",type:0}});
});
client.on("message", async(message) => { //В случае если бот заметит новое сообщение (message)..
	let ans=false;
if(message.content == Prefix+"hello"){ //Он проверит если его контент (content) равняется фразе "!privet"
message.reply("Привет! :wave:"); 
}
if(message.content == Prefix+"q"+" ты пидор?"){
		message.reply("Сам ты пидор!!!");
		//break;
		ans=true;
		//continue;
	}
if(message.content.startsWith(Prefix+"q")&&ans==false){ 
	
	answer=["yes","no"];
	message.channel.send(answer[Math.floor(Math.random()*answer.length)]);
} 
ans=false;
}); //Закрытие события
