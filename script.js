`use strict`;
const showElement = document.querySelector(`#show`);

const categories = [
  { id: `software development`, parent: null },
  { id: `web development`, parent: `software development` },
  { id: `front-end development`, parent: `web development` },
  { id: `back-end development`, parent: `web development` },
  { id: `HTML, CSS , JS`, parent: `front-end development` },
  { id: `React, Angular, Vue`, parent: `HTML, CSS , JS` },
  { id: `PHP, Node.js, Python`, parent: `back-end development` },
  { id: `Laravel, Express.js, Django`, parent: `PHP, Node.js, Python` },
];

// use recursion to make objects in an object form an array of objects

const makeObjectTree = (objectArray, value) => {
  let objectTree = {};
  let filteredObjectArray = objectArray.filter((obj) => obj.parent === value);
  filteredObjectArray.forEach((obj) => {
    objectTree[obj.id] = makeObjectTree(categories, obj.id);
  });
  return objectTree;
};
showElement.textContent = JSON.stringify(makeObjectTree(categories, null), null, 2);
console.log(JSON.stringify(makeObjectTree(categories, null), null, 2));
