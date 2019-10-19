var mqtt = require( 'mqtt' )
require( 'dotenv' ).config();

var server = process.env.MQTT_SERVER;
var port = process.env.MQTT_PORT;
var user = process.env.MQTT_USER;
var password = process.env.MQTT_PASSWORD;
var topic = process.env.MQTT_TOPIC;

const testMessage = JSON.stringify( {
  stationId: 0,
  centralId: 0,
  status: false
} );

var url = `mqtt://${user}:${password}@${server}:${port}`;
var client = mqtt.connect( url );

client.on( 'connect', function () {

  client.subscribe( topic, function ( err ) {
    if ( !err ) {
      console.log( `Sending test messages to ${url}` )
      setInterval( () => {
        client.publish( topic, testMessage )
      }, 250 );
    }
  } )
} );
