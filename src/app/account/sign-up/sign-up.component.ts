import { Component, OnInit } from '@angular/core';

import { Password } from 'src/app/class/chat';
import { SessionService } from 'src/app/service/session.service';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  public account = new Password();

  constructor(private session: SessionService) { }

  ngOnInit(): void {
  }

  submitSignUp(e: Event): void {
    e.preventDefault();

    if(this.account.password !== this.account.passwordConfirmation){
      alert('パスワードが異なります');
      return;
    }
    this.session.signup(this.account);
    this.account.reset();
  }


}
