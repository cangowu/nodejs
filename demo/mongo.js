var mongoose = require('mongoose');
var db = mongoose.connect('mongodb://localhost/test');//���������ݿ�
var Schema = mongoose.Schema;   //  ����ģ��
var userScheMa = new Schema({
	name: String,
	password: String
}); //  ������һ���µ�ģ�ͣ����Ǵ�ģʽ��δ��users�����й���

 var p = mongoose.model('Users', userScheMa);
var user = db.model('Users', userScheMa); //  ��users���Ϲ���

user.find(function(err,docs){  
             console.log(docs);  
      }); 
	  
	  user.remove({_id:'5661c1e2e4b9f62d244f173b'},function(err,docs){  
           console.log(docs);  
      });