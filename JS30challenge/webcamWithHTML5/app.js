const video = document.querySelector(".player");
const canvas = document.querySelector(".photo");
const ctx = canvas.getContext("2d", { willReadFrequently: true });
const snap = document.querySelector(".snap");
const strip = document.querySelector(".strip");
console.dir(video);

function getVideo() {
    navigator.mediaDevices.getUserMedia({ video: true, audio: false })
        .then(localMediaStream => {
            console.log(localMediaStream);
            video.srcObject = localMediaStream;
            video.play();
        })
        .catch(err => {
            console.log("oh no!", err);
        });
}

function paintToCanvas() {
    const width = video.videoWidth;
    const height = video.videoHeight;
    console.log(width, height);
    canvas.width = width;
    canvas.height = height;

    return setInterval(() => {
        ctx.drawImage(video, 0, 0, width, height);
        // let pixels = ctx.getImageData(0, 0, width, height);
        // mess with them
        // pixels = redEffect(pixels);

        // pixels = rgbSplit(pixels);
        // ctx.globalAlpha = 0.8;

        // pixels = greenScreen(pixels);
        // put them back
        // ctx.putImageData(pixels, 0, 0);
    }, 20);
}

function takePhoto() {
    snap.currentTime = 0;
    snap.play();

    const data = canvas.toDataURL('image/jpeg');
    const link = document.createElement("a");
    link.href = data;
    link.setAttribute('download', 'pretty-gurl');
    link.innerHTML = `<img src="${data}" alt="Pretty Gurl"/>`;
    strip.insertBefore(link, strip.firstChild);
}

// function redEffect(pixels) {

//     for (let i = 0; i < pixels.data.length; i = i + 4) {
//         console.log("before changing", pixels.data[i + 0]);
//         pixels.data[i + 0] = pixels.data[i + 0] + 200;//red
//         console.log("after changing", pixels.data[i + 0]);
//         debugger;
//         pixels.data[i + 1] = pixels.data[i + 1] - 50;//blue
//         pixels.data[i + 2] = pixels.data[i + 2] * 0.5;//green
//     }
//     return pixels;
// }

// function rgbSplit(pixels) {
//     for (let i = 0; i < pixels.data.length; i = i + 4) {
//         pixels.data[i - 150] = pixels.data[i + 0];//red
//         pixels.data[i + 150] = pixels.data[i + 1];//blue
//         pixels.data[i - 300] = pixels.data[i + 2];//green
//     }
//     return pixels;
// }

// function greenScreen(pixels) {
//     const levels = {};

//     document.querySelectorAll('.rgb input').forEach((input) => {
//         levels[input.name] = input.value;
//     });

//     for (i = 0; i < pixels.data.length; i = i + 4) {
//         red = pixels.data[i + 0];
//         green = pixels.data[i + 1];
//         blue = pixels.data[i + 2];
//         alpha = pixels.data[i + 3];

//         if (red >= levels.rmin
//             && green >= levels.gmin
//             && blue >= levels.bmin
//             && red <= levels.rmax
//             && green <= levels.gmax
//             && blue <= levels.bmax) {
//             // take it out!
//             pixels.data[i + 3] = 0;
//         }
//     }

//     return pixels;
// }

getVideo();
video.addEventListener("canplay", paintToCanvas);