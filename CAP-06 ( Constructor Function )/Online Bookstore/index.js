function Author(name, birthYear, nationality) {
    this.name = name;
    this.birthYear = birthYear;
    this.nationality = nationality;
    
    this.getAuthorInfo = function() {
        console.log(`Author: ${this.name}`);
        console.log(`Birth Year: ${this.birthYear}`);
        console.log(`Nationality: ${this.nationality}`);
        console.log('-------------------------');
    };
}

function Book(title, author, genre, price) {
    this.title = title;
    this.author = author; 
    this.genre = genre;
    this.price = price;

    this.getBookInfo = function() {
        console.log(`Title: ${this.title}`);
        this.author.getAuthorInfo(); 
        console.log(`Genre: ${this.genre}`);
        console.log(`Price: $${this.price}`);
        console.log('-------------------------');
    };
}

var author1 = new Author("J.K. Rowling", 1965, "British");
var author2 = new Author("George R.R. Martin", 1948, "American");

var book1 = new Book("Harry Potter and the Sorcerer's Stone", author1, "Fantasy", 20.99);
var book2 = new Book("A Game of Thrones", author2, "Epic Fantasy", 25.99);

book1.getBookInfo();
book2.getBookInfo();
