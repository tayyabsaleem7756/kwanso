
//enabling intellisense in VS code
/// <reference types="cypress"/>

describe('OrangeHRM Assignment', () => {
  it.only('Admin Login-Positive', () => {


    //visit will load desired url-orangehrm
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login').wait(5000);
    //Empty submit will test validation
    cy.get('.oxd-button').click();
    //validation check for username
    cy.get(':nth-child(2) > .oxd-input-group > .oxd-text').contains("Required")
    //validation check for password
    cy.get(':nth-child(3) > .oxd-input-group > .oxd-text').contains("Required")

    //correct username/ password-admin should be logged into system
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type("Admin");
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type("admin123");
    cy.get('.oxd-button').click();

   //contain will verify its current page is dashboard
    cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').contains("Dashboard");
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
    //click on save button
    cy.get('.oxd-button--secondary').click();
    
   
    cy.get(':nth-child(2) > .oxd-topbar-body-nav-tab-item').click();

    cy.wait(2000);
    cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-autocomplete-wrapper > .oxd-autocomplete-text-input > input').type("Tayyab Saleem Rajpoot");


    cy.get('.oxd-form-actions > .oxd-button--secondary').click({force: true});
    cy.contains("Tayyab Saleem")
    cy.get('.oxd-table-row > :nth-child(1) > .oxd-checkbox-wrapper > label > .oxd-checkbox-input > .oxd-icon').click({force: true});
    cy.get('.orangehrm-horizontal-padding > div > .oxd-button').click({force: true})
    cy.wait(4000)
    cy.get('.orangehrm-modal-footer > .oxd-button--label-danger').click({force: true})
    //cy.get('.oxd-table-body > :nth-child(1) > .oxd-table-row > :nth-child(2) > div').should("eq", "Tayyab Saleem Rajpoot");


  
  })


  
  


})