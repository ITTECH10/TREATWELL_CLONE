import { actions, roles } from "./constants.js";

const mappings = new Map();
mappings.set(actions.MAIN_ROLE_UI_VISIBILITY, [roles.PACIENT, roles.ADMIN])
mappings.set(actions.IS_ADMIN, [roles.ADMIN])
mappings.set(actions.IS_THERAPEUT, [roles.THERAPEUT])
mappings.set(actions.ADD_BOOKING_DATES, [roles.THERAPEUT])

export const hasPermission = (user, action) => {
    if (!user?.role) {
        return false;
    }

    if (mappings.has(action)) {
        return mappings.get(action).includes(user.role);
    }

    return false;
}

export const isAdmin = (user) => {
    return hasPermission(user, actions.IS_ADMIN)
}

export { actions, roles };