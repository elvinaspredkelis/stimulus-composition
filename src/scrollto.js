import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ["target"];

  scroll(event) {
    event.preventDefault();

    const anchor = this.element.getAttribute("href");
    const target = this.hasTargetTarget
      ? this.targetTarget
      : document.querySelector(anchor);

    target.scrollIntoView({
      behavior: "smooth",
    });
  }
}
