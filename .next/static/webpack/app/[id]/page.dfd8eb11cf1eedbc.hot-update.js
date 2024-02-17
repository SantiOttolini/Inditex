"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/[id]/page",{

/***/ "(app-pages-browser)/./components/home/home.tsx":
/*!**********************************!*\
  !*** ./components/home/home.tsx ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _public_mocks_product_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/public/mocks/product.json */ \"(app-pages-browser)/./public/mocks/product.json\");\n/* harmony import */ var _components_products_Products__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/products/Products */ \"(app-pages-browser)/./components/products/Products.tsx\");\n/* harmony import */ var _dnd_kit_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @dnd-kit/core */ \"(app-pages-browser)/./node_modules/@dnd-kit/core/dist/core.esm.js\");\n/* harmony import */ var _checkbox_checkbox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../checkbox/checkbox */ \"(app-pages-browser)/./components/checkbox/checkbox.tsx\");\n\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\n\n\n\n\nconst Home = (param)=>{\n    let { params } = param;\n    _s();\n    const numProducts = Number(params.id);\n    const numContainers = Math.ceil(numProducts / 3);\n    const [containerPositions, setContainerPositions] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(Array.from({\n        length: numContainers\n    }, (_, index)=>({\n            position: index + 1,\n            alignment: \"\"\n        })));\n    const handleDragEnd = (event)=>{\n        const { active, over } = event;\n        if (!over) return;\n        const sourceIndex = Number(active.id);\n        const destinationIndex = Number(over.id);\n        if (sourceIndex === destinationIndex) return;\n        const newPosition = [\n            ...containerPositions\n        ];\n        const movedContainer = newPosition.splice(sourceIndex, 1)[0];\n        newPosition.splice(destinationIndex, 0, movedContainer);\n        setContainerPositions(newPosition);\n    };\n    const handleAlignmentChange = (value, index)=>{\n        setContainerPositions((prevPositions)=>prevPositions.map((container, idx)=>idx === index ? {\n                    ...container,\n                    alignment: value\n                } : container));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col justify-start\",\n                children: containerPositions.map((item, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mb-10\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"mb-4 flex\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"bg-[#EEEEEE] p-3 rounded-lg\",\n                                    children: [\n                                        \"Fila \",\n                                        index + 1\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/santiagoottolini/Documents/Downloads/Zara/components/home/home.tsx\",\n                                    lineNumber: 52,\n                                    columnNumber: 15\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/santiagoottolini/Documents/Downloads/Zara/components/home/home.tsx\",\n                                lineNumber: 51,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_checkbox_checkbox__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                onChange: (value)=>handleAlignmentChange(value, index)\n                            }, void 0, false, {\n                                fileName: \"/Users/santiagoottolini/Documents/Downloads/Zara/components/home/home.tsx\",\n                                lineNumber: 56,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, index, true, {\n                        fileName: \"/Users/santiagoottolini/Documents/Downloads/Zara/components/home/home.tsx\",\n                        lineNumber: 50,\n                        columnNumber: 11\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"/Users/santiagoottolini/Documents/Downloads/Zara/components/home/home.tsx\",\n                lineNumber: 48,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_dnd_kit_core__WEBPACK_IMPORTED_MODULE_4__.DndContext, {\n                onDragEnd: handleDragEnd,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex flex-col justify-center\",\n                    children: containerPositions.map((container, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Container, {\n                            index: index,\n                            position: container.position,\n                            alignment: container.alignment,\n                            numProducts: numProducts\n                        }, index, false, {\n                            fileName: \"/Users/santiagoottolini/Documents/Downloads/Zara/components/home/home.tsx\",\n                            lineNumber: 65,\n                            columnNumber: 13\n                        }, undefined))\n                }, void 0, false, {\n                    fileName: \"/Users/santiagoottolini/Documents/Downloads/Zara/components/home/home.tsx\",\n                    lineNumber: 63,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/santiagoottolini/Documents/Downloads/Zara/components/home/home.tsx\",\n                lineNumber: 62,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/santiagoottolini/Documents/Downloads/Zara/components/home/home.tsx\",\n        lineNumber: 47,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Home, \"LDd7oTbg2LCZF5Nf4C7Cg7/NoN8=\");\n_c = Home;\nconst Container = (param)=>{\n    let { index, position, numProducts, alignment } = param;\n    _s1();\n    const { attributes, listeners, setNodeRef, transform, isDragging } = (0,_dnd_kit_core__WEBPACK_IMPORTED_MODULE_4__.useDraggable)({\n        id: index.toString()\n    });\n    const { isOver, setNodeRef: setDropNodeRef } = (0,_dnd_kit_core__WEBPACK_IMPORTED_MODULE_4__.useDroppable)({\n        id: index.toString()\n    });\n    const startProductIndex = (position - 1) * 3 + 1;\n    const endProductIndex = Math.min(position * 3, numProducts);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            ref: setNodeRef,\n            ...attributes,\n            ...listeners,\n            className: \"relative  bg-[#EEEEEE] p-4 m-4 cursor-grab rounded-lg \".concat(isOver ? \"bg-gray-200\" : \"\", \" \").concat(isDragging ? \"opacity-50\" : \"\", \" transition-opacity duration-300\"),\n            style: {\n                minWidth: \"200px\"\n            },\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                ref: setDropNodeRef,\n                className: \"flex flex-row justify-\".concat(alignment, \" items-center h-44 p-2\"),\n                style: {\n                    minHeight: \"200px\"\n                },\n                children: _public_mocks_product_json__WEBPACK_IMPORTED_MODULE_2__.slice(startProductIndex - 1, endProductIndex).map((product, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"m-1 md:m-10\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_products_Products__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                            id: Number(product.id)\n                        }, void 0, false, {\n                            fileName: \"/Users/santiagoottolini/Documents/Downloads/Zara/components/home/home.tsx\",\n                            lineNumber: 118,\n                            columnNumber: 17\n                        }, undefined)\n                    }, index, false, {\n                        fileName: \"/Users/santiagoottolini/Documents/Downloads/Zara/components/home/home.tsx\",\n                        lineNumber: 117,\n                        columnNumber: 15\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"/Users/santiagoottolini/Documents/Downloads/Zara/components/home/home.tsx\",\n                lineNumber: 109,\n                columnNumber: 9\n            }, undefined)\n        }, position, false, {\n            fileName: \"/Users/santiagoottolini/Documents/Downloads/Zara/components/home/home.tsx\",\n            lineNumber: 99,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/santiagoottolini/Documents/Downloads/Zara/components/home/home.tsx\",\n        lineNumber: 98,\n        columnNumber: 5\n    }, undefined);\n};\n_s1(Container, \"B29bdDOjK6hWugGKfMp2tf4R1m8=\", false, function() {\n    return [\n        _dnd_kit_core__WEBPACK_IMPORTED_MODULE_4__.useDraggable,\n        _dnd_kit_core__WEBPACK_IMPORTED_MODULE_4__.useDroppable\n    ];\n});\n_c1 = Container;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c, _c1;\n$RefreshReg$(_c, \"Home\");\n$RefreshReg$(_c1, \"Container\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvaG9tZS9ob21lLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQWlDO0FBQ2M7QUFDTztBQUNpQjtBQUMzQjtBQU01QyxNQUFNTyxPQUF3QjtRQUFDLEVBQUVDLE1BQU0sRUFBRTs7SUFDdkMsTUFBTUMsY0FBY0MsT0FBT0YsT0FBT0csRUFBRTtJQUNwQyxNQUFNQyxnQkFBZ0JDLEtBQUtDLElBQUksQ0FBQ0wsY0FBYztJQUM5QyxNQUFNLENBQUNNLG9CQUFvQkMsc0JBQXNCLEdBQUdoQiwrQ0FBUUEsQ0FDMURpQixNQUFNQyxJQUFJLENBQUM7UUFBRUMsUUFBUVA7SUFBYyxHQUFHLENBQUNRLEdBQUdDLFFBQVc7WUFDbkRDLFVBQVVELFFBQVE7WUFDbEJFLFdBQVc7UUFDYjtJQUdGLE1BQU1DLGdCQUFnQixDQUFDQztRQUNyQixNQUFNLEVBQUVDLE1BQU0sRUFBRUMsSUFBSSxFQUFFLEdBQUdGO1FBRXpCLElBQUksQ0FBQ0UsTUFBTTtRQUVYLE1BQU1DLGNBQWNsQixPQUFPZ0IsT0FBT2YsRUFBRTtRQUNwQyxNQUFNa0IsbUJBQW1CbkIsT0FBT2lCLEtBQUtoQixFQUFFO1FBRXZDLElBQUlpQixnQkFBZ0JDLGtCQUFrQjtRQUV0QyxNQUFNQyxjQUFjO2VBQUlmO1NBQW1CO1FBQzNDLE1BQU1nQixpQkFBaUJELFlBQVlFLE1BQU0sQ0FBQ0osYUFBYSxFQUFFLENBQUMsRUFBRTtRQUM1REUsWUFBWUUsTUFBTSxDQUFDSCxrQkFBa0IsR0FBR0U7UUFFeENmLHNCQUFzQmM7SUFDeEI7SUFFQSxNQUFNRyx3QkFBd0IsQ0FBQ0MsT0FBZWI7UUFDNUNMLHNCQUFzQixDQUFDbUIsZ0JBQ3JCQSxjQUFjQyxHQUFHLENBQUMsQ0FBQ0MsV0FBV0MsTUFDNUJBLFFBQVFqQixRQUFRO29CQUFFLEdBQUdnQixTQUFTO29CQUFFZCxXQUFXVztnQkFBTSxJQUFJRztJQUczRDtJQUVBLHFCQUNFLDhEQUFDRTtRQUFJQyxXQUFVOzswQkFDYiw4REFBQ0Q7Z0JBQUlDLFdBQVU7MEJBQ1p6QixtQkFBbUJxQixHQUFHLENBQUMsQ0FBQ0ssTUFBTXBCLHNCQUM3Qiw4REFBQ2tCO3dCQUFJQyxXQUFVOzswQ0FDYiw4REFBQ0Q7Z0NBQUlDLFdBQVU7MENBQ2IsNEVBQUNFO29DQUFLRixXQUFVOzt3Q0FBOEI7d0NBQ3RDbkIsUUFBUTs7Ozs7Ozs7Ozs7OzBDQUdsQiw4REFBQ2YsMERBQVFBO2dDQUNQcUMsVUFBVSxDQUFDVCxRQUFVRCxzQkFBc0JDLE9BQU9iOzs7Ozs7O3VCQVAxQkE7Ozs7Ozs7Ozs7MEJBWWhDLDhEQUFDbEIscURBQVVBO2dCQUFDeUMsV0FBV3BCOzBCQUNyQiw0RUFBQ2U7b0JBQUlDLFdBQVU7OEJBQ1p6QixtQkFBbUJxQixHQUFHLENBQUMsQ0FBQ0MsV0FBV2hCLHNCQUNsQyw4REFBQ3dCOzRCQUVDeEIsT0FBT0E7NEJBQ1BDLFVBQVVlLFVBQVVmLFFBQVE7NEJBQzVCQyxXQUFXYyxVQUFVZCxTQUFTOzRCQUM5QmQsYUFBYUE7MkJBSlJZOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFXbkI7R0FsRU1kO0tBQUFBO0FBb0VOLE1BQU1zQyxZQUtEO1FBQUMsRUFBRXhCLEtBQUssRUFBRUMsUUFBUSxFQUFFYixXQUFXLEVBQUVjLFNBQVMsRUFBRTs7SUFDL0MsTUFBTSxFQUFFdUIsVUFBVSxFQUFFQyxTQUFTLEVBQUVDLFVBQVUsRUFBRUMsU0FBUyxFQUFFQyxVQUFVLEVBQUUsR0FDaEU5QywyREFBWUEsQ0FBQztRQUNYTyxJQUFJVSxNQUFNOEIsUUFBUTtJQUNwQjtJQUVGLE1BQU0sRUFBRUMsTUFBTSxFQUFFSixZQUFZSyxjQUFjLEVBQUUsR0FBR2hELDJEQUFZQSxDQUFDO1FBQzFETSxJQUFJVSxNQUFNOEIsUUFBUTtJQUNwQjtJQUVBLE1BQU1HLG9CQUFvQixDQUFDaEMsV0FBVyxLQUFLLElBQUk7SUFDL0MsTUFBTWlDLGtCQUFrQjFDLEtBQUsyQyxHQUFHLENBQUNsQyxXQUFXLEdBQUdiO0lBRS9DLHFCQUNFLDhEQUFDOEI7a0JBQ0MsNEVBQUNBO1lBRUNrQixLQUFLVDtZQUNKLEdBQUdGLFVBQVU7WUFDYixHQUFHQyxTQUFTO1lBQ2JQLFdBQVcseURBRVBVLE9BREZFLFNBQVMsZ0JBQWdCLElBQzFCLEtBQWtDLE9BQS9CRixhQUFhLGVBQWUsSUFBRztZQUNuQ1EsT0FBTztnQkFBRUMsVUFBVTtZQUFRO3NCQUUzQiw0RUFBQ3BCO2dCQUNDa0IsS0FBS0o7Z0JBQ0xiLFdBQVcseUJBQW1DLE9BQVZqQixXQUFVO2dCQUM5Q21DLE9BQU87b0JBQUVFLFdBQVc7Z0JBQVE7MEJBRTNCM0QsdURBQUlBLENBQ0Y0RCxLQUFLLENBQUNQLG9CQUFvQixHQUFHQyxpQkFDN0JuQixHQUFHLENBQUMsQ0FBQzBCLFNBQVN6QyxzQkFDYiw4REFBQ2tCO3dCQUFnQkMsV0FBVTtrQ0FDekIsNEVBQUN0QyxxRUFBUUE7NEJBQUNTLElBQUlELE9BQU9vRCxRQUFRbkQsRUFBRTs7Ozs7O3VCQUR2QlU7Ozs7Ozs7Ozs7V0FqQlhDOzs7Ozs7Ozs7O0FBeUJiO0lBOUNNdUI7O1FBT0Z6Qyx1REFBWUE7UUFJaUNDLHVEQUFZQTs7O01BWHZEd0M7QUFnRE4sK0RBQWV0QyxJQUFJQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvaG9tZS9ob21lLnRzeD84MmQxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgbW9jayBmcm9tIFwiQC9wdWJsaWMvbW9ja3MvcHJvZHVjdC5qc29uXCI7XG5pbXBvcnQgUHJvZHVjdHMgZnJvbSBcIkAvY29tcG9uZW50cy9wcm9kdWN0cy9Qcm9kdWN0c1wiO1xuaW1wb3J0IHsgRG5kQ29udGV4dCwgdXNlRHJhZ2dhYmxlLCB1c2VEcm9wcGFibGUgfSBmcm9tIFwiQGRuZC1raXQvY29yZVwiO1xuaW1wb3J0IENoZWNrYm94IGZyb20gXCIuLi9jaGVja2JveC9jaGVja2JveFwiO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBwYXJhbXM6IHsgaWQ6IHN0cmluZyB9O1xufVxuXG5jb25zdCBIb21lOiBSZWFjdC5GQzxQcm9wcz4gPSAoeyBwYXJhbXMgfSkgPT4ge1xuICBjb25zdCBudW1Qcm9kdWN0cyA9IE51bWJlcihwYXJhbXMuaWQpO1xuICBjb25zdCBudW1Db250YWluZXJzID0gTWF0aC5jZWlsKG51bVByb2R1Y3RzIC8gMyk7XG4gIGNvbnN0IFtjb250YWluZXJQb3NpdGlvbnMsIHNldENvbnRhaW5lclBvc2l0aW9uc10gPSB1c2VTdGF0ZShcbiAgICBBcnJheS5mcm9tKHsgbGVuZ3RoOiBudW1Db250YWluZXJzIH0sIChfLCBpbmRleCkgPT4gKHtcbiAgICAgIHBvc2l0aW9uOiBpbmRleCArIDEsXG4gICAgICBhbGlnbm1lbnQ6IFwiXCIsXG4gICAgfSkpXG4gICk7XG5cbiAgY29uc3QgaGFuZGxlRHJhZ0VuZCA9IChldmVudDogYW55KSA9PiB7XG4gICAgY29uc3QgeyBhY3RpdmUsIG92ZXIgfSA9IGV2ZW50O1xuXG4gICAgaWYgKCFvdmVyKSByZXR1cm47XG5cbiAgICBjb25zdCBzb3VyY2VJbmRleCA9IE51bWJlcihhY3RpdmUuaWQpO1xuICAgIGNvbnN0IGRlc3RpbmF0aW9uSW5kZXggPSBOdW1iZXIob3Zlci5pZCk7XG5cbiAgICBpZiAoc291cmNlSW5kZXggPT09IGRlc3RpbmF0aW9uSW5kZXgpIHJldHVybjtcblxuICAgIGNvbnN0IG5ld1Bvc2l0aW9uID0gWy4uLmNvbnRhaW5lclBvc2l0aW9uc107XG4gICAgY29uc3QgbW92ZWRDb250YWluZXIgPSBuZXdQb3NpdGlvbi5zcGxpY2Uoc291cmNlSW5kZXgsIDEpWzBdO1xuICAgIG5ld1Bvc2l0aW9uLnNwbGljZShkZXN0aW5hdGlvbkluZGV4LCAwLCBtb3ZlZENvbnRhaW5lcik7XG5cbiAgICBzZXRDb250YWluZXJQb3NpdGlvbnMobmV3UG9zaXRpb24pO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUFsaWdubWVudENoYW5nZSA9ICh2YWx1ZTogc3RyaW5nLCBpbmRleDogbnVtYmVyKSA9PiB7XG4gICAgc2V0Q29udGFpbmVyUG9zaXRpb25zKChwcmV2UG9zaXRpb25zKSA9PlxuICAgICAgcHJldlBvc2l0aW9ucy5tYXAoKGNvbnRhaW5lciwgaWR4KSA9PlxuICAgICAgICBpZHggPT09IGluZGV4ID8geyAuLi5jb250YWluZXIsIGFsaWdubWVudDogdmFsdWUgfSA6IGNvbnRhaW5lclxuICAgICAgKVxuICAgICk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXhcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBqdXN0aWZ5LXN0YXJ0XCI+XG4gICAgICAgIHtjb250YWluZXJQb3NpdGlvbnMubWFwKChpdGVtLCBpbmRleCkgPT4gKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItMTBcIiBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItNCBmbGV4XCI+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJnLVsjRUVFRUVFXSBwLTMgcm91bmRlZC1sZ1wiPlxuICAgICAgICAgICAgICAgIEZpbGEge2luZGV4ICsgMX1cbiAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8Q2hlY2tib3hcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyh2YWx1ZSkgPT4gaGFuZGxlQWxpZ25tZW50Q2hhbmdlKHZhbHVlLCBpbmRleCl9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApKX1cbiAgICAgIDwvZGl2PlxuICAgICAgPERuZENvbnRleHQgb25EcmFnRW5kPXtoYW5kbGVEcmFnRW5kfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGp1c3RpZnktY2VudGVyXCI+XG4gICAgICAgICAge2NvbnRhaW5lclBvc2l0aW9ucy5tYXAoKGNvbnRhaW5lciwgaW5kZXgpID0+IChcbiAgICAgICAgICAgIDxDb250YWluZXJcbiAgICAgICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICAgICAgaW5kZXg9e2luZGV4fVxuICAgICAgICAgICAgICBwb3NpdGlvbj17Y29udGFpbmVyLnBvc2l0aW9ufVxuICAgICAgICAgICAgICBhbGlnbm1lbnQ9e2NvbnRhaW5lci5hbGlnbm1lbnR9XG4gICAgICAgICAgICAgIG51bVByb2R1Y3RzPXtudW1Qcm9kdWN0c31cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9EbmRDb250ZXh0PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuY29uc3QgQ29udGFpbmVyOiBSZWFjdC5GQzx7XG4gIGluZGV4OiBudW1iZXI7XG4gIHBvc2l0aW9uOiBudW1iZXI7XG4gIG51bVByb2R1Y3RzOiBudW1iZXI7XG4gIGFsaWdubWVudDogc3RyaW5nO1xufT4gPSAoeyBpbmRleCwgcG9zaXRpb24sIG51bVByb2R1Y3RzLCBhbGlnbm1lbnQgfSkgPT4ge1xuICBjb25zdCB7IGF0dHJpYnV0ZXMsIGxpc3RlbmVycywgc2V0Tm9kZVJlZiwgdHJhbnNmb3JtLCBpc0RyYWdnaW5nIH0gPVxuICAgIHVzZURyYWdnYWJsZSh7XG4gICAgICBpZDogaW5kZXgudG9TdHJpbmcoKSxcbiAgICB9KTtcblxuICBjb25zdCB7IGlzT3Zlciwgc2V0Tm9kZVJlZjogc2V0RHJvcE5vZGVSZWYgfSA9IHVzZURyb3BwYWJsZSh7XG4gICAgaWQ6IGluZGV4LnRvU3RyaW5nKCksXG4gIH0pO1xuXG4gIGNvbnN0IHN0YXJ0UHJvZHVjdEluZGV4ID0gKHBvc2l0aW9uIC0gMSkgKiAzICsgMTtcbiAgY29uc3QgZW5kUHJvZHVjdEluZGV4ID0gTWF0aC5taW4ocG9zaXRpb24gKiAzLCBudW1Qcm9kdWN0cyk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGRpdlxuICAgICAgICBrZXk9e3Bvc2l0aW9ufVxuICAgICAgICByZWY9e3NldE5vZGVSZWZ9XG4gICAgICAgIHsuLi5hdHRyaWJ1dGVzfVxuICAgICAgICB7Li4ubGlzdGVuZXJzfVxuICAgICAgICBjbGFzc05hbWU9e2ByZWxhdGl2ZSAgYmctWyNFRUVFRUVdIHAtNCBtLTQgY3Vyc29yLWdyYWIgcm91bmRlZC1sZyAke1xuICAgICAgICAgIGlzT3ZlciA/IFwiYmctZ3JheS0yMDBcIiA6IFwiXCJcbiAgICAgICAgfSAke2lzRHJhZ2dpbmcgPyBcIm9wYWNpdHktNTBcIiA6IFwiXCJ9IHRyYW5zaXRpb24tb3BhY2l0eSBkdXJhdGlvbi0zMDBgfVxuICAgICAgICBzdHlsZT17eyBtaW5XaWR0aDogXCIyMDBweFwiIH19XG4gICAgICA+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICByZWY9e3NldERyb3BOb2RlUmVmfVxuICAgICAgICAgIGNsYXNzTmFtZT17YGZsZXggZmxleC1yb3cganVzdGlmeS0ke2FsaWdubWVudH0gaXRlbXMtY2VudGVyIGgtNDQgcC0yYH1cbiAgICAgICAgICBzdHlsZT17eyBtaW5IZWlnaHQ6IFwiMjAwcHhcIiB9fVxuICAgICAgICA+XG4gICAgICAgICAge21vY2tcbiAgICAgICAgICAgIC5zbGljZShzdGFydFByb2R1Y3RJbmRleCAtIDEsIGVuZFByb2R1Y3RJbmRleClcbiAgICAgICAgICAgIC5tYXAoKHByb2R1Y3QsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgIDxkaXYga2V5PXtpbmRleH0gY2xhc3NOYW1lPVwibS0xIG1kOm0tMTBcIj5cbiAgICAgICAgICAgICAgICA8UHJvZHVjdHMgaWQ9e051bWJlcihwcm9kdWN0LmlkKX0gLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWU7XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJtb2NrIiwiUHJvZHVjdHMiLCJEbmRDb250ZXh0IiwidXNlRHJhZ2dhYmxlIiwidXNlRHJvcHBhYmxlIiwiQ2hlY2tib3giLCJIb21lIiwicGFyYW1zIiwibnVtUHJvZHVjdHMiLCJOdW1iZXIiLCJpZCIsIm51bUNvbnRhaW5lcnMiLCJNYXRoIiwiY2VpbCIsImNvbnRhaW5lclBvc2l0aW9ucyIsInNldENvbnRhaW5lclBvc2l0aW9ucyIsIkFycmF5IiwiZnJvbSIsImxlbmd0aCIsIl8iLCJpbmRleCIsInBvc2l0aW9uIiwiYWxpZ25tZW50IiwiaGFuZGxlRHJhZ0VuZCIsImV2ZW50IiwiYWN0aXZlIiwib3ZlciIsInNvdXJjZUluZGV4IiwiZGVzdGluYXRpb25JbmRleCIsIm5ld1Bvc2l0aW9uIiwibW92ZWRDb250YWluZXIiLCJzcGxpY2UiLCJoYW5kbGVBbGlnbm1lbnRDaGFuZ2UiLCJ2YWx1ZSIsInByZXZQb3NpdGlvbnMiLCJtYXAiLCJjb250YWluZXIiLCJpZHgiLCJkaXYiLCJjbGFzc05hbWUiLCJpdGVtIiwic3BhbiIsIm9uQ2hhbmdlIiwib25EcmFnRW5kIiwiQ29udGFpbmVyIiwiYXR0cmlidXRlcyIsImxpc3RlbmVycyIsInNldE5vZGVSZWYiLCJ0cmFuc2Zvcm0iLCJpc0RyYWdnaW5nIiwidG9TdHJpbmciLCJpc092ZXIiLCJzZXREcm9wTm9kZVJlZiIsInN0YXJ0UHJvZHVjdEluZGV4IiwiZW5kUHJvZHVjdEluZGV4IiwibWluIiwicmVmIiwic3R5bGUiLCJtaW5XaWR0aCIsIm1pbkhlaWdodCIsInNsaWNlIiwicHJvZHVjdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/home/home.tsx\n"));

/***/ })

});