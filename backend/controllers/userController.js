const db = require('../dataBase/dataBase');
const bcrypt = require('bcrypt');
const jsonwt = require('jsonwebtoken');


// Fetch all users from the database
exports.fetchUsers = async (req, res) => {
  db.query('SELECT * FROM user', (error, data)=>{
    if(error){
      return res.json({status : "Error", Error : "Unable to fetch users"})
        }
        return res.json({status : "success", data})
  })
};

//GET USER Dashboard
exports.fetchDetail = async(req, res)=>{

  if(req.user){
    console.log(req.user)
  try {
       db.query('SELECT * FROM user WHERE id = ? ', [req.user.id], async(err, data)=>{
         if(err){
           return res.json({status : "Error", "Error" : ' Error while retrieving  Data'})
         }
           return res.json({status : "success", data})   
       })
     } catch (error) {
       console.log(error)
     }
  }else{
   res.send("go login")
  }
 }

//GET USER Dashboard
exports.dashboard = async(req, res)=>{

  if(req.user){
    console.log(req.user.id)
  try {
       db.query('SELECT * FROM user WHERE id = ? ', [req.user.id], async(err, data)=>{
         if(err){
           return res.json({status : "Error", "Error" : ' Error while retrieving  Data'})
         }
           // return res.json({status : "success", data})    
        //  console.log(data);
           return res.json({status : "success", data})   
       })
     } catch (error) {
       console.log(error)
     }
  }else{
  //  res.send("go login")
   return res.json({status : "error", "Error" : 'go login'})
  }
 }

  //Register user
  exports.signup = async(req, res) => {
    
    const firstname = req.body.firstname;
    const lastname = req.body.lastname;
    const gender = req.body.gender;
    const email = req.body.email;
   // const course = req.body.course;
    const pwd = req.body.pwd;
    const confirmpwd = req.body.confirmpwd; 
    console.log(req.body);
    
     if( !firstname || !lastname || !gender || !email || !pwd || !confirmpwd ){  
      return res.send( { status: "Error", Error : "Fill in all the empty fields"} )
     }
      if(pwd !== confirmpwd){
      return res.send( { status: "Error", Error : "Passwords must be a match "} )
     }
     const hashedpwd = await  bcrypt.hashSync("pwd", 8);
     console.log(hashedpwd);
     
     //Querying db check if email exists
      db.query('SELECT * FROM `user` WHERE email = ? ', [email], (error,  Edata) =>{
        if(error){
          return res.send( { status: "Error", Error : "Registration failed please try again later or contact support!"} )
        }
        if(Edata.length > 0){
          return res.send( { status: "Error", Error : "User already exist"} )
        }else{
            //storing user data in db
            db.query('INSERT INTO user SET firstname = ?, lastname = ?,  gender = ?, email = ?,   password = ? ', [ firstname,lastname, gender, email, hashedpwd ], (err, data)=>{
              if(!err){
                //console.log(data)
                return res.send( { status: "Success"} )
              
              }else{
                return res.send( { status: "Error", Error : "User can not be registered at this time, try again later"} )
              }
            })
        }
      })
    };





// //Sign In user
exports.signin = async (req, res) => {

  const { Email, Password } = req.body;
  console.log(req.body)
  if(!Email || !Password){
    return res.json({status : "Error", Error : "Enter your Email and Password "})
   }
   db.query('SELECT * FROM user WHERE email = ?', [Email], async(error, data) =>{
     if(error){
       return res.json({status : "Error", Error : "error! Unable to your retrieve information."})
     }
     if(!data.length ){
       return res.json({status : "Error", Error : "Email or Password incorrect"})
     }
   

    //comparing Hashed password with inputted passowrd
     const Confirmpwd  = await bcrypt.compareSync("pwd", data[0].password);
        if( !Confirmpwd )
        {
      return res.json({status : "Error", Error : "Email or Password incorrect"})
        }else{
         const id = data[0].id;
       console.log(id)
         const token = jsonwt.sign({ id }, process.env.JSONWT_SECRET, { expiresIn: process.env.JSONWT_EXPIRESIN });
         const cookieOptions = {
         expires: new Date( Date.now() + 4 * 24 * 60 * 60 * 1000),
         httpOnly : true
         }

         res.cookie("jsonwt", token, cookieOptions);

        // console.log(req.cookies.jsonwt); 
         req.role = data[0].role;
         return res.json({ status: "Success", data, role: req.role });
           }
        })
    }






// Modify User details
// Handle images
const multer = require('multer');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads');
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname + '-' + Date.now() + '.' + file.originalname.split('.').pop());
  }
});

const upload = multer({ storage }).single('postimage');

exports.modifyUser = async (req, res) => {
  upload(req, res, function (err) {
    if (err instanceof multer.MulterError) {
      // A Multer error occurred when uploading
      return res.json({ status: 'Error', error: err.message });
    } else if (err) {
      // An unknown error occurred when uploading
      return res.json({ status: 'Error', error: 'Unknown error occurred' });
    }

    // No errors occurred during upload
    const { id } = req.params;
    const postimage = req.file.filename; // Get the filename of the uploaded image
    console.log('User ID:', id);
    console.log('Uploaded Image:', postimage);

    db.query("UPDATE user SET profilepic = ? WHERE id = ?", [postimage, id], (error, result) => {
      if (error) {
        return res.json({ status: 'Error', error: 'Unable to modify user details' });
      } else {
        return res.json({ status: 'Success', result });
      }
    });
  });
};









  // Post Comment Section
  exports.comment = async (req, res) => {
    const { postId } = req.params;
    const { comment } = req.body; 
    console.log(postId)
    console.log(comment)
  
    const query = "INSERT INTO comment  (	post_id, body) VALUES (?, ?)";
    db.query(query, [postId,comment ], (err, result) => {
      if (err) {
        console.error("Database error:", err);
        return res.status(500).send({ error: 'Failed to add comment' });
      }
      console.log("Comment added successfully:", result);
      res.status(201).send({ status: "Success",  message: 'Comment added successfully' });
    });
  };






// // Sign out user
exports.signout = async (req, res) => {
  res.clearCookie('jsonwt');
  return res.redirect('/');
};


exports.deleteUser = (req, res) => {
  const { id } = req.params;

  const deleteUserQuery = 'DELETE FROM user WHERE id = ?';
  db.query(deleteUserQuery, [id], (error) => {
    if (error) {
      return res.status(500).json({ status: 'Error', error: 'Unable to delete user' });
    }
    return res.status(200).json({ status: 'Success', message: 'User deleted successfully' });
  });
};





