nariz_x = 0;
nariz_y = 0;
ojo_x = 0;
ojo_y = 0;
ojoI_x = 0;
ojoI_y = 0;
oreja_x = 0;
oreja_y = 0;
orejaI_x = 0;
orejaI_y = 0;

function tomar() {
    save("MiFotoConFiltro.png")
}

function setup() {
    canvas = createCanvas(600, 400);
    canvas.center();
    background("white");
    video = createCapture(VIDEO);
    video.size(600,400);
    video.hide();
    poses = ml5.poseNet(video, modelo_listo);
    poses.on("pose",obtener);
}

function preload() { 
    narish = loadImage("https://i.postimg.cc/Wb9bhq5M/nariz-removebg-preview.png")
    ojo = loadImage("https://i.postimg.cc/dVy26FkS/ojo-removebg-preview.png");
    ojoim = loadImage("https://i.postimg.cc/dVy26FkS/ojo-removebg-preview.png");
    oreja = loadImage ("https://i.postimg.cc/6pmJNdYm/orejas-removebg-preview.png");
    orejaim = loadImage ("https://i.postimg.cc/j2nY8vVT/oreja-removebg-preview.png");
}

function draw() {
    image(video, 0, 0, 600, 400);
    image(narish, nariz_x - 30, nariz_y - 30, 65, 55);
    image(ojo, ojo_x - 25, ojo_y - 25, 40, 50);
    image(ojoim, ojoI_x - 10, ojoI_y - 23, 40, 50);
    image(oreja, oreja_x - 50, oreja_y - 100, 100, 100);
    image(orejaim, orejaI_x - 45, orejaI_y - 95, 100, 100);
}

function modelo_listo() {
    console.log("Modelo Cargado");
}

function obtener(result) {
    console.log(result);
    if (result.length > 0) {
        nariz_x = result[0].pose.nose.x;
        nariz_y = result[0].pose.nose.y;
        ojo_x = result[0].pose.rightEye.x;
        ojo_y = result[0].pose.rightEye.y;
        ojoI_x = result[0].pose.leftEye.x;
        ojoI_y = result[0].pose.leftEye.y;
        oreja_x = result[0].pose.rightEar.x;
        oreja_y = result[0].pose.rightEar.y;
        orejaI_x = result[0].pose.leftEar.x;
        orejaI_y = result[0].pose.leftEar.y;
    }
}
