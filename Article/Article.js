// Because classes are not hoised you will need to start your code at the bottom of the page.  Look for the comment "START HERE"

class Article {
  constructor(domElement) {
    // assign this.domElement to the passed in domElement
    this.domElement = domElement;
    // create a reference to the ".expandButton" class. 
    this.expandButton = this.domElement.querySelector('.expandButton');
    this.closeButton = this.domElement.querySelector('.close');
    // Using your expandButton reference, update the text on your expandButton to say "expand"
    this.expandButton.textContent = 'Click to Expand';
    this.closeButton.textContent = 'Click to Remove';
    // Set a click handler on the expandButton reference, calling the expandArticle method.
    this.expandButton.addEventListener('click', (event) => {
        this.expandArticle(event)
    })
    this.closeButton.addEventListener('click',(event)=>{
        this.domElement.style.display = 'none';
    })
  }

  expandArticle() {
    // Using our reference to the domElement, toggle a class to expand or hide the article.
    if(!this.domElement.classList.contains('article-open')){
      TweenMax.to(this.domElement,1,{height: 400,onComplete:()=>{
        this.domElement.classList.toggle('article-open');
        this.expandButton.textContent = 'Click to Close';
      }});
    }
    else{
      TweenMax.to(this.domElement,1,{height: 50,onComplete:()=>{
        this.domElement.classList.toggle('article-open');
        this.expandButton.textContent = 'Click to Expand';
      }});
    }
  }
}

// START HERE: Select all classes named ".article" and assign that value to the articles variable
let articles = document.querySelectorAll('.article');

// Use .map() to iterate over the articles array and create a new instance of Article by passing in each article as a parameter to the constructor.
articles = Array.from(articles).map( article => {
  return new Article(article);
});


