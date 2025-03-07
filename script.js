
// Q1. Write a function groupBooksByAuthor(books) that takes an array of book objects and returns
//an object where keys are authors and values are arrays of books by that author.

function groupBooksByAuthor(books) {
    return books.reduce((acc, book) => {
        const { author } = book;
        if (!acc[author]) {
            acc[author] = [];
        }
        acc[author].push(book);
        return acc;
    }, {});
}

// Q2 Write a function findBooksPublishedAfter(books, year) that returns an array of book titles
//published after the given year. (Use filter.)

function findBooksPublishedAfter(books, year) {
    return books
        .filter(book => book.publicationYear > year)
        .map(book => book.title);
}
// Q3 c. Write a function generateBookSummaries(books) that returns an array of strings, where each
//string is a summary of a book in the format: "[Title] by [Author] ([Publication Year])". (Use map.)

function generateBookSummaries(books) {
    return books.map(book => {
        return `${book.title} by ${book.author}, published in ${book.publicationYear}`;
    });
}

// Example usage
const books = [
    { title: "Book One", author: "Author A", publicationYear: 2001 },
    { title: "Book Two", author: "Author B", publicationYear: 2005 },
    { title: "Book Three", author: "Author A", publicationYear: 2010 },
];

console.log(groupBooksByAuthor(books));
console.log(findBooksPublishedAfter(books, 2003));
console.log(generateBookSummaries(books));
