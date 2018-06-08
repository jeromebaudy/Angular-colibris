import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gestion-request',
  templateUrl: './gestion-request.component.html',
  styleUrls: ['./gestion-request.component.css']
})
export class GestionRequestComponent implements OnInit {

  requete: object;
  titre: string;
  listReq:Array<object>;
  
    constructor() { 
  
      this.titre = 'Liste des requètes';
  
      this.requete = {
        id_serie: "1",
        titre: "Les fourberies de scapin",
        nom_auteur: "Molière",
        nom_editeur: "Hachette",
        nom_collection: "Bibliocollege",
        isbn: "3787734535",
        date_parution: "18 mai 2010",
        quantite_de_livre: "21",
        langue: "français",
        lien_image: "assets/img/imgSerie1.jpg",
        college:
        {
            id_college: "2",
            nom_college: " Jeanne d'Albret",
            ville_college: "Pau"
        },
      };
  
      this.listReq = [this.requete, this.requete]
    }

  ngOnInit() {
  }

}
