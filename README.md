# Bienvenue dans le projet webbybooster 👋

## Description du projet

Reprise du projet [webbybooster](https://webbybooster.notion.site/Mon-activit-de-formation-f27b34de819549d0b35b19c3799284be) qui est projet qui consiste à aider les formateurs à mieux s'organiser dans leur profession. Exemple: gestion des tâches, gestion des contacts, missions et contrats...

L'objectif était de l'intégrer sur une application mobile, nous avons décidé d'utiliser react native.

Nous avons commencé par mettre en structure l'application pour être repris plus tard.
Dans un premier temps, nous avons créé une navigation complète avec les différentes pages de l'application tout en respectant le notion déjà présent.

Séparation du code en composant afin de facilité du développement, la maintenabilité et la réutilisabilité. Vous pourrez retrouvez les différents composants dans le dossier "components" et les différentes pages dans le dossier "app/(tabs)"".

Utilisation de plusieurs mocks dans le dossier "mock" à la racine du projet pour simuler l'utilisation d'une base de données en créant de fausse données afin de tester l'application sans devoir dépendre d'une api et d'une base de données.

## Prérequis

Utiliser Android Studio pour lancer un imulateur mobile.
Vous pouvez aussi utiliser votre téléphone personnel. Il vous suffira d'installer dans le store "Expo Go", de lancer l'application dans votre terminal et vous aurez un qrcode que vous pourrez scanner et l'application se lancera directement.

## Technologiques

Ceci est un projet [Expo](https://expo.dev) créé avec [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

- React Native
- React Navigation

## Packages

| Nom                        | Version   | Description                                                                                                         |
|----------------------------|-----------|---------------------------------------------------------------------------------------------------------------------|
| react-native-actions-sheet | ^0.9.7    | Composant de type drawer qui arrive en position  basse et utiliser pour afficher des informations  comme une modal. |
| Drawer Navigator           | ^6.7.2    | Composant pour le menu de navigation.                                                                               |
| react-native-calendars     | ^1.1307.0 | Composant pour afficher un calendrier notamment pour la page intervention.                                          |

## Pour commencer

1. Installer les dépendances

   ```bash
   npm install
   ```

2. Lancer l'application

   ```bash
    npm run start
   ```

Dans la sortie, vous trouverez des options pour ouvrir l'application dans un

- [build de développement](https://docs.expo.dev/develop/development-builds/introduction/)
- [émulateur Android](https://docs.expo.dev/workflow/android-studio-emulator/)
- [simulateur iOS](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), un environnement limité pour tester le développement d'applications avec Expo

Vous pouvez commencer à développer en modifiant les fichiers à l'intérieur du répertoire app. 
Ce projet utilise le[routing basé sur les fichiers](https://docs.expo.dev/router/introduction).

## Réinitialiser le projet

Lorsque vous êtes prêt, exécutez :

```bash
npm run reset-project
```