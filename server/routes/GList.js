let express = require('express');
let router = express.Router();
let mongoose  = require('mongoose');
let List = require('../models/GList');

// get post put delete
// crud

//get route for read data from database read opt
router.get('/',async(req,res,next)=>{
    try
    {
        const grList = await List.find();
        //console.log(grList);
        res.render('Glist/list',{
            title:'List app',
            grList:grList
        })
    }
    catch(err)
    {
        console.error(err);
        res.render('GList/list',{
            error:'Error on server'
        })
    }
})

// create opt add page
router.get('/add',async(req,res,next)=>{
    try{
        res.render('Glist/add',{
            title:'Add Item'
        })
    }
    catch(err)
    {
        console.error(err);
        res.render('GList/list',{
            error:'Error on server'
        })
    }
})
// proc add page
// iList= item list
router.post('/add',async(req,res,next)=>{
    try
    {
       let newiList = List({
        "name":req.body.name,
        "category":req.body.category,
        "quantity":req.body.quantity,
        "notes":req.body.notes,
        "price":req.body.price

       });
       List.create(newiList).then(()=>{
        res.redirect('/Glist')
       })
    }
    catch(err)
    {
        console.error(err);
        res.render('GList/list',{
            error:'Error on server'
        })
    }

})
// update get route
router.get('/edit/:id',async(req,res,next)=>{
    try
    {
        const id =  req.params.id;
        const listedit = await List.findById(id);
        res.render('Glist/edit',
            {
                title: 'Edit list',
                list: listedit
            }
        )
    }
    catch(err)
    {
        console.log(err);
        next(err);
    }
})

// upadate p
router.post('/edit/:id',async(req,res,next)=>{
    try
    {
        let id =req.params.id;
        let upadatelist = List({
            "_id":id,
            "name":req.body.name,
            "category":req.body.category,
            "quantity":req.body.quantity,
            "notes":req.body.notes,
            "price":req.body.price
        })
        List.findByIdAndUpdate(id,upadatelist).then(()=>{
            res.redirect("/Glist")
        })

    }
    catch(err)
    {
        console.log(err);
        next(err);
    }

})
// delete
router.get('/delete/:id', async (req, res, next) => {
    try {
        let id = req.params.id;
        await List.deleteOne({ _id: id });
        res.redirect("/Glist");
    } catch (err) {
        console.log(err);
        next(err);
    }
    
});


module.exports = router;


