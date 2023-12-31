const express = require("express");
const app = express();
const collection = require("./mongo");
const cors = require("cors");
const company = require("./models/Company");
const college = require("./models/college");
const project = require("./models/Projects");
const initdata = require("./data/projectdata");
const itdata = require("./data/accendmics");
const accad = require("./models/academics");


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get('/',(req,res)=>{
    res.send("Welcome to home page");
});

//college sign in things

app.post("/college", async (req, res) => {
    const { Ugc_id, password ,name } = req.body;
  
    try {
      const user = await college.findOne({ Ugc_id: Ugc_id });
      const pass = await  college.findOne({ password: password });
  
      if (user && pass) {
        res.json({ status: "exist" });
      } else {
        res.json({ status: "notexist" });
      }
    } catch (e) {
      console.error(e);
      res.json({ status: "error" });
    }
  });

  //indivisual signup things
  
  app.post("/signup", async (req, res) => {
    const { email, password ,name } = req.body;
  
    try {
      // Add data validation here if needed
  
      const existingUser = await collection.findOne({ email: email });
  
      if (existingUser) {
        res.json({ status: "exist" });
      } else {
        // Use collection.create() for Mongoose
        await collection.create({ email, password ,name });
        res.json({ status: "success" });
      }
    } catch (e) {
      console.error(e);
      res.json({ status: "error" });
    }
  });

  //company signin things
  app.post("/company", async (req, res) => {
    const { Tin_no, password ,name } = req.body;
  
    try {
      const user = await company.findOne({ Tin_no: Tin_no });
      const pass = await company.findOne({ password: password });

  
      if (user && pass) {
        res.json({ status: "exist" });
      } else {
        res.json({ status: "notexist" });
      }
    } catch (e) {
      console.error(e);
      res.json({ status: "error" });
    }
  });
  
  
  //indivisual sign in
  app.post("/indivisual", async (req, res) => {
    const { email, password ,name } = req.body;
    
    try {
      const user = await collection.findOne({ email: email });
      const pass = await  collection.findOne({ password: password });
      
      if (user && pass) {
        res.json({ status: "exist" });
      } else {
        res.json({ status: "notexist" });
      }
    } catch (e) {
      console.error(e);
      res.json({ status: "error" });
    }
   
  });
  
  const initDB = async() =>{
    await project.insertMany(initdata.data);
    console.log("Data transfered");
  }

initDB();

  //list projects;
  app.get("/projects" , async (req,res)=>{
   let projects =  await project.find();
   if(projects.length>0){
    res.send(projects);
   }
   else{
    res.send({result : "nothing found"});
   }
  });
//using this function i sended all data to mongodb atlas project
//also for accadmic

const itDB = async() =>{
  await accad.insertMany(itdata.data);
  console.log("Data transfered");
}

itDB();

//accad projects;
app.get("/academics" , async (req,res)=>{
 let accads =  await accad.find();
 if(accads.length>0){
  res.send(accads);
 }
 else{
  res.send({result : "nothing found"});
 }
});
  app.listen(8000, () => {
    console.log("Server is running on port 8000");
  });