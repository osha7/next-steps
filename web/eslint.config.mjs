import pluginJs from '@eslint/js';
import pluginReact from 'eslint-plugin-react';

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ['**/*.{js,mjs,cjs,jsx}'],
    languageOptions: {
      globals: {
        AudioWorkletGlobalScope: false, // Define global variable if needed
        document: 'readonly', // Browser global
        window: 'readonly', // Browser global
        console: 'readonly', // Node.js global
        fetch: 'readonly', // Define fetch globally if needed
        test: 'readonly', // Add Jest test global
        expect: 'readonly', // Add Jest expect global
        React: 'readonly' // Add React global (for JSX scope)
      },
      parserOptions: {
        ecmaVersion: 'latest', // Use latest ECMAScript version
        sourceType: 'module', // Use module system (ES modules)
        ecmaFeatures: {
          jsx: true // Enable JSX syntax parsing
        }
      }
    },
    settings: {
      react: {
        version: 'detect' // Automatically detect React version
      }
    }
  },
  pluginJs.configs.recommended, // Apply ESLint's recommended JS config
  pluginReact.configs.flat.recommended // Apply React's recommended config for flat config system
];
