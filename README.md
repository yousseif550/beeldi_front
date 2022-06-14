
# __**Beeldi Front**__

## Introduction
Réaliser une application React bootstrappé  en utilisant une base de données Firebase.

- Cloner le repo git
- Accéder au dossier 'beeldi_front'
- Installer tous les packages : npm install
- Lancer l'application : npm start 

Le but de ce test est de créer une application simple. Cette application doit nous permettre d'évaluer l'état de vos connaisances sur les technologies React, Redux (et Firebase)

## Données fournies

- Un projet bootstrappé avec create-react-app et les librairies nécessaires
- Un accès à une base de données Firebase Realtime Database avec les données suivantes :
    - Une table Equipments avec pour chaque équipement :
        - name: Nom de l'équipement,
        - building: Nom du batiment,
        - domain: Domaine technique,
        - niveau: Niveau ou se situe l'équipement,
        - local: Local ou se situe l'équipement,
        - photo: URL de la photo de l'équipement
        - brand: Marque,
        - model: Modèle,
        - serialNumber: Numéro de série
        - quantity: Quantité,
        - status: Dernier statut constaté,
        - notes: Prise de notes,
        - nbFaults: Nombre de défauts sur l'équipement,
    - Une table Checkpoints avec pour chaque point de contrôle :
        - equipmentKey: Clé firebase de l'équipement concerné,
        - name: Nom du point de contrôle,
        - fault: Nom du défaut (optionnel),
        - recommandation: Préconisation (si défaut),
- Deux fichiers .csv contenant les données de ces deux tables

### Page 1 - Liste des équipements :

1. Afficher la liste des équipements triés alphabétiquement par leur nom, la cellule comprendra :	
	- Le nom de l'équipement ;
	- Le domaine de l'équipement ;
	- Le nombre de défauts associés ;
	- La photo de l'équipement.
	
2. Un barre de recherche permettant de filtrer les équipements par leur domaine ou par leur nom ;
3. Pouvoir accéder à la page de détail d'un équipement en cliquant dessus.

### Page 2 - Détail d'un équipement : 

1. Afficher la photo de l'équipement ;
2. Afficher une section des infos de l'équipement (nom, domaine, etc...) ;
3. Afficher une section des caractéristiques de l'équipement ;
4. Afficher la liste des points de contrôle et défauts associés. Pour chaque point de contrôle, afficher :
	- Le point de contrôle ;
	- Le défaut si il existe ;
	- La préconisation si le défaut existe ;
	- La photo si elle existe.

