/** -----------------------------------------------------------------------
 * @module [apg-dir]
 * @author [APG] ANGELI Paolo Giusto
 * @version 0.9.6 [APG 2023/04/16]
 * @version 0.9.7 [APG 2023/04/25] Separation of concerns lib/srv
 * ------------------------------------------------------------------------
*/

// Lib deps
export * from "../lib/deps.ts"

// https://deno.land/x/drash
export * as  Drash from "https://deno.land/x/drash@v2.7.1/mod.ts";

// https://deno.land/x/drash_middleware
export { CORSService as DrashCorsService } from "https://deno.land/x/drash@v2.7.1/src/services/cors/cors.ts";

// Apg github repos
export * as Tng from "https://raw.githubusercontent.com/Pangeli70/apg-tng/master/mod.ts";

// Apg Local monorepo
// export * as Tng from "../apg-tng/mod.ts";