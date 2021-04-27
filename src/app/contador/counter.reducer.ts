import { createReducer, on } from "@ngrx/store";
import * as actions from './counter.actions';

export const initialState = 30;

const _contadorReducer = createReducer(initialState,
    on(actions.incrementar, (state) => state + 1),
    on(actions.decrementar, (state) => state - 1),
    on(actions.multiplicar, (state, { numero }) => state * numero),
    on(actions.dividir, (state, { numero }) => state / numero),
    on(actions.resetear, (state) => 0)
);

export function counterReducer(state, action) {
    return _contadorReducer(state, action);
}