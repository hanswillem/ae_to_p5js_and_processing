/*
Boilerplate for ae_to_p5js

usage:
export keyframes from ae using script exportPositionKeyframes (from this repo)
put the exported txt file in the same folder as this sketch
*/

var ae_rawKeys, ae_keys, ae_x, ae_y ;


function preload() {
    ae_rawKeys = loadStrings('keyframes.txt');
}


function parseKeyframes(k) {
    var parsedKeys = [];
    var rawKeys = k[0].split('*');
    for (var i = 0; i < rawKeys.length - 1; i++) {
        var pos = rawKeys[i].match(/\d+/g);
        var posx = float(pos[0]);
        var posy = float(pos[1]);
        parsedKeys.push({x: posx, y: posy});
    }
    return parsedKeys;
}


function ae_getPos() {
    ae_x = ae_keys[frameCount % ae_keys.length].x;
    ae_y = ae_keys[frameCount % ae_keys.length].y;
}


function setup() {
    createCanvas(1280, 720);
    ae_keys = parseKeyframes(ae_rawKeys);
    frameRate(30);
}


function draw() {
    background(0);
    fill(255);
    noStroke();
    ae_getPos();
    ellipse(ae_x, ae_y, 50, 50);
}
