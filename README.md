# Documentation of Framework Aube
## Introduction

This framework use the MVC Pattern with MERN Stack (MongoDB, Express, React, Node)

## Models

The models ORM used is mongoose for communicating with your MongoDB database. You can change the adress of your database in the config.json file.

## Controllers

All your controllers are rassembled in app/controllers.js. With this, you can access all your controllers in one file. When a new controller is created, it's automaticcaly imported inside. And it's automatically deleted when you delete a controller.

## CLI

You can use the aube CLI for creating models or controllers or the two together
```
aube model name
aube controller name
aube model name -c
```

## Views

The views engine is React, you can pass data using props inside of it :
in routes/web.js
```JS
router.get("/", function(req,res){
    res.render("todos", {name : "Raph"})
})
```
in todos.jsx
```JSX
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
```
