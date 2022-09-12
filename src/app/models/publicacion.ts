export class Publicacion {

    public id: number;
    public idSeccionForo: number;
    public contenido: String;
    public fecha: String;
    public adjunto: String;

    constructor(){
        this.id = 0,
        this.idSeccionForo = 0,
        this.contenido= '',
        this.fecha= '',
        this.adjunto = '';
    }
}