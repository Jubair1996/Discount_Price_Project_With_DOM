function getInputFiledValueById(inputId) {
  const inputFieldId = document.getElementById(inputId);
  const inputFieldValueString = inputFieldId.value;
  const inputFieldValue = parseFloat(inputFieldValueString);
  inputFieldId.value = " ";
  return inputFieldValue;
}