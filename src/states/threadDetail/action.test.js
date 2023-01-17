import { hideLoading, showLoading } from 'react-redux-loading-bar';
import api from '../../utils/api';
import { asyncReceiveThreadDetail, receiveThreadDetailActionCreator } from './action';

/**
 * skenario test
 *
 * - asyncReceiveThreadDetail thunk
 *  - should dispatch action correctly when detail data fetching success
 *  - should dispatch action and call alert correctly when detail data fetching failed
 */

const fakeThreadDetailResponse = {
  id: 'thread-1',
  title: 'Thread Test 1',
  body: 'Thread body-1',
  category: 'Thread category-1',
  createdAt: '2023-01-16T15:09:36.923Z',
  ownerId: 'user-1',
  totalComments: 2,
  upVotesBy: [
    'user-1.1',
  ],
  downVotesBy: [
    'user-1.2',
  ],
};

const fakeErrorResponse = new Error('Ups, something went wrong');

describe('asyncPopulateUsersAndThreads thunk', () => {
  beforeEach(() => {
    api._getThreadDetail = api.getThreadDetail;
  });

  afterEach(() => {
    api.getThreadDetail = api._getThreadDetail;

    delete api._getThreadDetail;
  });

  it('should dispatch action correctly when detail data fetching success', async () => {
    api.getThreadDetail = () => Promise.resolve(fakeThreadDetailResponse);

    const dispatch = jest.fn();

    await asyncReceiveThreadDetail('user-1')(dispatch);

    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(dispatch).toHaveBeenCalledWith(
      receiveThreadDetailActionCreator(fakeThreadDetailResponse),
    );
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
  });

  it('should dispatch action and call alert correctly when detail data fetching failed', async () => {
    api.getThreadDetail = () => Promise.reject(fakeErrorResponse);

    const dispatch = jest.fn();

    window.alert = jest.fn();

    await asyncReceiveThreadDetail('user-1')(dispatch);

    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
    expect(window.alert).toHaveBeenCalledWith(fakeErrorResponse.message);
  });
});
