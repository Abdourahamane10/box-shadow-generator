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
            
        },
        updateCheckbox: (state, action) => {
            
        }
    }
})

export const {removeShadow, addShadow, updateShadowValue, updateCheckbox} = shadowSlice.actions
export default shadowSlice.reducer
