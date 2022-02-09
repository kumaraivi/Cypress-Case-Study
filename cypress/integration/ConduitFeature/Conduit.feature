Feature: Conduit App New Post feature

Scenario: Validate Conduit App New Post feature
Given I have given conduit app home page
When I click on Sign In menu
Then I should see Sign In page
When I enter email and password
And I click on Sign In button
Then I should be able to login successfully
When Create a New Post using cypress fixtures
Then I should be able to Delete the newly created post