var data = {
    "_id" : 15.0,
    "nome_livro" : "Livro 14",
    "nome_autor" : "Rafael Falcão",
    "tipo" : "e-book",
    "isbn" : "721-381-028-39",
    "editora" : "Editora 7",
    "n_paginas" : 1050.0
}

var dataUpdated = {
    "nome_autor" : "Daiane Falcao"
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