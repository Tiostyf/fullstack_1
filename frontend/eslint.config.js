// import js from '@eslint/js'
// import globals from 'globals'
// import reactHooks from 'eslint-plugin-react-hooks'
// import reactRefresh from 'eslint-plugin-react-refresh'
// import { defineConfig, globalIgnores } from 'eslint/config'

// export default defineConfig([
//   globalIgnores(['dist']),
//   {
//     files: ['**/*.{js,jsx}'],
//     extends: [
//       js.configs.recommended,
//       reactHooks.configs['recommended-latest'],
//       reactRefresh.configs.vite,
//     ],
//     languageOptions: {
//       ecmaVersion: 2020,
//       globals: globals.browser,
//       parserOptions: {
//         ecmaVersion: 'latest',
//         ecmaFeatures: { jsx: true },
//         sourceType: 'module',
//       },
//     },
//     rules: {
//       'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
//       "react/prop-types":"off",
//     },
//   },
// ])







































import js from '@eslint/js';
import globals from 'globals';
import react from 'eslint-plugin-react'; // ✅ Import react plugin
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import { defineConfig, globalIgnores } from 'eslint/config';

export default defineConfig([
  globalIgnores(['dist']), // ✅ Ignore build output

  {
    files: ['**/*.{js,jsx}'],
    plugins: {
      react, // ✅ Register the react plugin
    },
    extends: [
      js.configs.recommended,
      react.configs.recommended, // ✅ Extend react rules
      reactHooks.configs['recommended-latest'],
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    rules: {
      'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
      'react/prop-types': 'off', // ✅ Now valid since react plugin is registered
    },
  },
]);
