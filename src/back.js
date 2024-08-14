import { Controller } from "@hotwired/stimulus";

// Connects to data-controller="back"
export default class extends Controller {
  navigate(event) {
    if (this.#shouldRestore) {
      event.preventDefault();
      window.history.back();
    }
  }

  get #shouldRestore() {
    return !this.#isFirstHistoryEntry;
  }

  get #isFirstHistoryEntry() {
    return (
      !window.history.state.turbo ||
      window.history.state.turbo.restorationIndex === 0
    );
  }
}
