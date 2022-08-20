import * as types from '../constants/actionTypes'

interface State {
    tripData: number[],
    totalTrips: number,
    otherStatefullData: string

}

const initialState: State = {
    tripData: [],
    totalTrips: 0,
    otherStatefullData: 'Hi, I\'m state'

}


const mainReducer = (state: State = initialState, action) => {
    switch(action.type){
        default: {
            return state
        }
    }
}

export default mainReducer