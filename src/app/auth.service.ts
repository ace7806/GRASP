import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: any[] = [
    {
      id: 1,
      name: 'Dummy',
      username: 'dummy',
      password: 'abc',
    },
    {
      id: 2,
      name: 'Dummy2',
      username: 'dummy2',
      password: '123',
    }
  ];

  session: any;
  constructor(private router: Router) {
    let session: any = localStorage.getItem('session');
    if(session){
      session = JSON.parse(session);
    }

    this.session = session;
   }

  login(username: string, password: string,){
    let user = this.user.find((u)=>u.username===username && u.password===password);

    if(user){
      this.session = user;
      localStorage.setItem('session', JSON.stringify(this.session));
    }

    return user;
  }

  logout(){
    this.session = undefined;
    localStorage.removeItem('session');
    this.router.navigateByUrl('/');
  }
}
