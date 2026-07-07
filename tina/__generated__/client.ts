import { createClient } from "tinacms/dist/client";
import { queries } from "./types.js";
export const client = createClient({ cacheDir: '/app/applet/tina/__generated__/.cache/1783455121661', url: 'https://content.tinajs.io/2.4/content/00000000-0000-0000-0000-000000000000/github/main', token: '0000000000000000000000000000000000000000', queries,  });
export default client;
  