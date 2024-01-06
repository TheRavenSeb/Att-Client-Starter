//for info on documentation see: https://github.com/mdingena/att-client/tree/docs
//other examples can be found at: https://github.com/mdingena/att-client/tree/main/examples

const { Client } = require('att-client'); //main att client 
const { myUserConfig } = require('./config'); // Uncomment if the config for bot is alta bot token 
//const { myBotConfig } = require('./config'); // Uncomment if the config for bot is alta user credentials 

// create a client object using config
//const bot = new Client(myBotConfig) //uncomment if using bot credentials
const bot = new Client(myUserConfig) // uncomment if useing user credentials 

let server_id = 0; //insert server id for the server 

// make an async function for the bot
async function main() {
  await bot.start() //starts the bot

  bot.on('ready', async () => {
    try {
      console.log(`bot starting on ${server_id}`)
      //const connection = await bot.openServerConnection(server_id); //opens a connection to the server if usign user credentials

    } catch (error) { console.error(error) }
  });
  bot.on('connect', connection => {
    console.log(`Console connection established to ${connection.server.name}.`);
    // Will log every time Client connect to a game server.
  });
  /*// wanna send a command remove the multi line comment to try it out 
  await connection.send('player list', resp =>{
  var result = resp.data.Result;
  console.log(result);
  });
  */


}
main()