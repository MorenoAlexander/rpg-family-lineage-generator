import { Node } from 'react-flow-renderer';

export default class Person {
  firstName: string;

  lastName: string;

  father?: Node<Person>;

  fatherId?: string;

  mother?: Node<Person>;

  motherId?: string;

  isMale = true;

  partners?: Node<Person[]>;

  children?: Node<Person[]>;

  constructor(
    firstName: string,
    lastName: string,
    father?: Node<Person>,
    mother?: Node<Person>,
  ) {
    this.firstName = firstName;
    this.lastName = lastName;

    if (father) {
      this.father = father;
      this.fatherId = father.id;
    }
    if (mother) {
      this.mother = mother;
      this.motherId = mother.id;
    }
  }

  get label(): string {
    return `${this.firstName} ${this.lastName}`;
  }

  get isRoot(): boolean {
    return !this.father && !this.mother;
  }
}
