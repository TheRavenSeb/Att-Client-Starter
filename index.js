//For info on documentation see: https://github.com/mdingena/att-client/tree/docs
//Other examples can be found at: https://github.com/mdingena/att-client/tree/main/examples



const { Client } = require('att-client'); //main att client 

//TODO - Review these files for more information on how to get started
// Install the recogmended extensions for better documentation(Ctrl+Shift+X -> Extensions: Install Extensions -> Search for Better Comments & Comment Anchors -> Install)
// LINK GettingStarted.md
// LINK ReadMe.md


//const { myUserConfig } = require('./config'); // Uncomment if the config for bot is alta bot token 
//const { myBotConfig } = require('./config'); // Uncomment if the config for bot is alta user credentials 

// create a client object using config
//const bot = new Client(myBotConfig) //uncomment if using bot credentials

const bot = new Client(myUserConfig) // uncomment if useing user credentials 
const connections=[]; //array to store connections to servers to access outside of the connect event stream
//--------------------------------------------------------------------------------

let server_id = 0; //insert server id for the server (only if using user credentials)

// This main function is where we will run the bot from
async function main() {
  await bot.start() //starts the bot

  bot.on('ready', async () => {// this is and event stream 
    try {
      console.log(`bot starting on ${server_id}`)
      //const connection = await bot.openServerConnection(server_id); //opens a connection to the server if usign user credentials

    } catch (error) { console.error(error) }
  });
  bot.on('connect', connection => { // this event stream will call when the bot connects to the server
    console.log(`Console connection established to ${connection.server.name}.`);
    // Will log every time Client connect to a game server.
    connections.push(connection);//pushes the connection to the connections array to access outside of the event stream

    //! Example of subscribing to a server event stream

    connection.subscribe('PlayerJoined', (event) => {
      console.log(`Player ${event.data.user.username} (${event.data.user.id}) joined the server.`); //logs when a player joins the server
    }
    // LINK subscriptionreturns.txt
    // for more information on the event stream
    );

    


  });

  //command example 

  var connection = connections.find(connection => connection.server.id === server_id); //finds the connection to the server with the id of server_id 
  // Not important for if using user credentials just use the connect stream to access the connection ^^^

  // Send a command to send a message to att
     // all commands admins can send bots can too!!

  connection.send('player message * "This message was sent by the bot!"')

  // Examples of getting data from the server 


  // Get the player list
  connection.send('player list').then(response => {
    const players = response.data.Result;

    //cycle through the players and log their names
    for(var i = 0; i < players.length; i++){
      console.log(players[i].Username)
    }
  });



  
  


}
main()
//NOTE - to run the file use node index.js in the terminal