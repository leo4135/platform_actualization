const sometext = 'Минюста'

describe('actualization', () => {
  it('login', () => {
    cy.visit('https://researchinspb.ru/auth/sign-in/')
    cy.get('#username').type('admin@pnvsh.local')
    cy.get('#password').type('Dahgh1naixi1')
    cy.get('.ant-btn-primary').click()
    cy.wait(3000)
    cy.get('.anticon-menu').click()
    cy.get('.ant-drawer-body')
        .find('.ant-avatar').click()
        .get('.ant-dropdown-menu-title-content')
        .find('a')
        .should('contain.text', 'Личный кабинет').click()
    cy.wait(3000)
    cy.get('.anticon-menu').click()
    cy.get('.ant-drawer-body')
        .find('.ant-menu-title-content')
        .find('a')
        .should('include.text', 'Организации').eq(1).click()
    cy.get('.anticon-down').click()
    cy.get('#search')
        .type(sometext)
    cy.get('.ant-btn-primary').eq(1).click()
    cy.get('.ant-table-cell').eq(6).click()
    cy.wait(2000)
    cy.get('.ant-btn-primary').click()

  })

})