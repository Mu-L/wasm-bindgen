searchState.loadedDescShard("wasm_bindgen", 0, "Runtime support for the <code>wasm-bindgen</code> tool\nA wrapper type around slices and vectors for binding the …\nThe <code>false</code> JS value constant.\nA trait for checked and unchecked casting between JS types.\nConvenience type for use on exported …\nWrapper type for imported statics.\nRepresentation of an object owned by JS.\nThe <code>null</code> JS value constant.\nThe <code>true</code> JS value constant.\nThe <code>undefined</code> JS value constant.\nAn extension trait for <code>Option&lt;T&gt;</code> and <code>Result&lt;T, E&gt;</code> for …\nApplies the binary <code>+</code> JS operator on two <code>JsValue</code>s.\nReturns the <code>bool</code> value of this JS value if it’s an …\nReturns the <code>f64</code> value of this JS value if it’s an …\nIf this JS value is a string value, this function copies …\nCreates a new JS value which is a bigint from a string …\nApplies the unary <code>~</code> JS operator on a <code>JsValue</code>.\nApplies the binary <code>&amp;</code> JS operator on two <code>JsValue</code>s.\nApplies the binary <code>|</code> JS operator on two <code>JsValue</code>s.\nApplies the binary <code>^</code> JS operator on two <code>JsValue</code>s.\nApplies the binary <code>/</code> JS operator on two <code>JsValue</code>s, catching …\nSupport for long-lived closures in <code>wasm-bindgen</code>\n⚠️ Unstable\nApplies the binary <code>/</code> JS operator on two <code>JsValue</code>s.\nPerforms a dynamic cast (checked at runtime) of this value …\nPerforms a dynamic cast (checked at runtime) of this value …\nPerforms a dynamic cast (checked at runtime) of this value …\nPerforms a dynamic cast (checked at runtime) of this value …\nCompares two <code>JsValue</code>s for equality, using the <code>===</code> operator …\nUnwrap this container’s <code>T</code> value, or throw an error to JS …\nReturns a handle to this wasm instance’s …\nGet the count of live <code>externref</code>s / <code>JsValue</code>s in <code>wasm-bindgen</code>…\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCreates a new JS value which is a boolean.\nCreates a new JS value which is a number.\nCreates a new <code>JsValue</code> from the JSON serialization of the …\nCreates a new JS value which is a string.\nReturns a handle to this wasm instance’s …\nApplies the binary <code>&gt;=</code> JS operator on the two <code>JsValue</code>s.\nApplies the binary <code>&gt;</code> JS operator on the two <code>JsValue</code>s.\nTest whether this JS value has a type <code>T</code>.\nTest whether this JS value has a type <code>T</code>.\nPerforms a dynamic <code>instanceof</code> check to see whether the …\nInterns Rust strings so that it’s much faster to send …\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nInvokes <code>JSON.stringify</code> on this value and then parses the …\nTests whether this JS value is an instance of Array.\nTests whether the type of this JS value is <code>bigint</code>.\nTests whether the value is “falsy”.\nTests whether the type of this JS value is <code>function</code>.\nTest whether this JS value is an instance of the type <code>T</code>.\nTest whether this JS value is an instance of the type <code>T</code>.\nTests whether this JS value is <code>null</code>\nTests whether <code>typeof self == &quot;object&quot; &amp;&amp; self !== null</code>.\nTests whether this JS value is a JS string.\nTests whether the type of this JS value is <code>symbol</code>\nTests whether the value is “truthy”.\nPerforms a dynamic check to see whether the <code>JsValue</code> …\nPerforms a dynamic check to see whether the <code>JsValue</code> …\nTests whether this JS value is <code>undefined</code>\nApplies the binary <code>in</code> JS operator on the two <code>JsValue</code>s.\nApplies the unary <code>typeof</code> JS operator on a <code>JsValue</code>.\nApplies the binary <code>&lt;=</code> JS operator on the two <code>JsValue</code>s.\nThis macro takes a JS module as input and returns a URL …\nCompare two <code>JsValue</code>s for equality, using the <code>==</code> operator …\nApplies the binary <code>&lt;</code> JS operator on the two <code>JsValue</code>s.\nReturns a handle to this wasm instance’s …\nReturns a handle to this Wasm instance’s …\nApplies the binary <code>*</code> JS operator on two <code>JsValue</code>s.\nApplies the unary <code>-</code> JS operator on a <code>JsValue</code>.\nConstruct a JavaScript <code>Error</code> object with a string message\nApplies the <code>!</code> JS operator on a <code>JsValue</code>.\nCreates a new JS value representing <code>null</code>.\nApplies the binary <code>**</code> JS operator on the two <code>JsValue</code>s.\nA module which is typically glob imported.\nApplies the binary <code>%</code> JS operator on two <code>JsValue</code>s.\nApplies the binary <code>&lt;&lt;</code> JS operator on two <code>JsValue</code>s.\nApplies the binary <code>&gt;&gt;</code> JS operator on two <code>JsValue</code>s.\nApplies the binary <code>-</code> JS operator on two <code>JsValue</code>s.\nCreates a new JS symbol with the optional description …\nThrows a JS exception.\nRethrow a JS exception\nPerforms a zero-cost unchecked conversion from a <code>JsValue</code> …\nPerforms a zero-cost unchecked conversion from a <code>&amp;JsValue</code> …\nPerforms a zero-cost unchecked cast into the specified …\nPerforms a zero-cost unchecked cast into the specified …\nApplies the unary <code>+</code> JS operator on a <code>JsValue</code>. Can throw.\nPerforms a zero-cost unchecked cast into a reference to …\nPerforms a zero-cost unchecked cast into a reference to …\nCreates a new JS value representing <code>undefined</code>.\nRemoves a Rust string from the intern cache.\nApplies the binary <code>&gt;&gt;&gt;</code> JS operator on the two <code>JsValue</code>s.\nUnwrap this <code>Option</code> or <code>Result</code>, but instead of panicking on …\nA handle to both a closure in Rust as well as JS closure …\nSame as <code>into_js_value</code>, but doesn’t return a value.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nRelease memory management of this closure from Rust to the …\nCreates a new instance of <code>Closure</code> from the provided Rust …\nCreate a <code>Closure</code> from a function that can only be called …\nConvert a <code>FnOnce(A...) -&gt; R</code> into a JavaScript <code>Function</code> …\nA more direct version of <code>Closure::new</code> which creates a …\nThe wasm ABI type that this converts into when crossing …\nThe wasm ABI type that this converts from when coming back …\nThe wasm ABI type references to <code>Self</code> are recovered from.\nSame as <code>RefFromWasmAbi::Abi</code>\nSame as <code>RefFromWasmAbi::Abi</code>\nSame as <code>IntoWasmAbi::Abi</code>\nThe type that holds the reference to <code>Self</code> for the duration …\nSame as <code>RefFromWasmAbi::Anchor</code>\nSame as <code>RefFromWasmAbi::Anchor</code>\nThe type returned in the event of a conversion error.\nA trait for anything that can be recovered by-value from …\nA trait for anything that can be converted into a type …\nA version of the <code>RefFromWasmAbi</code> trait with the additional …\nIndicates that this type can be received from JS as …\nIndicates that this type can be passed to JS as …\nA trait for anything that can be recovered as some sort of …\nDual of the <code>RefFromWasmAbi</code> trait, except for mutable …\nA trait representing how to interpret the return value of …\n<code>TryFromJsValue</code> is a trait for converting a JavaScript …\nTrait for element types to implement FromWasmAbi for …\nTrait for element types to implement IntoWasmAbi for …\nA trait which represents types that can be passed across …\nA trait for any type which maps to a Wasm primitive type …\nA repr(C) struct containing all of the primitives of a …\n⚠️ Unstable\nReturns the argument unchanged.\nReturns the argument unchanged.\nRecover a <code>Self</code> from <code>Self::Abi</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nConvert <code>self</code> into <code>Self::Abi</code> so that it can be sent across …\nTests whether the argument is a “none” instance. If so …\nReconstructs this type from primitives received over the …\nJoins the components of this <code>WasmRet</code> back into the type …\n⚠️ Unstable\n⚠️ Unstable\nSame as <code>RefFromWasmAbi::ref_from_abi</code>\nReturns an ABI instance indicating “none”, which JS …\nRecover a <code>Self::Anchor</code> from <code>Self::Abi</code>.\nSame as <code>RefFromWasmAbi::ref_from_abi</code>\nSame as <code>IntoWasmAbi::into_abi</code>, except that it may throw …\nSplits this type up into primitives to be sent over the …\nPerforms the conversion.")