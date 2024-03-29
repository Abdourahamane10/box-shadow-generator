import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";

const initialState = [
    {
    id: nanoid(8),
    active: true,
    inset: false,
    inputs: [
        {
            inputNumber: 1,
            name: "Horizontal offset",
            value: 0,
            type: "range",
            minMax: [-250, 250]
        },
        {
            inputNumber: 2,
            name: "Vertical offset",
            value: 10,
            type: "range",
            minMax: [-250, 250]
        },
        {
            inputNumber: 3,
            name: "Blur radius",
            value: 15,
            type: "range",
            minMax: [0, 250]
        },
        {
            inputNumber: 4,
            name: "Spread offset",
            value: -3,
            type: "range",
            minMax: [-250, 250]
        },
        {
            inputNumber: 5,
            name: "Color",
            value: "#4f4f4f",
            type: "color",
            /* Pas de minMax vu que c'est des couleurs */
        }
    ]
}]

export const shadowSlice = createSlice({
    name: "shadows",
    initialState,
    reducers: {
        removeShadow: (state, action) => {
            /* On récupère l'index du shadow (ombre) à supprimer */
            const shadowIndexToRemove = state.findIndex(shadow => shadow.id === action.payload)
            /* On supprime l'ombre (shadow) en question dans le state (tableau des ombres) */
            state.splice(shadowIndexToRemove, 1)
        },
        addShadow: (state, action) => {
            state.push(
                {
                    id: nanoid(8),
                    active: true,
                    inset: false,
                    inputs: [
                        {
                            inputNumber: 1,
                            name: "Horizontal offset",
                            value: 0,
                            type: "range",
                            minMax: [-250, 250]
                        },
                        {
                            inputNumber: 2,
                            name: "Vertical offset",
                            value: 10,
                            type: "range",
                            minMax: [-250, 250]
                        },
                        {
                            inputNumber: 3,
                            name: "Blur radius",
                            value: 15,
                            type: "range",
                            minMax: [0, 250]
                        },
                        {
                            inputNumber: 4,
                            name: "Spread offset",
                            value: -3,
                            type: "range",
                            minMax: [-250, 250]
                        },
                        {
                            inputNumber: 5,
                            name: "Color",
                            value: "#4f4f4f",
                            type: "color",
                            /* Pas de minMax vu que c'est des couleurs */
                        }
                    ]
                }
            )
        },
        updateShadowValue: (state, action) => {
            /* On sélectionne l'ombre en question */
            const currentShadow = state.find(shadow => shadow.id === action.payload.shadowID)

            /* Une fois qu'on a l'ombre on sélectionne l'input qu'on veut changer */
            const currentInput = currentShadow.inputs.find(input => input.inputNumber === action.payload.inputNumber)

            /* Une fois qu'on a l'input qu'on veut changer, on change sa valeur */
            currentInput.value = action.payload.value
            
        },
        updateCheckbox: (state, action) => {
            /* On sélectionne l'ombre en question */
            const currentShadow = state.find(shadow => shadow.id === action.payload.shadowID)

            currentShadow[action.payload.name] = !currentShadow[action.payload.name]
        }
    }
})

export const {removeShadow, addShadow, updateShadowValue, updateCheckbox} = shadowSlice.actions
export default shadowSlice.reducer
