//INSERT

function range(numero){
    return (Math.floor(Math.random() * numero))
}

var _idRandom = (parseInt( (new Date().getTime())/10000 ))
var _array_BookTypes = ["hardcover", "paperback", "pocket book", "e-book"]
//var _array_ISBN= [(range(1000)+""), (range(1000)+""), (range(1000)+""), (range(100)+"")]
var isbn = (range(1000)+"-") + (range(1000)+"-") + (range(1000)+"-") + (range(100))

console.log(isbn)