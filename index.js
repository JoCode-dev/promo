const scrollOffer = document.getElementById("scrollOffer");

scrollOffer.addEventListener("click", () => {
  document.getElementById("offer").scrollIntoView({ behavior: "smooth" });
});
