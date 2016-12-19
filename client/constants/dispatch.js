var dispatches = {
  login: {
    checking: "CHECKING_THE_LOGIN_CREDENTIALS",
    success: "LOGIN_SUCCESS",
    fail: "LOGIN_FAIL",
    stateSelected: 'A_STATE_WAS_SELECTED',
    usernameBlank: 'USERNAME_ISNT_BLANK',
    username: 'USERNAME_IS_BLANK',
    usernameTaken: 'USERNAME_IS_TAKEN',
    usernameNotTaken: 'USERNAME_ISNT_TAKEN',
    firstNameBlank: 'FIRST_NAME_IS_BLANK',
    firstName: 'FIRST_NAME_ISNT_BLANK',
    lastNameBlank: 'LAST_NAME_IS_BLANK',
    lastName: 'LAST_NAME_ISNT_BLANK',
    addressBlank: 'ADDRESS_IS_BLANK',
    address: 'ADDRESS_ISNT_BLANK',
    cityBlank: 'CITY_IS_BLANK',
    city: 'CITY_ISNT_BLANK',
    stateBlank: 'STATE_IS_BLANK',
    state: 'STATE_ISNT_BLANK',
    zipBlank: 'ZIP_IS_BLANK',
    zip: 'ZIP_ISNT_BLANK',
    emailBlank: 'EMAIL_IS_BLANK',
    email: 'EMAIL_ISNT_BLANK',
    passwordBlank: 'PASSWORD_IS_BLANK',
    password: 'PASSWORD_ISNT_BLANK',
    verifyBlank: 'VERIFY_IS_BLANK',
    verify: 'VERIFY_ISNT_BLANK',
    emailTaken: 'EMAIL_IS_TAKEN',
    emailNotTaken: 'EMAIL_ISNT_TAKEN',
    verifyNoMatch: 'VERIFY_DOESNT_MATCH',
    verifyMatch: 'VERIFY_DOES_MATCH',
    dateError: 'DATE_IS_INVALID',
    date: 'DATE_IS_VALID',
  },
  showCreateProfile: 'SHOW_THE_CREATE_PROFILE_PAGE',
  tab: {
    selected: "A_TAB_HAS_BEEN_SELECTED"
  }
}

App.Constants.Dispatch = dispatches
