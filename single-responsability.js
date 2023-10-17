class UserAuth {
  constructor(user) {
    this.user = user;
  }

  verifyCredentials() {
    return true
  }
}

class UserSettings extends UserAuth {
  constructor(user, settings) {
    super(user)
    this.settings = settings
  }

  changeSettings(settings) {
    if (this.verifyCredentials()) {
      console.log('You can modify your settings')
    }
  }
}

const newAccess = new UserSettings('Alex', 'Dark mode') 

newAccess.changeSettings()
