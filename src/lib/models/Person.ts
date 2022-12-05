import { Node } from 'react-flow-renderer';

export default class Person {
  firstName: string;

  lastName: string;

  fatherId?: string;

  motherId?: string;

  isMale = true;

  constructor(
    firstName: string,
    lastName: string,
    fatherId?: string,
    motherId?: string,
  ) {
    this.firstName = firstName;
    this.lastName = lastName;

    if (fatherId) {
      this.fatherId = fatherId;
    }
    if (motherId) {
      this.motherId = motherId;
    }
  }

  get label(): string {
    return `${this.firstName} ${this.lastName}`;
  }

  get isRoot(): boolean {
    return !this.fatherId && !this.motherId;
  }
}

export const NewMotherNode = (firstName: string, lastName: string) => {
  const person = new Person(firstName, lastName);
  person.isMale = false;
  return person;
};
