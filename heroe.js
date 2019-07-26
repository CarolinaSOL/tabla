class Heroe {
    constructor(id, nombre, apellido) {
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = "";
        //Metodos
        this.toString = toString;
        function toString() {
            return "id: " + this.id + ", Nombre: " + this.nombre + " " + this.apellido;
        }
    }
}
