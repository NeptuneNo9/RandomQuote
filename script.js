$(document).ready(function(){
  
  var randomQuote;
  var randomNum;
  var randomAuthor;
  getQuote();
  
  function getQuote(){
    
    var quotes = ["Youth is something very new: twenty years ago no one mentioned it.", "Change will not come if we wait for some other person or some other time. We are the ones we've been waiting for. We are the change that we seek.", "The surest way to corrupt a youth is to instruct him to hold in higher esteem those who think alike than those who think differently.", "The purpose of life is to fight maturity.", "A man has to have a code, a way of life to live by.", "In every aspect of our lives, we are always asking ourselves, How am I of value? What is my worth? Yet I believe that worthiness is our birthright."];
    
    var authors = ["Gabriel Coco Chanel", "Barack Obama", "Friedrich Nietzsche", "Dick Werthimer", "John Wayne", "Oprah Winfrey"];
    
    randomNum = Math.floor((Math.random()*quotes.length));
    randomQuote = quotes[randomNum];
    randomAuthor = authors[randomNum];
    
    $(".quote").text(randomQuote);
    $(".author").text("- " + randomAuthor);
  }
    
  $(".btn").on("click", function(){
    getQuote();
  });
  
  $("#tweet-button").on("click", function(){
    window.open("http://twitter.com/intent/tweet?text=" + randomQuote + " -" + randomAuthor);
  });
  $("#tumblr-button").on("click", function(){
    window.open("https://www.tumblr.com/dashboard")
  })
});
