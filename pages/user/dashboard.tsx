import UserLayout from '../../components/layouts/UserLayout';
import { NextPage } from 'next';
import withAuth from '../../components/hoc/withAuth';
import useSocketIOListener from '../../hooks/useSocketIOListener';
import { useEffect } from 'react';

const Dashboard: NextPage<any> = () => {
  const eventData = useSocketIOListener('testEvent');

  useEffect(() => {
    if (eventData) {
      console.log(eventData);
    }
  }, [eventData]);

  return (
    <UserLayout headerTitle='Dashboard'>
      <h1>Body</h1>
    </UserLayout>
  );
};

export default withAuth(Dashboard);
