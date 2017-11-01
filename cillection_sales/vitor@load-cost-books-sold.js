var data = {
    "_id" : 1.0,
    "isbn" : "681-990-636-415"
}

db.runCommand({
      aggregate: "sales",
      pipeline: [
        { $match: 
            {
                "soldBooks.isbn": {
                    $regex : ".*"+data.isbn+".*", $options : "i"
                }
            }
        },
        { $count: "numero_de_livros"}
                ]
})
