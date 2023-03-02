// Calculadora feita usando Constructor Function para treino, mesma ideia da outra calculadora.
function Calculator() {
  this.display = document.querySelector("#display");

  this.start = () => {
    this.clickButtons();
    this.pressEnter();
  };

  this.pressEnter = () => {
    this.display.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        this.buttoResult();
      }
    });
  };

  this.clickButtons = () => {
    document.addEventListener("click", (e) => {
      const element = e.target;
      if (element.classList.contains("btn-number"))
        this.buttonForDisplay(element);
      if (element.classList.contains("btn-clear")) this.buttonClearDisplay();
      if (element.classList.contains("btn-delete")) this.buttonDelete();
      if (element.classList.contains("btn-equal")) this.buttoResult();
    });
  };

  this.buttoResult = () => {
    try {
      const account = eval(this.display.value);
      if (!account) {
        alert("Conta Inválida");
        return;
      }
      this.display.value = String(account);
    } catch (e) {
      alert("Conta Inválida");
      return;
    }
  };

  this.buttonForDisplay = (element) => {
    this.display.value += element.innerText;
  };

  this.buttonClearDisplay = () => (this.display.value = "");
  this.buttonDelete = () =>
    (this.display.value = this.display.value.slice(0, -1));
  // this.start = () => this.clickButtons;
}

const calculator = new Calculator();
calculator.start();
