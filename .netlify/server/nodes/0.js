import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.178d14f3.js","_app/immutable/chunks/scheduler.63274e7e.js","_app/immutable/chunks/index.ccd26885.js","_app/immutable/chunks/stores.2954d5c4.js","_app/immutable/chunks/singletons.8dc3b8ba.js"];
export const stylesheets = ["_app/immutable/assets/0.a1beb3bc.css"];
export const fonts = [];
