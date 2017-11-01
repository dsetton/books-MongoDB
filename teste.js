db.sales.insert({
    "_id" : (parseInt( (new Date().getTime()) )),
    
    "items" : [
        {
            "isbn": "681-990-636-415",
            "soldAt": new Date()
        },
        {
            "isbn": "189-398-128-39",
            "soldAt": new Date()
        },
        {
            "isbn": "839-102-848-29",
            "soldAt": new Date()
        },
        {
            "isbn": "172-894-712-98",
            "soldAt": new Date()
        }
    ],

    "price": 120.0
})