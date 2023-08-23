import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-logement',
  templateUrl: './logement.component.html',
  styleUrls: ['./logement.component.css']
})
export class LogementComponent {
  logement: any = {
    type: '', // Définissez la structure de l'objet logement selon vos besoins
    nombreChambres: 1, // Nombre de chambres par défaut
    capacité:1,
    espace:1
  };

  // Fonction appelée lors du clic sur le bouton "+" pour augmenter le nombre de chambres
  incrementChambres() {
    if (this.logement.nombreChambres < 8) {
      this.logement.nombreChambres++;
    }
  }

  // Fonction appelée lors du clic sur le bouton "-" pour diminuer le nombre de chambres
  decrementChambres() {
    if (this.logement.nombreChambres > 1) {
      this.logement.nombreChambres--;
    }
  }

  // Fonction appelée lors de la soumission du formulaire
  submitForm() {
    // Mettez à jour l'estimation ou effectuez l'action souhaitée ici
    console.log('Formulaire soumis !');
    console.log(this.logement); // Affichez les données du formulaire (à des fins de démonstration)
  }
}
