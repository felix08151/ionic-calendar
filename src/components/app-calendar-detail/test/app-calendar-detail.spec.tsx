import { newSpecPage } from '@stencil/core/testing';
import { AppCalendarDetail } from '../app-calendar-detail';

describe('app-calendar-detail', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [AppCalendarDetail],
      html: `<app-calendar-detail></app-calendar-detail>`,
    });
    expect(page.root).toEqualHtml(`
      <app-calendar-detail>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </app-calendar-detail>
    `);
  });
});
