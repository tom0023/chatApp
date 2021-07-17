import * as moment from 'moment';

export class User {
  uid: number;
  name: string;

  constructor(uid: number, name: string){
    this.uid = uid;
    this.name = name;
  }

  deserialize(){
    return Object.assign({}, this);
  }
}

export class Comment {
  user: User;
  initial: string;
  content: string;
  date: number;
  key?: string;
  editFlag?: boolean;

  constructor(user: User, content: string){
    this.user = user;
    this.initial = user.name.slice(0, 1);
    this.content = content;
    this.date = +moment();
  }

  deserialize(){
    this.user = this.user.deserialize();
    return Object.assign({}, this);
  }

  setData(date: number, key: string): Comment {
    this.date = date;
    this.key = key;
    this.editFlag = false;
    return this;
  }
}

export class Session {
  login: boolean;

  constructor(){
    this.login = false;
  }

  reset(): Session {
    this.login = false;
    return this;
  }
}

export class Password {
  email: string;
  password: string;
  passwordConfirmation: string;

  constructor(){
    this.email = '';
    this.password = '';
    this.passwordConfirmation = '';
  }

  reset(): void {
    this.email = '';
    this.password = '';
    this.passwordConfirmation = '';
  }
}

