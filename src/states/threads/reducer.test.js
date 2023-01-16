import threadsReducer from './reducer';

describe('threadsReducer function', () => {
  it('should return the initial state when given by unknown action', () => {
    // arrange
    const initialState = [];
    const action = { type: 'UNKNOWN' };

    // action
    const nextState = threadsReducer(initialState, action);

    // assert
    expect(nextState).toEqual(initialState);
  });

  it('should return the threads when given by RECEIVE_THREADS action', () => {
    // arrange
    const initialState = [];
    const action = {
      type: 'RECEIVE_THREADS',
      payload: {
        threads: [
          {
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
          },
          {
            id: 'thread-2',
            title: 'Thread Test 2',
            body: 'Thread body-2',
            category: 'Thread category-2',
            createdAt: '2023-01-16T15:09:36.923Z',
            ownerId: 'user-2',
            totalComments: 2,
            upVotesBy: [
              'user-2.1',
            ],
            downVotesBy: [
              'user-2.2',
            ],
          },
        ],
      },
    };

    // action
    const nextState = threadsReducer(initialState, action);

    // assert
    expect(nextState).toEqual(action.payload.threads);
  });

  it('should return the threads with the new thread when given by ADD_THREAD action', () => {
    // arrange
    const initialState = [
      {
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
      },
    ];

    const action = {
      type: 'ADD_THREAD',
      payload: {
        thread: {
          id: 'thread-2',
          title: 'Thread Test 2',
          body: 'Thread body-2',
          category: 'Thread category-2',
          createdAt: '2023-01-16T15:09:36.923Z',
          ownerId: 'user-2',
          totalComments: 2,
          upVotesBy: [
            'user-2.1',
          ],
          downVotesBy: [
            'user-2.2',
          ],
        },
      },
    };

    // action
    const nextState = threadsReducer(initialState, action);

    // assert
    expect(nextState).toEqual([action.payload.thread, ...initialState]);
  });
});
