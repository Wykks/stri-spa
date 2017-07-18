import { StriSpaPage } from './app.po';

describe('stri-spa App', () => {
  let page: StriSpaPage;

  beforeEach(() => {
    page = new StriSpaPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
