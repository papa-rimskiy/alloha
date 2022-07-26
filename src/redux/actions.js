import { CREATE_PARTICIPANTS } from "./types";

export function createParticipants(participants) {
  return {
    type: CREATE_PARTICIPANTS,
    payload: participants
  }
} 