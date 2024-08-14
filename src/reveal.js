import { Controller } from "@hotwired/stimulus";

// Connects to data-controller="reveal"
export default class extends Controller {
  static targets = ["revealable", "openButton", "closeButton"];
  toggle(event) {
    if (this.hasOpenButtonTarget)
      this.openButtonTarget.classList.toggle("hidden");

    if (this.hasCloseButtonTarget)
      this.closeButtonTarget.classList.toggle("hidden");

    if (this.hasRevealableTarget)
      this.revealableTarget.classList.toggle("hidden");
  }
}
