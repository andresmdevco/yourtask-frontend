import { Outlet } from 'react-router-dom';
import Tabs from '../components/profile/Tabs';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ProfileLayout() {
  return (
    <>
      <Tabs />
      <Outlet />
      <ToastContainer pauseOnHover={false} pauseOnFocusLoss={false} />
    </>
  );
}
