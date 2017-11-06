//5 - dado um ISBN, qual o valor e a quantidade de vendas desse livro no mes passado? E traga o nome e o nome dos autores desse livro

var data = {
    "_id" : 1509556487846.0,
    "isbn" : "681-990-636-415"
    /*,{$gte:  ["$items.soldAt", 1506826800000.0]}
    ,{$lt:  ["$items.soldAt", 1509505199000.0]} */
}

db.runCommand({
    aggregate: "sales_copy",
    pipeline: [
        {
            $unwind: "$items"
        }
        ,{
            $lookup: {
                from: "books",
                localField: "_id",
                foreignField: "artist_id",
                as: "band_members"
            }
        }
        ,{
            $match: {
                "items.isbn": data.isbn
                ,"items.soldAt": { $lte: 1509505199000.0, $gte: 1506826800000.0 }
                //,"items.soldAt" : { $month : Date("$items.soldAt")}
            }
        }
        ,{
            $group: {
                _id: data.isbn                    
                ,"preço": { $sum: {$sum :"$items.price"} }
                ,"quantidade": {$sum:1}
            }
        }
    ]
})