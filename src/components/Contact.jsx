import React, { useState } from 'react';
import '../css/Contact.css'; 

export function Contact() {
    const [showForm, setShowForm] = useState(false);

    const toggleForm = () => {
        setShowForm(!showForm);
    };

    return (
        <div className="contact-container">
            <h2>Contáctanos</h2>
            <p>¡Estamos aquí para ayudarte! No dudes en ponerte en contacto con nosotros si tienes alguna pregunta o necesitas asistencia.</p>

            <p><strong>Teléfono:</strong> <a href="#">+503 2345-6789</a></p>
            <p><strong>Gmail:</strong> <a href="#">rentmyride@gmail.com</a></p>

            <p><strong>Redes Sociales:</strong></p>
            <ul>
                <li><a href="#">Facebook</a></li>
                <li><a href="#">X</a></li>
                <li><a href="#">Instagram</a></li>
            </ul>

            <button onClick={toggleForm} className="contact-form-toggle">Abrir Formulario</button>

            {showForm && (
                <div className="contact-form-overlay">
                    <div className="contact-form">
                        <h3>Formulario de Contacto</h3>
                        <form className="horizontal-form">
                        &nbsp; 
                            <div className="form-group">
                                <label htmlFor="name">Nombre:</label>
                                &nbsp; 
                                <input type="text" id="name" name="name" />
                            </div>
                            &nbsp; 
                            <div className="form-group">
                                <label htmlFor="email">Gmail:</label>
                                &nbsp; 
                                <input type="email" id="email" name="email" />
                            </div>
                            &nbsp; 
                            <div className="form-group">
                                <label htmlFor="message">Mensaje:</label>
                                &nbsp; 
                                <textarea id="message" name="message"></textarea>
                            </div>
                            &nbsp; 
                            <div className="button-group">
                                <button type="submit">Enviar</button>
                                &nbsp; 
                                <button onClick={toggleForm} className="close-form-button">Cerrar</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            <p>¡Síguenos en las redes sociales para obtener las últimas actualizaciones, promociones especiales y más!</p>
        </div>
    );
}

 export default Contact;
