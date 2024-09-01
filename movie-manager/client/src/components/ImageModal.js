import Modal from 'react-bootstrap/Modal';
import Image from 'react-bootstrap/Image';

function ImageModal({showModal, handleModalClose, imageSrc, title}) {

  return (
    <>

      <Modal className='image-modal' show={showModal} onHide={handleModalClose}>
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
            <Image alt={title} src={imageSrc} rounded />
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ImageModal;