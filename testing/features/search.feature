Feature: Buscar
Scenario: El usuario busca tips de un lugar al que está viajando
    Given El usuario escoge un lugar
    When Hace click en el lugar escogido
    Then El sistema despliega los tips del lugar escogido


Scenario: El usuario busca promociones de un lugar al que está viajando
    Given El usuario escoge un lugar
    When Hace click en el lugar escogido
    Then El sistema despliega las promociones del lugar escogido

Scenario: El usuario busca reviews de un lugar al que está viajando
    Given El usuario escoge un lugar
    When Hace click en el lugar escogido
    Then El sistema despliega las reviews del lugar escogido