import Username from './username.value-object';

describe('Username Value Object', () => {
  const validValues: any = ['pia', 'errtãooloko', 'pinanboy'];
  const invalidValues: any = ['', 'a'.repeat(2), 'a'.repeat(256)];

  it.each(validValues)('Should be valid', (validValue) => {
    const username = new Username(validValue);
    expect(username.value).toBe(validValue);
  });

  it.each(invalidValues)('should fail', (invalidValue) => {
    expect(() => new Username(invalidValue)).toThrow();
  });
});
