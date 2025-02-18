import { newSpecPage } from '@stencil/core/testing';
import { InnerOne } from './inner-one';

describe('inner-one', () => {
  it('should render', async () => {
    const page = await newSpecPage({
      components: [InnerOne],
      html: '<inner-one></inner-one>',
    });

    const componentEl = page.body.querySelector('inner-one');
    expect(componentEl).not.toBeNull();

    const BT = componentEl?.shadowRoot?.querySelector('div.blue-text');
    expect(BT?.innerHTML).toEqual('Boom!');
  });

  afterAll(() => {
    jest.clearAllMocks();
  });
});
