import { MyRoutingAppPage } from './app.po';

describe('my-routing-app App', () => {
  let page: MyRoutingAppPage;

  beforeEach(() => {
    page = new MyRoutingAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
