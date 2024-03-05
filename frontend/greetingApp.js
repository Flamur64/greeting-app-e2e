function submitName() {
    const enteredName = document.getElementById('nameInput').value;
    const greetingMessage = `Hello, ${enteredName}!`;
    updateUI(greetingMessage);
  }
  function updateUI(message) {
    document.getElementById('greetingMessage').innerText = message;
  }
  module.exports = { submitName, updateUI };

  app.listen(3000, () => {
    console.log("App wurde gestartet auf localhost:3000")})