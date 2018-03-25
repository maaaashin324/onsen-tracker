import React from 'react';
import PropTypes from 'prop-types';
import { Form, FormGroup, FormControl, Col, Button, ControlLabel, Modal } from 'react-bootstrap';

const Register = ({ postOnsenData, toggleModal, onToggleModal, modalMessage }) => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const onsen = {
      Name: e.target[0].value,
      Address: e.target[1].value,
      Rating: +e.target[2].value,
    };
    postOnsenData(onsen);
  };

  const handleClose = (e) => {
    e.preventDefault();
    toggleModal();
  };

  return (
    <div className="register">

      <Modal
        onHide={handleClose}
        show={onToggleModal}
      >
        <Modal.Header closeButton>
          <Modal.Title>Finish</Modal.Title>
        </Modal.Header>

        <Modal.Body>{modalMessage}</Modal.Body>

        <Modal.Footer>
          <Button
            bsStyle="primary"
            onClick={handleClose}
          >
            OK
          </Button>
        </Modal.Footer>
      </Modal>

      <Form horizontal onSubmit={handleSubmit} style={{ marginTop: '100px' }}>
        <FormGroup controlId="formHorizontalName">
          <Col componentClass={ControlLabel} sm={2}>
            Name
          </Col>
          <Col sm={6}>
            <FormControl type="text" placeholder="Fill in Onsen name" />
          </Col>
        </FormGroup>

        <FormGroup controlId="formHorizontalAddress">
          <Col componentClass={ControlLabel} sm={2}>
            Address
          </Col>
          <Col sm={6}>
            <FormControl type="text" placeholder="Fill in Onsen address" />
          </Col>
        </FormGroup>

        <FormGroup controlId="formHorizontalRating">
          <Col componentClass={ControlLabel} sm={2}>
            Rating
          </Col>
          <Col sm={4}>
            <FormControl type="text" placeholder="Fill in Onsen Rating" />
          </Col>
        </FormGroup>

        <Col smOffset={2} sm={10}>
          <Button type="submit">Submit</Button>
        </Col>
      </Form>
    </div>
  );
};

Register.propTypes = {
  postOnsenData: PropTypes.func.isRequired,
  onToggleModal: PropTypes.bool.isRequired,
  toggleModal: PropTypes.func.isRequired,
  modalMessage: PropTypes.string.isRequired,
};

export default Register;
