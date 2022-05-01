export class AccountPayble {
  title: string;
  value: string;
  dueDate: string;
  description: string;
  payed: boolean;
  constructor(
    title: string,
    value: string,
    dueDate: string,
    description: string,
    payed: boolean = false
  ) {
    this.title = title;
    this.value = value;
    this.dueDate = dueDate;
    this.description = description;
    this.payed = payed;
  }
}
