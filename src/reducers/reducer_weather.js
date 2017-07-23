import { FETCH_WEATHER } from '../actions/index'

export default function (state=[], action) {
  switch(action.type) {
    case FETCH_WEATHER:
      //never say state.push!! that changes the previous array of state while we should never do it!
      //always make a new version of state and make a new array in order not to mutate the state.
      //concat makes a new array that has previous array and attaches the new peice to the previouse one
      //thus we can use concat for making new instance of state
      // return state.concat([action.payload.data]) in ES5 is the same as below in ES6
      return [action.payload.data, ...state];
  }
  return state;
}