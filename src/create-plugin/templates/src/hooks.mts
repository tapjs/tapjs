// Define resolve(), load(), etc in here, and export 'loader' from index.ts
// Note that if you export a globalPreload, it won't be run when loaded
// with --import, for that you'll have to use initialize. It can be good
// to split it up into a hooks.js file that defines them all, loader.js
// that exports load/resolve/globalPreload, and import-loader.js that
// exports load/resolve/initialize.
//
// See the node docs for more information, or the @tapjs/dummy-plugin
// for an example.

import {GlobalPreloadHook, LoadHook, ResolveHook} from "module";

export const globalPreload:GlobalPreloadHook = ({ port }) => {
  // this is a message port for communication between main and loader threads
  port
  return ''
}

export const load: LoadHook = async (url, context, nextLoad) =>
  nextLoad(url, context)

export const resolve: ResolveHook = async (url, context, nextResolve) =>
  nextResolve(url, context)

// arguments are whatever data is passed in via Module.register() in import.mts
export const initialize = async () => {}
