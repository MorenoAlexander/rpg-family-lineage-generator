import crypto from 'crypto';

export interface Person {
  // persons id
  id: string;
  // Person's first name
  firstName: string;
  // Lastname for this person
  lastName: string;
  // Id of this person's father
  fatherId?: string;
  // Id of this person's mother
  motherId?: string;
  // This person's spouse
  spouseId?: string;
  // Array of children ids that are associated with this person
  children?: string[];
  isMale: boolean;
}

export const newOriginalPerson = (
  id: string,
  firstName: string,
  lastName: string,
  isMale = true,
): Person => ({
  firstName,
  lastName,
  id,
  isMale: isMale || true,
});

export generateSpouse = (id: string, spouse: Person, firstName : string, lastName : string) : Person  => {

  spouse.spouseId = id; // associate this new person with the spouse specified [mutation]
   const person = {} as Person;
   person.id = id;
   person.firstName = firstName;
   person.lastName = lastName;

}
  return ({)
  id,
  spouse: spouse.id,

})

export const generateOffspring = (
  father: Person,
  mother: Person,
  firstName?: string,
  lastName?: string,
  isMale = true,
): Person => ({
  id: crypto.randomUUID(),
  firstName: firstName || father.firstName,
  lastName: father.lastName,
  fatherId: father.id,
  motherId: mother.id,
  isMale,
});

export const personIsRoot = (person: Person): boolean =>
  person.fatherId === undefined && person.motherId === undefined;
