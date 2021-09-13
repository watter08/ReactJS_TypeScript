import {
    createSlice,
    PayloadAction
  } from "@reduxjs/toolkit";
  import { HomeInitialState } from './InitialState';
  
  import * as HomeThunks from "./HomeThunks";

  interface HomeInterfaces {
      Message : string,
      MessageStatus : string
  }
  
  //Thunks
  
  const {
    fetchHelloWorld    
  } = HomeThunks;
  
  //Initial State
  const initialState = HomeInitialState as HomeInterfaces;
  
  // Slice Reducer
  
  const HomeSlice = createSlice({
    name: "Home",
    initialState,
    reducers: {
      HelloWorldCleared(state, action) {
        state.Message = initialState.Message;
      },
    },
    extraReducers: {   
      [fetchHelloWorld.pending.toString()]: (state : any, action : PayloadAction<string>) : any => {
        state.MessageStatus = "loading";
      },
      [fetchHelloWorld.fulfilled.type]: (state , action: PayloadAction<any>) => {
        state.Message = action.payload;
        state.MessageStatus = "loaded";
      },
    },
  });
  

  
  export const getHomeHelloWorld = (state : any) =>  state.Home.Message;
  export const getHomeHelloWorldStatus = (state : any) => state.Home.MessageStatus;
  
  
  
  
  
  
  
  export default HomeSlice.reducer;
  
  export const {
    HelloWorldCleared
  } = HomeSlice.actions;
  
  //thunk functions
  
  export { HomeThunks };
  