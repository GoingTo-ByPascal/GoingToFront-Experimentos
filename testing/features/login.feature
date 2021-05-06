Feature: Iniciar Sesion
Scenario: Usuario y contraseña correctos
    Given un usuario que digitó su usuario y contraseña correctamente
    When da click sobre el botón "Ingresar"
    Then se le mostrará la pantalla inicial de lugares atrayentes para el usuario

Scenario: Usuario y contraseñas incorectas
    Given un usuario que digitó su usuario y contraseña incorrectamente
    When da click sobre el botón "Ingresar"
    Then se le muestra un mensaje emergente
