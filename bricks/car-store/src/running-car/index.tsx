import React from "react";
import ReactDOM from "react-dom";
import { BrickWrapper, UpdatingElement, property } from "@next-core/brick-kit";
import { RunningCar } from "./RunningCar";

export class RunningCarElement extends UpdatingElement {
  @property()
  print: string;

  connectedCallback(): void {
    // Don't override user's style settings.
    // istanbul ignore else
    if (!this.style.display) {
      this.style.display = "block";
    }
    this._render();
  }

  disconnectedCallback(): void {
    ReactDOM.unmountComponentAtNode(this);
  }

  protected _render(): void {
    // istanbul ignore else
    if (this.isConnected) {
      ReactDOM.render(
        <BrickWrapper>
          <RunningCar print={this.print} />
        </BrickWrapper>,
        this
      );
    }
  }
}

customElements.define("car-store.running-car", RunningCarElement);
