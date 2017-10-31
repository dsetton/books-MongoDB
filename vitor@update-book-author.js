//UPDATE

var _inputID = 150948232.0

var data = {
    "_id" : _inputID,
    "nome_livro" : "Livro 14",
    "nome_autor" : "Rafael Falcão",
    "tipo" : "e-book",
    "isbn" : "721-381-028-39",
    "editora" : "Editora 7",
    "n_paginas" : 1050.0
}

var dataUpdated = {
    "nome_autor" : 
        [
            //"asdfas", "sdfasdf", "hbkqkas"
            {autor_1: "Daniel"},
            {autor_2: "Bruna"},
            {autor_3: "Luiz"},
            {autor_4: "Alexandre"},
            {autor_5: "Leo"},
            {autor_6: "André"}
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