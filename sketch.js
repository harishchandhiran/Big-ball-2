const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

//Creates the gamestate.
var gamestate = "onSling";
//Creates the score.
var score = 2000;

function setup(){
    //Creates the canvas.
    createCanvas(1200,800);

    engine = Engine.create();
    world = engine.world;

    //Creates the lower ground.
    ground2 = new Ground(600,790,1200,20);
    //Creates the upper platform.
    ground3 = new Ground(900,300,300,20);

    //Creates the platform under the slingshot.
    platform = new Ground(100,745,300,100);

    //Creates the ball which you control.
    ball = new Round(150,500,25);

    //Makes the slingshot and the ball constraint objects.
    slingshot = new SlingShot(ball.body,{x:150, y:500});

    //THE CLASS INDICATES THE COLOUR OF THE BOX.

    //Creates the left lower platform on the ground.
    pbox1 = new PinkBox(820,750,30,80);
    bbox1 = new BlueBox(860,750,30,80);
    gbox1 = new GreenBox(840,700,60,30);

    //Creates the middle lower platform on the ground.
    pbox2 = new PinkBox(900,750,30,80);
    bbox2 = new BlueBox(940,750,30,80);
    gbox2 = new GreenBox(920,700,60,30);

    //Creates the right lower platform on the ground.
    pbox3 = new PinkBox(980,750,30,80);
    bbox3 = new BlueBox(1020,750,30,80);
    gbox3 = new GreenBox(1000,700,60,30);

    //Creates the pink thin box above the lower layer.
    box1 = new PinkBox(920,685,250,20);

    //Creates the right middle platform on the ground.
    pbox4 = new PinkBox(980,620,30,80);
    bbox4 = new BlueBox(1020,620,30,80);
    gbox4 = new GreenBox(1000,565,60,30);

    //Creates the middle middle platform on the ground.
    pbox5 = new PinkBox(900,620,30,80);
    bbox5 = new BlueBox(940,620,30,80);
    gbox5 = new GreenBox(920,565,60,30);

    //Creates the left middle platform on the ground.
    pbox6 = new PinkBox(820,620,30,80);
    bbox6 = new BlueBox(860,620,30,80);
    gbox6 = new GreenBox(840,565,60,30);

    //Creates the blue thin box above the middle layer.
    box2 = new BlueBox(920,540,250,20);

    //Creates the left upper layer above on the ground.
    pbox7 = new PinkBox(820,490,30,80);
    bbox7 = new BlueBox(860,490,30,80);
    gbox7 = new GreenBox(840,430,60,30);

    //Creates the middle upper layer above on the ground.
    pbox8 = new PinkBox(900,490,30,80);
    bbox8 = new BlueBox(940,490,30,80);
    gbox8 = new GreenBox(920,430,60,30);

    //Creates the right upper layer above on the ground.
    pbox9 = new PinkBox(980,490,30,80);
    bbox9 = new BlueBox(1020,490,30,80);
    gbox9 = new GreenBox(1000,430,60,30);

    //Creates the first pillar.
    pbox10 = new PinkBox(800,250,30,120);
    gbox10 = new GreenBox(800,160,30,30);

    //Creates the second pillar.
    bbox11 = new BlueBox(850,250,30,120);
    gbox11 = new GreenBox(850,160,30,30);

    //Creates the third pillar.
    pbox12 = new PinkBox(900,250,30,120);
    gbox12 = new GreenBox(900,160,30,30);

    //Creates the fourth pillar.
    bbox13 = new BlueBox(950,250,30,120);
    gbox13 = new GreenBox(950,160,30,30);

    //Creates the fifth pillar.
    pbox14 = new PinkBox(1000,250,30,120);
    gbox14 = new GreenBox(1000,160,30,30);

}
function draw(){
    //Changes the background.
    background(0);
    //Updates the Engine.
    Engine.update(engine);

    //Subtracts the score.
    score = score - 1;
    //Displays the score
    noStroke();
    textSize(35);
    fill(255);
    text("SCORE: " + score,200,50);
    
    if(score<=0){
        text("YOU LOSE",200,150);
        score = 0;
        gamestate = "over";
    }

    //Displays the objects.
    ground2.display();
    ground3.display();

    platform.display();

    slingshot.display();

    ball.display();

    pbox1.display();
    bbox1.display();
    gbox1.display();

    pbox2.display();
    bbox2.display();
    gbox2.display();

    pbox3.display();
    bbox3.display();
    gbox3.display();

    box1.display();

    pbox4.display();
    bbox4.display();
    gbox4.display();

    pbox5.display();
    bbox5.display();
    gbox5.display();

    pbox6.display();
    bbox6.display();
    gbox6.display();

    box2.display();

    pbox7.display();
    bbox7.display();
    gbox7.display();

    pbox8.display();
    bbox8.display();
    gbox8.display();

    pbox9.display();
    bbox9.display();
    gbox9.display();

    pbox10.display();
    gbox10.display();

    bbox11.display();
    gbox11.display();

    pbox12.display();
    gbox12.display();

    bbox13.display();
    gbox13.display();

    pbox14.display();
    gbox14.display();
}

function mouseDragged(){
    //Helps the user to control the position of the ball using the mouse.
    if(gamestate!=="launched"){
        Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
    }
}

function mouseReleased(){
    //Releases the ball.
    slingshot.fly();
    //Changes the game state.
    gamestate = "launched";
}

function keyPressed(){
    //Gives the user an extra chance by clicking on the mouse.
    if(keyCode===32){
        slingshot.attach(bird.body);
        //Changes the game state so that the player can control the ball again.
        gamestate = "onSling";
    }
}
/*var box1, pig1;
var backgroundImg,platform;
var bird, slingShot;

function preload() {
    backgroundImg = loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    pig1 = new Pig(810, 350);
    log1 = new Log(810,260,300, PI/2);

    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    pig3 = new Pig(810, 220);

    log3 =  new Log(810,180,300, PI/2);

    box5 = new Box(810,160,70,70);
    log4 = new Log(760,120,150, PI/7);
    log5 = new Log(870,120,150, -PI/7);

    bird = new Bird(200,50);

    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(bird.body,{x:200, y:50});
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    strokeWeight(4);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();

    box3.display();
    box4.display();
    pig3.display();
    log3.display();

    box5.display();
    log4.display();
    log5.display();

    bird.display();
    platform.display();
    //log6.display();
    slingshot.display();    
}

function mouseDragged(){
    Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}*/