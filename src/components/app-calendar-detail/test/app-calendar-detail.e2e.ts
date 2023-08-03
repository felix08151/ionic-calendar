import { newE2EPage } from '@stencil/core/testing';

describe('app-calendar-detail', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<app-calendar-detail></app-calendar-detail>');

    const element = await page.find('app-calendar-detail');
    expect(element).toHaveClass('hydrated');
  });
});
