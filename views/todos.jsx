import React from "react"

function Todos(props){
    return <html lang="en">
    <head>
        <meta charSet="UTF-8" />
        <link rel="stylesheet" href="css/bootstrap.min.css" />
        <title>Document</title>
    </head>
    <body>
        <div>
            <h1 className="text-center text-danger">Hello {props.name}</h1>
        </div>
    </body>
    </html>
}

module.exports = Todos;