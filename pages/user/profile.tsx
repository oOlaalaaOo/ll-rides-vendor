import UserLayout from '../../components/layouts/UserLayout';
import { NextPage } from 'next';
import withAuth from '../../components/hoc/withAuth';
import useSocketIOListener from '../../hooks/useSocketIOListener';
import { useEffect } from 'react';

const Profile: NextPage<any> = () => {
  const eventData = useSocketIOListener('testEvent');

  useEffect(() => {
    if (eventData) {
      console.log(eventData);
    }
  }, [eventData]);

  return (
    <UserLayout headerTitle='Profile'>
      <div className='flex flex-wrap justify-center items-center'>
        <div className='w-3/4 rounded overflow-hidden shadow-lg'>
          <div style={{ height: '350px' }} className='relative'>
            <img
              src='/images/profile-background.jpg'
              alt='profile background'
              className='relative w-full h-full object-cover object-center'
            />
            <div
              className='absolute w-48 h-48 rounded-full overflow-hidden bg-light cursor-pointer border-2 p-2'
              style={{ bottom: '-60px', right: '20px' }}
            >
              <img
                src='/images/logo.png'
                className='w-full h-full object-cover object-center'
              />
            </div>
          </div>
          <div className='text-center py-5'>
            <h1 className='text-2xl'>Hyperstacks Inc.</h1>
            <p>Region X - Northern Mindanao, Philippines</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa
              odio cupiditate expedita a quo vero eum, ratione quibusdam non
              optio quos, exercitationem deleniti sit. Doloribus libero ducimus
              similique ut facere!
            </p>
          </div>
        </div>
      </div>
    </UserLayout>
  );
};

export default withAuth(Profile);
