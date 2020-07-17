export const CHANGE_MODE = 'CHANGE_MODE' ;// action types

export default function changeMode(mode) {
    return {
        type: CHANGE_MODE,
        mode : (mode === "night") ? "day" : "night"
    };
}