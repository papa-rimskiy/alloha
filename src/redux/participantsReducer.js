import { CREATE_PARTICIPANTS } from "./types"

const initialState = {
  participants: []
}

export const participantsReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_PARTICIPANTS:
      return {...state, participants: [...state.participants, action.payload]}
    default: return state
  }
  
}