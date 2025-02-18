import { newE2EPage } from '@stencil/core/testing';

describe('inner-one', () => {
  it('should render default text', async () => {
    const page = await newE2EPage();
    await page.setContent('<inner-one></inner-one>');

    const el = await page.find('inner-one');
    expect(el).not.toBeNull();

    const blueText = el.shadowRoot.querySelector('div.blue-text');
    expect(blueText?.innerHTML).toEqual('Boom!');
  });

  it('should render custom text', async () => {
    const page = await newE2EPage();
    await page.setContent('<inner-one name="TEST"></inner-one>');

    const el = await page.find('inner-one');
    expect(el).not.toBeNull();

    const blueText = el.shadowRoot.querySelector('div.blue-text');
    expect(blueText?.innerHTML).toEqual('TEST');
  });

  afterAll(() => {
    jest.clearAllMocks();
  });
});
