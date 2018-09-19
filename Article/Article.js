// Because classes are not hoised you will need to start your code at the bottom of the page.  Look for the comment "START HERE"

class Article {
  constructor(element) {
    // assign this.element to the passed in article element
    this.element = element;
    // create a reference to the ".expandButton" class. 
    this.expandButton = element.querySelector('.expandButton');
    // Using your expandButton reference, update the text on your expandButton to say "expand"
    this.expandButton.innerText = 'expand';
    // Set a click handler on the expandButton reference (or article element), calling the expandArticle method.
    this.expandButton.addEventListener("click", () => {this.expandArticle()});

    //Creating the close article functionality
    this.closeButton = element.querySelector('.close');
    this.closeButton.innerText = '×';
    this.closeButton.addEventListener("click", () => {this.closeArticle()});

  };
  expandArticle() {
    // Using our reference to the article element, add or remove a class to expand or hide the article.
    this.element.classList.toggle('article-open');
  };
  closeArticle() {
    this.element.style.display = 'none';
  }
}

// START HERE: Select all classes named ".article" and assign that value to the articles variable
let articles = document.querySelectorAll('.article');

// Use .map() to iterate over the articles array and create a new instance of Article by passing in each article element as a parameter to the constructor.
articles = Array.from(articles).map(article => {
  return new Article(article);
});
