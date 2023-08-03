import { newE2EPage } from '@stencil/core/testing';

describe('app-calendar', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<app-calendar></app-calendar>');

    const element = await page.find('app-calendar');
    expect(element).toHaveClass('hydrated');
  });
});
