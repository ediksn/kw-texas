export const addToArray = (array: any[], value: any) => {
  const valueNew = [...array]
  valueNew.push(value)
  return valueNew
}

export const removeFromArray = (array: any[], index: number) => {
  const newValues = [...array]
  newValues.splice(index, 1)
  return newValues
}

export const replaceValueFromIndex = (array: any[], index: number, value: any) => {
  const valueNew = [...array]
  valueNew[index] = value
  return valueNew
}
