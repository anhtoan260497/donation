import { createSlice } from "@reduxjs/toolkit";

export const signerSlice = createSlice({
  name: "signerSlice",
  initialState: {
    signerAddress: null,
  },
  reducers: {
    updateSignerAddress: (state,action) => {
        state.signerAddress = action.payload
    },
  },
});

export const {updateSignerAddress} = signerSlice.actions
export default signerSlice.reducer

