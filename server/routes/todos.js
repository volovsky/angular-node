const express = require('express');
const router = express.Router();
const axios = require('axios');

const postAPI = 'https://jsonplaceholder.typicode.com';

//GET POST
router.get('/', (req, res)=> {
    //res.send('POST WORKS');
    
    axios.get(`${postAPI}/todos`).then((todos)=>{
      //console.log("posts.todos");
      console.log("TODO");
      // res.send(posts.data);
      res.status(200).json(todos.data);
    })
    .catch(error => {
         console.log("TODO");
        res.status(500).send(error);
    });
});



module.exports = router;