// Global
const defaultTheme = require('tailwindcss/defaultTheme');

// Local
import { mergeConfigs } from '../src/lib/theme-utils';

import TOKENS from '../theme-config';

const MERGE_GLOBAL_AND_BRAND_TOKENS = mergeConfigs(TOKENS.global, TOKENS.brands.Aspirus);
const MERGEDTOKENS = mergeConfigs(MERGE_GLOBAL_AND_BRAND_TOKENS, TOKENS.typography.Aspirus);

const theme = {
  name: 'Aspirus',
  extend: {
    ...MERGEDTOKENS,
  },
};

export default theme;
