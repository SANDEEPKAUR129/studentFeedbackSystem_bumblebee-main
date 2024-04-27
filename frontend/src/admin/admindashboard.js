import { useEffect, useState } from "react";
import axios from '../axiosAPI/axios.API';
import { Link } from "react-router-dom";



const Admindashboard = () => {

axios.defaults.withCredentials = true;
const [data, setData] = useState({
    users: [],
    posts: []
  });


  useEffect( () =>{
    axios.get('/admin/fetchUsers')
    .then( res=>{
     setData(res.data.data)
     console.log(res.data)
    })
    .catch((error)=>{
     if (error) {
       console.log(error.res.data);
       console.log(error.res.status);
       console.log(error.res.headers);
     } else if (error.request) {
       console.log(error.request);
     } else {
       console.log('Error', error.message);
     }
    })
}, [])


    return (     
            <div class="container-fluid ">
                <div class='container-fluid '>
                    <div class='row pt-2 pb-4 bg-light'>
                        <div class='col col-xlg-6 col-lg-6 col-md-6 col-sm-12'>
                            <h4> DashBoard</h4>
                            Welcome back, <span class='text-capitalize'> </span>!  👋
                        </div>
                        <div class='col col-xlg-6 col-lg-6 col-md-6 col-sm-12'>
                            <Link class='btn btn-sm btn-primary'> Reminders</Link>
                        </div>
                        <hr />
                    </div>
    {/* END NAV                 */}
    {/* START CARD */}
                    <div class="row bg-light">
                        <div class="col-xl-3 col-lg-3 col-lg-4">
                            <div class="card  text-white">
                       
            
                                <div class=" boxpaint1 p-4">
                                    <div class="card-icon "><i class="fas fa-shopping-cart"></i></div>
                                    <div class='row'>
                                        <div class="col-9">
                                            <h6 class="d-flex text-start mb-0">
                                                Number of students
                                            </h6>
                                        </div>
                                        <div class="col-3 text-right">
                                            <span class="text-end badge bg-secondary text-wrap ">View </span>
                                        </div>
                                    </div>
                                    <div class="row align-items-center mb-2 d-flex pt-2">
                                        <div class="text-start pb-2">
                                            <h4 class="d-flex align-items-center mb-0">
                                            {/* {data.users.firstname} */}
                                            </h4>
                                        </div>
                                        <div class=" text-start">
                                            <span>5.23% <span class='tS'> since last 2023</span></span>
                                        </div>
                                    </div>
                                </div>
                               
                            </div>
                        </div>
    
                        <div class="col-xl-3 col-lg-3 col-lg-4">
                            <div class="card   text-white">
                                <div class="  boxpaint2  p-4">
                                    <div class="  card-icon "><i class="fas fa-users"></i></div>
                                    <div class='row'>
                                        <div class="col-8">
                                            <h6 class="d-flex text-start mb-0">
                                                Total Feedback
                                            </h6>
                                        </div>
                                        <div class="col-4 text-right">
                                            <span class="text-end badge bg-secondary text-wrap ">Annual </span>
                                        </div>
                                    </div>
    
                                    <div class="row align-items-center mb-2 d-flex pt-2">
                                        <div class="text-start pb-2">
                                            <h4 class="d-flex align-items-center mb-0">
                                                0
                                            </h4>
                                        </div>
                                        <div class=" text-start">
                                            <span>2.23%  <span class='tS'> since last 2023</span> </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
    
                        <div class="col-xl-3 col-lg-3 col-lg-4">
                            <div class="card text-white">
                                <div class=" boxpaint3  p-4">
                                    <div class="card-icon "><i class="fas fa-ticket-alt"></i></div>
                                    <div class='row'>
                                        <div class="col-8">
                                            <h6 class="d-flex text-start mb-0">
                                               Number of Staffs
                                            </h6>
                                        </div>
                                        <div class="col-4 text-right">
                                            <span class="text-end badge bg-secondary text-wrap  ">Annual </span>
                                        </div>
                                    </div>
                                    <div class="row align-items-center mb-2 d-flex pt-2">
                                        <div class="text-start pb-2">
                                            <h4 class="d-flex align-items-center mb-0">
                                                3,243
                                            </h4>
                                        </div>
                                        <div class=" text-start">
                                            <span>12.5%  <span class='tS'> since last 2023</span> </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
    
                        <div class="col-xl-3 col-lg-3 col-lg-4">
                            <div class="card ">
                                <div class="boxpaint4   p-4">
                                    <div class="card-icon "><i class="fas fa-ticket-alt"></i></div>
                                    <div class='row'>
                                        <div class="col-8">
                                            <h6 class="d-flex text-start mb-0">
                                                Upcoming Events
                                            </h6>
                                        </div>
                                        <div class="col-4 text-right">
                                            <span class="text-end "> </span>
                                        </div>
                                    </div>
                                    <div class="row align-items-center mb-2 d-flex pt-2">
                                        <div class="text-start pb-2">
                                            <h4 class="d-flex align-items-center mb-0">
                                                5
                                            </h4>
                                        </div>
                                        <div class=" text-start">
                                            <span>2.5%  <span class=''>  since last 2024</span></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
{/* START BUTTON */}
                  <div className="m-3">
                    <Link to="/admin/createevent" type="button p-2" className="btn btn-primary btn-sm slide-button-left w-50">Create Events</Link>
                    <button type="button p-2 " className="btn btn-secondary btn-sm slide-button-right w-50">Add Staff</button>
                  </div>
{/* END BUTTON     */}
                    {/* START USERS SECTION */}
                    <div className="container pagecolor2">
                        <h4 class='text-start  pt-3  pb-3'> Students</h4>
                        <div className="container table-responsive">
                            <table class="table ">
                                <thead>
                                    <tr>
                                        <th scope="col">User ID</th>
                                        <th scope="col">firstname</th>
                                        <th scope="col">lastname</th>
                                        <th scope="col">Gender</th>
                                        <th scope="col">Email</th>
                                        <th scope="col">Course</th>
                                        
                                    </tr>
                                    
                                </thead>
                                <h6 className="text-warning"></h6>
                                <h6 className="text-danger"></h6>
                             

                                <tbody className="table-group-divider">
                              
                                  {data.map(user => (
                                  <tr key={user.id}>
                                        <td>{user.user_id}</td>
                                        <td>{user.firstname}</td>
                                        <td>{user.lastname}</td>
                                        <td>{user.gender}</td>
                                        <td>{user.email}</td>
                                        <td>{user.course}</td>
                                        
                                    </tr>
                                 ))}
                            </tbody>
                                   
                             
                            </table>
                        </div>
                    </div>
                    {/* START USERS SECTION */}
                </div>
    
            </div>
     );
}
 
export default Admindashboard;