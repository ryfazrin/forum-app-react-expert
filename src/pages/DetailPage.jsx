import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import ThreadDetail from '../components/thread/ThreadDetail';
import { asyncAddComment, asyncGetComments } from '../states/comments/action';
import { asyncReceiveThreadDetail } from '../states/threadDetail/action';

function DetailPage() {
  const { id } = useParams();

  const {
    threadDetail = null,
    authUser,
  } = useSelector((states) => states); // @TODO: get threadDetail and authUser state from store

  const dispatch = useDispatch(); // @TODO: get dispatch function from store

  useEffect(() => {
    // @TODO: dispatch async action to get thread detail by id
    dispatch(asyncReceiveThreadDetail(id));
    // dispatch(asyncGetComments(id));
    // console.log('effect');
  }, [dispatch, id]);

  const onAddComment = (content) => {
    const threadId = id;
    // @TODO: dispatch async action to add thread
    dispatch(asyncAddComment({ threadId, content }));
    // navigate(`/threads/${id}`);
    // oldComments.push(commentState);
  };

  if (!threadDetail) {
    return null;
  }

  return (
    <section className="detail-page">
      {/* {
        threadDetail.parent && (
          <div className="detail-page__parent">
            <h3>Replying To</h3>
            <ThreadItem {...talkDetail.parent} authUser={authUser.id} />
          </div>
        )
      } */}
      <ThreadDetail {...threadDetail} authUser={authUser.id} onAddComment={onAddComment} />
      {/* <TalkReplyInput replyTalk={onReplyTalk} /> */}
    </section>
  );
}

export default DetailPage;
