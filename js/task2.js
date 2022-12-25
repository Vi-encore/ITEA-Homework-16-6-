//2. Допишіть функцію countOnline

let users = [
  {
    age: 27,
    online: false,
  },
  {
    age: 32,
    online: true,
  },
  {
    age: 48,
    online: false,
  },
  {
    age: 19,
    online: true,
  },
  
];

function countOnline(arr) {
  let count = 0;
  users.forEach(user => {
    user.online === true ? count++ : count;
  });
  return count;
}
console.log(countOnline(users));
