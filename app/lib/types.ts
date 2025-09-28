export interface Users {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  contact_no: string;
}

export interface GetUsersQuery {
  users: Users[];
}
