import '@testing-library/jest-dom';
import { TextEncoder, TextDecoder } from 'util';

Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation(query => ({
    matches: false,         // bisa disesuaikan jika butuh match tertentu
    media: query,
    onchange: null,
    addListener: jest.fn(), // deprecated tapi masih ada di beberapa libs
    removeListener: jest.fn(),
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

global.TextEncoder = TextEncoder as typeof global.TextEncoder;
global.TextDecoder = TextDecoder as typeof global.TextDecoder;
