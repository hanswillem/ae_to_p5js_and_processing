// Use in combination with export_ae_keyframes.jsx


var ae_rawKeys, ae_keys, ae_x, ae_y;
var logo;
var cnv;

function preload() {
    ae_rawKeys = loadStrings('keyframes.txt');
    logo = loadImage('p5jslogo.png');
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
    cnv = createCanvas(426, 720);
    background(23, 66, 80);
    ae_keys = parseKeyframes(ae_rawKeys);
    frameRate(30);
    imageMode(CENTER);
}


function draw() {
    background(23, 66, 80);
    fill(255);
    noStroke();
    ae_getPos();
    image(logo, ae_x, ae_y);
    //save(cnv, 'render/frame_' + frameCount + '.png');
}
