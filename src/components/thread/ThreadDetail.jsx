import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { postedAt } from '../../utils';
import CommentsList from '../comment/CommentsList';
import { CommentItemShape } from '../comment/CommentItem';
import { asyncGetComments } from '../../states/comments/action';
import CommentInput from '../comment/CommentInput';

function ThreadDetail({
  id, title, body, category, createdAt, owner, comments, authUser, onAddComment,
}) {
  const {
    commentState,
  } = useSelector((states) => states);

  const dispatch = useDispatch(); // @TODO: get dispatch function from store

  useEffect(() => {
    // @TODO: dispatch async action to comments data
    dispatch(asyncGetComments(id));
  }, [dispatch, id]);

  return (
    <section className="thread-detail">
      <header>
        <img src={owner.avatar} alt={owner.name} />
        <div className="thread-detail__user-info">
          <p className="thread-detail__user-name">{owner.name}</p>
          <p className="thread-detail__created-at">{postedAt(createdAt)}</p>
          <p>
            Kategori:
            {' '}
            {category}
          </p>
        </div>
      </header>
      <article>
        <h2>{title}</h2>
        <p className="thread-detail__text" dangerouslySetInnerHTML={{ __html: `${body}` }} />
      </article>
      <CommentInput addComment={onAddComment} onAddComment={onAddComment} />
      <p>Comments:</p>
      <CommentsList comments={commentState} />
    </section>
  );
}

const ownerShape = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};

ThreadDetail.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  owner: PropTypes.shape(ownerShape).isRequired,
  comments: PropTypes.arrayOf(PropTypes.shape(CommentItemShape)).isRequired,
  authUser: PropTypes.string.isRequired,
  onAddComment: PropTypes.func.isRequired,
};

export default ThreadDetail;
