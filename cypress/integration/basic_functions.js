/// <reference types="Cypress"/>
describe('basic Function', function() {
    it('basic Function', function(){
        //visit any web site
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
        
        //Type to a field
        cy.get('.search-keyword').type("Brocolli");
        //Type again to the fiel, the text will be chain
        cy.get('.search-keyword').type("Ca");
        //Wait one second        
        cy.wait(1000);
        //Clear the field
        cy.get('.search-keyword').clear();
        //Type Ca on the field
        cy.get('.search-keyword').type("Ca");
        //Clear the input and type a new value
        cy.get('.search-keyword').clear().type('Carrot')

        //Get Title Assertions
        cy.get('.brand').should('have.text', 'GREENKART');
        cy.get('.redLogo').should('have.text', 'KART');

        //cy.get('[href="#/offers"]').click();
        //cy.get('#page-menu').select('10');

    })
  
})

describe('Dropdown and click buttons', function() {
    it('Dropdown and click buttons', function(){
        //visit any web site
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/offers");
        //Manipulates DropDown Menu
        
        cy.get('#page-menu').select('10');

        cy.get(':nth-child(5) > a').click();

        cy.get('#search-field').type('Ch');

        cy.wait(1000)

        cy.get('tbody > :nth-child(2) > :nth-child(2)').should('have.text','93');

    })
  
})