import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";

const initialState = [
        {
            inputNumber: 1,
            name: "Border raduis",
            value: 25,
            type: "range",
            slice: "boxProperties",
            minMax: [0, 250]
        },
        {
            inputNumber: 2,
            name: "Height",
            value: 250,
            type: "range",
            slice: "boxProperties",
            minMax: [0, 500]
        },
        {
            inputNumber: 3,
            name: "Width",
            value: 250,
            type: "range",
            slice: "boxProperties",
            minMax: [0, 500]
        },
        {
            inputNumber: 4,
            name: "Background Color",
            value: "#fff",
            type: "color",
            slice: "boxProperties",
            /* Pas de minMax vu que c'est des couleurs */
        }
]

export const boxSlice = createSlice({
    name: "boxProperties",
    initialState,
    reducers: {
        updateBoxValue: (state, action) => {
            /* On cherche la partie du state (elt du state) qui correspond au numéro de l'input dispatché par la fonction handleInputs qui s'exécute lorsqu'on change la valeur de l'input, et on met à jour sa valeur par la valeur mise par l'utilisateur */
            state.find(el => el.inputNumber === action.payload.inputNumber).value = action.payload.value
        }
    }
})

export const {updateBoxValue} = boxSlice.actions
export default boxSlice.reducer
