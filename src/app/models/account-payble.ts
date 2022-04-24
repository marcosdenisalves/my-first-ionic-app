export class AccountPayble {
  title: string;
  value: string;
  dueDate: string;
  description: string;

  constructor(
    title: string,
    value: string,
    dueDate: string,
    description: string
  ) {
    this.title = title;
    this.value = value;
    this.dueDate = dueDate;
    this.description = description;
  }
}
