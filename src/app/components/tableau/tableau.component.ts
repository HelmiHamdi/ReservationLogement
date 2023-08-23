import { Component } from '@angular/core';

@Component({
  selector: 'app-tableau',
  templateUrl: './tableau.component.html',
  styleUrls: ['./tableau.component.css']
})
export class TableauComponent {
  data = [
    {
      col1: 'Ligne 1 - Colonne 1',
      col2: 'Ligne 1 - Colonne 2',
      col3: 'Ligne 1 - Colonne 3',
      'Bénéfices': 'Vérification de l\'identité du voyageur',
      'Notre plateforme': '✔️',
      'Concurrents': '✔️'
      
    },
    {
      col1: 'Ligne 2 - Colonne 1',
      col2: 'Ligne 2 - Colonne 2',
      col3: 'Ligne 2 - Colonne 3',
      'Bénéfices': 'Vérification de la réservation',
      'Notre plateforme': '✔️',
      'Concurrents': '❌'
      
    },
    {
      col1: 'Ligne 3 - Colonne 1',
      col2: 'Ligne 3 - Colonne 2',
      col3: 'Ligne 3 - Colonne 3',
      'Bénéfices': 'Protection contre les dommages',
      'Notre plateforme': '✔️',
      'Concurrents': '❌'
    
    },
    {
      col1: 'Ligne 4 - Colonne 1',
      col2: 'Ligne 4 - Colonne 2',
      col3: 'Ligne 4 - Colonne 3',
      'Bénéfices': 'Nettoyage en profondeur',
      'Notre plateforme': '✔️',
      'Concurrents': '❌'
      
    },
    {
      col1: 'Ligne 5 - Colonne 1',
      col2: 'Ligne 5 - Colonne 2',
      col3: 'Ligne 5 - Colonne 3',
      'Bénéfices': 'Assurance responsabilité civile',
      'Notre plateforme': '✔️',
      'Concurrents': '❌'
      
    },
    {
      col1: 'Ligne 6 - Colonne 1',
      col2: 'Ligne 6 - Colonne 2',
      col3: 'Ligne 6 - Colonne 3',
      'Bénéfices': 'Assistance sécurité 24h/24',
      'Notre plateforme': '✔️',
      'Concurrents': '❌'
      
    }
  
  ];
}
