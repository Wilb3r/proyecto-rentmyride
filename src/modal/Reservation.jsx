import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function Reservation({ car }) {
  const [show, setShow] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [selected, setSelected] = useState(false);
  const [validated, setValidated] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;

    if (form.checkValidity() === false) {
      e.stopPropagation();
    } else {
      const reservationData = {
        startDate,
        endDate,
        name,
        email,
        phone,
        carId: car.id,
      };
      
      setSelected(true);
      handleClose(); 
    }

    setValidated(true);
  };

  return (
    <>
      <Button
        variant={selected ? "success" : "primary"}
        onClick={handleShow}
        disabled={selected}
      >
        {selected ? "Reservado" : "Seleccionar"}
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{car.Manufacturer}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Group controlId="startDate">
              <Form.Label>Fecha de inicio:</Form.Label>
              &nbsp;
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                minDate={new Date()}
                dateFormat="dd/MM/yyyy"
                className="form-control"
              />
            </Form.Group>
            <Form.Group controlId="endDate">
              <Form.Label>Fecha de finalización:</Form.Label>
              &nbsp;
              <DatePicker
                selected={endDate}
                onChange={(date) => setEndDate(date)}
                minDate={startDate}
                dateFormat="dd/MM/yyyy"
                className="form-control"
              />
            </Form.Group>
            <Form.Group controlId="name">
              <Form.Label>Nombre:</Form.Label>
              &nbsp;
              <Form.Control
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <Form.Control.Feedback type="invalid">
                Por favor ingresa tu nombre.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="email">
              <Form.Label>Email:</Form.Label>
              &nbsp;
              <Form.Control
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <Form.Control.Feedback type="invalid">
                Por favor ingresa un correo electrónico válido.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="phone">
              <Form.Label>Teléfono:</Form.Label>
              &nbsp;
              <Form.Control
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
              <Form.Control.Feedback type="invalid">
                Por favor ingresa un número de teléfono.
              </Form.Control.Feedback>
              &nbsp;
            </Form.Group>
            <Button variant="primary" type="submit">
              Reservar
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Reservation;
