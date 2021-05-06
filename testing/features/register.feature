Feature: Registrarse

Scenario: Cuando el usuario coloca sus datos correctamente
    Given El usuario rellena todos sus datos correctamente
    When El usuario envía el formulario para completar el perfil
    Then El sistema envía una notificación “completado correctamente”

Scenario: Cuando el usuario no rellena en su totalidad sus datos
    Given El usuario no llenó totalmente los datos requeridos por su perfil
    When El usuario envía el formulario para completar el perfil
    Then El sistema envía una notificación “completado de manera incorrecta, revise los campos”
