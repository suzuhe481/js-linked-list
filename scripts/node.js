// Node factory.
// Takes in a value.
// value = value OR null (default)
// next = null
const node = (value = null, next = null) => {
  return { value: value, next: next };
};

export { node };
