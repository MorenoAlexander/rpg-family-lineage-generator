import Person from '../../../lib/models/Person';

describe('Person', () => {
  it('determines that it is a root entity', () => {
    const person = new Person('firtName', 'lastName');

    expect(person.isRoot).toBeTruthy();
  });
});
