//UPDATE

var _inputID = 150953952.0

var data = {
    "_id" : _inputID,
    "nome_livro" : "Livro 14",
    "nome_autor" : [
        {"autor": "Rafael Falcão"}
    ],
    "tipo" : "e-book",
    "isbn" : "721-381-028-39",
    "editora" : "Editora 7",
    "n_paginas" : 1050.0
}

var dataUpdated = {
    "nome_autor" : 
        [
            //"asdfas", "sdfasdf", "hbkqkas"
            {"autor": "Daniel"},
            {"autor": "Bruna"},
            {"autor": "Luiz"},
            {"autor": "Alexandre"},
            {"autor": "Leo"},
            {"autor": "André"}
        ],
}

db.runCommand({
    findAndModify: "books",
    query: { "_id" : data._id},

    update: {
        $set: {
            "nome_autor": dataUpdated.nome_autor
        }
    },

    upsert: false,
    new: true
} );