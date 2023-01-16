import commentsReducer from './reducer';

/**
 * test scenario for commentsReducer
 *
 * - commentsReducer function
 *  - should return the initial state when given by unknown action
 *  - should return the comments when given by RECEIVE_COMMENTS action
 *  - should return the comments with the new comment when given by ADD_COMMENT action
 *
 */

describe('commentsReducer function', () => {
  it('should return the initial state when given by unknown action', () => {
    // arrange
    const initialState = [];
    const action = { type: 'UNKNOWN' };

    // action
    const nextState = commentsReducer(initialState, action);

    // assert
    expect(nextState).toEqual(initialState);
  });

  it('should return the comments when given by RECEIVE_COMMENTS action', () => {
    // arrange
    const initialState = [];
    const action = {
      type: 'RECEIVE_COMMENTS',
      payload: {
        comments: [
          {
            id: 'comment-1',
            title: 'comment Test 1',
            body: 'comment body-1',
            category: 'comment category-1',
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
            id: 'comment-2',
            title: 'comment Test 2',
            body: 'comment body-2',
            category: 'comment category-2',
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
    const nextState = commentsReducer(initialState, action);

    // assert
    expect(nextState).toEqual(action.payload.comments);
  });

  it('should return the comments with the new comment when given by ADD_COMMENT action', () => {
    // arrange
    const initialState = [
      {
        id: 'comment-1',
        title: 'comment Test 1',
        body: 'comment body-1',
        category: 'comment category-1',
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
      type: 'ADD_COMMENT',
      payload: {
        comment: {
          id: 'comment-2',
          title: 'comment Test 2',
          body: 'comment body-2',
          category: 'comment category-2',
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
    const nextState = commentsReducer(initialState, action);

    // assert
    expect(nextState).toEqual([action.payload.comment, ...initialState]);
  });
});
