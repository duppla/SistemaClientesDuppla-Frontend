export interface CaseDto {
    email: string;
    tipo: Tipo;
    asunto: string;
    comentario: string;
    calificacion: number;
    // Propiedades adicionales según el tipo de caso
    servicio_inconformidad?: string;
    tipo_inconformidad?: string;
    tipo_afectacion?: string;
    subtipo_afectacion?: string;
    ubicacion_mmto?: string;
    tipo_solicitud?: string;
  }
  
export enum Tipo {
    INCONFORMIDAD_CON_SERVICIO_PRESTADO = 'INCONFORMIDAD_CON_SERVICIO_PRESTADO',
    MANTENIMIENTOS = 'MANTENIMIENTOS',
    PETICIONES_Y_RECLAMOS = 'PETICIONES_Y_RECLAMOS',
  }