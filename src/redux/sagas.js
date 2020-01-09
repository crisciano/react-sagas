import { all } from 'redux-saga/effects'
import { ClientsSagas } from '../redux/actions/clientReducer'
import { PetsSagas } from '../redux/actions/petReducer'
import { ServicesSagas } from '../redux/actions/ServiceReducer'

/* Unify all saga's components */
export default function* rootSagas() {
  console.log("============== sagas =======================");

    try {
      yield all([
        // functions async
        ClientsSagas(),
        PetsSagas(),
        ServicesSagas()
      ])
    } catch(e) {
      console.log('caught saga error:', e)
    }
  }

  /* Get middleware and run Sagas */
  // sagaMiddleware.run(rootSagas)