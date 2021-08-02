"use strict";

const UserStorage=require("./UserStorage");

class User{
    constructor(body){
        this.body=body;
    }

    async login(){
        const client=this.body;
        try{
            if(client.id==="")
                return {success: false, msg: "please enter ID."};
            else if(client.id==="")
                return {success: false, msg: "please enter password"};

            const user=await UserStorage.getUserInfo(client.id);
            if(user){
                if(user.id===client.id&&user.password===client.password){
                    res.cookie("client", user.id, 
                    {expires: new Date(Date.now() + 450000), httpOnly: true});
                    return {success: true};
                }
                return {success: false, msg: "wrong password."};
            }
            return {success: false, msg: "ID does not exist."};
        }catch(err){
            return {success: false, msg: err}
        }
    }

    async register(){
        const client=this.body;
        try{
            const response=await UserStorage.save(client);
            return response;
        }catch(err){
            return {success: false, msg: err};
        }
    }
}
 
module.exports=User;
