import { COACHES } from '../shared/coaches';

export const Coaches = (state = COACHES, action) => {
    switch (action.type) {
        case "ASSIGN_COACH":
            return state.map((item, index) => {
                if (index != action.payload.id) {
                    return item
                }

                return {
                    ...item,
                    teamNumber: action.payload.teamNumber
                }
            })
        case "ADDED_COACH":
            const coach = action.payload
            coach.id = state.length
            return state.concat(coach)
        default:
            return state
    }
}