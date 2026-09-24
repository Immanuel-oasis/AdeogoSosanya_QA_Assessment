import { problem_user } from "../support/credentials"

describe('Objective 3', () => {
  const user = problem_user

  const getPrices = () =>
    cy.get('.inventory_item_price').then($prices =>
      [...$prices].map(el => Number(el.innerText.replace('$', '').trim()))
    )

  it('should filter by low to high prices', () => {
    cy.docTest({
      description: 'verifies that the price filter accurately filters items by prices from low to high',
      testData: `username: ${user.email}, password: ${user.password}`
    })
    cy.login(user.email, user.password)
    cy.precondition(`user signed in as problem_user`)

    cy.procedure('get all the prices before filter')
    getPrices().then(pricesBefore => {
      pricesBefore.sort((a, b) => a - b)
      cy.wrap(pricesBefore).as('pricesBefore')
    })

    cy.procedure('select the "price (low to hight) filter')
    cy.get('.product_sort_container').select(2) // index 2 is the price filter
    cy.procedure('get all the prices after filter')
    getPrices().then(pricesAfter => {
      cy.get('@pricesBefore').then((pricesBefore) => {
        const pricesBeforeFilterList = [...pricesBefore].sort((a, b) => a - b)
        expect(pricesAfter).to.deep.eq(pricesBeforeFilterList)
      })
    })
  })

  it('should remove items added to cart when the remove button is clicked', () => {
    cy.docTest({
      description: 'verifies that user can add and remove items from cart',
      testData: `username: ${user.email}, password: ${user.password}`
    })

    cy.login(user.email, user.password)
    cy.precondition(`user signed in as problem_user`)

    cy.procedure('find the sauce bag item and add to cart')
    cy.get('#add-to-cart-sauce-labs-backpack').click()

    cy.procedure('verify that the amount of item in cart is 1')
    cy.contains('.shopping_cart_badge', '1', { matchCase: false }).should('be.visible')

    cy.procedure('click on the remove button on the sauce bag card')
    cy.get('#remove-sauce-labs-backpack').click()

    cy.procedure('verify that the amount of item in cart is 0')
    cy.contains('.shopping_cart_badge', '0', { matchCase: false }).should('be.visible')
  })
})