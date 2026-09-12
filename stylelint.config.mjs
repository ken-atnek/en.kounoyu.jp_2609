const stylelintConfig = {
  extends: ['stylelint-config-standard-scss'],
  ignoreFiles: ['node_modules/**', '.next/**', 'out/**'],
  rules: {
    'at-rule-empty-line-before': 'never',
    'declaration-empty-line-before': 'never',
    'rule-empty-line-before': 'never',
    'scss/double-slash-comment-empty-line-before': 'never',
  },
  overrides: [
    {
      files: ['**/*.module.scss'],
      rules: {
        'comment-empty-line-before': 'never',
        'selector-class-pattern': '^[a-z][a-zA-Z0-9]*$',
      },
    },
  ],
};

export default stylelintConfig;
