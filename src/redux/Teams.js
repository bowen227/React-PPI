import { TEAMS } from '../shared/teams';
import { COACHES } from '../shared/coaches';

export const Teams = (state = TEAMS, action) => {
    switch (action.type) {
        case "ASSIGN_COACH_TO_TEAM":
            const coach = COACHES[action.payload.id]
            const team = state[action.payload.teamNumber - 1]
            if (coach.head == true) {
                team.headCoach = coach
            } else {
                team.assistant = coach
            }
            return state.map((item, index) => {
                if (index != action.payload.teamNumber - 1) {
                    return item
                }
                return {
                    ...item,
                    ...team
                }
            })
        case "CREATED_TEAMS":
            const teams = action.payload.teams
            return [...state, ...teams]
        default:
            return state
    }
}