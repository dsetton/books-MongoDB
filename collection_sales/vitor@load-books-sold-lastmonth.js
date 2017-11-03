//5 - dado um ISBN, qual o valor e a quantidade de vendas desse livro no mes passado? E traga o nome e o nome dos autores desse livro

var data = {
    "_id" : 1509556487846.0,
    "isbn" : "681-990-636-415"
}

db.runCommand({
    aggregate: "sales_copy",
    pipeline: [
        {
            $match: {
                "items.isbn": {
                    $regex : ".*"+data.isbn+".*", $options : "i"
                }
            }
        },
        
        {
            $project: {
                
                items: {
                    $filter: {
                        input: "$items",
                        as: "item",
                        cond: [
                            { $eq: [ "$$item.isbn", data.isbn ] }
                            ,{$gte:  ["$items.soldAt", 1506826800000.0]}
                            ,{$lt:  ["$items.soldAt", 1509505199000.0]}
                        ]
                    }
                }
            }
        }
        ,{
            $unwind: "$items"
        }
        ,{
            $unwind: "$items.soldAt"
        }
        ,{
            $group: {
                _id : {
                    "id": "$items.isbn"
                    /*,"lastMonth" : [
                        {$gte:  ["$items.soldAt", 1506826800000.0]} ,
                        ,{$lt:  ["$items.soldAt", 1509505199000.0]}
                    ]*/
                    
                }
                ,"preço": { $sum: {$sum :"$items.price"} }
                ,"quantidade": {$sum:1}
            }
                
         }
        //5 - dado um ISBN, qual o valor e a quantidade de vendas desse livro no mes passado?
        // E traga o nome e o nome dos autores desse livro
        
    ]
})