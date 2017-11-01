db.sales.insert({
    "_id" : (parseInt( (new Date().getTime()) )),
    "soldBooks" : [
        {
            "isbn": "681-990-636-415",
            "soldAt": new Date(),
            "price": 120.0
        },
        {
            "isbn": "189-398-128-39",
            "soldAt": new Date(),
            "price": 49.3
        },
        {
            "isbn": "839-102-848-29",
            "soldAt": new Date(),
            "price": 91.89
        },
        {
            "isbn": "172-894-712-98",
            "soldAt": new Date(),
            "price": 12.99
        }
    ]
})