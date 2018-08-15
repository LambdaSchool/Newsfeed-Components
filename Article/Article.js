// Start at `let articles`

class Article {
  constructor(element) {
    // assign this.element to the passed in article element
    this.element = element;
    // create a reference to the ".expandButton" class. 
    this.expandButton = this.element.querySelector('.expandButton');
    // Using your expandButton reference, update the text on your expandButton to say "expand"
    this.expandButton.innerText = 'Click to Open';
    // Set a click handler on the expandButton reference (or article element), calling the expandArticle method.
    this.expandButton.addEventListener('click', this.expandArticle);

    // Add a button that removes article when marked as read
    this.readButton = this.element.querySelector('.read');
    this.readButton.addEventListener('click', this.markAsRead);
  }
  expandArticle() {
    // Using our reference to the article element, add or remove a class to expand or hide the article.
    event.currentTarget.parentNode.classList.toggle('article-open');
    if(event.currentTarget.parentNode.classList.contains('article-open') === true){
      event.currentTarget.innerText = 'Click to Close';
    } else {
      event.currentTarget.innerText = 'Click to Open';
    }
  }

  markAsRead(){
    event.currentTarget.parentNode.classList.add('article-remove');
    let closer = event.currentTarget.parentNode;
    setTimeout(function(){
      closer.style.display = 'none';
    }, 1000);
  }
}

// START HERE: Select all classes named ".article" and assign that value to the articles variable
let articles = document.querySelectorAll('.article');

// Use .map() to iterate over the articles array and create a new instance of Article by passing in each article element as a parameter to the constructor.
articles = Array.from(articles).map(function(each){
  each = new Article(each);
});