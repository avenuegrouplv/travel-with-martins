import { createClient } from "tinacms/dist/client";
import { queries } from "./types.js";
export const client = createClient({ cacheDir: '/app/applet/tina/__generated__/.cache/1783460016254', url: 'http://localhost:4001/graphql', token: 'null', queries,  });
export default client;
  