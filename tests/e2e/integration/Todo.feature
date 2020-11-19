Feature: Todo

  Todo App

  Scenario: Create Todos
    Given I open the home page
    When I create a "Milk" Todo
    And I create a "Butter" Todo
    And I create a "Bread" Todo
    And I create a "Cheese" Todo
    Then "4" todos are in the list
    
  Scenario: complete a Todo
    When a todo is clicked
    Then the todo is done
    
  Scenario: delete a completed Todo
    When a delete button is clicked
    Then "3" todos are in the list