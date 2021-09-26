export type Board = {
  ownerId: number;
  name: string;
  id?: number;
  sections: Section[];
}

export type Section = {
  title: string;
  tickets: Ticket[];
}

export type Ticket = {
  title: string;
  assignedUserId: number;
}
