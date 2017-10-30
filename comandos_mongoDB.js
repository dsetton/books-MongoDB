//criar o banco de dados "books"
use books

db.createCollection("books")

db.books.insertMany([
    /* 1 */
    {
        "_id" : 1.0,
        "nome_livro" : "Livro 1",
        "nome_autor" : "Autor NOVO",
        "tipo" : "pocket book",
        "isbn" : "192-182-381-38",
        "editora" : "Editora 1",
        "n_paginas" : 100.0
    },

    /* 2 */
    {
        "_id" : 2.0,
        "nome_livro" : "Livro 2",
        "nome_autor" : "Autor 2",
        "tipo" : "e-book",
        "isbn" : "912-849-278-17",
        "editora" : "Editora 2",
        "n_paginas" : 200.0
    },

    /* 3 */
    {
        "_id" : 3.0,
        "nome_livro" : "Livro 3",
        "nome_autor" : "Autor 3",
        "tipo" : "pocket book",
        "isbn" : "281-837-172-31",
        "editora" : "Editora 3",
        "n_paginas" : 300.0
    },

    /* 4 */
    {
        "_id" : 4.0,
        "nome_livro" : "Livro Mitologia Nórdica",
        "nome_autor" : "Autor 4",
        "tipo" : "paperback",
        "isbn" : "719-395-871-72",
        "editora" : "Editora 4",
        "n_paginas" : 400.0
    },

    /* 5 */
    {
        "_id" : 5.0,
        "nome_livro" : "Livro 5",
        "nome_autor" : "Autor 5",
        "tipo" : "e-book",
        "isbn" : "276-584-717-23",
        "editora" : "Editora 5",
        "n_paginas" : 500.0
    },

    /* 6 */
    {
        "_id" : 6.0,
        "nome_livro" : "Livro 6",
        "nome_autor" : "Autor 6",
        "tipo" : "pocket book",
        "isbn" : "998-478-273-44",
        "editora" : "Editora 6",
        "n_paginas" : 600.0
    },

    /* 7 */
    {
        "_id" : 7.0,
        "nome_livro" : "Livro 7",
        "nome_autor" : "Vitor Cruz",
        "tipo" : "hardcover",
        "isbn" : "127-287-648-98",
        "editora" : "Editora 7",
        "n_paginas" : 700.0
    },

    /* 8 */
    {
        "_id" : 8.0,
        "nome_livro" : "Livro 8",
        "nome_autor" : "Autor 8",
        "tipo" : "paperback",
        "isbn" : "765-774-765-83",
        "editora" : "Editora 8",
        "n_paginas" : 800.0
    },

    /* 9 */
    {
        "_id" : 9.0,
        "nome_livro" : "Livro 9",
        "nome_autor" : "Autor 9",
        "tipo" : "paperback",
        "isbn" : "728-847-712-64",
        "editora" : "Editora 9",
        "n_paginas" : 675.0
    },

    /* 10 */
    {
        "_id" : 10.0,
        "nome_livro" : "Livro 10",
        "nome_autor" : "Autor 10",
        "tipo" : "e-book",
        "isbn" : "729-198-361-26",
        "editora" : "Editora 10",
        "n_paginas" : 750.0
    },

    /* 11 */
    {
        "_id" : 11.0,
        "nome_livro" : "Livro 11",
        "nome_autor" : "Autor 11",
        "tipo" : "pocket book",
        "isbn" : "599-827-316-98",
        "editora" : "Editora 11",
        "n_paginas" : 825.0
    },

    /* 12 */
    {
        "_id" : 12.0,
        "nome_livro" : "Livro 12",
        "nome_autor" : "Autor 1",
        "tipo" : "e-book",
        "isbn" : "110-283-891-77",
        "editora" : "Editora 12",
        "n_paginas" : 900.0
    },

    /* 13 */
    {
        "_id" : 13.0,
        "nome_livro" : "Livro 13",
        "nome_autor" : "Autor 4",
        "tipo" : "e-book",
        "isbn" : "819-747-189-31",
        "editora" : "Editora 5",
        "n_paginas" : 975.0
    },

    /* 14 */
    {
        "_id" : 14.0,
        "nome_livro" : "Livro 14",
        "nome_autor" : "Autor 2",
        "tipo" : "e-book",
        "isbn" : "721-381-028-34",
        "editora" : "Editora 7",
        "n_paginas" : 1050.0
    }
])