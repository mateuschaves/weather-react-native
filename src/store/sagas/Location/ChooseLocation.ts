import { put, takeLatest } from 'redux-saga/effects';
import { Location } from '~/@types/dto/location';

import * as NavigationService from '~/navigation/NavigationService';

import { AnyAction } from 'redux';

import { chooseLocationActions, chooseLocationTypes } from '~/store/ducks/Location/ChooseLocation';

interface chooseLocationSagaProps extends AnyAction {
    payload: Location | null;
}

export function* ChooseLocationSaga({ payload }: chooseLocationSagaProps) {
  try {
    yield put(chooseLocationActions.chooseLocationSuccess(payload));
    NavigationService.goBack();
  } catch (error: any) {
    yield put(chooseLocationActions.chooseLocationError(error));
  }
}

export function* watchChooseLocation() {
  yield takeLatest(chooseLocationTypes.CHOOSE_LOCATION_REQUEST, ChooseLocationSaga);
}
