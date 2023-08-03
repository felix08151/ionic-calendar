import { newSpecPage } from '@stencil/core/testing';
import { AppCalendar } from '../app-calendar';

describe('app-calendar', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [AppCalendar],
      html: `<app-calendar></app-calendar>`,
    });
    expect(page.root).toEqualHtml(`
      <app-calendar>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </app-calendar>
    `);
  });
});
