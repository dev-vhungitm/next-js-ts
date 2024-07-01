/** @type {import('next').NextConfig} */

import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'scss'), path.join(__dirname, 'app')],
    prependData: `@import "styles/variables.scss";`
  }
};

export default nextConfig;
