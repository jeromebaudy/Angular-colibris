import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: object = { email: "", password: "" };

  constructor(private route: Router) { }

  ngOnInit() {
  }
  test_email() {
    console.log(this.user)
  }
  soumission(user: NgForm) {

    const EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const PASSWORD_REGEX = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{4,14}$/;

    if (user.value.email != "" && user.value.password != "") {

      if (!EMAIL_REGEX.test(user.value.email) && !PASSWORD_REGEX.test(user.value.password)) {

        console.log('faux')

      } else {
        this.route.navigateByUrl('/recherche')
        console.log('vrai')
      }

    } else {

      console.log('faux')
    }
  }
}
