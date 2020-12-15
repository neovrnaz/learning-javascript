let post = {
  id: 2,
  slug: 'hello-js',
  title: 'Hello Js'
};

post.getTitleLink = function () {
  let markdown = '';

  markdown += '<a href="' + this.slug + '">';
  markdown += this.title;
  markdown += '</a>';

  return markdown;
};

let title = post.getTitleLink();

console.log(title);
