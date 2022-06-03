import { createAction } from "@ngrx/store"; 
export const increment =  createAction('inc');
export const decrement =  createAction('dec');
export const reset =  createAction('reset');