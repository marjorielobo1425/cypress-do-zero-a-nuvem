    Cypress.Commands.add('fillMandatoryFieldsAndSubmit',()=> {
     cy.get('#firstName').type('gabriel')
      cy.get('#lastName').type('jujuba')
      cy.get('#email').type('leonelouand900@gmail.com')
      cy.get('#open-text-area').type('sou teste')
      cy.contains('button', 'Enviar').click()

})