(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./defined-in-js.js":
/*!**************************!*\
  !*** ./defined-in-js.js ***!
  \**************************/
/*! exports provided: name, MyClass */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"name\", function() { return name; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MyClass\", function() { return MyClass; });\nfunction name() {\n    return 'World';\n}\n\nclass MyClass {\n    constructor() {\n        this._number = 42;\n    }\n\n    get number() {\n        return this._number;\n    }\n\n    set number(n) {\n        return this._number = n;\n    }\n\n    render() {\n        return `My number is: ${this.number}`;\n    }\n}\n\n\n//# sourceURL=webpack:///./defined-in-js.js?");

/***/ }),

/***/ "./pkg/import_js.js":
/*!**************************!*\
  !*** ./pkg/import_js.js ***!
  \**************************/
/*! exports provided: __wbg_name_f130aea75c25bbda, __wbg_new_8ead0b74312fcbb5, __wbg_number_6b90b8248a2a84b3, __wbg_setnumber_8bc40c69dfbb5f63, __wbg_render_476e422c12210994, __wbg_log_2666fc61f873cb3f, run, __wbindgen_object_drop_ref, __wbindgen_defer_start, __wbindgen_throw */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(TextEncoder, TextDecoder) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_name_f130aea75c25bbda\", function() { return __wbg_name_f130aea75c25bbda; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_new_8ead0b74312fcbb5\", function() { return __wbg_new_8ead0b74312fcbb5; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_number_6b90b8248a2a84b3\", function() { return __wbg_number_6b90b8248a2a84b3; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_setnumber_8bc40c69dfbb5f63\", function() { return __wbg_setnumber_8bc40c69dfbb5f63; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_render_476e422c12210994\", function() { return __wbg_render_476e422c12210994; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_log_2666fc61f873cb3f\", function() { return __wbg_log_2666fc61f873cb3f; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"run\", function() { return run; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_object_drop_ref\", function() { return __wbindgen_object_drop_ref; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_defer_start\", function() { return __wbindgen_defer_start; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_throw\", function() { return __wbindgen_throw; });\n/* harmony import */ var _import_js_bg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./import_js_bg */ \"./pkg/import_js_bg.wasm\");\n/* harmony import */ var _defined_in_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../defined-in-js */ \"./defined-in-js.js\");\n/* tslint:disable */\n\n\n\n\nlet cachedTextEncoder = new TextEncoder('utf-8');\n\nlet cachegetUint8Memory = null;\nfunction getUint8Memory() {\n    if (cachegetUint8Memory === null || cachegetUint8Memory.buffer !== _import_js_bg__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer) {\n        cachegetUint8Memory = new Uint8Array(_import_js_bg__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer);\n    }\n    return cachegetUint8Memory;\n}\n\nlet WASM_VECTOR_LEN = 0;\n\nlet passStringToWasm;\nif (typeof cachedTextEncoder.encodeInto === 'function') {\n    passStringToWasm = function(arg) {\n\n        if (typeof(arg) !== 'string') throw new Error('expected a string argument');\n\n        let size = arg.length;\n        let ptr = _import_js_bg__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_malloc\"](size);\n        let writeOffset = 0;\n        while (true) {\n            const view = getUint8Memory().subarray(ptr + writeOffset, ptr + size);\n            const { read, written } = cachedTextEncoder.encodeInto(arg, view);\n            arg = arg.substring(read);\n            writeOffset += written;\n            if (arg.length === 0) {\n                break;\n            }\n            ptr = _import_js_bg__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_realloc\"](ptr, size, size * 2);\n            size *= 2;\n        }\n        WASM_VECTOR_LEN = writeOffset;\n        return ptr;\n    };\n} else {\n    passStringToWasm = function(arg) {\n\n        if (typeof(arg) !== 'string') throw new Error('expected a string argument');\n\n        const buf = cachedTextEncoder.encode(arg);\n        const ptr = _import_js_bg__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_malloc\"](buf.length);\n        getUint8Memory().set(buf, ptr);\n        WASM_VECTOR_LEN = buf.length;\n        return ptr;\n    };\n}\n\nlet cachegetUint32Memory = null;\nfunction getUint32Memory() {\n    if (cachegetUint32Memory === null || cachegetUint32Memory.buffer !== _import_js_bg__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer) {\n        cachegetUint32Memory = new Uint32Array(_import_js_bg__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer);\n    }\n    return cachegetUint32Memory;\n}\n\nfunction __wbg_name_f130aea75c25bbda(ret) {\n    try {\n\n        const retptr = passStringToWasm(Object(_defined_in_js__WEBPACK_IMPORTED_MODULE_1__[\"name\"])());\n        const retlen = WASM_VECTOR_LEN;\n        const mem = getUint32Memory();\n        mem[ret / 4] = retptr;\n        mem[ret / 4 + 1] = retlen;\n\n    } catch (e) {\n        console.error(\"wasm-bindgen: imported JS function that was not marked as `catch` threw an error:\", e);\n        throw e;\n    }\n}\n\nconst heap = new Array(32);\n\nheap.fill(undefined);\n\nheap.push(undefined, null, true, false);\n\nlet heap_next = heap.length;\n\nfunction addHeapObject(obj) {\n    if (heap_next === heap.length) heap.push(heap.length + 1);\n    const idx = heap_next;\n    heap_next = heap[idx];\n\n    if (typeof(heap_next) !== 'number') throw new Error('corrupt heap');\n\n    heap[idx] = obj;\n    return idx;\n}\n\nfunction __wbg_new_8ead0b74312fcbb5() {\n    try {\n        return addHeapObject(new _defined_in_js__WEBPACK_IMPORTED_MODULE_1__[\"MyClass\"]());\n    } catch (e) {\n        console.error(\"wasm-bindgen: imported JS function that was not marked as `catch` threw an error:\", e);\n        throw e;\n    }\n}\n\nfunction getObject(idx) { return heap[idx]; }\n\nfunction __wbg_number_6b90b8248a2a84b3(arg0) {\n    try {\n        return getObject(arg0).number;\n    } catch (e) {\n        console.error(\"wasm-bindgen: imported JS function that was not marked as `catch` threw an error:\", e);\n        throw e;\n    }\n}\n\nfunction __wbg_setnumber_8bc40c69dfbb5f63(arg0, arg1) {\n    try {\n        return addHeapObject(getObject(arg0).number = arg1);\n    } catch (e) {\n        console.error(\"wasm-bindgen: imported JS function that was not marked as `catch` threw an error:\", e);\n        throw e;\n    }\n}\n\nfunction __wbg_render_476e422c12210994(ret, arg0) {\n    try {\n\n        const retptr = passStringToWasm(getObject(arg0).render());\n        const retlen = WASM_VECTOR_LEN;\n        const mem = getUint32Memory();\n        mem[ret / 4] = retptr;\n        mem[ret / 4 + 1] = retlen;\n\n    } catch (e) {\n        console.error(\"wasm-bindgen: imported JS function that was not marked as `catch` threw an error:\", e);\n        throw e;\n    }\n}\n\nlet cachedTextDecoder = new TextDecoder('utf-8');\n\nfunction getStringFromWasm(ptr, len) {\n    return cachedTextDecoder.decode(getUint8Memory().subarray(ptr, ptr + len));\n}\n\nfunction __wbg_log_2666fc61f873cb3f(arg0, arg1) {\n    let varg0 = getStringFromWasm(arg0, arg1);\n    try {\n        console.log(varg0);\n    } catch (e) {\n        console.error(\"wasm-bindgen: imported JS function that was not marked as `catch` threw an error:\", e);\n        throw e;\n    }\n}\n/**\n* @returns {void}\n*/\nfunction run() {\n    return _import_js_bg__WEBPACK_IMPORTED_MODULE_0__[\"run\"]();\n}\n\nfunction dropObject(idx) {\n    if (idx < 36) return;\n    heap[idx] = heap_next;\n    heap_next = idx;\n}\n\nfunction __wbindgen_object_drop_ref(i) { dropObject(i); }\n\nfunction __wbindgen_defer_start() {\n    Promise.resolve().then(() => _import_js_bg__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_start\"]());\n}\n\nfunction __wbindgen_throw(ptr, len) {\n    throw new Error(getStringFromWasm(ptr, len));\n}\n\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! text-encoding */ \"../../node_modules/text-encoding/index.js\")[\"TextEncoder\"], __webpack_require__(/*! text-encoding */ \"../../node_modules/text-encoding/index.js\")[\"TextDecoder\"]))\n\n//# sourceURL=webpack:///./pkg/import_js.js?");

/***/ }),

/***/ "./pkg/import_js_bg.wasm":
/*!*******************************!*\
  !*** ./pkg/import_js_bg.wasm ***!
  \*******************************/
/*! exports provided: memory, __rustc_debug_gdb_scripts_section__, run, __wbindgen_malloc, __wbindgen_realloc, __wbindgen_start */
/***/ (function(module, exports, __webpack_require__) {

eval("\"use strict\";\n// Instantiate WebAssembly module\nvar wasmExports = __webpack_require__.w[module.i];\n__webpack_require__.r(exports);\n// export exports from WebAssembly module\nfor(var name in wasmExports) if(name != \"__webpack_init__\") exports[name] = wasmExports[name];\n// exec imports from WebAssembly module (for esm order)\n/* harmony import */ var m0 = __webpack_require__(/*! ./import_js */ \"./pkg/import_js.js\");\n\n\n// exec wasm module\nwasmExports[\"__webpack_init__\"]()\n\n//# sourceURL=webpack:///./pkg/import_js_bg.wasm?");

/***/ })

}]);