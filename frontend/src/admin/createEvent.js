import { useState } from "react";
import axios from '../axiosAPI/axios.API';
import { useNavigate } from "react-router-dom";




const CreateEvent = () => {
  const navigate = useNavigate();
  axios.defaults.withCredentials = true;

  const [data, setData] = useState({
    posttitle: '',
    postdate: '',
    posttype: '',
    postbody: '',
    postimage: null,
  });

  const HandleSubmit = async (e) => {
    e.preventDefault();

    // Check if all fields are filled except postimage which is handled separately
    if (!data.posttitle || !data.postdate || !data.posttype || !data.postbody) {
      alert('Please fill all the fields.');
      return;
    }

    const formData = new FormData();
    formData.append('postimage', data.postimage);
    formData.append('posttitle', data.posttitle);
    formData.append('postdate', data.postdate);
    formData.append('posttype', data.posttype);
    formData.append('postbody', data.postbody);

    try {
      const response = await axios.post('/admin/createfeed', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
       
      if (response.data.status === "Success") {
        navigate("../feedpage");
      } else {
        console.log(response.data.Error);
      }
    } catch (error) {
      if (error.response) {
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        console.log(error.request);
      } else {
        console.log('Error', error.message);
      }
    }
  };

  const handleFileChange = (e) => {
    setData({...data, postimage: e.target.files[0]});
  };
    return ( 
        <div className="CreateEvent">
{/* START NAV SECTION   */}
            <nav className="navbar navbar-expand-lg bg-light ">
  <div className="container-fluid ">
    <a className="navbar-brand" href="#">
      <img src="../bee-removebg-preview.png" alt="logo" width="30" height="24"/>
      Bumble bee
    </a>
    <button className="navbar-toggler  " type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarScroll">
      <div className="w-100 d-flex justify-content-betwwen">
        <div></div> 

        <ul className="navbar-nav d-flex justify-content-center flex-grow-1">
          <li className="nav-item">
            <a className="nav-link float--right"  href="#"><i class="bi bi-person-bounding-box"> </i> Dashborad</a>
          </li>
        </ul>

      </div>
    </div>
  </div>
</nav>
{/* END NAV SECTION   */}

            <div className="container">

<form encType="multipart/form-data" onSubmit={HandleSubmit}>
  {/* inputs fields */}
  <div className="row g-2 ">
    <div className="col">

    <select className="form-select mb-3 mt-3"
value={data.posttype} 
//onChange={(e) => setData({...data, posttype: e.target.value})}
     onChange={(e) => setData({...data, posttype: e.target.value})}
     >
     <option selected>Open this select menu</option>
     <option value="Event">Event</option>
     <option value="Post">Post</option>
     <option value="Announcement">Announcement</option>
    </select>

    <input 
     type="text"
     className="form-control"
     placeholder="Post Title"
     onChange={(e)=> setData({...data, posttitle : e.target.value})}
   />
      
    <div className="mb-3">
     <label className="form-label">Choose image to upload</label>
     <input className="form-control"
      type="file"  accept="image/*"
      onChange={handleFileChange}
     />
    </div>

    <input type="date" 
    className="form-control mb-3" 
    placeholder="post date"
    onChange={(e)=> setData({...data,  postdate : e.target.value })}
     />

    <textarea className="form-control mb-3"
    rows="4"
    placeholder="Post body"
    onChange={(e)=> setData({...data,  postbody : e.target.value })}
    ></textarea>

  <button type="submit" className="btn btn-primary btn-block mb-4">Submit</button>

   </div>
  </div>
 
</form>

            </div>
        </div>
     );
}
 
export default CreateEvent;