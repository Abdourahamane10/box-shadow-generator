import getBoxShadowValue from "../../../utils/getBoxShadowValue"
import { useSelector } from "react-redux"
import { useEffect } from "react"

export default function ModalResult({closeModal}) {

  const shadowValues = useSelector(state => state.shadows)

  /* Pour gérer le scroll avec l'affichage de la modale */
  useEffect(() => {
    /* On empêche le scroll quand la modale est ouverte */
    document.body.style.overflowY = "hidden"
    /* On retourne une fonction de nettoyage qui va remmettre le scroll juste avant la disparition (destruction) de la modale. Cette fonction sera exécutée que juste avant destruction de la modale et non après 1ere création du composant et non juste avant mise à jour du composanr car on a mis un tableau en 2nd argument et il est vide */
    document.body.style.overflowY = "auto"
  }, [])

  /* On évite  le spam (ne pas laisser cliquer plusieurs fois si l'utilisateur a déjà copié le code) pour le bouton "Copy" */
  let runningAnimation = false
  function handleCopy(e){
    if(!runningAnimation){
      runningAnimation = true
      e.target.textContent = "Copied !"
      setTimeout(() => {
        e.target.textContent = "Copy"
        runningAnimation = false
      }, 1250)
    }
    /* On copie dans la presse papier le code du box-shadow */
    navigator.clipboard.writeText(`box-shadow: ${getBoxShadowValue(shadowValues)}`)
  }

  return (
    <div onClick={closeModal} className="fixed z-10 flex items-center justify-center inset-0 bg-gray-500/75">
      <div 
      /* Pour éviter que quand on clique sur le modal il se ferme */
      onClick={e => e.stopPropagation()}
      className="max-w-[400px] rounded p-7 bg-gray-50 mb-[10vh]">
        <div className="flex items-end mb-5">
          <p className="font-semibold mr-5">Here is your code 🎷</p>
          <button onClick={handleCopy} className="ml-auto mr-2 text-sm bg-blue-600 text-white hover:bg-blue-700 py-1 px-3 rounded">
            Copy
          </button>
          <button
          onClick={closeModal} 
          className="text-sm bg-red-600 text-white hover:bg-red-700 py-1 px-3 rounded">
            Close
          </button>
        </div>
        <p className="p-5 bg-gray-100 rounded">
          <span className="font-semibold">box-shadow : </span>
          <span>{getBoxShadowValue(shadowValues)}</span>
        </p>
      </div>
    </div>
  )
}