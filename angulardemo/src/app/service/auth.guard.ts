import { CanActivateFn } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  console.log('aut guard')
  if(sessionStorage.getItem('email') !== null)
  return true;
alert('Please login')
return false;
};
