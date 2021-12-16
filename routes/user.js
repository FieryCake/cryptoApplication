var express = require('express');
var router = express.Router(); 

console.log('working')
router.get('/',(req,res)=>{
    res.send('User List')
})

router.post('/',(req,res)=>{
    res.send('I am creating a new user')
    console.log(req.body.firstName)
})
router.get('/new',(req,res)=>{
    res.send('User new form')
})

module.exports = router;
