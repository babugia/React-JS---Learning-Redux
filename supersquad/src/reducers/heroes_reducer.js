import { ADD_CHARACTER, REMOVE_CHARACTER } from "../actions";
import { createCharacter } from "./helpers";

function heroes(state = [], action) {
  let heroes

  switch (action.type) {
    case ADD_CHARACTER:
     heroes = [...state, createCharacter(action.id)];
      return heroes
    case REMOVE_CHARACTER:
      heroes = state.filter(item => item.id !== action.id)
      return heroes
    default:
      return state
  }
}

export default heroes;
