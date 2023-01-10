import React from 'react';
import PropTypes from 'prop-types';
import { postedAt } from '../../utils';

function CommentItem({
  id, content, createdAt, owner,
}) {
  return (
    <div className="thread-comment">
      <div className="thread-comment__user-photo">
        <img src={owner.avatar} alt={owner.name} />
      </div>
      <div className="thread-comment__detail">
        <header>
          <div className="thread-comment__user-info">
            <p className="thread-comment__user-name">{owner.name}</p>
          </div>
          <p className="thread-comment__created-at">{postedAt(createdAt)}</p>
        </header>
        <article>
          <p>{content}</p>
        </article>
      </div>
    </div>
  );
}

const userShape = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};

const CommentItemShape = {
  id: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  owner: PropTypes.shape(userShape).isRequired,
};

CommentItem.propTypes = {
  ...CommentItemShape,
};

export { CommentItemShape };

export default CommentItem;
