import React from 'react';
import PropTypes from 'prop-types';
import { FaRegHeart, FaHeart } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { postedAt } from '../../utils';

function ThreadItem({
  id, title, body, category, createdAt, user, authUser, totalComments,
}) {
  const navigate = useNavigate();

  const onThreadClick = () => {
    navigate(`/threads/${id}`);
  };

  const onThreadPress = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      navigate(`/threads/${id}`);
    }
  };

  return (
    <div role="button" tabIndex={0} className="thread-item" onClick={onThreadClick} onKeyDown={onThreadPress}>
      <div className="thread-item__user-photo">
        <img src={user.avatar} alt={user} />
      </div>
      <div className="thread-item__detail">
        <header>
          <div className="thread-item__user-info">
            <p className="thread-item__user-name">{user.name}</p>
            {/* <p className="thread-item__user-id">
              @
              {user.id}
            </p> */}
          </div>
          <p className="thread-item__created-at">{postedAt(createdAt)}</p>
        </header>
        <article>
          <p>{title}</p>
          <p className="thread-item__text">{body}</p>
          <p>
            Category:
            {' '}
            {category}
          </p>
          <p>
            Comments:
            {' '}
            {totalComments}
          </p>
        </article>
        {/* {
          like && (
            <div className="thread-item__likes">
              <p>
                <button type="button" aria-label="like" onClick={onLikeClick}>
                  { isthreadLiked ? <FaHeart style={{ color: 'red' }} /> : <FaRegHeart />}
                </button>
                {' '}
                {likes.length}
              </p>
            </div>
          )
        } */}
      </div>
    </div>
  );
}

const userShape = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};

const ThreadItemShape = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  authUser: PropTypes.string.isRequired,
  user: PropTypes.shape(userShape).isRequired,
  totalComments: PropTypes.number.isRequired,
};

ThreadItem.propTypes = {
  ...ThreadItemShape,
};

export { ThreadItemShape };

export default ThreadItem;