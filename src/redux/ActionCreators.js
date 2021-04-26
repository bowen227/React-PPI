import * as ActionTypes from './ActionTypes';

export const addPlayer = (firstName, lastName, throws, bats, group) => ({
    type: ActionTypes.ADD_PLAYER,
    payload: {
        firstName,
        lastName,
        throws,
        bats,
        group
    }
})

export const foundPlayer = (id) => ({
    type: ActionTypes.FOUND_PLAYER,
    payload: {
        id
    }
})

export const addEvent = (eventId, text, time, date) => ({
    type: ActionTypes.ADD_EVENT,
    payload: {
        eventId,
        text,
        time,
        date
    }
})