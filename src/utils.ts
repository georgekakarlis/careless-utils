// src/utils.ts
import { createHash } from 'crypto';

/**
 * Generates a random string of the specified length, and returns its SHA-256 hash.
 * @param {number} length - The length of the random string to generate.
 * @returns {string} The SHA-256 hash of the generated random string.
 * 
 * @example 
 * 
 * const randomString = generateRandomString(32);
 * console.log(randomString);
 */
export function generateRandomHash(length: number): string {
  const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }

  const hash = createHash('sha256');
  hash.update(result);
  return hash.digest('hex');
}



/**
 * Format a date as a string using the specified options.
 * @param {Date} date - The date to format.
 * @param {string} [locale='en-US'] - The locale to use for formatting.
 * @returns {string} The formatted date string.
 */
export function formatDate(date: Date, locale: string = 'en-US'): string {
  const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Intl.DateTimeFormat(locale, options).format(date);
}



/**
 * Validates an email address.
 *
 * @param {string} email - The email address to validate.
 * @returns {boolean} `true` if the email address is valid, `false` otherwise.
 *
 * @example
 *
 * // Returns true
 * validateEmail("test@example.com");
 *
 * // Returns false
 * validateEmail("notanemail");
 */
export function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}




/**
 * Generates a random string of the specified length.
 *
 * @param {number} length - The length of the string to generate.
 * @returns {string} A random string of the specified length.
 *
 * @example
 *
 * // Returns a 10-character random string
 * generateRandomString(10);
 *
 * // Returns a 20-character random string
 * generateRandomString(20);
 */
export function generateRandomString(length: number): string {
  const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}





/**
 * Reverses a string.
 *
 * @param {string} str - The string to reverse.
 * @returns {string} The reversed string.
 *
 * @example
 *
 * // Returns "gnirts a esrever"
 * reverseString("reverse a string");
 */
export function reverseString(str: string): string {
  return str.split('').reverse().join('');
}



  
/**
 * Capitalizes the first letter of a string.
 *
 * @param {string} str - The string to capitalize.
 * @returns {string} The capitalized string.
 *
 * @example
 *
 * // Returns "Hello, world!"
 * capitalizeString("hello, world!");
 *
 * // Returns "Capitalized"
 * capitalizeString("capitalized");
 */
export function capitalizeFirstLetter(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
} 


/**
 * Convert a string to title case.
 *
 * @param {string} str - The string to convert to title case.
 * @returns {string} The string in title case.
 *
 * @example
 *
 * // Returns "Hello, World!"
 * toTitleCase("hello, world!");
 *
 * // Returns "This Is A Title"
 * toTitleCase("THIS IS A TITLE");
 */
export function toTitleCase(str: string): string {
  return str.replace(/\w\S*/g, (word) => {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  });
}