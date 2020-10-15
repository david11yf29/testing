import { SAVE_COMMENT, FETCH_COMMENTS } from 'actions/types';

export function saveComment(comment) {
  return {
    type: SAVE_COMMENT,
    payload: comment
  }
}