
//enabling intellisense in VS code
/// <reference types="cypress"/>

//This file contains employee ceation with username/ password


describe('OrangeHRM Assignment', () => {
    it('Empployee creation with username/ password', () => {
  
  
      //visit will load desired url-orangehrm
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login').wait(5000);
    
  
      //this function will load data from custome command

      cy.login('Admin', 'admin123')
    
  
     //contain will verify its current page is dashboard
      
      cy.title('be.equal', 'OrangeHRM')
      //redirect to PIM
      cy.get(':nth-child(2) > .oxd-main-menu-item > .oxd-text').click();
      //click on add employee
      cy.get(':nth-child(3) > .oxd-topbar-body-nav-tab-item').click();
  
  
      //input for fisrtname
      cy.get('.--name-grouped-field > :nth-child(1) > :nth-child(2) > .oxd-input').type("Tayyab");
      //input for second name
      cy.get(':nth-child(2) > :nth-child(2) > .oxd-input').type("Saleem");
      //input for last name
      cy.get(':nth-child(3) > :nth-child(2) > .oxd-input').type("Rajpoot");
    //toogle on
      cy.get('.oxd-switch-input').click();
      //username
      cy.get(':nth-child(4) > .oxd-grid-2 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input').type("Tayyabsaleem7756")
      

      //Check If password does't match
      cy.get('.user-password-cell > .oxd-input-group > :nth-child(2) > .oxd-input').type("Ayattayyab@124q")
      cy.get('.oxd-grid-2 > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type("Ayattayyab@124")
      //click on save button
      cy.get('.oxd-button--secondary').click();
      cy.get(':nth-child(2) > .oxd-input-group > .oxd-text').contains("Passwords do not match")


      //Check If password length is lesss then 8
      cy.get('.user-password-cell > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type("A123")
      cy.get('.oxd-grid-2 > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type("A123")
      //click on save button
      cy.get('.oxd-button--secondary').click();
      cy.get('.oxd-input-group > .oxd-text').contains("Should have at least 8 characters")


      cy.get('.user-password-cell > .oxd-input-group > :nth-child(2) > .oxd-input').type("Ayattayyab@124")
      cy.get('.oxd-grid-2 > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type("Ayattayyab@124")
      //click on save button
      cy.get('.oxd-button--secondary').click();
      
     //redirect to employee listing
      cy.get(':nth-child(2) > .oxd-topbar-body-nav-tab-item').click();
  
      cy.wait(2000);
      //type text in input field to search employee
      cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-autocomplete-wrapper > .oxd-autocomplete-text-input > input').type("Tayyab Saleem Rajpoot");
  
      
      cy.get('.oxd-form-actions > .oxd-button--secondary').click({force: true});
      //verification point is tayyab sakeem exist in data table of not
      cy.contains("Tayyab Saleem")
      //will check if tayyab saleeem exist
      cy.get('.oxd-table-row > :nth-child(1) > .oxd-checkbox-wrapper > label > .oxd-checkbox-input > .oxd-icon').click({force: true});
      //click on delete element/ button
      cy.get('.orangehrm-horizontal-padding > div > .oxd-button').click({force: true})
      cy.wait(4000)
      // deletetion confirmation
      cy.get('.orangehrm-modal-footer > .oxd-button--label-danger').click({force: true})
      
    
    })
  
  
    
    
  
  
  })