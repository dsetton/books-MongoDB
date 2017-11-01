var data = {
    "_id" : 12.0,
    "nome_livro" : "Livro 1",
    "nome_autor" : "Autor 1",
    "tipo" : "hardcover",
    "isbn" : "192-182-381-38",
    "editora" : "Editora 1",
    "n_paginas" : 100.0
}

var dataUpdated = {
    "tipo" : array_BookTypes[3]
}

var array_BookTypes = ["hardcover", "paperback", "pocket book", "e-book"]

db.runCommand({
    findAndModify: "books",
    query: { "_id" : data._id },

    update: {
        $set: {
            "tipo": dataUpdated.tipo
        }
    },

    upsert: false,
    new: true
} );