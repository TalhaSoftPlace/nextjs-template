import { RoutesType } from '@/enums/routes';

export const routes = {
  [RoutesType.Home]: '/',
  [RoutesType.Login]: '/login',
  [RoutesType.Register]: '/register',
  [RoutesType.ForgetPassword]: 'forgot-password',
  [RoutesType.Dashboard]: '/dashboard',
};
