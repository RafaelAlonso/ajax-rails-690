import { Controller } from "stimulus";
import { csrfToken } from "@rails/ujs";

export default class extends Controller {
  static targets = ['container', 'form']

  connect() {
    // alert("Hey, tenho um controller aqui")
    // console.log(this.containerTarget)
    // console.log(this.formTarget)
  }

  // quando o form for enviado
  addReview(event) {
    // previne a pagina de ser recarregada
    event.preventDefault()

    // fetch (pra tentar salvar uma nova review)
    const params = {
      method: 'POST',
      headers: { 'Accept': 'application/json', 'X-CSRF-Token': csrfToken() },
      body: new FormData(this.formTarget)
    }

    fetch(this.formTarget.action, params)
    .then(response => response.json())
    .then((data) => {
      // quando receber a resposta, adiciona a nova review na pagina e reseta o form
      if (data.inserted_item) {
        this.containerTarget.insertAdjacentHTML('beforeend', data.inserted_item);
      }
      this.formTarget.outerHTML = data.form;
    })

  }
}
