import { TEAMS } from '../shared/teams';

export const Teams = (state = TEAMS, action) => {
    switch (action.type) {
        case "CREATED_TEAMS":
            const teams = action.payload.teams
            return [...state, teams]
        default:
            return state
    }
}