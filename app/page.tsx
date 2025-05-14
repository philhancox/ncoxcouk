import Image from "next/image";

export default function Home() {
    return (
        <div className="container-fluid container-table">
            <div className="row vertical-center-row">
                <div id="ncox" className="col-md-offset-2 col-md-8 col-xs-12">
                    <p>
                        <img src="/phil-hancox.png" className="img-fluid" />
                        👋 Hello! My name is <strong className="emphasis">Phil Hancox</strong>.
                        I'm a web developer based in Sheffield, England and yes, I purchased <strong
                            className="emphasis">ncox.co.uk</strong> for the sole purpose of having the email
                        address <strong className="emphasis">philh@ncox.co.uk</strong>.
                        <br/><strong>Have a great day!</strong></p>
                    <p className="icons">
                        <a href="http://www.philhancox.co.uk" target="_blank" rel="noopener noreferrer"><span
                            className="fas fa-globe"></span></a>
                        <a href="https://www.linkedin.com/in/philhancox/" target="_blank"
                           rel="noopener noreferrer"><span className="fab fa-linkedin"></span></a>
                    </p>
                </div>
            </div>

        </div>
        // <div className="container-fluid container-table">
        //     <div className="row vertical-center-row">
        //         <div id="ncox" className="col-md-offset-2 col-md-8 col-xs-12">
        //             <p><img src="/phil-hancox.png" className="img-fluid" alt="Profile image of Phil Hancox">
        //                 👋 Hello! My name is <strong className="emphasis">Phil Hancox</strong>.
        //                 I'm a web developer based in Sheffield, England and yes, I purchased <strong
        //                 className="emphasis">ncox.co.uk</strong> for the sole purpose of having the email
        //                 address <strong className="emphasis">philh@ncox.co.uk</strong>.
        //                 <br><strong>Have a great day!</strong>
        //             </p>
        //             <p className="icons">
        //                 <a href="http://www.philhancox.co.uk" target="_blank" rel="noopener noreferrer"><span
        //                     className="fas fa-globe"></span></a>
        //                 <a href="https://www.linkedin.com/in/philhancox/" target="_blank"
        //                    rel="noopener noreferrer"><span className="fab fa-linkedin"></span></a>
        //             </p>
        //         </div>
        //     </div>
        // </div>
    );
}
