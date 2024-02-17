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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _public_mocks_product_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/public/mocks/product.json */ \"(app-pages-browser)/./public/mocks/product.json\");\n/* harmony import */ var _components_products_Products__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/products/Products */ \"(app-pages-browser)/./components/products/Products.tsx\");\n/* harmony import */ var _dnd_kit_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @dnd-kit/core */ \"(app-pages-browser)/./node_modules/@dnd-kit/core/dist/core.esm.js\");\n/* harmony import */ var _checkbox_checkbox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../checkbox/checkbox */ \"(app-pages-browser)/./components/checkbox/checkbox.tsx\");\n\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\n\n\n\n\nconst Home = (param)=>{\n    let { params } = param;\n    _s();\n    const numProducts = Number(params.id);\n    const numContainers = Math.ceil(numProducts / 3);\n    const [containerPositions, setContainerPositions] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(Array.from({\n        length: numContainers\n    }, (_, index)=>({\n            position: index + 1,\n            alignment: \"\"\n        })));\n    const handleDragEnd = (event)=>{\n        const { active, over } = event;\n        if (!over) return;\n        const sourceIndex = Number(active.id);\n        const destinationIndex = Number(over.id);\n        if (sourceIndex === destinationIndex) return;\n        const newPosition = [\n            ...containerPositions\n        ];\n        const movedContainer = newPosition.splice(sourceIndex, 1)[0];\n        newPosition.splice(destinationIndex, 0, movedContainer);\n        setContainerPositions(newPosition);\n    };\n    const handleAlignmentChange = (value, index)=>{\n        setContainerPositions((prevPositions)=>prevPositions.map((container, idx)=>idx === index ? {\n                    ...container,\n                    alignment: value\n                } : container));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex justify-between\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col justify-start\",\n                children: containerPositions.map((item, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mb-10\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"mb-4 flex\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"bg-[#EEEEEE] p-3 rounded-lg\",\n                                    children: [\n                                        \"Fila \",\n                                        index + 1\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/santiagoottolini/Documents/Downloads/Zara/components/home/home.tsx\",\n                                    lineNumber: 52,\n                                    columnNumber: 15\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/santiagoottolini/Documents/Downloads/Zara/components/home/home.tsx\",\n                                lineNumber: 51,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_checkbox_checkbox__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                onChange: (value)=>handleAlignmentChange(value, index)\n                            }, void 0, false, {\n                                fileName: \"/Users/santiagoottolini/Documents/Downloads/Zara/components/home/home.tsx\",\n                                lineNumber: 56,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, index, true, {\n                        fileName: \"/Users/santiagoottolini/Documents/Downloads/Zara/components/home/home.tsx\",\n                        lineNumber: 50,\n                        columnNumber: 11\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"/Users/santiagoottolini/Documents/Downloads/Zara/components/home/home.tsx\",\n                lineNumber: 48,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_dnd_kit_core__WEBPACK_IMPORTED_MODULE_4__.DndContext, {\n                onDragEnd: handleDragEnd,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex flex-col justify-center\",\n                    children: containerPositions.map((container, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Container, {\n                            index: index,\n                            position: container.position,\n                            alignment: container.alignment,\n                            numProducts: numProducts\n                        }, index, false, {\n                            fileName: \"/Users/santiagoottolini/Documents/Downloads/Zara/components/home/home.tsx\",\n                            lineNumber: 65,\n                            columnNumber: 13\n                        }, undefined))\n                }, void 0, false, {\n                    fileName: \"/Users/santiagoottolini/Documents/Downloads/Zara/components/home/home.tsx\",\n                    lineNumber: 63,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/santiagoottolini/Documents/Downloads/Zara/components/home/home.tsx\",\n                lineNumber: 62,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/santiagoottolini/Documents/Downloads/Zara/components/home/home.tsx\",\n        lineNumber: 47,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Home, \"LDd7oTbg2LCZF5Nf4C7Cg7/NoN8=\");\n_c = Home;\nconst Container = (param)=>{\n    let { index, position, numProducts, alignment } = param;\n    _s1();\n    const { attributes, listeners, setNodeRef, transform, isDragging } = (0,_dnd_kit_core__WEBPACK_IMPORTED_MODULE_4__.useDraggable)({\n        id: index.toString()\n    });\n    const { isOver, setNodeRef: setDropNodeRef } = (0,_dnd_kit_core__WEBPACK_IMPORTED_MODULE_4__.useDroppable)({\n        id: index.toString()\n    });\n    const startProductIndex = (position - 1) * 3 + 1;\n    const endProductIndex = Math.min(position * 3, numProducts);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            ref: setNodeRef,\n            ...attributes,\n            ...listeners,\n            className: \"relative  bg-[#EEEEEE] p-4 m-4 cursor-grab rounded-lg \".concat(isOver ? \"bg-gray-200\" : \"\", \" \").concat(isDragging ? \"opacity-50\" : \"\", \" transition-opacity duration-300\"),\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                ref: setDropNodeRef,\n                className: \"flex flex-row justify-\".concat(alignment, \" items-center h-44 p-2\"),\n                style: {\n                    minHeight: \"200px\"\n                },\n                children: _public_mocks_product_json__WEBPACK_IMPORTED_MODULE_2__.slice(startProductIndex - 1, endProductIndex).map((product, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"m-1 md:m-10\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_products_Products__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                            id: Number(product.id)\n                        }, void 0, false, {\n                            fileName: \"/Users/santiagoottolini/Documents/Downloads/Zara/components/home/home.tsx\",\n                            lineNumber: 117,\n                            columnNumber: 17\n                        }, undefined)\n                    }, index, false, {\n                        fileName: \"/Users/santiagoottolini/Documents/Downloads/Zara/components/home/home.tsx\",\n                        lineNumber: 116,\n                        columnNumber: 15\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"/Users/santiagoottolini/Documents/Downloads/Zara/components/home/home.tsx\",\n                lineNumber: 108,\n                columnNumber: 9\n            }, undefined)\n        }, position, false, {\n            fileName: \"/Users/santiagoottolini/Documents/Downloads/Zara/components/home/home.tsx\",\n            lineNumber: 99,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/santiagoottolini/Documents/Downloads/Zara/components/home/home.tsx\",\n        lineNumber: 98,\n        columnNumber: 5\n    }, undefined);\n};\n_s1(Container, \"B29bdDOjK6hWugGKfMp2tf4R1m8=\", false, function() {\n    return [\n        _dnd_kit_core__WEBPACK_IMPORTED_MODULE_4__.useDraggable,\n        _dnd_kit_core__WEBPACK_IMPORTED_MODULE_4__.useDroppable\n    ];\n});\n_c1 = Container;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c, _c1;\n$RefreshReg$(_c, \"Home\");\n$RefreshReg$(_c1, \"Container\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvaG9tZS9ob21lLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQWlDO0FBQ2M7QUFDTztBQUNpQjtBQUMzQjtBQU01QyxNQUFNTyxPQUF3QjtRQUFDLEVBQUVDLE1BQU0sRUFBRTs7SUFDdkMsTUFBTUMsY0FBY0MsT0FBT0YsT0FBT0csRUFBRTtJQUNwQyxNQUFNQyxnQkFBZ0JDLEtBQUtDLElBQUksQ0FBQ0wsY0FBYztJQUM5QyxNQUFNLENBQUNNLG9CQUFvQkMsc0JBQXNCLEdBQUdoQiwrQ0FBUUEsQ0FDMURpQixNQUFNQyxJQUFJLENBQUM7UUFBRUMsUUFBUVA7SUFBYyxHQUFHLENBQUNRLEdBQUdDLFFBQVc7WUFDbkRDLFVBQVVELFFBQVE7WUFDbEJFLFdBQVc7UUFDYjtJQUdGLE1BQU1DLGdCQUFnQixDQUFDQztRQUNyQixNQUFNLEVBQUVDLE1BQU0sRUFBRUMsSUFBSSxFQUFFLEdBQUdGO1FBRXpCLElBQUksQ0FBQ0UsTUFBTTtRQUVYLE1BQU1DLGNBQWNsQixPQUFPZ0IsT0FBT2YsRUFBRTtRQUNwQyxNQUFNa0IsbUJBQW1CbkIsT0FBT2lCLEtBQUtoQixFQUFFO1FBRXZDLElBQUlpQixnQkFBZ0JDLGtCQUFrQjtRQUV0QyxNQUFNQyxjQUFjO2VBQUlmO1NBQW1CO1FBQzNDLE1BQU1nQixpQkFBaUJELFlBQVlFLE1BQU0sQ0FBQ0osYUFBYSxFQUFFLENBQUMsRUFBRTtRQUM1REUsWUFBWUUsTUFBTSxDQUFDSCxrQkFBa0IsR0FBR0U7UUFFeENmLHNCQUFzQmM7SUFDeEI7SUFFQSxNQUFNRyx3QkFBd0IsQ0FBQ0MsT0FBZWI7UUFDNUNMLHNCQUFzQixDQUFDbUIsZ0JBQ3JCQSxjQUFjQyxHQUFHLENBQUMsQ0FBQ0MsV0FBV0MsTUFDNUJBLFFBQVFqQixRQUFRO29CQUFFLEdBQUdnQixTQUFTO29CQUFFZCxXQUFXVztnQkFBTSxJQUFJRztJQUczRDtJQUVBLHFCQUNFLDhEQUFDRTtRQUFJQyxXQUFVOzswQkFDYiw4REFBQ0Q7Z0JBQUlDLFdBQVU7MEJBQ1p6QixtQkFBbUJxQixHQUFHLENBQUMsQ0FBQ0ssTUFBTXBCLHNCQUM3Qiw4REFBQ2tCO3dCQUFJQyxXQUFVOzswQ0FDYiw4REFBQ0Q7Z0NBQUlDLFdBQVU7MENBQ2IsNEVBQUNFO29DQUFLRixXQUFVOzt3Q0FBOEI7d0NBQ3RDbkIsUUFBUTs7Ozs7Ozs7Ozs7OzBDQUdsQiw4REFBQ2YsMERBQVFBO2dDQUNQcUMsVUFBVSxDQUFDVCxRQUFVRCxzQkFBc0JDLE9BQU9iOzs7Ozs7O3VCQVAxQkE7Ozs7Ozs7Ozs7MEJBWWhDLDhEQUFDbEIscURBQVVBO2dCQUFDeUMsV0FBV3BCOzBCQUNyQiw0RUFBQ2U7b0JBQUlDLFdBQVU7OEJBQ1p6QixtQkFBbUJxQixHQUFHLENBQUMsQ0FBQ0MsV0FBV2hCLHNCQUNsQyw4REFBQ3dCOzRCQUVDeEIsT0FBT0E7NEJBQ1BDLFVBQVVlLFVBQVVmLFFBQVE7NEJBQzVCQyxXQUFXYyxVQUFVZCxTQUFTOzRCQUM5QmQsYUFBYUE7MkJBSlJZOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFXbkI7R0FsRU1kO0tBQUFBO0FBb0VOLE1BQU1zQyxZQUtEO1FBQUMsRUFBRXhCLEtBQUssRUFBRUMsUUFBUSxFQUFFYixXQUFXLEVBQUVjLFNBQVMsRUFBRTs7SUFDL0MsTUFBTSxFQUFFdUIsVUFBVSxFQUFFQyxTQUFTLEVBQUVDLFVBQVUsRUFBRUMsU0FBUyxFQUFFQyxVQUFVLEVBQUUsR0FDaEU5QywyREFBWUEsQ0FBQztRQUNYTyxJQUFJVSxNQUFNOEIsUUFBUTtJQUNwQjtJQUVGLE1BQU0sRUFBRUMsTUFBTSxFQUFFSixZQUFZSyxjQUFjLEVBQUUsR0FBR2hELDJEQUFZQSxDQUFDO1FBQzFETSxJQUFJVSxNQUFNOEIsUUFBUTtJQUNwQjtJQUVBLE1BQU1HLG9CQUFvQixDQUFDaEMsV0FBVyxLQUFLLElBQUk7SUFDL0MsTUFBTWlDLGtCQUFrQjFDLEtBQUsyQyxHQUFHLENBQUNsQyxXQUFXLEdBQUdiO0lBRS9DLHFCQUNFLDhEQUFDOEI7a0JBQ0MsNEVBQUNBO1lBRUNrQixLQUFLVDtZQUNKLEdBQUdGLFVBQVU7WUFDYixHQUFHQyxTQUFTO1lBQ2JQLFdBQVcseURBRVBVLE9BREZFLFNBQVMsZ0JBQWdCLElBQzFCLEtBQWtDLE9BQS9CRixhQUFhLGVBQWUsSUFBRztzQkFFbkMsNEVBQUNYO2dCQUNDa0IsS0FBS0o7Z0JBQ0xiLFdBQVcseUJBQW1DLE9BQVZqQixXQUFVO2dCQUM5Q21DLE9BQU87b0JBQUVDLFdBQVc7Z0JBQVE7MEJBRTNCMUQsdURBQUlBLENBQ0YyRCxLQUFLLENBQUNOLG9CQUFvQixHQUFHQyxpQkFDN0JuQixHQUFHLENBQUMsQ0FBQ3lCLFNBQVN4QyxzQkFDYiw4REFBQ2tCO3dCQUFnQkMsV0FBVTtrQ0FDekIsNEVBQUN0QyxxRUFBUUE7NEJBQUNTLElBQUlELE9BQU9tRCxRQUFRbEQsRUFBRTs7Ozs7O3VCQUR2QlU7Ozs7Ozs7Ozs7V0FoQlhDOzs7Ozs7Ozs7O0FBd0JiO0lBN0NNdUI7O1FBT0Z6Qyx1REFBWUE7UUFJaUNDLHVEQUFZQTs7O01BWHZEd0M7QUErQ04sK0RBQWV0QyxJQUFJQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvaG9tZS9ob21lLnRzeD84MmQxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgbW9jayBmcm9tIFwiQC9wdWJsaWMvbW9ja3MvcHJvZHVjdC5qc29uXCI7XG5pbXBvcnQgUHJvZHVjdHMgZnJvbSBcIkAvY29tcG9uZW50cy9wcm9kdWN0cy9Qcm9kdWN0c1wiO1xuaW1wb3J0IHsgRG5kQ29udGV4dCwgdXNlRHJhZ2dhYmxlLCB1c2VEcm9wcGFibGUgfSBmcm9tIFwiQGRuZC1raXQvY29yZVwiO1xuaW1wb3J0IENoZWNrYm94IGZyb20gXCIuLi9jaGVja2JveC9jaGVja2JveFwiO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBwYXJhbXM6IHsgaWQ6IHN0cmluZyB9O1xufVxuXG5jb25zdCBIb21lOiBSZWFjdC5GQzxQcm9wcz4gPSAoeyBwYXJhbXMgfSkgPT4ge1xuICBjb25zdCBudW1Qcm9kdWN0cyA9IE51bWJlcihwYXJhbXMuaWQpO1xuICBjb25zdCBudW1Db250YWluZXJzID0gTWF0aC5jZWlsKG51bVByb2R1Y3RzIC8gMyk7XG4gIGNvbnN0IFtjb250YWluZXJQb3NpdGlvbnMsIHNldENvbnRhaW5lclBvc2l0aW9uc10gPSB1c2VTdGF0ZShcbiAgICBBcnJheS5mcm9tKHsgbGVuZ3RoOiBudW1Db250YWluZXJzIH0sIChfLCBpbmRleCkgPT4gKHtcbiAgICAgIHBvc2l0aW9uOiBpbmRleCArIDEsXG4gICAgICBhbGlnbm1lbnQ6IFwiXCIsXG4gICAgfSkpXG4gICk7XG5cbiAgY29uc3QgaGFuZGxlRHJhZ0VuZCA9IChldmVudDogYW55KSA9PiB7XG4gICAgY29uc3QgeyBhY3RpdmUsIG92ZXIgfSA9IGV2ZW50O1xuXG4gICAgaWYgKCFvdmVyKSByZXR1cm47XG5cbiAgICBjb25zdCBzb3VyY2VJbmRleCA9IE51bWJlcihhY3RpdmUuaWQpO1xuICAgIGNvbnN0IGRlc3RpbmF0aW9uSW5kZXggPSBOdW1iZXIob3Zlci5pZCk7XG5cbiAgICBpZiAoc291cmNlSW5kZXggPT09IGRlc3RpbmF0aW9uSW5kZXgpIHJldHVybjtcblxuICAgIGNvbnN0IG5ld1Bvc2l0aW9uID0gWy4uLmNvbnRhaW5lclBvc2l0aW9uc107XG4gICAgY29uc3QgbW92ZWRDb250YWluZXIgPSBuZXdQb3NpdGlvbi5zcGxpY2Uoc291cmNlSW5kZXgsIDEpWzBdO1xuICAgIG5ld1Bvc2l0aW9uLnNwbGljZShkZXN0aW5hdGlvbkluZGV4LCAwLCBtb3ZlZENvbnRhaW5lcik7XG5cbiAgICBzZXRDb250YWluZXJQb3NpdGlvbnMobmV3UG9zaXRpb24pO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUFsaWdubWVudENoYW5nZSA9ICh2YWx1ZTogc3RyaW5nLCBpbmRleDogbnVtYmVyKSA9PiB7XG4gICAgc2V0Q29udGFpbmVyUG9zaXRpb25zKChwcmV2UG9zaXRpb25zKSA9PlxuICAgICAgcHJldlBvc2l0aW9ucy5tYXAoKGNvbnRhaW5lciwgaWR4KSA9PlxuICAgICAgICBpZHggPT09IGluZGV4ID8geyAuLi5jb250YWluZXIsIGFsaWdubWVudDogdmFsdWUgfSA6IGNvbnRhaW5lclxuICAgICAgKVxuICAgICk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1iZXR3ZWVuXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wganVzdGlmeS1zdGFydFwiPlxuICAgICAgICB7Y29udGFpbmVyUG9zaXRpb25zLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTEwXCIga2V5PXtpbmRleH0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTQgZmxleFwiPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJiZy1bI0VFRUVFRV0gcC0zIHJvdW5kZWQtbGdcIj5cbiAgICAgICAgICAgICAgICBGaWxhIHtpbmRleCArIDF9XG4gICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPENoZWNrYm94XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsodmFsdWUpID0+IGhhbmRsZUFsaWdubWVudENoYW5nZSh2YWx1ZSwgaW5kZXgpfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKSl9XG4gICAgICA8L2Rpdj5cbiAgICAgIDxEbmRDb250ZXh0IG9uRHJhZ0VuZD17aGFuZGxlRHJhZ0VuZH0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgICAgIHtjb250YWluZXJQb3NpdGlvbnMubWFwKChjb250YWluZXIsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICA8Q29udGFpbmVyXG4gICAgICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgICAgIGluZGV4PXtpbmRleH1cbiAgICAgICAgICAgICAgcG9zaXRpb249e2NvbnRhaW5lci5wb3NpdGlvbn1cbiAgICAgICAgICAgICAgYWxpZ25tZW50PXtjb250YWluZXIuYWxpZ25tZW50fVxuICAgICAgICAgICAgICBudW1Qcm9kdWN0cz17bnVtUHJvZHVjdHN9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvRG5kQ29udGV4dD5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmNvbnN0IENvbnRhaW5lcjogUmVhY3QuRkM8e1xuICBpbmRleDogbnVtYmVyO1xuICBwb3NpdGlvbjogbnVtYmVyO1xuICBudW1Qcm9kdWN0czogbnVtYmVyO1xuICBhbGlnbm1lbnQ6IHN0cmluZztcbn0+ID0gKHsgaW5kZXgsIHBvc2l0aW9uLCBudW1Qcm9kdWN0cywgYWxpZ25tZW50IH0pID0+IHtcbiAgY29uc3QgeyBhdHRyaWJ1dGVzLCBsaXN0ZW5lcnMsIHNldE5vZGVSZWYsIHRyYW5zZm9ybSwgaXNEcmFnZ2luZyB9ID1cbiAgICB1c2VEcmFnZ2FibGUoe1xuICAgICAgaWQ6IGluZGV4LnRvU3RyaW5nKCksXG4gICAgfSk7XG5cbiAgY29uc3QgeyBpc092ZXIsIHNldE5vZGVSZWY6IHNldERyb3BOb2RlUmVmIH0gPSB1c2VEcm9wcGFibGUoe1xuICAgIGlkOiBpbmRleC50b1N0cmluZygpLFxuICB9KTtcblxuICBjb25zdCBzdGFydFByb2R1Y3RJbmRleCA9IChwb3NpdGlvbiAtIDEpICogMyArIDE7XG4gIGNvbnN0IGVuZFByb2R1Y3RJbmRleCA9IE1hdGgubWluKHBvc2l0aW9uICogMywgbnVtUHJvZHVjdHMpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxkaXZcbiAgICAgICAga2V5PXtwb3NpdGlvbn1cbiAgICAgICAgcmVmPXtzZXROb2RlUmVmfVxuICAgICAgICB7Li4uYXR0cmlidXRlc31cbiAgICAgICAgey4uLmxpc3RlbmVyc31cbiAgICAgICAgY2xhc3NOYW1lPXtgcmVsYXRpdmUgIGJnLVsjRUVFRUVFXSBwLTQgbS00IGN1cnNvci1ncmFiIHJvdW5kZWQtbGcgJHtcbiAgICAgICAgICBpc092ZXIgPyBcImJnLWdyYXktMjAwXCIgOiBcIlwiXG4gICAgICAgIH0gJHtpc0RyYWdnaW5nID8gXCJvcGFjaXR5LTUwXCIgOiBcIlwifSB0cmFuc2l0aW9uLW9wYWNpdHkgZHVyYXRpb24tMzAwYH1cbiAgICAgID5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIHJlZj17c2V0RHJvcE5vZGVSZWZ9XG4gICAgICAgICAgY2xhc3NOYW1lPXtgZmxleCBmbGV4LXJvdyBqdXN0aWZ5LSR7YWxpZ25tZW50fSBpdGVtcy1jZW50ZXIgaC00NCBwLTJgfVxuICAgICAgICAgIHN0eWxlPXt7IG1pbkhlaWdodDogXCIyMDBweFwiIH19XG4gICAgICAgID5cbiAgICAgICAgICB7bW9ja1xuICAgICAgICAgICAgLnNsaWNlKHN0YXJ0UHJvZHVjdEluZGV4IC0gMSwgZW5kUHJvZHVjdEluZGV4KVxuICAgICAgICAgICAgLm1hcCgocHJvZHVjdCwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgPGRpdiBrZXk9e2luZGV4fSBjbGFzc05hbWU9XCJtLTEgbWQ6bS0xMFwiPlxuICAgICAgICAgICAgICAgIDxQcm9kdWN0cyBpZD17TnVtYmVyKHByb2R1Y3QuaWQpfSAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICkpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIm1vY2siLCJQcm9kdWN0cyIsIkRuZENvbnRleHQiLCJ1c2VEcmFnZ2FibGUiLCJ1c2VEcm9wcGFibGUiLCJDaGVja2JveCIsIkhvbWUiLCJwYXJhbXMiLCJudW1Qcm9kdWN0cyIsIk51bWJlciIsImlkIiwibnVtQ29udGFpbmVycyIsIk1hdGgiLCJjZWlsIiwiY29udGFpbmVyUG9zaXRpb25zIiwic2V0Q29udGFpbmVyUG9zaXRpb25zIiwiQXJyYXkiLCJmcm9tIiwibGVuZ3RoIiwiXyIsImluZGV4IiwicG9zaXRpb24iLCJhbGlnbm1lbnQiLCJoYW5kbGVEcmFnRW5kIiwiZXZlbnQiLCJhY3RpdmUiLCJvdmVyIiwic291cmNlSW5kZXgiLCJkZXN0aW5hdGlvbkluZGV4IiwibmV3UG9zaXRpb24iLCJtb3ZlZENvbnRhaW5lciIsInNwbGljZSIsImhhbmRsZUFsaWdubWVudENoYW5nZSIsInZhbHVlIiwicHJldlBvc2l0aW9ucyIsIm1hcCIsImNvbnRhaW5lciIsImlkeCIsImRpdiIsImNsYXNzTmFtZSIsIml0ZW0iLCJzcGFuIiwib25DaGFuZ2UiLCJvbkRyYWdFbmQiLCJDb250YWluZXIiLCJhdHRyaWJ1dGVzIiwibGlzdGVuZXJzIiwic2V0Tm9kZVJlZiIsInRyYW5zZm9ybSIsImlzRHJhZ2dpbmciLCJ0b1N0cmluZyIsImlzT3ZlciIsInNldERyb3BOb2RlUmVmIiwic3RhcnRQcm9kdWN0SW5kZXgiLCJlbmRQcm9kdWN0SW5kZXgiLCJtaW4iLCJyZWYiLCJzdHlsZSIsIm1pbkhlaWdodCIsInNsaWNlIiwicHJvZHVjdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/home/home.tsx\n"));

/***/ })

});