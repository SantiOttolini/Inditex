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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _public_mocks_product_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/public/mocks/product.json */ \"(app-pages-browser)/./public/mocks/product.json\");\n/* harmony import */ var _components_products_Products__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/products/Products */ \"(app-pages-browser)/./components/products/Products.tsx\");\n/* harmony import */ var _dnd_kit_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @dnd-kit/core */ \"(app-pages-browser)/./node_modules/@dnd-kit/core/dist/core.esm.js\");\n/* harmony import */ var _checkbox_checkbox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../checkbox/checkbox */ \"(app-pages-browser)/./components/checkbox/checkbox.tsx\");\n\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\n\n\n\n\nconst Home = (param)=>{\n    let { params } = param;\n    _s();\n    const numProducts = Number(params.id);\n    const numContainers = Math.ceil(numProducts / 3);\n    const [containerPositions, setContainerPositions] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(Array.from({\n        length: numContainers\n    }, (_, index)=>({\n            position: index + 1,\n            alignment: \"\"\n        })));\n    const handleDragEnd = (event)=>{\n        const { active, over } = event;\n        if (!over) return;\n        const sourceIndex = Number(active.id);\n        const destinationIndex = Number(over.id);\n        if (sourceIndex === destinationIndex) return;\n        const newPosition = [\n            ...containerPositions\n        ];\n        const movedContainer = newPosition.splice(sourceIndex, 1)[0];\n        newPosition.splice(destinationIndex, 0, movedContainer);\n        setContainerPositions(newPosition);\n    };\n    const handleAlignmentChange = (value, index)=>{\n        setContainerPositions((prevPositions)=>prevPositions.map((container, idx)=>idx === index ? {\n                    ...container,\n                    alignment: value\n                } : container));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col  justify-between\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_dnd_kit_core__WEBPACK_IMPORTED_MODULE_4__.DndContext, {\n            onDragEnd: handleDragEnd,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col justify-center\",\n                children: containerPositions.map((container, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex items-start justify-between\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"mb-10\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"mb-4 flex\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: \"bg-[#EEEEEE] p-3 rounded-lg\",\n                                            children: [\n                                                \"Fila \",\n                                                index + 1\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/santiagoottolini/Documents/Downloads/Zara/components/home/home.tsx\",\n                                            lineNumber: 55,\n                                            columnNumber: 19\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/santiagoottolini/Documents/Downloads/Zara/components/home/home.tsx\",\n                                        lineNumber: 54,\n                                        columnNumber: 17\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_checkbox_checkbox__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                        onChange: (value)=>handleAlignmentChange(value, index)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/santiagoottolini/Documents/Downloads/Zara/components/home/home.tsx\",\n                                        lineNumber: 59,\n                                        columnNumber: 17\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/santiagoottolini/Documents/Downloads/Zara/components/home/home.tsx\",\n                                lineNumber: 53,\n                                columnNumber: 15\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Container, {\n                                    index: index,\n                                    position: container.position,\n                                    alignment: container.alignment,\n                                    numProducts: numProducts\n                                }, void 0, false, {\n                                    fileName: \"/Users/santiagoottolini/Documents/Downloads/Zara/components/home/home.tsx\",\n                                    lineNumber: 65,\n                                    columnNumber: 17\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/santiagoottolini/Documents/Downloads/Zara/components/home/home.tsx\",\n                                lineNumber: 64,\n                                columnNumber: 15\n                            }, undefined)\n                        ]\n                    }, index, true, {\n                        fileName: \"/Users/santiagoottolini/Documents/Downloads/Zara/components/home/home.tsx\",\n                        lineNumber: 51,\n                        columnNumber: 13\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"/Users/santiagoottolini/Documents/Downloads/Zara/components/home/home.tsx\",\n                lineNumber: 49,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/Users/santiagoottolini/Documents/Downloads/Zara/components/home/home.tsx\",\n            lineNumber: 48,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/santiagoottolini/Documents/Downloads/Zara/components/home/home.tsx\",\n        lineNumber: 47,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Home, \"LDd7oTbg2LCZF5Nf4C7Cg7/NoN8=\");\n_c = Home;\nconst Container = (param)=>{\n    let { index, position, numProducts, alignment } = param;\n    _s1();\n    const { attributes, listeners, setNodeRef, transform, isDragging } = (0,_dnd_kit_core__WEBPACK_IMPORTED_MODULE_4__.useDraggable)({\n        id: index.toString()\n    });\n    const { isOver, setNodeRef: setDropNodeRef } = (0,_dnd_kit_core__WEBPACK_IMPORTED_MODULE_4__.useDroppable)({\n        id: index.toString()\n    });\n    const startProductIndex = (position - 1) * 3 + 1;\n    const endProductIndex = Math.min(position * 3, numProducts);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"max-w-[100rem]\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            ref: setNodeRef,\n            ...attributes,\n            ...listeners,\n            className: \"relative  bg-[#EEEEEE] p-4 m-4 cursor-grab rounded-lg w-full\".concat(isOver ? \"bg-gray-200\" : \"\", \" \").concat(isDragging ? \"opacity-50\" : \"\", \" transition-opacity duration-300\"),\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                ref: setDropNodeRef,\n                className: \"flex flex-row justify-\".concat(alignment, \" items-center h-44 p-2\"),\n                style: {\n                    minHeight: \"200px\"\n                },\n                children: _public_mocks_product_json__WEBPACK_IMPORTED_MODULE_2__.slice(startProductIndex - 1, endProductIndex).map((product, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"m-1 md:m-10\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_products_Products__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                            id: Number(product.id)\n                        }, void 0, false, {\n                            fileName: \"/Users/santiagoottolini/Documents/Downloads/Zara/components/home/home.tsx\",\n                            lineNumber: 118,\n                            columnNumber: 17\n                        }, undefined)\n                    }, index, false, {\n                        fileName: \"/Users/santiagoottolini/Documents/Downloads/Zara/components/home/home.tsx\",\n                        lineNumber: 117,\n                        columnNumber: 15\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"/Users/santiagoottolini/Documents/Downloads/Zara/components/home/home.tsx\",\n                lineNumber: 109,\n                columnNumber: 9\n            }, undefined)\n        }, position, false, {\n            fileName: \"/Users/santiagoottolini/Documents/Downloads/Zara/components/home/home.tsx\",\n            lineNumber: 100,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/santiagoottolini/Documents/Downloads/Zara/components/home/home.tsx\",\n        lineNumber: 99,\n        columnNumber: 5\n    }, undefined);\n};\n_s1(Container, \"B29bdDOjK6hWugGKfMp2tf4R1m8=\", false, function() {\n    return [\n        _dnd_kit_core__WEBPACK_IMPORTED_MODULE_4__.useDraggable,\n        _dnd_kit_core__WEBPACK_IMPORTED_MODULE_4__.useDroppable\n    ];\n});\n_c1 = Container;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c, _c1;\n$RefreshReg$(_c, \"Home\");\n$RefreshReg$(_c1, \"Container\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvaG9tZS9ob21lLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQWlDO0FBQ2M7QUFDTztBQUNpQjtBQUMzQjtBQU01QyxNQUFNTyxPQUF3QjtRQUFDLEVBQUVDLE1BQU0sRUFBRTs7SUFDdkMsTUFBTUMsY0FBY0MsT0FBT0YsT0FBT0csRUFBRTtJQUNwQyxNQUFNQyxnQkFBZ0JDLEtBQUtDLElBQUksQ0FBQ0wsY0FBYztJQUM5QyxNQUFNLENBQUNNLG9CQUFvQkMsc0JBQXNCLEdBQUdoQiwrQ0FBUUEsQ0FDMURpQixNQUFNQyxJQUFJLENBQUM7UUFBRUMsUUFBUVA7SUFBYyxHQUFHLENBQUNRLEdBQUdDLFFBQVc7WUFDbkRDLFVBQVVELFFBQVE7WUFDbEJFLFdBQVc7UUFDYjtJQUdGLE1BQU1DLGdCQUFnQixDQUFDQztRQUNyQixNQUFNLEVBQUVDLE1BQU0sRUFBRUMsSUFBSSxFQUFFLEdBQUdGO1FBRXpCLElBQUksQ0FBQ0UsTUFBTTtRQUVYLE1BQU1DLGNBQWNsQixPQUFPZ0IsT0FBT2YsRUFBRTtRQUNwQyxNQUFNa0IsbUJBQW1CbkIsT0FBT2lCLEtBQUtoQixFQUFFO1FBRXZDLElBQUlpQixnQkFBZ0JDLGtCQUFrQjtRQUV0QyxNQUFNQyxjQUFjO2VBQUlmO1NBQW1CO1FBQzNDLE1BQU1nQixpQkFBaUJELFlBQVlFLE1BQU0sQ0FBQ0osYUFBYSxFQUFFLENBQUMsRUFBRTtRQUM1REUsWUFBWUUsTUFBTSxDQUFDSCxrQkFBa0IsR0FBR0U7UUFFeENmLHNCQUFzQmM7SUFDeEI7SUFFQSxNQUFNRyx3QkFBd0IsQ0FBQ0MsT0FBZWI7UUFDNUNMLHNCQUFzQixDQUFDbUIsZ0JBQ3JCQSxjQUFjQyxHQUFHLENBQUMsQ0FBQ0MsV0FBV0MsTUFDNUJBLFFBQVFqQixRQUFRO29CQUFFLEdBQUdnQixTQUFTO29CQUFFZCxXQUFXVztnQkFBTSxJQUFJRztJQUczRDtJQUVBLHFCQUNFLDhEQUFDRTtRQUFJQyxXQUFVO2tCQUNiLDRFQUFDckMscURBQVVBO1lBQUNzQyxXQUFXakI7c0JBQ3JCLDRFQUFDZTtnQkFBSUMsV0FBVTswQkFDWnpCLG1CQUFtQnFCLEdBQUcsQ0FBQyxDQUFDQyxXQUFXaEIsc0JBQ2xDLDhEQUFDa0I7d0JBQWdCQyxXQUFVOzswQ0FFekIsOERBQUNEO2dDQUFJQyxXQUFVOztrREFDYiw4REFBQ0Q7d0NBQUlDLFdBQVU7a0RBQ2IsNEVBQUNFOzRDQUFLRixXQUFVOztnREFBOEI7Z0RBQ3RDbkIsUUFBUTs7Ozs7Ozs7Ozs7O2tEQUdsQiw4REFBQ2YsMERBQVFBO3dDQUNQcUMsVUFBVSxDQUFDVCxRQUFVRCxzQkFBc0JDLE9BQU9iOzs7Ozs7Ozs7Ozs7MENBSXRELDhEQUFDa0I7MENBQ0MsNEVBQUNLO29DQUNDdkIsT0FBT0E7b0NBQ1BDLFVBQVVlLFVBQVVmLFFBQVE7b0NBQzVCQyxXQUFXYyxVQUFVZCxTQUFTO29DQUM5QmQsYUFBYUE7Ozs7Ozs7Ozs7Ozt1QkFsQlRZOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTJCdEI7R0FuRU1kO0tBQUFBO0FBcUVOLE1BQU1xQyxZQUtEO1FBQUMsRUFBRXZCLEtBQUssRUFBRUMsUUFBUSxFQUFFYixXQUFXLEVBQUVjLFNBQVMsRUFBRTs7SUFDL0MsTUFBTSxFQUFFc0IsVUFBVSxFQUFFQyxTQUFTLEVBQUVDLFVBQVUsRUFBRUMsU0FBUyxFQUFFQyxVQUFVLEVBQUUsR0FDaEU3QywyREFBWUEsQ0FBQztRQUNYTyxJQUFJVSxNQUFNNkIsUUFBUTtJQUNwQjtJQUVGLE1BQU0sRUFBRUMsTUFBTSxFQUFFSixZQUFZSyxjQUFjLEVBQUUsR0FBRy9DLDJEQUFZQSxDQUFDO1FBQzFETSxJQUFJVSxNQUFNNkIsUUFBUTtJQUNwQjtJQUVBLE1BQU1HLG9CQUFvQixDQUFDL0IsV0FBVyxLQUFLLElBQUk7SUFDL0MsTUFBTWdDLGtCQUFrQnpDLEtBQUswQyxHQUFHLENBQUNqQyxXQUFXLEdBQUdiO0lBRS9DLHFCQUNFLDhEQUFDOEI7UUFBSUMsV0FBVTtrQkFDYiw0RUFBQ0Q7WUFFQ2lCLEtBQUtUO1lBQ0osR0FBR0YsVUFBVTtZQUNiLEdBQUdDLFNBQVM7WUFDYk4sV0FBVywrREFFUFMsT0FERkUsU0FBUyxnQkFBZ0IsSUFDMUIsS0FBa0MsT0FBL0JGLGFBQWEsZUFBZSxJQUFHO3NCQUVuQyw0RUFBQ1Y7Z0JBQ0NpQixLQUFLSjtnQkFDTFosV0FBVyx5QkFBbUMsT0FBVmpCLFdBQVU7Z0JBQzlDa0MsT0FBTztvQkFBRUMsV0FBVztnQkFBUTswQkFFM0J6RCx1REFBSUEsQ0FDRjBELEtBQUssQ0FBQ04sb0JBQW9CLEdBQUdDLGlCQUM3QmxCLEdBQUcsQ0FBQyxDQUFDd0IsU0FBU3ZDLHNCQUNiLDhEQUFDa0I7d0JBQWdCQyxXQUFVO2tDQUN6Qiw0RUFBQ3RDLHFFQUFRQTs0QkFBQ1MsSUFBSUQsT0FBT2tELFFBQVFqRCxFQUFFOzs7Ozs7dUJBRHZCVTs7Ozs7Ozs7OztXQWhCWEM7Ozs7Ozs7Ozs7QUF3QmI7SUE3Q01zQjs7UUFPRnhDLHVEQUFZQTtRQUlpQ0MsdURBQVlBOzs7TUFYdkR1QztBQStDTiwrREFBZXJDLElBQUlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9ob21lL2hvbWUudHN4PzgyZDEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBtb2NrIGZyb20gXCJAL3B1YmxpYy9tb2Nrcy9wcm9kdWN0Lmpzb25cIjtcbmltcG9ydCBQcm9kdWN0cyBmcm9tIFwiQC9jb21wb25lbnRzL3Byb2R1Y3RzL1Byb2R1Y3RzXCI7XG5pbXBvcnQgeyBEbmRDb250ZXh0LCB1c2VEcmFnZ2FibGUsIHVzZURyb3BwYWJsZSB9IGZyb20gXCJAZG5kLWtpdC9jb3JlXCI7XG5pbXBvcnQgQ2hlY2tib3ggZnJvbSBcIi4uL2NoZWNrYm94L2NoZWNrYm94XCI7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIHBhcmFtczogeyBpZDogc3RyaW5nIH07XG59XG5cbmNvbnN0IEhvbWU6IFJlYWN0LkZDPFByb3BzPiA9ICh7IHBhcmFtcyB9KSA9PiB7XG4gIGNvbnN0IG51bVByb2R1Y3RzID0gTnVtYmVyKHBhcmFtcy5pZCk7XG4gIGNvbnN0IG51bUNvbnRhaW5lcnMgPSBNYXRoLmNlaWwobnVtUHJvZHVjdHMgLyAzKTtcbiAgY29uc3QgW2NvbnRhaW5lclBvc2l0aW9ucywgc2V0Q29udGFpbmVyUG9zaXRpb25zXSA9IHVzZVN0YXRlKFxuICAgIEFycmF5LmZyb20oeyBsZW5ndGg6IG51bUNvbnRhaW5lcnMgfSwgKF8sIGluZGV4KSA9PiAoe1xuICAgICAgcG9zaXRpb246IGluZGV4ICsgMSxcbiAgICAgIGFsaWdubWVudDogXCJcIixcbiAgICB9KSlcbiAgKTtcblxuICBjb25zdCBoYW5kbGVEcmFnRW5kID0gKGV2ZW50OiBhbnkpID0+IHtcbiAgICBjb25zdCB7IGFjdGl2ZSwgb3ZlciB9ID0gZXZlbnQ7XG5cbiAgICBpZiAoIW92ZXIpIHJldHVybjtcblxuICAgIGNvbnN0IHNvdXJjZUluZGV4ID0gTnVtYmVyKGFjdGl2ZS5pZCk7XG4gICAgY29uc3QgZGVzdGluYXRpb25JbmRleCA9IE51bWJlcihvdmVyLmlkKTtcblxuICAgIGlmIChzb3VyY2VJbmRleCA9PT0gZGVzdGluYXRpb25JbmRleCkgcmV0dXJuO1xuXG4gICAgY29uc3QgbmV3UG9zaXRpb24gPSBbLi4uY29udGFpbmVyUG9zaXRpb25zXTtcbiAgICBjb25zdCBtb3ZlZENvbnRhaW5lciA9IG5ld1Bvc2l0aW9uLnNwbGljZShzb3VyY2VJbmRleCwgMSlbMF07XG4gICAgbmV3UG9zaXRpb24uc3BsaWNlKGRlc3RpbmF0aW9uSW5kZXgsIDAsIG1vdmVkQ29udGFpbmVyKTtcblxuICAgIHNldENvbnRhaW5lclBvc2l0aW9ucyhuZXdQb3NpdGlvbik7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlQWxpZ25tZW50Q2hhbmdlID0gKHZhbHVlOiBzdHJpbmcsIGluZGV4OiBudW1iZXIpID0+IHtcbiAgICBzZXRDb250YWluZXJQb3NpdGlvbnMoKHByZXZQb3NpdGlvbnMpID0+XG4gICAgICBwcmV2UG9zaXRpb25zLm1hcCgoY29udGFpbmVyLCBpZHgpID0+XG4gICAgICAgIGlkeCA9PT0gaW5kZXggPyB7IC4uLmNvbnRhaW5lciwgYWxpZ25tZW50OiB2YWx1ZSB9IDogY29udGFpbmVyXG4gICAgICApXG4gICAgKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCAganVzdGlmeS1iZXR3ZWVuXCI+XG4gICAgICA8RG5kQ29udGV4dCBvbkRyYWdFbmQ9e2hhbmRsZURyYWdFbmR9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgICAgICB7Y29udGFpbmVyUG9zaXRpb25zLm1hcCgoY29udGFpbmVyLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgPGRpdiBrZXk9e2luZGV4fSBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLXN0YXJ0IGp1c3RpZnktYmV0d2VlblwiPlxuICAgICAgICAgICAgICB7LyogQ29udGVuZWRvciBkZSBmaWxhICovfVxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTEwXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi00IGZsZXhcIj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJnLVsjRUVFRUVFXSBwLTMgcm91bmRlZC1sZ1wiPlxuICAgICAgICAgICAgICAgICAgICBGaWxhIHtpbmRleCArIDF9XG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPENoZWNrYm94XG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KHZhbHVlKSA9PiBoYW5kbGVBbGlnbm1lbnRDaGFuZ2UodmFsdWUsIGluZGV4KX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgey8qIENvbnRlbmVkb3IgZGUgY29udGVuZWRvciAqL31cbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8Q29udGFpbmVyXG4gICAgICAgICAgICAgICAgICBpbmRleD17aW5kZXh9XG4gICAgICAgICAgICAgICAgICBwb3NpdGlvbj17Y29udGFpbmVyLnBvc2l0aW9ufVxuICAgICAgICAgICAgICAgICAgYWxpZ25tZW50PXtjb250YWluZXIuYWxpZ25tZW50fVxuICAgICAgICAgICAgICAgICAgbnVtUHJvZHVjdHM9e251bVByb2R1Y3RzfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9EbmRDb250ZXh0PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuY29uc3QgQ29udGFpbmVyOiBSZWFjdC5GQzx7XG4gIGluZGV4OiBudW1iZXI7XG4gIHBvc2l0aW9uOiBudW1iZXI7XG4gIG51bVByb2R1Y3RzOiBudW1iZXI7XG4gIGFsaWdubWVudDogc3RyaW5nO1xufT4gPSAoeyBpbmRleCwgcG9zaXRpb24sIG51bVByb2R1Y3RzLCBhbGlnbm1lbnQgfSkgPT4ge1xuICBjb25zdCB7IGF0dHJpYnV0ZXMsIGxpc3RlbmVycywgc2V0Tm9kZVJlZiwgdHJhbnNmb3JtLCBpc0RyYWdnaW5nIH0gPVxuICAgIHVzZURyYWdnYWJsZSh7XG4gICAgICBpZDogaW5kZXgudG9TdHJpbmcoKSxcbiAgICB9KTtcblxuICBjb25zdCB7IGlzT3Zlciwgc2V0Tm9kZVJlZjogc2V0RHJvcE5vZGVSZWYgfSA9IHVzZURyb3BwYWJsZSh7XG4gICAgaWQ6IGluZGV4LnRvU3RyaW5nKCksXG4gIH0pO1xuXG4gIGNvbnN0IHN0YXJ0UHJvZHVjdEluZGV4ID0gKHBvc2l0aW9uIC0gMSkgKiAzICsgMTtcbiAgY29uc3QgZW5kUHJvZHVjdEluZGV4ID0gTWF0aC5taW4ocG9zaXRpb24gKiAzLCBudW1Qcm9kdWN0cyk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1heC13LVsxMDByZW1dXCI+XG4gICAgICA8ZGl2XG4gICAgICAgIGtleT17cG9zaXRpb259XG4gICAgICAgIHJlZj17c2V0Tm9kZVJlZn1cbiAgICAgICAgey4uLmF0dHJpYnV0ZXN9XG4gICAgICAgIHsuLi5saXN0ZW5lcnN9XG4gICAgICAgIGNsYXNzTmFtZT17YHJlbGF0aXZlICBiZy1bI0VFRUVFRV0gcC00IG0tNCBjdXJzb3ItZ3JhYiByb3VuZGVkLWxnIHctZnVsbCR7XG4gICAgICAgICAgaXNPdmVyID8gXCJiZy1ncmF5LTIwMFwiIDogXCJcIlxuICAgICAgICB9ICR7aXNEcmFnZ2luZyA/IFwib3BhY2l0eS01MFwiIDogXCJcIn0gdHJhbnNpdGlvbi1vcGFjaXR5IGR1cmF0aW9uLTMwMGB9XG4gICAgICA+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICByZWY9e3NldERyb3BOb2RlUmVmfVxuICAgICAgICAgIGNsYXNzTmFtZT17YGZsZXggZmxleC1yb3cganVzdGlmeS0ke2FsaWdubWVudH0gaXRlbXMtY2VudGVyIGgtNDQgcC0yYH1cbiAgICAgICAgICBzdHlsZT17eyBtaW5IZWlnaHQ6IFwiMjAwcHhcIiB9fVxuICAgICAgICA+XG4gICAgICAgICAge21vY2tcbiAgICAgICAgICAgIC5zbGljZShzdGFydFByb2R1Y3RJbmRleCAtIDEsIGVuZFByb2R1Y3RJbmRleClcbiAgICAgICAgICAgIC5tYXAoKHByb2R1Y3QsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgIDxkaXYga2V5PXtpbmRleH0gY2xhc3NOYW1lPVwibS0xIG1kOm0tMTBcIj5cbiAgICAgICAgICAgICAgICA8UHJvZHVjdHMgaWQ9e051bWJlcihwcm9kdWN0LmlkKX0gLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWU7XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJtb2NrIiwiUHJvZHVjdHMiLCJEbmRDb250ZXh0IiwidXNlRHJhZ2dhYmxlIiwidXNlRHJvcHBhYmxlIiwiQ2hlY2tib3giLCJIb21lIiwicGFyYW1zIiwibnVtUHJvZHVjdHMiLCJOdW1iZXIiLCJpZCIsIm51bUNvbnRhaW5lcnMiLCJNYXRoIiwiY2VpbCIsImNvbnRhaW5lclBvc2l0aW9ucyIsInNldENvbnRhaW5lclBvc2l0aW9ucyIsIkFycmF5IiwiZnJvbSIsImxlbmd0aCIsIl8iLCJpbmRleCIsInBvc2l0aW9uIiwiYWxpZ25tZW50IiwiaGFuZGxlRHJhZ0VuZCIsImV2ZW50IiwiYWN0aXZlIiwib3ZlciIsInNvdXJjZUluZGV4IiwiZGVzdGluYXRpb25JbmRleCIsIm5ld1Bvc2l0aW9uIiwibW92ZWRDb250YWluZXIiLCJzcGxpY2UiLCJoYW5kbGVBbGlnbm1lbnRDaGFuZ2UiLCJ2YWx1ZSIsInByZXZQb3NpdGlvbnMiLCJtYXAiLCJjb250YWluZXIiLCJpZHgiLCJkaXYiLCJjbGFzc05hbWUiLCJvbkRyYWdFbmQiLCJzcGFuIiwib25DaGFuZ2UiLCJDb250YWluZXIiLCJhdHRyaWJ1dGVzIiwibGlzdGVuZXJzIiwic2V0Tm9kZVJlZiIsInRyYW5zZm9ybSIsImlzRHJhZ2dpbmciLCJ0b1N0cmluZyIsImlzT3ZlciIsInNldERyb3BOb2RlUmVmIiwic3RhcnRQcm9kdWN0SW5kZXgiLCJlbmRQcm9kdWN0SW5kZXgiLCJtaW4iLCJyZWYiLCJzdHlsZSIsIm1pbkhlaWdodCIsInNsaWNlIiwicHJvZHVjdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/home/home.tsx\n"));

/***/ })

});