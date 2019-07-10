// Because classes are not hoised you will need to start your code at the bottom of the page.  Look for the comment "START HERE"

class Article {
  constructor(domElement) {
    // assign this.domElement to the passed in domElement
    this.domElement = domElement; //referencing article
    
    // create a reference to the ".expandButton" class. 
    //won't show up with querySelectorAll b/c it returns a nodelist
    this.expandButton = this.domElement.querySelector('.expandButton')
    this.expandButton.innerHTML = 'expand';
    //or textContent
    // Using your expandButton reference, update the text on your expandButton to say "expand"
    
    //ES 6
        // Set a click handler on the expandButton reference, calling the expandArticle method.
    this.expandButton.addEventListener('click', () => { this.expandArticle() });
  }
    //ES 5
    // this.expandButton.addEventListener("click", this.expandArticle.bind(this));


    
  

  expandArticle() {
    // Using our reference to the domElement, toggle a class to expand or hide the article.
    //need classList for toggle functionality 
      this.domElement.classList.toggle('article-open')
  }
}

/* START HERE: 

- Select all classes named ".article" and assign that value to the articles variable.  

- With your selection in place, now chain .forEach() on to the articles variable to iterate over the articles NodeList and create a new instance of Article by passing in each article as a parameter to the constructor.

*/

let articles = document.querySelectorAll('.article').forEach(article => {
  new Article(article)
})




