import { hideLoading, showLoading } from 'react-redux-loading-bar';
import api from '../../utils/api';

const ActionType = {
  RECEIVE_COMMENTS: 'RECEIVE_COMMENTS',
  ADD_COMMENT: 'ADD_COMMENT',
};

function receiveCommentsActionCreator(comments) {
  return {
    type: ActionType.RECEIVE_COMMENTS,
    payload: {
      comments,
    },
  };
}

function addCommentActionCreator(comment) {
  return {
    type: ActionType.ADD_COMMENT,
    payload: {
      comment,
    },
  };
}

function asyncGetComments(threadId) {
  return async (dispatch) => {
    dispatch(showLoading());

    try {
      const thread = await api.getThreadDetail(threadId);
      const { comments } = thread;

      dispatch(receiveCommentsActionCreator(comments));
    } catch (error) {
      alert(error.message);
    }

    dispatch(hideLoading());
  };
}

function asyncAddComment({ threadId, content }) {
  return async (dispatch) => {
    dispatch(showLoading());

    try {
      const comment = await api.createComment({ threadId, content });
      dispatch(addCommentActionCreator(comment));
    } catch (error) {
      alert(error.message);
    }

    dispatch(hideLoading());
  };
}

// function asyncToogleLikeThread(threadId) {
//   return async (dispatch, getState) => {
//     const { authUser } = getState();
//     dispatch(toggleLikethreadActionCreator({ threadId, userId: authUser.id }));

//     try {
//       await api.toggleLikeThread(threadId);
//     } catch (error) {
//       alert(error.message);
//       dispatch(toggleLikeThreadActionCreator({ threadId, userId: authUser.id }));
//     }
//   };
// }

export {
  ActionType,
  receiveCommentsActionCreator,
  addCommentActionCreator,
  asyncGetComments,
  asyncAddComment,
};
