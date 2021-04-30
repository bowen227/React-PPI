import { COACHES } from '../shared/coaches';

export const Coaches = (state = COACHES, action) => {
    switch (action.type) {
        case "ADDED_COACH":
            const coach = action.payload
            coach.id = state.length
            return state.concat(coach)
        default:
            return state
    }
}