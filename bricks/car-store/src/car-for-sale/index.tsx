import React from "react";
import ReactDOM from "react-dom";
import {
  BrickWrapper,
  UpdatingElement,
  property,
  method,
} from "@next-core/brick-kit";
import { CarForSale } from "./CarForSale";

export class CarForSaleElement extends UpdatingElement {
  @property()
  print: string;

  @property({
    type: Boolean,
  })
  running: boolean;

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
          <CarForSale print={this.print} running={this.running} />
        </BrickWrapper>,
        this
      );
    }
  }
}

customElements.define("car-store.car-for-sale", CarForSaleElement);
