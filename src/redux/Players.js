import { PLAYERS } from '../shared/players';

export const Players = (state = PLAYERS, action) => {
    switch (action.type) {
        case "EVAL_PLAYER":
            const playerToEval = state[action.payload.player.id - 1]
            return state.map((item, index) => {
                if (index != playerToEval.id - 1) {
                    return item
                }
                return {
                    ...item,
                    evaluations: item.evaluations.concat(action.payload.evaluation)
                }
            })
        case "ADD_PLAYER":
            const player = action.payload
            player.id = state.length + 1
            player.pos = 'Out'
            player.ppi = 0
            player.evaluations = []
            return state.concat(player)
        case "FOUND_PLAYER":
            return state[action.payload.id]
        default:
            return state
    }
}