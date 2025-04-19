function loadComponent(id, filePath) {
    fetch(filePath)
      .then(response => response.text())
      .then(data => {
        document.getElementById(id).innerHTML = data;
      })
      .catch(error => {
        console.error(`Error loading ${filePath}:`, error);
      });
  }
  
  // Load components
  loadComponent("header", "./components/Header/header.html");
 