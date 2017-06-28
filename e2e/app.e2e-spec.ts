import { A93ToenderPage } from './app.po';

describe('a93-toender App', () => {
  let page: A93ToenderPage;

  beforeEach(() => {
    page = new A93ToenderPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
