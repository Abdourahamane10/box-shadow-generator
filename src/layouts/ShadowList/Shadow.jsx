import { useState, useEffect } from "react"
import chevron from "../../assets/chevron.svg"
import ShadowColorPicker from "./ShadowColorPicker"
import ShadowRange from "./ShadowRange"

export default function Shadow({pannelNumber, shadow}) {

    const [toggleShadow, setToggleShadow] = useState(false)

    useEffect(() => {
      if(pannelNumber === 1){
        setToggleShadow(true)
      }
    }, [])

    /* On construit un tableau avec les éléments à afficher */
    const shadowInputs = shadow.inputs.map((input, index) => {
        if(input.type === "range"){
            return <ShadowRange key={index} inputData={shadow.inputs[index]} shadowID={shadow.id} />
        }
        else if(input.type === "color"){
            return <ShadowColorPicker key={index} inputData={shadow.inputs[index]} shadowID={shadow.id} />
        }
    })

  return (
    <li className="bg-gray-50 border-b border-gray-300">
        <button onClick={() => setToggleShadow(!toggleShadow)} className="w-full py-4 px-6 flex items-center justify-between">
          <span>Shadow {pannelNumber}</span>
          <img className="font-bold w-5" src={chevron} alt=""
          style={{ 
            transform: `${toggleShadow ? "rotate(90deg)" : "rotate(0deg)"}`
           }} />
        </button>
        {toggleShadow && <>
          <div className="flex items-end py-4 px-6">
          {/* <Checkbox/> */}
          {/* <Checkbox/> */}
          <button className="ml-auto text-sm bg-red-600 text-white hover:bg-red-700 py-1 px-3 rounded">
            Remove
          </button>
        </div>
        <div className="px-6 py-4">
          {shadowInputs}
        </div>
        </>}
    </li>
  )
}