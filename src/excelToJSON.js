const excelToJson = require('convert-excel-to-json');
const filesPath = ['./excel_files/excel.xlsx']


for (let n = 0; n < filesPath.length; n++) {

    const result = excelToJson({
        sourceFile: filesPath[0],
        header: {
            // Is the number of rows that will be skipped and will not be present at our result object. Counting from top to bottom
            rows: 2
        }
    });


    let ogrn, inn, fullNameRus, fullNameEng, shortNameRus, shortNameEng, typeOrg, bossFullName,
        bossFullNameEng, bossRoleRus, bossRoleEng, infoAboutOrgRus, infoAboutOrgEng, keyWords,
        OKSO, GRNTI, RNF, VAK, adressRus, adressEng, telephone, webSite, email, VK, TG, youtube, rutube

    for (let i = 0; i < result['Основная информация'].length; i++) {


        switch (result['Основная информация'][i].A) {
            case 'ОГРН':
                ogrn = result['Основная информация'][i]

                console.log(ogrn)
                break
            case 'ИНН':
                inn = result['Основная информация'][i]
                console.log(inn)
                break
            case 'Полное наименование (на русском языке)':
                fullNameRus = result['Основная информация'][i]
                const newStr = fullNameRus.B.replace(/"/g, '');
                fullNameRus.B = newStr
                console.log(fullNameRus)
                break
            case 'Полное наименование (на английском языке)':
                fullNameEng = result['Основная информация'][i]
                console.log(fullNameEng)
                break
            case 'Краткое наименование (на русском языке)':
                shortNameRus = result['Основная информация'][i]
                console.log(shortNameRus)
                break
            case 'Краткое наименование (на английском языке)':
                shortNameEng = result['Основная информация'][i]
                console.log(shortNameEng)
                break
            case 'Тип организации (Образовательная организация высшего образования, Профессиональная образовательная организация, Научная организация, Некоммерческая организация, Организация дополнительного образования, иное - указать)':
                typeOrg = result['Основная информация'][i]
                console.log(typeOrg)
                break
            case 'ФИО руководителя (на русском языке)':
                bossFullName = result['Основная информация'][i]
                console.log(bossFullName)
                break
            case 'ФИО руководителя (на английском языке)':
                bossFullNameEng = result['Основная информация'][i]
                console.log(bossFullNameEng)
                break
            case 'Должность руководителя (на русском языке)':
                bossRoleRus = result['Основная информация'][i]
                console.log(bossRoleRus)
                break

            case 'Должность руководителя (на английском языке)':
                bossRoleEng = result['Основная информация'][i]
                console.log(bossRoleEng)
                break

            case 'Общая информация об организации (на русском языке)':
                infoAboutOrgRus = result['Основная информация'][i]
                console.log(infoAboutOrgRus)
                break

            case 'Общая информация об организации (на английском языке)':
                infoAboutOrgEng = result['Основная информация'][i]
                console.log(infoAboutOrgEng)
                break

            case 'Ключевые слова, характеризующие образовательную и научную деятельность организации (Информатика, Математика, Медицина и т.д. на усмотрение организации)':
                keyWords = result['Основная информация'][i]
                console.log(keyWords)
                break

            case 'Области образования и укрупненные группы по ОКСО (коды и наименования)':
                OKSO = result['Основная информация'][i]
                console.log(OKSO)
                break

            case 'Научные области по ГРНТИ (коды и наименования)':
                GRNTI = result['Основная информация'][i]
                console.log(GRNTI)
                break

            case 'Области науки по РНФ (коды и наименования)':
                RNF = result['Основная информация'][i]
                console.log(RNF)
                break

            case 'Области наук и группы специальностей по ВАК (коды и наименования)':
                VAK = result['Основная информация'][i]
                console.log(VAK)
                break

            case 'Адрес (на русском языке)':
                adressRus = result['Основная информация'][i]
                console.log(adressRus)
                break

            case 'Адрес (на английском языке)':
                adressEng = result['Основная информация'][i]
                console.log(adressEng)
                break

            case 'Телефон':
                telephone = result['Основная информация'][i]
                console.log(telephone)
                break

            case 'Сайт (адрес в сети Интернет)':
                webSite = result['Основная информация'][i]
                console.log(webSite)
                break

            case 'Адрес электронной почты':
                email = result['Основная информация'][i]
                console.log(email)
                break

            case 'Адрес группы ВКонтакте (ссылка)':
                VK = result['Основная информация'][i]
                console.log(VK)
                break

            case 'Адрес канала Telegram (ссылка)':
                TG = result['Основная информация'][i]
                console.log(TG)
                break

            case 'Youtube (ссылка на презентационный видеоролик)':
                youtube = result['Основная информация'][i]
                console.log(youtube)
                break

            case 'Rutube (ссылка на презентационный видеоролик)\n':
                rutube = result['Основная информация'][i]
                console.log(rutube)
                break
            default:
                break
        }
    }


    let filePather = filesPath[n]
    let nameParse = './excel_files/'
    let fileName = filePather.replace(nameParse, '')
    let currentFileNameJSON = fileName.replace('.xlsx', '.json')
    console.log(currentFileNameJSON)

    const fs = require('fs');


    let fileContent = JSON.stringify([ogrn, inn, fullNameRus, fullNameEng, shortNameRus, shortNameEng, typeOrg, bossFullName,
        bossFullNameEng, bossRoleRus, bossRoleEng, infoAboutOrgRus, infoAboutOrgEng, keyWords,
        OKSO, GRNTI, RNF, VAK, adressRus, adressEng, telephone, webSite, email, VK, TG, youtube, rutube])


    let filepath = currentFileNameJSON;

    fs.writeFile(filepath, fileContent, (err) => {
        if (err) throw err;

        console.log("Успешно");
    });


}