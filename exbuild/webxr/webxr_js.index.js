"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk"] = self["webpackChunk"] || []).push([["webxr_js"],{

/***/ "./webxr.js":
/*!******************!*\
  !*** ./webxr.js ***!
  \******************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _pkg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pkg */ \"./pkg/index.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_pkg__WEBPACK_IMPORTED_MODULE_0__]);\n_pkg__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\nvar xrApp = new _pkg__WEBPACK_IMPORTED_MODULE_0__.XrApp();\nxrApp.init()\n    .then(res => {\n        console.log(res);\n        xrApp.start();\n    });\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });\n\n//# sourceURL=webpack:///./webxr.js?");

/***/ }),

/***/ "./pkg/index.js":
/*!**********************!*\
  !*** ./pkg/index.js ***!
  \**********************/
/***/ ((__webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   XrApp: () => (/* reexport safe */ _index_bg_js__WEBPACK_IMPORTED_MODULE_0__.XrApp),\n/* harmony export */   __wbg_call_27c0f87801dedf93: () => (/* reexport safe */ _index_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_call_27c0f87801dedf93),\n/* harmony export */   __wbg_call_b3ca7c6051f9bec1: () => (/* reexport safe */ _index_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_call_b3ca7c6051f9bec1),\n/* harmony export */   __wbg_document_5100775d18896c16: () => (/* reexport safe */ _index_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_document_5100775d18896c16),\n/* harmony export */   __wbg_getContext_df50fa48a8876636: () => (/* reexport safe */ _index_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_getContext_df50fa48a8876636),\n/* harmony export */   __wbg_getContext_fec464290556673c: () => (/* reexport safe */ _index_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_getContext_fec464290556673c),\n/* harmony export */   __wbg_getElementById_c369ff43f0db99cf: () => (/* reexport safe */ _index_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_getElementById_c369ff43f0db99cf),\n/* harmony export */   __wbg_globalThis_d1e6af4856ba331b: () => (/* reexport safe */ _index_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_globalThis_d1e6af4856ba331b),\n/* harmony export */   __wbg_global_207b558942527489: () => (/* reexport safe */ _index_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_global_207b558942527489),\n/* harmony export */   __wbg_instanceof_HtmlCanvasElement_46bdbf323b0b18d1: () => (/* reexport safe */ _index_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_instanceof_HtmlCanvasElement_46bdbf323b0b18d1),\n/* harmony export */   __wbg_instanceof_WebGl2RenderingContext_6b8f92d566ced9e1: () => (/* reexport safe */ _index_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_instanceof_WebGl2RenderingContext_6b8f92d566ced9e1),\n/* harmony export */   __wbg_instanceof_Window_f401953a2cf86220: () => (/* reexport safe */ _index_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_instanceof_Window_f401953a2cf86220),\n/* harmony export */   __wbg_isSessionSupported_cb57c8609859e796: () => (/* reexport safe */ _index_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_isSessionSupported_cb57c8609859e796),\n/* harmony export */   __wbg_log_5bb5f88f245d7762: () => (/* reexport safe */ _index_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_log_5bb5f88f245d7762),\n/* harmony export */   __wbg_navigator_6c8fa55c5cc8796e: () => (/* reexport safe */ _index_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_navigator_6c8fa55c5cc8796e),\n/* harmony export */   __wbg_new_72fb9a18b5ae2624: () => (/* reexport safe */ _index_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_new_72fb9a18b5ae2624),\n/* harmony export */   __wbg_new_81740750da40724f: () => (/* reexport safe */ _index_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_new_81740750da40724f),\n/* harmony export */   __wbg_newnoargs_e258087cd0daa0ea: () => (/* reexport safe */ _index_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_newnoargs_e258087cd0daa0ea),\n/* harmony export */   __wbg_newwithwebgl2renderingcontext_7e56a66b1b21b685: () => (/* reexport safe */ _index_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_newwithwebgl2renderingcontext_7e56a66b1b21b685),\n/* harmony export */   __wbg_queueMicrotask_3cbae2ec6b6cd3d6: () => (/* reexport safe */ _index_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_queueMicrotask_3cbae2ec6b6cd3d6),\n/* harmony export */   __wbg_queueMicrotask_481971b0d87f3dd4: () => (/* reexport safe */ _index_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_queueMicrotask_481971b0d87f3dd4),\n/* harmony export */   __wbg_requestAnimationFrame_d7aede2ee54585bf: () => (/* reexport safe */ _index_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_requestAnimationFrame_d7aede2ee54585bf),\n/* harmony export */   __wbg_requestSession_b0918011a4e1d945: () => (/* reexport safe */ _index_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_requestSession_b0918011a4e1d945),\n/* harmony export */   __wbg_resolve_b0083a7967828ec8: () => (/* reexport safe */ _index_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_resolve_b0083a7967828ec8),\n/* harmony export */   __wbg_self_ce0dbfc45cf2f5be: () => (/* reexport safe */ _index_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_self_ce0dbfc45cf2f5be),\n/* harmony export */   __wbg_session_e485f54b15f90fce: () => (/* reexport safe */ _index_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_session_e485f54b15f90fce),\n/* harmony export */   __wbg_set_1f9b04f170055d33: () => (/* reexport safe */ _index_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_set_1f9b04f170055d33),\n/* harmony export */   __wbg_set_wasm: () => (/* reexport safe */ _index_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_set_wasm),\n/* harmony export */   __wbg_setbaselayer_80c7e13b6d8f6432: () => (/* reexport safe */ _index_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_setbaselayer_80c7e13b6d8f6432),\n/* harmony export */   __wbg_then_0c86a60e8fcfe9f6: () => (/* reexport safe */ _index_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_then_0c86a60e8fcfe9f6),\n/* harmony export */   __wbg_then_a73caa9a87991566: () => (/* reexport safe */ _index_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_then_a73caa9a87991566),\n/* harmony export */   __wbg_updateRenderState_8b27ddd9694be347: () => (/* reexport safe */ _index_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_updateRenderState_8b27ddd9694be347),\n/* harmony export */   __wbg_window_c6fb939a7f436783: () => (/* reexport safe */ _index_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_window_c6fb939a7f436783),\n/* harmony export */   __wbg_xr_1b2b096f8b1650f7: () => (/* reexport safe */ _index_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_xr_1b2b096f8b1650f7),\n/* harmony export */   __wbindgen_boolean_get: () => (/* reexport safe */ _index_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbindgen_boolean_get),\n/* harmony export */   __wbindgen_cb_drop: () => (/* reexport safe */ _index_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbindgen_cb_drop),\n/* harmony export */   __wbindgen_closure_wrapper2282: () => (/* reexport safe */ _index_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbindgen_closure_wrapper2282),\n/* harmony export */   __wbindgen_closure_wrapper73: () => (/* reexport safe */ _index_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbindgen_closure_wrapper73),\n/* harmony export */   __wbindgen_debug_string: () => (/* reexport safe */ _index_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbindgen_debug_string),\n/* harmony export */   __wbindgen_is_function: () => (/* reexport safe */ _index_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbindgen_is_function),\n/* harmony export */   __wbindgen_is_undefined: () => (/* reexport safe */ _index_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbindgen_is_undefined),\n/* harmony export */   __wbindgen_object_clone_ref: () => (/* reexport safe */ _index_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbindgen_object_clone_ref),\n/* harmony export */   __wbindgen_object_drop_ref: () => (/* reexport safe */ _index_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbindgen_object_drop_ref),\n/* harmony export */   __wbindgen_string_new: () => (/* reexport safe */ _index_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbindgen_string_new),\n/* harmony export */   __wbindgen_throw: () => (/* reexport safe */ _index_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbindgen_throw)\n/* harmony export */ });\n/* harmony import */ var _index_bg_wasm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index_bg.wasm */ \"./pkg/index_bg.wasm\");\n/* harmony import */ var _index_bg_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index_bg.js */ \"./pkg/index_bg.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_index_bg_wasm__WEBPACK_IMPORTED_MODULE_1__]);\n_index_bg_wasm__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n(0,_index_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_set_wasm)(_index_bg_wasm__WEBPACK_IMPORTED_MODULE_1__);\n\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });\n\n//# sourceURL=webpack:///./pkg/index.js?");

/***/ }),

/***/ "./pkg/index_bg.js":
/*!*************************!*\
  !*** ./pkg/index_bg.js ***!
  \*************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   XrApp: () => (/* binding */ XrApp),\n/* harmony export */   __wbg_call_27c0f87801dedf93: () => (/* binding */ __wbg_call_27c0f87801dedf93),\n/* harmony export */   __wbg_call_b3ca7c6051f9bec1: () => (/* binding */ __wbg_call_b3ca7c6051f9bec1),\n/* harmony export */   __wbg_document_5100775d18896c16: () => (/* binding */ __wbg_document_5100775d18896c16),\n/* harmony export */   __wbg_getContext_df50fa48a8876636: () => (/* binding */ __wbg_getContext_df50fa48a8876636),\n/* harmony export */   __wbg_getContext_fec464290556673c: () => (/* binding */ __wbg_getContext_fec464290556673c),\n/* harmony export */   __wbg_getElementById_c369ff43f0db99cf: () => (/* binding */ __wbg_getElementById_c369ff43f0db99cf),\n/* harmony export */   __wbg_globalThis_d1e6af4856ba331b: () => (/* binding */ __wbg_globalThis_d1e6af4856ba331b),\n/* harmony export */   __wbg_global_207b558942527489: () => (/* binding */ __wbg_global_207b558942527489),\n/* harmony export */   __wbg_instanceof_HtmlCanvasElement_46bdbf323b0b18d1: () => (/* binding */ __wbg_instanceof_HtmlCanvasElement_46bdbf323b0b18d1),\n/* harmony export */   __wbg_instanceof_WebGl2RenderingContext_6b8f92d566ced9e1: () => (/* binding */ __wbg_instanceof_WebGl2RenderingContext_6b8f92d566ced9e1),\n/* harmony export */   __wbg_instanceof_Window_f401953a2cf86220: () => (/* binding */ __wbg_instanceof_Window_f401953a2cf86220),\n/* harmony export */   __wbg_isSessionSupported_cb57c8609859e796: () => (/* binding */ __wbg_isSessionSupported_cb57c8609859e796),\n/* harmony export */   __wbg_log_5bb5f88f245d7762: () => (/* binding */ __wbg_log_5bb5f88f245d7762),\n/* harmony export */   __wbg_navigator_6c8fa55c5cc8796e: () => (/* binding */ __wbg_navigator_6c8fa55c5cc8796e),\n/* harmony export */   __wbg_new_72fb9a18b5ae2624: () => (/* binding */ __wbg_new_72fb9a18b5ae2624),\n/* harmony export */   __wbg_new_81740750da40724f: () => (/* binding */ __wbg_new_81740750da40724f),\n/* harmony export */   __wbg_newnoargs_e258087cd0daa0ea: () => (/* binding */ __wbg_newnoargs_e258087cd0daa0ea),\n/* harmony export */   __wbg_newwithwebgl2renderingcontext_7e56a66b1b21b685: () => (/* binding */ __wbg_newwithwebgl2renderingcontext_7e56a66b1b21b685),\n/* harmony export */   __wbg_queueMicrotask_3cbae2ec6b6cd3d6: () => (/* binding */ __wbg_queueMicrotask_3cbae2ec6b6cd3d6),\n/* harmony export */   __wbg_queueMicrotask_481971b0d87f3dd4: () => (/* binding */ __wbg_queueMicrotask_481971b0d87f3dd4),\n/* harmony export */   __wbg_requestAnimationFrame_d7aede2ee54585bf: () => (/* binding */ __wbg_requestAnimationFrame_d7aede2ee54585bf),\n/* harmony export */   __wbg_requestSession_b0918011a4e1d945: () => (/* binding */ __wbg_requestSession_b0918011a4e1d945),\n/* harmony export */   __wbg_resolve_b0083a7967828ec8: () => (/* binding */ __wbg_resolve_b0083a7967828ec8),\n/* harmony export */   __wbg_self_ce0dbfc45cf2f5be: () => (/* binding */ __wbg_self_ce0dbfc45cf2f5be),\n/* harmony export */   __wbg_session_e485f54b15f90fce: () => (/* binding */ __wbg_session_e485f54b15f90fce),\n/* harmony export */   __wbg_set_1f9b04f170055d33: () => (/* binding */ __wbg_set_1f9b04f170055d33),\n/* harmony export */   __wbg_set_wasm: () => (/* binding */ __wbg_set_wasm),\n/* harmony export */   __wbg_setbaselayer_80c7e13b6d8f6432: () => (/* binding */ __wbg_setbaselayer_80c7e13b6d8f6432),\n/* harmony export */   __wbg_then_0c86a60e8fcfe9f6: () => (/* binding */ __wbg_then_0c86a60e8fcfe9f6),\n/* harmony export */   __wbg_then_a73caa9a87991566: () => (/* binding */ __wbg_then_a73caa9a87991566),\n/* harmony export */   __wbg_updateRenderState_8b27ddd9694be347: () => (/* binding */ __wbg_updateRenderState_8b27ddd9694be347),\n/* harmony export */   __wbg_window_c6fb939a7f436783: () => (/* binding */ __wbg_window_c6fb939a7f436783),\n/* harmony export */   __wbg_xr_1b2b096f8b1650f7: () => (/* binding */ __wbg_xr_1b2b096f8b1650f7),\n/* harmony export */   __wbindgen_boolean_get: () => (/* binding */ __wbindgen_boolean_get),\n/* harmony export */   __wbindgen_cb_drop: () => (/* binding */ __wbindgen_cb_drop),\n/* harmony export */   __wbindgen_closure_wrapper2282: () => (/* binding */ __wbindgen_closure_wrapper2282),\n/* harmony export */   __wbindgen_closure_wrapper73: () => (/* binding */ __wbindgen_closure_wrapper73),\n/* harmony export */   __wbindgen_debug_string: () => (/* binding */ __wbindgen_debug_string),\n/* harmony export */   __wbindgen_is_function: () => (/* binding */ __wbindgen_is_function),\n/* harmony export */   __wbindgen_is_undefined: () => (/* binding */ __wbindgen_is_undefined),\n/* harmony export */   __wbindgen_object_clone_ref: () => (/* binding */ __wbindgen_object_clone_ref),\n/* harmony export */   __wbindgen_object_drop_ref: () => (/* binding */ __wbindgen_object_drop_ref),\n/* harmony export */   __wbindgen_string_new: () => (/* binding */ __wbindgen_string_new),\n/* harmony export */   __wbindgen_throw: () => (/* binding */ __wbindgen_throw)\n/* harmony export */ });\nlet wasm;\nfunction __wbg_set_wasm(val) {\n    wasm = val;\n}\n\n\nconst heap = new Array(128).fill(undefined);\n\nheap.push(undefined, null, true, false);\n\nfunction getObject(idx) { return heap[idx]; }\n\nlet heap_next = heap.length;\n\nfunction dropObject(idx) {\n    if (idx < 132) return;\n    heap[idx] = heap_next;\n    heap_next = idx;\n}\n\nfunction takeObject(idx) {\n    const ret = getObject(idx);\n    dropObject(idx);\n    return ret;\n}\n\nfunction _assertBoolean(n) {\n    if (typeof(n) !== 'boolean') {\n        throw new Error(`expected a boolean argument, found ${typeof(n)}`);\n    }\n}\n\nfunction _assertNum(n) {\n    if (typeof(n) !== 'number') throw new Error(`expected a number argument, found ${typeof(n)}`);\n}\n\nconst lTextDecoder = typeof TextDecoder === 'undefined' ? (0, module.require)('util').TextDecoder : TextDecoder;\n\nlet cachedTextDecoder = new lTextDecoder('utf-8', { ignoreBOM: true, fatal: true });\n\ncachedTextDecoder.decode();\n\nlet cachedUint8ArrayMemory0 = null;\n\nfunction getUint8ArrayMemory0() {\n    if (cachedUint8ArrayMemory0 === null || cachedUint8ArrayMemory0.byteLength === 0) {\n        cachedUint8ArrayMemory0 = new Uint8Array(wasm.memory.buffer);\n    }\n    return cachedUint8ArrayMemory0;\n}\n\nfunction getStringFromWasm0(ptr, len) {\n    ptr = ptr >>> 0;\n    return cachedTextDecoder.decode(getUint8ArrayMemory0().subarray(ptr, ptr + len));\n}\n\nfunction addHeapObject(obj) {\n    if (heap_next === heap.length) heap.push(heap.length + 1);\n    const idx = heap_next;\n    heap_next = heap[idx];\n\n    if (typeof(heap_next) !== 'number') throw new Error('corrupt heap');\n\n    heap[idx] = obj;\n    return idx;\n}\n\nfunction debugString(val) {\n    // primitive types\n    const type = typeof val;\n    if (type == 'number' || type == 'boolean' || val == null) {\n        return  `${val}`;\n    }\n    if (type == 'string') {\n        return `\"${val}\"`;\n    }\n    if (type == 'symbol') {\n        const description = val.description;\n        if (description == null) {\n            return 'Symbol';\n        } else {\n            return `Symbol(${description})`;\n        }\n    }\n    if (type == 'function') {\n        const name = val.name;\n        if (typeof name == 'string' && name.length > 0) {\n            return `Function(${name})`;\n        } else {\n            return 'Function';\n        }\n    }\n    // objects\n    if (Array.isArray(val)) {\n        const length = val.length;\n        let debug = '[';\n        if (length > 0) {\n            debug += debugString(val[0]);\n        }\n        for(let i = 1; i < length; i++) {\n            debug += ', ' + debugString(val[i]);\n        }\n        debug += ']';\n        return debug;\n    }\n    // Test for built-in\n    const builtInMatches = /\\[object ([^\\]]+)\\]/.exec(toString.call(val));\n    let className;\n    if (builtInMatches.length > 1) {\n        className = builtInMatches[1];\n    } else {\n        // Failed to match the standard '[object ClassName]'\n        return toString.call(val);\n    }\n    if (className == 'Object') {\n        // we're a user defined class or Object\n        // JSON.stringify avoids problems with cycles, and is generally much\n        // easier than looping through ownProperties of `val`.\n        try {\n            return 'Object(' + JSON.stringify(val) + ')';\n        } catch (_) {\n            return 'Object';\n        }\n    }\n    // errors\n    if (val instanceof Error) {\n        return `${val.name}: ${val.message}\\n${val.stack}`;\n    }\n    // TODO we could test for more things here, like `Set`s and `Map`s.\n    return className;\n}\n\nlet WASM_VECTOR_LEN = 0;\n\nconst lTextEncoder = typeof TextEncoder === 'undefined' ? (0, module.require)('util').TextEncoder : TextEncoder;\n\nlet cachedTextEncoder = new lTextEncoder('utf-8');\n\nconst encodeString = (typeof cachedTextEncoder.encodeInto === 'function'\n    ? function (arg, view) {\n    return cachedTextEncoder.encodeInto(arg, view);\n}\n    : function (arg, view) {\n    const buf = cachedTextEncoder.encode(arg);\n    view.set(buf);\n    return {\n        read: arg.length,\n        written: buf.length\n    };\n});\n\nfunction passStringToWasm0(arg, malloc, realloc) {\n\n    if (typeof(arg) !== 'string') throw new Error(`expected a string argument, found ${typeof(arg)}`);\n\n    if (realloc === undefined) {\n        const buf = cachedTextEncoder.encode(arg);\n        const ptr = malloc(buf.length, 1) >>> 0;\n        getUint8ArrayMemory0().subarray(ptr, ptr + buf.length).set(buf);\n        WASM_VECTOR_LEN = buf.length;\n        return ptr;\n    }\n\n    let len = arg.length;\n    let ptr = malloc(len, 1) >>> 0;\n\n    const mem = getUint8ArrayMemory0();\n\n    let offset = 0;\n\n    for (; offset < len; offset++) {\n        const code = arg.charCodeAt(offset);\n        if (code > 0x7F) break;\n        mem[ptr + offset] = code;\n    }\n\n    if (offset !== len) {\n        if (offset !== 0) {\n            arg = arg.slice(offset);\n        }\n        ptr = realloc(ptr, len, len = offset + arg.length * 3, 1) >>> 0;\n        const view = getUint8ArrayMemory0().subarray(ptr + offset, ptr + len);\n        const ret = encodeString(arg, view);\n        if (ret.read !== arg.length) throw new Error('failed to pass whole string');\n        offset += ret.written;\n        ptr = realloc(ptr, len, offset, 1) >>> 0;\n    }\n\n    WASM_VECTOR_LEN = offset;\n    return ptr;\n}\n\nlet cachedDataViewMemory0 = null;\n\nfunction getDataViewMemory0() {\n    if (cachedDataViewMemory0 === null || cachedDataViewMemory0.buffer.detached === true || (cachedDataViewMemory0.buffer.detached === undefined && cachedDataViewMemory0.buffer !== wasm.memory.buffer)) {\n        cachedDataViewMemory0 = new DataView(wasm.memory.buffer);\n    }\n    return cachedDataViewMemory0;\n}\n\nconst CLOSURE_DTORS = (typeof FinalizationRegistry === 'undefined')\n    ? { register: () => {}, unregister: () => {} }\n    : new FinalizationRegistry(state => {\n    wasm.__wbindgen_export_2.get(state.dtor)(state.a, state.b)\n});\n\nfunction makeMutClosure(arg0, arg1, dtor, f) {\n    const state = { a: arg0, b: arg1, cnt: 1, dtor };\n    const real = (...args) => {\n        // First up with a closure we increment the internal reference\n        // count. This ensures that the Rust closure environment won't\n        // be deallocated while we're invoking it.\n        state.cnt++;\n        const a = state.a;\n        state.a = 0;\n        try {\n            return f(a, state.b, ...args);\n        } finally {\n            if (--state.cnt === 0) {\n                wasm.__wbindgen_export_2.get(state.dtor)(a, state.b);\n                CLOSURE_DTORS.unregister(state);\n            } else {\n                state.a = a;\n            }\n        }\n    };\n    real.original = state;\n    CLOSURE_DTORS.register(real, state, state);\n    return real;\n}\n\nfunction logError(f, args) {\n    try {\n        return f.apply(this, args);\n    } catch (e) {\n        let error = (function () {\n            try {\n                return e instanceof Error ? `${e.message}\\n\\nStack:\\n${e.stack}` : e.toString();\n            } catch(_) {\n                return \"<failed to stringify thrown value>\";\n            }\n        }());\n        console.error(\"wasm-bindgen: imported JS function that was not marked as `catch` threw an error:\", error);\n        throw e;\n    }\n}\nfunction __wbg_adapter_20(arg0, arg1, arg2, arg3) {\n    _assertNum(arg0);\n    _assertNum(arg1);\n    wasm._dyn_core__ops__function__FnMut__A_B___Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h07e7d0c9daa6ae2c(arg0, arg1, arg2, addHeapObject(arg3));\n}\n\nfunction __wbg_adapter_23(arg0, arg1, arg2) {\n    _assertNum(arg0);\n    _assertNum(arg1);\n    wasm._dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h8ed173136ae51844(arg0, arg1, addHeapObject(arg2));\n}\n\nfunction isLikeNone(x) {\n    return x === undefined || x === null;\n}\n\nfunction handleError(f, args) {\n    try {\n        return f.apply(this, args);\n    } catch (e) {\n        wasm.__wbindgen_exn_store(addHeapObject(e));\n    }\n}\nfunction __wbg_adapter_73(arg0, arg1, arg2, arg3) {\n    _assertNum(arg0);\n    _assertNum(arg1);\n    wasm.wasm_bindgen__convert__closures__invoke2_mut__hb8585b79a4a6e93c(arg0, arg1, addHeapObject(arg2), addHeapObject(arg3));\n}\n\nconst XrAppFinalization = (typeof FinalizationRegistry === 'undefined')\n    ? { register: () => {}, unregister: () => {} }\n    : new FinalizationRegistry(ptr => wasm.__wbg_xrapp_free(ptr >>> 0, 1));\n/**\n*/\nclass XrApp {\n\n    __destroy_into_raw() {\n        const ptr = this.__wbg_ptr;\n        this.__wbg_ptr = 0;\n        XrAppFinalization.unregister(this);\n        return ptr;\n    }\n\n    free() {\n        const ptr = this.__destroy_into_raw();\n        wasm.__wbg_xrapp_free(ptr, 0);\n    }\n    /**\n    */\n    constructor() {\n        const ret = wasm.xrapp_new();\n        this.__wbg_ptr = ret >>> 0;\n        XrAppFinalization.register(this, this.__wbg_ptr, this);\n        return this;\n    }\n    /**\n    * @returns {Promise<any>}\n    */\n    init() {\n        if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');\n        _assertNum(this.__wbg_ptr);\n        const ret = wasm.xrapp_init(this.__wbg_ptr);\n        return takeObject(ret);\n    }\n    /**\n    */\n    start() {\n        if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');\n        _assertNum(this.__wbg_ptr);\n        wasm.xrapp_start(this.__wbg_ptr);\n    }\n}\n\nfunction __wbindgen_cb_drop(arg0) {\n    const obj = takeObject(arg0).original;\n    if (obj.cnt-- == 1) {\n        obj.a = 0;\n        return true;\n    }\n    const ret = false;\n    _assertBoolean(ret);\n    return ret;\n};\n\nfunction __wbindgen_boolean_get(arg0) {\n    const v = getObject(arg0);\n    const ret = typeof(v) === 'boolean' ? (v ? 1 : 0) : 2;\n    _assertNum(ret);\n    return ret;\n};\n\nfunction __wbindgen_string_new(arg0, arg1) {\n    const ret = getStringFromWasm0(arg0, arg1);\n    return addHeapObject(ret);\n};\n\nfunction __wbg_requestAnimationFrame_d7aede2ee54585bf() { return logError(function (arg0, arg1) {\n    const ret = getObject(arg0).requestAnimationFrame(getObject(arg1));\n    _assertNum(ret);\n    return ret;\n}, arguments) };\n\nfunction __wbg_updateRenderState_8b27ddd9694be347() { return logError(function (arg0, arg1) {\n    getObject(arg0).updateRenderState(getObject(arg1));\n}, arguments) };\n\nfunction __wbg_xr_1b2b096f8b1650f7() { return logError(function (arg0) {\n    const ret = getObject(arg0).xr;\n    return addHeapObject(ret);\n}, arguments) };\n\nfunction __wbg_setbaselayer_80c7e13b6d8f6432() { return logError(function (arg0, arg1) {\n    getObject(arg0).baseLayer = getObject(arg1);\n}, arguments) };\n\nfunction __wbg_log_5bb5f88f245d7762() { return logError(function (arg0) {\n    console.log(getObject(arg0));\n}, arguments) };\n\nfunction __wbg_instanceof_WebGl2RenderingContext_6b8f92d566ced9e1() { return logError(function (arg0) {\n    let result;\n    try {\n        result = getObject(arg0) instanceof WebGL2RenderingContext;\n    } catch (_) {\n        result = false;\n    }\n    const ret = result;\n    _assertBoolean(ret);\n    return ret;\n}, arguments) };\n\nfunction __wbg_getElementById_c369ff43f0db99cf() { return logError(function (arg0, arg1, arg2) {\n    const ret = getObject(arg0).getElementById(getStringFromWasm0(arg1, arg2));\n    return isLikeNone(ret) ? 0 : addHeapObject(ret);\n}, arguments) };\n\nfunction __wbg_instanceof_HtmlCanvasElement_46bdbf323b0b18d1() { return logError(function (arg0) {\n    let result;\n    try {\n        result = getObject(arg0) instanceof HTMLCanvasElement;\n    } catch (_) {\n        result = false;\n    }\n    const ret = result;\n    _assertBoolean(ret);\n    return ret;\n}, arguments) };\n\nfunction __wbg_getContext_df50fa48a8876636() { return handleError(function (arg0, arg1, arg2) {\n    const ret = getObject(arg0).getContext(getStringFromWasm0(arg1, arg2));\n    return isLikeNone(ret) ? 0 : addHeapObject(ret);\n}, arguments) };\n\nfunction __wbg_getContext_fec464290556673c() { return handleError(function (arg0, arg1, arg2, arg3) {\n    const ret = getObject(arg0).getContext(getStringFromWasm0(arg1, arg2), getObject(arg3));\n    return isLikeNone(ret) ? 0 : addHeapObject(ret);\n}, arguments) };\n\nfunction __wbg_newwithwebgl2renderingcontext_7e56a66b1b21b685() { return handleError(function (arg0, arg1) {\n    const ret = new XRWebGLLayer(getObject(arg0), getObject(arg1));\n    return addHeapObject(ret);\n}, arguments) };\n\nfunction __wbg_instanceof_Window_f401953a2cf86220() { return logError(function (arg0) {\n    let result;\n    try {\n        result = getObject(arg0) instanceof Window;\n    } catch (_) {\n        result = false;\n    }\n    const ret = result;\n    _assertBoolean(ret);\n    return ret;\n}, arguments) };\n\nfunction __wbg_document_5100775d18896c16() { return logError(function (arg0) {\n    const ret = getObject(arg0).document;\n    return isLikeNone(ret) ? 0 : addHeapObject(ret);\n}, arguments) };\n\nfunction __wbg_navigator_6c8fa55c5cc8796e() { return logError(function (arg0) {\n    const ret = getObject(arg0).navigator;\n    return addHeapObject(ret);\n}, arguments) };\n\nfunction __wbg_isSessionSupported_cb57c8609859e796() { return logError(function (arg0, arg1) {\n    const ret = getObject(arg0).isSessionSupported([\"inline\",\"immersive-vr\",\"immersive-ar\",][arg1]);\n    return addHeapObject(ret);\n}, arguments) };\n\nfunction __wbg_requestSession_b0918011a4e1d945() { return logError(function (arg0, arg1) {\n    const ret = getObject(arg0).requestSession([\"inline\",\"immersive-vr\",\"immersive-ar\",][arg1]);\n    return addHeapObject(ret);\n}, arguments) };\n\nfunction __wbg_session_e485f54b15f90fce() { return logError(function (arg0) {\n    const ret = getObject(arg0).session;\n    return addHeapObject(ret);\n}, arguments) };\n\nfunction __wbindgen_is_function(arg0) {\n    const ret = typeof(getObject(arg0)) === 'function';\n    _assertBoolean(ret);\n    return ret;\n};\n\nfunction __wbg_queueMicrotask_481971b0d87f3dd4() { return logError(function (arg0) {\n    queueMicrotask(getObject(arg0));\n}, arguments) };\n\nfunction __wbg_queueMicrotask_3cbae2ec6b6cd3d6() { return logError(function (arg0) {\n    const ret = getObject(arg0).queueMicrotask;\n    return addHeapObject(ret);\n}, arguments) };\n\nfunction __wbindgen_is_undefined(arg0) {\n    const ret = getObject(arg0) === undefined;\n    _assertBoolean(ret);\n    return ret;\n};\n\nfunction __wbindgen_object_clone_ref(arg0) {\n    const ret = getObject(arg0);\n    return addHeapObject(ret);\n};\n\nfunction __wbg_newnoargs_e258087cd0daa0ea() { return logError(function (arg0, arg1) {\n    const ret = new Function(getStringFromWasm0(arg0, arg1));\n    return addHeapObject(ret);\n}, arguments) };\n\nfunction __wbg_call_27c0f87801dedf93() { return handleError(function (arg0, arg1) {\n    const ret = getObject(arg0).call(getObject(arg1));\n    return addHeapObject(ret);\n}, arguments) };\n\nfunction __wbg_call_b3ca7c6051f9bec1() { return handleError(function (arg0, arg1, arg2) {\n    const ret = getObject(arg0).call(getObject(arg1), getObject(arg2));\n    return addHeapObject(ret);\n}, arguments) };\n\nfunction __wbg_new_72fb9a18b5ae2624() { return logError(function () {\n    const ret = new Object();\n    return addHeapObject(ret);\n}, arguments) };\n\nfunction __wbg_new_81740750da40724f() { return logError(function (arg0, arg1) {\n    try {\n        var state0 = {a: arg0, b: arg1};\n        var cb0 = (arg0, arg1) => {\n            const a = state0.a;\n            state0.a = 0;\n            try {\n                return __wbg_adapter_73(a, state0.b, arg0, arg1);\n            } finally {\n                state0.a = a;\n            }\n        };\n        const ret = new Promise(cb0);\n        return addHeapObject(ret);\n    } finally {\n        state0.a = state0.b = 0;\n    }\n}, arguments) };\n\nfunction __wbg_resolve_b0083a7967828ec8() { return logError(function (arg0) {\n    const ret = Promise.resolve(getObject(arg0));\n    return addHeapObject(ret);\n}, arguments) };\n\nfunction __wbg_then_0c86a60e8fcfe9f6() { return logError(function (arg0, arg1) {\n    const ret = getObject(arg0).then(getObject(arg1));\n    return addHeapObject(ret);\n}, arguments) };\n\nfunction __wbg_then_a73caa9a87991566() { return logError(function (arg0, arg1, arg2) {\n    const ret = getObject(arg0).then(getObject(arg1), getObject(arg2));\n    return addHeapObject(ret);\n}, arguments) };\n\nfunction __wbg_globalThis_d1e6af4856ba331b() { return handleError(function () {\n    const ret = globalThis.globalThis;\n    return addHeapObject(ret);\n}, arguments) };\n\nfunction __wbg_self_ce0dbfc45cf2f5be() { return handleError(function () {\n    const ret = self.self;\n    return addHeapObject(ret);\n}, arguments) };\n\nfunction __wbg_window_c6fb939a7f436783() { return handleError(function () {\n    const ret = window.window;\n    return addHeapObject(ret);\n}, arguments) };\n\nfunction __wbg_global_207b558942527489() { return handleError(function () {\n    const ret = global.global;\n    return addHeapObject(ret);\n}, arguments) };\n\nfunction __wbg_set_1f9b04f170055d33() { return handleError(function (arg0, arg1, arg2) {\n    const ret = Reflect.set(getObject(arg0), getObject(arg1), getObject(arg2));\n    _assertBoolean(ret);\n    return ret;\n}, arguments) };\n\nfunction __wbindgen_object_drop_ref(arg0) {\n    takeObject(arg0);\n};\n\nfunction __wbindgen_debug_string(arg0, arg1) {\n    const ret = debugString(getObject(arg1));\n    const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);\n    const len1 = WASM_VECTOR_LEN;\n    getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);\n    getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);\n};\n\nfunction __wbindgen_throw(arg0, arg1) {\n    throw new Error(getStringFromWasm0(arg0, arg1));\n};\n\nfunction __wbindgen_closure_wrapper73() { return logError(function (arg0, arg1, arg2) {\n    const ret = makeMutClosure(arg0, arg1, 21, __wbg_adapter_20);\n    return addHeapObject(ret);\n}, arguments) };\n\nfunction __wbindgen_closure_wrapper2282() { return logError(function (arg0, arg1, arg2) {\n    const ret = makeMutClosure(arg0, arg1, 37, __wbg_adapter_23);\n    return addHeapObject(ret);\n}, arguments) };\n\n\n\n//# sourceURL=webpack:///./pkg/index_bg.js?");

/***/ }),

/***/ "./pkg/index_bg.wasm":
/*!***************************!*\
  !*** ./pkg/index_bg.wasm ***!
  \***************************/
/***/ ((module, exports, __webpack_require__) => {

eval("/* harmony import */ var WEBPACK_IMPORTED_MODULE_0 = __webpack_require__(/*! ./index_bg.js */ \"./pkg/index_bg.js\");\nmodule.exports = __webpack_require__.v(exports, module.id, \"1ecbb9d9f4f57c8d1df1\", {\n\t\"./index_bg.js\": {\n\t\t\"__wbindgen_cb_drop\": WEBPACK_IMPORTED_MODULE_0.__wbindgen_cb_drop,\n\t\t\"__wbindgen_boolean_get\": WEBPACK_IMPORTED_MODULE_0.__wbindgen_boolean_get,\n\t\t\"__wbindgen_string_new\": WEBPACK_IMPORTED_MODULE_0.__wbindgen_string_new,\n\t\t\"__wbg_requestAnimationFrame_d7aede2ee54585bf\": WEBPACK_IMPORTED_MODULE_0.__wbg_requestAnimationFrame_d7aede2ee54585bf,\n\t\t\"__wbg_updateRenderState_8b27ddd9694be347\": WEBPACK_IMPORTED_MODULE_0.__wbg_updateRenderState_8b27ddd9694be347,\n\t\t\"__wbg_xr_1b2b096f8b1650f7\": WEBPACK_IMPORTED_MODULE_0.__wbg_xr_1b2b096f8b1650f7,\n\t\t\"__wbg_setbaselayer_80c7e13b6d8f6432\": WEBPACK_IMPORTED_MODULE_0.__wbg_setbaselayer_80c7e13b6d8f6432,\n\t\t\"__wbg_log_5bb5f88f245d7762\": WEBPACK_IMPORTED_MODULE_0.__wbg_log_5bb5f88f245d7762,\n\t\t\"__wbg_instanceof_WebGl2RenderingContext_6b8f92d566ced9e1\": WEBPACK_IMPORTED_MODULE_0.__wbg_instanceof_WebGl2RenderingContext_6b8f92d566ced9e1,\n\t\t\"__wbg_getElementById_c369ff43f0db99cf\": WEBPACK_IMPORTED_MODULE_0.__wbg_getElementById_c369ff43f0db99cf,\n\t\t\"__wbg_instanceof_HtmlCanvasElement_46bdbf323b0b18d1\": WEBPACK_IMPORTED_MODULE_0.__wbg_instanceof_HtmlCanvasElement_46bdbf323b0b18d1,\n\t\t\"__wbg_getContext_df50fa48a8876636\": WEBPACK_IMPORTED_MODULE_0.__wbg_getContext_df50fa48a8876636,\n\t\t\"__wbg_getContext_fec464290556673c\": WEBPACK_IMPORTED_MODULE_0.__wbg_getContext_fec464290556673c,\n\t\t\"__wbg_newwithwebgl2renderingcontext_7e56a66b1b21b685\": WEBPACK_IMPORTED_MODULE_0.__wbg_newwithwebgl2renderingcontext_7e56a66b1b21b685,\n\t\t\"__wbg_instanceof_Window_f401953a2cf86220\": WEBPACK_IMPORTED_MODULE_0.__wbg_instanceof_Window_f401953a2cf86220,\n\t\t\"__wbg_document_5100775d18896c16\": WEBPACK_IMPORTED_MODULE_0.__wbg_document_5100775d18896c16,\n\t\t\"__wbg_navigator_6c8fa55c5cc8796e\": WEBPACK_IMPORTED_MODULE_0.__wbg_navigator_6c8fa55c5cc8796e,\n\t\t\"__wbg_isSessionSupported_cb57c8609859e796\": WEBPACK_IMPORTED_MODULE_0.__wbg_isSessionSupported_cb57c8609859e796,\n\t\t\"__wbg_requestSession_b0918011a4e1d945\": WEBPACK_IMPORTED_MODULE_0.__wbg_requestSession_b0918011a4e1d945,\n\t\t\"__wbg_session_e485f54b15f90fce\": WEBPACK_IMPORTED_MODULE_0.__wbg_session_e485f54b15f90fce,\n\t\t\"__wbindgen_is_function\": WEBPACK_IMPORTED_MODULE_0.__wbindgen_is_function,\n\t\t\"__wbg_queueMicrotask_481971b0d87f3dd4\": WEBPACK_IMPORTED_MODULE_0.__wbg_queueMicrotask_481971b0d87f3dd4,\n\t\t\"__wbg_queueMicrotask_3cbae2ec6b6cd3d6\": WEBPACK_IMPORTED_MODULE_0.__wbg_queueMicrotask_3cbae2ec6b6cd3d6,\n\t\t\"__wbindgen_is_undefined\": WEBPACK_IMPORTED_MODULE_0.__wbindgen_is_undefined,\n\t\t\"__wbindgen_object_clone_ref\": WEBPACK_IMPORTED_MODULE_0.__wbindgen_object_clone_ref,\n\t\t\"__wbg_newnoargs_e258087cd0daa0ea\": WEBPACK_IMPORTED_MODULE_0.__wbg_newnoargs_e258087cd0daa0ea,\n\t\t\"__wbg_call_27c0f87801dedf93\": WEBPACK_IMPORTED_MODULE_0.__wbg_call_27c0f87801dedf93,\n\t\t\"__wbg_call_b3ca7c6051f9bec1\": WEBPACK_IMPORTED_MODULE_0.__wbg_call_b3ca7c6051f9bec1,\n\t\t\"__wbg_new_72fb9a18b5ae2624\": WEBPACK_IMPORTED_MODULE_0.__wbg_new_72fb9a18b5ae2624,\n\t\t\"__wbg_new_81740750da40724f\": WEBPACK_IMPORTED_MODULE_0.__wbg_new_81740750da40724f,\n\t\t\"__wbg_resolve_b0083a7967828ec8\": WEBPACK_IMPORTED_MODULE_0.__wbg_resolve_b0083a7967828ec8,\n\t\t\"__wbg_then_0c86a60e8fcfe9f6\": WEBPACK_IMPORTED_MODULE_0.__wbg_then_0c86a60e8fcfe9f6,\n\t\t\"__wbg_then_a73caa9a87991566\": WEBPACK_IMPORTED_MODULE_0.__wbg_then_a73caa9a87991566,\n\t\t\"__wbg_globalThis_d1e6af4856ba331b\": WEBPACK_IMPORTED_MODULE_0.__wbg_globalThis_d1e6af4856ba331b,\n\t\t\"__wbg_self_ce0dbfc45cf2f5be\": WEBPACK_IMPORTED_MODULE_0.__wbg_self_ce0dbfc45cf2f5be,\n\t\t\"__wbg_window_c6fb939a7f436783\": WEBPACK_IMPORTED_MODULE_0.__wbg_window_c6fb939a7f436783,\n\t\t\"__wbg_global_207b558942527489\": WEBPACK_IMPORTED_MODULE_0.__wbg_global_207b558942527489,\n\t\t\"__wbg_set_1f9b04f170055d33\": WEBPACK_IMPORTED_MODULE_0.__wbg_set_1f9b04f170055d33,\n\t\t\"__wbindgen_object_drop_ref\": WEBPACK_IMPORTED_MODULE_0.__wbindgen_object_drop_ref,\n\t\t\"__wbindgen_debug_string\": WEBPACK_IMPORTED_MODULE_0.__wbindgen_debug_string,\n\t\t\"__wbindgen_throw\": WEBPACK_IMPORTED_MODULE_0.__wbindgen_throw,\n\t\t\"__wbindgen_closure_wrapper73\": WEBPACK_IMPORTED_MODULE_0.__wbindgen_closure_wrapper73,\n\t\t\"__wbindgen_closure_wrapper2282\": WEBPACK_IMPORTED_MODULE_0.__wbindgen_closure_wrapper2282\n\t}\n});\n\n//# sourceURL=webpack:///./pkg/index_bg.wasm?");

/***/ })

}]);