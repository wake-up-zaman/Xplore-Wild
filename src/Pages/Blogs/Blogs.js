import React from 'react';

const Blogs = () => {
    return (
        <section className=" container Accordion mt-5">
            <h3 className="title-package text-center mb-2">Conceptual Question & Answer </h3>
            <div className="row row2 d-flex flex-column-reverse flex-md-row ">
                <div className="col-md-12 col-lg-12">
                    <div className="accordion" id="accordionExample">
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingOne">
                                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    Difference between authorization and authentication ?
                                </button>
                            </h2>
                            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                Authentication and authorization are commonly used words in security purpose.They are quite similar to hear but there has a big difference in meaning. Authentication is used to determine someone's identity, whereas authorization is a way to provide access to someone to access a individual resource.Authentication does not ensure what tasks under a process one person can do, what files he can view, read, or update. It mostly identifies who the person or system is actually.The authorization usually works with authentication so that the system could know who is accessing the information.
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingTwo">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    Why are you using firebase? What other options do you have to implement authentication?
                                </button>
                            </h2>
                            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                <div className="accordion-body mb-5">
                                    Fairbase has authentication system via Email password and lots of social sites.Powerful apps can be build by using firebase.Firebase provides user authentication,hosting,storage solutions and cloud functions.Simplify testing and troubleshooting are special feature of firebase. There are so many alternatives of firebase to implement authentication.Some of this are mention here:<ul>
                                        <li>Supabase</li>
                                        <li>Okta</li>
                                        <li>Stytch</li>
                                        <li>Ory</li>
                                        <li>PingIdentity</li>
                                        <li>Keycloak</li>
                                        <li>Frontegg</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingTwo">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    What other services does firebase provide other than authentication ?
                                </button>
                            </h2>
                            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                <div className="accordion-body mb-5">
                                    Firebase not only provide user authentication,it helps with vast area for developing application.Basically firebase is backend application software that provides development environment for building iOS,Android and Web apps.Firebase top functionalities are:
                                    <ul>
                                        <li>Database Management</li>
                                        <li>Cloud Messaging</li>
                                        <li>Remote Config</li>
                                        <li>Hosting</li>
                                        <li>Google Analytics</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Blogs;