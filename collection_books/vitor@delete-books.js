var data = {
    "_id" : 1.0,
    "nome_livro" : "Livro 1",
    "nome_autor" : "Autor 1",
    "tipo" : "hardcover",
    "isbn" : "192-182-381-38",
    "editora" : "Editora 1",
    "n_paginas" : 100.0
}

db.runCommand({
    findAndModify: "books",
    query: { "_id" : data._id},

    remove: true
} );