var data = {
    "_id" : 1.0,
    "nome_livro" : "Livro 1",
    "nome_autor" : "Autor 1",
    "tipo" : "hardcover",
    "isbn" : "276-584-717-23",
    "editora" : "Editora 1",
    "n_paginas" : 100.0
}

db.runCommand({
    aggregate: "books",
    
    pipeline: [
        {
            $match: {"isbn" : {
                $regex : ".*"+data.isbn+".*", $options : "i"
                }
            }
        }
    ]
} );
