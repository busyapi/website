

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.1703e1bc.js","_app/immutable/chunks/scheduler.63274e7e.js","_app/immutable/chunks/index.ccd26885.js"];
export const stylesheets = [];
export const fonts = [];
