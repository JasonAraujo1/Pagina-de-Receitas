document.querySelectorAll('.check-button').forEach(button => {
    button.addEventListener('click', () => {
      button.classList.toggle('checked');
    });
  });
  