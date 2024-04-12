
import React, { useState } from 'react';
import GetFutbolistaId from '../../../services/buscarFutbolista';
import { Futbolista } from '../../../services/interfaces';
import Modal from 'react-modal';
import './buscarLayout.css';

function BuscarLayout() {
    const [id, setId] = useState<number | null>(null);
    const [futbolista, setFutbolista] = useState<Futbolista | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleIdChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const inputId = parseInt(event.target.value, 10);
        if (!isNaN(inputId)) {
            setId(inputId);
        } else {
            setId(null);
        }
    };

    const handleSearch = async () => {
        if (id !== null) {
            const futbolistaData = await GetFutbolistaId(id);
            setFutbolista(futbolistaData);
            setIsModalOpen(true);
        }
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setFutbolista(null);
    };

    return (
        <div className="container3">
            <h1>Buscar</h1>
            <div className="search-container">
                <input
                    type="number"
                    value={id ?? ''}
                    onChange={handleIdChange}
                    placeholder="Ingrese ID del futbolista"
                    className="search-input"
                />
                <button onClick={handleSearch} className="search-button">
                    Buscar
                </button>
            </div>

            {/* Modal para mostrar los datos del futbolista */}
            <Modal
                isOpen={isModalOpen}
                onRequestClose={closeModal}
                contentLabel="Detalles del Futbolista"
                className="modal"
                overlayClassName="modal-overlay"
            >
                {futbolista ? (
                    <div>
                        <h2 className='title-modal'>Detalles del Futbolista</h2><br />
                        <p className='text-modal'><strong>Nombres y Apellidos:</strong> {futbolista.nombres} {futbolista.apellidos}</p><br />
                        <p className='text-modal'><strong>Fecha de Nacimiento:</strong> {new Date(futbolista.fechanaci).toLocaleDateString()}</p><br />
                        <p className='text-modal'><strong>Características:</strong> {futbolista.caracteristicas}</p><br />
                        <p className='text-modal'><strong>Posición del Jugador:</strong> {futbolista.posicionJugador}</p><br />
                        <button onClick={closeModal} className="close-button">
                            Cerrar
                        </button>
                    </div>
                ) : (
                    <p>No se encontró un futbolista con ese ID.</p>
                )}
            </Modal>
        </div>
    );
}

export default BuscarLayout;
