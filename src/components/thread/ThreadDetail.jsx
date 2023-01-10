import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { postedAt } from '../../utils';
import CommentsList from '../comment/CommentsList';
import { CommentItemShape } from '../comment/CommentItem';
import { asyncAddComment, asyncGetComments } from '../../states/comments/action';
import CommentInput from '../comment/CommentInput';
import { asyncReceiveThreadDetail } from '../../states/threadDetail/action';

function ThreadDetail({
  id, title, body, category, createdAt, owner, comments, authUser, onAddComment,
}) {
  const {
    commentState,
    // authUser,
  } = useSelector((states) => states);

  // const navigate = useNavigate('');
  // const [oldComments, setOldComments] = useState(comments);

  const dispatch = useDispatch(); // @TODO: get dispatch function from store

  useEffect(() => {
    // @TODO: dispatch async action to populate threads and users data
    dispatch(asyncGetComments(id));
  }, [dispatch, id]);

  // const commentList = comments.map((comment) => ({
  //   ...comment,
  //   commentState,
  // }));

  return (
    <section className="talk-detail">
      <header>
        <img src={owner.avatar} alt={owner.name} />
        <div className="talk-detail__user-info">
          <p className="talk-detail__user-name">{owner.name}</p>
          {/* <p className="talk-detail__user-id">
            @
            {owner.id}
          </p> */}
          <p className="talk-detail__created-at">{postedAt(createdAt)}</p>
        </div>
      </header>
      <article>
        <p>{title}</p>
        <p className="talk-detail__text">{body}</p>
        <p>
          Category:
          {' '}
          {category}
        </p>
      </article>
      <footer>
        <div className="talk-detail__like">
          <CommentInput addComment={onAddComment} onAddComment={onAddComment} />
          <p>Comments:</p>
          <CommentsList comments={commentState} />
          {/* {console.log('commentList: ', )} */}
          {/* {console.log('commentState: ', commentState)} */}
        </div>
        {/* <div className="talk-detail__like">
          <button type="button" aria-label="like" onClick={() => likeTalk(id)}>
            { isTalkLiked ? <FaHeart style={{ color: 'red' }} /> : <FaRegHeart />}
          </button>
          <span>
            {likes.length}
            {' '}
            Likes
          </span>
        </div> */}
      </footer>
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
