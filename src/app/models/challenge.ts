export class Challenge {

    public id: number;
    public titulo: String;
    public contenido: String;
    public resumen:String;
    public dificultad: number;
    public video: String;

    public idChef: number;
    public nombreChef: String;
    public idCategoria: number;
    public nombreCategoria: String;
    public fechaInicio: String;
    public fechaFin: String;
    public inscrito: Boolean;

    constructor(){
        this.id = 0,
        this.titulo = '',
        this.contenido= '',
        this.resumen= '',
        this.dificultad = 0,
        this.video = '';

        this.idChef = 0,
        this.nombreChef= '',
        this.idCategoria = 0,
        this.nombreCategoria = '';
        this.fechaInicio = '';
        this.fechaFin = '';
        this.inscrito = false;

    }
}
