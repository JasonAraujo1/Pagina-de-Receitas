function toggleCheck(button) {
  button.classList.toggle("checked"); // Adiciona ou remove a classe "checked" do botão


  const listItem = button.parentNode; // Obtém o elemento pai (o <li>)

  // Alterna a classe "checked" no elemento pai (o <li>)
  listItem.classList.toggle("checked");
}






