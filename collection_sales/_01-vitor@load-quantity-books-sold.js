// 1 - dado um ISBN, qual a quantidade de vendas desse livro?

var data = {
    "_id" : 1.0,
    "isbn" : "681-990-636-415"
}

db.runCommand({
      aggregate: "sales",
      pipeline: [
                    { $match: 
                        {
                            "items.isbn": {
                                $regex : ".*"+data.isbn+".*", $options : "i"
                            }
                        }
                    },
                    { $count: "numero_de_livros"}
                ]
})
