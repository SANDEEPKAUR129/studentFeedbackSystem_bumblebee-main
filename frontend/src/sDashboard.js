// import { Link } from "react-router-dom";
const sDashboard = () => {
    return (     
            <div className="container-fluid line">
 {/* START NAV */}


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
            <a className="nav-link "  href="#"><i class="bi bi-postcard"></i> Feed</a>
          </li>
        </ul>

      </div>
    </div>
  </div>
</nav>

 {/* END NAV        */}
<section className="h-100 gradient-custom-2">
  <div className="container py-3 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col col-lg-9 col-xl-7">
        <div className="card ">
          <div className="rounded-top text-white d-flex flex-row" style={{ backgroundColor: 'rgb(4, 4, 4)', height: '190px' }}>
            <div className="ms-4 mt-5 d-flex flex-column" style={{ width: '150px' }}>
              <img src="my picture.jpg"
                alt="upload picture" className="img-fluid img-thumbnail mt-4 mb-2"
                style={{ maxWidth: '140px',maxHeight: "9.2rem", zIndex: 1 }}/>
              <button type="button" className="btn btn-outline-dark" data-mdb-ripple-color="dark"
                style={{ zIndex: 1 }}>
                Edit profile
              </button>
              {/* style={{ width: '150px', maxHeight: "10rem", zIndex: 1 }} */}
            </div>
          </div>

          <div className="p-4 bg-light text-black">
            <div className="d-flex mt-5 justify-content-end text-center py-1">
              <div>
                <p className="mb-1 h5">Present</p>
                <p className="small text-muted mb-0">Status</p>
              </div>
              <div className="px-3">
                <p className="mb-1 h5">color</p>
                <p className="small text-muted mb-0">Attendance</p>
              </div>
            </div>
          </div>
        
            
        </div>
      </div>
    </div>

 {/* START SECOND SECTION  */}
               <div className="container py-3 h-100">
                  <div className="row d-flex justify-content-center align-items-center h-100">
              {/* START BUTTON */}
                  <div className="mb-3">
                   <button type="button" className="btn btn-primary btn-sm slide-button-left">My Modules</button>
                   <button type="button" className="btn btn-secondary btn-sm slide-button-right">Help Service</button>
                  </div>
              {/* END BUTTON */}

                     <div class="col-xl-3 col-lg-3 col-lg-4">
                            <div class="card   ">
                                <div class=" hoverCard1 boxpaint6  p-4">
                                    <div class="  card-icon "><i class="fas fa-users"></i></div>
                                    <div class='row'>
                                        <div class="col-8">
                                            <h6 class="d-flex text-start mb-0">
                                            My Studies
                                            </h6>
                                        </div>
                                        <div class="col-4 text-right">
                                            <span class="text-end badge bg-success text-wrap ">Active </span>
                                        </div>
                                    </div>
    
                                    <div class="row align-items-center mb-2 d-flex pt-2 m-2">
                                        <div class="text-start pb-2">
                                            <h4 class="d-flex align-items-center mb-0">
                                                total modules 4
                                            </h4>
                                        </div>
                                        <div class=" text-start">
                                            <span>9.23%  <span class='tS'> completion</span> </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div class="col-xl-3 col-lg-3 col-lg-4">
                            <div class="card   ">
                                <div class=" hoverCard2 boxpaint5  p-4">
                                    <div class="  card-icon "><i class="fas fa-users"></i></div>
                                    <div class='row'>
                                        <div class="col-8">
                                            <h6 class="d-flex text-start mb-0">
                                                My Details
                                            </h6>
                                        </div>
                                        <div class="col-4  text-right">
                                        <button type="button" className="btn btn-outline-dark vibrate-btn" data-mdb-ripple-color="dark"style={{ zIndex: 1,maxHeight: "33px", fontSize: "14px" }}> view </button>
                                        </div>
                                    </div>
    
                                    <div class="row align-items-center mb-2 d-flex pt-2">
                                        <div class="text-start pb-2">
                                            <h4 class="d-flex align-items-center mb-0">
                                                Eustace Amadi
                                            </h4>
                                        </div>
                                        <div class=" text-start">
                                            <span>hull  <span class='tS'> United kingdom</span> </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>



                      </div>
                </div>  
  {/* END SECOND SECTION */}
    
  </div>
 
</section>




            </div>       
     );
}
 
export default sDashboard;