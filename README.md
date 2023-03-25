# Instructions
Premièrement télécharger node.js sur internet.(npm)
Vérifier dans cmd :node -v
npm install @angular/cli
ng new sirh ==> creation projet angular
ng server --open ==> lancement angular sur localhost:4200
ng generate component nom(ex:heroes) ==> .ts(logic,data), .html, .css
Créer une classe Hero, Hero:bernadette (objet de la classe)

4 possibilités
Composant
Modules
Services
Directives

Les modules sont contiennent les composants

Rappel : Directive "super pouvoir à l'html"
Directive structurelles (*ngFor, *ngIf,*ngSwitch) --> Structure de l'HTML
Directives non structurelles (ngModel,ngStyle, ngClass) --> Comportement HTML
Attention pour les non structurelles importer un module(FormsModule)
app.module.ts : importe les modules et déclare les composants

Composant : html,css,ts
Module:ensemble de composants
Service : communication et échange de données entre composants et avec l'extérieur

One Way Data Binding: permet à l'HTML d'afficher des données TS
                        -Interpolation {{var}}
                        -Property Binding <img [src]='url'>
                        -Event Binding <button(click)="Kamehameha(ennemi)"></button>
Two Way Data Binding: permet en plus de modifier les données du TS à partir de l'HTML

Typescript est typé strict et est asynchrone et il est orienté objet

package.json sert au npm install.

Pour utiliser un service il faut l'injecter on utilise en général import {} from 'chemin/le nom du service'
En général les services servent à faire des récupérer ou échanger des données entre la base de donnée et les composants
