

import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true,
    include: ['domain/tests/**/*.test.ts'],
  },
});
