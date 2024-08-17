module.exports = require('amqplib').connect({
    protocol: 'amqp',
    hostname: 'amqp://localhost:5672',
    port: '5672',
    frameMax: 0,
    heartbeat: 0,
    vhost: '/',
})