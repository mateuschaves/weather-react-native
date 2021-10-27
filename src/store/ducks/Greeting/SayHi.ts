import { AxiosError, AxiosResponse } from 'axios';
import { GreetingDto } from '../../../@types/dto/greeting';

export const sayHiTypes = {
  SAY_HI_REQUEST: 'greeting/SAY_HI_REQUEST',
  SAY_HI_SUCCESS: 'greeting/SAY_HI_SUCCESS',
  SAY_HI_ERROR: 'greeting/SAY_HI_ERROR',
};

export const sayHiActions = {
  sayHi: (data: GreetingDto) => ({
    type: sayHiTypes.SAY_HI_REQUEST,
    payload: data,
  }),
  sayHiSuccess: (data: AxiosResponse) => ({
    type: sayHiTypes.SAY_HI_SUCCESS,
    payload: data,
  }),
  sayHiError: (error: AxiosError) => ({
    type: sayHiTypes.SAY_HI_ERROR,
    payload: error,
  }),
};

interface actionProps {
    type?: string;
    payload?: AxiosError | AxiosResponse;
}

const initialState = {
  data: [],
  loading: false,
  error: null,
};

export const sayHiReducer = (state = initialState, action: actionProps) => {
  switch (action.type) {
    case sayHiTypes.SAY_HI_REQUEST:
      return { ...state, loading: true };
    case sayHiTypes.SAY_HI_SUCCESS:
      return { ...state, loading: false, data: action.payload };
    case sayHiTypes.SAY_HI_ERROR:
      return {
        ...state,
        loading: false,
        data: [],
        error: action.payload,
      };
    default:
      return state;
  }
};
