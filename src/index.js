const valueMinInput = document.querySelector("#valueMin")
const valueMaxInput = document.querySelector("#valueMax")
const buttonCount = document.querySelector("#contar")
const interfaceElement = document.querySelector("#multiplos")

function validationValue(valueMinInputValue, valueMaxInputValue) {
  if (valueMaxInputValue < valueMinInputValue) {
    valueMaxInput.value = 0
    valueMinInput.value = 0
    return alert("valor mínimo e menor que valor máximo")
  }
}

function isMultiplyPorThreeOrTwo(valueOne, valueTwo) {
  const values = []
  const multiplyForTwoAndThree = []

  for (let i = 1; i <= valueTwo; i++) {
    if (i > valueOne) {
      values.push(i)
    }
  }

  function multiplyPorTwo(number) {
    if (number % 2 !== 0) {
      return false
    }
    return true
  }

  function multiplyPorThree(number) {
    if (number % 3 !== 0) {
      return false
    }
    return true
  }

  for (let i in values) {
    if (multiplyPorThree(values[i]) || multiplyPorTwo(values[i])) {
      multiplyForTwoAndThree.push(values[i])
    }
  }

  return multiplyForTwoAndThree
}

buttonCount.onclick = (ev) => {
  ev.preventDefault()
  const valueMinInputValue = Number(valueMinInput.value)
  const valueMaxInputValue = Number(valueMaxInput.value)
  validationValue(valueMinInputValue, valueMaxInputValue)
  const arrayDatas = isMultiplyPorThreeOrTwo(
    valueMinInputValue,
    valueMaxInputValue
  )
  for (let i in arrayDatas) {
    const pElement = document.createElement("p")
    pElement.innerHTML = arrayDatas[i]
    interfaceElement.appendChild(pElement)
  }
}
