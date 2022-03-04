export interface anuncio{
    id:number,
    img:string,
    titulo:string,
    descripcion:string,
    comentarios: comentario[],
    autor?:{
        id:Number
    }
}

export interface comentario{
    id:number,
    contenido:String,
    user: usuario,
    fecha:Date,
}

export interface usuario{
    id:number,
    name:String,
    nickname:String,
    email:String,
    provincia:String
}
