
/*
result from countriesDropDown
const resultToSendToAPI = {
    userId: flagUserObject.id,
    actualCountryId: randomFlagObject.id,
    userChoiceCountryId: result.id,
    correct: result.correct
  }

  randomFlagObject from FlagGenerator
  "id": 3,
  "name": "Algeria",
  "flag": "https://flagcdn.com/dz.svg",
  "capital": "Algiers",
  "language": "Arabic",
  "subregion": "Northern Africa"
*/

export const Results =({ userChoiceState, flagShownState }) => {
    if (userChoiceState.actualCountryId === flagShownState) {
        return `Yay you guessed correctly!`
    } else {
        return `Sorry, your answer was not correct.`
    }
}