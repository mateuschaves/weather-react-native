import { Location } from '~/@types/dto/location';
import { InitialNewLocationStateProps } from '~/@types/store/app.state';

export const newLocationTypes = {
  NEW_LOCATION_REQUEST: 'location/NEW_LOCATION_REQUEST',
  NEW_LOCATION_SUCCESS: 'location/NEW_LOCATION_SUCCESS',
  NEW_LOCATION_ERROR: 'location/NEW_LOCATION_ERROR',
};

export const newLocationActions = {
  newLocation: (data: Location | null) => ({
    type: newLocationTypes.NEW_LOCATION_REQUEST,
    payload: data,
  }),
  newLocationSuccess: (data: Location | null) => ({
    type: newLocationTypes.NEW_LOCATION_SUCCESS,
    payload: data,
  }),
  newLocationError: (error: any) => ({
    type: newLocationTypes.NEW_LOCATION_ERROR,
    payload: error,
  }),
};

interface actionProps {
    type?: string;
    payload?: Location | null;
}

const initialState: InitialNewLocationStateProps = {
  location: [],
  loading: false,
  error: null,
};

export const newLocationReducer = (state = initialState, action: actionProps) => {
  switch (action.type) {
    case newLocationTypes.NEW_LOCATION_REQUEST:
      return { ...state, loading: true };
    case newLocationTypes.NEW_LOCATION_SUCCESS:
      return { ...state, loading: false, location: [...state.location, action.payload] };
    case newLocationTypes.NEW_LOCATION_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
