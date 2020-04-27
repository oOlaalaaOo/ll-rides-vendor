import MainLayout from '../../components/layouts/MainLayout';
import LoginFormTemplate from '../../components/templates/LoginFormTemplate';
import { NextPage } from 'next';
import redirectIfWithAuth from '../../components/hoc/redirectIfWithAuth';

const Login: NextPage<any> = () => {
  return (
    <MainLayout>
      <LoginFormTemplate />
    </MainLayout>
  );
};

export default redirectIfWithAuth(Login);
