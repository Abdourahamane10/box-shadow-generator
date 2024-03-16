import {configureStore} from "@reduxjs/toolkit"
import shadows from "./features/shadows"

export const store = configureStore({
    reducer: {
        shadows
    }
})