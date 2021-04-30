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

export const addCoach = (firstName, lastName, head) => ({
    type: ActionTypes.ADDED_COACH,
    payload: {
        firstName,
        lastName,
        head
    }
})

export const assignCoach = (id, teamNumber) => ({
    type: ActionTypes.ASSIGN_COACH,
    payload: {
        id,
        teamNumber
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

export const createTeams = (teams) => ({
    type: ActionTypes.CREATED_TEAMS,
    payload: {
        teams
    }
})