import { Component, Host, Prop, State, h } from '@stencil/core';

@Component({
  tag: 'inner-one',
  styleUrl: 'inner-one.less',
  shadow: true,
})
export class InnerOne {
  @Prop() name = 'Boom!';

  @State() check = false;

  render() {
    return (
      <Host>
        <div class="blue-text">{this.name}</div>

        {this.check ? <hr /> : <br />}
        <button
          type="button"
          class="ask-button"
          onClick={() => {
            this.check = !this.check;
          }}
        >
          <svg width="22" height="22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <title>Stars Icon</title>
            <path
              d="m18 0-1.26 2.75L14 4l2.74 1.26L18 8l1.25-2.74L22 4l-2.75-1.25M8 3 5.5 8.5 0 11l5.5 2.5L8 19l2.5-5.5L16 11l-5.5-2.5M18 14l-1.26 2.74L14 18l2.74 1.25L18 22l1.25-2.75L22 18l-2.75-1.26"
              fill="#08C177"
            />
          </svg>
          <span>Ask Tree AI</span>
        </button>
      </Host>
    );
  }
}
