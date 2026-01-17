import Navbar from "./Navbar";
const About = () => {
    return (<>
    <div className="aboutbody">
      <Navbar/>
            <p className="abou text-center text-dark fs-3">About <b className=" text-primary me">Me</b></p><br />
            <div className="container">
                <div className="row">
                    <div  className="col-sm-12 col-md-12 col-lg-6 col-12">
                        <img className="avscimg img-fluid" src="origi2.png" alt="" />
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-6 col-12 dta">
                        <div data-aos="zoom-in-left" className="detail">
                            <h2 className="who">Who is <u className="nam text-primary">Ayush Nigam</u> ?</h2>
                            <p>"My journey into web development started with HTML and CSS, and over time I explored JavaScript frameworks and fell in love with the MERN stack. I now build full-stack applications that are scalable, responsive, and user-focused."</p>
                            <div className="row">
                                <div className="col-4">
                                    <h1 className="infor">10+</h1>
                                    <p className="infoN">Project Completed</p>
                                </div>
                                <div className="col-4">
                                    <h1 className="infor">5+</h1>
                                    <p className="infoN">Web Developed</p>
                                </div>
                                <div className="col-4">
                                    <h1 className="infor">2+</h1>
                                    <p className="infoN">Year Experience</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </div>

    </>)
}
export default About;