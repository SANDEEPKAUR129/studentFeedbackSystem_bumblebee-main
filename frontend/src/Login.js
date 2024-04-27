import { useState, useEffect } from "react";
import axios from './axiosAPI/axios.API';
import { Link, useNavigate } from 'react-router-dom';




 
const Login = () => {
    axios.defaults.withCredentials = true;
    const [error,  setError] = useState([])
    const [Email, setEmail] = useState('');
    const [Password, setPassword] = useState('');
    const navigate = useNavigate();

const HandleSubmit = (e)=>{
    
    e.preventDefault();
    const data = { Email, Password};

axios.post('/signin', data)
.then((res)=> {
    if(res.data.status === "Success"){
         navigate('/dashboard')
    }else{
         setError(res.data.Error)
    }

  })
  .catch((err)=> console.log(err));
}

    return ( 
        <div className="beebody" 
        
        style={{
            maxWidth: "500px",
            minHeight: "450px",
            margin: "80px auto",
            padding: "100px 40px 30px 30px",
            backgroundColor: "#dbe9f4",
            borderRadius: "15px",
            boxShadow: "13px 13px 20px #cbced1, -13px -13px 20px #fff"
          }}
          
        >
        <p className="text-danger">{error && error}</p>
        <div className="text-center mt-4 beehead">
            Bumblebee
        </div>
        <form className="p-3 mt-3" onSubmit={HandleSubmit}>

            <div className="form-field d-flex align-items-center">
                <input 
                type="text"
                name="email" 
                placeholder="email"
                // value = {email}
                onChange={(e)=> setEmail(e.target.value)}
                />
            </div>

            <div className="form-field d-flex align-items-center">
                <input 
                type="password"
                name="password"
                placeholder="Password"
                // value = {password}
                onChange = {(e) => setPassword(e.target.value)}
                />
            </div>
            <button className="btn beebtn" >Sign In</button>
        </form>
        <div className="text-center fs-6">
            <span>Dont have any account?</span> <br/>
            <Link to='/register'>Register Here</Link>
        </div>
     
    </div>
     );
}
 
export default Login;