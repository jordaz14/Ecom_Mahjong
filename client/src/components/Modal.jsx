function Modal({ open, children, onClose }) {
  if (!open) return null;

  return (
    <>
        <div className="bg-black bg-opacity-40 fixed h-full w-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50">
          <div className="fixed h-4/5 w-4/5 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <p className="text-white">{children}</p>
            <button className="text-black bg-gray-100" onClick={onClose}>
              Close Modal
            </button>
          </div>
        </div>
    </>
  );
}

export default Modal;
