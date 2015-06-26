Lowbrow.app
===========

You're working on your latest web application and you realize it's time to smoke test your interface. Gotta check everything lines up! You open (Chrome| Firefox|Safari|Explorer) and 30s later you're still loading 100 tabs, 15 extensions, and connecting to some secret HTTP API to deliver user statistics.

You just wanted to test `localhost:3000`.

Lowbrow solves the problem of just needing a HTML5, CSS3, JS E6 compliant browser. It has the same developer tools as every Webkit browser. It takes up very little memory, is fast to boot, and gets the fuck out of your way.

- [ ] Make Lowbrow smaller (100mb unzipped)
- [ ] Make Lowbrow zipped by default
- [ ] Make Lowbrow fast to boot
- [ ] Design a Lowbrow logo/icons
- [x] Make the location bar bigger
- [ ] Make the location bar autocomplete
- [ ] Allow the user to devtools into the webview
- [ ] Allow the user to copy/paste from the app/webview
- [x] Drop bootstrap
- [x] Drop jQuery
- [x] Auto-remove files from releases
- [ ] Get platform specific menus working
- [ ] Make sure that we auto-release on github with mac, win, and linux builds
- [ ] Get windows builds working
- [x] Clean up configration
- [x] Switch to real build tool
- [ ] Pretty up the dmg view


 && npm run build:win
"build:win": "npm run build:win:ia32",
"build:win:ia32": "npm run clean && electron-packager ./ 'Lowbrow' --platform=win32 --arch=ia32 --version=0.28.0 --app-version=1.0.0 --out=releases/win/ia32 --icon=assets/win/icon.ico",

 && npm run pack:win
"pack:win": "npm run build:win && electron-builder 'releases/osx/Lowbrow-win32' --platform=win --out=releases/win --config=packager.json"
