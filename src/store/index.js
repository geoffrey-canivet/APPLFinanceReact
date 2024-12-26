import { createStore } from 'redux';
import darkModeReducer from './darkModeReducer';

// Créer le store en utilisant le reducer
const store = createStore(darkModeReducer);

export default store;
