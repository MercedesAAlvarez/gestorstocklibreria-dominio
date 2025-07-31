

export class User {
  public readonly id: number;
  public name: string;
  public email: string;
  public password: string;
  public role: 'admin' | 'user';

  constructor(props: {
    id: number;
    name: string;
    email: string;
    password: string;
    role: 'admin' | 'user';
  }) {
    this.id = props.id;
    this.name = props.name;
    this.email = props.email;
    this.password = props.password;
    this.role = props.role;
  }
}
