import { TEAMS } from '../shared/teams';

export const Teams = (state = TEAMS, action) => {
    switch (action.type) {
        case "CREATED_TEAMS":
            const teams = action.payload.teams
            state = teams
            console.log(state)
            return state
        default:
            return state
    }
}