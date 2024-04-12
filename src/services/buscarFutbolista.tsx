import axios from 'axios';
import { Futbolista } from './interfaces';



const url2 = 'http://localhost:8080/futbolistas';

async function GetFutbolistaId (id: number){
    try {
        const response = await axios.get<Futbolista>(`${url2}/${id}`, {
            headers: {
                'Authorization': 'Basic ' + btoa('admin:admin'), // O 'admin:admin' si estás usando las credenciales de admin
            },  
        });
        return response.data;
    } catch (error) {
        console.error('Error al obtener el futbolista:', error);
        return null;
    }

}


export default GetFutbolistaId