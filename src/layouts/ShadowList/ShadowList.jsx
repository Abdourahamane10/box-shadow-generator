import { useDispatch, useSelector } from "react-redux"
import { addShadow } from "../../features/shadows"
import shadows from "../../features/shadows"
import Shadow from "./Shadow"

export default function ShadowList() {

  const shadows = useSelector(state => state.shadows)

  const dispatch = useDispatch()

  return (
    <div>
        <div className="flex justify-between p-6 border-b border-gray-300">
            <p className="font-bold text-lg">Customize shadows</p>
            <button onClick={() => dispatch(addShadow())} className="py-1 px-3 rounded bg-blue-600 text-sm focus:outline-none focus:ring-4 focus:ring-offset-2 hover:bg-blue-700 text-white">
                Add a shadow
            </button>
        </div>
        <ul>
          {shadows.map((shadow, index) => (
                    <Shadow
                    key={shadow.id}
                    pannelNumber={index + 1}
                    shadow={shadow}
                    />
                ))}     
        </ul>
    </div>
  )
}