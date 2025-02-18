import { h } from '@stencil/core';
import { render } from '@wdio/browser-runner/stencil';
import { $, expect } from '@wdio/globals';
import { InnerOne } from './inner-one';

describe('inner-one', () => {
  it('should render default text', async () => {
    render({
      components: [InnerOne],
      autoApplyChanges: true,
      template: () => <inner-one />,
    });

    const text = await $('inner-one').shadow$('.blue-text');
    await expect(text).toHaveText('Boom!');
  });

  it('should render custom text', async () => {
    render({
      components: [InnerOne],
      autoApplyChanges: true,
      template: () => <inner-one name="TEST" />,
    });

    const text = await $('inner-one').shadow$('.blue-text');
    await expect(text).toHaveText('TEST');
  });
});
