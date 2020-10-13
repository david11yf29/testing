import { SAVE_COMMENT } from 'actions/types';

export function saveCommnet(comment) {
  return {
    type: SAVE_COMMENT,
    payload: comment
  }
}