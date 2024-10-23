import ForgotPassword from '../../../app/features/auth/ForgotPassword/ForgotPassword';
import ResetPassword from '../../../app/features/auth/ResetPassword/ResetPassword';
import SignIn from '../../../app/features/auth/SignIn/SignIn';
import SignUp from '../../../app/features/auth/SignUp/SignUp';
import Home from '../../../app/features/menu/Home/Home';
import Notifications from '../../../app/features/menu/Notifications/Notifications';
import Orders from '../../../app/features/menu/Orders/Orders';
import Profile from '../../../app/features/menu/Profile/Profile';

export const AUTH_SCREENS = [
  {
    name: 'SIGN_IN',
    component: SignIn,
  },
  {
    name: 'SIGN_UP',
    component: SignUp,
  },
  {
    name: 'FORGOT_PASSWORD',
    component: ForgotPassword,
  },
  {
    name: 'RESET_PASSWORD',
    component: ResetPassword,
  },
];

export const BOTTOM_TAB_SCREENS = [
  {
    name: 'HOME',
    component: Home,
    alias: 'Inicio',
  },
  {
    name: 'PROFILE',
    component: Profile,
    alias: 'Perfil',
  },
  {
    name: 'NOTIFICATIONS',
    component: Notifications,
    alias: 'Notificações',
  },
  {
    name: 'OREDERS',
    component: Orders,
    alias:"Pedidos"

  },
];
