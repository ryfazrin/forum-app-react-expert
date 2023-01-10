import React, { useState } from 'react';
import PropTypes from 'prop-types';

function CommentInput({ addComment }) {
  const [content, setContent] = useState('');

  function addcomment() {
    if (content.trim()) {
      addComment(content);
    }
  }

  function handleContentChange({ target }) {
    if (target.value.length <= 320) {
      setContent(target.value);
    }
  }

  return (
    <div className="thread-input">
      <textarea type="text" placeholder="add new comment" value={content} onChange={handleContentChange} />
      <p className="thread-input__char-left">
        <strong>{content.length}</strong>
        /320
      </p>
      <button type="submit" onClick={addcomment}>comment</button>
    </div>
  );
}

CommentInput.propTypes = {
  addComment: PropTypes.func.isRequired,
};

export default CommentInput;
