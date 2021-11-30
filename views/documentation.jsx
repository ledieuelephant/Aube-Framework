import React from 'react'

export default class Documentation extends React.Component {
    render(){
        return <html>
            <head>
                <title>Documentation</title>
                <link rel="stylesheet" href="/css/bootstrap.min.css" />
            </head>
            <body>
                <div className="container">
                    <div className="d-flex mt-2 align-items-center">
                        <img style={{width : "64px", height: "64px"}} src="images/favicon.png" />
                        <h3 style={{marginLeft : "15px", color : "#FE672D"}}>Aube Framework</h3>
                    </div>
                    <div className="shadow-sm rounded mt-5 d-flex align-items-center justify-content-between">
                        <div className="ms-2 col-5">
                            <h3>Models :</h3>
                            <p>
                                The models ORM used on this Framework is mongoose who is intuitive and simple to use. For more information about it, please come here :<a href="https://mongoosejs.com">https://mongoosejs.com</a>
                            </p>
                        </div>
                        <img style={{width : "50%", height : "50%"}} src="https://angularfrontenders.com/wp-content/uploads/2021/01/MONGO-DB-logo-300x470-x.png" />
                    </div>
                    <div className="shadow-sm rounded mt-4 d-flex align-items-center justify-content-between">
                        <img style={{width : "45%", height : "45%"}} src="https://www.alioze.com/wp-content/uploads/2016/11/react-js.png" />
                        <div className="me-2 col-5">
                            <h3>Views :</h3>
                            <p>
                                The views template used is React. React is a Front Library created by Facebook and easy to learn and used. For more information about it, please come here :  <a href="https://reactjs.org">https://reactjs.org</a>
                            </p>
                        </div>
                    </div>
                    <div  className="shadow-sm rounded mt-4 d-flex align-items-center justify-content-between">
                        <div className="ms-2 col-5">
                            <h3>CLI :</h3>
                            <p>
                                You have an integrated CLI which can be used for creating models and controllers together
                            </p>
                            <code>aube model name // for model</code><br />
                            <code>aube controller name // for controller</code><br />
                            <code>aube model name -c // for creating both and controller linked with model</code><br />
                        </div>
                        <img className="me-2" style={{width : "40%", height: "40%"}} src="images/favicon.png" />
                    </div>
                </div>
            </body>
        </html>
    }
}