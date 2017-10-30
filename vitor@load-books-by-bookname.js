var data = {
    "_id" : 1.0,
    "nome_livro" : "Livro 2",
    "nome_autor" : "Autor 1",
    "tipo" : "hardcover",
    "isbn" : "192-182-381-38",
    "editora" : "Editora 1",
    "n_paginas" : 100.0
}

db.runCommand({
    aggregate: "books",
    $query: { "_id" : data.nome_livro},
    
    pipeline: [
        {
            //$match: {"nome_livro" : data.nome_livro }
            $match: {"nome_livro" : {
                //mongoScript (FindAndModify)
                $regex : ".*"+data.nome_livro+".*", $options : "i"
                
                //mongoscript (MongoShell default)
                //nome_livro: {$regex: ".*"+"Livro 1"+".*", $options: "i"}
                }
            }
        }
    ]
} );