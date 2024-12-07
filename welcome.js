const fs = require("fs")

// Créer un fichier welcome.txt avec du texte
fs.writeFile("welcome.txt", "Hello Node", (err) => {
  if (err) throw err;
  console.log("Fichier welcome.txt créé")

  // Lire le fichier créé
  fs.readFile("welcome.txt", (err, data) => {
    if (err) throw err;
    console.log(data); // Affiche "Hello Node"
  });
});
