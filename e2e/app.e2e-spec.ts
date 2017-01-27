import { Angular2RegistrationLoginExamplePage } from './app.po';

describe('angular2-registration-login-example App', function() {
  let page: Angular2RegistrationLoginExamplePage;

  beforeEach(() => {
    page = new Angular2RegistrationLoginExamplePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
