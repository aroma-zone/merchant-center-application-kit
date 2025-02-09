import percySnapshot from '@percy/puppeteer';
import { HOST } from '../../constants';

describe('PageContentContainerNarrow', () => {
  beforeAll(async () => {
    await page.goto(`${HOST}/page-content-container-narrow`);
  });

  it('Default', async () => {
    await expect(page).toMatch('Page content container narrow');
    await percySnapshot(page, 'PageContentContainerNarrow');
  });
});
