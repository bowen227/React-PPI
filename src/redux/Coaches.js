import { COACHES } from '../shared/coaches';

export const Coaches = (state = COACHES, action) => {
    switch (action.type) {
        case "ASSIGN_COACH":
            const assignedCoach = state[action.payload.id]
            assignedCoach.teamNumber = action.payload.teamNumber
            return state.map((item, index) => {
                if (index != action.payload.id) {
                    return item
                }

                return {
                    ...item,
                    ...assignedCoach
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