let PT
let name
let programState = 'intro';

let Font1
let Font4
let Font8

let FontArray = []
let FontIndex = 0;

let HeadArray = []
let HeadIndex = 0;

let TorsoArray = []
let TorsoIndex = 0;

let LeftLegArray = []
let LeftLegIndex = 0;

let LeftArmArray = []
let LeftArmIndex = 0;

let RightLegArray = []
let RightLegIndex = 0;

let RightArmArray = []
let RightArmIndex = 0;

let SceneArray = []
let SceneIndex = 0;

function preload() {
  
  //loads fonts for name output
Font1 = loadFont('./fonts/ANDMOREY-Demo.otf');
Font4 = loadFont('./fonts/Dendritic Voltage.otf');
Font8 = loadFont('./fonts/PinkAndCrimson-9YgXK.ttf');
    
  //loads custom cursor 
  PT = loadImage('pixelpointer.png')
  
  
  //loads background
SceneArray[0] = loadImage('./backkground/b0.png');  
SceneArray[1] = loadImage('./backkground/b1.png');
SceneArray[2] = loadImage('./backkground/b2.png');  
SceneArray[3] = loadImage('./backkground/b3.png');
SceneArray[4] = loadImage('./backkground/b4.png');  
SceneArray[5] = loadImage('./backkground/b5.png');
SceneArray[6] = loadImage('./backkground/b6.png');  
SceneArray[7] = loadImage('./backkground/b7.png');
SceneArray[8] = loadImage('./backkground/b8.png');  
SceneArray[9] = loadImage('./backkground/b9.png');
SceneArray[10] = loadImage('./backkground/b10.png');  
SceneArray[11] = loadImage('./backkground/b12.png');
SceneArray[12] = loadImage('./backkground/b13.png');  
SceneArray[13] = loadImage('./backkground/b14.png');
SceneArray[14] = loadImage('./backkground/b15.png'); 
SceneArray[15] =  loadImage('./backkground/b16.png'); 
SceneArray[16] =  loadImage('./backkground/b17.png'); 
  
  
  
  //loads limbs 
  //loads heads 
HeadArray[0] = loadImage('./head/cloudhead.png');  
HeadArray[1] = loadImage('./head/firehead.png');  
HeadArray[2] = loadImage('./head/rabbithead.png');
HeadArray[3] = loadImage('./head/standardhead.png'); 
HeadArray[4] = loadImage('./head/wolfhead.png');  
  
  //loads torso
TorsoArray[0] = loadImage('./torso/cloudtorso.png'); 
TorsoArray[1] = loadImage('./torso/firetorso.png');  
TorsoArray[2] = loadImage('./torso/rabbittorso.png'); 
TorsoArray[3] = loadImage('./torso/standardtorso.png');  
TorsoArray[4] = loadImage('./torso/wolftorso.png');  
  
  //loads right leg
RightLegArray[0] = loadImage('./rightleg/rightcloudleg.png');  
RightLegArray[1] = loadImage('./rightleg/rightfireleg.png');  
RightLegArray[2] = loadImage('./rightleg/rightrabbitleg.png');
RightLegArray[3] = loadImage('./rightleg/rightstandardleg.png');  
RightLegArray[4] = loadImage('./rightleg/rightwolfleg.png'); 
  
  //loads left leg
LeftLegArray[0] = loadImage('./leftleg/leftcloudleg.png'); 
LeftLegArray[1] = loadImage('./leftleg/leftfireleg.png'); 
LeftLegArray[2] = loadImage('./leftleg/leftrabbitleg.png'); 
LeftLegArray[3] = loadImage('./leftleg/leftstandardleg.png'); 
LeftLegArray[4] = loadImage('./leftleg/leftwolfleg.png'); 
  
  //loads right arm
RightArmArray[0] = loadImage('./rightarm/rightcloudarm.png'); 
RightArmArray[1] = loadImage('./rightarm/rightfirearm.png'); 
RightArmArray[2] = loadImage('./rightarm/rightrabbitarm.png'); 
RightArmArray[3] = loadImage('./rightarm/rightstandardarm.png');  
RightArmArray[4] = loadImage('./rightarm/rightwolfarm.png');  
  
  //loads left arm
LeftArmArray[0] = loadImage('./leftarm/leftcloudarm.png'); 
LeftArmArray[1] = loadImage('./leftarm/leftfirearm.png'); 
LeftArmArray[2] = loadImage('./leftarm/leftrabbitarm.png');
LeftArmArray[3] = loadImage('./leftarm/leftstandardarm.png'); 
LeftArmArray[4] = loadImage('./leftarm/leftwolfarm.png'); 
   
}
  
function setup() {
  noCursor();
  
  //set up for buttons
  var canvas = createCanvas(600, 600);
  canvas.parent("sketch-holder");

  //set up for each limb
  var button = createButton("HEAD");
  button.parent("button-holder");
  button.mousePressed(changehead);
  button.size (100,50);
  
  var button2 = createButton("TORSO");
  button2.parent("button-holder");
  button2.mousePressed(changetorso);  
  button2.size (100,50);
  
  var button3 = createButton("LEFT LEG");
  button3.parent("button-holder");
  button3.mousePressed(changeleftleg);
  button3.size (100,50);
  
  var button4 = createButton("LEFT ARM");
  button4.parent("button-holder");
  button4.mousePressed(changeleftarm); 
  button4.size (100,50);
  
  var button5 = createButton("RIGHT LEG");
  button5.parent("button-holder");
  button5.mousePressed(changerightleg);
  button5.size (100,50);
  
  var button6 = createButton("RIGHT ARM");
  button6.parent("button-holder");
  button6.mousePressed(changerightarm);
  button6.size (100,50);
  
  var button7 = createButton("RANDOM");
  button7.parent("button-holder");
  button7.mousePressed(RANDOM);  
  button7.size (100,50);
  
  var button8 = createButton("SCENE");
  button8.parent("button-holder");
  button8.mousePressed(SCENE);  
  button8.size (100,50);

  var button9 = createButton("SAVE");
  button9.parent("button-holder");
  button9.mousePressed(SAVE);  
  button9.size (100,50);
  
  //set up and display for the input box for the name
  name = createInput(''); 
  name.attribute('placeholder', 'GIVE IT A NAME');
  name.position(720,635);
  name.size(150,25);
 
}

//sets up the diffrent "tabs"
function draw() {
  switch (programState) {
    case 'intro':
      TitleScreen();
      break;
      
    case 'rules':
      RulesScreen();
      break;
      
    case 'game':
      GameScreen();
      break;
  }
  
//displays special cursor
  image(PT, mouseX, mouseY, 20, 20);
}

function keyReleased() {
  if (keyCode === ENTER) {
   switch (programState) {
      case 'intro':
        programState = 'title';
        break;
        
      case 'title':
        programState = 'rules';
        break;
        
      case 'rules':
        programState = 'game';
        break;
  }
  }
}

function TitleScreen(){
  push();
  background(0);
  textAlign(CENTER);
  fill(255);
  textFont(Font1);
  textSize(60);
  text('Freak Factory', width/2, height/2);
  textSize(30);
  text('By Emmanuel Quainoo', width/2, height*0.55);
  textFont(Font4);
  textSize(13);
  text('Press "ENTER" To See Rules', width/2, height*0.7);
  pop();
  
}

function RulesScreen(){
  push();
  background(0);
  textAlign(CENTER);
  fill(255);
  textFont(Font8);
  textSize(80);
  text('RULES:', width/2, height*0.2);
  textSize(15)
  text('Press HEAD to change the head', width/2, height*0.3);
  text('Press TORSO to change the torso', width/2, height*0.35);
  text('Press LEFT ARM to change the left arm', width/2, height*0.4);
  text('Press LEFT LEG to change the left leg', width/2, height*0.45);
  text('Press RIGHT ARM to change the right arm', width/2, height*0.5);
  text('Press RIGHT LEG to change the right leg', width/2, height*0.55);
  text('Press RANDOM to get random features', width/2, height*0.6);
  text('Press SCENE to change the torso', width/2, height*0.65);
  text('Press SAVE to save a picture of character', width/2, height*0.7);
  
  textFont(Font4);
  textSize(12);
  text('Press "ENTER" To Go To Game', width/2, height*0.80);
  pop();
  
}

function GameScreen(){
//displays background 
  image(SceneArray[SceneIndex], 0,0,600,600);
  
///displays arms
  image(LeftArmArray[LeftArmIndex], 175,300,100,100); 
  image(RightArmArray[RightArmIndex], 325,300,100,100); 
  
//displays head and torso
  image(HeadArray[HeadIndex], 210,145,180,180); 
  image(TorsoArray[TorsoIndex], 230,290,140,140);  
  
//displays legs
  image(RightLegArray[RightLegIndex], 265,400,170,170); 
  image(LeftLegArray[LeftLegIndex], 170,400,170,170);
  
  
  /// code to output name written in bar
  let result = name.value();
  if (result){
    textSize(100);
    textAlign(CENTER);
    textFont(Font4);
    text(result, 300, 100);
  }
  
  //displays special cursor
  image(PT, mouseX, mouseY, 20, 20);

}

function changehead(){
  HeadIndex++;
  if(HeadIndex > HeadArray.length-1) {
    HeadIndex = 0;
  }  
}

function changetorso(){
  
  TorsoIndex++;
  if(TorsoIndex > TorsoArray.length-1) {
    TorsoIndex = 0;
  }  
}

function changerightleg(){
  RightLegIndex++;
  if(RightLegIndex > RightLegArray.length-1) {
    RightLegIndex = 0;
  }     
}

function changerightarm(){
  RightArmIndex++;
  if(RightArmIndex > RightArmArray.length-1) {
    RightArmIndex = 0;    
  }
}

function changeleftleg(){
   LeftLegIndex++;
  if(LeftLegIndex > LeftLegArray.length-1) {
    LeftLegIndex = 0;
  }     
}

function changeleftarm(){
  LeftArmIndex++;
  if(LeftArmIndex > LeftArmArray.length-1) {
    LeftArmIndex = 0;    
  }
}

function RANDOM(){
  HeadIndex = int(random(HeadArray.length));
  TorsoIndex = int(random(TorsoArray.length));
  RightLegIndex = int(random(RightLegArray.length));
  LeftLegIndex = int(random(LeftLegArray.length));
  RightArmIndex = int(random(RightArmArray.length));
  LeftArmIndex = int(random(LeftArmArray.length));
  TextIndex = int(random(TextArray.length));
  SceneIndex = int(random(SceneArray.length));
}

function SCENE(){
   SceneIndex++;
  if(SceneIndex > SceneArray.length-1) {
    SceneIndex = 0;  
}
}

function SAVE(){
  saveCanvas('FREAK.jpg');  

}