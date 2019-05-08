class Article {
    constructor(domElement) {
        // assign this.domElement to the passed in domElement
        this.domElement = this.domElement;
        // create a reference to the ".expandButton" class. 
        this.expandButton = domElement.querySelector('.expandButton');
        // Using your expandButton reference, update the text on your expandButton to say "expand"
        this.expandButton.textContent = "expand";
        // Set a click handler on the expandButton reference, calling the expandArticle method.

        this.expandButton.addEventListener("click", () => this.expandArticle());
    }
    expandArticle() {
        // Using our reference to the domElement, toggle a class to expand or hide the domElement.
        this.domElement.classList.toggle("domElement-open");

    }
}

/* START HERE: 

- Select all classes named ".domElement" and assign that value to the articles variable.  

- With your selection in place, now chain .forEach() on to the articles variable
 to iterate over the articles NodeList and create a new instance of Article by passing in each domElement as a parameter to the Article class.

*/

let articles = document.querySelectorAll('article');


articles.forEach(function(article) {
    // console.log(domElement);
    return new Article(article);
});