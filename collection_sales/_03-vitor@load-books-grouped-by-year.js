//3 - dado um ISBN, qual o valor e a quantidade de vendas desse livro agrupado por ano?

var data = {
    "_id" : 1509556487846.0,
    "isbn" : "681-990-636-415"
}

db.runCommand({
    aggregate: "sales",
    pipeline: [
        {
            $match: {
                "items.isbn": {
                    $regex : ".*"+data.isbn+".*", $options : "i"
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
            $unwind: "$items"
        }
        ,{
            $project : {
                _id : "$_id",
                items : "$items",
                date : {$add: [new Date(0), "$items.soldAt"]}
            }
        }
        ,{
            $group: {
                _id : {
                    "isbn": "$items.isbn"
                    ,"ano": {"$year": "$date"}
                },
                "preço": { $sum :"$items.price"},
                "quantidade": {$sum:1}
                
            }
        }
        
    ]
})
