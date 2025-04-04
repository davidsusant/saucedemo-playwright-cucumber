Feature: Login Functionality
  As a user of sauce demo website
  I want to be able to log in with valid credentials
  So that I can acccess the product page

  Background:
    Given I am on the login page

    Scenario: Successful login with standard user
        When I enter username "standard_user"
        And I enter password "secret_sauce"
        And I click the login button
        Then I should be redirected to the inventory page
        