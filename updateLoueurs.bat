@echo off
setlocal enabledelayedexpansion

:: Chemins des fichiers
set "input=loueurs.csv"
set "output=loueurs.js"

:: Vérifier si loueurs.csv existe
if not exist "%input%" (
    echo Le fichier %input% est introuvable.
    pause
    exit /b 1
)

:: Supprimer l'ancien fichier s'il existe
if exist "%output%" del "%output%"

:: Écrire le header
echo const data = ^` > "%output%"

:: Ajouter le contenu du CSV
for /f "usebackq delims=" %%a in ("%input%") do (
    set "line=%%a"
    set "line=!line:`=´!"
    echo !line!>>"%output%"
)

:: Fermer le backtick
echo ^`>>"%output%"

echo Fichier %output% généré avec succès.
pause
