import { locked_out_user, problem_user, standard_user } from "../support/credentials"

describe('Objective 2', () => {
  it('should login users successfully when a valid email and password is used', () => {
    const user = locked_out_user
    cy.docTest({
      description: 'verifies that users can successfully access the platform',
      testData: `username: ${user.email}, password: ${user.password}`
    })

    cy.login(user.email, user.password)

    cy.procedure('verify that user is routed to inventory page on success')
    cy.url().should('include', 'inventory.')
  })

  it('should add any item to cart when user clicks the Add to cart button', () => {
    const user = problem_user

    cy.docTest({
      description: 'verifies that the application meets its functional requirement of adding items to cart',
      testData: `username: ${user.email}, password: ${user.password}`
    })

    cy.login(user.email, user.password)
    cy.precondition('user signed in as problem_user')

    cy.procedure('click all the add to cart button')
    cy.get('#add-to-cart').click({ multiple: true })

    cy.procedure('Verify that the cart item count is 6')
    // since the items number 6, after all is added the cart count is expected to be 6 too
    cy.contains('span', '6', { matchCase: false }).should('be.visible')

  })
})