// automaizar o INSERT

function range(numero){
    return (Math.floor(Math.random() * numero))
}

//var _idRandom = (parseInt( (new Date().getTime())/1000 ))

var _isbn = []
var _cont
for( _cont = 0; _cont < 4; _cont++){
    _isbn.push((range(1000)+""))
    var aux = (parseInt(_isbn[_cont].valueOf() ) )

    if(aux < 10){
        _isbn[_cont] = "00"+aux
    } else if(aux < 100){
        _isbn[_cont] = "0"+aux
    } else{}
    if((_cont +1) != 4 ){
        _isbn[_cont] += "-"
    }
    //console.log(_isbn[_cont])
}
var resultado = ""
for( _cont = 0; _cont < 4; _cont++){
    resultado += _isbn[_cont]
}
console.log(resultado)

db.sales.insert({
    "_id" : (parseInt( (new Date().getTime()) )),


    "items" : [
        {
            "isbn": randomISMN(),//"617-235-992-73",
            "soldAt": new Date(),
            
        },
        {
            "isbn": randomISMN(),//"839-102-848-29",
            "soldAt": new Date(),            
        }
    ],
    

    "price": randomPrice()
})