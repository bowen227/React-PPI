import { TEAMS } from '../shared/teams';

export const Teams = (state = TEAMS, action) => {
    switch (action.type) {
        case "ASSIGN_COACH_TO_TEAM":
            const coach = action.payload.coach
            return state.map((item, index) => {
                if (index != action.payload.teamNumber - 1) {
                    return item
                }
                if (coach.head === true) {
                    return {
                        ...item,
                        headCoach: coach
                    }
                } else {
                    return {
                        ...item,
                        assistant: coach
                    }
                }
            })
        case "CREATED_TEAMS":
            const teams = action.payload.teams
            return [...state, ...teams]
        default:
            return state
    }
}