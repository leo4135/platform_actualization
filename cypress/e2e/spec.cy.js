let massive = []
let OPTIONS = ['Научная организация', 'Некоммерческая организация', 'Образовательная организация высшего образования', 'Организация дополнительного образования', 'Профессиональная образовательная организация' ]
let counter = 0
let pathJSONFiles = ['./json_files/NIIRG.json']
let pathMEDIA = ['НИИРГ_Рамзаева']
let media = {
  lic: false,
  svid: false,
  logo: true,
  bg: false,
  photo: false,
  video: false
}

let isBeInPlatform = false

for (let n = 0; n < pathJSONFiles.length; n++) {


  let fetcher = fetch(`http://localhost:3000/${pathJSONFiles[n]}`)
      .then(res => res.json())
      .then((data) => {
        massive.push(data)
        for (let i = 0; i < OPTIONS.length; i++) {

          if (massive[0][6].B === OPTIONS[i]) {
            counter = i
          }
        }
      })

  describe('actualization', () => {
    it('login', () => {
      cy.wait(1000)
      cy.visit('https://researchinspb.ru/auth/sign-in/')
      cy.get('#username').type('admin@pnvsh.local', {delay: 0})
      cy.get('#password').type('Dahgh1naixi1', {delay: 0})
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
      cy.wait(2000)
      cy.get('.anticon-down').click()
      cy.wait(2000)
      cy.get('#search')
          .wait(1000)
          .type(massive[0][2].B, {delay: 0})

      // cy.contains('Применить').click()
          .wait(2000)
      // cy.contains('a', massive[0][2].B).click()

      cy.get('a').then(($a) => {

        if ($a.text().includes(massive[0][2].B)) {
          cy.contains('a', massive[0][2].B).click()
          isBeInPlatform = true
              cy.wait(1500)
          cy.get('.ant-btn-primary').should('have.text', 'Редактировать').click()
        } else {
          // nope not here
          cy.get('.ant-btn-primary').should('have.text', 'Создать').click()
        }
      })


          .wait(3000)

      cy.get('#ogrn').then(($inp) => {
        if ($inp.text().includes(massive[0][0].B)) {
          return
        } else {
          cy.get('#ogrn').clear({timeout: 20000}).type(massive[0][0].B, {delay: 0})
        }
      })
      cy.get('#inn').then(($inp) => {
        if ($inp.text().includes(massive[0][1].B)) {
          return
        } else {
          cy.get('#inn').clear({timeout: 20000}).type(massive[0][1].B, {delay: 0})
        }
      })
      cy.get('#fullTitle').then(($inp) => {
        if (massive[0][2].B) {
          cy.get('#fullTitle').clear({timeout: 20000}).type(massive[0][2].B, {delay: 0})
        }
      })
      cy.get('#fullTitleEng').then(($inp) => {
        if (massive[0][3].B) {
          cy.get('#fullTitleEng').clear({timeout: 20000}).type(massive[0][3].B, {delay: 0})
        }
      })
      cy.get('#shortTitle').then(($inp) => {
        if (massive[0][4].B) {
          cy.get('#shortTitle').clear({timeout: 20000}).type(massive[0][4].B, {delay: 0})
        }
      })

      cy.get('#shortTitleEng').then(($inp) => {
        if (massive[0][5].B) {
          cy.get('#shortTitleEng').clear({timeout: 20000}).type(massive[0][5].B, {delay: 0})
        }
      })



       cy.get('span').then(($span) => {
         if ($span.hasClass('ant-select-selection-item')) {
           cy.get('#educationalType').click({force: true})
           cy.get('.ant-select-item-option-content')
               .eq(counter)
               .click()
         } else {
           cy.get('#educationalType').click({force: true})
           cy.get('.ant-select-item-option-content')
               .eq(counter)
               .click()
         }
       })





      cy.get('body').then(($body) => {
        if (media.lic) {
          if (isBeInPlatform) {
            cy.get('input[type=file]').eq(0).selectFile(`./organizations/${pathMEDIA}/Лицензия.pdf`, {
              force: true,
              action: 'drag-drop'
            })
                .wait(1500)
          } else {
            cy.get('input[type=file]').eq(0).selectFile(`./organizations/${pathMEDIA}/Лицензия.pdf`, {
              force: true,
              action: 'drag-drop'
            })
                .wait(1500)
          }

        }
      })

      cy.get('body').then(($body) => {
        if (media.svid) {
          if (isBeInPlatform) {
            cy.get('input[type=file]').eq(1).selectFile(`./organizations/${pathMEDIA}/Аккредитация.pdf`, {
              force: true,
              action: 'drag-drop'
            })
                .wait(1500)
          } else {
            cy.get('input[type=file]').eq(1).selectFile(`./organizations/${pathMEDIA}/Аккредитация.pdf`, {
              force: true,
              action: 'drag-drop'
            })
                .wait(1500)
          }

        }
      })


      cy.wait(2000)
      cy.get('.ant-btn-primary').then(($a) => {
        if ($a.text().includes('Далее')) {
          cy.contains('.ant-btn-primary', 'Далее').click()
        }
      })

      cy.wait(2000)
      cy.get('#supervisorFio').then(($inp) => {
        if (massive[0][7].B) {
          cy.get('#supervisorFio').clear({timeout: 20000}).type(massive[0][7].B, {delay: 0})
        }
      })
      cy.get('#supervisorFioEng').then(($inp) => {
        if (massive[0][8].B) {
          cy.get('#supervisorFioEng').clear({timeout: 20000}).type(massive[0][8].B, {delay: 0})
        }
      })

      cy.get('#supervisorJobTitle').then(($inp) => {
        if (massive[0][9].B) {
          cy.get('#supervisorJobTitle').clear({timeout: 20000}).type(massive[0][9].B, {delay: 0})
        }
      })

      cy.get('#supervisorJobTitleEng').then(($inp) => {
        if (massive[0][10].B) {
          cy.get('#supervisorJobTitleEng').clear({timeout: 20000}).type(massive[0][10].B, {delay: 0})
        }
      })
          .wait(1000)
      cy.get('button').then(($a) => {
        if ($a.text().includes('Далее')) {
          cy.contains('button', 'Далее').click({timeout: 20000})
        }
      })

      cy.get('#educationalAreas').then(() => {
        // парс ключевых слов

        if (massive[0][13].B) {
          let parseWords = massive[0][13].B.split('; ');
          for (let k = 0; k < parseWords.length; k++) {
            cy.get('#educationalAreas')
                .type(parseWords[k], {force: true, delay: 0})
                .wait(1500)
                .type('{enter}', {force: true})
                .clear({timeout: 20000})

          }
        }
      })



      // ВАКИ ГРНТИ И ТАК ДАЛЕЕ

      cy.get('#educationalOkso').then(($inp) => {
        if (massive[0][14].B) {
          cy.get('#educationalOkso')
              .type( massive[0][14].B, {force: true, delay: 0})
              .wait(1500)
              .type('{enter}', {force: true})
        }
      })


      cy.get('#educationalGrnti').then(() => {
        // парс ключевых слов

        if (massive[0][15].B) {
          let parseWords = massive[0][15].B.split('; ');
          for (let k = 0; k < parseWords.length; k++) {
            cy.get('#educationalGrnti')
                .type(parseWords[k], {force: true, delay: 0})
                .wait(1500)
                .type('{enter}', {force: true})
                .clear({timeout: 20000})

          }
        }
      })


      cy.get('#educationalRnf').then(() => {
        // парс ключевых слов

        if (massive[0][16].B) {
          let parseWords = massive[0][16].B.split('; ');
          for (let k = 0; k < parseWords.length; k++) {
            cy.get('#educationalRnf')
                .type(parseWords[k], {force: true, delay: 0})
                .wait(1500)
                .type('{enter}', {force: true})
                .clear({timeout: 20000})
          }
        }
      })

      cy.get('#educationalVak').then(() => {
        // парс ключевых слов

        if (massive[0][17].B) {
          let parseWords = massive[0][17].B.split('; ');
          for (let k = 0; k < parseWords.length; k++) {
            cy.get('#educationalVak')
                .type(parseWords[k], {force: true, delay: 0})
                .wait(1500)
                .type('{enter}', {force: true})
                .clear({timeout: 20000})
          }
          cy.get('#educationalVak')
              .wait(1000)
              .type('{esc}')
        }
      })

      cy.wait(1000)

      cy.get('button').then(($a) => {
        if ($a.text().includes('Далее')) {
          cy.contains('button', 'Далее').click()
        }
      })


      cy.get('#address').then(($inp) => {
        if (massive[0][18].B) {
          cy.get('#address').clear({timeout: 20000}).type(massive[0][18].B, {delay: 0})
        }
      })

      cy.get('#addressEng').then(($inp) => {
        if (massive[0][19].B) {
          cy.get('#addressEng').clear({timeout: 20000}).type(massive[0][19].B, {delay: 0})
        }
      })

      cy.get('#phone').then(($inp) => {
        if (massive[0][20].B) {
          cy.get('#phone').clear({timeout: 20000}).type(massive[0][20].B, {delay: 0})
        }
      })


      cy.get('#site').then(($inp) => {
        if (massive[0][21].B) {
          cy.get('#site').clear({timeout: 20000}).type(massive[0][21].B, {delay: 0})
        }
      })

      cy.get('#email').then(($inp) => {
        if (massive[0][22].B) {
          cy.get('#email').clear({timeout: 20000}).type(massive[0][22].B, {delay: 0})
        }
      })

      cy.get('#vk').then(($inp) => {
        if (massive[0][23].B) {
          cy.get('#vk').clear({timeout: 20000}).type(massive[0][23].B, {delay: 0})
        }
      })

      cy.get('#telegram').then(($inp) => {
        if (massive[0][24].B) {
          cy.get('#telegram').clear({timeout: 20000}).type(massive[0][24].B, {delay: 0})
        }
      })

          .wait(1000)
      cy.get('.ant-btn-primary').then(($a) => {
        if ($a.text().includes('Далее')) {
          cy.contains('.ant-btn-primary', 'Далее').click({timeout: 20000})
        }
      })



      cy.get('body').then(($body) => {
        if (media.logo) {
          if (isBeInPlatform) {
            cy.get('input[type=file]').eq(0).selectFile(`./organizations/${pathMEDIA}/logo.png`, {
              force: true,
              action: 'drag-drop'
            })
                .wait(2500)
            cy.contains('.ant-btn-primary', 'Добавить').click()
          } else {
            cy.get('input[type=file]').eq(2).selectFile(`./organizations/${pathMEDIA}/logo.png`, {
              force: true,
              action: 'drag-drop'
            })
                .wait(2500)
            cy.contains('.ant-btn-primary', 'Добавить').click()
          }

        }
      })

      cy.get('body').then(($body) => {
        if (media.bg) {
          if (isBeInPlatform) {
            cy.get('input[type=file]').eq(1).selectFile(`./organizations/${pathMEDIA}/bg.png`, {
              force: true,
              action: 'drag-drop'
            })
                .wait(1500)
            cy.contains('.ant-btn-primary', 'Добавить').click()
          } else {
            cy.get('input[type=file]').eq(3).selectFile(`./organizations/${pathMEDIA}/bg.jpg`, {
              force: true,
              action: 'drag-drop'
            })
                .wait(2500)
            cy.contains('.ant-btn-primary', 'Добавить').click()
          }

        }
      })

      cy.get('body').then(($body) => {
        if (media.photo) {
          if (isBeInPlatform) {
            cy.get('input[type=file]').eq(2).selectFile(`./organizations/${pathMEDIA}/logo.png`, {
              force: true,
              action: 'drag-drop'
            })
                .wait(1500)
            cy.contains('.ant-btn-primary', 'Добавить').click()
          } else {
            cy.get('input[type=file]').eq(4).selectFile(`./organizations/${pathMEDIA}/logo.png`, {
              force: true,
              action: 'drag-drop'
            })
                .wait(1500)
            cy.contains('.ant-btn-primary', 'Добавить').click()
          }

        }
      })

      cy.get('body').then(($body) => {
        if (media.video) {
          if (isBeInPlatform) {
            cy.get('input[type=file]').eq(3).selectFile(`./organizations/${pathMEDIA}/logo.png`, {
              force: true,
              action: 'drag-drop'
            })
                .wait(1500)
            cy.contains('.ant-btn-primary', 'Добавить').click()
          } else {
            cy.get('input[type=file]').eq(5).selectFile(`./organizations/${pathMEDIA}/logo.png`, {
              force: true,
              action: 'drag-drop'
            })
                .wait(1500)
            cy.contains('.ant-btn-primary', 'Добавить').click()
          }

        }
      })

      cy.wait(1000)

      cy.get('.ant-btn-primary').then(($a) => {
        if ($a.text().includes('Далее')) {
          cy.contains('.ant-btn-primary', 'Далее').click()
        }
      })

      cy.get('.ant-btn-primary').then(($a) => {
        if ($a.text().includes('Сохранить')) {
          cy.contains('.ant-btn-primary', 'Сохранить').click()
        }
      })

    })

  })

}