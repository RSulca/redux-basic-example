import { createAction, props } from '@ngrx/store';

export const incrementar = createAction('[Counter] Incrementar');
export const decrementar = createAction('[Counter] Decrementar');
export const multiplicar = createAction('[Counter] Multiplicar', props<{ numero: number }>());
export const dividir = createAction('[Counter] Dividir', props<{ numero: number }>());
export const resetear = createAction('[Counter] Resetear');