// Start at `let articles`

class Article {
  constructor(element) {
    // assign this.element to the passed in article element
    this.element=element;
    // create a reference to the ".expandButton" class. 
    this.expandButton=this.element.querySelector('.expandButton');
    // Using your expandButton reference, update the text on your expandButton to say "expand"
    this.expandButton.innerHTML='Click To Open';
    // Set a click handler on the expandButton reference (or article element), calling the expandArticle method.
    this.expandButton.addEventListener('click', this.expandArticle.bind(this));

    this.closeButton=this.element.querySelector('.close')
    
    this.closeButton.innerHTML='Read';

    this.closeButton.addEventListener('click', this.close.bind(this));
  }

  expandArticle() {
    // Using our reference to the article element, add or remove a class to expand or hide the article.
    this.element.classList.toggle('article-open');
    if (this.element.classList.contains('article-open')) {
      TweenLite.to(this.element, .7, { height: '400px', ease: Elastic.easeOut});
      this.expandButton.innerHTML='Click To Close';
    } else {
      TweenLite.to(this.element, .7, { height: '50px', ease: Elastic.easeIn});
      this.expandButton.innerHTML='Click To Open';
    }
  }
  close() {
    document.querySelector('.articles').removeChild(this.element);
  }
}

// START HERE: Select all classes named ".article" and assign that value to the articles variable
let articles=document.querySelectorAll('.article');

// Use .map() to iterate over the articles array and create a new instance of Article by passing in each article element as a parameter to the constructor.
//articles = Array.from(articles).map();

articles=Array.from(articles).map(article=>new Article(article));

