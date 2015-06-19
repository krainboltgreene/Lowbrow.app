if (process.platform == "darwin") {
    modifier = "Command";
} else {
    modifier = "Control";
}

Menu.setApplicationMenu(Menu.buildFromTemplate([
  {
    label: "Lowbrow",
    submenu: [
      {
        label: "About Lowbrow",
        selector: "orderFrontStandardAboutPanel:"
      },
      {
        type: "separator"
      },
      {
        label: "Services",
        submenu: []
      },
      {
        type: "separator"
      },
      {
        label: "Hide Lowbrow",
        accelerator: modifier + "+H",
        selector: "hide:"
      },
      {
        label: "Hide Others",
        accelerator: modifier + "+Shift+H",
        selector: "hideOtherApplications:"
      },
      {
        label: "Show All",
        selector: "unhideAllApplications:"
      },
      {
        type: "separator"
      },
      {
        label: "Quit",
        accelerator: modifier + "+Q",
        selector: "terminate:"
      },
    ]
  },
  {
    label: "Edit",
    submenu: [
      {
        label: "Undo",
          accelerator: modifier + "+Z",
        selector: "undo:"
      },
      {
        label: "Redo",
        accelerator: "Shift+" + modifier + "+Z",
        selector: "redo:"
      },
      {
        type: "separator"
      },
      {
        label: "Cut",
        accelerator: modifier + "+X",
        selector: "cut:"
      },
      {
        label: "Copy",
        accelerator: "modifier" + "+C",
        selector: "copy:"
      },
      {
        label: "Paste",
        accelerator: modifier + "+V",
        selector: "paste:"
      },
      {
        label: "Select All",
        accelerator: modifier + "+A",
        selector: "selectAll:"
      }
    ]
  },
  {
    label: "View",
    submenu: [
      {
        label: "Reload",
        accelerator: modifier + "+R",
        click: function() { Remote.getCurrentWindow().reload(); }
      },
      {
        label: "Toggle DevTools",
        accelerator: "Alt+" + modifier + "+I",
        click: function() { Remote.getCurrentWindow().toggleDevTools(); }
      },
    ]
  },
  {
    label: "Window",
    submenu: [
      {
        label: "Minimize",
        accelerator: modifier + "+M",
        selector: "performMiniaturize:"
      },
      {
        label: "Close",
        accelerator: modifier + "+W",
        selector: "performClose:"
      },
      {
        type: "separator"
      },
      {
        label: "Bring All to Front",
        selector: "arrangeInFront:"
      }
    ]
  },
  {
    label: "Help",
    submenu: []
  }
]));

(function($) {
  $(".navbar .location button[type=submit]").click(function(event) {
    event.preventDefault();
    $(".portal .view").attr("src", $(".navbar .location input").val());
  });
})(jQuery);
