describe('Testes da aplicação Agenda de Contatos', () => {
    const baseUrl = 'https://agenda-contatos-react.vercel.app/';
    const novoContato = {
      name: 'João',
      email: 'joao@email.com',
      phone: '123456789'
    };
  
    beforeEach(() => {
      
      cy.visit(baseUrl);
    });
  
    it('Deve adicionar um novo contato', () => {
      
      cy.get('input[placeholder="Nome"]').type(novoContato.name);
      cy.get('input[placeholder="E-mail"]').type(novoContato.email);
      cy.get('input[placeholder="Telefone"]').type(novoContato.phone);
  
      
      cy.get('button.adicionar').click();
  
      
      cy.contains(novoContato.name).should('exist');
      cy.contains(novoContato.email).should('exist');
      cy.contains(novoContato.phone).should('exist');
    });
  
    it('Deve editar um contato existente', () => {
     
      cy.get('input[placeholder="Nome"]').type('João para Editar');
      cy.get('input[placeholder="E-mail"]').type('joao.editar@teste.com');
      cy.get('input[placeholder="Telefone"]').type('111111111');
      cy.get('button.adicionar').click();
  
      
      cy.contains('João para Editar').parent().find('button.edit').click();
  
      
      cy.get('input[placeholder="Nome"]').clear().type('João Editado');
      cy.get('input[placeholder="E-mail"]').clear().type('joao.editado@teste.com');
      cy.get('input[placeholder="Telefone"]').clear().type('222222222');
  
      
      cy.get('button.alterar').click();
  
      
      cy.contains('João Editado').should('exist');
      cy.contains('joao.editado@teste.com').should('exist');
      cy.contains('222222222').should('exist');
    });
  
    it('Deve remover um contato', () => {
     
      cy.get('input[placeholder="Nome"]').type('João para Remover');
      cy.get('input[placeholder="E-mail"]').type('joao.remover@teste.com');
      cy.get('input[placeholder="Telefone"]').type('999999999');
      cy.get('button.adicionar').click();
  
      
      cy.contains('João para Remover').parent().find('button.delete').click();
  
      
      cy.contains('João para Remover').should('not.exist');
    });
  });
  