// creacion del primer objeto literal
// por defecto tien proto ya que los objetos literales no sean instancias que lo ayamos creado, son instancias del prototipo object
//y por eso lo eredan proto 
const natalia = { //creacion del objeto literal, y sus atributos
    name: "Natalia",
    age: 20,
    cursosAprobados: [ //creacion del array
        "Curso definitivo HTML y CSS",
        "Curso proactico de HTML y css",
    ],
    //creacion de metodos al objeto literal
    aprobarCurso(nuevoCursito) {
        this.cursosAprobados.push(nuevoCursito) //hace referencia al mismo objeto natalia

    }
};

//Hcer que nataila apruebe otro curso
//natalia.cursosAprobados.push("Curso de responsive designe");   //con el puento podemos acceder  a sus propiedades y a fututo a sus metodos

//creacion del primer prototipo
function Student(name, age, cursosaprobados) {
    //atributos
    this.name = name;
    this.age = age;
    this.cursosaprobados = cursosaprobados;
}

//metodos
//llamado de la funcion, prototype, nombre del metodo, 
Student.prototype.aprobarCurso  = function(nuevoCursito) {
    this.cursosaprobados.push(nuevoCursito)

}
//crando instancia del prototipo
const juanita = new Student(
    //enviando argumentos a la funcion
    "Juanita Alejandra",
    52,
    [
        "Curso de Introduccion a los videojuegos",
        "curso de python"
    ]
);

//Prototipos con la sintaxis de clases



















