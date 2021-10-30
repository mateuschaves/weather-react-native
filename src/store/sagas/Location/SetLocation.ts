import { put, takeLatest } from 'redux-saga/effects';
import { GooglePlaceDetail } from 'react-native-google-places-autocomplete';

import * as NavigationService from '~/navigation/NavigationService';

import { AnyAction } from 'redux';

import { setLocationActions, setLocationTypes } from '~/store/ducks/Location/SetLocation';

interface setLocationSagaProps extends AnyAction {
    payload: GooglePlaceDetail | null;
}

export function* setLocationSaga({ payload }: setLocationSagaProps) {
  try {
    yield put(setLocationActions.setLocationSuccess(payload));
    NavigationService.goBack();
  } catch (error: any) {
    yield put(setLocationActions.setLocationSuccess(error));
  }
}

export function* watchSetLocation() {
  yield takeLatest(setLocationTypes.SET_LOCATION_REQUEST, setLocationSaga);
}
