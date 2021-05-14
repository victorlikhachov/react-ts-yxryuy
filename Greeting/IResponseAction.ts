export type ResponseReducerAction = 'response' | 'actor';

export interface IResponseAction {
  actionType: ResponseReducerAction;
  payload: string;
}
