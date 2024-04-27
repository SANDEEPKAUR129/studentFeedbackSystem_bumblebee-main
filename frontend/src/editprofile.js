const Editprofile = () => {
    return ( 
        <div className="editprofile">

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
            <div className="container">
            <form>
  <div className="row g-2 mb-4 mt-3">
    <div className="col">
      <input type="text" className="form-control" placeholder="First name" />
    </div>
    <div className="col">
      <input type="text" className="form-control" placeholder="Last name" />
    </div>
  </div>
  <div className="mb-3">
     <label className="form-label">Add profile picture</label>
     <input className="form-control"
      type="file"  accept="image/*"
      // onChange={handleFileChange}
     />
  </div>
  <input type="text"  className="form-control mb-3" placeholder="Address" />
  <input type="email"  className="form-control mb-3" placeholder="Email" />
  <input type="number" className="form-control mb-3" placeholder="Phone" />
  
  <textarea className="form-control mb-3"  rows="4" placeholder="About You"></textarea>

  <button type="submit" className="btn btn-primary btn-block mb-4">Submit</button>
</form>

            </div>
        </div>
     );
}
 
export default Editprofile;