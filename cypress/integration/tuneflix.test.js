describe("Website setup" , () => {
    it("Should load the page", ()=>{
        cy.visit("http://localhost:3000")
    })
})




// Search.js
//  1-) able to type into input field 
//  2-) Should be able to click on the Search Button

// describe("Add item input field" , () => {
//     it("Should be able to type into the input field", () => {
//         cy.get(".userInput")
//         .type("Silicon valey")
//     })

//     it("Should be able to click on the Add Item Button", ()=>{
//         cy.get(".add-button")
//         .click()
//     })
   
//})

 // Header.js
 // 3-) Should be able to click on the TuneFlix Icon
 // 4-) Should be able to click on the Search Icon
 // 5-) able to type into input field 
 // 6-) Should be able to click on the  < Results Icon (button that takes  the client  back to result page)


 // Result.js
 // 7-) able to click on a tags (results that rendered)

 // SongCard.js

 // 8-) Should be able to click on the amazon Icon
 // 9-) Should be able to click on the itunes Icon
 // 10-) Should be able to click on the spotify Icon

 //TvShows.js

 // 11-) Should be able to click the button that className is "tab"
 // 12-) Should be able to click on li that className is "episode"


 //Others

 // 13-) Should make http request
 
            //  describe("Website setup" , () => {
            //     it("Should make http request", ()=>{
            //         cy.request(`/api/movie/:lost`)
                    
            //     })
            // })


 // 14-) Check For Focus
        //input tag should be like this
            //  <input
            //  autoFocus
            //  className="new task"
            //  ref={a => (this._inputElement = a)}
            //  placeholder="enter task"
            // />
        // Cypress test
            // describe ('Third Test', () => {
            //     it ('Focus on the input', () => {
            //       cy.visit ('/');
            //       cy.focused ().should ('have.class', 'new task');
            //     });
            //   });






