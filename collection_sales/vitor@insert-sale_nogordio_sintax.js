//INSERT

function range(numero){
    return ( parseInt(Math.floor(Math.random() * numero)) )
}

function newSaleArray( _indices ) {
    var _arraySales = []
    var _salesJSON = {}

    for (var _cont = 0; _cont < _indices; _cont++){
        _salesJSON = {
            "isbn" : ((range(1000)+"-") + (range(1000)+"-") + (range(1000)+"-") + (range(100) )),
            "soldAt" : (parseInt( (new Date().getTime()) )),
            "price" : range(1000)
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
            "items" : dataInput.items
        }
    },

    upsert: true,
    new: true
} )