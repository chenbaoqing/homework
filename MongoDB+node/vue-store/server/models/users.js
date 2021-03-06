var mongoose = require('./db');
var UserSchema = new mongoose.Schema({
    userId:String,
    userName:String,
    userPwd:String,
    orderList:Array,
    cartList:[
        {
            productImage:String,
            salePrice:Number,
            productName:String,
            productId:String,
            productNum:Number,
            checked:{
                type:Boolean,
                default:true
            }
        }
    ],
    addressList:Array
})
var Users =  mongoose.model('Users',UserSchema,'users');
module.exports = Users;