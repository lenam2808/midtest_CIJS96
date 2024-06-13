import "./Navbar.css"

const Navbar = () => {
  return (
    <div className="navBar">
          <div className="logo">Anonime</div>
          <div className="home">Home</div>
          <div className="listAnime">List anime</div>
          <div className="searchBar">
            <input type="text" placeholder="Search anime or movie" />
          </div>
    </div>
  )
}

export default Navbar