export type Board = {
  ownerId: number;
  name: string;
  id: number;
  sections: Section[];
}

export type Section = {
  title: string;
  cards: Card[];
}

export type Card = {
  title: string;
  assignedUserId: number;
}
