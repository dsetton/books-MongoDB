var data = {
    "_id" : 150947978.0,
    "nome_livro" : "Livro 2",
    "nome_autor" : [
        {autor_1: "Vitor Cruz"}
    ],
    "tipo" : "hardcover",
    "isbn" : "192-182-381-38",
    "editora" : "Editora 1",
    "n_paginas" : 100.0
}

/*
-------------------transformar esse db.shell() em runCommand()----------
db.books.aggregate(
    [ { $match : { "nome_autor.autor_1" : "Vitor Cruz" } } ]
);
*/

db.runCommand({
    aggregate: "books",
    
    pipeline: [
        
            match: {
                "nome_autor.autor_1" : {
                    $regex : ".*"+data.nome_autor.autor_1+".*", $options : "i"
                }
            }
            //$unwind: nome_autor,
            /* $elementMatch: {
                $or: {
                    "autor_1" : {
                        $regex : ".*"+data.nome_autor.autor_1+".*", $options : "i"
                    },
                    "autor_2" : {
                        $regex : ".*"+data.nome_autor.autor_1+".*", $options : "i"
                    },
                    "autor_3" : {
                        $regex : ".*"+data.nome_autor.autor_1+".*", $options : "i"
                    }
                }
            } */
        
    ]
} );