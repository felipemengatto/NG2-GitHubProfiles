import { GitHubProfilesPage } from './app.po';

describe('git-hub-profiles App', function() {
  let page: GitHubProfilesPage;

  beforeEach(() => {
    page = new GitHubProfilesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
