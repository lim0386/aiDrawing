var myRec = new p5.SpeechRec(); // new P5.SpeechRec object
var myVoice = new p5.Speech(); // new P5.Speech object

myRec.continuous = true; // do continuous recognition
//myRec.interimResults = true; // allow partial recognition (faster, less accurate)
// The SketchRNN model
let model;
// Start by drawing
let previous_pen = 'down';
// Current location of drawing
let x, y;
// The current "stroke" of the drawing
let strokePath;

var textResult;

function setup() {
  createCanvas(640, 480);
  background(255);
  textResult = 'cat';
  // Load the model
  // See a list of all supported models: https://github.com/ml5js/ml5-library/blob/master/src/SketchRNN/models.js
  model = ml5.SketchRNN(textResult, modelReady);

  // Button to start drawing
  // let button = select('#clear');
  // button.mousePressed(startDrawing);
  //
  textSize(32);
  textAlign(CENTER);
  // text("say something", width / 2, 30);
  myRec.onResult = showResult;
  myRec.start();

  myVoice.speak("say something");
}

// Reset the drawing
function startDrawing() {
  fill(255);
  noStroke();
  rect(0, 40, 640, 480);
  stroke(1);
  // background(255);
  // Start in the middle
  x = width / 2;
  y = height / 2;
  model.reset();
  // Generate the first stroke path
  model.generate(gotStroke);
}

function draw() {
  // If something new to draw
  if (strokePath) {
    // If the pen is down, draw a line
    if (previous_pen == 'down') {
      stroke(0);
      strokeWeight(3.0);
      line(x, y, x + strokePath.dx, y + strokePath.dy);
    }
    // Move the pen
    x += strokePath.dx;
    y += strokePath.dy;
    // The pen state actually refers to the next stroke
    previous_pen = strokePath.pen;

    // If the drawing is complete
    if (strokePath.pen !== 'end') {
      strokePath = null;
      model.generate(gotStroke);
    }
  }
}

// A new stroke path
function gotStroke(err, s) {
  strokePath = s;
}

// The model is ready
function modelReady() {
  select('#status').html('말씀해주세요');
  startDrawing();
}

function showResult() {
  if (myRec.resultValue === true) {
    fill(255);
    noStroke();
    rect(0, 0, 640, 40);
    stroke(1);
    // fill(0);
    // background(255);
    text(myRec.resultString, width / 2, 30);
    //myVoice.interrupt = checkbox.elt.checked;
    myVoice.speak(myRec.resultString); // debug printer for voice options
    if (myRec.resultString === '시계') {
      console.log(myRec.resultString);
      model = ml5.SketchRNN('alarm_clock', modelReady);
      startDrawing();
    }
    if (myRec.resultString === '알람 시계') {
      console.log(myRec.resultString);
      model = ml5.SketchRNN('alarm_clock', modelReady);
      startDrawing();
    }
    if (myRec.resultString === '앰뷸런스') {
      console.log(myRec.resultString);
      model = ml5.SketchRNN('ambulance', modelReady);
      startDrawing();
    }
    if (myRec.resultString === '구급차') {
      console.log(myRec.resultString);
      model = ml5.SketchRNN('ambulance', modelReady);
      startDrawing();
    }
    if (myRec.resultString === '천사') {
      console.log(myRec.resultString);
      model = ml5.SketchRNN('angel', modelReady);
      startDrawing();
    }
    if (myRec.resultString === '엔젤') {
      console.log(myRec.resultString);
      model = ml5.SketchRNN('angel', modelReady);
      startDrawing();
    }
    if (myRec.resultString === '개미') {
      console.log(myRec.resultString);
      model = ml5.SketchRNN('ant', modelReady);
      startDrawing();
    }
    if (myRec.resultString === '가방') {
      console.log(myRec.resultString);
      model = ml5.SketchRNN('backpack', modelReady);
      startDrawing();
    }
    if (myRec.resultString === '바구니') {
      console.log(myRec.resultString);
      model = ml5.SketchRNN('basket', modelReady);
      startDrawing();
    }
    if (myRec.resultString === '곰') {
      console.log(myRec.resultString);
      model = ml5.SketchRNN('bear', modelReady);
      startDrawing();
    }
    if (myRec.resultString === '꿀벌') {
      console.log(myRec.resultString);
      model = ml5.SketchRNN('bee', modelReady);
      startDrawing();
    }
    if (myRec.resultString === '자전거') {
      console.log(myRec.resultString);
      model = ml5.SketchRNN('bicycle', modelReady);
      startDrawing();
    }
    if (myRec.resultString === '새') {
      console.log(myRec.resultString);
      model = ml5.SketchRNN('bird', modelReady);
      startDrawing();
    }
    if (myRec.resultString === '다리') {
      console.log(myRec.resultString);
      model = ml5.SketchRNN('bridge', modelReady);
      startDrawing();
    }
    if (myRec.resultString === '불도저') {
      console.log(myRec.resultString);
      model = ml5.SketchRNN('bulldozer', modelReady);
      startDrawing();
    }
    if (myRec.resultString === '버스') {
      console.log(myRec.resultString);
      model = ml5.SketchRNN('bus', modelReady);
      startDrawing();
    }
    if (myRec.resultString === '나비') {
      console.log(myRec.resultString);
      model = ml5.SketchRNN('butterfly', modelReady);
      startDrawing();
    }
    if (myRec.resultString === '선인장') {
      console.log(myRec.resultString);
      model = ml5.SketchRNN('cactus', modelReady);
      startDrawing();
    }
    if (myRec.resultString === '성') {
      console.log(myRec.resultString);
      model = ml5.SketchRNN('castle', modelReady);
      startDrawing();
    }
    if (myRec.resultString === '고양이') {
      console.log(myRec.resultString);
      model = ml5.SketchRNN('cat', modelReady);
      startDrawing();
    }
    if (myRec.resultString === '의자') {
      console.log(myRec.resultString);
      model = ml5.SketchRNN('chair', modelReady);
      startDrawing();
    }
    if (myRec.resultString === '꽃게') {
      console.log(myRec.resultString);
      model = ml5.SketchRNN('crab', modelReady);
      startDrawing();
    }
    if (myRec.resultString === '배') {
      console.log(myRec.resultString);
      model = ml5.SketchRNN('cruise_ship', modelReady);
      startDrawing();
    }
    if (myRec.resultString === '개') {
      console.log(myRec.resultString);
      model = ml5.SketchRNN('dog', modelReady);
      startDrawing();
    }
    if (myRec.resultString === '강아지') {
      console.log(myRec.resultString);
      model = ml5.SketchRNN('dog', modelReady);
      startDrawing();
    }
    if (myRec.resultString === '돌고래') {
      console.log(myRec.resultString);
      model = ml5.SketchRNN('dolphin', modelReady);
      startDrawing();
    }
    if (myRec.resultString === '오리') {
      console.log(myRec.resultString);
      model = ml5.SketchRNN('duck', modelReady);
      startDrawing();
    }
    if (myRec.resultString === '코끼리') {
      console.log(myRec.resultString);
      model = ml5.SketchRNN('elephant', modelReady);
      startDrawing();
    }
    if (myRec.resultString === '얼굴') {
      console.log(myRec.resultString);
      model = ml5.SketchRNN('face', modelReady);
      startDrawing();
    }
    if (myRec.resultString === '소방차') {
      console.log(myRec.resultString);
      model = ml5.SketchRNN('firetruck', modelReady);
      startDrawing();
    }
    if (myRec.resultString === '꽃') {
      console.log(myRec.resultString);
      model = ml5.SketchRNN('flower', modelReady);
      startDrawing();
    }
    if (myRec.resultString === '개구리') {
      console.log(myRec.resultString);
      model = ml5.SketchRNN('frog', modelReady);
      startDrawing();
    }
    if (myRec.resultString === '손') {
      console.log(myRec.resultString);
      model = ml5.SketchRNN('hand', modelReady);
      startDrawing();
    }
    if (myRec.resultString === '헬리콥터') {
      console.log(myRec.resultString);
      model = ml5.SketchRNN('helicopter', modelReady);
      startDrawing();
    }
    if (myRec.resultString === '열쇠') {
      console.log(myRec.resultString);
      model = ml5.SketchRNN('key', modelReady);
      startDrawing();
    }
    if (myRec.resultString === '사자') {
      console.log(myRec.resultString);
      model = ml5.SketchRNN('lion', modelReady);
      startDrawing();
    }
    if (myRec.resultString === '가재') {
      console.log(myRec.resultString);
      model = ml5.SketchRNN('lobster', modelReady);
      startDrawing();
    }
    if (myRec.resultString === '인어') {
      console.log(myRec.resultString);
      model = ml5.SketchRNN('mermaid', modelReady);
      startDrawing();
    }
    if (myRec.resultString === '원숭이') {
      console.log(myRec.resultString);
      model = ml5.SketchRNN('monkey', modelReady);
      startDrawing();
    }
    if (myRec.resultString === '모기') {
      console.log(myRec.resultString);
      model = ml5.SketchRNN('mosquito', modelReady);
      startDrawing();
    }
    if (myRec.resultString === '문어') {
      console.log(myRec.resultString);
      model = ml5.SketchRNN('octopus', modelReady);
      startDrawing();
    }
    if (myRec.resultString === '올빼미') {
      console.log(myRec.resultString);
      model = ml5.SketchRNN('owl', modelReady);
      startDrawing();
    }
    if (myRec.resultString === '부엉이') {
      console.log(myRec.resultString);
      model = ml5.SketchRNN('owl', modelReady);
      startDrawing();
    }
    if (myRec.resultString === '나무') {
      console.log(myRec.resultString);
      model = ml5.SketchRNN('palm_tree', modelReady);
      startDrawing();
    }
    if (myRec.resultString === '앵무새') {
      console.log(myRec.resultString);
      model = ml5.SketchRNN('parrot', modelReady);
      startDrawing();
    }
    if (myRec.resultString === '펭귄') {
      console.log(myRec.resultString);
      model = ml5.SketchRNN('penguin', modelReady);
      startDrawing();
    }
    if (myRec.resultString === '돼지') {
      console.log(myRec.resultString);
      model = ml5.SketchRNN('pig', modelReady);
      startDrawing();
    }
    if (myRec.resultString === '파인애플') {
      console.log(myRec.resultString);
      model = ml5.SketchRNN('pineapple', modelReady);
      startDrawing();
    }
    if (myRec.resultString === '토끼') {
      console.log(myRec.resultString);
      model = ml5.SketchRNN('rabbit', modelReady);
      startDrawing();
    }
    if (myRec.resultString === '라디오') {
      console.log(myRec.resultString);
      model = ml5.SketchRNN('radio', modelReady);
      startDrawing();
    }
    if (myRec.resultString === '코뿔소') {
      console.log(myRec.resultString);
      model = ml5.SketchRNN('rhinoceros', modelReady);
      startDrawing();
    }
    if (myRec.resultString === '거북이') {
      console.log(myRec.resultString);
      model = ml5.SketchRNN('sea_turtle', modelReady);
      startDrawing();
    }
    if (myRec.resultString === '양') {
      console.log(myRec.resultString);
      model = ml5.SketchRNN('sheep', modelReady);
      startDrawing();
    }
    if (myRec.resultString === '달팽이') {
      console.log(myRec.resultString);
      model = ml5.SketchRNN('snail', modelReady);
      startDrawing();
    }
    if (myRec.resultString === '눈') {
      console.log(myRec.resultString);
      model = ml5.SketchRNN('snowflake', modelReady);
      startDrawing();
    }
    if (myRec.resultString === '모터보트') {
      console.log(myRec.resultString);
      model = ml5.SketchRNN('speedboat', modelReady);
      startDrawing();
    }
    if (myRec.resultString === '거미') {
      console.log(myRec.resultString);
      model = ml5.SketchRNN('spider', modelReady);
      startDrawing();
    }
    if (myRec.resultString === '다람쥐') {
      console.log(myRec.resultString);
      model = ml5.SketchRNN('squirrel', modelReady);
      startDrawing();
    }
    if (myRec.resultString === '딸기') {
      console.log(myRec.resultString);
      model = ml5.SketchRNN('strawberry', modelReady);
      startDrawing();
    }
    if (myRec.resultString === '백조') {
      console.log(myRec.resultString);
      model = ml5.SketchRNN('swan', modelReady);
      startDrawing();
    }
    if (myRec.resultString === '모나리자') {
      console.log(myRec.resultString);
      model = ml5.SketchRNN('the_mona_lisa', modelReady);
      startDrawing();
    }
    if (myRec.resultString === '호랑이') {
      console.log(myRec.resultString);
      model = ml5.SketchRNN('tiger', modelReady);
      startDrawing();
    }
    if (myRec.resultString === '칫솔') {
      console.log(myRec.resultString);
      model = ml5.SketchRNN('toothbrush', modelReady);
      startDrawing();
    }
    if (myRec.resultString === '트랙터') {
      console.log(myRec.resultString);
      model = ml5.SketchRNN('tractor', modelReady);
      startDrawing();
    }
    if (myRec.resultString === '트럭') {
      console.log(myRec.resultString);
      model = ml5.SketchRNN('truck', modelReady);
      startDrawing();
    }
    if (myRec.resultString === '고래') {
      console.log(myRec.resultString);
      model = ml5.SketchRNN('whale', modelReady);
      startDrawing();
    }

  }
}
