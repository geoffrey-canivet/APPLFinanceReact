// Définir l'état initial
const initialState = {
    isDarkMode: false, // Le mode clair est activé par défaut
};

// Créer le reducer
const darkModeReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'TOGGLE_DARK_MODE':
            return {
                ...state,
                isDarkMode: !state.isDarkMode, // Basculer le mode
            };
        default:
            return state; // Retourner l'état actuel si aucune action ne correspond
    }
};

export default darkModeReducer;
