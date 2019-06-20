// class HelloWorld{
//     constructor(public message: string){
//     }
// }
// var hello = new HelloWorld("hola type Script");
// console.log(hello.message);
//creamos una funcion con todos los libros de nuestra "biblioteca"
function GetAllBooks() {
    //creamos un array de libros ,cada libro con 3 propiedades
    var books = [
        { title: "ulises", author: "jose vargas", available: false, categoria: Category.biografia },
        { title: "el fuego ", author: "emilialo alorda", available: false, categoria: Category.ficcion },
        { title: "el frio ", author: "RAcing Club", available: true, categoria: Category.historia },
        { title: "el calor", author: "joquin", available: false, categoria: Category.infantiles },
        { title: "macri gato ", author: "juan miron", available: true, categoria: Category.poesia },
        { title: "sionceramente", author: "el corte de luz", available: false, categoria: Category.poesia },
    ];
    //devuelvo los libros 
    return books;
}
//funcion que recibe un array de libros y registrara en otro array 
//el primer libro que este disponible
function LogFirstAvailable(books) {
    //variable que almacenen la cantidad de libros
    var numberOfBooks = books.length;
    //varialble que alamacene el primer tittulo disponible,
    var firstAvailable = '';
    //for que rrecorer la matrix de libros en busca del primero con la propiedad
    //available en true ,current sera la variable que representa el 
    //libro que se examina en cada iteracion
    for (var _i = 0, books_1 = books; _i < books_1.length; _i++) {
        var currenteBook = books_1[_i];
        //valido si el libro esta disponible y asigno 
        //su titulo a la variable 
        if (currenteBook.available) {
            firstAvailable = currenteBook.title;
            break; //salgo del bucle for 
        }
    }
    // muestro el total de libros
    console.log('total de libros' + numberOfBooks);
    //Muestro el primer libro que capture dentro del for
    console.log('primer libro disponible ' + firstAvailable);
}
//Demostracion de Scope de 
function ScopeTest() {
    if (true) {
        var foo = "use anywhere"; //var usamos para variables globales
        var bar = ' use in this block'; //let usamos para varaibles de bloques 
    }
    console.log(foo);
    //console.log(bar);
}
//recibe una categoria como parametro y devuelve un array de string 
//con el conjun to de libros
function GetbooksTitlesByCategory(categoryFilter) {
    //muestro la categoria que recibimos por parametro 
    console.log('Getting book  in category : ' + Category[categoryFilter]);
    //alamaceno todos los libros en una constante
    var AllBooks = GetAllBooks();
    //creo un array de String Vacio , para alamacenar los titulos de los 
    //libros que coninciden con parametro categoryFilter
    var filteredTitles = [];
    //buscamos todos los libros con esa categoria
    for (var _i = 0, AllBooks_1 = AllBooks; _i < AllBooks_1.length; _i++) {
        var currenteBook = AllBooks_1[_i];
        if (currenteBook.categoria === categoryFilter) {
            //agregamos a nuestro array de titulos 
            filteredTitles.push(currenteBook.title);
        }
    }
    //retornamos los titulos filtrados
    return filteredTitles;
}
//CREO UN ENUM
var Category;
(function (Category) {
    Category[Category["biografia"] = 0] = "biografia";
    Category[Category["poesia"] = 1] = "poesia";
    Category[Category["ficcion"] = 2] = "ficcion";
    Category[Category["historia"] = 3] = "historia";
    Category[Category["infantiles"] = 4] = "infantiles";
})(Category || (Category = {}));
//funcion que recibe un array de strimg con titulos
function LogBookTitles(titles) {
    for (var _i = 0, titles_1 = titles; _i < titles_1.length; _i++) {
        var title = titles_1[_i];
        console.log(title);
    }
}
//declaro una constante y le asigno el valor devuelto por la funcion getallbooks
var todosLosLibros = GetAllBooks();
//veamos como podemos modificart una constante
//la palabra const solo garantiza que el identificador no se modificara para
//hacer referencia a algo completamente diferente
// todosLosLibros.push({ title:"moby moby",author:"jose peres", available:true});
// todosLosLibros.push({ title:"50 sombras de la vecina ",author:"crintian", available:true});
//TEST de Funciones
LogFirstAvailable(todosLosLibros);
ScopeTest();
console.log('+++++++++++++++++++++++++++++++++++++++++');
GetbooksTitlesByCategory(Category.poesia);
var librosDePoesia = GetbooksTitlesByCategory(Category.poesia);
LogBookTitles(librosDePoesia);
var librosDeFiccion = GetbooksTitlesByCategory(Category.ficcion);
LogBookTitles(librosDeFiccion);
//# sourceMappingURL=test.js.map