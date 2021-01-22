const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const { TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN, MY_NUMBER} = require('./config/keys')

const client = require('twilio')(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN);


const PORT = process.env.PORT || 5000

const app = express()


app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(cors())

if(process.env.NODE_ENV == 'production') {
    app.use(express.static('client/build'))
    const path = require('path')
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })
}

let message

app.post('/', (req, res) => {
    message = req.body.message

    client.messages.create({
        from: 'whatsapp:+14155238886',
        to: 'whatsapp:' + MY_NUMBER,
        body: message
    }).then(message => console.log(message.sid))
    .catch(e => console.log(e))
    
    res.send('message sent')
})

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`)
})
