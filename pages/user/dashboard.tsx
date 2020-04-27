import MainLayout from '../../components/layouts/MainLayout';
import { NextPage } from 'next';
import withAuth from '../../components/hoc/withAuth';
import useSocketIOListener from '../../hooks/useSocketIOListener';
import { useEffect } from 'react';
import { Navbar } from '../../components/ui';

const Dashboard: NextPage<any> = () => {
  const eventData = useSocketIOListener('testEvent');

  useEffect(() => {
    if (eventData) {
      console.log(eventData);
    }
  }, [eventData]);

  return (
    <MainLayout>
      <Navbar />
    </MainLayout>
  );
};

export default withAuth(Dashboard);
