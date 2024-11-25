

const Banner = () => {
  return (
    <section id="banner">
        <div className="bg">
            <div className="container">
                <div className="wrap">
                    <div className="left">
                        <small>
                            <div className="circle-1">
                                <div className="circle-2"></div>
                            </div>
                            {/* <FontAwesomeIcon icon="fa-solid fa-bullseye" /> */}
                            <span className="sm-heading">I AM DESIGNER</span>
                        </small>
                        <h1>
                        Creative Design and Web Solutions
                        </h1>
                        <p className="para">Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et.</p>
                        <a className="cvBtn" href="#">Download My CV</a>
                    </div>
                    <div className="right">
                        <img src="../images/cheerful-man-wearing-fashionable-clothes-posing-studio-modern-style-light-background-removebg-preview 1.jpg" alt="Image-1" />
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Banner