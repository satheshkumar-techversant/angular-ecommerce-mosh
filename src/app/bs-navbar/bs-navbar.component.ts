import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase/app';

@Component({
  selector: 'app-bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent implements OnInit {
  user!: firebase.User;
  constructor(private afAuth:AngularFireAuth) {
    afAuth.authState.subscribe(state => console.log('state',state))
  }

  ngOnInit(): void {
  }

  logout() {
this.afAuth.signOut();
  }

}
