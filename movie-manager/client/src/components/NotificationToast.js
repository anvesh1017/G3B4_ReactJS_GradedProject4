import Toast from "react-bootstrap/Toast";
import ToastContainer from "react-bootstrap/ToastContainer";

function NotificationToast({ displayToast, setDisplayToast }) {


  const removeToast = (id) => {

    setDisplayToast(id);
  };

  if (displayToast.length === 0) {
    return null;
  }

  return (
    <ToastContainer className="p-3 position-fixed" position={"top-end"} style={{ zIndex: 111 }}>
      {displayToast.map((item) => {
        return (
          <Toast
            key={item.id}
            onClose={() => removeToast(item.id)}
            delay={3000}
            autohide
          >
            <Toast.Header>
              <img
                src="holder.js/20x20?text=%20"
                className="rounded me-2"
                alt=""
              />
              <strong className="me-auto">{(item.headerMsg).toLowerCase() === 'success' ? <i className="bi bi-check-circle success-img"></i> : <i className="bi bi-x-circle error-img"></i> }{item.headerMsg}</strong>
            </Toast.Header>
            <Toast.Body className="bg-light text-start">{item.msg}</Toast.Body>
          </Toast>
        );
      })}
    </ToastContainer>
  );
}

export default NotificationToast;
