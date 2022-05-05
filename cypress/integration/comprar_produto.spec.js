import visit from '../pages/VisitPage'
import comprar from '../pages/ComprarPage'
import auth from '../pages/AuthPage'

describe('Garantir compra de um produto estando logado', function () {

    let login =  {
        email: 'diegomartin10@live.com',
        senha: '12345Araujo@'
    }

    it('Comprar um produto com sucesso', function () {    

        visit.go()
        visit.validaPagina()

        auth.btnLogin()
        auth.btnLoginEmailSenha()
        auth.login(login)
        auth.btnEntrar()
        auth.validaLogin()
        
        comprar.btnMedicamentos()
        comprar.produtoBenegrip()
        comprar.btnAddCarrinho()
        comprar.btnMinimizarModal()
        comprar.btnFilanizarCompra()
        comprar.btnReceberEntrega()        
        comprar.btnContinuar()
        comprar.btnPayPix()
        

    })



})