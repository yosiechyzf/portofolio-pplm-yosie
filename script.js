
// ===================================
// E-PORTFOLIO YOSIE ZAHRA FADILLA
// ===================================


// 1. MENU NAVIGASI MOBILE

const menuToggle = document.getElementById("menuToggle");
const navigation = document.getElementById("navigation");

if (menuToggle && navigation) {

  menuToggle.addEventListener("click", () => {

    const isOpen =
      menuToggle.getAttribute("aria-expanded") === "true";

    menuToggle.setAttribute(
      "aria-expanded",
      String(!isOpen)
    );

    navigation.classList.toggle("open", !isOpen);

  });

  navigation.querySelectorAll("a").forEach((link) => {

    link.addEventListener("click", () => {

      navigation.classList.remove("open");

      menuToggle.setAttribute(
        "aria-expanded",
        "false"
      );

    });

  });

}


// 2. VIDEO MENGAJAR

// Untuk YouTube gunakan URL embed.
// Contoh:
// https://www.youtube.com/embed/ID_VIDEO

// Untuk video lokal:
// assets/videos/video-mengajar.mp4

const VIDEO_URL = "";

const videoFrame = document.getElementById("videoFrame");


function renderTeachingVideo(url) {

  if (!videoFrame || !url.trim()) return;

  const cleanUrl = url.trim();

  videoFrame.innerHTML = "";

  // Jika video lokal
  if (
    cleanUrl.endsWith(".mp4") ||
    cleanUrl.endsWith(".webm") ||
    cleanUrl.endsWith(".ogg")
  ) {

    const video = document.createElement("video");

    video.src = cleanUrl;
    video.controls = true;
    video.preload = "metadata";
    video.playsInline = true;

    videoFrame.appendChild(video);

    return;

  }


  // Jika video dari YouTube
  const iframe = document.createElement("iframe");

  iframe.src = cleanUrl;
  iframe.title = "Video Praktik Mengajar Yosie Zahra Fadilla";

  iframe.allow =
    "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";

  iframe.allowFullscreen = true;
  iframe.loading = "lazy";

  videoFrame.appendChild(iframe);

}


// Jalankan video
renderTeachingVideo(VIDEO_URL);


// 3. KONSOL

console.log(
  "E-Portfolio Yosie Zahra Fadilla berhasil dimuat."
);
