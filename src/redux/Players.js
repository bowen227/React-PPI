import { PLAYERS } from '../shared/players';

export const Players = (state = PLAYERS, action) => {
    switch (action.type) {
        case "EVAL_PLAYER":
            const playerToEval = state[action.payload.id]
            console.log(playerToEval)
            return
        case "ADD_PLAYER":
            const player = action.payload
            player.id = state.length
            return state.concat(player)
        case "FOUND_PLAYER":
            return state[action.payload.id]
        default:
            return state
    }
}