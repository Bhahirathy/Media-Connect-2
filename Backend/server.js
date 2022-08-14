const express= require("express");
const mongoose= require("mongoose");
const multer= require("multer");
const cors= require("cors");
const postModel=require("./model");
const app= express()
app.listen(process.env.PORT || 3001,(err)=>{
    if(!err){
        console.log("port connected in 3001");
    }else{
        console.log(err);
    }
})
mongoose.connect("mongodb+srv://Rathy:Rathy@insta.aryyz.mongodb.net/instaclone?retryWrites=true&w=majority",(data)=>{
    console.log("Db connected"),(err)=>{
        console.log(err);
    }
})
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(express.static("./image"))
const postInfo={}
const storage=multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,"./image")
    
},
filename:function(req,file,cb){
    postInfo.path=file.originalname
    const dateInfo=Date().split(" ")
    const date=dateInfo[2]+" "+dateInfo[1]+" "+dateInfo[3]
    postInfo.date=date
    cb(null,file.originalname)
}
})
const upload=multer({storage:storage})
app.post("/upload",upload.single("file"),async(req,res)=>{
    const data=new postModel({
        author:req.body.author,
        location:req.body.location,
        description:req.body.desc,
        path:postInfo.path,
        date:postInfo.date,
    })
    const result=await data.save()
    console.log(result);
})
app.get("/post",(req,res)=>{
    postModel.find().sort({"_id":-1}).then((data)=>{
        res.status(200).send(data)
    })
})
