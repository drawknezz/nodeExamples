Feature: 100 green bottles
  Scenario: Should fall from the wall
    Given 100 green bottles are standing on the wall
    When one green bottle accidentally falls
    Then there are 99 green bottles standing on the wall