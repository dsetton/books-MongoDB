var data = {
    "_id" : 1.0,
    "nome_livro" : "Algoritmos",
    "nome_autor" : "Autor 1",
    "tipo" : "hardcover",
    "isbn" : "192-182-381-38",
    "editora" : "Editora 1",
    "n_paginas" : 100.0
}

db.runCommand({
    aggregate: "books",
    
    pipeline: [
        {
            $match: {"nome_livro" : {
                $regex : ".*"+data.nome_livro+".*", $options : "i"
                }
            }
        }
    ]
} );