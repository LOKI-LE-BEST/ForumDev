document.documentElement.style.overflowX = 'scroll'; // activer le défilement horizontal si nécessaire
document.documentElement.style.scrollbarWidth = 'thin'; // activer la personnalisation de la scrollbar
/* pour ajouter une transition sur la scrollbar */

  /* pour changer la couleur de la scrollbar au défilement de la page */
  window.addEventListener('scroll', function() {
    if (window.pageYOffset > 10) {
      document.querySelector('::-webkit-scrollbar-thumb').style.background = "#f00";
    } else {
      document.querySelector('::-webkit-scrollbar-thumb').style.background = "#888";
    }
  });
  