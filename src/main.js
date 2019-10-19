var mqtt = require( 'mqtt' )
require( 'dotenv' ).config();
var server = process.env.MQTT_SERVER;
var port = process.env.MQTT_PORT;
var user = process.env.MQTT_USER;
var password = process.env.MQTT_PASSWORD;
var topic = process.env.MQTT_TOPIC;
var url = `mqtt://${user}:${password}@${server}:${port}`;
var client = mqtt.connect( url );


client.on( 'connect', function () {
  client.subscribe( topic, function ( err ) {
    if ( err ) {
      console.log( `Error while trying to subscribe ${url}\nError: ${err.message}` )
    }
  } )
} )


client.on( 'message', function ( topic, message ) {
  // aqui estarão as mensagens do servidor.
  // implemente sua lógica de consumo aqui.
  console.log( message.toString() )
} );
