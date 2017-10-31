var dataUpdat = {
    "_id" : (parseInt( new Date().getTime() )),
    "nome_livro" : "Livro da Vida",
    "nome_autor" : "Vitor Cruz",
    "tipo" : "e-book",
    "isbn" : "829-183-129-63",
    "editora" : "Editora Abril",
    "n_paginas" : 182
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