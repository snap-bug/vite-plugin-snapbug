export default function snapbugPlugin() {
  const cdnUrl = "https://snap-bug-cdn.vercel.app/stateTracker.iife.js";

  return {
    name: "vite-plugin-snapbug",
    enforce: "pre",
    apply: "serve",
    transformIndexHtml(html) {
      return {
        html,
        tags: [
          {
            tag: "script",
            attrs: { src: cdnUrl, defer: true },
            injectTo: "head",
          },
        ],
      };
    },
  };
}
