
``` json
 && npm run build:win
"build:win": "npm run build:win:ia32",
"build:win:ia32": "npm run clean && electron-packager ./ 'Lowbrow' --platform=win32 --arch=ia32 --version=0.28.0 --app-version=1.0.0 --out=releases/win/ia32 --icon=assets/win/icon.ico",
"build:linux": "npm run build:linux:x64",
"build:linux:x64": "npm run clean && electron-packager ./ 'Lowbrow' --platform=linux --arch=x64 --version=0.28.0 --app-version=1.0.0 --out=releases/linux/x64 --icon=assets/linux/icon.ico",

 && npm run pack:win
"pack:win": "npm run build:win && electron-builder 'releases/macos/Lowbrow-win32' --platform=win --out=releases/win --config=packager.json"

```

- [ ] Make Lowbrow smaller (100mb unzipped)
- [ ] Make Lowbrow zipped by default
- [ ] Make Lowbrow fast to boot
- [ ] Design a Lowbrow logo
- [ ] Make the location bar bigger
- [ ] Make the location bar autocomplete
- [ ] Allow the user to devtools into the webview
- [ ] Allow the user to copy/paste from the app/webview
- [ ] Drop bootstrap
- [ ] Drop jQuery
- [ ] Auto-remove files from releases
