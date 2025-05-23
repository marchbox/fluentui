const restrictedGlobals = require('./configs/restricted-globals');

function shouldRegisterInternal() {
  try {
    const hasNxEslintPlugin = require.resolve('@nx/eslint-plugin');
    return Boolean(hasNxEslintPlugin);
  } catch {
    return false;
  }
}

const shouldRegister = shouldRegisterInternal();

/**
 * @internal
 *
 * this will be removed after https://github.com/microsoft/fluentui/issues/30332
 *
 * expands this with rulesets/overrides that are necessary for specific configs
 */
const __internal = {
  /**
   * `@nx/eslint-plugin` is necessary in order to register custom lint rules that live within tools/eslint-rules
   */
  plugins: shouldRegister ? ['@nx'] : [],
  // extend this object with your rule overrides
  overrides: {
    react: shouldRegister
      ? {
          files: ['**/src/**/*.{ts,tsx}'],
          excludedFiles: ['*.{test,spec,cy,stories}.{ts,tsx}'],
          rules: {
            '@nx/workspace-consistent-callback-type': 'error',
            '@nx/workspace-no-restricted-globals': restrictedGlobals.react,
            '@nx/workspace-no-missing-jsx-pragma': ['error', { runtime: 'automatic' }],
          },
        }
      : null,
  },
};

exports.__internal = __internal;
