"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./data/dummy-data.ts":
/*!****************************!*\
  !*** ./data/dummy-data.ts ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   customers: function() { return /* binding */ customers; },\n/* harmony export */   initialOrderLines: function() { return /* binding */ initialOrderLines; },\n/* harmony export */   paymentMethods: function() { return /* binding */ paymentMethods; },\n/* harmony export */   products: function() { return /* binding */ products; },\n/* harmony export */   sampleSalesOrders: function() { return /* binding */ sampleSalesOrders; },\n/* harmony export */   shippingMethods: function() { return /* binding */ shippingMethods; },\n/* harmony export */   warehouses: function() { return /* binding */ warehouses; }\n/* harmony export */ });\n/* harmony import */ var _boot_axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/boot/axios */ \"(app-pages-browser)/./boot/axios.ts\");\n\nconst initialOrderLines = getOrderLines(71126, 12);\nconsole.log(\"adem:\", initialOrderLines);\nconst getOrderLines = async ()=>{\n    try {\n        // Attendre que fetchOrderLines renvoie les données\n        const initialOrderLines = await (0,_boot_axios__WEBPACK_IMPORTED_MODULE_0__.fetchOrderLines)(71126, 12);\n        console.log(\"adem:\", initialOrderLines);\n    } catch (error) {\n        console.error(\"Erreur lors de la r\\xe9cup\\xe9ration des lignes de commande:\", error);\n    }\n};\nconst customers = [\n    {\n        id: \"1\",\n        name: \"Acme Corp\",\n        email: \"contact@acme.com\",\n        phone: \"123-456-7890\",\n        billingAddress: {\n            street: \"123 Main St\",\n            city: \"New York\",\n            state: \"NY\",\n            country: \"USA\",\n            postalCode: \"10001\"\n        },\n        shippingAddress: {\n            street: \"456 Warehouse Ave\",\n            city: \"New Jersey\",\n            state: \"NJ\",\n            country: \"USA\",\n            postalCode: \"07001\"\n        },\n        taxId: \"12-3456789\",\n        creditLimit: 50000,\n        paymentTerms: \"Net 30\",\n        insights: {\n            totalOrders: 47,\n            averageOrderValue: 3250,\n            outstandingPayments: 12500,\n            lastOrderDate: new Date(\"2024-01-10\"),\n            preferredShippingMethod: \"2\",\n            preferredPaymentMethod: \"1\",\n            preferredWarehouse: \"1\",\n            isPreferredCustomer: true,\n            creditUtilization: 75\n        },\n        preferences: {\n            defaultShippingAddress: {\n                street: \"456 Warehouse Ave\",\n                city: \"New Jersey\",\n                state: \"NJ\",\n                country: \"USA\",\n                postalCode: \"07001\"\n            },\n            defaultBillingAddress: {\n                street: \"123 Main St\",\n                city: \"New York\",\n                state: \"NY\",\n                country: \"USA\",\n                postalCode: \"10001\"\n            },\n            defaultPaymentTerms: \"net30\",\n            defaultShippingMethod: \"2\",\n            defaultPaymentMethod: \"1\",\n            taxExempt: true,\n            taxExemptionNumber: \"TE-12345\",\n            specialPricing: true,\n            notes: \"VIP customer - handle with priority\"\n        }\n    },\n    {\n        id: \"2\",\n        name: \"TechStart Inc\",\n        email: \"info@techstart.com\",\n        phone: \"987-654-3210\",\n        billingAddress: {\n            street: \"789 Innovation Blvd\",\n            city: \"San Francisco\",\n            state: \"CA\",\n            country: \"USA\",\n            postalCode: \"94105\"\n        },\n        shippingAddress: {\n            street: \"789 Innovation Blvd\",\n            city: \"San Francisco\",\n            state: \"CA\",\n            country: \"USA\",\n            postalCode: \"94105\"\n        },\n        taxId: \"98-7654321\",\n        creditLimit: 100000,\n        paymentTerms: \"Net 60\",\n        insights: {\n            totalOrders: 12,\n            averageOrderValue: 5750,\n            outstandingPayments: 0,\n            lastOrderDate: new Date(\"2024-01-05\"),\n            preferredShippingMethod: \"3\",\n            preferredPaymentMethod: \"2\",\n            preferredWarehouse: \"2\",\n            isPreferredCustomer: false,\n            creditUtilization: 25\n        },\n        preferences: {\n            defaultShippingAddress: {\n                street: \"789 Innovation Blvd\",\n                city: \"San Francisco\",\n                state: \"CA\",\n                country: \"USA\",\n                postalCode: \"94105\"\n            },\n            defaultBillingAddress: {\n                street: \"789 Innovation Blvd\",\n                city: \"San Francisco\",\n                state: \"CA\",\n                country: \"USA\",\n                postalCode: \"94105\"\n            },\n            defaultPaymentTerms: \"net60\",\n            defaultShippingMethod: \"3\",\n            defaultPaymentMethod: \"2\",\n            taxExempt: false,\n            specialPricing: false,\n            notes: \"New tech startup - growing account\"\n        }\n    }\n];\nconst products = [\n    {\n        id: \"1\",\n        name: \"Premium Laptop\",\n        code: \"TECH-001\",\n        description: \"High-performance laptop for professionals\",\n        unitPrice: 1299.99,\n        taxRate: 8.5,\n        inStock: 50,\n        category: \"Electronics\"\n    },\n    {\n        id: \"2\",\n        name: \"Wireless Mouse\",\n        code: \"ACC-001\",\n        description: \"Ergonomic wireless mouse\",\n        unitPrice: 29.99,\n        taxRate: 8.5,\n        inStock: 200,\n        category: \"Accessories\"\n    },\n    {\n        id: \"3\",\n        name: \"4K Monitor\",\n        code: \"DISP-001\",\n        description: \"Ultra-sharp 4K display\",\n        unitPrice: 399.99,\n        taxRate: 8.5,\n        inStock: 30,\n        category: \"Electronics\"\n    }\n];\nconst warehouses = [\n    {\n        id: \"1\",\n        name: \"Main Warehouse\",\n        address: {\n            street: \"100 Storage Lane\",\n            city: \"Chicago\",\n            state: \"IL\",\n            country: \"USA\",\n            postalCode: \"60601\"\n        }\n    },\n    {\n        id: \"2\",\n        name: \"West Coast Fulfillment Center\",\n        address: {\n            street: \"200 Dock Road\",\n            city: \"Los Angeles\",\n            state: \"CA\",\n            country: \"USA\",\n            postalCode: \"90001\"\n        }\n    }\n];\nconst shippingMethods = [\n    {\n        id: \"1\",\n        name: \"Standard Shipping\",\n        cost: 9.99,\n        estimatedDeliveryDays: 5\n    },\n    {\n        id: \"2\",\n        name: \"Express Shipping\",\n        cost: 19.99,\n        estimatedDeliveryDays: 2\n    },\n    {\n        id: \"3\",\n        name: \"Overnight Shipping\",\n        cost: 29.99,\n        estimatedDeliveryDays: 1\n    }\n];\nconst paymentMethods = [\n    {\n        id: \"1\",\n        name: \"Credit Card\"\n    },\n    {\n        id: \"2\",\n        name: \"Bank Transfer\"\n    },\n    {\n        id: \"3\",\n        name: \"Cash on Delivery\"\n    },\n    {\n        id: \"4\",\n        name: \"PayPal\"\n    }\n];\nconst sampleSalesOrders = [\n    {\n        id: \"1\",\n        orderNumber: \"SO-2024-001\",\n        customerId: \"1\",\n        status: \"delivered\",\n        orderDate: new Date(\"2024-01-02\"),\n        deliveryDate: new Date(\"2024-01-07\"),\n        dueDate: new Date(\"2024-02-01\"),\n        paymentTerms: \"net30\",\n        currency: \"USD\",\n        subtotal: 2749.93,\n        taxTotal: 233.74,\n        discountTotal: 137.50,\n        shippingCost: 19.99,\n        total: 2866.16,\n        notes: \"Priority delivery requested\",\n        customerNotes: \"Please deliver to loading dock B\",\n        internalNotes: \"VIP customer - handle with care\",\n        orderLines: [\n            {\n                id: \"1\",\n                productId: \"1\",\n                productName: \"Premium Laptop\",\n                productCode: \"TECH-001\",\n                quantity: 2,\n                unitPrice: 1299.99,\n                taxRate: 8.5,\n                discount: 5,\n                subTotal: 2599.98,\n                total: 2681.98,\n                unit: \"piece\",\n                warehouse: \"1\",\n                isCustom: false\n            },\n            {\n                id: \"2\",\n                productId: \"2\",\n                productName: \"Wireless Mouse\",\n                productCode: \"ACC-001\",\n                quantity: 5,\n                unitPrice: 29.99,\n                taxRate: 8.5,\n                discount: 0,\n                subTotal: 149.95,\n                total: 162.70,\n                unit: \"piece\",\n                warehouse: \"1\",\n                isCustom: false\n            }\n        ],\n        shippingMethod: \"2\",\n        trackingNumber: \"EXP123456789\",\n        paymentMethod: \"1\",\n        isPaid: true\n    },\n    {\n        id: \"2\",\n        orderNumber: \"SO-2024-002\",\n        customerId: \"2\",\n        status: \"processing\",\n        orderDate: new Date(\"2024-01-05\"),\n        deliveryDate: new Date(\"2024-01-12\"),\n        dueDate: new Date(\"2024-03-05\"),\n        paymentTerms: \"net60\",\n        currency: \"USD\",\n        subtotal: 1599.96,\n        taxTotal: 135.99,\n        discountTotal: 0,\n        shippingCost: 29.99,\n        total: 1765.94,\n        notes: \"Bulk order for new office\",\n        orderLines: [\n            {\n                id: \"3\",\n                productId: \"3\",\n                productName: \"4K Monitor\",\n                productCode: \"DISP-001\",\n                quantity: 4,\n                unitPrice: 399.99,\n                taxRate: 8.5,\n                discount: 0,\n                subTotal: 1599.96,\n                total: 1735.95,\n                unit: \"piece\",\n                warehouse: \"2\",\n                isCustom: false\n            }\n        ],\n        shippingMethod: \"3\",\n        trackingNumber: \"ONS987654321\",\n        paymentMethod: \"2\",\n        isPaid: false\n    },\n    {\n        id: \"3\",\n        orderNumber: \"SO-2024-003\",\n        customerId: \"1\",\n        status: \"pending\",\n        orderDate: new Date(\"2024-01-10\"),\n        dueDate: new Date(\"2024-02-09\"),\n        paymentTerms: \"net30\",\n        currency: \"USD\",\n        subtotal: 899.97,\n        taxTotal: 76.50,\n        discountTotal: 89.99,\n        shippingCost: 9.99,\n        total: 896.47,\n        customerNotes: \"Please include installation manual\",\n        orderLines: [\n            {\n                id: \"4\",\n                productId: \"2\",\n                productName: \"Wireless Mouse\",\n                productCode: \"ACC-001\",\n                quantity: 30,\n                unitPrice: 29.99,\n                taxRate: 8.5,\n                discount: 10,\n                subTotal: 899.97,\n                total: 886.48,\n                unit: \"piece\",\n                warehouse: \"1\",\n                isCustom: false\n            }\n        ],\n        shippingMethod: \"1\",\n        paymentMethod: \"1\",\n        isPaid: false\n    }\n];\n\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFdBQVc7Z0JBQ1hDLFVBQVU7WUFDWjtTQUNEO1FBQ0RDLGdCQUFnQjtRQUNoQkMsZ0JBQWdCO1FBQ2hCQyxlQUFlO1FBQ2ZDLFFBQVE7SUFDVjtJQUNBO1FBQ0U1RSxJQUFJO1FBQ0ppRCxhQUFhO1FBQ2JDLFlBQVk7UUFDWkMsUUFBUTtRQUNSQyxXQUFXLElBQUlqQyxLQUFLO1FBQ3BCbUMsU0FBUyxJQUFJbkMsS0FBSztRQUNsQk4sY0FBYztRQUNkMEMsVUFBVTtRQUNWQyxVQUFVO1FBQ1ZDLFVBQVU7UUFDVkMsZUFBZTtRQUNmQyxjQUFjO1FBQ2RDLE9BQU87UUFDUEMsZUFBZTtRQUNmRSxZQUFZO1lBQ1Y7Z0JBQ0UvRCxJQUFJO2dCQUNKZ0UsV0FBVztnQkFDWEMsYUFBYTtnQkFDYkMsYUFBYTtnQkFDYkMsVUFBVTtnQkFDVjdCLFdBQVc7Z0JBQ1hDLFNBQVM7Z0JBQ1Q2QixVQUFVO2dCQUNWQyxVQUFVO2dCQUNWVCxPQUFPO2dCQUNQVSxNQUFNO2dCQUNOQyxXQUFXO2dCQUNYQyxVQUFVO1lBQ1o7U0FDRDtRQUNEQyxnQkFBZ0I7UUFDaEJFLGVBQWU7UUFDZkMsUUFBUTtJQUNWO0NBQ0Q7QUFVQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9kYXRhL2R1bW15LWRhdGEudHM/ZDZmYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDdXN0b21lciwgUHJvZHVjdCwgV2FyZWhvdXNlLCBTaGlwcGluZ01ldGhvZCwgUGF5bWVudE1ldGhvZCwgT3JkZXJMaW5lLCBTYWxlc09yZGVyIH0gZnJvbSAnQC90eXBlcy9zYWxlcy1vcmRlcidcbmltcG9ydCB7IGZldGNoT3JkZXJMaW5lcyB9IGZyb20gJ0AvYm9vdC9heGlvcyc7XG5cbmNvbnN0IGluaXRpYWxPcmRlckxpbmVzID0gZ2V0T3JkZXJMaW5lcyg3MTEyNiwgMTIpO1xuY29uc29sZS5sb2coXCJhZGVtOlwiLCBpbml0aWFsT3JkZXJMaW5lcyk7XG5cbmNvbnN0IGdldE9yZGVyTGluZXMgPSBhc3luYyAoKSA9PiB7XG4gIHRyeSB7XG4gICAgLy8gQXR0ZW5kcmUgcXVlIGZldGNoT3JkZXJMaW5lcyByZW52b2llIGxlcyBkb25uw6llc1xuICAgIGNvbnN0IGluaXRpYWxPcmRlckxpbmVzID0gYXdhaXQgZmV0Y2hPcmRlckxpbmVzKDcxMTI2LCAxMik7XG4gICAgY29uc29sZS5sb2coXCJhZGVtOlwiLCBpbml0aWFsT3JkZXJMaW5lcyk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihcIkVycmV1ciBsb3JzIGRlIGxhIHLDqWN1cMOpcmF0aW9uIGRlcyBsaWduZXMgZGUgY29tbWFuZGU6XCIsIGVycm9yKTtcbiAgfVxufTtcblxuY29uc3QgY3VzdG9tZXJzOiBDdXN0b21lcltdID0gW1xuICB7XG4gICAgaWQ6IFwiMVwiLFxuICAgIG5hbWU6IFwiQWNtZSBDb3JwXCIsXG4gICAgZW1haWw6IFwiY29udGFjdEBhY21lLmNvbVwiLFxuICAgIHBob25lOiBcIjEyMy00NTYtNzg5MFwiLFxuICAgIGJpbGxpbmdBZGRyZXNzOiB7XG4gICAgICBzdHJlZXQ6IFwiMTIzIE1haW4gU3RcIixcbiAgICAgIGNpdHk6IFwiTmV3IFlvcmtcIixcbiAgICAgIHN0YXRlOiBcIk5ZXCIsXG4gICAgICBjb3VudHJ5OiBcIlVTQVwiLFxuICAgICAgcG9zdGFsQ29kZTogXCIxMDAwMVwiXG4gICAgfSxcbiAgICBzaGlwcGluZ0FkZHJlc3M6IHtcbiAgICAgIHN0cmVldDogXCI0NTYgV2FyZWhvdXNlIEF2ZVwiLFxuICAgICAgY2l0eTogXCJOZXcgSmVyc2V5XCIsXG4gICAgICBzdGF0ZTogXCJOSlwiLFxuICAgICAgY291bnRyeTogXCJVU0FcIixcbiAgICAgIHBvc3RhbENvZGU6IFwiMDcwMDFcIlxuICAgIH0sXG4gICAgdGF4SWQ6IFwiMTItMzQ1Njc4OVwiLFxuICAgIGNyZWRpdExpbWl0OiA1MDAwMCxcbiAgICBwYXltZW50VGVybXM6IFwiTmV0IDMwXCIsXG4gICAgaW5zaWdodHM6IHtcbiAgICAgIHRvdGFsT3JkZXJzOiA0NyxcbiAgICAgIGF2ZXJhZ2VPcmRlclZhbHVlOiAzMjUwLFxuICAgICAgb3V0c3RhbmRpbmdQYXltZW50czogMTI1MDAsXG4gICAgICBsYXN0T3JkZXJEYXRlOiBuZXcgRGF0ZShcIjIwMjQtMDEtMTBcIiksXG4gICAgICBwcmVmZXJyZWRTaGlwcGluZ01ldGhvZDogXCIyXCIsXG4gICAgICBwcmVmZXJyZWRQYXltZW50TWV0aG9kOiBcIjFcIixcbiAgICAgIHByZWZlcnJlZFdhcmVob3VzZTogXCIxXCIsXG4gICAgICBpc1ByZWZlcnJlZEN1c3RvbWVyOiB0cnVlLFxuICAgICAgY3JlZGl0VXRpbGl6YXRpb246IDc1XG4gICAgfSxcbiAgICBwcmVmZXJlbmNlczoge1xuICAgICAgZGVmYXVsdFNoaXBwaW5nQWRkcmVzczoge1xuICAgICAgICBzdHJlZXQ6IFwiNDU2IFdhcmVob3VzZSBBdmVcIixcbiAgICAgICAgY2l0eTogXCJOZXcgSmVyc2V5XCIsXG4gICAgICAgIHN0YXRlOiBcIk5KXCIsXG4gICAgICAgIGNvdW50cnk6IFwiVVNBXCIsXG4gICAgICAgIHBvc3RhbENvZGU6IFwiMDcwMDFcIlxuICAgICAgfSxcbiAgICAgIGRlZmF1bHRCaWxsaW5nQWRkcmVzczoge1xuICAgICAgICBzdHJlZXQ6IFwiMTIzIE1haW4gU3RcIixcbiAgICAgICAgY2l0eTogXCJOZXcgWW9ya1wiLFxuICAgICAgICBzdGF0ZTogXCJOWVwiLFxuICAgICAgICBjb3VudHJ5OiBcIlVTQVwiLFxuICAgICAgICBwb3N0YWxDb2RlOiBcIjEwMDAxXCJcbiAgICAgIH0sXG4gICAgICBkZWZhdWx0UGF5bWVudFRlcm1zOiBcIm5ldDMwXCIsXG4gICAgICBkZWZhdWx0U2hpcHBpbmdNZXRob2Q6IFwiMlwiLFxuICAgICAgZGVmYXVsdFBheW1lbnRNZXRob2Q6IFwiMVwiLFxuICAgICAgdGF4RXhlbXB0OiB0cnVlLFxuICAgICAgdGF4RXhlbXB0aW9uTnVtYmVyOiBcIlRFLTEyMzQ1XCIsXG4gICAgICBzcGVjaWFsUHJpY2luZzogdHJ1ZSxcbiAgICAgIG5vdGVzOiBcIlZJUCBjdXN0b21lciAtIGhhbmRsZSB3aXRoIHByaW9yaXR5XCJcbiAgICB9XG4gIH0sXG4gIHtcbiAgICBpZDogXCIyXCIsXG4gICAgbmFtZTogXCJUZWNoU3RhcnQgSW5jXCIsXG4gICAgZW1haWw6IFwiaW5mb0B0ZWNoc3RhcnQuY29tXCIsXG4gICAgcGhvbmU6IFwiOTg3LTY1NC0zMjEwXCIsXG4gICAgYmlsbGluZ0FkZHJlc3M6IHtcbiAgICAgIHN0cmVldDogXCI3ODkgSW5ub3ZhdGlvbiBCbHZkXCIsXG4gICAgICBjaXR5OiBcIlNhbiBGcmFuY2lzY29cIixcbiAgICAgIHN0YXRlOiBcIkNBXCIsXG4gICAgICBjb3VudHJ5OiBcIlVTQVwiLFxuICAgICAgcG9zdGFsQ29kZTogXCI5NDEwNVwiXG4gICAgfSxcbiAgICBzaGlwcGluZ0FkZHJlc3M6IHtcbiAgICAgIHN0cmVldDogXCI3ODkgSW5ub3ZhdGlvbiBCbHZkXCIsXG4gICAgICBjaXR5OiBcIlNhbiBGcmFuY2lzY29cIixcbiAgICAgIHN0YXRlOiBcIkNBXCIsXG4gICAgICBjb3VudHJ5OiBcIlVTQVwiLFxuICAgICAgcG9zdGFsQ29kZTogXCI5NDEwNVwiXG4gICAgfSxcbiAgICB0YXhJZDogXCI5OC03NjU0MzIxXCIsXG4gICAgY3JlZGl0TGltaXQ6IDEwMDAwMCxcbiAgICBwYXltZW50VGVybXM6IFwiTmV0IDYwXCIsXG4gICAgaW5zaWdodHM6IHtcbiAgICAgIHRvdGFsT3JkZXJzOiAxMixcbiAgICAgIGF2ZXJhZ2VPcmRlclZhbHVlOiA1NzUwLFxuICAgICAgb3V0c3RhbmRpbmdQYXltZW50czogMCxcbiAgICAgIGxhc3RPcmRlckRhdGU6IG5ldyBEYXRlKFwiMjAyNC0wMS0wNVwiKSxcbiAgICAgIHByZWZlcnJlZFNoaXBwaW5nTWV0aG9kOiBcIjNcIixcbiAgICAgIHByZWZlcnJlZFBheW1lbnRNZXRob2Q6IFwiMlwiLFxuICAgICAgcHJlZmVycmVkV2FyZWhvdXNlOiBcIjJcIixcbiAgICAgIGlzUHJlZmVycmVkQ3VzdG9tZXI6IGZhbHNlLFxuICAgICAgY3JlZGl0VXRpbGl6YXRpb246IDI1XG4gICAgfSxcbiAgICBwcmVmZXJlbmNlczoge1xuICAgICAgZGVmYXVsdFNoaXBwaW5nQWRkcmVzczoge1xuICAgICAgICBzdHJlZXQ6IFwiNzg5IElubm92YXRpb24gQmx2ZFwiLFxuICAgICAgICBjaXR5OiBcIlNhbiBGcmFuY2lzY29cIixcbiAgICAgICAgc3RhdGU6IFwiQ0FcIixcbiAgICAgICAgY291bnRyeTogXCJVU0FcIixcbiAgICAgICAgcG9zdGFsQ29kZTogXCI5NDEwNVwiXG4gICAgICB9LFxuICAgICAgZGVmYXVsdEJpbGxpbmdBZGRyZXNzOiB7XG4gICAgICAgIHN0cmVldDogXCI3ODkgSW5ub3ZhdGlvbiBCbHZkXCIsXG4gICAgICAgIGNpdHk6IFwiU2FuIEZyYW5jaXNjb1wiLFxuICAgICAgICBzdGF0ZTogXCJDQVwiLFxuICAgICAgICBjb3VudHJ5OiBcIlVTQVwiLFxuICAgICAgICBwb3N0YWxDb2RlOiBcIjk0MTA1XCJcbiAgICAgIH0sXG4gICAgICBkZWZhdWx0UGF5bWVudFRlcm1zOiBcIm5ldDYwXCIsXG4gICAgICBkZWZhdWx0U2hpcHBpbmdNZXRob2Q6IFwiM1wiLFxuICAgICAgZGVmYXVsdFBheW1lbnRNZXRob2Q6IFwiMlwiLFxuICAgICAgdGF4RXhlbXB0OiBmYWxzZSxcbiAgICAgIHNwZWNpYWxQcmljaW5nOiBmYWxzZSxcbiAgICAgIG5vdGVzOiBcIk5ldyB0ZWNoIHN0YXJ0dXAgLSBncm93aW5nIGFjY291bnRcIlxuICAgIH1cbiAgfVxuXVxuXG5jb25zdCBwcm9kdWN0czogUHJvZHVjdFtdID0gW1xuICB7XG4gICAgaWQ6IFwiMVwiLFxuICAgIG5hbWU6IFwiUHJlbWl1bSBMYXB0b3BcIixcbiAgICBjb2RlOiBcIlRFQ0gtMDAxXCIsXG4gICAgZGVzY3JpcHRpb246IFwiSGlnaC1wZXJmb3JtYW5jZSBsYXB0b3AgZm9yIHByb2Zlc3Npb25hbHNcIixcbiAgICB1bml0UHJpY2U6IDEyOTkuOTksXG4gICAgdGF4UmF0ZTogOC41LFxuICAgIGluU3RvY2s6IDUwLFxuICAgIGNhdGVnb3J5OiBcIkVsZWN0cm9uaWNzXCJcbiAgfSxcbiAge1xuICAgIGlkOiBcIjJcIixcbiAgICBuYW1lOiBcIldpcmVsZXNzIE1vdXNlXCIsXG4gICAgY29kZTogXCJBQ0MtMDAxXCIsXG4gICAgZGVzY3JpcHRpb246IFwiRXJnb25vbWljIHdpcmVsZXNzIG1vdXNlXCIsXG4gICAgdW5pdFByaWNlOiAyOS45OSxcbiAgICB0YXhSYXRlOiA4LjUsXG4gICAgaW5TdG9jazogMjAwLFxuICAgIGNhdGVnb3J5OiBcIkFjY2Vzc29yaWVzXCJcbiAgfSxcbiAge1xuICAgIGlkOiBcIjNcIixcbiAgICBuYW1lOiBcIjRLIE1vbml0b3JcIixcbiAgICBjb2RlOiBcIkRJU1AtMDAxXCIsXG4gICAgZGVzY3JpcHRpb246IFwiVWx0cmEtc2hhcnAgNEsgZGlzcGxheVwiLFxuICAgIHVuaXRQcmljZTogMzk5Ljk5LFxuICAgIHRheFJhdGU6IDguNSxcbiAgICBpblN0b2NrOiAzMCxcbiAgICBjYXRlZ29yeTogXCJFbGVjdHJvbmljc1wiXG4gIH1cbl1cblxuY29uc3Qgd2FyZWhvdXNlczogV2FyZWhvdXNlW10gPSBbXG4gIHtcbiAgICBpZDogXCIxXCIsXG4gICAgbmFtZTogXCJNYWluIFdhcmVob3VzZVwiLFxuICAgIGFkZHJlc3M6IHtcbiAgICAgIHN0cmVldDogXCIxMDAgU3RvcmFnZSBMYW5lXCIsXG4gICAgICBjaXR5OiBcIkNoaWNhZ29cIixcbiAgICAgIHN0YXRlOiBcIklMXCIsXG4gICAgICBjb3VudHJ5OiBcIlVTQVwiLFxuICAgICAgcG9zdGFsQ29kZTogXCI2MDYwMVwiXG4gICAgfVxuICB9LFxuICB7XG4gICAgaWQ6IFwiMlwiLFxuICAgIG5hbWU6IFwiV2VzdCBDb2FzdCBGdWxmaWxsbWVudCBDZW50ZXJcIixcbiAgICBhZGRyZXNzOiB7XG4gICAgICBzdHJlZXQ6IFwiMjAwIERvY2sgUm9hZFwiLFxuICAgICAgY2l0eTogXCJMb3MgQW5nZWxlc1wiLFxuICAgICAgc3RhdGU6IFwiQ0FcIixcbiAgICAgIGNvdW50cnk6IFwiVVNBXCIsXG4gICAgICBwb3N0YWxDb2RlOiBcIjkwMDAxXCJcbiAgICB9XG4gIH1cbl1cblxuY29uc3Qgc2hpcHBpbmdNZXRob2RzOiBTaGlwcGluZ01ldGhvZFtdID0gW1xuICB7XG4gICAgaWQ6IFwiMVwiLFxuICAgIG5hbWU6IFwiU3RhbmRhcmQgU2hpcHBpbmdcIixcbiAgICBjb3N0OiA5Ljk5LFxuICAgIGVzdGltYXRlZERlbGl2ZXJ5RGF5czogNVxuICB9LFxuICB7XG4gICAgaWQ6IFwiMlwiLFxuICAgIG5hbWU6IFwiRXhwcmVzcyBTaGlwcGluZ1wiLFxuICAgIGNvc3Q6IDE5Ljk5LFxuICAgIGVzdGltYXRlZERlbGl2ZXJ5RGF5czogMlxuICB9LFxuICB7XG4gICAgaWQ6IFwiM1wiLFxuICAgIG5hbWU6IFwiT3Zlcm5pZ2h0IFNoaXBwaW5nXCIsXG4gICAgY29zdDogMjkuOTksXG4gICAgZXN0aW1hdGVkRGVsaXZlcnlEYXlzOiAxXG4gIH1cbl1cblxuY29uc3QgcGF5bWVudE1ldGhvZHM6IFBheW1lbnRNZXRob2RbXSA9IFtcbiAgeyBpZDogXCIxXCIsIG5hbWU6IFwiQ3JlZGl0IENhcmRcIiB9LFxuICB7IGlkOiBcIjJcIiwgbmFtZTogXCJCYW5rIFRyYW5zZmVyXCIgfSxcbiAgeyBpZDogXCIzXCIsIG5hbWU6IFwiQ2FzaCBvbiBEZWxpdmVyeVwiIH0sXG4gIHsgaWQ6IFwiNFwiLCBuYW1lOiBcIlBheVBhbFwiIH1cbl1cblxuXG5jb25zdCBzYW1wbGVTYWxlc09yZGVyczogU2FsZXNPcmRlcltdID0gW1xuICB7XG4gICAgaWQ6IFwiMVwiLFxuICAgIG9yZGVyTnVtYmVyOiBcIlNPLTIwMjQtMDAxXCIsXG4gICAgY3VzdG9tZXJJZDogXCIxXCIsIC8vIEFjbWUgQ29ycFxuICAgIHN0YXR1czogXCJkZWxpdmVyZWRcIixcbiAgICBvcmRlckRhdGU6IG5ldyBEYXRlKFwiMjAyNC0wMS0wMlwiKSxcbiAgICBkZWxpdmVyeURhdGU6IG5ldyBEYXRlKFwiMjAyNC0wMS0wN1wiKSxcbiAgICBkdWVEYXRlOiBuZXcgRGF0ZShcIjIwMjQtMDItMDFcIiksXG4gICAgcGF5bWVudFRlcm1zOiBcIm5ldDMwXCIsXG4gICAgY3VycmVuY3k6IFwiVVNEXCIsXG4gICAgc3VidG90YWw6IDI3NDkuOTMsXG4gICAgdGF4VG90YWw6IDIzMy43NCxcbiAgICBkaXNjb3VudFRvdGFsOiAxMzcuNTAsXG4gICAgc2hpcHBpbmdDb3N0OiAxOS45OSxcbiAgICB0b3RhbDogMjg2Ni4xNixcbiAgICBub3RlczogXCJQcmlvcml0eSBkZWxpdmVyeSByZXF1ZXN0ZWRcIixcbiAgICBjdXN0b21lck5vdGVzOiBcIlBsZWFzZSBkZWxpdmVyIHRvIGxvYWRpbmcgZG9jayBCXCIsXG4gICAgaW50ZXJuYWxOb3RlczogXCJWSVAgY3VzdG9tZXIgLSBoYW5kbGUgd2l0aCBjYXJlXCIsXG4gICAgb3JkZXJMaW5lczogW1xuICAgICAge1xuICAgICAgICBpZDogXCIxXCIsXG4gICAgICAgIHByb2R1Y3RJZDogXCIxXCIsXG4gICAgICAgIHByb2R1Y3ROYW1lOiBcIlByZW1pdW0gTGFwdG9wXCIsXG4gICAgICAgIHByb2R1Y3RDb2RlOiBcIlRFQ0gtMDAxXCIsXG4gICAgICAgIHF1YW50aXR5OiAyLFxuICAgICAgICB1bml0UHJpY2U6IDEyOTkuOTksXG4gICAgICAgIHRheFJhdGU6IDguNSxcbiAgICAgICAgZGlzY291bnQ6IDUsXG4gICAgICAgIHN1YlRvdGFsOiAyNTk5Ljk4LFxuICAgICAgICB0b3RhbDogMjY4MS45OCxcbiAgICAgICAgdW5pdDogXCJwaWVjZVwiLFxuICAgICAgICB3YXJlaG91c2U6IFwiMVwiLFxuICAgICAgICBpc0N1c3RvbTogZmFsc2VcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGlkOiBcIjJcIixcbiAgICAgICAgcHJvZHVjdElkOiBcIjJcIixcbiAgICAgICAgcHJvZHVjdE5hbWU6IFwiV2lyZWxlc3MgTW91c2VcIixcbiAgICAgICAgcHJvZHVjdENvZGU6IFwiQUNDLTAwMVwiLFxuICAgICAgICBxdWFudGl0eTogNSxcbiAgICAgICAgdW5pdFByaWNlOiAyOS45OSxcbiAgICAgICAgdGF4UmF0ZTogOC41LFxuICAgICAgICBkaXNjb3VudDogMCxcbiAgICAgICAgc3ViVG90YWw6IDE0OS45NSxcbiAgICAgICAgdG90YWw6IDE2Mi43MCxcbiAgICAgICAgdW5pdDogXCJwaWVjZVwiLFxuICAgICAgICB3YXJlaG91c2U6IFwiMVwiLFxuICAgICAgICBpc0N1c3RvbTogZmFsc2VcbiAgICAgIH1cbiAgICBdLFxuICAgIHNoaXBwaW5nTWV0aG9kOiBcIjJcIiwgLy8gRXhwcmVzcyBTaGlwcGluZ1xuICAgIHRyYWNraW5nTnVtYmVyOiBcIkVYUDEyMzQ1Njc4OVwiLFxuICAgIHBheW1lbnRNZXRob2Q6IFwiMVwiLCAvLyBDcmVkaXQgQ2FyZFxuICAgIGlzUGFpZDogdHJ1ZVxuICB9LFxuICB7XG4gICAgaWQ6IFwiMlwiLFxuICAgIG9yZGVyTnVtYmVyOiBcIlNPLTIwMjQtMDAyXCIsXG4gICAgY3VzdG9tZXJJZDogXCIyXCIsIC8vIFRlY2hTdGFydCBJbmNcbiAgICBzdGF0dXM6IFwicHJvY2Vzc2luZ1wiLFxuICAgIG9yZGVyRGF0ZTogbmV3IERhdGUoXCIyMDI0LTAxLTA1XCIpLFxuICAgIGRlbGl2ZXJ5RGF0ZTogbmV3IERhdGUoXCIyMDI0LTAxLTEyXCIpLFxuICAgIGR1ZURhdGU6IG5ldyBEYXRlKFwiMjAyNC0wMy0wNVwiKSxcbiAgICBwYXltZW50VGVybXM6IFwibmV0NjBcIixcbiAgICBjdXJyZW5jeTogXCJVU0RcIixcbiAgICBzdWJ0b3RhbDogMTU5OS45NixcbiAgICB0YXhUb3RhbDogMTM1Ljk5LFxuICAgIGRpc2NvdW50VG90YWw6IDAsXG4gICAgc2hpcHBpbmdDb3N0OiAyOS45OSxcbiAgICB0b3RhbDogMTc2NS45NCxcbiAgICBub3RlczogXCJCdWxrIG9yZGVyIGZvciBuZXcgb2ZmaWNlXCIsXG4gICAgb3JkZXJMaW5lczogW1xuICAgICAge1xuICAgICAgICBpZDogXCIzXCIsXG4gICAgICAgIHByb2R1Y3RJZDogXCIzXCIsXG4gICAgICAgIHByb2R1Y3ROYW1lOiBcIjRLIE1vbml0b3JcIixcbiAgICAgICAgcHJvZHVjdENvZGU6IFwiRElTUC0wMDFcIixcbiAgICAgICAgcXVhbnRpdHk6IDQsXG4gICAgICAgIHVuaXRQcmljZTogMzk5Ljk5LFxuICAgICAgICB0YXhSYXRlOiA4LjUsXG4gICAgICAgIGRpc2NvdW50OiAwLFxuICAgICAgICBzdWJUb3RhbDogMTU5OS45NixcbiAgICAgICAgdG90YWw6IDE3MzUuOTUsXG4gICAgICAgIHVuaXQ6IFwicGllY2VcIixcbiAgICAgICAgd2FyZWhvdXNlOiBcIjJcIixcbiAgICAgICAgaXNDdXN0b206IGZhbHNlXG4gICAgICB9XG4gICAgXSxcbiAgICBzaGlwcGluZ01ldGhvZDogXCIzXCIsIC8vIE92ZXJuaWdodCBTaGlwcGluZ1xuICAgIHRyYWNraW5nTnVtYmVyOiBcIk9OUzk4NzY1NDMyMVwiLFxuICAgIHBheW1lbnRNZXRob2Q6IFwiMlwiLCAvLyBCYW5rIFRyYW5zZmVyXG4gICAgaXNQYWlkOiBmYWxzZVxuICB9LFxuICB7XG4gICAgaWQ6IFwiM1wiLFxuICAgIG9yZGVyTnVtYmVyOiBcIlNPLTIwMjQtMDAzXCIsXG4gICAgY3VzdG9tZXJJZDogXCIxXCIsIC8vIEFjbWUgQ29ycFxuICAgIHN0YXR1czogXCJwZW5kaW5nXCIsXG4gICAgb3JkZXJEYXRlOiBuZXcgRGF0ZShcIjIwMjQtMDEtMTBcIiksXG4gICAgZHVlRGF0ZTogbmV3IERhdGUoXCIyMDI0LTAyLTA5XCIpLFxuICAgIHBheW1lbnRUZXJtczogXCJuZXQzMFwiLFxuICAgIGN1cnJlbmN5OiBcIlVTRFwiLFxuICAgIHN1YnRvdGFsOiA4OTkuOTcsXG4gICAgdGF4VG90YWw6IDc2LjUwLFxuICAgIGRpc2NvdW50VG90YWw6IDg5Ljk5LFxuICAgIHNoaXBwaW5nQ29zdDogOS45OSxcbiAgICB0b3RhbDogODk2LjQ3LFxuICAgIGN1c3RvbWVyTm90ZXM6IFwiUGxlYXNlIGluY2x1ZGUgaW5zdGFsbGF0aW9uIG1hbnVhbFwiLFxuICAgIG9yZGVyTGluZXM6IFtcbiAgICAgIHtcbiAgICAgICAgaWQ6IFwiNFwiLFxuICAgICAgICBwcm9kdWN0SWQ6IFwiMlwiLFxuICAgICAgICBwcm9kdWN0TmFtZTogXCJXaXJlbGVzcyBNb3VzZVwiLFxuICAgICAgICBwcm9kdWN0Q29kZTogXCJBQ0MtMDAxXCIsXG4gICAgICAgIHF1YW50aXR5OiAzMCxcbiAgICAgICAgdW5pdFByaWNlOiAyOS45OSxcbiAgICAgICAgdGF4UmF0ZTogOC41LFxuICAgICAgICBkaXNjb3VudDogMTAsXG4gICAgICAgIHN1YlRvdGFsOiA4OTkuOTcsXG4gICAgICAgIHRvdGFsOiA4ODYuNDgsXG4gICAgICAgIHVuaXQ6IFwicGllY2VcIixcbiAgICAgICAgd2FyZWhvdXNlOiBcIjFcIixcbiAgICAgICAgaXNDdXN0b206IGZhbHNlXG4gICAgICB9XG4gICAgXSxcbiAgICBzaGlwcGluZ01ldGhvZDogXCIxXCIsIC8vIFN0YW5kYXJkIFNoaXBwaW5nXG4gICAgcGF5bWVudE1ldGhvZDogXCIxXCIsIC8vIENyZWRpdCBDYXJkXG4gICAgaXNQYWlkOiBmYWxzZVxuICB9XG5dXG5cbmV4cG9ydCB7XG4gIGN1c3RvbWVycyxcbiAgcHJvZHVjdHMsXG4gIHdhcmVob3VzZXMsXG4gIHNoaXBwaW5nTWV0aG9kcyxcbiAgcGF5bWVudE1ldGhvZHMsXG4gIGluaXRpYWxPcmRlckxpbmVzLFxuICBzYW1wbGVTYWxlc09yZGVyc1xufVxuXG4iXSwibmFtZXMiOlsiZmV0Y2hPcmRlckxpbmVzIiwiaW5pdGlhbE9yZGVyTGluZXMiLCJnZXRPcmRlckxpbmVzIiwiY29uc29sZSIsImxvZyIsImVycm9yIiwiY3VzdG9tZXJzIiwiaWQiLCJuYW1lIiwiZW1haWwiLCJwaG9uZSIsImJpbGxpbmdBZGRyZXNzIiwic3RyZWV0IiwiY2l0eSIsInN0YXRlIiwiY291bnRyeSIsInBvc3RhbENvZGUiLCJzaGlwcGluZ0FkZHJlc3MiLCJ0YXhJZCIsImNyZWRpdExpbWl0IiwicGF5bWVudFRlcm1zIiwiaW5zaWdodHMiLCJ0b3RhbE9yZGVycyIsImF2ZXJhZ2VPcmRlclZhbHVlIiwib3V0c3RhbmRpbmdQYXltZW50cyIsImxhc3RPcmRlckRhdGUiLCJEYXRlIiwicHJlZmVycmVkU2hpcHBpbmdNZXRob2QiLCJwcmVmZXJyZWRQYXltZW50TWV0aG9kIiwicHJlZmVycmVkV2FyZWhvdXNlIiwiaXNQcmVmZXJyZWRDdXN0b21lciIsImNyZWRpdFV0aWxpemF0aW9uIiwicHJlZmVyZW5jZXMiLCJkZWZhdWx0U2hpcHBpbmdBZGRyZXNzIiwiZGVmYXVsdEJpbGxpbmdBZGRyZXNzIiwiZGVmYXVsdFBheW1lbnRUZXJtcyIsImRlZmF1bHRTaGlwcGluZ01ldGhvZCIsImRlZmF1bHRQYXltZW50TWV0aG9kIiwidGF4RXhlbXB0IiwidGF4RXhlbXB0aW9uTnVtYmVyIiwic3BlY2lhbFByaWNpbmciLCJub3RlcyIsInByb2R1Y3RzIiwiY29kZSIsImRlc2NyaXB0aW9uIiwidW5pdFByaWNlIiwidGF4UmF0ZSIsImluU3RvY2siLCJjYXRlZ29yeSIsIndhcmVob3VzZXMiLCJhZGRyZXNzIiwic2hpcHBpbmdNZXRob2RzIiwiY29zdCIsImVzdGltYXRlZERlbGl2ZXJ5RGF5cyIsInBheW1lbnRNZXRob2RzIiwic2FtcGxlU2FsZXNPcmRlcnMiLCJvcmRlck51bWJlciIsImN1c3RvbWVySWQiLCJzdGF0dXMiLCJvcmRlckRhdGUiLCJkZWxpdmVyeURhdGUiLCJkdWVEYXRlIiwiY3VycmVuY3kiLCJzdWJ0b3RhbCIsInRheFRvdGFsIiwiZGlzY291bnRUb3RhbCIsInNoaXBwaW5nQ29zdCIsInRvdGFsIiwiY3VzdG9tZXJOb3RlcyIsImludGVybmFsTm90ZXMiLCJvcmRlckxpbmVzIiwicHJvZHVjdElkIiwicHJvZHVjdE5hbWUiLCJwcm9kdWN0Q29kZSIsInF1YW50aXR5IiwiZGlzY291bnQiLCJzdWJUb3RhbCIsInVuaXQiLCJ3YXJlaG91c2UiLCJpc0N1c3RvbSIsInNoaXBwaW5nTWV0aG9kIiwidHJhY2tpbmdOdW1iZXIiLCJwYXltZW50TWV0aG9kIiwiaXNQYWlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./data/dummy-data.ts\n"));

/***/ })

});