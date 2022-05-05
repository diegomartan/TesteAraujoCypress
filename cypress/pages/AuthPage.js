class AuthPage {

    constructor() {
        this.entrar = '#login'
        this.btnMinhaconta = '.info-entrar > a'
        this.validaModalLogin = '#vtexIdUI-auth-selector > .modal-header'
        this.loginEmail = '#loginWithUserAndPasswordBtn'
        this.email = '#inputEmail'
        this.senha = '#inputPassword'
        this.logar = '#vtexIdUI-form-classic-login > .modal-footer > #classicLoginBtn'
        this.loginSuccess = '.vtex-account__user-info'

    }

    btnLogin() {
        cy.get(this.entrar).trigger('mouseover')

        cy.get(this.btnMinhaconta)
            .click()
            .wait(3000)
        
        cy.contains(this.validaModalLogin, 'Use uma das opções para confirmar sua identidade').should('be.visible')
    }

    btnLoginEmailSenha() {
        cy.get(this.loginEmail)
            .click()
            .wait(1500)
    }

    login(login){
        cy.get(this.email).type(login.email)
        cy.get(this.senha).type(login.senha)
    }

    btnEntrar() {
        cy.get(this.logar)
            .click()
            .wait(4000)
    }

    validaLogin() {
        cy.contains(this.loginSuccess, 'DIEGO').should('be.visible')
    }
    

}

export default new AuthPage;