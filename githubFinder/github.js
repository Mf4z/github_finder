class GitHub {
  constructor() {
    this.client_id = '9643071db8840cffb830';
    this.client_secret = 'ecea1fc1b3c4dfe9e64ecf44bd939e16a053e1fa';
  }

  async getUser(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`,
      {
        headers: {
          Accept: 'application/vnd.github.v3+json',
        },
      }
    );
    const profileData = await profileResponse.json();

    return {
      profile: profileData, //Can be formarted as
      // profile | if the object is the same as the name of the property eg profile : profile
    };
  }
}
