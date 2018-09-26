export const numbers = [1, 2, 3, 4, 5];
export const words = ['one', 'two', 'three', 'four', 'five'];
export const roman = ['I', 'II', 'III', 'IV', 'V'];

export const subscriber = {
  next: value => console.log(value),
  complete: () => console.log('Completed!'),
  error: err => console.log(err)
};
