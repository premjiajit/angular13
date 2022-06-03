
import { createReducer, on } from "@ngrx/store";
import { increment, decrement, reset } from "./counter.action";
import { intialState } from "./counter.state";



const _counterReducer = createReducer(
    intialState,
  on(increment, 
    (state)=>{
        return {
            ...state,
            cartCount: state.cartCount + 1
        }
    }),
  on(decrement,
    (state)=>{ return {
        ...state,
        totalcount:state.totalcount + 1
      }
   }),
  on(reset,(state)=>{
      return {
          ...state,
          cartCount: 0 ,
          totalcount:0
      }
  }) 
);

export function counterReducer(state:any, action: any){
          return _counterReducer(state,action)
  }