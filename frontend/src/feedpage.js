import { useEffect, useState } from "react";
import axios from './axiosAPI/axios.API';






const Feedpage = () => {

  axios.defaults.withCredentials = true;
  const [data, setData] = useState([]);
  const [showCommentBox, setShowCommentBox] = useState(false);
  const [comment, setComment] = useState("");

useEffect( () =>{
     axios.get('admin/fetchpost')
     .then( res=>{
      setData(res.data.data)
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

const handleSendComment = () => {
  // Implement sending comment logic here
  console.log(comment);
  // Hide comment box after sending
  setShowCommentBox(false);
  // Optionally clear comment state
  setComment("");
};
  

    return ( 
        <div className="feedpage">
            <div className="container">
            <nav className="navbar navbar-expand-lg bg-light ">
  <div className="container-fluid ">
    <a class="navbar-brand" href="#">
      <img src="bee-removebg-preview.png" alt="Bootstrap" width="30" height="24"/>
      Bumble bee
    </a>
    <button className="navbar-toggler  " type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarScroll">
      <div className="w-100 d-flex justify-content-betwwen">
        <div></div> 

        <form className="d-flex justify-content-center flex-grow-1" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        </form>

        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link "  href="#"><i class="bi bi-person-bounding-box"> </i> Dashborad</a>
          </li>
        </ul>

      </div>
    </div>
  </div>
</nav>
{/* END NAV SECTION   */}

{/* START SECTION FEED  */}

<div className="container-fluid mt-5">

    <div class="card">
      <div class="card-header">
      LASTEST FEED
      </div>
      <div class="card-body">
        <blockquote class="blockquote mb-0">
          {/* START TABLE */}

          <table class="table">
  <thead>
    <tr>
      <th scope="col">Feed</th>
      <th scope="col"></th>
      <th scope="col" className="tabletext">feedback</th>
    </tr>
  </thead>
  {data.map((data)=>(
  <tbody>
    <tr key={data.id}>
      <td>
        {/* {data.postbody} */}
        {data.image && (
        <img
          src={`http://localhost:5002/uploads/${data.image}`} 
          alt="Post"
          style={{  maxWidth: '36.46vw',  maxHeight: '18.52vh',   width: '35.42vw', minHeight: '17.59vh'}}
        />
        
      )}
      <br/>
        <p className="text-res"> {data.postbody} </p>
      </td>
      <td> </td>
   
      <td>
      <i 
        className="bi bi-chat-dots-fill"
        onClick={() => setShowCommentBox(!showCommentBox)}
        style={{ cursor: 'pointer' }}
      >
        0
      </i>
      {showCommentBox && (
        <div>
          <textarea
            //value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Type your comment here..."
          />
          <button onClick={handleSendComment}>Send</button>
        </div>
      )}

    </td>

    </tr>

  </tbody>
 ))}
        </table>

          {/* END TABLE */}
          <footer class="blockquote-footer "> <cite title="Source Title">Student Feedback System</cite></footer>
       </blockquote>
     </div>
   </div>

</div>

{/* END SECTION FEED  */}

            </div>
        </div>
     );
}


export default Feedpage;
