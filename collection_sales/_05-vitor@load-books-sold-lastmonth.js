//5 - dado um ISBN, qual o valor e a quantidade de vendas desse livro no mes passado? E traga o nome e o nome dos autores desse livro

var data = {
    "_id" : 1509556487846.0,
    "isbn" : "681-990-636-415"
}

db.runCommand({
    aggregate : "sales",
    pipeline: [
        {
            $match: {
                "items.isbn" : data.isbn,
                "items.soldAt" : {
                    $gte : 1506826800000.0, $lte: 1509505199000.0
                }
            }
        }
        ,{
            $project: {
                items: {
                    $filter: {
                        input: "$items",
                        as: "item",
                        cond: { $eq: [ "$$item.isbn", data.isbn ] }
                    }
                }
            }
        }
        ,{
            $lookup:
            {
                from: "books",
                localField: "items.isbn",
                foreignField: "isbn",
                as: "book_info"
            }
        }
        ,{
            $group:{
                _id : {
                    "isbn" : "$items.isbn",
                    "Autor(es)" : "$book_info.nome_autor.autor",
                    "Título" : "$book_info.nome_livro",
                }
                
                ,"preço": { $sum: {$sum :"$items.price"} }
                ,"quantidade": {$sum:1}
            }
        }
    ]
})
