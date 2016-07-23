$(document).ready(() => {
    var $first_line = $('.quote>.first');
    var $second_line = $('.quote>.second');
    var $author = $('.quote>.author');
    $first_line.velocity('fadeIn', {duration: 3000});
    $second_line.velocity('fadeIn', {delay: 250, duration: 3000});
    $author.velocity('fadeIn', {delay: 500, duration: 3000});
});
