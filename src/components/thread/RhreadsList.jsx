import React from 'react';
import PropTypes from 'prop-types';
import ThreadItem, { ThreadItemShape } from './RhreadItem';

function ThreadsList({ threads }) {
  return (
    <div className="threads-list">
      {
         threads.map((thread) => (
           <ThreadItem key={thread.id} {...thread} />
         ))
      }
    </div>
  );
}

ThreadsList.propTypes = {
  threads: PropTypes.arrayOf(PropTypes.shape(ThreadItemShape)).isRequired,
};

export default ThreadsList;
