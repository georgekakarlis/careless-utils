import {
    reverseString,
    validateEmail,
    generateRandomString,
    toTitleCase,
    generateRandomHash,
    capitalizeFirstLetter,
    formatDate,
  } from './index';
  
  describe('reverseString', () => {
    it('should return a reversed string', () => {
      expect(reverseString('hello')).toBe('olleh');
    });
  });
  
  describe('validateEmail', () => {
    it('should return true for a valid email address', () => {
      expect(validateEmail('user@example.com')).toBe(true);
    });
  
    it('should return false for an invalid email address', () => {
      expect(validateEmail('not a valid email')).toBe(false);
    });
  });
  
  describe('generateRandomString', () => {
    it('should return a string of the specified length', () => {
      const result = generateRandomString(10);
      expect(result.length).toBe(10);
    });
  
    it('should return a different string each time it is called', () => {
      const result1 = generateRandomString(10);
      const result2 = generateRandomString(10);
      expect(result1).not.toBe(result2);
    });
  });
  
  describe('toTitleCase', () => {
    it('should convert a string to title case', () => {
      expect(toTitleCase('the quick brown fox jumps over the lazy dog')).toBe(
        'The Quick Brown Fox Jumps Over The Lazy Dog'
      );
    });
  });
  
  describe('generateRandomHash', () => {
    it('should generate a random hash of the given length', () => {
      const hash = generateRandomHash(32);
      expect(hash).toHaveLength(64);
    });
  });
  
  describe('capitalizeFirstLetter', () => {
    it('should capitalize the first letter of a string', () => {
      const capitalized = capitalizeFirstLetter('hello world');
      expect(capitalized).toBe('Hello world');
    });
  });
  
  describe('formatDate', () => {
    it('should format a date in the given locale', () => {
      const date = new Date('2022-01-01');
      const formatted = formatDate(date, 'fr-FR');
      expect(formatted).toBe('1 janvier 2022');
    });
  });

  describe('generateRandomString', () => {
    it('should return a string of the specified length', () => {
      const result = generateRandomString(10);
      expect(result.length).toBe(10);
    });
  
    it('should return a different string each time it called', () => {
      const result1 = generateRandomString(10);
      const result2 = generateRandomString(10);
      expect(result1).not.toBe(result2);
    });
  });