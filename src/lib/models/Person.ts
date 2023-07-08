import crypto from 'crypto';
import { Node } from 'react-flow-renderer';

export interface Person {
  id: string;
  firstName: string;
  lastName: string;
  fatherId?: string;
  motherId?: string;
  isMale: boolean;
}

export const newOriginalPerson = (
  firstName: string,
  lastName: string,
  isMale = true,
  id?: string,
): Person => ({
  firstName,
  lastName,
  id: id || crypto.randomUUID(),
  isMale: isMale || true,
});

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
