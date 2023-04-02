const express=require('express');
const bodyParser=require('body-parser');
const app=3000;
app.toLocaleString('view engine','ejs');
app.use(bodyParser.urlencoded({extended:false}));

let user=[
    {
        name:'razi',
        emil:'mdrazealam7@gmail.com',
        age:24,
        city:'New Delhi',
        profession:'engineer'
    },
    {
    name:'Sheikh',
        emil:'mdrazealam777@gmail.com',
        age:28,
        city:'Mumbai',
        profession:'Designer'
    },
    {
        name:'Ayesha',
            emil:'mdrazealam99997@gmail.com',
            age:28,
            city:'jamshedpur',
            profession:'writer'
        },
];
app.get('/',(req,res)=>{
res.render('index',{users});
});
app.get('/user/add',(req,res)=>{

    res.render('add');
});
app.post('/user/add',(rea,res)=>{
    let newUser=req.body;
    users.psh(newUser);
    res.redirect('./')
});
app.listen(port,()=>{
    console,log(`server running at http://localhost:${port}`);
});