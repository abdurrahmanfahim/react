

const Navbar = () => {
  return (
    <nav>
      <div className="container">
        <div className="wrap">
        <div className="logo">
            <img src="../images/logo.png" alt="logo" />
        </div>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>Resume</li>
          <li>Portfolio</li>
          <li>Testimonial</li>
          <li>Blog</li>
        </ul>
        <a className="contactBtn" href="#">Contact Us</a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar