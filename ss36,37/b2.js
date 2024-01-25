function toggleContent() {
    var button = document.getElementById("toggleButton");
    if (button.textContent === "Click me") {
      button.textContent = "Changed!";
    } else {
      button.textContent = "Click me";
    }
  }