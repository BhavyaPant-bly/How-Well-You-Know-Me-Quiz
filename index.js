var score=0;
var readlineSync= require('readline-sync');
var username=readlineSync.question("What is Your Name: ");
console.log("Welcome "+username+" to how well u know Bhavya Pant!!");

function play(Q,A)
{
  var useranswer=readlineSync.question(Q);

  if(useranswer===A)
   {
     console.log("Right!!!");
     score+=1;
   }
  else
   {
     console.log("Wrong!");
     console.log("Correct answer: "+A);
   }
  console.log("current score:",score);
  console.log("-------------------------");
}

var qs=[{
  q: "What Bhavya loves to eat?: ",
  a:"Shahi Paneer"
},
{
  q: "What was Bhavya's 1st Computer Language?: ",
  a:"C++"
},
{
  q: "Who's Bhavya's Favorite pet?: ",
  a:"Labrador"
},
{
  q: "What Bhavya loves to do the Most!?: ",
  a:"Coding"
},
{
  q: "What's Bhavya's favorite Marvel Superhero?: ",
  a:"None"
},
{
  q: "What's Bhavya's Favorite Cartoon?: ",
  a:"Shinchan"
},
{
  q: "What's Bhavya currently doing ?: ",
  a:"BSc Physics"
},
{
  q: "What is the name of Bhavya's favorite fruit?: ",
  a:"Mango"
},
{
  q: "Where does Bhavya live?: ",
  a:"Bareilly"
},
{
  q: "What type of Family does Bhavya have: Joint or Nuclear?: ",
  a:"Joint"
}
]

for(var i=0; i<qs.length;i++)
 {
   var currques=qs[i];
   play(currques.q,currques.a);
 }

 console.log("Your score:",score);

var highscore=5;

 if(highscore<score)
  {
    console.log("YAY!! you have the Highest Score!!!");
    highscore=score;
  }
 else
  console.log("Highest score:",highscore);