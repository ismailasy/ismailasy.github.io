const contactForm = document.getElementById("contact-form");
const nomInput = document.getElementById("nom");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");

contactForm.addEventListener("submit", function (event) {
  event.preventDefault();
  sendEmail();
});

function sendEmail() {
  const params = {
    nom: nomInput.value,
    email: emailInput.value,
    message: messageInput.value,
  };
  emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", params).then(
    function () {
      alert("Votre message a bien été envoyé !");
      nomInput.value = "";
      emailInput.value = "";
      messageInput.value = "";
    },
    function (error) {
      alert(
        "Une erreur est survenue lors de l'envoi de votre message. Veuillez réessayer."
      );
    }
  );
}
