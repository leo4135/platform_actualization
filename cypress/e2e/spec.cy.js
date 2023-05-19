const mainObject = {
"main": [{"A":"ОГРН","B":"1027700162674"},{"A":"ИНН","B":"7719061340"},{"A":"Полное наименование (на русском языке)","B":"Санкт-Петербургский институт (филиал) федерального государственного бюджетного образовательного учреждения высшего образования Всероссийский государственный университет юстиции (РПА Минюста России)"},{"A":"Полное наименование (на английском языке)"},{"A":"Краткое наименование (на русском языке)","B":"Санкт-Петербургский институт (филиал) ВГУЮ (РПА Минюста России)"},{"A":"Краткое наименование (на английском языке)"},{"A":"Тип организации (Образовательная организация высшего образования, Профессиональная образовательная организация, Научная организация, Некоммерческая организация, Организация дополнительного образования, иное - указать)","B":"Образовательная организация высшего образования"},{"A":"ФИО руководителя (на русском языке)","B":"Рыбин Данил Вячеславович"},{"A":"ФИО руководителя (на английском языке)","B":"Danil Vyacheslavovich Rybin"},{"A":"Должность руководителя (на русском языке)","B":"директор"},{"A":"Должность руководителя (на английском языке)","B":"Director"},{"A":"Общая информация об организации (на русском языке)","B":"Санкт-Петербургский институт (филиал) федерального государственного бюджетного образовательного учреждения высшего образования «Всероссийский государственный университет юстиции (РПА Минюста России)» был создан 4 августа 1997 года как Северо-Западный филиал Российской правовой академии Министерства юстиции Российской Федерации, современное название получил в 2015 году. Филиал является специализированным юридическим учебным заведением Министерства юстиции Российской Федерации, реализует только программы юридического образования: среднего профессионального образования (40.02.01 Право и организация социального обеспечения, 40.02.02 Правоохранительная деятельность, 40.02.03 Право и судебное администрирование), высшего образования — бакалавриата (40.03.01 Юриспруденция), высшего образования — специалитета (40.05.01 Правовое обеспечение национальной безопасности, 40.05.03 Судебная экспертиза, 40.05.04 Судебная и прокурорская деятельность), высшего образования — магистратуры (40.04.01 Юриспруденция). Филиал проводит фундаментальные и прикладные исследования, осуществляет международное сотрудничество с ведущими юридическими университетами Средней Азии и Китая, проводит международные научные конференции, вовлекает в научную и проектную деятельность широкий круг студентов."},{"A":"Общая информация об организации (на английском языке)","B":"Saint Petersburg Institute (Branch) of the All-Russian State University of Justice was established on August 4, 1997 as the North-Western Branch of the Russian Law Academy of the Ministry of Justice of the Russian Federation. It received its modern name in 2015. The branch is a specialized legal educational institution of the Ministry of Justice of the Russian Federation, it implements only legal education programs including secondary professional education (40.02.01 Law and organization of social security, 40.02.02 Law enforcement, 40.02.03 Law and judicial administration), higher education — bachelor's degree (40.03.01 Jurisprudence), higher education — specialty (40.05.01 Legal support of national security, 40.05.03 Judicial examination, 40.05.04 Judicial and prosecutorial activities), higher education — magistracy (40.04.01 Jurisprudence). The branch conducts fundamental and applied research, carries out international cooperation with leading law universities in Central Asia and China, holds international scientific conferences, and involves a wide range of students in scientific and project activities."},{"A":"Ключевые слова, характеризующие образовательную и научную деятельность организации (Информатика, Математика, Медицина и т.д. на усмотрение организации)","B":"Юриспруденция"},{"A":"Области образования и укрупненные группы по ОКСО (коды и наименования)","B":"5.40.00.00 Юриспруденция"},{"A":"Научные области по ГРНТИ (коды и наименования)","B":"10.00.00 Государство и право. Юридические науки"},{"A":"Области науки по РНФ (коды и наименования)","B":"08-350 Юридические науки"},{"A":"Области наук и группы специальностей по ВАК (коды и наименования)","B":"5.1 Право"},{"A":"Адрес (на русском языке)","B":"Россия, 199178, Санкт-Петербург, 10-я линия В.О., д. 19, лит. А"},{"A":"Адрес (на английском языке)","B":"10th line of Vasilievskiy isle, 19, bldg. A, Saint Petersburg, 199178, Russia"},{"A":"Телефон","B":"+7 (812) 3284517"},{"A":"Сайт (адрес в сети Интернет)","B":"https://spb.rpa-mu.ru/"},{"A":"Адрес электронной почты","B":"spbf@rpa-mjust.ru"},{"A":"Адрес группы ВКонтакте (ссылка)","B":"https://vk.com/arsuj_spb"},{"A":"Адрес канала Telegram (ссылка)"},{"A":"Youtube (ссылка на презентационный видеоролик)","B":"https://www.youtube.com/watch?v=ubZBvaSPf8E"},null]
}


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
    cy.wait(2000)
    cy.get('.anticon-down').click()
    cy.get('#search')
        .type(mainObject.main[2].B)
    cy.get('.ant-btn-primary').eq(1).click()
    cy.get('.ant-table-cell').eq(6).click()
    cy.wait(2000)
    cy.get('.ant-btn-primary').click()
    cy.wait(2000)
    cy.get('#ogrn').then(($inp) => {
      if ($inp.text().includes(mainObject.main[0].B)) {
        return
      } else {
        cy.get('#ogrn').clear().type(mainObject.main[0].B)
      }
    })
    cy.get('.ant-space-item').eq(11).click()

  })

})