import { call, put, takeLatest } from 'redux-saga/effects';

import { AnyAction } from 'redux';
import { GreetingDto } from '~/@types/dto/greeting';

import { sayHiActions, sayHiTypes } from '~/store/ducks/Greeting/SayHi';
import { GreetingService } from '~/services/api/resources';

interface sayHiSagaProps extends AnyAction {
    payload: GreetingDto
}

export function* sayHiSaga({ payload }: sayHiSagaProps) {
  try {
    const response: AxiosResponse = yield call(GreetingService.sayHi, payload);
    yield put(sayHiActions.sayHiSuccess(response));
  } catch (error: any) {
    yield put(sayHiActions.sayHiError(error));
  }
}

export function* watchSayHi() {
  yield takeLatest(sayHiTypes.SAY_HI_REQUEST, sayHiSaga);
}
