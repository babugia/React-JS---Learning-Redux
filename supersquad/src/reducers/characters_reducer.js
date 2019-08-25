import characters_json from "../data/characters.json";
import { ADD_CHARACTER, REMOVE_CHARACTER, CLEAR_HEROES } from "../actions";
import { createCharacter } from "./helpers";

function characters(state = characters_json, action) {
  let characters = undefined;

  switch (action.type) {
    case ADD_CHARACTER:
      characters = state.filter(item => item.id !== action.id);
      return characters;

    case REMOVE_CHARACTER:
      characters = [...state, createCharacter(action.id)];
      return characters;
    case CLEAR_HEROES:
      characters = characters_json
      return characters
    default:
      return state;
  }
}

export default characters;
