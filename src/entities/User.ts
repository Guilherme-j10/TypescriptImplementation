export class User {

  public name_user: String;
  public email_user: String;
  public password_user: String;

  constructor(props: User) {
    this.password_user = props.password_user;
    this.email_user = props.email_user;
    this.name_user = props.name_user;
  }
}