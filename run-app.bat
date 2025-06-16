@echo off
echo Building the project...
npm run build

echo Deleting old docs folder if exists...
rmdir /S /Q docs

echo Renaming 'dist' folder to 'docs'...
rename dist docs

echo Done!
pause
