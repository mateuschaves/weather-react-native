import { GooglePlaceDetail } from 'react-native-google-places-autocomplete';

export const setLocationTypes = {
  SET_LOCATION_REQUEST: 'location/SET_LOCATION_REQUEST',
  SET_LOCATION_SUCCESS: 'location/SET_LOCATION_SUCCESS',
  SET_LOCATION_ERROR: 'location/SET_LOCATION_ERROR',
};

export const setLocationActions = {
  setLocation: (data: GooglePlaceDetail | null) => ({
    type: setLocationTypes.SET_LOCATION_REQUEST,
    payload: data,
  }),
  setLocationSuccess: (data: GooglePlaceDetail | null) => ({
    type: setLocationTypes.SET_LOCATION_SUCCESS,
    payload: data,
  }),
  setLocationError: (error: any) => ({
    type: setLocationTypes.SET_LOCATION_ERROR,
    payload: error,
  }),
};

interface actionProps {
    type?: string;
    payload?: GooglePlaceDetail | null;
}

interface stateProps {
  location: [GooglePlaceDetail] | [];
  loading: boolean;
  error: any;
}

const initialState: stateProps = {
  location: [],
  loading: false,
  error: null,
};

export const setLocationReducer = (state = initialState, action: actionProps) => {
  switch (action.type) {
    case setLocationTypes.SET_LOCATION_REQUEST:
      return { ...state, loading: true };
    case setLocationTypes.SET_LOCATION_SUCCESS:
      return { ...state, loading: false, location: [...state.location, action.payload] };
    case setLocationTypes.SET_LOCATION_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
