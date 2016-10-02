// Use in combination with export_ae_keyframes.jsx

var ae_rawKeys, ae_keys, ae_x, ae_y ;


function preload() {
    ae_rawKeys = loadStrings('keyframes.txt');
}


function parseKeyframes(k) {
    var parsedKeys = [];
    for (var i = 0; i < k.length; i++) {
        var pos = (k[i].split(','));
        var xpos = pos[0];
        var ypos = pos[1];
        parsedKeys.push({
            x: float(xpos),
            y: float(ypos)
        });
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
