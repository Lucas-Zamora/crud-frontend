const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();


router.get('/cadastro',function(req,res){
  res.sendFile(path.join(__dirname+'/views/formulario.html'));
});

router.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/views/index.html'));
});

//add the router
app.use('/', router);
app.use(express.static('public'))
app.listen(process.env.port || 3000);

console.log('Rodando na porta: 3000');
