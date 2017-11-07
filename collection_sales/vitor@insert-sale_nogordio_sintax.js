//INSERT

function range(numero){
    return (Math.floor(Math.random() * numero))
}

//var _isbn = (range(1000)+"-") + (range(1000)+"-") + (range(1000)+"-") + (range(100))

function newSaleArray( _indices ) {
    var _arraySales = []
    var _salesJSON = {}

    for (var _cont = 0; _cont < _number; _cont++){
        _salesJSON = {
            "isbn" : ((range(1000)+"-") + (range(1000)+"-") + (range(1000)+"-") + (range(100) )),
            "soldAt" : (parseInt( (new Date().getTime()) )),
            "price" : range(10)
        }
        _arraySales.push(_salesJSON)
    }

    return _arraySales
}

var dataInput = {
    "_id" : (parseInt( (new Date().getTime())/1000 )),
    "items" : newSaleArray(range(5))
}

db.runCommand({
    findAndModify: "sales_copy",
    query: { "_id" : dataInput._id},

    update: {
        $set: {
            //"_id" : dataInput._id,
            "items.isbn" : dataInput.items.isbn,
            "items.soldAt" : dataInput.items.isbn,
            "items.price" : dataInput.items.isbn,
        }
    },

    upsert: true,
    new: true
} )