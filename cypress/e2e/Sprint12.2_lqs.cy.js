describe('Проверка сайта login.qa.studio', function() {



    it('Проверка на позитивный кейс авторизации', function () {

        cy.visit('login.qa.studio'); // Заходим на сайт login.qa.studio

        cy.get('#mail').type('german@dolnikov.ru'); // Находим поле для ввода логина и вводим валидную почту
        cy.get('#pass').type('iLoveqastudio1'); // Находим поле для ввода пароля и вводим валидный пароль
        cy.get('#loginButton').click(); // Находим кнопку "Войти" и нажимаем её

        cy.get('#messageHeader').should('be.visible').contains('Авторизация прошла успешно'); // Проверяем, что произошла успешная авторизация и то, что поле с сообщением видимо для пользователя
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Проверяем, что на форме с сообщением присутствует "крестик"
    })



    it('Проверка логики восстановления пароля', function () {

        cy.visit('login.qa.studio'); // Заходим на сайт login.qa.studio

        cy.get('#forgotEmailButton').click(); // Нажимаем на кнопку "Забыли пароль?"

        cy.get('#mailForgot').type('mail@google.ru'); // Находим поле для ввода логина и вводим почту для которой нужно восстановить пароль
        cy.get('#restoreEmailButton').click(); // Находим кнопку "Отправить код" и нажимаем её

        cy.get('#messageHeader').should('be.visible').contains('Успешно отправили пароль на e-mail'); // Проверяем, что произошла успешная отправка нового пароля и что поле с сообщением видимо для пользователя
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Проверяем, что на форме с сообщением присутствует "крестик"
    })



    it('Проверка на негативный кейс авторизации (не верный пароль)', function () {

        cy.visit('login.qa.studio'); // Заходим на сайт login.qa.studio

        cy.get('#mail').type('german@dolnikov.ru'); // Находим поле для ввода логина и вводим валидную почту
        cy.get('#pass').type('iLoveqastudio'); // Находим поле для ввода пароля и вводим невалидный пароль
        cy.get('#loginButton').click(); // Находим кнопку "Войти" и нажимаем её

        cy.get('#messageHeader').should('be.visible').contains('Такого логина или пароля нет'); // Проверяем, что успешная авторизация не произошла и то, что поле с сообщением видимо для пользователя
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Проверяем, что на форме с сообщением присутствует "крестик"
    })



    it('Проверка на негативный кейс авторизации (не верный логин)', function () {

        cy.visit('login.qa.studio'); // Заходим на сайт login.qa.studio

        cy.get('#mail').type('german@dolikov.ru'); // Находим поле для ввода логина и вводим невалидную почту
        cy.get('#pass').type('iLoveqastudio1'); // Находим поле для ввода пароля и вводим валидный пароль
        cy.get('#loginButton').click(); // Находим кнопку "Войти" и нажимаем её

        cy.get('#messageHeader').should('be.visible').contains('Такого логина или пароля нет'); // Проверяем, что успешная авторизация не произошла и то, что поле с сообщением видимо для пользователя
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Проверяем, что на форме с сообщением присутствует "крестик"
    })



    it('Проверка на негативный кейс валидации', function () {

        cy.visit('login.qa.studio'); // Заходим на сайт login.qa.studio

        cy.get('#mail').type('germandolnikov.ru'); // Находим поле для ввода логина и вводим почту без @
        cy.get('#pass').type('iLoveqastudio1'); // Находим поле для ввода пароля и вводим валидный пароль
        cy.get('#loginButton').click(); // Находим кнопку "Войти" и нажимаем её

        cy.get('#messageHeader').should('be.visible').contains('Нужно исправить проблему валидации'); // Проверяем, что успешная авторизация не произошла и то, что поле с сообщением видимо для пользователя
    })



    it('Проверка на приведение к строчным буквам в логине', function () {

        cy.visit('login.qa.studio'); // Заходим на сайт login.qa.studio

        cy.get('#mail').type('GerMan@Dolnikov.ru'); // Находим поле для ввода логина и вводим почту GerMan@Dolnikov.ru
        cy.get('#pass').type('iLoveqastudio1'); // Находим поле для ввода пароля и вводим валидный пароль
        cy.get('#loginButton').click(); // Находим кнопку "Войти" и нажимаем её

        cy.get('#messageHeader').should('be.visible').contains('Авторизация прошла успешно'); // Проверяем, что произошла успешная авторизация и то, что поле с сообщением видимо для пользователя
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Проверяем, что на форме с сообщением присутствует "крестик"
    })
})