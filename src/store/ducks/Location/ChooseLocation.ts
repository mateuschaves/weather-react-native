import { Location } from '~/@types/dto/location';

export const chooseLocationTypes = {
  CHOOSE_LOCATION_REQUEST: 'location/CHOOSE_LOCATION_REQUEST',
  CHOOSE_LOCATION_SUCCESS: 'location/CHOOSE_LOCATION_SUCCESS',
  CHOOSE_LOCATION_ERROR: 'location/CHOOSE_LOCATION_ERROR',
};

export const chooseLocationActions = {
  chooseLocation: (data: Location | null) => ({
    type: chooseLocationTypes.CHOOSE_LOCATION_REQUEST,
    payload: data,
  }),
  chooseLocationSuccess: (data: Location | null) => ({
    type: chooseLocationTypes.CHOOSE_LOCATION_SUCCESS,
    payload: data,
  }),
  chooseLocationError: (error: any) => ({
    type: chooseLocationTypes.CHOOSE_LOCATION_ERROR,
    payload: error,
  }),
};

interface actionProps {
    type?: string;
    payload?: Location | null;
}

interface stateProps {
  location: Location | {};
  loading: boolean;
  error: any;
}

const initialState: stateProps = {
  location: {},
  loading: false,
  error: null,
};

export const chooseLocationReducer = (state = initialState, action: actionProps) => {
  switch (action.type) {
    case chooseLocationTypes.CHOOSE_LOCATION_REQUEST:
      return { ...state, loading: true };
    case chooseLocationTypes.CHOOSE_LOCATION_SUCCESS:
      return { ...state, loading: false, location: action.payload };
    case chooseLocationTypes.CHOOSE_LOCATION_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
