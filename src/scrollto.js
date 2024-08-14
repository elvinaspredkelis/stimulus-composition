import { Controller } from "@hotwired/stimulus";

// This controller is used to scroll to target or an anchor

// USAGE
// Connects to data-controller="scrollto"
//
// EXAMPLE
// <a href="#target" data-controller="scrollto">Scroll to anchor</a>
// <button data-controller="scrollto" data-scrollto-selector-value="#target_identifier">Scroll to target</button>

export default class extends Controller {
  static values = {
    selector: String,
    scrollOptions: {
      type: Object,
      default: {
        behavior: "smooth",
      },
    },
  };

  scroll(event) {
    event.preventDefault();

    const anchor = this.element.getAttribute("href");
    const selector = this.hasSelectorValue ? this.selectorValue : anchor;
    const target = document.querySelector(selector);

    if (!!target) target.scrollIntoView(this.scrollOptionsValue);
  }
}
