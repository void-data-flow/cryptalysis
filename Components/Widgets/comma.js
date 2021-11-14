function commaSepertor(number) {
  try {
    const newNumber = number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return newNumber;
  } catch (error) {
    throw new Error(error);
  }
}

export { commaSepertor };
