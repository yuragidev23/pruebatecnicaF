import { useEffect, useState } from 'react';
import listarFutbolistas from '../../../services/listarFutbolistas';
import './listarLayout.css';
import { Futbolista } from '../../../services/interfaces';

function ListarLayout() {
    const [futbolistas, setFutbolistas] = useState<Futbolista[]>([]);
    const [page, setPage] = useState<number>(0);
    const [size,] = useState<number>(5);
    const [totalPages, setTotalPages] = useState<number>(0);

    useEffect(() => {
        // Realizar la solicitud para obtener futbolistas con paginación
        async function fetchFutbolistas() {
            try {
                const data = await listarFutbolistas.getFutbolistas(page, size);
                setFutbolistas(data.content);
                setTotalPages(data.totalPages);
            } catch (error) {
                console.error('Error al obtener futbolistas:', error);
            }
        }
        fetchFutbolistas();
    }, [page, size]);

    return (
        <div className="container2">
            <h1>Listar</h1>
            {/* <ul>
                {futbolistas.map((futbolista) => (
                    <li key={futbolista.idfutbolista}>
                        <div><strong>Nombre y Apellidos:</strong> {futbolista.nombres} {futbolista.apellidos}</div>
                        <div><strong>Fecha de nacimiento:</strong> {futbolista.fechanaci}</div>
                        <div><strong>Características:</strong> {futbolista.caracteristicas}</div>
                        <div><strong>Posición:</strong> {futbolista.posicionJugador}</div>
                    </li>
                ))}
            </ul> */}

            <table className='table'>
                <thead>
                    <tr>
                        <th>Nombres y Apellidos</th>
                        <th>Fecha Nacimiento</th>
                        <th>Caracteristicas</th>
                        <th>Posición Jugador</th>
                    </tr>
                </thead>
                <tbody>
                    {futbolistas.map((futbolista) => (
                        <tr key={futbolista.idfutbolista}>
                            <td>{futbolista.nombres} {futbolista.apellidos}</td>
                            <td>{new Date(futbolista.fechanaci).toLocaleDateString()}</td>
                            <td>{futbolista.caracteristicas}</td>
                            <td>{futbolista.posicionJugador}</td>
                        </tr>
                    ))}
                </tbody>
            </table>


            <div className="pagination">
                {page > 0 && (
                    <button onClick={() => setPage(page - 1)} className='button-pagination'>
                        Anterior
                    </button>
                )}
                {page < totalPages - 1 && (
                    <button onClick={() => setPage(page + 1)} className='button-pagination'>
                        Siguiente
                    </button>
                )}
            </div>
        </div>
    );
}

export default ListarLayout;