/// <reference types="Cypress"/>
import * as storeSelector from  '../support/storeSelector'
describe('GREEN KART, Simple Store, Add to cart and place order', function() {
    it('Buy Carrots and Cucumbers', function(){
        //visit any web site
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
        
        //Type to a field
        cy.get('.search-keyword').type("Brocolli");
        //Type again to the fiel, the text will be chain
        //Using the StoreSelector.js file 
        cy.get(storeSelector.SearchField).type("Ca");
        //Wait one second        
        cy.wait(1000);
        //Clear the field
        cy.get(storeSelector.SearchField).clear();
        //Type Ca on the field
        cy.get(storeSelector.SearchField).type("Ca");
        //Clear the input and type a new value
        cy.get(storeSelector.SearchField).clear().type('Carrot')

        //Get Title Assertions
        cy.get('.brand').should('have.text', 'GREENKART');
        cy.get('.redLogo').should('have.text', 'KART');
        cy.wait(1000)

        //Click on Button Several times for Carrot
        for(let n = 0; n < 10; n ++){
            cy.get(':nth-child(1) > .stepper-input > .increment')
            .click()
        }    

        for(let n = 0; n < 5; n ++){
            cy.get(':nth-child(1) > .stepper-input > .decrement')
            .click()
        }    
        
        //Click Button to add Carrot
        cy.get('.product-action > button').click();
        cy.get('.search-keyword').clear();
        cy.wait(1000);

        //Search for Cucumber
        cy.get('.search-keyword').clear().type('Cucumber');
        cy.wait(1000);

        for(let n = 0; n < 3; n ++){
            cy.get(':nth-child(1) > .stepper-input > .increment')
            .click()
        }    

        cy.get('.product-action > button').click();
        cy.get('.search-keyword').clear();
        cy.wait(1000);


        cy.get('.cart-icon > img').click();
        
        cy.get('.cart-preview > .action-block > button').click();
      

        cy.get('.discountAmt').should('have.text',768)

    })
  
})



describe('DROPDOWN/BUTTON/ASSERT TEXT VALUE', function() {
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
