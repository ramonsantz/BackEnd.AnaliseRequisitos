import { isValidEmail } from '../src/helpers/validationHelper';

describe('Validation Helper', () => {
  test('isValidEmail returns true for valid email', () => {
    expect(isValidEmail('test@example.com')).toBe(true);
  });

  test('isValidEmail returns false for invalid email', () => {
    expect(isValidEmail('invalid-email')).toBe(false);
  });
});
