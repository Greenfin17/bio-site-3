// ContactModal.js

import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import {
  Button, Modal,
  ModalBody
} from 'reactstrap';
import ContactCard from './ContactCard';

const ContactModal = () => {
  const [modal, setModal] = useState(true);
  const history = useHistory();

  const toggle = () => {
    setModal(!modal);
    history.push('/');
  };
  return (
    <Modal id='contact-modal' tabIndex='-1' aria-labelledby='exampleModalLabel' aria-hidden='true'
      isOpen={modal} toggle={toggle}>
      <ModalBody>
        <ContactCard />
      </ModalBody>
      <div className='modal-footer'>
        <Button color='secondary' onClick={toggle}>Exit</Button>
      </div>
    </Modal>
  );
};
export default ContactModal;
