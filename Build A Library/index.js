class Media {
  constructor(title) {
    this._title = title;
    this._isCheckedOut = false;
    this._ratings = [];
  }

  get title() {
    return this._title;
  }

  get isCheckedOut() {
    return this._isCheckedOut;
  }

  get ratings() {
    return this._ratings;
  }

  toggleCheckOutStatus() {
    this._isCheckedOut = !this._isCheckedOut;
  }

  getAverageRating() {
    const sum = this._ratings.reduce((acc, cur) =>{
      return acc + cur;
    })
    const length = this._ratings.length;
    return `The average rating is : ${Math.floor(sum/length)}`;
  }
  
  addRating(rating) {
    if (rating > 0 && rating <= 5) {
      this._ratings.push(rating);    }
  }

  set isCheckedOut(boolean) {
    this._isCheckedOut = boolean;
  }
}

class Book extends Media {
  constructor(title, author, pages) {
    super(title);
    this._author = author;
    this._pages = pages;
  }

  get author() {
    return this._author;
  }

  get pages() {
    return this._pages;
  }
}

class Movie extends Media {
  constructor(title, director, runTime) {
    super(title);
    this._director = director;
    this._runTime = runTime;
  }

  get director() {
    return this._director;
  }

  get runTime() {
    return this._runTime;
  }
}

class CD extends Media {
  constructor(title, artist, songs) {
    super(title);
    this._artist = artist;
    this._songs = songs;
  }

  get artist() {
    return this._artist;
  }

  get songs() {
    return this._songs;
  }
  
  shuffle() {
    for (let i = this._songs.length -1; i > 0; i--) {
      let randomIndex = Math.floor(Math.random() * (i + 1));
      [this._songs[i], this._songs[randomIndex]] = [this._songs[randomIndex], this._songs[i]];
    }
    return `Here is a shuffled up song list: ${this._songs}`;
  }
}

const RiB = new CD ("RiB", "Mamamoo", ["Hip", "Destiny", "Ten Nights", "Universe", "rEALITY", "4x4ever"]);

console.log(RiB);
RiB.toggleCheckOutStatus();
console.log(RiB);
console.log(RiB.shuffle());
console.log(RiB.shuffle());
console.log(RiB.shuffle());

// const historyOfEverything = new Book("A Short History of Nearly Everything", "Bill Bryson", 544);

// const speed = new Movie("Speed", "Jan de Bont", 116);

// console.log(speed);
// speed.toggleCheckOutStatus();
// console.log(speed.isCheckedOut);
// speed.addRating(1);
// speed.addRating(1);
// speed.addRating(0);
// console.log(speed);
// console.log(speed.getAverageRating());

// console.log(historyOfEverything);
// historyOfEverything.toggleCheckOutStatus();
// console.log(historyOfEverything);
// historyOfEverything.addRating(4);
// historyOfEverything.addRating(5);
// historyOfEverything.addRating(5);
// console.log(historyOfEverything);
// console.log(historyOfEverything.getAverageRating());
// console.log(historyOfEverything.title);
// console.log(historyOfEverything.pages);