const axios = require("axios");

exports.homeRoutes= (req,res)=>{
    //make get request to axios library
    // axios.get('http://localhost:8080/api/users')
    //     .then( function(response){
    //         res.status(200).render('index',{users : response.data});
    //     })
    //     .catch(err => res.send(err))
}

exports.add_userRoutes= (req,res)=>{
    res.render('add-user');
}

exports.update_userRoutes= (req,res)=>{
    axios.get('http://localhost:808080/api/users',{params:{id: req.query.id}})
        .then(function(userdata){
            res.render("update-user",{user : userdata.data})
        })
        .catch(err =>{
            res.send(err)
        })
}