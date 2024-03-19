import { useDispatch } from "react-redux"
import { updateShadowValue } from "../../features/shadows"

export default function ShadowColorPicker({inputData, shadowID}) {

  const dispatch = useDispatch()

  function handleInputs(e){
    dispatch(updateShadowValue({
      inputNumber: inputData.inputNumber,
      value: e.target.value,
      shadowID
    }))
  }

  return (
    <div className="mt-3">
      <p>{inputData.name}</p>
      <div className="flex mt-2">
        <input onChange={handleInputs} value={inputData.value} className="flex-grow border py-2 px-3 focus:outline-1 outline-gray-400" type="text" />
        <input onChange={handleInputs} value={inputData.value} className="h-[40px] cursor-pointer" type="color" />
      </div>
    </div>
  )
}