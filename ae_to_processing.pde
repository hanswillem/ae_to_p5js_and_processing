ArrayList <PVector> parsedKeyframes = new ArrayList<PVector>();
float ae_x, ae_y;


void loadAndParseKeys() {
  String rawKeys[] = loadStrings("data/keyframes.txt");
  for (int i = 0; i < rawKeys.length; i++) {
    int pos[] = int(split(rawKeys[i], ','));
    PVector p = new PVector(pos[0], pos[1]);
    parsedKeyframes.add(p);
  }
}


void ae_getPos() {
  ae_x = parsedKeyframes.get(frameCount % parsedKeyframes.size()).x;
  ae_y = parsedKeyframes.get(frameCount % parsedKeyframes.size()).y;
}


void setup() {
  size(1280, 720);
  background(0);
  loadAndParseKeys();
  frameRate(30);
}


void draw() {
  background(0);
  fill(255);
  noStroke();
  ae_getPos();
  ellipse(ae_x, ae_y, 25, 25);
}