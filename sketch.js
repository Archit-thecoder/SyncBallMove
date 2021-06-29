var ball;
var position;
var ballposition;
var database;

function setup(){
    createCanvas(400,400)
    database = firebase.database()
    ball = createSprite(200,200,30,30)
    ball.shapeColor = "red"
    ballposition = database.ref("ball/position")
    ballposition.on("value",readPosition)
}
function draw(){
    background("skyBlue")
    if(keyDown(RIGHT_ARROW)){
        writePosition(1,0)
    }
    if(keyDown(LEFT_ARROW)){
        writePosition(-1,0)
    }
    if(keyDown(UP_ARROW)){
        writePosition(0,-1)
    }
    if(keyDown(DOWN_ARROW)){
        writePosition(0,1)
    }
    drawSprites();

}
function readPosition(data){
    position = data.val()
    ball.x = position.x
    ball.y = position.y
}
function writePosition(x,y){
    database.ref("ball/position").set({
        "x":position.x + x,
        "y":position.y + y
    })


}

/*function changePosition(x,y){
    ball.x = ball.x + x
    ball.y = ball.y + y
}
*/






