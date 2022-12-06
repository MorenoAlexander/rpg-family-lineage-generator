import { newOriginalPerson, personIsRoot } from '../../../lib/models/Person';

describe('Person', () => {
  it('determines that it is a root entity', () => {
    const person = newOriginalPerson('firtName', 'lastName');

    expect(personIsRoot(person)).toBeTruthy();
  });
});
