import { useState } from "react"
/* Fonction qui permet d'ajouter un elt dans une partie du DOM */
import { createPortal } from "react-dom"
import ModalResult from "./ModalResult"

export default function ModalBtn() {
  const [showModal, setShowModal] = useState(false)

  return (
    <>
    <button onClick={() => setShowModal(!showModal)} className="relative z-0 mx-auto mt-2 py-1 px-3 text-sm cursor-pointer rounded bg-blue-600 text-white hover:bg-blue-700">
        Get the code
    </button>
    {/* lorsque showModal est true, on affiche le modall */}
    {showModal && createPortal(<ModalResult closeModal={() => setShowModal(!showModal)} />, document.body)}
    </>
  )
}