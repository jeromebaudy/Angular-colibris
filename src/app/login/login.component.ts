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

  }

}
