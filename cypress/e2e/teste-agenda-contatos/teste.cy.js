<reference types="cypress" />
import React from 'react';

describe('Testes para a pagina de candidatura', () =>{

    beforeEach(() =>{
        cy.visit('https://agenda-contatos-react.vercel.app/')
    })

    it('deve adicionar um contato', () =>{
        cy.get('input[type="text"]').type('juan pablo mendes')
        cy.get('input[type="email"]').type('juan@gmail.com')
        cy.get('input[type="tel"]').type('35998686922')
        cy.screenshot('adicionando')
        cy.get('button[type="submit"]').click()
    })
    it('deve editar um contato', () =>{
        cy.get('.edit').last().click()
        cy.get('input[type="text"]').clear().type('joao')
        cy.get('input[type="email"]').clear().type('joao@gmail.com')
        cy.get('input[type="tel"]').clear().type('3599999999')
        cy.screenshot('alterando')
        cy.get('.alterar').click()
    })
    it('deve deletar um contato', () =>{
        cy.get('.delete').first().click()
        cy.screenshot('deletando')
    })
   
})