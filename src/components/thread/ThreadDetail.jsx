import React from 'react';
import PropTypes from 'prop-types';
import { postedAt } from '../../utils';
import CommentsList from '../comment/CommentsList';
import { CommentItemShape } from '../comment/CommentItem';

function ThreadDetail({
  id, title, body, category, createdAt, owner, comments, authUser,
}) {
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
          <p>Comments:</p>
          <CommentsList comments={comments} />
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
};

export default ThreadDetail;
