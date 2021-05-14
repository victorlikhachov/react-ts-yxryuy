import { Dispatch, useReducer } from 'react';

export function usePatchReducer<TState, TAction>(
  patchfn: (state: TState, action: TAction) => Partial<TState>,
  initial: TState
): [TState, Dispatch<TAction>];
export function usePatchReducer<TState, TAction>(
  patchfn: (state: TState, action: TAction) => Partial<TState>,
  initial: TState,
  initializer: (state: TState) => TState
): [TState, Dispatch<TAction>];
export function usePatchReducer<TState, TAction>(
  patchfn: (state: TState, action: TAction) => Partial<TState>,
  initial: TState,
  initializer?: (state: TState) => TState
): [TState, Dispatch<TAction>] {
  const applyPatchReducer = <TState, TAction>(
    source: TState,
    action: TAction,
    patchfn: (state: TState, action: TAction) => Partial<TState>
  ): TState => {
    const patch = patchfn(source, action);
    return { ...source, ...patch };
  };
  const fn = initializer
    ? initializer
    : (arg: TState) => {
        return arg;
      };
  return useReducer(
    (s: TState, a: TAction) => applyPatchReducer(s, a, patchfn),
    initial,
    fn
  );
}
