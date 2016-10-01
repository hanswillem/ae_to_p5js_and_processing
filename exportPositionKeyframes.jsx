/*
Export position keyframes of the selected layer
Copyright: Hans Willem Gijzel (hanswillemgijzel@gmail.com)
After Effects 2015.3 release / version 13.8.0.144
*/


// get the position keyframes of the selected layer
function getKeyframes() {
    p = [];
    var comp = app.project.activeItem;
    var lyr = comp.selectedLayers[0];
    var maxFrames = comp.duration * 30;

    for (var frame = 0; frame < maxFrames; frame++) {
        var pos = lyr.transform.position.valueAtTime(comp.frameDuration * frame, true);
        posx = pos[0];
        posy = pos[1];
        p.push([Math.round(posx), Math.round(posy), '*']);
    }

    return p;
}


// save the keyframes to a .txt file
function saveKeyframes(c) {
    var doc = new File('~/Desktop/keyframes.txt');
    doc.open("w");
    doc.write(c);
    doc.close();
}


var keys = getKeyframes();
saveKeyframes(keys);
alert('Keyframes exported!');
