import { afterAll, afterEach, beforeAll } from 'vitest';
import { cleanup } from '@testing-library/react';

const server = setupServer(...handlers);

afterEach(() => {
  cleanup();
});
