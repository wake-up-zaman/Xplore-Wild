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
                                    Multiple components can get data by using Context API without passing data manually through props.The Context API is working for this use cases: theming, user language, authentication etc. React.createContext() is the main things. It contains a provider and a consumer.Provider component has a prop and any child can get access while passing this prop.Child function can be called along with its value by consumer component.
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
                                    The Semantic tag presents meaningful pages of html.It provides various layout and sections of web pages which are better comprehensive. Search engine apps get helps to determine the significance of the page. Semantic tag has great advantages.The page which made by semantic tag are easier to read, has greater accessibility and user experience is much better.
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
                                    The Semantic tag presents meaningful pages of html.It provides various layout and sections of web pages which are better comprehensive. Search engine apps get helps to determine the significance of the page. Semantic tag has great advantages.The page which made by semantic tag are easier to read, has greater accessibility and user experience is much better.
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