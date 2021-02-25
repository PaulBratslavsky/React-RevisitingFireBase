export function hasError(items, setState) {
  const errors = [];

  for (const [key, value] of Object.entries(items)) {
    if (value.length === 0) errors.push({key, message: `${key} field cannot be blank.`})
   }

  setState(errors)

  return errors.length > 0 ? true : false
}