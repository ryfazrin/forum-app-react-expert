import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ThreadInput from '../components/thread/ThreadInput';
import ThreadsList from '../components/thread/ThreadsList';
import { asyncPopulateUsersAndThreads } from '../states/shared/action';
import { asyncAddThread } from '../states/threads/action';

function HomePage() {
  const {
    threads = [],
    users = [],
    authUser,
  } = useSelector((states) => states);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncPopulateUsersAndThreads());
  }, [dispatch]);

  const onAddThread = (title, body, category) => {
    dispatch(asyncAddThread({ title, body, category }));
  };

  const threadList = threads.map((thread) => ({
    ...thread,
    user: users.find((user) => user.id === thread.ownerId),
    authUser: authUser.id,
  }));

  return (
    <section className="home-page">
      <ThreadInput addThread={onAddThread} />
      <ThreadsList threads={threadList} />
    </section>
  );
}

export default HomePage;
