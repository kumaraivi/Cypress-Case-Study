
const SIGNIN="h1.text-xs-center"
const EMAIL=":nth-child(1) > .form-control"
const PWD=":nth-child(2) > .form-control"
const BTN=".btn"


class LoginPage{
    static validateSignInHeader(){
        cy.get(SIGNIN).should('contain','Sign')
    }
    static enterEmail(){
        cy.get(EMAIL).type('avina3086@gmail.com')
    }
    static enterPWD(){
        cy.get(PWD).type('test123')
        
    }

    static clickOnSignInButton(){
        cy.get(BTN).click({force:true})
        
    }

}
export default LoginPage