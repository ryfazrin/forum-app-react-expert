import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import ThreadDetail from '../components/thread/ThreadDetail';
import { asyncAddComment } from '../states/comments/action';
import { asyncReceiveThreadDetail } from '../states/threadDetail/action';

function DetailPage() {
  const { id } = useParams();

  const {
    threadDetail = null,
    authUser,
  } = useSelector((states) => states);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncReceiveThreadDetail(id));
  }, [dispatch, id]);

  const onAddComment = (content) => {
    const threadId = id;

    dispatch(asyncAddComment({ threadId, content }));
  };

  if (!threadDetail) {
    return null;
  }

  return (
    <section className="detail-page">
      <ThreadDetail {...threadDetail} authUser={authUser.id} onAddComment={onAddComment} />
    </section>
  );
}

export default DetailPage;
