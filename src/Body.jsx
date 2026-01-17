import Navbar from "./Navbar";
import { FaReact } from "react-icons/fa";
import { FaNode } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { FaBootstrap } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiJavascript } from "react-icons/si";

import { SiMongodb } from "react-icons/si";
const Body = () => {
    return (<>
        <div className="homebody">
            <Navbar />

            <div
                data-bs-spy="scroll"
                data-bs-target="#navbar-example2"
                data-bs-root-margin="0px 0px -40%"
                data-bs-smooth-scroll="true"
                className="scrollspy-example bg-body-white p-3 rounded-2"
                tabIndex={0}
            >
                {/* Home */}
                <div className="container-fluid main">
                    <h4 id="home"></h4>
                    <div className="row ">
                        <div className="col-sm-12 col-md-6 col-lg-6 col-12">
                            <div className="introduction">
                                <p className="intro">Hi it's me <br /><b className="welcome" data-aos="zoom-in-up">Ayush <b className="name" data-aos="zoom-in-up">Nigam</b></b></p>
                                <p className="info">I am student of <u>Diploma</u> from <u>C.S.E.</u> and i am A <u>Mern Stack</u> Developer.</p>
                                {/* <p className="inf">Hey my name is Ayush nigam. I am student of Diploma from C.S.E. branch. I can design Website frontend and Backend.</p> */}
                                <center>
                                    <button class="btn btn-outline-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling">Explore More</button>

                                    <div class="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
                                        <div class="offcanvas-header">
                                            <h5 class="offcanvas-title" id="offcanvasScrollingLabel">Ayush Nigam</h5>
                                            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                                        </div>
                                        <div class="offcanvas-body">
                                            <p>Use NavBar For explore More About</p>
                                        </div>
                                    </div>

                                    &nbsp; &nbsp; &nbsp;
                                    <button className="btn btn-primary">Download CV</button></center>
                                <div className="iconss text-center info">
                                    <ul className="iconul ">
                                        <li className="iconli text-danger"><FaHtml5 /></li>
                                        <li className="iconli text-primary"><IoLogoCss3 /></li>
                                        <li className="iconli text-warning"><SiJavascript /></li>
                                        <li className="iconli text-primary"><FaReact /></li>
                                        <li className="iconli text-success"><FaNode /></li>
                                        <li className="iconli text-success"><SiExpress /></li>
                                        <li className="iconli text-success"><SiMongodb /></li>
                                        <li className="iconli text-primary"><FaBootstrap /></li>
                                        <li className="iconli text-info"><RiTailwindCssFill /></li>
                                    </ul>

                                </div>

                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-6 col-12 img ">
                            <img src="bgavsc.png" alt="not found" className="image img-fluid" />

                        </div>
                    </div>
                </div>







                <div className="container-fluid">
                    <h4 id="scrollspyHeading3"></h4>
                    <div className="row">
                        <div className="col-sm-12 col-md-6 col-lg-6 col-12"></div>
                        <div className="col-sm-12 col-md-6 col-lg-6 col-12"></div>
                    </div>
                </div>
            </div>
        </div>

    </>)
}

export default Body;