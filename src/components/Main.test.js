import { initializeTimes, updateTimes } from './Main';

test('initializeTimes returns the correct expected value', () => {
  const expectedTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
  window.fetchAPI = jest.fn(() => expectedTimes);

  const result = initializeTimes();
  expect(result).toEqual(expectedTimes);
  expect(window.fetchAPI).toHaveBeenCalled();
});

test('updateTimes returns the same value that is provided in the state', () => {
  const expectedTimes = ['17:00', '17:30', '18:00', '18:30', '19:00', '22:30'];
  window.fetchAPI = jest.fn(() => expectedTimes);

  const state = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
  const action = { type: 'UPDATE_TIMES', payload: '2023-01-01' };

  const result = updateTimes(state, action);
  expect(result).toEqual(expectedTimes);
  expect(window.fetchAPI).toHaveBeenCalledWith(new Date(action.payload));
});
