import { put, takeLatest } from 'redux-saga/effects';
import { AnyAction } from 'redux';
import { Location } from '~/@types/dto/location';

import * as NavigationService from '~/navigation/NavigationService';

import { newLocationActions, newLocationTypes } from '~/store/ducks/Location/NewLocation';
import { chooseLocationActions } from '../../ducks/Location/ChooseLocation';

interface setLocationSagaProps extends AnyAction {
    payload: Location | null;
}

export function* NewLocationSaga({ payload }: setLocationSagaProps) {
  try {
    yield put(newLocationActions.newLocationSuccess(payload));
    yield put(chooseLocationActions.chooseLocation(payload));
    NavigationService.goBack();
  } catch (error: any) {
    yield put(newLocationActions.newLocationSuccess(error));
  }
}

export function* watchNewLocation() {
  yield takeLatest(newLocationTypes.NEW_LOCATION_REQUEST, NewLocationSaga);
}
