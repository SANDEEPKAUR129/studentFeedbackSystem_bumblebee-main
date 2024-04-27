import { useState } from "react";
import axios from "./axiosAPI/axios.API";
import { Link } from "react-router-dom";


const Register = () => {

    axios.defaults.withCredentials = true;
    const [data, setData] = useState({
        firstname : "",
        lastname  : "",
        gender    : "",
        email     : "",
        pwd  : "",
        confirmpwd  : ""
    })
   
    const HandleSumbit = (e) =>{
        e.preventDefault();
       
        axios.post('/signup', data)
        .then(res=> {
            console.log(data)
            console.log(res.data)
        })
        .catch(err => console.log(err));
    }

    return ( 
     <div className="beebody">
        <div className="text-center mt-4 beehead">
            Bumblebee
        </div>
        <form className="p-3 mt-3" onSubmit={HandleSumbit}>
        <div className="form-field form-field2 d-flex align-items-center">
                <input 
                type="text"
                name="firstname"
                placeholder="firstname"
                onChange = {(e)=> setData({...data, firstname : e.target.value})}
                />
            </div>
        <div className="form-field  d-flex align-items-center">
                <input 
                type="text"
                name="lastname"
                placeholder="lastname"
                onChange = {(e)=> setData({...data, lastname : e.target.value})}
                />
            </div>
        <div className="form-field d-flex align-items-center">
                <input 
                type="text"
                name="gender"
                placeholder="gender"
                onChange = {(e)=> setData({...data, gender : e.target.value})}
                />
            </div>
        <div className="form-field d-flex align-items-center">
                <input 
                type="text"
                name="email"
                placeholder="email"
                onChange = {(e)=> setData({...data, email : e.target.value})}
                />
            </div>
        <div className="form-field d-flex align-items-center">
                <input type="password"
                 name="password" 
                 placeholder="Password"
                 onChange = {(e)=> setData({...data, pwd : e.target.value})}
                 />
            </div>
        <div className="form-field d-flex align-items-center">
                <input type="password"
                name="confirmpwd"
                placeholder="Confirm Password"
                onChange = {(e)=> setData({...data, confirmpwd : e.target.value})}
                />
        </div>
            <button className="btn beebtn2">Sign In</button>
        </form>
        <div className="text-center fs-6">
        <span> have an account?</span> <br/>
            <Link to='/Login'>Login Here</Link>
        </div>
      
      </div>
     );
}
 
export default Register;