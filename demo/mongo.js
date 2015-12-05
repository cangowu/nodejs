var mongoose = require('mongoose');
var db = mongoose.connect('mongodb://localhost/test');//；连接数据库
var Schema = mongoose.Schema;   //  创建模型
var userScheMa = new Schema({
	name: String,
	password: String
}); //  定义了一个新的模型，但是此模式还未和users集合有关联

 var p = mongoose.model('Users', userScheMa);
var user = db.model('Users', userScheMa); //  与users集合关联

user.find(function(err,docs){  
             console.log(docs);  
      }); 
	  
	  user.remove({_id:'5661c1e2e4b9f62d244f173b'},function(err,docs){  
           console.log(docs);  
      });