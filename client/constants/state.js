var states = {
  loggedIn: "user_is_logged_in",
  showCreateProfile: "show_the_create_profile_page",
  login:{
    checking: 'checking_the_login_info',
    selectedState: "the_state_selected_during_signup",
    usernameBlank: 'is_the_username_blank',
    usernameTaken: 'is_the_username_taken',
    firstNameBlank: 'is_the_first_name_blank',
    lastNameBlank: 'is_the_last_name_blank',
    addressBlank: 'is_the_address_blank',
    cityBlank: 'is_the_city_blank',
    stateBlank: 'is_the_state_blank',
    zipBlank: 'is_the_zip_blank',
    emailBlank: 'is_the_email_blank',
    passwordBlank: 'is_the_password_blank',
    verifyBlank: 'is_the_verify_blank',
    emailTaken: 'is_the_email_taken',
    verifyNoMatch: 'does_the_verify_match',
    dateError: 'is_date_valid'
  },
  selectedTab: "the_currently_selected_tab"
}

App.Constants.State = states
