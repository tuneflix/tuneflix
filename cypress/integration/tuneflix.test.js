describe("Website setup" , () => {
    it("Should load the page", ()=>{
        cy.visit("http://localhost:3000")
    })
})

// Search.js
describe("Should be able to type into input field" , () => {
    it("Should be able to type into the input field", () => {
        cy.get(".userInput")
        .type("marvelous mrs maisel")
    })
    it("Should be able to click on the Search Button", ()=>{
        cy.get(".Search-button")
        .click()
    })
   
})

 

 // Search.js
describe("Should be able to type into input field", () => {
    it("Should be able to type into the input field", () => {
        cy.get(".Header-input")
        .type("marvelous mrs maisel")
    })
    it("Should be able to click on the Search Icon", ()=>{
        cy.get("#material-icons-1")
        .click()
    })
    it("Should be able click a tags", () => {
        cy.get("#tv0")
        .click()
    })
    it("Should be able click on Season 2 button", () => {
        cy.get("#tab1")
        .click()
    })
    it("Should be able click on Episode 1", () => {
        cy.get("#episode0")
        .click()
    })
    it("Should be able click on AppMusic Icon", () => {
       
        cy.get("#appleMusic0")
        .click()
    })
   
   it("Should be able click  on Logo", ()=>{
        cy.get(".logo-header")
        
        .click()
    })
})

 // Result.js

 describe("Should be able to type into input field" , () => {
    it("Should be able to type into the input field", () => {
        cy.get(".userInput")
        .type("dog")
    })
    it("Should be able to click on the Search Button", ()=>{
        cy.get(".Search-button")
        .click()
    })
    it("Should be able to click on Show More Button", ()=>{
        cy.get("#movShowMoreBtn")
        .click()
    })
    it("Should be able to click on Show Less Button", ()=>{
        cy.get("#movShowLessBtn")
        .click()
    })
    it("Should be able to click on Show More Button", ()=>{
        cy.get("#tvShowMoreBtn")
        .click()
    })
    it("Should be able to click on Show Less Button", ()=>{
        cy.get("#tvShowLessBtn")
        .click()
    })
  
})
 
