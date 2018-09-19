// Because classes are not hoised you will need to start your code at the bottom of the page.  Look for the comment "START HERE"

class Article {
  constructor(domElement) {
    // assign this.domElement to the passed in domElement
    this.domElement = domElement;
    // create a reference to the ".expandButton" class. 
    this.expandButton = this.domElement.querySelector('.expandButton');
    // created reference to close button
    this.closeButton = this.domElement.querySelector('.btn');
    // Using your expandButton reference, update the text on your expandButton to say "expand"
    this.expandButton.innerText = 'expand';
    // Set a click handler on the expandButton reference, calling the expandArticle method.
    this.expandButton.addEventListener('click', () => {
      this.expandArticle();
    });
    // I set a click handler to close button reference
    this.closeButton.addEventListener('click', () => {
      this.close();
    });
  }
  
  expandArticle() {
    // Using our reference to the domElement, toggle a class to expand or hide the article.
    this.domElement.classList.toggle('article-open');
  }

  close() {
    this.domElement.style.display = 'none';
  }
}

// START HERE: Select all classes named ".article" and assign that value to the articles variable
let articles = document.querySelectorAll('.article');

// Use .map() to iterate over the articles array and create a new instance of Article by passing in each article as a parameter to the constructor.
articles = Array.from(articles).map(domElement => {
  new Article(domElement);
});

let articlesContainer = document.querySelector('.articles');
let div = document.createElement('div');
let h2 = document.createElement('h2');
let pDate = document.createElement('p');
let span = document.createElement('span');
let button = document.createElement('button');

let createArticle = () => {
  h2.innerText = 'testing';
  pDate.innerText = 'Nov 7th, 2017';
  button.innerText = 'Close';
  span.innerText = 'expand';
  div.classList.add('article');
  div.classList.add('newArticle');
  span.classList.add('expandButton');
  button.classList.add('btn');
  articlesContainer.appendChild(div);
  div.appendChild(h2);
  div.appendChild(pDate);
  div.appendChild(span);
  div.appendChild(button);
}

createArticle();

let newArticles = document.querySelectorAll('.newArticle');

newArticles = Array.from(newArticles).map(domElement => {
  new Article(domElement);
});

