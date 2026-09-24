import { standard_user } from "../support/credentials"

describe('Object 1', () => {
  var pricesBeforeFilterList: number[] = []
  const user = standard_user

  const getPrices = () =>
    cy.get('.inventory_item_price').then($prices =>
      [...$prices].map(el => Number(el.innerText.replace('$', '').trim()))
    )

  it('should sort items from cheapest to most expensive when filter is selected', () => {
    cy.docTest({
      description: 'verifies that price filter can successfully filters from cheapest to most expensive',
      testData: `username: ${user.email}, password: ${user.password}`
    })

    cy.login(user.email, user.password)

    cy.precondition(`user signed in as standard_user`)
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
        pricesBeforeFilterList = [...pricesBefore].sort((a, b) => a - b)
        expect(pricesAfter).to.deep.eq(pricesBefore)
      })
    })
  })

  it('should successfully add and remove items from cart when user click the Add to cart and remove buttons', () => {
    cy.docTest({
      description: 'verifies that the number on the cart item accurately displays cart count',
      testData: `username: ${user.email}, password: ${user.password}`
    })

    cy.login(user.email, user.password)
    cy.precondition('User signed in as standard_user')

    cy.procedure('add sauce labs backpack to cart ')
    cy.contains('.inventory_item_name', 'Sauce Labs Backpack', { matchCase: false }).click()
    cy.get('#add-to-cart').click()

    cy.procedure('click the back to product button')
    cy.get('#back-to-products').click()

    cy.procedure('add Sauce Labs Onesie to cart')
    cy.contains('.inventory_item_name', 'Sauce Labs Onesie', { matchCase: false }).click()
    cy.get('#add-to-cart').click()

    cy.procedure('click the remove button')
    cy.contains('button', 'remove', { matchCase: false }).click()

    cy.procedure('check to make sure the cart contains only one item')
    cy.contains('.shopping_cart_badge', '1', { matchCase: false }).should('be.visible') // checks to make sure a cart count item is visible and contains a count of 1
  })
})