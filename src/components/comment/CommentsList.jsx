import React from 'react';
import PropTypes from 'prop-types';
import CommentItem, { CommentItemShape } from './CommentItem';

function CommentsList({ comments }) {
  return (
    <div className="comments-list">
      {
        comments.map((comment) => (
          <CommentItem key={comment.id} {...comment} />
        ))
      }
    </div>
  );
}

CommentsList.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.shape(CommentItemShape)).isRequired,
};

export default CommentsList;
