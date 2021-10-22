export interface EjerciciosModel {
    id: number;
    nombre: string;
    equipo: string;
    tipo: string;
    partePrincipal: string;
    parteSecundaria: string;
    parteTerciaria: string;
    foto: string;
    descripcion: string;
    createdAt: Date;
    updatedAt: Date;
  }
  
  export interface GetEjercicios {
    Mensaje: EjerciciosModel[];
  }