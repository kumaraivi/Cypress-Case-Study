///<reference types='cypress'/>
import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import HomePage from '../../ConduitPOM/HomePage'
import LoginPage from '../../ConduitPOM/LoginPage'
import PostPage from '../../ConduitPOM/PostPage'

Given('I have given conduit app home page', () => {
    HomePage.visitURL()
})
When('I click on Sign In menu', () => {
    HomePage.clickOnSignIn()
})
Then('I should see Sign In page', () => {
    LoginPage.validateSignInHeader()
})
When('I enter email and password', () => {
    LoginPage.enterEmail()
    LoginPage.enterPWD()
    cy.wait(2000)


})
And('I click on Sign In button', () => {
    LoginPage.clickOnSignInButton()
})
Then('I should be able to login successfully', () => {
    cy.get('.article-preview').should('contain', 'No')
    HomePage.ClicknewPostBtn()
})

When('Create a New Post using cypress fixtures', () => {
PostPage.enterArticleDetails()
PostPage.clickOnPostArticle()

})
Then('I should be able to Delete the newly created post', () => {
    PostPage.clickclickOnDeleteBtn()
    cy.get('.article-preview').should('contain', 'No')
})