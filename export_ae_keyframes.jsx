/*
Export position keyframes of the selected layer
After Effects 2015.3

usage:
Select a layer with position keyframes and run this script.
Import the exported .txt file in a p5js file using the p5js sketch in this repo
*/


// get the position keyframes of the selected layer
function getKeyframes() {
    postxt = '';
    var comp = app.project.activeItem;
    var lyr = comp.selectedLayers[0];
    var maxFrames = comp.duration * 30;

    for (var frame = 0; frame < maxFrames; frame++) {
        var pos = lyr.transform.position.valueAtTime(comp.frameDuration * frame, true);
        posx = pos[0];
        posy = pos[1];
        postxt += Math.round(posx) + ',' + Math.round(posy) + '\n';
    }

    return postxt;
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
