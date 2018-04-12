export interface UserEvents {
  created: Date;
}

export interface User {
  id: string;
  events: UserEvents;
}
