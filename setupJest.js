import '@testing-library/jest-dom'
jest.mock('expo-router', () => ({
  useNavigation: () => ({
    navigate: jest.fn(),
    dispatch: jest.fn(),
  }),
}))
jest.mock('@react-native-async-storage/async-storage', () => ({
  setItem: () => ({
    navigate: jest.fn(),
  }),
  getItem: () => ({
    navigate: jest.fn(),
  }),
}))
