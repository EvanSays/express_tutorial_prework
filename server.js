const express = require('express');
const app = express(); //sets up express
const path = require('path')
const data = require('./public/data.json')

const timeLogger = (request, response, next) => {
  console.log('Datetime:', new Date(Date.now()).toString());
  next();
}

const urlLogger = (request, response, next) => {
  console.log('RequestURL:', request.url);
  next()
}

app.use(urlLogger, timeLogger)

app.use(express.static(path.join(__dirname, 'public')));


app.get('/json',(request, response) => {
	response.status(200).json(data);
});

app.get('/sunsets', (request, response) => {
  response.status(200).send(`
  <img src="/images/sunset_1.jpg" alt="" />
  <img src="/images/sunset_2.jpg" alt="" />
  <img src="/images/sunset_3.jpg" alt="" />
  <img src="/images/sunset_4.jpg" alt="" />
  <img src="/images/sunset_5.jpg" alt="" />
  <img src="/images/sunset_6.jpg" alt="" />
  <img src="/images/sunset_7.jpg" alt="" />
  <img src="/images/sunset_8.jpg" alt="" />
  `)
});

app.use((request, response, next) => {
  response.status(404).send("Sorry, not found")
})

app.listen(3000, () => { // listen to connections on this port
	console.log('Express intro running on localhost:3000')
})
