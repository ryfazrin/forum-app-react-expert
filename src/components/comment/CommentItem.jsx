import React from 'react';
import PropTypes from 'prop-types';
import { postedAt } from '../../utils';

function CommentItem({
  id, content, createdAt, owner,
}) {
  return (
    <>
      <p>
        id:
        {' '}
        {id}
      </p>
      <img src={owner.avatar} alt="" />
      <p>{owner.name}</p>
      <p>{postedAt(createdAt)}</p>
      <p>{content}</p>
    </>
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
