export interface Roles { 
    staff?: boolean;
    nurse?: boolean;
    doctor?: boolean;
}
 
export interface User {
  uid: string;
  email: string;
  name?: string;
  lastName?: string;
  roles?: Roles;
}