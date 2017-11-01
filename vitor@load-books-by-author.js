var data = {
    "_id" : 150947978.0,
    "nome_autor" : "Vitor Cruz"/*[
        {"autor": "Vitor Cruz"}
    ]*/
}

db.runCommand(
    { aggregate: "books",
      pipeline: [
                    { $match: 
                        {
                            "nome_autor.autor": {
                                $regex : ".*"+data.nome_autor+".*", $options : "i"
                            }
                        }
                    }
                    
                  //{ $match: {"nome_autor.autor": {"data.nome_autor": {"autor": "Vitor Cruz"} } } }
                ]
    }
 )

 /*
-------------------transformar esse db.shell() em runCommand()----------
db.books.aggregate(
    [ { $match : { "nome_autor.autor_1" : "Vitor Cruz" } } ]
);
*/