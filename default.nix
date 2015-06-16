# To build on NixOS:
# nix-shell -P nodejs
# npm run clean && npm run build:linux && npm run pack:linux
# nix-build -E 'with import <nixpkgs> { }; callPackage ./default.nix { }'
# ./result/bin/Lowbrow
{ stdenv, gtk, atk, pango, cairo, freetype, fontconfig, gdk_pixbuf, glib, gnome3, dbus, xlibs, alsaLib, cups, expat, libpulseaudio, systemd, pciutils }:

stdenv.mkDerivation {
  name = "Lowbrow.app";
  src = ./releases/package/linux/x64/lowbrow.tar.gz;

  libPath = stdenv.lib.makeLibraryPath [
    stdenv.cc.cc
    gtk atk pango cairo gdk_pixbuf glib dbus gnome3.gconf
    freetype fontconfig
    xlibs.libX11 xlibs.libXrandr xlibs.libXext xlibs.libXi
    xlibs.libXcursor xlibs.libXfixes xlibs.libXrender
    xlibs.libXcomposite xlibs.libXdamage xlibs.libXtst
    alsaLib cups expat libpulseaudio systemd pciutils
  ];

  phases = [ "unpackPhase" "installPhase" ];

  # Not the ideal layout, but it works for now.
  installPhase = ''
    mkdir -p "$out/opt/Lowbrow.app"
    cp -ar . "$out/opt/Lowbrow.app"
    chmod +x "$out/opt/Lowbrow.app/Lowbrow"

    patchelf --set-interpreter $(cat $NIX_CC/nix-support/dynamic-linker) \
      --set-rpath "$out/opt/Lowbrow.app:$libPath" "$out/opt/Lowbrow.app/Lowbrow"

    mkdir "$out/bin"
    ln -s "$out/opt/Lowbrow.app/Lowbrow" "$out/bin/Lowbrow"
  '';
}
