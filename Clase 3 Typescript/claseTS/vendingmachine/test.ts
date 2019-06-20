// class HelloWorld{

//     constructor(public message: string){

//     }
// }
// var hello = new HelloWorld("hola type Script");
// console.log(hello.message);

//creamos una funcion con todos los libros de nuestra "biblioteca"
function GetAllBooks() {
    //creamos un array de libros ,cada libro con 3 propiedades
    let books = [
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
function LogFirstAvailable(books): void {
    //variable que almacenen la cantidad de libros
    let numberOfBooks: number = books.length;
    //varialble que alamacene el primer tittulo disponible,
    let firstAvailable: string = '';
    //for que rrecorer la matrix de libros en busca del primero con la propiedad
    //available en true ,current sera la variable que representa el 
    //libro que se examina en cada iteracion
    for (let currenteBook of books) {

        //valido si el libro esta disponible y asigno 
        //su titulo a la variable 
        if (currenteBook.available) {
            firstAvailable = currenteBook.title
            break;//salgo del bucle for 
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
        var foo = "use anywhere";//var usamos para variables globales
        let bar = ' use in this block';//let usamos para varaibles de bloques 
    }

    console.log(foo);
    //console.log(bar);
}

//recibe una categoria como parametro y devuelve un array de string 
//con el conjun to de libros
function GetbooksTitlesByCategory(categoryFilter: Category): Array<String> {
    //muestro la categoria que recibimos por parametro 
    console.log('Getting book  in category : ' + Category[categoryFilter]);
    //alamaceno todos los libros en una constante
    const AllBooks = GetAllBooks();
    //creo un array de String Vacio , para alamacenar los titulos de los 
    //libros que coninciden con parametro categoryFilter
    const filteredTitles: string[] = [];
    //buscamos todos los libros con esa categoria
    for (let currenteBook of AllBooks) {
        if (currenteBook.categoria === categoryFilter) {
            //agregamos a nuestro array de titulos 
            filteredTitles.push(currenteBook.title);
        }
    }
    //retornamos los titulos filtrados
    return filteredTitles;
}

//CREO UN ENUM
enum Category { biografia, poesia, ficcion, historia, infantiles }

//funcion que recibe un array de strimg con titulos
function LogBookTitles(titles: string[]): void {
    for (let title of titles)
        console.log(title);

}


//declaro una constante y le asigno el valor devuelto por la funcion getallbooks
const todosLosLibros = GetAllBooks();
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
const librosDePoesia = GetbooksTitlesByCategory(Category.poesia);
LogBookTitles(librosDePoesia);
const librosDeFiccion = GetbooksTitlesByCategory(Category.ficcion);
LogBookTitles(librosDeFiccion);
