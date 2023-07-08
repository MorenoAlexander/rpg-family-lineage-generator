export default class Person {
  id: string;

  firstName: string;

  lastName: string;

  fatherId?: string;

  motherId?: string;

  spouse?: string;

  isMale = true;

  children: string[];

  constructor(
    id: string,
    firstName: string,
    lastName: string,
    fatherId?: string,
    motherId?: string,
  ) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.fatherId = fatherId;
    this.motherId = motherId;
    this.spouse = undefined;
    this.children = [];
  }

  get label(): string {
    return `${this.firstName} ${this.lastName}`;
  }

  get isRoot(): boolean {
    return !this.fatherId && !this.motherId;
  }
}

export const NewMotherNode = (
  id: string,
  firstName: string,
  lastName: string,
) => {
  const person = new Person(id, firstName, lastName);

  person.isMale = false;
  return person;
};
