import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";


// const rootReducer = createAsyncThunk({})
// export type RootState = ReturnType<typeof rootReducer>



import {
  getHelloWorld,
} from "../../../Services/Home/HelloWolrdServices";






export const fetchHelloWorld = createAsyncThunk(
  "Home/fetchHelloWorld",
  async () => {
    try {
      return await getHelloWorld();
    } catch (error : any) {
        toast.error(error);
    }
  }
);

