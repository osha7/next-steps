// I don't think this file is actually being used I think the eslint.config.mjs is setting the rules, etc

export default [
  {
    languageOptions: {
      globals: {
        document: 'readonly', // Define browser globals
        window: 'readonly', // Define browser globals
        console: 'readonly', // Define console as a global (from Node.js)
        fetch: 'readonly', // Define fetch for API calls
        jest: 'readonly' // Define Jest globals
      },
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true // Enable JSX parsing
        }
      }
    },
    settings: {
      react: {
        version: 'detect' // Automatically detect the React version
      }
    },
    rules: {
      'react/react-in-jsx-scope': 'off' // Disable the React import requirement for JSX
    },
    extends: [
      'eslint:recommended',
      'plugin:react/recommended',
      'plugin:prettier/recommended'
    ]
  }
];
