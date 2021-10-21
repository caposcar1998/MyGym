export interface RutinaModel {
  id: number;
  nombre: string;
  intensidad: number;
  tiempo: number;
  idUsuario: number;
  foto: string;
  video: number;
}

export interface GetRutinas {
  response: RutinaModel[];
}