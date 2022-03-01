export interface anuncio{
    id:number,
    img:String,
    titulo:String,
    descripcion:String,
    comentarios: comentario[],
    autor:{
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
    provincia:String,
    token:String
}
