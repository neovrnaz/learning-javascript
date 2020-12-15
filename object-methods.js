var post = {
  id: 2,
  title: 'Hello Javascript',
  getTitleMarkup: function(tag) {
    var markup = '';

    markup += '<' + tag + '>';
    markup += post.title;
    markup += '</' + tag + '>';

    return markup;
  },
  printTitle: function() {
    console.log(post.title);
  }
}

post.printTitle = function() {
  console.log(post.title);
};

let titleHTML = post.getTitleMarkup('h2');

console.log(titleHTML);
