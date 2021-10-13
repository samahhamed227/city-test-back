'use strict'
const express = require('express');
const server = express();

require('dotenv').config();
const PORT =process.env.PORT ;
const poke =require('./assets/poke.json')


server.get('/poke', (req, res)=>{
   let pokname = poke.find(item=>{
    //   return item.city_name ;
    req.query.city_name;
    req.query.lon;
    req.query.lat;


if(item.city_name==req.query.city_name)
      {
          return item;
      }
   })
    res.send(pokname);
})
server.get('/test', (req, res)=>{
    let str ='hello ';
    res.send(str);
})
server.listen(PORT,()=>{
    console.log(`you are listeining Port = ${PORT}`);
});