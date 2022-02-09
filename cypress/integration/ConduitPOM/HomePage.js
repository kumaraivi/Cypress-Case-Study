const URL_='https://react-redux.realworld.io/#/?_k=w7wjt2'
const SignIn=":nth-child(2) > .nav-link"
const NEW_POST=".container > .nav > :nth-child(2) > .nav-link"

class HomePage{
    static visitURL(){
        cy.visit(URL_)
    }
    static clickOnSignIn(){
        cy.get(SignIn).click({force:true})
    }

    static ClicknewPostBtn(){
        cy.get(NEW_POST).click()
    }
}
export default HomePage