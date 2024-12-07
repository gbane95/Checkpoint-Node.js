const nodemailer = require("nodemailer")

// Créer un transporteur avec vos informations SMTP
const transporter = nodemailer.createTransport({
  service: "gmail", // Vous pouvez remplacer par votre service d'email
  auth: {
    user: "votre-email@gmail.com", // Remplacez par votre adresse email
    pass: "votre-mot-de-passe",     // Remplacez par votre mot de passe
  },
})

// Définir l'email
const mailOptions = {
  from: "votre-email@gmail.com",
  to: "destinataire-email@example.com", // L'adresse du destinataire
  subject: "Test Email",
  text: "Ceci est un email envoyé depuis Node.js avec Nodemailer.",
}

// Envoyer l'email
transporter.sendMail(mailOptions, (err, info) => {
  if (err) {
    console.log("Erreur:", err);
  } else {
    console.log("Email envoyé: " + info.response);
  }
})
