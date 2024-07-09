/** @type {import('next').NextConfig} */

import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'scss'), path.join(__dirname, 'components')],
    prependData: `
      @import "styles/variables.scss";
      @import "styles/variables.module.scss";
      @import "styles/mixins.scss";
      @import "styles/functions.scss";
    `
  }
};

export default nextConfig;
