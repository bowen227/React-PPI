import { PLAYERS } from '../shared/players';
import { SCHEDULE } from '../shared/schedule';

export const initialState = {
    players: PLAYERS,
    schedule: SCHEDULE,
    association: '',
    coach: '',
    teamName: '',
    league: '',
    eventModal: false,
    playerModal: false
}

export const Reducer = (state = initialState, action) => {
    switch (action.type) {
        case "TOGGLED_EVENT_MODAL":
            initialState.eventModal = !initialState.eventModal;
        case "TOGGLED_PLAYER_MODAL":
            initialState.playerModal = !initialState.playerModal;
        default:
            return state
    }
}