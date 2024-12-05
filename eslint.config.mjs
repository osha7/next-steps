import { defineConfig } from 'eslint-define-config';
import reactPlugin from 'eslint-plugin-react';
import prettierPlugin from 'eslint-plugin-prettier';

export default defineConfig([
  {
    plugins: {
      react: reactPlugin,
      prettier: prettierPlugin
    },

    languageOptions: {
      parserOptions: {
        ecmaVersion: 12,
        sourceType: 'module'
      },
      globals: {
        node: true, // for the Node.js backend
        browser: true // for the React frontend
      }
    },

    rules: {
      // ESLint recommended rules
      'no-console': 'off', // Example: warn on console usage
      'no-unused-vars': 'warn', // Example: warn on unused variables
      eqeqeq: 'error', // Require strict equality operators

      // React plugin recommended rules
      'react/react-in-jsx-scope': 'off', // React 17+ doesn't need this
      'react/prop-types': 'off', // Disable prop-types check for now

      // Prettier plugin rules
      'prettier/prettier': 'error' // Enforce Prettier formatting as ESLint errors
    }
  },
  {
    files: ['*.js', '*.ts'], // Backend files configuration
    rules: {
      // Backend-specific overrides can go here
      'no-console': 'warn',
      'no-unused-vars': 'warn'
    }
  },
  {
    files: ['src/frontend/**/*'], // Frontend files configuration
    globals: {
      browser: true // Specific frontend globals
    },
    rules: {
      // Frontend-specific overrides can go here
      'react/prop-types': 'warn' // Enable prop-types warnings for frontend
    }
  }
]);
