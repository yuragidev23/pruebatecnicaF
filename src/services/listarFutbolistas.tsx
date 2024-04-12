import axios from 'axios';
import { Futbolista, PagedResponse } from './interfaces';

const baseURL = 'http://localhost:8080/futbolistas/all';


async function getFutbolistas(page: number, size: number): Promise<PagedResponse<Futbolista>> {
    try {
        const response = await axios.get<PagedResponse<Futbolista>>(baseURL, {
            headers: {
                'Authorization': 'Basic ' + btoa('admin:admin'), // O 'admin:admin' si estás usando las credenciales de admin
            },
            params: {
                page,
                size,
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error al obtener futbolistas:', error);
        throw error;
    }
}

export default {
    getFutbolistas,
};
