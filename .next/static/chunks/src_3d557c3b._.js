(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/components/ui/card.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "Card": (()=>Card),
    "CardContent": (()=>CardContent),
    "CardDescription": (()=>CardDescription),
    "CardFooter": (()=>CardFooter),
    "CardHeader": (()=>CardHeader),
    "CardTitle": (()=>CardTitle)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
;
;
const Card = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("rounded-lg border bg-card text-card-foreground shadow-sm", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 9,
        columnNumber: 3
    }, this));
_c1 = Card;
Card.displayName = "Card";
const CardHeader = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c2 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex flex-col space-y-1.5 p-6", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 24,
        columnNumber: 3
    }, this));
_c3 = CardHeader;
CardHeader.displayName = "CardHeader";
const CardTitle = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c4 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-2xl font-semibold leading-none tracking-tight", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 36,
        columnNumber: 3
    }, this));
_c5 = CardTitle;
CardTitle.displayName = "CardTitle";
const CardDescription = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c6 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-sm text-muted-foreground", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 51,
        columnNumber: 3
    }, this));
_c7 = CardDescription;
CardDescription.displayName = "CardDescription";
const CardContent = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c8 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("p-6 pt-0", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 63,
        columnNumber: 3
    }, this));
_c9 = CardContent;
CardContent.displayName = "CardContent";
const CardFooter = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c10 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex items-center p-6 pt-0", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 71,
        columnNumber: 3
    }, this));
_c11 = CardFooter;
CardFooter.displayName = "CardFooter";
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11;
__turbopack_context__.k.register(_c, "Card$React.forwardRef");
__turbopack_context__.k.register(_c1, "Card");
__turbopack_context__.k.register(_c2, "CardHeader$React.forwardRef");
__turbopack_context__.k.register(_c3, "CardHeader");
__turbopack_context__.k.register(_c4, "CardTitle$React.forwardRef");
__turbopack_context__.k.register(_c5, "CardTitle");
__turbopack_context__.k.register(_c6, "CardDescription$React.forwardRef");
__turbopack_context__.k.register(_c7, "CardDescription");
__turbopack_context__.k.register(_c8, "CardContent$React.forwardRef");
__turbopack_context__.k.register(_c9, "CardContent");
__turbopack_context__.k.register(_c10, "CardFooter$React.forwardRef");
__turbopack_context__.k.register(_c11, "CardFooter");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/ui/badge.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "Badge": (()=>Badge),
    "badgeVariants": (()=>badgeVariants)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
;
;
const badgeVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2", {
    variants: {
        variant: {
            default: "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
            secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
            destructive: "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
            outline: "text-foreground"
        }
    },
    defaultVariants: {
        variant: "default"
    }
});
function Badge({ className, variant, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(badgeVariants({
            variant
        }), className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/badge.tsx",
        lineNumber: 32,
        columnNumber: 5
    }, this);
}
_c = Badge;
;
var _c;
__turbopack_context__.k.register(_c, "Badge");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/lib/data.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "alumni": (()=>alumni),
    "benefits": (()=>benefits),
    "blogPosts": (()=>blogPosts),
    "certifications": (()=>certifications),
    "challenges": (()=>challenges),
    "creditFaqs": (()=>creditFaqs),
    "creditTiers": (()=>creditTiers),
    "devTrackerProjects": (()=>devTrackerProjects),
    "faqs": (()=>faqs),
    "feedbackItems": (()=>feedbackItems),
    "founderStory": (()=>founderStory),
    "industries": (()=>industries),
    "jobOpenings": (()=>jobOpenings),
    "leaderboard": (()=>leaderboard),
    "memes": (()=>memes),
    "ourProcess": (()=>ourProcess),
    "partners": (()=>partners),
    "projects": (()=>projects),
    "services": (()=>services),
    "teamMembers": (()=>teamMembers),
    "technologies": (()=>technologies),
    "testimonials": (()=>testimonials),
    "values": (()=>values)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$server$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Server$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/server.js [app-client] (ecmascript) <export default as Server>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$code$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Code$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/code.js [app-client] (ecmascript) <export default as Code>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cloud$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cloud$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/cloud.js [app-client] (ecmascript) <export default as Cloud>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bot$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bot$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/bot.js [app-client] (ecmascript) <export default as Bot>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$smartphone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Smartphone$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/smartphone.js [app-client] (ecmascript) <export default as Smartphone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pen$2d$tool$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PenTool$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/pen-tool.js [app-client] (ecmascript) <export default as PenTool>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$git$2d$branch$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__GitBranch$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/git-branch.js [app-client] (ecmascript) <export default as GitBranch>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$blocks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Blocks$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/blocks.js [app-client] (ecmascript) <export default as Blocks>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/zap.js [app-client] (ecmascript) <export default as Zap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check-big.js [app-client] (ecmascript) <export default as CheckCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/users.js [app-client] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/heart.js [app-client] (ecmascript) <export default as Heart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$award$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Award$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/award.js [app-client] (ecmascript) <export default as Award>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wifi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wifi$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/wifi.js [app-client] (ecmascript) <export default as Wifi>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$coffee$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Coffee$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/coffee.js [app-client] (ecmascript) <export default as Coffee>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/star.js [app-client] (ecmascript) <export default as Star>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/globe.js [app-client] (ecmascript) <export default as Globe>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trending-up.js [app-client] (ecmascript) <export default as TrendingUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$anchor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Anchor$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/anchor.js [app-client] (ecmascript) <export default as Anchor>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$code$2d$xml$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CodeXml$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/code-xml.js [app-client] (ecmascript) <export default as CodeXml>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$brain$2d$circuit$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BrainCircuit$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/brain-circuit.js [app-client] (ecmascript) <export default as BrainCircuit>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rocket$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Rocket$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/rocket.js [app-client] (ecmascript) <export default as Rocket>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$test$2d$tube$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TestTube$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/test-tube.js [app-client] (ecmascript) <export default as TestTube>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$scale$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Scale$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/scale.js [app-client] (ecmascript) <export default as Scale>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$drafting$2d$compass$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DraftingCompass$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/drafting-compass.js [app-client] (ecmascript) <export default as DraftingCompass>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$database$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Database$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/database.js [app-client] (ecmascript) <export default as Database>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$factory$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Factory$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/factory.js [app-client] (ecmascript) <export default as Factory>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$cart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingCart$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shopping-cart.js [app-client] (ecmascript) <export default as ShoppingCart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$university$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__University$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/university.js [app-client] (ecmascript) <export default as University>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$hand$2d$helping$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__HelpingHand$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/hand-helping.js [app-client] (ecmascript) <export default as HelpingHand>");
;
;
const services = [
    {
        id: 1,
        title: "Web Development",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$code$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Code$3e$__["Code"], {
            className: "h-10 w-10"
        }, void 0, false, {
            fileName: "[project]/src/lib/data.tsx",
            lineNumber: 185,
            columnNumber: 11
        }, this),
        shortDescription: "Building modern, fast, and responsive websites with React and Next.js.",
        longDescription: "We create high-performance websites and web applications using modern technologies like React and Next.js. Our focus is on building responsive, scalable, and user-friendly digital experiences that drive engagement and growth for your business."
    },
    {
        id: 2,
        title: "Mobile App Development",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$smartphone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Smartphone$3e$__["Smartphone"], {
            className: "h-10 w-10"
        }, void 0, false, {
            fileName: "[project]/src/lib/data.tsx",
            lineNumber: 192,
            columnNumber: 11
        }, this),
        shortDescription: "Developing native and cross-platform mobile apps for iOS and Android.",
        longDescription: "We build beautiful and performant mobile applications for both iOS and Android. Whether you need a native app for maximum performance or a cross-platform solution with React Native for wider reach, we deliver high-quality mobile experiences."
    },
    {
        id: 3,
        title: "AI & Automation",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bot$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bot$3e$__["Bot"], {
            className: "h-10 w-10"
        }, void 0, false, {
            fileName: "[project]/src/lib/data.tsx",
            lineNumber: 199,
            columnNumber: 11
        }, this),
        shortDescription: "Implementing AI and automation to streamline processes and drive innovation.",
        longDescription: "Harness the power of Artificial Intelligence and automation to transform your business operations. We build and implement AI-driven solutions, from chatbots to predictive analytics, that increase efficiency, reduce costs, and unlock new opportunities for growth."
    },
    {
        id: 4,
        title: "DevOps & Cloud Services",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cloud$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cloud$3e$__["Cloud"], {
            className: "h-10 w-10"
        }, void 0, false, {
            fileName: "[project]/src/lib/data.tsx",
            lineNumber: 206,
            columnNumber: 11
        }, this),
        shortDescription: "Streamlining development and operations with scalable cloud infrastructure.",
        longDescription: "We offer comprehensive DevOps and cloud services to automate your infrastructure and accelerate your development lifecycle. From CI/CD pipelines to cloud migration and management, we ensure your systems are scalable, reliable, and secure."
    },
    {
        id: 5,
        title: "UI/UX Design",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pen$2d$tool$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PenTool$3e$__["PenTool"], {
            className: "h-10 w-10"
        }, void 0, false, {
            fileName: "[project]/src/lib/data.tsx",
            lineNumber: 213,
            columnNumber: 11
        }, this),
        shortDescription: "Creating intuitive and beautiful user interfaces and experiences.",
        longDescription: "Our UI/UX design services focus on creating user-centered designs that are both beautiful and easy to use. We conduct user research, create wireframes and prototypes, and design visually stunning interfaces that enhance user satisfaction and engagement."
    },
    {
        id: 6,
        title: "Custom Software Development",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$git$2d$branch$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__GitBranch$3e$__["GitBranch"], {
            className: "h-10 w-10"
        }, void 0, false, {
            fileName: "[project]/src/lib/data.tsx",
            lineNumber: 220,
            columnNumber: 11
        }, this),
        shortDescription: "Bespoke software solutions tailored to your unique business needs.",
        longDescription: "We develop custom software applications from scratch, tailored specifically to your operational needs. From enterprise-level platforms to specialized business tools, our solutions are scalable, secure, and designed for a seamless user experience, giving you a competitive edge."
    },
    {
        id: 7,
        title: "Blockchain & Web3",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$blocks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Blocks$3e$__["Blocks"], {
            className: "h-10 w-10"
        }, void 0, false, {
            fileName: "[project]/src/lib/data.tsx",
            lineNumber: 227,
            columnNumber: 13
        }, this),
        shortDescription: "Developing decentralized applications and smart contracts on the blockchain.",
        longDescription: "Explore the future of the web with our blockchain and Web3 development services. We build decentralized applications (dApps), smart contracts, and other blockchain-based solutions that offer enhanced security, transparency, and user control."
    }
];
const projects = [
    {
        id: 1,
        title: "Enterprise CRM Platform",
        category: "Custom Software",
        description: "Developed a scalable CRM from the ground up for a major financial services client, improving sales team productivity by 40%.",
        imageUrl: "https://placehold.co/800x600.png",
        imageHint: "dashboard analytics"
    },
    {
        id: 2,
        title: "Cloud Migration for E-commerce",
        category: "Cloud Solutions",
        description: "Successfully migrated a high-traffic e-commerce platform to a multi-cloud environment, resulting in 99.99% uptime and reduced latency.",
        imageUrl: "https://placehold.co/800x600.png",
        imageHint: "server room"
    },
    {
        id: 3,
        title: "Cybersecurity Overhaul for Healthcare",
        category: "Cybersecurity",
        description: "Implemented a comprehensive security framework for a healthcare provider, ensuring HIPAA compliance and protecting sensitive patient data.",
        imageUrl: "https://placehold.co/800x600.png",
        imageHint: "cyber security"
    },
    {
        id: 4,
        title: "AI-Powered Logistics Optimizer",
        category: "AI & Automation",
        description: "Created an AI model to optimize delivery routes for a logistics company, cutting fuel costs by 15% and improving delivery times.",
        imageUrl: "https://placehold.co/800x600.png",
        imageHint: "delivery truck"
    },
    {
        id: 5,
        title: "FinTech Mobile Application",
        category: "Custom Software",
        description: "Built a secure and user-friendly mobile banking app that acquired over 1 million users in its first year.",
        imageUrl: "https://placehold.co/800x600.png",
        imageHint: "mobile app"
    },
    {
        id: 6,
        title: "Managed IT for a Retail Chain",
        category: "Managed IT Services",
        description: "Provide ongoing IT support and infrastructure management for a national retail chain with over 200 locations.",
        imageUrl: "https://placehold.co/800x600.png",
        imageHint: "retail store"
    }
];
const testimonials = [
    {
        name: "Fatima Zahra",
        title: "CEO, Innovate Pk",
        quote: "BitEdge Technologies transformed our operations. Their custom software solution was a game-changer for our business.",
        avatarUrl: "https://placehold.co/100x100.png"
    },
    {
        name: "Ali Raza",
        title: "CTO, QuantumLeap",
        quote: "The cloud migration project was seamless and executed flawlessly. Their team's expertise is unparalleled. Highly recommended.",
        avatarUrl: "https://placehold.co/100x100.png"
    },
    {
        name: "Ayesha Malik",
        title: "Director of Operations, Sehat First",
        quote: "Their cybersecurity audit and implementation gave us the peace of mind we needed. A truly professional and reliable partner.",
        avatarUrl: "https://placehold.co/100x100.png"
    },
    {
        name: "Usman Khan",
        title: "Founder, TezLogistics",
        quote: "The AI automation solution they built has significantly improved our efficiency and bottom line. We couldn't be happier.",
        avatarUrl: "https://placehold.co/100x100.png"
    }
];
const blogPosts = [
    {
        id: 1,
        slug: "future-of-cybersecurity-2024",
        title: "The Future of Cybersecurity: Trends to Watch in 2024",
        author: "Hina Rabbani, Security Analyst",
        date: "2024-05-15",
        category: "Cybersecurity",
        excerpt: "As technology evolves, so do the threats. Discover the key cybersecurity trends that will shape the digital landscape this year.",
        content: "<p>The digital world is in a constant state of flux, and with it, the landscape of cybersecurity threats continues to evolve. In 2024, we are seeing a convergence of AI-powered attacks, sophisticated phishing schemes, and increased vulnerabilities in IoT devices. Businesses must stay vigilant and adapt their security strategies to counter these emerging challenges.</p><p>One of the most significant trends is the rise of AI in both offensive and defensive cybersecurity. Malicious actors are using AI to create more convincing phishing emails and to automate attacks at an unprecedented scale. On the flip side, security professionals are harnessing AI for advanced threat detection, predictive analysis, and automated response systems. The key is to stay ahead in this technological arms race.</p><p>Another critical area is the security of the software supply chain. Attacks targeting software vendors and open-source libraries are becoming more common. Businesses need to implement rigorous vetting processes for third-party code and ensure that their development pipelines are secure from end to end. This includes regular code scanning, dependency checking, and implementing principles of least privilege.</p><p>Finally, the concept of a 'Zero Trust' architecture is moving from a buzzword to a necessity. The old model of a secure network perimeter is no longer sufficient. A Zero Trust approach assumes that no user or device is inherently trustworthy and requires strict verification for every access request, regardless of where it originates. This is a fundamental shift in security philosophy but a crucial one for protecting modern, distributed IT environments.</p>",
        imageUrl: "https://placehold.co/1200x600.png",
        imageHint: "cyber lock"
    },
    {
        id: 2,
        slug: "navigating-multi-cloud-strategy",
        title: "Navigating the Clouds: How to Build a Winning Multi-Cloud Strategy",
        author: "Zain Ahmed, Cloud Architect",
        date: "2024-04-22",
        category: "Cloud Solutions",
        excerpt: "A multi-cloud approach offers flexibility and avoids vendor lock-in, but it comes with its own set of complexities. Here’s how to do it right.",
        content: "<p>The allure of a multi-cloud strategy is undeniable: the ability to pick and choose the best services from different cloud providers, increased resilience, and avoidance of vendor lock-in. However, a successful multi-cloud deployment requires careful planning and robust management. Without a clear strategy, organizations can face spiraling costs, security gaps, and operational chaos.</p><p>The first step is to define your business objectives. What are you trying to achieve with a multi-cloud approach? Whether it's cost optimization, access to specialized services (like AI/ML platforms), or disaster recovery, your goals will dictate your choice of providers and services.</p><p>Next, focus on governance and cost management. Each cloud provider has its own pricing models and management tools. To avoid bill shock, you need a centralized cloud management platform (CMP) that provides visibility across all your environments. This allows you to monitor spending, enforce policies, and optimize resource allocation.</p><p>Finally, interoperability and security are paramount. Your applications and data need to move seamlessly between clouds, which requires a focus on containerization (using technologies like Docker and Kubernetes) and standardized APIs. From a security perspective, you must have a unified security policy that is consistently applied across all cloud environments, ensuring there are no weak links in your infrastructure.</p>",
        imageUrl: "https://placehold.co/1200x600.png",
        imageHint: "data clouds"
    },
    {
        id: 3,
        slug: "ai-in-business-automation",
        title: "Beyond the Hype: Practical AI for Business Automation",
        author: "Saad Ali, AI Specialist",
        date: "2024-03-10",
        category: "AI & Automation",
        excerpt: "AI is more than just a buzzword. Learn how businesses are using practical AI solutions to automate tasks, improve decision-making, and drive real growth.",
        content: "<p>Artificial Intelligence (AI) has moved from the realm of science fiction to a practical tool that is reshaping industries. While the hype around generative AI is significant, the real value for many businesses lies in more targeted applications of AI and machine learning for automation.</p><p>One of the most accessible applications is in customer service. AI-powered chatbots can handle a large volume of customer inquiries 24/7, freeing up human agents to focus on more complex issues. These bots are becoming increasingly sophisticated, capable of understanding natural language and resolving issues without human intervention.</p><p>Another powerful use case is in predictive analytics. By analyzing historical data, machine learning models can forecast sales trends, predict customer churn, and identify potential equipment failures before they happen. This allows businesses to move from a reactive to a proactive operational model, making better decisions based on data-driven insights.</p><p>Intelligent Process Automation (IPA) is also gaining traction. This involves using AI to automate complex, end-to-end business processes. For example, in finance, IPA can automate the entire invoice processing workflow, from data extraction and validation to payment approval and entry into accounting systems. This not only saves time but also reduces the risk of human error.</p>",
        imageUrl: "https://placehold.co/1200x600.png",
        imageHint: "robot brain"
    },
    {
        id: 4,
        slug: "the-entrepreneurial-mindset",
        title: "The Entrepreneurial Mindset: Navigating Uncertainty",
        author: "Dr. Arslan Maverick, CEO",
        date: "2024-06-01",
        category: "Leadership",
        excerpt: "True entrepreneurship isn't just about big ideas; it's about the resilience to navigate the constant waves of uncertainty and challenge.",
        content: "<p>Many believe entrepreneurship begins with a brilliant, world-changing idea. While innovation is key, the true foundation of a successful venture is the mindset of its leader. The entrepreneurial mindset is not a fixed trait but a developed muscle, strengthened by facing and overcoming adversity.</p><h2>Embracing the Unknown</h2><p>The journey of building a company is a path paved with unknowns. Market shifts, competitor moves, and internal challenges are constants. A successful entrepreneur doesn't just tolerate this uncertainty; they embrace it as an environment ripe for opportunity. It's about making calculated decisions with incomplete information and being agile enough to pivot when a new, better path reveals itself.</p><h2>Resilience is Your Superpower</h2><p>You will face setbacks. Products will have bugs, funding may be delayed, and key employees might leave. Resilience is the ability to absorb these shocks, learn from them, and move forward with renewed determination. It's the quiet voice that says 'try again' after a failure. This quality is more valuable than any single business plan or financial projection.</p><p>At BitEdge, we foster this mindset not just in our leadership but throughout our team. We believe that by empowering our people to think like owners, take calculated risks, and learn from every outcome, we build a more robust, innovative, and successful organization. The next great breakthrough often comes not from a place of comfort, but from the edge of uncertainty.</p>",
        imageUrl: "https://placehold.co/1200x600.png",
        imageHint: "mountain peak"
    }
];
const jobOpenings = [
    {
        id: 1,
        title: "Senior Frontend Developer",
        location: "Remote",
        department: "Engineering",
        type: "Full-time",
        description: "Seeking an experienced Frontend Developer to build and maintain our client-facing applications using React and Next.js."
    },
    {
        id: 2,
        title: "Cloud Solutions Architect",
        location: "Innovation City",
        department: "Engineering",
        type: "Full-time",
        description: "Design and implement scalable, secure, and robust cloud infrastructure for our enterprise clients."
    },
    {
        id: 3,
        title: "UI/UX Designer",
        location: "Remote",
        department: "Design",
        type: "Contract",
        description: "Join our creative team to design intuitive and visually appealing interfaces for web and mobile applications."
    },
    {
        id: 4,
        title: "Junior DevOps Engineer",
        location: "Innovation City",
        department: "Engineering",
        type: "Full-time",
        description: "Assist in managing our CI/CD pipelines, automating deployments, and monitoring system health."
    }
];
const benefits = [
    {
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$award$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Award$3e$__["Award"], {
            className: "h-8 w-8 text-primary"
        }, void 0, false, {
            fileName: "[project]/src/lib/data.tsx",
            lineNumber: 399,
            columnNumber: 15
        }, this),
        title: "Competitive Salary",
        description: "We offer competitive compensation packages to attract and retain the best talent."
    },
    {
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"], {
            className: "h-8 w-8 text-primary"
        }, void 0, false, {
            fileName: "[project]/src/lib/data.tsx",
            lineNumber: 404,
            columnNumber: 15
        }, this),
        title: "Health & Wellness",
        description: "Comprehensive health, dental, and vision insurance for you and your family."
    },
    {
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
            className: "h-8 w-8 text-primary"
        }, void 0, false, {
            fileName: "[project]/src/lib/data.tsx",
            lineNumber: 409,
            columnNumber: 15
        }, this),
        title: "Flexible Work",
        description: "Enjoy flexible working hours and remote work options to maintain a healthy work-life balance."
    },
    {
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"], {
            className: "h-8 w-8 text-primary"
        }, void 0, false, {
            fileName: "[project]/src/lib/data.tsx",
            lineNumber: 414,
            columnNumber: 15
        }, this),
        title: "Professional Development",
        description: "We support your growth with access to courses, conferences, and certifications."
    },
    {
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$coffee$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Coffee$3e$__["Coffee"], {
            className: "h-8 w-8 text-primary"
        }, void 0, false, {
            fileName: "[project]/src/lib/data.tsx",
            lineNumber: 419,
            columnNumber: 15
        }, this),
        title: "Generous PTO",
        description: "Take the time you need to recharge with our generous paid time off policy."
    },
    {
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wifi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wifi$3e$__["Wifi"], {
            className: "h-8 w-8 text-primary"
        }, void 0, false, {
            fileName: "[project]/src/lib/data.tsx",
            lineNumber: 424,
            columnNumber: 15
        }, this),
        title: "Home Office Stipend",
        description: "We provide a stipend to help you set up a comfortable and productive home office."
    }
];
const teamMembers = [
    {
        name: "Dr. Arslan Ahmed",
        role: "Founder & CEO",
        avatarUrl: "https://placehold.co/200x200.png",
        bio: "Visionary leader with 20+ years in the tech industry, passionate about driving innovation and fostering entrepreneurship."
    },
    {
        name: "Ayesha Khan",
        role: "Chief Technology Officer",
        avatarUrl: "https://placehold.co/200x200.png",
        bio: "Expert architect of scalable systems and cloud infrastructure, leading our technical strategy."
    },
    {
        name: "Bilal Hassan",
        role: "Head of Product",
        avatarUrl: "https://placehold.co/200x200.png",
        bio: "Dedicated to creating user-centric solutions that solve real-world business problems."
    },
    {
        name: "Sana Ali",
        role: "Lead Cybersecurity Analyst",
        avatarUrl: "https://placehold.co/200x200.png",
        bio: "Guardian of digital assets, specializing in threat intelligence and proactive defense."
    }
];
const values = [
    {
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"], {
            className: "h-8 w-8 text-primary"
        }, void 0, false, {
            fileName: "[project]/src/lib/data.tsx",
            lineNumber: 459,
            columnNumber: 15
        }, this),
        title: "Innovation",
        description: "We constantly explore new technologies and ideas to deliver cutting-edge solutions."
    },
    {
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
            className: "h-8 w-8 text-primary"
        }, void 0, false, {
            fileName: "[project]/src/lib/data.tsx",
            lineNumber: 464,
            columnNumber: 15
        }, this),
        title: "Integrity",
        description: "We build trust through transparent, honest, and ethical practices in everything we do."
    },
    {
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
            className: "h-8 w-8 text-primary"
        }, void 0, false, {
            fileName: "[project]/src/lib/data.tsx",
            lineNumber: 469,
            columnNumber: 15
        }, this),
        title: "Collaboration",
        description: "We work closely with our clients and as a team to achieve shared success."
    },
    {
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"], {
            className: "h-8 w-8 text-primary"
        }, void 0, false, {
            fileName: "[project]/src/lib/data.tsx",
            lineNumber: 474,
            columnNumber: 15
        }, this),
        title: "Customer Centricity",
        description: "Our clients are at the heart of our business. Their success is our success."
    }
];
const partners = [
    {
        name: 'QuantumLeap',
        logo: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-2",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
                    className: "h-8 w-8"
                }, void 0, false, {
                    fileName: "[project]/src/lib/data.tsx",
                    lineNumber: 481,
                    columnNumber: 75
                }, this),
                " ",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-xl font-bold",
                    children: "QuantumLeap"
                }, void 0, false, {
                    fileName: "[project]/src/lib/data.tsx",
                    lineNumber: 481,
                    columnNumber: 104
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/lib/data.tsx",
            lineNumber: 481,
            columnNumber: 34
        }, this)
    },
    {
        name: 'Innovate Pk',
        logo: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-2",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__["Globe"], {
                    className: "h-8 w-8"
                }, void 0, false, {
                    fileName: "[project]/src/lib/data.tsx",
                    lineNumber: 482,
                    columnNumber: 75
                }, this),
                " ",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-xl font-bold",
                    children: "Innovate Pk"
                }, void 0, false, {
                    fileName: "[project]/src/lib/data.tsx",
                    lineNumber: 482,
                    columnNumber: 105
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/lib/data.tsx",
            lineNumber: 482,
            columnNumber: 34
        }, this)
    },
    {
        name: 'Apex Solutions',
        logo: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-2",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"], {
                    className: "h-8 w-8"
                }, void 0, false, {
                    fileName: "[project]/src/lib/data.tsx",
                    lineNumber: 483,
                    columnNumber: 78
                }, this),
                " ",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-xl font-bold",
                    children: "Apex Solutions"
                }, void 0, false, {
                    fileName: "[project]/src/lib/data.tsx",
                    lineNumber: 483,
                    columnNumber: 113
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/lib/data.tsx",
            lineNumber: 483,
            columnNumber: 37
        }, this)
    },
    {
        name: 'Meridian Corp',
        logo: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-2",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$anchor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Anchor$3e$__["Anchor"], {
                    className: "h-8 w-8"
                }, void 0, false, {
                    fileName: "[project]/src/lib/data.tsx",
                    lineNumber: 484,
                    columnNumber: 77
                }, this),
                " ",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-xl font-bold",
                    children: "Meridian Corp"
                }, void 0, false, {
                    fileName: "[project]/src/lib/data.tsx",
                    lineNumber: 484,
                    columnNumber: 108
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/lib/data.tsx",
            lineNumber: 484,
            columnNumber: 36
        }, this)
    },
    {
        name: 'CodeCrafters',
        logo: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-2",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$code$2d$xml$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CodeXml$3e$__["CodeXml"], {
                    className: "h-8 w-8"
                }, void 0, false, {
                    fileName: "[project]/src/lib/data.tsx",
                    lineNumber: 485,
                    columnNumber: 76
                }, this),
                " ",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-xl font-bold",
                    children: "CodeCrafters"
                }, void 0, false, {
                    fileName: "[project]/src/lib/data.tsx",
                    lineNumber: 485,
                    columnNumber: 108
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/lib/data.tsx",
            lineNumber: 485,
            columnNumber: 35
        }, this)
    }
];
const faqs = [
    {
        question: "What kind of industries do you specialize in?",
        answer: "We have experience working across a wide range of industries, including finance, healthcare, retail, logistics, and technology. Our solutions are tailored to meet the specific challenges and opportunities of each sector."
    },
    {
        question: "How do you approach a new project?",
        answer: "Our process begins with a deep-dive discovery phase to understand your business goals and technical requirements. We then move to strategy and planning, followed by agile development sprints with regular feedback loops. We prioritize transparency and collaboration throughout the entire project lifecycle."
    },
    {
        question: "What is your pricing model?",
        answer: "We offer flexible pricing models to suit different project needs, including fixed-price contracts for well-defined scopes, time and materials for more dynamic projects, and dedicated team retainers for ongoing work. We provide detailed proposals and transparent pricing upfront."
    },
    {
        question: "Do you provide ongoing support and maintenance?",
        answer: "Yes, we offer comprehensive support and maintenance packages to ensure your applications remain secure, up-to-date, and performant after launch. Our support services are tailored to your needs, from basic monitoring to proactive feature enhancements."
    }
];
const certifications = [
    {
        title: "Certified Cloud Practitioner",
        issuer: "Amazon Web Services"
    },
    {
        title: "Azure Solutions Architect Expert",
        issuer: "Microsoft"
    },
    {
        title: "Professional Scrum Master",
        issuer: "Scrum.org"
    },
    {
        title: "Certified Information Systems Security Professional (CISSP)",
        issuer: "(ISC)²"
    }
];
const devTrackerProjects = [
    {
        id: 1,
        name: "QuantumLeap AI Engine",
        client: "QuantumLeap",
        status: "In Development",
        progress: 65,
        currentTask: "Refactoring the data ingestion pipeline for performance.",
        lastUpdate: "2 hours ago",
        activities: [
            {
                id: 1,
                commit: "feat: Integrate real-time analytics dashboard",
                timestamp: "2024-06-03T10:00:00Z"
            },
            {
                id: 2,
                commit: "fix: Resolve authentication bug on mobile",
                timestamp: "2024-06-02T15:30:00Z"
            },
            {
                id: 3,
                commit: "chore: Upgrade Node.js to v20",
                timestamp: "2024-06-01T11:00:00Z"
            }
        ]
    },
    {
        id: 2,
        name: "Innovate Pk Mobile App",
        client: "Innovate Pk",
        status: "QA & Testing",
        progress: 90,
        currentTask: "Conducting final regression testing before App Store submission.",
        lastUpdate: "1 day ago",
        activities: [
            {
                id: 1,
                commit: "test: Add end-to-end tests for payment flow",
                timestamp: "2024-06-02T18:00:00Z"
            },
            {
                id: 2,
                commit: "refactor: Simplify state management with Zustand",
                timestamp: "2024-05-30T12:00:00Z"
            }
        ]
    },
    {
        id: 3,
        name: "Apex Solutions Web3 Portal",
        client: "Apex Solutions",
        status: "Design",
        progress: 20,
        currentTask: "Finalizing wireframes for the user dashboard and NFT marketplace.",
        lastUpdate: "3 days ago",
        activities: [
            {
                id: 1,
                commit: "docs: Update project requirements document",
                timestamp: "2024-05-29T09:00:00Z"
            }
        ]
    },
    {
        id: 4,
        name: "Meridian Corp Website",
        client: "Meridian Corp",
        status: "Launched",
        progress: 100,
        currentTask: "Project complete. Monitoring performance and gathering feedback.",
        lastUpdate: "1 week ago",
        activities: [
            {
                id: 1,
                commit: "deploy: Production launch v1.0",
                timestamp: "2024-05-25T16:00:00Z"
            }
        ]
    }
];
const challenges = [
    {
        id: 1,
        title: "Two Sum Challenge",
        level: "Easy",
        description: "Given an array of integers `nums` and an integer `target`, return indices of the two numbers such that they add up to `target`. You may assume that each input would have exactly one solution, and you may not use the same element twice.",
        isArchived: false
    },
    {
        id: 2,
        title: "FizzBuzz",
        level: "Easy",
        description: "Write a program that outputs the string representation of numbers from 1 to n. But for multiples of three it should output “Fizz” instead of the number and for the multiples of five output “Buzz”. For numbers which are multiples of both three and five output “FizzBuzz”.",
        isArchived: true
    }
];
const leaderboard = [
    {
        rank: 1,
        name: "CodeNinja",
        score: 2500,
        avatarUrl: "https://placehold.co/100x100.png"
    },
    {
        rank: 2,
        name: "SyntaxSorcerer",
        score: 2350,
        avatarUrl: "https://placehold.co/100x100.png"
    },
    {
        rank: 3,
        name: "AlgoWhiz",
        score: 2200,
        avatarUrl: "https://placehold.co/100x100.png"
    },
    {
        rank: 4,
        name: "ScriptKitten",
        score: 2100,
        avatarUrl: "https://placehold.co/100x100.png"
    },
    {
        rank: 5,
        name: "BinaryBard",
        score: 1950,
        avatarUrl: "https://placehold.co/100x100.png"
    }
];
const feedbackItems = [
    {
        id: 1,
        name: "Fatima Z.",
        message: "The AI Project Estimator is brilliant! It gave me a solid baseline for my budget in just a few seconds. Highly recommend this for anyone starting a new project.",
        type: "Testimonial",
        timestamp: "2 days ago"
    },
    {
        id: 2,
        name: "Anonymous",
        message: "It would be great if the Code Battle challenges had a way to see other users' solutions after you've submitted your own. It would be a great learning tool.",
        type: "Feature Request",
        timestamp: "5 days ago"
    },
    {
        id: 3,
        name: "Bilal A.",
        message: "Your blog post on multi-cloud strategy was incredibly insightful and well-written. It helped clarify a lot of complex concepts for my team.",
        type: "General Feedback",
        timestamp: "1 week ago"
    },
    {
        id: 4,
        name: "Anonymous",
        message: "The customer service is top-notch. I had a question about the team builder and received a detailed, helpful response within an hour.",
        type: "Testimonial",
        timestamp: "2 weeks ago"
    }
];
const founderStory = [
    {
        year: 2018,
        title: "The Idea",
        type: "idea",
        description: "Dr. Arslan Maverick, working as a freelance consultant, identifies a major gap in the market for agile and transparent IT partners for growing businesses."
    },
    {
        year: 2019,
        title: "BitEdge is Born",
        type: "launch",
        description: "With a small, passionate team of two, BitEdge Technologies is officially launched, operating out of a co-working space with a focus on custom software development."
    },
    {
        year: 2020,
        title: "First Major Client",
        type: "growth",
        description: "Landed our first enterprise-level client, a project that pushed our limits and proved our capability to deliver complex, mission-critical software."
    },
    {
        year: 2021,
        title: "Navigating the Pandemic",
        type: "challenge",
        description: "The global pandemic forces a shift to a fully remote model. We embraced the challenge, honing our remote collaboration processes and expanding our talent pool globally."
    },
    {
        year: 2022,
        title: "Expanding the Team",
        type: "team",
        description: "Our team grows to over 20 professionals across three continents, adding specialized expertise in cloud solutions and cybersecurity to our service offerings."
    },
    {
        year: 2024,
        title: "Innovating with AI",
        type: "growth",
        description: "Launched a dedicated AI & Automation service, helping clients leverage cutting-edge technology to drive efficiency and unlock new business value."
    }
];
const ourProcess = [
    {
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
            className: "h-full w-full"
        }, void 0, false, {
            fileName: "[project]/src/lib/data.tsx",
            lineNumber: 665,
            columnNumber: 15
        }, this),
        title: "Discovery & Strategy",
        description: "We start by deeply understanding your vision, goals, and challenges. This phase is all about aligning on the project's 'why' and defining the roadmap for success.",
        deliverables: [
            "Project Brief & Scope Document",
            "Technical Feasibility Report",
            "High-level Roadmap & Milestones"
        ]
    },
    {
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$drafting$2d$compass$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DraftingCompass$3e$__["DraftingCompass"], {
            className: "h-full w-full"
        }, void 0, false, {
            fileName: "[project]/src/lib/data.tsx",
            lineNumber: 671,
            columnNumber: 15
        }, this),
        title: "UI/UX Design & Prototyping",
        description: "Our design team translates the strategy into intuitive and beautiful user interfaces. We create wireframes and interactive prototypes to give you a tangible feel for the final product early on.",
        deliverables: [
            "User Flow Diagrams",
            "Wireframes",
            "High-Fidelity Mockups",
            "Interactive Prototype"
        ]
    },
    {
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$code$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Code$3e$__["Code"], {
            className: "h-full w-full"
        }, void 0, false, {
            fileName: "[project]/src/lib/data.tsx",
            lineNumber: 677,
            columnNumber: 15
        }, this),
        title: "Agile Development",
        description: "Working in two-week sprints, our development team brings the designs to life. We follow best practices to write clean, efficient, and scalable code, with regular demos to keep you in the loop.",
        deliverables: [
            "Working Software Increments",
            "Source Code & Documentation",
            "CI/CD Pipeline Setup"
        ]
    },
    {
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$test$2d$tube$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TestTube$3e$__["TestTube"], {
            className: "h-full w-full"
        }, void 0, false, {
            fileName: "[project]/src/lib/data.tsx",
            lineNumber: 683,
            columnNumber: 15
        }, this),
        title: "Quality Assurance & Testing",
        description: "Rigorous testing is built into every stage of our process. We conduct comprehensive manual and automated tests to ensure your application is secure, performant, and bug-free.",
        deliverables: [
            "Test Plans & Cases",
            "Bug Reports",
            "User Acceptance Testing (UAT) Support"
        ]
    },
    {
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rocket$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Rocket$3e$__["Rocket"], {
            className: "h-full w-full"
        }, void 0, false, {
            fileName: "[project]/src/lib/data.tsx",
            lineNumber: 689,
            columnNumber: 15
        }, this),
        title: "Deployment & Launch",
        description: "We handle the entire deployment process, ensuring a smooth and seamless launch. Our team will manage the release, monitor the initial rollout, and ensure everything is stable.",
        deliverables: [
            "Production Environment Setup",
            "Successful Application Launch",
            "Post-launch Sanity Checks"
        ]
    },
    {
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$scale$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Scale$3e$__["Scale"], {
            className: "h-full w-full"
        }, void 0, false, {
            fileName: "[project]/src/lib/data.tsx",
            lineNumber: 695,
            columnNumber: 15
        }, this),
        title: "Support & Scaling",
        description: "Our partnership doesn't end at launch. We offer ongoing support and maintenance packages to keep your application running smoothly, and we're here to help you scale as your business grows.",
        deliverables: [
            "Service Level Agreement (SLA)",
            "Performance Monitoring Reports",
            "Ongoing Feature Enhancements"
        ]
    }
];
const alumni = [
    {
        id: 1,
        name: "Ahmed Ali",
        roleAtBitEdge: "Senior Software Engineer (2019-2022)",
        currentRole: "Staff Engineer",
        currentCompany: "Google",
        companyLogoUrl: "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png",
        avatarUrl: "https://placehold.co/200x200.png",
        quote: "My time at BitEdge was pivotal. It's where I learned to tackle complex problems with a truly agile and collaborative mindset.",
        linkedinUrl: "#"
    },
    {
        id: 2,
        name: "Sobia Khan",
        roleAtBitEdge: "Lead UI/UX Designer (2020-2023)",
        currentRole: "Product Design Lead",
        currentCompany: "Microsoft",
        companyLogoUrl: "https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1Mu3b?ver=5c31",
        avatarUrl: "https://placehold.co/200x200.png",
        quote: "BitEdge gave me the creative freedom to lead high-impact projects and grow into a leadership role. The mentorship was invaluable.",
        linkedinUrl: "#"
    },
    {
        id: 3,
        name: "Imran Malik",
        roleAtBitEdge: "Cloud Engineer (2021-2023)",
        currentRole: "Founder & CTO",
        currentCompany: "ScaleUp.ai",
        companyLogoUrl: "https://placehold.co/150x50.png",
        avatarUrl: "https://placehold.co/200x200.png",
        quote: "I was inspired by the entrepreneurial spirit at BitEdge to start my own venture. The experience I gained was the perfect launchpad.",
        linkedinUrl: "#"
    },
    {
        id: 4,
        name: "Fatima Al-Jamil",
        roleAtBitEdge: "Cybersecurity Intern (2022)",
        currentRole: "Security Engineer",
        currentCompany: "Amazon",
        companyLogoUrl: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
        avatarUrl: "https://placehold.co/200x200.png",
        quote: "My internship at BitEdge was a masterclass in real-world security challenges. It prepared me for a fast-paced career at a major tech company.",
        linkedinUrl: "#"
    }
];
const memes = [
    {
        id: 1,
        title: "It works on my machine",
        imageUrl: "https://placehold.co/500x500.png",
        imageHint: "funny meme",
        submittedBy: "The Backend Team"
    },
    {
        id: 2,
        title: "Merging to main on Friday",
        imageUrl: "https://placehold.co/500x500.png",
        imageHint: "funny meme",
        submittedBy: "A Brave Soul"
    },
    {
        id: 3,
        title: "CSS is awesome",
        imageUrl: "https://placehold.co/500x500.png",
        imageHint: "funny meme",
        submittedBy: "The Frontend Team"
    },
    {
        id: 4,
        title: "This meeting could have been an email",
        imageUrl: "https://placehold.co/500x500.png",
        imageHint: "funny meme",
        submittedBy: "Everyone"
    },
    {
        id: 5,
        title: "Another JS Framework",
        imageUrl: "https://placehold.co/500x500.png",
        imageHint: "funny meme",
        submittedBy: "A Tired Developer"
    },
    {
        id: 6,
        title: "When the PM adds 'one more thing'",
        imageUrl: "https://placehold.co/500x500.png",
        imageHint: "funny meme",
        submittedBy: "The Dev Team"
    },
    {
        id: 7,
        title: "What the client wants vs. the budget",
        imageUrl: "https://placehold.co/500x500.png",
        imageHint: "funny meme",
        submittedBy: "Sales Department"
    },
    {
        id: 8,
        title: "Let's circle back on that",
        imageUrl: "https://placehold.co/500x500.png",
        imageHint: "funny meme",
        submittedBy: "Corporate Jargon Inc."
    }
];
const technologies = [
    {
        name: 'React & Next.js',
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$code$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Code$3e$__["Code"], {
            className: "h-8 w-8"
        }, void 0, false, {
            fileName: "[project]/src/lib/data.tsx",
            lineNumber: 810,
            columnNumber: 38
        }, this),
        description: 'For building performant, server-rendered web applications.'
    },
    {
        name: 'Node.js',
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$server$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Server$3e$__["Server"], {
            className: "h-8 w-8"
        }, void 0, false, {
            fileName: "[project]/src/lib/data.tsx",
            lineNumber: 811,
            columnNumber: 30
        }, this),
        description: 'Our choice for scalable and efficient backend services.'
    },
    {
        name: 'Google Cloud & Firebase',
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cloud$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cloud$3e$__["Cloud"], {
            className: "h-8 w-8"
        }, void 0, false, {
            fileName: "[project]/src/lib/data.tsx",
            lineNumber: 812,
            columnNumber: 46
        }, this),
        description: 'For robust, scalable, and serverless infrastructure.'
    },
    {
        name: 'React Native',
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$smartphone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Smartphone$3e$__["Smartphone"], {
            className: "h-8 w-8"
        }, void 0, false, {
            fileName: "[project]/src/lib/data.tsx",
            lineNumber: 813,
            columnNumber: 35
        }, this),
        description: 'To build beautiful, cross-platform mobile applications.'
    },
    {
        name: 'Genkit & Gemini',
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$brain$2d$circuit$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BrainCircuit$3e$__["BrainCircuit"], {
            className: "h-8 w-8"
        }, void 0, false, {
            fileName: "[project]/src/lib/data.tsx",
            lineNumber: 814,
            columnNumber: 38
        }, this),
        description: 'To power our AI-driven features and automation.'
    },
    {
        name: 'PostgreSQL',
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$database$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Database$3e$__["Database"], {
            className: "h-8 w-8"
        }, void 0, false, {
            fileName: "[project]/src/lib/data.tsx",
            lineNumber: 815,
            columnNumber: 33
        }, this),
        description: 'Our go-to for reliable and powerful relational databases.'
    }
];
const industries = [
    {
        name: 'FinTech',
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$scale$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Scale$3e$__["Scale"], {
            className: "h-8 w-8"
        }, void 0, false, {
            fileName: "[project]/src/lib/data.tsx",
            lineNumber: 819,
            columnNumber: 30
        }, this),
        description: 'Secure and scalable financial applications.'
    },
    {
        name: 'Healthcare',
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"], {
            className: "h-8 w-8"
        }, void 0, false, {
            fileName: "[project]/src/lib/data.tsx",
            lineNumber: 820,
            columnNumber: 33
        }, this),
        description: 'HIPAA-compliant software and data solutions.'
    },
    {
        name: 'E-commerce',
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$cart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingCart$3e$__["ShoppingCart"], {
            className: "h-8 w-8"
        }, void 0, false, {
            fileName: "[project]/src/lib/data.tsx",
            lineNumber: 821,
            columnNumber: 33
        }, this),
        description: 'High-traffic, conversion-optimized retail platforms.'
    },
    {
        name: 'Manufacturing',
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$factory$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Factory$3e$__["Factory"], {
            className: "h-8 w-8"
        }, void 0, false, {
            fileName: "[project]/src/lib/data.tsx",
            lineNumber: 822,
            columnNumber: 36
        }, this),
        description: 'Process automation and supply chain optimization.'
    },
    {
        name: 'Education',
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$university$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__University$3e$__["University"], {
            className: "h-8 w-8"
        }, void 0, false, {
            fileName: "[project]/src/lib/data.tsx",
            lineNumber: 823,
            columnNumber: 32
        }, this),
        description: 'Engaging e-learning platforms and tools.'
    },
    {
        name: 'Non-profit',
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$hand$2d$helping$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__HelpingHand$3e$__["HelpingHand"], {
            className: "h-8 w-8"
        }, void 0, false, {
            fileName: "[project]/src/lib/data.tsx",
            lineNumber: 824,
            columnNumber: 33
        }, this),
        description: 'Technology to amplify social impact and outreach.'
    }
];
const creditTiers = [
    {
        name: "Starter",
        price: 2500,
        description: "Perfect for small projects & maintenance.",
        features: [
            "20 Development Hours",
            "Standard Support",
            "Credits valid for 3 months"
        ],
        popular: false
    },
    {
        name: "Pro",
        price: 5000,
        description: "Ideal for medium-sized features.",
        features: [
            "45 Development Hours (5 free!)",
            "Priority Support",
            "Access to a Project Manager",
            "Credits valid for 6 months"
        ],
        popular: true
    },
    {
        name: "Business",
        price: 10000,
        description: "Best value for ongoing development.",
        features: [
            "100 Development Hours (10 free!)",
            "Dedicated Support Channel",
            "Bi-weekly Strategy Calls",
            "Credits valid for 12 months"
        ],
        popular: false
    }
];
const creditFaqs = [
    {
        question: "What can I use credits for?",
        answer: "Credits can be used for any of our services, including custom development, UI/UX design, cloud consulting, and maintenance tasks. One credit is equivalent to one hour of work from our team."
    },
    {
        question: "How do I track my credit usage?",
        answer: "Once you purchase a credit package, you will get access to a client portal where you can see your remaining credit balance, view detailed usage reports, and approve new work items."
    },
    {
        question: "Do credits expire?",
        answer: "Yes, credits have an expiration period depending on the package you purchase. The 'Starter' package credits are valid for 3 months, 'Pro' for 6 months, and 'Business' for 12 months."
    },
    {
        question: "Can I top up my credits?",
        answer: "Absolutely. You can purchase additional credit packages at any time. Many of our clients maintain a credit balance to ensure development work can begin immediately without contract or payment delays."
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/blog/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>BlogPage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
//import Image from 'next/image';
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/badge.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/data.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/input.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/mail.js [app-client] (ecmascript) <export default as Mail>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$newsletter$2d$form$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/layout/newsletter-form.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
;
;
;
const allCategories = [
    'All',
    ...new Set(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["blogPosts"].map((p)=>p.category))
];
function BlogPage() {
    _s();
    const [searchQuery, setSearchQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [selectedCategory, setSelectedCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('All');
    const filteredPosts = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["blogPosts"].filter((post)=>{
        const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
        const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-background",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "bg-card py-20 md:py-24",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container mx-auto px-4 text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-4xl md:text-6xl font-bold font-headline",
                            children: "BitEdge Insights"
                        }, void 0, false, {
                            fileName: "[project]/src/app/blog/page.tsx",
                            lineNumber: 36,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-4 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto",
                            children: "Your source for the latest in IT, cybersecurity, and technology trends."
                        }, void 0, false, {
                            fileName: "[project]/src/app/blog/page.tsx",
                            lineNumber: 39,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/blog/page.tsx",
                    lineNumber: 35,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/blog/page.tsx",
                lineNumber: 34,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "py-16 md:py-24",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container mx-auto px-4",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 lg:grid-cols-12 gap-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                                className: "lg:col-span-8",
                                children: filteredPosts.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-1 gap-12",
                                    children: filteredPosts.map((post)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                            className: "group flex flex-col md:flex-row overflow-hidden bg-card border-border hover:border-primary transition-all duration-300",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "md:w-2/5 relative min-h-[250px] md:min-h-0"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/blog/page.tsx",
                                                    lineNumber: 58,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "md:w-3/5 p-6 flex flex-col",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                                                    variant: "secondary",
                                                                    className: "mb-2",
                                                                    children: post.category
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/blog/page.tsx",
                                                                    lineNumber: 62,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                    href: `/blog/${post.slug}`,
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                                        className: "text-2xl font-bold font-headline hover:text-primary transition-colors",
                                                                        children: post.title
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/blog/page.tsx",
                                                                        lineNumber: 66,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/blog/page.tsx",
                                                                    lineNumber: 65,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-sm text-muted-foreground mt-2 mb-4",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            children: [
                                                                                "By ",
                                                                                post.author
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/blog/page.tsx",
                                                                            lineNumber: 71,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        " •",
                                                                        ' ',
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            children: post.date
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/blog/page.tsx",
                                                                            lineNumber: 72,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/blog/page.tsx",
                                                                    lineNumber: 70,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-muted-foreground leading-relaxed",
                                                                    children: post.excerpt
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/blog/page.tsx",
                                                                    lineNumber: 74,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/blog/page.tsx",
                                                            lineNumber: 61,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "mt-auto pt-4",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                                asChild: true,
                                                                variant: "link",
                                                                className: "p-0 text-primary",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                    href: `/blog/${post.slug}`,
                                                                    children: [
                                                                        "Read More",
                                                                        ' ',
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                                            className: "ml-2 h-4 w-4"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/blog/page.tsx",
                                                                            lineNumber: 86,
                                                                            columnNumber: 31
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/blog/page.tsx",
                                                                    lineNumber: 84,
                                                                    columnNumber: 29
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/blog/page.tsx",
                                                                lineNumber: 79,
                                                                columnNumber: 27
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/blog/page.tsx",
                                                            lineNumber: 78,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/blog/page.tsx",
                                                    lineNumber: 60,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, post.id, true, {
                                            fileName: "[project]/src/app/blog/page.tsx",
                                            lineNumber: 54,
                                            columnNumber: 21
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/app/blog/page.tsx",
                                    lineNumber: 52,
                                    columnNumber: 17
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-center py-16 bg-card rounded-lg",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-2xl font-bold font-headline",
                                            children: "No Posts Found"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/blog/page.tsx",
                                            lineNumber: 96,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-muted-foreground mt-2",
                                            children: "Try adjusting your search or filter."
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/blog/page.tsx",
                                            lineNumber: 97,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/blog/page.tsx",
                                    lineNumber: 95,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/blog/page.tsx",
                                lineNumber: 50,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                                className: "lg:col-span-4",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "sticky top-24 space-y-8",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                            className: "bg-card",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                                        className: "text-xl font-bold font-headline",
                                                        children: "Search"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/blog/page.tsx",
                                                        lineNumber: 107,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/blog/page.tsx",
                                                    lineNumber: 106,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                        placeholder: "Search articles...",
                                                        value: searchQuery,
                                                        onChange: (e)=>setSearchQuery(e.target.value)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/blog/page.tsx",
                                                        lineNumber: 112,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/blog/page.tsx",
                                                    lineNumber: 111,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/blog/page.tsx",
                                            lineNumber: 105,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                            className: "bg-card",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                                        className: "text-xl font-bold font-headline",
                                                        children: "Categories"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/blog/page.tsx",
                                                        lineNumber: 121,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/blog/page.tsx",
                                                    lineNumber: 120,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex flex-wrap gap-2",
                                                        children: allCategories.map((category)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                                variant: "ghost",
                                                                size: "sm",
                                                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("rounded-full", selectedCategory === category ? 'bg-primary text-primary-foreground hover:bg-primary/90' : 'bg-muted text-muted-foreground hover:bg-muted/80'),
                                                                onClick: ()=>setSelectedCategory(category),
                                                                children: category
                                                            }, category, false, {
                                                                fileName: "[project]/src/app/blog/page.tsx",
                                                                lineNumber: 128,
                                                                columnNumber: 25
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/blog/page.tsx",
                                                        lineNumber: 126,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/blog/page.tsx",
                                                    lineNumber: 125,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/blog/page.tsx",
                                            lineNumber: 119,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                            className: "bg-card",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                                        className: "text-xl font-bold font-headline",
                                                        children: "Recent Posts"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/blog/page.tsx",
                                                        lineNumber: 148,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/blog/page.tsx",
                                                    lineNumber: 147,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                        className: "space-y-3",
                                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["blogPosts"].slice(0, 3).map((post)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                        href: `/blog/${post.slug}`,
                                                                        className: "font-semibold text-foreground hover:text-primary",
                                                                        children: post.title
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/blog/page.tsx",
                                                                        lineNumber: 156,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-sm text-muted-foreground",
                                                                        children: post.date
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/blog/page.tsx",
                                                                        lineNumber: 162,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, post.id, true, {
                                                                fileName: "[project]/src/app/blog/page.tsx",
                                                                lineNumber: 155,
                                                                columnNumber: 25
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/blog/page.tsx",
                                                        lineNumber: 153,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/blog/page.tsx",
                                                    lineNumber: 152,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/blog/page.tsx",
                                            lineNumber: 146,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                            className: "bg-card text-center p-6",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"], {
                                                    className: "h-10 w-10 text-primary mx-auto mb-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/blog/page.tsx",
                                                    lineNumber: 171,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-xl font-bold font-headline mb-2",
                                                    children: "Stay Updated"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/blog/page.tsx",
                                                    lineNumber: 172,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-muted-foreground mb-4 text-sm",
                                                    children: "Subscribe to our newsletter for the latest articles directly in your inbox."
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/blog/page.tsx",
                                                    lineNumber: 173,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$newsletter$2d$form$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NewsletterForm"], {}, void 0, false, {
                                                    fileName: "[project]/src/app/blog/page.tsx",
                                                    lineNumber: 174,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/blog/page.tsx",
                                            lineNumber: 170,
                                            columnNumber: 18
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/blog/page.tsx",
                                    lineNumber: 104,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/blog/page.tsx",
                                lineNumber: 103,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/blog/page.tsx",
                        lineNumber: 49,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/blog/page.tsx",
                    lineNumber: 48,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/blog/page.tsx",
                lineNumber: 47,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/blog/page.tsx",
        lineNumber: 32,
        columnNumber: 5
    }, this);
}
_s(BlogPage, "F0aGDP0IOyDLd6X3sL3rYET3Ooc=");
_c = BlogPage;
var _c;
__turbopack_context__.k.register(_c, "BlogPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_3d557c3b._.js.map