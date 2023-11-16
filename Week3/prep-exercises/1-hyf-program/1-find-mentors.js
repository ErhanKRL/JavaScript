import { modules, students, mentors, classes } from "./hyf.js";
/**
 * Tjebbe would like help to get a list of possible mentors for a module.
 * Fill in this function that finds all the mentors that can teach the given module.
 *
 * It should return an array of names. So something like:
 *  ['John', 'Mary']
 */
const possibleMentorsForModule = (moduleName) => {
  const possibleMentors = mentors
    .filter(mentor => mentor.canTeach.indexOf(moduleName) !== -1)
    .map(mentor =>mentor.name)
  return possibleMentors;
};

console.log(possibleMentorsForModule('using-apis'));

/**
 * Tjebbe wants to make it even easier for himself.
 * Fill in this function that chooses a random mentor to teach the given module.
 *
 * It should return a single name.
 */
const findMentorForModule = (moduleName) => {
  const possibleMentors = possibleMentorsForModule(moduleName);
  return possibleMentors[Math.floor(Math.random() * possibleMentors.length)];
};
// You can uncomment out this line to try your function
 console.log(findMentorForModule('javascript'));
