

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.52900eb8.js","_app/immutable/chunks/scheduler.63274e7e.js","_app/immutable/chunks/index.ccd26885.js","_app/immutable/chunks/stores.2954d5c4.js","_app/immutable/chunks/singletons.8dc3b8ba.js"];
export const stylesheets = [];
export const fonts = [];
