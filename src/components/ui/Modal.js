import { createPortal } from "react-dom"

export const Modal = ({ children, isOpen, onClose }) => {
  const showModalClass = isOpen ? 'is-active' : ''

  const modalElement = document.getElementById('modal')

  if(!modalElement){
    return
  }

  return createPortal(
    <div className={`modal ${showModalClass}`}>
      <div className="modal-background"></div>
        <div className="modal-content">
          <div className="box">
            {children}
          </div>
        </div>
      <button className="modal-close is-large" aria-label="close" onClick={onClose}></button>
    </div>,
    document.getElementById('modal')
  )
}