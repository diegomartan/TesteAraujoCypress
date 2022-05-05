class VisitPage {

    constructor() {
        this.valida = '.header__logo > a > svg'
    }

    go() {
        cy.visit('/')
    }

    validaPagina() {
        cy.get(this.valida).should('be.visible')

    }



}


export default new VisitPage;