document.addEventListener('DOMContentLoaded', function () {
  const ramos = document.querySelectorAll('.ramo');
  const infoBox = document.getElementById('info-box');

  ramos.forEach(ramo => {
    ramo.addEventListener('click', () => {
      const info = ramo.getAttribute('data-info');
      infoBox.innerHTML = info;
      infoBox.classList.add('visible');
      setTimeout(() => infoBox.classList.remove('visible'), 4000);
    });
  });
});


