/*
 * Instead of storing all the information into separate variables,
 * you can instead create an object as shown below...
 */

/*const userOneEmail = 'george@example.com';
const userOneName = 'George';
const userOneFriends = ['Norman', 'Ravi'];

const userTwoEmail = 'norman@example.com';
const userTwoName = 'Norman';
const userTwoFriends = ['Theodore'];

const userThreeEmail = 'theodore@example.com';
const userThreeName = 'Theodore';
const userThreeFriends = ['Hans', 'Rodney'];

const login = (email) => console.log(email, 'is now online');
const logout = (email) => console.log(email, 'has logged out');
const logFriends = (friends) => {
  friends.forEach(friend => {
    console.log(friend);
  })
}*/

const userOne = {
  email: 'george@example.com',
  name: 'George',
  friends: ['Norman', 'Ravi'],
  login: () => console.log(this.email, 'is now online'),
  logout: () => console.log(this.email, 'has logged out')
};
