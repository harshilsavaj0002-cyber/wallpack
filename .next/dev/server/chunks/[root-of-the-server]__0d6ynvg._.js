module.exports = [
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[project]/app/api/proxy/[...path]/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DELETE",
    ()=>DELETE,
    "GET",
    ()=>GET,
    "POST",
    ()=>POST,
    "PUT",
    ()=>PUT
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
;
// The real backend is served over plain HTTP. Browsers block HTTP requests from
// an HTTPS page (mixed content) and the backend may not send CORS headers, so we
// proxy every request server-side. The client talks to `/api/proxy/...` and this
// route forwards it to the PHP backend or to the file server for uploads.
const BACKEND_API_BASE_URL = "http://wallpacksupport.pii.at/api";
const BACKEND_ROOT_BASE_URL = "http://wallpacksupport.pii.at";
async function forward(req, path) {
    const search = req.nextUrl.search;
    const baseUrl = path[0] === "uploads" ? BACKEND_ROOT_BASE_URL : BACKEND_API_BASE_URL;
    const targetUrl = `${baseUrl}/${path.join("/")}${search}`;
    const headers = new Headers();
    const contentType = req.headers.get("content-type");
    if (contentType) headers.set("content-type", contentType);
    const auth = req.headers.get("authorization");
    if (auth) headers.set("authorization", auth);
    const init = {
        method: req.method,
        headers,
        // Forward the raw body for non-GET requests (supports JSON and multipart/form-data)
        body: req.method === "GET" || req.method === "HEAD" ? undefined : await req.arrayBuffer(),
        redirect: "follow",
        // @ts-expect-error - duplex is required by Node fetch when sending a body
        duplex: "half"
    };
    try {
        const res = await fetch(targetUrl, init);
        const buffer = await res.arrayBuffer();
        const resContentType = res.headers.get("content-type") ?? "application/json";
        return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"](buffer, {
            status: res.status,
            headers: {
                "content-type": resContentType
            }
        });
    } catch (error) {
        console.log("[v0] Proxy error for", targetUrl, error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: false,
            message: "Failed to reach backend server."
        }, {
            status: 502
        });
    }
}
async function GET(req, ctx) {
    const { path } = await ctx.params;
    return forward(req, path);
}
async function POST(req, ctx) {
    const { path } = await ctx.params;
    return forward(req, path);
}
async function PUT(req, ctx) {
    const { path } = await ctx.params;
    return forward(req, path);
}
async function DELETE(req, ctx) {
    const { path } = await ctx.params;
    return forward(req, path);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__0d6ynvg._.js.map