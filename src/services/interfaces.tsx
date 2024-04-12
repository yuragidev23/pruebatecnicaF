export interface Futbolista {
    idfutbolista: number; // El ID del futbolista
    nombres: string; // Los nombres del futbolista
    apellidos: string; // Los apellidos del futbolista
    fechanaci: string; // La fecha de nacimiento del futbolista en formato ISO 8601
    caracteristicas: string; // Las características del futbolista
    posicionJugador: string; // La posición del jugador en el campo
}

// Interfaz para la respuesta paginada de la API
export interface PagedResponse<T> {
    content: T[];
    totalPages: number;
    totalElements: number;
    size: number;
    number: number;
}