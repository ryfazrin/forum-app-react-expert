/**
 * @TODO: Define all the actions (creator) for the talkDetail state
 */
import { hideLoading, showLoading } from 'react-redux-loading-bar';
import api from '../../utils/api';

const ActionType = {
  RECEIVE_THREAD_DETAIL: 'RECEIVE_THREAD_DETAIL',
  CLEAR_THREAD_DETAIL: 'CLEAR_THREAD_DETAIL',
  // TOGGLE_LIKE_THREAD_DETAIL: 'TOGGLE_LIKE_THREAD_DETAIL',
};

function receiveThreadDetailActionCreator(threadDetail) {
  return {
    type: ActionType.RECEIVE_THREAD_DETAIL,
    payload: {
      threadDetail,
    },
  };
}

function clearThreadDetailActionCreator() {
  return {
    type: ActionType.CLEAR_THREAD_DETAIL,
  };
}

// function toggleLikeTalkDetailActionCreator(userId) {
//   return {
//     type: ActionType.TOGGLE_LIKE_TALK_DETAIL,
//     payload: {
//       userId,
//     },
//   };
// }

function asyncReceiveThreadDetail(threadId) {
  return async (dispatch) => {
    dispatch(showLoading());

    try {
      const threadDetail = await api.getThreadDetail(threadId);
      dispatch(receiveThreadDetailActionCreator(threadDetail));
    } catch (error) {
      alert(error.message);
    }

    dispatch(hideLoading());
  };
}

// function asyncToogleLikeTalkDetail() {
//   return async (dispatch, getState) => {
//     dispatch(showLoading());

//     const { authUser, talkDetail } = getState();
//     dispatch(toggleLikeTalkDetailActionCreator(authUser.id));

//     try {
//       await api.toggleLikeTalk(talkDetail.id);
//     } catch (error) {
//       alert(error.message);
//     }

//     dispatch(hideLoading());
//   };
// }

export {
  ActionType,
  receiveThreadDetailActionCreator,
  clearThreadDetailActionCreator,
  asyncReceiveThreadDetail,
};
