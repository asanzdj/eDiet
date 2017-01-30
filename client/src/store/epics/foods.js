
import {Observable} from 'rxjs/Observable';
import * as ActionTypes from '../actionTypes/';
import {signRequest} from '../../util';
import * as Actions from '../actions';
import {errorBack} from '../../util';
import {server as serverConfig} from '../../../config';

const host = serverConfig.host;
const port = serverConfig.port;

export const createFood = action$ => action$
  .ofType(ActionTypes.CREATE_FOOD)
  .map(signRequest)
  .switchMap(({headers, payload}) => Observable
    .ajax.post(`http://${host}:${port}/api/menu/${payload.nameMenu}/${payload.nameTimeFood}/food/add`, payload, headers)
    .map(res => res.response)
    .mergeMap( response  => Observable.of ({
      type: ActionTypes.CREATE_FOOD_SUCCESS,
      payload: response,
    },
    Actions.getFoodAction(payload),
    Actions.addNotificationAction(
      {text: 'Add Food Succes', alertType: 'info'})
    ))
    .catch(error => Observable.of({
      type: ActionTypes.CREATE_FOOD_ERROR,
      payload: {error},
    },
    Actions.addNotificationAction({text: errorBack(error), alertType: 'danger'})
  )));


  export const deleteFood = action$ => action$
    .ofType(ActionTypes.DELETE_FOOD)
    .map(signRequest)
    .switchMap(({headers, payload}) => Observable
      .ajax.post(`http://${host}:${port}/api/menu/${payload.nameMenu}/${payload.nameTimeFood}/food/delete`, payload, headers)
      .delay(2000)
      .map(res => res.response)
      .mergeMap(foods => Observable.of ({
        type: ActionTypes.DELETE_FOOD_SUCCESS,
        payload: payload.food,
      },
      Actions.addNotificationAction(
        {text: 'Delete Food Succes', alertType: 'info'})
      ))
      .catch(error => Observable.of({
        type: ActionTypes.DELETE_FOOD_ERROR,
        payload: {error},
      },
      Actions.addNotificationAction({text: errorBack(error), alertType: 'danger'})
    )));

    export const updateFood = action$ => action$
      .ofType(ActionTypes.UPDATE_FOOD)
      .map(signRequest)
      .switchMap(({headers, payload}) => Observable
        .ajax.post(`http://${host}:${port}/api/menu/${payload.nameMenu}/${payload.nameTimeFood}/food/update`, payload, headers)
        .delay(2000)
        .map(res => res.response)
        .mergeMap( foods  => Observable.of ({
          type: ActionTypes.UPDATE_FOOD_SUCCESS,
            payload,
          },
          Actions.addNotificationAction(
            {text: 'Update Food Succes', alertType: 'info'})
        ))
        .catch(error => Observable.of({
          type: ActionTypes.UPDATE_FOOD_ERROR,
          payload: {error},
        },
        Actions.addNotificationAction({text: errorBack(error), alertType: 'danger'})
      )));

      export const getFood = action$ => action$
        .ofType(ActionTypes.GET_FOOD)
        .map(signRequest)
        .switchMap(({headers, payload}) => Observable
          .ajax.get(`http://${host}:${port}/api/menu/${payload.nameMenu}/${payload.nameTimeFood}/${payload.nameFood}/food`, payload, headers)
          .delay(2000)
          .map(res => res.response)
          .mergeMap( menu  => Observable.of ({
            type: ActionTypes.GET_FOOD_SUCCESS,
            payload: {menu},
          }))
          .catch(error => Observable.of({
            type: ActionTypes.GET_FOOD_ERROR,
            payload: {error},
          },
        Actions.addNotificationAction({text: errorBack(error), alertType: 'danger'})
        )));

        export const getFoods = action$ => action$
          .ofType(ActionTypes.GET_FOODS)
          .map(signRequest)
          .switchMap(({headers, payload}) => Observable
            .ajax.get(`http://${host}:${port}/api/${payload.nameMenu}/${payload.nameTimeFood}/foods`, payload, headers)
            .delay(2000)
            .map(res => res.response)
            .mergeMap( menu  => Observable.of ({
              type: ActionTypes.GET_FOODS_SUCCESS,
              payload: menu,
            }
          ))
            .catch(error => Observable.of({
              type: ActionTypes.GET_FOODS_ERROR,
              payload: {error},
            },
          Actions.addNotificationAction({text: errorBack(error), alertType: 'danger'})
          )));
