describe('Проверка сайта https://pokemonbattle.ru/', function() {



    it('Автотест на покупку нового аватара для своего тренера', function () {

        cy.visit('https://pokemonbattle.ru/'); // Заходим на сайт pokemonbattle.ru

        cy.get(':nth-child(1) > .auth__input').type('USER_LOGIN'); // Находим поле для ввода логина и вводим валидную почту
        cy.get('#password').type('USER_PASSWORD'); // Находим поле для ввода пароля и вводим валидный пароль
        cy.get('.auth__button').click(); // Находим кнопку "Войти" и нажимаем её

        cy.get('.header__container > .header__id').click(); // Находим кнопку для перехода на страницу нашего тренера и нажимаем её

        cy.get('[href="/shop"]').click(); // Находим кнопку "Смена аватара" и нажимаем её

        cy.get('.available > button').first().click(); // Находим кнопку "Купить" у первого доступного аватара и нажимаем её

        cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').type('4003600000000014'); // Находим поле для ввода номера карты и вводим валидный номер карты
        cy.get(':nth-child(1) > .pay_base-input-v2').type('11/25'); // Находим поле для ввода срока действия карты и вводим валидный срок действия
        cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').type('125'); // Находим поле для ввода CVC кода карты и вводим валидный CVC код
        cy.get('.pay__input-box-last-of > .pay_base-input-v2').type('Ащьф Лштшфум'); // Находим поле для ввода данных владельца карты и вводим имя и фамилию
        cy.get('.pay-btn').click(); // Находим кнопку "Оплатить" и нажимаем её

        cy.get('#cardnumber').type('56456'); // Находим поле для ввода кода из пуша или СМС и вводим его
        cy.get('.payment__submit-button').click(); // Находим кнопку "Отправить" и нажимаем её

        cy.get('.payment__font-for-success').should('be.visible').contains('Покупка прошла успешно'); // Проверяем, что покупка прошла успешно и то, что поле с сообщением видимо для пользователя
    })
})