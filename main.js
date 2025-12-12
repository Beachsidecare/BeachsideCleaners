/* -----------------------------------------------------------
   Smooth Scroll for Anchor Links
----------------------------------------------------------- */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

/* -----------------------------------------------------------
   Contact Form Submission
----------------------------------------------------------- */
const contactForm = document.getElementById("contact-form");
const successMsg = document.getElementById("successMsg");

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();
  successMsg.style.display = "block";
  contactForm.reset();

  setTimeout(() => {
    successMsg.style.display = "none";
  }, 3000);
});

/* -----------------------------------------------------------
   Testimonial Slider
----------------------------------------------------------- */
const slides = document.querySelectorAll(".slide");
let slideIndex = 0;

function showSlide(i) {
  slides.forEach(slide => slide.classList.remove("active"));
  slides[i].classList.add("active");
}

document.querySelector(".next").addEventListener("click", () => {
  slideIndex = (slideIndex + 1) % slides.length;
  showSlide(slideIndex);
});

document.querySelector(".prev").addEventListener("click", () => {
  slideIndex = (slideIndex - 1 + slides.length) % slides.length;
  showSlide(slideIndex);
});

/* -----------------------------------------------------------
   Light / Dark Theme Toggle
----------------------------------------------------------- */
const themeToggle = document.getElementById("themeToggle");
const htmlTag = document.documentElement;

themeToggle.addEventListener("click", () => {
  const current = htmlTag.getAttribute("data-theme");
  const next = current === "light" ? "dark" : "light";
  htmlTag.setAttribute("data-theme", next);

  themeToggle.textContent = next === "light" ? "🌙" : "☀️";
});

/* -----------------------------------------------------------
   Gallery Lightbox
----------------------------------------------------------- */
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");

document.querySelectorAll(".gallery-grid img").forEach(img => {
  img.addEventListener("click", () => {
    lightboxImg.src = img.src;
    lightbox.style.display = "flex";
  });
});

lightbox.addEventListener("click", () => {
  lightbox.style.display = "none";
});

/* -----------------------------------------------------------
   Chat Widget
----------------------------------------------------------- */
const chatBubble = document.getElementById("chatBubble");
const chatBox = document.getElementById("chatBox");
const closeChat = document.getElementById("closeChat");
const chatInput = document.getElementById("chatInput");
const chatMessages = document.getElementById("chatMessages");

chatBubble.addEventListener("click", () => {
  chatBubble.style.display = "none";
  chatBox.style.display = "flex";
});

closeChat.addEventListener("click", () => {
  chatBox.style.display = "none";
  chatBubble.style.display = "block";
});

chatInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter" && chatInput.value.trim() !== "") {
    const msg = document.createElement("div");
    msg.className = "chat-msg";
    msg.textContent = chatInput.value;

    chatMessages.appendChild(msg);
    chatInput.value = "";
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }
});

/* -----------------------------------------------------------
   Booking Modal
----------------------------------------------------------- */
const bookingModal = document.getElementById("bookingModal");
const openBooking = document.getElementById("openBooking");
const openBooking2 = document.getElementById("openBooking2");
const openBooking3 = document.getElementById("openBooking3");
const closeBooking = document.getElementById("closeBooking");

const bookingForm = document.getElementById("bookingForm");
const bookingSuccess = document.getElementById("bookingSuccess");

// Open modal via any trigger
[openBooking, openBooking2, openBooking3].forEach(btn => {
  if (btn) {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      bookingModal.style.display = "flex";
    });
  }
});

// Close modal
closeBooking.addEventListener("click", () => {
  bookingModal.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === bookingModal) {
    bookingModal.style.display = "none";
  }
});

// Submit booking form
bookingForm.addEventListener("submit", (e) => {
  e.preventDefault();
  bookingSuccess.style.display = "block";
  bookingForm.reset();

  setTimeout(() => {
    bookingSuccess.style.display = "none";
    bookingModal.style.display = "none";
  }, 2500);
});

/* -----------------------------------------------------------
   Service Area Map (Leaflet.js)
----------------------------------------------------------- */
const map = L.map('map').setView([41.7, -87.5], 8);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: "&copy; OpenStreetMap contributors"
}).addTo(map);

// Service locations
/* -----------------------------------------------------------
   Service Area Map (Leaflet.js)
----------------------------------------------------------- */

const map = L.map('map').setView([41.7, -87.5], 8); // Chicago + NW Indiana + SW Michigan

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: "&copy; OpenStreetMap contributors"
}).addTo(map);

// Updated service locations
const locations = [
  { name: "Chicago, IL", coords: [41.8781, -87.6298] },
  { name: "Northwest Indiana (Hammond)", coords: [41.5834, -87.5000] },
  { name: "Gary, IN", coords: [41.6020, -87.3370] },
  { name: "Merrillville, IN", coords: [41.4828, -87.3328] },
  { name: "Michigan City, IN", coords: [41.7075, -86.8950] },
  { name: "Southwest Michigan (New Buffalo)", coords: [41.7936, -86.7435] }
];

locations.forEach(loc => {
  L.marker(loc.coords).addTo(map).bindPopup(`<b>${loc.name}</b><br>Now servicing!`);
});

