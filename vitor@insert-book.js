//INSERT

function range(numero){
    return (Math.floor(Math.random() * numero))
}

var _idRandom = (parseInt( (new Date().getTime())/10000 ))
var _array_BookTypes = ["hardcover", "paperback", "pocket book", "e-book"]
var _isbn = (range(1000)+"-") + (range(1000)+"-") + (range(1000)+"-") + (range(100))

var dataUpdat = {
    "_id" : _idRandom,
    "nome_livro" : "Livro " + _idRandom,
    "nome_autor" : 
        [
            //"asdfas", "sdfasdf", "hbkqkas"
            {autor_1: "Autor A_" + range(10) },
            {autor_2: "Autor B_" + range(10) },
            {autor_3: "Autor C_" + range(10) },
            {autor_4: "Autor D_" + range(10) },
            {autor_5: "Autor E_" + range(10) }
        ],
    "tipo" : _array_BookTypes[range(4)],
    "isbn" : _isbn,
    "editora" : "Editora "+range(15),
    "n_paginas" : range(1200)
}

db.runCommand({
    findAndModify: "books",
    query: { "_id" : dataUpdat._id},

    update: {
        $set: {
            //"_id" : dataUpdat._id,
            "nome_livro" : dataUpdat.nome_livro,
            "nome_autor" : dataUpdat.nome_autor,
            "tipo" : dataUpdat.tipo,
            "isbn" : dataUpdat.isbn,
            "editora" : dataUpdat.editora,
            "n_paginas" :dataUpdat.n_paginas 
        }
    },

    upsert: true,
    new: true
} )