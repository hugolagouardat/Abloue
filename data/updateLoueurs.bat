@echo off
setlocal enabledelayedexpansion

set "input=loueurs.csv"
set "output=loueurs.js"

if not exist "%input%" (
    echo Le fichier %input% est introuvable.
    pause
    exit /b 1
)

if exist "%output%" del "%output%"

echo window.loueurs = ^` > "%output%"

for /f "usebackq delims=" %%a in ("%input%") do (
    set "line=%%a"
    set "line=!line:`=´!"
    echo !line!>>"%output%"
)

echo ^`>>"%output%"

echo Fichier %output% généré avec succès.
pause
