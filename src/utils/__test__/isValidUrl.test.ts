import { isValidUrl } from '../isValidUrl';

describe('is valid url', () => {
  it('should return true if url is valid', () => {
    expect(isValidUrl('https://www.google.com')).toBe(true);
  });

  it('should return false if url is invalid', () => {
    expect(isValidUrl('https://www.google.')).toBe(false);
  });
});
