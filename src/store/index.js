import { configureStore } from '@reduxjs/toolkit'
import signerSlice from '../features/signer/signerSlice'

const reducers = {
    signer : signerSlice
}

export default configureStore({
    reducer: reducers
})