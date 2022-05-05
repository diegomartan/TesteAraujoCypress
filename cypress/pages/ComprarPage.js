class ComprarPage {

    constructor() {
        this.btnMed = '.menu__nav > :nth-child(2) > [href="/medicamentos"]'
        this.btnAntiGrip = '#subMenu_2 > .row > :nth-child(1) > ul > :nth-child(1) > a'
        this.validaTitulo = '.titulo-sessao'
        this.benegrip = ':nth-child(1) > :nth-child(1) > .item > .header > .image > img'
        this.validaBenegrip = '.x-product__name > .fn'
        this.btnCarrinho = '.buy-button'
        this.minimizaModal = '._hj-102w7__styles__openStateToggleIcon'
        this.finalizaCompra = '.x-minicart__btn-checkout'
        this.validaCarrinho = '#cart-title'
        this.recebeEntrega = '.srp-toggle__delivery'
        this.cep = '#ship-postalCode'
        this.btnCalcularCep = '.vtex-shipping-preview-0-x-postalCodeForgotten > #cart-shipping-calculate'
        this.continuar = '#cart-to-orderform'
        this.payPix = '#payment-group-instantPaymentPaymentGroup'        
        this.validaPagPagamento = '#payments-title > .accordion-toggle'
        this.validaPix = '.payment-pix-header-image'
    }



    btnMedicamentos() {

        cy.get(this.btnMed).trigger('mouseover')

        cy.get(this.btnAntiGrip)
            .click()
            .wait(3000)

        cy.get(this.validaTitulo)
            .should('be.visible')
            .should('have.text', 'Antigripal')
    }

    produtoBenegrip() {
        cy.get(this.benegrip).click()

        cy.get(this.validaBenegrip)
            .should('be.visible')
            .should('have.text', 'Benegrip com 12 Comprimidos')
    }

    btnAddCarrinho() {
        cy.get(this.btnCarrinho)
            .click()
            .wait(3000)

    }

    btnMinimizarModal() {
        cy.get(this.minimizaModal).click()
    }

    btnFilanizarCompra() {
        cy.get(this.finalizaCompra)
            .click()
            .wait(3000)

        cy.get(this.validaCarrinho)
            .should('be.visible')
            .should('have.text', 'Meu Carrinho')
    }

    btnReceberEntrega() {
        cy.get(this.recebeEntrega).click()
    }

    inputCep() {
        cy.get(this.cep)
            .type('32210970')   
            .wait(4000)     
    }

    btnContinuar() {
        cy.get(this.continuar)
            .click()
            .wait(5000)

        cy.get(this.validaPagPagamento).should('be.visible')
         
    }

    btnPayPix() {
        cy.get(this.payPix)
            .click()
            .wait(3000)

        cy.get(this.validaPix).should('be.visible')
    }

    



}

export default new ComprarPage;