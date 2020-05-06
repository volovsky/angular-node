const express = require('express');
const router = express.Router();
const axios = require('axios'); 

//const db = require("../db");

const postsAPI = 'https://jsonplaceholder.typicode.com';

//GET POST
router.get('/', (req, res, next)=> {
    //res.send('POST WORKS');
    axios.get('https://jsonplaceholder.typicode.com/posts').then((response)=>{
      console.log("There are posts");
      //res.send(response.data);
      res.status(200).json(response.data);
      //res.status(200).send("MICMIC");
    })
    .catch(error => {
        console.log("No posts");
        res.status(500).send(error);
    });
});

/*router.get('/', (req, res, next) => {
  res.status(200).json({name: 'Michael'});

  //res.status(200).send("MICMIC");
});*/


module.exports = router;