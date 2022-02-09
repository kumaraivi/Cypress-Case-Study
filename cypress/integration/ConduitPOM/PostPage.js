
const ATRICLE_TITLE=":nth-child(1) > .form-control"
const ABOUT=":nth-child(2) > .form-control"
const MAIN_CONTENT=":nth-child(3) > .form-control"
const TAG=":nth-child(4) > .form-control"
const BTN=".btn"
const DEL_BTN=".btn-outline-danger"

class PostPage{
    static enterArticleDetails(){
        cy.fixture('ArticleDetails').then((article) =>{
            const title=article.title
            const about=article.about
            const message=article.message
            const tag=article.tag
            cy.get(ATRICLE_TITLE).type(title)
            cy.get(ABOUT).type(about)
            cy.get(MAIN_CONTENT).type(message)
            cy.get(TAG).type(tag)
        })
        
    }
    static clickOnPostArticle(){
        cy.get(BTN).click({force:true})
        
    }

    static clickclickOnDeleteBtn(){
        cy.wait(2000)
        cy.get(DEL_BTN).click({force:true})
        
    }

}
export default PostPage