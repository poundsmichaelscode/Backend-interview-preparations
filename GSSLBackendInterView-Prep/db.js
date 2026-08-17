// db.js

const authors = [
  { id: 1, name: "Bryan" },
  { id: 2, name: "Christian" },
  { id: 3, name: "Jason" },
  { id: 4, name: "Michael" },
  { id: 5, name: "John" },
  { id: 6, name: "David" },
  { id: 7, name: "James" },
  { id: 8, name: "Robert" },
];

async function getAuthorById(authorId) {
  return authors.find(author => author.id === authorId);
};

module.exports = { getAuthorById };
