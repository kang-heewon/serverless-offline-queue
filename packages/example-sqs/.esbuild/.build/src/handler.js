var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// ../../node_modules/.pnpm/@smithy+types@4.3.1/node_modules/@smithy/types/dist-cjs/index.js
var require_dist_cjs = __commonJS({
  "../../node_modules/.pnpm/@smithy+types@4.3.1/node_modules/@smithy/types/dist-cjs/index.js"(exports2, module2) {
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __name2 = /* @__PURE__ */ __name((target, value) => __defProp2(target, "name", { value, configurable: true }), "__name");
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: /* @__PURE__ */ __name(() => from[key], "get"), enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var src_exports = {};
    __export2(src_exports, {
      AlgorithmId: /* @__PURE__ */ __name(() => AlgorithmId, "AlgorithmId"),
      EndpointURLScheme: /* @__PURE__ */ __name(() => EndpointURLScheme, "EndpointURLScheme"),
      FieldPosition: /* @__PURE__ */ __name(() => FieldPosition, "FieldPosition"),
      HttpApiKeyAuthLocation: /* @__PURE__ */ __name(() => HttpApiKeyAuthLocation2, "HttpApiKeyAuthLocation"),
      HttpAuthLocation: /* @__PURE__ */ __name(() => HttpAuthLocation, "HttpAuthLocation"),
      IniSectionType: /* @__PURE__ */ __name(() => IniSectionType, "IniSectionType"),
      RequestHandlerProtocol: /* @__PURE__ */ __name(() => RequestHandlerProtocol, "RequestHandlerProtocol"),
      SMITHY_CONTEXT_KEY: /* @__PURE__ */ __name(() => SMITHY_CONTEXT_KEY4, "SMITHY_CONTEXT_KEY"),
      getDefaultClientConfiguration: /* @__PURE__ */ __name(() => getDefaultClientConfiguration, "getDefaultClientConfiguration"),
      resolveDefaultRuntimeConfig: /* @__PURE__ */ __name(() => resolveDefaultRuntimeConfig3, "resolveDefaultRuntimeConfig")
    });
    module2.exports = __toCommonJS2(src_exports);
    var HttpAuthLocation = ((HttpAuthLocation2) => {
      HttpAuthLocation2["HEADER"] = "header";
      HttpAuthLocation2["QUERY"] = "query";
      return HttpAuthLocation2;
    })(HttpAuthLocation || {});
    var HttpApiKeyAuthLocation2 = ((HttpApiKeyAuthLocation22) => {
      HttpApiKeyAuthLocation22["HEADER"] = "header";
      HttpApiKeyAuthLocation22["QUERY"] = "query";
      return HttpApiKeyAuthLocation22;
    })(HttpApiKeyAuthLocation2 || {});
    var EndpointURLScheme = ((EndpointURLScheme2) => {
      EndpointURLScheme2["HTTP"] = "http";
      EndpointURLScheme2["HTTPS"] = "https";
      return EndpointURLScheme2;
    })(EndpointURLScheme || {});
    var AlgorithmId = ((AlgorithmId2) => {
      AlgorithmId2["MD5"] = "md5";
      AlgorithmId2["CRC32"] = "crc32";
      AlgorithmId2["CRC32C"] = "crc32c";
      AlgorithmId2["SHA1"] = "sha1";
      AlgorithmId2["SHA256"] = "sha256";
      return AlgorithmId2;
    })(AlgorithmId || {});
    var getChecksumConfiguration = __name2((runtimeConfig) => {
      const checksumAlgorithms = [];
      if (runtimeConfig.sha256 !== void 0) {
        checksumAlgorithms.push({
          algorithmId: /* @__PURE__ */ __name(() => "sha256", "algorithmId"),
          checksumConstructor: /* @__PURE__ */ __name(() => runtimeConfig.sha256, "checksumConstructor")
        });
      }
      if (runtimeConfig.md5 != void 0) {
        checksumAlgorithms.push({
          algorithmId: /* @__PURE__ */ __name(() => "md5", "algorithmId"),
          checksumConstructor: /* @__PURE__ */ __name(() => runtimeConfig.md5, "checksumConstructor")
        });
      }
      return {
        addChecksumAlgorithm(algo) {
          checksumAlgorithms.push(algo);
        },
        checksumAlgorithms() {
          return checksumAlgorithms;
        }
      };
    }, "getChecksumConfiguration");
    var resolveChecksumRuntimeConfig = __name2((clientConfig) => {
      const runtimeConfig = {};
      clientConfig.checksumAlgorithms().forEach((checksumAlgorithm) => {
        runtimeConfig[checksumAlgorithm.algorithmId()] = checksumAlgorithm.checksumConstructor();
      });
      return runtimeConfig;
    }, "resolveChecksumRuntimeConfig");
    var getDefaultClientConfiguration = __name2((runtimeConfig) => {
      return getChecksumConfiguration(runtimeConfig);
    }, "getDefaultClientConfiguration");
    var resolveDefaultRuntimeConfig3 = __name2((config) => {
      return resolveChecksumRuntimeConfig(config);
    }, "resolveDefaultRuntimeConfig");
    var FieldPosition = ((FieldPosition2) => {
      FieldPosition2[FieldPosition2["HEADER"] = 0] = "HEADER";
      FieldPosition2[FieldPosition2["TRAILER"] = 1] = "TRAILER";
      return FieldPosition2;
    })(FieldPosition || {});
    var SMITHY_CONTEXT_KEY4 = "__smithy_context";
    var IniSectionType = ((IniSectionType2) => {
      IniSectionType2["PROFILE"] = "profile";
      IniSectionType2["SSO_SESSION"] = "sso-session";
      IniSectionType2["SERVICES"] = "services";
      return IniSectionType2;
    })(IniSectionType || {});
    var RequestHandlerProtocol = ((RequestHandlerProtocol2) => {
      RequestHandlerProtocol2["HTTP_0_9"] = "http/0.9";
      RequestHandlerProtocol2["HTTP_1_0"] = "http/1.0";
      RequestHandlerProtocol2["TDS_8_0"] = "tds/8.0";
      return RequestHandlerProtocol2;
    })(RequestHandlerProtocol || {});
  }
});

// ../../node_modules/.pnpm/@smithy+protocol-http@5.1.2/node_modules/@smithy/protocol-http/dist-cjs/index.js
var require_dist_cjs2 = __commonJS({
  "../../node_modules/.pnpm/@smithy+protocol-http@5.1.2/node_modules/@smithy/protocol-http/dist-cjs/index.js"(exports2, module2) {
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __name2 = /* @__PURE__ */ __name((target, value) => __defProp2(target, "name", { value, configurable: true }), "__name");
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: /* @__PURE__ */ __name(() => from[key], "get"), enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var src_exports = {};
    __export2(src_exports, {
      Field: /* @__PURE__ */ __name(() => Field, "Field"),
      Fields: /* @__PURE__ */ __name(() => Fields, "Fields"),
      HttpRequest: /* @__PURE__ */ __name(() => HttpRequest10, "HttpRequest"),
      HttpResponse: /* @__PURE__ */ __name(() => HttpResponse4, "HttpResponse"),
      IHttpRequest: /* @__PURE__ */ __name(() => import_types5.HttpRequest, "IHttpRequest"),
      getHttpHandlerExtensionConfiguration: /* @__PURE__ */ __name(() => getHttpHandlerExtensionConfiguration3, "getHttpHandlerExtensionConfiguration"),
      isValidHostname: /* @__PURE__ */ __name(() => isValidHostname, "isValidHostname"),
      resolveHttpHandlerRuntimeConfig: /* @__PURE__ */ __name(() => resolveHttpHandlerRuntimeConfig3, "resolveHttpHandlerRuntimeConfig")
    });
    module2.exports = __toCommonJS2(src_exports);
    var getHttpHandlerExtensionConfiguration3 = __name2((runtimeConfig) => {
      return {
        setHttpHandler(handler2) {
          runtimeConfig.httpHandler = handler2;
        },
        httpHandler() {
          return runtimeConfig.httpHandler;
        },
        updateHttpClientConfig(key, value) {
          runtimeConfig.httpHandler?.updateHttpClientConfig(key, value);
        },
        httpHandlerConfigs() {
          return runtimeConfig.httpHandler.httpHandlerConfigs();
        }
      };
    }, "getHttpHandlerExtensionConfiguration");
    var resolveHttpHandlerRuntimeConfig3 = __name2((httpHandlerExtensionConfiguration) => {
      return {
        httpHandler: httpHandlerExtensionConfiguration.httpHandler()
      };
    }, "resolveHttpHandlerRuntimeConfig");
    var import_types5 = require_dist_cjs();
    var Field = class {
      static {
        __name(this, "Field");
      }
      static {
        __name2(this, "Field");
      }
      constructor({ name, kind = import_types5.FieldPosition.HEADER, values = [] }) {
        this.name = name;
        this.kind = kind;
        this.values = values;
      }
      /**
       * Appends a value to the field.
       *
       * @param value The value to append.
       */
      add(value) {
        this.values.push(value);
      }
      /**
       * Overwrite existing field values.
       *
       * @param values The new field values.
       */
      set(values) {
        this.values = values;
      }
      /**
       * Remove all matching entries from list.
       *
       * @param value Value to remove.
       */
      remove(value) {
        this.values = this.values.filter((v6) => v6 !== value);
      }
      /**
       * Get comma-delimited string.
       *
       * @returns String representation of {@link Field}.
       */
      toString() {
        return this.values.map((v6) => v6.includes(",") || v6.includes(" ") ? `"${v6}"` : v6).join(", ");
      }
      /**
       * Get string values as a list
       *
       * @returns Values in {@link Field} as a list.
       */
      get() {
        return this.values;
      }
    };
    var Fields = class {
      static {
        __name(this, "Fields");
      }
      constructor({ fields = [], encoding = "utf-8" }) {
        this.entries = {};
        fields.forEach(this.setField.bind(this));
        this.encoding = encoding;
      }
      static {
        __name2(this, "Fields");
      }
      /**
       * Set entry for a {@link Field} name. The `name`
       * attribute will be used to key the collection.
       *
       * @param field The {@link Field} to set.
       */
      setField(field) {
        this.entries[field.name.toLowerCase()] = field;
      }
      /**
       *  Retrieve {@link Field} entry by name.
       *
       * @param name The name of the {@link Field} entry
       *  to retrieve
       * @returns The {@link Field} if it exists.
       */
      getField(name) {
        return this.entries[name.toLowerCase()];
      }
      /**
       * Delete entry from collection.
       *
       * @param name Name of the entry to delete.
       */
      removeField(name) {
        delete this.entries[name.toLowerCase()];
      }
      /**
       * Helper function for retrieving specific types of fields.
       * Used to grab all headers or all trailers.
       *
       * @param kind {@link FieldPosition} of entries to retrieve.
       * @returns The {@link Field} entries with the specified
       *  {@link FieldPosition}.
       */
      getByType(kind) {
        return Object.values(this.entries).filter((field) => field.kind === kind);
      }
    };
    var HttpRequest10 = class _HttpRequest {
      static {
        __name(this, "_HttpRequest");
      }
      static {
        __name2(this, "HttpRequest");
      }
      constructor(options) {
        this.method = options.method || "GET";
        this.hostname = options.hostname || "localhost";
        this.port = options.port;
        this.query = options.query || {};
        this.headers = options.headers || {};
        this.body = options.body;
        this.protocol = options.protocol ? options.protocol.slice(-1) !== ":" ? `${options.protocol}:` : options.protocol : "https:";
        this.path = options.path ? options.path.charAt(0) !== "/" ? `/${options.path}` : options.path : "/";
        this.username = options.username;
        this.password = options.password;
        this.fragment = options.fragment;
      }
      /**
       * Note: this does not deep-clone the body.
       */
      static clone(request) {
        const cloned = new _HttpRequest({
          ...request,
          headers: { ...request.headers }
        });
        if (cloned.query) {
          cloned.query = cloneQuery(cloned.query);
        }
        return cloned;
      }
      /**
       * This method only actually asserts that request is the interface {@link IHttpRequest},
       * and not necessarily this concrete class. Left in place for API stability.
       *
       * Do not call instance methods on the input of this function, and
       * do not assume it has the HttpRequest prototype.
       */
      static isInstance(request) {
        if (!request) {
          return false;
        }
        const req = request;
        return "method" in req && "protocol" in req && "hostname" in req && "path" in req && typeof req["query"] === "object" && typeof req["headers"] === "object";
      }
      /**
       * @deprecated use static HttpRequest.clone(request) instead. It's not safe to call
       * this method because {@link HttpRequest.isInstance} incorrectly
       * asserts that IHttpRequest (interface) objects are of type HttpRequest (class).
       */
      clone() {
        return _HttpRequest.clone(this);
      }
    };
    function cloneQuery(query) {
      return Object.keys(query).reduce((carry, paramName) => {
        const param = query[paramName];
        return {
          ...carry,
          [paramName]: Array.isArray(param) ? [...param] : param
        };
      }, {});
    }
    __name(cloneQuery, "cloneQuery");
    __name2(cloneQuery, "cloneQuery");
    var HttpResponse4 = class {
      static {
        __name(this, "HttpResponse");
      }
      static {
        __name2(this, "HttpResponse");
      }
      constructor(options) {
        this.statusCode = options.statusCode;
        this.reason = options.reason;
        this.headers = options.headers || {};
        this.body = options.body;
      }
      static isInstance(response) {
        if (!response)
          return false;
        const resp = response;
        return typeof resp.statusCode === "number" && typeof resp.headers === "object";
      }
    };
    function isValidHostname(hostname) {
      const hostPattern = /^[a-z0-9][a-z0-9\.\-]*[a-z0-9]$/;
      return hostPattern.test(hostname);
    }
    __name(isValidHostname, "isValidHostname");
    __name2(isValidHostname, "isValidHostname");
  }
});

// ../../node_modules/.pnpm/@aws-sdk+middleware-host-header@3.821.0/node_modules/@aws-sdk/middleware-host-header/dist-cjs/index.js
var require_dist_cjs3 = __commonJS({
  "../../node_modules/.pnpm/@aws-sdk+middleware-host-header@3.821.0/node_modules/@aws-sdk/middleware-host-header/dist-cjs/index.js"(exports2, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __name2 = /* @__PURE__ */ __name((target, value) => __defProp2(target, "name", { value, configurable: true }), "__name");
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: /* @__PURE__ */ __name(() => from[key], "get"), enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var index_exports = {};
    __export2(index_exports, {
      getHostHeaderPlugin: /* @__PURE__ */ __name(() => getHostHeaderPlugin3, "getHostHeaderPlugin"),
      hostHeaderMiddleware: /* @__PURE__ */ __name(() => hostHeaderMiddleware, "hostHeaderMiddleware"),
      hostHeaderMiddlewareOptions: /* @__PURE__ */ __name(() => hostHeaderMiddlewareOptions, "hostHeaderMiddlewareOptions"),
      resolveHostHeaderConfig: /* @__PURE__ */ __name(() => resolveHostHeaderConfig3, "resolveHostHeaderConfig")
    });
    module2.exports = __toCommonJS2(index_exports);
    var import_protocol_http15 = require_dist_cjs2();
    function resolveHostHeaderConfig3(input) {
      return input;
    }
    __name(resolveHostHeaderConfig3, "resolveHostHeaderConfig");
    __name2(resolveHostHeaderConfig3, "resolveHostHeaderConfig");
    var hostHeaderMiddleware = __name2((options) => (next) => async (args) => {
      if (!import_protocol_http15.HttpRequest.isInstance(args.request)) return next(args);
      const { request } = args;
      const { handlerProtocol = "" } = options.requestHandler.metadata || {};
      if (handlerProtocol.indexOf("h2") >= 0 && !request.headers[":authority"]) {
        delete request.headers["host"];
        request.headers[":authority"] = request.hostname + (request.port ? ":" + request.port : "");
      } else if (!request.headers["host"]) {
        let host = request.hostname;
        if (request.port != null) host += `:${request.port}`;
        request.headers["host"] = host;
      }
      return next(args);
    }, "hostHeaderMiddleware");
    var hostHeaderMiddlewareOptions = {
      name: "hostHeaderMiddleware",
      step: "build",
      priority: "low",
      tags: ["HOST"],
      override: true
    };
    var getHostHeaderPlugin3 = __name2((options) => ({
      applyToStack: __name2((clientStack) => {
        clientStack.add(hostHeaderMiddleware(options), hostHeaderMiddlewareOptions);
      }, "applyToStack")
    }), "getHostHeaderPlugin");
  }
});

// ../../node_modules/.pnpm/@aws-sdk+middleware-logger@3.821.0/node_modules/@aws-sdk/middleware-logger/dist-cjs/index.js
var require_dist_cjs4 = __commonJS({
  "../../node_modules/.pnpm/@aws-sdk+middleware-logger@3.821.0/node_modules/@aws-sdk/middleware-logger/dist-cjs/index.js"(exports2, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __name2 = /* @__PURE__ */ __name((target, value) => __defProp2(target, "name", { value, configurable: true }), "__name");
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: /* @__PURE__ */ __name(() => from[key], "get"), enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var index_exports = {};
    __export2(index_exports, {
      getLoggerPlugin: /* @__PURE__ */ __name(() => getLoggerPlugin3, "getLoggerPlugin"),
      loggerMiddleware: /* @__PURE__ */ __name(() => loggerMiddleware, "loggerMiddleware"),
      loggerMiddlewareOptions: /* @__PURE__ */ __name(() => loggerMiddlewareOptions, "loggerMiddlewareOptions")
    });
    module2.exports = __toCommonJS2(index_exports);
    var loggerMiddleware = __name2(() => (next, context) => async (args) => {
      try {
        const response = await next(args);
        const { clientName, commandName, logger: logger3, dynamoDbDocumentClientOptions = {} } = context;
        const { overrideInputFilterSensitiveLog, overrideOutputFilterSensitiveLog } = dynamoDbDocumentClientOptions;
        const inputFilterSensitiveLog = overrideInputFilterSensitiveLog ?? context.inputFilterSensitiveLog;
        const outputFilterSensitiveLog = overrideOutputFilterSensitiveLog ?? context.outputFilterSensitiveLog;
        const { $metadata, ...outputWithoutMetadata } = response.output;
        logger3?.info?.({
          clientName,
          commandName,
          input: inputFilterSensitiveLog(args.input),
          output: outputFilterSensitiveLog(outputWithoutMetadata),
          metadata: $metadata
        });
        return response;
      } catch (error2) {
        const { clientName, commandName, logger: logger3, dynamoDbDocumentClientOptions = {} } = context;
        const { overrideInputFilterSensitiveLog } = dynamoDbDocumentClientOptions;
        const inputFilterSensitiveLog = overrideInputFilterSensitiveLog ?? context.inputFilterSensitiveLog;
        logger3?.error?.({
          clientName,
          commandName,
          input: inputFilterSensitiveLog(args.input),
          error: error2,
          metadata: error2.$metadata
        });
        throw error2;
      }
    }, "loggerMiddleware");
    var loggerMiddlewareOptions = {
      name: "loggerMiddleware",
      tags: ["LOGGER"],
      step: "initialize",
      override: true
    };
    var getLoggerPlugin3 = __name2((options) => ({
      applyToStack: __name2((clientStack) => {
        clientStack.add(loggerMiddleware(), loggerMiddlewareOptions);
      }, "applyToStack")
    }), "getLoggerPlugin");
  }
});

// ../../node_modules/.pnpm/@aws-sdk+middleware-recursion-detection@3.821.0/node_modules/@aws-sdk/middleware-recursion-detection/dist-cjs/index.js
var require_dist_cjs5 = __commonJS({
  "../../node_modules/.pnpm/@aws-sdk+middleware-recursion-detection@3.821.0/node_modules/@aws-sdk/middleware-recursion-detection/dist-cjs/index.js"(exports2, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __name2 = /* @__PURE__ */ __name((target, value) => __defProp2(target, "name", { value, configurable: true }), "__name");
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: /* @__PURE__ */ __name(() => from[key], "get"), enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var index_exports = {};
    __export2(index_exports, {
      addRecursionDetectionMiddlewareOptions: /* @__PURE__ */ __name(() => addRecursionDetectionMiddlewareOptions, "addRecursionDetectionMiddlewareOptions"),
      getRecursionDetectionPlugin: /* @__PURE__ */ __name(() => getRecursionDetectionPlugin3, "getRecursionDetectionPlugin"),
      recursionDetectionMiddleware: /* @__PURE__ */ __name(() => recursionDetectionMiddleware, "recursionDetectionMiddleware")
    });
    module2.exports = __toCommonJS2(index_exports);
    var import_protocol_http15 = require_dist_cjs2();
    var TRACE_ID_HEADER_NAME = "X-Amzn-Trace-Id";
    var ENV_LAMBDA_FUNCTION_NAME = "AWS_LAMBDA_FUNCTION_NAME";
    var ENV_TRACE_ID = "_X_AMZN_TRACE_ID";
    var recursionDetectionMiddleware = __name2((options) => (next) => async (args) => {
      const { request } = args;
      if (!import_protocol_http15.HttpRequest.isInstance(request) || options.runtime !== "node") {
        return next(args);
      }
      const traceIdHeader = Object.keys(request.headers ?? {}).find((h3) => h3.toLowerCase() === TRACE_ID_HEADER_NAME.toLowerCase()) ?? TRACE_ID_HEADER_NAME;
      if (request.headers.hasOwnProperty(traceIdHeader)) {
        return next(args);
      }
      const functionName = process.env[ENV_LAMBDA_FUNCTION_NAME];
      const traceId = process.env[ENV_TRACE_ID];
      const nonEmptyString = __name2((str) => typeof str === "string" && str.length > 0, "nonEmptyString");
      if (nonEmptyString(functionName) && nonEmptyString(traceId)) {
        request.headers[TRACE_ID_HEADER_NAME] = traceId;
      }
      return next({
        ...args,
        request
      });
    }, "recursionDetectionMiddleware");
    var addRecursionDetectionMiddlewareOptions = {
      step: "build",
      tags: ["RECURSION_DETECTION"],
      name: "recursionDetectionMiddleware",
      override: true,
      priority: "low"
    };
    var getRecursionDetectionPlugin3 = __name2((options) => ({
      applyToStack: __name2((clientStack) => {
        clientStack.add(recursionDetectionMiddleware(options), addRecursionDetectionMiddlewareOptions);
      }, "applyToStack")
    }), "getRecursionDetectionPlugin");
  }
});

// ../../node_modules/.pnpm/@smithy+middleware-stack@4.0.4/node_modules/@smithy/middleware-stack/dist-cjs/index.js
var require_dist_cjs6 = __commonJS({
  "../../node_modules/.pnpm/@smithy+middleware-stack@4.0.4/node_modules/@smithy/middleware-stack/dist-cjs/index.js"(exports2, module2) {
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __name2 = /* @__PURE__ */ __name((target, value) => __defProp2(target, "name", { value, configurable: true }), "__name");
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: /* @__PURE__ */ __name(() => from[key], "get"), enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var src_exports = {};
    __export2(src_exports, {
      constructStack: /* @__PURE__ */ __name(() => constructStack, "constructStack")
    });
    module2.exports = __toCommonJS2(src_exports);
    var getAllAliases = __name2((name, aliases) => {
      const _aliases = [];
      if (name) {
        _aliases.push(name);
      }
      if (aliases) {
        for (const alias of aliases) {
          _aliases.push(alias);
        }
      }
      return _aliases;
    }, "getAllAliases");
    var getMiddlewareNameWithAliases = __name2((name, aliases) => {
      return `${name || "anonymous"}${aliases && aliases.length > 0 ? ` (a.k.a. ${aliases.join(",")})` : ""}`;
    }, "getMiddlewareNameWithAliases");
    var constructStack = __name2(() => {
      let absoluteEntries = [];
      let relativeEntries = [];
      let identifyOnResolve = false;
      const entriesNameSet = /* @__PURE__ */ new Set();
      const sort = __name2((entries) => entries.sort(
        (a3, b3) => stepWeights[b3.step] - stepWeights[a3.step] || priorityWeights[b3.priority || "normal"] - priorityWeights[a3.priority || "normal"]
      ), "sort");
      const removeByName = __name2((toRemove) => {
        let isRemoved = false;
        const filterCb = __name2((entry) => {
          const aliases = getAllAliases(entry.name, entry.aliases);
          if (aliases.includes(toRemove)) {
            isRemoved = true;
            for (const alias of aliases) {
              entriesNameSet.delete(alias);
            }
            return false;
          }
          return true;
        }, "filterCb");
        absoluteEntries = absoluteEntries.filter(filterCb);
        relativeEntries = relativeEntries.filter(filterCb);
        return isRemoved;
      }, "removeByName");
      const removeByReference = __name2((toRemove) => {
        let isRemoved = false;
        const filterCb = __name2((entry) => {
          if (entry.middleware === toRemove) {
            isRemoved = true;
            for (const alias of getAllAliases(entry.name, entry.aliases)) {
              entriesNameSet.delete(alias);
            }
            return false;
          }
          return true;
        }, "filterCb");
        absoluteEntries = absoluteEntries.filter(filterCb);
        relativeEntries = relativeEntries.filter(filterCb);
        return isRemoved;
      }, "removeByReference");
      const cloneTo = __name2((toStack) => {
        absoluteEntries.forEach((entry) => {
          toStack.add(entry.middleware, { ...entry });
        });
        relativeEntries.forEach((entry) => {
          toStack.addRelativeTo(entry.middleware, { ...entry });
        });
        toStack.identifyOnResolve?.(stack.identifyOnResolve());
        return toStack;
      }, "cloneTo");
      const expandRelativeMiddlewareList = __name2((from) => {
        const expandedMiddlewareList = [];
        from.before.forEach((entry) => {
          if (entry.before.length === 0 && entry.after.length === 0) {
            expandedMiddlewareList.push(entry);
          } else {
            expandedMiddlewareList.push(...expandRelativeMiddlewareList(entry));
          }
        });
        expandedMiddlewareList.push(from);
        from.after.reverse().forEach((entry) => {
          if (entry.before.length === 0 && entry.after.length === 0) {
            expandedMiddlewareList.push(entry);
          } else {
            expandedMiddlewareList.push(...expandRelativeMiddlewareList(entry));
          }
        });
        return expandedMiddlewareList;
      }, "expandRelativeMiddlewareList");
      const getMiddlewareList = __name2((debug = false) => {
        const normalizedAbsoluteEntries = [];
        const normalizedRelativeEntries = [];
        const normalizedEntriesNameMap = {};
        absoluteEntries.forEach((entry) => {
          const normalizedEntry = {
            ...entry,
            before: [],
            after: []
          };
          for (const alias of getAllAliases(normalizedEntry.name, normalizedEntry.aliases)) {
            normalizedEntriesNameMap[alias] = normalizedEntry;
          }
          normalizedAbsoluteEntries.push(normalizedEntry);
        });
        relativeEntries.forEach((entry) => {
          const normalizedEntry = {
            ...entry,
            before: [],
            after: []
          };
          for (const alias of getAllAliases(normalizedEntry.name, normalizedEntry.aliases)) {
            normalizedEntriesNameMap[alias] = normalizedEntry;
          }
          normalizedRelativeEntries.push(normalizedEntry);
        });
        normalizedRelativeEntries.forEach((entry) => {
          if (entry.toMiddleware) {
            const toMiddleware = normalizedEntriesNameMap[entry.toMiddleware];
            if (toMiddleware === void 0) {
              if (debug) {
                return;
              }
              throw new Error(
                `${entry.toMiddleware} is not found when adding ${getMiddlewareNameWithAliases(entry.name, entry.aliases)} middleware ${entry.relation} ${entry.toMiddleware}`
              );
            }
            if (entry.relation === "after") {
              toMiddleware.after.push(entry);
            }
            if (entry.relation === "before") {
              toMiddleware.before.push(entry);
            }
          }
        });
        const mainChain = sort(normalizedAbsoluteEntries).map(expandRelativeMiddlewareList).reduce(
          (wholeList, expandedMiddlewareList) => {
            wholeList.push(...expandedMiddlewareList);
            return wholeList;
          },
          []
        );
        return mainChain;
      }, "getMiddlewareList");
      const stack = {
        add: /* @__PURE__ */ __name((middleware, options = {}) => {
          const { name, override, aliases: _aliases } = options;
          const entry = {
            step: "initialize",
            priority: "normal",
            middleware,
            ...options
          };
          const aliases = getAllAliases(name, _aliases);
          if (aliases.length > 0) {
            if (aliases.some((alias) => entriesNameSet.has(alias))) {
              if (!override)
                throw new Error(`Duplicate middleware name '${getMiddlewareNameWithAliases(name, _aliases)}'`);
              for (const alias of aliases) {
                const toOverrideIndex = absoluteEntries.findIndex(
                  (entry2) => entry2.name === alias || entry2.aliases?.some((a3) => a3 === alias)
                );
                if (toOverrideIndex === -1) {
                  continue;
                }
                const toOverride = absoluteEntries[toOverrideIndex];
                if (toOverride.step !== entry.step || entry.priority !== toOverride.priority) {
                  throw new Error(
                    `"${getMiddlewareNameWithAliases(toOverride.name, toOverride.aliases)}" middleware with ${toOverride.priority} priority in ${toOverride.step} step cannot be overridden by "${getMiddlewareNameWithAliases(name, _aliases)}" middleware with ${entry.priority} priority in ${entry.step} step.`
                  );
                }
                absoluteEntries.splice(toOverrideIndex, 1);
              }
            }
            for (const alias of aliases) {
              entriesNameSet.add(alias);
            }
          }
          absoluteEntries.push(entry);
        }, "add"),
        addRelativeTo: /* @__PURE__ */ __name((middleware, options) => {
          const { name, override, aliases: _aliases } = options;
          const entry = {
            middleware,
            ...options
          };
          const aliases = getAllAliases(name, _aliases);
          if (aliases.length > 0) {
            if (aliases.some((alias) => entriesNameSet.has(alias))) {
              if (!override)
                throw new Error(`Duplicate middleware name '${getMiddlewareNameWithAliases(name, _aliases)}'`);
              for (const alias of aliases) {
                const toOverrideIndex = relativeEntries.findIndex(
                  (entry2) => entry2.name === alias || entry2.aliases?.some((a3) => a3 === alias)
                );
                if (toOverrideIndex === -1) {
                  continue;
                }
                const toOverride = relativeEntries[toOverrideIndex];
                if (toOverride.toMiddleware !== entry.toMiddleware || toOverride.relation !== entry.relation) {
                  throw new Error(
                    `"${getMiddlewareNameWithAliases(toOverride.name, toOverride.aliases)}" middleware ${toOverride.relation} "${toOverride.toMiddleware}" middleware cannot be overridden by "${getMiddlewareNameWithAliases(name, _aliases)}" middleware ${entry.relation} "${entry.toMiddleware}" middleware.`
                  );
                }
                relativeEntries.splice(toOverrideIndex, 1);
              }
            }
            for (const alias of aliases) {
              entriesNameSet.add(alias);
            }
          }
          relativeEntries.push(entry);
        }, "addRelativeTo"),
        clone: /* @__PURE__ */ __name(() => cloneTo(constructStack()), "clone"),
        use: /* @__PURE__ */ __name((plugin) => {
          plugin.applyToStack(stack);
        }, "use"),
        remove: /* @__PURE__ */ __name((toRemove) => {
          if (typeof toRemove === "string")
            return removeByName(toRemove);
          else
            return removeByReference(toRemove);
        }, "remove"),
        removeByTag: /* @__PURE__ */ __name((toRemove) => {
          let isRemoved = false;
          const filterCb = __name2((entry) => {
            const { tags, name, aliases: _aliases } = entry;
            if (tags && tags.includes(toRemove)) {
              const aliases = getAllAliases(name, _aliases);
              for (const alias of aliases) {
                entriesNameSet.delete(alias);
              }
              isRemoved = true;
              return false;
            }
            return true;
          }, "filterCb");
          absoluteEntries = absoluteEntries.filter(filterCb);
          relativeEntries = relativeEntries.filter(filterCb);
          return isRemoved;
        }, "removeByTag"),
        concat: /* @__PURE__ */ __name((from) => {
          const cloned = cloneTo(constructStack());
          cloned.use(from);
          cloned.identifyOnResolve(
            identifyOnResolve || cloned.identifyOnResolve() || (from.identifyOnResolve?.() ?? false)
          );
          return cloned;
        }, "concat"),
        applyToStack: cloneTo,
        identify: /* @__PURE__ */ __name(() => {
          return getMiddlewareList(true).map((mw) => {
            const step = mw.step ?? mw.relation + " " + mw.toMiddleware;
            return getMiddlewareNameWithAliases(mw.name, mw.aliases) + " - " + step;
          });
        }, "identify"),
        identifyOnResolve(toggle) {
          if (typeof toggle === "boolean")
            identifyOnResolve = toggle;
          return identifyOnResolve;
        },
        resolve: /* @__PURE__ */ __name((handler2, context) => {
          for (const middleware of getMiddlewareList().map((entry) => entry.middleware).reverse()) {
            handler2 = middleware(handler2, context);
          }
          if (identifyOnResolve) {
            console.log(stack.identify());
          }
          return handler2;
        }, "resolve")
      };
      return stack;
    }, "constructStack");
    var stepWeights = {
      initialize: 5,
      serialize: 4,
      build: 3,
      finalizeRequest: 2,
      deserialize: 1
    };
    var priorityWeights = {
      high: 3,
      normal: 2,
      low: 1
    };
  }
});

// ../../node_modules/.pnpm/@smithy+is-array-buffer@4.0.0/node_modules/@smithy/is-array-buffer/dist-cjs/index.js
var require_dist_cjs7 = __commonJS({
  "../../node_modules/.pnpm/@smithy+is-array-buffer@4.0.0/node_modules/@smithy/is-array-buffer/dist-cjs/index.js"(exports2, module2) {
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __name2 = /* @__PURE__ */ __name((target, value) => __defProp2(target, "name", { value, configurable: true }), "__name");
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: /* @__PURE__ */ __name(() => from[key], "get"), enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var src_exports = {};
    __export2(src_exports, {
      isArrayBuffer: /* @__PURE__ */ __name(() => isArrayBuffer, "isArrayBuffer")
    });
    module2.exports = __toCommonJS2(src_exports);
    var isArrayBuffer = __name2((arg) => typeof ArrayBuffer === "function" && arg instanceof ArrayBuffer || Object.prototype.toString.call(arg) === "[object ArrayBuffer]", "isArrayBuffer");
  }
});

// ../../node_modules/.pnpm/@smithy+util-buffer-from@4.0.0/node_modules/@smithy/util-buffer-from/dist-cjs/index.js
var require_dist_cjs8 = __commonJS({
  "../../node_modules/.pnpm/@smithy+util-buffer-from@4.0.0/node_modules/@smithy/util-buffer-from/dist-cjs/index.js"(exports2, module2) {
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __name2 = /* @__PURE__ */ __name((target, value) => __defProp2(target, "name", { value, configurable: true }), "__name");
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: /* @__PURE__ */ __name(() => from[key], "get"), enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var src_exports = {};
    __export2(src_exports, {
      fromArrayBuffer: /* @__PURE__ */ __name(() => fromArrayBuffer, "fromArrayBuffer"),
      fromString: /* @__PURE__ */ __name(() => fromString, "fromString")
    });
    module2.exports = __toCommonJS2(src_exports);
    var import_is_array_buffer = require_dist_cjs7();
    var import_buffer = require("buffer");
    var fromArrayBuffer = __name2((input, offset = 0, length = input.byteLength - offset) => {
      if (!(0, import_is_array_buffer.isArrayBuffer)(input)) {
        throw new TypeError(`The "input" argument must be ArrayBuffer. Received type ${typeof input} (${input})`);
      }
      return import_buffer.Buffer.from(input, offset, length);
    }, "fromArrayBuffer");
    var fromString = __name2((input, encoding) => {
      if (typeof input !== "string") {
        throw new TypeError(`The "input" argument must be of type string. Received type ${typeof input} (${input})`);
      }
      return encoding ? import_buffer.Buffer.from(input, encoding) : import_buffer.Buffer.from(input);
    }, "fromString");
  }
});

// ../../node_modules/.pnpm/@smithy+util-base64@4.0.0/node_modules/@smithy/util-base64/dist-cjs/fromBase64.js
var require_fromBase64 = __commonJS({
  "../../node_modules/.pnpm/@smithy+util-base64@4.0.0/node_modules/@smithy/util-base64/dist-cjs/fromBase64.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.fromBase64 = void 0;
    var util_buffer_from_1 = require_dist_cjs8();
    var BASE64_REGEX = /^[A-Za-z0-9+/]*={0,2}$/;
    var fromBase645 = /* @__PURE__ */ __name((input) => {
      if (input.length * 3 % 4 !== 0) {
        throw new TypeError(`Incorrect padding on base64 string.`);
      }
      if (!BASE64_REGEX.exec(input)) {
        throw new TypeError(`Invalid base64 string.`);
      }
      const buffer = (0, util_buffer_from_1.fromString)(input, "base64");
      return new Uint8Array(buffer.buffer, buffer.byteOffset, buffer.byteLength);
    }, "fromBase64");
    exports2.fromBase64 = fromBase645;
  }
});

// ../../node_modules/.pnpm/@smithy+util-utf8@4.0.0/node_modules/@smithy/util-utf8/dist-cjs/index.js
var require_dist_cjs9 = __commonJS({
  "../../node_modules/.pnpm/@smithy+util-utf8@4.0.0/node_modules/@smithy/util-utf8/dist-cjs/index.js"(exports2, module2) {
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __name2 = /* @__PURE__ */ __name((target, value) => __defProp2(target, "name", { value, configurable: true }), "__name");
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: /* @__PURE__ */ __name(() => from[key], "get"), enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var src_exports = {};
    __export2(src_exports, {
      fromUtf8: /* @__PURE__ */ __name(() => fromUtf84, "fromUtf8"),
      toUint8Array: /* @__PURE__ */ __name(() => toUint8Array, "toUint8Array"),
      toUtf8: /* @__PURE__ */ __name(() => toUtf85, "toUtf8")
    });
    module2.exports = __toCommonJS2(src_exports);
    var import_util_buffer_from = require_dist_cjs8();
    var fromUtf84 = __name2((input) => {
      const buf = (0, import_util_buffer_from.fromString)(input, "utf8");
      return new Uint8Array(buf.buffer, buf.byteOffset, buf.byteLength / Uint8Array.BYTES_PER_ELEMENT);
    }, "fromUtf8");
    var toUint8Array = __name2((data) => {
      if (typeof data === "string") {
        return fromUtf84(data);
      }
      if (ArrayBuffer.isView(data)) {
        return new Uint8Array(data.buffer, data.byteOffset, data.byteLength / Uint8Array.BYTES_PER_ELEMENT);
      }
      return new Uint8Array(data);
    }, "toUint8Array");
    var toUtf85 = __name2((input) => {
      if (typeof input === "string") {
        return input;
      }
      if (typeof input !== "object" || typeof input.byteOffset !== "number" || typeof input.byteLength !== "number") {
        throw new Error("@smithy/util-utf8: toUtf8 encoder function only accepts string | Uint8Array.");
      }
      return (0, import_util_buffer_from.fromArrayBuffer)(input.buffer, input.byteOffset, input.byteLength).toString("utf8");
    }, "toUtf8");
  }
});

// ../../node_modules/.pnpm/@smithy+util-base64@4.0.0/node_modules/@smithy/util-base64/dist-cjs/toBase64.js
var require_toBase64 = __commonJS({
  "../../node_modules/.pnpm/@smithy+util-base64@4.0.0/node_modules/@smithy/util-base64/dist-cjs/toBase64.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.toBase64 = void 0;
    var util_buffer_from_1 = require_dist_cjs8();
    var util_utf8_1 = require_dist_cjs9();
    var toBase645 = /* @__PURE__ */ __name((_input) => {
      let input;
      if (typeof _input === "string") {
        input = (0, util_utf8_1.fromUtf8)(_input);
      } else {
        input = _input;
      }
      if (typeof input !== "object" || typeof input.byteOffset !== "number" || typeof input.byteLength !== "number") {
        throw new Error("@smithy/util-base64: toBase64 encoder function only accepts string | Uint8Array.");
      }
      return (0, util_buffer_from_1.fromArrayBuffer)(input.buffer, input.byteOffset, input.byteLength).toString("base64");
    }, "toBase64");
    exports2.toBase64 = toBase645;
  }
});

// ../../node_modules/.pnpm/@smithy+util-base64@4.0.0/node_modules/@smithy/util-base64/dist-cjs/index.js
var require_dist_cjs10 = __commonJS({
  "../../node_modules/.pnpm/@smithy+util-base64@4.0.0/node_modules/@smithy/util-base64/dist-cjs/index.js"(exports2, module2) {
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: /* @__PURE__ */ __name(() => from[key], "get"), enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __reExport = /* @__PURE__ */ __name((target, mod, secondTarget) => (__copyProps2(target, mod, "default"), secondTarget && __copyProps2(secondTarget, mod, "default")), "__reExport");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var src_exports = {};
    module2.exports = __toCommonJS2(src_exports);
    __reExport(src_exports, require_fromBase64(), module2.exports);
    __reExport(src_exports, require_toBase64(), module2.exports);
  }
});

// ../../node_modules/.pnpm/@smithy+util-stream@4.2.2/node_modules/@smithy/util-stream/dist-cjs/checksum/ChecksumStream.js
var require_ChecksumStream = __commonJS({
  "../../node_modules/.pnpm/@smithy+util-stream@4.2.2/node_modules/@smithy/util-stream/dist-cjs/checksum/ChecksumStream.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.ChecksumStream = void 0;
    var util_base64_1 = require_dist_cjs10();
    var stream_1 = require("stream");
    var ChecksumStream2 = class extends stream_1.Duplex {
      static {
        __name(this, "ChecksumStream");
      }
      constructor({ expectedChecksum, checksum, source, checksumSourceLocation, base64Encoder }) {
        var _a2, _b;
        super();
        if (typeof source.pipe === "function") {
          this.source = source;
        } else {
          throw new Error(`@smithy/util-stream: unsupported source type ${(_b = (_a2 = source === null || source === void 0 ? void 0 : source.constructor) === null || _a2 === void 0 ? void 0 : _a2.name) !== null && _b !== void 0 ? _b : source} in ChecksumStream.`);
        }
        this.base64Encoder = base64Encoder !== null && base64Encoder !== void 0 ? base64Encoder : util_base64_1.toBase64;
        this.expectedChecksum = expectedChecksum;
        this.checksum = checksum;
        this.checksumSourceLocation = checksumSourceLocation;
        this.source.pipe(this);
      }
      _read(size) {
      }
      _write(chunk, encoding, callback) {
        try {
          this.checksum.update(chunk);
          this.push(chunk);
        } catch (e3) {
          return callback(e3);
        }
        return callback();
      }
      async _final(callback) {
        try {
          const digest = await this.checksum.digest();
          const received = this.base64Encoder(digest);
          if (this.expectedChecksum !== received) {
            return callback(new Error(`Checksum mismatch: expected "${this.expectedChecksum}" but received "${received}" in response header "${this.checksumSourceLocation}".`));
          }
        } catch (e3) {
          return callback(e3);
        }
        this.push(null);
        return callback();
      }
    };
    exports2.ChecksumStream = ChecksumStream2;
  }
});

// ../../node_modules/.pnpm/@smithy+util-stream@4.2.2/node_modules/@smithy/util-stream/dist-cjs/stream-type-check.js
var require_stream_type_check = __commonJS({
  "../../node_modules/.pnpm/@smithy+util-stream@4.2.2/node_modules/@smithy/util-stream/dist-cjs/stream-type-check.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.isBlob = exports2.isReadableStream = void 0;
    var isReadableStream2 = /* @__PURE__ */ __name((stream) => {
      var _a2;
      return typeof ReadableStream === "function" && (((_a2 = stream === null || stream === void 0 ? void 0 : stream.constructor) === null || _a2 === void 0 ? void 0 : _a2.name) === ReadableStream.name || stream instanceof ReadableStream);
    }, "isReadableStream");
    exports2.isReadableStream = isReadableStream2;
    var isBlob2 = /* @__PURE__ */ __name((blob) => {
      var _a2;
      return typeof Blob === "function" && (((_a2 = blob === null || blob === void 0 ? void 0 : blob.constructor) === null || _a2 === void 0 ? void 0 : _a2.name) === Blob.name || blob instanceof Blob);
    }, "isBlob");
    exports2.isBlob = isBlob2;
  }
});

// ../../node_modules/.pnpm/@smithy+util-stream@4.2.2/node_modules/@smithy/util-stream/dist-cjs/checksum/ChecksumStream.browser.js
var require_ChecksumStream_browser = __commonJS({
  "../../node_modules/.pnpm/@smithy+util-stream@4.2.2/node_modules/@smithy/util-stream/dist-cjs/checksum/ChecksumStream.browser.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.ChecksumStream = void 0;
    var ReadableStreamRef = typeof ReadableStream === "function" ? ReadableStream : function() {
    };
    var ChecksumStream2 = class extends ReadableStreamRef {
      static {
        __name(this, "ChecksumStream");
      }
    };
    exports2.ChecksumStream = ChecksumStream2;
  }
});

// ../../node_modules/.pnpm/@smithy+util-stream@4.2.2/node_modules/@smithy/util-stream/dist-cjs/checksum/createChecksumStream.browser.js
var require_createChecksumStream_browser = __commonJS({
  "../../node_modules/.pnpm/@smithy+util-stream@4.2.2/node_modules/@smithy/util-stream/dist-cjs/checksum/createChecksumStream.browser.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.createChecksumStream = void 0;
    var util_base64_1 = require_dist_cjs10();
    var stream_type_check_1 = require_stream_type_check();
    var ChecksumStream_browser_1 = require_ChecksumStream_browser();
    var createChecksumStream2 = /* @__PURE__ */ __name(({ expectedChecksum, checksum, source, checksumSourceLocation, base64Encoder }) => {
      var _a2, _b;
      if (!(0, stream_type_check_1.isReadableStream)(source)) {
        throw new Error(`@smithy/util-stream: unsupported source type ${(_b = (_a2 = source === null || source === void 0 ? void 0 : source.constructor) === null || _a2 === void 0 ? void 0 : _a2.name) !== null && _b !== void 0 ? _b : source} in ChecksumStream.`);
      }
      const encoder = base64Encoder !== null && base64Encoder !== void 0 ? base64Encoder : util_base64_1.toBase64;
      if (typeof TransformStream !== "function") {
        throw new Error("@smithy/util-stream: unable to instantiate ChecksumStream because API unavailable: ReadableStream/TransformStream.");
      }
      const transform = new TransformStream({
        start() {
        },
        async transform(chunk, controller) {
          checksum.update(chunk);
          controller.enqueue(chunk);
        },
        async flush(controller) {
          const digest = await checksum.digest();
          const received = encoder(digest);
          if (expectedChecksum !== received) {
            const error2 = new Error(`Checksum mismatch: expected "${expectedChecksum}" but received "${received}" in response header "${checksumSourceLocation}".`);
            controller.error(error2);
          } else {
            controller.terminate();
          }
        }
      });
      source.pipeThrough(transform);
      const readable = transform.readable;
      Object.setPrototypeOf(readable, ChecksumStream_browser_1.ChecksumStream.prototype);
      return readable;
    }, "createChecksumStream");
    exports2.createChecksumStream = createChecksumStream2;
  }
});

// ../../node_modules/.pnpm/@smithy+util-stream@4.2.2/node_modules/@smithy/util-stream/dist-cjs/checksum/createChecksumStream.js
var require_createChecksumStream = __commonJS({
  "../../node_modules/.pnpm/@smithy+util-stream@4.2.2/node_modules/@smithy/util-stream/dist-cjs/checksum/createChecksumStream.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.createChecksumStream = createChecksumStream2;
    var stream_type_check_1 = require_stream_type_check();
    var ChecksumStream_1 = require_ChecksumStream();
    var createChecksumStream_browser_1 = require_createChecksumStream_browser();
    function createChecksumStream2(init) {
      if (typeof ReadableStream === "function" && (0, stream_type_check_1.isReadableStream)(init.source)) {
        return (0, createChecksumStream_browser_1.createChecksumStream)(init);
      }
      return new ChecksumStream_1.ChecksumStream(init);
    }
    __name(createChecksumStream2, "createChecksumStream");
  }
});

// ../../node_modules/.pnpm/@smithy+util-stream@4.2.2/node_modules/@smithy/util-stream/dist-cjs/ByteArrayCollector.js
var require_ByteArrayCollector = __commonJS({
  "../../node_modules/.pnpm/@smithy+util-stream@4.2.2/node_modules/@smithy/util-stream/dist-cjs/ByteArrayCollector.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.ByteArrayCollector = void 0;
    var ByteArrayCollector = class {
      static {
        __name(this, "ByteArrayCollector");
      }
      constructor(allocByteArray) {
        this.allocByteArray = allocByteArray;
        this.byteLength = 0;
        this.byteArrays = [];
      }
      push(byteArray) {
        this.byteArrays.push(byteArray);
        this.byteLength += byteArray.byteLength;
      }
      flush() {
        if (this.byteArrays.length === 1) {
          const bytes = this.byteArrays[0];
          this.reset();
          return bytes;
        }
        const aggregation = this.allocByteArray(this.byteLength);
        let cursor = 0;
        for (let i3 = 0; i3 < this.byteArrays.length; ++i3) {
          const bytes = this.byteArrays[i3];
          aggregation.set(bytes, cursor);
          cursor += bytes.byteLength;
        }
        this.reset();
        return aggregation;
      }
      reset() {
        this.byteArrays = [];
        this.byteLength = 0;
      }
    };
    exports2.ByteArrayCollector = ByteArrayCollector;
  }
});

// ../../node_modules/.pnpm/@smithy+util-stream@4.2.2/node_modules/@smithy/util-stream/dist-cjs/createBufferedReadableStream.js
var require_createBufferedReadableStream = __commonJS({
  "../../node_modules/.pnpm/@smithy+util-stream@4.2.2/node_modules/@smithy/util-stream/dist-cjs/createBufferedReadableStream.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.createBufferedReadable = void 0;
    exports2.createBufferedReadableStream = createBufferedReadableStream;
    exports2.merge = merge;
    exports2.flush = flush;
    exports2.sizeOf = sizeOf;
    exports2.modeOf = modeOf;
    var ByteArrayCollector_1 = require_ByteArrayCollector();
    function createBufferedReadableStream(upstream, size, logger3) {
      const reader = upstream.getReader();
      let streamBufferingLoggedWarning = false;
      let bytesSeen = 0;
      const buffers = ["", new ByteArrayCollector_1.ByteArrayCollector((size2) => new Uint8Array(size2))];
      let mode = -1;
      const pull = /* @__PURE__ */ __name(async (controller) => {
        const { value, done } = await reader.read();
        const chunk = value;
        if (done) {
          if (mode !== -1) {
            const remainder = flush(buffers, mode);
            if (sizeOf(remainder) > 0) {
              controller.enqueue(remainder);
            }
          }
          controller.close();
        } else {
          const chunkMode = modeOf(chunk, false);
          if (mode !== chunkMode) {
            if (mode >= 0) {
              controller.enqueue(flush(buffers, mode));
            }
            mode = chunkMode;
          }
          if (mode === -1) {
            controller.enqueue(chunk);
            return;
          }
          const chunkSize = sizeOf(chunk);
          bytesSeen += chunkSize;
          const bufferSize = sizeOf(buffers[mode]);
          if (chunkSize >= size && bufferSize === 0) {
            controller.enqueue(chunk);
          } else {
            const newSize = merge(buffers, mode, chunk);
            if (!streamBufferingLoggedWarning && bytesSeen > size * 2) {
              streamBufferingLoggedWarning = true;
              logger3 === null || logger3 === void 0 ? void 0 : logger3.warn(`@smithy/util-stream - stream chunk size ${chunkSize} is below threshold of ${size}, automatically buffering.`);
            }
            if (newSize >= size) {
              controller.enqueue(flush(buffers, mode));
            } else {
              await pull(controller);
            }
          }
        }
      }, "pull");
      return new ReadableStream({
        pull
      });
    }
    __name(createBufferedReadableStream, "createBufferedReadableStream");
    exports2.createBufferedReadable = createBufferedReadableStream;
    function merge(buffers, mode, chunk) {
      switch (mode) {
        case 0:
          buffers[0] += chunk;
          return sizeOf(buffers[0]);
        case 1:
        case 2:
          buffers[mode].push(chunk);
          return sizeOf(buffers[mode]);
      }
    }
    __name(merge, "merge");
    function flush(buffers, mode) {
      switch (mode) {
        case 0:
          const s3 = buffers[0];
          buffers[0] = "";
          return s3;
        case 1:
        case 2:
          return buffers[mode].flush();
      }
      throw new Error(`@smithy/util-stream - invalid index ${mode} given to flush()`);
    }
    __name(flush, "flush");
    function sizeOf(chunk) {
      var _a2, _b;
      return (_b = (_a2 = chunk === null || chunk === void 0 ? void 0 : chunk.byteLength) !== null && _a2 !== void 0 ? _a2 : chunk === null || chunk === void 0 ? void 0 : chunk.length) !== null && _b !== void 0 ? _b : 0;
    }
    __name(sizeOf, "sizeOf");
    function modeOf(chunk, allowBuffer = true) {
      if (allowBuffer && typeof Buffer !== "undefined" && chunk instanceof Buffer) {
        return 2;
      }
      if (chunk instanceof Uint8Array) {
        return 1;
      }
      if (typeof chunk === "string") {
        return 0;
      }
      return -1;
    }
    __name(modeOf, "modeOf");
  }
});

// ../../node_modules/.pnpm/@smithy+util-stream@4.2.2/node_modules/@smithy/util-stream/dist-cjs/createBufferedReadable.js
var require_createBufferedReadable = __commonJS({
  "../../node_modules/.pnpm/@smithy+util-stream@4.2.2/node_modules/@smithy/util-stream/dist-cjs/createBufferedReadable.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.createBufferedReadable = createBufferedReadable2;
    var node_stream_1 = require("node:stream");
    var ByteArrayCollector_1 = require_ByteArrayCollector();
    var createBufferedReadableStream_1 = require_createBufferedReadableStream();
    var stream_type_check_1 = require_stream_type_check();
    function createBufferedReadable2(upstream, size, logger3) {
      if ((0, stream_type_check_1.isReadableStream)(upstream)) {
        return (0, createBufferedReadableStream_1.createBufferedReadableStream)(upstream, size, logger3);
      }
      const downstream = new node_stream_1.Readable({ read() {
      } });
      let streamBufferingLoggedWarning = false;
      let bytesSeen = 0;
      const buffers = [
        "",
        new ByteArrayCollector_1.ByteArrayCollector((size2) => new Uint8Array(size2)),
        new ByteArrayCollector_1.ByteArrayCollector((size2) => Buffer.from(new Uint8Array(size2)))
      ];
      let mode = -1;
      upstream.on("data", (chunk) => {
        const chunkMode = (0, createBufferedReadableStream_1.modeOf)(chunk, true);
        if (mode !== chunkMode) {
          if (mode >= 0) {
            downstream.push((0, createBufferedReadableStream_1.flush)(buffers, mode));
          }
          mode = chunkMode;
        }
        if (mode === -1) {
          downstream.push(chunk);
          return;
        }
        const chunkSize = (0, createBufferedReadableStream_1.sizeOf)(chunk);
        bytesSeen += chunkSize;
        const bufferSize = (0, createBufferedReadableStream_1.sizeOf)(buffers[mode]);
        if (chunkSize >= size && bufferSize === 0) {
          downstream.push(chunk);
        } else {
          const newSize = (0, createBufferedReadableStream_1.merge)(buffers, mode, chunk);
          if (!streamBufferingLoggedWarning && bytesSeen > size * 2) {
            streamBufferingLoggedWarning = true;
            logger3 === null || logger3 === void 0 ? void 0 : logger3.warn(`@smithy/util-stream - stream chunk size ${chunkSize} is below threshold of ${size}, automatically buffering.`);
          }
          if (newSize >= size) {
            downstream.push((0, createBufferedReadableStream_1.flush)(buffers, mode));
          }
        }
      });
      upstream.on("end", () => {
        if (mode !== -1) {
          const remainder = (0, createBufferedReadableStream_1.flush)(buffers, mode);
          if ((0, createBufferedReadableStream_1.sizeOf)(remainder) > 0) {
            downstream.push(remainder);
          }
        }
        downstream.push(null);
      });
      return downstream;
    }
    __name(createBufferedReadable2, "createBufferedReadable");
  }
});

// ../../node_modules/.pnpm/@smithy+util-stream@4.2.2/node_modules/@smithy/util-stream/dist-cjs/getAwsChunkedEncodingStream.js
var require_getAwsChunkedEncodingStream = __commonJS({
  "../../node_modules/.pnpm/@smithy+util-stream@4.2.2/node_modules/@smithy/util-stream/dist-cjs/getAwsChunkedEncodingStream.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.getAwsChunkedEncodingStream = void 0;
    var stream_1 = require("stream");
    var getAwsChunkedEncodingStream2 = /* @__PURE__ */ __name((readableStream, options) => {
      const { base64Encoder, bodyLengthChecker, checksumAlgorithmFn, checksumLocationName, streamHasher } = options;
      const checksumRequired = base64Encoder !== void 0 && checksumAlgorithmFn !== void 0 && checksumLocationName !== void 0 && streamHasher !== void 0;
      const digest = checksumRequired ? streamHasher(checksumAlgorithmFn, readableStream) : void 0;
      const awsChunkedEncodingStream = new stream_1.Readable({ read: /* @__PURE__ */ __name(() => {
      }, "read") });
      readableStream.on("data", (data) => {
        const length = bodyLengthChecker(data) || 0;
        awsChunkedEncodingStream.push(`${length.toString(16)}\r
`);
        awsChunkedEncodingStream.push(data);
        awsChunkedEncodingStream.push("\r\n");
      });
      readableStream.on("end", async () => {
        awsChunkedEncodingStream.push(`0\r
`);
        if (checksumRequired) {
          const checksum = base64Encoder(await digest);
          awsChunkedEncodingStream.push(`${checksumLocationName}:${checksum}\r
`);
          awsChunkedEncodingStream.push(`\r
`);
        }
        awsChunkedEncodingStream.push(null);
      });
      return awsChunkedEncodingStream;
    }, "getAwsChunkedEncodingStream");
    exports2.getAwsChunkedEncodingStream = getAwsChunkedEncodingStream2;
  }
});

// ../../node_modules/.pnpm/@smithy+util-stream@4.2.2/node_modules/@smithy/util-stream/dist-cjs/headStream.browser.js
var require_headStream_browser = __commonJS({
  "../../node_modules/.pnpm/@smithy+util-stream@4.2.2/node_modules/@smithy/util-stream/dist-cjs/headStream.browser.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.headStream = headStream2;
    async function headStream2(stream, bytes) {
      var _a2;
      let byteLengthCounter = 0;
      const chunks = [];
      const reader = stream.getReader();
      let isDone = false;
      while (!isDone) {
        const { done, value } = await reader.read();
        if (value) {
          chunks.push(value);
          byteLengthCounter += (_a2 = value === null || value === void 0 ? void 0 : value.byteLength) !== null && _a2 !== void 0 ? _a2 : 0;
        }
        if (byteLengthCounter >= bytes) {
          break;
        }
        isDone = done;
      }
      reader.releaseLock();
      const collected = new Uint8Array(Math.min(bytes, byteLengthCounter));
      let offset = 0;
      for (const chunk of chunks) {
        if (chunk.byteLength > collected.byteLength - offset) {
          collected.set(chunk.subarray(0, collected.byteLength - offset), offset);
          break;
        } else {
          collected.set(chunk, offset);
        }
        offset += chunk.length;
      }
      return collected;
    }
    __name(headStream2, "headStream");
  }
});

// ../../node_modules/.pnpm/@smithy+util-stream@4.2.2/node_modules/@smithy/util-stream/dist-cjs/headStream.js
var require_headStream = __commonJS({
  "../../node_modules/.pnpm/@smithy+util-stream@4.2.2/node_modules/@smithy/util-stream/dist-cjs/headStream.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.headStream = void 0;
    var stream_1 = require("stream");
    var headStream_browser_1 = require_headStream_browser();
    var stream_type_check_1 = require_stream_type_check();
    var headStream2 = /* @__PURE__ */ __name((stream, bytes) => {
      if ((0, stream_type_check_1.isReadableStream)(stream)) {
        return (0, headStream_browser_1.headStream)(stream, bytes);
      }
      return new Promise((resolve, reject) => {
        const collector = new Collector();
        collector.limit = bytes;
        stream.pipe(collector);
        stream.on("error", (err) => {
          collector.end();
          reject(err);
        });
        collector.on("error", reject);
        collector.on("finish", function() {
          const bytes2 = new Uint8Array(Buffer.concat(this.buffers));
          resolve(bytes2);
        });
      });
    }, "headStream");
    exports2.headStream = headStream2;
    var Collector = class extends stream_1.Writable {
      static {
        __name(this, "Collector");
      }
      constructor() {
        super(...arguments);
        this.buffers = [];
        this.limit = Infinity;
        this.bytesBuffered = 0;
      }
      _write(chunk, encoding, callback) {
        var _a2;
        this.buffers.push(chunk);
        this.bytesBuffered += (_a2 = chunk.byteLength) !== null && _a2 !== void 0 ? _a2 : 0;
        if (this.bytesBuffered >= this.limit) {
          const excess = this.bytesBuffered - this.limit;
          const tailBuffer = this.buffers[this.buffers.length - 1];
          this.buffers[this.buffers.length - 1] = tailBuffer.subarray(0, tailBuffer.byteLength - excess);
          this.emit("finish");
        }
        callback();
      }
    };
  }
});

// ../../node_modules/.pnpm/@smithy+util-uri-escape@4.0.0/node_modules/@smithy/util-uri-escape/dist-cjs/index.js
var require_dist_cjs11 = __commonJS({
  "../../node_modules/.pnpm/@smithy+util-uri-escape@4.0.0/node_modules/@smithy/util-uri-escape/dist-cjs/index.js"(exports2, module2) {
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __name2 = /* @__PURE__ */ __name((target, value) => __defProp2(target, "name", { value, configurable: true }), "__name");
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: /* @__PURE__ */ __name(() => from[key], "get"), enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var src_exports = {};
    __export2(src_exports, {
      escapeUri: /* @__PURE__ */ __name(() => escapeUri, "escapeUri"),
      escapeUriPath: /* @__PURE__ */ __name(() => escapeUriPath, "escapeUriPath")
    });
    module2.exports = __toCommonJS2(src_exports);
    var escapeUri = __name2((uri) => (
      // AWS percent-encodes some extra non-standard characters in a URI
      encodeURIComponent(uri).replace(/[!'()*]/g, hexEncode)
    ), "escapeUri");
    var hexEncode = __name2((c3) => `%${c3.charCodeAt(0).toString(16).toUpperCase()}`, "hexEncode");
    var escapeUriPath = __name2((uri) => uri.split("/").map(escapeUri).join("/"), "escapeUriPath");
  }
});

// ../../node_modules/.pnpm/@smithy+querystring-builder@4.0.4/node_modules/@smithy/querystring-builder/dist-cjs/index.js
var require_dist_cjs12 = __commonJS({
  "../../node_modules/.pnpm/@smithy+querystring-builder@4.0.4/node_modules/@smithy/querystring-builder/dist-cjs/index.js"(exports2, module2) {
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __name2 = /* @__PURE__ */ __name((target, value) => __defProp2(target, "name", { value, configurable: true }), "__name");
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: /* @__PURE__ */ __name(() => from[key], "get"), enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var src_exports = {};
    __export2(src_exports, {
      buildQueryString: /* @__PURE__ */ __name(() => buildQueryString, "buildQueryString")
    });
    module2.exports = __toCommonJS2(src_exports);
    var import_util_uri_escape = require_dist_cjs11();
    function buildQueryString(query) {
      const parts = [];
      for (let key of Object.keys(query).sort()) {
        const value = query[key];
        key = (0, import_util_uri_escape.escapeUri)(key);
        if (Array.isArray(value)) {
          for (let i3 = 0, iLen = value.length; i3 < iLen; i3++) {
            parts.push(`${key}=${(0, import_util_uri_escape.escapeUri)(value[i3])}`);
          }
        } else {
          let qsEntry = key;
          if (value || typeof value === "string") {
            qsEntry += `=${(0, import_util_uri_escape.escapeUri)(value)}`;
          }
          parts.push(qsEntry);
        }
      }
      return parts.join("&");
    }
    __name(buildQueryString, "buildQueryString");
    __name2(buildQueryString, "buildQueryString");
  }
});

// ../../node_modules/.pnpm/@smithy+node-http-handler@4.0.6/node_modules/@smithy/node-http-handler/dist-cjs/index.js
var require_dist_cjs13 = __commonJS({
  "../../node_modules/.pnpm/@smithy+node-http-handler@4.0.6/node_modules/@smithy/node-http-handler/dist-cjs/index.js"(exports2, module2) {
    var __create2 = Object.create;
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __getProtoOf2 = Object.getPrototypeOf;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __name2 = /* @__PURE__ */ __name((target, value) => __defProp2(target, "name", { value, configurable: true }), "__name");
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: /* @__PURE__ */ __name(() => from[key], "get"), enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toESM2 = /* @__PURE__ */ __name((mod, isNodeMode, target) => (target = mod != null ? __create2(__getProtoOf2(mod)) : {}, __copyProps2(
      // If the importer is in node compatibility mode or this is not an ESM
      // file that has been converted to a CommonJS file using a Babel-
      // compatible transform (i.e. "__esModule" has not been set), then set
      // "default" to the CommonJS "module.exports" for node compatibility.
      isNodeMode || !mod || !mod.__esModule ? __defProp2(target, "default", { value: mod, enumerable: true }) : target,
      mod
    )), "__toESM");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var src_exports = {};
    __export2(src_exports, {
      DEFAULT_REQUEST_TIMEOUT: /* @__PURE__ */ __name(() => DEFAULT_REQUEST_TIMEOUT, "DEFAULT_REQUEST_TIMEOUT"),
      NodeHttp2Handler: /* @__PURE__ */ __name(() => NodeHttp2Handler, "NodeHttp2Handler"),
      NodeHttpHandler: /* @__PURE__ */ __name(() => NodeHttpHandler, "NodeHttpHandler"),
      streamCollector: /* @__PURE__ */ __name(() => streamCollector3, "streamCollector")
    });
    module2.exports = __toCommonJS2(src_exports);
    var import_protocol_http15 = require_dist_cjs2();
    var import_querystring_builder = require_dist_cjs12();
    var import_http = require("http");
    var import_https = require("https");
    var NODEJS_TIMEOUT_ERROR_CODES = ["ECONNRESET", "EPIPE", "ETIMEDOUT"];
    var getTransformedHeaders = __name2((headers) => {
      const transformedHeaders = {};
      for (const name of Object.keys(headers)) {
        const headerValues = headers[name];
        transformedHeaders[name] = Array.isArray(headerValues) ? headerValues.join(",") : headerValues;
      }
      return transformedHeaders;
    }, "getTransformedHeaders");
    var timing = {
      setTimeout: /* @__PURE__ */ __name((cb, ms) => setTimeout(cb, ms), "setTimeout"),
      clearTimeout: /* @__PURE__ */ __name((timeoutId) => clearTimeout(timeoutId), "clearTimeout")
    };
    var DEFER_EVENT_LISTENER_TIME = 1e3;
    var setConnectionTimeout = __name2((request, reject, timeoutInMs = 0) => {
      if (!timeoutInMs) {
        return -1;
      }
      const registerTimeout = __name2((offset) => {
        const timeoutId = timing.setTimeout(() => {
          request.destroy();
          reject(
            Object.assign(new Error(`Socket timed out without establishing a connection within ${timeoutInMs} ms`), {
              name: "TimeoutError"
            })
          );
        }, timeoutInMs - offset);
        const doWithSocket = __name2((socket) => {
          if (socket?.connecting) {
            socket.on("connect", () => {
              timing.clearTimeout(timeoutId);
            });
          } else {
            timing.clearTimeout(timeoutId);
          }
        }, "doWithSocket");
        if (request.socket) {
          doWithSocket(request.socket);
        } else {
          request.on("socket", doWithSocket);
        }
      }, "registerTimeout");
      if (timeoutInMs < 2e3) {
        registerTimeout(0);
        return 0;
      }
      return timing.setTimeout(registerTimeout.bind(null, DEFER_EVENT_LISTENER_TIME), DEFER_EVENT_LISTENER_TIME);
    }, "setConnectionTimeout");
    var DEFER_EVENT_LISTENER_TIME2 = 3e3;
    var setSocketKeepAlive = __name2((request, { keepAlive, keepAliveMsecs }, deferTimeMs = DEFER_EVENT_LISTENER_TIME2) => {
      if (keepAlive !== true) {
        return -1;
      }
      const registerListener = __name2(() => {
        if (request.socket) {
          request.socket.setKeepAlive(keepAlive, keepAliveMsecs || 0);
        } else {
          request.on("socket", (socket) => {
            socket.setKeepAlive(keepAlive, keepAliveMsecs || 0);
          });
        }
      }, "registerListener");
      if (deferTimeMs === 0) {
        registerListener();
        return 0;
      }
      return timing.setTimeout(registerListener, deferTimeMs);
    }, "setSocketKeepAlive");
    var DEFER_EVENT_LISTENER_TIME3 = 3e3;
    var setSocketTimeout = __name2((request, reject, timeoutInMs = DEFAULT_REQUEST_TIMEOUT) => {
      const registerTimeout = __name2((offset) => {
        const timeout = timeoutInMs - offset;
        const onTimeout = __name2(() => {
          request.destroy();
          reject(Object.assign(new Error(`Connection timed out after ${timeoutInMs} ms`), { name: "TimeoutError" }));
        }, "onTimeout");
        if (request.socket) {
          request.socket.setTimeout(timeout, onTimeout);
          request.on("close", () => request.socket?.removeListener("timeout", onTimeout));
        } else {
          request.setTimeout(timeout, onTimeout);
        }
      }, "registerTimeout");
      if (0 < timeoutInMs && timeoutInMs < 6e3) {
        registerTimeout(0);
        return 0;
      }
      return timing.setTimeout(
        registerTimeout.bind(null, timeoutInMs === 0 ? 0 : DEFER_EVENT_LISTENER_TIME3),
        DEFER_EVENT_LISTENER_TIME3
      );
    }, "setSocketTimeout");
    var import_stream = require("stream");
    var MIN_WAIT_TIME = 6e3;
    async function writeRequestBody(httpRequest, request, maxContinueTimeoutMs = MIN_WAIT_TIME) {
      const headers = request.headers ?? {};
      const expect = headers["Expect"] || headers["expect"];
      let timeoutId = -1;
      let sendBody = true;
      if (expect === "100-continue") {
        sendBody = await Promise.race([
          new Promise((resolve) => {
            timeoutId = Number(timing.setTimeout(() => resolve(true), Math.max(MIN_WAIT_TIME, maxContinueTimeoutMs)));
          }),
          new Promise((resolve) => {
            httpRequest.on("continue", () => {
              timing.clearTimeout(timeoutId);
              resolve(true);
            });
            httpRequest.on("response", () => {
              timing.clearTimeout(timeoutId);
              resolve(false);
            });
            httpRequest.on("error", () => {
              timing.clearTimeout(timeoutId);
              resolve(false);
            });
          })
        ]);
      }
      if (sendBody) {
        writeBody(httpRequest, request.body);
      }
    }
    __name(writeRequestBody, "writeRequestBody");
    __name2(writeRequestBody, "writeRequestBody");
    function writeBody(httpRequest, body) {
      if (body instanceof import_stream.Readable) {
        body.pipe(httpRequest);
        return;
      }
      if (body) {
        if (Buffer.isBuffer(body) || typeof body === "string") {
          httpRequest.end(body);
          return;
        }
        const uint8 = body;
        if (typeof uint8 === "object" && uint8.buffer && typeof uint8.byteOffset === "number" && typeof uint8.byteLength === "number") {
          httpRequest.end(Buffer.from(uint8.buffer, uint8.byteOffset, uint8.byteLength));
          return;
        }
        httpRequest.end(Buffer.from(body));
        return;
      }
      httpRequest.end();
    }
    __name(writeBody, "writeBody");
    __name2(writeBody, "writeBody");
    var DEFAULT_REQUEST_TIMEOUT = 0;
    var NodeHttpHandler = class _NodeHttpHandler {
      static {
        __name(this, "_NodeHttpHandler");
      }
      constructor(options) {
        this.socketWarningTimestamp = 0;
        this.metadata = { handlerProtocol: "http/1.1" };
        this.configProvider = new Promise((resolve, reject) => {
          if (typeof options === "function") {
            options().then((_options) => {
              resolve(this.resolveDefaultConfig(_options));
            }).catch(reject);
          } else {
            resolve(this.resolveDefaultConfig(options));
          }
        });
      }
      static {
        __name2(this, "NodeHttpHandler");
      }
      /**
       * @returns the input if it is an HttpHandler of any class,
       * or instantiates a new instance of this handler.
       */
      static create(instanceOrOptions) {
        if (typeof instanceOrOptions?.handle === "function") {
          return instanceOrOptions;
        }
        return new _NodeHttpHandler(instanceOrOptions);
      }
      /**
       * @internal
       *
       * @param agent - http(s) agent in use by the NodeHttpHandler instance.
       * @param socketWarningTimestamp - last socket usage check timestamp.
       * @param logger - channel for the warning.
       * @returns timestamp of last emitted warning.
       */
      static checkSocketUsage(agent, socketWarningTimestamp, logger3 = console) {
        const { sockets, requests, maxSockets } = agent;
        if (typeof maxSockets !== "number" || maxSockets === Infinity) {
          return socketWarningTimestamp;
        }
        const interval = 15e3;
        if (Date.now() - interval < socketWarningTimestamp) {
          return socketWarningTimestamp;
        }
        if (sockets && requests) {
          for (const origin in sockets) {
            const socketsInUse = sockets[origin]?.length ?? 0;
            const requestsEnqueued = requests[origin]?.length ?? 0;
            if (socketsInUse >= maxSockets && requestsEnqueued >= 2 * maxSockets) {
              logger3?.warn?.(
                `@smithy/node-http-handler:WARN - socket usage at capacity=${socketsInUse} and ${requestsEnqueued} additional requests are enqueued.
See https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/node-configuring-maxsockets.html
or increase socketAcquisitionWarningTimeout=(millis) in the NodeHttpHandler config.`
              );
              return Date.now();
            }
          }
        }
        return socketWarningTimestamp;
      }
      resolveDefaultConfig(options) {
        const { requestTimeout, connectionTimeout, socketTimeout, socketAcquisitionWarningTimeout, httpAgent, httpsAgent } = options || {};
        const keepAlive = true;
        const maxSockets = 50;
        return {
          connectionTimeout,
          requestTimeout: requestTimeout ?? socketTimeout,
          socketAcquisitionWarningTimeout,
          httpAgent: (() => {
            if (httpAgent instanceof import_http.Agent || typeof httpAgent?.destroy === "function") {
              return httpAgent;
            }
            return new import_http.Agent({ keepAlive, maxSockets, ...httpAgent });
          })(),
          httpsAgent: (() => {
            if (httpsAgent instanceof import_https.Agent || typeof httpsAgent?.destroy === "function") {
              return httpsAgent;
            }
            return new import_https.Agent({ keepAlive, maxSockets, ...httpsAgent });
          })(),
          logger: console
        };
      }
      destroy() {
        this.config?.httpAgent?.destroy();
        this.config?.httpsAgent?.destroy();
      }
      async handle(request, { abortSignal } = {}) {
        if (!this.config) {
          this.config = await this.configProvider;
        }
        return new Promise((_resolve, _reject) => {
          let writeRequestBodyPromise = void 0;
          const timeouts = [];
          const resolve = __name2(async (arg) => {
            await writeRequestBodyPromise;
            timeouts.forEach(timing.clearTimeout);
            _resolve(arg);
          }, "resolve");
          const reject = __name2(async (arg) => {
            await writeRequestBodyPromise;
            timeouts.forEach(timing.clearTimeout);
            _reject(arg);
          }, "reject");
          if (!this.config) {
            throw new Error("Node HTTP request handler config is not resolved");
          }
          if (abortSignal?.aborted) {
            const abortError = new Error("Request aborted");
            abortError.name = "AbortError";
            reject(abortError);
            return;
          }
          const isSSL = request.protocol === "https:";
          const agent = isSSL ? this.config.httpsAgent : this.config.httpAgent;
          timeouts.push(
            timing.setTimeout(
              () => {
                this.socketWarningTimestamp = _NodeHttpHandler.checkSocketUsage(
                  agent,
                  this.socketWarningTimestamp,
                  this.config.logger
                );
              },
              this.config.socketAcquisitionWarningTimeout ?? (this.config.requestTimeout ?? 2e3) + (this.config.connectionTimeout ?? 1e3)
            )
          );
          const queryString = (0, import_querystring_builder.buildQueryString)(request.query || {});
          let auth = void 0;
          if (request.username != null || request.password != null) {
            const username = request.username ?? "";
            const password = request.password ?? "";
            auth = `${username}:${password}`;
          }
          let path = request.path;
          if (queryString) {
            path += `?${queryString}`;
          }
          if (request.fragment) {
            path += `#${request.fragment}`;
          }
          let hostname = request.hostname ?? "";
          if (hostname[0] === "[" && hostname.endsWith("]")) {
            hostname = request.hostname.slice(1, -1);
          } else {
            hostname = request.hostname;
          }
          const nodeHttpsOptions = {
            headers: request.headers,
            host: hostname,
            method: request.method,
            path,
            port: request.port,
            agent,
            auth
          };
          const requestFunc = isSSL ? import_https.request : import_http.request;
          const req = requestFunc(nodeHttpsOptions, (res) => {
            const httpResponse = new import_protocol_http15.HttpResponse({
              statusCode: res.statusCode || -1,
              reason: res.statusMessage,
              headers: getTransformedHeaders(res.headers),
              body: res
            });
            resolve({ response: httpResponse });
          });
          req.on("error", (err) => {
            if (NODEJS_TIMEOUT_ERROR_CODES.includes(err.code)) {
              reject(Object.assign(err, { name: "TimeoutError" }));
            } else {
              reject(err);
            }
          });
          if (abortSignal) {
            const onAbort = __name2(() => {
              req.destroy();
              const abortError = new Error("Request aborted");
              abortError.name = "AbortError";
              reject(abortError);
            }, "onAbort");
            if (typeof abortSignal.addEventListener === "function") {
              const signal = abortSignal;
              signal.addEventListener("abort", onAbort, { once: true });
              req.once("close", () => signal.removeEventListener("abort", onAbort));
            } else {
              abortSignal.onabort = onAbort;
            }
          }
          timeouts.push(setConnectionTimeout(req, reject, this.config.connectionTimeout));
          timeouts.push(setSocketTimeout(req, reject, this.config.requestTimeout));
          const httpAgent = nodeHttpsOptions.agent;
          if (typeof httpAgent === "object" && "keepAlive" in httpAgent) {
            timeouts.push(
              setSocketKeepAlive(req, {
                // @ts-expect-error keepAlive is not public on httpAgent.
                keepAlive: httpAgent.keepAlive,
                // @ts-expect-error keepAliveMsecs is not public on httpAgent.
                keepAliveMsecs: httpAgent.keepAliveMsecs
              })
            );
          }
          writeRequestBodyPromise = writeRequestBody(req, request, this.config.requestTimeout).catch((e3) => {
            timeouts.forEach(timing.clearTimeout);
            return _reject(e3);
          });
        });
      }
      updateHttpClientConfig(key, value) {
        this.config = void 0;
        this.configProvider = this.configProvider.then((config) => {
          return {
            ...config,
            [key]: value
          };
        });
      }
      httpHandlerConfigs() {
        return this.config ?? {};
      }
    };
    var import_http22 = require("http2");
    var import_http2 = __toESM2(require("http2"));
    var NodeHttp2ConnectionPool = class {
      static {
        __name(this, "NodeHttp2ConnectionPool");
      }
      constructor(sessions) {
        this.sessions = [];
        this.sessions = sessions ?? [];
      }
      static {
        __name2(this, "NodeHttp2ConnectionPool");
      }
      poll() {
        if (this.sessions.length > 0) {
          return this.sessions.shift();
        }
      }
      offerLast(session) {
        this.sessions.push(session);
      }
      contains(session) {
        return this.sessions.includes(session);
      }
      remove(session) {
        this.sessions = this.sessions.filter((s3) => s3 !== session);
      }
      [Symbol.iterator]() {
        return this.sessions[Symbol.iterator]();
      }
      destroy(connection) {
        for (const session of this.sessions) {
          if (session === connection) {
            if (!session.destroyed) {
              session.destroy();
            }
          }
        }
      }
    };
    var NodeHttp2ConnectionManager = class {
      static {
        __name(this, "NodeHttp2ConnectionManager");
      }
      constructor(config) {
        this.sessionCache = /* @__PURE__ */ new Map();
        this.config = config;
        if (this.config.maxConcurrency && this.config.maxConcurrency <= 0) {
          throw new RangeError("maxConcurrency must be greater than zero.");
        }
      }
      static {
        __name2(this, "NodeHttp2ConnectionManager");
      }
      lease(requestContext, connectionConfiguration) {
        const url = this.getUrlString(requestContext);
        const existingPool = this.sessionCache.get(url);
        if (existingPool) {
          const existingSession = existingPool.poll();
          if (existingSession && !this.config.disableConcurrency) {
            return existingSession;
          }
        }
        const session = import_http2.default.connect(url);
        if (this.config.maxConcurrency) {
          session.settings({ maxConcurrentStreams: this.config.maxConcurrency }, (err) => {
            if (err) {
              throw new Error(
                "Fail to set maxConcurrentStreams to " + this.config.maxConcurrency + "when creating new session for " + requestContext.destination.toString()
              );
            }
          });
        }
        session.unref();
        const destroySessionCb = __name2(() => {
          session.destroy();
          this.deleteSession(url, session);
        }, "destroySessionCb");
        session.on("goaway", destroySessionCb);
        session.on("error", destroySessionCb);
        session.on("frameError", destroySessionCb);
        session.on("close", () => this.deleteSession(url, session));
        if (connectionConfiguration.requestTimeout) {
          session.setTimeout(connectionConfiguration.requestTimeout, destroySessionCb);
        }
        const connectionPool = this.sessionCache.get(url) || new NodeHttp2ConnectionPool();
        connectionPool.offerLast(session);
        this.sessionCache.set(url, connectionPool);
        return session;
      }
      /**
       * Delete a session from the connection pool.
       * @param authority The authority of the session to delete.
       * @param session The session to delete.
       */
      deleteSession(authority, session) {
        const existingConnectionPool = this.sessionCache.get(authority);
        if (!existingConnectionPool) {
          return;
        }
        if (!existingConnectionPool.contains(session)) {
          return;
        }
        existingConnectionPool.remove(session);
        this.sessionCache.set(authority, existingConnectionPool);
      }
      release(requestContext, session) {
        const cacheKey = this.getUrlString(requestContext);
        this.sessionCache.get(cacheKey)?.offerLast(session);
      }
      destroy() {
        for (const [key, connectionPool] of this.sessionCache) {
          for (const session of connectionPool) {
            if (!session.destroyed) {
              session.destroy();
            }
            connectionPool.remove(session);
          }
          this.sessionCache.delete(key);
        }
      }
      setMaxConcurrentStreams(maxConcurrentStreams) {
        if (maxConcurrentStreams && maxConcurrentStreams <= 0) {
          throw new RangeError("maxConcurrentStreams must be greater than zero.");
        }
        this.config.maxConcurrency = maxConcurrentStreams;
      }
      setDisableConcurrentStreams(disableConcurrentStreams) {
        this.config.disableConcurrency = disableConcurrentStreams;
      }
      getUrlString(request) {
        return request.destination.toString();
      }
    };
    var NodeHttp2Handler = class _NodeHttp2Handler {
      static {
        __name(this, "_NodeHttp2Handler");
      }
      constructor(options) {
        this.metadata = { handlerProtocol: "h2" };
        this.connectionManager = new NodeHttp2ConnectionManager({});
        this.configProvider = new Promise((resolve, reject) => {
          if (typeof options === "function") {
            options().then((opts) => {
              resolve(opts || {});
            }).catch(reject);
          } else {
            resolve(options || {});
          }
        });
      }
      static {
        __name2(this, "NodeHttp2Handler");
      }
      /**
       * @returns the input if it is an HttpHandler of any class,
       * or instantiates a new instance of this handler.
       */
      static create(instanceOrOptions) {
        if (typeof instanceOrOptions?.handle === "function") {
          return instanceOrOptions;
        }
        return new _NodeHttp2Handler(instanceOrOptions);
      }
      destroy() {
        this.connectionManager.destroy();
      }
      async handle(request, { abortSignal } = {}) {
        if (!this.config) {
          this.config = await this.configProvider;
          this.connectionManager.setDisableConcurrentStreams(this.config.disableConcurrentStreams || false);
          if (this.config.maxConcurrentStreams) {
            this.connectionManager.setMaxConcurrentStreams(this.config.maxConcurrentStreams);
          }
        }
        const { requestTimeout, disableConcurrentStreams } = this.config;
        return new Promise((_resolve, _reject) => {
          let fulfilled = false;
          let writeRequestBodyPromise = void 0;
          const resolve = __name2(async (arg) => {
            await writeRequestBodyPromise;
            _resolve(arg);
          }, "resolve");
          const reject = __name2(async (arg) => {
            await writeRequestBodyPromise;
            _reject(arg);
          }, "reject");
          if (abortSignal?.aborted) {
            fulfilled = true;
            const abortError = new Error("Request aborted");
            abortError.name = "AbortError";
            reject(abortError);
            return;
          }
          const { hostname, method, port, protocol, query } = request;
          let auth = "";
          if (request.username != null || request.password != null) {
            const username = request.username ?? "";
            const password = request.password ?? "";
            auth = `${username}:${password}@`;
          }
          const authority = `${protocol}//${auth}${hostname}${port ? `:${port}` : ""}`;
          const requestContext = { destination: new URL(authority) };
          const session = this.connectionManager.lease(requestContext, {
            requestTimeout: this.config?.sessionTimeout,
            disableConcurrentStreams: disableConcurrentStreams || false
          });
          const rejectWithDestroy = __name2((err) => {
            if (disableConcurrentStreams) {
              this.destroySession(session);
            }
            fulfilled = true;
            reject(err);
          }, "rejectWithDestroy");
          const queryString = (0, import_querystring_builder.buildQueryString)(query || {});
          let path = request.path;
          if (queryString) {
            path += `?${queryString}`;
          }
          if (request.fragment) {
            path += `#${request.fragment}`;
          }
          const req = session.request({
            ...request.headers,
            [import_http22.constants.HTTP2_HEADER_PATH]: path,
            [import_http22.constants.HTTP2_HEADER_METHOD]: method
          });
          session.ref();
          req.on("response", (headers) => {
            const httpResponse = new import_protocol_http15.HttpResponse({
              statusCode: headers[":status"] || -1,
              headers: getTransformedHeaders(headers),
              body: req
            });
            fulfilled = true;
            resolve({ response: httpResponse });
            if (disableConcurrentStreams) {
              session.close();
              this.connectionManager.deleteSession(authority, session);
            }
          });
          if (requestTimeout) {
            req.setTimeout(requestTimeout, () => {
              req.close();
              const timeoutError = new Error(`Stream timed out because of no activity for ${requestTimeout} ms`);
              timeoutError.name = "TimeoutError";
              rejectWithDestroy(timeoutError);
            });
          }
          if (abortSignal) {
            const onAbort = __name2(() => {
              req.close();
              const abortError = new Error("Request aborted");
              abortError.name = "AbortError";
              rejectWithDestroy(abortError);
            }, "onAbort");
            if (typeof abortSignal.addEventListener === "function") {
              const signal = abortSignal;
              signal.addEventListener("abort", onAbort, { once: true });
              req.once("close", () => signal.removeEventListener("abort", onAbort));
            } else {
              abortSignal.onabort = onAbort;
            }
          }
          req.on("frameError", (type, code, id) => {
            rejectWithDestroy(new Error(`Frame type id ${type} in stream id ${id} has failed with code ${code}.`));
          });
          req.on("error", rejectWithDestroy);
          req.on("aborted", () => {
            rejectWithDestroy(
              new Error(`HTTP/2 stream is abnormally aborted in mid-communication with result code ${req.rstCode}.`)
            );
          });
          req.on("close", () => {
            session.unref();
            if (disableConcurrentStreams) {
              session.destroy();
            }
            if (!fulfilled) {
              rejectWithDestroy(new Error("Unexpected error: http2 request did not get a response"));
            }
          });
          writeRequestBodyPromise = writeRequestBody(req, request, requestTimeout);
        });
      }
      updateHttpClientConfig(key, value) {
        this.config = void 0;
        this.configProvider = this.configProvider.then((config) => {
          return {
            ...config,
            [key]: value
          };
        });
      }
      httpHandlerConfigs() {
        return this.config ?? {};
      }
      /**
       * Destroys a session.
       * @param session - the session to destroy.
       */
      destroySession(session) {
        if (!session.destroyed) {
          session.destroy();
        }
      }
    };
    var Collector = class extends import_stream.Writable {
      static {
        __name(this, "Collector");
      }
      constructor() {
        super(...arguments);
        this.bufferedBytes = [];
      }
      static {
        __name2(this, "Collector");
      }
      _write(chunk, encoding, callback) {
        this.bufferedBytes.push(chunk);
        callback();
      }
    };
    var streamCollector3 = __name2((stream) => {
      if (isReadableStreamInstance(stream)) {
        return collectReadableStream(stream);
      }
      return new Promise((resolve, reject) => {
        const collector = new Collector();
        stream.pipe(collector);
        stream.on("error", (err) => {
          collector.end();
          reject(err);
        });
        collector.on("error", reject);
        collector.on("finish", function() {
          const bytes = new Uint8Array(Buffer.concat(this.bufferedBytes));
          resolve(bytes);
        });
      });
    }, "streamCollector");
    var isReadableStreamInstance = __name2((stream) => typeof ReadableStream === "function" && stream instanceof ReadableStream, "isReadableStreamInstance");
    async function collectReadableStream(stream) {
      const chunks = [];
      const reader = stream.getReader();
      let isDone = false;
      let length = 0;
      while (!isDone) {
        const { done, value } = await reader.read();
        if (value) {
          chunks.push(value);
          length += value.length;
        }
        isDone = done;
      }
      const collected = new Uint8Array(length);
      let offset = 0;
      for (const chunk of chunks) {
        collected.set(chunk, offset);
        offset += chunk.length;
      }
      return collected;
    }
    __name(collectReadableStream, "collectReadableStream");
    __name2(collectReadableStream, "collectReadableStream");
  }
});

// ../../node_modules/.pnpm/@smithy+fetch-http-handler@5.0.4/node_modules/@smithy/fetch-http-handler/dist-cjs/index.js
var require_dist_cjs14 = __commonJS({
  "../../node_modules/.pnpm/@smithy+fetch-http-handler@5.0.4/node_modules/@smithy/fetch-http-handler/dist-cjs/index.js"(exports2, module2) {
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __name2 = /* @__PURE__ */ __name((target, value) => __defProp2(target, "name", { value, configurable: true }), "__name");
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: /* @__PURE__ */ __name(() => from[key], "get"), enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var src_exports = {};
    __export2(src_exports, {
      FetchHttpHandler: /* @__PURE__ */ __name(() => FetchHttpHandler, "FetchHttpHandler"),
      keepAliveSupport: /* @__PURE__ */ __name(() => keepAliveSupport, "keepAliveSupport"),
      streamCollector: /* @__PURE__ */ __name(() => streamCollector3, "streamCollector")
    });
    module2.exports = __toCommonJS2(src_exports);
    var import_protocol_http15 = require_dist_cjs2();
    var import_querystring_builder = require_dist_cjs12();
    function createRequest(url, requestOptions) {
      return new Request(url, requestOptions);
    }
    __name(createRequest, "createRequest");
    __name2(createRequest, "createRequest");
    function requestTimeout(timeoutInMs = 0) {
      return new Promise((resolve, reject) => {
        if (timeoutInMs) {
          setTimeout(() => {
            const timeoutError = new Error(`Request did not complete within ${timeoutInMs} ms`);
            timeoutError.name = "TimeoutError";
            reject(timeoutError);
          }, timeoutInMs);
        }
      });
    }
    __name(requestTimeout, "requestTimeout");
    __name2(requestTimeout, "requestTimeout");
    var keepAliveSupport = {
      supported: void 0
    };
    var FetchHttpHandler = class _FetchHttpHandler {
      static {
        __name(this, "_FetchHttpHandler");
      }
      static {
        __name2(this, "FetchHttpHandler");
      }
      /**
       * @returns the input if it is an HttpHandler of any class,
       * or instantiates a new instance of this handler.
       */
      static create(instanceOrOptions) {
        if (typeof instanceOrOptions?.handle === "function") {
          return instanceOrOptions;
        }
        return new _FetchHttpHandler(instanceOrOptions);
      }
      constructor(options) {
        if (typeof options === "function") {
          this.configProvider = options().then((opts) => opts || {});
        } else {
          this.config = options ?? {};
          this.configProvider = Promise.resolve(this.config);
        }
        if (keepAliveSupport.supported === void 0) {
          keepAliveSupport.supported = Boolean(
            typeof Request !== "undefined" && "keepalive" in createRequest("https://[::1]")
          );
        }
      }
      destroy() {
      }
      async handle(request, { abortSignal } = {}) {
        if (!this.config) {
          this.config = await this.configProvider;
        }
        const requestTimeoutInMs = this.config.requestTimeout;
        const keepAlive = this.config.keepAlive === true;
        const credentials = this.config.credentials;
        if (abortSignal?.aborted) {
          const abortError = new Error("Request aborted");
          abortError.name = "AbortError";
          return Promise.reject(abortError);
        }
        let path = request.path;
        const queryString = (0, import_querystring_builder.buildQueryString)(request.query || {});
        if (queryString) {
          path += `?${queryString}`;
        }
        if (request.fragment) {
          path += `#${request.fragment}`;
        }
        let auth = "";
        if (request.username != null || request.password != null) {
          const username = request.username ?? "";
          const password = request.password ?? "";
          auth = `${username}:${password}@`;
        }
        const { port, method } = request;
        const url = `${request.protocol}//${auth}${request.hostname}${port ? `:${port}` : ""}${path}`;
        const body = method === "GET" || method === "HEAD" ? void 0 : request.body;
        const requestOptions = {
          body,
          headers: new Headers(request.headers),
          method,
          credentials
        };
        if (this.config?.cache) {
          requestOptions.cache = this.config.cache;
        }
        if (body) {
          requestOptions.duplex = "half";
        }
        if (typeof AbortController !== "undefined") {
          requestOptions.signal = abortSignal;
        }
        if (keepAliveSupport.supported) {
          requestOptions.keepalive = keepAlive;
        }
        if (typeof this.config.requestInit === "function") {
          Object.assign(requestOptions, this.config.requestInit(request));
        }
        let removeSignalEventListener = __name2(() => {
        }, "removeSignalEventListener");
        const fetchRequest = createRequest(url, requestOptions);
        const raceOfPromises = [
          fetch(fetchRequest).then((response) => {
            const fetchHeaders = response.headers;
            const transformedHeaders = {};
            for (const pair of fetchHeaders.entries()) {
              transformedHeaders[pair[0]] = pair[1];
            }
            const hasReadableStream = response.body != void 0;
            if (!hasReadableStream) {
              return response.blob().then((body2) => ({
                response: new import_protocol_http15.HttpResponse({
                  headers: transformedHeaders,
                  reason: response.statusText,
                  statusCode: response.status,
                  body: body2
                })
              }));
            }
            return {
              response: new import_protocol_http15.HttpResponse({
                headers: transformedHeaders,
                reason: response.statusText,
                statusCode: response.status,
                body: response.body
              })
            };
          }),
          requestTimeout(requestTimeoutInMs)
        ];
        if (abortSignal) {
          raceOfPromises.push(
            new Promise((resolve, reject) => {
              const onAbort = __name2(() => {
                const abortError = new Error("Request aborted");
                abortError.name = "AbortError";
                reject(abortError);
              }, "onAbort");
              if (typeof abortSignal.addEventListener === "function") {
                const signal = abortSignal;
                signal.addEventListener("abort", onAbort, { once: true });
                removeSignalEventListener = __name2(() => signal.removeEventListener("abort", onAbort), "removeSignalEventListener");
              } else {
                abortSignal.onabort = onAbort;
              }
            })
          );
        }
        return Promise.race(raceOfPromises).finally(removeSignalEventListener);
      }
      updateHttpClientConfig(key, value) {
        this.config = void 0;
        this.configProvider = this.configProvider.then((config) => {
          config[key] = value;
          return config;
        });
      }
      httpHandlerConfigs() {
        return this.config ?? {};
      }
    };
    var import_util_base645 = require_dist_cjs10();
    var streamCollector3 = __name2(async (stream) => {
      if (typeof Blob === "function" && stream instanceof Blob || stream.constructor?.name === "Blob") {
        if (Blob.prototype.arrayBuffer !== void 0) {
          return new Uint8Array(await stream.arrayBuffer());
        }
        return collectBlob(stream);
      }
      return collectStream(stream);
    }, "streamCollector");
    async function collectBlob(blob) {
      const base64 = await readToBase64(blob);
      const arrayBuffer = (0, import_util_base645.fromBase64)(base64);
      return new Uint8Array(arrayBuffer);
    }
    __name(collectBlob, "collectBlob");
    __name2(collectBlob, "collectBlob");
    async function collectStream(stream) {
      const chunks = [];
      const reader = stream.getReader();
      let isDone = false;
      let length = 0;
      while (!isDone) {
        const { done, value } = await reader.read();
        if (value) {
          chunks.push(value);
          length += value.length;
        }
        isDone = done;
      }
      const collected = new Uint8Array(length);
      let offset = 0;
      for (const chunk of chunks) {
        collected.set(chunk, offset);
        offset += chunk.length;
      }
      return collected;
    }
    __name(collectStream, "collectStream");
    __name2(collectStream, "collectStream");
    function readToBase64(blob) {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onloadend = () => {
          if (reader.readyState !== 2) {
            return reject(new Error("Reader aborted too early"));
          }
          const result = reader.result ?? "";
          const commaIndex = result.indexOf(",");
          const dataOffset = commaIndex > -1 ? commaIndex + 1 : result.length;
          resolve(result.substring(dataOffset));
        };
        reader.onabort = () => reject(new Error("Read aborted"));
        reader.onerror = () => reject(reader.error);
        reader.readAsDataURL(blob);
      });
    }
    __name(readToBase64, "readToBase64");
    __name2(readToBase64, "readToBase64");
  }
});

// ../../node_modules/.pnpm/@smithy+util-hex-encoding@4.0.0/node_modules/@smithy/util-hex-encoding/dist-cjs/index.js
var require_dist_cjs15 = __commonJS({
  "../../node_modules/.pnpm/@smithy+util-hex-encoding@4.0.0/node_modules/@smithy/util-hex-encoding/dist-cjs/index.js"(exports2, module2) {
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __name2 = /* @__PURE__ */ __name((target, value) => __defProp2(target, "name", { value, configurable: true }), "__name");
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: /* @__PURE__ */ __name(() => from[key], "get"), enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var src_exports = {};
    __export2(src_exports, {
      fromHex: /* @__PURE__ */ __name(() => fromHex, "fromHex"),
      toHex: /* @__PURE__ */ __name(() => toHex, "toHex")
    });
    module2.exports = __toCommonJS2(src_exports);
    var SHORT_TO_HEX = {};
    var HEX_TO_SHORT = {};
    for (let i3 = 0; i3 < 256; i3++) {
      let encodedByte = i3.toString(16).toLowerCase();
      if (encodedByte.length === 1) {
        encodedByte = `0${encodedByte}`;
      }
      SHORT_TO_HEX[i3] = encodedByte;
      HEX_TO_SHORT[encodedByte] = i3;
    }
    function fromHex(encoded) {
      if (encoded.length % 2 !== 0) {
        throw new Error("Hex encoded strings must have an even number length");
      }
      const out = new Uint8Array(encoded.length / 2);
      for (let i3 = 0; i3 < encoded.length; i3 += 2) {
        const encodedByte = encoded.slice(i3, i3 + 2).toLowerCase();
        if (encodedByte in HEX_TO_SHORT) {
          out[i3 / 2] = HEX_TO_SHORT[encodedByte];
        } else {
          throw new Error(`Cannot decode unrecognized sequence ${encodedByte} as hexadecimal`);
        }
      }
      return out;
    }
    __name(fromHex, "fromHex");
    __name2(fromHex, "fromHex");
    function toHex(bytes) {
      let out = "";
      for (let i3 = 0; i3 < bytes.byteLength; i3++) {
        out += SHORT_TO_HEX[bytes[i3]];
      }
      return out;
    }
    __name(toHex, "toHex");
    __name2(toHex, "toHex");
  }
});

// ../../node_modules/.pnpm/@smithy+util-stream@4.2.2/node_modules/@smithy/util-stream/dist-cjs/sdk-stream-mixin.browser.js
var require_sdk_stream_mixin_browser = __commonJS({
  "../../node_modules/.pnpm/@smithy+util-stream@4.2.2/node_modules/@smithy/util-stream/dist-cjs/sdk-stream-mixin.browser.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.sdkStreamMixin = void 0;
    var fetch_http_handler_1 = require_dist_cjs14();
    var util_base64_1 = require_dist_cjs10();
    var util_hex_encoding_1 = require_dist_cjs15();
    var util_utf8_1 = require_dist_cjs9();
    var stream_type_check_1 = require_stream_type_check();
    var ERR_MSG_STREAM_HAS_BEEN_TRANSFORMED = "The stream has already been transformed.";
    var sdkStreamMixin3 = /* @__PURE__ */ __name((stream) => {
      var _a2, _b;
      if (!isBlobInstance(stream) && !(0, stream_type_check_1.isReadableStream)(stream)) {
        const name = ((_b = (_a2 = stream === null || stream === void 0 ? void 0 : stream.__proto__) === null || _a2 === void 0 ? void 0 : _a2.constructor) === null || _b === void 0 ? void 0 : _b.name) || stream;
        throw new Error(`Unexpected stream implementation, expect Blob or ReadableStream, got ${name}`);
      }
      let transformed = false;
      const transformToByteArray = /* @__PURE__ */ __name(async () => {
        if (transformed) {
          throw new Error(ERR_MSG_STREAM_HAS_BEEN_TRANSFORMED);
        }
        transformed = true;
        return await (0, fetch_http_handler_1.streamCollector)(stream);
      }, "transformToByteArray");
      const blobToWebStream = /* @__PURE__ */ __name((blob) => {
        if (typeof blob.stream !== "function") {
          throw new Error("Cannot transform payload Blob to web stream. Please make sure the Blob.stream() is polyfilled.\nIf you are using React Native, this API is not yet supported, see: https://react-native.canny.io/feature-requests/p/fetch-streaming-body");
        }
        return blob.stream();
      }, "blobToWebStream");
      return Object.assign(stream, {
        transformToByteArray,
        transformToString: /* @__PURE__ */ __name(async (encoding) => {
          const buf = await transformToByteArray();
          if (encoding === "base64") {
            return (0, util_base64_1.toBase64)(buf);
          } else if (encoding === "hex") {
            return (0, util_hex_encoding_1.toHex)(buf);
          } else if (encoding === void 0 || encoding === "utf8" || encoding === "utf-8") {
            return (0, util_utf8_1.toUtf8)(buf);
          } else if (typeof TextDecoder === "function") {
            return new TextDecoder(encoding).decode(buf);
          } else {
            throw new Error("TextDecoder is not available, please make sure polyfill is provided.");
          }
        }, "transformToString"),
        transformToWebStream: /* @__PURE__ */ __name(() => {
          if (transformed) {
            throw new Error(ERR_MSG_STREAM_HAS_BEEN_TRANSFORMED);
          }
          transformed = true;
          if (isBlobInstance(stream)) {
            return blobToWebStream(stream);
          } else if ((0, stream_type_check_1.isReadableStream)(stream)) {
            return stream;
          } else {
            throw new Error(`Cannot transform payload to web stream, got ${stream}`);
          }
        }, "transformToWebStream")
      });
    }, "sdkStreamMixin");
    exports2.sdkStreamMixin = sdkStreamMixin3;
    var isBlobInstance = /* @__PURE__ */ __name((stream) => typeof Blob === "function" && stream instanceof Blob, "isBlobInstance");
  }
});

// ../../node_modules/.pnpm/@smithy+util-stream@4.2.2/node_modules/@smithy/util-stream/dist-cjs/sdk-stream-mixin.js
var require_sdk_stream_mixin = __commonJS({
  "../../node_modules/.pnpm/@smithy+util-stream@4.2.2/node_modules/@smithy/util-stream/dist-cjs/sdk-stream-mixin.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.sdkStreamMixin = void 0;
    var node_http_handler_1 = require_dist_cjs13();
    var util_buffer_from_1 = require_dist_cjs8();
    var stream_1 = require("stream");
    var sdk_stream_mixin_browser_1 = require_sdk_stream_mixin_browser();
    var ERR_MSG_STREAM_HAS_BEEN_TRANSFORMED = "The stream has already been transformed.";
    var sdkStreamMixin3 = /* @__PURE__ */ __name((stream) => {
      var _a2, _b;
      if (!(stream instanceof stream_1.Readable)) {
        try {
          return (0, sdk_stream_mixin_browser_1.sdkStreamMixin)(stream);
        } catch (e3) {
          const name = ((_b = (_a2 = stream === null || stream === void 0 ? void 0 : stream.__proto__) === null || _a2 === void 0 ? void 0 : _a2.constructor) === null || _b === void 0 ? void 0 : _b.name) || stream;
          throw new Error(`Unexpected stream implementation, expect Stream.Readable instance, got ${name}`);
        }
      }
      let transformed = false;
      const transformToByteArray = /* @__PURE__ */ __name(async () => {
        if (transformed) {
          throw new Error(ERR_MSG_STREAM_HAS_BEEN_TRANSFORMED);
        }
        transformed = true;
        return await (0, node_http_handler_1.streamCollector)(stream);
      }, "transformToByteArray");
      return Object.assign(stream, {
        transformToByteArray,
        transformToString: /* @__PURE__ */ __name(async (encoding) => {
          const buf = await transformToByteArray();
          if (encoding === void 0 || Buffer.isEncoding(encoding)) {
            return (0, util_buffer_from_1.fromArrayBuffer)(buf.buffer, buf.byteOffset, buf.byteLength).toString(encoding);
          } else {
            const decoder = new TextDecoder(encoding);
            return decoder.decode(buf);
          }
        }, "transformToString"),
        transformToWebStream: /* @__PURE__ */ __name(() => {
          if (transformed) {
            throw new Error(ERR_MSG_STREAM_HAS_BEEN_TRANSFORMED);
          }
          if (stream.readableFlowing !== null) {
            throw new Error("The stream has been consumed by other callbacks.");
          }
          if (typeof stream_1.Readable.toWeb !== "function") {
            throw new Error("Readable.toWeb() is not supported. Please ensure a polyfill is available.");
          }
          transformed = true;
          return stream_1.Readable.toWeb(stream);
        }, "transformToWebStream")
      });
    }, "sdkStreamMixin");
    exports2.sdkStreamMixin = sdkStreamMixin3;
  }
});

// ../../node_modules/.pnpm/@smithy+util-stream@4.2.2/node_modules/@smithy/util-stream/dist-cjs/splitStream.browser.js
var require_splitStream_browser = __commonJS({
  "../../node_modules/.pnpm/@smithy+util-stream@4.2.2/node_modules/@smithy/util-stream/dist-cjs/splitStream.browser.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.splitStream = splitStream2;
    async function splitStream2(stream) {
      if (typeof stream.stream === "function") {
        stream = stream.stream();
      }
      const readableStream = stream;
      return readableStream.tee();
    }
    __name(splitStream2, "splitStream");
  }
});

// ../../node_modules/.pnpm/@smithy+util-stream@4.2.2/node_modules/@smithy/util-stream/dist-cjs/splitStream.js
var require_splitStream = __commonJS({
  "../../node_modules/.pnpm/@smithy+util-stream@4.2.2/node_modules/@smithy/util-stream/dist-cjs/splitStream.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.splitStream = splitStream2;
    var stream_1 = require("stream");
    var splitStream_browser_1 = require_splitStream_browser();
    var stream_type_check_1 = require_stream_type_check();
    async function splitStream2(stream) {
      if ((0, stream_type_check_1.isReadableStream)(stream) || (0, stream_type_check_1.isBlob)(stream)) {
        return (0, splitStream_browser_1.splitStream)(stream);
      }
      const stream1 = new stream_1.PassThrough();
      const stream2 = new stream_1.PassThrough();
      stream.pipe(stream1);
      stream.pipe(stream2);
      return [stream1, stream2];
    }
    __name(splitStream2, "splitStream");
  }
});

// ../../node_modules/.pnpm/@smithy+util-stream@4.2.2/node_modules/@smithy/util-stream/dist-cjs/index.js
var require_dist_cjs16 = __commonJS({
  "../../node_modules/.pnpm/@smithy+util-stream@4.2.2/node_modules/@smithy/util-stream/dist-cjs/index.js"(exports2, module2) {
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __name2 = /* @__PURE__ */ __name((target, value) => __defProp2(target, "name", { value, configurable: true }), "__name");
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: /* @__PURE__ */ __name(() => from[key], "get"), enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __reExport = /* @__PURE__ */ __name((target, mod, secondTarget) => (__copyProps2(target, mod, "default"), secondTarget && __copyProps2(secondTarget, mod, "default")), "__reExport");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var src_exports = {};
    __export2(src_exports, {
      Uint8ArrayBlobAdapter: /* @__PURE__ */ __name(() => Uint8ArrayBlobAdapter2, "Uint8ArrayBlobAdapter")
    });
    module2.exports = __toCommonJS2(src_exports);
    var import_util_base645 = require_dist_cjs10();
    var import_util_utf85 = require_dist_cjs9();
    function transformToString(payload, encoding = "utf-8") {
      if (encoding === "base64") {
        return (0, import_util_base645.toBase64)(payload);
      }
      return (0, import_util_utf85.toUtf8)(payload);
    }
    __name(transformToString, "transformToString");
    __name2(transformToString, "transformToString");
    function transformFromString(str, encoding) {
      if (encoding === "base64") {
        return Uint8ArrayBlobAdapter2.mutate((0, import_util_base645.fromBase64)(str));
      }
      return Uint8ArrayBlobAdapter2.mutate((0, import_util_utf85.fromUtf8)(str));
    }
    __name(transformFromString, "transformFromString");
    __name2(transformFromString, "transformFromString");
    var Uint8ArrayBlobAdapter2 = class _Uint8ArrayBlobAdapter extends Uint8Array {
      static {
        __name(this, "_Uint8ArrayBlobAdapter");
      }
      static {
        __name2(this, "Uint8ArrayBlobAdapter");
      }
      /**
       * @param source - such as a string or Stream.
       * @returns a new Uint8ArrayBlobAdapter extending Uint8Array.
       */
      static fromString(source, encoding = "utf-8") {
        switch (typeof source) {
          case "string":
            return transformFromString(source, encoding);
          default:
            throw new Error(`Unsupported conversion from ${typeof source} to Uint8ArrayBlobAdapter.`);
        }
      }
      /**
       * @param source - Uint8Array to be mutated.
       * @returns the same Uint8Array but with prototype switched to Uint8ArrayBlobAdapter.
       */
      static mutate(source) {
        Object.setPrototypeOf(source, _Uint8ArrayBlobAdapter.prototype);
        return source;
      }
      /**
       * @param encoding - default 'utf-8'.
       * @returns the blob as string.
       */
      transformToString(encoding = "utf-8") {
        return transformToString(this, encoding);
      }
    };
    __reExport(src_exports, require_ChecksumStream(), module2.exports);
    __reExport(src_exports, require_createChecksumStream(), module2.exports);
    __reExport(src_exports, require_createBufferedReadable(), module2.exports);
    __reExport(src_exports, require_getAwsChunkedEncodingStream(), module2.exports);
    __reExport(src_exports, require_headStream(), module2.exports);
    __reExport(src_exports, require_sdk_stream_mixin(), module2.exports);
    __reExport(src_exports, require_splitStream(), module2.exports);
    __reExport(src_exports, require_stream_type_check(), module2.exports);
  }
});

// ../../node_modules/.pnpm/@smithy+core@3.5.1/node_modules/@smithy/core/dist-es/submodules/protocols/collect-stream-body.js
var import_util_stream, collectBody2;
var init_collect_stream_body = __esm({
  "../../node_modules/.pnpm/@smithy+core@3.5.1/node_modules/@smithy/core/dist-es/submodules/protocols/collect-stream-body.js"() {
    import_util_stream = __toESM(require_dist_cjs16());
    collectBody2 = /* @__PURE__ */ __name(async (streamBody = new Uint8Array(), context) => {
      if (streamBody instanceof Uint8Array) {
        return import_util_stream.Uint8ArrayBlobAdapter.mutate(streamBody);
      }
      if (!streamBody) {
        return import_util_stream.Uint8ArrayBlobAdapter.mutate(new Uint8Array());
      }
      const fromContext = context.streamCollector(streamBody);
      return import_util_stream.Uint8ArrayBlobAdapter.mutate(await fromContext);
    }, "collectBody");
  }
});

// ../../node_modules/.pnpm/@smithy+core@3.5.1/node_modules/@smithy/core/dist-es/submodules/protocols/extended-encode-uri-component.js
function extendedEncodeURIComponent2(str) {
  return encodeURIComponent(str).replace(/[!'()*]/g, function(c3) {
    return "%" + c3.charCodeAt(0).toString(16).toUpperCase();
  });
}
var init_extended_encode_uri_component = __esm({
  "../../node_modules/.pnpm/@smithy+core@3.5.1/node_modules/@smithy/core/dist-es/submodules/protocols/extended-encode-uri-component.js"() {
    __name(extendedEncodeURIComponent2, "extendedEncodeURIComponent");
  }
});

// ../../node_modules/.pnpm/@smithy+core@3.5.1/node_modules/@smithy/core/dist-es/submodules/schema/deref.js
var deref;
var init_deref = __esm({
  "../../node_modules/.pnpm/@smithy+core@3.5.1/node_modules/@smithy/core/dist-es/submodules/schema/deref.js"() {
    deref = /* @__PURE__ */ __name((schemaRef) => {
      if (typeof schemaRef === "function") {
        return schemaRef();
      }
      return schemaRef;
    }, "deref");
  }
});

// ../../node_modules/.pnpm/@smithy+util-middleware@4.0.4/node_modules/@smithy/util-middleware/dist-cjs/index.js
var require_dist_cjs17 = __commonJS({
  "../../node_modules/.pnpm/@smithy+util-middleware@4.0.4/node_modules/@smithy/util-middleware/dist-cjs/index.js"(exports2, module2) {
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __name2 = /* @__PURE__ */ __name((target, value) => __defProp2(target, "name", { value, configurable: true }), "__name");
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: /* @__PURE__ */ __name(() => from[key], "get"), enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var src_exports = {};
    __export2(src_exports, {
      getSmithyContext: /* @__PURE__ */ __name(() => getSmithyContext8, "getSmithyContext"),
      normalizeProvider: /* @__PURE__ */ __name(() => normalizeProvider4, "normalizeProvider")
    });
    module2.exports = __toCommonJS2(src_exports);
    var import_types5 = require_dist_cjs();
    var getSmithyContext8 = __name2((context) => context[import_types5.SMITHY_CONTEXT_KEY] || (context[import_types5.SMITHY_CONTEXT_KEY] = {}), "getSmithyContext");
    var normalizeProvider4 = __name2((input) => {
      if (typeof input === "function")
        return input;
      const promisified = Promise.resolve(input);
      return () => promisified;
    }, "normalizeProvider");
  }
});

// ../../node_modules/.pnpm/@smithy+core@3.5.1/node_modules/@smithy/core/dist-es/submodules/schema/middleware/schemaDeserializationMiddleware.js
var import_protocol_http, import_util_middleware, schemaDeserializationMiddleware, findHeader;
var init_schemaDeserializationMiddleware = __esm({
  "../../node_modules/.pnpm/@smithy+core@3.5.1/node_modules/@smithy/core/dist-es/submodules/schema/middleware/schemaDeserializationMiddleware.js"() {
    import_protocol_http = __toESM(require_dist_cjs2());
    import_util_middleware = __toESM(require_dist_cjs17());
    schemaDeserializationMiddleware = /* @__PURE__ */ __name((config) => (next, context) => async (args) => {
      const { response } = await next(args);
      const { operationSchema } = (0, import_util_middleware.getSmithyContext)(context);
      try {
        const parsed = await config.protocol.deserializeResponse(operationSchema, {
          ...config,
          ...context
        }, response);
        return {
          response,
          output: parsed
        };
      } catch (error2) {
        Object.defineProperty(error2, "$response", {
          value: response
        });
        if (!("$metadata" in error2)) {
          const hint = `Deserialization error: to see the raw response, inspect the hidden field {error}.$response on this object.`;
          try {
            error2.message += "\n  " + hint;
          } catch (e3) {
            if (!context.logger || context.logger?.constructor?.name === "NoOpLogger") {
              console.warn(hint);
            } else {
              context.logger?.warn?.(hint);
            }
          }
          if (typeof error2.$responseBodyText !== "undefined") {
            if (error2.$response) {
              error2.$response.body = error2.$responseBodyText;
            }
          }
          try {
            if (import_protocol_http.HttpResponse.isInstance(response)) {
              const { headers = {} } = response;
              const headerEntries = Object.entries(headers);
              error2.$metadata = {
                httpStatusCode: response.statusCode,
                requestId: findHeader(/^x-[\w-]+-request-?id$/, headerEntries),
                extendedRequestId: findHeader(/^x-[\w-]+-id-2$/, headerEntries),
                cfId: findHeader(/^x-[\w-]+-cf-id$/, headerEntries)
              };
            }
          } catch (e3) {
          }
        }
        throw error2;
      }
    }, "schemaDeserializationMiddleware");
    findHeader = /* @__PURE__ */ __name((pattern, headers) => {
      return (headers.find(([k3]) => {
        return k3.match(pattern);
      }) || [void 0, void 0])[1];
    }, "findHeader");
  }
});

// ../../node_modules/.pnpm/@smithy+core@3.5.1/node_modules/@smithy/core/dist-es/submodules/schema/middleware/schemaSerializationMiddleware.js
var import_util_middleware2, schemaSerializationMiddleware;
var init_schemaSerializationMiddleware = __esm({
  "../../node_modules/.pnpm/@smithy+core@3.5.1/node_modules/@smithy/core/dist-es/submodules/schema/middleware/schemaSerializationMiddleware.js"() {
    import_util_middleware2 = __toESM(require_dist_cjs17());
    schemaSerializationMiddleware = /* @__PURE__ */ __name((config) => (next, context) => async (args) => {
      const { operationSchema } = (0, import_util_middleware2.getSmithyContext)(context);
      const endpoint = context.endpointV2?.url && config.urlParser ? async () => config.urlParser(context.endpointV2.url) : config.endpoint;
      const request = await config.protocol.serializeRequest(operationSchema, args.input, {
        ...config,
        ...context,
        endpoint
      });
      return next({
        ...args,
        request
      });
    }, "schemaSerializationMiddleware");
  }
});

// ../../node_modules/.pnpm/@smithy+core@3.5.1/node_modules/@smithy/core/dist-es/submodules/schema/middleware/getSchemaSerdePlugin.js
function getSchemaSerdePlugin(config) {
  return {
    applyToStack: /* @__PURE__ */ __name((commandStack) => {
      commandStack.add(schemaSerializationMiddleware(config), serializerMiddlewareOption);
      commandStack.add(schemaDeserializationMiddleware(config), deserializerMiddlewareOption);
      config.protocol.setSerdeContext(config);
    }, "applyToStack")
  };
}
var deserializerMiddlewareOption, serializerMiddlewareOption;
var init_getSchemaSerdePlugin = __esm({
  "../../node_modules/.pnpm/@smithy+core@3.5.1/node_modules/@smithy/core/dist-es/submodules/schema/middleware/getSchemaSerdePlugin.js"() {
    init_schemaDeserializationMiddleware();
    init_schemaSerializationMiddleware();
    deserializerMiddlewareOption = {
      name: "deserializerMiddleware",
      step: "deserialize",
      tags: ["DESERIALIZER"],
      override: true
    };
    serializerMiddlewareOption = {
      name: "serializerMiddleware",
      step: "serialize",
      tags: ["SERIALIZER"],
      override: true
    };
    __name(getSchemaSerdePlugin, "getSchemaSerdePlugin");
  }
});

// ../../node_modules/.pnpm/@smithy+core@3.5.1/node_modules/@smithy/core/dist-es/submodules/schema/TypeRegistry.js
var TypeRegistry;
var init_TypeRegistry = __esm({
  "../../node_modules/.pnpm/@smithy+core@3.5.1/node_modules/@smithy/core/dist-es/submodules/schema/TypeRegistry.js"() {
    TypeRegistry = class _TypeRegistry {
      static {
        __name(this, "TypeRegistry");
      }
      constructor(namespace, schemas = /* @__PURE__ */ new Map()) {
        this.namespace = namespace;
        this.schemas = schemas;
      }
      static for(namespace) {
        if (!_TypeRegistry.registries.has(namespace)) {
          _TypeRegistry.registries.set(namespace, new _TypeRegistry(namespace));
        }
        return _TypeRegistry.registries.get(namespace);
      }
      register(shapeId, schema) {
        const qualifiedName = this.normalizeShapeId(shapeId);
        const registry = _TypeRegistry.for(this.getNamespace(shapeId));
        registry.schemas.set(qualifiedName, schema);
      }
      getSchema(shapeId) {
        const id = this.normalizeShapeId(shapeId);
        if (!this.schemas.has(id)) {
          throw new Error(`@smithy/core/schema - schema not found for ${id}`);
        }
        return this.schemas.get(id);
      }
      getBaseException() {
        for (const [id, schema] of this.schemas.entries()) {
          if (id.startsWith("smithyts.client.synthetic.") && id.endsWith("ServiceException")) {
            return schema;
          }
        }
        return void 0;
      }
      find(predicate) {
        return [...this.schemas.values()].find(predicate);
      }
      destroy() {
        _TypeRegistry.registries.delete(this.namespace);
        this.schemas.clear();
      }
      normalizeShapeId(shapeId) {
        if (shapeId.includes("#")) {
          return shapeId;
        }
        return this.namespace + "#" + shapeId;
      }
      getNamespace(shapeId) {
        return this.normalizeShapeId(shapeId).split("#")[0];
      }
    };
    TypeRegistry.registries = /* @__PURE__ */ new Map();
  }
});

// ../../node_modules/.pnpm/@smithy+core@3.5.1/node_modules/@smithy/core/dist-es/submodules/schema/schemas/Schema.js
var Schema;
var init_Schema = __esm({
  "../../node_modules/.pnpm/@smithy+core@3.5.1/node_modules/@smithy/core/dist-es/submodules/schema/schemas/Schema.js"() {
    Schema = class {
      static {
        __name(this, "Schema");
      }
      constructor(name, traits) {
        this.name = name;
        this.traits = traits;
      }
    };
  }
});

// ../../node_modules/.pnpm/@smithy+core@3.5.1/node_modules/@smithy/core/dist-es/submodules/schema/schemas/ListSchema.js
function list(namespace, name, traits = {}, valueSchema) {
  const schema = new ListSchema(namespace + "#" + name, traits, typeof valueSchema === "function" ? valueSchema() : valueSchema);
  TypeRegistry.for(namespace).register(name, schema);
  return schema;
}
var ListSchema;
var init_ListSchema = __esm({
  "../../node_modules/.pnpm/@smithy+core@3.5.1/node_modules/@smithy/core/dist-es/submodules/schema/schemas/ListSchema.js"() {
    init_TypeRegistry();
    init_Schema();
    ListSchema = class extends Schema {
      static {
        __name(this, "ListSchema");
      }
      constructor(name, traits, valueSchema) {
        super(name, traits);
        this.name = name;
        this.traits = traits;
        this.valueSchema = valueSchema;
      }
    };
    __name(list, "list");
  }
});

// ../../node_modules/.pnpm/@smithy+core@3.5.1/node_modules/@smithy/core/dist-es/submodules/schema/schemas/MapSchema.js
function map(namespace, name, traits = {}, keySchema, valueSchema) {
  const schema = new MapSchema(namespace + "#" + name, traits, keySchema, typeof valueSchema === "function" ? valueSchema() : valueSchema);
  TypeRegistry.for(namespace).register(name, schema);
  return schema;
}
var MapSchema;
var init_MapSchema = __esm({
  "../../node_modules/.pnpm/@smithy+core@3.5.1/node_modules/@smithy/core/dist-es/submodules/schema/schemas/MapSchema.js"() {
    init_TypeRegistry();
    init_Schema();
    MapSchema = class extends Schema {
      static {
        __name(this, "MapSchema");
      }
      constructor(name, traits, keySchema, valueSchema) {
        super(name, traits);
        this.name = name;
        this.traits = traits;
        this.keySchema = keySchema;
        this.valueSchema = valueSchema;
      }
    };
    __name(map, "map");
  }
});

// ../../node_modules/.pnpm/@smithy+core@3.5.1/node_modules/@smithy/core/dist-es/submodules/schema/schemas/OperationSchema.js
function op(namespace, name, traits = {}, input, output) {
  const schema = new OperationSchema(namespace + "#" + name, traits, input, output);
  TypeRegistry.for(namespace).register(name, schema);
  return schema;
}
var OperationSchema;
var init_OperationSchema = __esm({
  "../../node_modules/.pnpm/@smithy+core@3.5.1/node_modules/@smithy/core/dist-es/submodules/schema/schemas/OperationSchema.js"() {
    init_TypeRegistry();
    init_Schema();
    OperationSchema = class extends Schema {
      static {
        __name(this, "OperationSchema");
      }
      constructor(name, traits, input, output) {
        super(name, traits);
        this.name = name;
        this.traits = traits;
        this.input = input;
        this.output = output;
      }
    };
    __name(op, "op");
  }
});

// ../../node_modules/.pnpm/@smithy+core@3.5.1/node_modules/@smithy/core/dist-es/submodules/schema/schemas/StructureSchema.js
function struct(namespace, name, traits, memberNames, memberList) {
  const schema = new StructureSchema(namespace + "#" + name, traits, memberNames, memberList);
  TypeRegistry.for(namespace).register(name, schema);
  return schema;
}
var StructureSchema;
var init_StructureSchema = __esm({
  "../../node_modules/.pnpm/@smithy+core@3.5.1/node_modules/@smithy/core/dist-es/submodules/schema/schemas/StructureSchema.js"() {
    init_TypeRegistry();
    init_Schema();
    StructureSchema = class extends Schema {
      static {
        __name(this, "StructureSchema");
      }
      constructor(name, traits, memberNames, memberList) {
        super(name, traits);
        this.name = name;
        this.traits = traits;
        this.memberNames = memberNames;
        this.memberList = memberList;
        this.members = {};
        for (let i3 = 0; i3 < memberNames.length; ++i3) {
          this.members[memberNames[i3]] = Array.isArray(memberList[i3]) ? memberList[i3] : [memberList[i3], 0];
        }
      }
    };
    __name(struct, "struct");
  }
});

// ../../node_modules/.pnpm/@smithy+core@3.5.1/node_modules/@smithy/core/dist-es/submodules/schema/schemas/ErrorSchema.js
function error(namespace, name, traits = {}, memberNames, memberList, ctor) {
  const schema = new ErrorSchema(namespace + "#" + name, traits, memberNames, memberList, ctor);
  TypeRegistry.for(namespace).register(name, schema);
  return schema;
}
var ErrorSchema;
var init_ErrorSchema = __esm({
  "../../node_modules/.pnpm/@smithy+core@3.5.1/node_modules/@smithy/core/dist-es/submodules/schema/schemas/ErrorSchema.js"() {
    init_TypeRegistry();
    init_StructureSchema();
    ErrorSchema = class extends StructureSchema {
      static {
        __name(this, "ErrorSchema");
      }
      constructor(name, traits, memberNames, memberList, ctor) {
        super(name, traits, memberNames, memberList);
        this.name = name;
        this.traits = traits;
        this.memberNames = memberNames;
        this.memberList = memberList;
        this.ctor = ctor;
      }
    };
    __name(error, "error");
  }
});

// ../../node_modules/.pnpm/@smithy+core@3.5.1/node_modules/@smithy/core/dist-es/submodules/schema/schemas/sentinels.js
var SCHEMA;
var init_sentinels = __esm({
  "../../node_modules/.pnpm/@smithy+core@3.5.1/node_modules/@smithy/core/dist-es/submodules/schema/schemas/sentinels.js"() {
    SCHEMA = {
      BLOB: 21,
      STREAMING_BLOB: 42,
      BOOLEAN: 2,
      STRING: 0,
      NUMERIC: 1,
      BIG_INTEGER: 17,
      BIG_DECIMAL: 19,
      DOCUMENT: 15,
      TIMESTAMP_DEFAULT: 4,
      TIMESTAMP_DATE_TIME: 5,
      TIMESTAMP_HTTP_DATE: 6,
      TIMESTAMP_EPOCH_SECONDS: 7,
      LIST_MODIFIER: 64,
      MAP_MODIFIER: 128
    };
  }
});

// ../../node_modules/.pnpm/@smithy+core@3.5.1/node_modules/@smithy/core/dist-es/submodules/schema/schemas/SimpleSchema.js
function sim(namespace, name, schemaRef, traits) {
  const schema = new SimpleSchema(namespace + "#" + name, schemaRef, traits);
  TypeRegistry.for(namespace).register(name, schema);
  return schema;
}
var SimpleSchema;
var init_SimpleSchema = __esm({
  "../../node_modules/.pnpm/@smithy+core@3.5.1/node_modules/@smithy/core/dist-es/submodules/schema/schemas/SimpleSchema.js"() {
    init_TypeRegistry();
    init_Schema();
    SimpleSchema = class extends Schema {
      static {
        __name(this, "SimpleSchema");
      }
      constructor(name, schemaRef, traits) {
        super(name, traits);
        this.name = name;
        this.schemaRef = schemaRef;
        this.traits = traits;
      }
    };
    __name(sim, "sim");
  }
});

// ../../node_modules/.pnpm/@smithy+core@3.5.1/node_modules/@smithy/core/dist-es/submodules/schema/schemas/NormalizedSchema.js
var NormalizedSchema;
var init_NormalizedSchema = __esm({
  "../../node_modules/.pnpm/@smithy+core@3.5.1/node_modules/@smithy/core/dist-es/submodules/schema/schemas/NormalizedSchema.js"() {
    init_deref();
    init_ListSchema();
    init_MapSchema();
    init_sentinels();
    init_SimpleSchema();
    init_StructureSchema();
    NormalizedSchema = class _NormalizedSchema {
      static {
        __name(this, "NormalizedSchema");
      }
      constructor(ref, memberName) {
        this.ref = ref;
        this.memberName = memberName;
        const traitStack = [];
        let _ref = ref;
        let schema = ref;
        this._isMemberSchema = false;
        while (Array.isArray(_ref)) {
          traitStack.push(_ref[1]);
          _ref = _ref[0];
          schema = deref(_ref);
          this._isMemberSchema = true;
        }
        if (traitStack.length > 0) {
          this.memberTraits = {};
          for (let i3 = traitStack.length - 1; i3 >= 0; --i3) {
            const traitSet = traitStack[i3];
            Object.assign(this.memberTraits, _NormalizedSchema.translateTraits(traitSet));
          }
        } else {
          this.memberTraits = 0;
        }
        if (schema instanceof _NormalizedSchema) {
          this.name = schema.name;
          this.traits = schema.traits;
          this._isMemberSchema = schema._isMemberSchema;
          this.schema = schema.schema;
          this.memberTraits = Object.assign({}, schema.getMemberTraits(), this.getMemberTraits());
          this.normalizedTraits = void 0;
          this.ref = schema.ref;
          this.memberName = memberName ?? schema.memberName;
          return;
        }
        this.schema = deref(schema);
        if (this.schema && typeof this.schema === "object") {
          this.traits = this.schema?.traits ?? {};
        } else {
          this.traits = 0;
        }
        this.name = (typeof this.schema === "object" ? this.schema?.name : void 0) ?? this.memberName ?? this.getSchemaName();
        if (this._isMemberSchema && !memberName) {
          throw new Error(`@smithy/core/schema - NormalizedSchema member schema ${this.getName(true)} must initialize with memberName argument.`);
        }
      }
      static of(ref, memberName) {
        if (ref instanceof _NormalizedSchema) {
          return ref;
        }
        return new _NormalizedSchema(ref, memberName);
      }
      static translateTraits(indicator) {
        if (typeof indicator === "object") {
          return indicator;
        }
        indicator = indicator | 0;
        const traits = {};
        if ((indicator & 1) === 1) {
          traits.httpLabel = 1;
        }
        if ((indicator >> 1 & 1) === 1) {
          traits.idempotent = 1;
        }
        if ((indicator >> 2 & 1) === 1) {
          traits.idempotencyToken = 1;
        }
        if ((indicator >> 3 & 1) === 1) {
          traits.sensitive = 1;
        }
        if ((indicator >> 4 & 1) === 1) {
          traits.httpPayload = 1;
        }
        if ((indicator >> 5 & 1) === 1) {
          traits.httpResponseCode = 1;
        }
        if ((indicator >> 6 & 1) === 1) {
          traits.httpQueryParams = 1;
        }
        return traits;
      }
      static memberFrom(memberSchema, memberName) {
        if (memberSchema instanceof _NormalizedSchema) {
          memberSchema.memberName = memberName;
          memberSchema._isMemberSchema = true;
          return memberSchema;
        }
        return new _NormalizedSchema(memberSchema, memberName);
      }
      getSchema() {
        if (this.schema instanceof _NormalizedSchema) {
          return this.schema = this.schema.getSchema();
        }
        if (this.schema instanceof SimpleSchema) {
          return deref(this.schema.schemaRef);
        }
        return deref(this.schema);
      }
      getName(withNamespace = false) {
        if (!withNamespace) {
          if (this.name && this.name.includes("#")) {
            return this.name.split("#")[1];
          }
        }
        return this.name || void 0;
      }
      getMemberName() {
        if (!this.isMemberSchema()) {
          throw new Error(`@smithy/core/schema - cannot get member name on non-member schema: ${this.getName(true)}`);
        }
        return this.memberName;
      }
      isMemberSchema() {
        return this._isMemberSchema;
      }
      isUnitSchema() {
        return this.getSchema() === "unit";
      }
      isListSchema() {
        const inner = this.getSchema();
        if (typeof inner === "number") {
          return inner >= SCHEMA.LIST_MODIFIER && inner < SCHEMA.MAP_MODIFIER;
        }
        return inner instanceof ListSchema;
      }
      isMapSchema() {
        const inner = this.getSchema();
        if (typeof inner === "number") {
          return inner >= SCHEMA.MAP_MODIFIER && inner <= 255;
        }
        return inner instanceof MapSchema;
      }
      isDocumentSchema() {
        return this.getSchema() === SCHEMA.DOCUMENT;
      }
      isStructSchema() {
        const inner = this.getSchema();
        return inner !== null && typeof inner === "object" && "members" in inner || inner instanceof StructureSchema;
      }
      isBlobSchema() {
        return this.getSchema() === SCHEMA.BLOB || this.getSchema() === SCHEMA.STREAMING_BLOB;
      }
      isTimestampSchema() {
        const schema = this.getSchema();
        return typeof schema === "number" && schema >= SCHEMA.TIMESTAMP_DEFAULT && schema <= SCHEMA.TIMESTAMP_EPOCH_SECONDS;
      }
      isStringSchema() {
        return this.getSchema() === SCHEMA.STRING;
      }
      isBooleanSchema() {
        return this.getSchema() === SCHEMA.BOOLEAN;
      }
      isNumericSchema() {
        return this.getSchema() === SCHEMA.NUMERIC;
      }
      isBigIntegerSchema() {
        return this.getSchema() === SCHEMA.BIG_INTEGER;
      }
      isBigDecimalSchema() {
        return this.getSchema() === SCHEMA.BIG_DECIMAL;
      }
      isStreaming() {
        const streaming = !!this.getMergedTraits().streaming;
        if (streaming) {
          return true;
        }
        return this.getSchema() === SCHEMA.STREAMING_BLOB;
      }
      getMergedTraits() {
        if (this.normalizedTraits) {
          return this.normalizedTraits;
        }
        this.normalizedTraits = {
          ...this.getOwnTraits(),
          ...this.getMemberTraits()
        };
        return this.normalizedTraits;
      }
      getMemberTraits() {
        return _NormalizedSchema.translateTraits(this.memberTraits);
      }
      getOwnTraits() {
        return _NormalizedSchema.translateTraits(this.traits);
      }
      getKeySchema() {
        if (this.isDocumentSchema()) {
          return _NormalizedSchema.memberFrom([SCHEMA.DOCUMENT, 0], "key");
        }
        if (!this.isMapSchema()) {
          throw new Error(`@smithy/core/schema - cannot get key schema for non-map schema: ${this.getName(true)}`);
        }
        const schema = this.getSchema();
        if (typeof schema === "number") {
          return _NormalizedSchema.memberFrom([63 & schema, 0], "key");
        }
        return _NormalizedSchema.memberFrom([schema.keySchema, 0], "key");
      }
      getValueSchema() {
        const schema = this.getSchema();
        if (typeof schema === "number") {
          if (this.isMapSchema()) {
            return _NormalizedSchema.memberFrom([63 & schema, 0], "value");
          } else if (this.isListSchema()) {
            return _NormalizedSchema.memberFrom([63 & schema, 0], "member");
          }
        }
        if (schema && typeof schema === "object") {
          if (this.isStructSchema()) {
            throw new Error(`cannot call getValueSchema() with StructureSchema ${this.getName(true)}`);
          }
          const collection = schema;
          if ("valueSchema" in collection) {
            if (this.isMapSchema()) {
              return _NormalizedSchema.memberFrom([collection.valueSchema, 0], "value");
            } else if (this.isListSchema()) {
              return _NormalizedSchema.memberFrom([collection.valueSchema, 0], "member");
            }
          }
        }
        if (this.isDocumentSchema()) {
          return _NormalizedSchema.memberFrom([SCHEMA.DOCUMENT, 0], "value");
        }
        throw new Error(`@smithy/core/schema - the schema ${this.getName(true)} does not have a value member.`);
      }
      getMemberSchema(member) {
        if (this.isStructSchema()) {
          const struct2 = this.getSchema();
          if (!(member in struct2.members)) {
            throw new Error(`@smithy/core/schema - the schema ${this.getName(true)} does not have a member with name=${member}.`);
          }
          return _NormalizedSchema.memberFrom(struct2.members[member], member);
        }
        if (this.isDocumentSchema()) {
          return _NormalizedSchema.memberFrom([SCHEMA.DOCUMENT, 0], member);
        }
        throw new Error(`@smithy/core/schema - the schema ${this.getName(true)} does not have members.`);
      }
      getMemberSchemas() {
        const { schema } = this;
        const struct2 = schema;
        if (!struct2 || typeof struct2 !== "object") {
          return {};
        }
        if ("members" in struct2) {
          const buffer = {};
          for (const member of struct2.memberNames) {
            buffer[member] = this.getMemberSchema(member);
          }
          return buffer;
        }
        return {};
      }
      *structIterator() {
        if (!this.isStructSchema()) {
          throw new Error("@smithy/core/schema - cannot acquire structIterator on non-struct schema.");
        }
        const struct2 = this.getSchema();
        for (let i3 = 0; i3 < struct2.memberNames.length; ++i3) {
          yield [struct2.memberNames[i3], _NormalizedSchema.memberFrom([struct2.memberList[i3], 0], struct2.memberNames[i3])];
        }
      }
      getSchemaName() {
        const schema = this.getSchema();
        if (typeof schema === "number") {
          const _schema = 63 & schema;
          const container = 192 & schema;
          const type = Object.entries(SCHEMA).find(([, value]) => {
            return value === _schema;
          })?.[0] ?? "Unknown";
          switch (container) {
            case SCHEMA.MAP_MODIFIER:
              return `${type}Map`;
            case SCHEMA.LIST_MODIFIER:
              return `${type}List`;
            case 0:
              return type;
          }
        }
        return "Unknown";
      }
    };
  }
});

// ../../node_modules/.pnpm/@smithy+core@3.5.1/node_modules/@smithy/core/dist-es/submodules/schema/index.js
var init_schema = __esm({
  "../../node_modules/.pnpm/@smithy+core@3.5.1/node_modules/@smithy/core/dist-es/submodules/schema/index.js"() {
    init_deref();
    init_getSchemaSerdePlugin();
    init_ListSchema();
    init_MapSchema();
    init_OperationSchema();
    init_ErrorSchema();
    init_NormalizedSchema();
    init_Schema();
    init_SimpleSchema();
    init_StructureSchema();
    init_sentinels();
    init_TypeRegistry();
  }
});

// ../../node_modules/.pnpm/@smithy+core@3.5.1/node_modules/@smithy/core/dist-es/submodules/serde/copyDocumentWithTransform.js
var copyDocumentWithTransform2;
var init_copyDocumentWithTransform = __esm({
  "../../node_modules/.pnpm/@smithy+core@3.5.1/node_modules/@smithy/core/dist-es/submodules/serde/copyDocumentWithTransform.js"() {
    init_schema();
    copyDocumentWithTransform2 = /* @__PURE__ */ __name((source, schemaRef, transform = (_2) => _2) => {
      const ns = NormalizedSchema.of(schemaRef);
      switch (typeof source) {
        case "undefined":
        case "boolean":
        case "number":
        case "string":
        case "bigint":
        case "symbol":
          return transform(source, ns);
        case "function":
        case "object":
          if (source === null) {
            return transform(null, ns);
          }
          if (Array.isArray(source)) {
            const newArray = new Array(source.length);
            let i3 = 0;
            for (const item of source) {
              newArray[i3++] = copyDocumentWithTransform2(item, ns.getValueSchema(), transform);
            }
            return transform(newArray, ns);
          }
          if ("byteLength" in source) {
            const newBytes = new Uint8Array(source.byteLength);
            newBytes.set(source, 0);
            return transform(newBytes, ns);
          }
          if (source instanceof Date) {
            return transform(source, ns);
          }
          const newObject = {};
          if (ns.isMapSchema()) {
            for (const key of Object.keys(source)) {
              newObject[key] = copyDocumentWithTransform2(source[key], ns.getValueSchema(), transform);
            }
          } else if (ns.isStructSchema()) {
            for (const [key, memberSchema] of ns.structIterator()) {
              newObject[key] = copyDocumentWithTransform2(source[key], memberSchema, transform);
            }
          } else if (ns.isDocumentSchema()) {
            for (const key of Object.keys(source)) {
              newObject[key] = copyDocumentWithTransform2(source[key], ns.getValueSchema(), transform);
            }
          }
          return transform(newObject, ns);
        default:
          return transform(source, ns);
      }
    }, "copyDocumentWithTransform");
  }
});

// ../../node_modules/.pnpm/@smithy+core@3.5.1/node_modules/@smithy/core/dist-es/submodules/serde/parse-utils.js
var parseBoolean2, expectBoolean2, expectNumber2, MAX_FLOAT, expectFloat322, expectLong2, expectInt2, expectInt322, expectShort2, expectByte2, expectSizedInt, castInt, expectNonNull2, expectObject2, expectString2, expectUnion2, strictParseDouble2, strictParseFloat2, strictParseFloat322, NUMBER_REGEX, parseNumber, limitedParseDouble2, handleFloat2, limitedParseFloat2, limitedParseFloat322, parseFloatString, strictParseLong2, strictParseInt2, strictParseInt322, strictParseShort2, strictParseByte2, stackTraceWarning, logger2;
var init_parse_utils = __esm({
  "../../node_modules/.pnpm/@smithy+core@3.5.1/node_modules/@smithy/core/dist-es/submodules/serde/parse-utils.js"() {
    parseBoolean2 = /* @__PURE__ */ __name((value) => {
      switch (value) {
        case "true":
          return true;
        case "false":
          return false;
        default:
          throw new Error(`Unable to parse boolean value "${value}"`);
      }
    }, "parseBoolean");
    expectBoolean2 = /* @__PURE__ */ __name((value) => {
      if (value === null || value === void 0) {
        return void 0;
      }
      if (typeof value === "number") {
        if (value === 0 || value === 1) {
          logger2.warn(stackTraceWarning(`Expected boolean, got ${typeof value}: ${value}`));
        }
        if (value === 0) {
          return false;
        }
        if (value === 1) {
          return true;
        }
      }
      if (typeof value === "string") {
        const lower = value.toLowerCase();
        if (lower === "false" || lower === "true") {
          logger2.warn(stackTraceWarning(`Expected boolean, got ${typeof value}: ${value}`));
        }
        if (lower === "false") {
          return false;
        }
        if (lower === "true") {
          return true;
        }
      }
      if (typeof value === "boolean") {
        return value;
      }
      throw new TypeError(`Expected boolean, got ${typeof value}: ${value}`);
    }, "expectBoolean");
    expectNumber2 = /* @__PURE__ */ __name((value) => {
      if (value === null || value === void 0) {
        return void 0;
      }
      if (typeof value === "string") {
        const parsed = parseFloat(value);
        if (!Number.isNaN(parsed)) {
          if (String(parsed) !== String(value)) {
            logger2.warn(stackTraceWarning(`Expected number but observed string: ${value}`));
          }
          return parsed;
        }
      }
      if (typeof value === "number") {
        return value;
      }
      throw new TypeError(`Expected number, got ${typeof value}: ${value}`);
    }, "expectNumber");
    MAX_FLOAT = Math.ceil(2 ** 127 * (2 - 2 ** -23));
    expectFloat322 = /* @__PURE__ */ __name((value) => {
      const expected = expectNumber2(value);
      if (expected !== void 0 && !Number.isNaN(expected) && expected !== Infinity && expected !== -Infinity) {
        if (Math.abs(expected) > MAX_FLOAT) {
          throw new TypeError(`Expected 32-bit float, got ${value}`);
        }
      }
      return expected;
    }, "expectFloat32");
    expectLong2 = /* @__PURE__ */ __name((value) => {
      if (value === null || value === void 0) {
        return void 0;
      }
      if (Number.isInteger(value) && !Number.isNaN(value)) {
        return value;
      }
      throw new TypeError(`Expected integer, got ${typeof value}: ${value}`);
    }, "expectLong");
    expectInt2 = expectLong2;
    expectInt322 = /* @__PURE__ */ __name((value) => expectSizedInt(value, 32), "expectInt32");
    expectShort2 = /* @__PURE__ */ __name((value) => expectSizedInt(value, 16), "expectShort");
    expectByte2 = /* @__PURE__ */ __name((value) => expectSizedInt(value, 8), "expectByte");
    expectSizedInt = /* @__PURE__ */ __name((value, size) => {
      const expected = expectLong2(value);
      if (expected !== void 0 && castInt(expected, size) !== expected) {
        throw new TypeError(`Expected ${size}-bit integer, got ${value}`);
      }
      return expected;
    }, "expectSizedInt");
    castInt = /* @__PURE__ */ __name((value, size) => {
      switch (size) {
        case 32:
          return Int32Array.of(value)[0];
        case 16:
          return Int16Array.of(value)[0];
        case 8:
          return Int8Array.of(value)[0];
      }
    }, "castInt");
    expectNonNull2 = /* @__PURE__ */ __name((value, location) => {
      if (value === null || value === void 0) {
        if (location) {
          throw new TypeError(`Expected a non-null value for ${location}`);
        }
        throw new TypeError("Expected a non-null value");
      }
      return value;
    }, "expectNonNull");
    expectObject2 = /* @__PURE__ */ __name((value) => {
      if (value === null || value === void 0) {
        return void 0;
      }
      if (typeof value === "object" && !Array.isArray(value)) {
        return value;
      }
      const receivedType = Array.isArray(value) ? "array" : typeof value;
      throw new TypeError(`Expected object, got ${receivedType}: ${value}`);
    }, "expectObject");
    expectString2 = /* @__PURE__ */ __name((value) => {
      if (value === null || value === void 0) {
        return void 0;
      }
      if (typeof value === "string") {
        return value;
      }
      if (["boolean", "number", "bigint"].includes(typeof value)) {
        logger2.warn(stackTraceWarning(`Expected string, got ${typeof value}: ${value}`));
        return String(value);
      }
      throw new TypeError(`Expected string, got ${typeof value}: ${value}`);
    }, "expectString");
    expectUnion2 = /* @__PURE__ */ __name((value) => {
      if (value === null || value === void 0) {
        return void 0;
      }
      const asObject = expectObject2(value);
      const setKeys = Object.entries(asObject).filter(([, v6]) => v6 != null).map(([k3]) => k3);
      if (setKeys.length === 0) {
        throw new TypeError(`Unions must have exactly one non-null member. None were found.`);
      }
      if (setKeys.length > 1) {
        throw new TypeError(`Unions must have exactly one non-null member. Keys ${setKeys} were not null.`);
      }
      return asObject;
    }, "expectUnion");
    strictParseDouble2 = /* @__PURE__ */ __name((value) => {
      if (typeof value == "string") {
        return expectNumber2(parseNumber(value));
      }
      return expectNumber2(value);
    }, "strictParseDouble");
    strictParseFloat2 = strictParseDouble2;
    strictParseFloat322 = /* @__PURE__ */ __name((value) => {
      if (typeof value == "string") {
        return expectFloat322(parseNumber(value));
      }
      return expectFloat322(value);
    }, "strictParseFloat32");
    NUMBER_REGEX = /(-?(?:0|[1-9]\d*)(?:\.\d+)?(?:[eE][+-]?\d+)?)|(-?Infinity)|(NaN)/g;
    parseNumber = /* @__PURE__ */ __name((value) => {
      const matches = value.match(NUMBER_REGEX);
      if (matches === null || matches[0].length !== value.length) {
        throw new TypeError(`Expected real number, got implicit NaN`);
      }
      return parseFloat(value);
    }, "parseNumber");
    limitedParseDouble2 = /* @__PURE__ */ __name((value) => {
      if (typeof value == "string") {
        return parseFloatString(value);
      }
      return expectNumber2(value);
    }, "limitedParseDouble");
    handleFloat2 = limitedParseDouble2;
    limitedParseFloat2 = limitedParseDouble2;
    limitedParseFloat322 = /* @__PURE__ */ __name((value) => {
      if (typeof value == "string") {
        return parseFloatString(value);
      }
      return expectFloat322(value);
    }, "limitedParseFloat32");
    parseFloatString = /* @__PURE__ */ __name((value) => {
      switch (value) {
        case "NaN":
          return NaN;
        case "Infinity":
          return Infinity;
        case "-Infinity":
          return -Infinity;
        default:
          throw new Error(`Unable to parse float value: ${value}`);
      }
    }, "parseFloatString");
    strictParseLong2 = /* @__PURE__ */ __name((value) => {
      if (typeof value === "string") {
        return expectLong2(parseNumber(value));
      }
      return expectLong2(value);
    }, "strictParseLong");
    strictParseInt2 = strictParseLong2;
    strictParseInt322 = /* @__PURE__ */ __name((value) => {
      if (typeof value === "string") {
        return expectInt322(parseNumber(value));
      }
      return expectInt322(value);
    }, "strictParseInt32");
    strictParseShort2 = /* @__PURE__ */ __name((value) => {
      if (typeof value === "string") {
        return expectShort2(parseNumber(value));
      }
      return expectShort2(value);
    }, "strictParseShort");
    strictParseByte2 = /* @__PURE__ */ __name((value) => {
      if (typeof value === "string") {
        return expectByte2(parseNumber(value));
      }
      return expectByte2(value);
    }, "strictParseByte");
    stackTraceWarning = /* @__PURE__ */ __name((message) => {
      return String(new TypeError(message).stack || message).split("\n").slice(0, 5).filter((s3) => !s3.includes("stackTraceWarning")).join("\n");
    }, "stackTraceWarning");
    logger2 = {
      warn: console.warn
    };
  }
});

// ../../node_modules/.pnpm/@smithy+core@3.5.1/node_modules/@smithy/core/dist-es/submodules/serde/date-utils.js
function dateToUtcString2(date) {
  const year = date.getUTCFullYear();
  const month = date.getUTCMonth();
  const dayOfWeek = date.getUTCDay();
  const dayOfMonthInt = date.getUTCDate();
  const hoursInt = date.getUTCHours();
  const minutesInt = date.getUTCMinutes();
  const secondsInt = date.getUTCSeconds();
  const dayOfMonthString = dayOfMonthInt < 10 ? `0${dayOfMonthInt}` : `${dayOfMonthInt}`;
  const hoursString = hoursInt < 10 ? `0${hoursInt}` : `${hoursInt}`;
  const minutesString = minutesInt < 10 ? `0${minutesInt}` : `${minutesInt}`;
  const secondsString = secondsInt < 10 ? `0${secondsInt}` : `${secondsInt}`;
  return `${DAYS[dayOfWeek]}, ${dayOfMonthString} ${MONTHS[month]} ${year} ${hoursString}:${minutesString}:${secondsString} GMT`;
}
var DAYS, MONTHS, RFC3339, parseRfc3339DateTime2, RFC3339_WITH_OFFSET, parseRfc3339DateTimeWithOffset2, IMF_FIXDATE, RFC_850_DATE, ASC_TIME, parseRfc7231DateTime2, parseEpochTimestamp2, buildDate, parseTwoDigitYear, FIFTY_YEARS_IN_MILLIS, adjustRfc850Year, parseMonthByShortName, DAYS_IN_MONTH, validateDayOfMonth, isLeapYear, parseDateValue, parseMilliseconds, parseOffsetToMilliseconds, stripLeadingZeroes;
var init_date_utils = __esm({
  "../../node_modules/.pnpm/@smithy+core@3.5.1/node_modules/@smithy/core/dist-es/submodules/serde/date-utils.js"() {
    init_parse_utils();
    DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    __name(dateToUtcString2, "dateToUtcString");
    RFC3339 = new RegExp(/^(\d{4})-(\d{2})-(\d{2})[tT](\d{2}):(\d{2}):(\d{2})(?:\.(\d+))?[zZ]$/);
    parseRfc3339DateTime2 = /* @__PURE__ */ __name((value) => {
      if (value === null || value === void 0) {
        return void 0;
      }
      if (typeof value !== "string") {
        throw new TypeError("RFC-3339 date-times must be expressed as strings");
      }
      const match = RFC3339.exec(value);
      if (!match) {
        throw new TypeError("Invalid RFC-3339 date-time value");
      }
      const [_2, yearStr, monthStr, dayStr, hours, minutes, seconds, fractionalMilliseconds] = match;
      const year = strictParseShort2(stripLeadingZeroes(yearStr));
      const month = parseDateValue(monthStr, "month", 1, 12);
      const day = parseDateValue(dayStr, "day", 1, 31);
      return buildDate(year, month, day, { hours, minutes, seconds, fractionalMilliseconds });
    }, "parseRfc3339DateTime");
    RFC3339_WITH_OFFSET = new RegExp(/^(\d{4})-(\d{2})-(\d{2})[tT](\d{2}):(\d{2}):(\d{2})(?:\.(\d+))?(([-+]\d{2}\:\d{2})|[zZ])$/);
    parseRfc3339DateTimeWithOffset2 = /* @__PURE__ */ __name((value) => {
      if (value === null || value === void 0) {
        return void 0;
      }
      if (typeof value !== "string") {
        throw new TypeError("RFC-3339 date-times must be expressed as strings");
      }
      const match = RFC3339_WITH_OFFSET.exec(value);
      if (!match) {
        throw new TypeError("Invalid RFC-3339 date-time value");
      }
      const [_2, yearStr, monthStr, dayStr, hours, minutes, seconds, fractionalMilliseconds, offsetStr] = match;
      const year = strictParseShort2(stripLeadingZeroes(yearStr));
      const month = parseDateValue(monthStr, "month", 1, 12);
      const day = parseDateValue(dayStr, "day", 1, 31);
      const date = buildDate(year, month, day, { hours, minutes, seconds, fractionalMilliseconds });
      if (offsetStr.toUpperCase() != "Z") {
        date.setTime(date.getTime() - parseOffsetToMilliseconds(offsetStr));
      }
      return date;
    }, "parseRfc3339DateTimeWithOffset");
    IMF_FIXDATE = new RegExp(/^(?:Mon|Tue|Wed|Thu|Fri|Sat|Sun), (\d{2}) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4}) (\d{1,2}):(\d{2}):(\d{2})(?:\.(\d+))? GMT$/);
    RFC_850_DATE = new RegExp(/^(?:Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday), (\d{2})-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\d{2}) (\d{1,2}):(\d{2}):(\d{2})(?:\.(\d+))? GMT$/);
    ASC_TIME = new RegExp(/^(?:Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ( [1-9]|\d{2}) (\d{1,2}):(\d{2}):(\d{2})(?:\.(\d+))? (\d{4})$/);
    parseRfc7231DateTime2 = /* @__PURE__ */ __name((value) => {
      if (value === null || value === void 0) {
        return void 0;
      }
      if (typeof value !== "string") {
        throw new TypeError("RFC-7231 date-times must be expressed as strings");
      }
      let match = IMF_FIXDATE.exec(value);
      if (match) {
        const [_2, dayStr, monthStr, yearStr, hours, minutes, seconds, fractionalMilliseconds] = match;
        return buildDate(strictParseShort2(stripLeadingZeroes(yearStr)), parseMonthByShortName(monthStr), parseDateValue(dayStr, "day", 1, 31), { hours, minutes, seconds, fractionalMilliseconds });
      }
      match = RFC_850_DATE.exec(value);
      if (match) {
        const [_2, dayStr, monthStr, yearStr, hours, minutes, seconds, fractionalMilliseconds] = match;
        return adjustRfc850Year(buildDate(parseTwoDigitYear(yearStr), parseMonthByShortName(monthStr), parseDateValue(dayStr, "day", 1, 31), {
          hours,
          minutes,
          seconds,
          fractionalMilliseconds
        }));
      }
      match = ASC_TIME.exec(value);
      if (match) {
        const [_2, monthStr, dayStr, hours, minutes, seconds, fractionalMilliseconds, yearStr] = match;
        return buildDate(strictParseShort2(stripLeadingZeroes(yearStr)), parseMonthByShortName(monthStr), parseDateValue(dayStr.trimLeft(), "day", 1, 31), { hours, minutes, seconds, fractionalMilliseconds });
      }
      throw new TypeError("Invalid RFC-7231 date-time value");
    }, "parseRfc7231DateTime");
    parseEpochTimestamp2 = /* @__PURE__ */ __name((value) => {
      if (value === null || value === void 0) {
        return void 0;
      }
      let valueAsDouble;
      if (typeof value === "number") {
        valueAsDouble = value;
      } else if (typeof value === "string") {
        valueAsDouble = strictParseDouble2(value);
      } else if (typeof value === "object" && value.tag === 1) {
        valueAsDouble = value.value;
      } else {
        throw new TypeError("Epoch timestamps must be expressed as floating point numbers or their string representation");
      }
      if (Number.isNaN(valueAsDouble) || valueAsDouble === Infinity || valueAsDouble === -Infinity) {
        throw new TypeError("Epoch timestamps must be valid, non-Infinite, non-NaN numerics");
      }
      return new Date(Math.round(valueAsDouble * 1e3));
    }, "parseEpochTimestamp");
    buildDate = /* @__PURE__ */ __name((year, month, day, time) => {
      const adjustedMonth = month - 1;
      validateDayOfMonth(year, adjustedMonth, day);
      return new Date(Date.UTC(year, adjustedMonth, day, parseDateValue(time.hours, "hour", 0, 23), parseDateValue(time.minutes, "minute", 0, 59), parseDateValue(time.seconds, "seconds", 0, 60), parseMilliseconds(time.fractionalMilliseconds)));
    }, "buildDate");
    parseTwoDigitYear = /* @__PURE__ */ __name((value) => {
      const thisYear = (/* @__PURE__ */ new Date()).getUTCFullYear();
      const valueInThisCentury = Math.floor(thisYear / 100) * 100 + strictParseShort2(stripLeadingZeroes(value));
      if (valueInThisCentury < thisYear) {
        return valueInThisCentury + 100;
      }
      return valueInThisCentury;
    }, "parseTwoDigitYear");
    FIFTY_YEARS_IN_MILLIS = 50 * 365 * 24 * 60 * 60 * 1e3;
    adjustRfc850Year = /* @__PURE__ */ __name((input) => {
      if (input.getTime() - (/* @__PURE__ */ new Date()).getTime() > FIFTY_YEARS_IN_MILLIS) {
        return new Date(Date.UTC(input.getUTCFullYear() - 100, input.getUTCMonth(), input.getUTCDate(), input.getUTCHours(), input.getUTCMinutes(), input.getUTCSeconds(), input.getUTCMilliseconds()));
      }
      return input;
    }, "adjustRfc850Year");
    parseMonthByShortName = /* @__PURE__ */ __name((value) => {
      const monthIdx = MONTHS.indexOf(value);
      if (monthIdx < 0) {
        throw new TypeError(`Invalid month: ${value}`);
      }
      return monthIdx + 1;
    }, "parseMonthByShortName");
    DAYS_IN_MONTH = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    validateDayOfMonth = /* @__PURE__ */ __name((year, month, day) => {
      let maxDays = DAYS_IN_MONTH[month];
      if (month === 1 && isLeapYear(year)) {
        maxDays = 29;
      }
      if (day > maxDays) {
        throw new TypeError(`Invalid day for ${MONTHS[month]} in ${year}: ${day}`);
      }
    }, "validateDayOfMonth");
    isLeapYear = /* @__PURE__ */ __name((year) => {
      return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
    }, "isLeapYear");
    parseDateValue = /* @__PURE__ */ __name((value, type, lower, upper) => {
      const dateVal = strictParseByte2(stripLeadingZeroes(value));
      if (dateVal < lower || dateVal > upper) {
        throw new TypeError(`${type} must be between ${lower} and ${upper}, inclusive`);
      }
      return dateVal;
    }, "parseDateValue");
    parseMilliseconds = /* @__PURE__ */ __name((value) => {
      if (value === null || value === void 0) {
        return 0;
      }
      return strictParseFloat322("0." + value) * 1e3;
    }, "parseMilliseconds");
    parseOffsetToMilliseconds = /* @__PURE__ */ __name((value) => {
      const directionStr = value[0];
      let direction = 1;
      if (directionStr == "+") {
        direction = 1;
      } else if (directionStr == "-") {
        direction = -1;
      } else {
        throw new TypeError(`Offset direction, ${directionStr}, must be "+" or "-"`);
      }
      const hour = Number(value.substring(1, 3));
      const minute = Number(value.substring(4, 6));
      return direction * (hour * 60 + minute) * 60 * 1e3;
    }, "parseOffsetToMilliseconds");
    stripLeadingZeroes = /* @__PURE__ */ __name((value) => {
      let idx = 0;
      while (idx < value.length - 1 && value.charAt(idx) === "0") {
        idx++;
      }
      if (idx === 0) {
        return value;
      }
      return value.slice(idx);
    }, "stripLeadingZeroes");
  }
});

// ../../node_modules/.pnpm/@smithy+core@3.5.1/node_modules/@smithy/core/dist-es/submodules/serde/lazy-json.js
var LazyJsonString2;
var init_lazy_json = __esm({
  "../../node_modules/.pnpm/@smithy+core@3.5.1/node_modules/@smithy/core/dist-es/submodules/serde/lazy-json.js"() {
    LazyJsonString2 = /* @__PURE__ */ __name(function LazyJsonString3(val2) {
      const str = Object.assign(new String(val2), {
        deserializeJSON() {
          return JSON.parse(String(val2));
        },
        toString() {
          return String(val2);
        },
        toJSON() {
          return String(val2);
        }
      });
      return str;
    }, "LazyJsonString");
    LazyJsonString2.from = (object) => {
      if (object && typeof object === "object" && (object instanceof LazyJsonString2 || "deserializeJSON" in object)) {
        return object;
      } else if (typeof object === "string" || Object.getPrototypeOf(object) === String.prototype) {
        return LazyJsonString2(String(object));
      }
      return LazyJsonString2(JSON.stringify(object));
    };
    LazyJsonString2.fromObject = LazyJsonString2.from;
  }
});

// ../../node_modules/.pnpm/@smithy+core@3.5.1/node_modules/@smithy/core/dist-es/submodules/serde/quote-header.js
function quoteHeader2(part) {
  if (part.includes(",") || part.includes('"')) {
    part = `"${part.replace(/"/g, '\\"')}"`;
  }
  return part;
}
var init_quote_header = __esm({
  "../../node_modules/.pnpm/@smithy+core@3.5.1/node_modules/@smithy/core/dist-es/submodules/serde/quote-header.js"() {
    __name(quoteHeader2, "quoteHeader");
  }
});

// ../../node_modules/.pnpm/@smithy+core@3.5.1/node_modules/@smithy/core/dist-es/submodules/serde/split-every.js
function splitEvery2(value, delimiter, numDelimiters) {
  if (numDelimiters <= 0 || !Number.isInteger(numDelimiters)) {
    throw new Error("Invalid number of delimiters (" + numDelimiters + ") for splitEvery.");
  }
  const segments = value.split(delimiter);
  if (numDelimiters === 1) {
    return segments;
  }
  const compoundSegments = [];
  let currentSegment = "";
  for (let i3 = 0; i3 < segments.length; i3++) {
    if (currentSegment === "") {
      currentSegment = segments[i3];
    } else {
      currentSegment += delimiter + segments[i3];
    }
    if ((i3 + 1) % numDelimiters === 0) {
      compoundSegments.push(currentSegment);
      currentSegment = "";
    }
  }
  if (currentSegment !== "") {
    compoundSegments.push(currentSegment);
  }
  return compoundSegments;
}
var init_split_every = __esm({
  "../../node_modules/.pnpm/@smithy+core@3.5.1/node_modules/@smithy/core/dist-es/submodules/serde/split-every.js"() {
    __name(splitEvery2, "splitEvery");
  }
});

// ../../node_modules/.pnpm/@smithy+core@3.5.1/node_modules/@smithy/core/dist-es/submodules/serde/split-header.js
var splitHeader2;
var init_split_header = __esm({
  "../../node_modules/.pnpm/@smithy+core@3.5.1/node_modules/@smithy/core/dist-es/submodules/serde/split-header.js"() {
    splitHeader2 = /* @__PURE__ */ __name((value) => {
      const z2 = value.length;
      const values = [];
      let withinQuotes = false;
      let prevChar = void 0;
      let anchor = 0;
      for (let i3 = 0; i3 < z2; ++i3) {
        const char = value[i3];
        switch (char) {
          case `"`:
            if (prevChar !== "\\") {
              withinQuotes = !withinQuotes;
            }
            break;
          case ",":
            if (!withinQuotes) {
              values.push(value.slice(anchor, i3));
              anchor = i3 + 1;
            }
            break;
          default:
        }
        prevChar = char;
      }
      values.push(value.slice(anchor));
      return values.map((v6) => {
        v6 = v6.trim();
        const z3 = v6.length;
        if (z3 < 2) {
          return v6;
        }
        if (v6[0] === `"` && v6[z3 - 1] === `"`) {
          v6 = v6.slice(1, z3 - 1);
        }
        return v6.replace(/\\"/g, '"');
      });
    }, "splitHeader");
  }
});

// ../../node_modules/.pnpm/@smithy+core@3.5.1/node_modules/@smithy/core/dist-es/submodules/serde/value/NumericValue.js
function nv2(string) {
  return new NumericValue2(string, "bigDecimal");
}
var NumericValue2;
var init_NumericValue = __esm({
  "../../node_modules/.pnpm/@smithy+core@3.5.1/node_modules/@smithy/core/dist-es/submodules/serde/value/NumericValue.js"() {
    NumericValue2 = class {
      static {
        __name(this, "NumericValue");
      }
      constructor(string, type) {
        this.string = string;
        this.type = type;
      }
    };
    __name(nv2, "nv");
  }
});

// ../../node_modules/.pnpm/@smithy+core@3.5.1/node_modules/@smithy/core/dist-es/submodules/serde/index.js
var serde_exports = {};
__export(serde_exports, {
  LazyJsonString: () => LazyJsonString2,
  NumericValue: () => NumericValue2,
  copyDocumentWithTransform: () => copyDocumentWithTransform2,
  dateToUtcString: () => dateToUtcString2,
  expectBoolean: () => expectBoolean2,
  expectByte: () => expectByte2,
  expectFloat32: () => expectFloat322,
  expectInt: () => expectInt2,
  expectInt32: () => expectInt322,
  expectLong: () => expectLong2,
  expectNonNull: () => expectNonNull2,
  expectNumber: () => expectNumber2,
  expectObject: () => expectObject2,
  expectShort: () => expectShort2,
  expectString: () => expectString2,
  expectUnion: () => expectUnion2,
  handleFloat: () => handleFloat2,
  limitedParseDouble: () => limitedParseDouble2,
  limitedParseFloat: () => limitedParseFloat2,
  limitedParseFloat32: () => limitedParseFloat322,
  logger: () => logger2,
  nv: () => nv2,
  parseBoolean: () => parseBoolean2,
  parseEpochTimestamp: () => parseEpochTimestamp2,
  parseRfc3339DateTime: () => parseRfc3339DateTime2,
  parseRfc3339DateTimeWithOffset: () => parseRfc3339DateTimeWithOffset2,
  parseRfc7231DateTime: () => parseRfc7231DateTime2,
  quoteHeader: () => quoteHeader2,
  splitEvery: () => splitEvery2,
  splitHeader: () => splitHeader2,
  strictParseByte: () => strictParseByte2,
  strictParseDouble: () => strictParseDouble2,
  strictParseFloat: () => strictParseFloat2,
  strictParseFloat32: () => strictParseFloat322,
  strictParseInt: () => strictParseInt2,
  strictParseInt32: () => strictParseInt322,
  strictParseLong: () => strictParseLong2,
  strictParseShort: () => strictParseShort2
});
var init_serde = __esm({
  "../../node_modules/.pnpm/@smithy+core@3.5.1/node_modules/@smithy/core/dist-es/submodules/serde/index.js"() {
    init_copyDocumentWithTransform();
    init_date_utils();
    init_lazy_json();
    init_parse_utils();
    init_quote_header();
    init_split_every();
    init_split_header();
    init_NumericValue();
  }
});

// ../../node_modules/.pnpm/@smithy+core@3.5.1/node_modules/@smithy/core/dist-es/submodules/protocols/HttpProtocol.js
var import_protocol_http2, import_util_stream2, HttpProtocol;
var init_HttpProtocol = __esm({
  "../../node_modules/.pnpm/@smithy+core@3.5.1/node_modules/@smithy/core/dist-es/submodules/protocols/HttpProtocol.js"() {
    init_schema();
    init_serde();
    import_protocol_http2 = __toESM(require_dist_cjs2());
    import_util_stream2 = __toESM(require_dist_cjs16());
    init_collect_stream_body();
    HttpProtocol = class {
      static {
        __name(this, "HttpProtocol");
      }
      constructor(options) {
        this.options = options;
      }
      getRequestType() {
        return import_protocol_http2.HttpRequest;
      }
      getResponseType() {
        return import_protocol_http2.HttpResponse;
      }
      setSerdeContext(serdeContext) {
        this.serdeContext = serdeContext;
        this.serializer.setSerdeContext(serdeContext);
        this.deserializer.setSerdeContext(serdeContext);
        if (this.getPayloadCodec()) {
          this.getPayloadCodec().setSerdeContext(serdeContext);
        }
      }
      updateServiceEndpoint(request, endpoint) {
        if ("url" in endpoint) {
          request.protocol = endpoint.url.protocol;
          request.hostname = endpoint.url.hostname;
          request.port = endpoint.url.port ? Number(endpoint.url.port) : void 0;
          request.path = endpoint.url.pathname;
          request.fragment = endpoint.url.hash || void 0;
          request.username = endpoint.url.username || void 0;
          request.password = endpoint.url.password || void 0;
          for (const [k3, v6] of endpoint.url.searchParams.entries()) {
            if (!request.query) {
              request.query = {};
            }
            request.query[k3] = v6;
          }
          return request;
        } else {
          request.protocol = endpoint.protocol;
          request.hostname = endpoint.hostname;
          request.port = endpoint.port ? Number(endpoint.port) : void 0;
          request.path = endpoint.path;
          request.query = {
            ...endpoint.query
          };
          return request;
        }
      }
      setHostPrefix(request, operationSchema, input) {
        const operationNs = NormalizedSchema.of(operationSchema);
        const inputNs = NormalizedSchema.of(operationSchema.input);
        if (operationNs.getMergedTraits().endpoint) {
          let hostPrefix = operationNs.getMergedTraits().endpoint?.[0];
          if (typeof hostPrefix === "string") {
            const hostLabelInputs = [...inputNs.structIterator()].filter(([, member]) => member.getMergedTraits().hostLabel);
            for (const [name] of hostLabelInputs) {
              const replacement = input[name];
              if (typeof replacement !== "string") {
                throw new Error(`@smithy/core/schema - ${name} in input must be a string as hostLabel.`);
              }
              hostPrefix = hostPrefix.replace(`{${name}}`, replacement);
            }
            request.hostname = hostPrefix + request.hostname;
          }
        }
      }
      deserializeMetadata(output) {
        return {
          httpStatusCode: output.statusCode,
          requestId: output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"] ?? output.headers["x-amz-request-id"],
          extendedRequestId: output.headers["x-amz-id-2"],
          cfId: output.headers["x-amz-cf-id"]
        };
      }
      async deserializeHttpMessage(schema, context, response, headerBindings, dataObject) {
        const deserializer = this.deserializer;
        const ns = NormalizedSchema.of(schema);
        const nonHttpBindingMembers = [];
        for (const [memberName, memberSchema] of ns.structIterator()) {
          const memberTraits = memberSchema.getMemberTraits();
          if (memberTraits.httpPayload) {
            const isStreaming = memberSchema.isStreaming();
            if (isStreaming) {
              const isEventStream = memberSchema.isStructSchema();
              if (isEventStream) {
                const context2 = this.serdeContext;
                if (!context2.eventStreamMarshaller) {
                  throw new Error("@smithy/core - HttpProtocol: eventStreamMarshaller missing in serdeContext.");
                }
                const memberSchemas = memberSchema.getMemberSchemas();
                dataObject[memberName] = context2.eventStreamMarshaller.deserialize(response.body, async (event) => {
                  const unionMember = Object.keys(event).find((key) => {
                    return key !== "__type";
                  }) ?? "";
                  if (unionMember in memberSchemas) {
                    const eventStreamSchema = memberSchemas[unionMember];
                    return {
                      [unionMember]: await deserializer.read(eventStreamSchema, event[unionMember].body)
                    };
                  } else {
                    return {
                      $unknown: event
                    };
                  }
                });
              } else {
                dataObject[memberName] = (0, import_util_stream2.sdkStreamMixin)(response.body);
              }
            } else if (response.body) {
              const bytes = await collectBody2(response.body, context);
              if (bytes.byteLength > 0) {
                dataObject[memberName] = await deserializer.read(memberSchema, bytes);
              }
            }
          } else if (memberTraits.httpHeader) {
            const key = String(memberTraits.httpHeader).toLowerCase();
            const value = response.headers[key];
            if (null != value) {
              if (memberSchema.isListSchema()) {
                const headerListValueSchema = memberSchema.getValueSchema();
                let sections;
                if (headerListValueSchema.isTimestampSchema() && headerListValueSchema.getSchema() === SCHEMA.TIMESTAMP_DEFAULT) {
                  sections = splitEvery2(value, ",", 2);
                } else {
                  sections = splitHeader2(value);
                }
                const list2 = [];
                for (const section of sections) {
                  list2.push(await deserializer.read([headerListValueSchema, { httpHeader: key }], section.trim()));
                }
                dataObject[memberName] = list2;
              } else {
                dataObject[memberName] = await deserializer.read(memberSchema, value);
              }
            }
          } else if (memberTraits.httpPrefixHeaders !== void 0) {
            dataObject[memberName] = {};
            for (const [header, value] of Object.entries(response.headers)) {
              if (!headerBindings.has(header) && header.startsWith(memberTraits.httpPrefixHeaders)) {
                dataObject[memberName][header.slice(memberTraits.httpPrefixHeaders.length)] = await deserializer.read([memberSchema.getValueSchema(), { httpHeader: header }], value);
              }
            }
          } else if (memberTraits.httpResponseCode) {
            dataObject[memberName] = response.statusCode;
          } else {
            nonHttpBindingMembers.push(memberName);
          }
        }
        return nonHttpBindingMembers;
      }
    };
  }
});

// ../../node_modules/.pnpm/@smithy+core@3.5.1/node_modules/@smithy/core/dist-es/submodules/protocols/HttpBindingProtocol.js
var import_protocol_http3, HttpBindingProtocol;
var init_HttpBindingProtocol = __esm({
  "../../node_modules/.pnpm/@smithy+core@3.5.1/node_modules/@smithy/core/dist-es/submodules/protocols/HttpBindingProtocol.js"() {
    init_schema();
    import_protocol_http3 = __toESM(require_dist_cjs2());
    init_collect_stream_body();
    init_extended_encode_uri_component();
    init_HttpProtocol();
    HttpBindingProtocol = class extends HttpProtocol {
      static {
        __name(this, "HttpBindingProtocol");
      }
      async serializeRequest(operationSchema, input, context) {
        const serializer = this.serializer;
        const query = {};
        const headers = {};
        const endpoint = await context.endpoint();
        const ns = NormalizedSchema.of(operationSchema?.input);
        const schema = ns.getSchema();
        let hasNonHttpBindingMember = false;
        let payload;
        const request = new import_protocol_http3.HttpRequest({
          protocol: "",
          hostname: "",
          port: void 0,
          path: "",
          fragment: void 0,
          query,
          headers,
          body: void 0
        });
        if (endpoint) {
          this.updateServiceEndpoint(request, endpoint);
          this.setHostPrefix(request, operationSchema, input);
          const opTraits = NormalizedSchema.translateTraits(operationSchema.traits);
          if (opTraits.http) {
            request.method = opTraits.http[0];
            const [path, search] = opTraits.http[1].split("?");
            if (request.path == "/") {
              request.path = path;
            } else {
              request.path += path;
            }
            const traitSearchParams = new URLSearchParams(search ?? "");
            Object.assign(query, Object.fromEntries(traitSearchParams));
          }
        }
        const _input = {
          ...input
        };
        for (const memberName of Object.keys(_input)) {
          const memberNs = ns.getMemberSchema(memberName);
          if (memberNs === void 0) {
            continue;
          }
          const memberTraits = memberNs.getMergedTraits();
          const inputMember = _input[memberName];
          if (memberTraits.httpPayload) {
            const isStreaming = memberNs.isStreaming();
            if (isStreaming) {
              const isEventStream = memberNs.isStructSchema();
              if (isEventStream) {
                throw new Error("serialization of event streams is not yet implemented");
              } else {
                payload = inputMember;
              }
            } else {
              serializer.write(memberNs, inputMember);
              payload = serializer.flush();
            }
          } else if (memberTraits.httpLabel) {
            serializer.write(memberNs, inputMember);
            const replacement = serializer.flush();
            if (request.path.includes(`{${memberName}+}`)) {
              request.path = request.path.replace(`{${memberName}+}`, replacement.split("/").map(extendedEncodeURIComponent2).join("/"));
            } else if (request.path.includes(`{${memberName}}`)) {
              request.path = request.path.replace(`{${memberName}}`, extendedEncodeURIComponent2(replacement));
            }
            delete _input[memberName];
          } else if (memberTraits.httpHeader) {
            serializer.write(memberNs, inputMember);
            headers[memberTraits.httpHeader.toLowerCase()] = String(serializer.flush());
            delete _input[memberName];
          } else if (typeof memberTraits.httpPrefixHeaders === "string") {
            for (const [key, val2] of Object.entries(inputMember)) {
              const amalgam = memberTraits.httpPrefixHeaders + key;
              serializer.write([memberNs.getValueSchema(), { httpHeader: amalgam }], val2);
              headers[amalgam.toLowerCase()] = serializer.flush();
            }
            delete _input[memberName];
          } else if (memberTraits.httpQuery || memberTraits.httpQueryParams) {
            this.serializeQuery(memberNs, inputMember, query);
            delete _input[memberName];
          } else {
            hasNonHttpBindingMember = true;
          }
        }
        if (hasNonHttpBindingMember && input) {
          serializer.write(schema, _input);
          payload = serializer.flush();
        }
        request.headers = headers;
        request.query = query;
        request.body = payload;
        return request;
      }
      serializeQuery(ns, data, query) {
        const serializer = this.serializer;
        const traits = ns.getMergedTraits();
        if (traits.httpQueryParams) {
          for (const [key, val2] of Object.entries(data)) {
            if (!(key in query)) {
              this.serializeQuery(NormalizedSchema.of([
                ns.getValueSchema(),
                {
                  ...traits,
                  httpQuery: key,
                  httpQueryParams: void 0
                }
              ]), val2, query);
            }
          }
          return;
        }
        if (ns.isListSchema()) {
          const sparse = !!ns.getMergedTraits().sparse;
          const buffer = [];
          for (const item of data) {
            serializer.write([ns.getValueSchema(), traits], item);
            const serializable = serializer.flush();
            if (sparse || serializable !== void 0) {
              buffer.push(serializable);
            }
          }
          query[traits.httpQuery] = buffer;
        } else {
          serializer.write([ns, traits], data);
          query[traits.httpQuery] = serializer.flush();
        }
      }
      async deserializeResponse(operationSchema, context, response) {
        const deserializer = this.deserializer;
        const ns = NormalizedSchema.of(operationSchema.output);
        const dataObject = {};
        if (response.statusCode >= 300) {
          const bytes = await collectBody2(response.body, context);
          if (bytes.byteLength > 0) {
            Object.assign(dataObject, await deserializer.read(SCHEMA.DOCUMENT, bytes));
          }
          await this.handleError(operationSchema, context, response, dataObject, this.deserializeMetadata(response));
          throw new Error("@smithy/core/protocols - HTTP Protocol error handler failed to throw.");
        }
        for (const header in response.headers) {
          const value = response.headers[header];
          delete response.headers[header];
          response.headers[header.toLowerCase()] = value;
        }
        const headerBindings = new Set(Object.values(ns.getMemberSchemas()).map((schema) => {
          return schema.getMergedTraits().httpHeader;
        }).filter(Boolean));
        const nonHttpBindingMembers = await this.deserializeHttpMessage(ns, context, response, headerBindings, dataObject);
        if (nonHttpBindingMembers.length) {
          const bytes = await collectBody2(response.body, context);
          if (bytes.byteLength > 0) {
            const dataFromBody = await deserializer.read(ns, bytes);
            for (const member of nonHttpBindingMembers) {
              dataObject[member] = dataFromBody[member];
            }
          }
        }
        const output = {
          $metadata: this.deserializeMetadata(response),
          ...dataObject
        };
        return output;
      }
    };
  }
});

// ../../node_modules/.pnpm/@smithy+core@3.5.1/node_modules/@smithy/core/dist-es/submodules/protocols/RpcProtocol.js
var import_protocol_http4, RpcProtocol;
var init_RpcProtocol = __esm({
  "../../node_modules/.pnpm/@smithy+core@3.5.1/node_modules/@smithy/core/dist-es/submodules/protocols/RpcProtocol.js"() {
    init_schema();
    import_protocol_http4 = __toESM(require_dist_cjs2());
    init_collect_stream_body();
    init_HttpProtocol();
    RpcProtocol = class extends HttpProtocol {
      static {
        __name(this, "RpcProtocol");
      }
      async serializeRequest(operationSchema, input, context) {
        const serializer = this.serializer;
        const query = {};
        const headers = {};
        const endpoint = await context.endpoint();
        const ns = NormalizedSchema.of(operationSchema?.input);
        const schema = ns.getSchema();
        let payload;
        const request = new import_protocol_http4.HttpRequest({
          protocol: "",
          hostname: "",
          port: void 0,
          path: "/",
          fragment: void 0,
          query,
          headers,
          body: void 0
        });
        if (endpoint) {
          this.updateServiceEndpoint(request, endpoint);
          this.setHostPrefix(request, operationSchema, input);
        }
        const _input = {
          ...input
        };
        if (input) {
          serializer.write(schema, _input);
          payload = serializer.flush();
        }
        request.headers = headers;
        request.query = query;
        request.body = payload;
        request.method = "POST";
        return request;
      }
      async deserializeResponse(operationSchema, context, response) {
        const deserializer = this.deserializer;
        const ns = NormalizedSchema.of(operationSchema.output);
        const dataObject = {};
        if (response.statusCode >= 300) {
          const bytes2 = await collectBody2(response.body, context);
          if (bytes2.byteLength > 0) {
            Object.assign(dataObject, await deserializer.read(SCHEMA.DOCUMENT, bytes2));
          }
          await this.handleError(operationSchema, context, response, dataObject, this.deserializeMetadata(response));
          throw new Error("@smithy/core/protocols - RPC Protocol error handler failed to throw.");
        }
        for (const header in response.headers) {
          const value = response.headers[header];
          delete response.headers[header];
          response.headers[header.toLowerCase()] = value;
        }
        const bytes = await collectBody2(response.body, context);
        if (bytes.byteLength > 0) {
          Object.assign(dataObject, await deserializer.read(ns, bytes));
        }
        const output = {
          $metadata: this.deserializeMetadata(response),
          ...dataObject
        };
        return output;
      }
    };
  }
});

// ../../node_modules/.pnpm/@smithy+core@3.5.1/node_modules/@smithy/core/dist-es/submodules/protocols/resolve-path.js
var resolvedPath2;
var init_resolve_path = __esm({
  "../../node_modules/.pnpm/@smithy+core@3.5.1/node_modules/@smithy/core/dist-es/submodules/protocols/resolve-path.js"() {
    init_extended_encode_uri_component();
    resolvedPath2 = /* @__PURE__ */ __name((resolvedPath3, input, memberName, labelValueProvider, uriLabel, isGreedyLabel) => {
      if (input != null && input[memberName] !== void 0) {
        const labelValue = labelValueProvider();
        if (labelValue.length <= 0) {
          throw new Error("Empty value provided for input HTTP label: " + memberName + ".");
        }
        resolvedPath3 = resolvedPath3.replace(uriLabel, isGreedyLabel ? labelValue.split("/").map((segment) => extendedEncodeURIComponent2(segment)).join("/") : extendedEncodeURIComponent2(labelValue));
      } else {
        throw new Error("No value provided for input HTTP label: " + memberName + ".");
      }
      return resolvedPath3;
    }, "resolvedPath");
  }
});

// ../../node_modules/.pnpm/@smithy+core@3.5.1/node_modules/@smithy/core/dist-es/submodules/protocols/requestBuilder.js
function requestBuilder(input, context) {
  return new RequestBuilder(input, context);
}
var import_protocol_http5, RequestBuilder;
var init_requestBuilder = __esm({
  "../../node_modules/.pnpm/@smithy+core@3.5.1/node_modules/@smithy/core/dist-es/submodules/protocols/requestBuilder.js"() {
    import_protocol_http5 = __toESM(require_dist_cjs2());
    init_resolve_path();
    __name(requestBuilder, "requestBuilder");
    RequestBuilder = class {
      static {
        __name(this, "RequestBuilder");
      }
      constructor(input, context) {
        this.input = input;
        this.context = context;
        this.query = {};
        this.method = "";
        this.headers = {};
        this.path = "";
        this.body = null;
        this.hostname = "";
        this.resolvePathStack = [];
      }
      async build() {
        const { hostname, protocol = "https", port, path: basePath } = await this.context.endpoint();
        this.path = basePath;
        for (const resolvePath of this.resolvePathStack) {
          resolvePath(this.path);
        }
        return new import_protocol_http5.HttpRequest({
          protocol,
          hostname: this.hostname || hostname,
          port,
          method: this.method,
          path: this.path,
          query: this.query,
          body: this.body,
          headers: this.headers
        });
      }
      hn(hostname) {
        this.hostname = hostname;
        return this;
      }
      bp(uriLabel) {
        this.resolvePathStack.push((basePath) => {
          this.path = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + uriLabel;
        });
        return this;
      }
      p(memberName, labelValueProvider, uriLabel, isGreedyLabel) {
        this.resolvePathStack.push((path) => {
          this.path = resolvedPath2(path, this.input, memberName, labelValueProvider, uriLabel, isGreedyLabel);
        });
        return this;
      }
      h(headers) {
        this.headers = headers;
        return this;
      }
      q(query) {
        this.query = query;
        return this;
      }
      b(body) {
        this.body = body;
        return this;
      }
      m(method) {
        this.method = method;
        return this;
      }
    };
  }
});

// ../../node_modules/.pnpm/@smithy+core@3.5.1/node_modules/@smithy/core/dist-es/submodules/protocols/serde/determineTimestampFormat.js
function determineTimestampFormat(ns, settings) {
  if (settings.timestampFormat.useTrait) {
    if (ns.isTimestampSchema() && (ns.getSchema() === SCHEMA.TIMESTAMP_DATE_TIME || ns.getSchema() === SCHEMA.TIMESTAMP_HTTP_DATE || ns.getSchema() === SCHEMA.TIMESTAMP_EPOCH_SECONDS)) {
      return ns.getSchema();
    }
  }
  const { httpLabel, httpPrefixHeaders, httpHeader, httpQuery } = ns.getMergedTraits();
  const bindingFormat = settings.httpBindings ? typeof httpPrefixHeaders === "string" || Boolean(httpHeader) ? SCHEMA.TIMESTAMP_HTTP_DATE : Boolean(httpQuery) || Boolean(httpLabel) ? SCHEMA.TIMESTAMP_DATE_TIME : void 0 : void 0;
  return bindingFormat ?? settings.timestampFormat.default;
}
var init_determineTimestampFormat = __esm({
  "../../node_modules/.pnpm/@smithy+core@3.5.1/node_modules/@smithy/core/dist-es/submodules/protocols/serde/determineTimestampFormat.js"() {
    init_schema();
    __name(determineTimestampFormat, "determineTimestampFormat");
  }
});

// ../../node_modules/.pnpm/@smithy+core@3.5.1/node_modules/@smithy/core/dist-es/submodules/protocols/serde/FromStringShapeDeserializer.js
var import_util_base64, import_util_utf8, FromStringShapeDeserializer;
var init_FromStringShapeDeserializer = __esm({
  "../../node_modules/.pnpm/@smithy+core@3.5.1/node_modules/@smithy/core/dist-es/submodules/protocols/serde/FromStringShapeDeserializer.js"() {
    init_schema();
    init_serde();
    import_util_base64 = __toESM(require_dist_cjs10());
    import_util_utf8 = __toESM(require_dist_cjs9());
    init_determineTimestampFormat();
    FromStringShapeDeserializer = class {
      static {
        __name(this, "FromStringShapeDeserializer");
      }
      constructor(settings) {
        this.settings = settings;
      }
      setSerdeContext(serdeContext) {
        this.serdeContext = serdeContext;
      }
      read(_schema, data) {
        const ns = NormalizedSchema.of(_schema);
        if (ns.isListSchema()) {
          return splitHeader2(data).map((item) => this.read(ns.getValueSchema(), item));
        }
        if (ns.isBlobSchema()) {
          return (this.serdeContext?.base64Decoder ?? import_util_base64.fromBase64)(data);
        }
        if (ns.isTimestampSchema()) {
          const format = determineTimestampFormat(ns, this.settings);
          switch (format) {
            case SCHEMA.TIMESTAMP_DATE_TIME:
              return parseRfc3339DateTimeWithOffset2(data);
            case SCHEMA.TIMESTAMP_HTTP_DATE:
              return parseRfc7231DateTime2(data);
            case SCHEMA.TIMESTAMP_EPOCH_SECONDS:
              return parseEpochTimestamp2(data);
            default:
              console.warn("Missing timestamp format, parsing value with Date constructor:", data);
              return new Date(data);
          }
        }
        if (ns.isStringSchema()) {
          const mediaType = ns.getMergedTraits().mediaType;
          let intermediateValue = data;
          if (mediaType) {
            if (ns.getMergedTraits().httpHeader) {
              intermediateValue = this.base64ToUtf8(intermediateValue);
            }
            const isJson = mediaType === "application/json" || mediaType.endsWith("+json");
            if (isJson) {
              intermediateValue = LazyJsonString2.from(intermediateValue);
            }
            return intermediateValue;
          }
        }
        switch (true) {
          case ns.isNumericSchema():
            return Number(data);
          case ns.isBigIntegerSchema():
            return BigInt(data);
          case ns.isBigDecimalSchema():
            return new NumericValue2(data, "bigDecimal");
          case ns.isBooleanSchema():
            return String(data).toLowerCase() === "true";
        }
        return data;
      }
      base64ToUtf8(base64String) {
        return (this.serdeContext?.utf8Encoder ?? import_util_utf8.toUtf8)((this.serdeContext?.base64Decoder ?? import_util_base64.fromBase64)(base64String));
      }
    };
  }
});

// ../../node_modules/.pnpm/@smithy+core@3.5.1/node_modules/@smithy/core/dist-es/submodules/protocols/serde/HttpInterceptingShapeDeserializer.js
var import_util_utf82, HttpInterceptingShapeDeserializer;
var init_HttpInterceptingShapeDeserializer = __esm({
  "../../node_modules/.pnpm/@smithy+core@3.5.1/node_modules/@smithy/core/dist-es/submodules/protocols/serde/HttpInterceptingShapeDeserializer.js"() {
    init_schema();
    import_util_utf82 = __toESM(require_dist_cjs9());
    init_FromStringShapeDeserializer();
    HttpInterceptingShapeDeserializer = class {
      static {
        __name(this, "HttpInterceptingShapeDeserializer");
      }
      constructor(codecDeserializer, codecSettings) {
        this.codecDeserializer = codecDeserializer;
        this.stringDeserializer = new FromStringShapeDeserializer(codecSettings);
      }
      setSerdeContext(serdeContext) {
        this.stringDeserializer.setSerdeContext(serdeContext);
        this.codecDeserializer.setSerdeContext(serdeContext);
        this.serdeContext = serdeContext;
      }
      read(schema, data) {
        const ns = NormalizedSchema.of(schema);
        const traits = ns.getMergedTraits();
        const toString = this.serdeContext?.utf8Encoder ?? import_util_utf82.toUtf8;
        if (traits.httpHeader || traits.httpResponseCode) {
          return this.stringDeserializer.read(ns, toString(data));
        }
        if (traits.httpPayload) {
          if (ns.isBlobSchema()) {
            const toBytes = this.serdeContext?.utf8Decoder ?? import_util_utf82.fromUtf8;
            if (typeof data === "string") {
              return toBytes(data);
            }
            return data;
          } else if (ns.isStringSchema()) {
            if ("byteLength" in data) {
              return toString(data);
            }
            return data;
          }
        }
        return this.codecDeserializer.read(ns, data);
      }
    };
  }
});

// ../../node_modules/.pnpm/@smithy+core@3.5.1/node_modules/@smithy/core/dist-es/submodules/protocols/serde/ToStringShapeSerializer.js
var import_util_base642, ToStringShapeSerializer;
var init_ToStringShapeSerializer = __esm({
  "../../node_modules/.pnpm/@smithy+core@3.5.1/node_modules/@smithy/core/dist-es/submodules/protocols/serde/ToStringShapeSerializer.js"() {
    init_schema();
    init_serde();
    import_util_base642 = __toESM(require_dist_cjs10());
    init_determineTimestampFormat();
    ToStringShapeSerializer = class {
      static {
        __name(this, "ToStringShapeSerializer");
      }
      constructor(settings) {
        this.settings = settings;
        this.stringBuffer = "";
        this.serdeContext = void 0;
      }
      setSerdeContext(serdeContext) {
        this.serdeContext = serdeContext;
      }
      write(schema, value) {
        const ns = NormalizedSchema.of(schema);
        switch (typeof value) {
          case "object":
            if (value === null) {
              this.stringBuffer = "null";
              return;
            }
            if (ns.isTimestampSchema()) {
              if (!(value instanceof Date)) {
                throw new Error(`@smithy/core/protocols - received non-Date value ${value} when schema expected Date in ${ns.getName(true)}`);
              }
              const format = determineTimestampFormat(ns, this.settings);
              switch (format) {
                case SCHEMA.TIMESTAMP_DATE_TIME:
                  this.stringBuffer = value.toISOString().replace(".000Z", "Z");
                  break;
                case SCHEMA.TIMESTAMP_HTTP_DATE:
                  this.stringBuffer = dateToUtcString2(value);
                  break;
                case SCHEMA.TIMESTAMP_EPOCH_SECONDS:
                  this.stringBuffer = String(value.getTime() / 1e3);
                  break;
                default:
                  console.warn("Missing timestamp format, using epoch seconds", value);
                  this.stringBuffer = String(value.getTime() / 1e3);
              }
              return;
            }
            if (ns.isBlobSchema() && "byteLength" in value) {
              this.stringBuffer = (this.serdeContext?.base64Encoder ?? import_util_base642.toBase64)(value);
              return;
            }
            if (ns.isListSchema() && Array.isArray(value)) {
              let buffer = "";
              for (const item of value) {
                this.write([ns.getValueSchema(), ns.getMergedTraits()], item);
                const headerItem = this.flush();
                const serialized = ns.getValueSchema().isTimestampSchema() ? headerItem : quoteHeader2(headerItem);
                if (buffer !== "") {
                  buffer += ", ";
                }
                buffer += serialized;
              }
              this.stringBuffer = buffer;
              return;
            }
            this.stringBuffer = JSON.stringify(value, null, 2);
            break;
          case "string":
            const mediaType = ns.getMergedTraits().mediaType;
            let intermediateValue = value;
            if (mediaType) {
              const isJson = mediaType === "application/json" || mediaType.endsWith("+json");
              if (isJson) {
                intermediateValue = LazyJsonString2.from(intermediateValue);
              }
              if (ns.getMergedTraits().httpHeader) {
                this.stringBuffer = (this.serdeContext?.base64Encoder ?? import_util_base642.toBase64)(intermediateValue.toString());
                return;
              }
            }
            this.stringBuffer = value;
            break;
          default:
            this.stringBuffer = String(value);
        }
      }
      flush() {
        const buffer = this.stringBuffer;
        this.stringBuffer = "";
        return buffer;
      }
    };
  }
});

// ../../node_modules/.pnpm/@smithy+core@3.5.1/node_modules/@smithy/core/dist-es/submodules/protocols/serde/HttpInterceptingShapeSerializer.js
var HttpInterceptingShapeSerializer;
var init_HttpInterceptingShapeSerializer = __esm({
  "../../node_modules/.pnpm/@smithy+core@3.5.1/node_modules/@smithy/core/dist-es/submodules/protocols/serde/HttpInterceptingShapeSerializer.js"() {
    init_schema();
    init_ToStringShapeSerializer();
    HttpInterceptingShapeSerializer = class {
      static {
        __name(this, "HttpInterceptingShapeSerializer");
      }
      constructor(codecSerializer, codecSettings, stringSerializer = new ToStringShapeSerializer(codecSettings)) {
        this.codecSerializer = codecSerializer;
        this.stringSerializer = stringSerializer;
      }
      setSerdeContext(serdeContext) {
        this.codecSerializer.setSerdeContext(serdeContext);
        this.stringSerializer.setSerdeContext(serdeContext);
      }
      write(schema, value) {
        const ns = NormalizedSchema.of(schema);
        const traits = ns.getMergedTraits();
        if (traits.httpHeader || traits.httpLabel || traits.httpQuery) {
          this.stringSerializer.write(ns, value);
          this.buffer = this.stringSerializer.flush();
          return;
        }
        return this.codecSerializer.write(ns, value);
      }
      flush() {
        if (this.buffer !== void 0) {
          const buffer = this.buffer;
          this.buffer = void 0;
          return buffer;
        }
        return this.codecSerializer.flush();
      }
    };
  }
});

// ../../node_modules/.pnpm/@smithy+core@3.5.1/node_modules/@smithy/core/dist-es/submodules/protocols/index.js
var protocols_exports = {};
__export(protocols_exports, {
  FromStringShapeDeserializer: () => FromStringShapeDeserializer,
  HttpBindingProtocol: () => HttpBindingProtocol,
  HttpInterceptingShapeDeserializer: () => HttpInterceptingShapeDeserializer,
  HttpInterceptingShapeSerializer: () => HttpInterceptingShapeSerializer,
  RequestBuilder: () => RequestBuilder,
  RpcProtocol: () => RpcProtocol,
  ToStringShapeSerializer: () => ToStringShapeSerializer,
  collectBody: () => collectBody2,
  determineTimestampFormat: () => determineTimestampFormat,
  extendedEncodeURIComponent: () => extendedEncodeURIComponent2,
  requestBuilder: () => requestBuilder,
  resolvedPath: () => resolvedPath2
});
var init_protocols = __esm({
  "../../node_modules/.pnpm/@smithy+core@3.5.1/node_modules/@smithy/core/dist-es/submodules/protocols/index.js"() {
    init_collect_stream_body();
    init_extended_encode_uri_component();
    init_HttpBindingProtocol();
    init_RpcProtocol();
    init_requestBuilder();
    init_resolve_path();
    init_FromStringShapeDeserializer();
    init_HttpInterceptingShapeDeserializer();
    init_HttpInterceptingShapeSerializer();
    init_ToStringShapeSerializer();
    init_determineTimestampFormat();
  }
});

// ../../node_modules/.pnpm/@smithy+smithy-client@4.4.1/node_modules/@smithy/smithy-client/dist-cjs/index.js
var require_dist_cjs18 = __commonJS({
  "../../node_modules/.pnpm/@smithy+smithy-client@4.4.1/node_modules/@smithy/smithy-client/dist-cjs/index.js"(exports2, module2) {
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __name2 = /* @__PURE__ */ __name((target, value) => __defProp2(target, "name", { value, configurable: true }), "__name");
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: /* @__PURE__ */ __name(() => from[key], "get"), enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __reExport = /* @__PURE__ */ __name((target, mod, secondTarget) => (__copyProps2(target, mod, "default"), secondTarget && __copyProps2(secondTarget, mod, "default")), "__reExport");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var src_exports = {};
    __export2(src_exports, {
      Client: /* @__PURE__ */ __name(() => Client, "Client"),
      Command: /* @__PURE__ */ __name(() => Command, "Command"),
      NoOpLogger: /* @__PURE__ */ __name(() => NoOpLogger3, "NoOpLogger"),
      SENSITIVE_STRING: /* @__PURE__ */ __name(() => SENSITIVE_STRING3, "SENSITIVE_STRING"),
      ServiceException: /* @__PURE__ */ __name(() => ServiceException, "ServiceException"),
      _json: /* @__PURE__ */ __name(() => _json2, "_json"),
      collectBody: /* @__PURE__ */ __name(() => import_protocols2.collectBody, "collectBody"),
      convertMap: /* @__PURE__ */ __name(() => convertMap, "convertMap"),
      createAggregatedClient: /* @__PURE__ */ __name(() => createAggregatedClient3, "createAggregatedClient"),
      decorateServiceException: /* @__PURE__ */ __name(() => decorateServiceException, "decorateServiceException"),
      emitWarningIfUnsupportedVersion: /* @__PURE__ */ __name(() => emitWarningIfUnsupportedVersion4, "emitWarningIfUnsupportedVersion"),
      extendedEncodeURIComponent: /* @__PURE__ */ __name(() => import_protocols2.extendedEncodeURIComponent, "extendedEncodeURIComponent"),
      getArrayIfSingleItem: /* @__PURE__ */ __name(() => getArrayIfSingleItem, "getArrayIfSingleItem"),
      getDefaultClientConfiguration: /* @__PURE__ */ __name(() => getDefaultClientConfiguration, "getDefaultClientConfiguration"),
      getDefaultExtensionConfiguration: /* @__PURE__ */ __name(() => getDefaultExtensionConfiguration3, "getDefaultExtensionConfiguration"),
      getValueFromTextNode: /* @__PURE__ */ __name(() => getValueFromTextNode2, "getValueFromTextNode"),
      isSerializableHeaderValue: /* @__PURE__ */ __name(() => isSerializableHeaderValue, "isSerializableHeaderValue"),
      loadConfigsForDefaultMode: /* @__PURE__ */ __name(() => loadConfigsForDefaultMode3, "loadConfigsForDefaultMode"),
      map: /* @__PURE__ */ __name(() => map3, "map"),
      resolveDefaultRuntimeConfig: /* @__PURE__ */ __name(() => resolveDefaultRuntimeConfig3, "resolveDefaultRuntimeConfig"),
      resolvedPath: /* @__PURE__ */ __name(() => import_protocols2.resolvedPath, "resolvedPath"),
      serializeDateTime: /* @__PURE__ */ __name(() => serializeDateTime, "serializeDateTime"),
      serializeFloat: /* @__PURE__ */ __name(() => serializeFloat, "serializeFloat"),
      take: /* @__PURE__ */ __name(() => take2, "take"),
      throwDefaultError: /* @__PURE__ */ __name(() => throwDefaultError3, "throwDefaultError"),
      withBaseException: /* @__PURE__ */ __name(() => withBaseException3, "withBaseException")
    });
    module2.exports = __toCommonJS2(src_exports);
    var import_middleware_stack = require_dist_cjs6();
    var Client = class {
      static {
        __name(this, "Client");
      }
      constructor(config) {
        this.config = config;
        this.middlewareStack = (0, import_middleware_stack.constructStack)();
      }
      static {
        __name2(this, "Client");
      }
      send(command, optionsOrCb, cb) {
        const options = typeof optionsOrCb !== "function" ? optionsOrCb : void 0;
        const callback = typeof optionsOrCb === "function" ? optionsOrCb : cb;
        const useHandlerCache = options === void 0 && this.config.cacheMiddleware === true;
        let handler2;
        if (useHandlerCache) {
          if (!this.handlers) {
            this.handlers = /* @__PURE__ */ new WeakMap();
          }
          const handlers = this.handlers;
          if (handlers.has(command.constructor)) {
            handler2 = handlers.get(command.constructor);
          } else {
            handler2 = command.resolveMiddleware(this.middlewareStack, this.config, options);
            handlers.set(command.constructor, handler2);
          }
        } else {
          delete this.handlers;
          handler2 = command.resolveMiddleware(this.middlewareStack, this.config, options);
        }
        if (callback) {
          handler2(command).then(
            (result) => callback(null, result.output),
            (err) => callback(err)
          ).catch(
            // prevent any errors thrown in the callback from triggering an
            // unhandled promise rejection
            () => {
            }
          );
        } else {
          return handler2(command).then((result) => result.output);
        }
      }
      destroy() {
        this.config?.requestHandler?.destroy?.();
        delete this.handlers;
      }
    };
    var import_protocols2 = (init_protocols(), __toCommonJS(protocols_exports));
    var import_types5 = require_dist_cjs();
    var Command = class {
      static {
        __name(this, "Command");
      }
      constructor() {
        this.middlewareStack = (0, import_middleware_stack.constructStack)();
      }
      static {
        __name2(this, "Command");
      }
      /**
       * Factory for Command ClassBuilder.
       * @internal
       */
      static classBuilder() {
        return new ClassBuilder();
      }
      /**
       * @internal
       */
      resolveMiddlewareWithContext(clientStack, configuration, options, {
        middlewareFn,
        clientName,
        commandName,
        inputFilterSensitiveLog,
        outputFilterSensitiveLog,
        smithyContext,
        additionalContext,
        CommandCtor
      }) {
        for (const mw of middlewareFn.bind(this)(CommandCtor, clientStack, configuration, options)) {
          this.middlewareStack.use(mw);
        }
        const stack = clientStack.concat(this.middlewareStack);
        const { logger: logger3 } = configuration;
        const handlerExecutionContext = {
          logger: logger3,
          clientName,
          commandName,
          inputFilterSensitiveLog,
          outputFilterSensitiveLog,
          [import_types5.SMITHY_CONTEXT_KEY]: {
            commandInstance: this,
            ...smithyContext
          },
          ...additionalContext
        };
        const { requestHandler } = configuration;
        return stack.resolve(
          (request) => requestHandler.handle(request.request, options || {}),
          handlerExecutionContext
        );
      }
    };
    var ClassBuilder = class {
      static {
        __name(this, "ClassBuilder");
      }
      constructor() {
        this._init = () => {
        };
        this._ep = {};
        this._middlewareFn = () => [];
        this._commandName = "";
        this._clientName = "";
        this._additionalContext = {};
        this._smithyContext = {};
        this._inputFilterSensitiveLog = (_2) => _2;
        this._outputFilterSensitiveLog = (_2) => _2;
        this._serializer = null;
        this._deserializer = null;
      }
      static {
        __name2(this, "ClassBuilder");
      }
      /**
       * Optional init callback.
       */
      init(cb) {
        this._init = cb;
      }
      /**
       * Set the endpoint parameter instructions.
       */
      ep(endpointParameterInstructions) {
        this._ep = endpointParameterInstructions;
        return this;
      }
      /**
       * Add any number of middleware.
       */
      m(middlewareSupplier) {
        this._middlewareFn = middlewareSupplier;
        return this;
      }
      /**
       * Set the initial handler execution context Smithy field.
       */
      s(service, operation, smithyContext = {}) {
        this._smithyContext = {
          service,
          operation,
          ...smithyContext
        };
        return this;
      }
      /**
       * Set the initial handler execution context.
       */
      c(additionalContext = {}) {
        this._additionalContext = additionalContext;
        return this;
      }
      /**
       * Set constant string identifiers for the operation.
       */
      n(clientName, commandName) {
        this._clientName = clientName;
        this._commandName = commandName;
        return this;
      }
      /**
       * Set the input and output sensistive log filters.
       */
      f(inputFilter = (_2) => _2, outputFilter = (_2) => _2) {
        this._inputFilterSensitiveLog = inputFilter;
        this._outputFilterSensitiveLog = outputFilter;
        return this;
      }
      /**
       * Sets the serializer.
       */
      ser(serializer) {
        this._serializer = serializer;
        return this;
      }
      /**
       * Sets the deserializer.
       */
      de(deserializer) {
        this._deserializer = deserializer;
        return this;
      }
      /**
       * Sets input/output schema for the operation.
       */
      sc(operation) {
        this._operationSchema = operation;
        this._smithyContext.operationSchema = operation;
        return this;
      }
      /**
       * @returns a Command class with the classBuilder properties.
       */
      build() {
        const closure = this;
        let CommandRef;
        return CommandRef = class extends Command {
          static {
            __name(this, "CommandRef");
          }
          /**
           * @public
           */
          constructor(...[input]) {
            super();
            this.serialize = closure._serializer;
            this.deserialize = closure._deserializer;
            this.input = input ?? {};
            closure._init(this);
            this.schema = closure._operationSchema;
          }
          static {
            __name2(this, "CommandRef");
          }
          /**
           * @public
           */
          static getEndpointParameterInstructions() {
            return closure._ep;
          }
          /**
           * @internal
           */
          resolveMiddleware(stack, configuration, options) {
            return this.resolveMiddlewareWithContext(stack, configuration, options, {
              CommandCtor: CommandRef,
              middlewareFn: closure._middlewareFn,
              clientName: closure._clientName,
              commandName: closure._commandName,
              inputFilterSensitiveLog: closure._inputFilterSensitiveLog,
              outputFilterSensitiveLog: closure._outputFilterSensitiveLog,
              smithyContext: closure._smithyContext,
              additionalContext: closure._additionalContext
            });
          }
        };
      }
    };
    var SENSITIVE_STRING3 = "***SensitiveInformation***";
    var createAggregatedClient3 = __name2((commands3, Client2) => {
      for (const command of Object.keys(commands3)) {
        const CommandCtor = commands3[command];
        const methodImpl = __name2(async function(args, optionsOrCb, cb) {
          const command2 = new CommandCtor(args);
          if (typeof optionsOrCb === "function") {
            this.send(command2, optionsOrCb);
          } else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
              throw new Error(`Expected http options but got ${typeof optionsOrCb}`);
            this.send(command2, optionsOrCb || {}, cb);
          } else {
            return this.send(command2, optionsOrCb);
          }
        }, "methodImpl");
        const methodName = (command[0].toLowerCase() + command.slice(1)).replace(/Command$/, "");
        Client2.prototype[methodName] = methodImpl;
      }
    }, "createAggregatedClient");
    var ServiceException = class _ServiceException extends Error {
      static {
        __name(this, "_ServiceException");
      }
      static {
        __name2(this, "ServiceException");
      }
      constructor(options) {
        super(options.message);
        Object.setPrototypeOf(this, Object.getPrototypeOf(this).constructor.prototype);
        this.name = options.name;
        this.$fault = options.$fault;
        this.$metadata = options.$metadata;
      }
      /**
       * Checks if a value is an instance of ServiceException (duck typed)
       */
      static isInstance(value) {
        if (!value)
          return false;
        const candidate = value;
        return _ServiceException.prototype.isPrototypeOf(candidate) || Boolean(candidate.$fault) && Boolean(candidate.$metadata) && (candidate.$fault === "client" || candidate.$fault === "server");
      }
      /**
       * Custom instanceof check to support the operator for ServiceException base class
       */
      static [Symbol.hasInstance](instance) {
        if (!instance)
          return false;
        const candidate = instance;
        if (this === _ServiceException) {
          return _ServiceException.isInstance(instance);
        }
        if (_ServiceException.isInstance(instance)) {
          if (candidate.name && this.name) {
            return this.prototype.isPrototypeOf(instance) || candidate.name === this.name;
          }
          return this.prototype.isPrototypeOf(instance);
        }
        return false;
      }
    };
    var decorateServiceException = __name2((exception, additions = {}) => {
      Object.entries(additions).filter(([, v6]) => v6 !== void 0).forEach(([k3, v6]) => {
        if (exception[k3] == void 0 || exception[k3] === "") {
          exception[k3] = v6;
        }
      });
      const message = exception.message || exception.Message || "UnknownError";
      exception.message = message;
      delete exception.Message;
      return exception;
    }, "decorateServiceException");
    var throwDefaultError3 = __name2(({ output, parsedBody, exceptionCtor, errorCode }) => {
      const $metadata = deserializeMetadata3(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : void 0;
      const response = new exceptionCtor({
        name: parsedBody?.code || parsedBody?.Code || errorCode || statusCode || "UnknownError",
        $fault: "client",
        $metadata
      });
      throw decorateServiceException(response, parsedBody);
    }, "throwDefaultError");
    var withBaseException3 = __name2((ExceptionCtor) => {
      return ({ output, parsedBody, errorCode }) => {
        throwDefaultError3({ output, parsedBody, exceptionCtor: ExceptionCtor, errorCode });
      };
    }, "withBaseException");
    var deserializeMetadata3 = __name2((output) => ({
      httpStatusCode: output.statusCode,
      requestId: output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"] ?? output.headers["x-amz-request-id"],
      extendedRequestId: output.headers["x-amz-id-2"],
      cfId: output.headers["x-amz-cf-id"]
    }), "deserializeMetadata");
    var loadConfigsForDefaultMode3 = __name2((mode) => {
      switch (mode) {
        case "standard":
          return {
            retryMode: "standard",
            connectionTimeout: 3100
          };
        case "in-region":
          return {
            retryMode: "standard",
            connectionTimeout: 1100
          };
        case "cross-region":
          return {
            retryMode: "standard",
            connectionTimeout: 3100
          };
        case "mobile":
          return {
            retryMode: "standard",
            connectionTimeout: 3e4
          };
        default:
          return {};
      }
    }, "loadConfigsForDefaultMode");
    var warningEmitted = false;
    var emitWarningIfUnsupportedVersion4 = __name2((version2) => {
      if (version2 && !warningEmitted && parseInt(version2.substring(1, version2.indexOf("."))) < 16) {
        warningEmitted = true;
      }
    }, "emitWarningIfUnsupportedVersion");
    var getChecksumConfiguration = __name2((runtimeConfig) => {
      const checksumAlgorithms = [];
      for (const id in import_types5.AlgorithmId) {
        const algorithmId = import_types5.AlgorithmId[id];
        if (runtimeConfig[algorithmId] === void 0) {
          continue;
        }
        checksumAlgorithms.push({
          algorithmId: /* @__PURE__ */ __name(() => algorithmId, "algorithmId"),
          checksumConstructor: /* @__PURE__ */ __name(() => runtimeConfig[algorithmId], "checksumConstructor")
        });
      }
      return {
        addChecksumAlgorithm(algo) {
          checksumAlgorithms.push(algo);
        },
        checksumAlgorithms() {
          return checksumAlgorithms;
        }
      };
    }, "getChecksumConfiguration");
    var resolveChecksumRuntimeConfig = __name2((clientConfig) => {
      const runtimeConfig = {};
      clientConfig.checksumAlgorithms().forEach((checksumAlgorithm) => {
        runtimeConfig[checksumAlgorithm.algorithmId()] = checksumAlgorithm.checksumConstructor();
      });
      return runtimeConfig;
    }, "resolveChecksumRuntimeConfig");
    var getRetryConfiguration = __name2((runtimeConfig) => {
      return {
        setRetryStrategy(retryStrategy) {
          runtimeConfig.retryStrategy = retryStrategy;
        },
        retryStrategy() {
          return runtimeConfig.retryStrategy;
        }
      };
    }, "getRetryConfiguration");
    var resolveRetryRuntimeConfig = __name2((retryStrategyConfiguration) => {
      const runtimeConfig = {};
      runtimeConfig.retryStrategy = retryStrategyConfiguration.retryStrategy();
      return runtimeConfig;
    }, "resolveRetryRuntimeConfig");
    var getDefaultExtensionConfiguration3 = __name2((runtimeConfig) => {
      return Object.assign(getChecksumConfiguration(runtimeConfig), getRetryConfiguration(runtimeConfig));
    }, "getDefaultExtensionConfiguration");
    var getDefaultClientConfiguration = getDefaultExtensionConfiguration3;
    var resolveDefaultRuntimeConfig3 = __name2((config) => {
      return Object.assign(resolveChecksumRuntimeConfig(config), resolveRetryRuntimeConfig(config));
    }, "resolveDefaultRuntimeConfig");
    var getArrayIfSingleItem = __name2((mayBeArray) => Array.isArray(mayBeArray) ? mayBeArray : [mayBeArray], "getArrayIfSingleItem");
    var getValueFromTextNode2 = __name2((obj) => {
      const textNodeName = "#text";
      for (const key in obj) {
        if (obj.hasOwnProperty(key) && obj[key][textNodeName] !== void 0) {
          obj[key] = obj[key][textNodeName];
        } else if (typeof obj[key] === "object" && obj[key] !== null) {
          obj[key] = getValueFromTextNode2(obj[key]);
        }
      }
      return obj;
    }, "getValueFromTextNode");
    var isSerializableHeaderValue = __name2((value) => {
      return value != null;
    }, "isSerializableHeaderValue");
    var NoOpLogger3 = class {
      static {
        __name(this, "NoOpLogger");
      }
      static {
        __name2(this, "NoOpLogger");
      }
      trace() {
      }
      debug() {
      }
      info() {
      }
      warn() {
      }
      error() {
      }
    };
    function map3(arg0, arg1, arg2) {
      let target;
      let filter;
      let instructions;
      if (typeof arg1 === "undefined" && typeof arg2 === "undefined") {
        target = {};
        instructions = arg0;
      } else {
        target = arg0;
        if (typeof arg1 === "function") {
          filter = arg1;
          instructions = arg2;
          return mapWithFilter(target, filter, instructions);
        } else {
          instructions = arg1;
        }
      }
      for (const key of Object.keys(instructions)) {
        if (!Array.isArray(instructions[key])) {
          target[key] = instructions[key];
          continue;
        }
        applyInstruction(target, null, instructions, key);
      }
      return target;
    }
    __name(map3, "map");
    __name2(map3, "map");
    var convertMap = __name2((target) => {
      const output = {};
      for (const [k3, v6] of Object.entries(target || {})) {
        output[k3] = [, v6];
      }
      return output;
    }, "convertMap");
    var take2 = __name2((source, instructions) => {
      const out = {};
      for (const key in instructions) {
        applyInstruction(out, source, instructions, key);
      }
      return out;
    }, "take");
    var mapWithFilter = __name2((target, filter, instructions) => {
      return map3(
        target,
        Object.entries(instructions).reduce(
          (_instructions, [key, value]) => {
            if (Array.isArray(value)) {
              _instructions[key] = value;
            } else {
              if (typeof value === "function") {
                _instructions[key] = [filter, value()];
              } else {
                _instructions[key] = [filter, value];
              }
            }
            return _instructions;
          },
          {}
        )
      );
    }, "mapWithFilter");
    var applyInstruction = __name2((target, source, instructions, targetKey) => {
      if (source !== null) {
        let instruction = instructions[targetKey];
        if (typeof instruction === "function") {
          instruction = [, instruction];
        }
        const [filter2 = nonNullish, valueFn = pass, sourceKey = targetKey] = instruction;
        if (typeof filter2 === "function" && filter2(source[sourceKey]) || typeof filter2 !== "function" && !!filter2) {
          target[targetKey] = valueFn(source[sourceKey]);
        }
        return;
      }
      let [filter, value] = instructions[targetKey];
      if (typeof value === "function") {
        let _value;
        const defaultFilterPassed = filter === void 0 && (_value = value()) != null;
        const customFilterPassed = typeof filter === "function" && !!filter(void 0) || typeof filter !== "function" && !!filter;
        if (defaultFilterPassed) {
          target[targetKey] = _value;
        } else if (customFilterPassed) {
          target[targetKey] = value();
        }
      } else {
        const defaultFilterPassed = filter === void 0 && value != null;
        const customFilterPassed = typeof filter === "function" && !!filter(value) || typeof filter !== "function" && !!filter;
        if (defaultFilterPassed || customFilterPassed) {
          target[targetKey] = value;
        }
      }
    }, "applyInstruction");
    var nonNullish = __name2((_2) => _2 != null, "nonNullish");
    var pass = __name2((_2) => _2, "pass");
    var serializeFloat = __name2((value) => {
      if (value !== value) {
        return "NaN";
      }
      switch (value) {
        case Infinity:
          return "Infinity";
        case -Infinity:
          return "-Infinity";
        default:
          return value;
      }
    }, "serializeFloat");
    var serializeDateTime = __name2((date) => date.toISOString().replace(".000Z", "Z"), "serializeDateTime");
    var _json2 = __name2((obj) => {
      if (obj == null) {
        return {};
      }
      if (Array.isArray(obj)) {
        return obj.filter((_2) => _2 != null).map(_json2);
      }
      if (typeof obj === "object") {
        const target = {};
        for (const key of Object.keys(obj)) {
          if (obj[key] == null) {
            continue;
          }
          target[key] = _json2(obj[key]);
        }
        return target;
      }
      return obj;
    }, "_json");
    __reExport(src_exports, (init_serde(), __toCommonJS(serde_exports)), module2.exports);
  }
});

// ../../node_modules/.pnpm/@aws-sdk+middleware-sdk-sqs@3.821.0/node_modules/@aws-sdk/middleware-sdk-sqs/dist-cjs/index.js
var require_dist_cjs19 = __commonJS({
  "../../node_modules/.pnpm/@aws-sdk+middleware-sdk-sqs@3.821.0/node_modules/@aws-sdk/middleware-sdk-sqs/dist-cjs/index.js"(exports2, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __name2 = /* @__PURE__ */ __name((target, value) => __defProp2(target, "name", { value, configurable: true }), "__name");
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: /* @__PURE__ */ __name(() => from[key], "get"), enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var index_exports = {};
    __export2(index_exports, {
      getQueueUrlPlugin: /* @__PURE__ */ __name(() => getQueueUrlPlugin, "getQueueUrlPlugin"),
      getReceiveMessagePlugin: /* @__PURE__ */ __name(() => getReceiveMessagePlugin, "getReceiveMessagePlugin"),
      getSendMessageBatchPlugin: /* @__PURE__ */ __name(() => getSendMessageBatchPlugin, "getSendMessageBatchPlugin"),
      getSendMessagePlugin: /* @__PURE__ */ __name(() => getSendMessagePlugin, "getSendMessagePlugin"),
      queueUrlMiddleware: /* @__PURE__ */ __name(() => queueUrlMiddleware, "queueUrlMiddleware"),
      queueUrlMiddlewareOptions: /* @__PURE__ */ __name(() => queueUrlMiddlewareOptions, "queueUrlMiddlewareOptions"),
      receiveMessageMiddleware: /* @__PURE__ */ __name(() => receiveMessageMiddleware, "receiveMessageMiddleware"),
      receiveMessageMiddlewareOptions: /* @__PURE__ */ __name(() => receiveMessageMiddlewareOptions, "receiveMessageMiddlewareOptions"),
      resolveQueueUrlConfig: /* @__PURE__ */ __name(() => resolveQueueUrlConfig, "resolveQueueUrlConfig"),
      sendMessageBatchMiddleware: /* @__PURE__ */ __name(() => sendMessageBatchMiddleware, "sendMessageBatchMiddleware"),
      sendMessageBatchMiddlewareOptions: /* @__PURE__ */ __name(() => sendMessageBatchMiddlewareOptions, "sendMessageBatchMiddlewareOptions"),
      sendMessageMiddleware: /* @__PURE__ */ __name(() => sendMessageMiddleware, "sendMessageMiddleware"),
      sendMessageMiddlewareOptions: /* @__PURE__ */ __name(() => sendMessageMiddlewareOptions, "sendMessageMiddlewareOptions")
    });
    module2.exports = __toCommonJS2(index_exports);
    var import_smithy_client25 = require_dist_cjs18();
    var resolveQueueUrlConfig = __name2((config) => {
      return Object.assign(config, {
        useQueueUrlAsEndpoint: config.useQueueUrlAsEndpoint ?? true
      });
    }, "resolveQueueUrlConfig");
    function queueUrlMiddleware({ useQueueUrlAsEndpoint, endpoint }) {
      return (next, context) => {
        return async (args) => {
          const { input } = args;
          const resolvedEndpoint = context.endpointV2;
          if (!endpoint && input.QueueUrl && resolvedEndpoint && useQueueUrlAsEndpoint) {
            const logger3 = context.logger instanceof import_smithy_client25.NoOpLogger || !context.logger?.warn ? console : context.logger;
            try {
              const queueUrl = new URL(input.QueueUrl);
              const queueUrlOrigin = new URL(queueUrl.origin);
              if (resolvedEndpoint.url.origin !== queueUrlOrigin.origin) {
                logger3.warn(
                  `QueueUrl=${input.QueueUrl} differs from SQSClient resolved endpoint=${resolvedEndpoint.url.toString()}, using QueueUrl host as endpoint.
Set [endpoint=string] or [useQueueUrlAsEndpoint=false] on the SQSClient.`
                );
                context.endpointV2 = {
                  ...resolvedEndpoint,
                  url: queueUrlOrigin
                };
              }
            } catch (e3) {
              logger3.warn(e3);
            }
          }
          return next(args);
        };
      };
    }
    __name(queueUrlMiddleware, "queueUrlMiddleware");
    __name2(queueUrlMiddleware, "queueUrlMiddleware");
    var queueUrlMiddlewareOptions = {
      name: "queueUrlMiddleware",
      relation: "after",
      toMiddleware: "endpointV2Middleware",
      override: true
    };
    var getQueueUrlPlugin = __name2((config) => ({
      applyToStack: __name2((clientStack) => {
        clientStack.addRelativeTo(queueUrlMiddleware(config), queueUrlMiddlewareOptions);
      }, "applyToStack")
    }), "getQueueUrlPlugin");
    var import_util_hex_encoding = require_dist_cjs15();
    var import_util_utf85 = require_dist_cjs9();
    function receiveMessageMiddleware(options) {
      return (next) => async (args) => {
        const resp = await next({ ...args });
        if (options.md5 === false) {
          return resp;
        }
        const output = resp.output;
        const messageIds = [];
        if (output.Messages !== void 0) {
          for (const message of output.Messages) {
            const md52 = message.MD5OfBody;
            const hash = new options.md5();
            hash.update((0, import_util_utf85.toUint8Array)(message.Body || ""));
            if (md52 !== (0, import_util_hex_encoding.toHex)(await hash.digest())) {
              messageIds.push(message.MessageId);
            }
          }
        }
        if (messageIds.length > 0) {
          throw new Error("Invalid MD5 checksum on messages: " + messageIds.join(", "));
        }
        return resp;
      };
    }
    __name(receiveMessageMiddleware, "receiveMessageMiddleware");
    __name2(receiveMessageMiddleware, "receiveMessageMiddleware");
    var receiveMessageMiddlewareOptions = {
      step: "initialize",
      tags: ["VALIDATE_BODY_MD5"],
      name: "receiveMessageMiddleware",
      override: true
    };
    var getReceiveMessagePlugin = __name2((config) => ({
      applyToStack: __name2((clientStack) => {
        clientStack.add(receiveMessageMiddleware(config), receiveMessageMiddlewareOptions);
      }, "applyToStack")
    }), "getReceiveMessagePlugin");
    var import_util_utf822 = require_dist_cjs9();
    var sendMessageMiddleware = __name2((options) => (next) => async (args) => {
      const resp = await next({ ...args });
      if (options.md5 === false) {
        return resp;
      }
      const output = resp.output;
      const hash = new options.md5();
      hash.update((0, import_util_utf822.toUint8Array)(args.input.MessageBody || ""));
      if (output.MD5OfMessageBody !== (0, import_util_hex_encoding.toHex)(await hash.digest())) {
        throw new Error("InvalidChecksumError");
      }
      return resp;
    }, "sendMessageMiddleware");
    var sendMessageMiddlewareOptions = {
      step: "initialize",
      tags: ["VALIDATE_BODY_MD5"],
      name: "sendMessageMiddleware",
      override: true
    };
    var getSendMessagePlugin = __name2((config) => ({
      applyToStack: __name2((clientStack) => {
        clientStack.add(sendMessageMiddleware(config), sendMessageMiddlewareOptions);
      }, "applyToStack")
    }), "getSendMessagePlugin");
    var import_util_utf832 = require_dist_cjs9();
    var sendMessageBatchMiddleware = __name2((options) => (next) => async (args) => {
      const resp = await next({ ...args });
      if (options.md5 === false) {
        return resp;
      }
      const output = resp.output;
      const messageIds = [];
      const entries = {};
      if (output.Successful !== void 0) {
        for (const entry of output.Successful) {
          if (entry.Id !== void 0) {
            entries[entry.Id] = entry;
          }
        }
      }
      for (const entry of args.input.Entries) {
        if (entries[entry.Id]) {
          const md52 = entries[entry.Id].MD5OfMessageBody;
          const hash = new options.md5();
          hash.update((0, import_util_utf832.toUint8Array)(entry.MessageBody || ""));
          if (md52 !== (0, import_util_hex_encoding.toHex)(await hash.digest())) {
            messageIds.push(entries[entry.Id].MessageId);
          }
        }
      }
      if (messageIds.length > 0) {
        throw new Error("Invalid MD5 checksum on messages: " + messageIds.join(", "));
      }
      return resp;
    }, "sendMessageBatchMiddleware");
    var sendMessageBatchMiddlewareOptions = {
      step: "initialize",
      tags: ["VALIDATE_BODY_MD5"],
      name: "sendMessageBatchMiddleware",
      override: true
    };
    var getSendMessageBatchPlugin = __name2((config) => ({
      applyToStack: __name2((clientStack) => {
        clientStack.add(sendMessageBatchMiddleware(config), sendMessageBatchMiddlewareOptions);
      }, "applyToStack")
    }), "getSendMessageBatchPlugin");
  }
});

// ../../node_modules/.pnpm/@smithy+core@3.5.1/node_modules/@smithy/core/dist-es/getSmithyContext.js
var import_types, getSmithyContext3;
var init_getSmithyContext = __esm({
  "../../node_modules/.pnpm/@smithy+core@3.5.1/node_modules/@smithy/core/dist-es/getSmithyContext.js"() {
    import_types = __toESM(require_dist_cjs());
    getSmithyContext3 = /* @__PURE__ */ __name((context) => context[import_types.SMITHY_CONTEXT_KEY] || (context[import_types.SMITHY_CONTEXT_KEY] = {}), "getSmithyContext");
  }
});

// ../../node_modules/.pnpm/@smithy+core@3.5.1/node_modules/@smithy/core/dist-es/middleware-http-auth-scheme/resolveAuthOptions.js
var resolveAuthOptions;
var init_resolveAuthOptions = __esm({
  "../../node_modules/.pnpm/@smithy+core@3.5.1/node_modules/@smithy/core/dist-es/middleware-http-auth-scheme/resolveAuthOptions.js"() {
    resolveAuthOptions = /* @__PURE__ */ __name((candidateAuthOptions, authSchemePreference) => {
      if (!authSchemePreference || authSchemePreference.length === 0) {
        return candidateAuthOptions;
      }
      const preferredAuthOptions = [];
      for (const preferredSchemeName of authSchemePreference) {
        for (const candidateAuthOption of candidateAuthOptions) {
          const candidateAuthSchemeName = candidateAuthOption.schemeId.split("#")[1];
          if (candidateAuthSchemeName === preferredSchemeName) {
            preferredAuthOptions.push(candidateAuthOption);
          }
        }
      }
      for (const candidateAuthOption of candidateAuthOptions) {
        if (!preferredAuthOptions.find(({ schemeId }) => schemeId === candidateAuthOption.schemeId)) {
          preferredAuthOptions.push(candidateAuthOption);
        }
      }
      return preferredAuthOptions;
    }, "resolveAuthOptions");
  }
});

// ../../node_modules/.pnpm/@smithy+core@3.5.1/node_modules/@smithy/core/dist-es/middleware-http-auth-scheme/httpAuthSchemeMiddleware.js
function convertHttpAuthSchemesToMap(httpAuthSchemes) {
  const map3 = /* @__PURE__ */ new Map();
  for (const scheme of httpAuthSchemes) {
    map3.set(scheme.schemeId, scheme);
  }
  return map3;
}
var import_types2, import_util_middleware3, httpAuthSchemeMiddleware;
var init_httpAuthSchemeMiddleware = __esm({
  "../../node_modules/.pnpm/@smithy+core@3.5.1/node_modules/@smithy/core/dist-es/middleware-http-auth-scheme/httpAuthSchemeMiddleware.js"() {
    import_types2 = __toESM(require_dist_cjs());
    import_util_middleware3 = __toESM(require_dist_cjs17());
    init_resolveAuthOptions();
    __name(convertHttpAuthSchemesToMap, "convertHttpAuthSchemesToMap");
    httpAuthSchemeMiddleware = /* @__PURE__ */ __name((config, mwOptions) => (next, context) => async (args) => {
      const options = config.httpAuthSchemeProvider(await mwOptions.httpAuthSchemeParametersProvider(config, context, args.input));
      const authSchemePreference = config.authSchemePreference ? await config.authSchemePreference() : [];
      const resolvedOptions = resolveAuthOptions(options, authSchemePreference);
      const authSchemes = convertHttpAuthSchemesToMap(config.httpAuthSchemes);
      const smithyContext = (0, import_util_middleware3.getSmithyContext)(context);
      const failureReasons = [];
      for (const option of resolvedOptions) {
        const scheme = authSchemes.get(option.schemeId);
        if (!scheme) {
          failureReasons.push(`HttpAuthScheme \`${option.schemeId}\` was not enabled for this service.`);
          continue;
        }
        const identityProvider = scheme.identityProvider(await mwOptions.identityProviderConfigProvider(config));
        if (!identityProvider) {
          failureReasons.push(`HttpAuthScheme \`${option.schemeId}\` did not have an IdentityProvider configured.`);
          continue;
        }
        const { identityProperties = {}, signingProperties = {} } = option.propertiesExtractor?.(config, context) || {};
        option.identityProperties = Object.assign(option.identityProperties || {}, identityProperties);
        option.signingProperties = Object.assign(option.signingProperties || {}, signingProperties);
        smithyContext.selectedHttpAuthScheme = {
          httpAuthOption: option,
          identity: await identityProvider(option.identityProperties),
          signer: scheme.signer
        };
        break;
      }
      if (!smithyContext.selectedHttpAuthScheme) {
        throw new Error(failureReasons.join("\n"));
      }
      return next(args);
    }, "httpAuthSchemeMiddleware");
  }
});

// ../../node_modules/.pnpm/@smithy+core@3.5.1/node_modules/@smithy/core/dist-es/middleware-http-auth-scheme/getHttpAuthSchemeEndpointRuleSetPlugin.js
var httpAuthSchemeEndpointRuleSetMiddlewareOptions, getHttpAuthSchemeEndpointRuleSetPlugin;
var init_getHttpAuthSchemeEndpointRuleSetPlugin = __esm({
  "../../node_modules/.pnpm/@smithy+core@3.5.1/node_modules/@smithy/core/dist-es/middleware-http-auth-scheme/getHttpAuthSchemeEndpointRuleSetPlugin.js"() {
    init_httpAuthSchemeMiddleware();
    httpAuthSchemeEndpointRuleSetMiddlewareOptions = {
      step: "serialize",
      tags: ["HTTP_AUTH_SCHEME"],
      name: "httpAuthSchemeMiddleware",
      override: true,
      relation: "before",
      toMiddleware: "endpointV2Middleware"
    };
    getHttpAuthSchemeEndpointRuleSetPlugin = /* @__PURE__ */ __name((config, { httpAuthSchemeParametersProvider, identityProviderConfigProvider }) => ({
      applyToStack: /* @__PURE__ */ __name((clientStack) => {
        clientStack.addRelativeTo(httpAuthSchemeMiddleware(config, {
          httpAuthSchemeParametersProvider,
          identityProviderConfigProvider
        }), httpAuthSchemeEndpointRuleSetMiddlewareOptions);
      }, "applyToStack")
    }), "getHttpAuthSchemeEndpointRuleSetPlugin");
  }
});

// ../../node_modules/.pnpm/@smithy+middleware-serde@4.0.8/node_modules/@smithy/middleware-serde/dist-cjs/index.js
var require_dist_cjs20 = __commonJS({
  "../../node_modules/.pnpm/@smithy+middleware-serde@4.0.8/node_modules/@smithy/middleware-serde/dist-cjs/index.js"(exports2, module2) {
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __name2 = /* @__PURE__ */ __name((target, value) => __defProp2(target, "name", { value, configurable: true }), "__name");
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: /* @__PURE__ */ __name(() => from[key], "get"), enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var src_exports = {};
    __export2(src_exports, {
      deserializerMiddleware: /* @__PURE__ */ __name(() => deserializerMiddleware, "deserializerMiddleware"),
      deserializerMiddlewareOption: /* @__PURE__ */ __name(() => deserializerMiddlewareOption2, "deserializerMiddlewareOption"),
      getSerdePlugin: /* @__PURE__ */ __name(() => getSerdePlugin4, "getSerdePlugin"),
      serializerMiddleware: /* @__PURE__ */ __name(() => serializerMiddleware, "serializerMiddleware"),
      serializerMiddlewareOption: /* @__PURE__ */ __name(() => serializerMiddlewareOption3, "serializerMiddlewareOption")
    });
    module2.exports = __toCommonJS2(src_exports);
    var import_protocol_http15 = require_dist_cjs2();
    var deserializerMiddleware = __name2((options, deserializer) => (next, context) => async (args) => {
      const { response } = await next(args);
      try {
        const parsed = await deserializer(response, options);
        return {
          response,
          output: parsed
        };
      } catch (error2) {
        Object.defineProperty(error2, "$response", {
          value: response
        });
        if (!("$metadata" in error2)) {
          const hint = `Deserialization error: to see the raw response, inspect the hidden field {error}.$response on this object.`;
          try {
            error2.message += "\n  " + hint;
          } catch (e3) {
            if (!context.logger || context.logger?.constructor?.name === "NoOpLogger") {
              console.warn(hint);
            } else {
              context.logger?.warn?.(hint);
            }
          }
          if (typeof error2.$responseBodyText !== "undefined") {
            if (error2.$response) {
              error2.$response.body = error2.$responseBodyText;
            }
          }
          try {
            if (import_protocol_http15.HttpResponse.isInstance(response)) {
              const { headers = {} } = response;
              const headerEntries = Object.entries(headers);
              error2.$metadata = {
                httpStatusCode: response.statusCode,
                requestId: findHeader2(/^x-[\w-]+-request-?id$/, headerEntries),
                extendedRequestId: findHeader2(/^x-[\w-]+-id-2$/, headerEntries),
                cfId: findHeader2(/^x-[\w-]+-cf-id$/, headerEntries)
              };
            }
          } catch (e3) {
          }
        }
        throw error2;
      }
    }, "deserializerMiddleware");
    var findHeader2 = __name2((pattern, headers) => {
      return (headers.find(([k3]) => {
        return k3.match(pattern);
      }) || [void 0, void 0])[1];
    }, "findHeader");
    var serializerMiddleware = __name2((options, serializer) => (next, context) => async (args) => {
      const endpointConfig = options;
      const endpoint = context.endpointV2?.url && endpointConfig.urlParser ? async () => endpointConfig.urlParser(context.endpointV2.url) : endpointConfig.endpoint;
      if (!endpoint) {
        throw new Error("No valid endpoint provider available.");
      }
      const request = await serializer(args.input, { ...options, endpoint });
      return next({
        ...args,
        request
      });
    }, "serializerMiddleware");
    var deserializerMiddlewareOption2 = {
      name: "deserializerMiddleware",
      step: "deserialize",
      tags: ["DESERIALIZER"],
      override: true
    };
    var serializerMiddlewareOption3 = {
      name: "serializerMiddleware",
      step: "serialize",
      tags: ["SERIALIZER"],
      override: true
    };
    function getSerdePlugin4(config, serializer, deserializer) {
      return {
        applyToStack: /* @__PURE__ */ __name((commandStack) => {
          commandStack.add(deserializerMiddleware(config, deserializer), deserializerMiddlewareOption2);
          commandStack.add(serializerMiddleware(config, serializer), serializerMiddlewareOption3);
        }, "applyToStack")
      };
    }
    __name(getSerdePlugin4, "getSerdePlugin");
    __name2(getSerdePlugin4, "getSerdePlugin");
  }
});

// ../../node_modules/.pnpm/@smithy+core@3.5.1/node_modules/@smithy/core/dist-es/middleware-http-auth-scheme/getHttpAuthSchemePlugin.js
var import_middleware_serde, httpAuthSchemeMiddlewareOptions, getHttpAuthSchemePlugin;
var init_getHttpAuthSchemePlugin = __esm({
  "../../node_modules/.pnpm/@smithy+core@3.5.1/node_modules/@smithy/core/dist-es/middleware-http-auth-scheme/getHttpAuthSchemePlugin.js"() {
    import_middleware_serde = __toESM(require_dist_cjs20());
    init_httpAuthSchemeMiddleware();
    httpAuthSchemeMiddlewareOptions = {
      step: "serialize",
      tags: ["HTTP_AUTH_SCHEME"],
      name: "httpAuthSchemeMiddleware",
      override: true,
      relation: "before",
      toMiddleware: import_middleware_serde.serializerMiddlewareOption.name
    };
    getHttpAuthSchemePlugin = /* @__PURE__ */ __name((config, { httpAuthSchemeParametersProvider, identityProviderConfigProvider }) => ({
      applyToStack: /* @__PURE__ */ __name((clientStack) => {
        clientStack.addRelativeTo(httpAuthSchemeMiddleware(config, {
          httpAuthSchemeParametersProvider,
          identityProviderConfigProvider
        }), httpAuthSchemeMiddlewareOptions);
      }, "applyToStack")
    }), "getHttpAuthSchemePlugin");
  }
});

// ../../node_modules/.pnpm/@smithy+core@3.5.1/node_modules/@smithy/core/dist-es/middleware-http-auth-scheme/index.js
var init_middleware_http_auth_scheme = __esm({
  "../../node_modules/.pnpm/@smithy+core@3.5.1/node_modules/@smithy/core/dist-es/middleware-http-auth-scheme/index.js"() {
    init_httpAuthSchemeMiddleware();
    init_getHttpAuthSchemeEndpointRuleSetPlugin();
    init_getHttpAuthSchemePlugin();
  }
});

// ../../node_modules/.pnpm/@smithy+core@3.5.1/node_modules/@smithy/core/dist-es/middleware-http-signing/httpSigningMiddleware.js
var import_protocol_http6, import_types3, import_util_middleware4, defaultErrorHandler, defaultSuccessHandler, httpSigningMiddleware;
var init_httpSigningMiddleware = __esm({
  "../../node_modules/.pnpm/@smithy+core@3.5.1/node_modules/@smithy/core/dist-es/middleware-http-signing/httpSigningMiddleware.js"() {
    import_protocol_http6 = __toESM(require_dist_cjs2());
    import_types3 = __toESM(require_dist_cjs());
    import_util_middleware4 = __toESM(require_dist_cjs17());
    defaultErrorHandler = /* @__PURE__ */ __name((signingProperties) => (error2) => {
      throw error2;
    }, "defaultErrorHandler");
    defaultSuccessHandler = /* @__PURE__ */ __name((httpResponse, signingProperties) => {
    }, "defaultSuccessHandler");
    httpSigningMiddleware = /* @__PURE__ */ __name((config) => (next, context) => async (args) => {
      if (!import_protocol_http6.HttpRequest.isInstance(args.request)) {
        return next(args);
      }
      const smithyContext = (0, import_util_middleware4.getSmithyContext)(context);
      const scheme = smithyContext.selectedHttpAuthScheme;
      if (!scheme) {
        throw new Error(`No HttpAuthScheme was selected: unable to sign request`);
      }
      const { httpAuthOption: { signingProperties = {} }, identity, signer } = scheme;
      const output = await next({
        ...args,
        request: await signer.sign(args.request, identity, signingProperties)
      }).catch((signer.errorHandler || defaultErrorHandler)(signingProperties));
      (signer.successHandler || defaultSuccessHandler)(output.response, signingProperties);
      return output;
    }, "httpSigningMiddleware");
  }
});

// ../../node_modules/.pnpm/@smithy+core@3.5.1/node_modules/@smithy/core/dist-es/middleware-http-signing/getHttpSigningMiddleware.js
var httpSigningMiddlewareOptions, getHttpSigningPlugin;
var init_getHttpSigningMiddleware = __esm({
  "../../node_modules/.pnpm/@smithy+core@3.5.1/node_modules/@smithy/core/dist-es/middleware-http-signing/getHttpSigningMiddleware.js"() {
    init_httpSigningMiddleware();
    httpSigningMiddlewareOptions = {
      step: "finalizeRequest",
      tags: ["HTTP_SIGNING"],
      name: "httpSigningMiddleware",
      aliases: ["apiKeyMiddleware", "tokenMiddleware", "awsAuthMiddleware"],
      override: true,
      relation: "after",
      toMiddleware: "retryMiddleware"
    };
    getHttpSigningPlugin = /* @__PURE__ */ __name((config) => ({
      applyToStack: /* @__PURE__ */ __name((clientStack) => {
        clientStack.addRelativeTo(httpSigningMiddleware(config), httpSigningMiddlewareOptions);
      }, "applyToStack")
    }), "getHttpSigningPlugin");
  }
});

// ../../node_modules/.pnpm/@smithy+core@3.5.1/node_modules/@smithy/core/dist-es/middleware-http-signing/index.js
var init_middleware_http_signing = __esm({
  "../../node_modules/.pnpm/@smithy+core@3.5.1/node_modules/@smithy/core/dist-es/middleware-http-signing/index.js"() {
    init_httpSigningMiddleware();
    init_getHttpSigningMiddleware();
  }
});

// ../../node_modules/.pnpm/@smithy+core@3.5.1/node_modules/@smithy/core/dist-es/normalizeProvider.js
var normalizeProvider;
var init_normalizeProvider = __esm({
  "../../node_modules/.pnpm/@smithy+core@3.5.1/node_modules/@smithy/core/dist-es/normalizeProvider.js"() {
    normalizeProvider = /* @__PURE__ */ __name((input) => {
      if (typeof input === "function")
        return input;
      const promisified = Promise.resolve(input);
      return () => promisified;
    }, "normalizeProvider");
  }
});

// ../../node_modules/.pnpm/@smithy+core@3.5.1/node_modules/@smithy/core/dist-es/pagination/createPaginator.js
function createPaginator(ClientCtor, CommandCtor, inputTokenName, outputTokenName, pageSizeTokenName) {
  return /* @__PURE__ */ __name(async function* paginateOperation(config, input, ...additionalArguments) {
    const _input = input;
    let token = config.startingToken ?? _input[inputTokenName];
    let hasNext = true;
    let page;
    while (hasNext) {
      _input[inputTokenName] = token;
      if (pageSizeTokenName) {
        _input[pageSizeTokenName] = _input[pageSizeTokenName] ?? config.pageSize;
      }
      if (config.client instanceof ClientCtor) {
        page = await makePagedClientRequest(CommandCtor, config.client, input, config.withCommand, ...additionalArguments);
      } else {
        throw new Error(`Invalid client, expected instance of ${ClientCtor.name}`);
      }
      yield page;
      const prevToken = token;
      token = get(page, outputTokenName);
      hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
    }
    return void 0;
  }, "paginateOperation");
}
var makePagedClientRequest, get;
var init_createPaginator = __esm({
  "../../node_modules/.pnpm/@smithy+core@3.5.1/node_modules/@smithy/core/dist-es/pagination/createPaginator.js"() {
    makePagedClientRequest = /* @__PURE__ */ __name(async (CommandCtor, client, input, withCommand = (_2) => _2, ...args) => {
      let command = new CommandCtor(input);
      command = withCommand(command) ?? command;
      return await client.send(command, ...args);
    }, "makePagedClientRequest");
    __name(createPaginator, "createPaginator");
    get = /* @__PURE__ */ __name((fromObject, path) => {
      let cursor = fromObject;
      const pathComponents = path.split(".");
      for (const step of pathComponents) {
        if (!cursor || typeof cursor !== "object") {
          return void 0;
        }
        cursor = cursor[step];
      }
      return cursor;
    }, "get");
  }
});

// ../../node_modules/.pnpm/@smithy+core@3.5.1/node_modules/@smithy/core/dist-es/protocols/requestBuilder.js
var init_requestBuilder2 = __esm({
  "../../node_modules/.pnpm/@smithy+core@3.5.1/node_modules/@smithy/core/dist-es/protocols/requestBuilder.js"() {
    init_protocols();
  }
});

// ../../node_modules/.pnpm/@smithy+core@3.5.1/node_modules/@smithy/core/dist-es/setFeature.js
function setFeature(context, feature, value) {
  if (!context.__smithy_context) {
    context.__smithy_context = {
      features: {}
    };
  } else if (!context.__smithy_context.features) {
    context.__smithy_context.features = {};
  }
  context.__smithy_context.features[feature] = value;
}
var init_setFeature = __esm({
  "../../node_modules/.pnpm/@smithy+core@3.5.1/node_modules/@smithy/core/dist-es/setFeature.js"() {
    __name(setFeature, "setFeature");
  }
});

// ../../node_modules/.pnpm/@smithy+core@3.5.1/node_modules/@smithy/core/dist-es/util-identity-and-auth/DefaultIdentityProviderConfig.js
var DefaultIdentityProviderConfig;
var init_DefaultIdentityProviderConfig = __esm({
  "../../node_modules/.pnpm/@smithy+core@3.5.1/node_modules/@smithy/core/dist-es/util-identity-and-auth/DefaultIdentityProviderConfig.js"() {
    DefaultIdentityProviderConfig = class {
      static {
        __name(this, "DefaultIdentityProviderConfig");
      }
      constructor(config) {
        this.authSchemes = /* @__PURE__ */ new Map();
        for (const [key, value] of Object.entries(config)) {
          if (value !== void 0) {
            this.authSchemes.set(key, value);
          }
        }
      }
      getIdentityProvider(schemeId) {
        return this.authSchemes.get(schemeId);
      }
    };
  }
});

// ../../node_modules/.pnpm/@smithy+core@3.5.1/node_modules/@smithy/core/dist-es/util-identity-and-auth/httpAuthSchemes/httpApiKeyAuth.js
var import_protocol_http7, import_types4, HttpApiKeyAuthSigner;
var init_httpApiKeyAuth = __esm({
  "../../node_modules/.pnpm/@smithy+core@3.5.1/node_modules/@smithy/core/dist-es/util-identity-and-auth/httpAuthSchemes/httpApiKeyAuth.js"() {
    import_protocol_http7 = __toESM(require_dist_cjs2());
    import_types4 = __toESM(require_dist_cjs());
    HttpApiKeyAuthSigner = class {
      static {
        __name(this, "HttpApiKeyAuthSigner");
      }
      async sign(httpRequest, identity, signingProperties) {
        if (!signingProperties) {
          throw new Error("request could not be signed with `apiKey` since the `name` and `in` signer properties are missing");
        }
        if (!signingProperties.name) {
          throw new Error("request could not be signed with `apiKey` since the `name` signer property is missing");
        }
        if (!signingProperties.in) {
          throw new Error("request could not be signed with `apiKey` since the `in` signer property is missing");
        }
        if (!identity.apiKey) {
          throw new Error("request could not be signed with `apiKey` since the `apiKey` is not defined");
        }
        const clonedRequest = import_protocol_http7.HttpRequest.clone(httpRequest);
        if (signingProperties.in === import_types4.HttpApiKeyAuthLocation.QUERY) {
          clonedRequest.query[signingProperties.name] = identity.apiKey;
        } else if (signingProperties.in === import_types4.HttpApiKeyAuthLocation.HEADER) {
          clonedRequest.headers[signingProperties.name] = signingProperties.scheme ? `${signingProperties.scheme} ${identity.apiKey}` : identity.apiKey;
        } else {
          throw new Error("request can only be signed with `apiKey` locations `query` or `header`, but found: `" + signingProperties.in + "`");
        }
        return clonedRequest;
      }
    };
  }
});

// ../../node_modules/.pnpm/@smithy+core@3.5.1/node_modules/@smithy/core/dist-es/util-identity-and-auth/httpAuthSchemes/httpBearerAuth.js
var import_protocol_http8, HttpBearerAuthSigner;
var init_httpBearerAuth = __esm({
  "../../node_modules/.pnpm/@smithy+core@3.5.1/node_modules/@smithy/core/dist-es/util-identity-and-auth/httpAuthSchemes/httpBearerAuth.js"() {
    import_protocol_http8 = __toESM(require_dist_cjs2());
    HttpBearerAuthSigner = class {
      static {
        __name(this, "HttpBearerAuthSigner");
      }
      async sign(httpRequest, identity, signingProperties) {
        const clonedRequest = import_protocol_http8.HttpRequest.clone(httpRequest);
        if (!identity.token) {
          throw new Error("request could not be signed with `token` since the `token` is not defined");
        }
        clonedRequest.headers["Authorization"] = `Bearer ${identity.token}`;
        return clonedRequest;
      }
    };
  }
});

// ../../node_modules/.pnpm/@smithy+core@3.5.1/node_modules/@smithy/core/dist-es/util-identity-and-auth/httpAuthSchemes/noAuth.js
var NoAuthSigner;
var init_noAuth = __esm({
  "../../node_modules/.pnpm/@smithy+core@3.5.1/node_modules/@smithy/core/dist-es/util-identity-and-auth/httpAuthSchemes/noAuth.js"() {
    NoAuthSigner = class {
      static {
        __name(this, "NoAuthSigner");
      }
      async sign(httpRequest, identity, signingProperties) {
        return httpRequest;
      }
    };
  }
});

// ../../node_modules/.pnpm/@smithy+core@3.5.1/node_modules/@smithy/core/dist-es/util-identity-and-auth/httpAuthSchemes/index.js
var init_httpAuthSchemes = __esm({
  "../../node_modules/.pnpm/@smithy+core@3.5.1/node_modules/@smithy/core/dist-es/util-identity-and-auth/httpAuthSchemes/index.js"() {
    init_httpApiKeyAuth();
    init_httpBearerAuth();
    init_noAuth();
  }
});

// ../../node_modules/.pnpm/@smithy+core@3.5.1/node_modules/@smithy/core/dist-es/util-identity-and-auth/memoizeIdentityProvider.js
var createIsIdentityExpiredFunction, EXPIRATION_MS, isIdentityExpired, doesIdentityRequireRefresh, memoizeIdentityProvider;
var init_memoizeIdentityProvider = __esm({
  "../../node_modules/.pnpm/@smithy+core@3.5.1/node_modules/@smithy/core/dist-es/util-identity-and-auth/memoizeIdentityProvider.js"() {
    createIsIdentityExpiredFunction = /* @__PURE__ */ __name((expirationMs) => (identity) => doesIdentityRequireRefresh(identity) && identity.expiration.getTime() - Date.now() < expirationMs, "createIsIdentityExpiredFunction");
    EXPIRATION_MS = 3e5;
    isIdentityExpired = createIsIdentityExpiredFunction(EXPIRATION_MS);
    doesIdentityRequireRefresh = /* @__PURE__ */ __name((identity) => identity.expiration !== void 0, "doesIdentityRequireRefresh");
    memoizeIdentityProvider = /* @__PURE__ */ __name((provider, isExpired, requiresRefresh) => {
      if (provider === void 0) {
        return void 0;
      }
      const normalizedProvider = typeof provider !== "function" ? async () => Promise.resolve(provider) : provider;
      let resolved;
      let pending;
      let hasResult;
      let isConstant = false;
      const coalesceProvider = /* @__PURE__ */ __name(async (options) => {
        if (!pending) {
          pending = normalizedProvider(options);
        }
        try {
          resolved = await pending;
          hasResult = true;
          isConstant = false;
        } finally {
          pending = void 0;
        }
        return resolved;
      }, "coalesceProvider");
      if (isExpired === void 0) {
        return async (options) => {
          if (!hasResult || options?.forceRefresh) {
            resolved = await coalesceProvider(options);
          }
          return resolved;
        };
      }
      return async (options) => {
        if (!hasResult || options?.forceRefresh) {
          resolved = await coalesceProvider(options);
        }
        if (isConstant) {
          return resolved;
        }
        if (!requiresRefresh(resolved)) {
          isConstant = true;
          return resolved;
        }
        if (isExpired(resolved)) {
          await coalesceProvider(options);
          return resolved;
        }
        return resolved;
      };
    }, "memoizeIdentityProvider");
  }
});

// ../../node_modules/.pnpm/@smithy+core@3.5.1/node_modules/@smithy/core/dist-es/util-identity-and-auth/index.js
var init_util_identity_and_auth = __esm({
  "../../node_modules/.pnpm/@smithy+core@3.5.1/node_modules/@smithy/core/dist-es/util-identity-and-auth/index.js"() {
    init_DefaultIdentityProviderConfig();
    init_httpAuthSchemes();
    init_memoizeIdentityProvider();
  }
});

// ../../node_modules/.pnpm/@smithy+core@3.5.1/node_modules/@smithy/core/dist-es/index.js
var dist_es_exports = {};
__export(dist_es_exports, {
  DefaultIdentityProviderConfig: () => DefaultIdentityProviderConfig,
  EXPIRATION_MS: () => EXPIRATION_MS,
  HttpApiKeyAuthSigner: () => HttpApiKeyAuthSigner,
  HttpBearerAuthSigner: () => HttpBearerAuthSigner,
  NoAuthSigner: () => NoAuthSigner,
  createIsIdentityExpiredFunction: () => createIsIdentityExpiredFunction,
  createPaginator: () => createPaginator,
  doesIdentityRequireRefresh: () => doesIdentityRequireRefresh,
  getHttpAuthSchemeEndpointRuleSetPlugin: () => getHttpAuthSchemeEndpointRuleSetPlugin,
  getHttpAuthSchemePlugin: () => getHttpAuthSchemePlugin,
  getHttpSigningPlugin: () => getHttpSigningPlugin,
  getSmithyContext: () => getSmithyContext3,
  httpAuthSchemeEndpointRuleSetMiddlewareOptions: () => httpAuthSchemeEndpointRuleSetMiddlewareOptions,
  httpAuthSchemeMiddleware: () => httpAuthSchemeMiddleware,
  httpAuthSchemeMiddlewareOptions: () => httpAuthSchemeMiddlewareOptions,
  httpSigningMiddleware: () => httpSigningMiddleware,
  httpSigningMiddlewareOptions: () => httpSigningMiddlewareOptions,
  isIdentityExpired: () => isIdentityExpired,
  memoizeIdentityProvider: () => memoizeIdentityProvider,
  normalizeProvider: () => normalizeProvider,
  requestBuilder: () => requestBuilder,
  setFeature: () => setFeature
});
var init_dist_es = __esm({
  "../../node_modules/.pnpm/@smithy+core@3.5.1/node_modules/@smithy/core/dist-es/index.js"() {
    init_getSmithyContext();
    init_middleware_http_auth_scheme();
    init_middleware_http_signing();
    init_normalizeProvider();
    init_createPaginator();
    init_requestBuilder2();
    init_setFeature();
    init_util_identity_and_auth();
  }
});

// ../../node_modules/.pnpm/@smithy+util-endpoints@3.0.6/node_modules/@smithy/util-endpoints/dist-cjs/index.js
var require_dist_cjs21 = __commonJS({
  "../../node_modules/.pnpm/@smithy+util-endpoints@3.0.6/node_modules/@smithy/util-endpoints/dist-cjs/index.js"(exports2, module2) {
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __name2 = /* @__PURE__ */ __name((target, value) => __defProp2(target, "name", { value, configurable: true }), "__name");
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: /* @__PURE__ */ __name(() => from[key], "get"), enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var src_exports = {};
    __export2(src_exports, {
      EndpointCache: /* @__PURE__ */ __name(() => EndpointCache3, "EndpointCache"),
      EndpointError: /* @__PURE__ */ __name(() => EndpointError2, "EndpointError"),
      customEndpointFunctions: /* @__PURE__ */ __name(() => customEndpointFunctions3, "customEndpointFunctions"),
      isIpAddress: /* @__PURE__ */ __name(() => isIpAddress2, "isIpAddress"),
      isValidHostLabel: /* @__PURE__ */ __name(() => isValidHostLabel, "isValidHostLabel"),
      resolveEndpoint: /* @__PURE__ */ __name(() => resolveEndpoint4, "resolveEndpoint")
    });
    module2.exports = __toCommonJS2(src_exports);
    var EndpointCache3 = class {
      static {
        __name(this, "EndpointCache");
      }
      /**
       * @param [size] - desired average maximum capacity. A buffer of 10 additional keys will be allowed
       *                 before keys are dropped.
       * @param [params] - list of params to consider as part of the cache key.
       *
       * If the params list is not populated, no caching will happen.
       * This may be out of order depending on how the object is created and arrives to this class.
       */
      constructor({ size, params }) {
        this.data = /* @__PURE__ */ new Map();
        this.parameters = [];
        this.capacity = size ?? 50;
        if (params) {
          this.parameters = params;
        }
      }
      static {
        __name2(this, "EndpointCache");
      }
      /**
       * @param endpointParams - query for endpoint.
       * @param resolver - provider of the value if not present.
       * @returns endpoint corresponding to the query.
       */
      get(endpointParams, resolver) {
        const key = this.hash(endpointParams);
        if (key === false) {
          return resolver();
        }
        if (!this.data.has(key)) {
          if (this.data.size > this.capacity + 10) {
            const keys = this.data.keys();
            let i3 = 0;
            while (true) {
              const { value, done } = keys.next();
              this.data.delete(value);
              if (done || ++i3 > 10) {
                break;
              }
            }
          }
          this.data.set(key, resolver());
        }
        return this.data.get(key);
      }
      size() {
        return this.data.size;
      }
      /**
       * @returns cache key or false if not cachable.
       */
      hash(endpointParams) {
        let buffer = "";
        const { parameters } = this;
        if (parameters.length === 0) {
          return false;
        }
        for (const param of parameters) {
          const val2 = String(endpointParams[param] ?? "");
          if (val2.includes("|;")) {
            return false;
          }
          buffer += val2 + "|;";
        }
        return buffer;
      }
    };
    var IP_V4_REGEX = new RegExp(
      `^(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}$`
    );
    var isIpAddress2 = __name2((value) => IP_V4_REGEX.test(value) || value.startsWith("[") && value.endsWith("]"), "isIpAddress");
    var VALID_HOST_LABEL_REGEX = new RegExp(`^(?!.*-$)(?!-)[a-zA-Z0-9-]{1,63}$`);
    var isValidHostLabel = __name2((value, allowSubDomains = false) => {
      if (!allowSubDomains) {
        return VALID_HOST_LABEL_REGEX.test(value);
      }
      const labels = value.split(".");
      for (const label of labels) {
        if (!isValidHostLabel(label)) {
          return false;
        }
      }
      return true;
    }, "isValidHostLabel");
    var customEndpointFunctions3 = {};
    var debugId = "endpoints";
    function toDebugString(input) {
      if (typeof input !== "object" || input == null) {
        return input;
      }
      if ("ref" in input) {
        return `$${toDebugString(input.ref)}`;
      }
      if ("fn" in input) {
        return `${input.fn}(${(input.argv || []).map(toDebugString).join(", ")})`;
      }
      return JSON.stringify(input, null, 2);
    }
    __name(toDebugString, "toDebugString");
    __name2(toDebugString, "toDebugString");
    var EndpointError2 = class extends Error {
      static {
        __name(this, "EndpointError");
      }
      static {
        __name2(this, "EndpointError");
      }
      constructor(message) {
        super(message);
        this.name = "EndpointError";
      }
    };
    var booleanEquals = __name2((value1, value2) => value1 === value2, "booleanEquals");
    var getAttrPathList = __name2((path) => {
      const parts = path.split(".");
      const pathList = [];
      for (const part of parts) {
        const squareBracketIndex = part.indexOf("[");
        if (squareBracketIndex !== -1) {
          if (part.indexOf("]") !== part.length - 1) {
            throw new EndpointError2(`Path: '${path}' does not end with ']'`);
          }
          const arrayIndex = part.slice(squareBracketIndex + 1, -1);
          if (Number.isNaN(parseInt(arrayIndex))) {
            throw new EndpointError2(`Invalid array index: '${arrayIndex}' in path: '${path}'`);
          }
          if (squareBracketIndex !== 0) {
            pathList.push(part.slice(0, squareBracketIndex));
          }
          pathList.push(arrayIndex);
        } else {
          pathList.push(part);
        }
      }
      return pathList;
    }, "getAttrPathList");
    var getAttr = __name2((value, path) => getAttrPathList(path).reduce((acc, index) => {
      if (typeof acc !== "object") {
        throw new EndpointError2(`Index '${index}' in '${path}' not found in '${JSON.stringify(value)}'`);
      } else if (Array.isArray(acc)) {
        return acc[parseInt(index)];
      }
      return acc[index];
    }, value), "getAttr");
    var isSet = __name2((value) => value != null, "isSet");
    var not = __name2((value) => !value, "not");
    var import_types32 = require_dist_cjs();
    var DEFAULT_PORTS = {
      [import_types32.EndpointURLScheme.HTTP]: 80,
      [import_types32.EndpointURLScheme.HTTPS]: 443
    };
    var parseURL = __name2((value) => {
      const whatwgURL = (() => {
        try {
          if (value instanceof URL) {
            return value;
          }
          if (typeof value === "object" && "hostname" in value) {
            const { hostname: hostname2, port, protocol: protocol2 = "", path = "", query = {} } = value;
            const url = new URL(`${protocol2}//${hostname2}${port ? `:${port}` : ""}${path}`);
            url.search = Object.entries(query).map(([k3, v6]) => `${k3}=${v6}`).join("&");
            return url;
          }
          return new URL(value);
        } catch (error2) {
          return null;
        }
      })();
      if (!whatwgURL) {
        console.error(`Unable to parse ${JSON.stringify(value)} as a whatwg URL.`);
        return null;
      }
      const urlString = whatwgURL.href;
      const { host, hostname, pathname, protocol, search } = whatwgURL;
      if (search) {
        return null;
      }
      const scheme = protocol.slice(0, -1);
      if (!Object.values(import_types32.EndpointURLScheme).includes(scheme)) {
        return null;
      }
      const isIp = isIpAddress2(hostname);
      const inputContainsDefaultPort = urlString.includes(`${host}:${DEFAULT_PORTS[scheme]}`) || typeof value === "string" && value.includes(`${host}:${DEFAULT_PORTS[scheme]}`);
      const authority = `${host}${inputContainsDefaultPort ? `:${DEFAULT_PORTS[scheme]}` : ``}`;
      return {
        scheme,
        authority,
        path: pathname,
        normalizedPath: pathname.endsWith("/") ? pathname : `${pathname}/`,
        isIp
      };
    }, "parseURL");
    var stringEquals = __name2((value1, value2) => value1 === value2, "stringEquals");
    var substring = __name2((input, start, stop, reverse) => {
      if (start >= stop || input.length < stop) {
        return null;
      }
      if (!reverse) {
        return input.substring(start, stop);
      }
      return input.substring(input.length - stop, input.length - start);
    }, "substring");
    var uriEncode = __name2((value) => encodeURIComponent(value).replace(/[!*'()]/g, (c3) => `%${c3.charCodeAt(0).toString(16).toUpperCase()}`), "uriEncode");
    var endpointFunctions = {
      booleanEquals,
      getAttr,
      isSet,
      isValidHostLabel,
      not,
      parseURL,
      stringEquals,
      substring,
      uriEncode
    };
    var evaluateTemplate = __name2((template, options) => {
      const evaluatedTemplateArr = [];
      const templateContext = {
        ...options.endpointParams,
        ...options.referenceRecord
      };
      let currentIndex = 0;
      while (currentIndex < template.length) {
        const openingBraceIndex = template.indexOf("{", currentIndex);
        if (openingBraceIndex === -1) {
          evaluatedTemplateArr.push(template.slice(currentIndex));
          break;
        }
        evaluatedTemplateArr.push(template.slice(currentIndex, openingBraceIndex));
        const closingBraceIndex = template.indexOf("}", openingBraceIndex);
        if (closingBraceIndex === -1) {
          evaluatedTemplateArr.push(template.slice(openingBraceIndex));
          break;
        }
        if (template[openingBraceIndex + 1] === "{" && template[closingBraceIndex + 1] === "}") {
          evaluatedTemplateArr.push(template.slice(openingBraceIndex + 1, closingBraceIndex));
          currentIndex = closingBraceIndex + 2;
        }
        const parameterName = template.substring(openingBraceIndex + 1, closingBraceIndex);
        if (parameterName.includes("#")) {
          const [refName, attrName] = parameterName.split("#");
          evaluatedTemplateArr.push(getAttr(templateContext[refName], attrName));
        } else {
          evaluatedTemplateArr.push(templateContext[parameterName]);
        }
        currentIndex = closingBraceIndex + 1;
      }
      return evaluatedTemplateArr.join("");
    }, "evaluateTemplate");
    var getReferenceValue = __name2(({ ref }, options) => {
      const referenceRecord = {
        ...options.endpointParams,
        ...options.referenceRecord
      };
      return referenceRecord[ref];
    }, "getReferenceValue");
    var evaluateExpression = __name2((obj, keyName, options) => {
      if (typeof obj === "string") {
        return evaluateTemplate(obj, options);
      } else if (obj["fn"]) {
        return callFunction(obj, options);
      } else if (obj["ref"]) {
        return getReferenceValue(obj, options);
      }
      throw new EndpointError2(`'${keyName}': ${String(obj)} is not a string, function or reference.`);
    }, "evaluateExpression");
    var callFunction = __name2(({ fn, argv }, options) => {
      const evaluatedArgs = argv.map(
        (arg) => ["boolean", "number"].includes(typeof arg) ? arg : evaluateExpression(arg, "arg", options)
      );
      const fnSegments = fn.split(".");
      if (fnSegments[0] in customEndpointFunctions3 && fnSegments[1] != null) {
        return customEndpointFunctions3[fnSegments[0]][fnSegments[1]](...evaluatedArgs);
      }
      return endpointFunctions[fn](...evaluatedArgs);
    }, "callFunction");
    var evaluateCondition = __name2(({ assign, ...fnArgs }, options) => {
      if (assign && assign in options.referenceRecord) {
        throw new EndpointError2(`'${assign}' is already defined in Reference Record.`);
      }
      const value = callFunction(fnArgs, options);
      options.logger?.debug?.(`${debugId} evaluateCondition: ${toDebugString(fnArgs)} = ${toDebugString(value)}`);
      return {
        result: value === "" ? true : !!value,
        ...assign != null && { toAssign: { name: assign, value } }
      };
    }, "evaluateCondition");
    var evaluateConditions = __name2((conditions = [], options) => {
      const conditionsReferenceRecord = {};
      for (const condition of conditions) {
        const { result, toAssign } = evaluateCondition(condition, {
          ...options,
          referenceRecord: {
            ...options.referenceRecord,
            ...conditionsReferenceRecord
          }
        });
        if (!result) {
          return { result };
        }
        if (toAssign) {
          conditionsReferenceRecord[toAssign.name] = toAssign.value;
          options.logger?.debug?.(`${debugId} assign: ${toAssign.name} := ${toDebugString(toAssign.value)}`);
        }
      }
      return { result: true, referenceRecord: conditionsReferenceRecord };
    }, "evaluateConditions");
    var getEndpointHeaders = __name2((headers, options) => Object.entries(headers).reduce(
      (acc, [headerKey, headerVal]) => ({
        ...acc,
        [headerKey]: headerVal.map((headerValEntry) => {
          const processedExpr = evaluateExpression(headerValEntry, "Header value entry", options);
          if (typeof processedExpr !== "string") {
            throw new EndpointError2(`Header '${headerKey}' value '${processedExpr}' is not a string`);
          }
          return processedExpr;
        })
      }),
      {}
    ), "getEndpointHeaders");
    var getEndpointProperty = __name2((property, options) => {
      if (Array.isArray(property)) {
        return property.map((propertyEntry) => getEndpointProperty(propertyEntry, options));
      }
      switch (typeof property) {
        case "string":
          return evaluateTemplate(property, options);
        case "object":
          if (property === null) {
            throw new EndpointError2(`Unexpected endpoint property: ${property}`);
          }
          return getEndpointProperties(property, options);
        case "boolean":
          return property;
        default:
          throw new EndpointError2(`Unexpected endpoint property type: ${typeof property}`);
      }
    }, "getEndpointProperty");
    var getEndpointProperties = __name2((properties, options) => Object.entries(properties).reduce(
      (acc, [propertyKey, propertyVal]) => ({
        ...acc,
        [propertyKey]: getEndpointProperty(propertyVal, options)
      }),
      {}
    ), "getEndpointProperties");
    var getEndpointUrl = __name2((endpointUrl, options) => {
      const expression = evaluateExpression(endpointUrl, "Endpoint URL", options);
      if (typeof expression === "string") {
        try {
          return new URL(expression);
        } catch (error2) {
          console.error(`Failed to construct URL with ${expression}`, error2);
          throw error2;
        }
      }
      throw new EndpointError2(`Endpoint URL must be a string, got ${typeof expression}`);
    }, "getEndpointUrl");
    var evaluateEndpointRule = __name2((endpointRule, options) => {
      const { conditions, endpoint } = endpointRule;
      const { result, referenceRecord } = evaluateConditions(conditions, options);
      if (!result) {
        return;
      }
      const endpointRuleOptions = {
        ...options,
        referenceRecord: { ...options.referenceRecord, ...referenceRecord }
      };
      const { url, properties, headers } = endpoint;
      options.logger?.debug?.(`${debugId} Resolving endpoint from template: ${toDebugString(endpoint)}`);
      return {
        ...headers != void 0 && {
          headers: getEndpointHeaders(headers, endpointRuleOptions)
        },
        ...properties != void 0 && {
          properties: getEndpointProperties(properties, endpointRuleOptions)
        },
        url: getEndpointUrl(url, endpointRuleOptions)
      };
    }, "evaluateEndpointRule");
    var evaluateErrorRule = __name2((errorRule, options) => {
      const { conditions, error: error2 } = errorRule;
      const { result, referenceRecord } = evaluateConditions(conditions, options);
      if (!result) {
        return;
      }
      throw new EndpointError2(
        evaluateExpression(error2, "Error", {
          ...options,
          referenceRecord: { ...options.referenceRecord, ...referenceRecord }
        })
      );
    }, "evaluateErrorRule");
    var evaluateTreeRule = __name2((treeRule, options) => {
      const { conditions, rules } = treeRule;
      const { result, referenceRecord } = evaluateConditions(conditions, options);
      if (!result) {
        return;
      }
      return evaluateRules(rules, {
        ...options,
        referenceRecord: { ...options.referenceRecord, ...referenceRecord }
      });
    }, "evaluateTreeRule");
    var evaluateRules = __name2((rules, options) => {
      for (const rule of rules) {
        if (rule.type === "endpoint") {
          const endpointOrUndefined = evaluateEndpointRule(rule, options);
          if (endpointOrUndefined) {
            return endpointOrUndefined;
          }
        } else if (rule.type === "error") {
          evaluateErrorRule(rule, options);
        } else if (rule.type === "tree") {
          const endpointOrUndefined = evaluateTreeRule(rule, options);
          if (endpointOrUndefined) {
            return endpointOrUndefined;
          }
        } else {
          throw new EndpointError2(`Unknown endpoint rule: ${rule}`);
        }
      }
      throw new EndpointError2(`Rules evaluation failed`);
    }, "evaluateRules");
    var resolveEndpoint4 = __name2((ruleSetObject, options) => {
      const { endpointParams, logger: logger3 } = options;
      const { parameters, rules } = ruleSetObject;
      options.logger?.debug?.(`${debugId} Initial EndpointParams: ${toDebugString(endpointParams)}`);
      const paramsWithDefault = Object.entries(parameters).filter(([, v6]) => v6.default != null).map(([k3, v6]) => [k3, v6.default]);
      if (paramsWithDefault.length > 0) {
        for (const [paramKey, paramDefaultValue] of paramsWithDefault) {
          endpointParams[paramKey] = endpointParams[paramKey] ?? paramDefaultValue;
        }
      }
      const requiredParams = Object.entries(parameters).filter(([, v6]) => v6.required).map(([k3]) => k3);
      for (const requiredParam of requiredParams) {
        if (endpointParams[requiredParam] == null) {
          throw new EndpointError2(`Missing required parameter: '${requiredParam}'`);
        }
      }
      const endpoint = evaluateRules(rules, { endpointParams, logger: logger3, referenceRecord: {} });
      options.logger?.debug?.(`${debugId} Resolved endpoint: ${toDebugString(endpoint)}`);
      return endpoint;
    }, "resolveEndpoint");
  }
});

// ../../node_modules/.pnpm/@aws-sdk+util-endpoints@3.821.0/node_modules/@aws-sdk/util-endpoints/dist-cjs/index.js
var require_dist_cjs22 = __commonJS({
  "../../node_modules/.pnpm/@aws-sdk+util-endpoints@3.821.0/node_modules/@aws-sdk/util-endpoints/dist-cjs/index.js"(exports2, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __name2 = /* @__PURE__ */ __name((target, value) => __defProp2(target, "name", { value, configurable: true }), "__name");
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: /* @__PURE__ */ __name(() => from[key], "get"), enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var index_exports = {};
    __export2(index_exports, {
      ConditionObject: /* @__PURE__ */ __name(() => import_util_endpoints5.ConditionObject, "ConditionObject"),
      DeprecatedObject: /* @__PURE__ */ __name(() => import_util_endpoints5.DeprecatedObject, "DeprecatedObject"),
      EndpointError: /* @__PURE__ */ __name(() => import_util_endpoints5.EndpointError, "EndpointError"),
      EndpointObject: /* @__PURE__ */ __name(() => import_util_endpoints5.EndpointObject, "EndpointObject"),
      EndpointObjectHeaders: /* @__PURE__ */ __name(() => import_util_endpoints5.EndpointObjectHeaders, "EndpointObjectHeaders"),
      EndpointObjectProperties: /* @__PURE__ */ __name(() => import_util_endpoints5.EndpointObjectProperties, "EndpointObjectProperties"),
      EndpointParams: /* @__PURE__ */ __name(() => import_util_endpoints5.EndpointParams, "EndpointParams"),
      EndpointResolverOptions: /* @__PURE__ */ __name(() => import_util_endpoints5.EndpointResolverOptions, "EndpointResolverOptions"),
      EndpointRuleObject: /* @__PURE__ */ __name(() => import_util_endpoints5.EndpointRuleObject, "EndpointRuleObject"),
      ErrorRuleObject: /* @__PURE__ */ __name(() => import_util_endpoints5.ErrorRuleObject, "ErrorRuleObject"),
      EvaluateOptions: /* @__PURE__ */ __name(() => import_util_endpoints5.EvaluateOptions, "EvaluateOptions"),
      Expression: /* @__PURE__ */ __name(() => import_util_endpoints5.Expression, "Expression"),
      FunctionArgv: /* @__PURE__ */ __name(() => import_util_endpoints5.FunctionArgv, "FunctionArgv"),
      FunctionObject: /* @__PURE__ */ __name(() => import_util_endpoints5.FunctionObject, "FunctionObject"),
      FunctionReturn: /* @__PURE__ */ __name(() => import_util_endpoints5.FunctionReturn, "FunctionReturn"),
      ParameterObject: /* @__PURE__ */ __name(() => import_util_endpoints5.ParameterObject, "ParameterObject"),
      ReferenceObject: /* @__PURE__ */ __name(() => import_util_endpoints5.ReferenceObject, "ReferenceObject"),
      ReferenceRecord: /* @__PURE__ */ __name(() => import_util_endpoints5.ReferenceRecord, "ReferenceRecord"),
      RuleSetObject: /* @__PURE__ */ __name(() => import_util_endpoints5.RuleSetObject, "RuleSetObject"),
      RuleSetRules: /* @__PURE__ */ __name(() => import_util_endpoints5.RuleSetRules, "RuleSetRules"),
      TreeRuleObject: /* @__PURE__ */ __name(() => import_util_endpoints5.TreeRuleObject, "TreeRuleObject"),
      awsEndpointFunctions: /* @__PURE__ */ __name(() => awsEndpointFunctions3, "awsEndpointFunctions"),
      getUserAgentPrefix: /* @__PURE__ */ __name(() => getUserAgentPrefix, "getUserAgentPrefix"),
      isIpAddress: /* @__PURE__ */ __name(() => import_util_endpoints5.isIpAddress, "isIpAddress"),
      partition: /* @__PURE__ */ __name(() => partition, "partition"),
      resolveEndpoint: /* @__PURE__ */ __name(() => import_util_endpoints5.resolveEndpoint, "resolveEndpoint"),
      setPartitionInfo: /* @__PURE__ */ __name(() => setPartitionInfo, "setPartitionInfo"),
      useDefaultPartitionInfo: /* @__PURE__ */ __name(() => useDefaultPartitionInfo, "useDefaultPartitionInfo")
    });
    module2.exports = __toCommonJS2(index_exports);
    var import_util_endpoints5 = require_dist_cjs21();
    var isVirtualHostableS3Bucket = __name2((value, allowSubDomains = false) => {
      if (allowSubDomains) {
        for (const label of value.split(".")) {
          if (!isVirtualHostableS3Bucket(label)) {
            return false;
          }
        }
        return true;
      }
      if (!(0, import_util_endpoints5.isValidHostLabel)(value)) {
        return false;
      }
      if (value.length < 3 || value.length > 63) {
        return false;
      }
      if (value !== value.toLowerCase()) {
        return false;
      }
      if ((0, import_util_endpoints5.isIpAddress)(value)) {
        return false;
      }
      return true;
    }, "isVirtualHostableS3Bucket");
    var ARN_DELIMITER = ":";
    var RESOURCE_DELIMITER = "/";
    var parseArn = __name2((value) => {
      const segments = value.split(ARN_DELIMITER);
      if (segments.length < 6) return null;
      const [arn, partition2, service, region, accountId, ...resourcePath] = segments;
      if (arn !== "arn" || partition2 === "" || service === "" || resourcePath.join(ARN_DELIMITER) === "") return null;
      const resourceId = resourcePath.map((resource) => resource.split(RESOURCE_DELIMITER)).flat();
      return {
        partition: partition2,
        service,
        region,
        accountId,
        resourceId
      };
    }, "parseArn");
    var partitions_default = {
      partitions: [{
        id: "aws",
        outputs: {
          dnsSuffix: "amazonaws.com",
          dualStackDnsSuffix: "api.aws",
          implicitGlobalRegion: "us-east-1",
          name: "aws",
          supportsDualStack: true,
          supportsFIPS: true
        },
        regionRegex: "^(us|eu|ap|sa|ca|me|af|il|mx)\\-\\w+\\-\\d+$",
        regions: {
          "af-south-1": {
            description: "Africa (Cape Town)"
          },
          "ap-east-1": {
            description: "Asia Pacific (Hong Kong)"
          },
          "ap-northeast-1": {
            description: "Asia Pacific (Tokyo)"
          },
          "ap-northeast-2": {
            description: "Asia Pacific (Seoul)"
          },
          "ap-northeast-3": {
            description: "Asia Pacific (Osaka)"
          },
          "ap-south-1": {
            description: "Asia Pacific (Mumbai)"
          },
          "ap-south-2": {
            description: "Asia Pacific (Hyderabad)"
          },
          "ap-southeast-1": {
            description: "Asia Pacific (Singapore)"
          },
          "ap-southeast-2": {
            description: "Asia Pacific (Sydney)"
          },
          "ap-southeast-3": {
            description: "Asia Pacific (Jakarta)"
          },
          "ap-southeast-4": {
            description: "Asia Pacific (Melbourne)"
          },
          "ap-southeast-5": {
            description: "Asia Pacific (Malaysia)"
          },
          "ap-southeast-7": {
            description: "Asia Pacific (Thailand)"
          },
          "aws-global": {
            description: "AWS Standard global region"
          },
          "ca-central-1": {
            description: "Canada (Central)"
          },
          "ca-west-1": {
            description: "Canada West (Calgary)"
          },
          "eu-central-1": {
            description: "Europe (Frankfurt)"
          },
          "eu-central-2": {
            description: "Europe (Zurich)"
          },
          "eu-north-1": {
            description: "Europe (Stockholm)"
          },
          "eu-south-1": {
            description: "Europe (Milan)"
          },
          "eu-south-2": {
            description: "Europe (Spain)"
          },
          "eu-west-1": {
            description: "Europe (Ireland)"
          },
          "eu-west-2": {
            description: "Europe (London)"
          },
          "eu-west-3": {
            description: "Europe (Paris)"
          },
          "il-central-1": {
            description: "Israel (Tel Aviv)"
          },
          "me-central-1": {
            description: "Middle East (UAE)"
          },
          "me-south-1": {
            description: "Middle East (Bahrain)"
          },
          "mx-central-1": {
            description: "Mexico (Central)"
          },
          "sa-east-1": {
            description: "South America (Sao Paulo)"
          },
          "us-east-1": {
            description: "US East (N. Virginia)"
          },
          "us-east-2": {
            description: "US East (Ohio)"
          },
          "us-west-1": {
            description: "US West (N. California)"
          },
          "us-west-2": {
            description: "US West (Oregon)"
          }
        }
      }, {
        id: "aws-cn",
        outputs: {
          dnsSuffix: "amazonaws.com.cn",
          dualStackDnsSuffix: "api.amazonwebservices.com.cn",
          implicitGlobalRegion: "cn-northwest-1",
          name: "aws-cn",
          supportsDualStack: true,
          supportsFIPS: true
        },
        regionRegex: "^cn\\-\\w+\\-\\d+$",
        regions: {
          "aws-cn-global": {
            description: "AWS China global region"
          },
          "cn-north-1": {
            description: "China (Beijing)"
          },
          "cn-northwest-1": {
            description: "China (Ningxia)"
          }
        }
      }, {
        id: "aws-us-gov",
        outputs: {
          dnsSuffix: "amazonaws.com",
          dualStackDnsSuffix: "api.aws",
          implicitGlobalRegion: "us-gov-west-1",
          name: "aws-us-gov",
          supportsDualStack: true,
          supportsFIPS: true
        },
        regionRegex: "^us\\-gov\\-\\w+\\-\\d+$",
        regions: {
          "aws-us-gov-global": {
            description: "AWS GovCloud (US) global region"
          },
          "us-gov-east-1": {
            description: "AWS GovCloud (US-East)"
          },
          "us-gov-west-1": {
            description: "AWS GovCloud (US-West)"
          }
        }
      }, {
        id: "aws-iso",
        outputs: {
          dnsSuffix: "c2s.ic.gov",
          dualStackDnsSuffix: "c2s.ic.gov",
          implicitGlobalRegion: "us-iso-east-1",
          name: "aws-iso",
          supportsDualStack: false,
          supportsFIPS: true
        },
        regionRegex: "^us\\-iso\\-\\w+\\-\\d+$",
        regions: {
          "aws-iso-global": {
            description: "AWS ISO (US) global region"
          },
          "us-iso-east-1": {
            description: "US ISO East"
          },
          "us-iso-west-1": {
            description: "US ISO WEST"
          }
        }
      }, {
        id: "aws-iso-b",
        outputs: {
          dnsSuffix: "sc2s.sgov.gov",
          dualStackDnsSuffix: "sc2s.sgov.gov",
          implicitGlobalRegion: "us-isob-east-1",
          name: "aws-iso-b",
          supportsDualStack: false,
          supportsFIPS: true
        },
        regionRegex: "^us\\-isob\\-\\w+\\-\\d+$",
        regions: {
          "aws-iso-b-global": {
            description: "AWS ISOB (US) global region"
          },
          "us-isob-east-1": {
            description: "US ISOB East (Ohio)"
          }
        }
      }, {
        id: "aws-iso-e",
        outputs: {
          dnsSuffix: "cloud.adc-e.uk",
          dualStackDnsSuffix: "cloud.adc-e.uk",
          implicitGlobalRegion: "eu-isoe-west-1",
          name: "aws-iso-e",
          supportsDualStack: false,
          supportsFIPS: true
        },
        regionRegex: "^eu\\-isoe\\-\\w+\\-\\d+$",
        regions: {
          "aws-iso-e-global": {
            description: "AWS ISOE (Europe) global region"
          },
          "eu-isoe-west-1": {
            description: "EU ISOE West"
          }
        }
      }, {
        id: "aws-iso-f",
        outputs: {
          dnsSuffix: "csp.hci.ic.gov",
          dualStackDnsSuffix: "csp.hci.ic.gov",
          implicitGlobalRegion: "us-isof-south-1",
          name: "aws-iso-f",
          supportsDualStack: false,
          supportsFIPS: true
        },
        regionRegex: "^us\\-isof\\-\\w+\\-\\d+$",
        regions: {
          "aws-iso-f-global": {
            description: "AWS ISOF global region"
          },
          "us-isof-east-1": {
            description: "US ISOF EAST"
          },
          "us-isof-south-1": {
            description: "US ISOF SOUTH"
          }
        }
      }, {
        id: "aws-eusc",
        outputs: {
          dnsSuffix: "amazonaws.eu",
          dualStackDnsSuffix: "amazonaws.eu",
          implicitGlobalRegion: "eusc-de-east-1",
          name: "aws-eusc",
          supportsDualStack: false,
          supportsFIPS: true
        },
        regionRegex: "^eusc\\-(de)\\-\\w+\\-\\d+$",
        regions: {
          "eusc-de-east-1": {
            description: "EU (Germany)"
          }
        }
      }],
      version: "1.1"
    };
    var selectedPartitionsInfo = partitions_default;
    var selectedUserAgentPrefix = "";
    var partition = __name2((value) => {
      const { partitions } = selectedPartitionsInfo;
      for (const partition2 of partitions) {
        const { regions, outputs } = partition2;
        for (const [region, regionData] of Object.entries(regions)) {
          if (region === value) {
            return {
              ...outputs,
              ...regionData
            };
          }
        }
      }
      for (const partition2 of partitions) {
        const { regionRegex, outputs } = partition2;
        if (new RegExp(regionRegex).test(value)) {
          return {
            ...outputs
          };
        }
      }
      const DEFAULT_PARTITION = partitions.find((partition2) => partition2.id === "aws");
      if (!DEFAULT_PARTITION) {
        throw new Error(
          "Provided region was not found in the partition array or regex, and default partition with id 'aws' doesn't exist."
        );
      }
      return {
        ...DEFAULT_PARTITION.outputs
      };
    }, "partition");
    var setPartitionInfo = __name2((partitionsInfo, userAgentPrefix = "") => {
      selectedPartitionsInfo = partitionsInfo;
      selectedUserAgentPrefix = userAgentPrefix;
    }, "setPartitionInfo");
    var useDefaultPartitionInfo = __name2(() => {
      setPartitionInfo(partitions_default, "");
    }, "useDefaultPartitionInfo");
    var getUserAgentPrefix = __name2(() => selectedUserAgentPrefix, "getUserAgentPrefix");
    var awsEndpointFunctions3 = {
      isVirtualHostableS3Bucket,
      parseArn,
      partition
    };
    import_util_endpoints5.customEndpointFunctions.aws = awsEndpointFunctions3;
  }
});

// ../../node_modules/.pnpm/@aws-sdk+core@3.821.0/node_modules/@aws-sdk/core/dist-es/submodules/client/emitWarningIfUnsupportedVersion.js
var state, emitWarningIfUnsupportedVersion;
var init_emitWarningIfUnsupportedVersion = __esm({
  "../../node_modules/.pnpm/@aws-sdk+core@3.821.0/node_modules/@aws-sdk/core/dist-es/submodules/client/emitWarningIfUnsupportedVersion.js"() {
    state = {
      warningEmitted: false
    };
    emitWarningIfUnsupportedVersion = /* @__PURE__ */ __name((version2) => {
      if (version2 && !state.warningEmitted && parseInt(version2.substring(1, version2.indexOf("."))) < 18) {
        state.warningEmitted = true;
        process.emitWarning(`NodeDeprecationWarning: The AWS SDK for JavaScript (v3) will
no longer support Node.js 16.x on January 6, 2025.

To continue receiving updates to AWS services, bug fixes, and security
updates please upgrade to a supported Node.js LTS version.

More information can be found at: https://a.co/74kJMmI`);
      }
    }, "emitWarningIfUnsupportedVersion");
  }
});

// ../../node_modules/.pnpm/@aws-sdk+core@3.821.0/node_modules/@aws-sdk/core/dist-es/submodules/client/setCredentialFeature.js
function setCredentialFeature(credentials, feature, value) {
  if (!credentials.$source) {
    credentials.$source = {};
  }
  credentials.$source[feature] = value;
  return credentials;
}
var init_setCredentialFeature = __esm({
  "../../node_modules/.pnpm/@aws-sdk+core@3.821.0/node_modules/@aws-sdk/core/dist-es/submodules/client/setCredentialFeature.js"() {
    __name(setCredentialFeature, "setCredentialFeature");
  }
});

// ../../node_modules/.pnpm/@aws-sdk+core@3.821.0/node_modules/@aws-sdk/core/dist-es/submodules/client/setFeature.js
function setFeature2(context, feature, value) {
  if (!context.__aws_sdk_context) {
    context.__aws_sdk_context = {
      features: {}
    };
  } else if (!context.__aws_sdk_context.features) {
    context.__aws_sdk_context.features = {};
  }
  context.__aws_sdk_context.features[feature] = value;
}
var init_setFeature2 = __esm({
  "../../node_modules/.pnpm/@aws-sdk+core@3.821.0/node_modules/@aws-sdk/core/dist-es/submodules/client/setFeature.js"() {
    __name(setFeature2, "setFeature");
  }
});

// ../../node_modules/.pnpm/@aws-sdk+core@3.821.0/node_modules/@aws-sdk/core/dist-es/submodules/client/index.js
var client_exports = {};
__export(client_exports, {
  emitWarningIfUnsupportedVersion: () => emitWarningIfUnsupportedVersion,
  setCredentialFeature: () => setCredentialFeature,
  setFeature: () => setFeature2,
  state: () => state
});
var init_client = __esm({
  "../../node_modules/.pnpm/@aws-sdk+core@3.821.0/node_modules/@aws-sdk/core/dist-es/submodules/client/index.js"() {
    init_emitWarningIfUnsupportedVersion();
    init_setCredentialFeature();
    init_setFeature2();
  }
});

// ../../node_modules/.pnpm/@aws-sdk+core@3.821.0/node_modules/@aws-sdk/core/dist-es/submodules/httpAuthSchemes/utils/getDateHeader.js
var import_protocol_http9, getDateHeader;
var init_getDateHeader = __esm({
  "../../node_modules/.pnpm/@aws-sdk+core@3.821.0/node_modules/@aws-sdk/core/dist-es/submodules/httpAuthSchemes/utils/getDateHeader.js"() {
    import_protocol_http9 = __toESM(require_dist_cjs2());
    getDateHeader = /* @__PURE__ */ __name((response) => import_protocol_http9.HttpResponse.isInstance(response) ? response.headers?.date ?? response.headers?.Date : void 0, "getDateHeader");
  }
});

// ../../node_modules/.pnpm/@aws-sdk+core@3.821.0/node_modules/@aws-sdk/core/dist-es/submodules/httpAuthSchemes/utils/getSkewCorrectedDate.js
var getSkewCorrectedDate;
var init_getSkewCorrectedDate = __esm({
  "../../node_modules/.pnpm/@aws-sdk+core@3.821.0/node_modules/@aws-sdk/core/dist-es/submodules/httpAuthSchemes/utils/getSkewCorrectedDate.js"() {
    getSkewCorrectedDate = /* @__PURE__ */ __name((systemClockOffset) => new Date(Date.now() + systemClockOffset), "getSkewCorrectedDate");
  }
});

// ../../node_modules/.pnpm/@aws-sdk+core@3.821.0/node_modules/@aws-sdk/core/dist-es/submodules/httpAuthSchemes/utils/isClockSkewed.js
var isClockSkewed;
var init_isClockSkewed = __esm({
  "../../node_modules/.pnpm/@aws-sdk+core@3.821.0/node_modules/@aws-sdk/core/dist-es/submodules/httpAuthSchemes/utils/isClockSkewed.js"() {
    init_getSkewCorrectedDate();
    isClockSkewed = /* @__PURE__ */ __name((clockTime, systemClockOffset) => Math.abs(getSkewCorrectedDate(systemClockOffset).getTime() - clockTime) >= 3e5, "isClockSkewed");
  }
});

// ../../node_modules/.pnpm/@aws-sdk+core@3.821.0/node_modules/@aws-sdk/core/dist-es/submodules/httpAuthSchemes/utils/getUpdatedSystemClockOffset.js
var getUpdatedSystemClockOffset;
var init_getUpdatedSystemClockOffset = __esm({
  "../../node_modules/.pnpm/@aws-sdk+core@3.821.0/node_modules/@aws-sdk/core/dist-es/submodules/httpAuthSchemes/utils/getUpdatedSystemClockOffset.js"() {
    init_isClockSkewed();
    getUpdatedSystemClockOffset = /* @__PURE__ */ __name((clockTime, currentSystemClockOffset) => {
      const clockTimeInMs = Date.parse(clockTime);
      if (isClockSkewed(clockTimeInMs, currentSystemClockOffset)) {
        return clockTimeInMs - Date.now();
      }
      return currentSystemClockOffset;
    }, "getUpdatedSystemClockOffset");
  }
});

// ../../node_modules/.pnpm/@aws-sdk+core@3.821.0/node_modules/@aws-sdk/core/dist-es/submodules/httpAuthSchemes/utils/index.js
var init_utils = __esm({
  "../../node_modules/.pnpm/@aws-sdk+core@3.821.0/node_modules/@aws-sdk/core/dist-es/submodules/httpAuthSchemes/utils/index.js"() {
    init_getDateHeader();
    init_getSkewCorrectedDate();
    init_getUpdatedSystemClockOffset();
  }
});

// ../../node_modules/.pnpm/@aws-sdk+core@3.821.0/node_modules/@aws-sdk/core/dist-es/submodules/httpAuthSchemes/aws_sdk/AwsSdkSigV4Signer.js
var import_protocol_http10, throwSigningPropertyError, validateSigningProperties, AwsSdkSigV4Signer, AWSSDKSigV4Signer;
var init_AwsSdkSigV4Signer = __esm({
  "../../node_modules/.pnpm/@aws-sdk+core@3.821.0/node_modules/@aws-sdk/core/dist-es/submodules/httpAuthSchemes/aws_sdk/AwsSdkSigV4Signer.js"() {
    import_protocol_http10 = __toESM(require_dist_cjs2());
    init_utils();
    throwSigningPropertyError = /* @__PURE__ */ __name((name, property) => {
      if (!property) {
        throw new Error(`Property \`${name}\` is not resolved for AWS SDK SigV4Auth`);
      }
      return property;
    }, "throwSigningPropertyError");
    validateSigningProperties = /* @__PURE__ */ __name(async (signingProperties) => {
      const context = throwSigningPropertyError("context", signingProperties.context);
      const config = throwSigningPropertyError("config", signingProperties.config);
      const authScheme = context.endpointV2?.properties?.authSchemes?.[0];
      const signerFunction = throwSigningPropertyError("signer", config.signer);
      const signer = await signerFunction(authScheme);
      const signingRegion = signingProperties?.signingRegion;
      const signingRegionSet = signingProperties?.signingRegionSet;
      const signingName = signingProperties?.signingName;
      return {
        config,
        signer,
        signingRegion,
        signingRegionSet,
        signingName
      };
    }, "validateSigningProperties");
    AwsSdkSigV4Signer = class {
      static {
        __name(this, "AwsSdkSigV4Signer");
      }
      async sign(httpRequest, identity, signingProperties) {
        if (!import_protocol_http10.HttpRequest.isInstance(httpRequest)) {
          throw new Error("The request is not an instance of `HttpRequest` and cannot be signed");
        }
        const validatedProps = await validateSigningProperties(signingProperties);
        const { config, signer } = validatedProps;
        let { signingRegion, signingName } = validatedProps;
        const handlerExecutionContext = signingProperties.context;
        if (handlerExecutionContext?.authSchemes?.length ?? 0 > 1) {
          const [first, second] = handlerExecutionContext.authSchemes;
          if (first?.name === "sigv4a" && second?.name === "sigv4") {
            signingRegion = second?.signingRegion ?? signingRegion;
            signingName = second?.signingName ?? signingName;
          }
        }
        const signedRequest = await signer.sign(httpRequest, {
          signingDate: getSkewCorrectedDate(config.systemClockOffset),
          signingRegion,
          signingService: signingName
        });
        return signedRequest;
      }
      errorHandler(signingProperties) {
        return (error2) => {
          const serverTime = error2.ServerTime ?? getDateHeader(error2.$response);
          if (serverTime) {
            const config = throwSigningPropertyError("config", signingProperties.config);
            const initialSystemClockOffset = config.systemClockOffset;
            config.systemClockOffset = getUpdatedSystemClockOffset(serverTime, config.systemClockOffset);
            const clockSkewCorrected = config.systemClockOffset !== initialSystemClockOffset;
            if (clockSkewCorrected && error2.$metadata) {
              error2.$metadata.clockSkewCorrected = true;
            }
          }
          throw error2;
        };
      }
      successHandler(httpResponse, signingProperties) {
        const dateHeader = getDateHeader(httpResponse);
        if (dateHeader) {
          const config = throwSigningPropertyError("config", signingProperties.config);
          config.systemClockOffset = getUpdatedSystemClockOffset(dateHeader, config.systemClockOffset);
        }
      }
    };
    AWSSDKSigV4Signer = AwsSdkSigV4Signer;
  }
});

// ../../node_modules/.pnpm/@aws-sdk+core@3.821.0/node_modules/@aws-sdk/core/dist-es/submodules/httpAuthSchemes/aws_sdk/AwsSdkSigV4ASigner.js
var import_protocol_http11, AwsSdkSigV4ASigner;
var init_AwsSdkSigV4ASigner = __esm({
  "../../node_modules/.pnpm/@aws-sdk+core@3.821.0/node_modules/@aws-sdk/core/dist-es/submodules/httpAuthSchemes/aws_sdk/AwsSdkSigV4ASigner.js"() {
    import_protocol_http11 = __toESM(require_dist_cjs2());
    init_utils();
    init_AwsSdkSigV4Signer();
    AwsSdkSigV4ASigner = class extends AwsSdkSigV4Signer {
      static {
        __name(this, "AwsSdkSigV4ASigner");
      }
      async sign(httpRequest, identity, signingProperties) {
        if (!import_protocol_http11.HttpRequest.isInstance(httpRequest)) {
          throw new Error("The request is not an instance of `HttpRequest` and cannot be signed");
        }
        const { config, signer, signingRegion, signingRegionSet, signingName } = await validateSigningProperties(signingProperties);
        const configResolvedSigningRegionSet = await config.sigv4aSigningRegionSet?.();
        const multiRegionOverride = (configResolvedSigningRegionSet ?? signingRegionSet ?? [signingRegion]).join(",");
        const signedRequest = await signer.sign(httpRequest, {
          signingDate: getSkewCorrectedDate(config.systemClockOffset),
          signingRegion: multiRegionOverride,
          signingService: signingName
        });
        return signedRequest;
      }
    };
  }
});

// ../../node_modules/.pnpm/@aws-sdk+core@3.821.0/node_modules/@aws-sdk/core/dist-es/submodules/httpAuthSchemes/utils/getArrayForCommaSeparatedString.js
var getArrayForCommaSeparatedString;
var init_getArrayForCommaSeparatedString = __esm({
  "../../node_modules/.pnpm/@aws-sdk+core@3.821.0/node_modules/@aws-sdk/core/dist-es/submodules/httpAuthSchemes/utils/getArrayForCommaSeparatedString.js"() {
    getArrayForCommaSeparatedString = /* @__PURE__ */ __name((str) => typeof str === "string" && str.length > 0 ? str.split(",").map((item) => item.trim()) : [], "getArrayForCommaSeparatedString");
  }
});

// ../../node_modules/.pnpm/@aws-sdk+core@3.821.0/node_modules/@aws-sdk/core/dist-es/submodules/httpAuthSchemes/utils/getBearerTokenEnvKey.js
var getBearerTokenEnvKey;
var init_getBearerTokenEnvKey = __esm({
  "../../node_modules/.pnpm/@aws-sdk+core@3.821.0/node_modules/@aws-sdk/core/dist-es/submodules/httpAuthSchemes/utils/getBearerTokenEnvKey.js"() {
    getBearerTokenEnvKey = /* @__PURE__ */ __name((signingName) => `AWS_BEARER_TOKEN_${signingName.replace(/[\s-]/g, "_").toUpperCase()}`, "getBearerTokenEnvKey");
  }
});

// ../../node_modules/.pnpm/@aws-sdk+core@3.821.0/node_modules/@aws-sdk/core/dist-es/submodules/httpAuthSchemes/aws_sdk/NODE_AUTH_SCHEME_PREFERENCE_OPTIONS.js
var NODE_AUTH_SCHEME_PREFERENCE_ENV_KEY, NODE_AUTH_SCHEME_PREFERENCE_CONFIG_KEY, NODE_AUTH_SCHEME_PREFERENCE_OPTIONS;
var init_NODE_AUTH_SCHEME_PREFERENCE_OPTIONS = __esm({
  "../../node_modules/.pnpm/@aws-sdk+core@3.821.0/node_modules/@aws-sdk/core/dist-es/submodules/httpAuthSchemes/aws_sdk/NODE_AUTH_SCHEME_PREFERENCE_OPTIONS.js"() {
    init_getArrayForCommaSeparatedString();
    init_getBearerTokenEnvKey();
    NODE_AUTH_SCHEME_PREFERENCE_ENV_KEY = "AWS_AUTH_SCHEME_PREFERENCE";
    NODE_AUTH_SCHEME_PREFERENCE_CONFIG_KEY = "auth_scheme_preference";
    NODE_AUTH_SCHEME_PREFERENCE_OPTIONS = {
      environmentVariableSelector: /* @__PURE__ */ __name((env, options) => {
        if (options?.signingName) {
          const bearerTokenKey = getBearerTokenEnvKey(options.signingName);
          if (bearerTokenKey in env)
            return ["httpBearerAuth"];
        }
        if (!(NODE_AUTH_SCHEME_PREFERENCE_ENV_KEY in env))
          return void 0;
        return getArrayForCommaSeparatedString(env[NODE_AUTH_SCHEME_PREFERENCE_ENV_KEY]);
      }, "environmentVariableSelector"),
      configFileSelector: /* @__PURE__ */ __name((profile) => {
        if (!(NODE_AUTH_SCHEME_PREFERENCE_CONFIG_KEY in profile))
          return void 0;
        return getArrayForCommaSeparatedString(profile[NODE_AUTH_SCHEME_PREFERENCE_CONFIG_KEY]);
      }, "configFileSelector"),
      default: []
    };
  }
});

// ../../node_modules/.pnpm/@smithy+property-provider@4.0.4/node_modules/@smithy/property-provider/dist-cjs/index.js
var require_dist_cjs23 = __commonJS({
  "../../node_modules/.pnpm/@smithy+property-provider@4.0.4/node_modules/@smithy/property-provider/dist-cjs/index.js"(exports2, module2) {
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __name2 = /* @__PURE__ */ __name((target, value) => __defProp2(target, "name", { value, configurable: true }), "__name");
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: /* @__PURE__ */ __name(() => from[key], "get"), enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var src_exports = {};
    __export2(src_exports, {
      CredentialsProviderError: /* @__PURE__ */ __name(() => CredentialsProviderError, "CredentialsProviderError"),
      ProviderError: /* @__PURE__ */ __name(() => ProviderError2, "ProviderError"),
      TokenProviderError: /* @__PURE__ */ __name(() => TokenProviderError, "TokenProviderError"),
      chain: /* @__PURE__ */ __name(() => chain, "chain"),
      fromStatic: /* @__PURE__ */ __name(() => fromStatic, "fromStatic"),
      memoize: /* @__PURE__ */ __name(() => memoize, "memoize")
    });
    module2.exports = __toCommonJS2(src_exports);
    var ProviderError2 = class _ProviderError extends Error {
      static {
        __name(this, "_ProviderError");
      }
      constructor(message, options = true) {
        let logger3;
        let tryNextLink = true;
        if (typeof options === "boolean") {
          logger3 = void 0;
          tryNextLink = options;
        } else if (options != null && typeof options === "object") {
          logger3 = options.logger;
          tryNextLink = options.tryNextLink ?? true;
        }
        super(message);
        this.name = "ProviderError";
        this.tryNextLink = tryNextLink;
        Object.setPrototypeOf(this, _ProviderError.prototype);
        logger3?.debug?.(`@smithy/property-provider ${tryNextLink ? "->" : "(!)"} ${message}`);
      }
      static {
        __name2(this, "ProviderError");
      }
      /**
       * @deprecated use new operator.
       */
      static from(error2, options = true) {
        return Object.assign(new this(error2.message, options), error2);
      }
    };
    var CredentialsProviderError = class _CredentialsProviderError extends ProviderError2 {
      static {
        __name(this, "_CredentialsProviderError");
      }
      /**
       * @override
       */
      constructor(message, options = true) {
        super(message, options);
        this.name = "CredentialsProviderError";
        Object.setPrototypeOf(this, _CredentialsProviderError.prototype);
      }
      static {
        __name2(this, "CredentialsProviderError");
      }
    };
    var TokenProviderError = class _TokenProviderError extends ProviderError2 {
      static {
        __name(this, "_TokenProviderError");
      }
      /**
       * @override
       */
      constructor(message, options = true) {
        super(message, options);
        this.name = "TokenProviderError";
        Object.setPrototypeOf(this, _TokenProviderError.prototype);
      }
      static {
        __name2(this, "TokenProviderError");
      }
    };
    var chain = __name2((...providers) => async () => {
      if (providers.length === 0) {
        throw new ProviderError2("No providers in chain");
      }
      let lastProviderError;
      for (const provider of providers) {
        try {
          const credentials = await provider();
          return credentials;
        } catch (err) {
          lastProviderError = err;
          if (err?.tryNextLink) {
            continue;
          }
          throw err;
        }
      }
      throw lastProviderError;
    }, "chain");
    var fromStatic = __name2((staticValue) => () => Promise.resolve(staticValue), "fromStatic");
    var memoize = __name2((provider, isExpired, requiresRefresh) => {
      let resolved;
      let pending;
      let hasResult;
      let isConstant = false;
      const coalesceProvider = __name2(async () => {
        if (!pending) {
          pending = provider();
        }
        try {
          resolved = await pending;
          hasResult = true;
          isConstant = false;
        } finally {
          pending = void 0;
        }
        return resolved;
      }, "coalesceProvider");
      if (isExpired === void 0) {
        return async (options) => {
          if (!hasResult || options?.forceRefresh) {
            resolved = await coalesceProvider();
          }
          return resolved;
        };
      }
      return async (options) => {
        if (!hasResult || options?.forceRefresh) {
          resolved = await coalesceProvider();
        }
        if (isConstant) {
          return resolved;
        }
        if (requiresRefresh && !requiresRefresh(resolved)) {
          isConstant = true;
          return resolved;
        }
        if (isExpired(resolved)) {
          await coalesceProvider();
          return resolved;
        }
        return resolved;
      };
    }, "memoize");
  }
});

// ../../node_modules/.pnpm/@aws-sdk+core@3.821.0/node_modules/@aws-sdk/core/dist-es/submodules/httpAuthSchemes/aws_sdk/resolveAwsSdkSigV4AConfig.js
var import_property_provider, resolveAwsSdkSigV4AConfig, NODE_SIGV4A_CONFIG_OPTIONS;
var init_resolveAwsSdkSigV4AConfig = __esm({
  "../../node_modules/.pnpm/@aws-sdk+core@3.821.0/node_modules/@aws-sdk/core/dist-es/submodules/httpAuthSchemes/aws_sdk/resolveAwsSdkSigV4AConfig.js"() {
    init_dist_es();
    import_property_provider = __toESM(require_dist_cjs23());
    resolveAwsSdkSigV4AConfig = /* @__PURE__ */ __name((config) => {
      config.sigv4aSigningRegionSet = normalizeProvider(config.sigv4aSigningRegionSet);
      return config;
    }, "resolveAwsSdkSigV4AConfig");
    NODE_SIGV4A_CONFIG_OPTIONS = {
      environmentVariableSelector(env) {
        if (env.AWS_SIGV4A_SIGNING_REGION_SET) {
          return env.AWS_SIGV4A_SIGNING_REGION_SET.split(",").map((_2) => _2.trim());
        }
        throw new import_property_provider.ProviderError("AWS_SIGV4A_SIGNING_REGION_SET not set in env.", {
          tryNextLink: true
        });
      },
      configFileSelector(profile) {
        if (profile.sigv4a_signing_region_set) {
          return (profile.sigv4a_signing_region_set ?? "").split(",").map((_2) => _2.trim());
        }
        throw new import_property_provider.ProviderError("sigv4a_signing_region_set not set in profile.", {
          tryNextLink: true
        });
      },
      default: void 0
    };
  }
});

// ../../node_modules/.pnpm/@smithy+signature-v4@5.1.2/node_modules/@smithy/signature-v4/dist-cjs/index.js
var require_dist_cjs24 = __commonJS({
  "../../node_modules/.pnpm/@smithy+signature-v4@5.1.2/node_modules/@smithy/signature-v4/dist-cjs/index.js"(exports2, module2) {
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __name2 = /* @__PURE__ */ __name((target, value) => __defProp2(target, "name", { value, configurable: true }), "__name");
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: /* @__PURE__ */ __name(() => from[key], "get"), enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var src_exports = {};
    __export2(src_exports, {
      ALGORITHM_IDENTIFIER: /* @__PURE__ */ __name(() => ALGORITHM_IDENTIFIER, "ALGORITHM_IDENTIFIER"),
      ALGORITHM_IDENTIFIER_V4A: /* @__PURE__ */ __name(() => ALGORITHM_IDENTIFIER_V4A, "ALGORITHM_IDENTIFIER_V4A"),
      ALGORITHM_QUERY_PARAM: /* @__PURE__ */ __name(() => ALGORITHM_QUERY_PARAM, "ALGORITHM_QUERY_PARAM"),
      ALWAYS_UNSIGNABLE_HEADERS: /* @__PURE__ */ __name(() => ALWAYS_UNSIGNABLE_HEADERS, "ALWAYS_UNSIGNABLE_HEADERS"),
      AMZ_DATE_HEADER: /* @__PURE__ */ __name(() => AMZ_DATE_HEADER, "AMZ_DATE_HEADER"),
      AMZ_DATE_QUERY_PARAM: /* @__PURE__ */ __name(() => AMZ_DATE_QUERY_PARAM, "AMZ_DATE_QUERY_PARAM"),
      AUTH_HEADER: /* @__PURE__ */ __name(() => AUTH_HEADER, "AUTH_HEADER"),
      CREDENTIAL_QUERY_PARAM: /* @__PURE__ */ __name(() => CREDENTIAL_QUERY_PARAM, "CREDENTIAL_QUERY_PARAM"),
      DATE_HEADER: /* @__PURE__ */ __name(() => DATE_HEADER, "DATE_HEADER"),
      EVENT_ALGORITHM_IDENTIFIER: /* @__PURE__ */ __name(() => EVENT_ALGORITHM_IDENTIFIER, "EVENT_ALGORITHM_IDENTIFIER"),
      EXPIRES_QUERY_PARAM: /* @__PURE__ */ __name(() => EXPIRES_QUERY_PARAM, "EXPIRES_QUERY_PARAM"),
      GENERATED_HEADERS: /* @__PURE__ */ __name(() => GENERATED_HEADERS, "GENERATED_HEADERS"),
      HOST_HEADER: /* @__PURE__ */ __name(() => HOST_HEADER, "HOST_HEADER"),
      KEY_TYPE_IDENTIFIER: /* @__PURE__ */ __name(() => KEY_TYPE_IDENTIFIER, "KEY_TYPE_IDENTIFIER"),
      MAX_CACHE_SIZE: /* @__PURE__ */ __name(() => MAX_CACHE_SIZE, "MAX_CACHE_SIZE"),
      MAX_PRESIGNED_TTL: /* @__PURE__ */ __name(() => MAX_PRESIGNED_TTL, "MAX_PRESIGNED_TTL"),
      PROXY_HEADER_PATTERN: /* @__PURE__ */ __name(() => PROXY_HEADER_PATTERN, "PROXY_HEADER_PATTERN"),
      REGION_SET_PARAM: /* @__PURE__ */ __name(() => REGION_SET_PARAM, "REGION_SET_PARAM"),
      SEC_HEADER_PATTERN: /* @__PURE__ */ __name(() => SEC_HEADER_PATTERN, "SEC_HEADER_PATTERN"),
      SHA256_HEADER: /* @__PURE__ */ __name(() => SHA256_HEADER, "SHA256_HEADER"),
      SIGNATURE_HEADER: /* @__PURE__ */ __name(() => SIGNATURE_HEADER, "SIGNATURE_HEADER"),
      SIGNATURE_QUERY_PARAM: /* @__PURE__ */ __name(() => SIGNATURE_QUERY_PARAM, "SIGNATURE_QUERY_PARAM"),
      SIGNED_HEADERS_QUERY_PARAM: /* @__PURE__ */ __name(() => SIGNED_HEADERS_QUERY_PARAM, "SIGNED_HEADERS_QUERY_PARAM"),
      SignatureV4: /* @__PURE__ */ __name(() => SignatureV42, "SignatureV4"),
      SignatureV4Base: /* @__PURE__ */ __name(() => SignatureV4Base, "SignatureV4Base"),
      TOKEN_HEADER: /* @__PURE__ */ __name(() => TOKEN_HEADER, "TOKEN_HEADER"),
      TOKEN_QUERY_PARAM: /* @__PURE__ */ __name(() => TOKEN_QUERY_PARAM, "TOKEN_QUERY_PARAM"),
      UNSIGNABLE_PATTERNS: /* @__PURE__ */ __name(() => UNSIGNABLE_PATTERNS, "UNSIGNABLE_PATTERNS"),
      UNSIGNED_PAYLOAD: /* @__PURE__ */ __name(() => UNSIGNED_PAYLOAD, "UNSIGNED_PAYLOAD"),
      clearCredentialCache: /* @__PURE__ */ __name(() => clearCredentialCache, "clearCredentialCache"),
      createScope: /* @__PURE__ */ __name(() => createScope, "createScope"),
      getCanonicalHeaders: /* @__PURE__ */ __name(() => getCanonicalHeaders, "getCanonicalHeaders"),
      getCanonicalQuery: /* @__PURE__ */ __name(() => getCanonicalQuery, "getCanonicalQuery"),
      getPayloadHash: /* @__PURE__ */ __name(() => getPayloadHash, "getPayloadHash"),
      getSigningKey: /* @__PURE__ */ __name(() => getSigningKey, "getSigningKey"),
      hasHeader: /* @__PURE__ */ __name(() => hasHeader, "hasHeader"),
      moveHeadersToQuery: /* @__PURE__ */ __name(() => moveHeadersToQuery, "moveHeadersToQuery"),
      prepareRequest: /* @__PURE__ */ __name(() => prepareRequest, "prepareRequest"),
      signatureV4aContainer: /* @__PURE__ */ __name(() => signatureV4aContainer, "signatureV4aContainer")
    });
    module2.exports = __toCommonJS2(src_exports);
    var import_util_utf85 = require_dist_cjs9();
    var ALGORITHM_QUERY_PARAM = "X-Amz-Algorithm";
    var CREDENTIAL_QUERY_PARAM = "X-Amz-Credential";
    var AMZ_DATE_QUERY_PARAM = "X-Amz-Date";
    var SIGNED_HEADERS_QUERY_PARAM = "X-Amz-SignedHeaders";
    var EXPIRES_QUERY_PARAM = "X-Amz-Expires";
    var SIGNATURE_QUERY_PARAM = "X-Amz-Signature";
    var TOKEN_QUERY_PARAM = "X-Amz-Security-Token";
    var REGION_SET_PARAM = "X-Amz-Region-Set";
    var AUTH_HEADER = "authorization";
    var AMZ_DATE_HEADER = AMZ_DATE_QUERY_PARAM.toLowerCase();
    var DATE_HEADER = "date";
    var GENERATED_HEADERS = [AUTH_HEADER, AMZ_DATE_HEADER, DATE_HEADER];
    var SIGNATURE_HEADER = SIGNATURE_QUERY_PARAM.toLowerCase();
    var SHA256_HEADER = "x-amz-content-sha256";
    var TOKEN_HEADER = TOKEN_QUERY_PARAM.toLowerCase();
    var HOST_HEADER = "host";
    var ALWAYS_UNSIGNABLE_HEADERS = {
      authorization: true,
      "cache-control": true,
      connection: true,
      expect: true,
      from: true,
      "keep-alive": true,
      "max-forwards": true,
      pragma: true,
      referer: true,
      te: true,
      trailer: true,
      "transfer-encoding": true,
      upgrade: true,
      "user-agent": true,
      "x-amzn-trace-id": true
    };
    var PROXY_HEADER_PATTERN = /^proxy-/;
    var SEC_HEADER_PATTERN = /^sec-/;
    var UNSIGNABLE_PATTERNS = [/^proxy-/i, /^sec-/i];
    var ALGORITHM_IDENTIFIER = "AWS4-HMAC-SHA256";
    var ALGORITHM_IDENTIFIER_V4A = "AWS4-ECDSA-P256-SHA256";
    var EVENT_ALGORITHM_IDENTIFIER = "AWS4-HMAC-SHA256-PAYLOAD";
    var UNSIGNED_PAYLOAD = "UNSIGNED-PAYLOAD";
    var MAX_CACHE_SIZE = 50;
    var KEY_TYPE_IDENTIFIER = "aws4_request";
    var MAX_PRESIGNED_TTL = 60 * 60 * 24 * 7;
    var import_util_hex_encoding = require_dist_cjs15();
    var import_util_utf86 = require_dist_cjs9();
    var signingKeyCache = {};
    var cacheQueue = [];
    var createScope = __name2((shortDate, region, service) => `${shortDate}/${region}/${service}/${KEY_TYPE_IDENTIFIER}`, "createScope");
    var getSigningKey = __name2(async (sha256Constructor, credentials, shortDate, region, service) => {
      const credsHash = await hmac(sha256Constructor, credentials.secretAccessKey, credentials.accessKeyId);
      const cacheKey = `${shortDate}:${region}:${service}:${(0, import_util_hex_encoding.toHex)(credsHash)}:${credentials.sessionToken}`;
      if (cacheKey in signingKeyCache) {
        return signingKeyCache[cacheKey];
      }
      cacheQueue.push(cacheKey);
      while (cacheQueue.length > MAX_CACHE_SIZE) {
        delete signingKeyCache[cacheQueue.shift()];
      }
      let key = `AWS4${credentials.secretAccessKey}`;
      for (const signable of [shortDate, region, service, KEY_TYPE_IDENTIFIER]) {
        key = await hmac(sha256Constructor, key, signable);
      }
      return signingKeyCache[cacheKey] = key;
    }, "getSigningKey");
    var clearCredentialCache = __name2(() => {
      cacheQueue.length = 0;
      Object.keys(signingKeyCache).forEach((cacheKey) => {
        delete signingKeyCache[cacheKey];
      });
    }, "clearCredentialCache");
    var hmac = __name2((ctor, secret, data) => {
      const hash = new ctor(secret);
      hash.update((0, import_util_utf86.toUint8Array)(data));
      return hash.digest();
    }, "hmac");
    var getCanonicalHeaders = __name2(({ headers }, unsignableHeaders, signableHeaders) => {
      const canonical = {};
      for (const headerName of Object.keys(headers).sort()) {
        if (headers[headerName] == void 0) {
          continue;
        }
        const canonicalHeaderName = headerName.toLowerCase();
        if (canonicalHeaderName in ALWAYS_UNSIGNABLE_HEADERS || unsignableHeaders?.has(canonicalHeaderName) || PROXY_HEADER_PATTERN.test(canonicalHeaderName) || SEC_HEADER_PATTERN.test(canonicalHeaderName)) {
          if (!signableHeaders || signableHeaders && !signableHeaders.has(canonicalHeaderName)) {
            continue;
          }
        }
        canonical[canonicalHeaderName] = headers[headerName].trim().replace(/\s+/g, " ");
      }
      return canonical;
    }, "getCanonicalHeaders");
    var import_is_array_buffer = require_dist_cjs7();
    var import_util_utf822 = require_dist_cjs9();
    var getPayloadHash = __name2(async ({ headers, body }, hashConstructor) => {
      for (const headerName of Object.keys(headers)) {
        if (headerName.toLowerCase() === SHA256_HEADER) {
          return headers[headerName];
        }
      }
      if (body == void 0) {
        return "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855";
      } else if (typeof body === "string" || ArrayBuffer.isView(body) || (0, import_is_array_buffer.isArrayBuffer)(body)) {
        const hashCtor = new hashConstructor();
        hashCtor.update((0, import_util_utf822.toUint8Array)(body));
        return (0, import_util_hex_encoding.toHex)(await hashCtor.digest());
      }
      return UNSIGNED_PAYLOAD;
    }, "getPayloadHash");
    var import_util_utf832 = require_dist_cjs9();
    var HeaderFormatter = class {
      static {
        __name(this, "HeaderFormatter");
      }
      static {
        __name2(this, "HeaderFormatter");
      }
      format(headers) {
        const chunks = [];
        for (const headerName of Object.keys(headers)) {
          const bytes = (0, import_util_utf832.fromUtf8)(headerName);
          chunks.push(Uint8Array.from([bytes.byteLength]), bytes, this.formatHeaderValue(headers[headerName]));
        }
        const out = new Uint8Array(chunks.reduce((carry, bytes) => carry + bytes.byteLength, 0));
        let position = 0;
        for (const chunk of chunks) {
          out.set(chunk, position);
          position += chunk.byteLength;
        }
        return out;
      }
      formatHeaderValue(header) {
        switch (header.type) {
          case "boolean":
            return Uint8Array.from([
              header.value ? 0 : 1
              /* boolFalse */
            ]);
          case "byte":
            return Uint8Array.from([2, header.value]);
          case "short":
            const shortView = new DataView(new ArrayBuffer(3));
            shortView.setUint8(
              0,
              3
              /* short */
            );
            shortView.setInt16(1, header.value, false);
            return new Uint8Array(shortView.buffer);
          case "integer":
            const intView = new DataView(new ArrayBuffer(5));
            intView.setUint8(
              0,
              4
              /* integer */
            );
            intView.setInt32(1, header.value, false);
            return new Uint8Array(intView.buffer);
          case "long":
            const longBytes = new Uint8Array(9);
            longBytes[0] = 5;
            longBytes.set(header.value.bytes, 1);
            return longBytes;
          case "binary":
            const binView = new DataView(new ArrayBuffer(3 + header.value.byteLength));
            binView.setUint8(
              0,
              6
              /* byteArray */
            );
            binView.setUint16(1, header.value.byteLength, false);
            const binBytes = new Uint8Array(binView.buffer);
            binBytes.set(header.value, 3);
            return binBytes;
          case "string":
            const utf8Bytes = (0, import_util_utf832.fromUtf8)(header.value);
            const strView = new DataView(new ArrayBuffer(3 + utf8Bytes.byteLength));
            strView.setUint8(
              0,
              7
              /* string */
            );
            strView.setUint16(1, utf8Bytes.byteLength, false);
            const strBytes = new Uint8Array(strView.buffer);
            strBytes.set(utf8Bytes, 3);
            return strBytes;
          case "timestamp":
            const tsBytes = new Uint8Array(9);
            tsBytes[0] = 8;
            tsBytes.set(Int64.fromNumber(header.value.valueOf()).bytes, 1);
            return tsBytes;
          case "uuid":
            if (!UUID_PATTERN.test(header.value)) {
              throw new Error(`Invalid UUID received: ${header.value}`);
            }
            const uuidBytes = new Uint8Array(17);
            uuidBytes[0] = 9;
            uuidBytes.set((0, import_util_hex_encoding.fromHex)(header.value.replace(/\-/g, "")), 1);
            return uuidBytes;
        }
      }
    };
    var UUID_PATTERN = /^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$/;
    var Int64 = class _Int64 {
      static {
        __name(this, "_Int64");
      }
      constructor(bytes) {
        this.bytes = bytes;
        if (bytes.byteLength !== 8) {
          throw new Error("Int64 buffers must be exactly 8 bytes");
        }
      }
      static {
        __name2(this, "Int64");
      }
      static fromNumber(number) {
        if (number > 9223372036854776e3 || number < -9223372036854776e3) {
          throw new Error(`${number} is too large (or, if negative, too small) to represent as an Int64`);
        }
        const bytes = new Uint8Array(8);
        for (let i3 = 7, remaining = Math.abs(Math.round(number)); i3 > -1 && remaining > 0; i3--, remaining /= 256) {
          bytes[i3] = remaining;
        }
        if (number < 0) {
          negate(bytes);
        }
        return new _Int64(bytes);
      }
      /**
       * Called implicitly by infix arithmetic operators.
       */
      valueOf() {
        const bytes = this.bytes.slice(0);
        const negative = bytes[0] & 128;
        if (negative) {
          negate(bytes);
        }
        return parseInt((0, import_util_hex_encoding.toHex)(bytes), 16) * (negative ? -1 : 1);
      }
      toString() {
        return String(this.valueOf());
      }
    };
    function negate(bytes) {
      for (let i3 = 0; i3 < 8; i3++) {
        bytes[i3] ^= 255;
      }
      for (let i3 = 7; i3 > -1; i3--) {
        bytes[i3]++;
        if (bytes[i3] !== 0)
          break;
      }
    }
    __name(negate, "negate");
    __name2(negate, "negate");
    var hasHeader = __name2((soughtHeader, headers) => {
      soughtHeader = soughtHeader.toLowerCase();
      for (const headerName of Object.keys(headers)) {
        if (soughtHeader === headerName.toLowerCase()) {
          return true;
        }
      }
      return false;
    }, "hasHeader");
    var import_protocol_http15 = require_dist_cjs2();
    var moveHeadersToQuery = __name2((request, options = {}) => {
      const { headers, query = {} } = import_protocol_http15.HttpRequest.clone(request);
      for (const name of Object.keys(headers)) {
        const lname = name.toLowerCase();
        if (lname.slice(0, 6) === "x-amz-" && !options.unhoistableHeaders?.has(lname) || options.hoistableHeaders?.has(lname)) {
          query[name] = headers[name];
          delete headers[name];
        }
      }
      return {
        ...request,
        headers,
        query
      };
    }, "moveHeadersToQuery");
    var prepareRequest = __name2((request) => {
      request = import_protocol_http15.HttpRequest.clone(request);
      for (const headerName of Object.keys(request.headers)) {
        if (GENERATED_HEADERS.indexOf(headerName.toLowerCase()) > -1) {
          delete request.headers[headerName];
        }
      }
      return request;
    }, "prepareRequest");
    var import_util_middleware7 = require_dist_cjs17();
    var import_util_utf842 = require_dist_cjs9();
    var import_util_uri_escape = require_dist_cjs11();
    var getCanonicalQuery = __name2(({ query = {} }) => {
      const keys = [];
      const serialized = {};
      for (const key of Object.keys(query)) {
        if (key.toLowerCase() === SIGNATURE_HEADER) {
          continue;
        }
        const encodedKey = (0, import_util_uri_escape.escapeUri)(key);
        keys.push(encodedKey);
        const value = query[key];
        if (typeof value === "string") {
          serialized[encodedKey] = `${encodedKey}=${(0, import_util_uri_escape.escapeUri)(value)}`;
        } else if (Array.isArray(value)) {
          serialized[encodedKey] = value.slice(0).reduce((encoded, value2) => encoded.concat([`${encodedKey}=${(0, import_util_uri_escape.escapeUri)(value2)}`]), []).sort().join("&");
        }
      }
      return keys.sort().map((key) => serialized[key]).filter((serialized2) => serialized2).join("&");
    }, "getCanonicalQuery");
    var iso8601 = __name2((time) => toDate(time).toISOString().replace(/\.\d{3}Z$/, "Z"), "iso8601");
    var toDate = __name2((time) => {
      if (typeof time === "number") {
        return new Date(time * 1e3);
      }
      if (typeof time === "string") {
        if (Number(time)) {
          return new Date(Number(time) * 1e3);
        }
        return new Date(time);
      }
      return time;
    }, "toDate");
    var SignatureV4Base = class {
      static {
        __name(this, "SignatureV4Base");
      }
      static {
        __name2(this, "SignatureV4Base");
      }
      constructor({
        applyChecksum,
        credentials,
        region,
        service,
        sha256,
        uriEscapePath = true
      }) {
        this.service = service;
        this.sha256 = sha256;
        this.uriEscapePath = uriEscapePath;
        this.applyChecksum = typeof applyChecksum === "boolean" ? applyChecksum : true;
        this.regionProvider = (0, import_util_middleware7.normalizeProvider)(region);
        this.credentialProvider = (0, import_util_middleware7.normalizeProvider)(credentials);
      }
      createCanonicalRequest(request, canonicalHeaders, payloadHash) {
        const sortedHeaders = Object.keys(canonicalHeaders).sort();
        return `${request.method}
${this.getCanonicalPath(request)}
${getCanonicalQuery(request)}
${sortedHeaders.map((name) => `${name}:${canonicalHeaders[name]}`).join("\n")}

${sortedHeaders.join(";")}
${payloadHash}`;
      }
      async createStringToSign(longDate, credentialScope, canonicalRequest, algorithmIdentifier) {
        const hash = new this.sha256();
        hash.update((0, import_util_utf842.toUint8Array)(canonicalRequest));
        const hashedRequest = await hash.digest();
        return `${algorithmIdentifier}
${longDate}
${credentialScope}
${(0, import_util_hex_encoding.toHex)(hashedRequest)}`;
      }
      getCanonicalPath({ path }) {
        if (this.uriEscapePath) {
          const normalizedPathSegments = [];
          for (const pathSegment of path.split("/")) {
            if (pathSegment?.length === 0)
              continue;
            if (pathSegment === ".")
              continue;
            if (pathSegment === "..") {
              normalizedPathSegments.pop();
            } else {
              normalizedPathSegments.push(pathSegment);
            }
          }
          const normalizedPath = `${path?.startsWith("/") ? "/" : ""}${normalizedPathSegments.join("/")}${normalizedPathSegments.length > 0 && path?.endsWith("/") ? "/" : ""}`;
          const doubleEncoded = (0, import_util_uri_escape.escapeUri)(normalizedPath);
          return doubleEncoded.replace(/%2F/g, "/");
        }
        return path;
      }
      validateResolvedCredentials(credentials) {
        if (typeof credentials !== "object" || // @ts-expect-error: Property 'accessKeyId' does not exist on type 'object'.ts(2339)
        typeof credentials.accessKeyId !== "string" || // @ts-expect-error: Property 'secretAccessKey' does not exist on type 'object'.ts(2339)
        typeof credentials.secretAccessKey !== "string") {
          throw new Error("Resolved credential object is not valid");
        }
      }
      formatDate(now) {
        const longDate = iso8601(now).replace(/[\-:]/g, "");
        return {
          longDate,
          shortDate: longDate.slice(0, 8)
        };
      }
      getCanonicalHeaderList(headers) {
        return Object.keys(headers).sort().join(";");
      }
    };
    var SignatureV42 = class extends SignatureV4Base {
      static {
        __name(this, "SignatureV4");
      }
      constructor({
        applyChecksum,
        credentials,
        region,
        service,
        sha256,
        uriEscapePath = true
      }) {
        super({
          applyChecksum,
          credentials,
          region,
          service,
          sha256,
          uriEscapePath
        });
        this.headerFormatter = new HeaderFormatter();
      }
      static {
        __name2(this, "SignatureV4");
      }
      async presign(originalRequest, options = {}) {
        const {
          signingDate = /* @__PURE__ */ new Date(),
          expiresIn = 3600,
          unsignableHeaders,
          unhoistableHeaders,
          signableHeaders,
          hoistableHeaders,
          signingRegion,
          signingService
        } = options;
        const credentials = await this.credentialProvider();
        this.validateResolvedCredentials(credentials);
        const region = signingRegion ?? await this.regionProvider();
        const { longDate, shortDate } = this.formatDate(signingDate);
        if (expiresIn > MAX_PRESIGNED_TTL) {
          return Promise.reject(
            "Signature version 4 presigned URLs must have an expiration date less than one week in the future"
          );
        }
        const scope = createScope(shortDate, region, signingService ?? this.service);
        const request = moveHeadersToQuery(prepareRequest(originalRequest), { unhoistableHeaders, hoistableHeaders });
        if (credentials.sessionToken) {
          request.query[TOKEN_QUERY_PARAM] = credentials.sessionToken;
        }
        request.query[ALGORITHM_QUERY_PARAM] = ALGORITHM_IDENTIFIER;
        request.query[CREDENTIAL_QUERY_PARAM] = `${credentials.accessKeyId}/${scope}`;
        request.query[AMZ_DATE_QUERY_PARAM] = longDate;
        request.query[EXPIRES_QUERY_PARAM] = expiresIn.toString(10);
        const canonicalHeaders = getCanonicalHeaders(request, unsignableHeaders, signableHeaders);
        request.query[SIGNED_HEADERS_QUERY_PARAM] = this.getCanonicalHeaderList(canonicalHeaders);
        request.query[SIGNATURE_QUERY_PARAM] = await this.getSignature(
          longDate,
          scope,
          this.getSigningKey(credentials, region, shortDate, signingService),
          this.createCanonicalRequest(request, canonicalHeaders, await getPayloadHash(originalRequest, this.sha256))
        );
        return request;
      }
      async sign(toSign, options) {
        if (typeof toSign === "string") {
          return this.signString(toSign, options);
        } else if (toSign.headers && toSign.payload) {
          return this.signEvent(toSign, options);
        } else if (toSign.message) {
          return this.signMessage(toSign, options);
        } else {
          return this.signRequest(toSign, options);
        }
      }
      async signEvent({ headers, payload }, { signingDate = /* @__PURE__ */ new Date(), priorSignature, signingRegion, signingService }) {
        const region = signingRegion ?? await this.regionProvider();
        const { shortDate, longDate } = this.formatDate(signingDate);
        const scope = createScope(shortDate, region, signingService ?? this.service);
        const hashedPayload = await getPayloadHash({ headers: {}, body: payload }, this.sha256);
        const hash = new this.sha256();
        hash.update(headers);
        const hashedHeaders = (0, import_util_hex_encoding.toHex)(await hash.digest());
        const stringToSign = [
          EVENT_ALGORITHM_IDENTIFIER,
          longDate,
          scope,
          priorSignature,
          hashedHeaders,
          hashedPayload
        ].join("\n");
        return this.signString(stringToSign, { signingDate, signingRegion: region, signingService });
      }
      async signMessage(signableMessage, { signingDate = /* @__PURE__ */ new Date(), signingRegion, signingService }) {
        const promise = this.signEvent(
          {
            headers: this.headerFormatter.format(signableMessage.message.headers),
            payload: signableMessage.message.body
          },
          {
            signingDate,
            signingRegion,
            signingService,
            priorSignature: signableMessage.priorSignature
          }
        );
        return promise.then((signature) => {
          return { message: signableMessage.message, signature };
        });
      }
      async signString(stringToSign, { signingDate = /* @__PURE__ */ new Date(), signingRegion, signingService } = {}) {
        const credentials = await this.credentialProvider();
        this.validateResolvedCredentials(credentials);
        const region = signingRegion ?? await this.regionProvider();
        const { shortDate } = this.formatDate(signingDate);
        const hash = new this.sha256(await this.getSigningKey(credentials, region, shortDate, signingService));
        hash.update((0, import_util_utf85.toUint8Array)(stringToSign));
        return (0, import_util_hex_encoding.toHex)(await hash.digest());
      }
      async signRequest(requestToSign, {
        signingDate = /* @__PURE__ */ new Date(),
        signableHeaders,
        unsignableHeaders,
        signingRegion,
        signingService
      } = {}) {
        const credentials = await this.credentialProvider();
        this.validateResolvedCredentials(credentials);
        const region = signingRegion ?? await this.regionProvider();
        const request = prepareRequest(requestToSign);
        const { longDate, shortDate } = this.formatDate(signingDate);
        const scope = createScope(shortDate, region, signingService ?? this.service);
        request.headers[AMZ_DATE_HEADER] = longDate;
        if (credentials.sessionToken) {
          request.headers[TOKEN_HEADER] = credentials.sessionToken;
        }
        const payloadHash = await getPayloadHash(request, this.sha256);
        if (!hasHeader(SHA256_HEADER, request.headers) && this.applyChecksum) {
          request.headers[SHA256_HEADER] = payloadHash;
        }
        const canonicalHeaders = getCanonicalHeaders(request, unsignableHeaders, signableHeaders);
        const signature = await this.getSignature(
          longDate,
          scope,
          this.getSigningKey(credentials, region, shortDate, signingService),
          this.createCanonicalRequest(request, canonicalHeaders, payloadHash)
        );
        request.headers[AUTH_HEADER] = `${ALGORITHM_IDENTIFIER} Credential=${credentials.accessKeyId}/${scope}, SignedHeaders=${this.getCanonicalHeaderList(canonicalHeaders)}, Signature=${signature}`;
        return request;
      }
      async getSignature(longDate, credentialScope, keyPromise, canonicalRequest) {
        const stringToSign = await this.createStringToSign(
          longDate,
          credentialScope,
          canonicalRequest,
          ALGORITHM_IDENTIFIER
        );
        const hash = new this.sha256(await keyPromise);
        hash.update((0, import_util_utf85.toUint8Array)(stringToSign));
        return (0, import_util_hex_encoding.toHex)(await hash.digest());
      }
      getSigningKey(credentials, region, shortDate, service) {
        return getSigningKey(this.sha256, credentials, shortDate, region, service || this.service);
      }
    };
    var signatureV4aContainer = {
      SignatureV4a: null
    };
  }
});

// ../../node_modules/.pnpm/@aws-sdk+core@3.821.0/node_modules/@aws-sdk/core/dist-es/submodules/httpAuthSchemes/aws_sdk/resolveAwsSdkSigV4Config.js
function normalizeCredentialProvider(config, { credentials, credentialDefaultProvider }) {
  let credentialsProvider;
  if (credentials) {
    if (!credentials?.memoized) {
      credentialsProvider = memoizeIdentityProvider(credentials, isIdentityExpired, doesIdentityRequireRefresh);
    } else {
      credentialsProvider = credentials;
    }
  } else {
    if (credentialDefaultProvider) {
      credentialsProvider = normalizeProvider(credentialDefaultProvider(Object.assign({}, config, {
        parentClientConfig: config
      })));
    } else {
      credentialsProvider = /* @__PURE__ */ __name(async () => {
        throw new Error("@aws-sdk/core::resolveAwsSdkSigV4Config - `credentials` not provided and no credentialDefaultProvider was configured.");
      }, "credentialsProvider");
    }
  }
  credentialsProvider.memoized = true;
  return credentialsProvider;
}
function bindCallerConfig(config, credentialsProvider) {
  if (credentialsProvider.configBound) {
    return credentialsProvider;
  }
  const fn = /* @__PURE__ */ __name(async (options) => credentialsProvider({ ...options, callerClientConfig: config }), "fn");
  fn.memoized = credentialsProvider.memoized;
  fn.configBound = true;
  return fn;
}
var import_signature_v4, resolveAwsSdkSigV4Config, resolveAWSSDKSigV4Config;
var init_resolveAwsSdkSigV4Config = __esm({
  "../../node_modules/.pnpm/@aws-sdk+core@3.821.0/node_modules/@aws-sdk/core/dist-es/submodules/httpAuthSchemes/aws_sdk/resolveAwsSdkSigV4Config.js"() {
    init_client();
    init_dist_es();
    import_signature_v4 = __toESM(require_dist_cjs24());
    resolveAwsSdkSigV4Config = /* @__PURE__ */ __name((config) => {
      let inputCredentials = config.credentials;
      let isUserSupplied = !!config.credentials;
      let resolvedCredentials = void 0;
      Object.defineProperty(config, "credentials", {
        set(credentials) {
          if (credentials && credentials !== inputCredentials && credentials !== resolvedCredentials) {
            isUserSupplied = true;
          }
          inputCredentials = credentials;
          const memoizedProvider = normalizeCredentialProvider(config, {
            credentials: inputCredentials,
            credentialDefaultProvider: config.credentialDefaultProvider
          });
          const boundProvider = bindCallerConfig(config, memoizedProvider);
          if (isUserSupplied && !boundProvider.attributed) {
            resolvedCredentials = /* @__PURE__ */ __name(async (options) => boundProvider(options).then((creds) => setCredentialFeature(creds, "CREDENTIALS_CODE", "e")), "resolvedCredentials");
            resolvedCredentials.memoized = boundProvider.memoized;
            resolvedCredentials.configBound = boundProvider.configBound;
            resolvedCredentials.attributed = true;
          } else {
            resolvedCredentials = boundProvider;
          }
        },
        get() {
          return resolvedCredentials;
        },
        enumerable: true,
        configurable: true
      });
      config.credentials = inputCredentials;
      const { signingEscapePath = true, systemClockOffset = config.systemClockOffset || 0, sha256 } = config;
      let signer;
      if (config.signer) {
        signer = normalizeProvider(config.signer);
      } else if (config.regionInfoProvider) {
        signer = /* @__PURE__ */ __name(() => normalizeProvider(config.region)().then(async (region) => [
          await config.regionInfoProvider(region, {
            useFipsEndpoint: await config.useFipsEndpoint(),
            useDualstackEndpoint: await config.useDualstackEndpoint()
          }) || {},
          region
        ]).then(([regionInfo, region]) => {
          const { signingRegion, signingService } = regionInfo;
          config.signingRegion = config.signingRegion || signingRegion || region;
          config.signingName = config.signingName || signingService || config.serviceId;
          const params = {
            ...config,
            credentials: config.credentials,
            region: config.signingRegion,
            service: config.signingName,
            sha256,
            uriEscapePath: signingEscapePath
          };
          const SignerCtor = config.signerConstructor || import_signature_v4.SignatureV4;
          return new SignerCtor(params);
        }), "signer");
      } else {
        signer = /* @__PURE__ */ __name(async (authScheme) => {
          authScheme = Object.assign({}, {
            name: "sigv4",
            signingName: config.signingName || config.defaultSigningName,
            signingRegion: await normalizeProvider(config.region)(),
            properties: {}
          }, authScheme);
          const signingRegion = authScheme.signingRegion;
          const signingService = authScheme.signingName;
          config.signingRegion = config.signingRegion || signingRegion;
          config.signingName = config.signingName || signingService || config.serviceId;
          const params = {
            ...config,
            credentials: config.credentials,
            region: config.signingRegion,
            service: config.signingName,
            sha256,
            uriEscapePath: signingEscapePath
          };
          const SignerCtor = config.signerConstructor || import_signature_v4.SignatureV4;
          return new SignerCtor(params);
        }, "signer");
      }
      const resolvedConfig = Object.assign(config, {
        systemClockOffset,
        signingEscapePath,
        signer
      });
      return resolvedConfig;
    }, "resolveAwsSdkSigV4Config");
    resolveAWSSDKSigV4Config = resolveAwsSdkSigV4Config;
    __name(normalizeCredentialProvider, "normalizeCredentialProvider");
    __name(bindCallerConfig, "bindCallerConfig");
  }
});

// ../../node_modules/.pnpm/@aws-sdk+core@3.821.0/node_modules/@aws-sdk/core/dist-es/submodules/httpAuthSchemes/aws_sdk/index.js
var init_aws_sdk = __esm({
  "../../node_modules/.pnpm/@aws-sdk+core@3.821.0/node_modules/@aws-sdk/core/dist-es/submodules/httpAuthSchemes/aws_sdk/index.js"() {
    init_AwsSdkSigV4Signer();
    init_AwsSdkSigV4ASigner();
    init_NODE_AUTH_SCHEME_PREFERENCE_OPTIONS();
    init_resolveAwsSdkSigV4AConfig();
    init_resolveAwsSdkSigV4Config();
  }
});

// ../../node_modules/.pnpm/@aws-sdk+core@3.821.0/node_modules/@aws-sdk/core/dist-es/submodules/httpAuthSchemes/index.js
var init_httpAuthSchemes2 = __esm({
  "../../node_modules/.pnpm/@aws-sdk+core@3.821.0/node_modules/@aws-sdk/core/dist-es/submodules/httpAuthSchemes/index.js"() {
    init_aws_sdk();
    init_getBearerTokenEnvKey();
  }
});

// ../../node_modules/.pnpm/@aws-sdk+core@3.821.0/node_modules/@aws-sdk/core/dist-es/submodules/protocols/coercing-serializers.js
var _toStr, _toBool, _toNum;
var init_coercing_serializers = __esm({
  "../../node_modules/.pnpm/@aws-sdk+core@3.821.0/node_modules/@aws-sdk/core/dist-es/submodules/protocols/coercing-serializers.js"() {
    _toStr = /* @__PURE__ */ __name((val2) => {
      if (val2 == null) {
        return val2;
      }
      if (typeof val2 === "number" || typeof val2 === "bigint") {
        const warning = new Error(`Received number ${val2} where a string was expected.`);
        warning.name = "Warning";
        console.warn(warning);
        return String(val2);
      }
      if (typeof val2 === "boolean") {
        const warning = new Error(`Received boolean ${val2} where a string was expected.`);
        warning.name = "Warning";
        console.warn(warning);
        return String(val2);
      }
      return val2;
    }, "_toStr");
    _toBool = /* @__PURE__ */ __name((val2) => {
      if (val2 == null) {
        return val2;
      }
      if (typeof val2 === "number") {
      }
      if (typeof val2 === "string") {
        const lowercase = val2.toLowerCase();
        if (val2 !== "" && lowercase !== "false" && lowercase !== "true") {
          const warning = new Error(`Received string "${val2}" where a boolean was expected.`);
          warning.name = "Warning";
          console.warn(warning);
        }
        return val2 !== "" && lowercase !== "false";
      }
      return val2;
    }, "_toBool");
    _toNum = /* @__PURE__ */ __name((val2) => {
      if (val2 == null) {
        return val2;
      }
      if (typeof val2 === "boolean") {
      }
      if (typeof val2 === "string") {
        const num = Number(val2);
        if (num.toString() !== val2) {
          const warning = new Error(`Received string "${val2}" where a number was expected.`);
          warning.name = "Warning";
          console.warn(warning);
          return val2;
        }
        return num;
      }
      return val2;
    }, "_toNum");
  }
});

// ../../node_modules/.pnpm/@aws-sdk+core@3.821.0/node_modules/@aws-sdk/core/dist-es/submodules/protocols/json/awsExpectUnion.js
var import_smithy_client, awsExpectUnion;
var init_awsExpectUnion = __esm({
  "../../node_modules/.pnpm/@aws-sdk+core@3.821.0/node_modules/@aws-sdk/core/dist-es/submodules/protocols/json/awsExpectUnion.js"() {
    import_smithy_client = __toESM(require_dist_cjs18());
    awsExpectUnion = /* @__PURE__ */ __name((value) => {
      if (value == null) {
        return void 0;
      }
      if (typeof value === "object" && "__type" in value) {
        delete value.__type;
      }
      return (0, import_smithy_client.expectUnion)(value);
    }, "awsExpectUnion");
  }
});

// ../../node_modules/.pnpm/@aws-sdk+core@3.821.0/node_modules/@aws-sdk/core/dist-es/submodules/protocols/common.js
var import_smithy_client2, collectBodyString;
var init_common = __esm({
  "../../node_modules/.pnpm/@aws-sdk+core@3.821.0/node_modules/@aws-sdk/core/dist-es/submodules/protocols/common.js"() {
    import_smithy_client2 = __toESM(require_dist_cjs18());
    collectBodyString = /* @__PURE__ */ __name((streamBody, context) => (0, import_smithy_client2.collectBody)(streamBody, context).then((body) => context.utf8Encoder(body)), "collectBodyString");
  }
});

// ../../node_modules/.pnpm/@aws-sdk+core@3.821.0/node_modules/@aws-sdk/core/dist-es/submodules/protocols/json/parseJsonBody.js
var parseJsonBody, parseJsonErrorBody, loadRestJsonErrorCode;
var init_parseJsonBody = __esm({
  "../../node_modules/.pnpm/@aws-sdk+core@3.821.0/node_modules/@aws-sdk/core/dist-es/submodules/protocols/json/parseJsonBody.js"() {
    init_common();
    parseJsonBody = /* @__PURE__ */ __name((streamBody, context) => collectBodyString(streamBody, context).then((encoded) => {
      if (encoded.length) {
        try {
          return JSON.parse(encoded);
        } catch (e3) {
          if (e3?.name === "SyntaxError") {
            Object.defineProperty(e3, "$responseBodyText", {
              value: encoded
            });
          }
          throw e3;
        }
      }
      return {};
    }), "parseJsonBody");
    parseJsonErrorBody = /* @__PURE__ */ __name(async (errorBody, context) => {
      const value = await parseJsonBody(errorBody, context);
      value.message = value.message ?? value.Message;
      return value;
    }, "parseJsonErrorBody");
    loadRestJsonErrorCode = /* @__PURE__ */ __name((output, data) => {
      const findKey = /* @__PURE__ */ __name((object, key) => Object.keys(object).find((k3) => k3.toLowerCase() === key.toLowerCase()), "findKey");
      const sanitizeErrorCode = /* @__PURE__ */ __name((rawValue) => {
        let cleanValue = rawValue;
        if (typeof cleanValue === "number") {
          cleanValue = cleanValue.toString();
        }
        if (cleanValue.indexOf(",") >= 0) {
          cleanValue = cleanValue.split(",")[0];
        }
        if (cleanValue.indexOf(":") >= 0) {
          cleanValue = cleanValue.split(":")[0];
        }
        if (cleanValue.indexOf("#") >= 0) {
          cleanValue = cleanValue.split("#")[1];
        }
        return cleanValue;
      }, "sanitizeErrorCode");
      const headerKey = findKey(output.headers, "x-amzn-errortype");
      if (headerKey !== void 0) {
        return sanitizeErrorCode(output.headers[headerKey]);
      }
      if (data && typeof data === "object") {
        const codeKey = findKey(data, "code");
        if (codeKey && data[codeKey] !== void 0) {
          return sanitizeErrorCode(data[codeKey]);
        }
        if (data["__type"] !== void 0) {
          return sanitizeErrorCode(data["__type"]);
        }
      }
    }, "loadRestJsonErrorCode");
  }
});

// ../../node_modules/.pnpm/fast-xml-parser@4.4.1/node_modules/fast-xml-parser/src/util.js
var require_util = __commonJS({
  "../../node_modules/.pnpm/fast-xml-parser@4.4.1/node_modules/fast-xml-parser/src/util.js"(exports2) {
    "use strict";
    var nameStartChar = ":A-Za-z_\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD";
    var nameChar = nameStartChar + "\\-.\\d\\u00B7\\u0300-\\u036F\\u203F-\\u2040";
    var nameRegexp = "[" + nameStartChar + "][" + nameChar + "]*";
    var regexName = new RegExp("^" + nameRegexp + "$");
    var getAllMatches = /* @__PURE__ */ __name(function(string, regex) {
      const matches = [];
      let match = regex.exec(string);
      while (match) {
        const allmatches = [];
        allmatches.startIndex = regex.lastIndex - match[0].length;
        const len = match.length;
        for (let index = 0; index < len; index++) {
          allmatches.push(match[index]);
        }
        matches.push(allmatches);
        match = regex.exec(string);
      }
      return matches;
    }, "getAllMatches");
    var isName = /* @__PURE__ */ __name(function(string) {
      const match = regexName.exec(string);
      return !(match === null || typeof match === "undefined");
    }, "isName");
    exports2.isExist = function(v6) {
      return typeof v6 !== "undefined";
    };
    exports2.isEmptyObject = function(obj) {
      return Object.keys(obj).length === 0;
    };
    exports2.merge = function(target, a3, arrayMode) {
      if (a3) {
        const keys = Object.keys(a3);
        const len = keys.length;
        for (let i3 = 0; i3 < len; i3++) {
          if (arrayMode === "strict") {
            target[keys[i3]] = [a3[keys[i3]]];
          } else {
            target[keys[i3]] = a3[keys[i3]];
          }
        }
      }
    };
    exports2.getValue = function(v6) {
      if (exports2.isExist(v6)) {
        return v6;
      } else {
        return "";
      }
    };
    exports2.isName = isName;
    exports2.getAllMatches = getAllMatches;
    exports2.nameRegexp = nameRegexp;
  }
});

// ../../node_modules/.pnpm/fast-xml-parser@4.4.1/node_modules/fast-xml-parser/src/validator.js
var require_validator = __commonJS({
  "../../node_modules/.pnpm/fast-xml-parser@4.4.1/node_modules/fast-xml-parser/src/validator.js"(exports2) {
    "use strict";
    var util = require_util();
    var defaultOptions = {
      allowBooleanAttributes: false,
      //A tag can have attributes without any value
      unpairedTags: []
    };
    exports2.validate = function(xmlData, options) {
      options = Object.assign({}, defaultOptions, options);
      const tags = [];
      let tagFound = false;
      let reachedRoot = false;
      if (xmlData[0] === "\uFEFF") {
        xmlData = xmlData.substr(1);
      }
      for (let i3 = 0; i3 < xmlData.length; i3++) {
        if (xmlData[i3] === "<" && xmlData[i3 + 1] === "?") {
          i3 += 2;
          i3 = readPI(xmlData, i3);
          if (i3.err) return i3;
        } else if (xmlData[i3] === "<") {
          let tagStartPos = i3;
          i3++;
          if (xmlData[i3] === "!") {
            i3 = readCommentAndCDATA(xmlData, i3);
            continue;
          } else {
            let closingTag = false;
            if (xmlData[i3] === "/") {
              closingTag = true;
              i3++;
            }
            let tagName = "";
            for (; i3 < xmlData.length && xmlData[i3] !== ">" && xmlData[i3] !== " " && xmlData[i3] !== "	" && xmlData[i3] !== "\n" && xmlData[i3] !== "\r"; i3++) {
              tagName += xmlData[i3];
            }
            tagName = tagName.trim();
            if (tagName[tagName.length - 1] === "/") {
              tagName = tagName.substring(0, tagName.length - 1);
              i3--;
            }
            if (!validateTagName(tagName)) {
              let msg;
              if (tagName.trim().length === 0) {
                msg = "Invalid space after '<'.";
              } else {
                msg = "Tag '" + tagName + "' is an invalid name.";
              }
              return getErrorObject("InvalidTag", msg, getLineNumberForPosition(xmlData, i3));
            }
            const result = readAttributeStr(xmlData, i3);
            if (result === false) {
              return getErrorObject("InvalidAttr", "Attributes for '" + tagName + "' have open quote.", getLineNumberForPosition(xmlData, i3));
            }
            let attrStr = result.value;
            i3 = result.index;
            if (attrStr[attrStr.length - 1] === "/") {
              const attrStrStart = i3 - attrStr.length;
              attrStr = attrStr.substring(0, attrStr.length - 1);
              const isValid = validateAttributeString(attrStr, options);
              if (isValid === true) {
                tagFound = true;
              } else {
                return getErrorObject(isValid.err.code, isValid.err.msg, getLineNumberForPosition(xmlData, attrStrStart + isValid.err.line));
              }
            } else if (closingTag) {
              if (!result.tagClosed) {
                return getErrorObject("InvalidTag", "Closing tag '" + tagName + "' doesn't have proper closing.", getLineNumberForPosition(xmlData, i3));
              } else if (attrStr.trim().length > 0) {
                return getErrorObject("InvalidTag", "Closing tag '" + tagName + "' can't have attributes or invalid starting.", getLineNumberForPosition(xmlData, tagStartPos));
              } else if (tags.length === 0) {
                return getErrorObject("InvalidTag", "Closing tag '" + tagName + "' has not been opened.", getLineNumberForPosition(xmlData, tagStartPos));
              } else {
                const otg = tags.pop();
                if (tagName !== otg.tagName) {
                  let openPos = getLineNumberForPosition(xmlData, otg.tagStartPos);
                  return getErrorObject(
                    "InvalidTag",
                    "Expected closing tag '" + otg.tagName + "' (opened in line " + openPos.line + ", col " + openPos.col + ") instead of closing tag '" + tagName + "'.",
                    getLineNumberForPosition(xmlData, tagStartPos)
                  );
                }
                if (tags.length == 0) {
                  reachedRoot = true;
                }
              }
            } else {
              const isValid = validateAttributeString(attrStr, options);
              if (isValid !== true) {
                return getErrorObject(isValid.err.code, isValid.err.msg, getLineNumberForPosition(xmlData, i3 - attrStr.length + isValid.err.line));
              }
              if (reachedRoot === true) {
                return getErrorObject("InvalidXml", "Multiple possible root nodes found.", getLineNumberForPosition(xmlData, i3));
              } else if (options.unpairedTags.indexOf(tagName) !== -1) {
              } else {
                tags.push({ tagName, tagStartPos });
              }
              tagFound = true;
            }
            for (i3++; i3 < xmlData.length; i3++) {
              if (xmlData[i3] === "<") {
                if (xmlData[i3 + 1] === "!") {
                  i3++;
                  i3 = readCommentAndCDATA(xmlData, i3);
                  continue;
                } else if (xmlData[i3 + 1] === "?") {
                  i3 = readPI(xmlData, ++i3);
                  if (i3.err) return i3;
                } else {
                  break;
                }
              } else if (xmlData[i3] === "&") {
                const afterAmp = validateAmpersand(xmlData, i3);
                if (afterAmp == -1)
                  return getErrorObject("InvalidChar", "char '&' is not expected.", getLineNumberForPosition(xmlData, i3));
                i3 = afterAmp;
              } else {
                if (reachedRoot === true && !isWhiteSpace(xmlData[i3])) {
                  return getErrorObject("InvalidXml", "Extra text at the end", getLineNumberForPosition(xmlData, i3));
                }
              }
            }
            if (xmlData[i3] === "<") {
              i3--;
            }
          }
        } else {
          if (isWhiteSpace(xmlData[i3])) {
            continue;
          }
          return getErrorObject("InvalidChar", "char '" + xmlData[i3] + "' is not expected.", getLineNumberForPosition(xmlData, i3));
        }
      }
      if (!tagFound) {
        return getErrorObject("InvalidXml", "Start tag expected.", 1);
      } else if (tags.length == 1) {
        return getErrorObject("InvalidTag", "Unclosed tag '" + tags[0].tagName + "'.", getLineNumberForPosition(xmlData, tags[0].tagStartPos));
      } else if (tags.length > 0) {
        return getErrorObject("InvalidXml", "Invalid '" + JSON.stringify(tags.map((t3) => t3.tagName), null, 4).replace(/\r?\n/g, "") + "' found.", { line: 1, col: 1 });
      }
      return true;
    };
    function isWhiteSpace(char) {
      return char === " " || char === "	" || char === "\n" || char === "\r";
    }
    __name(isWhiteSpace, "isWhiteSpace");
    function readPI(xmlData, i3) {
      const start = i3;
      for (; i3 < xmlData.length; i3++) {
        if (xmlData[i3] == "?" || xmlData[i3] == " ") {
          const tagname = xmlData.substr(start, i3 - start);
          if (i3 > 5 && tagname === "xml") {
            return getErrorObject("InvalidXml", "XML declaration allowed only at the start of the document.", getLineNumberForPosition(xmlData, i3));
          } else if (xmlData[i3] == "?" && xmlData[i3 + 1] == ">") {
            i3++;
            break;
          } else {
            continue;
          }
        }
      }
      return i3;
    }
    __name(readPI, "readPI");
    function readCommentAndCDATA(xmlData, i3) {
      if (xmlData.length > i3 + 5 && xmlData[i3 + 1] === "-" && xmlData[i3 + 2] === "-") {
        for (i3 += 3; i3 < xmlData.length; i3++) {
          if (xmlData[i3] === "-" && xmlData[i3 + 1] === "-" && xmlData[i3 + 2] === ">") {
            i3 += 2;
            break;
          }
        }
      } else if (xmlData.length > i3 + 8 && xmlData[i3 + 1] === "D" && xmlData[i3 + 2] === "O" && xmlData[i3 + 3] === "C" && xmlData[i3 + 4] === "T" && xmlData[i3 + 5] === "Y" && xmlData[i3 + 6] === "P" && xmlData[i3 + 7] === "E") {
        let angleBracketsCount = 1;
        for (i3 += 8; i3 < xmlData.length; i3++) {
          if (xmlData[i3] === "<") {
            angleBracketsCount++;
          } else if (xmlData[i3] === ">") {
            angleBracketsCount--;
            if (angleBracketsCount === 0) {
              break;
            }
          }
        }
      } else if (xmlData.length > i3 + 9 && xmlData[i3 + 1] === "[" && xmlData[i3 + 2] === "C" && xmlData[i3 + 3] === "D" && xmlData[i3 + 4] === "A" && xmlData[i3 + 5] === "T" && xmlData[i3 + 6] === "A" && xmlData[i3 + 7] === "[") {
        for (i3 += 8; i3 < xmlData.length; i3++) {
          if (xmlData[i3] === "]" && xmlData[i3 + 1] === "]" && xmlData[i3 + 2] === ">") {
            i3 += 2;
            break;
          }
        }
      }
      return i3;
    }
    __name(readCommentAndCDATA, "readCommentAndCDATA");
    var doubleQuote = '"';
    var singleQuote = "'";
    function readAttributeStr(xmlData, i3) {
      let attrStr = "";
      let startChar = "";
      let tagClosed = false;
      for (; i3 < xmlData.length; i3++) {
        if (xmlData[i3] === doubleQuote || xmlData[i3] === singleQuote) {
          if (startChar === "") {
            startChar = xmlData[i3];
          } else if (startChar !== xmlData[i3]) {
          } else {
            startChar = "";
          }
        } else if (xmlData[i3] === ">") {
          if (startChar === "") {
            tagClosed = true;
            break;
          }
        }
        attrStr += xmlData[i3];
      }
      if (startChar !== "") {
        return false;
      }
      return {
        value: attrStr,
        index: i3,
        tagClosed
      };
    }
    __name(readAttributeStr, "readAttributeStr");
    var validAttrStrRegxp = new RegExp(`(\\s*)([^\\s=]+)(\\s*=)?(\\s*(['"])(([\\s\\S])*?)\\5)?`, "g");
    function validateAttributeString(attrStr, options) {
      const matches = util.getAllMatches(attrStr, validAttrStrRegxp);
      const attrNames = {};
      for (let i3 = 0; i3 < matches.length; i3++) {
        if (matches[i3][1].length === 0) {
          return getErrorObject("InvalidAttr", "Attribute '" + matches[i3][2] + "' has no space in starting.", getPositionFromMatch(matches[i3]));
        } else if (matches[i3][3] !== void 0 && matches[i3][4] === void 0) {
          return getErrorObject("InvalidAttr", "Attribute '" + matches[i3][2] + "' is without value.", getPositionFromMatch(matches[i3]));
        } else if (matches[i3][3] === void 0 && !options.allowBooleanAttributes) {
          return getErrorObject("InvalidAttr", "boolean attribute '" + matches[i3][2] + "' is not allowed.", getPositionFromMatch(matches[i3]));
        }
        const attrName = matches[i3][2];
        if (!validateAttrName(attrName)) {
          return getErrorObject("InvalidAttr", "Attribute '" + attrName + "' is an invalid name.", getPositionFromMatch(matches[i3]));
        }
        if (!attrNames.hasOwnProperty(attrName)) {
          attrNames[attrName] = 1;
        } else {
          return getErrorObject("InvalidAttr", "Attribute '" + attrName + "' is repeated.", getPositionFromMatch(matches[i3]));
        }
      }
      return true;
    }
    __name(validateAttributeString, "validateAttributeString");
    function validateNumberAmpersand(xmlData, i3) {
      let re = /\d/;
      if (xmlData[i3] === "x") {
        i3++;
        re = /[\da-fA-F]/;
      }
      for (; i3 < xmlData.length; i3++) {
        if (xmlData[i3] === ";")
          return i3;
        if (!xmlData[i3].match(re))
          break;
      }
      return -1;
    }
    __name(validateNumberAmpersand, "validateNumberAmpersand");
    function validateAmpersand(xmlData, i3) {
      i3++;
      if (xmlData[i3] === ";")
        return -1;
      if (xmlData[i3] === "#") {
        i3++;
        return validateNumberAmpersand(xmlData, i3);
      }
      let count = 0;
      for (; i3 < xmlData.length; i3++, count++) {
        if (xmlData[i3].match(/\w/) && count < 20)
          continue;
        if (xmlData[i3] === ";")
          break;
        return -1;
      }
      return i3;
    }
    __name(validateAmpersand, "validateAmpersand");
    function getErrorObject(code, message, lineNumber) {
      return {
        err: {
          code,
          msg: message,
          line: lineNumber.line || lineNumber,
          col: lineNumber.col
        }
      };
    }
    __name(getErrorObject, "getErrorObject");
    function validateAttrName(attrName) {
      return util.isName(attrName);
    }
    __name(validateAttrName, "validateAttrName");
    function validateTagName(tagname) {
      return util.isName(tagname);
    }
    __name(validateTagName, "validateTagName");
    function getLineNumberForPosition(xmlData, index) {
      const lines = xmlData.substring(0, index).split(/\r?\n/);
      return {
        line: lines.length,
        // column number is last line's length + 1, because column numbering starts at 1:
        col: lines[lines.length - 1].length + 1
      };
    }
    __name(getLineNumberForPosition, "getLineNumberForPosition");
    function getPositionFromMatch(match) {
      return match.startIndex + match[1].length;
    }
    __name(getPositionFromMatch, "getPositionFromMatch");
  }
});

// ../../node_modules/.pnpm/fast-xml-parser@4.4.1/node_modules/fast-xml-parser/src/xmlparser/OptionsBuilder.js
var require_OptionsBuilder = __commonJS({
  "../../node_modules/.pnpm/fast-xml-parser@4.4.1/node_modules/fast-xml-parser/src/xmlparser/OptionsBuilder.js"(exports2) {
    var defaultOptions = {
      preserveOrder: false,
      attributeNamePrefix: "@_",
      attributesGroupName: false,
      textNodeName: "#text",
      ignoreAttributes: true,
      removeNSPrefix: false,
      // remove NS from tag name or attribute name if true
      allowBooleanAttributes: false,
      //a tag can have attributes without any value
      //ignoreRootElement : false,
      parseTagValue: true,
      parseAttributeValue: false,
      trimValues: true,
      //Trim string values of tag and attributes
      cdataPropName: false,
      numberParseOptions: {
        hex: true,
        leadingZeros: true,
        eNotation: true
      },
      tagValueProcessor: /* @__PURE__ */ __name(function(tagName, val2) {
        return val2;
      }, "tagValueProcessor"),
      attributeValueProcessor: /* @__PURE__ */ __name(function(attrName, val2) {
        return val2;
      }, "attributeValueProcessor"),
      stopNodes: [],
      //nested tags will not be parsed even for errors
      alwaysCreateTextNode: false,
      isArray: /* @__PURE__ */ __name(() => false, "isArray"),
      commentPropName: false,
      unpairedTags: [],
      processEntities: true,
      htmlEntities: false,
      ignoreDeclaration: false,
      ignorePiTags: false,
      transformTagName: false,
      transformAttributeName: false,
      updateTag: /* @__PURE__ */ __name(function(tagName, jPath, attrs) {
        return tagName;
      }, "updateTag")
      // skipEmptyListItem: false
    };
    var buildOptions = /* @__PURE__ */ __name(function(options) {
      return Object.assign({}, defaultOptions, options);
    }, "buildOptions");
    exports2.buildOptions = buildOptions;
    exports2.defaultOptions = defaultOptions;
  }
});

// ../../node_modules/.pnpm/fast-xml-parser@4.4.1/node_modules/fast-xml-parser/src/xmlparser/xmlNode.js
var require_xmlNode = __commonJS({
  "../../node_modules/.pnpm/fast-xml-parser@4.4.1/node_modules/fast-xml-parser/src/xmlparser/xmlNode.js"(exports2, module2) {
    "use strict";
    var XmlNode = class {
      static {
        __name(this, "XmlNode");
      }
      constructor(tagname) {
        this.tagname = tagname;
        this.child = [];
        this[":@"] = {};
      }
      add(key, val2) {
        if (key === "__proto__") key = "#__proto__";
        this.child.push({ [key]: val2 });
      }
      addChild(node) {
        if (node.tagname === "__proto__") node.tagname = "#__proto__";
        if (node[":@"] && Object.keys(node[":@"]).length > 0) {
          this.child.push({ [node.tagname]: node.child, [":@"]: node[":@"] });
        } else {
          this.child.push({ [node.tagname]: node.child });
        }
      }
    };
    ;
    module2.exports = XmlNode;
  }
});

// ../../node_modules/.pnpm/fast-xml-parser@4.4.1/node_modules/fast-xml-parser/src/xmlparser/DocTypeReader.js
var require_DocTypeReader = __commonJS({
  "../../node_modules/.pnpm/fast-xml-parser@4.4.1/node_modules/fast-xml-parser/src/xmlparser/DocTypeReader.js"(exports2, module2) {
    var util = require_util();
    function readDocType(xmlData, i3) {
      const entities = {};
      if (xmlData[i3 + 3] === "O" && xmlData[i3 + 4] === "C" && xmlData[i3 + 5] === "T" && xmlData[i3 + 6] === "Y" && xmlData[i3 + 7] === "P" && xmlData[i3 + 8] === "E") {
        i3 = i3 + 9;
        let angleBracketsCount = 1;
        let hasBody = false, comment = false;
        let exp = "";
        for (; i3 < xmlData.length; i3++) {
          if (xmlData[i3] === "<" && !comment) {
            if (hasBody && isEntity(xmlData, i3)) {
              i3 += 7;
              [entityName, val, i3] = readEntityExp(xmlData, i3 + 1);
              if (val.indexOf("&") === -1)
                entities[validateEntityName(entityName)] = {
                  regx: RegExp(`&${entityName};`, "g"),
                  val
                };
            } else if (hasBody && isElement(xmlData, i3)) i3 += 8;
            else if (hasBody && isAttlist(xmlData, i3)) i3 += 8;
            else if (hasBody && isNotation(xmlData, i3)) i3 += 9;
            else if (isComment) comment = true;
            else throw new Error("Invalid DOCTYPE");
            angleBracketsCount++;
            exp = "";
          } else if (xmlData[i3] === ">") {
            if (comment) {
              if (xmlData[i3 - 1] === "-" && xmlData[i3 - 2] === "-") {
                comment = false;
                angleBracketsCount--;
              }
            } else {
              angleBracketsCount--;
            }
            if (angleBracketsCount === 0) {
              break;
            }
          } else if (xmlData[i3] === "[") {
            hasBody = true;
          } else {
            exp += xmlData[i3];
          }
        }
        if (angleBracketsCount !== 0) {
          throw new Error(`Unclosed DOCTYPE`);
        }
      } else {
        throw new Error(`Invalid Tag instead of DOCTYPE`);
      }
      return { entities, i: i3 };
    }
    __name(readDocType, "readDocType");
    function readEntityExp(xmlData, i3) {
      let entityName2 = "";
      for (; i3 < xmlData.length && (xmlData[i3] !== "'" && xmlData[i3] !== '"'); i3++) {
        entityName2 += xmlData[i3];
      }
      entityName2 = entityName2.trim();
      if (entityName2.indexOf(" ") !== -1) throw new Error("External entites are not supported");
      const startChar = xmlData[i3++];
      let val2 = "";
      for (; i3 < xmlData.length && xmlData[i3] !== startChar; i3++) {
        val2 += xmlData[i3];
      }
      return [entityName2, val2, i3];
    }
    __name(readEntityExp, "readEntityExp");
    function isComment(xmlData, i3) {
      if (xmlData[i3 + 1] === "!" && xmlData[i3 + 2] === "-" && xmlData[i3 + 3] === "-") return true;
      return false;
    }
    __name(isComment, "isComment");
    function isEntity(xmlData, i3) {
      if (xmlData[i3 + 1] === "!" && xmlData[i3 + 2] === "E" && xmlData[i3 + 3] === "N" && xmlData[i3 + 4] === "T" && xmlData[i3 + 5] === "I" && xmlData[i3 + 6] === "T" && xmlData[i3 + 7] === "Y") return true;
      return false;
    }
    __name(isEntity, "isEntity");
    function isElement(xmlData, i3) {
      if (xmlData[i3 + 1] === "!" && xmlData[i3 + 2] === "E" && xmlData[i3 + 3] === "L" && xmlData[i3 + 4] === "E" && xmlData[i3 + 5] === "M" && xmlData[i3 + 6] === "E" && xmlData[i3 + 7] === "N" && xmlData[i3 + 8] === "T") return true;
      return false;
    }
    __name(isElement, "isElement");
    function isAttlist(xmlData, i3) {
      if (xmlData[i3 + 1] === "!" && xmlData[i3 + 2] === "A" && xmlData[i3 + 3] === "T" && xmlData[i3 + 4] === "T" && xmlData[i3 + 5] === "L" && xmlData[i3 + 6] === "I" && xmlData[i3 + 7] === "S" && xmlData[i3 + 8] === "T") return true;
      return false;
    }
    __name(isAttlist, "isAttlist");
    function isNotation(xmlData, i3) {
      if (xmlData[i3 + 1] === "!" && xmlData[i3 + 2] === "N" && xmlData[i3 + 3] === "O" && xmlData[i3 + 4] === "T" && xmlData[i3 + 5] === "A" && xmlData[i3 + 6] === "T" && xmlData[i3 + 7] === "I" && xmlData[i3 + 8] === "O" && xmlData[i3 + 9] === "N") return true;
      return false;
    }
    __name(isNotation, "isNotation");
    function validateEntityName(name) {
      if (util.isName(name))
        return name;
      else
        throw new Error(`Invalid entity name ${name}`);
    }
    __name(validateEntityName, "validateEntityName");
    module2.exports = readDocType;
  }
});

// ../../node_modules/.pnpm/strnum@1.1.2/node_modules/strnum/strnum.js
var require_strnum = __commonJS({
  "../../node_modules/.pnpm/strnum@1.1.2/node_modules/strnum/strnum.js"(exports2, module2) {
    var hexRegex = /^[-+]?0x[a-fA-F0-9]+$/;
    var numRegex = /^([\-\+])?(0*)([0-9]*(\.[0-9]*)?)$/;
    var consider = {
      hex: true,
      // oct: false,
      leadingZeros: true,
      decimalPoint: ".",
      eNotation: true
      //skipLike: /regex/
    };
    function toNumber(str, options = {}) {
      options = Object.assign({}, consider, options);
      if (!str || typeof str !== "string") return str;
      let trimmedStr = str.trim();
      if (options.skipLike !== void 0 && options.skipLike.test(trimmedStr)) return str;
      else if (str === "0") return 0;
      else if (options.hex && hexRegex.test(trimmedStr)) {
        return parse_int(trimmedStr, 16);
      } else if (trimmedStr.search(/[eE]/) !== -1) {
        const notation = trimmedStr.match(/^([-\+])?(0*)([0-9]*(\.[0-9]*)?[eE][-\+]?[0-9]+)$/);
        if (notation) {
          if (options.leadingZeros) {
            trimmedStr = (notation[1] || "") + notation[3];
          } else {
            if (notation[2] === "0" && notation[3][0] === ".") {
            } else {
              return str;
            }
          }
          return options.eNotation ? Number(trimmedStr) : str;
        } else {
          return str;
        }
      } else {
        const match = numRegex.exec(trimmedStr);
        if (match) {
          const sign = match[1];
          const leadingZeros = match[2];
          let numTrimmedByZeros = trimZeros(match[3]);
          if (!options.leadingZeros && leadingZeros.length > 0 && sign && trimmedStr[2] !== ".") return str;
          else if (!options.leadingZeros && leadingZeros.length > 0 && !sign && trimmedStr[1] !== ".") return str;
          else if (options.leadingZeros && leadingZeros === str) return 0;
          else {
            const num = Number(trimmedStr);
            const numStr = "" + num;
            if (numStr.search(/[eE]/) !== -1) {
              if (options.eNotation) return num;
              else return str;
            } else if (trimmedStr.indexOf(".") !== -1) {
              if (numStr === "0" && numTrimmedByZeros === "") return num;
              else if (numStr === numTrimmedByZeros) return num;
              else if (sign && numStr === "-" + numTrimmedByZeros) return num;
              else return str;
            }
            if (leadingZeros) {
              return numTrimmedByZeros === numStr || sign + numTrimmedByZeros === numStr ? num : str;
            } else {
              return trimmedStr === numStr || trimmedStr === sign + numStr ? num : str;
            }
          }
        } else {
          return str;
        }
      }
    }
    __name(toNumber, "toNumber");
    function trimZeros(numStr) {
      if (numStr && numStr.indexOf(".") !== -1) {
        numStr = numStr.replace(/0+$/, "");
        if (numStr === ".") numStr = "0";
        else if (numStr[0] === ".") numStr = "0" + numStr;
        else if (numStr[numStr.length - 1] === ".") numStr = numStr.substr(0, numStr.length - 1);
        return numStr;
      }
      return numStr;
    }
    __name(trimZeros, "trimZeros");
    function parse_int(numStr, base) {
      if (parseInt) return parseInt(numStr, base);
      else if (Number.parseInt) return Number.parseInt(numStr, base);
      else if (window && window.parseInt) return window.parseInt(numStr, base);
      else throw new Error("parseInt, Number.parseInt, window.parseInt are not supported");
    }
    __name(parse_int, "parse_int");
    module2.exports = toNumber;
  }
});

// ../../node_modules/.pnpm/fast-xml-parser@4.4.1/node_modules/fast-xml-parser/src/xmlparser/OrderedObjParser.js
var require_OrderedObjParser = __commonJS({
  "../../node_modules/.pnpm/fast-xml-parser@4.4.1/node_modules/fast-xml-parser/src/xmlparser/OrderedObjParser.js"(exports2, module2) {
    "use strict";
    var util = require_util();
    var xmlNode = require_xmlNode();
    var readDocType = require_DocTypeReader();
    var toNumber = require_strnum();
    var OrderedObjParser = class {
      static {
        __name(this, "OrderedObjParser");
      }
      constructor(options) {
        this.options = options;
        this.currentNode = null;
        this.tagsNodeStack = [];
        this.docTypeEntities = {};
        this.lastEntities = {
          "apos": { regex: /&(apos|#39|#x27);/g, val: "'" },
          "gt": { regex: /&(gt|#62|#x3E);/g, val: ">" },
          "lt": { regex: /&(lt|#60|#x3C);/g, val: "<" },
          "quot": { regex: /&(quot|#34|#x22);/g, val: '"' }
        };
        this.ampEntity = { regex: /&(amp|#38|#x26);/g, val: "&" };
        this.htmlEntities = {
          "space": { regex: /&(nbsp|#160);/g, val: " " },
          // "lt" : { regex: /&(lt|#60);/g, val: "<" },
          // "gt" : { regex: /&(gt|#62);/g, val: ">" },
          // "amp" : { regex: /&(amp|#38);/g, val: "&" },
          // "quot" : { regex: /&(quot|#34);/g, val: "\"" },
          // "apos" : { regex: /&(apos|#39);/g, val: "'" },
          "cent": { regex: /&(cent|#162);/g, val: "\xA2" },
          "pound": { regex: /&(pound|#163);/g, val: "\xA3" },
          "yen": { regex: /&(yen|#165);/g, val: "\xA5" },
          "euro": { regex: /&(euro|#8364);/g, val: "\u20AC" },
          "copyright": { regex: /&(copy|#169);/g, val: "\xA9" },
          "reg": { regex: /&(reg|#174);/g, val: "\xAE" },
          "inr": { regex: /&(inr|#8377);/g, val: "\u20B9" },
          "num_dec": { regex: /&#([0-9]{1,7});/g, val: /* @__PURE__ */ __name((_2, str) => String.fromCharCode(Number.parseInt(str, 10)), "val") },
          "num_hex": { regex: /&#x([0-9a-fA-F]{1,6});/g, val: /* @__PURE__ */ __name((_2, str) => String.fromCharCode(Number.parseInt(str, 16)), "val") }
        };
        this.addExternalEntities = addExternalEntities;
        this.parseXml = parseXml;
        this.parseTextData = parseTextData;
        this.resolveNameSpace = resolveNameSpace;
        this.buildAttributesMap = buildAttributesMap;
        this.isItStopNode = isItStopNode;
        this.replaceEntitiesValue = replaceEntitiesValue;
        this.readStopNodeData = readStopNodeData;
        this.saveTextToParentTag = saveTextToParentTag;
        this.addChild = addChild;
      }
    };
    function addExternalEntities(externalEntities) {
      const entKeys = Object.keys(externalEntities);
      for (let i3 = 0; i3 < entKeys.length; i3++) {
        const ent = entKeys[i3];
        this.lastEntities[ent] = {
          regex: new RegExp("&" + ent + ";", "g"),
          val: externalEntities[ent]
        };
      }
    }
    __name(addExternalEntities, "addExternalEntities");
    function parseTextData(val2, tagName, jPath, dontTrim, hasAttributes, isLeafNode, escapeEntities) {
      if (val2 !== void 0) {
        if (this.options.trimValues && !dontTrim) {
          val2 = val2.trim();
        }
        if (val2.length > 0) {
          if (!escapeEntities) val2 = this.replaceEntitiesValue(val2);
          const newval = this.options.tagValueProcessor(tagName, val2, jPath, hasAttributes, isLeafNode);
          if (newval === null || newval === void 0) {
            return val2;
          } else if (typeof newval !== typeof val2 || newval !== val2) {
            return newval;
          } else if (this.options.trimValues) {
            return parseValue(val2, this.options.parseTagValue, this.options.numberParseOptions);
          } else {
            const trimmedVal = val2.trim();
            if (trimmedVal === val2) {
              return parseValue(val2, this.options.parseTagValue, this.options.numberParseOptions);
            } else {
              return val2;
            }
          }
        }
      }
    }
    __name(parseTextData, "parseTextData");
    function resolveNameSpace(tagname) {
      if (this.options.removeNSPrefix) {
        const tags = tagname.split(":");
        const prefix = tagname.charAt(0) === "/" ? "/" : "";
        if (tags[0] === "xmlns") {
          return "";
        }
        if (tags.length === 2) {
          tagname = prefix + tags[1];
        }
      }
      return tagname;
    }
    __name(resolveNameSpace, "resolveNameSpace");
    var attrsRegx = new RegExp(`([^\\s=]+)\\s*(=\\s*(['"])([\\s\\S]*?)\\3)?`, "gm");
    function buildAttributesMap(attrStr, jPath, tagName) {
      if (!this.options.ignoreAttributes && typeof attrStr === "string") {
        const matches = util.getAllMatches(attrStr, attrsRegx);
        const len = matches.length;
        const attrs = {};
        for (let i3 = 0; i3 < len; i3++) {
          const attrName = this.resolveNameSpace(matches[i3][1]);
          let oldVal = matches[i3][4];
          let aName = this.options.attributeNamePrefix + attrName;
          if (attrName.length) {
            if (this.options.transformAttributeName) {
              aName = this.options.transformAttributeName(aName);
            }
            if (aName === "__proto__") aName = "#__proto__";
            if (oldVal !== void 0) {
              if (this.options.trimValues) {
                oldVal = oldVal.trim();
              }
              oldVal = this.replaceEntitiesValue(oldVal);
              const newVal = this.options.attributeValueProcessor(attrName, oldVal, jPath);
              if (newVal === null || newVal === void 0) {
                attrs[aName] = oldVal;
              } else if (typeof newVal !== typeof oldVal || newVal !== oldVal) {
                attrs[aName] = newVal;
              } else {
                attrs[aName] = parseValue(
                  oldVal,
                  this.options.parseAttributeValue,
                  this.options.numberParseOptions
                );
              }
            } else if (this.options.allowBooleanAttributes) {
              attrs[aName] = true;
            }
          }
        }
        if (!Object.keys(attrs).length) {
          return;
        }
        if (this.options.attributesGroupName) {
          const attrCollection = {};
          attrCollection[this.options.attributesGroupName] = attrs;
          return attrCollection;
        }
        return attrs;
      }
    }
    __name(buildAttributesMap, "buildAttributesMap");
    var parseXml = /* @__PURE__ */ __name(function(xmlData) {
      xmlData = xmlData.replace(/\r\n?/g, "\n");
      const xmlObj = new xmlNode("!xml");
      let currentNode = xmlObj;
      let textData = "";
      let jPath = "";
      for (let i3 = 0; i3 < xmlData.length; i3++) {
        const ch = xmlData[i3];
        if (ch === "<") {
          if (xmlData[i3 + 1] === "/") {
            const closeIndex = findClosingIndex(xmlData, ">", i3, "Closing Tag is not closed.");
            let tagName = xmlData.substring(i3 + 2, closeIndex).trim();
            if (this.options.removeNSPrefix) {
              const colonIndex = tagName.indexOf(":");
              if (colonIndex !== -1) {
                tagName = tagName.substr(colonIndex + 1);
              }
            }
            if (this.options.transformTagName) {
              tagName = this.options.transformTagName(tagName);
            }
            if (currentNode) {
              textData = this.saveTextToParentTag(textData, currentNode, jPath);
            }
            const lastTagName = jPath.substring(jPath.lastIndexOf(".") + 1);
            if (tagName && this.options.unpairedTags.indexOf(tagName) !== -1) {
              throw new Error(`Unpaired tag can not be used as closing tag: </${tagName}>`);
            }
            let propIndex = 0;
            if (lastTagName && this.options.unpairedTags.indexOf(lastTagName) !== -1) {
              propIndex = jPath.lastIndexOf(".", jPath.lastIndexOf(".") - 1);
              this.tagsNodeStack.pop();
            } else {
              propIndex = jPath.lastIndexOf(".");
            }
            jPath = jPath.substring(0, propIndex);
            currentNode = this.tagsNodeStack.pop();
            textData = "";
            i3 = closeIndex;
          } else if (xmlData[i3 + 1] === "?") {
            let tagData = readTagExp(xmlData, i3, false, "?>");
            if (!tagData) throw new Error("Pi Tag is not closed.");
            textData = this.saveTextToParentTag(textData, currentNode, jPath);
            if (this.options.ignoreDeclaration && tagData.tagName === "?xml" || this.options.ignorePiTags) {
            } else {
              const childNode = new xmlNode(tagData.tagName);
              childNode.add(this.options.textNodeName, "");
              if (tagData.tagName !== tagData.tagExp && tagData.attrExpPresent) {
                childNode[":@"] = this.buildAttributesMap(tagData.tagExp, jPath, tagData.tagName);
              }
              this.addChild(currentNode, childNode, jPath);
            }
            i3 = tagData.closeIndex + 1;
          } else if (xmlData.substr(i3 + 1, 3) === "!--") {
            const endIndex = findClosingIndex(xmlData, "-->", i3 + 4, "Comment is not closed.");
            if (this.options.commentPropName) {
              const comment = xmlData.substring(i3 + 4, endIndex - 2);
              textData = this.saveTextToParentTag(textData, currentNode, jPath);
              currentNode.add(this.options.commentPropName, [{ [this.options.textNodeName]: comment }]);
            }
            i3 = endIndex;
          } else if (xmlData.substr(i3 + 1, 2) === "!D") {
            const result = readDocType(xmlData, i3);
            this.docTypeEntities = result.entities;
            i3 = result.i;
          } else if (xmlData.substr(i3 + 1, 2) === "![") {
            const closeIndex = findClosingIndex(xmlData, "]]>", i3, "CDATA is not closed.") - 2;
            const tagExp = xmlData.substring(i3 + 9, closeIndex);
            textData = this.saveTextToParentTag(textData, currentNode, jPath);
            let val2 = this.parseTextData(tagExp, currentNode.tagname, jPath, true, false, true, true);
            if (val2 == void 0) val2 = "";
            if (this.options.cdataPropName) {
              currentNode.add(this.options.cdataPropName, [{ [this.options.textNodeName]: tagExp }]);
            } else {
              currentNode.add(this.options.textNodeName, val2);
            }
            i3 = closeIndex + 2;
          } else {
            let result = readTagExp(xmlData, i3, this.options.removeNSPrefix);
            let tagName = result.tagName;
            const rawTagName = result.rawTagName;
            let tagExp = result.tagExp;
            let attrExpPresent = result.attrExpPresent;
            let closeIndex = result.closeIndex;
            if (this.options.transformTagName) {
              tagName = this.options.transformTagName(tagName);
            }
            if (currentNode && textData) {
              if (currentNode.tagname !== "!xml") {
                textData = this.saveTextToParentTag(textData, currentNode, jPath, false);
              }
            }
            const lastTag = currentNode;
            if (lastTag && this.options.unpairedTags.indexOf(lastTag.tagname) !== -1) {
              currentNode = this.tagsNodeStack.pop();
              jPath = jPath.substring(0, jPath.lastIndexOf("."));
            }
            if (tagName !== xmlObj.tagname) {
              jPath += jPath ? "." + tagName : tagName;
            }
            if (this.isItStopNode(this.options.stopNodes, jPath, tagName)) {
              let tagContent = "";
              if (tagExp.length > 0 && tagExp.lastIndexOf("/") === tagExp.length - 1) {
                if (tagName[tagName.length - 1] === "/") {
                  tagName = tagName.substr(0, tagName.length - 1);
                  jPath = jPath.substr(0, jPath.length - 1);
                  tagExp = tagName;
                } else {
                  tagExp = tagExp.substr(0, tagExp.length - 1);
                }
                i3 = result.closeIndex;
              } else if (this.options.unpairedTags.indexOf(tagName) !== -1) {
                i3 = result.closeIndex;
              } else {
                const result2 = this.readStopNodeData(xmlData, rawTagName, closeIndex + 1);
                if (!result2) throw new Error(`Unexpected end of ${rawTagName}`);
                i3 = result2.i;
                tagContent = result2.tagContent;
              }
              const childNode = new xmlNode(tagName);
              if (tagName !== tagExp && attrExpPresent) {
                childNode[":@"] = this.buildAttributesMap(tagExp, jPath, tagName);
              }
              if (tagContent) {
                tagContent = this.parseTextData(tagContent, tagName, jPath, true, attrExpPresent, true, true);
              }
              jPath = jPath.substr(0, jPath.lastIndexOf("."));
              childNode.add(this.options.textNodeName, tagContent);
              this.addChild(currentNode, childNode, jPath);
            } else {
              if (tagExp.length > 0 && tagExp.lastIndexOf("/") === tagExp.length - 1) {
                if (tagName[tagName.length - 1] === "/") {
                  tagName = tagName.substr(0, tagName.length - 1);
                  jPath = jPath.substr(0, jPath.length - 1);
                  tagExp = tagName;
                } else {
                  tagExp = tagExp.substr(0, tagExp.length - 1);
                }
                if (this.options.transformTagName) {
                  tagName = this.options.transformTagName(tagName);
                }
                const childNode = new xmlNode(tagName);
                if (tagName !== tagExp && attrExpPresent) {
                  childNode[":@"] = this.buildAttributesMap(tagExp, jPath, tagName);
                }
                this.addChild(currentNode, childNode, jPath);
                jPath = jPath.substr(0, jPath.lastIndexOf("."));
              } else {
                const childNode = new xmlNode(tagName);
                this.tagsNodeStack.push(currentNode);
                if (tagName !== tagExp && attrExpPresent) {
                  childNode[":@"] = this.buildAttributesMap(tagExp, jPath, tagName);
                }
                this.addChild(currentNode, childNode, jPath);
                currentNode = childNode;
              }
              textData = "";
              i3 = closeIndex;
            }
          }
        } else {
          textData += xmlData[i3];
        }
      }
      return xmlObj.child;
    }, "parseXml");
    function addChild(currentNode, childNode, jPath) {
      const result = this.options.updateTag(childNode.tagname, jPath, childNode[":@"]);
      if (result === false) {
      } else if (typeof result === "string") {
        childNode.tagname = result;
        currentNode.addChild(childNode);
      } else {
        currentNode.addChild(childNode);
      }
    }
    __name(addChild, "addChild");
    var replaceEntitiesValue = /* @__PURE__ */ __name(function(val2) {
      if (this.options.processEntities) {
        for (let entityName2 in this.docTypeEntities) {
          const entity = this.docTypeEntities[entityName2];
          val2 = val2.replace(entity.regx, entity.val);
        }
        for (let entityName2 in this.lastEntities) {
          const entity = this.lastEntities[entityName2];
          val2 = val2.replace(entity.regex, entity.val);
        }
        if (this.options.htmlEntities) {
          for (let entityName2 in this.htmlEntities) {
            const entity = this.htmlEntities[entityName2];
            val2 = val2.replace(entity.regex, entity.val);
          }
        }
        val2 = val2.replace(this.ampEntity.regex, this.ampEntity.val);
      }
      return val2;
    }, "replaceEntitiesValue");
    function saveTextToParentTag(textData, currentNode, jPath, isLeafNode) {
      if (textData) {
        if (isLeafNode === void 0) isLeafNode = Object.keys(currentNode.child).length === 0;
        textData = this.parseTextData(
          textData,
          currentNode.tagname,
          jPath,
          false,
          currentNode[":@"] ? Object.keys(currentNode[":@"]).length !== 0 : false,
          isLeafNode
        );
        if (textData !== void 0 && textData !== "")
          currentNode.add(this.options.textNodeName, textData);
        textData = "";
      }
      return textData;
    }
    __name(saveTextToParentTag, "saveTextToParentTag");
    function isItStopNode(stopNodes, jPath, currentTagName) {
      const allNodesExp = "*." + currentTagName;
      for (const stopNodePath in stopNodes) {
        const stopNodeExp = stopNodes[stopNodePath];
        if (allNodesExp === stopNodeExp || jPath === stopNodeExp) return true;
      }
      return false;
    }
    __name(isItStopNode, "isItStopNode");
    function tagExpWithClosingIndex(xmlData, i3, closingChar = ">") {
      let attrBoundary;
      let tagExp = "";
      for (let index = i3; index < xmlData.length; index++) {
        let ch = xmlData[index];
        if (attrBoundary) {
          if (ch === attrBoundary) attrBoundary = "";
        } else if (ch === '"' || ch === "'") {
          attrBoundary = ch;
        } else if (ch === closingChar[0]) {
          if (closingChar[1]) {
            if (xmlData[index + 1] === closingChar[1]) {
              return {
                data: tagExp,
                index
              };
            }
          } else {
            return {
              data: tagExp,
              index
            };
          }
        } else if (ch === "	") {
          ch = " ";
        }
        tagExp += ch;
      }
    }
    __name(tagExpWithClosingIndex, "tagExpWithClosingIndex");
    function findClosingIndex(xmlData, str, i3, errMsg) {
      const closingIndex = xmlData.indexOf(str, i3);
      if (closingIndex === -1) {
        throw new Error(errMsg);
      } else {
        return closingIndex + str.length - 1;
      }
    }
    __name(findClosingIndex, "findClosingIndex");
    function readTagExp(xmlData, i3, removeNSPrefix, closingChar = ">") {
      const result = tagExpWithClosingIndex(xmlData, i3 + 1, closingChar);
      if (!result) return;
      let tagExp = result.data;
      const closeIndex = result.index;
      const separatorIndex = tagExp.search(/\s/);
      let tagName = tagExp;
      let attrExpPresent = true;
      if (separatorIndex !== -1) {
        tagName = tagExp.substring(0, separatorIndex);
        tagExp = tagExp.substring(separatorIndex + 1).trimStart();
      }
      const rawTagName = tagName;
      if (removeNSPrefix) {
        const colonIndex = tagName.indexOf(":");
        if (colonIndex !== -1) {
          tagName = tagName.substr(colonIndex + 1);
          attrExpPresent = tagName !== result.data.substr(colonIndex + 1);
        }
      }
      return {
        tagName,
        tagExp,
        closeIndex,
        attrExpPresent,
        rawTagName
      };
    }
    __name(readTagExp, "readTagExp");
    function readStopNodeData(xmlData, tagName, i3) {
      const startIndex = i3;
      let openTagCount = 1;
      for (; i3 < xmlData.length; i3++) {
        if (xmlData[i3] === "<") {
          if (xmlData[i3 + 1] === "/") {
            const closeIndex = findClosingIndex(xmlData, ">", i3, `${tagName} is not closed`);
            let closeTagName = xmlData.substring(i3 + 2, closeIndex).trim();
            if (closeTagName === tagName) {
              openTagCount--;
              if (openTagCount === 0) {
                return {
                  tagContent: xmlData.substring(startIndex, i3),
                  i: closeIndex
                };
              }
            }
            i3 = closeIndex;
          } else if (xmlData[i3 + 1] === "?") {
            const closeIndex = findClosingIndex(xmlData, "?>", i3 + 1, "StopNode is not closed.");
            i3 = closeIndex;
          } else if (xmlData.substr(i3 + 1, 3) === "!--") {
            const closeIndex = findClosingIndex(xmlData, "-->", i3 + 3, "StopNode is not closed.");
            i3 = closeIndex;
          } else if (xmlData.substr(i3 + 1, 2) === "![") {
            const closeIndex = findClosingIndex(xmlData, "]]>", i3, "StopNode is not closed.") - 2;
            i3 = closeIndex;
          } else {
            const tagData = readTagExp(xmlData, i3, ">");
            if (tagData) {
              const openTagName = tagData && tagData.tagName;
              if (openTagName === tagName && tagData.tagExp[tagData.tagExp.length - 1] !== "/") {
                openTagCount++;
              }
              i3 = tagData.closeIndex;
            }
          }
        }
      }
    }
    __name(readStopNodeData, "readStopNodeData");
    function parseValue(val2, shouldParse, options) {
      if (shouldParse && typeof val2 === "string") {
        const newval = val2.trim();
        if (newval === "true") return true;
        else if (newval === "false") return false;
        else return toNumber(val2, options);
      } else {
        if (util.isExist(val2)) {
          return val2;
        } else {
          return "";
        }
      }
    }
    __name(parseValue, "parseValue");
    module2.exports = OrderedObjParser;
  }
});

// ../../node_modules/.pnpm/fast-xml-parser@4.4.1/node_modules/fast-xml-parser/src/xmlparser/node2json.js
var require_node2json = __commonJS({
  "../../node_modules/.pnpm/fast-xml-parser@4.4.1/node_modules/fast-xml-parser/src/xmlparser/node2json.js"(exports2) {
    "use strict";
    function prettify(node, options) {
      return compress(node, options);
    }
    __name(prettify, "prettify");
    function compress(arr, options, jPath) {
      let text;
      const compressedObj = {};
      for (let i3 = 0; i3 < arr.length; i3++) {
        const tagObj = arr[i3];
        const property = propName(tagObj);
        let newJpath = "";
        if (jPath === void 0) newJpath = property;
        else newJpath = jPath + "." + property;
        if (property === options.textNodeName) {
          if (text === void 0) text = tagObj[property];
          else text += "" + tagObj[property];
        } else if (property === void 0) {
          continue;
        } else if (tagObj[property]) {
          let val2 = compress(tagObj[property], options, newJpath);
          const isLeaf = isLeafTag(val2, options);
          if (tagObj[":@"]) {
            assignAttributes(val2, tagObj[":@"], newJpath, options);
          } else if (Object.keys(val2).length === 1 && val2[options.textNodeName] !== void 0 && !options.alwaysCreateTextNode) {
            val2 = val2[options.textNodeName];
          } else if (Object.keys(val2).length === 0) {
            if (options.alwaysCreateTextNode) val2[options.textNodeName] = "";
            else val2 = "";
          }
          if (compressedObj[property] !== void 0 && compressedObj.hasOwnProperty(property)) {
            if (!Array.isArray(compressedObj[property])) {
              compressedObj[property] = [compressedObj[property]];
            }
            compressedObj[property].push(val2);
          } else {
            if (options.isArray(property, newJpath, isLeaf)) {
              compressedObj[property] = [val2];
            } else {
              compressedObj[property] = val2;
            }
          }
        }
      }
      if (typeof text === "string") {
        if (text.length > 0) compressedObj[options.textNodeName] = text;
      } else if (text !== void 0) compressedObj[options.textNodeName] = text;
      return compressedObj;
    }
    __name(compress, "compress");
    function propName(obj) {
      const keys = Object.keys(obj);
      for (let i3 = 0; i3 < keys.length; i3++) {
        const key = keys[i3];
        if (key !== ":@") return key;
      }
    }
    __name(propName, "propName");
    function assignAttributes(obj, attrMap, jpath, options) {
      if (attrMap) {
        const keys = Object.keys(attrMap);
        const len = keys.length;
        for (let i3 = 0; i3 < len; i3++) {
          const atrrName = keys[i3];
          if (options.isArray(atrrName, jpath + "." + atrrName, true, true)) {
            obj[atrrName] = [attrMap[atrrName]];
          } else {
            obj[atrrName] = attrMap[atrrName];
          }
        }
      }
    }
    __name(assignAttributes, "assignAttributes");
    function isLeafTag(obj, options) {
      const { textNodeName } = options;
      const propCount = Object.keys(obj).length;
      if (propCount === 0) {
        return true;
      }
      if (propCount === 1 && (obj[textNodeName] || typeof obj[textNodeName] === "boolean" || obj[textNodeName] === 0)) {
        return true;
      }
      return false;
    }
    __name(isLeafTag, "isLeafTag");
    exports2.prettify = prettify;
  }
});

// ../../node_modules/.pnpm/fast-xml-parser@4.4.1/node_modules/fast-xml-parser/src/xmlparser/XMLParser.js
var require_XMLParser = __commonJS({
  "../../node_modules/.pnpm/fast-xml-parser@4.4.1/node_modules/fast-xml-parser/src/xmlparser/XMLParser.js"(exports2, module2) {
    var { buildOptions } = require_OptionsBuilder();
    var OrderedObjParser = require_OrderedObjParser();
    var { prettify } = require_node2json();
    var validator = require_validator();
    var XMLParser2 = class {
      static {
        __name(this, "XMLParser");
      }
      constructor(options) {
        this.externalEntities = {};
        this.options = buildOptions(options);
      }
      /**
       * Parse XML dats to JS object 
       * @param {string|Buffer} xmlData 
       * @param {boolean|Object} validationOption 
       */
      parse(xmlData, validationOption) {
        if (typeof xmlData === "string") {
        } else if (xmlData.toString) {
          xmlData = xmlData.toString();
        } else {
          throw new Error("XML data is accepted in String or Bytes[] form.");
        }
        if (validationOption) {
          if (validationOption === true) validationOption = {};
          const result = validator.validate(xmlData, validationOption);
          if (result !== true) {
            throw Error(`${result.err.msg}:${result.err.line}:${result.err.col}`);
          }
        }
        const orderedObjParser = new OrderedObjParser(this.options);
        orderedObjParser.addExternalEntities(this.externalEntities);
        const orderedResult = orderedObjParser.parseXml(xmlData);
        if (this.options.preserveOrder || orderedResult === void 0) return orderedResult;
        else return prettify(orderedResult, this.options);
      }
      /**
       * Add Entity which is not by default supported by this library
       * @param {string} key 
       * @param {string} value 
       */
      addEntity(key, value) {
        if (value.indexOf("&") !== -1) {
          throw new Error("Entity value can't have '&'");
        } else if (key.indexOf("&") !== -1 || key.indexOf(";") !== -1) {
          throw new Error("An entity must be set without '&' and ';'. Eg. use '#xD' for '&#xD;'");
        } else if (value === "&") {
          throw new Error("An entity with value '&' is not permitted");
        } else {
          this.externalEntities[key] = value;
        }
      }
    };
    module2.exports = XMLParser2;
  }
});

// ../../node_modules/.pnpm/fast-xml-parser@4.4.1/node_modules/fast-xml-parser/src/xmlbuilder/orderedJs2Xml.js
var require_orderedJs2Xml = __commonJS({
  "../../node_modules/.pnpm/fast-xml-parser@4.4.1/node_modules/fast-xml-parser/src/xmlbuilder/orderedJs2Xml.js"(exports2, module2) {
    var EOL = "\n";
    function toXml(jArray, options) {
      let indentation = "";
      if (options.format && options.indentBy.length > 0) {
        indentation = EOL;
      }
      return arrToStr(jArray, options, "", indentation);
    }
    __name(toXml, "toXml");
    function arrToStr(arr, options, jPath, indentation) {
      let xmlStr = "";
      let isPreviousElementTag = false;
      for (let i3 = 0; i3 < arr.length; i3++) {
        const tagObj = arr[i3];
        const tagName = propName(tagObj);
        if (tagName === void 0) continue;
        let newJPath = "";
        if (jPath.length === 0) newJPath = tagName;
        else newJPath = `${jPath}.${tagName}`;
        if (tagName === options.textNodeName) {
          let tagText = tagObj[tagName];
          if (!isStopNode(newJPath, options)) {
            tagText = options.tagValueProcessor(tagName, tagText);
            tagText = replaceEntitiesValue(tagText, options);
          }
          if (isPreviousElementTag) {
            xmlStr += indentation;
          }
          xmlStr += tagText;
          isPreviousElementTag = false;
          continue;
        } else if (tagName === options.cdataPropName) {
          if (isPreviousElementTag) {
            xmlStr += indentation;
          }
          xmlStr += `<![CDATA[${tagObj[tagName][0][options.textNodeName]}]]>`;
          isPreviousElementTag = false;
          continue;
        } else if (tagName === options.commentPropName) {
          xmlStr += indentation + `<!--${tagObj[tagName][0][options.textNodeName]}-->`;
          isPreviousElementTag = true;
          continue;
        } else if (tagName[0] === "?") {
          const attStr2 = attr_to_str(tagObj[":@"], options);
          const tempInd = tagName === "?xml" ? "" : indentation;
          let piTextNodeName = tagObj[tagName][0][options.textNodeName];
          piTextNodeName = piTextNodeName.length !== 0 ? " " + piTextNodeName : "";
          xmlStr += tempInd + `<${tagName}${piTextNodeName}${attStr2}?>`;
          isPreviousElementTag = true;
          continue;
        }
        let newIdentation = indentation;
        if (newIdentation !== "") {
          newIdentation += options.indentBy;
        }
        const attStr = attr_to_str(tagObj[":@"], options);
        const tagStart = indentation + `<${tagName}${attStr}`;
        const tagValue = arrToStr(tagObj[tagName], options, newJPath, newIdentation);
        if (options.unpairedTags.indexOf(tagName) !== -1) {
          if (options.suppressUnpairedNode) xmlStr += tagStart + ">";
          else xmlStr += tagStart + "/>";
        } else if ((!tagValue || tagValue.length === 0) && options.suppressEmptyNode) {
          xmlStr += tagStart + "/>";
        } else if (tagValue && tagValue.endsWith(">")) {
          xmlStr += tagStart + `>${tagValue}${indentation}</${tagName}>`;
        } else {
          xmlStr += tagStart + ">";
          if (tagValue && indentation !== "" && (tagValue.includes("/>") || tagValue.includes("</"))) {
            xmlStr += indentation + options.indentBy + tagValue + indentation;
          } else {
            xmlStr += tagValue;
          }
          xmlStr += `</${tagName}>`;
        }
        isPreviousElementTag = true;
      }
      return xmlStr;
    }
    __name(arrToStr, "arrToStr");
    function propName(obj) {
      const keys = Object.keys(obj);
      for (let i3 = 0; i3 < keys.length; i3++) {
        const key = keys[i3];
        if (!obj.hasOwnProperty(key)) continue;
        if (key !== ":@") return key;
      }
    }
    __name(propName, "propName");
    function attr_to_str(attrMap, options) {
      let attrStr = "";
      if (attrMap && !options.ignoreAttributes) {
        for (let attr in attrMap) {
          if (!attrMap.hasOwnProperty(attr)) continue;
          let attrVal = options.attributeValueProcessor(attr, attrMap[attr]);
          attrVal = replaceEntitiesValue(attrVal, options);
          if (attrVal === true && options.suppressBooleanAttributes) {
            attrStr += ` ${attr.substr(options.attributeNamePrefix.length)}`;
          } else {
            attrStr += ` ${attr.substr(options.attributeNamePrefix.length)}="${attrVal}"`;
          }
        }
      }
      return attrStr;
    }
    __name(attr_to_str, "attr_to_str");
    function isStopNode(jPath, options) {
      jPath = jPath.substr(0, jPath.length - options.textNodeName.length - 1);
      let tagName = jPath.substr(jPath.lastIndexOf(".") + 1);
      for (let index in options.stopNodes) {
        if (options.stopNodes[index] === jPath || options.stopNodes[index] === "*." + tagName) return true;
      }
      return false;
    }
    __name(isStopNode, "isStopNode");
    function replaceEntitiesValue(textValue, options) {
      if (textValue && textValue.length > 0 && options.processEntities) {
        for (let i3 = 0; i3 < options.entities.length; i3++) {
          const entity = options.entities[i3];
          textValue = textValue.replace(entity.regex, entity.val);
        }
      }
      return textValue;
    }
    __name(replaceEntitiesValue, "replaceEntitiesValue");
    module2.exports = toXml;
  }
});

// ../../node_modules/.pnpm/fast-xml-parser@4.4.1/node_modules/fast-xml-parser/src/xmlbuilder/json2xml.js
var require_json2xml = __commonJS({
  "../../node_modules/.pnpm/fast-xml-parser@4.4.1/node_modules/fast-xml-parser/src/xmlbuilder/json2xml.js"(exports2, module2) {
    "use strict";
    var buildFromOrderedJs = require_orderedJs2Xml();
    var defaultOptions = {
      attributeNamePrefix: "@_",
      attributesGroupName: false,
      textNodeName: "#text",
      ignoreAttributes: true,
      cdataPropName: false,
      format: false,
      indentBy: "  ",
      suppressEmptyNode: false,
      suppressUnpairedNode: true,
      suppressBooleanAttributes: true,
      tagValueProcessor: /* @__PURE__ */ __name(function(key, a3) {
        return a3;
      }, "tagValueProcessor"),
      attributeValueProcessor: /* @__PURE__ */ __name(function(attrName, a3) {
        return a3;
      }, "attributeValueProcessor"),
      preserveOrder: false,
      commentPropName: false,
      unpairedTags: [],
      entities: [
        { regex: new RegExp("&", "g"), val: "&amp;" },
        //it must be on top
        { regex: new RegExp(">", "g"), val: "&gt;" },
        { regex: new RegExp("<", "g"), val: "&lt;" },
        { regex: new RegExp("'", "g"), val: "&apos;" },
        { regex: new RegExp('"', "g"), val: "&quot;" }
      ],
      processEntities: true,
      stopNodes: [],
      // transformTagName: false,
      // transformAttributeName: false,
      oneListGroup: false
    };
    function Builder(options) {
      this.options = Object.assign({}, defaultOptions, options);
      if (this.options.ignoreAttributes || this.options.attributesGroupName) {
        this.isAttribute = function() {
          return false;
        };
      } else {
        this.attrPrefixLen = this.options.attributeNamePrefix.length;
        this.isAttribute = isAttribute;
      }
      this.processTextOrObjNode = processTextOrObjNode;
      if (this.options.format) {
        this.indentate = indentate;
        this.tagEndChar = ">\n";
        this.newLine = "\n";
      } else {
        this.indentate = function() {
          return "";
        };
        this.tagEndChar = ">";
        this.newLine = "";
      }
    }
    __name(Builder, "Builder");
    Builder.prototype.build = function(jObj) {
      if (this.options.preserveOrder) {
        return buildFromOrderedJs(jObj, this.options);
      } else {
        if (Array.isArray(jObj) && this.options.arrayNodeName && this.options.arrayNodeName.length > 1) {
          jObj = {
            [this.options.arrayNodeName]: jObj
          };
        }
        return this.j2x(jObj, 0).val;
      }
    };
    Builder.prototype.j2x = function(jObj, level) {
      let attrStr = "";
      let val2 = "";
      for (let key in jObj) {
        if (!Object.prototype.hasOwnProperty.call(jObj, key)) continue;
        if (typeof jObj[key] === "undefined") {
          if (this.isAttribute(key)) {
            val2 += "";
          }
        } else if (jObj[key] === null) {
          if (this.isAttribute(key)) {
            val2 += "";
          } else if (key[0] === "?") {
            val2 += this.indentate(level) + "<" + key + "?" + this.tagEndChar;
          } else {
            val2 += this.indentate(level) + "<" + key + "/" + this.tagEndChar;
          }
        } else if (jObj[key] instanceof Date) {
          val2 += this.buildTextValNode(jObj[key], key, "", level);
        } else if (typeof jObj[key] !== "object") {
          const attr = this.isAttribute(key);
          if (attr) {
            attrStr += this.buildAttrPairStr(attr, "" + jObj[key]);
          } else {
            if (key === this.options.textNodeName) {
              let newval = this.options.tagValueProcessor(key, "" + jObj[key]);
              val2 += this.replaceEntitiesValue(newval);
            } else {
              val2 += this.buildTextValNode(jObj[key], key, "", level);
            }
          }
        } else if (Array.isArray(jObj[key])) {
          const arrLen = jObj[key].length;
          let listTagVal = "";
          let listTagAttr = "";
          for (let j3 = 0; j3 < arrLen; j3++) {
            const item = jObj[key][j3];
            if (typeof item === "undefined") {
            } else if (item === null) {
              if (key[0] === "?") val2 += this.indentate(level) + "<" + key + "?" + this.tagEndChar;
              else val2 += this.indentate(level) + "<" + key + "/" + this.tagEndChar;
            } else if (typeof item === "object") {
              if (this.options.oneListGroup) {
                const result = this.j2x(item, level + 1);
                listTagVal += result.val;
                if (this.options.attributesGroupName && item.hasOwnProperty(this.options.attributesGroupName)) {
                  listTagAttr += result.attrStr;
                }
              } else {
                listTagVal += this.processTextOrObjNode(item, key, level);
              }
            } else {
              if (this.options.oneListGroup) {
                let textValue = this.options.tagValueProcessor(key, item);
                textValue = this.replaceEntitiesValue(textValue);
                listTagVal += textValue;
              } else {
                listTagVal += this.buildTextValNode(item, key, "", level);
              }
            }
          }
          if (this.options.oneListGroup) {
            listTagVal = this.buildObjectNode(listTagVal, key, listTagAttr, level);
          }
          val2 += listTagVal;
        } else {
          if (this.options.attributesGroupName && key === this.options.attributesGroupName) {
            const Ks = Object.keys(jObj[key]);
            const L = Ks.length;
            for (let j3 = 0; j3 < L; j3++) {
              attrStr += this.buildAttrPairStr(Ks[j3], "" + jObj[key][Ks[j3]]);
            }
          } else {
            val2 += this.processTextOrObjNode(jObj[key], key, level);
          }
        }
      }
      return { attrStr, val: val2 };
    };
    Builder.prototype.buildAttrPairStr = function(attrName, val2) {
      val2 = this.options.attributeValueProcessor(attrName, "" + val2);
      val2 = this.replaceEntitiesValue(val2);
      if (this.options.suppressBooleanAttributes && val2 === "true") {
        return " " + attrName;
      } else return " " + attrName + '="' + val2 + '"';
    };
    function processTextOrObjNode(object, key, level) {
      const result = this.j2x(object, level + 1);
      if (object[this.options.textNodeName] !== void 0 && Object.keys(object).length === 1) {
        return this.buildTextValNode(object[this.options.textNodeName], key, result.attrStr, level);
      } else {
        return this.buildObjectNode(result.val, key, result.attrStr, level);
      }
    }
    __name(processTextOrObjNode, "processTextOrObjNode");
    Builder.prototype.buildObjectNode = function(val2, key, attrStr, level) {
      if (val2 === "") {
        if (key[0] === "?") return this.indentate(level) + "<" + key + attrStr + "?" + this.tagEndChar;
        else {
          return this.indentate(level) + "<" + key + attrStr + this.closeTag(key) + this.tagEndChar;
        }
      } else {
        let tagEndExp = "</" + key + this.tagEndChar;
        let piClosingChar = "";
        if (key[0] === "?") {
          piClosingChar = "?";
          tagEndExp = "";
        }
        if ((attrStr || attrStr === "") && val2.indexOf("<") === -1) {
          return this.indentate(level) + "<" + key + attrStr + piClosingChar + ">" + val2 + tagEndExp;
        } else if (this.options.commentPropName !== false && key === this.options.commentPropName && piClosingChar.length === 0) {
          return this.indentate(level) + `<!--${val2}-->` + this.newLine;
        } else {
          return this.indentate(level) + "<" + key + attrStr + piClosingChar + this.tagEndChar + val2 + this.indentate(level) + tagEndExp;
        }
      }
    };
    Builder.prototype.closeTag = function(key) {
      let closeTag = "";
      if (this.options.unpairedTags.indexOf(key) !== -1) {
        if (!this.options.suppressUnpairedNode) closeTag = "/";
      } else if (this.options.suppressEmptyNode) {
        closeTag = "/";
      } else {
        closeTag = `></${key}`;
      }
      return closeTag;
    };
    function buildEmptyObjNode(val2, key, attrStr, level) {
      if (val2 !== "") {
        return this.buildObjectNode(val2, key, attrStr, level);
      } else {
        if (key[0] === "?") return this.indentate(level) + "<" + key + attrStr + "?" + this.tagEndChar;
        else {
          return this.indentate(level) + "<" + key + attrStr + "/" + this.tagEndChar;
        }
      }
    }
    __name(buildEmptyObjNode, "buildEmptyObjNode");
    Builder.prototype.buildTextValNode = function(val2, key, attrStr, level) {
      if (this.options.cdataPropName !== false && key === this.options.cdataPropName) {
        return this.indentate(level) + `<![CDATA[${val2}]]>` + this.newLine;
      } else if (this.options.commentPropName !== false && key === this.options.commentPropName) {
        return this.indentate(level) + `<!--${val2}-->` + this.newLine;
      } else if (key[0] === "?") {
        return this.indentate(level) + "<" + key + attrStr + "?" + this.tagEndChar;
      } else {
        let textValue = this.options.tagValueProcessor(key, val2);
        textValue = this.replaceEntitiesValue(textValue);
        if (textValue === "") {
          return this.indentate(level) + "<" + key + attrStr + this.closeTag(key) + this.tagEndChar;
        } else {
          return this.indentate(level) + "<" + key + attrStr + ">" + textValue + "</" + key + this.tagEndChar;
        }
      }
    };
    Builder.prototype.replaceEntitiesValue = function(textValue) {
      if (textValue && textValue.length > 0 && this.options.processEntities) {
        for (let i3 = 0; i3 < this.options.entities.length; i3++) {
          const entity = this.options.entities[i3];
          textValue = textValue.replace(entity.regex, entity.val);
        }
      }
      return textValue;
    };
    function indentate(level) {
      return this.options.indentBy.repeat(level);
    }
    __name(indentate, "indentate");
    function isAttribute(name) {
      if (name.startsWith(this.options.attributeNamePrefix) && name !== this.options.textNodeName) {
        return name.substr(this.attrPrefixLen);
      } else {
        return false;
      }
    }
    __name(isAttribute, "isAttribute");
    module2.exports = Builder;
  }
});

// ../../node_modules/.pnpm/fast-xml-parser@4.4.1/node_modules/fast-xml-parser/src/fxp.js
var require_fxp = __commonJS({
  "../../node_modules/.pnpm/fast-xml-parser@4.4.1/node_modules/fast-xml-parser/src/fxp.js"(exports2, module2) {
    "use strict";
    var validator = require_validator();
    var XMLParser2 = require_XMLParser();
    var XMLBuilder = require_json2xml();
    module2.exports = {
      XMLParser: XMLParser2,
      XMLValidator: validator,
      XMLBuilder
    };
  }
});

// ../../node_modules/.pnpm/@aws-sdk+core@3.821.0/node_modules/@aws-sdk/core/dist-es/submodules/protocols/xml/parseXmlBody.js
var import_smithy_client3, import_fast_xml_parser, parseXmlBody, parseXmlErrorBody, loadRestXmlErrorCode;
var init_parseXmlBody = __esm({
  "../../node_modules/.pnpm/@aws-sdk+core@3.821.0/node_modules/@aws-sdk/core/dist-es/submodules/protocols/xml/parseXmlBody.js"() {
    import_smithy_client3 = __toESM(require_dist_cjs18());
    import_fast_xml_parser = __toESM(require_fxp());
    init_common();
    parseXmlBody = /* @__PURE__ */ __name((streamBody, context) => collectBodyString(streamBody, context).then((encoded) => {
      if (encoded.length) {
        const parser = new import_fast_xml_parser.XMLParser({
          attributeNamePrefix: "",
          htmlEntities: true,
          ignoreAttributes: false,
          ignoreDeclaration: true,
          parseTagValue: false,
          trimValues: false,
          tagValueProcessor: /* @__PURE__ */ __name((_2, val2) => val2.trim() === "" && val2.includes("\n") ? "" : void 0, "tagValueProcessor")
        });
        parser.addEntity("#xD", "\r");
        parser.addEntity("#10", "\n");
        let parsedObj;
        try {
          parsedObj = parser.parse(encoded, true);
        } catch (e3) {
          if (e3 && typeof e3 === "object") {
            Object.defineProperty(e3, "$responseBodyText", {
              value: encoded
            });
          }
          throw e3;
        }
        const textNodeName = "#text";
        const key = Object.keys(parsedObj)[0];
        const parsedObjToReturn = parsedObj[key];
        if (parsedObjToReturn[textNodeName]) {
          parsedObjToReturn[key] = parsedObjToReturn[textNodeName];
          delete parsedObjToReturn[textNodeName];
        }
        return (0, import_smithy_client3.getValueFromTextNode)(parsedObjToReturn);
      }
      return {};
    }), "parseXmlBody");
    parseXmlErrorBody = /* @__PURE__ */ __name(async (errorBody, context) => {
      const value = await parseXmlBody(errorBody, context);
      if (value.Error) {
        value.Error.message = value.Error.message ?? value.Error.Message;
      }
      return value;
    }, "parseXmlErrorBody");
    loadRestXmlErrorCode = /* @__PURE__ */ __name((output, data) => {
      if (data?.Error?.Code !== void 0) {
        return data.Error.Code;
      }
      if (data?.Code !== void 0) {
        return data.Code;
      }
      if (output.statusCode == 404) {
        return "NotFound";
      }
    }, "loadRestXmlErrorCode");
  }
});

// ../../node_modules/.pnpm/@aws-sdk+core@3.821.0/node_modules/@aws-sdk/core/dist-es/submodules/protocols/index.js
var init_protocols2 = __esm({
  "../../node_modules/.pnpm/@aws-sdk+core@3.821.0/node_modules/@aws-sdk/core/dist-es/submodules/protocols/index.js"() {
    init_coercing_serializers();
    init_awsExpectUnion();
    init_parseJsonBody();
    init_parseXmlBody();
  }
});

// ../../node_modules/.pnpm/@aws-sdk+core@3.821.0/node_modules/@aws-sdk/core/dist-es/index.js
var dist_es_exports2 = {};
__export(dist_es_exports2, {
  AWSSDKSigV4Signer: () => AWSSDKSigV4Signer,
  AwsSdkSigV4ASigner: () => AwsSdkSigV4ASigner,
  AwsSdkSigV4Signer: () => AwsSdkSigV4Signer,
  NODE_AUTH_SCHEME_PREFERENCE_OPTIONS: () => NODE_AUTH_SCHEME_PREFERENCE_OPTIONS,
  NODE_SIGV4A_CONFIG_OPTIONS: () => NODE_SIGV4A_CONFIG_OPTIONS,
  _toBool: () => _toBool,
  _toNum: () => _toNum,
  _toStr: () => _toStr,
  awsExpectUnion: () => awsExpectUnion,
  emitWarningIfUnsupportedVersion: () => emitWarningIfUnsupportedVersion,
  getBearerTokenEnvKey: () => getBearerTokenEnvKey,
  loadRestJsonErrorCode: () => loadRestJsonErrorCode,
  loadRestXmlErrorCode: () => loadRestXmlErrorCode,
  parseJsonBody: () => parseJsonBody,
  parseJsonErrorBody: () => parseJsonErrorBody,
  parseXmlBody: () => parseXmlBody,
  parseXmlErrorBody: () => parseXmlErrorBody,
  resolveAWSSDKSigV4Config: () => resolveAWSSDKSigV4Config,
  resolveAwsSdkSigV4AConfig: () => resolveAwsSdkSigV4AConfig,
  resolveAwsSdkSigV4Config: () => resolveAwsSdkSigV4Config,
  setCredentialFeature: () => setCredentialFeature,
  setFeature: () => setFeature2,
  state: () => state,
  validateSigningProperties: () => validateSigningProperties
});
var init_dist_es2 = __esm({
  "../../node_modules/.pnpm/@aws-sdk+core@3.821.0/node_modules/@aws-sdk/core/dist-es/index.js"() {
    init_client();
    init_httpAuthSchemes2();
    init_protocols2();
  }
});

// ../../node_modules/.pnpm/@aws-sdk+middleware-user-agent@3.821.0/node_modules/@aws-sdk/middleware-user-agent/dist-cjs/index.js
var require_dist_cjs25 = __commonJS({
  "../../node_modules/.pnpm/@aws-sdk+middleware-user-agent@3.821.0/node_modules/@aws-sdk/middleware-user-agent/dist-cjs/index.js"(exports2, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __name2 = /* @__PURE__ */ __name((target, value) => __defProp2(target, "name", { value, configurable: true }), "__name");
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: /* @__PURE__ */ __name(() => from[key], "get"), enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var index_exports = {};
    __export2(index_exports, {
      DEFAULT_UA_APP_ID: /* @__PURE__ */ __name(() => DEFAULT_UA_APP_ID, "DEFAULT_UA_APP_ID"),
      getUserAgentMiddlewareOptions: /* @__PURE__ */ __name(() => getUserAgentMiddlewareOptions, "getUserAgentMiddlewareOptions"),
      getUserAgentPlugin: /* @__PURE__ */ __name(() => getUserAgentPlugin3, "getUserAgentPlugin"),
      resolveUserAgentConfig: /* @__PURE__ */ __name(() => resolveUserAgentConfig3, "resolveUserAgentConfig"),
      userAgentMiddleware: /* @__PURE__ */ __name(() => userAgentMiddleware, "userAgentMiddleware")
    });
    module2.exports = __toCommonJS2(index_exports);
    var import_core17 = (init_dist_es(), __toCommonJS(dist_es_exports));
    var DEFAULT_UA_APP_ID = void 0;
    function isValidUserAgentAppId(appId) {
      if (appId === void 0) {
        return true;
      }
      return typeof appId === "string" && appId.length <= 50;
    }
    __name(isValidUserAgentAppId, "isValidUserAgentAppId");
    __name2(isValidUserAgentAppId, "isValidUserAgentAppId");
    function resolveUserAgentConfig3(input) {
      const normalizedAppIdProvider = (0, import_core17.normalizeProvider)(input.userAgentAppId ?? DEFAULT_UA_APP_ID);
      const { customUserAgent } = input;
      return Object.assign(input, {
        customUserAgent: typeof customUserAgent === "string" ? [[customUserAgent]] : customUserAgent,
        userAgentAppId: __name2(async () => {
          const appId = await normalizedAppIdProvider();
          if (!isValidUserAgentAppId(appId)) {
            const logger3 = input.logger?.constructor?.name === "NoOpLogger" || !input.logger ? console : input.logger;
            if (typeof appId !== "string") {
              logger3?.warn("userAgentAppId must be a string or undefined.");
            } else if (appId.length > 50) {
              logger3?.warn("The provided userAgentAppId exceeds the maximum length of 50 characters.");
            }
          }
          return appId;
        }, "userAgentAppId")
      });
    }
    __name(resolveUserAgentConfig3, "resolveUserAgentConfig");
    __name2(resolveUserAgentConfig3, "resolveUserAgentConfig");
    var import_util_endpoints5 = require_dist_cjs22();
    var import_protocol_http15 = require_dist_cjs2();
    var import_core22 = (init_dist_es2(), __toCommonJS(dist_es_exports2));
    var ACCOUNT_ID_ENDPOINT_REGEX = /\d{12}\.ddb/;
    async function checkFeatures(context, config, args) {
      const request = args.request;
      if (request?.headers?.["smithy-protocol"] === "rpc-v2-cbor") {
        (0, import_core22.setFeature)(context, "PROTOCOL_RPC_V2_CBOR", "M");
      }
      if (typeof config.retryStrategy === "function") {
        const retryStrategy = await config.retryStrategy();
        if (typeof retryStrategy.acquireInitialRetryToken === "function") {
          if (retryStrategy.constructor?.name?.includes("Adaptive")) {
            (0, import_core22.setFeature)(context, "RETRY_MODE_ADAPTIVE", "F");
          } else {
            (0, import_core22.setFeature)(context, "RETRY_MODE_STANDARD", "E");
          }
        } else {
          (0, import_core22.setFeature)(context, "RETRY_MODE_LEGACY", "D");
        }
      }
      if (typeof config.accountIdEndpointMode === "function") {
        const endpointV2 = context.endpointV2;
        if (String(endpointV2?.url?.hostname).match(ACCOUNT_ID_ENDPOINT_REGEX)) {
          (0, import_core22.setFeature)(context, "ACCOUNT_ID_ENDPOINT", "O");
        }
        switch (await config.accountIdEndpointMode?.()) {
          case "disabled":
            (0, import_core22.setFeature)(context, "ACCOUNT_ID_MODE_DISABLED", "Q");
            break;
          case "preferred":
            (0, import_core22.setFeature)(context, "ACCOUNT_ID_MODE_PREFERRED", "P");
            break;
          case "required":
            (0, import_core22.setFeature)(context, "ACCOUNT_ID_MODE_REQUIRED", "R");
            break;
        }
      }
      const identity = context.__smithy_context?.selectedHttpAuthScheme?.identity;
      if (identity?.$source) {
        const credentials = identity;
        if (credentials.accountId) {
          (0, import_core22.setFeature)(context, "RESOLVED_ACCOUNT_ID", "T");
        }
        for (const [key, value] of Object.entries(credentials.$source ?? {})) {
          (0, import_core22.setFeature)(context, key, value);
        }
      }
    }
    __name(checkFeatures, "checkFeatures");
    __name2(checkFeatures, "checkFeatures");
    var USER_AGENT = "user-agent";
    var X_AMZ_USER_AGENT = "x-amz-user-agent";
    var SPACE = " ";
    var UA_NAME_SEPARATOR = "/";
    var UA_NAME_ESCAPE_REGEX = /[^\!\$\%\&\'\*\+\-\.\^\_\`\|\~\d\w]/g;
    var UA_VALUE_ESCAPE_REGEX = /[^\!\$\%\&\'\*\+\-\.\^\_\`\|\~\d\w\#]/g;
    var UA_ESCAPE_CHAR = "-";
    var BYTE_LIMIT = 1024;
    function encodeFeatures(features) {
      let buffer = "";
      for (const key in features) {
        const val2 = features[key];
        if (buffer.length + val2.length + 1 <= BYTE_LIMIT) {
          if (buffer.length) {
            buffer += "," + val2;
          } else {
            buffer += val2;
          }
          continue;
        }
        break;
      }
      return buffer;
    }
    __name(encodeFeatures, "encodeFeatures");
    __name2(encodeFeatures, "encodeFeatures");
    var userAgentMiddleware = __name2((options) => (next, context) => async (args) => {
      const { request } = args;
      if (!import_protocol_http15.HttpRequest.isInstance(request)) {
        return next(args);
      }
      const { headers } = request;
      const userAgent = context?.userAgent?.map(escapeUserAgent) || [];
      const defaultUserAgent = (await options.defaultUserAgentProvider()).map(escapeUserAgent);
      await checkFeatures(context, options, args);
      const awsContext = context;
      defaultUserAgent.push(
        `m/${encodeFeatures(
          Object.assign({}, context.__smithy_context?.features, awsContext.__aws_sdk_context?.features)
        )}`
      );
      const customUserAgent = options?.customUserAgent?.map(escapeUserAgent) || [];
      const appId = await options.userAgentAppId();
      if (appId) {
        defaultUserAgent.push(escapeUserAgent([`app/${appId}`]));
      }
      const prefix = (0, import_util_endpoints5.getUserAgentPrefix)();
      const sdkUserAgentValue = (prefix ? [prefix] : []).concat([...defaultUserAgent, ...userAgent, ...customUserAgent]).join(SPACE);
      const normalUAValue = [
        ...defaultUserAgent.filter((section) => section.startsWith("aws-sdk-")),
        ...customUserAgent
      ].join(SPACE);
      if (options.runtime !== "browser") {
        if (normalUAValue) {
          headers[X_AMZ_USER_AGENT] = headers[X_AMZ_USER_AGENT] ? `${headers[USER_AGENT]} ${normalUAValue}` : normalUAValue;
        }
        headers[USER_AGENT] = sdkUserAgentValue;
      } else {
        headers[X_AMZ_USER_AGENT] = sdkUserAgentValue;
      }
      return next({
        ...args,
        request
      });
    }, "userAgentMiddleware");
    var escapeUserAgent = __name2((userAgentPair) => {
      const name = userAgentPair[0].split(UA_NAME_SEPARATOR).map((part) => part.replace(UA_NAME_ESCAPE_REGEX, UA_ESCAPE_CHAR)).join(UA_NAME_SEPARATOR);
      const version2 = userAgentPair[1]?.replace(UA_VALUE_ESCAPE_REGEX, UA_ESCAPE_CHAR);
      const prefixSeparatorIndex = name.indexOf(UA_NAME_SEPARATOR);
      const prefix = name.substring(0, prefixSeparatorIndex);
      let uaName = name.substring(prefixSeparatorIndex + 1);
      if (prefix === "api") {
        uaName = uaName.toLowerCase();
      }
      return [prefix, uaName, version2].filter((item) => item && item.length > 0).reduce((acc, item, index) => {
        switch (index) {
          case 0:
            return item;
          case 1:
            return `${acc}/${item}`;
          default:
            return `${acc}#${item}`;
        }
      }, "");
    }, "escapeUserAgent");
    var getUserAgentMiddlewareOptions = {
      name: "getUserAgentMiddleware",
      step: "build",
      priority: "low",
      tags: ["SET_USER_AGENT", "USER_AGENT"],
      override: true
    };
    var getUserAgentPlugin3 = __name2((config) => ({
      applyToStack: __name2((clientStack) => {
        clientStack.add(userAgentMiddleware(config), getUserAgentMiddlewareOptions);
      }, "applyToStack")
    }), "getUserAgentPlugin");
  }
});

// ../../node_modules/.pnpm/@smithy+util-config-provider@4.0.0/node_modules/@smithy/util-config-provider/dist-cjs/index.js
var require_dist_cjs26 = __commonJS({
  "../../node_modules/.pnpm/@smithy+util-config-provider@4.0.0/node_modules/@smithy/util-config-provider/dist-cjs/index.js"(exports2, module2) {
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __name2 = /* @__PURE__ */ __name((target, value) => __defProp2(target, "name", { value, configurable: true }), "__name");
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: /* @__PURE__ */ __name(() => from[key], "get"), enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var src_exports = {};
    __export2(src_exports, {
      SelectorType: /* @__PURE__ */ __name(() => SelectorType, "SelectorType"),
      booleanSelector: /* @__PURE__ */ __name(() => booleanSelector, "booleanSelector"),
      numberSelector: /* @__PURE__ */ __name(() => numberSelector, "numberSelector")
    });
    module2.exports = __toCommonJS2(src_exports);
    var booleanSelector = __name2((obj, key, type) => {
      if (!(key in obj))
        return void 0;
      if (obj[key] === "true")
        return true;
      if (obj[key] === "false")
        return false;
      throw new Error(`Cannot load ${type} "${key}". Expected "true" or "false", got ${obj[key]}.`);
    }, "booleanSelector");
    var numberSelector = __name2((obj, key, type) => {
      if (!(key in obj))
        return void 0;
      const numberValue = parseInt(obj[key], 10);
      if (Number.isNaN(numberValue)) {
        throw new TypeError(`Cannot load ${type} '${key}'. Expected number, got '${obj[key]}'.`);
      }
      return numberValue;
    }, "numberSelector");
    var SelectorType = ((SelectorType2) => {
      SelectorType2["ENV"] = "env";
      SelectorType2["CONFIG"] = "shared config entry";
      return SelectorType2;
    })(SelectorType || {});
  }
});

// ../../node_modules/.pnpm/@smithy+config-resolver@4.1.4/node_modules/@smithy/config-resolver/dist-cjs/index.js
var require_dist_cjs27 = __commonJS({
  "../../node_modules/.pnpm/@smithy+config-resolver@4.1.4/node_modules/@smithy/config-resolver/dist-cjs/index.js"(exports2, module2) {
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __name2 = /* @__PURE__ */ __name((target, value) => __defProp2(target, "name", { value, configurable: true }), "__name");
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: /* @__PURE__ */ __name(() => from[key], "get"), enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var src_exports = {};
    __export2(src_exports, {
      CONFIG_USE_DUALSTACK_ENDPOINT: /* @__PURE__ */ __name(() => CONFIG_USE_DUALSTACK_ENDPOINT, "CONFIG_USE_DUALSTACK_ENDPOINT"),
      CONFIG_USE_FIPS_ENDPOINT: /* @__PURE__ */ __name(() => CONFIG_USE_FIPS_ENDPOINT, "CONFIG_USE_FIPS_ENDPOINT"),
      DEFAULT_USE_DUALSTACK_ENDPOINT: /* @__PURE__ */ __name(() => DEFAULT_USE_DUALSTACK_ENDPOINT, "DEFAULT_USE_DUALSTACK_ENDPOINT"),
      DEFAULT_USE_FIPS_ENDPOINT: /* @__PURE__ */ __name(() => DEFAULT_USE_FIPS_ENDPOINT, "DEFAULT_USE_FIPS_ENDPOINT"),
      ENV_USE_DUALSTACK_ENDPOINT: /* @__PURE__ */ __name(() => ENV_USE_DUALSTACK_ENDPOINT, "ENV_USE_DUALSTACK_ENDPOINT"),
      ENV_USE_FIPS_ENDPOINT: /* @__PURE__ */ __name(() => ENV_USE_FIPS_ENDPOINT, "ENV_USE_FIPS_ENDPOINT"),
      NODE_REGION_CONFIG_FILE_OPTIONS: /* @__PURE__ */ __name(() => NODE_REGION_CONFIG_FILE_OPTIONS3, "NODE_REGION_CONFIG_FILE_OPTIONS"),
      NODE_REGION_CONFIG_OPTIONS: /* @__PURE__ */ __name(() => NODE_REGION_CONFIG_OPTIONS3, "NODE_REGION_CONFIG_OPTIONS"),
      NODE_USE_DUALSTACK_ENDPOINT_CONFIG_OPTIONS: /* @__PURE__ */ __name(() => NODE_USE_DUALSTACK_ENDPOINT_CONFIG_OPTIONS3, "NODE_USE_DUALSTACK_ENDPOINT_CONFIG_OPTIONS"),
      NODE_USE_FIPS_ENDPOINT_CONFIG_OPTIONS: /* @__PURE__ */ __name(() => NODE_USE_FIPS_ENDPOINT_CONFIG_OPTIONS3, "NODE_USE_FIPS_ENDPOINT_CONFIG_OPTIONS"),
      REGION_ENV_NAME: /* @__PURE__ */ __name(() => REGION_ENV_NAME, "REGION_ENV_NAME"),
      REGION_INI_NAME: /* @__PURE__ */ __name(() => REGION_INI_NAME, "REGION_INI_NAME"),
      getRegionInfo: /* @__PURE__ */ __name(() => getRegionInfo, "getRegionInfo"),
      resolveCustomEndpointsConfig: /* @__PURE__ */ __name(() => resolveCustomEndpointsConfig, "resolveCustomEndpointsConfig"),
      resolveEndpointsConfig: /* @__PURE__ */ __name(() => resolveEndpointsConfig, "resolveEndpointsConfig"),
      resolveRegionConfig: /* @__PURE__ */ __name(() => resolveRegionConfig3, "resolveRegionConfig")
    });
    module2.exports = __toCommonJS2(src_exports);
    var import_util_config_provider = require_dist_cjs26();
    var ENV_USE_DUALSTACK_ENDPOINT = "AWS_USE_DUALSTACK_ENDPOINT";
    var CONFIG_USE_DUALSTACK_ENDPOINT = "use_dualstack_endpoint";
    var DEFAULT_USE_DUALSTACK_ENDPOINT = false;
    var NODE_USE_DUALSTACK_ENDPOINT_CONFIG_OPTIONS3 = {
      environmentVariableSelector: /* @__PURE__ */ __name((env) => (0, import_util_config_provider.booleanSelector)(env, ENV_USE_DUALSTACK_ENDPOINT, import_util_config_provider.SelectorType.ENV), "environmentVariableSelector"),
      configFileSelector: /* @__PURE__ */ __name((profile) => (0, import_util_config_provider.booleanSelector)(profile, CONFIG_USE_DUALSTACK_ENDPOINT, import_util_config_provider.SelectorType.CONFIG), "configFileSelector"),
      default: false
    };
    var ENV_USE_FIPS_ENDPOINT = "AWS_USE_FIPS_ENDPOINT";
    var CONFIG_USE_FIPS_ENDPOINT = "use_fips_endpoint";
    var DEFAULT_USE_FIPS_ENDPOINT = false;
    var NODE_USE_FIPS_ENDPOINT_CONFIG_OPTIONS3 = {
      environmentVariableSelector: /* @__PURE__ */ __name((env) => (0, import_util_config_provider.booleanSelector)(env, ENV_USE_FIPS_ENDPOINT, import_util_config_provider.SelectorType.ENV), "environmentVariableSelector"),
      configFileSelector: /* @__PURE__ */ __name((profile) => (0, import_util_config_provider.booleanSelector)(profile, CONFIG_USE_FIPS_ENDPOINT, import_util_config_provider.SelectorType.CONFIG), "configFileSelector"),
      default: false
    };
    var import_util_middleware7 = require_dist_cjs17();
    var resolveCustomEndpointsConfig = __name2((input) => {
      const { tls, endpoint, urlParser, useDualstackEndpoint } = input;
      return Object.assign(input, {
        tls: tls ?? true,
        endpoint: (0, import_util_middleware7.normalizeProvider)(typeof endpoint === "string" ? urlParser(endpoint) : endpoint),
        isCustomEndpoint: true,
        useDualstackEndpoint: (0, import_util_middleware7.normalizeProvider)(useDualstackEndpoint ?? false)
      });
    }, "resolveCustomEndpointsConfig");
    var getEndpointFromRegion = __name2(async (input) => {
      const { tls = true } = input;
      const region = await input.region();
      const dnsHostRegex = new RegExp(/^([a-zA-Z0-9]|[a-zA-Z0-9][a-zA-Z0-9-]{0,61}[a-zA-Z0-9])$/);
      if (!dnsHostRegex.test(region)) {
        throw new Error("Invalid region in client config");
      }
      const useDualstackEndpoint = await input.useDualstackEndpoint();
      const useFipsEndpoint = await input.useFipsEndpoint();
      const { hostname } = await input.regionInfoProvider(region, { useDualstackEndpoint, useFipsEndpoint }) ?? {};
      if (!hostname) {
        throw new Error("Cannot resolve hostname from client config");
      }
      return input.urlParser(`${tls ? "https:" : "http:"}//${hostname}`);
    }, "getEndpointFromRegion");
    var resolveEndpointsConfig = __name2((input) => {
      const useDualstackEndpoint = (0, import_util_middleware7.normalizeProvider)(input.useDualstackEndpoint ?? false);
      const { endpoint, useFipsEndpoint, urlParser, tls } = input;
      return Object.assign(input, {
        tls: tls ?? true,
        endpoint: endpoint ? (0, import_util_middleware7.normalizeProvider)(typeof endpoint === "string" ? urlParser(endpoint) : endpoint) : () => getEndpointFromRegion({ ...input, useDualstackEndpoint, useFipsEndpoint }),
        isCustomEndpoint: !!endpoint,
        useDualstackEndpoint
      });
    }, "resolveEndpointsConfig");
    var REGION_ENV_NAME = "AWS_REGION";
    var REGION_INI_NAME = "region";
    var NODE_REGION_CONFIG_OPTIONS3 = {
      environmentVariableSelector: /* @__PURE__ */ __name((env) => env[REGION_ENV_NAME], "environmentVariableSelector"),
      configFileSelector: /* @__PURE__ */ __name((profile) => profile[REGION_INI_NAME], "configFileSelector"),
      default: /* @__PURE__ */ __name(() => {
        throw new Error("Region is missing");
      }, "default")
    };
    var NODE_REGION_CONFIG_FILE_OPTIONS3 = {
      preferredFile: "credentials"
    };
    var isFipsRegion = __name2((region) => typeof region === "string" && (region.startsWith("fips-") || region.endsWith("-fips")), "isFipsRegion");
    var getRealRegion = __name2((region) => isFipsRegion(region) ? ["fips-aws-global", "aws-fips"].includes(region) ? "us-east-1" : region.replace(/fips-(dkr-|prod-)?|-fips/, "") : region, "getRealRegion");
    var resolveRegionConfig3 = __name2((input) => {
      const { region, useFipsEndpoint } = input;
      if (!region) {
        throw new Error("Region is missing");
      }
      return Object.assign(input, {
        region: /* @__PURE__ */ __name(async () => {
          if (typeof region === "string") {
            return getRealRegion(region);
          }
          const providedRegion = await region();
          return getRealRegion(providedRegion);
        }, "region"),
        useFipsEndpoint: /* @__PURE__ */ __name(async () => {
          const providedRegion = typeof region === "string" ? region : await region();
          if (isFipsRegion(providedRegion)) {
            return true;
          }
          return typeof useFipsEndpoint !== "function" ? Promise.resolve(!!useFipsEndpoint) : useFipsEndpoint();
        }, "useFipsEndpoint")
      });
    }, "resolveRegionConfig");
    var getHostnameFromVariants = __name2((variants = [], { useFipsEndpoint, useDualstackEndpoint }) => variants.find(
      ({ tags }) => useFipsEndpoint === tags.includes("fips") && useDualstackEndpoint === tags.includes("dualstack")
    )?.hostname, "getHostnameFromVariants");
    var getResolvedHostname = __name2((resolvedRegion, { regionHostname, partitionHostname }) => regionHostname ? regionHostname : partitionHostname ? partitionHostname.replace("{region}", resolvedRegion) : void 0, "getResolvedHostname");
    var getResolvedPartition = __name2((region, { partitionHash }) => Object.keys(partitionHash || {}).find((key) => partitionHash[key].regions.includes(region)) ?? "aws", "getResolvedPartition");
    var getResolvedSigningRegion = __name2((hostname, { signingRegion, regionRegex, useFipsEndpoint }) => {
      if (signingRegion) {
        return signingRegion;
      } else if (useFipsEndpoint) {
        const regionRegexJs = regionRegex.replace("\\\\", "\\").replace(/^\^/g, "\\.").replace(/\$$/g, "\\.");
        const regionRegexmatchArray = hostname.match(regionRegexJs);
        if (regionRegexmatchArray) {
          return regionRegexmatchArray[0].slice(1, -1);
        }
      }
    }, "getResolvedSigningRegion");
    var getRegionInfo = __name2((region, {
      useFipsEndpoint = false,
      useDualstackEndpoint = false,
      signingService,
      regionHash,
      partitionHash
    }) => {
      const partition = getResolvedPartition(region, { partitionHash });
      const resolvedRegion = region in regionHash ? region : partitionHash[partition]?.endpoint ?? region;
      const hostnameOptions = { useFipsEndpoint, useDualstackEndpoint };
      const regionHostname = getHostnameFromVariants(regionHash[resolvedRegion]?.variants, hostnameOptions);
      const partitionHostname = getHostnameFromVariants(partitionHash[partition]?.variants, hostnameOptions);
      const hostname = getResolvedHostname(resolvedRegion, { regionHostname, partitionHostname });
      if (hostname === void 0) {
        throw new Error(`Endpoint resolution failed for: ${{ resolvedRegion, useFipsEndpoint, useDualstackEndpoint }}`);
      }
      const signingRegion = getResolvedSigningRegion(hostname, {
        signingRegion: regionHash[resolvedRegion]?.signingRegion,
        regionRegex: partitionHash[partition].regionRegex,
        useFipsEndpoint
      });
      return {
        partition,
        signingService,
        hostname,
        ...signingRegion && { signingRegion },
        ...regionHash[resolvedRegion]?.signingService && {
          signingService: regionHash[resolvedRegion].signingService
        }
      };
    }, "getRegionInfo");
  }
});

// ../../node_modules/.pnpm/@smithy+middleware-content-length@4.0.4/node_modules/@smithy/middleware-content-length/dist-cjs/index.js
var require_dist_cjs28 = __commonJS({
  "../../node_modules/.pnpm/@smithy+middleware-content-length@4.0.4/node_modules/@smithy/middleware-content-length/dist-cjs/index.js"(exports2, module2) {
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __name2 = /* @__PURE__ */ __name((target, value) => __defProp2(target, "name", { value, configurable: true }), "__name");
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: /* @__PURE__ */ __name(() => from[key], "get"), enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var src_exports = {};
    __export2(src_exports, {
      contentLengthMiddleware: /* @__PURE__ */ __name(() => contentLengthMiddleware, "contentLengthMiddleware"),
      contentLengthMiddlewareOptions: /* @__PURE__ */ __name(() => contentLengthMiddlewareOptions, "contentLengthMiddlewareOptions"),
      getContentLengthPlugin: /* @__PURE__ */ __name(() => getContentLengthPlugin3, "getContentLengthPlugin")
    });
    module2.exports = __toCommonJS2(src_exports);
    var import_protocol_http15 = require_dist_cjs2();
    var CONTENT_LENGTH_HEADER = "content-length";
    function contentLengthMiddleware(bodyLengthChecker) {
      return (next) => async (args) => {
        const request = args.request;
        if (import_protocol_http15.HttpRequest.isInstance(request)) {
          const { body, headers } = request;
          if (body && Object.keys(headers).map((str) => str.toLowerCase()).indexOf(CONTENT_LENGTH_HEADER) === -1) {
            try {
              const length = bodyLengthChecker(body);
              request.headers = {
                ...request.headers,
                [CONTENT_LENGTH_HEADER]: String(length)
              };
            } catch (error2) {
            }
          }
        }
        return next({
          ...args,
          request
        });
      };
    }
    __name(contentLengthMiddleware, "contentLengthMiddleware");
    __name2(contentLengthMiddleware, "contentLengthMiddleware");
    var contentLengthMiddlewareOptions = {
      step: "build",
      tags: ["SET_CONTENT_LENGTH", "CONTENT_LENGTH"],
      name: "contentLengthMiddleware",
      override: true
    };
    var getContentLengthPlugin3 = __name2((options) => ({
      applyToStack: /* @__PURE__ */ __name((clientStack) => {
        clientStack.add(contentLengthMiddleware(options.bodyLengthChecker), contentLengthMiddlewareOptions);
      }, "applyToStack")
    }), "getContentLengthPlugin");
  }
});

// ../../node_modules/.pnpm/@smithy+shared-ini-file-loader@4.0.4/node_modules/@smithy/shared-ini-file-loader/dist-cjs/getHomeDir.js
var require_getHomeDir = __commonJS({
  "../../node_modules/.pnpm/@smithy+shared-ini-file-loader@4.0.4/node_modules/@smithy/shared-ini-file-loader/dist-cjs/getHomeDir.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.getHomeDir = void 0;
    var os_1 = require("os");
    var path_1 = require("path");
    var homeDirCache = {};
    var getHomeDirCacheKey = /* @__PURE__ */ __name(() => {
      if (process && process.geteuid) {
        return `${process.geteuid()}`;
      }
      return "DEFAULT";
    }, "getHomeDirCacheKey");
    var getHomeDir2 = /* @__PURE__ */ __name(() => {
      const { HOME, USERPROFILE, HOMEPATH, HOMEDRIVE = `C:${path_1.sep}` } = process.env;
      if (HOME)
        return HOME;
      if (USERPROFILE)
        return USERPROFILE;
      if (HOMEPATH)
        return `${HOMEDRIVE}${HOMEPATH}`;
      const homeDirCacheKey = getHomeDirCacheKey();
      if (!homeDirCache[homeDirCacheKey])
        homeDirCache[homeDirCacheKey] = (0, os_1.homedir)();
      return homeDirCache[homeDirCacheKey];
    }, "getHomeDir");
    exports2.getHomeDir = getHomeDir2;
  }
});

// ../../node_modules/.pnpm/@smithy+shared-ini-file-loader@4.0.4/node_modules/@smithy/shared-ini-file-loader/dist-cjs/getSSOTokenFilepath.js
var require_getSSOTokenFilepath = __commonJS({
  "../../node_modules/.pnpm/@smithy+shared-ini-file-loader@4.0.4/node_modules/@smithy/shared-ini-file-loader/dist-cjs/getSSOTokenFilepath.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.getSSOTokenFilepath = void 0;
    var crypto_1 = require("crypto");
    var path_1 = require("path");
    var getHomeDir_1 = require_getHomeDir();
    var getSSOTokenFilepath2 = /* @__PURE__ */ __name((id) => {
      const hasher = (0, crypto_1.createHash)("sha1");
      const cacheName = hasher.update(id).digest("hex");
      return (0, path_1.join)((0, getHomeDir_1.getHomeDir)(), ".aws", "sso", "cache", `${cacheName}.json`);
    }, "getSSOTokenFilepath");
    exports2.getSSOTokenFilepath = getSSOTokenFilepath2;
  }
});

// ../../node_modules/.pnpm/@smithy+shared-ini-file-loader@4.0.4/node_modules/@smithy/shared-ini-file-loader/dist-cjs/getSSOTokenFromFile.js
var require_getSSOTokenFromFile = __commonJS({
  "../../node_modules/.pnpm/@smithy+shared-ini-file-loader@4.0.4/node_modules/@smithy/shared-ini-file-loader/dist-cjs/getSSOTokenFromFile.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.getSSOTokenFromFile = void 0;
    var fs_1 = require("fs");
    var getSSOTokenFilepath_1 = require_getSSOTokenFilepath();
    var { readFile } = fs_1.promises;
    var getSSOTokenFromFile2 = /* @__PURE__ */ __name(async (id) => {
      const ssoTokenFilepath = (0, getSSOTokenFilepath_1.getSSOTokenFilepath)(id);
      const ssoTokenText = await readFile(ssoTokenFilepath, "utf8");
      return JSON.parse(ssoTokenText);
    }, "getSSOTokenFromFile");
    exports2.getSSOTokenFromFile = getSSOTokenFromFile2;
  }
});

// ../../node_modules/.pnpm/@smithy+shared-ini-file-loader@4.0.4/node_modules/@smithy/shared-ini-file-loader/dist-cjs/slurpFile.js
var require_slurpFile = __commonJS({
  "../../node_modules/.pnpm/@smithy+shared-ini-file-loader@4.0.4/node_modules/@smithy/shared-ini-file-loader/dist-cjs/slurpFile.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.slurpFile = void 0;
    var fs_1 = require("fs");
    var { readFile } = fs_1.promises;
    var filePromisesHash = {};
    var slurpFile = /* @__PURE__ */ __name((path, options) => {
      if (!filePromisesHash[path] || (options === null || options === void 0 ? void 0 : options.ignoreCache)) {
        filePromisesHash[path] = readFile(path, "utf8");
      }
      return filePromisesHash[path];
    }, "slurpFile");
    exports2.slurpFile = slurpFile;
  }
});

// ../../node_modules/.pnpm/@smithy+shared-ini-file-loader@4.0.4/node_modules/@smithy/shared-ini-file-loader/dist-cjs/index.js
var require_dist_cjs29 = __commonJS({
  "../../node_modules/.pnpm/@smithy+shared-ini-file-loader@4.0.4/node_modules/@smithy/shared-ini-file-loader/dist-cjs/index.js"(exports2, module2) {
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __name2 = /* @__PURE__ */ __name((target, value) => __defProp2(target, "name", { value, configurable: true }), "__name");
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: /* @__PURE__ */ __name(() => from[key], "get"), enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __reExport = /* @__PURE__ */ __name((target, mod, secondTarget) => (__copyProps2(target, mod, "default"), secondTarget && __copyProps2(secondTarget, mod, "default")), "__reExport");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var src_exports = {};
    __export2(src_exports, {
      CONFIG_PREFIX_SEPARATOR: /* @__PURE__ */ __name(() => CONFIG_PREFIX_SEPARATOR, "CONFIG_PREFIX_SEPARATOR"),
      DEFAULT_PROFILE: /* @__PURE__ */ __name(() => DEFAULT_PROFILE, "DEFAULT_PROFILE"),
      ENV_PROFILE: /* @__PURE__ */ __name(() => ENV_PROFILE, "ENV_PROFILE"),
      getProfileName: /* @__PURE__ */ __name(() => getProfileName, "getProfileName"),
      loadSharedConfigFiles: /* @__PURE__ */ __name(() => loadSharedConfigFiles, "loadSharedConfigFiles"),
      loadSsoSessionData: /* @__PURE__ */ __name(() => loadSsoSessionData, "loadSsoSessionData"),
      parseKnownFiles: /* @__PURE__ */ __name(() => parseKnownFiles, "parseKnownFiles")
    });
    module2.exports = __toCommonJS2(src_exports);
    __reExport(src_exports, require_getHomeDir(), module2.exports);
    var ENV_PROFILE = "AWS_PROFILE";
    var DEFAULT_PROFILE = "default";
    var getProfileName = __name2((init) => init.profile || process.env[ENV_PROFILE] || DEFAULT_PROFILE, "getProfileName");
    __reExport(src_exports, require_getSSOTokenFilepath(), module2.exports);
    __reExport(src_exports, require_getSSOTokenFromFile(), module2.exports);
    var import_types5 = require_dist_cjs();
    var getConfigData = __name2((data) => Object.entries(data).filter(([key]) => {
      const indexOfSeparator = key.indexOf(CONFIG_PREFIX_SEPARATOR);
      if (indexOfSeparator === -1) {
        return false;
      }
      return Object.values(import_types5.IniSectionType).includes(key.substring(0, indexOfSeparator));
    }).reduce(
      (acc, [key, value]) => {
        const indexOfSeparator = key.indexOf(CONFIG_PREFIX_SEPARATOR);
        const updatedKey = key.substring(0, indexOfSeparator) === import_types5.IniSectionType.PROFILE ? key.substring(indexOfSeparator + 1) : key;
        acc[updatedKey] = value;
        return acc;
      },
      {
        // Populate default profile, if present.
        ...data.default && { default: data.default }
      }
    ), "getConfigData");
    var import_path = require("path");
    var import_getHomeDir = require_getHomeDir();
    var ENV_CONFIG_PATH = "AWS_CONFIG_FILE";
    var getConfigFilepath = __name2(() => process.env[ENV_CONFIG_PATH] || (0, import_path.join)((0, import_getHomeDir.getHomeDir)(), ".aws", "config"), "getConfigFilepath");
    var import_getHomeDir2 = require_getHomeDir();
    var ENV_CREDENTIALS_PATH = "AWS_SHARED_CREDENTIALS_FILE";
    var getCredentialsFilepath = __name2(() => process.env[ENV_CREDENTIALS_PATH] || (0, import_path.join)((0, import_getHomeDir2.getHomeDir)(), ".aws", "credentials"), "getCredentialsFilepath");
    var import_getHomeDir3 = require_getHomeDir();
    var prefixKeyRegex = /^([\w-]+)\s(["'])?([\w-@\+\.%:/]+)\2$/;
    var profileNameBlockList = ["__proto__", "profile __proto__"];
    var parseIni = __name2((iniData) => {
      const map3 = {};
      let currentSection;
      let currentSubSection;
      for (const iniLine of iniData.split(/\r?\n/)) {
        const trimmedLine = iniLine.split(/(^|\s)[;#]/)[0].trim();
        const isSection = trimmedLine[0] === "[" && trimmedLine[trimmedLine.length - 1] === "]";
        if (isSection) {
          currentSection = void 0;
          currentSubSection = void 0;
          const sectionName = trimmedLine.substring(1, trimmedLine.length - 1);
          const matches = prefixKeyRegex.exec(sectionName);
          if (matches) {
            const [, prefix, , name] = matches;
            if (Object.values(import_types5.IniSectionType).includes(prefix)) {
              currentSection = [prefix, name].join(CONFIG_PREFIX_SEPARATOR);
            }
          } else {
            currentSection = sectionName;
          }
          if (profileNameBlockList.includes(sectionName)) {
            throw new Error(`Found invalid profile name "${sectionName}"`);
          }
        } else if (currentSection) {
          const indexOfEqualsSign = trimmedLine.indexOf("=");
          if (![0, -1].includes(indexOfEqualsSign)) {
            const [name, value] = [
              trimmedLine.substring(0, indexOfEqualsSign).trim(),
              trimmedLine.substring(indexOfEqualsSign + 1).trim()
            ];
            if (value === "") {
              currentSubSection = name;
            } else {
              if (currentSubSection && iniLine.trimStart() === iniLine) {
                currentSubSection = void 0;
              }
              map3[currentSection] = map3[currentSection] || {};
              const key = currentSubSection ? [currentSubSection, name].join(CONFIG_PREFIX_SEPARATOR) : name;
              map3[currentSection][key] = value;
            }
          }
        }
      }
      return map3;
    }, "parseIni");
    var import_slurpFile = require_slurpFile();
    var swallowError = __name2(() => ({}), "swallowError");
    var CONFIG_PREFIX_SEPARATOR = ".";
    var loadSharedConfigFiles = __name2(async (init = {}) => {
      const { filepath = getCredentialsFilepath(), configFilepath = getConfigFilepath() } = init;
      const homeDir = (0, import_getHomeDir3.getHomeDir)();
      const relativeHomeDirPrefix = "~/";
      let resolvedFilepath = filepath;
      if (filepath.startsWith(relativeHomeDirPrefix)) {
        resolvedFilepath = (0, import_path.join)(homeDir, filepath.slice(2));
      }
      let resolvedConfigFilepath = configFilepath;
      if (configFilepath.startsWith(relativeHomeDirPrefix)) {
        resolvedConfigFilepath = (0, import_path.join)(homeDir, configFilepath.slice(2));
      }
      const parsedFiles = await Promise.all([
        (0, import_slurpFile.slurpFile)(resolvedConfigFilepath, {
          ignoreCache: init.ignoreCache
        }).then(parseIni).then(getConfigData).catch(swallowError),
        (0, import_slurpFile.slurpFile)(resolvedFilepath, {
          ignoreCache: init.ignoreCache
        }).then(parseIni).catch(swallowError)
      ]);
      return {
        configFile: parsedFiles[0],
        credentialsFile: parsedFiles[1]
      };
    }, "loadSharedConfigFiles");
    var getSsoSessionData = __name2((data) => Object.entries(data).filter(([key]) => key.startsWith(import_types5.IniSectionType.SSO_SESSION + CONFIG_PREFIX_SEPARATOR)).reduce((acc, [key, value]) => ({ ...acc, [key.substring(key.indexOf(CONFIG_PREFIX_SEPARATOR) + 1)]: value }), {}), "getSsoSessionData");
    var import_slurpFile2 = require_slurpFile();
    var swallowError2 = __name2(() => ({}), "swallowError");
    var loadSsoSessionData = __name2(async (init = {}) => (0, import_slurpFile2.slurpFile)(init.configFilepath ?? getConfigFilepath()).then(parseIni).then(getSsoSessionData).catch(swallowError2), "loadSsoSessionData");
    var mergeConfigFiles = __name2((...files) => {
      const merged = {};
      for (const file of files) {
        for (const [key, values] of Object.entries(file)) {
          if (merged[key] !== void 0) {
            Object.assign(merged[key], values);
          } else {
            merged[key] = values;
          }
        }
      }
      return merged;
    }, "mergeConfigFiles");
    var parseKnownFiles = __name2(async (init) => {
      const parsedFiles = await loadSharedConfigFiles(init);
      return mergeConfigFiles(parsedFiles.configFile, parsedFiles.credentialsFile);
    }, "parseKnownFiles");
  }
});

// ../../node_modules/.pnpm/@smithy+node-config-provider@4.1.3/node_modules/@smithy/node-config-provider/dist-cjs/index.js
var require_dist_cjs30 = __commonJS({
  "../../node_modules/.pnpm/@smithy+node-config-provider@4.1.3/node_modules/@smithy/node-config-provider/dist-cjs/index.js"(exports2, module2) {
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __name2 = /* @__PURE__ */ __name((target, value) => __defProp2(target, "name", { value, configurable: true }), "__name");
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: /* @__PURE__ */ __name(() => from[key], "get"), enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var src_exports = {};
    __export2(src_exports, {
      loadConfig: /* @__PURE__ */ __name(() => loadConfig, "loadConfig")
    });
    module2.exports = __toCommonJS2(src_exports);
    var import_property_provider2 = require_dist_cjs23();
    function getSelectorName(functionString) {
      try {
        const constants = new Set(Array.from(functionString.match(/([A-Z_]){3,}/g) ?? []));
        constants.delete("CONFIG");
        constants.delete("CONFIG_PREFIX_SEPARATOR");
        constants.delete("ENV");
        return [...constants].join(", ");
      } catch (e3) {
        return functionString;
      }
    }
    __name(getSelectorName, "getSelectorName");
    __name2(getSelectorName, "getSelectorName");
    var fromEnv = __name2((envVarSelector, options) => async () => {
      try {
        const config = envVarSelector(process.env, options);
        if (config === void 0) {
          throw new Error();
        }
        return config;
      } catch (e3) {
        throw new import_property_provider2.CredentialsProviderError(
          e3.message || `Not found in ENV: ${getSelectorName(envVarSelector.toString())}`,
          { logger: options?.logger }
        );
      }
    }, "fromEnv");
    var import_shared_ini_file_loader = require_dist_cjs29();
    var fromSharedConfigFiles = __name2((configSelector, { preferredFile = "config", ...init } = {}) => async () => {
      const profile = (0, import_shared_ini_file_loader.getProfileName)(init);
      const { configFile, credentialsFile } = await (0, import_shared_ini_file_loader.loadSharedConfigFiles)(init);
      const profileFromCredentials = credentialsFile[profile] || {};
      const profileFromConfig = configFile[profile] || {};
      const mergedProfile = preferredFile === "config" ? { ...profileFromCredentials, ...profileFromConfig } : { ...profileFromConfig, ...profileFromCredentials };
      try {
        const cfgFile = preferredFile === "config" ? configFile : credentialsFile;
        const configValue = configSelector(mergedProfile, cfgFile);
        if (configValue === void 0) {
          throw new Error();
        }
        return configValue;
      } catch (e3) {
        throw new import_property_provider2.CredentialsProviderError(
          e3.message || `Not found in config files w/ profile [${profile}]: ${getSelectorName(configSelector.toString())}`,
          { logger: init.logger }
        );
      }
    }, "fromSharedConfigFiles");
    var isFunction = __name2((func) => typeof func === "function", "isFunction");
    var fromStatic = __name2((defaultValue) => isFunction(defaultValue) ? async () => await defaultValue() : (0, import_property_provider2.fromStatic)(defaultValue), "fromStatic");
    var loadConfig = __name2(({ environmentVariableSelector, configFileSelector, default: defaultValue }, configuration = {}) => {
      const { signingName, logger: logger3 } = configuration;
      const envOptions = { signingName, logger: logger3 };
      return (0, import_property_provider2.memoize)(
        (0, import_property_provider2.chain)(
          fromEnv(environmentVariableSelector, envOptions),
          fromSharedConfigFiles(configFileSelector, configuration),
          fromStatic(defaultValue)
        )
      );
    }, "loadConfig");
  }
});

// ../../node_modules/.pnpm/@smithy+middleware-endpoint@4.1.9/node_modules/@smithy/middleware-endpoint/dist-cjs/adaptors/getEndpointUrlConfig.js
var require_getEndpointUrlConfig = __commonJS({
  "../../node_modules/.pnpm/@smithy+middleware-endpoint@4.1.9/node_modules/@smithy/middleware-endpoint/dist-cjs/adaptors/getEndpointUrlConfig.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.getEndpointUrlConfig = void 0;
    var shared_ini_file_loader_1 = require_dist_cjs29();
    var ENV_ENDPOINT_URL = "AWS_ENDPOINT_URL";
    var CONFIG_ENDPOINT_URL = "endpoint_url";
    var getEndpointUrlConfig = /* @__PURE__ */ __name((serviceId) => ({
      environmentVariableSelector: /* @__PURE__ */ __name((env) => {
        const serviceSuffixParts = serviceId.split(" ").map((w3) => w3.toUpperCase());
        const serviceEndpointUrl = env[[ENV_ENDPOINT_URL, ...serviceSuffixParts].join("_")];
        if (serviceEndpointUrl)
          return serviceEndpointUrl;
        const endpointUrl = env[ENV_ENDPOINT_URL];
        if (endpointUrl)
          return endpointUrl;
        return void 0;
      }, "environmentVariableSelector"),
      configFileSelector: /* @__PURE__ */ __name((profile, config) => {
        if (config && profile.services) {
          const servicesSection = config[["services", profile.services].join(shared_ini_file_loader_1.CONFIG_PREFIX_SEPARATOR)];
          if (servicesSection) {
            const servicePrefixParts = serviceId.split(" ").map((w3) => w3.toLowerCase());
            const endpointUrl2 = servicesSection[[servicePrefixParts.join("_"), CONFIG_ENDPOINT_URL].join(shared_ini_file_loader_1.CONFIG_PREFIX_SEPARATOR)];
            if (endpointUrl2)
              return endpointUrl2;
          }
        }
        const endpointUrl = profile[CONFIG_ENDPOINT_URL];
        if (endpointUrl)
          return endpointUrl;
        return void 0;
      }, "configFileSelector"),
      default: void 0
    }), "getEndpointUrlConfig");
    exports2.getEndpointUrlConfig = getEndpointUrlConfig;
  }
});

// ../../node_modules/.pnpm/@smithy+middleware-endpoint@4.1.9/node_modules/@smithy/middleware-endpoint/dist-cjs/adaptors/getEndpointFromConfig.js
var require_getEndpointFromConfig = __commonJS({
  "../../node_modules/.pnpm/@smithy+middleware-endpoint@4.1.9/node_modules/@smithy/middleware-endpoint/dist-cjs/adaptors/getEndpointFromConfig.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.getEndpointFromConfig = void 0;
    var node_config_provider_1 = require_dist_cjs30();
    var getEndpointUrlConfig_1 = require_getEndpointUrlConfig();
    var getEndpointFromConfig = /* @__PURE__ */ __name(async (serviceId) => (0, node_config_provider_1.loadConfig)((0, getEndpointUrlConfig_1.getEndpointUrlConfig)(serviceId !== null && serviceId !== void 0 ? serviceId : ""))(), "getEndpointFromConfig");
    exports2.getEndpointFromConfig = getEndpointFromConfig;
  }
});

// ../../node_modules/.pnpm/@smithy+querystring-parser@4.0.4/node_modules/@smithy/querystring-parser/dist-cjs/index.js
var require_dist_cjs31 = __commonJS({
  "../../node_modules/.pnpm/@smithy+querystring-parser@4.0.4/node_modules/@smithy/querystring-parser/dist-cjs/index.js"(exports2, module2) {
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __name2 = /* @__PURE__ */ __name((target, value) => __defProp2(target, "name", { value, configurable: true }), "__name");
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: /* @__PURE__ */ __name(() => from[key], "get"), enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var src_exports = {};
    __export2(src_exports, {
      parseQueryString: /* @__PURE__ */ __name(() => parseQueryString, "parseQueryString")
    });
    module2.exports = __toCommonJS2(src_exports);
    function parseQueryString(querystring) {
      const query = {};
      querystring = querystring.replace(/^\?/, "");
      if (querystring) {
        for (const pair of querystring.split("&")) {
          let [key, value = null] = pair.split("=");
          key = decodeURIComponent(key);
          if (value) {
            value = decodeURIComponent(value);
          }
          if (!(key in query)) {
            query[key] = value;
          } else if (Array.isArray(query[key])) {
            query[key].push(value);
          } else {
            query[key] = [query[key], value];
          }
        }
      }
      return query;
    }
    __name(parseQueryString, "parseQueryString");
    __name2(parseQueryString, "parseQueryString");
  }
});

// ../../node_modules/.pnpm/@smithy+url-parser@4.0.4/node_modules/@smithy/url-parser/dist-cjs/index.js
var require_dist_cjs32 = __commonJS({
  "../../node_modules/.pnpm/@smithy+url-parser@4.0.4/node_modules/@smithy/url-parser/dist-cjs/index.js"(exports2, module2) {
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __name2 = /* @__PURE__ */ __name((target, value) => __defProp2(target, "name", { value, configurable: true }), "__name");
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: /* @__PURE__ */ __name(() => from[key], "get"), enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var src_exports = {};
    __export2(src_exports, {
      parseUrl: /* @__PURE__ */ __name(() => parseUrl3, "parseUrl")
    });
    module2.exports = __toCommonJS2(src_exports);
    var import_querystring_parser = require_dist_cjs31();
    var parseUrl3 = __name2((url) => {
      if (typeof url === "string") {
        return parseUrl3(new URL(url));
      }
      const { hostname, pathname, port, protocol, search } = url;
      let query;
      if (search) {
        query = (0, import_querystring_parser.parseQueryString)(search);
      }
      return {
        hostname,
        port: port ? parseInt(port) : void 0,
        protocol,
        path: pathname,
        query
      };
    }, "parseUrl");
  }
});

// ../../node_modules/.pnpm/@smithy+middleware-endpoint@4.1.9/node_modules/@smithy/middleware-endpoint/dist-cjs/index.js
var require_dist_cjs33 = __commonJS({
  "../../node_modules/.pnpm/@smithy+middleware-endpoint@4.1.9/node_modules/@smithy/middleware-endpoint/dist-cjs/index.js"(exports2, module2) {
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __name2 = /* @__PURE__ */ __name((target, value) => __defProp2(target, "name", { value, configurable: true }), "__name");
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: /* @__PURE__ */ __name(() => from[key], "get"), enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var src_exports = {};
    __export2(src_exports, {
      endpointMiddleware: /* @__PURE__ */ __name(() => endpointMiddleware, "endpointMiddleware"),
      endpointMiddlewareOptions: /* @__PURE__ */ __name(() => endpointMiddlewareOptions, "endpointMiddlewareOptions"),
      getEndpointFromInstructions: /* @__PURE__ */ __name(() => getEndpointFromInstructions, "getEndpointFromInstructions"),
      getEndpointPlugin: /* @__PURE__ */ __name(() => getEndpointPlugin4, "getEndpointPlugin"),
      resolveEndpointConfig: /* @__PURE__ */ __name(() => resolveEndpointConfig3, "resolveEndpointConfig"),
      resolveParams: /* @__PURE__ */ __name(() => resolveParams, "resolveParams"),
      toEndpointV1: /* @__PURE__ */ __name(() => toEndpointV1, "toEndpointV1")
    });
    module2.exports = __toCommonJS2(src_exports);
    var resolveParamsForS3 = __name2(async (endpointParams) => {
      const bucket = endpointParams?.Bucket || "";
      if (typeof endpointParams.Bucket === "string") {
        endpointParams.Bucket = bucket.replace(/#/g, encodeURIComponent("#")).replace(/\?/g, encodeURIComponent("?"));
      }
      if (isArnBucketName(bucket)) {
        if (endpointParams.ForcePathStyle === true) {
          throw new Error("Path-style addressing cannot be used with ARN buckets");
        }
      } else if (!isDnsCompatibleBucketName(bucket) || bucket.indexOf(".") !== -1 && !String(endpointParams.Endpoint).startsWith("http:") || bucket.toLowerCase() !== bucket || bucket.length < 3) {
        endpointParams.ForcePathStyle = true;
      }
      if (endpointParams.DisableMultiRegionAccessPoints) {
        endpointParams.disableMultiRegionAccessPoints = true;
        endpointParams.DisableMRAP = true;
      }
      return endpointParams;
    }, "resolveParamsForS3");
    var DOMAIN_PATTERN = /^[a-z0-9][a-z0-9\.\-]{1,61}[a-z0-9]$/;
    var IP_ADDRESS_PATTERN = /(\d+\.){3}\d+/;
    var DOTS_PATTERN = /\.\./;
    var isDnsCompatibleBucketName = __name2((bucketName) => DOMAIN_PATTERN.test(bucketName) && !IP_ADDRESS_PATTERN.test(bucketName) && !DOTS_PATTERN.test(bucketName), "isDnsCompatibleBucketName");
    var isArnBucketName = __name2((bucketName) => {
      const [arn, partition, service, , , bucket] = bucketName.split(":");
      const isArn = arn === "arn" && bucketName.split(":").length >= 6;
      const isValidArn = Boolean(isArn && partition && service && bucket);
      if (isArn && !isValidArn) {
        throw new Error(`Invalid ARN: ${bucketName} was an invalid ARN.`);
      }
      return isValidArn;
    }, "isArnBucketName");
    var createConfigValueProvider = __name2((configKey, canonicalEndpointParamKey, config) => {
      const configProvider = __name2(async () => {
        const configValue = config[configKey] ?? config[canonicalEndpointParamKey];
        if (typeof configValue === "function") {
          return configValue();
        }
        return configValue;
      }, "configProvider");
      if (configKey === "credentialScope" || canonicalEndpointParamKey === "CredentialScope") {
        return async () => {
          const credentials = typeof config.credentials === "function" ? await config.credentials() : config.credentials;
          const configValue = credentials?.credentialScope ?? credentials?.CredentialScope;
          return configValue;
        };
      }
      if (configKey === "accountId" || canonicalEndpointParamKey === "AccountId") {
        return async () => {
          const credentials = typeof config.credentials === "function" ? await config.credentials() : config.credentials;
          const configValue = credentials?.accountId ?? credentials?.AccountId;
          return configValue;
        };
      }
      if (configKey === "endpoint" || canonicalEndpointParamKey === "endpoint") {
        return async () => {
          const endpoint = await configProvider();
          if (endpoint && typeof endpoint === "object") {
            if ("url" in endpoint) {
              return endpoint.url.href;
            }
            if ("hostname" in endpoint) {
              const { protocol, hostname, port, path } = endpoint;
              return `${protocol}//${hostname}${port ? ":" + port : ""}${path}`;
            }
          }
          return endpoint;
        };
      }
      return configProvider;
    }, "createConfigValueProvider");
    var import_getEndpointFromConfig = require_getEndpointFromConfig();
    var import_url_parser3 = require_dist_cjs32();
    var toEndpointV1 = __name2((endpoint) => {
      if (typeof endpoint === "object") {
        if ("url" in endpoint) {
          return (0, import_url_parser3.parseUrl)(endpoint.url);
        }
        return endpoint;
      }
      return (0, import_url_parser3.parseUrl)(endpoint);
    }, "toEndpointV1");
    var getEndpointFromInstructions = __name2(async (commandInput, instructionsSupplier, clientConfig, context) => {
      if (!clientConfig.endpoint) {
        let endpointFromConfig;
        if (clientConfig.serviceConfiguredEndpoint) {
          endpointFromConfig = await clientConfig.serviceConfiguredEndpoint();
        } else {
          endpointFromConfig = await (0, import_getEndpointFromConfig.getEndpointFromConfig)(clientConfig.serviceId);
        }
        if (endpointFromConfig) {
          clientConfig.endpoint = () => Promise.resolve(toEndpointV1(endpointFromConfig));
        }
      }
      const endpointParams = await resolveParams(commandInput, instructionsSupplier, clientConfig);
      if (typeof clientConfig.endpointProvider !== "function") {
        throw new Error("config.endpointProvider is not set.");
      }
      const endpoint = clientConfig.endpointProvider(endpointParams, context);
      return endpoint;
    }, "getEndpointFromInstructions");
    var resolveParams = __name2(async (commandInput, instructionsSupplier, clientConfig) => {
      const endpointParams = {};
      const instructions = instructionsSupplier?.getEndpointParameterInstructions?.() || {};
      for (const [name, instruction] of Object.entries(instructions)) {
        switch (instruction.type) {
          case "staticContextParams":
            endpointParams[name] = instruction.value;
            break;
          case "contextParams":
            endpointParams[name] = commandInput[instruction.name];
            break;
          case "clientContextParams":
          case "builtInParams":
            endpointParams[name] = await createConfigValueProvider(instruction.name, name, clientConfig)();
            break;
          case "operationContextParams":
            endpointParams[name] = instruction.get(commandInput);
            break;
          default:
            throw new Error("Unrecognized endpoint parameter instruction: " + JSON.stringify(instruction));
        }
      }
      if (Object.keys(instructions).length === 0) {
        Object.assign(endpointParams, clientConfig);
      }
      if (String(clientConfig.serviceId).toLowerCase() === "s3") {
        await resolveParamsForS3(endpointParams);
      }
      return endpointParams;
    }, "resolveParams");
    var import_core17 = (init_dist_es(), __toCommonJS(dist_es_exports));
    var import_util_middleware7 = require_dist_cjs17();
    var endpointMiddleware = __name2(({
      config,
      instructions
    }) => {
      return (next, context) => async (args) => {
        if (config.endpoint) {
          (0, import_core17.setFeature)(context, "ENDPOINT_OVERRIDE", "N");
        }
        const endpoint = await getEndpointFromInstructions(
          args.input,
          {
            getEndpointParameterInstructions() {
              return instructions;
            }
          },
          { ...config },
          context
        );
        context.endpointV2 = endpoint;
        context.authSchemes = endpoint.properties?.authSchemes;
        const authScheme = context.authSchemes?.[0];
        if (authScheme) {
          context["signing_region"] = authScheme.signingRegion;
          context["signing_service"] = authScheme.signingName;
          const smithyContext = (0, import_util_middleware7.getSmithyContext)(context);
          const httpAuthOption = smithyContext?.selectedHttpAuthScheme?.httpAuthOption;
          if (httpAuthOption) {
            httpAuthOption.signingProperties = Object.assign(
              httpAuthOption.signingProperties || {},
              {
                signing_region: authScheme.signingRegion,
                signingRegion: authScheme.signingRegion,
                signing_service: authScheme.signingName,
                signingName: authScheme.signingName,
                signingRegionSet: authScheme.signingRegionSet
              },
              authScheme.properties
            );
          }
        }
        return next({
          ...args
        });
      };
    }, "endpointMiddleware");
    var import_middleware_serde5 = require_dist_cjs20();
    var endpointMiddlewareOptions = {
      step: "serialize",
      tags: ["ENDPOINT_PARAMETERS", "ENDPOINT_V2", "ENDPOINT"],
      name: "endpointV2Middleware",
      override: true,
      relation: "before",
      toMiddleware: import_middleware_serde5.serializerMiddlewareOption.name
    };
    var getEndpointPlugin4 = __name2((config, instructions) => ({
      applyToStack: /* @__PURE__ */ __name((clientStack) => {
        clientStack.addRelativeTo(
          endpointMiddleware({
            config,
            instructions
          }),
          endpointMiddlewareOptions
        );
      }, "applyToStack")
    }), "getEndpointPlugin");
    var import_getEndpointFromConfig2 = require_getEndpointFromConfig();
    var resolveEndpointConfig3 = __name2((input) => {
      const tls = input.tls ?? true;
      const { endpoint, useDualstackEndpoint, useFipsEndpoint } = input;
      const customEndpointProvider = endpoint != null ? async () => toEndpointV1(await (0, import_util_middleware7.normalizeProvider)(endpoint)()) : void 0;
      const isCustomEndpoint = !!endpoint;
      const resolvedConfig = Object.assign(input, {
        endpoint: customEndpointProvider,
        tls,
        isCustomEndpoint,
        useDualstackEndpoint: (0, import_util_middleware7.normalizeProvider)(useDualstackEndpoint ?? false),
        useFipsEndpoint: (0, import_util_middleware7.normalizeProvider)(useFipsEndpoint ?? false)
      });
      let configuredEndpointPromise = void 0;
      resolvedConfig.serviceConfiguredEndpoint = async () => {
        if (input.serviceId && !configuredEndpointPromise) {
          configuredEndpointPromise = (0, import_getEndpointFromConfig2.getEndpointFromConfig)(input.serviceId);
        }
        return configuredEndpointPromise;
      };
      return resolvedConfig;
    }, "resolveEndpointConfig");
  }
});

// ../../node_modules/.pnpm/uuid@9.0.1/node_modules/uuid/dist/esm-node/rng.js
function rng() {
  if (poolPtr > rnds8Pool.length - 16) {
    import_crypto.default.randomFillSync(rnds8Pool);
    poolPtr = 0;
  }
  return rnds8Pool.slice(poolPtr, poolPtr += 16);
}
var import_crypto, rnds8Pool, poolPtr;
var init_rng = __esm({
  "../../node_modules/.pnpm/uuid@9.0.1/node_modules/uuid/dist/esm-node/rng.js"() {
    import_crypto = __toESM(require("crypto"));
    rnds8Pool = new Uint8Array(256);
    poolPtr = rnds8Pool.length;
    __name(rng, "rng");
  }
});

// ../../node_modules/.pnpm/uuid@9.0.1/node_modules/uuid/dist/esm-node/regex.js
var regex_default;
var init_regex = __esm({
  "../../node_modules/.pnpm/uuid@9.0.1/node_modules/uuid/dist/esm-node/regex.js"() {
    regex_default = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
  }
});

// ../../node_modules/.pnpm/uuid@9.0.1/node_modules/uuid/dist/esm-node/validate.js
function validate(uuid) {
  return typeof uuid === "string" && regex_default.test(uuid);
}
var validate_default;
var init_validate = __esm({
  "../../node_modules/.pnpm/uuid@9.0.1/node_modules/uuid/dist/esm-node/validate.js"() {
    init_regex();
    __name(validate, "validate");
    validate_default = validate;
  }
});

// ../../node_modules/.pnpm/uuid@9.0.1/node_modules/uuid/dist/esm-node/stringify.js
function unsafeStringify(arr, offset = 0) {
  return byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + "-" + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + "-" + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + "-" + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + "-" + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]];
}
function stringify(arr, offset = 0) {
  const uuid = unsafeStringify(arr, offset);
  if (!validate_default(uuid)) {
    throw TypeError("Stringified UUID is invalid");
  }
  return uuid;
}
var byteToHex, stringify_default;
var init_stringify = __esm({
  "../../node_modules/.pnpm/uuid@9.0.1/node_modules/uuid/dist/esm-node/stringify.js"() {
    init_validate();
    byteToHex = [];
    for (let i3 = 0; i3 < 256; ++i3) {
      byteToHex.push((i3 + 256).toString(16).slice(1));
    }
    __name(unsafeStringify, "unsafeStringify");
    __name(stringify, "stringify");
    stringify_default = stringify;
  }
});

// ../../node_modules/.pnpm/uuid@9.0.1/node_modules/uuid/dist/esm-node/v1.js
function v1(options, buf, offset) {
  let i3 = buf && offset || 0;
  const b3 = buf || new Array(16);
  options = options || {};
  let node = options.node || _nodeId;
  let clockseq = options.clockseq !== void 0 ? options.clockseq : _clockseq;
  if (node == null || clockseq == null) {
    const seedBytes = options.random || (options.rng || rng)();
    if (node == null) {
      node = _nodeId = [seedBytes[0] | 1, seedBytes[1], seedBytes[2], seedBytes[3], seedBytes[4], seedBytes[5]];
    }
    if (clockseq == null) {
      clockseq = _clockseq = (seedBytes[6] << 8 | seedBytes[7]) & 16383;
    }
  }
  let msecs = options.msecs !== void 0 ? options.msecs : Date.now();
  let nsecs = options.nsecs !== void 0 ? options.nsecs : _lastNSecs + 1;
  const dt = msecs - _lastMSecs + (nsecs - _lastNSecs) / 1e4;
  if (dt < 0 && options.clockseq === void 0) {
    clockseq = clockseq + 1 & 16383;
  }
  if ((dt < 0 || msecs > _lastMSecs) && options.nsecs === void 0) {
    nsecs = 0;
  }
  if (nsecs >= 1e4) {
    throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
  }
  _lastMSecs = msecs;
  _lastNSecs = nsecs;
  _clockseq = clockseq;
  msecs += 122192928e5;
  const tl = ((msecs & 268435455) * 1e4 + nsecs) % 4294967296;
  b3[i3++] = tl >>> 24 & 255;
  b3[i3++] = tl >>> 16 & 255;
  b3[i3++] = tl >>> 8 & 255;
  b3[i3++] = tl & 255;
  const tmh = msecs / 4294967296 * 1e4 & 268435455;
  b3[i3++] = tmh >>> 8 & 255;
  b3[i3++] = tmh & 255;
  b3[i3++] = tmh >>> 24 & 15 | 16;
  b3[i3++] = tmh >>> 16 & 255;
  b3[i3++] = clockseq >>> 8 | 128;
  b3[i3++] = clockseq & 255;
  for (let n3 = 0; n3 < 6; ++n3) {
    b3[i3 + n3] = node[n3];
  }
  return buf || unsafeStringify(b3);
}
var _nodeId, _clockseq, _lastMSecs, _lastNSecs, v1_default;
var init_v1 = __esm({
  "../../node_modules/.pnpm/uuid@9.0.1/node_modules/uuid/dist/esm-node/v1.js"() {
    init_rng();
    init_stringify();
    _lastMSecs = 0;
    _lastNSecs = 0;
    __name(v1, "v1");
    v1_default = v1;
  }
});

// ../../node_modules/.pnpm/uuid@9.0.1/node_modules/uuid/dist/esm-node/parse.js
function parse(uuid) {
  if (!validate_default(uuid)) {
    throw TypeError("Invalid UUID");
  }
  let v6;
  const arr = new Uint8Array(16);
  arr[0] = (v6 = parseInt(uuid.slice(0, 8), 16)) >>> 24;
  arr[1] = v6 >>> 16 & 255;
  arr[2] = v6 >>> 8 & 255;
  arr[3] = v6 & 255;
  arr[4] = (v6 = parseInt(uuid.slice(9, 13), 16)) >>> 8;
  arr[5] = v6 & 255;
  arr[6] = (v6 = parseInt(uuid.slice(14, 18), 16)) >>> 8;
  arr[7] = v6 & 255;
  arr[8] = (v6 = parseInt(uuid.slice(19, 23), 16)) >>> 8;
  arr[9] = v6 & 255;
  arr[10] = (v6 = parseInt(uuid.slice(24, 36), 16)) / 1099511627776 & 255;
  arr[11] = v6 / 4294967296 & 255;
  arr[12] = v6 >>> 24 & 255;
  arr[13] = v6 >>> 16 & 255;
  arr[14] = v6 >>> 8 & 255;
  arr[15] = v6 & 255;
  return arr;
}
var parse_default;
var init_parse = __esm({
  "../../node_modules/.pnpm/uuid@9.0.1/node_modules/uuid/dist/esm-node/parse.js"() {
    init_validate();
    __name(parse, "parse");
    parse_default = parse;
  }
});

// ../../node_modules/.pnpm/uuid@9.0.1/node_modules/uuid/dist/esm-node/v35.js
function stringToBytes(str) {
  str = unescape(encodeURIComponent(str));
  const bytes = [];
  for (let i3 = 0; i3 < str.length; ++i3) {
    bytes.push(str.charCodeAt(i3));
  }
  return bytes;
}
function v35(name, version2, hashfunc) {
  function generateUUID(value, namespace, buf, offset) {
    var _namespace;
    if (typeof value === "string") {
      value = stringToBytes(value);
    }
    if (typeof namespace === "string") {
      namespace = parse_default(namespace);
    }
    if (((_namespace = namespace) === null || _namespace === void 0 ? void 0 : _namespace.length) !== 16) {
      throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");
    }
    let bytes = new Uint8Array(16 + value.length);
    bytes.set(namespace);
    bytes.set(value, namespace.length);
    bytes = hashfunc(bytes);
    bytes[6] = bytes[6] & 15 | version2;
    bytes[8] = bytes[8] & 63 | 128;
    if (buf) {
      offset = offset || 0;
      for (let i3 = 0; i3 < 16; ++i3) {
        buf[offset + i3] = bytes[i3];
      }
      return buf;
    }
    return unsafeStringify(bytes);
  }
  __name(generateUUID, "generateUUID");
  try {
    generateUUID.name = name;
  } catch (err) {
  }
  generateUUID.DNS = DNS;
  generateUUID.URL = URL2;
  return generateUUID;
}
var DNS, URL2;
var init_v35 = __esm({
  "../../node_modules/.pnpm/uuid@9.0.1/node_modules/uuid/dist/esm-node/v35.js"() {
    init_stringify();
    init_parse();
    __name(stringToBytes, "stringToBytes");
    DNS = "6ba7b810-9dad-11d1-80b4-00c04fd430c8";
    URL2 = "6ba7b811-9dad-11d1-80b4-00c04fd430c8";
    __name(v35, "v35");
  }
});

// ../../node_modules/.pnpm/uuid@9.0.1/node_modules/uuid/dist/esm-node/md5.js
function md5(bytes) {
  if (Array.isArray(bytes)) {
    bytes = Buffer.from(bytes);
  } else if (typeof bytes === "string") {
    bytes = Buffer.from(bytes, "utf8");
  }
  return import_crypto2.default.createHash("md5").update(bytes).digest();
}
var import_crypto2, md5_default;
var init_md5 = __esm({
  "../../node_modules/.pnpm/uuid@9.0.1/node_modules/uuid/dist/esm-node/md5.js"() {
    import_crypto2 = __toESM(require("crypto"));
    __name(md5, "md5");
    md5_default = md5;
  }
});

// ../../node_modules/.pnpm/uuid@9.0.1/node_modules/uuid/dist/esm-node/v3.js
var v3, v3_default;
var init_v3 = __esm({
  "../../node_modules/.pnpm/uuid@9.0.1/node_modules/uuid/dist/esm-node/v3.js"() {
    init_v35();
    init_md5();
    v3 = v35("v3", 48, md5_default);
    v3_default = v3;
  }
});

// ../../node_modules/.pnpm/uuid@9.0.1/node_modules/uuid/dist/esm-node/native.js
var import_crypto3, native_default;
var init_native = __esm({
  "../../node_modules/.pnpm/uuid@9.0.1/node_modules/uuid/dist/esm-node/native.js"() {
    import_crypto3 = __toESM(require("crypto"));
    native_default = {
      randomUUID: import_crypto3.default.randomUUID
    };
  }
});

// ../../node_modules/.pnpm/uuid@9.0.1/node_modules/uuid/dist/esm-node/v4.js
function v4(options, buf, offset) {
  if (native_default.randomUUID && !buf && !options) {
    return native_default.randomUUID();
  }
  options = options || {};
  const rnds = options.random || (options.rng || rng)();
  rnds[6] = rnds[6] & 15 | 64;
  rnds[8] = rnds[8] & 63 | 128;
  if (buf) {
    offset = offset || 0;
    for (let i3 = 0; i3 < 16; ++i3) {
      buf[offset + i3] = rnds[i3];
    }
    return buf;
  }
  return unsafeStringify(rnds);
}
var v4_default;
var init_v4 = __esm({
  "../../node_modules/.pnpm/uuid@9.0.1/node_modules/uuid/dist/esm-node/v4.js"() {
    init_native();
    init_rng();
    init_stringify();
    __name(v4, "v4");
    v4_default = v4;
  }
});

// ../../node_modules/.pnpm/uuid@9.0.1/node_modules/uuid/dist/esm-node/sha1.js
function sha1(bytes) {
  if (Array.isArray(bytes)) {
    bytes = Buffer.from(bytes);
  } else if (typeof bytes === "string") {
    bytes = Buffer.from(bytes, "utf8");
  }
  return import_crypto4.default.createHash("sha1").update(bytes).digest();
}
var import_crypto4, sha1_default;
var init_sha1 = __esm({
  "../../node_modules/.pnpm/uuid@9.0.1/node_modules/uuid/dist/esm-node/sha1.js"() {
    import_crypto4 = __toESM(require("crypto"));
    __name(sha1, "sha1");
    sha1_default = sha1;
  }
});

// ../../node_modules/.pnpm/uuid@9.0.1/node_modules/uuid/dist/esm-node/v5.js
var v5, v5_default;
var init_v5 = __esm({
  "../../node_modules/.pnpm/uuid@9.0.1/node_modules/uuid/dist/esm-node/v5.js"() {
    init_v35();
    init_sha1();
    v5 = v35("v5", 80, sha1_default);
    v5_default = v5;
  }
});

// ../../node_modules/.pnpm/uuid@9.0.1/node_modules/uuid/dist/esm-node/nil.js
var nil_default;
var init_nil = __esm({
  "../../node_modules/.pnpm/uuid@9.0.1/node_modules/uuid/dist/esm-node/nil.js"() {
    nil_default = "00000000-0000-0000-0000-000000000000";
  }
});

// ../../node_modules/.pnpm/uuid@9.0.1/node_modules/uuid/dist/esm-node/version.js
function version(uuid) {
  if (!validate_default(uuid)) {
    throw TypeError("Invalid UUID");
  }
  return parseInt(uuid.slice(14, 15), 16);
}
var version_default;
var init_version = __esm({
  "../../node_modules/.pnpm/uuid@9.0.1/node_modules/uuid/dist/esm-node/version.js"() {
    init_validate();
    __name(version, "version");
    version_default = version;
  }
});

// ../../node_modules/.pnpm/uuid@9.0.1/node_modules/uuid/dist/esm-node/index.js
var esm_node_exports = {};
__export(esm_node_exports, {
  NIL: () => nil_default,
  parse: () => parse_default,
  stringify: () => stringify_default,
  v1: () => v1_default,
  v3: () => v3_default,
  v4: () => v4_default,
  v5: () => v5_default,
  validate: () => validate_default,
  version: () => version_default
});
var init_esm_node = __esm({
  "../../node_modules/.pnpm/uuid@9.0.1/node_modules/uuid/dist/esm-node/index.js"() {
    init_v1();
    init_v3();
    init_v4();
    init_v5();
    init_nil();
    init_version();
    init_validate();
    init_stringify();
    init_parse();
  }
});

// ../../node_modules/.pnpm/@smithy+service-error-classification@4.0.5/node_modules/@smithy/service-error-classification/dist-cjs/index.js
var require_dist_cjs34 = __commonJS({
  "../../node_modules/.pnpm/@smithy+service-error-classification@4.0.5/node_modules/@smithy/service-error-classification/dist-cjs/index.js"(exports2, module2) {
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __name2 = /* @__PURE__ */ __name((target, value) => __defProp2(target, "name", { value, configurable: true }), "__name");
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: /* @__PURE__ */ __name(() => from[key], "get"), enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var src_exports = {};
    __export2(src_exports, {
      isBrowserNetworkError: /* @__PURE__ */ __name(() => isBrowserNetworkError, "isBrowserNetworkError"),
      isClockSkewCorrectedError: /* @__PURE__ */ __name(() => isClockSkewCorrectedError, "isClockSkewCorrectedError"),
      isClockSkewError: /* @__PURE__ */ __name(() => isClockSkewError, "isClockSkewError"),
      isRetryableByTrait: /* @__PURE__ */ __name(() => isRetryableByTrait, "isRetryableByTrait"),
      isServerError: /* @__PURE__ */ __name(() => isServerError, "isServerError"),
      isThrottlingError: /* @__PURE__ */ __name(() => isThrottlingError, "isThrottlingError"),
      isTransientError: /* @__PURE__ */ __name(() => isTransientError, "isTransientError")
    });
    module2.exports = __toCommonJS2(src_exports);
    var CLOCK_SKEW_ERROR_CODES = [
      "AuthFailure",
      "InvalidSignatureException",
      "RequestExpired",
      "RequestInTheFuture",
      "RequestTimeTooSkewed",
      "SignatureDoesNotMatch"
    ];
    var THROTTLING_ERROR_CODES = [
      "BandwidthLimitExceeded",
      "EC2ThrottledException",
      "LimitExceededException",
      "PriorRequestNotComplete",
      "ProvisionedThroughputExceededException",
      "RequestLimitExceeded",
      "RequestThrottled",
      "RequestThrottledException",
      "SlowDown",
      "ThrottledException",
      "Throttling",
      "ThrottlingException",
      "TooManyRequestsException",
      "TransactionInProgressException"
      // DynamoDB
    ];
    var TRANSIENT_ERROR_CODES = ["TimeoutError", "RequestTimeout", "RequestTimeoutException"];
    var TRANSIENT_ERROR_STATUS_CODES = [500, 502, 503, 504];
    var NODEJS_TIMEOUT_ERROR_CODES = ["ECONNRESET", "ECONNREFUSED", "EPIPE", "ETIMEDOUT"];
    var isRetryableByTrait = __name2((error2) => error2.$retryable !== void 0, "isRetryableByTrait");
    var isClockSkewError = __name2((error2) => CLOCK_SKEW_ERROR_CODES.includes(error2.name), "isClockSkewError");
    var isClockSkewCorrectedError = __name2((error2) => error2.$metadata?.clockSkewCorrected, "isClockSkewCorrectedError");
    var isBrowserNetworkError = __name2((error2) => {
      const errorMessages = /* @__PURE__ */ new Set([
        "Failed to fetch",
        // Chrome
        "NetworkError when attempting to fetch resource",
        // Firefox
        "The Internet connection appears to be offline",
        // Safari 16
        "Load failed",
        // Safari 17+
        "Network request failed"
        // `cross-fetch`
      ]);
      const isValid = error2 && error2 instanceof TypeError;
      if (!isValid) {
        return false;
      }
      return errorMessages.has(error2.message);
    }, "isBrowserNetworkError");
    var isThrottlingError = __name2((error2) => error2.$metadata?.httpStatusCode === 429 || THROTTLING_ERROR_CODES.includes(error2.name) || error2.$retryable?.throttling == true, "isThrottlingError");
    var isTransientError = __name2((error2, depth = 0) => isClockSkewCorrectedError(error2) || TRANSIENT_ERROR_CODES.includes(error2.name) || NODEJS_TIMEOUT_ERROR_CODES.includes(error2?.code || "") || TRANSIENT_ERROR_STATUS_CODES.includes(error2.$metadata?.httpStatusCode || 0) || isBrowserNetworkError(error2) || error2.cause !== void 0 && depth <= 10 && isTransientError(error2.cause, depth + 1), "isTransientError");
    var isServerError = __name2((error2) => {
      if (error2.$metadata?.httpStatusCode !== void 0) {
        const statusCode = error2.$metadata.httpStatusCode;
        if (500 <= statusCode && statusCode <= 599 && !isTransientError(error2)) {
          return true;
        }
        return false;
      }
      return false;
    }, "isServerError");
  }
});

// ../../node_modules/.pnpm/@smithy+util-retry@4.0.5/node_modules/@smithy/util-retry/dist-cjs/index.js
var require_dist_cjs35 = __commonJS({
  "../../node_modules/.pnpm/@smithy+util-retry@4.0.5/node_modules/@smithy/util-retry/dist-cjs/index.js"(exports2, module2) {
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __name2 = /* @__PURE__ */ __name((target, value) => __defProp2(target, "name", { value, configurable: true }), "__name");
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: /* @__PURE__ */ __name(() => from[key], "get"), enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var src_exports = {};
    __export2(src_exports, {
      AdaptiveRetryStrategy: /* @__PURE__ */ __name(() => AdaptiveRetryStrategy, "AdaptiveRetryStrategy"),
      ConfiguredRetryStrategy: /* @__PURE__ */ __name(() => ConfiguredRetryStrategy, "ConfiguredRetryStrategy"),
      DEFAULT_MAX_ATTEMPTS: /* @__PURE__ */ __name(() => DEFAULT_MAX_ATTEMPTS, "DEFAULT_MAX_ATTEMPTS"),
      DEFAULT_RETRY_DELAY_BASE: /* @__PURE__ */ __name(() => DEFAULT_RETRY_DELAY_BASE, "DEFAULT_RETRY_DELAY_BASE"),
      DEFAULT_RETRY_MODE: /* @__PURE__ */ __name(() => DEFAULT_RETRY_MODE3, "DEFAULT_RETRY_MODE"),
      DefaultRateLimiter: /* @__PURE__ */ __name(() => DefaultRateLimiter, "DefaultRateLimiter"),
      INITIAL_RETRY_TOKENS: /* @__PURE__ */ __name(() => INITIAL_RETRY_TOKENS, "INITIAL_RETRY_TOKENS"),
      INVOCATION_ID_HEADER: /* @__PURE__ */ __name(() => INVOCATION_ID_HEADER, "INVOCATION_ID_HEADER"),
      MAXIMUM_RETRY_DELAY: /* @__PURE__ */ __name(() => MAXIMUM_RETRY_DELAY, "MAXIMUM_RETRY_DELAY"),
      NO_RETRY_INCREMENT: /* @__PURE__ */ __name(() => NO_RETRY_INCREMENT, "NO_RETRY_INCREMENT"),
      REQUEST_HEADER: /* @__PURE__ */ __name(() => REQUEST_HEADER, "REQUEST_HEADER"),
      RETRY_COST: /* @__PURE__ */ __name(() => RETRY_COST, "RETRY_COST"),
      RETRY_MODES: /* @__PURE__ */ __name(() => RETRY_MODES, "RETRY_MODES"),
      StandardRetryStrategy: /* @__PURE__ */ __name(() => StandardRetryStrategy, "StandardRetryStrategy"),
      THROTTLING_RETRY_DELAY_BASE: /* @__PURE__ */ __name(() => THROTTLING_RETRY_DELAY_BASE, "THROTTLING_RETRY_DELAY_BASE"),
      TIMEOUT_RETRY_COST: /* @__PURE__ */ __name(() => TIMEOUT_RETRY_COST, "TIMEOUT_RETRY_COST")
    });
    module2.exports = __toCommonJS2(src_exports);
    var RETRY_MODES = ((RETRY_MODES2) => {
      RETRY_MODES2["STANDARD"] = "standard";
      RETRY_MODES2["ADAPTIVE"] = "adaptive";
      return RETRY_MODES2;
    })(RETRY_MODES || {});
    var DEFAULT_MAX_ATTEMPTS = 3;
    var DEFAULT_RETRY_MODE3 = "standard";
    var import_service_error_classification = require_dist_cjs34();
    var DefaultRateLimiter = class _DefaultRateLimiter {
      static {
        __name(this, "_DefaultRateLimiter");
      }
      constructor(options) {
        this.currentCapacity = 0;
        this.enabled = false;
        this.lastMaxRate = 0;
        this.measuredTxRate = 0;
        this.requestCount = 0;
        this.lastTimestamp = 0;
        this.timeWindow = 0;
        this.beta = options?.beta ?? 0.7;
        this.minCapacity = options?.minCapacity ?? 1;
        this.minFillRate = options?.minFillRate ?? 0.5;
        this.scaleConstant = options?.scaleConstant ?? 0.4;
        this.smooth = options?.smooth ?? 0.8;
        const currentTimeInSeconds = this.getCurrentTimeInSeconds();
        this.lastThrottleTime = currentTimeInSeconds;
        this.lastTxRateBucket = Math.floor(this.getCurrentTimeInSeconds());
        this.fillRate = this.minFillRate;
        this.maxCapacity = this.minCapacity;
      }
      static {
        __name2(this, "DefaultRateLimiter");
      }
      static {
        this.setTimeoutFn = setTimeout;
      }
      getCurrentTimeInSeconds() {
        return Date.now() / 1e3;
      }
      async getSendToken() {
        return this.acquireTokenBucket(1);
      }
      async acquireTokenBucket(amount) {
        if (!this.enabled) {
          return;
        }
        this.refillTokenBucket();
        if (amount > this.currentCapacity) {
          const delay = (amount - this.currentCapacity) / this.fillRate * 1e3;
          await new Promise((resolve) => _DefaultRateLimiter.setTimeoutFn(resolve, delay));
        }
        this.currentCapacity = this.currentCapacity - amount;
      }
      refillTokenBucket() {
        const timestamp = this.getCurrentTimeInSeconds();
        if (!this.lastTimestamp) {
          this.lastTimestamp = timestamp;
          return;
        }
        const fillAmount = (timestamp - this.lastTimestamp) * this.fillRate;
        this.currentCapacity = Math.min(this.maxCapacity, this.currentCapacity + fillAmount);
        this.lastTimestamp = timestamp;
      }
      updateClientSendingRate(response) {
        let calculatedRate;
        this.updateMeasuredRate();
        if ((0, import_service_error_classification.isThrottlingError)(response)) {
          const rateToUse = !this.enabled ? this.measuredTxRate : Math.min(this.measuredTxRate, this.fillRate);
          this.lastMaxRate = rateToUse;
          this.calculateTimeWindow();
          this.lastThrottleTime = this.getCurrentTimeInSeconds();
          calculatedRate = this.cubicThrottle(rateToUse);
          this.enableTokenBucket();
        } else {
          this.calculateTimeWindow();
          calculatedRate = this.cubicSuccess(this.getCurrentTimeInSeconds());
        }
        const newRate = Math.min(calculatedRate, 2 * this.measuredTxRate);
        this.updateTokenBucketRate(newRate);
      }
      calculateTimeWindow() {
        this.timeWindow = this.getPrecise(Math.pow(this.lastMaxRate * (1 - this.beta) / this.scaleConstant, 1 / 3));
      }
      cubicThrottle(rateToUse) {
        return this.getPrecise(rateToUse * this.beta);
      }
      cubicSuccess(timestamp) {
        return this.getPrecise(
          this.scaleConstant * Math.pow(timestamp - this.lastThrottleTime - this.timeWindow, 3) + this.lastMaxRate
        );
      }
      enableTokenBucket() {
        this.enabled = true;
      }
      updateTokenBucketRate(newRate) {
        this.refillTokenBucket();
        this.fillRate = Math.max(newRate, this.minFillRate);
        this.maxCapacity = Math.max(newRate, this.minCapacity);
        this.currentCapacity = Math.min(this.currentCapacity, this.maxCapacity);
      }
      updateMeasuredRate() {
        const t3 = this.getCurrentTimeInSeconds();
        const timeBucket = Math.floor(t3 * 2) / 2;
        this.requestCount++;
        if (timeBucket > this.lastTxRateBucket) {
          const currentRate = this.requestCount / (timeBucket - this.lastTxRateBucket);
          this.measuredTxRate = this.getPrecise(currentRate * this.smooth + this.measuredTxRate * (1 - this.smooth));
          this.requestCount = 0;
          this.lastTxRateBucket = timeBucket;
        }
      }
      getPrecise(num) {
        return parseFloat(num.toFixed(8));
      }
    };
    var DEFAULT_RETRY_DELAY_BASE = 100;
    var MAXIMUM_RETRY_DELAY = 20 * 1e3;
    var THROTTLING_RETRY_DELAY_BASE = 500;
    var INITIAL_RETRY_TOKENS = 500;
    var RETRY_COST = 5;
    var TIMEOUT_RETRY_COST = 10;
    var NO_RETRY_INCREMENT = 1;
    var INVOCATION_ID_HEADER = "amz-sdk-invocation-id";
    var REQUEST_HEADER = "amz-sdk-request";
    var getDefaultRetryBackoffStrategy = __name2(() => {
      let delayBase = DEFAULT_RETRY_DELAY_BASE;
      const computeNextBackoffDelay = __name2((attempts) => {
        return Math.floor(Math.min(MAXIMUM_RETRY_DELAY, Math.random() * 2 ** attempts * delayBase));
      }, "computeNextBackoffDelay");
      const setDelayBase = __name2((delay) => {
        delayBase = delay;
      }, "setDelayBase");
      return {
        computeNextBackoffDelay,
        setDelayBase
      };
    }, "getDefaultRetryBackoffStrategy");
    var createDefaultRetryToken = __name2(({
      retryDelay,
      retryCount,
      retryCost
    }) => {
      const getRetryCount = __name2(() => retryCount, "getRetryCount");
      const getRetryDelay = __name2(() => Math.min(MAXIMUM_RETRY_DELAY, retryDelay), "getRetryDelay");
      const getRetryCost = __name2(() => retryCost, "getRetryCost");
      return {
        getRetryCount,
        getRetryDelay,
        getRetryCost
      };
    }, "createDefaultRetryToken");
    var StandardRetryStrategy = class {
      static {
        __name(this, "StandardRetryStrategy");
      }
      constructor(maxAttempts) {
        this.maxAttempts = maxAttempts;
        this.mode = "standard";
        this.capacity = INITIAL_RETRY_TOKENS;
        this.retryBackoffStrategy = getDefaultRetryBackoffStrategy();
        this.maxAttemptsProvider = typeof maxAttempts === "function" ? maxAttempts : async () => maxAttempts;
      }
      static {
        __name2(this, "StandardRetryStrategy");
      }
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      async acquireInitialRetryToken(retryTokenScope) {
        return createDefaultRetryToken({
          retryDelay: DEFAULT_RETRY_DELAY_BASE,
          retryCount: 0
        });
      }
      async refreshRetryTokenForRetry(token, errorInfo) {
        const maxAttempts = await this.getMaxAttempts();
        if (this.shouldRetry(token, errorInfo, maxAttempts)) {
          const errorType = errorInfo.errorType;
          this.retryBackoffStrategy.setDelayBase(
            errorType === "THROTTLING" ? THROTTLING_RETRY_DELAY_BASE : DEFAULT_RETRY_DELAY_BASE
          );
          const delayFromErrorType = this.retryBackoffStrategy.computeNextBackoffDelay(token.getRetryCount());
          const retryDelay = errorInfo.retryAfterHint ? Math.max(errorInfo.retryAfterHint.getTime() - Date.now() || 0, delayFromErrorType) : delayFromErrorType;
          const capacityCost = this.getCapacityCost(errorType);
          this.capacity -= capacityCost;
          return createDefaultRetryToken({
            retryDelay,
            retryCount: token.getRetryCount() + 1,
            retryCost: capacityCost
          });
        }
        throw new Error("No retry token available");
      }
      recordSuccess(token) {
        this.capacity = Math.max(INITIAL_RETRY_TOKENS, this.capacity + (token.getRetryCost() ?? NO_RETRY_INCREMENT));
      }
      /**
       * @returns the current available retry capacity.
       *
       * This number decreases when retries are executed and refills when requests or retries succeed.
       */
      getCapacity() {
        return this.capacity;
      }
      async getMaxAttempts() {
        try {
          return await this.maxAttemptsProvider();
        } catch (error2) {
          console.warn(`Max attempts provider could not resolve. Using default of ${DEFAULT_MAX_ATTEMPTS}`);
          return DEFAULT_MAX_ATTEMPTS;
        }
      }
      shouldRetry(tokenToRenew, errorInfo, maxAttempts) {
        const attempts = tokenToRenew.getRetryCount() + 1;
        return attempts < maxAttempts && this.capacity >= this.getCapacityCost(errorInfo.errorType) && this.isRetryableError(errorInfo.errorType);
      }
      getCapacityCost(errorType) {
        return errorType === "TRANSIENT" ? TIMEOUT_RETRY_COST : RETRY_COST;
      }
      isRetryableError(errorType) {
        return errorType === "THROTTLING" || errorType === "TRANSIENT";
      }
    };
    var AdaptiveRetryStrategy = class {
      static {
        __name(this, "AdaptiveRetryStrategy");
      }
      constructor(maxAttemptsProvider, options) {
        this.maxAttemptsProvider = maxAttemptsProvider;
        this.mode = "adaptive";
        const { rateLimiter } = options ?? {};
        this.rateLimiter = rateLimiter ?? new DefaultRateLimiter();
        this.standardRetryStrategy = new StandardRetryStrategy(maxAttemptsProvider);
      }
      static {
        __name2(this, "AdaptiveRetryStrategy");
      }
      async acquireInitialRetryToken(retryTokenScope) {
        await this.rateLimiter.getSendToken();
        return this.standardRetryStrategy.acquireInitialRetryToken(retryTokenScope);
      }
      async refreshRetryTokenForRetry(tokenToRenew, errorInfo) {
        this.rateLimiter.updateClientSendingRate(errorInfo);
        return this.standardRetryStrategy.refreshRetryTokenForRetry(tokenToRenew, errorInfo);
      }
      recordSuccess(token) {
        this.rateLimiter.updateClientSendingRate({});
        this.standardRetryStrategy.recordSuccess(token);
      }
    };
    var ConfiguredRetryStrategy = class extends StandardRetryStrategy {
      static {
        __name(this, "ConfiguredRetryStrategy");
      }
      static {
        __name2(this, "ConfiguredRetryStrategy");
      }
      /**
       * @param maxAttempts - the maximum number of retry attempts allowed.
       *                      e.g., if set to 3, then 4 total requests are possible.
       * @param computeNextBackoffDelay - a millisecond delay for each retry or a function that takes the retry attempt
       *                                  and returns the delay.
       *
       * @example exponential backoff.
       * ```js
       * new Client({
       *   retryStrategy: new ConfiguredRetryStrategy(3, (attempt) => attempt ** 2)
       * });
       * ```
       * @example constant delay.
       * ```js
       * new Client({
       *   retryStrategy: new ConfiguredRetryStrategy(3, 2000)
       * });
       * ```
       */
      constructor(maxAttempts, computeNextBackoffDelay = DEFAULT_RETRY_DELAY_BASE) {
        super(typeof maxAttempts === "function" ? maxAttempts : async () => maxAttempts);
        if (typeof computeNextBackoffDelay === "number") {
          this.computeNextBackoffDelay = () => computeNextBackoffDelay;
        } else {
          this.computeNextBackoffDelay = computeNextBackoffDelay;
        }
      }
      async refreshRetryTokenForRetry(tokenToRenew, errorInfo) {
        const token = await super.refreshRetryTokenForRetry(tokenToRenew, errorInfo);
        token.getRetryDelay = () => this.computeNextBackoffDelay(token.getRetryCount());
        return token;
      }
    };
  }
});

// ../../node_modules/.pnpm/@smithy+middleware-retry@4.1.10/node_modules/@smithy/middleware-retry/dist-cjs/isStreamingPayload/isStreamingPayload.js
var require_isStreamingPayload = __commonJS({
  "../../node_modules/.pnpm/@smithy+middleware-retry@4.1.10/node_modules/@smithy/middleware-retry/dist-cjs/isStreamingPayload/isStreamingPayload.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.isStreamingPayload = void 0;
    var stream_1 = require("stream");
    var isStreamingPayload = /* @__PURE__ */ __name((request) => (request === null || request === void 0 ? void 0 : request.body) instanceof stream_1.Readable || typeof ReadableStream !== "undefined" && (request === null || request === void 0 ? void 0 : request.body) instanceof ReadableStream, "isStreamingPayload");
    exports2.isStreamingPayload = isStreamingPayload;
  }
});

// ../../node_modules/.pnpm/@smithy+middleware-retry@4.1.10/node_modules/@smithy/middleware-retry/dist-cjs/index.js
var require_dist_cjs36 = __commonJS({
  "../../node_modules/.pnpm/@smithy+middleware-retry@4.1.10/node_modules/@smithy/middleware-retry/dist-cjs/index.js"(exports2, module2) {
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __name2 = /* @__PURE__ */ __name((target, value) => __defProp2(target, "name", { value, configurable: true }), "__name");
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: /* @__PURE__ */ __name(() => from[key], "get"), enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var src_exports = {};
    __export2(src_exports, {
      AdaptiveRetryStrategy: /* @__PURE__ */ __name(() => AdaptiveRetryStrategy, "AdaptiveRetryStrategy"),
      CONFIG_MAX_ATTEMPTS: /* @__PURE__ */ __name(() => CONFIG_MAX_ATTEMPTS, "CONFIG_MAX_ATTEMPTS"),
      CONFIG_RETRY_MODE: /* @__PURE__ */ __name(() => CONFIG_RETRY_MODE, "CONFIG_RETRY_MODE"),
      ENV_MAX_ATTEMPTS: /* @__PURE__ */ __name(() => ENV_MAX_ATTEMPTS, "ENV_MAX_ATTEMPTS"),
      ENV_RETRY_MODE: /* @__PURE__ */ __name(() => ENV_RETRY_MODE, "ENV_RETRY_MODE"),
      NODE_MAX_ATTEMPT_CONFIG_OPTIONS: /* @__PURE__ */ __name(() => NODE_MAX_ATTEMPT_CONFIG_OPTIONS3, "NODE_MAX_ATTEMPT_CONFIG_OPTIONS"),
      NODE_RETRY_MODE_CONFIG_OPTIONS: /* @__PURE__ */ __name(() => NODE_RETRY_MODE_CONFIG_OPTIONS3, "NODE_RETRY_MODE_CONFIG_OPTIONS"),
      StandardRetryStrategy: /* @__PURE__ */ __name(() => StandardRetryStrategy, "StandardRetryStrategy"),
      defaultDelayDecider: /* @__PURE__ */ __name(() => defaultDelayDecider, "defaultDelayDecider"),
      defaultRetryDecider: /* @__PURE__ */ __name(() => defaultRetryDecider, "defaultRetryDecider"),
      getOmitRetryHeadersPlugin: /* @__PURE__ */ __name(() => getOmitRetryHeadersPlugin, "getOmitRetryHeadersPlugin"),
      getRetryAfterHint: /* @__PURE__ */ __name(() => getRetryAfterHint, "getRetryAfterHint"),
      getRetryPlugin: /* @__PURE__ */ __name(() => getRetryPlugin3, "getRetryPlugin"),
      omitRetryHeadersMiddleware: /* @__PURE__ */ __name(() => omitRetryHeadersMiddleware, "omitRetryHeadersMiddleware"),
      omitRetryHeadersMiddlewareOptions: /* @__PURE__ */ __name(() => omitRetryHeadersMiddlewareOptions, "omitRetryHeadersMiddlewareOptions"),
      resolveRetryConfig: /* @__PURE__ */ __name(() => resolveRetryConfig3, "resolveRetryConfig"),
      retryMiddleware: /* @__PURE__ */ __name(() => retryMiddleware, "retryMiddleware"),
      retryMiddlewareOptions: /* @__PURE__ */ __name(() => retryMiddlewareOptions, "retryMiddlewareOptions")
    });
    module2.exports = __toCommonJS2(src_exports);
    var import_protocol_http15 = require_dist_cjs2();
    var import_uuid = (init_esm_node(), __toCommonJS(esm_node_exports));
    var import_util_retry3 = require_dist_cjs35();
    var getDefaultRetryQuota = __name2((initialRetryTokens, options) => {
      const MAX_CAPACITY = initialRetryTokens;
      const noRetryIncrement = options?.noRetryIncrement ?? import_util_retry3.NO_RETRY_INCREMENT;
      const retryCost = options?.retryCost ?? import_util_retry3.RETRY_COST;
      const timeoutRetryCost = options?.timeoutRetryCost ?? import_util_retry3.TIMEOUT_RETRY_COST;
      let availableCapacity = initialRetryTokens;
      const getCapacityAmount = __name2((error2) => error2.name === "TimeoutError" ? timeoutRetryCost : retryCost, "getCapacityAmount");
      const hasRetryTokens = __name2((error2) => getCapacityAmount(error2) <= availableCapacity, "hasRetryTokens");
      const retrieveRetryTokens = __name2((error2) => {
        if (!hasRetryTokens(error2)) {
          throw new Error("No retry token available");
        }
        const capacityAmount = getCapacityAmount(error2);
        availableCapacity -= capacityAmount;
        return capacityAmount;
      }, "retrieveRetryTokens");
      const releaseRetryTokens = __name2((capacityReleaseAmount) => {
        availableCapacity += capacityReleaseAmount ?? noRetryIncrement;
        availableCapacity = Math.min(availableCapacity, MAX_CAPACITY);
      }, "releaseRetryTokens");
      return Object.freeze({
        hasRetryTokens,
        retrieveRetryTokens,
        releaseRetryTokens
      });
    }, "getDefaultRetryQuota");
    var defaultDelayDecider = __name2((delayBase, attempts) => Math.floor(Math.min(import_util_retry3.MAXIMUM_RETRY_DELAY, Math.random() * 2 ** attempts * delayBase)), "defaultDelayDecider");
    var import_service_error_classification = require_dist_cjs34();
    var defaultRetryDecider = __name2((error2) => {
      if (!error2) {
        return false;
      }
      return (0, import_service_error_classification.isRetryableByTrait)(error2) || (0, import_service_error_classification.isClockSkewError)(error2) || (0, import_service_error_classification.isThrottlingError)(error2) || (0, import_service_error_classification.isTransientError)(error2);
    }, "defaultRetryDecider");
    var asSdkError = __name2((error2) => {
      if (error2 instanceof Error)
        return error2;
      if (error2 instanceof Object)
        return Object.assign(new Error(), error2);
      if (typeof error2 === "string")
        return new Error(error2);
      return new Error(`AWS SDK error wrapper for ${error2}`);
    }, "asSdkError");
    var StandardRetryStrategy = class {
      static {
        __name(this, "StandardRetryStrategy");
      }
      constructor(maxAttemptsProvider, options) {
        this.maxAttemptsProvider = maxAttemptsProvider;
        this.mode = import_util_retry3.RETRY_MODES.STANDARD;
        this.retryDecider = options?.retryDecider ?? defaultRetryDecider;
        this.delayDecider = options?.delayDecider ?? defaultDelayDecider;
        this.retryQuota = options?.retryQuota ?? getDefaultRetryQuota(import_util_retry3.INITIAL_RETRY_TOKENS);
      }
      static {
        __name2(this, "StandardRetryStrategy");
      }
      shouldRetry(error2, attempts, maxAttempts) {
        return attempts < maxAttempts && this.retryDecider(error2) && this.retryQuota.hasRetryTokens(error2);
      }
      async getMaxAttempts() {
        let maxAttempts;
        try {
          maxAttempts = await this.maxAttemptsProvider();
        } catch (error2) {
          maxAttempts = import_util_retry3.DEFAULT_MAX_ATTEMPTS;
        }
        return maxAttempts;
      }
      async retry(next, args, options) {
        let retryTokenAmount;
        let attempts = 0;
        let totalDelay = 0;
        const maxAttempts = await this.getMaxAttempts();
        const { request } = args;
        if (import_protocol_http15.HttpRequest.isInstance(request)) {
          request.headers[import_util_retry3.INVOCATION_ID_HEADER] = (0, import_uuid.v4)();
        }
        while (true) {
          try {
            if (import_protocol_http15.HttpRequest.isInstance(request)) {
              request.headers[import_util_retry3.REQUEST_HEADER] = `attempt=${attempts + 1}; max=${maxAttempts}`;
            }
            if (options?.beforeRequest) {
              await options.beforeRequest();
            }
            const { response, output } = await next(args);
            if (options?.afterRequest) {
              options.afterRequest(response);
            }
            this.retryQuota.releaseRetryTokens(retryTokenAmount);
            output.$metadata.attempts = attempts + 1;
            output.$metadata.totalRetryDelay = totalDelay;
            return { response, output };
          } catch (e3) {
            const err = asSdkError(e3);
            attempts++;
            if (this.shouldRetry(err, attempts, maxAttempts)) {
              retryTokenAmount = this.retryQuota.retrieveRetryTokens(err);
              const delayFromDecider = this.delayDecider(
                (0, import_service_error_classification.isThrottlingError)(err) ? import_util_retry3.THROTTLING_RETRY_DELAY_BASE : import_util_retry3.DEFAULT_RETRY_DELAY_BASE,
                attempts
              );
              const delayFromResponse = getDelayFromRetryAfterHeader(err.$response);
              const delay = Math.max(delayFromResponse || 0, delayFromDecider);
              totalDelay += delay;
              await new Promise((resolve) => setTimeout(resolve, delay));
              continue;
            }
            if (!err.$metadata) {
              err.$metadata = {};
            }
            err.$metadata.attempts = attempts;
            err.$metadata.totalRetryDelay = totalDelay;
            throw err;
          }
        }
      }
    };
    var getDelayFromRetryAfterHeader = __name2((response) => {
      if (!import_protocol_http15.HttpResponse.isInstance(response))
        return;
      const retryAfterHeaderName = Object.keys(response.headers).find((key) => key.toLowerCase() === "retry-after");
      if (!retryAfterHeaderName)
        return;
      const retryAfter = response.headers[retryAfterHeaderName];
      const retryAfterSeconds = Number(retryAfter);
      if (!Number.isNaN(retryAfterSeconds))
        return retryAfterSeconds * 1e3;
      const retryAfterDate = new Date(retryAfter);
      return retryAfterDate.getTime() - Date.now();
    }, "getDelayFromRetryAfterHeader");
    var AdaptiveRetryStrategy = class extends StandardRetryStrategy {
      static {
        __name(this, "AdaptiveRetryStrategy");
      }
      static {
        __name2(this, "AdaptiveRetryStrategy");
      }
      constructor(maxAttemptsProvider, options) {
        const { rateLimiter, ...superOptions } = options ?? {};
        super(maxAttemptsProvider, superOptions);
        this.rateLimiter = rateLimiter ?? new import_util_retry3.DefaultRateLimiter();
        this.mode = import_util_retry3.RETRY_MODES.ADAPTIVE;
      }
      async retry(next, args) {
        return super.retry(next, args, {
          beforeRequest: /* @__PURE__ */ __name(async () => {
            return this.rateLimiter.getSendToken();
          }, "beforeRequest"),
          afterRequest: /* @__PURE__ */ __name((response) => {
            this.rateLimiter.updateClientSendingRate(response);
          }, "afterRequest")
        });
      }
    };
    var import_util_middleware7 = require_dist_cjs17();
    var ENV_MAX_ATTEMPTS = "AWS_MAX_ATTEMPTS";
    var CONFIG_MAX_ATTEMPTS = "max_attempts";
    var NODE_MAX_ATTEMPT_CONFIG_OPTIONS3 = {
      environmentVariableSelector: /* @__PURE__ */ __name((env) => {
        const value = env[ENV_MAX_ATTEMPTS];
        if (!value)
          return void 0;
        const maxAttempt = parseInt(value);
        if (Number.isNaN(maxAttempt)) {
          throw new Error(`Environment variable ${ENV_MAX_ATTEMPTS} mast be a number, got "${value}"`);
        }
        return maxAttempt;
      }, "environmentVariableSelector"),
      configFileSelector: /* @__PURE__ */ __name((profile) => {
        const value = profile[CONFIG_MAX_ATTEMPTS];
        if (!value)
          return void 0;
        const maxAttempt = parseInt(value);
        if (Number.isNaN(maxAttempt)) {
          throw new Error(`Shared config file entry ${CONFIG_MAX_ATTEMPTS} mast be a number, got "${value}"`);
        }
        return maxAttempt;
      }, "configFileSelector"),
      default: import_util_retry3.DEFAULT_MAX_ATTEMPTS
    };
    var resolveRetryConfig3 = __name2((input) => {
      const { retryStrategy, retryMode: _retryMode, maxAttempts: _maxAttempts } = input;
      const maxAttempts = (0, import_util_middleware7.normalizeProvider)(_maxAttempts ?? import_util_retry3.DEFAULT_MAX_ATTEMPTS);
      return Object.assign(input, {
        maxAttempts,
        retryStrategy: /* @__PURE__ */ __name(async () => {
          if (retryStrategy) {
            return retryStrategy;
          }
          const retryMode = await (0, import_util_middleware7.normalizeProvider)(_retryMode)();
          if (retryMode === import_util_retry3.RETRY_MODES.ADAPTIVE) {
            return new import_util_retry3.AdaptiveRetryStrategy(maxAttempts);
          }
          return new import_util_retry3.StandardRetryStrategy(maxAttempts);
        }, "retryStrategy")
      });
    }, "resolveRetryConfig");
    var ENV_RETRY_MODE = "AWS_RETRY_MODE";
    var CONFIG_RETRY_MODE = "retry_mode";
    var NODE_RETRY_MODE_CONFIG_OPTIONS3 = {
      environmentVariableSelector: /* @__PURE__ */ __name((env) => env[ENV_RETRY_MODE], "environmentVariableSelector"),
      configFileSelector: /* @__PURE__ */ __name((profile) => profile[CONFIG_RETRY_MODE], "configFileSelector"),
      default: import_util_retry3.DEFAULT_RETRY_MODE
    };
    var omitRetryHeadersMiddleware = __name2(() => (next) => async (args) => {
      const { request } = args;
      if (import_protocol_http15.HttpRequest.isInstance(request)) {
        delete request.headers[import_util_retry3.INVOCATION_ID_HEADER];
        delete request.headers[import_util_retry3.REQUEST_HEADER];
      }
      return next(args);
    }, "omitRetryHeadersMiddleware");
    var omitRetryHeadersMiddlewareOptions = {
      name: "omitRetryHeadersMiddleware",
      tags: ["RETRY", "HEADERS", "OMIT_RETRY_HEADERS"],
      relation: "before",
      toMiddleware: "awsAuthMiddleware",
      override: true
    };
    var getOmitRetryHeadersPlugin = __name2((options) => ({
      applyToStack: /* @__PURE__ */ __name((clientStack) => {
        clientStack.addRelativeTo(omitRetryHeadersMiddleware(), omitRetryHeadersMiddlewareOptions);
      }, "applyToStack")
    }), "getOmitRetryHeadersPlugin");
    var import_smithy_client25 = require_dist_cjs18();
    var import_isStreamingPayload = require_isStreamingPayload();
    var retryMiddleware = __name2((options) => (next, context) => async (args) => {
      let retryStrategy = await options.retryStrategy();
      const maxAttempts = await options.maxAttempts();
      if (isRetryStrategyV2(retryStrategy)) {
        retryStrategy = retryStrategy;
        let retryToken = await retryStrategy.acquireInitialRetryToken(context["partition_id"]);
        let lastError = new Error();
        let attempts = 0;
        let totalRetryDelay = 0;
        const { request } = args;
        const isRequest = import_protocol_http15.HttpRequest.isInstance(request);
        if (isRequest) {
          request.headers[import_util_retry3.INVOCATION_ID_HEADER] = (0, import_uuid.v4)();
        }
        while (true) {
          try {
            if (isRequest) {
              request.headers[import_util_retry3.REQUEST_HEADER] = `attempt=${attempts + 1}; max=${maxAttempts}`;
            }
            const { response, output } = await next(args);
            retryStrategy.recordSuccess(retryToken);
            output.$metadata.attempts = attempts + 1;
            output.$metadata.totalRetryDelay = totalRetryDelay;
            return { response, output };
          } catch (e3) {
            const retryErrorInfo = getRetryErrorInfo(e3);
            lastError = asSdkError(e3);
            if (isRequest && (0, import_isStreamingPayload.isStreamingPayload)(request)) {
              (context.logger instanceof import_smithy_client25.NoOpLogger ? console : context.logger)?.warn(
                "An error was encountered in a non-retryable streaming request."
              );
              throw lastError;
            }
            try {
              retryToken = await retryStrategy.refreshRetryTokenForRetry(retryToken, retryErrorInfo);
            } catch (refreshError) {
              if (!lastError.$metadata) {
                lastError.$metadata = {};
              }
              lastError.$metadata.attempts = attempts + 1;
              lastError.$metadata.totalRetryDelay = totalRetryDelay;
              throw lastError;
            }
            attempts = retryToken.getRetryCount();
            const delay = retryToken.getRetryDelay();
            totalRetryDelay += delay;
            await new Promise((resolve) => setTimeout(resolve, delay));
          }
        }
      } else {
        retryStrategy = retryStrategy;
        if (retryStrategy?.mode)
          context.userAgent = [...context.userAgent || [], ["cfg/retry-mode", retryStrategy.mode]];
        return retryStrategy.retry(next, args);
      }
    }, "retryMiddleware");
    var isRetryStrategyV2 = __name2((retryStrategy) => typeof retryStrategy.acquireInitialRetryToken !== "undefined" && typeof retryStrategy.refreshRetryTokenForRetry !== "undefined" && typeof retryStrategy.recordSuccess !== "undefined", "isRetryStrategyV2");
    var getRetryErrorInfo = __name2((error2) => {
      const errorInfo = {
        error: error2,
        errorType: getRetryErrorType(error2)
      };
      const retryAfterHint = getRetryAfterHint(error2.$response);
      if (retryAfterHint) {
        errorInfo.retryAfterHint = retryAfterHint;
      }
      return errorInfo;
    }, "getRetryErrorInfo");
    var getRetryErrorType = __name2((error2) => {
      if ((0, import_service_error_classification.isThrottlingError)(error2))
        return "THROTTLING";
      if ((0, import_service_error_classification.isTransientError)(error2))
        return "TRANSIENT";
      if ((0, import_service_error_classification.isServerError)(error2))
        return "SERVER_ERROR";
      return "CLIENT_ERROR";
    }, "getRetryErrorType");
    var retryMiddlewareOptions = {
      name: "retryMiddleware",
      tags: ["RETRY"],
      step: "finalizeRequest",
      priority: "high",
      override: true
    };
    var getRetryPlugin3 = __name2((options) => ({
      applyToStack: /* @__PURE__ */ __name((clientStack) => {
        clientStack.add(retryMiddleware(options), retryMiddlewareOptions);
      }, "applyToStack")
    }), "getRetryPlugin");
    var getRetryAfterHint = __name2((response) => {
      if (!import_protocol_http15.HttpResponse.isInstance(response))
        return;
      const retryAfterHeaderName = Object.keys(response.headers).find((key) => key.toLowerCase() === "retry-after");
      if (!retryAfterHeaderName)
        return;
      const retryAfter = response.headers[retryAfterHeaderName];
      const retryAfterSeconds = Number(retryAfter);
      if (!Number.isNaN(retryAfterSeconds))
        return new Date(retryAfterSeconds * 1e3);
      const retryAfterDate = new Date(retryAfter);
      return retryAfterDate;
    }, "getRetryAfterHint");
  }
});

// ../../node_modules/.pnpm/@aws-sdk+client-sqs@3.821.0/node_modules/@aws-sdk/client-sqs/dist-cjs/auth/httpAuthSchemeProvider.js
var require_httpAuthSchemeProvider = __commonJS({
  "../../node_modules/.pnpm/@aws-sdk+client-sqs@3.821.0/node_modules/@aws-sdk/client-sqs/dist-cjs/auth/httpAuthSchemeProvider.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.resolveHttpAuthSchemeConfig = exports2.defaultSQSHttpAuthSchemeProvider = exports2.defaultSQSHttpAuthSchemeParametersProvider = void 0;
    var core_1 = (init_dist_es2(), __toCommonJS(dist_es_exports2));
    var util_middleware_1 = require_dist_cjs17();
    var defaultSQSHttpAuthSchemeParametersProvider = /* @__PURE__ */ __name(async (config, context, input) => {
      return {
        operation: (0, util_middleware_1.getSmithyContext)(context).operation,
        region: await (0, util_middleware_1.normalizeProvider)(config.region)() || (() => {
          throw new Error("expected `region` to be configured for `aws.auth#sigv4`");
        })()
      };
    }, "defaultSQSHttpAuthSchemeParametersProvider");
    exports2.defaultSQSHttpAuthSchemeParametersProvider = defaultSQSHttpAuthSchemeParametersProvider;
    function createAwsAuthSigv4HttpAuthOption3(authParameters) {
      return {
        schemeId: "aws.auth#sigv4",
        signingProperties: {
          name: "sqs",
          region: authParameters.region
        },
        propertiesExtractor: /* @__PURE__ */ __name((config, context) => ({
          signingProperties: {
            config,
            context
          }
        }), "propertiesExtractor")
      };
    }
    __name(createAwsAuthSigv4HttpAuthOption3, "createAwsAuthSigv4HttpAuthOption");
    var defaultSQSHttpAuthSchemeProvider = /* @__PURE__ */ __name((authParameters) => {
      const options = [];
      switch (authParameters.operation) {
        default: {
          options.push(createAwsAuthSigv4HttpAuthOption3(authParameters));
        }
      }
      return options;
    }, "defaultSQSHttpAuthSchemeProvider");
    exports2.defaultSQSHttpAuthSchemeProvider = defaultSQSHttpAuthSchemeProvider;
    var resolveHttpAuthSchemeConfig3 = /* @__PURE__ */ __name((config) => {
      const config_0 = (0, core_1.resolveAwsSdkSigV4Config)(config);
      return Object.assign(config_0, {
        authSchemePreference: (0, util_middleware_1.normalizeProvider)(config.authSchemePreference ?? [])
      });
    }, "resolveHttpAuthSchemeConfig");
    exports2.resolveHttpAuthSchemeConfig = resolveHttpAuthSchemeConfig3;
  }
});

// ../../node_modules/.pnpm/tslib@2.6.2/node_modules/tslib/tslib.es6.mjs
var tslib_es6_exports = {};
__export(tslib_es6_exports, {
  __addDisposableResource: () => __addDisposableResource,
  __assign: () => __assign,
  __asyncDelegator: () => __asyncDelegator,
  __asyncGenerator: () => __asyncGenerator,
  __asyncValues: () => __asyncValues,
  __await: () => __await,
  __awaiter: () => __awaiter,
  __classPrivateFieldGet: () => __classPrivateFieldGet,
  __classPrivateFieldIn: () => __classPrivateFieldIn,
  __classPrivateFieldSet: () => __classPrivateFieldSet,
  __createBinding: () => __createBinding,
  __decorate: () => __decorate,
  __disposeResources: () => __disposeResources,
  __esDecorate: () => __esDecorate,
  __exportStar: () => __exportStar,
  __extends: () => __extends,
  __generator: () => __generator,
  __importDefault: () => __importDefault,
  __importStar: () => __importStar,
  __makeTemplateObject: () => __makeTemplateObject,
  __metadata: () => __metadata,
  __param: () => __param,
  __propKey: () => __propKey,
  __read: () => __read,
  __rest: () => __rest,
  __runInitializers: () => __runInitializers,
  __setFunctionName: () => __setFunctionName,
  __spread: () => __spread,
  __spreadArray: () => __spreadArray,
  __spreadArrays: () => __spreadArrays,
  __values: () => __values,
  default: () => tslib_es6_default
});
function __extends(d3, b3) {
  if (typeof b3 !== "function" && b3 !== null)
    throw new TypeError("Class extends value " + String(b3) + " is not a constructor or null");
  extendStatics(d3, b3);
  function __() {
    this.constructor = d3;
  }
  __name(__, "__");
  d3.prototype = b3 === null ? Object.create(b3) : (__.prototype = b3.prototype, new __());
}
function __rest(s3, e3) {
  var t3 = {};
  for (var p3 in s3) if (Object.prototype.hasOwnProperty.call(s3, p3) && e3.indexOf(p3) < 0)
    t3[p3] = s3[p3];
  if (s3 != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i3 = 0, p3 = Object.getOwnPropertySymbols(s3); i3 < p3.length; i3++) {
      if (e3.indexOf(p3[i3]) < 0 && Object.prototype.propertyIsEnumerable.call(s3, p3[i3]))
        t3[p3[i3]] = s3[p3[i3]];
    }
  return t3;
}
function __decorate(decorators, target, key, desc) {
  var c3 = arguments.length, r3 = c3 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d3;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r3 = Reflect.decorate(decorators, target, key, desc);
  else for (var i3 = decorators.length - 1; i3 >= 0; i3--) if (d3 = decorators[i3]) r3 = (c3 < 3 ? d3(r3) : c3 > 3 ? d3(target, key, r3) : d3(target, key)) || r3;
  return c3 > 3 && r3 && Object.defineProperty(target, key, r3), r3;
}
function __param(paramIndex, decorator) {
  return function(target, key) {
    decorator(target, key, paramIndex);
  };
}
function __esDecorate(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
  function accept(f3) {
    if (f3 !== void 0 && typeof f3 !== "function") throw new TypeError("Function expected");
    return f3;
  }
  __name(accept, "accept");
  var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
  var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
  var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
  var _2, done = false;
  for (var i3 = decorators.length - 1; i3 >= 0; i3--) {
    var context = {};
    for (var p3 in contextIn) context[p3] = p3 === "access" ? {} : contextIn[p3];
    for (var p3 in contextIn.access) context.access[p3] = contextIn.access[p3];
    context.addInitializer = function(f3) {
      if (done) throw new TypeError("Cannot add initializers after decoration has completed");
      extraInitializers.push(accept(f3 || null));
    };
    var result = (0, decorators[i3])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
    if (kind === "accessor") {
      if (result === void 0) continue;
      if (result === null || typeof result !== "object") throw new TypeError("Object expected");
      if (_2 = accept(result.get)) descriptor.get = _2;
      if (_2 = accept(result.set)) descriptor.set = _2;
      if (_2 = accept(result.init)) initializers.unshift(_2);
    } else if (_2 = accept(result)) {
      if (kind === "field") initializers.unshift(_2);
      else descriptor[key] = _2;
    }
  }
  if (target) Object.defineProperty(target, contextIn.name, descriptor);
  done = true;
}
function __runInitializers(thisArg, initializers, value) {
  var useValue = arguments.length > 2;
  for (var i3 = 0; i3 < initializers.length; i3++) {
    value = useValue ? initializers[i3].call(thisArg, value) : initializers[i3].call(thisArg);
  }
  return useValue ? value : void 0;
}
function __propKey(x3) {
  return typeof x3 === "symbol" ? x3 : "".concat(x3);
}
function __setFunctionName(f3, name, prefix) {
  if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
  return Object.defineProperty(f3, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
}
function __metadata(metadataKey, metadataValue) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}
function __awaiter(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  __name(adopt, "adopt");
  return new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e3) {
        reject(e3);
      }
    }
    __name(fulfilled, "fulfilled");
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e3) {
        reject(e3);
      }
    }
    __name(rejected, "rejected");
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    __name(step, "step");
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}
function __generator(thisArg, body) {
  var _2 = { label: 0, sent: /* @__PURE__ */ __name(function() {
    if (t3[0] & 1) throw t3[1];
    return t3[1];
  }, "sent"), trys: [], ops: [] }, f3, y2, t3, g3;
  return g3 = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g3[Symbol.iterator] = function() {
    return this;
  }), g3;
  function verb(n3) {
    return function(v6) {
      return step([n3, v6]);
    };
  }
  __name(verb, "verb");
  function step(op2) {
    if (f3) throw new TypeError("Generator is already executing.");
    while (g3 && (g3 = 0, op2[0] && (_2 = 0)), _2) try {
      if (f3 = 1, y2 && (t3 = op2[0] & 2 ? y2["return"] : op2[0] ? y2["throw"] || ((t3 = y2["return"]) && t3.call(y2), 0) : y2.next) && !(t3 = t3.call(y2, op2[1])).done) return t3;
      if (y2 = 0, t3) op2 = [op2[0] & 2, t3.value];
      switch (op2[0]) {
        case 0:
        case 1:
          t3 = op2;
          break;
        case 4:
          _2.label++;
          return { value: op2[1], done: false };
        case 5:
          _2.label++;
          y2 = op2[1];
          op2 = [0];
          continue;
        case 7:
          op2 = _2.ops.pop();
          _2.trys.pop();
          continue;
        default:
          if (!(t3 = _2.trys, t3 = t3.length > 0 && t3[t3.length - 1]) && (op2[0] === 6 || op2[0] === 2)) {
            _2 = 0;
            continue;
          }
          if (op2[0] === 3 && (!t3 || op2[1] > t3[0] && op2[1] < t3[3])) {
            _2.label = op2[1];
            break;
          }
          if (op2[0] === 6 && _2.label < t3[1]) {
            _2.label = t3[1];
            t3 = op2;
            break;
          }
          if (t3 && _2.label < t3[2]) {
            _2.label = t3[2];
            _2.ops.push(op2);
            break;
          }
          if (t3[2]) _2.ops.pop();
          _2.trys.pop();
          continue;
      }
      op2 = body.call(thisArg, _2);
    } catch (e3) {
      op2 = [6, e3];
      y2 = 0;
    } finally {
      f3 = t3 = 0;
    }
    if (op2[0] & 5) throw op2[1];
    return { value: op2[0] ? op2[1] : void 0, done: true };
  }
  __name(step, "step");
}
function __exportStar(m3, o3) {
  for (var p3 in m3) if (p3 !== "default" && !Object.prototype.hasOwnProperty.call(o3, p3)) __createBinding(o3, m3, p3);
}
function __values(o3) {
  var s3 = typeof Symbol === "function" && Symbol.iterator, m3 = s3 && o3[s3], i3 = 0;
  if (m3) return m3.call(o3);
  if (o3 && typeof o3.length === "number") return {
    next: /* @__PURE__ */ __name(function() {
      if (o3 && i3 >= o3.length) o3 = void 0;
      return { value: o3 && o3[i3++], done: !o3 };
    }, "next")
  };
  throw new TypeError(s3 ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function __read(o3, n3) {
  var m3 = typeof Symbol === "function" && o3[Symbol.iterator];
  if (!m3) return o3;
  var i3 = m3.call(o3), r3, ar = [], e3;
  try {
    while ((n3 === void 0 || n3-- > 0) && !(r3 = i3.next()).done) ar.push(r3.value);
  } catch (error2) {
    e3 = { error: error2 };
  } finally {
    try {
      if (r3 && !r3.done && (m3 = i3["return"])) m3.call(i3);
    } finally {
      if (e3) throw e3.error;
    }
  }
  return ar;
}
function __spread() {
  for (var ar = [], i3 = 0; i3 < arguments.length; i3++)
    ar = ar.concat(__read(arguments[i3]));
  return ar;
}
function __spreadArrays() {
  for (var s3 = 0, i3 = 0, il = arguments.length; i3 < il; i3++) s3 += arguments[i3].length;
  for (var r3 = Array(s3), k3 = 0, i3 = 0; i3 < il; i3++)
    for (var a3 = arguments[i3], j3 = 0, jl = a3.length; j3 < jl; j3++, k3++)
      r3[k3] = a3[j3];
  return r3;
}
function __spreadArray(to, from, pack) {
  if (pack || arguments.length === 2) for (var i3 = 0, l3 = from.length, ar; i3 < l3; i3++) {
    if (ar || !(i3 in from)) {
      if (!ar) ar = Array.prototype.slice.call(from, 0, i3);
      ar[i3] = from[i3];
    }
  }
  return to.concat(ar || Array.prototype.slice.call(from));
}
function __await(v6) {
  return this instanceof __await ? (this.v = v6, this) : new __await(v6);
}
function __asyncGenerator(thisArg, _arguments, generator) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var g3 = generator.apply(thisArg, _arguments || []), i3, q3 = [];
  return i3 = {}, verb("next"), verb("throw"), verb("return"), i3[Symbol.asyncIterator] = function() {
    return this;
  }, i3;
  function verb(n3) {
    if (g3[n3]) i3[n3] = function(v6) {
      return new Promise(function(a3, b3) {
        q3.push([n3, v6, a3, b3]) > 1 || resume(n3, v6);
      });
    };
  }
  __name(verb, "verb");
  function resume(n3, v6) {
    try {
      step(g3[n3](v6));
    } catch (e3) {
      settle(q3[0][3], e3);
    }
  }
  __name(resume, "resume");
  function step(r3) {
    r3.value instanceof __await ? Promise.resolve(r3.value.v).then(fulfill, reject) : settle(q3[0][2], r3);
  }
  __name(step, "step");
  function fulfill(value) {
    resume("next", value);
  }
  __name(fulfill, "fulfill");
  function reject(value) {
    resume("throw", value);
  }
  __name(reject, "reject");
  function settle(f3, v6) {
    if (f3(v6), q3.shift(), q3.length) resume(q3[0][0], q3[0][1]);
  }
  __name(settle, "settle");
}
function __asyncDelegator(o3) {
  var i3, p3;
  return i3 = {}, verb("next"), verb("throw", function(e3) {
    throw e3;
  }), verb("return"), i3[Symbol.iterator] = function() {
    return this;
  }, i3;
  function verb(n3, f3) {
    i3[n3] = o3[n3] ? function(v6) {
      return (p3 = !p3) ? { value: __await(o3[n3](v6)), done: false } : f3 ? f3(v6) : v6;
    } : f3;
  }
  __name(verb, "verb");
}
function __asyncValues(o3) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var m3 = o3[Symbol.asyncIterator], i3;
  return m3 ? m3.call(o3) : (o3 = typeof __values === "function" ? __values(o3) : o3[Symbol.iterator](), i3 = {}, verb("next"), verb("throw"), verb("return"), i3[Symbol.asyncIterator] = function() {
    return this;
  }, i3);
  function verb(n3) {
    i3[n3] = o3[n3] && function(v6) {
      return new Promise(function(resolve, reject) {
        v6 = o3[n3](v6), settle(resolve, reject, v6.done, v6.value);
      });
    };
  }
  __name(verb, "verb");
  function settle(resolve, reject, d3, v6) {
    Promise.resolve(v6).then(function(v7) {
      resolve({ value: v7, done: d3 });
    }, reject);
  }
  __name(settle, "settle");
}
function __makeTemplateObject(cooked, raw) {
  if (Object.defineProperty) {
    Object.defineProperty(cooked, "raw", { value: raw });
  } else {
    cooked.raw = raw;
  }
  return cooked;
}
function __importStar(mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) {
    for (var k3 in mod) if (k3 !== "default" && Object.prototype.hasOwnProperty.call(mod, k3)) __createBinding(result, mod, k3);
  }
  __setModuleDefault(result, mod);
  return result;
}
function __importDefault(mod) {
  return mod && mod.__esModule ? mod : { default: mod };
}
function __classPrivateFieldGet(receiver, state2, kind, f3) {
  if (kind === "a" && !f3) throw new TypeError("Private accessor was defined without a getter");
  if (typeof state2 === "function" ? receiver !== state2 || !f3 : !state2.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return kind === "m" ? f3 : kind === "a" ? f3.call(receiver) : f3 ? f3.value : state2.get(receiver);
}
function __classPrivateFieldSet(receiver, state2, value, kind, f3) {
  if (kind === "m") throw new TypeError("Private method is not writable");
  if (kind === "a" && !f3) throw new TypeError("Private accessor was defined without a setter");
  if (typeof state2 === "function" ? receiver !== state2 || !f3 : !state2.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return kind === "a" ? f3.call(receiver, value) : f3 ? f3.value = value : state2.set(receiver, value), value;
}
function __classPrivateFieldIn(state2, receiver) {
  if (receiver === null || typeof receiver !== "object" && typeof receiver !== "function") throw new TypeError("Cannot use 'in' operator on non-object");
  return typeof state2 === "function" ? receiver === state2 : state2.has(receiver);
}
function __addDisposableResource(env, value, async) {
  if (value !== null && value !== void 0) {
    if (typeof value !== "object" && typeof value !== "function") throw new TypeError("Object expected.");
    var dispose;
    if (async) {
      if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
      dispose = value[Symbol.asyncDispose];
    }
    if (dispose === void 0) {
      if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
      dispose = value[Symbol.dispose];
    }
    if (typeof dispose !== "function") throw new TypeError("Object not disposable.");
    env.stack.push({ value, dispose, async });
  } else if (async) {
    env.stack.push({ async: true });
  }
  return value;
}
function __disposeResources(env) {
  function fail(e3) {
    env.error = env.hasError ? new _SuppressedError(e3, env.error, "An error was suppressed during disposal.") : e3;
    env.hasError = true;
  }
  __name(fail, "fail");
  function next() {
    while (env.stack.length) {
      var rec = env.stack.pop();
      try {
        var result = rec.dispose && rec.dispose.call(rec.value);
        if (rec.async) return Promise.resolve(result).then(next, function(e3) {
          fail(e3);
          return next();
        });
      } catch (e3) {
        fail(e3);
      }
    }
    if (env.hasError) throw env.error;
  }
  __name(next, "next");
  return next();
}
var extendStatics, __assign, __createBinding, __setModuleDefault, _SuppressedError, tslib_es6_default;
var init_tslib_es6 = __esm({
  "../../node_modules/.pnpm/tslib@2.6.2/node_modules/tslib/tslib.es6.mjs"() {
    extendStatics = /* @__PURE__ */ __name(function(d3, b3) {
      extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d4, b4) {
        d4.__proto__ = b4;
      } || function(d4, b4) {
        for (var p3 in b4) if (Object.prototype.hasOwnProperty.call(b4, p3)) d4[p3] = b4[p3];
      };
      return extendStatics(d3, b3);
    }, "extendStatics");
    __name(__extends, "__extends");
    __assign = /* @__PURE__ */ __name(function() {
      __assign = Object.assign || /* @__PURE__ */ __name(function __assign2(t3) {
        for (var s3, i3 = 1, n3 = arguments.length; i3 < n3; i3++) {
          s3 = arguments[i3];
          for (var p3 in s3) if (Object.prototype.hasOwnProperty.call(s3, p3)) t3[p3] = s3[p3];
        }
        return t3;
      }, "__assign");
      return __assign.apply(this, arguments);
    }, "__assign");
    __name(__rest, "__rest");
    __name(__decorate, "__decorate");
    __name(__param, "__param");
    __name(__esDecorate, "__esDecorate");
    ;
    __name(__runInitializers, "__runInitializers");
    ;
    __name(__propKey, "__propKey");
    ;
    __name(__setFunctionName, "__setFunctionName");
    ;
    __name(__metadata, "__metadata");
    __name(__awaiter, "__awaiter");
    __name(__generator, "__generator");
    __createBinding = Object.create ? function(o3, m3, k3, k22) {
      if (k22 === void 0) k22 = k3;
      var desc = Object.getOwnPropertyDescriptor(m3, k3);
      if (!desc || ("get" in desc ? !m3.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: /* @__PURE__ */ __name(function() {
          return m3[k3];
        }, "get") };
      }
      Object.defineProperty(o3, k22, desc);
    } : function(o3, m3, k3, k22) {
      if (k22 === void 0) k22 = k3;
      o3[k22] = m3[k3];
    };
    __name(__exportStar, "__exportStar");
    __name(__values, "__values");
    __name(__read, "__read");
    __name(__spread, "__spread");
    __name(__spreadArrays, "__spreadArrays");
    __name(__spreadArray, "__spreadArray");
    __name(__await, "__await");
    __name(__asyncGenerator, "__asyncGenerator");
    __name(__asyncDelegator, "__asyncDelegator");
    __name(__asyncValues, "__asyncValues");
    __name(__makeTemplateObject, "__makeTemplateObject");
    ;
    __setModuleDefault = Object.create ? function(o3, v6) {
      Object.defineProperty(o3, "default", { enumerable: true, value: v6 });
    } : function(o3, v6) {
      o3["default"] = v6;
    };
    __name(__importStar, "__importStar");
    __name(__importDefault, "__importDefault");
    __name(__classPrivateFieldGet, "__classPrivateFieldGet");
    __name(__classPrivateFieldSet, "__classPrivateFieldSet");
    __name(__classPrivateFieldIn, "__classPrivateFieldIn");
    __name(__addDisposableResource, "__addDisposableResource");
    _SuppressedError = typeof SuppressedError === "function" ? SuppressedError : function(error2, suppressed, message) {
      var e3 = new Error(message);
      return e3.name = "SuppressedError", e3.error = error2, e3.suppressed = suppressed, e3;
    };
    __name(__disposeResources, "__disposeResources");
    tslib_es6_default = {
      __extends,
      __assign,
      __rest,
      __decorate,
      __param,
      __metadata,
      __awaiter,
      __generator,
      __createBinding,
      __exportStar,
      __values,
      __read,
      __spread,
      __spreadArrays,
      __spreadArray,
      __await,
      __asyncGenerator,
      __asyncDelegator,
      __asyncValues,
      __makeTemplateObject,
      __importStar,
      __importDefault,
      __classPrivateFieldGet,
      __classPrivateFieldSet,
      __classPrivateFieldIn,
      __addDisposableResource,
      __disposeResources
    };
  }
});

// ../../node_modules/.pnpm/@aws-sdk+client-sqs@3.821.0/node_modules/@aws-sdk/client-sqs/package.json
var require_package = __commonJS({
  "../../node_modules/.pnpm/@aws-sdk+client-sqs@3.821.0/node_modules/@aws-sdk/client-sqs/package.json"(exports2, module2) {
    module2.exports = {
      name: "@aws-sdk/client-sqs",
      description: "AWS SDK for JavaScript Sqs Client for Node.js, Browser and React Native",
      version: "3.821.0",
      scripts: {
        build: "concurrently 'yarn:build:cjs' 'yarn:build:es' 'yarn:build:types'",
        "build:cjs": "node ../../scripts/compilation/inline client-sqs",
        "build:es": "tsc -p tsconfig.es.json",
        "build:include:deps": "lerna run --scope $npm_package_name --include-dependencies build",
        "build:types": "tsc -p tsconfig.types.json",
        "build:types:downlevel": "downlevel-dts dist-types dist-types/ts3.4",
        clean: "rimraf ./dist-* && rimraf *.tsbuildinfo",
        "extract:docs": "api-extractor run --local",
        "generate:client": "node ../../scripts/generate-clients/single-service --solo sqs"
      },
      main: "./dist-cjs/index.js",
      types: "./dist-types/index.d.ts",
      module: "./dist-es/index.js",
      sideEffects: false,
      dependencies: {
        "@aws-crypto/sha256-browser": "5.2.0",
        "@aws-crypto/sha256-js": "5.2.0",
        "@aws-sdk/core": "3.821.0",
        "@aws-sdk/credential-provider-node": "3.821.0",
        "@aws-sdk/middleware-host-header": "3.821.0",
        "@aws-sdk/middleware-logger": "3.821.0",
        "@aws-sdk/middleware-recursion-detection": "3.821.0",
        "@aws-sdk/middleware-sdk-sqs": "3.821.0",
        "@aws-sdk/middleware-user-agent": "3.821.0",
        "@aws-sdk/region-config-resolver": "3.821.0",
        "@aws-sdk/types": "3.821.0",
        "@aws-sdk/util-endpoints": "3.821.0",
        "@aws-sdk/util-user-agent-browser": "3.821.0",
        "@aws-sdk/util-user-agent-node": "3.821.0",
        "@smithy/config-resolver": "^4.1.4",
        "@smithy/core": "^3.5.1",
        "@smithy/fetch-http-handler": "^5.0.4",
        "@smithy/hash-node": "^4.0.4",
        "@smithy/invalid-dependency": "^4.0.4",
        "@smithy/md5-js": "^4.0.4",
        "@smithy/middleware-content-length": "^4.0.4",
        "@smithy/middleware-endpoint": "^4.1.9",
        "@smithy/middleware-retry": "^4.1.10",
        "@smithy/middleware-serde": "^4.0.8",
        "@smithy/middleware-stack": "^4.0.4",
        "@smithy/node-config-provider": "^4.1.3",
        "@smithy/node-http-handler": "^4.0.6",
        "@smithy/protocol-http": "^5.1.2",
        "@smithy/smithy-client": "^4.4.1",
        "@smithy/types": "^4.3.1",
        "@smithy/url-parser": "^4.0.4",
        "@smithy/util-base64": "^4.0.0",
        "@smithy/util-body-length-browser": "^4.0.0",
        "@smithy/util-body-length-node": "^4.0.0",
        "@smithy/util-defaults-mode-browser": "^4.0.17",
        "@smithy/util-defaults-mode-node": "^4.0.17",
        "@smithy/util-endpoints": "^3.0.6",
        "@smithy/util-middleware": "^4.0.4",
        "@smithy/util-retry": "^4.0.5",
        "@smithy/util-utf8": "^4.0.0",
        tslib: "^2.6.2"
      },
      devDependencies: {
        "@tsconfig/node18": "18.2.4",
        "@types/node": "^18.19.69",
        concurrently: "7.0.0",
        "downlevel-dts": "0.10.1",
        rimraf: "3.0.2",
        typescript: "~5.8.3"
      },
      engines: {
        node: ">=18.0.0"
      },
      typesVersions: {
        "<4.0": {
          "dist-types/*": [
            "dist-types/ts3.4/*"
          ]
        }
      },
      files: [
        "dist-*/**"
      ],
      author: {
        name: "AWS SDK for JavaScript Team",
        url: "https://aws.amazon.com/javascript/"
      },
      license: "Apache-2.0",
      browser: {
        "./dist-es/runtimeConfig": "./dist-es/runtimeConfig.browser"
      },
      "react-native": {
        "./dist-es/runtimeConfig": "./dist-es/runtimeConfig.native"
      },
      homepage: "https://github.com/aws/aws-sdk-js-v3/tree/main/clients/client-sqs",
      repository: {
        type: "git",
        url: "https://github.com/aws/aws-sdk-js-v3.git",
        directory: "clients/client-sqs"
      }
    };
  }
});

// ../../node_modules/.pnpm/@aws-sdk+credential-provider-env@3.821.0/node_modules/@aws-sdk/credential-provider-env/dist-cjs/index.js
var require_dist_cjs37 = __commonJS({
  "../../node_modules/.pnpm/@aws-sdk+credential-provider-env@3.821.0/node_modules/@aws-sdk/credential-provider-env/dist-cjs/index.js"(exports2, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __name2 = /* @__PURE__ */ __name((target, value) => __defProp2(target, "name", { value, configurable: true }), "__name");
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: /* @__PURE__ */ __name(() => from[key], "get"), enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var index_exports = {};
    __export2(index_exports, {
      ENV_ACCOUNT_ID: /* @__PURE__ */ __name(() => ENV_ACCOUNT_ID, "ENV_ACCOUNT_ID"),
      ENV_CREDENTIAL_SCOPE: /* @__PURE__ */ __name(() => ENV_CREDENTIAL_SCOPE, "ENV_CREDENTIAL_SCOPE"),
      ENV_EXPIRATION: /* @__PURE__ */ __name(() => ENV_EXPIRATION, "ENV_EXPIRATION"),
      ENV_KEY: /* @__PURE__ */ __name(() => ENV_KEY, "ENV_KEY"),
      ENV_SECRET: /* @__PURE__ */ __name(() => ENV_SECRET, "ENV_SECRET"),
      ENV_SESSION: /* @__PURE__ */ __name(() => ENV_SESSION, "ENV_SESSION"),
      fromEnv: /* @__PURE__ */ __name(() => fromEnv, "fromEnv")
    });
    module2.exports = __toCommonJS2(index_exports);
    var import_client3 = (init_client(), __toCommonJS(client_exports));
    var import_property_provider2 = require_dist_cjs23();
    var ENV_KEY = "AWS_ACCESS_KEY_ID";
    var ENV_SECRET = "AWS_SECRET_ACCESS_KEY";
    var ENV_SESSION = "AWS_SESSION_TOKEN";
    var ENV_EXPIRATION = "AWS_CREDENTIAL_EXPIRATION";
    var ENV_CREDENTIAL_SCOPE = "AWS_CREDENTIAL_SCOPE";
    var ENV_ACCOUNT_ID = "AWS_ACCOUNT_ID";
    var fromEnv = __name2((init) => async () => {
      init?.logger?.debug("@aws-sdk/credential-provider-env - fromEnv");
      const accessKeyId = process.env[ENV_KEY];
      const secretAccessKey = process.env[ENV_SECRET];
      const sessionToken = process.env[ENV_SESSION];
      const expiry = process.env[ENV_EXPIRATION];
      const credentialScope = process.env[ENV_CREDENTIAL_SCOPE];
      const accountId = process.env[ENV_ACCOUNT_ID];
      if (accessKeyId && secretAccessKey) {
        const credentials = {
          accessKeyId,
          secretAccessKey,
          ...sessionToken && { sessionToken },
          ...expiry && { expiration: new Date(expiry) },
          ...credentialScope && { credentialScope },
          ...accountId && { accountId }
        };
        (0, import_client3.setCredentialFeature)(credentials, "CREDENTIALS_ENV_VARS", "g");
        return credentials;
      }
      throw new import_property_provider2.CredentialsProviderError("Unable to find environment variable credentials.", { logger: init?.logger });
    }, "fromEnv");
  }
});

// ../../node_modules/.pnpm/@smithy+credential-provider-imds@4.0.6/node_modules/@smithy/credential-provider-imds/dist-cjs/index.js
var require_dist_cjs38 = __commonJS({
  "../../node_modules/.pnpm/@smithy+credential-provider-imds@4.0.6/node_modules/@smithy/credential-provider-imds/dist-cjs/index.js"(exports2, module2) {
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __name2 = /* @__PURE__ */ __name((target, value) => __defProp2(target, "name", { value, configurable: true }), "__name");
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: /* @__PURE__ */ __name(() => from[key], "get"), enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var src_exports = {};
    __export2(src_exports, {
      DEFAULT_MAX_RETRIES: /* @__PURE__ */ __name(() => DEFAULT_MAX_RETRIES, "DEFAULT_MAX_RETRIES"),
      DEFAULT_TIMEOUT: /* @__PURE__ */ __name(() => DEFAULT_TIMEOUT, "DEFAULT_TIMEOUT"),
      ENV_CMDS_AUTH_TOKEN: /* @__PURE__ */ __name(() => ENV_CMDS_AUTH_TOKEN, "ENV_CMDS_AUTH_TOKEN"),
      ENV_CMDS_FULL_URI: /* @__PURE__ */ __name(() => ENV_CMDS_FULL_URI, "ENV_CMDS_FULL_URI"),
      ENV_CMDS_RELATIVE_URI: /* @__PURE__ */ __name(() => ENV_CMDS_RELATIVE_URI, "ENV_CMDS_RELATIVE_URI"),
      Endpoint: /* @__PURE__ */ __name(() => Endpoint, "Endpoint"),
      fromContainerMetadata: /* @__PURE__ */ __name(() => fromContainerMetadata, "fromContainerMetadata"),
      fromInstanceMetadata: /* @__PURE__ */ __name(() => fromInstanceMetadata, "fromInstanceMetadata"),
      getInstanceMetadataEndpoint: /* @__PURE__ */ __name(() => getInstanceMetadataEndpoint, "getInstanceMetadataEndpoint"),
      httpRequest: /* @__PURE__ */ __name(() => httpRequest, "httpRequest"),
      providerConfigFromInit: /* @__PURE__ */ __name(() => providerConfigFromInit, "providerConfigFromInit")
    });
    module2.exports = __toCommonJS2(src_exports);
    var import_url = require("url");
    var import_property_provider2 = require_dist_cjs23();
    var import_buffer = require("buffer");
    var import_http = require("http");
    function httpRequest(options) {
      return new Promise((resolve, reject) => {
        const req = (0, import_http.request)({
          method: "GET",
          ...options,
          // Node.js http module doesn't accept hostname with square brackets
          // Refs: https://github.com/nodejs/node/issues/39738
          hostname: options.hostname?.replace(/^\[(.+)\]$/, "$1")
        });
        req.on("error", (err) => {
          reject(Object.assign(new import_property_provider2.ProviderError("Unable to connect to instance metadata service"), err));
          req.destroy();
        });
        req.on("timeout", () => {
          reject(new import_property_provider2.ProviderError("TimeoutError from instance metadata service"));
          req.destroy();
        });
        req.on("response", (res) => {
          const { statusCode = 400 } = res;
          if (statusCode < 200 || 300 <= statusCode) {
            reject(
              Object.assign(new import_property_provider2.ProviderError("Error response received from instance metadata service"), { statusCode })
            );
            req.destroy();
          }
          const chunks = [];
          res.on("data", (chunk) => {
            chunks.push(chunk);
          });
          res.on("end", () => {
            resolve(import_buffer.Buffer.concat(chunks));
            req.destroy();
          });
        });
        req.end();
      });
    }
    __name(httpRequest, "httpRequest");
    __name2(httpRequest, "httpRequest");
    var isImdsCredentials = __name2((arg) => Boolean(arg) && typeof arg === "object" && typeof arg.AccessKeyId === "string" && typeof arg.SecretAccessKey === "string" && typeof arg.Token === "string" && typeof arg.Expiration === "string", "isImdsCredentials");
    var fromImdsCredentials = __name2((creds) => ({
      accessKeyId: creds.AccessKeyId,
      secretAccessKey: creds.SecretAccessKey,
      sessionToken: creds.Token,
      expiration: new Date(creds.Expiration),
      ...creds.AccountId && { accountId: creds.AccountId }
    }), "fromImdsCredentials");
    var DEFAULT_TIMEOUT = 1e3;
    var DEFAULT_MAX_RETRIES = 0;
    var providerConfigFromInit = __name2(({
      maxRetries = DEFAULT_MAX_RETRIES,
      timeout = DEFAULT_TIMEOUT
    }) => ({ maxRetries, timeout }), "providerConfigFromInit");
    var retry = __name2((toRetry, maxRetries) => {
      let promise = toRetry();
      for (let i3 = 0; i3 < maxRetries; i3++) {
        promise = promise.catch(toRetry);
      }
      return promise;
    }, "retry");
    var ENV_CMDS_FULL_URI = "AWS_CONTAINER_CREDENTIALS_FULL_URI";
    var ENV_CMDS_RELATIVE_URI = "AWS_CONTAINER_CREDENTIALS_RELATIVE_URI";
    var ENV_CMDS_AUTH_TOKEN = "AWS_CONTAINER_AUTHORIZATION_TOKEN";
    var fromContainerMetadata = __name2((init = {}) => {
      const { timeout, maxRetries } = providerConfigFromInit(init);
      return () => retry(async () => {
        const requestOptions = await getCmdsUri({ logger: init.logger });
        const credsResponse = JSON.parse(await requestFromEcsImds(timeout, requestOptions));
        if (!isImdsCredentials(credsResponse)) {
          throw new import_property_provider2.CredentialsProviderError("Invalid response received from instance metadata service.", {
            logger: init.logger
          });
        }
        return fromImdsCredentials(credsResponse);
      }, maxRetries);
    }, "fromContainerMetadata");
    var requestFromEcsImds = __name2(async (timeout, options) => {
      if (process.env[ENV_CMDS_AUTH_TOKEN]) {
        options.headers = {
          ...options.headers,
          Authorization: process.env[ENV_CMDS_AUTH_TOKEN]
        };
      }
      const buffer = await httpRequest({
        ...options,
        timeout
      });
      return buffer.toString();
    }, "requestFromEcsImds");
    var CMDS_IP = "169.254.170.2";
    var GREENGRASS_HOSTS = {
      localhost: true,
      "127.0.0.1": true
    };
    var GREENGRASS_PROTOCOLS = {
      "http:": true,
      "https:": true
    };
    var getCmdsUri = __name2(async ({ logger: logger3 }) => {
      if (process.env[ENV_CMDS_RELATIVE_URI]) {
        return {
          hostname: CMDS_IP,
          path: process.env[ENV_CMDS_RELATIVE_URI]
        };
      }
      if (process.env[ENV_CMDS_FULL_URI]) {
        const parsed = (0, import_url.parse)(process.env[ENV_CMDS_FULL_URI]);
        if (!parsed.hostname || !(parsed.hostname in GREENGRASS_HOSTS)) {
          throw new import_property_provider2.CredentialsProviderError(`${parsed.hostname} is not a valid container metadata service hostname`, {
            tryNextLink: false,
            logger: logger3
          });
        }
        if (!parsed.protocol || !(parsed.protocol in GREENGRASS_PROTOCOLS)) {
          throw new import_property_provider2.CredentialsProviderError(`${parsed.protocol} is not a valid container metadata service protocol`, {
            tryNextLink: false,
            logger: logger3
          });
        }
        return {
          ...parsed,
          port: parsed.port ? parseInt(parsed.port, 10) : void 0
        };
      }
      throw new import_property_provider2.CredentialsProviderError(
        `The container metadata credential provider cannot be used unless the ${ENV_CMDS_RELATIVE_URI} or ${ENV_CMDS_FULL_URI} environment variable is set`,
        {
          tryNextLink: false,
          logger: logger3
        }
      );
    }, "getCmdsUri");
    var InstanceMetadataV1FallbackError = class _InstanceMetadataV1FallbackError extends import_property_provider2.CredentialsProviderError {
      static {
        __name(this, "_InstanceMetadataV1FallbackError");
      }
      constructor(message, tryNextLink = true) {
        super(message, tryNextLink);
        this.tryNextLink = tryNextLink;
        this.name = "InstanceMetadataV1FallbackError";
        Object.setPrototypeOf(this, _InstanceMetadataV1FallbackError.prototype);
      }
      static {
        __name2(this, "InstanceMetadataV1FallbackError");
      }
    };
    var import_node_config_provider3 = require_dist_cjs30();
    var import_url_parser3 = require_dist_cjs32();
    var Endpoint = ((Endpoint2) => {
      Endpoint2["IPv4"] = "http://169.254.169.254";
      Endpoint2["IPv6"] = "http://[fd00:ec2::254]";
      return Endpoint2;
    })(Endpoint || {});
    var ENV_ENDPOINT_NAME = "AWS_EC2_METADATA_SERVICE_ENDPOINT";
    var CONFIG_ENDPOINT_NAME = "ec2_metadata_service_endpoint";
    var ENDPOINT_CONFIG_OPTIONS = {
      environmentVariableSelector: /* @__PURE__ */ __name((env) => env[ENV_ENDPOINT_NAME], "environmentVariableSelector"),
      configFileSelector: /* @__PURE__ */ __name((profile) => profile[CONFIG_ENDPOINT_NAME], "configFileSelector"),
      default: void 0
    };
    var EndpointMode = ((EndpointMode2) => {
      EndpointMode2["IPv4"] = "IPv4";
      EndpointMode2["IPv6"] = "IPv6";
      return EndpointMode2;
    })(EndpointMode || {});
    var ENV_ENDPOINT_MODE_NAME = "AWS_EC2_METADATA_SERVICE_ENDPOINT_MODE";
    var CONFIG_ENDPOINT_MODE_NAME = "ec2_metadata_service_endpoint_mode";
    var ENDPOINT_MODE_CONFIG_OPTIONS = {
      environmentVariableSelector: /* @__PURE__ */ __name((env) => env[ENV_ENDPOINT_MODE_NAME], "environmentVariableSelector"),
      configFileSelector: /* @__PURE__ */ __name((profile) => profile[CONFIG_ENDPOINT_MODE_NAME], "configFileSelector"),
      default: "IPv4"
      /* IPv4 */
    };
    var getInstanceMetadataEndpoint = __name2(async () => (0, import_url_parser3.parseUrl)(await getFromEndpointConfig() || await getFromEndpointModeConfig()), "getInstanceMetadataEndpoint");
    var getFromEndpointConfig = __name2(async () => (0, import_node_config_provider3.loadConfig)(ENDPOINT_CONFIG_OPTIONS)(), "getFromEndpointConfig");
    var getFromEndpointModeConfig = __name2(async () => {
      const endpointMode = await (0, import_node_config_provider3.loadConfig)(ENDPOINT_MODE_CONFIG_OPTIONS)();
      switch (endpointMode) {
        case "IPv4":
          return "http://169.254.169.254";
        case "IPv6":
          return "http://[fd00:ec2::254]";
        default:
          throw new Error(`Unsupported endpoint mode: ${endpointMode}. Select from ${Object.values(EndpointMode)}`);
      }
    }, "getFromEndpointModeConfig");
    var STATIC_STABILITY_REFRESH_INTERVAL_SECONDS = 5 * 60;
    var STATIC_STABILITY_REFRESH_INTERVAL_JITTER_WINDOW_SECONDS = 5 * 60;
    var STATIC_STABILITY_DOC_URL = "https://docs.aws.amazon.com/sdkref/latest/guide/feature-static-credentials.html";
    var getExtendedInstanceMetadataCredentials = __name2((credentials, logger3) => {
      const refreshInterval = STATIC_STABILITY_REFRESH_INTERVAL_SECONDS + Math.floor(Math.random() * STATIC_STABILITY_REFRESH_INTERVAL_JITTER_WINDOW_SECONDS);
      const newExpiration = new Date(Date.now() + refreshInterval * 1e3);
      logger3.warn(
        `Attempting credential expiration extension due to a credential service availability issue. A refresh of these credentials will be attempted after ${new Date(newExpiration)}.
For more information, please visit: ` + STATIC_STABILITY_DOC_URL
      );
      const originalExpiration = credentials.originalExpiration ?? credentials.expiration;
      return {
        ...credentials,
        ...originalExpiration ? { originalExpiration } : {},
        expiration: newExpiration
      };
    }, "getExtendedInstanceMetadataCredentials");
    var staticStabilityProvider = __name2((provider, options = {}) => {
      const logger3 = options?.logger || console;
      let pastCredentials;
      return async () => {
        let credentials;
        try {
          credentials = await provider();
          if (credentials.expiration && credentials.expiration.getTime() < Date.now()) {
            credentials = getExtendedInstanceMetadataCredentials(credentials, logger3);
          }
        } catch (e3) {
          if (pastCredentials) {
            logger3.warn("Credential renew failed: ", e3);
            credentials = getExtendedInstanceMetadataCredentials(pastCredentials, logger3);
          } else {
            throw e3;
          }
        }
        pastCredentials = credentials;
        return credentials;
      };
    }, "staticStabilityProvider");
    var IMDS_PATH = "/latest/meta-data/iam/security-credentials/";
    var IMDS_TOKEN_PATH = "/latest/api/token";
    var AWS_EC2_METADATA_V1_DISABLED = "AWS_EC2_METADATA_V1_DISABLED";
    var PROFILE_AWS_EC2_METADATA_V1_DISABLED = "ec2_metadata_v1_disabled";
    var X_AWS_EC2_METADATA_TOKEN = "x-aws-ec2-metadata-token";
    var fromInstanceMetadata = __name2((init = {}) => staticStabilityProvider(getInstanceMetadataProvider(init), { logger: init.logger }), "fromInstanceMetadata");
    var getInstanceMetadataProvider = __name2((init = {}) => {
      let disableFetchToken = false;
      const { logger: logger3, profile } = init;
      const { timeout, maxRetries } = providerConfigFromInit(init);
      const getCredentials = __name2(async (maxRetries2, options) => {
        const isImdsV1Fallback = disableFetchToken || options.headers?.[X_AWS_EC2_METADATA_TOKEN] == null;
        if (isImdsV1Fallback) {
          let fallbackBlockedFromProfile = false;
          let fallbackBlockedFromProcessEnv = false;
          const configValue = await (0, import_node_config_provider3.loadConfig)(
            {
              environmentVariableSelector: /* @__PURE__ */ __name((env) => {
                const envValue = env[AWS_EC2_METADATA_V1_DISABLED];
                fallbackBlockedFromProcessEnv = !!envValue && envValue !== "false";
                if (envValue === void 0) {
                  throw new import_property_provider2.CredentialsProviderError(
                    `${AWS_EC2_METADATA_V1_DISABLED} not set in env, checking config file next.`,
                    { logger: init.logger }
                  );
                }
                return fallbackBlockedFromProcessEnv;
              }, "environmentVariableSelector"),
              configFileSelector: /* @__PURE__ */ __name((profile2) => {
                const profileValue = profile2[PROFILE_AWS_EC2_METADATA_V1_DISABLED];
                fallbackBlockedFromProfile = !!profileValue && profileValue !== "false";
                return fallbackBlockedFromProfile;
              }, "configFileSelector"),
              default: false
            },
            {
              profile
            }
          )();
          if (init.ec2MetadataV1Disabled || configValue) {
            const causes = [];
            if (init.ec2MetadataV1Disabled)
              causes.push("credential provider initialization (runtime option ec2MetadataV1Disabled)");
            if (fallbackBlockedFromProfile)
              causes.push(`config file profile (${PROFILE_AWS_EC2_METADATA_V1_DISABLED})`);
            if (fallbackBlockedFromProcessEnv)
              causes.push(`process environment variable (${AWS_EC2_METADATA_V1_DISABLED})`);
            throw new InstanceMetadataV1FallbackError(
              `AWS EC2 Metadata v1 fallback has been blocked by AWS SDK configuration in the following: [${causes.join(
                ", "
              )}].`
            );
          }
        }
        const imdsProfile = (await retry(async () => {
          let profile2;
          try {
            profile2 = await getProfile(options);
          } catch (err) {
            if (err.statusCode === 401) {
              disableFetchToken = false;
            }
            throw err;
          }
          return profile2;
        }, maxRetries2)).trim();
        return retry(async () => {
          let creds;
          try {
            creds = await getCredentialsFromProfile(imdsProfile, options, init);
          } catch (err) {
            if (err.statusCode === 401) {
              disableFetchToken = false;
            }
            throw err;
          }
          return creds;
        }, maxRetries2);
      }, "getCredentials");
      return async () => {
        const endpoint = await getInstanceMetadataEndpoint();
        if (disableFetchToken) {
          logger3?.debug("AWS SDK Instance Metadata", "using v1 fallback (no token fetch)");
          return getCredentials(maxRetries, { ...endpoint, timeout });
        } else {
          let token;
          try {
            token = (await getMetadataToken({ ...endpoint, timeout })).toString();
          } catch (error2) {
            if (error2?.statusCode === 400) {
              throw Object.assign(error2, {
                message: "EC2 Metadata token request returned error"
              });
            } else if (error2.message === "TimeoutError" || [403, 404, 405].includes(error2.statusCode)) {
              disableFetchToken = true;
            }
            logger3?.debug("AWS SDK Instance Metadata", "using v1 fallback (initial)");
            return getCredentials(maxRetries, { ...endpoint, timeout });
          }
          return getCredentials(maxRetries, {
            ...endpoint,
            headers: {
              [X_AWS_EC2_METADATA_TOKEN]: token
            },
            timeout
          });
        }
      };
    }, "getInstanceMetadataProvider");
    var getMetadataToken = __name2(async (options) => httpRequest({
      ...options,
      path: IMDS_TOKEN_PATH,
      method: "PUT",
      headers: {
        "x-aws-ec2-metadata-token-ttl-seconds": "21600"
      }
    }), "getMetadataToken");
    var getProfile = __name2(async (options) => (await httpRequest({ ...options, path: IMDS_PATH })).toString(), "getProfile");
    var getCredentialsFromProfile = __name2(async (profile, options, init) => {
      const credentialsResponse = JSON.parse(
        (await httpRequest({
          ...options,
          path: IMDS_PATH + profile
        })).toString()
      );
      if (!isImdsCredentials(credentialsResponse)) {
        throw new import_property_provider2.CredentialsProviderError("Invalid response received from instance metadata service.", {
          logger: init.logger
        });
      }
      return fromImdsCredentials(credentialsResponse);
    }, "getCredentialsFromProfile");
  }
});

// ../../node_modules/.pnpm/@aws-sdk+credential-provider-http@3.821.0/node_modules/@aws-sdk/credential-provider-http/dist-cjs/fromHttp/checkUrl.js
var require_checkUrl = __commonJS({
  "../../node_modules/.pnpm/@aws-sdk+credential-provider-http@3.821.0/node_modules/@aws-sdk/credential-provider-http/dist-cjs/fromHttp/checkUrl.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.checkUrl = void 0;
    var property_provider_1 = require_dist_cjs23();
    var LOOPBACK_CIDR_IPv4 = "127.0.0.0/8";
    var LOOPBACK_CIDR_IPv6 = "::1/128";
    var ECS_CONTAINER_HOST = "169.254.170.2";
    var EKS_CONTAINER_HOST_IPv4 = "169.254.170.23";
    var EKS_CONTAINER_HOST_IPv6 = "[fd00:ec2::23]";
    var checkUrl = /* @__PURE__ */ __name((url, logger3) => {
      if (url.protocol === "https:") {
        return;
      }
      if (url.hostname === ECS_CONTAINER_HOST || url.hostname === EKS_CONTAINER_HOST_IPv4 || url.hostname === EKS_CONTAINER_HOST_IPv6) {
        return;
      }
      if (url.hostname.includes("[")) {
        if (url.hostname === "[::1]" || url.hostname === "[0000:0000:0000:0000:0000:0000:0000:0001]") {
          return;
        }
      } else {
        if (url.hostname === "localhost") {
          return;
        }
        const ipComponents = url.hostname.split(".");
        const inRange = /* @__PURE__ */ __name((component) => {
          const num = parseInt(component, 10);
          return 0 <= num && num <= 255;
        }, "inRange");
        if (ipComponents[0] === "127" && inRange(ipComponents[1]) && inRange(ipComponents[2]) && inRange(ipComponents[3]) && ipComponents.length === 4) {
          return;
        }
      }
      throw new property_provider_1.CredentialsProviderError(`URL not accepted. It must either be HTTPS or match one of the following:
  - loopback CIDR 127.0.0.0/8 or [::1/128]
  - ECS container host 169.254.170.2
  - EKS container host 169.254.170.23 or [fd00:ec2::23]`, { logger: logger3 });
    }, "checkUrl");
    exports2.checkUrl = checkUrl;
  }
});

// ../../node_modules/.pnpm/@aws-sdk+credential-provider-http@3.821.0/node_modules/@aws-sdk/credential-provider-http/dist-cjs/fromHttp/requestHelpers.js
var require_requestHelpers = __commonJS({
  "../../node_modules/.pnpm/@aws-sdk+credential-provider-http@3.821.0/node_modules/@aws-sdk/credential-provider-http/dist-cjs/fromHttp/requestHelpers.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.createGetRequest = createGetRequest;
    exports2.getCredentials = getCredentials;
    var property_provider_1 = require_dist_cjs23();
    var protocol_http_1 = require_dist_cjs2();
    var smithy_client_1 = require_dist_cjs18();
    var util_stream_1 = require_dist_cjs16();
    function createGetRequest(url) {
      return new protocol_http_1.HttpRequest({
        protocol: url.protocol,
        hostname: url.hostname,
        port: Number(url.port),
        path: url.pathname,
        query: Array.from(url.searchParams.entries()).reduce((acc, [k3, v6]) => {
          acc[k3] = v6;
          return acc;
        }, {}),
        fragment: url.hash
      });
    }
    __name(createGetRequest, "createGetRequest");
    async function getCredentials(response, logger3) {
      const stream = (0, util_stream_1.sdkStreamMixin)(response.body);
      const str = await stream.transformToString();
      if (response.statusCode === 200) {
        const parsed = JSON.parse(str);
        if (typeof parsed.AccessKeyId !== "string" || typeof parsed.SecretAccessKey !== "string" || typeof parsed.Token !== "string" || typeof parsed.Expiration !== "string") {
          throw new property_provider_1.CredentialsProviderError("HTTP credential provider response not of the required format, an object matching: { AccessKeyId: string, SecretAccessKey: string, Token: string, Expiration: string(rfc3339) }", { logger: logger3 });
        }
        return {
          accessKeyId: parsed.AccessKeyId,
          secretAccessKey: parsed.SecretAccessKey,
          sessionToken: parsed.Token,
          expiration: (0, smithy_client_1.parseRfc3339DateTime)(parsed.Expiration)
        };
      }
      if (response.statusCode >= 400 && response.statusCode < 500) {
        let parsedBody = {};
        try {
          parsedBody = JSON.parse(str);
        } catch (e3) {
        }
        throw Object.assign(new property_provider_1.CredentialsProviderError(`Server responded with status: ${response.statusCode}`, { logger: logger3 }), {
          Code: parsedBody.Code,
          Message: parsedBody.Message
        });
      }
      throw new property_provider_1.CredentialsProviderError(`Server responded with status: ${response.statusCode}`, { logger: logger3 });
    }
    __name(getCredentials, "getCredentials");
  }
});

// ../../node_modules/.pnpm/@aws-sdk+credential-provider-http@3.821.0/node_modules/@aws-sdk/credential-provider-http/dist-cjs/fromHttp/retry-wrapper.js
var require_retry_wrapper = __commonJS({
  "../../node_modules/.pnpm/@aws-sdk+credential-provider-http@3.821.0/node_modules/@aws-sdk/credential-provider-http/dist-cjs/fromHttp/retry-wrapper.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.retryWrapper = void 0;
    var retryWrapper = /* @__PURE__ */ __name((toRetry, maxRetries, delayMs) => {
      return async () => {
        for (let i3 = 0; i3 < maxRetries; ++i3) {
          try {
            return await toRetry();
          } catch (e3) {
            await new Promise((resolve) => setTimeout(resolve, delayMs));
          }
        }
        return await toRetry();
      };
    }, "retryWrapper");
    exports2.retryWrapper = retryWrapper;
  }
});

// ../../node_modules/.pnpm/@aws-sdk+credential-provider-http@3.821.0/node_modules/@aws-sdk/credential-provider-http/dist-cjs/fromHttp/fromHttp.js
var require_fromHttp = __commonJS({
  "../../node_modules/.pnpm/@aws-sdk+credential-provider-http@3.821.0/node_modules/@aws-sdk/credential-provider-http/dist-cjs/fromHttp/fromHttp.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.fromHttp = void 0;
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    var client_1 = (init_client(), __toCommonJS(client_exports));
    var node_http_handler_1 = require_dist_cjs13();
    var property_provider_1 = require_dist_cjs23();
    var promises_1 = tslib_1.__importDefault(require("fs/promises"));
    var checkUrl_1 = require_checkUrl();
    var requestHelpers_1 = require_requestHelpers();
    var retry_wrapper_1 = require_retry_wrapper();
    var AWS_CONTAINER_CREDENTIALS_RELATIVE_URI = "AWS_CONTAINER_CREDENTIALS_RELATIVE_URI";
    var DEFAULT_LINK_LOCAL_HOST = "http://169.254.170.2";
    var AWS_CONTAINER_CREDENTIALS_FULL_URI = "AWS_CONTAINER_CREDENTIALS_FULL_URI";
    var AWS_CONTAINER_AUTHORIZATION_TOKEN_FILE = "AWS_CONTAINER_AUTHORIZATION_TOKEN_FILE";
    var AWS_CONTAINER_AUTHORIZATION_TOKEN = "AWS_CONTAINER_AUTHORIZATION_TOKEN";
    var fromHttp = /* @__PURE__ */ __name((options = {}) => {
      options.logger?.debug("@aws-sdk/credential-provider-http - fromHttp");
      let host;
      const relative = options.awsContainerCredentialsRelativeUri ?? process.env[AWS_CONTAINER_CREDENTIALS_RELATIVE_URI];
      const full = options.awsContainerCredentialsFullUri ?? process.env[AWS_CONTAINER_CREDENTIALS_FULL_URI];
      const token = options.awsContainerAuthorizationToken ?? process.env[AWS_CONTAINER_AUTHORIZATION_TOKEN];
      const tokenFile = options.awsContainerAuthorizationTokenFile ?? process.env[AWS_CONTAINER_AUTHORIZATION_TOKEN_FILE];
      const warn = options.logger?.constructor?.name === "NoOpLogger" || !options.logger ? console.warn : options.logger.warn;
      if (relative && full) {
        warn("@aws-sdk/credential-provider-http: you have set both awsContainerCredentialsRelativeUri and awsContainerCredentialsFullUri.");
        warn("awsContainerCredentialsFullUri will take precedence.");
      }
      if (token && tokenFile) {
        warn("@aws-sdk/credential-provider-http: you have set both awsContainerAuthorizationToken and awsContainerAuthorizationTokenFile.");
        warn("awsContainerAuthorizationToken will take precedence.");
      }
      if (full) {
        host = full;
      } else if (relative) {
        host = `${DEFAULT_LINK_LOCAL_HOST}${relative}`;
      } else {
        throw new property_provider_1.CredentialsProviderError(`No HTTP credential provider host provided.
Set AWS_CONTAINER_CREDENTIALS_FULL_URI or AWS_CONTAINER_CREDENTIALS_RELATIVE_URI.`, { logger: options.logger });
      }
      const url = new URL(host);
      (0, checkUrl_1.checkUrl)(url, options.logger);
      const requestHandler = new node_http_handler_1.NodeHttpHandler({
        requestTimeout: options.timeout ?? 1e3,
        connectionTimeout: options.timeout ?? 1e3
      });
      return (0, retry_wrapper_1.retryWrapper)(async () => {
        const request = (0, requestHelpers_1.createGetRequest)(url);
        if (token) {
          request.headers.Authorization = token;
        } else if (tokenFile) {
          request.headers.Authorization = (await promises_1.default.readFile(tokenFile)).toString();
        }
        try {
          const result = await requestHandler.handle(request);
          return (0, requestHelpers_1.getCredentials)(result.response).then((creds) => (0, client_1.setCredentialFeature)(creds, "CREDENTIALS_HTTP", "z"));
        } catch (e3) {
          throw new property_provider_1.CredentialsProviderError(String(e3), { logger: options.logger });
        }
      }, options.maxRetries ?? 3, options.timeout ?? 1e3);
    }, "fromHttp");
    exports2.fromHttp = fromHttp;
  }
});

// ../../node_modules/.pnpm/@aws-sdk+credential-provider-http@3.821.0/node_modules/@aws-sdk/credential-provider-http/dist-cjs/index.js
var require_dist_cjs39 = __commonJS({
  "../../node_modules/.pnpm/@aws-sdk+credential-provider-http@3.821.0/node_modules/@aws-sdk/credential-provider-http/dist-cjs/index.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.fromHttp = void 0;
    var fromHttp_1 = require_fromHttp();
    Object.defineProperty(exports2, "fromHttp", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return fromHttp_1.fromHttp;
    }, "get") });
  }
});

// ../../node_modules/.pnpm/@aws-sdk+client-sso@3.821.0/node_modules/@aws-sdk/client-sso/dist-cjs/auth/httpAuthSchemeProvider.js
var require_httpAuthSchemeProvider2 = __commonJS({
  "../../node_modules/.pnpm/@aws-sdk+client-sso@3.821.0/node_modules/@aws-sdk/client-sso/dist-cjs/auth/httpAuthSchemeProvider.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.resolveHttpAuthSchemeConfig = exports2.defaultSSOHttpAuthSchemeProvider = exports2.defaultSSOHttpAuthSchemeParametersProvider = void 0;
    var core_1 = (init_dist_es2(), __toCommonJS(dist_es_exports2));
    var util_middleware_1 = require_dist_cjs17();
    var defaultSSOHttpAuthSchemeParametersProvider = /* @__PURE__ */ __name(async (config, context, input) => {
      return {
        operation: (0, util_middleware_1.getSmithyContext)(context).operation,
        region: await (0, util_middleware_1.normalizeProvider)(config.region)() || (() => {
          throw new Error("expected `region` to be configured for `aws.auth#sigv4`");
        })()
      };
    }, "defaultSSOHttpAuthSchemeParametersProvider");
    exports2.defaultSSOHttpAuthSchemeParametersProvider = defaultSSOHttpAuthSchemeParametersProvider;
    function createAwsAuthSigv4HttpAuthOption3(authParameters) {
      return {
        schemeId: "aws.auth#sigv4",
        signingProperties: {
          name: "awsssoportal",
          region: authParameters.region
        },
        propertiesExtractor: /* @__PURE__ */ __name((config, context) => ({
          signingProperties: {
            config,
            context
          }
        }), "propertiesExtractor")
      };
    }
    __name(createAwsAuthSigv4HttpAuthOption3, "createAwsAuthSigv4HttpAuthOption");
    function createSmithyApiNoAuthHttpAuthOption3(authParameters) {
      return {
        schemeId: "smithy.api#noAuth"
      };
    }
    __name(createSmithyApiNoAuthHttpAuthOption3, "createSmithyApiNoAuthHttpAuthOption");
    var defaultSSOHttpAuthSchemeProvider = /* @__PURE__ */ __name((authParameters) => {
      const options = [];
      switch (authParameters.operation) {
        case "GetRoleCredentials": {
          options.push(createSmithyApiNoAuthHttpAuthOption3(authParameters));
          break;
        }
        case "ListAccountRoles": {
          options.push(createSmithyApiNoAuthHttpAuthOption3(authParameters));
          break;
        }
        case "ListAccounts": {
          options.push(createSmithyApiNoAuthHttpAuthOption3(authParameters));
          break;
        }
        case "Logout": {
          options.push(createSmithyApiNoAuthHttpAuthOption3(authParameters));
          break;
        }
        default: {
          options.push(createAwsAuthSigv4HttpAuthOption3(authParameters));
        }
      }
      return options;
    }, "defaultSSOHttpAuthSchemeProvider");
    exports2.defaultSSOHttpAuthSchemeProvider = defaultSSOHttpAuthSchemeProvider;
    var resolveHttpAuthSchemeConfig3 = /* @__PURE__ */ __name((config) => {
      const config_0 = (0, core_1.resolveAwsSdkSigV4Config)(config);
      return Object.assign(config_0, {
        authSchemePreference: (0, util_middleware_1.normalizeProvider)(config.authSchemePreference ?? [])
      });
    }, "resolveHttpAuthSchemeConfig");
    exports2.resolveHttpAuthSchemeConfig = resolveHttpAuthSchemeConfig3;
  }
});

// ../../node_modules/.pnpm/@aws-sdk+client-sso@3.821.0/node_modules/@aws-sdk/client-sso/package.json
var require_package2 = __commonJS({
  "../../node_modules/.pnpm/@aws-sdk+client-sso@3.821.0/node_modules/@aws-sdk/client-sso/package.json"(exports2, module2) {
    module2.exports = {
      name: "@aws-sdk/client-sso",
      description: "AWS SDK for JavaScript Sso Client for Node.js, Browser and React Native",
      version: "3.821.0",
      scripts: {
        build: "concurrently 'yarn:build:cjs' 'yarn:build:es' 'yarn:build:types'",
        "build:cjs": "node ../../scripts/compilation/inline client-sso",
        "build:es": "tsc -p tsconfig.es.json",
        "build:include:deps": "lerna run --scope $npm_package_name --include-dependencies build",
        "build:types": "tsc -p tsconfig.types.json",
        "build:types:downlevel": "downlevel-dts dist-types dist-types/ts3.4",
        clean: "rimraf ./dist-* && rimraf *.tsbuildinfo",
        "extract:docs": "api-extractor run --local",
        "generate:client": "node ../../scripts/generate-clients/single-service --solo sso"
      },
      main: "./dist-cjs/index.js",
      types: "./dist-types/index.d.ts",
      module: "./dist-es/index.js",
      sideEffects: false,
      dependencies: {
        "@aws-crypto/sha256-browser": "5.2.0",
        "@aws-crypto/sha256-js": "5.2.0",
        "@aws-sdk/core": "3.821.0",
        "@aws-sdk/middleware-host-header": "3.821.0",
        "@aws-sdk/middleware-logger": "3.821.0",
        "@aws-sdk/middleware-recursion-detection": "3.821.0",
        "@aws-sdk/middleware-user-agent": "3.821.0",
        "@aws-sdk/region-config-resolver": "3.821.0",
        "@aws-sdk/types": "3.821.0",
        "@aws-sdk/util-endpoints": "3.821.0",
        "@aws-sdk/util-user-agent-browser": "3.821.0",
        "@aws-sdk/util-user-agent-node": "3.821.0",
        "@smithy/config-resolver": "^4.1.4",
        "@smithy/core": "^3.5.1",
        "@smithy/fetch-http-handler": "^5.0.4",
        "@smithy/hash-node": "^4.0.4",
        "@smithy/invalid-dependency": "^4.0.4",
        "@smithy/middleware-content-length": "^4.0.4",
        "@smithy/middleware-endpoint": "^4.1.9",
        "@smithy/middleware-retry": "^4.1.10",
        "@smithy/middleware-serde": "^4.0.8",
        "@smithy/middleware-stack": "^4.0.4",
        "@smithy/node-config-provider": "^4.1.3",
        "@smithy/node-http-handler": "^4.0.6",
        "@smithy/protocol-http": "^5.1.2",
        "@smithy/smithy-client": "^4.4.1",
        "@smithy/types": "^4.3.1",
        "@smithy/url-parser": "^4.0.4",
        "@smithy/util-base64": "^4.0.0",
        "@smithy/util-body-length-browser": "^4.0.0",
        "@smithy/util-body-length-node": "^4.0.0",
        "@smithy/util-defaults-mode-browser": "^4.0.17",
        "@smithy/util-defaults-mode-node": "^4.0.17",
        "@smithy/util-endpoints": "^3.0.6",
        "@smithy/util-middleware": "^4.0.4",
        "@smithy/util-retry": "^4.0.5",
        "@smithy/util-utf8": "^4.0.0",
        tslib: "^2.6.2"
      },
      devDependencies: {
        "@tsconfig/node18": "18.2.4",
        "@types/node": "^18.19.69",
        concurrently: "7.0.0",
        "downlevel-dts": "0.10.1",
        rimraf: "3.0.2",
        typescript: "~5.8.3"
      },
      engines: {
        node: ">=18.0.0"
      },
      typesVersions: {
        "<4.0": {
          "dist-types/*": [
            "dist-types/ts3.4/*"
          ]
        }
      },
      files: [
        "dist-*/**"
      ],
      author: {
        name: "AWS SDK for JavaScript Team",
        url: "https://aws.amazon.com/javascript/"
      },
      license: "Apache-2.0",
      browser: {
        "./dist-es/runtimeConfig": "./dist-es/runtimeConfig.browser"
      },
      "react-native": {
        "./dist-es/runtimeConfig": "./dist-es/runtimeConfig.native"
      },
      homepage: "https://github.com/aws/aws-sdk-js-v3/tree/main/clients/client-sso",
      repository: {
        type: "git",
        url: "https://github.com/aws/aws-sdk-js-v3.git",
        directory: "clients/client-sso"
      }
    };
  }
});

// ../../node_modules/.pnpm/@aws-sdk+util-user-agent-node@3.821.0/node_modules/@aws-sdk/util-user-agent-node/dist-cjs/index.js
var require_dist_cjs40 = __commonJS({
  "../../node_modules/.pnpm/@aws-sdk+util-user-agent-node@3.821.0/node_modules/@aws-sdk/util-user-agent-node/dist-cjs/index.js"(exports2, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __name2 = /* @__PURE__ */ __name((target, value) => __defProp2(target, "name", { value, configurable: true }), "__name");
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: /* @__PURE__ */ __name(() => from[key], "get"), enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var index_exports = {};
    __export2(index_exports, {
      NODE_APP_ID_CONFIG_OPTIONS: /* @__PURE__ */ __name(() => NODE_APP_ID_CONFIG_OPTIONS3, "NODE_APP_ID_CONFIG_OPTIONS"),
      UA_APP_ID_ENV_NAME: /* @__PURE__ */ __name(() => UA_APP_ID_ENV_NAME, "UA_APP_ID_ENV_NAME"),
      UA_APP_ID_INI_NAME: /* @__PURE__ */ __name(() => UA_APP_ID_INI_NAME, "UA_APP_ID_INI_NAME"),
      createDefaultUserAgentProvider: /* @__PURE__ */ __name(() => createDefaultUserAgentProvider3, "createDefaultUserAgentProvider"),
      crtAvailability: /* @__PURE__ */ __name(() => crtAvailability, "crtAvailability"),
      defaultUserAgent: /* @__PURE__ */ __name(() => defaultUserAgent, "defaultUserAgent")
    });
    module2.exports = __toCommonJS2(index_exports);
    var import_os = require("os");
    var import_process = require("process");
    var crtAvailability = {
      isCrtAvailable: false
    };
    var isCrtAvailable = __name2(() => {
      if (crtAvailability.isCrtAvailable) {
        return ["md/crt-avail"];
      }
      return null;
    }, "isCrtAvailable");
    var createDefaultUserAgentProvider3 = __name2(({ serviceId, clientVersion }) => {
      return async (config) => {
        const sections = [
          // sdk-metadata
          ["aws-sdk-js", clientVersion],
          // ua-metadata
          ["ua", "2.1"],
          // os-metadata
          [`os/${(0, import_os.platform)()}`, (0, import_os.release)()],
          // language-metadata
          // ECMAScript edition doesn't matter in JS, so no version needed.
          ["lang/js"],
          ["md/nodejs", `${import_process.versions.node}`]
        ];
        const crtAvailable = isCrtAvailable();
        if (crtAvailable) {
          sections.push(crtAvailable);
        }
        if (serviceId) {
          sections.push([`api/${serviceId}`, clientVersion]);
        }
        if (import_process.env.AWS_EXECUTION_ENV) {
          sections.push([`exec-env/${import_process.env.AWS_EXECUTION_ENV}`]);
        }
        const appId = await config?.userAgentAppId?.();
        const resolvedUserAgent = appId ? [...sections, [`app/${appId}`]] : [...sections];
        return resolvedUserAgent;
      };
    }, "createDefaultUserAgentProvider");
    var defaultUserAgent = createDefaultUserAgentProvider3;
    var import_middleware_user_agent3 = require_dist_cjs25();
    var UA_APP_ID_ENV_NAME = "AWS_SDK_UA_APP_ID";
    var UA_APP_ID_INI_NAME = "sdk_ua_app_id";
    var UA_APP_ID_INI_NAME_DEPRECATED = "sdk-ua-app-id";
    var NODE_APP_ID_CONFIG_OPTIONS3 = {
      environmentVariableSelector: __name2((env2) => env2[UA_APP_ID_ENV_NAME], "environmentVariableSelector"),
      configFileSelector: __name2((profile) => profile[UA_APP_ID_INI_NAME] ?? profile[UA_APP_ID_INI_NAME_DEPRECATED], "configFileSelector"),
      default: import_middleware_user_agent3.DEFAULT_UA_APP_ID
    };
  }
});

// ../../node_modules/.pnpm/@smithy+hash-node@4.0.4/node_modules/@smithy/hash-node/dist-cjs/index.js
var require_dist_cjs41 = __commonJS({
  "../../node_modules/.pnpm/@smithy+hash-node@4.0.4/node_modules/@smithy/hash-node/dist-cjs/index.js"(exports2, module2) {
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __name2 = /* @__PURE__ */ __name((target, value) => __defProp2(target, "name", { value, configurable: true }), "__name");
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: /* @__PURE__ */ __name(() => from[key], "get"), enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var src_exports = {};
    __export2(src_exports, {
      Hash: /* @__PURE__ */ __name(() => Hash3, "Hash")
    });
    module2.exports = __toCommonJS2(src_exports);
    var import_util_buffer_from = require_dist_cjs8();
    var import_util_utf85 = require_dist_cjs9();
    var import_buffer = require("buffer");
    var import_crypto5 = require("crypto");
    var Hash3 = class {
      static {
        __name(this, "Hash");
      }
      static {
        __name2(this, "Hash");
      }
      constructor(algorithmIdentifier, secret) {
        this.algorithmIdentifier = algorithmIdentifier;
        this.secret = secret;
        this.reset();
      }
      update(toHash, encoding) {
        this.hash.update((0, import_util_utf85.toUint8Array)(castSourceData(toHash, encoding)));
      }
      digest() {
        return Promise.resolve(this.hash.digest());
      }
      reset() {
        this.hash = this.secret ? (0, import_crypto5.createHmac)(this.algorithmIdentifier, castSourceData(this.secret)) : (0, import_crypto5.createHash)(this.algorithmIdentifier);
      }
    };
    function castSourceData(toCast, encoding) {
      if (import_buffer.Buffer.isBuffer(toCast)) {
        return toCast;
      }
      if (typeof toCast === "string") {
        return (0, import_util_buffer_from.fromString)(toCast, encoding);
      }
      if (ArrayBuffer.isView(toCast)) {
        return (0, import_util_buffer_from.fromArrayBuffer)(toCast.buffer, toCast.byteOffset, toCast.byteLength);
      }
      return (0, import_util_buffer_from.fromArrayBuffer)(toCast);
    }
    __name(castSourceData, "castSourceData");
    __name2(castSourceData, "castSourceData");
  }
});

// ../../node_modules/.pnpm/@smithy+util-body-length-node@4.0.0/node_modules/@smithy/util-body-length-node/dist-cjs/index.js
var require_dist_cjs42 = __commonJS({
  "../../node_modules/.pnpm/@smithy+util-body-length-node@4.0.0/node_modules/@smithy/util-body-length-node/dist-cjs/index.js"(exports2, module2) {
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __name2 = /* @__PURE__ */ __name((target, value) => __defProp2(target, "name", { value, configurable: true }), "__name");
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: /* @__PURE__ */ __name(() => from[key], "get"), enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var src_exports = {};
    __export2(src_exports, {
      calculateBodyLength: /* @__PURE__ */ __name(() => calculateBodyLength3, "calculateBodyLength")
    });
    module2.exports = __toCommonJS2(src_exports);
    var import_fs = require("fs");
    var calculateBodyLength3 = __name2((body) => {
      if (!body) {
        return 0;
      }
      if (typeof body === "string") {
        return Buffer.byteLength(body);
      } else if (typeof body.byteLength === "number") {
        return body.byteLength;
      } else if (typeof body.size === "number") {
        return body.size;
      } else if (typeof body.start === "number" && typeof body.end === "number") {
        return body.end + 1 - body.start;
      } else if (typeof body.path === "string" || Buffer.isBuffer(body.path)) {
        return (0, import_fs.lstatSync)(body.path).size;
      } else if (typeof body.fd === "number") {
        return (0, import_fs.fstatSync)(body.fd).size;
      }
      throw new Error(`Body Length computation failed for ${body}`);
    }, "calculateBodyLength");
  }
});

// ../../node_modules/.pnpm/@aws-sdk+client-sso@3.821.0/node_modules/@aws-sdk/client-sso/dist-cjs/endpoint/ruleset.js
var require_ruleset = __commonJS({
  "../../node_modules/.pnpm/@aws-sdk+client-sso@3.821.0/node_modules/@aws-sdk/client-sso/dist-cjs/endpoint/ruleset.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.ruleSet = void 0;
    var u3 = "required", v6 = "fn", w3 = "argv", x3 = "ref";
    var a3 = true, b3 = "isSet", c3 = "booleanEquals", d3 = "error", e3 = "endpoint", f3 = "tree", g3 = "PartitionResult", h3 = "getAttr", i3 = { [u3]: false, "type": "String" }, j3 = { [u3]: true, "default": false, "type": "Boolean" }, k3 = { [x3]: "Endpoint" }, l3 = { [v6]: c3, [w3]: [{ [x3]: "UseFIPS" }, true] }, m3 = { [v6]: c3, [w3]: [{ [x3]: "UseDualStack" }, true] }, n3 = {}, o3 = { [v6]: h3, [w3]: [{ [x3]: g3 }, "supportsFIPS"] }, p3 = { [x3]: g3 }, q3 = { [v6]: c3, [w3]: [true, { [v6]: h3, [w3]: [p3, "supportsDualStack"] }] }, r3 = [l3], s3 = [m3], t3 = [{ [x3]: "Region" }];
    var _data3 = { version: "1.0", parameters: { Region: i3, UseDualStack: j3, UseFIPS: j3, Endpoint: i3 }, rules: [{ conditions: [{ [v6]: b3, [w3]: [k3] }], rules: [{ conditions: r3, error: "Invalid Configuration: FIPS and custom endpoint are not supported", type: d3 }, { conditions: s3, error: "Invalid Configuration: Dualstack and custom endpoint are not supported", type: d3 }, { endpoint: { url: k3, properties: n3, headers: n3 }, type: e3 }], type: f3 }, { conditions: [{ [v6]: b3, [w3]: t3 }], rules: [{ conditions: [{ [v6]: "aws.partition", [w3]: t3, assign: g3 }], rules: [{ conditions: [l3, m3], rules: [{ conditions: [{ [v6]: c3, [w3]: [a3, o3] }, q3], rules: [{ endpoint: { url: "https://portal.sso-fips.{Region}.{PartitionResult#dualStackDnsSuffix}", properties: n3, headers: n3 }, type: e3 }], type: f3 }, { error: "FIPS and DualStack are enabled, but this partition does not support one or both", type: d3 }], type: f3 }, { conditions: r3, rules: [{ conditions: [{ [v6]: c3, [w3]: [o3, a3] }], rules: [{ conditions: [{ [v6]: "stringEquals", [w3]: [{ [v6]: h3, [w3]: [p3, "name"] }, "aws-us-gov"] }], endpoint: { url: "https://portal.sso.{Region}.amazonaws.com", properties: n3, headers: n3 }, type: e3 }, { endpoint: { url: "https://portal.sso-fips.{Region}.{PartitionResult#dnsSuffix}", properties: n3, headers: n3 }, type: e3 }], type: f3 }, { error: "FIPS is enabled but this partition does not support FIPS", type: d3 }], type: f3 }, { conditions: s3, rules: [{ conditions: [q3], rules: [{ endpoint: { url: "https://portal.sso.{Region}.{PartitionResult#dualStackDnsSuffix}", properties: n3, headers: n3 }, type: e3 }], type: f3 }, { error: "DualStack is enabled but this partition does not support DualStack", type: d3 }], type: f3 }, { endpoint: { url: "https://portal.sso.{Region}.{PartitionResult#dnsSuffix}", properties: n3, headers: n3 }, type: e3 }], type: f3 }], type: f3 }, { error: "Invalid Configuration: Missing Region", type: d3 }] };
    exports2.ruleSet = _data3;
  }
});

// ../../node_modules/.pnpm/@aws-sdk+client-sso@3.821.0/node_modules/@aws-sdk/client-sso/dist-cjs/endpoint/endpointResolver.js
var require_endpointResolver = __commonJS({
  "../../node_modules/.pnpm/@aws-sdk+client-sso@3.821.0/node_modules/@aws-sdk/client-sso/dist-cjs/endpoint/endpointResolver.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.defaultEndpointResolver = void 0;
    var util_endpoints_1 = require_dist_cjs22();
    var util_endpoints_2 = require_dist_cjs21();
    var ruleset_1 = require_ruleset();
    var cache3 = new util_endpoints_2.EndpointCache({
      size: 50,
      params: ["Endpoint", "Region", "UseDualStack", "UseFIPS"]
    });
    var defaultEndpointResolver3 = /* @__PURE__ */ __name((endpointParams, context = {}) => {
      return cache3.get(endpointParams, () => (0, util_endpoints_2.resolveEndpoint)(ruleset_1.ruleSet, {
        endpointParams,
        logger: context.logger
      }));
    }, "defaultEndpointResolver");
    exports2.defaultEndpointResolver = defaultEndpointResolver3;
    util_endpoints_2.customEndpointFunctions.aws = util_endpoints_1.awsEndpointFunctions;
  }
});

// ../../node_modules/.pnpm/@aws-sdk+client-sso@3.821.0/node_modules/@aws-sdk/client-sso/dist-cjs/runtimeConfig.shared.js
var require_runtimeConfig_shared = __commonJS({
  "../../node_modules/.pnpm/@aws-sdk+client-sso@3.821.0/node_modules/@aws-sdk/client-sso/dist-cjs/runtimeConfig.shared.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.getRuntimeConfig = void 0;
    var core_1 = (init_dist_es2(), __toCommonJS(dist_es_exports2));
    var core_2 = (init_dist_es(), __toCommonJS(dist_es_exports));
    var smithy_client_1 = require_dist_cjs18();
    var url_parser_1 = require_dist_cjs32();
    var util_base64_1 = require_dist_cjs10();
    var util_utf8_1 = require_dist_cjs9();
    var httpAuthSchemeProvider_1 = require_httpAuthSchemeProvider2();
    var endpointResolver_1 = require_endpointResolver();
    var getRuntimeConfig5 = /* @__PURE__ */ __name((config) => {
      return {
        apiVersion: "2019-06-10",
        base64Decoder: config?.base64Decoder ?? util_base64_1.fromBase64,
        base64Encoder: config?.base64Encoder ?? util_base64_1.toBase64,
        disableHostPrefix: config?.disableHostPrefix ?? false,
        endpointProvider: config?.endpointProvider ?? endpointResolver_1.defaultEndpointResolver,
        extensions: config?.extensions ?? [],
        httpAuthSchemeProvider: config?.httpAuthSchemeProvider ?? httpAuthSchemeProvider_1.defaultSSOHttpAuthSchemeProvider,
        httpAuthSchemes: config?.httpAuthSchemes ?? [
          {
            schemeId: "aws.auth#sigv4",
            identityProvider: /* @__PURE__ */ __name((ipc) => ipc.getIdentityProvider("aws.auth#sigv4"), "identityProvider"),
            signer: new core_1.AwsSdkSigV4Signer()
          },
          {
            schemeId: "smithy.api#noAuth",
            identityProvider: /* @__PURE__ */ __name((ipc) => ipc.getIdentityProvider("smithy.api#noAuth") || (async () => ({})), "identityProvider"),
            signer: new core_2.NoAuthSigner()
          }
        ],
        logger: config?.logger ?? new smithy_client_1.NoOpLogger(),
        serviceId: config?.serviceId ?? "SSO",
        urlParser: config?.urlParser ?? url_parser_1.parseUrl,
        utf8Decoder: config?.utf8Decoder ?? util_utf8_1.fromUtf8,
        utf8Encoder: config?.utf8Encoder ?? util_utf8_1.toUtf8
      };
    }, "getRuntimeConfig");
    exports2.getRuntimeConfig = getRuntimeConfig5;
  }
});

// ../../node_modules/.pnpm/@smithy+util-defaults-mode-node@4.0.17/node_modules/@smithy/util-defaults-mode-node/dist-cjs/index.js
var require_dist_cjs43 = __commonJS({
  "../../node_modules/.pnpm/@smithy+util-defaults-mode-node@4.0.17/node_modules/@smithy/util-defaults-mode-node/dist-cjs/index.js"(exports2, module2) {
    var __create2 = Object.create;
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __getProtoOf2 = Object.getPrototypeOf;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __name2 = /* @__PURE__ */ __name((target, value) => __defProp2(target, "name", { value, configurable: true }), "__name");
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: /* @__PURE__ */ __name(() => from[key], "get"), enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toESM2 = /* @__PURE__ */ __name((mod, isNodeMode, target) => (target = mod != null ? __create2(__getProtoOf2(mod)) : {}, __copyProps2(
      // If the importer is in node compatibility mode or this is not an ESM
      // file that has been converted to a CommonJS file using a Babel-
      // compatible transform (i.e. "__esModule" has not been set), then set
      // "default" to the CommonJS "module.exports" for node compatibility.
      isNodeMode || !mod || !mod.__esModule ? __defProp2(target, "default", { value: mod, enumerable: true }) : target,
      mod
    )), "__toESM");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var src_exports = {};
    __export2(src_exports, {
      resolveDefaultsModeConfig: /* @__PURE__ */ __name(() => resolveDefaultsModeConfig3, "resolveDefaultsModeConfig")
    });
    module2.exports = __toCommonJS2(src_exports);
    var import_config_resolver5 = require_dist_cjs27();
    var import_node_config_provider3 = require_dist_cjs30();
    var import_property_provider2 = require_dist_cjs23();
    var AWS_EXECUTION_ENV = "AWS_EXECUTION_ENV";
    var AWS_REGION_ENV = "AWS_REGION";
    var AWS_DEFAULT_REGION_ENV = "AWS_DEFAULT_REGION";
    var ENV_IMDS_DISABLED = "AWS_EC2_METADATA_DISABLED";
    var DEFAULTS_MODE_OPTIONS = ["in-region", "cross-region", "mobile", "standard", "legacy"];
    var IMDS_REGION_PATH = "/latest/meta-data/placement/region";
    var AWS_DEFAULTS_MODE_ENV = "AWS_DEFAULTS_MODE";
    var AWS_DEFAULTS_MODE_CONFIG = "defaults_mode";
    var NODE_DEFAULTS_MODE_CONFIG_OPTIONS = {
      environmentVariableSelector: /* @__PURE__ */ __name((env) => {
        return env[AWS_DEFAULTS_MODE_ENV];
      }, "environmentVariableSelector"),
      configFileSelector: /* @__PURE__ */ __name((profile) => {
        return profile[AWS_DEFAULTS_MODE_CONFIG];
      }, "configFileSelector"),
      default: "legacy"
    };
    var resolveDefaultsModeConfig3 = __name2(({
      region = (0, import_node_config_provider3.loadConfig)(import_config_resolver5.NODE_REGION_CONFIG_OPTIONS),
      defaultsMode = (0, import_node_config_provider3.loadConfig)(NODE_DEFAULTS_MODE_CONFIG_OPTIONS)
    } = {}) => (0, import_property_provider2.memoize)(async () => {
      const mode = typeof defaultsMode === "function" ? await defaultsMode() : defaultsMode;
      switch (mode?.toLowerCase()) {
        case "auto":
          return resolveNodeDefaultsModeAuto(region);
        case "in-region":
        case "cross-region":
        case "mobile":
        case "standard":
        case "legacy":
          return Promise.resolve(mode?.toLocaleLowerCase());
        case void 0:
          return Promise.resolve("legacy");
        default:
          throw new Error(
            `Invalid parameter for "defaultsMode", expect ${DEFAULTS_MODE_OPTIONS.join(", ")}, got ${mode}`
          );
      }
    }), "resolveDefaultsModeConfig");
    var resolveNodeDefaultsModeAuto = __name2(async (clientRegion) => {
      if (clientRegion) {
        const resolvedRegion = typeof clientRegion === "function" ? await clientRegion() : clientRegion;
        const inferredRegion = await inferPhysicalRegion();
        if (!inferredRegion) {
          return "standard";
        }
        if (resolvedRegion === inferredRegion) {
          return "in-region";
        } else {
          return "cross-region";
        }
      }
      return "standard";
    }, "resolveNodeDefaultsModeAuto");
    var inferPhysicalRegion = __name2(async () => {
      if (process.env[AWS_EXECUTION_ENV] && (process.env[AWS_REGION_ENV] || process.env[AWS_DEFAULT_REGION_ENV])) {
        return process.env[AWS_REGION_ENV] ?? process.env[AWS_DEFAULT_REGION_ENV];
      }
      if (!process.env[ENV_IMDS_DISABLED]) {
        try {
          const { getInstanceMetadataEndpoint, httpRequest } = await Promise.resolve().then(() => __toESM2(require_dist_cjs38()));
          const endpoint = await getInstanceMetadataEndpoint();
          return (await httpRequest({ ...endpoint, path: IMDS_REGION_PATH })).toString();
        } catch (e3) {
        }
      }
    }, "inferPhysicalRegion");
  }
});

// ../../node_modules/.pnpm/@aws-sdk+client-sso@3.821.0/node_modules/@aws-sdk/client-sso/dist-cjs/runtimeConfig.js
var require_runtimeConfig = __commonJS({
  "../../node_modules/.pnpm/@aws-sdk+client-sso@3.821.0/node_modules/@aws-sdk/client-sso/dist-cjs/runtimeConfig.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.getRuntimeConfig = void 0;
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    var package_json_1 = tslib_1.__importDefault(require_package2());
    var core_1 = (init_dist_es2(), __toCommonJS(dist_es_exports2));
    var util_user_agent_node_1 = require_dist_cjs40();
    var config_resolver_1 = require_dist_cjs27();
    var hash_node_1 = require_dist_cjs41();
    var middleware_retry_1 = require_dist_cjs36();
    var node_config_provider_1 = require_dist_cjs30();
    var node_http_handler_1 = require_dist_cjs13();
    var util_body_length_node_1 = require_dist_cjs42();
    var util_retry_1 = require_dist_cjs35();
    var runtimeConfig_shared_1 = require_runtimeConfig_shared();
    var smithy_client_1 = require_dist_cjs18();
    var util_defaults_mode_node_1 = require_dist_cjs43();
    var smithy_client_2 = require_dist_cjs18();
    var getRuntimeConfig5 = /* @__PURE__ */ __name((config) => {
      (0, smithy_client_2.emitWarningIfUnsupportedVersion)(process.version);
      const defaultsMode = (0, util_defaults_mode_node_1.resolveDefaultsModeConfig)(config);
      const defaultConfigProvider = /* @__PURE__ */ __name(() => defaultsMode().then(smithy_client_1.loadConfigsForDefaultMode), "defaultConfigProvider");
      const clientSharedValues = (0, runtimeConfig_shared_1.getRuntimeConfig)(config);
      (0, core_1.emitWarningIfUnsupportedVersion)(process.version);
      const loaderConfig = {
        profile: config?.profile,
        logger: clientSharedValues.logger
      };
      return {
        ...clientSharedValues,
        ...config,
        runtime: "node",
        defaultsMode,
        authSchemePreference: config?.authSchemePreference ?? (0, node_config_provider_1.loadConfig)(core_1.NODE_AUTH_SCHEME_PREFERENCE_OPTIONS, loaderConfig),
        bodyLengthChecker: config?.bodyLengthChecker ?? util_body_length_node_1.calculateBodyLength,
        defaultUserAgentProvider: config?.defaultUserAgentProvider ?? (0, util_user_agent_node_1.createDefaultUserAgentProvider)({ serviceId: clientSharedValues.serviceId, clientVersion: package_json_1.default.version }),
        maxAttempts: config?.maxAttempts ?? (0, node_config_provider_1.loadConfig)(middleware_retry_1.NODE_MAX_ATTEMPT_CONFIG_OPTIONS, config),
        region: config?.region ?? (0, node_config_provider_1.loadConfig)(config_resolver_1.NODE_REGION_CONFIG_OPTIONS, { ...config_resolver_1.NODE_REGION_CONFIG_FILE_OPTIONS, ...loaderConfig }),
        requestHandler: node_http_handler_1.NodeHttpHandler.create(config?.requestHandler ?? defaultConfigProvider),
        retryMode: config?.retryMode ?? (0, node_config_provider_1.loadConfig)({
          ...middleware_retry_1.NODE_RETRY_MODE_CONFIG_OPTIONS,
          default: /* @__PURE__ */ __name(async () => (await defaultConfigProvider()).retryMode || util_retry_1.DEFAULT_RETRY_MODE, "default")
        }, config),
        sha256: config?.sha256 ?? hash_node_1.Hash.bind(null, "sha256"),
        streamCollector: config?.streamCollector ?? node_http_handler_1.streamCollector,
        useDualstackEndpoint: config?.useDualstackEndpoint ?? (0, node_config_provider_1.loadConfig)(config_resolver_1.NODE_USE_DUALSTACK_ENDPOINT_CONFIG_OPTIONS, loaderConfig),
        useFipsEndpoint: config?.useFipsEndpoint ?? (0, node_config_provider_1.loadConfig)(config_resolver_1.NODE_USE_FIPS_ENDPOINT_CONFIG_OPTIONS, loaderConfig),
        userAgentAppId: config?.userAgentAppId ?? (0, node_config_provider_1.loadConfig)(util_user_agent_node_1.NODE_APP_ID_CONFIG_OPTIONS, loaderConfig)
      };
    }, "getRuntimeConfig");
    exports2.getRuntimeConfig = getRuntimeConfig5;
  }
});

// ../../node_modules/.pnpm/@aws-sdk+region-config-resolver@3.821.0/node_modules/@aws-sdk/region-config-resolver/dist-cjs/index.js
var require_dist_cjs44 = __commonJS({
  "../../node_modules/.pnpm/@aws-sdk+region-config-resolver@3.821.0/node_modules/@aws-sdk/region-config-resolver/dist-cjs/index.js"(exports2, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __name2 = /* @__PURE__ */ __name((target, value) => __defProp2(target, "name", { value, configurable: true }), "__name");
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: /* @__PURE__ */ __name(() => from[key], "get"), enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var index_exports = {};
    __export2(index_exports, {
      NODE_REGION_CONFIG_FILE_OPTIONS: /* @__PURE__ */ __name(() => NODE_REGION_CONFIG_FILE_OPTIONS3, "NODE_REGION_CONFIG_FILE_OPTIONS"),
      NODE_REGION_CONFIG_OPTIONS: /* @__PURE__ */ __name(() => NODE_REGION_CONFIG_OPTIONS3, "NODE_REGION_CONFIG_OPTIONS"),
      REGION_ENV_NAME: /* @__PURE__ */ __name(() => REGION_ENV_NAME, "REGION_ENV_NAME"),
      REGION_INI_NAME: /* @__PURE__ */ __name(() => REGION_INI_NAME, "REGION_INI_NAME"),
      getAwsRegionExtensionConfiguration: /* @__PURE__ */ __name(() => getAwsRegionExtensionConfiguration3, "getAwsRegionExtensionConfiguration"),
      resolveAwsRegionExtensionConfiguration: /* @__PURE__ */ __name(() => resolveAwsRegionExtensionConfiguration3, "resolveAwsRegionExtensionConfiguration"),
      resolveRegionConfig: /* @__PURE__ */ __name(() => resolveRegionConfig3, "resolveRegionConfig")
    });
    module2.exports = __toCommonJS2(index_exports);
    var getAwsRegionExtensionConfiguration3 = __name2((runtimeConfig) => {
      return {
        setRegion(region) {
          runtimeConfig.region = region;
        },
        region() {
          return runtimeConfig.region;
        }
      };
    }, "getAwsRegionExtensionConfiguration");
    var resolveAwsRegionExtensionConfiguration3 = __name2((awsRegionExtensionConfiguration) => {
      return {
        region: awsRegionExtensionConfiguration.region()
      };
    }, "resolveAwsRegionExtensionConfiguration");
    var REGION_ENV_NAME = "AWS_REGION";
    var REGION_INI_NAME = "region";
    var NODE_REGION_CONFIG_OPTIONS3 = {
      environmentVariableSelector: __name2((env) => env[REGION_ENV_NAME], "environmentVariableSelector"),
      configFileSelector: __name2((profile) => profile[REGION_INI_NAME], "configFileSelector"),
      default: __name2(() => {
        throw new Error("Region is missing");
      }, "default")
    };
    var NODE_REGION_CONFIG_FILE_OPTIONS3 = {
      preferredFile: "credentials"
    };
    var isFipsRegion = __name2((region) => typeof region === "string" && (region.startsWith("fips-") || region.endsWith("-fips")), "isFipsRegion");
    var getRealRegion = __name2((region) => isFipsRegion(region) ? ["fips-aws-global", "aws-fips"].includes(region) ? "us-east-1" : region.replace(/fips-(dkr-|prod-)?|-fips/, "") : region, "getRealRegion");
    var resolveRegionConfig3 = __name2((input) => {
      const { region, useFipsEndpoint } = input;
      if (!region) {
        throw new Error("Region is missing");
      }
      return Object.assign(input, {
        region: __name2(async () => {
          if (typeof region === "string") {
            return getRealRegion(region);
          }
          const providedRegion = await region();
          return getRealRegion(providedRegion);
        }, "region"),
        useFipsEndpoint: __name2(async () => {
          const providedRegion = typeof region === "string" ? region : await region();
          if (isFipsRegion(providedRegion)) {
            return true;
          }
          return typeof useFipsEndpoint !== "function" ? Promise.resolve(!!useFipsEndpoint) : useFipsEndpoint();
        }, "useFipsEndpoint")
      });
    }, "resolveRegionConfig");
  }
});

// ../../node_modules/.pnpm/@aws-sdk+client-sso@3.821.0/node_modules/@aws-sdk/client-sso/dist-cjs/index.js
var require_dist_cjs45 = __commonJS({
  "../../node_modules/.pnpm/@aws-sdk+client-sso@3.821.0/node_modules/@aws-sdk/client-sso/dist-cjs/index.js"(exports2, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __name2 = /* @__PURE__ */ __name((target, value) => __defProp2(target, "name", { value, configurable: true }), "__name");
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: /* @__PURE__ */ __name(() => from[key], "get"), enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var index_exports = {};
    __export2(index_exports, {
      GetRoleCredentialsCommand: /* @__PURE__ */ __name(() => GetRoleCredentialsCommand, "GetRoleCredentialsCommand"),
      GetRoleCredentialsRequestFilterSensitiveLog: /* @__PURE__ */ __name(() => GetRoleCredentialsRequestFilterSensitiveLog, "GetRoleCredentialsRequestFilterSensitiveLog"),
      GetRoleCredentialsResponseFilterSensitiveLog: /* @__PURE__ */ __name(() => GetRoleCredentialsResponseFilterSensitiveLog, "GetRoleCredentialsResponseFilterSensitiveLog"),
      InvalidRequestException: /* @__PURE__ */ __name(() => InvalidRequestException2, "InvalidRequestException"),
      ListAccountRolesCommand: /* @__PURE__ */ __name(() => ListAccountRolesCommand, "ListAccountRolesCommand"),
      ListAccountRolesRequestFilterSensitiveLog: /* @__PURE__ */ __name(() => ListAccountRolesRequestFilterSensitiveLog, "ListAccountRolesRequestFilterSensitiveLog"),
      ListAccountsCommand: /* @__PURE__ */ __name(() => ListAccountsCommand, "ListAccountsCommand"),
      ListAccountsRequestFilterSensitiveLog: /* @__PURE__ */ __name(() => ListAccountsRequestFilterSensitiveLog, "ListAccountsRequestFilterSensitiveLog"),
      LogoutCommand: /* @__PURE__ */ __name(() => LogoutCommand, "LogoutCommand"),
      LogoutRequestFilterSensitiveLog: /* @__PURE__ */ __name(() => LogoutRequestFilterSensitiveLog, "LogoutRequestFilterSensitiveLog"),
      ResourceNotFoundException: /* @__PURE__ */ __name(() => ResourceNotFoundException, "ResourceNotFoundException"),
      RoleCredentialsFilterSensitiveLog: /* @__PURE__ */ __name(() => RoleCredentialsFilterSensitiveLog, "RoleCredentialsFilterSensitiveLog"),
      SSO: /* @__PURE__ */ __name(() => SSO, "SSO"),
      SSOClient: /* @__PURE__ */ __name(() => SSOClient, "SSOClient"),
      SSOServiceException: /* @__PURE__ */ __name(() => SSOServiceException, "SSOServiceException"),
      TooManyRequestsException: /* @__PURE__ */ __name(() => TooManyRequestsException, "TooManyRequestsException"),
      UnauthorizedException: /* @__PURE__ */ __name(() => UnauthorizedException, "UnauthorizedException"),
      __Client: /* @__PURE__ */ __name(() => import_smithy_client25.Client, "__Client"),
      paginateListAccountRoles: /* @__PURE__ */ __name(() => paginateListAccountRoles, "paginateListAccountRoles"),
      paginateListAccounts: /* @__PURE__ */ __name(() => paginateListAccounts, "paginateListAccounts")
    });
    module2.exports = __toCommonJS2(index_exports);
    var import_middleware_host_header3 = require_dist_cjs3();
    var import_middleware_logger3 = require_dist_cjs4();
    var import_middleware_recursion_detection3 = require_dist_cjs5();
    var import_middleware_user_agent3 = require_dist_cjs25();
    var import_config_resolver5 = require_dist_cjs27();
    var import_core17 = (init_dist_es(), __toCommonJS(dist_es_exports));
    var import_middleware_content_length3 = require_dist_cjs28();
    var import_middleware_endpoint6 = require_dist_cjs33();
    var import_middleware_retry5 = require_dist_cjs36();
    var import_httpAuthSchemeProvider5 = require_httpAuthSchemeProvider2();
    var resolveClientEndpointParameters3 = __name2((options) => {
      return Object.assign(options, {
        useDualstackEndpoint: options.useDualstackEndpoint ?? false,
        useFipsEndpoint: options.useFipsEndpoint ?? false,
        defaultSigningName: "awsssoportal"
      });
    }, "resolveClientEndpointParameters");
    var commonParams3 = {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" }
    };
    var import_runtimeConfig5 = require_runtimeConfig();
    var import_region_config_resolver3 = require_dist_cjs44();
    var import_protocol_http15 = require_dist_cjs2();
    var import_smithy_client25 = require_dist_cjs18();
    var getHttpAuthExtensionConfiguration3 = __name2((runtimeConfig) => {
      const _httpAuthSchemes = runtimeConfig.httpAuthSchemes;
      let _httpAuthSchemeProvider = runtimeConfig.httpAuthSchemeProvider;
      let _credentials = runtimeConfig.credentials;
      return {
        setHttpAuthScheme(httpAuthScheme) {
          const index = _httpAuthSchemes.findIndex((scheme) => scheme.schemeId === httpAuthScheme.schemeId);
          if (index === -1) {
            _httpAuthSchemes.push(httpAuthScheme);
          } else {
            _httpAuthSchemes.splice(index, 1, httpAuthScheme);
          }
        },
        httpAuthSchemes() {
          return _httpAuthSchemes;
        },
        setHttpAuthSchemeProvider(httpAuthSchemeProvider) {
          _httpAuthSchemeProvider = httpAuthSchemeProvider;
        },
        httpAuthSchemeProvider() {
          return _httpAuthSchemeProvider;
        },
        setCredentials(credentials) {
          _credentials = credentials;
        },
        credentials() {
          return _credentials;
        }
      };
    }, "getHttpAuthExtensionConfiguration");
    var resolveHttpAuthRuntimeConfig3 = __name2((config) => {
      return {
        httpAuthSchemes: config.httpAuthSchemes(),
        httpAuthSchemeProvider: config.httpAuthSchemeProvider(),
        credentials: config.credentials()
      };
    }, "resolveHttpAuthRuntimeConfig");
    var resolveRuntimeExtensions3 = __name2((runtimeConfig, extensions) => {
      const extensionConfiguration = Object.assign(
        (0, import_region_config_resolver3.getAwsRegionExtensionConfiguration)(runtimeConfig),
        (0, import_smithy_client25.getDefaultExtensionConfiguration)(runtimeConfig),
        (0, import_protocol_http15.getHttpHandlerExtensionConfiguration)(runtimeConfig),
        getHttpAuthExtensionConfiguration3(runtimeConfig)
      );
      extensions.forEach((extension) => extension.configure(extensionConfiguration));
      return Object.assign(
        runtimeConfig,
        (0, import_region_config_resolver3.resolveAwsRegionExtensionConfiguration)(extensionConfiguration),
        (0, import_smithy_client25.resolveDefaultRuntimeConfig)(extensionConfiguration),
        (0, import_protocol_http15.resolveHttpHandlerRuntimeConfig)(extensionConfiguration),
        resolveHttpAuthRuntimeConfig3(extensionConfiguration)
      );
    }, "resolveRuntimeExtensions");
    var SSOClient = class extends import_smithy_client25.Client {
      static {
        __name(this, "SSOClient");
      }
      static {
        __name2(this, "SSOClient");
      }
      /**
       * The resolved configuration of SSOClient class. This is resolved and normalized from the {@link SSOClientConfig | constructor configuration interface}.
       */
      config;
      constructor(...[configuration]) {
        const _config_0 = (0, import_runtimeConfig5.getRuntimeConfig)(configuration || {});
        super(_config_0);
        this.initConfig = _config_0;
        const _config_1 = resolveClientEndpointParameters3(_config_0);
        const _config_2 = (0, import_middleware_user_agent3.resolveUserAgentConfig)(_config_1);
        const _config_3 = (0, import_middleware_retry5.resolveRetryConfig)(_config_2);
        const _config_4 = (0, import_config_resolver5.resolveRegionConfig)(_config_3);
        const _config_5 = (0, import_middleware_host_header3.resolveHostHeaderConfig)(_config_4);
        const _config_6 = (0, import_middleware_endpoint6.resolveEndpointConfig)(_config_5);
        const _config_7 = (0, import_httpAuthSchemeProvider5.resolveHttpAuthSchemeConfig)(_config_6);
        const _config_8 = resolveRuntimeExtensions3(_config_7, configuration?.extensions || []);
        this.config = _config_8;
        this.middlewareStack.use((0, import_middleware_user_agent3.getUserAgentPlugin)(this.config));
        this.middlewareStack.use((0, import_middleware_retry5.getRetryPlugin)(this.config));
        this.middlewareStack.use((0, import_middleware_content_length3.getContentLengthPlugin)(this.config));
        this.middlewareStack.use((0, import_middleware_host_header3.getHostHeaderPlugin)(this.config));
        this.middlewareStack.use((0, import_middleware_logger3.getLoggerPlugin)(this.config));
        this.middlewareStack.use((0, import_middleware_recursion_detection3.getRecursionDetectionPlugin)(this.config));
        this.middlewareStack.use(
          (0, import_core17.getHttpAuthSchemeEndpointRuleSetPlugin)(this.config, {
            httpAuthSchemeParametersProvider: import_httpAuthSchemeProvider5.defaultSSOHttpAuthSchemeParametersProvider,
            identityProviderConfigProvider: __name2(async (config) => new import_core17.DefaultIdentityProviderConfig({
              "aws.auth#sigv4": config.credentials
            }), "identityProviderConfigProvider")
          })
        );
        this.middlewareStack.use((0, import_core17.getHttpSigningPlugin)(this.config));
      }
      /**
       * Destroy underlying resources, like sockets. It's usually not necessary to do this.
       * However in Node.js, it's best to explicitly shut down the client's agent when it is no longer needed.
       * Otherwise, sockets might stay open for quite a long time before the server terminates them.
       */
      destroy() {
        super.destroy();
      }
    };
    var import_middleware_serde5 = require_dist_cjs20();
    var SSOServiceException = class _SSOServiceException extends import_smithy_client25.ServiceException {
      static {
        __name(this, "_SSOServiceException");
      }
      static {
        __name2(this, "SSOServiceException");
      }
      /**
       * @internal
       */
      constructor(options) {
        super(options);
        Object.setPrototypeOf(this, _SSOServiceException.prototype);
      }
    };
    var InvalidRequestException2 = class _InvalidRequestException extends SSOServiceException {
      static {
        __name(this, "_InvalidRequestException");
      }
      static {
        __name2(this, "InvalidRequestException");
      }
      name = "InvalidRequestException";
      $fault = "client";
      /**
       * @internal
       */
      constructor(opts) {
        super({
          name: "InvalidRequestException",
          $fault: "client",
          ...opts
        });
        Object.setPrototypeOf(this, _InvalidRequestException.prototype);
      }
    };
    var ResourceNotFoundException = class _ResourceNotFoundException extends SSOServiceException {
      static {
        __name(this, "_ResourceNotFoundException");
      }
      static {
        __name2(this, "ResourceNotFoundException");
      }
      name = "ResourceNotFoundException";
      $fault = "client";
      /**
       * @internal
       */
      constructor(opts) {
        super({
          name: "ResourceNotFoundException",
          $fault: "client",
          ...opts
        });
        Object.setPrototypeOf(this, _ResourceNotFoundException.prototype);
      }
    };
    var TooManyRequestsException = class _TooManyRequestsException extends SSOServiceException {
      static {
        __name(this, "_TooManyRequestsException");
      }
      static {
        __name2(this, "TooManyRequestsException");
      }
      name = "TooManyRequestsException";
      $fault = "client";
      /**
       * @internal
       */
      constructor(opts) {
        super({
          name: "TooManyRequestsException",
          $fault: "client",
          ...opts
        });
        Object.setPrototypeOf(this, _TooManyRequestsException.prototype);
      }
    };
    var UnauthorizedException = class _UnauthorizedException extends SSOServiceException {
      static {
        __name(this, "_UnauthorizedException");
      }
      static {
        __name2(this, "UnauthorizedException");
      }
      name = "UnauthorizedException";
      $fault = "client";
      /**
       * @internal
       */
      constructor(opts) {
        super({
          name: "UnauthorizedException",
          $fault: "client",
          ...opts
        });
        Object.setPrototypeOf(this, _UnauthorizedException.prototype);
      }
    };
    var GetRoleCredentialsRequestFilterSensitiveLog = __name2((obj) => ({
      ...obj,
      ...obj.accessToken && { accessToken: import_smithy_client25.SENSITIVE_STRING }
    }), "GetRoleCredentialsRequestFilterSensitiveLog");
    var RoleCredentialsFilterSensitiveLog = __name2((obj) => ({
      ...obj,
      ...obj.secretAccessKey && { secretAccessKey: import_smithy_client25.SENSITIVE_STRING },
      ...obj.sessionToken && { sessionToken: import_smithy_client25.SENSITIVE_STRING }
    }), "RoleCredentialsFilterSensitiveLog");
    var GetRoleCredentialsResponseFilterSensitiveLog = __name2((obj) => ({
      ...obj,
      ...obj.roleCredentials && { roleCredentials: RoleCredentialsFilterSensitiveLog(obj.roleCredentials) }
    }), "GetRoleCredentialsResponseFilterSensitiveLog");
    var ListAccountRolesRequestFilterSensitiveLog = __name2((obj) => ({
      ...obj,
      ...obj.accessToken && { accessToken: import_smithy_client25.SENSITIVE_STRING }
    }), "ListAccountRolesRequestFilterSensitiveLog");
    var ListAccountsRequestFilterSensitiveLog = __name2((obj) => ({
      ...obj,
      ...obj.accessToken && { accessToken: import_smithy_client25.SENSITIVE_STRING }
    }), "ListAccountsRequestFilterSensitiveLog");
    var LogoutRequestFilterSensitiveLog = __name2((obj) => ({
      ...obj,
      ...obj.accessToken && { accessToken: import_smithy_client25.SENSITIVE_STRING }
    }), "LogoutRequestFilterSensitiveLog");
    var import_core22 = (init_dist_es2(), __toCommonJS(dist_es_exports2));
    var se_GetRoleCredentialsCommand = __name2(async (input, context) => {
      const b3 = (0, import_core17.requestBuilder)(input, context);
      const headers = (0, import_smithy_client25.map)({}, import_smithy_client25.isSerializableHeaderValue, {
        [_xasbt]: input[_aT]
      });
      b3.bp("/federation/credentials");
      const query = (0, import_smithy_client25.map)({
        [_rn]: [, (0, import_smithy_client25.expectNonNull)(input[_rN], `roleName`)],
        [_ai]: [, (0, import_smithy_client25.expectNonNull)(input[_aI], `accountId`)]
      });
      let body;
      b3.m("GET").h(headers).q(query).b(body);
      return b3.build();
    }, "se_GetRoleCredentialsCommand");
    var se_ListAccountRolesCommand = __name2(async (input, context) => {
      const b3 = (0, import_core17.requestBuilder)(input, context);
      const headers = (0, import_smithy_client25.map)({}, import_smithy_client25.isSerializableHeaderValue, {
        [_xasbt]: input[_aT]
      });
      b3.bp("/assignment/roles");
      const query = (0, import_smithy_client25.map)({
        [_nt]: [, input[_nT]],
        [_mr]: [() => input.maxResults !== void 0, () => input[_mR].toString()],
        [_ai]: [, (0, import_smithy_client25.expectNonNull)(input[_aI], `accountId`)]
      });
      let body;
      b3.m("GET").h(headers).q(query).b(body);
      return b3.build();
    }, "se_ListAccountRolesCommand");
    var se_ListAccountsCommand = __name2(async (input, context) => {
      const b3 = (0, import_core17.requestBuilder)(input, context);
      const headers = (0, import_smithy_client25.map)({}, import_smithy_client25.isSerializableHeaderValue, {
        [_xasbt]: input[_aT]
      });
      b3.bp("/assignment/accounts");
      const query = (0, import_smithy_client25.map)({
        [_nt]: [, input[_nT]],
        [_mr]: [() => input.maxResults !== void 0, () => input[_mR].toString()]
      });
      let body;
      b3.m("GET").h(headers).q(query).b(body);
      return b3.build();
    }, "se_ListAccountsCommand");
    var se_LogoutCommand = __name2(async (input, context) => {
      const b3 = (0, import_core17.requestBuilder)(input, context);
      const headers = (0, import_smithy_client25.map)({}, import_smithy_client25.isSerializableHeaderValue, {
        [_xasbt]: input[_aT]
      });
      b3.bp("/logout");
      let body;
      b3.m("POST").h(headers).b(body);
      return b3.build();
    }, "se_LogoutCommand");
    var de_GetRoleCredentialsCommand = __name2(async (output, context) => {
      if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_CommandError3(output, context);
      }
      const contents = (0, import_smithy_client25.map)({
        $metadata: deserializeMetadata3(output)
      });
      const data = (0, import_smithy_client25.expectNonNull)((0, import_smithy_client25.expectObject)(await (0, import_core22.parseJsonBody)(output.body, context)), "body");
      const doc = (0, import_smithy_client25.take)(data, {
        roleCredentials: import_smithy_client25._json
      });
      Object.assign(contents, doc);
      return contents;
    }, "de_GetRoleCredentialsCommand");
    var de_ListAccountRolesCommand = __name2(async (output, context) => {
      if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_CommandError3(output, context);
      }
      const contents = (0, import_smithy_client25.map)({
        $metadata: deserializeMetadata3(output)
      });
      const data = (0, import_smithy_client25.expectNonNull)((0, import_smithy_client25.expectObject)(await (0, import_core22.parseJsonBody)(output.body, context)), "body");
      const doc = (0, import_smithy_client25.take)(data, {
        nextToken: import_smithy_client25.expectString,
        roleList: import_smithy_client25._json
      });
      Object.assign(contents, doc);
      return contents;
    }, "de_ListAccountRolesCommand");
    var de_ListAccountsCommand = __name2(async (output, context) => {
      if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_CommandError3(output, context);
      }
      const contents = (0, import_smithy_client25.map)({
        $metadata: deserializeMetadata3(output)
      });
      const data = (0, import_smithy_client25.expectNonNull)((0, import_smithy_client25.expectObject)(await (0, import_core22.parseJsonBody)(output.body, context)), "body");
      const doc = (0, import_smithy_client25.take)(data, {
        accountList: import_smithy_client25._json,
        nextToken: import_smithy_client25.expectString
      });
      Object.assign(contents, doc);
      return contents;
    }, "de_ListAccountsCommand");
    var de_LogoutCommand = __name2(async (output, context) => {
      if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_CommandError3(output, context);
      }
      const contents = (0, import_smithy_client25.map)({
        $metadata: deserializeMetadata3(output)
      });
      await (0, import_smithy_client25.collectBody)(output.body, context);
      return contents;
    }, "de_LogoutCommand");
    var de_CommandError3 = __name2(async (output, context) => {
      const parsedOutput = {
        ...output,
        body: await (0, import_core22.parseJsonErrorBody)(output.body, context)
      };
      const errorCode = (0, import_core22.loadRestJsonErrorCode)(output, parsedOutput.body);
      switch (errorCode) {
        case "InvalidRequestException":
        case "com.amazonaws.sso#InvalidRequestException":
          throw await de_InvalidRequestExceptionRes2(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.sso#ResourceNotFoundException":
          throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
        case "TooManyRequestsException":
        case "com.amazonaws.sso#TooManyRequestsException":
          throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
        case "UnauthorizedException":
        case "com.amazonaws.sso#UnauthorizedException":
          throw await de_UnauthorizedExceptionRes(parsedOutput, context);
        default:
          const parsedBody = parsedOutput.body;
          return throwDefaultError3({
            output,
            parsedBody,
            errorCode
          });
      }
    }, "de_CommandError");
    var throwDefaultError3 = (0, import_smithy_client25.withBaseException)(SSOServiceException);
    var de_InvalidRequestExceptionRes2 = __name2(async (parsedOutput, context) => {
      const contents = (0, import_smithy_client25.map)({});
      const data = parsedOutput.body;
      const doc = (0, import_smithy_client25.take)(data, {
        message: import_smithy_client25.expectString
      });
      Object.assign(contents, doc);
      const exception = new InvalidRequestException2({
        $metadata: deserializeMetadata3(parsedOutput),
        ...contents
      });
      return (0, import_smithy_client25.decorateServiceException)(exception, parsedOutput.body);
    }, "de_InvalidRequestExceptionRes");
    var de_ResourceNotFoundExceptionRes = __name2(async (parsedOutput, context) => {
      const contents = (0, import_smithy_client25.map)({});
      const data = parsedOutput.body;
      const doc = (0, import_smithy_client25.take)(data, {
        message: import_smithy_client25.expectString
      });
      Object.assign(contents, doc);
      const exception = new ResourceNotFoundException({
        $metadata: deserializeMetadata3(parsedOutput),
        ...contents
      });
      return (0, import_smithy_client25.decorateServiceException)(exception, parsedOutput.body);
    }, "de_ResourceNotFoundExceptionRes");
    var de_TooManyRequestsExceptionRes = __name2(async (parsedOutput, context) => {
      const contents = (0, import_smithy_client25.map)({});
      const data = parsedOutput.body;
      const doc = (0, import_smithy_client25.take)(data, {
        message: import_smithy_client25.expectString
      });
      Object.assign(contents, doc);
      const exception = new TooManyRequestsException({
        $metadata: deserializeMetadata3(parsedOutput),
        ...contents
      });
      return (0, import_smithy_client25.decorateServiceException)(exception, parsedOutput.body);
    }, "de_TooManyRequestsExceptionRes");
    var de_UnauthorizedExceptionRes = __name2(async (parsedOutput, context) => {
      const contents = (0, import_smithy_client25.map)({});
      const data = parsedOutput.body;
      const doc = (0, import_smithy_client25.take)(data, {
        message: import_smithy_client25.expectString
      });
      Object.assign(contents, doc);
      const exception = new UnauthorizedException({
        $metadata: deserializeMetadata3(parsedOutput),
        ...contents
      });
      return (0, import_smithy_client25.decorateServiceException)(exception, parsedOutput.body);
    }, "de_UnauthorizedExceptionRes");
    var deserializeMetadata3 = __name2((output) => ({
      httpStatusCode: output.statusCode,
      requestId: output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"] ?? output.headers["x-amz-request-id"],
      extendedRequestId: output.headers["x-amz-id-2"],
      cfId: output.headers["x-amz-cf-id"]
    }), "deserializeMetadata");
    var _aI = "accountId";
    var _aT = "accessToken";
    var _ai = "account_id";
    var _mR = "maxResults";
    var _mr = "max_result";
    var _nT = "nextToken";
    var _nt = "next_token";
    var _rN = "roleName";
    var _rn = "role_name";
    var _xasbt = "x-amz-sso_bearer_token";
    var GetRoleCredentialsCommand = class extends import_smithy_client25.Command.classBuilder().ep(commonParams3).m(function(Command, cs, config, o3) {
      return [
        (0, import_middleware_serde5.getSerdePlugin)(config, this.serialize, this.deserialize),
        (0, import_middleware_endpoint6.getEndpointPlugin)(config, Command.getEndpointParameterInstructions())
      ];
    }).s("SWBPortalService", "GetRoleCredentials", {}).n("SSOClient", "GetRoleCredentialsCommand").f(GetRoleCredentialsRequestFilterSensitiveLog, GetRoleCredentialsResponseFilterSensitiveLog).ser(se_GetRoleCredentialsCommand).de(de_GetRoleCredentialsCommand).build() {
      static {
        __name(this, "GetRoleCredentialsCommand");
      }
      static {
        __name2(this, "GetRoleCredentialsCommand");
      }
    };
    var ListAccountRolesCommand = class extends import_smithy_client25.Command.classBuilder().ep(commonParams3).m(function(Command, cs, config, o3) {
      return [
        (0, import_middleware_serde5.getSerdePlugin)(config, this.serialize, this.deserialize),
        (0, import_middleware_endpoint6.getEndpointPlugin)(config, Command.getEndpointParameterInstructions())
      ];
    }).s("SWBPortalService", "ListAccountRoles", {}).n("SSOClient", "ListAccountRolesCommand").f(ListAccountRolesRequestFilterSensitiveLog, void 0).ser(se_ListAccountRolesCommand).de(de_ListAccountRolesCommand).build() {
      static {
        __name(this, "ListAccountRolesCommand");
      }
      static {
        __name2(this, "ListAccountRolesCommand");
      }
    };
    var ListAccountsCommand = class extends import_smithy_client25.Command.classBuilder().ep(commonParams3).m(function(Command, cs, config, o3) {
      return [
        (0, import_middleware_serde5.getSerdePlugin)(config, this.serialize, this.deserialize),
        (0, import_middleware_endpoint6.getEndpointPlugin)(config, Command.getEndpointParameterInstructions())
      ];
    }).s("SWBPortalService", "ListAccounts", {}).n("SSOClient", "ListAccountsCommand").f(ListAccountsRequestFilterSensitiveLog, void 0).ser(se_ListAccountsCommand).de(de_ListAccountsCommand).build() {
      static {
        __name(this, "ListAccountsCommand");
      }
      static {
        __name2(this, "ListAccountsCommand");
      }
    };
    var LogoutCommand = class extends import_smithy_client25.Command.classBuilder().ep(commonParams3).m(function(Command, cs, config, o3) {
      return [
        (0, import_middleware_serde5.getSerdePlugin)(config, this.serialize, this.deserialize),
        (0, import_middleware_endpoint6.getEndpointPlugin)(config, Command.getEndpointParameterInstructions())
      ];
    }).s("SWBPortalService", "Logout", {}).n("SSOClient", "LogoutCommand").f(LogoutRequestFilterSensitiveLog, void 0).ser(se_LogoutCommand).de(de_LogoutCommand).build() {
      static {
        __name(this, "LogoutCommand");
      }
      static {
        __name2(this, "LogoutCommand");
      }
    };
    var commands3 = {
      GetRoleCredentialsCommand,
      ListAccountRolesCommand,
      ListAccountsCommand,
      LogoutCommand
    };
    var SSO = class extends SSOClient {
      static {
        __name(this, "SSO");
      }
      static {
        __name2(this, "SSO");
      }
    };
    (0, import_smithy_client25.createAggregatedClient)(commands3, SSO);
    var paginateListAccountRoles = (0, import_core17.createPaginator)(SSOClient, ListAccountRolesCommand, "nextToken", "nextToken", "maxResults");
    var paginateListAccounts = (0, import_core17.createPaginator)(SSOClient, ListAccountsCommand, "nextToken", "nextToken", "maxResults");
  }
});

// ../../node_modules/.pnpm/@aws-sdk+nested-clients@3.821.0/node_modules/@aws-sdk/nested-clients/dist-es/submodules/sso-oidc/auth/httpAuthSchemeProvider.js
function createAwsAuthSigv4HttpAuthOption(authParameters) {
  return {
    schemeId: "aws.auth#sigv4",
    signingProperties: {
      name: "sso-oauth",
      region: authParameters.region
    },
    propertiesExtractor: /* @__PURE__ */ __name((config, context) => ({
      signingProperties: {
        config,
        context
      }
    }), "propertiesExtractor")
  };
}
function createSmithyApiNoAuthHttpAuthOption(authParameters) {
  return {
    schemeId: "smithy.api#noAuth"
  };
}
var import_util_middleware5, defaultSSOOIDCHttpAuthSchemeParametersProvider, defaultSSOOIDCHttpAuthSchemeProvider, resolveHttpAuthSchemeConfig;
var init_httpAuthSchemeProvider = __esm({
  "../../node_modules/.pnpm/@aws-sdk+nested-clients@3.821.0/node_modules/@aws-sdk/nested-clients/dist-es/submodules/sso-oidc/auth/httpAuthSchemeProvider.js"() {
    init_dist_es2();
    import_util_middleware5 = __toESM(require_dist_cjs17());
    defaultSSOOIDCHttpAuthSchemeParametersProvider = /* @__PURE__ */ __name(async (config, context, input) => {
      return {
        operation: (0, import_util_middleware5.getSmithyContext)(context).operation,
        region: await (0, import_util_middleware5.normalizeProvider)(config.region)() || (() => {
          throw new Error("expected `region` to be configured for `aws.auth#sigv4`");
        })()
      };
    }, "defaultSSOOIDCHttpAuthSchemeParametersProvider");
    __name(createAwsAuthSigv4HttpAuthOption, "createAwsAuthSigv4HttpAuthOption");
    __name(createSmithyApiNoAuthHttpAuthOption, "createSmithyApiNoAuthHttpAuthOption");
    defaultSSOOIDCHttpAuthSchemeProvider = /* @__PURE__ */ __name((authParameters) => {
      const options = [];
      switch (authParameters.operation) {
        case "CreateToken": {
          options.push(createSmithyApiNoAuthHttpAuthOption(authParameters));
          break;
        }
        default: {
          options.push(createAwsAuthSigv4HttpAuthOption(authParameters));
        }
      }
      return options;
    }, "defaultSSOOIDCHttpAuthSchemeProvider");
    resolveHttpAuthSchemeConfig = /* @__PURE__ */ __name((config) => {
      const config_0 = resolveAwsSdkSigV4Config(config);
      return Object.assign(config_0, {
        authSchemePreference: (0, import_util_middleware5.normalizeProvider)(config.authSchemePreference ?? [])
      });
    }, "resolveHttpAuthSchemeConfig");
  }
});

// ../../node_modules/.pnpm/@aws-sdk+nested-clients@3.821.0/node_modules/@aws-sdk/nested-clients/dist-es/submodules/sso-oidc/endpoint/EndpointParameters.js
var resolveClientEndpointParameters, commonParams;
var init_EndpointParameters = __esm({
  "../../node_modules/.pnpm/@aws-sdk+nested-clients@3.821.0/node_modules/@aws-sdk/nested-clients/dist-es/submodules/sso-oidc/endpoint/EndpointParameters.js"() {
    resolveClientEndpointParameters = /* @__PURE__ */ __name((options) => {
      return Object.assign(options, {
        useDualstackEndpoint: options.useDualstackEndpoint ?? false,
        useFipsEndpoint: options.useFipsEndpoint ?? false,
        defaultSigningName: "sso-oauth"
      });
    }, "resolveClientEndpointParameters");
    commonParams = {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" }
    };
  }
});

// ../../node_modules/.pnpm/@aws-sdk+nested-clients@3.821.0/node_modules/@aws-sdk/nested-clients/package.json
var package_default;
var init_package = __esm({
  "../../node_modules/.pnpm/@aws-sdk+nested-clients@3.821.0/node_modules/@aws-sdk/nested-clients/package.json"() {
    package_default = {
      name: "@aws-sdk/nested-clients",
      version: "3.821.0",
      description: "Nested clients for AWS SDK packages.",
      main: "./dist-cjs/index.js",
      module: "./dist-es/index.js",
      types: "./dist-types/index.d.ts",
      scripts: {
        build: "yarn lint && concurrently 'yarn:build:cjs' 'yarn:build:es' 'yarn:build:types'",
        "build:cjs": "node ../../scripts/compilation/inline nested-clients",
        "build:es": "tsc -p tsconfig.es.json",
        "build:include:deps": "lerna run --scope $npm_package_name --include-dependencies build",
        "build:types": "tsc -p tsconfig.types.json",
        "build:types:downlevel": "downlevel-dts dist-types dist-types/ts3.4",
        clean: "rimraf ./dist-* && rimraf *.tsbuildinfo",
        lint: "node ../../scripts/validation/submodules-linter.js --pkg nested-clients",
        test: "yarn g:vitest run",
        "test:watch": "yarn g:vitest watch"
      },
      engines: {
        node: ">=18.0.0"
      },
      author: {
        name: "AWS SDK for JavaScript Team",
        url: "https://aws.amazon.com/javascript/"
      },
      license: "Apache-2.0",
      dependencies: {
        "@aws-crypto/sha256-browser": "5.2.0",
        "@aws-crypto/sha256-js": "5.2.0",
        "@aws-sdk/core": "3.821.0",
        "@aws-sdk/middleware-host-header": "3.821.0",
        "@aws-sdk/middleware-logger": "3.821.0",
        "@aws-sdk/middleware-recursion-detection": "3.821.0",
        "@aws-sdk/middleware-user-agent": "3.821.0",
        "@aws-sdk/region-config-resolver": "3.821.0",
        "@aws-sdk/types": "3.821.0",
        "@aws-sdk/util-endpoints": "3.821.0",
        "@aws-sdk/util-user-agent-browser": "3.821.0",
        "@aws-sdk/util-user-agent-node": "3.821.0",
        "@smithy/config-resolver": "^4.1.4",
        "@smithy/core": "^3.5.1",
        "@smithy/fetch-http-handler": "^5.0.4",
        "@smithy/hash-node": "^4.0.4",
        "@smithy/invalid-dependency": "^4.0.4",
        "@smithy/middleware-content-length": "^4.0.4",
        "@smithy/middleware-endpoint": "^4.1.9",
        "@smithy/middleware-retry": "^4.1.10",
        "@smithy/middleware-serde": "^4.0.8",
        "@smithy/middleware-stack": "^4.0.4",
        "@smithy/node-config-provider": "^4.1.3",
        "@smithy/node-http-handler": "^4.0.6",
        "@smithy/protocol-http": "^5.1.2",
        "@smithy/smithy-client": "^4.4.1",
        "@smithy/types": "^4.3.1",
        "@smithy/url-parser": "^4.0.4",
        "@smithy/util-base64": "^4.0.0",
        "@smithy/util-body-length-browser": "^4.0.0",
        "@smithy/util-body-length-node": "^4.0.0",
        "@smithy/util-defaults-mode-browser": "^4.0.17",
        "@smithy/util-defaults-mode-node": "^4.0.17",
        "@smithy/util-endpoints": "^3.0.6",
        "@smithy/util-middleware": "^4.0.4",
        "@smithy/util-retry": "^4.0.5",
        "@smithy/util-utf8": "^4.0.0",
        tslib: "^2.6.2"
      },
      devDependencies: {
        concurrently: "7.0.0",
        "downlevel-dts": "0.10.1",
        rimraf: "3.0.2",
        typescript: "~5.8.3"
      },
      typesVersions: {
        "<4.0": {
          "dist-types/*": [
            "dist-types/ts3.4/*"
          ]
        }
      },
      files: [
        "./sso-oidc.d.ts",
        "./sso-oidc.js",
        "./sts.d.ts",
        "./sts.js",
        "dist-*/**"
      ],
      browser: {
        "./dist-es/submodules/sso-oidc/runtimeConfig": "./dist-es/submodules/sso-oidc/runtimeConfig.browser",
        "./dist-es/submodules/sts/runtimeConfig": "./dist-es/submodules/sts/runtimeConfig.browser"
      },
      "react-native": {},
      homepage: "https://github.com/aws/aws-sdk-js-v3/tree/main/packages/nested-clients",
      repository: {
        type: "git",
        url: "https://github.com/aws/aws-sdk-js-v3.git",
        directory: "packages/nested-clients"
      },
      exports: {
        "./sso-oidc": {
          types: "./dist-types/submodules/sso-oidc/index.d.ts",
          module: "./dist-es/submodules/sso-oidc/index.js",
          node: "./dist-cjs/submodules/sso-oidc/index.js",
          import: "./dist-es/submodules/sso-oidc/index.js",
          require: "./dist-cjs/submodules/sso-oidc/index.js"
        },
        "./sts": {
          types: "./dist-types/submodules/sts/index.d.ts",
          module: "./dist-es/submodules/sts/index.js",
          node: "./dist-cjs/submodules/sts/index.js",
          import: "./dist-es/submodules/sts/index.js",
          require: "./dist-cjs/submodules/sts/index.js"
        }
      }
    };
  }
});

// ../../node_modules/.pnpm/@aws-sdk+nested-clients@3.821.0/node_modules/@aws-sdk/nested-clients/dist-es/submodules/sso-oidc/endpoint/ruleset.js
var u, v, w, x, a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, _data, ruleSet;
var init_ruleset = __esm({
  "../../node_modules/.pnpm/@aws-sdk+nested-clients@3.821.0/node_modules/@aws-sdk/nested-clients/dist-es/submodules/sso-oidc/endpoint/ruleset.js"() {
    u = "required", v = "fn", w = "argv", x = "ref";
    a = true, b = "isSet", c = "booleanEquals", d = "error", e = "endpoint", f = "tree", g = "PartitionResult", h = "getAttr", i = { [u]: false, "type": "String" }, j = { [u]: true, "default": false, "type": "Boolean" }, k = { [x]: "Endpoint" }, l = { [v]: c, [w]: [{ [x]: "UseFIPS" }, true] }, m = { [v]: c, [w]: [{ [x]: "UseDualStack" }, true] }, n = {}, o = { [v]: h, [w]: [{ [x]: g }, "supportsFIPS"] }, p = { [x]: g }, q = { [v]: c, [w]: [true, { [v]: h, [w]: [p, "supportsDualStack"] }] }, r = [l], s = [m], t = [{ [x]: "Region" }];
    _data = { version: "1.0", parameters: { Region: i, UseDualStack: j, UseFIPS: j, Endpoint: i }, rules: [{ conditions: [{ [v]: b, [w]: [k] }], rules: [{ conditions: r, error: "Invalid Configuration: FIPS and custom endpoint are not supported", type: d }, { conditions: s, error: "Invalid Configuration: Dualstack and custom endpoint are not supported", type: d }, { endpoint: { url: k, properties: n, headers: n }, type: e }], type: f }, { conditions: [{ [v]: b, [w]: t }], rules: [{ conditions: [{ [v]: "aws.partition", [w]: t, assign: g }], rules: [{ conditions: [l, m], rules: [{ conditions: [{ [v]: c, [w]: [a, o] }, q], rules: [{ endpoint: { url: "https://oidc-fips.{Region}.{PartitionResult#dualStackDnsSuffix}", properties: n, headers: n }, type: e }], type: f }, { error: "FIPS and DualStack are enabled, but this partition does not support one or both", type: d }], type: f }, { conditions: r, rules: [{ conditions: [{ [v]: c, [w]: [o, a] }], rules: [{ conditions: [{ [v]: "stringEquals", [w]: [{ [v]: h, [w]: [p, "name"] }, "aws-us-gov"] }], endpoint: { url: "https://oidc.{Region}.amazonaws.com", properties: n, headers: n }, type: e }, { endpoint: { url: "https://oidc-fips.{Region}.{PartitionResult#dnsSuffix}", properties: n, headers: n }, type: e }], type: f }, { error: "FIPS is enabled but this partition does not support FIPS", type: d }], type: f }, { conditions: s, rules: [{ conditions: [q], rules: [{ endpoint: { url: "https://oidc.{Region}.{PartitionResult#dualStackDnsSuffix}", properties: n, headers: n }, type: e }], type: f }, { error: "DualStack is enabled but this partition does not support DualStack", type: d }], type: f }, { endpoint: { url: "https://oidc.{Region}.{PartitionResult#dnsSuffix}", properties: n, headers: n }, type: e }], type: f }], type: f }, { error: "Invalid Configuration: Missing Region", type: d }] };
    ruleSet = _data;
  }
});

// ../../node_modules/.pnpm/@aws-sdk+nested-clients@3.821.0/node_modules/@aws-sdk/nested-clients/dist-es/submodules/sso-oidc/endpoint/endpointResolver.js
var import_util_endpoints, import_util_endpoints2, cache, defaultEndpointResolver;
var init_endpointResolver = __esm({
  "../../node_modules/.pnpm/@aws-sdk+nested-clients@3.821.0/node_modules/@aws-sdk/nested-clients/dist-es/submodules/sso-oidc/endpoint/endpointResolver.js"() {
    import_util_endpoints = __toESM(require_dist_cjs22());
    import_util_endpoints2 = __toESM(require_dist_cjs21());
    init_ruleset();
    cache = new import_util_endpoints2.EndpointCache({
      size: 50,
      params: ["Endpoint", "Region", "UseDualStack", "UseFIPS"]
    });
    defaultEndpointResolver = /* @__PURE__ */ __name((endpointParams, context = {}) => {
      return cache.get(endpointParams, () => (0, import_util_endpoints2.resolveEndpoint)(ruleSet, {
        endpointParams,
        logger: context.logger
      }));
    }, "defaultEndpointResolver");
    import_util_endpoints2.customEndpointFunctions.aws = import_util_endpoints.awsEndpointFunctions;
  }
});

// ../../node_modules/.pnpm/@aws-sdk+nested-clients@3.821.0/node_modules/@aws-sdk/nested-clients/dist-es/submodules/sso-oidc/runtimeConfig.shared.js
var import_smithy_client4, import_url_parser, import_util_base643, import_util_utf83, getRuntimeConfig;
var init_runtimeConfig_shared = __esm({
  "../../node_modules/.pnpm/@aws-sdk+nested-clients@3.821.0/node_modules/@aws-sdk/nested-clients/dist-es/submodules/sso-oidc/runtimeConfig.shared.js"() {
    init_dist_es2();
    init_dist_es();
    import_smithy_client4 = __toESM(require_dist_cjs18());
    import_url_parser = __toESM(require_dist_cjs32());
    import_util_base643 = __toESM(require_dist_cjs10());
    import_util_utf83 = __toESM(require_dist_cjs9());
    init_httpAuthSchemeProvider();
    init_endpointResolver();
    getRuntimeConfig = /* @__PURE__ */ __name((config) => {
      return {
        apiVersion: "2019-06-10",
        base64Decoder: config?.base64Decoder ?? import_util_base643.fromBase64,
        base64Encoder: config?.base64Encoder ?? import_util_base643.toBase64,
        disableHostPrefix: config?.disableHostPrefix ?? false,
        endpointProvider: config?.endpointProvider ?? defaultEndpointResolver,
        extensions: config?.extensions ?? [],
        httpAuthSchemeProvider: config?.httpAuthSchemeProvider ?? defaultSSOOIDCHttpAuthSchemeProvider,
        httpAuthSchemes: config?.httpAuthSchemes ?? [
          {
            schemeId: "aws.auth#sigv4",
            identityProvider: /* @__PURE__ */ __name((ipc) => ipc.getIdentityProvider("aws.auth#sigv4"), "identityProvider"),
            signer: new AwsSdkSigV4Signer()
          },
          {
            schemeId: "smithy.api#noAuth",
            identityProvider: /* @__PURE__ */ __name((ipc) => ipc.getIdentityProvider("smithy.api#noAuth") || (async () => ({})), "identityProvider"),
            signer: new NoAuthSigner()
          }
        ],
        logger: config?.logger ?? new import_smithy_client4.NoOpLogger(),
        serviceId: config?.serviceId ?? "SSO OIDC",
        urlParser: config?.urlParser ?? import_url_parser.parseUrl,
        utf8Decoder: config?.utf8Decoder ?? import_util_utf83.fromUtf8,
        utf8Encoder: config?.utf8Encoder ?? import_util_utf83.toUtf8
      };
    }, "getRuntimeConfig");
  }
});

// ../../node_modules/.pnpm/@aws-sdk+nested-clients@3.821.0/node_modules/@aws-sdk/nested-clients/dist-es/submodules/sso-oidc/runtimeConfig.js
var import_util_user_agent_node, import_config_resolver, import_hash_node, import_middleware_retry, import_node_config_provider, import_node_http_handler, import_util_body_length_node, import_util_retry, import_smithy_client5, import_util_defaults_mode_node, import_smithy_client6, getRuntimeConfig2;
var init_runtimeConfig = __esm({
  "../../node_modules/.pnpm/@aws-sdk+nested-clients@3.821.0/node_modules/@aws-sdk/nested-clients/dist-es/submodules/sso-oidc/runtimeConfig.js"() {
    init_package();
    init_dist_es2();
    import_util_user_agent_node = __toESM(require_dist_cjs40());
    import_config_resolver = __toESM(require_dist_cjs27());
    import_hash_node = __toESM(require_dist_cjs41());
    import_middleware_retry = __toESM(require_dist_cjs36());
    import_node_config_provider = __toESM(require_dist_cjs30());
    import_node_http_handler = __toESM(require_dist_cjs13());
    import_util_body_length_node = __toESM(require_dist_cjs42());
    import_util_retry = __toESM(require_dist_cjs35());
    init_runtimeConfig_shared();
    import_smithy_client5 = __toESM(require_dist_cjs18());
    import_util_defaults_mode_node = __toESM(require_dist_cjs43());
    import_smithy_client6 = __toESM(require_dist_cjs18());
    getRuntimeConfig2 = /* @__PURE__ */ __name((config) => {
      (0, import_smithy_client6.emitWarningIfUnsupportedVersion)(process.version);
      const defaultsMode = (0, import_util_defaults_mode_node.resolveDefaultsModeConfig)(config);
      const defaultConfigProvider = /* @__PURE__ */ __name(() => defaultsMode().then(import_smithy_client5.loadConfigsForDefaultMode), "defaultConfigProvider");
      const clientSharedValues = getRuntimeConfig(config);
      emitWarningIfUnsupportedVersion(process.version);
      const loaderConfig = {
        profile: config?.profile,
        logger: clientSharedValues.logger
      };
      return {
        ...clientSharedValues,
        ...config,
        runtime: "node",
        defaultsMode,
        authSchemePreference: config?.authSchemePreference ?? (0, import_node_config_provider.loadConfig)(NODE_AUTH_SCHEME_PREFERENCE_OPTIONS, loaderConfig),
        bodyLengthChecker: config?.bodyLengthChecker ?? import_util_body_length_node.calculateBodyLength,
        defaultUserAgentProvider: config?.defaultUserAgentProvider ?? (0, import_util_user_agent_node.createDefaultUserAgentProvider)({ serviceId: clientSharedValues.serviceId, clientVersion: package_default.version }),
        maxAttempts: config?.maxAttempts ?? (0, import_node_config_provider.loadConfig)(import_middleware_retry.NODE_MAX_ATTEMPT_CONFIG_OPTIONS, config),
        region: config?.region ?? (0, import_node_config_provider.loadConfig)(import_config_resolver.NODE_REGION_CONFIG_OPTIONS, { ...import_config_resolver.NODE_REGION_CONFIG_FILE_OPTIONS, ...loaderConfig }),
        requestHandler: import_node_http_handler.NodeHttpHandler.create(config?.requestHandler ?? defaultConfigProvider),
        retryMode: config?.retryMode ?? (0, import_node_config_provider.loadConfig)({
          ...import_middleware_retry.NODE_RETRY_MODE_CONFIG_OPTIONS,
          default: /* @__PURE__ */ __name(async () => (await defaultConfigProvider()).retryMode || import_util_retry.DEFAULT_RETRY_MODE, "default")
        }, config),
        sha256: config?.sha256 ?? import_hash_node.Hash.bind(null, "sha256"),
        streamCollector: config?.streamCollector ?? import_node_http_handler.streamCollector,
        useDualstackEndpoint: config?.useDualstackEndpoint ?? (0, import_node_config_provider.loadConfig)(import_config_resolver.NODE_USE_DUALSTACK_ENDPOINT_CONFIG_OPTIONS, loaderConfig),
        useFipsEndpoint: config?.useFipsEndpoint ?? (0, import_node_config_provider.loadConfig)(import_config_resolver.NODE_USE_FIPS_ENDPOINT_CONFIG_OPTIONS, loaderConfig),
        userAgentAppId: config?.userAgentAppId ?? (0, import_node_config_provider.loadConfig)(import_util_user_agent_node.NODE_APP_ID_CONFIG_OPTIONS, loaderConfig)
      };
    }, "getRuntimeConfig");
  }
});

// ../../node_modules/.pnpm/@aws-sdk+nested-clients@3.821.0/node_modules/@aws-sdk/nested-clients/dist-es/submodules/sso-oidc/auth/httpAuthExtensionConfiguration.js
var getHttpAuthExtensionConfiguration, resolveHttpAuthRuntimeConfig;
var init_httpAuthExtensionConfiguration = __esm({
  "../../node_modules/.pnpm/@aws-sdk+nested-clients@3.821.0/node_modules/@aws-sdk/nested-clients/dist-es/submodules/sso-oidc/auth/httpAuthExtensionConfiguration.js"() {
    getHttpAuthExtensionConfiguration = /* @__PURE__ */ __name((runtimeConfig) => {
      const _httpAuthSchemes = runtimeConfig.httpAuthSchemes;
      let _httpAuthSchemeProvider = runtimeConfig.httpAuthSchemeProvider;
      let _credentials = runtimeConfig.credentials;
      return {
        setHttpAuthScheme(httpAuthScheme) {
          const index = _httpAuthSchemes.findIndex((scheme) => scheme.schemeId === httpAuthScheme.schemeId);
          if (index === -1) {
            _httpAuthSchemes.push(httpAuthScheme);
          } else {
            _httpAuthSchemes.splice(index, 1, httpAuthScheme);
          }
        },
        httpAuthSchemes() {
          return _httpAuthSchemes;
        },
        setHttpAuthSchemeProvider(httpAuthSchemeProvider) {
          _httpAuthSchemeProvider = httpAuthSchemeProvider;
        },
        httpAuthSchemeProvider() {
          return _httpAuthSchemeProvider;
        },
        setCredentials(credentials) {
          _credentials = credentials;
        },
        credentials() {
          return _credentials;
        }
      };
    }, "getHttpAuthExtensionConfiguration");
    resolveHttpAuthRuntimeConfig = /* @__PURE__ */ __name((config) => {
      return {
        httpAuthSchemes: config.httpAuthSchemes(),
        httpAuthSchemeProvider: config.httpAuthSchemeProvider(),
        credentials: config.credentials()
      };
    }, "resolveHttpAuthRuntimeConfig");
  }
});

// ../../node_modules/.pnpm/@aws-sdk+nested-clients@3.821.0/node_modules/@aws-sdk/nested-clients/dist-es/submodules/sso-oidc/runtimeExtensions.js
var import_region_config_resolver, import_protocol_http12, import_smithy_client7, resolveRuntimeExtensions;
var init_runtimeExtensions = __esm({
  "../../node_modules/.pnpm/@aws-sdk+nested-clients@3.821.0/node_modules/@aws-sdk/nested-clients/dist-es/submodules/sso-oidc/runtimeExtensions.js"() {
    import_region_config_resolver = __toESM(require_dist_cjs44());
    import_protocol_http12 = __toESM(require_dist_cjs2());
    import_smithy_client7 = __toESM(require_dist_cjs18());
    init_httpAuthExtensionConfiguration();
    resolveRuntimeExtensions = /* @__PURE__ */ __name((runtimeConfig, extensions) => {
      const extensionConfiguration = Object.assign((0, import_region_config_resolver.getAwsRegionExtensionConfiguration)(runtimeConfig), (0, import_smithy_client7.getDefaultExtensionConfiguration)(runtimeConfig), (0, import_protocol_http12.getHttpHandlerExtensionConfiguration)(runtimeConfig), getHttpAuthExtensionConfiguration(runtimeConfig));
      extensions.forEach((extension) => extension.configure(extensionConfiguration));
      return Object.assign(runtimeConfig, (0, import_region_config_resolver.resolveAwsRegionExtensionConfiguration)(extensionConfiguration), (0, import_smithy_client7.resolveDefaultRuntimeConfig)(extensionConfiguration), (0, import_protocol_http12.resolveHttpHandlerRuntimeConfig)(extensionConfiguration), resolveHttpAuthRuntimeConfig(extensionConfiguration));
    }, "resolveRuntimeExtensions");
  }
});

// ../../node_modules/.pnpm/@aws-sdk+nested-clients@3.821.0/node_modules/@aws-sdk/nested-clients/dist-es/submodules/sso-oidc/SSOOIDCClient.js
var import_middleware_host_header, import_middleware_logger, import_middleware_recursion_detection, import_middleware_user_agent, import_config_resolver2, import_middleware_content_length, import_middleware_endpoint, import_middleware_retry2, import_smithy_client8, SSOOIDCClient;
var init_SSOOIDCClient = __esm({
  "../../node_modules/.pnpm/@aws-sdk+nested-clients@3.821.0/node_modules/@aws-sdk/nested-clients/dist-es/submodules/sso-oidc/SSOOIDCClient.js"() {
    import_middleware_host_header = __toESM(require_dist_cjs3());
    import_middleware_logger = __toESM(require_dist_cjs4());
    import_middleware_recursion_detection = __toESM(require_dist_cjs5());
    import_middleware_user_agent = __toESM(require_dist_cjs25());
    import_config_resolver2 = __toESM(require_dist_cjs27());
    init_dist_es();
    import_middleware_content_length = __toESM(require_dist_cjs28());
    import_middleware_endpoint = __toESM(require_dist_cjs33());
    import_middleware_retry2 = __toESM(require_dist_cjs36());
    import_smithy_client8 = __toESM(require_dist_cjs18());
    init_httpAuthSchemeProvider();
    init_EndpointParameters();
    init_runtimeConfig();
    init_runtimeExtensions();
    SSOOIDCClient = class extends import_smithy_client8.Client {
      static {
        __name(this, "SSOOIDCClient");
      }
      config;
      constructor(...[configuration]) {
        const _config_0 = getRuntimeConfig2(configuration || {});
        super(_config_0);
        this.initConfig = _config_0;
        const _config_1 = resolveClientEndpointParameters(_config_0);
        const _config_2 = (0, import_middleware_user_agent.resolveUserAgentConfig)(_config_1);
        const _config_3 = (0, import_middleware_retry2.resolveRetryConfig)(_config_2);
        const _config_4 = (0, import_config_resolver2.resolveRegionConfig)(_config_3);
        const _config_5 = (0, import_middleware_host_header.resolveHostHeaderConfig)(_config_4);
        const _config_6 = (0, import_middleware_endpoint.resolveEndpointConfig)(_config_5);
        const _config_7 = resolveHttpAuthSchemeConfig(_config_6);
        const _config_8 = resolveRuntimeExtensions(_config_7, configuration?.extensions || []);
        this.config = _config_8;
        this.middlewareStack.use((0, import_middleware_user_agent.getUserAgentPlugin)(this.config));
        this.middlewareStack.use((0, import_middleware_retry2.getRetryPlugin)(this.config));
        this.middlewareStack.use((0, import_middleware_content_length.getContentLengthPlugin)(this.config));
        this.middlewareStack.use((0, import_middleware_host_header.getHostHeaderPlugin)(this.config));
        this.middlewareStack.use((0, import_middleware_logger.getLoggerPlugin)(this.config));
        this.middlewareStack.use((0, import_middleware_recursion_detection.getRecursionDetectionPlugin)(this.config));
        this.middlewareStack.use(getHttpAuthSchemeEndpointRuleSetPlugin(this.config, {
          httpAuthSchemeParametersProvider: defaultSSOOIDCHttpAuthSchemeParametersProvider,
          identityProviderConfigProvider: /* @__PURE__ */ __name(async (config) => new DefaultIdentityProviderConfig({
            "aws.auth#sigv4": config.credentials
          }), "identityProviderConfigProvider")
        }));
        this.middlewareStack.use(getHttpSigningPlugin(this.config));
      }
      destroy() {
        super.destroy();
      }
    };
  }
});

// ../../node_modules/.pnpm/@aws-sdk+nested-clients@3.821.0/node_modules/@aws-sdk/nested-clients/dist-es/submodules/sso-oidc/models/SSOOIDCServiceException.js
var import_smithy_client9, SSOOIDCServiceException;
var init_SSOOIDCServiceException = __esm({
  "../../node_modules/.pnpm/@aws-sdk+nested-clients@3.821.0/node_modules/@aws-sdk/nested-clients/dist-es/submodules/sso-oidc/models/SSOOIDCServiceException.js"() {
    import_smithy_client9 = __toESM(require_dist_cjs18());
    SSOOIDCServiceException = class _SSOOIDCServiceException extends import_smithy_client9.ServiceException {
      static {
        __name(this, "SSOOIDCServiceException");
      }
      constructor(options) {
        super(options);
        Object.setPrototypeOf(this, _SSOOIDCServiceException.prototype);
      }
    };
  }
});

// ../../node_modules/.pnpm/@aws-sdk+nested-clients@3.821.0/node_modules/@aws-sdk/nested-clients/dist-es/submodules/sso-oidc/models/models_0.js
var import_smithy_client10, AccessDeniedException, AuthorizationPendingException, CreateTokenRequestFilterSensitiveLog, CreateTokenResponseFilterSensitiveLog, ExpiredTokenException, InternalServerException, InvalidClientException, InvalidGrantException, InvalidRequestException, InvalidScopeException, SlowDownException, UnauthorizedClientException, UnsupportedGrantTypeException;
var init_models_0 = __esm({
  "../../node_modules/.pnpm/@aws-sdk+nested-clients@3.821.0/node_modules/@aws-sdk/nested-clients/dist-es/submodules/sso-oidc/models/models_0.js"() {
    import_smithy_client10 = __toESM(require_dist_cjs18());
    init_SSOOIDCServiceException();
    AccessDeniedException = class _AccessDeniedException extends SSOOIDCServiceException {
      static {
        __name(this, "AccessDeniedException");
      }
      name = "AccessDeniedException";
      $fault = "client";
      error;
      error_description;
      constructor(opts) {
        super({
          name: "AccessDeniedException",
          $fault: "client",
          ...opts
        });
        Object.setPrototypeOf(this, _AccessDeniedException.prototype);
        this.error = opts.error;
        this.error_description = opts.error_description;
      }
    };
    AuthorizationPendingException = class _AuthorizationPendingException extends SSOOIDCServiceException {
      static {
        __name(this, "AuthorizationPendingException");
      }
      name = "AuthorizationPendingException";
      $fault = "client";
      error;
      error_description;
      constructor(opts) {
        super({
          name: "AuthorizationPendingException",
          $fault: "client",
          ...opts
        });
        Object.setPrototypeOf(this, _AuthorizationPendingException.prototype);
        this.error = opts.error;
        this.error_description = opts.error_description;
      }
    };
    CreateTokenRequestFilterSensitiveLog = /* @__PURE__ */ __name((obj) => ({
      ...obj,
      ...obj.clientSecret && { clientSecret: import_smithy_client10.SENSITIVE_STRING },
      ...obj.refreshToken && { refreshToken: import_smithy_client10.SENSITIVE_STRING },
      ...obj.codeVerifier && { codeVerifier: import_smithy_client10.SENSITIVE_STRING }
    }), "CreateTokenRequestFilterSensitiveLog");
    CreateTokenResponseFilterSensitiveLog = /* @__PURE__ */ __name((obj) => ({
      ...obj,
      ...obj.accessToken && { accessToken: import_smithy_client10.SENSITIVE_STRING },
      ...obj.refreshToken && { refreshToken: import_smithy_client10.SENSITIVE_STRING },
      ...obj.idToken && { idToken: import_smithy_client10.SENSITIVE_STRING }
    }), "CreateTokenResponseFilterSensitiveLog");
    ExpiredTokenException = class _ExpiredTokenException extends SSOOIDCServiceException {
      static {
        __name(this, "ExpiredTokenException");
      }
      name = "ExpiredTokenException";
      $fault = "client";
      error;
      error_description;
      constructor(opts) {
        super({
          name: "ExpiredTokenException",
          $fault: "client",
          ...opts
        });
        Object.setPrototypeOf(this, _ExpiredTokenException.prototype);
        this.error = opts.error;
        this.error_description = opts.error_description;
      }
    };
    InternalServerException = class _InternalServerException extends SSOOIDCServiceException {
      static {
        __name(this, "InternalServerException");
      }
      name = "InternalServerException";
      $fault = "server";
      error;
      error_description;
      constructor(opts) {
        super({
          name: "InternalServerException",
          $fault: "server",
          ...opts
        });
        Object.setPrototypeOf(this, _InternalServerException.prototype);
        this.error = opts.error;
        this.error_description = opts.error_description;
      }
    };
    InvalidClientException = class _InvalidClientException extends SSOOIDCServiceException {
      static {
        __name(this, "InvalidClientException");
      }
      name = "InvalidClientException";
      $fault = "client";
      error;
      error_description;
      constructor(opts) {
        super({
          name: "InvalidClientException",
          $fault: "client",
          ...opts
        });
        Object.setPrototypeOf(this, _InvalidClientException.prototype);
        this.error = opts.error;
        this.error_description = opts.error_description;
      }
    };
    InvalidGrantException = class _InvalidGrantException extends SSOOIDCServiceException {
      static {
        __name(this, "InvalidGrantException");
      }
      name = "InvalidGrantException";
      $fault = "client";
      error;
      error_description;
      constructor(opts) {
        super({
          name: "InvalidGrantException",
          $fault: "client",
          ...opts
        });
        Object.setPrototypeOf(this, _InvalidGrantException.prototype);
        this.error = opts.error;
        this.error_description = opts.error_description;
      }
    };
    InvalidRequestException = class _InvalidRequestException extends SSOOIDCServiceException {
      static {
        __name(this, "InvalidRequestException");
      }
      name = "InvalidRequestException";
      $fault = "client";
      error;
      error_description;
      constructor(opts) {
        super({
          name: "InvalidRequestException",
          $fault: "client",
          ...opts
        });
        Object.setPrototypeOf(this, _InvalidRequestException.prototype);
        this.error = opts.error;
        this.error_description = opts.error_description;
      }
    };
    InvalidScopeException = class _InvalidScopeException extends SSOOIDCServiceException {
      static {
        __name(this, "InvalidScopeException");
      }
      name = "InvalidScopeException";
      $fault = "client";
      error;
      error_description;
      constructor(opts) {
        super({
          name: "InvalidScopeException",
          $fault: "client",
          ...opts
        });
        Object.setPrototypeOf(this, _InvalidScopeException.prototype);
        this.error = opts.error;
        this.error_description = opts.error_description;
      }
    };
    SlowDownException = class _SlowDownException extends SSOOIDCServiceException {
      static {
        __name(this, "SlowDownException");
      }
      name = "SlowDownException";
      $fault = "client";
      error;
      error_description;
      constructor(opts) {
        super({
          name: "SlowDownException",
          $fault: "client",
          ...opts
        });
        Object.setPrototypeOf(this, _SlowDownException.prototype);
        this.error = opts.error;
        this.error_description = opts.error_description;
      }
    };
    UnauthorizedClientException = class _UnauthorizedClientException extends SSOOIDCServiceException {
      static {
        __name(this, "UnauthorizedClientException");
      }
      name = "UnauthorizedClientException";
      $fault = "client";
      error;
      error_description;
      constructor(opts) {
        super({
          name: "UnauthorizedClientException",
          $fault: "client",
          ...opts
        });
        Object.setPrototypeOf(this, _UnauthorizedClientException.prototype);
        this.error = opts.error;
        this.error_description = opts.error_description;
      }
    };
    UnsupportedGrantTypeException = class _UnsupportedGrantTypeException extends SSOOIDCServiceException {
      static {
        __name(this, "UnsupportedGrantTypeException");
      }
      name = "UnsupportedGrantTypeException";
      $fault = "client";
      error;
      error_description;
      constructor(opts) {
        super({
          name: "UnsupportedGrantTypeException",
          $fault: "client",
          ...opts
        });
        Object.setPrototypeOf(this, _UnsupportedGrantTypeException.prototype);
        this.error = opts.error;
        this.error_description = opts.error_description;
      }
    };
  }
});

// ../../node_modules/.pnpm/@aws-sdk+nested-clients@3.821.0/node_modules/@aws-sdk/nested-clients/dist-es/submodules/sso-oidc/protocols/Aws_restJson1.js
var import_smithy_client11, se_CreateTokenCommand, de_CreateTokenCommand, de_CommandError, throwDefaultError, de_AccessDeniedExceptionRes, de_AuthorizationPendingExceptionRes, de_ExpiredTokenExceptionRes, de_InternalServerExceptionRes, de_InvalidClientExceptionRes, de_InvalidGrantExceptionRes, de_InvalidRequestExceptionRes, de_InvalidScopeExceptionRes, de_SlowDownExceptionRes, de_UnauthorizedClientExceptionRes, de_UnsupportedGrantTypeExceptionRes, deserializeMetadata, collectBodyString2;
var init_Aws_restJson1 = __esm({
  "../../node_modules/.pnpm/@aws-sdk+nested-clients@3.821.0/node_modules/@aws-sdk/nested-clients/dist-es/submodules/sso-oidc/protocols/Aws_restJson1.js"() {
    init_dist_es2();
    init_dist_es();
    import_smithy_client11 = __toESM(require_dist_cjs18());
    init_models_0();
    init_SSOOIDCServiceException();
    se_CreateTokenCommand = /* @__PURE__ */ __name(async (input, context) => {
      const b3 = requestBuilder(input, context);
      const headers = {
        "content-type": "application/json"
      };
      b3.bp("/token");
      let body;
      body = JSON.stringify((0, import_smithy_client11.take)(input, {
        clientId: [],
        clientSecret: [],
        code: [],
        codeVerifier: [],
        deviceCode: [],
        grantType: [],
        redirectUri: [],
        refreshToken: [],
        scope: /* @__PURE__ */ __name((_2) => (0, import_smithy_client11._json)(_2), "scope")
      }));
      b3.m("POST").h(headers).b(body);
      return b3.build();
    }, "se_CreateTokenCommand");
    de_CreateTokenCommand = /* @__PURE__ */ __name(async (output, context) => {
      if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_CommandError(output, context);
      }
      const contents = (0, import_smithy_client11.map)({
        $metadata: deserializeMetadata(output)
      });
      const data = (0, import_smithy_client11.expectNonNull)((0, import_smithy_client11.expectObject)(await parseJsonBody(output.body, context)), "body");
      const doc = (0, import_smithy_client11.take)(data, {
        accessToken: import_smithy_client11.expectString,
        expiresIn: import_smithy_client11.expectInt32,
        idToken: import_smithy_client11.expectString,
        refreshToken: import_smithy_client11.expectString,
        tokenType: import_smithy_client11.expectString
      });
      Object.assign(contents, doc);
      return contents;
    }, "de_CreateTokenCommand");
    de_CommandError = /* @__PURE__ */ __name(async (output, context) => {
      const parsedOutput = {
        ...output,
        body: await parseJsonErrorBody(output.body, context)
      };
      const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
      switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.ssooidc#AccessDeniedException":
          throw await de_AccessDeniedExceptionRes(parsedOutput, context);
        case "AuthorizationPendingException":
        case "com.amazonaws.ssooidc#AuthorizationPendingException":
          throw await de_AuthorizationPendingExceptionRes(parsedOutput, context);
        case "ExpiredTokenException":
        case "com.amazonaws.ssooidc#ExpiredTokenException":
          throw await de_ExpiredTokenExceptionRes(parsedOutput, context);
        case "InternalServerException":
        case "com.amazonaws.ssooidc#InternalServerException":
          throw await de_InternalServerExceptionRes(parsedOutput, context);
        case "InvalidClientException":
        case "com.amazonaws.ssooidc#InvalidClientException":
          throw await de_InvalidClientExceptionRes(parsedOutput, context);
        case "InvalidGrantException":
        case "com.amazonaws.ssooidc#InvalidGrantException":
          throw await de_InvalidGrantExceptionRes(parsedOutput, context);
        case "InvalidRequestException":
        case "com.amazonaws.ssooidc#InvalidRequestException":
          throw await de_InvalidRequestExceptionRes(parsedOutput, context);
        case "InvalidScopeException":
        case "com.amazonaws.ssooidc#InvalidScopeException":
          throw await de_InvalidScopeExceptionRes(parsedOutput, context);
        case "SlowDownException":
        case "com.amazonaws.ssooidc#SlowDownException":
          throw await de_SlowDownExceptionRes(parsedOutput, context);
        case "UnauthorizedClientException":
        case "com.amazonaws.ssooidc#UnauthorizedClientException":
          throw await de_UnauthorizedClientExceptionRes(parsedOutput, context);
        case "UnsupportedGrantTypeException":
        case "com.amazonaws.ssooidc#UnsupportedGrantTypeException":
          throw await de_UnsupportedGrantTypeExceptionRes(parsedOutput, context);
        default:
          const parsedBody = parsedOutput.body;
          return throwDefaultError({
            output,
            parsedBody,
            errorCode
          });
      }
    }, "de_CommandError");
    throwDefaultError = (0, import_smithy_client11.withBaseException)(SSOOIDCServiceException);
    de_AccessDeniedExceptionRes = /* @__PURE__ */ __name(async (parsedOutput, context) => {
      const contents = (0, import_smithy_client11.map)({});
      const data = parsedOutput.body;
      const doc = (0, import_smithy_client11.take)(data, {
        error: import_smithy_client11.expectString,
        error_description: import_smithy_client11.expectString
      });
      Object.assign(contents, doc);
      const exception = new AccessDeniedException({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents
      });
      return (0, import_smithy_client11.decorateServiceException)(exception, parsedOutput.body);
    }, "de_AccessDeniedExceptionRes");
    de_AuthorizationPendingExceptionRes = /* @__PURE__ */ __name(async (parsedOutput, context) => {
      const contents = (0, import_smithy_client11.map)({});
      const data = parsedOutput.body;
      const doc = (0, import_smithy_client11.take)(data, {
        error: import_smithy_client11.expectString,
        error_description: import_smithy_client11.expectString
      });
      Object.assign(contents, doc);
      const exception = new AuthorizationPendingException({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents
      });
      return (0, import_smithy_client11.decorateServiceException)(exception, parsedOutput.body);
    }, "de_AuthorizationPendingExceptionRes");
    de_ExpiredTokenExceptionRes = /* @__PURE__ */ __name(async (parsedOutput, context) => {
      const contents = (0, import_smithy_client11.map)({});
      const data = parsedOutput.body;
      const doc = (0, import_smithy_client11.take)(data, {
        error: import_smithy_client11.expectString,
        error_description: import_smithy_client11.expectString
      });
      Object.assign(contents, doc);
      const exception = new ExpiredTokenException({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents
      });
      return (0, import_smithy_client11.decorateServiceException)(exception, parsedOutput.body);
    }, "de_ExpiredTokenExceptionRes");
    de_InternalServerExceptionRes = /* @__PURE__ */ __name(async (parsedOutput, context) => {
      const contents = (0, import_smithy_client11.map)({});
      const data = parsedOutput.body;
      const doc = (0, import_smithy_client11.take)(data, {
        error: import_smithy_client11.expectString,
        error_description: import_smithy_client11.expectString
      });
      Object.assign(contents, doc);
      const exception = new InternalServerException({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents
      });
      return (0, import_smithy_client11.decorateServiceException)(exception, parsedOutput.body);
    }, "de_InternalServerExceptionRes");
    de_InvalidClientExceptionRes = /* @__PURE__ */ __name(async (parsedOutput, context) => {
      const contents = (0, import_smithy_client11.map)({});
      const data = parsedOutput.body;
      const doc = (0, import_smithy_client11.take)(data, {
        error: import_smithy_client11.expectString,
        error_description: import_smithy_client11.expectString
      });
      Object.assign(contents, doc);
      const exception = new InvalidClientException({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents
      });
      return (0, import_smithy_client11.decorateServiceException)(exception, parsedOutput.body);
    }, "de_InvalidClientExceptionRes");
    de_InvalidGrantExceptionRes = /* @__PURE__ */ __name(async (parsedOutput, context) => {
      const contents = (0, import_smithy_client11.map)({});
      const data = parsedOutput.body;
      const doc = (0, import_smithy_client11.take)(data, {
        error: import_smithy_client11.expectString,
        error_description: import_smithy_client11.expectString
      });
      Object.assign(contents, doc);
      const exception = new InvalidGrantException({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents
      });
      return (0, import_smithy_client11.decorateServiceException)(exception, parsedOutput.body);
    }, "de_InvalidGrantExceptionRes");
    de_InvalidRequestExceptionRes = /* @__PURE__ */ __name(async (parsedOutput, context) => {
      const contents = (0, import_smithy_client11.map)({});
      const data = parsedOutput.body;
      const doc = (0, import_smithy_client11.take)(data, {
        error: import_smithy_client11.expectString,
        error_description: import_smithy_client11.expectString
      });
      Object.assign(contents, doc);
      const exception = new InvalidRequestException({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents
      });
      return (0, import_smithy_client11.decorateServiceException)(exception, parsedOutput.body);
    }, "de_InvalidRequestExceptionRes");
    de_InvalidScopeExceptionRes = /* @__PURE__ */ __name(async (parsedOutput, context) => {
      const contents = (0, import_smithy_client11.map)({});
      const data = parsedOutput.body;
      const doc = (0, import_smithy_client11.take)(data, {
        error: import_smithy_client11.expectString,
        error_description: import_smithy_client11.expectString
      });
      Object.assign(contents, doc);
      const exception = new InvalidScopeException({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents
      });
      return (0, import_smithy_client11.decorateServiceException)(exception, parsedOutput.body);
    }, "de_InvalidScopeExceptionRes");
    de_SlowDownExceptionRes = /* @__PURE__ */ __name(async (parsedOutput, context) => {
      const contents = (0, import_smithy_client11.map)({});
      const data = parsedOutput.body;
      const doc = (0, import_smithy_client11.take)(data, {
        error: import_smithy_client11.expectString,
        error_description: import_smithy_client11.expectString
      });
      Object.assign(contents, doc);
      const exception = new SlowDownException({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents
      });
      return (0, import_smithy_client11.decorateServiceException)(exception, parsedOutput.body);
    }, "de_SlowDownExceptionRes");
    de_UnauthorizedClientExceptionRes = /* @__PURE__ */ __name(async (parsedOutput, context) => {
      const contents = (0, import_smithy_client11.map)({});
      const data = parsedOutput.body;
      const doc = (0, import_smithy_client11.take)(data, {
        error: import_smithy_client11.expectString,
        error_description: import_smithy_client11.expectString
      });
      Object.assign(contents, doc);
      const exception = new UnauthorizedClientException({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents
      });
      return (0, import_smithy_client11.decorateServiceException)(exception, parsedOutput.body);
    }, "de_UnauthorizedClientExceptionRes");
    de_UnsupportedGrantTypeExceptionRes = /* @__PURE__ */ __name(async (parsedOutput, context) => {
      const contents = (0, import_smithy_client11.map)({});
      const data = parsedOutput.body;
      const doc = (0, import_smithy_client11.take)(data, {
        error: import_smithy_client11.expectString,
        error_description: import_smithy_client11.expectString
      });
      Object.assign(contents, doc);
      const exception = new UnsupportedGrantTypeException({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents
      });
      return (0, import_smithy_client11.decorateServiceException)(exception, parsedOutput.body);
    }, "de_UnsupportedGrantTypeExceptionRes");
    deserializeMetadata = /* @__PURE__ */ __name((output) => ({
      httpStatusCode: output.statusCode,
      requestId: output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"] ?? output.headers["x-amz-request-id"],
      extendedRequestId: output.headers["x-amz-id-2"],
      cfId: output.headers["x-amz-cf-id"]
    }), "deserializeMetadata");
    collectBodyString2 = /* @__PURE__ */ __name((streamBody, context) => (0, import_smithy_client11.collectBody)(streamBody, context).then((body) => context.utf8Encoder(body)), "collectBodyString");
  }
});

// ../../node_modules/.pnpm/@aws-sdk+nested-clients@3.821.0/node_modules/@aws-sdk/nested-clients/dist-es/submodules/sso-oidc/commands/CreateTokenCommand.js
var import_middleware_endpoint2, import_middleware_serde2, import_smithy_client12, CreateTokenCommand;
var init_CreateTokenCommand = __esm({
  "../../node_modules/.pnpm/@aws-sdk+nested-clients@3.821.0/node_modules/@aws-sdk/nested-clients/dist-es/submodules/sso-oidc/commands/CreateTokenCommand.js"() {
    import_middleware_endpoint2 = __toESM(require_dist_cjs33());
    import_middleware_serde2 = __toESM(require_dist_cjs20());
    import_smithy_client12 = __toESM(require_dist_cjs18());
    init_EndpointParameters();
    init_models_0();
    init_Aws_restJson1();
    CreateTokenCommand = class extends import_smithy_client12.Command.classBuilder().ep(commonParams).m(function(Command, cs, config, o3) {
      return [
        (0, import_middleware_serde2.getSerdePlugin)(config, this.serialize, this.deserialize),
        (0, import_middleware_endpoint2.getEndpointPlugin)(config, Command.getEndpointParameterInstructions())
      ];
    }).s("AWSSSOOIDCService", "CreateToken", {}).n("SSOOIDCClient", "CreateTokenCommand").f(CreateTokenRequestFilterSensitiveLog, CreateTokenResponseFilterSensitiveLog).ser(se_CreateTokenCommand).de(de_CreateTokenCommand).build() {
      static {
        __name(this, "CreateTokenCommand");
      }
    };
  }
});

// ../../node_modules/.pnpm/@aws-sdk+nested-clients@3.821.0/node_modules/@aws-sdk/nested-clients/dist-es/submodules/sso-oidc/SSOOIDC.js
var import_smithy_client13, commands, SSOOIDC;
var init_SSOOIDC = __esm({
  "../../node_modules/.pnpm/@aws-sdk+nested-clients@3.821.0/node_modules/@aws-sdk/nested-clients/dist-es/submodules/sso-oidc/SSOOIDC.js"() {
    import_smithy_client13 = __toESM(require_dist_cjs18());
    init_CreateTokenCommand();
    init_SSOOIDCClient();
    commands = {
      CreateTokenCommand
    };
    SSOOIDC = class extends SSOOIDCClient {
      static {
        __name(this, "SSOOIDC");
      }
    };
    (0, import_smithy_client13.createAggregatedClient)(commands, SSOOIDC);
  }
});

// ../../node_modules/.pnpm/@aws-sdk+nested-clients@3.821.0/node_modules/@aws-sdk/nested-clients/dist-es/submodules/sso-oidc/commands/index.js
var init_commands = __esm({
  "../../node_modules/.pnpm/@aws-sdk+nested-clients@3.821.0/node_modules/@aws-sdk/nested-clients/dist-es/submodules/sso-oidc/commands/index.js"() {
    init_CreateTokenCommand();
  }
});

// ../../node_modules/.pnpm/@aws-sdk+nested-clients@3.821.0/node_modules/@aws-sdk/nested-clients/dist-es/submodules/sso-oidc/models/index.js
var init_models = __esm({
  "../../node_modules/.pnpm/@aws-sdk+nested-clients@3.821.0/node_modules/@aws-sdk/nested-clients/dist-es/submodules/sso-oidc/models/index.js"() {
    init_models_0();
  }
});

// ../../node_modules/.pnpm/@aws-sdk+nested-clients@3.821.0/node_modules/@aws-sdk/nested-clients/dist-es/submodules/sso-oidc/index.js
var sso_oidc_exports = {};
__export(sso_oidc_exports, {
  $Command: () => import_smithy_client12.Command,
  AccessDeniedException: () => AccessDeniedException,
  AuthorizationPendingException: () => AuthorizationPendingException,
  CreateTokenCommand: () => CreateTokenCommand,
  CreateTokenRequestFilterSensitiveLog: () => CreateTokenRequestFilterSensitiveLog,
  CreateTokenResponseFilterSensitiveLog: () => CreateTokenResponseFilterSensitiveLog,
  ExpiredTokenException: () => ExpiredTokenException,
  InternalServerException: () => InternalServerException,
  InvalidClientException: () => InvalidClientException,
  InvalidGrantException: () => InvalidGrantException,
  InvalidRequestException: () => InvalidRequestException,
  InvalidScopeException: () => InvalidScopeException,
  SSOOIDC: () => SSOOIDC,
  SSOOIDCClient: () => SSOOIDCClient,
  SSOOIDCServiceException: () => SSOOIDCServiceException,
  SlowDownException: () => SlowDownException,
  UnauthorizedClientException: () => UnauthorizedClientException,
  UnsupportedGrantTypeException: () => UnsupportedGrantTypeException,
  __Client: () => import_smithy_client8.Client
});
var init_sso_oidc = __esm({
  "../../node_modules/.pnpm/@aws-sdk+nested-clients@3.821.0/node_modules/@aws-sdk/nested-clients/dist-es/submodules/sso-oidc/index.js"() {
    init_SSOOIDCClient();
    init_SSOOIDC();
    init_commands();
    init_models();
    init_SSOOIDCServiceException();
  }
});

// ../../node_modules/.pnpm/@aws-sdk+token-providers@3.821.0/node_modules/@aws-sdk/token-providers/dist-cjs/index.js
var require_dist_cjs46 = __commonJS({
  "../../node_modules/.pnpm/@aws-sdk+token-providers@3.821.0/node_modules/@aws-sdk/token-providers/dist-cjs/index.js"(exports2, module2) {
    "use strict";
    var __create2 = Object.create;
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __getProtoOf2 = Object.getPrototypeOf;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __name2 = /* @__PURE__ */ __name((target, value) => __defProp2(target, "name", { value, configurable: true }), "__name");
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: /* @__PURE__ */ __name(() => from[key], "get"), enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toESM2 = /* @__PURE__ */ __name((mod, isNodeMode, target) => (target = mod != null ? __create2(__getProtoOf2(mod)) : {}, __copyProps2(
      // If the importer is in node compatibility mode or this is not an ESM
      // file that has been converted to a CommonJS file using a Babel-
      // compatible transform (i.e. "__esModule" has not been set), then set
      // "default" to the CommonJS "module.exports" for node compatibility.
      isNodeMode || !mod || !mod.__esModule ? __defProp2(target, "default", { value: mod, enumerable: true }) : target,
      mod
    )), "__toESM");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var index_exports = {};
    __export2(index_exports, {
      fromEnvSigningName: /* @__PURE__ */ __name(() => fromEnvSigningName, "fromEnvSigningName"),
      fromSso: /* @__PURE__ */ __name(() => fromSso, "fromSso"),
      fromStatic: /* @__PURE__ */ __name(() => fromStatic, "fromStatic"),
      nodeProvider: /* @__PURE__ */ __name(() => nodeProvider, "nodeProvider")
    });
    module2.exports = __toCommonJS2(index_exports);
    var import_core17 = (init_dist_es2(), __toCommonJS(dist_es_exports2));
    var import_property_provider2 = require_dist_cjs23();
    var fromEnvSigningName = __name2(({ logger: logger3, signingName } = {}) => async () => {
      logger3?.debug?.("@aws-sdk/token-providers - fromEnvSigningName");
      if (!signingName) {
        throw new import_property_provider2.TokenProviderError("Please pass 'signingName' to compute environment variable key", { logger: logger3 });
      }
      const bearerTokenKey = (0, import_core17.getBearerTokenEnvKey)(signingName);
      if (!(bearerTokenKey in process.env)) {
        throw new import_property_provider2.TokenProviderError(`Token not present in '${bearerTokenKey}' environment variable`, { logger: logger3 });
      }
      return { token: process.env[bearerTokenKey] };
    }, "fromEnvSigningName");
    var EXPIRE_WINDOW_MS = 5 * 60 * 1e3;
    var REFRESH_MESSAGE = `To refresh this SSO session run 'aws sso login' with the corresponding profile.`;
    var getSsoOidcClient = __name2(async (ssoRegion, init = {}) => {
      const { SSOOIDCClient: SSOOIDCClient2 } = await Promise.resolve().then(() => __toESM2((init_sso_oidc(), __toCommonJS(sso_oidc_exports))));
      const ssoOidcClient = new SSOOIDCClient2(
        Object.assign({}, init.clientConfig ?? {}, {
          region: ssoRegion ?? init.clientConfig?.region,
          logger: init.clientConfig?.logger ?? init.parentClientConfig?.logger
        })
      );
      return ssoOidcClient;
    }, "getSsoOidcClient");
    var getNewSsoOidcToken = __name2(async (ssoToken, ssoRegion, init = {}) => {
      const { CreateTokenCommand: CreateTokenCommand2 } = await Promise.resolve().then(() => __toESM2((init_sso_oidc(), __toCommonJS(sso_oidc_exports))));
      const ssoOidcClient = await getSsoOidcClient(ssoRegion, init);
      return ssoOidcClient.send(
        new CreateTokenCommand2({
          clientId: ssoToken.clientId,
          clientSecret: ssoToken.clientSecret,
          refreshToken: ssoToken.refreshToken,
          grantType: "refresh_token"
        })
      );
    }, "getNewSsoOidcToken");
    var validateTokenExpiry = __name2((token) => {
      if (token.expiration && token.expiration.getTime() < Date.now()) {
        throw new import_property_provider2.TokenProviderError(`Token is expired. ${REFRESH_MESSAGE}`, false);
      }
    }, "validateTokenExpiry");
    var validateTokenKey = __name2((key, value, forRefresh = false) => {
      if (typeof value === "undefined") {
        throw new import_property_provider2.TokenProviderError(
          `Value not present for '${key}' in SSO Token${forRefresh ? ". Cannot refresh" : ""}. ${REFRESH_MESSAGE}`,
          false
        );
      }
    }, "validateTokenKey");
    var import_shared_ini_file_loader = require_dist_cjs29();
    var import_fs = require("fs");
    var { writeFile } = import_fs.promises;
    var writeSSOTokenToFile = __name2((id, ssoToken) => {
      const tokenFilepath = (0, import_shared_ini_file_loader.getSSOTokenFilepath)(id);
      const tokenString = JSON.stringify(ssoToken, null, 2);
      return writeFile(tokenFilepath, tokenString);
    }, "writeSSOTokenToFile");
    var lastRefreshAttemptTime = /* @__PURE__ */ new Date(0);
    var fromSso = __name2((_init = {}) => async ({ callerClientConfig } = {}) => {
      const init = {
        ..._init,
        parentClientConfig: {
          ...callerClientConfig,
          ..._init.parentClientConfig
        }
      };
      init.logger?.debug("@aws-sdk/token-providers - fromSso");
      const profiles = await (0, import_shared_ini_file_loader.parseKnownFiles)(init);
      const profileName = (0, import_shared_ini_file_loader.getProfileName)({
        profile: init.profile ?? callerClientConfig?.profile
      });
      const profile = profiles[profileName];
      if (!profile) {
        throw new import_property_provider2.TokenProviderError(`Profile '${profileName}' could not be found in shared credentials file.`, false);
      } else if (!profile["sso_session"]) {
        throw new import_property_provider2.TokenProviderError(`Profile '${profileName}' is missing required property 'sso_session'.`);
      }
      const ssoSessionName = profile["sso_session"];
      const ssoSessions = await (0, import_shared_ini_file_loader.loadSsoSessionData)(init);
      const ssoSession = ssoSessions[ssoSessionName];
      if (!ssoSession) {
        throw new import_property_provider2.TokenProviderError(
          `Sso session '${ssoSessionName}' could not be found in shared credentials file.`,
          false
        );
      }
      for (const ssoSessionRequiredKey of ["sso_start_url", "sso_region"]) {
        if (!ssoSession[ssoSessionRequiredKey]) {
          throw new import_property_provider2.TokenProviderError(
            `Sso session '${ssoSessionName}' is missing required property '${ssoSessionRequiredKey}'.`,
            false
          );
        }
      }
      const ssoStartUrl = ssoSession["sso_start_url"];
      const ssoRegion = ssoSession["sso_region"];
      let ssoToken;
      try {
        ssoToken = await (0, import_shared_ini_file_loader.getSSOTokenFromFile)(ssoSessionName);
      } catch (e3) {
        throw new import_property_provider2.TokenProviderError(
          `The SSO session token associated with profile=${profileName} was not found or is invalid. ${REFRESH_MESSAGE}`,
          false
        );
      }
      validateTokenKey("accessToken", ssoToken.accessToken);
      validateTokenKey("expiresAt", ssoToken.expiresAt);
      const { accessToken, expiresAt } = ssoToken;
      const existingToken = { token: accessToken, expiration: new Date(expiresAt) };
      if (existingToken.expiration.getTime() - Date.now() > EXPIRE_WINDOW_MS) {
        return existingToken;
      }
      if (Date.now() - lastRefreshAttemptTime.getTime() < 30 * 1e3) {
        validateTokenExpiry(existingToken);
        return existingToken;
      }
      validateTokenKey("clientId", ssoToken.clientId, true);
      validateTokenKey("clientSecret", ssoToken.clientSecret, true);
      validateTokenKey("refreshToken", ssoToken.refreshToken, true);
      try {
        lastRefreshAttemptTime.setTime(Date.now());
        const newSsoOidcToken = await getNewSsoOidcToken(ssoToken, ssoRegion, init);
        validateTokenKey("accessToken", newSsoOidcToken.accessToken);
        validateTokenKey("expiresIn", newSsoOidcToken.expiresIn);
        const newTokenExpiration = new Date(Date.now() + newSsoOidcToken.expiresIn * 1e3);
        try {
          await writeSSOTokenToFile(ssoSessionName, {
            ...ssoToken,
            accessToken: newSsoOidcToken.accessToken,
            expiresAt: newTokenExpiration.toISOString(),
            refreshToken: newSsoOidcToken.refreshToken
          });
        } catch (error2) {
        }
        return {
          token: newSsoOidcToken.accessToken,
          expiration: newTokenExpiration
        };
      } catch (error2) {
        validateTokenExpiry(existingToken);
        return existingToken;
      }
    }, "fromSso");
    var fromStatic = __name2(({ token, logger: logger3 }) => async () => {
      logger3?.debug("@aws-sdk/token-providers - fromStatic");
      if (!token || !token.token) {
        throw new import_property_provider2.TokenProviderError(`Please pass a valid token to fromStatic`, false);
      }
      return token;
    }, "fromStatic");
    var nodeProvider = __name2((init = {}) => (0, import_property_provider2.memoize)(
      (0, import_property_provider2.chain)(fromSso(init), async () => {
        throw new import_property_provider2.TokenProviderError("Could not load token from any providers", false);
      }),
      (token) => token.expiration !== void 0 && token.expiration.getTime() - Date.now() < 3e5,
      (token) => token.expiration !== void 0
    ), "nodeProvider");
  }
});

// ../../node_modules/.pnpm/@aws-sdk+credential-provider-sso@3.821.0/node_modules/@aws-sdk/credential-provider-sso/dist-cjs/index.js
var require_dist_cjs47 = __commonJS({
  "../../node_modules/.pnpm/@aws-sdk+credential-provider-sso@3.821.0/node_modules/@aws-sdk/credential-provider-sso/dist-cjs/index.js"(exports2, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __name2 = /* @__PURE__ */ __name((target, value) => __defProp2(target, "name", { value, configurable: true }), "__name");
    var __esm2 = /* @__PURE__ */ __name((fn, res) => /* @__PURE__ */ __name(function __init() {
      return fn && (res = (0, fn[__getOwnPropNames2(fn)[0]])(fn = 0)), res;
    }, "__init"), "__esm");
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: /* @__PURE__ */ __name(() => from[key], "get"), enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var loadSso_exports = {};
    __export2(loadSso_exports, {
      GetRoleCredentialsCommand: /* @__PURE__ */ __name(() => import_client_sso.GetRoleCredentialsCommand, "GetRoleCredentialsCommand"),
      SSOClient: /* @__PURE__ */ __name(() => import_client_sso.SSOClient, "SSOClient")
    });
    var import_client_sso;
    var init_loadSso = __esm2({
      "src/loadSso.ts"() {
        "use strict";
        import_client_sso = require_dist_cjs45();
      }
    });
    var index_exports = {};
    __export2(index_exports, {
      fromSSO: /* @__PURE__ */ __name(() => fromSSO, "fromSSO"),
      isSsoProfile: /* @__PURE__ */ __name(() => isSsoProfile, "isSsoProfile"),
      validateSsoProfile: /* @__PURE__ */ __name(() => validateSsoProfile, "validateSsoProfile")
    });
    module2.exports = __toCommonJS2(index_exports);
    var isSsoProfile = __name2((arg) => arg && (typeof arg.sso_start_url === "string" || typeof arg.sso_account_id === "string" || typeof arg.sso_session === "string" || typeof arg.sso_region === "string" || typeof arg.sso_role_name === "string"), "isSsoProfile");
    var import_client3 = (init_client(), __toCommonJS(client_exports));
    var import_token_providers = require_dist_cjs46();
    var import_property_provider2 = require_dist_cjs23();
    var import_shared_ini_file_loader = require_dist_cjs29();
    var SHOULD_FAIL_CREDENTIAL_CHAIN = false;
    var resolveSSOCredentials = __name2(async ({
      ssoStartUrl,
      ssoSession,
      ssoAccountId,
      ssoRegion,
      ssoRoleName,
      ssoClient,
      clientConfig,
      parentClientConfig,
      profile,
      logger: logger3
    }) => {
      let token;
      const refreshMessage = `To refresh this SSO session run aws sso login with the corresponding profile.`;
      if (ssoSession) {
        try {
          const _token = await (0, import_token_providers.fromSso)({ profile })();
          token = {
            accessToken: _token.token,
            expiresAt: new Date(_token.expiration).toISOString()
          };
        } catch (e3) {
          throw new import_property_provider2.CredentialsProviderError(e3.message, {
            tryNextLink: SHOULD_FAIL_CREDENTIAL_CHAIN,
            logger: logger3
          });
        }
      } else {
        try {
          token = await (0, import_shared_ini_file_loader.getSSOTokenFromFile)(ssoStartUrl);
        } catch (e3) {
          throw new import_property_provider2.CredentialsProviderError(`The SSO session associated with this profile is invalid. ${refreshMessage}`, {
            tryNextLink: SHOULD_FAIL_CREDENTIAL_CHAIN,
            logger: logger3
          });
        }
      }
      if (new Date(token.expiresAt).getTime() - Date.now() <= 0) {
        throw new import_property_provider2.CredentialsProviderError(`The SSO session associated with this profile has expired. ${refreshMessage}`, {
          tryNextLink: SHOULD_FAIL_CREDENTIAL_CHAIN,
          logger: logger3
        });
      }
      const { accessToken } = token;
      const { SSOClient: SSOClient2, GetRoleCredentialsCommand: GetRoleCredentialsCommand2 } = await Promise.resolve().then(() => (init_loadSso(), loadSso_exports));
      const sso = ssoClient || new SSOClient2(
        Object.assign({}, clientConfig ?? {}, {
          logger: clientConfig?.logger ?? parentClientConfig?.logger,
          region: clientConfig?.region ?? ssoRegion
        })
      );
      let ssoResp;
      try {
        ssoResp = await sso.send(
          new GetRoleCredentialsCommand2({
            accountId: ssoAccountId,
            roleName: ssoRoleName,
            accessToken
          })
        );
      } catch (e3) {
        throw new import_property_provider2.CredentialsProviderError(e3, {
          tryNextLink: SHOULD_FAIL_CREDENTIAL_CHAIN,
          logger: logger3
        });
      }
      const {
        roleCredentials: { accessKeyId, secretAccessKey, sessionToken, expiration, credentialScope, accountId } = {}
      } = ssoResp;
      if (!accessKeyId || !secretAccessKey || !sessionToken || !expiration) {
        throw new import_property_provider2.CredentialsProviderError("SSO returns an invalid temporary credential.", {
          tryNextLink: SHOULD_FAIL_CREDENTIAL_CHAIN,
          logger: logger3
        });
      }
      const credentials = {
        accessKeyId,
        secretAccessKey,
        sessionToken,
        expiration: new Date(expiration),
        ...credentialScope && { credentialScope },
        ...accountId && { accountId }
      };
      if (ssoSession) {
        (0, import_client3.setCredentialFeature)(credentials, "CREDENTIALS_SSO", "s");
      } else {
        (0, import_client3.setCredentialFeature)(credentials, "CREDENTIALS_SSO_LEGACY", "u");
      }
      return credentials;
    }, "resolveSSOCredentials");
    var validateSsoProfile = __name2((profile, logger3) => {
      const { sso_start_url, sso_account_id, sso_region, sso_role_name } = profile;
      if (!sso_start_url || !sso_account_id || !sso_region || !sso_role_name) {
        throw new import_property_provider2.CredentialsProviderError(
          `Profile is configured with invalid SSO credentials. Required parameters "sso_account_id", "sso_region", "sso_role_name", "sso_start_url". Got ${Object.keys(profile).join(
            ", "
          )}
Reference: https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-sso.html`,
          { tryNextLink: false, logger: logger3 }
        );
      }
      return profile;
    }, "validateSsoProfile");
    var fromSSO = __name2((init = {}) => async ({ callerClientConfig } = {}) => {
      init.logger?.debug("@aws-sdk/credential-provider-sso - fromSSO");
      const { ssoStartUrl, ssoAccountId, ssoRegion, ssoRoleName, ssoSession } = init;
      const { ssoClient } = init;
      const profileName = (0, import_shared_ini_file_loader.getProfileName)({
        profile: init.profile ?? callerClientConfig?.profile
      });
      if (!ssoStartUrl && !ssoAccountId && !ssoRegion && !ssoRoleName && !ssoSession) {
        const profiles = await (0, import_shared_ini_file_loader.parseKnownFiles)(init);
        const profile = profiles[profileName];
        if (!profile) {
          throw new import_property_provider2.CredentialsProviderError(`Profile ${profileName} was not found.`, { logger: init.logger });
        }
        if (!isSsoProfile(profile)) {
          throw new import_property_provider2.CredentialsProviderError(`Profile ${profileName} is not configured with SSO credentials.`, {
            logger: init.logger
          });
        }
        if (profile?.sso_session) {
          const ssoSessions = await (0, import_shared_ini_file_loader.loadSsoSessionData)(init);
          const session = ssoSessions[profile.sso_session];
          const conflictMsg = ` configurations in profile ${profileName} and sso-session ${profile.sso_session}`;
          if (ssoRegion && ssoRegion !== session.sso_region) {
            throw new import_property_provider2.CredentialsProviderError(`Conflicting SSO region` + conflictMsg, {
              tryNextLink: false,
              logger: init.logger
            });
          }
          if (ssoStartUrl && ssoStartUrl !== session.sso_start_url) {
            throw new import_property_provider2.CredentialsProviderError(`Conflicting SSO start_url` + conflictMsg, {
              tryNextLink: false,
              logger: init.logger
            });
          }
          profile.sso_region = session.sso_region;
          profile.sso_start_url = session.sso_start_url;
        }
        const { sso_start_url, sso_account_id, sso_region, sso_role_name, sso_session } = validateSsoProfile(
          profile,
          init.logger
        );
        return resolveSSOCredentials({
          ssoStartUrl: sso_start_url,
          ssoSession: sso_session,
          ssoAccountId: sso_account_id,
          ssoRegion: sso_region,
          ssoRoleName: sso_role_name,
          ssoClient,
          clientConfig: init.clientConfig,
          parentClientConfig: init.parentClientConfig,
          profile: profileName
        });
      } else if (!ssoStartUrl || !ssoAccountId || !ssoRegion || !ssoRoleName) {
        throw new import_property_provider2.CredentialsProviderError(
          'Incomplete configuration. The fromSSO() argument hash must include "ssoStartUrl", "ssoAccountId", "ssoRegion", "ssoRoleName"',
          { tryNextLink: false, logger: init.logger }
        );
      } else {
        return resolveSSOCredentials({
          ssoStartUrl,
          ssoSession,
          ssoAccountId,
          ssoRegion,
          ssoRoleName,
          ssoClient,
          clientConfig: init.clientConfig,
          parentClientConfig: init.parentClientConfig,
          profile: profileName
        });
      }
    }, "fromSSO");
  }
});

// ../../node_modules/.pnpm/@aws-sdk+nested-clients@3.821.0/node_modules/@aws-sdk/nested-clients/dist-es/submodules/sts/auth/httpAuthSchemeProvider.js
function createAwsAuthSigv4HttpAuthOption2(authParameters) {
  return {
    schemeId: "aws.auth#sigv4",
    signingProperties: {
      name: "sts",
      region: authParameters.region
    },
    propertiesExtractor: /* @__PURE__ */ __name((config, context) => ({
      signingProperties: {
        config,
        context
      }
    }), "propertiesExtractor")
  };
}
function createSmithyApiNoAuthHttpAuthOption2(authParameters) {
  return {
    schemeId: "smithy.api#noAuth"
  };
}
var import_util_middleware6, defaultSTSHttpAuthSchemeParametersProvider, defaultSTSHttpAuthSchemeProvider, resolveStsAuthConfig, resolveHttpAuthSchemeConfig2;
var init_httpAuthSchemeProvider2 = __esm({
  "../../node_modules/.pnpm/@aws-sdk+nested-clients@3.821.0/node_modules/@aws-sdk/nested-clients/dist-es/submodules/sts/auth/httpAuthSchemeProvider.js"() {
    init_dist_es2();
    import_util_middleware6 = __toESM(require_dist_cjs17());
    init_STSClient();
    defaultSTSHttpAuthSchemeParametersProvider = /* @__PURE__ */ __name(async (config, context, input) => {
      return {
        operation: (0, import_util_middleware6.getSmithyContext)(context).operation,
        region: await (0, import_util_middleware6.normalizeProvider)(config.region)() || (() => {
          throw new Error("expected `region` to be configured for `aws.auth#sigv4`");
        })()
      };
    }, "defaultSTSHttpAuthSchemeParametersProvider");
    __name(createAwsAuthSigv4HttpAuthOption2, "createAwsAuthSigv4HttpAuthOption");
    __name(createSmithyApiNoAuthHttpAuthOption2, "createSmithyApiNoAuthHttpAuthOption");
    defaultSTSHttpAuthSchemeProvider = /* @__PURE__ */ __name((authParameters) => {
      const options = [];
      switch (authParameters.operation) {
        case "AssumeRoleWithWebIdentity": {
          options.push(createSmithyApiNoAuthHttpAuthOption2(authParameters));
          break;
        }
        default: {
          options.push(createAwsAuthSigv4HttpAuthOption2(authParameters));
        }
      }
      return options;
    }, "defaultSTSHttpAuthSchemeProvider");
    resolveStsAuthConfig = /* @__PURE__ */ __name((input) => Object.assign(input, {
      stsClientCtor: STSClient
    }), "resolveStsAuthConfig");
    resolveHttpAuthSchemeConfig2 = /* @__PURE__ */ __name((config) => {
      const config_0 = resolveStsAuthConfig(config);
      const config_1 = resolveAwsSdkSigV4Config(config_0);
      return Object.assign(config_1, {
        authSchemePreference: (0, import_util_middleware6.normalizeProvider)(config.authSchemePreference ?? [])
      });
    }, "resolveHttpAuthSchemeConfig");
  }
});

// ../../node_modules/.pnpm/@aws-sdk+nested-clients@3.821.0/node_modules/@aws-sdk/nested-clients/dist-es/submodules/sts/endpoint/EndpointParameters.js
var resolveClientEndpointParameters2, commonParams2;
var init_EndpointParameters2 = __esm({
  "../../node_modules/.pnpm/@aws-sdk+nested-clients@3.821.0/node_modules/@aws-sdk/nested-clients/dist-es/submodules/sts/endpoint/EndpointParameters.js"() {
    resolveClientEndpointParameters2 = /* @__PURE__ */ __name((options) => {
      return Object.assign(options, {
        useDualstackEndpoint: options.useDualstackEndpoint ?? false,
        useFipsEndpoint: options.useFipsEndpoint ?? false,
        useGlobalEndpoint: options.useGlobalEndpoint ?? false,
        defaultSigningName: "sts"
      });
    }, "resolveClientEndpointParameters");
    commonParams2 = {
      UseGlobalEndpoint: { type: "builtInParams", name: "useGlobalEndpoint" },
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" }
    };
  }
});

// ../../node_modules/.pnpm/@aws-sdk+nested-clients@3.821.0/node_modules/@aws-sdk/nested-clients/dist-es/submodules/sts/endpoint/ruleset.js
var F, G, H, I, J, a2, b2, c2, d2, e2, f2, g2, h2, i2, j2, k2, l2, m2, n2, o2, p2, q2, r2, s2, t2, u2, v2, w2, x2, y, z, A, B, C, D, E, _data2, ruleSet2;
var init_ruleset2 = __esm({
  "../../node_modules/.pnpm/@aws-sdk+nested-clients@3.821.0/node_modules/@aws-sdk/nested-clients/dist-es/submodules/sts/endpoint/ruleset.js"() {
    F = "required", G = "type", H = "fn", I = "argv", J = "ref";
    a2 = false, b2 = true, c2 = "booleanEquals", d2 = "stringEquals", e2 = "sigv4", f2 = "sts", g2 = "us-east-1", h2 = "endpoint", i2 = "https://sts.{Region}.{PartitionResult#dnsSuffix}", j2 = "tree", k2 = "error", l2 = "getAttr", m2 = { [F]: false, [G]: "String" }, n2 = { [F]: true, "default": false, [G]: "Boolean" }, o2 = { [J]: "Endpoint" }, p2 = { [H]: "isSet", [I]: [{ [J]: "Region" }] }, q2 = { [J]: "Region" }, r2 = { [H]: "aws.partition", [I]: [q2], "assign": "PartitionResult" }, s2 = { [J]: "UseFIPS" }, t2 = { [J]: "UseDualStack" }, u2 = { "url": "https://sts.amazonaws.com", "properties": { "authSchemes": [{ "name": e2, "signingName": f2, "signingRegion": g2 }] }, "headers": {} }, v2 = {}, w2 = { "conditions": [{ [H]: d2, [I]: [q2, "aws-global"] }], [h2]: u2, [G]: h2 }, x2 = { [H]: c2, [I]: [s2, true] }, y = { [H]: c2, [I]: [t2, true] }, z = { [H]: l2, [I]: [{ [J]: "PartitionResult" }, "supportsFIPS"] }, A = { [J]: "PartitionResult" }, B = { [H]: c2, [I]: [true, { [H]: l2, [I]: [A, "supportsDualStack"] }] }, C = [{ [H]: "isSet", [I]: [o2] }], D = [x2], E = [y];
    _data2 = { version: "1.0", parameters: { Region: m2, UseDualStack: n2, UseFIPS: n2, Endpoint: m2, UseGlobalEndpoint: n2 }, rules: [{ conditions: [{ [H]: c2, [I]: [{ [J]: "UseGlobalEndpoint" }, b2] }, { [H]: "not", [I]: C }, p2, r2, { [H]: c2, [I]: [s2, a2] }, { [H]: c2, [I]: [t2, a2] }], rules: [{ conditions: [{ [H]: d2, [I]: [q2, "ap-northeast-1"] }], endpoint: u2, [G]: h2 }, { conditions: [{ [H]: d2, [I]: [q2, "ap-south-1"] }], endpoint: u2, [G]: h2 }, { conditions: [{ [H]: d2, [I]: [q2, "ap-southeast-1"] }], endpoint: u2, [G]: h2 }, { conditions: [{ [H]: d2, [I]: [q2, "ap-southeast-2"] }], endpoint: u2, [G]: h2 }, w2, { conditions: [{ [H]: d2, [I]: [q2, "ca-central-1"] }], endpoint: u2, [G]: h2 }, { conditions: [{ [H]: d2, [I]: [q2, "eu-central-1"] }], endpoint: u2, [G]: h2 }, { conditions: [{ [H]: d2, [I]: [q2, "eu-north-1"] }], endpoint: u2, [G]: h2 }, { conditions: [{ [H]: d2, [I]: [q2, "eu-west-1"] }], endpoint: u2, [G]: h2 }, { conditions: [{ [H]: d2, [I]: [q2, "eu-west-2"] }], endpoint: u2, [G]: h2 }, { conditions: [{ [H]: d2, [I]: [q2, "eu-west-3"] }], endpoint: u2, [G]: h2 }, { conditions: [{ [H]: d2, [I]: [q2, "sa-east-1"] }], endpoint: u2, [G]: h2 }, { conditions: [{ [H]: d2, [I]: [q2, g2] }], endpoint: u2, [G]: h2 }, { conditions: [{ [H]: d2, [I]: [q2, "us-east-2"] }], endpoint: u2, [G]: h2 }, { conditions: [{ [H]: d2, [I]: [q2, "us-west-1"] }], endpoint: u2, [G]: h2 }, { conditions: [{ [H]: d2, [I]: [q2, "us-west-2"] }], endpoint: u2, [G]: h2 }, { endpoint: { url: i2, properties: { authSchemes: [{ name: e2, signingName: f2, signingRegion: "{Region}" }] }, headers: v2 }, [G]: h2 }], [G]: j2 }, { conditions: C, rules: [{ conditions: D, error: "Invalid Configuration: FIPS and custom endpoint are not supported", [G]: k2 }, { conditions: E, error: "Invalid Configuration: Dualstack and custom endpoint are not supported", [G]: k2 }, { endpoint: { url: o2, properties: v2, headers: v2 }, [G]: h2 }], [G]: j2 }, { conditions: [p2], rules: [{ conditions: [r2], rules: [{ conditions: [x2, y], rules: [{ conditions: [{ [H]: c2, [I]: [b2, z] }, B], rules: [{ endpoint: { url: "https://sts-fips.{Region}.{PartitionResult#dualStackDnsSuffix}", properties: v2, headers: v2 }, [G]: h2 }], [G]: j2 }, { error: "FIPS and DualStack are enabled, but this partition does not support one or both", [G]: k2 }], [G]: j2 }, { conditions: D, rules: [{ conditions: [{ [H]: c2, [I]: [z, b2] }], rules: [{ conditions: [{ [H]: d2, [I]: [{ [H]: l2, [I]: [A, "name"] }, "aws-us-gov"] }], endpoint: { url: "https://sts.{Region}.amazonaws.com", properties: v2, headers: v2 }, [G]: h2 }, { endpoint: { url: "https://sts-fips.{Region}.{PartitionResult#dnsSuffix}", properties: v2, headers: v2 }, [G]: h2 }], [G]: j2 }, { error: "FIPS is enabled but this partition does not support FIPS", [G]: k2 }], [G]: j2 }, { conditions: E, rules: [{ conditions: [B], rules: [{ endpoint: { url: "https://sts.{Region}.{PartitionResult#dualStackDnsSuffix}", properties: v2, headers: v2 }, [G]: h2 }], [G]: j2 }, { error: "DualStack is enabled but this partition does not support DualStack", [G]: k2 }], [G]: j2 }, w2, { endpoint: { url: i2, properties: v2, headers: v2 }, [G]: h2 }], [G]: j2 }], [G]: j2 }, { error: "Invalid Configuration: Missing Region", [G]: k2 }] };
    ruleSet2 = _data2;
  }
});

// ../../node_modules/.pnpm/@aws-sdk+nested-clients@3.821.0/node_modules/@aws-sdk/nested-clients/dist-es/submodules/sts/endpoint/endpointResolver.js
var import_util_endpoints3, import_util_endpoints4, cache2, defaultEndpointResolver2;
var init_endpointResolver2 = __esm({
  "../../node_modules/.pnpm/@aws-sdk+nested-clients@3.821.0/node_modules/@aws-sdk/nested-clients/dist-es/submodules/sts/endpoint/endpointResolver.js"() {
    import_util_endpoints3 = __toESM(require_dist_cjs22());
    import_util_endpoints4 = __toESM(require_dist_cjs21());
    init_ruleset2();
    cache2 = new import_util_endpoints4.EndpointCache({
      size: 50,
      params: ["Endpoint", "Region", "UseDualStack", "UseFIPS", "UseGlobalEndpoint"]
    });
    defaultEndpointResolver2 = /* @__PURE__ */ __name((endpointParams, context = {}) => {
      return cache2.get(endpointParams, () => (0, import_util_endpoints4.resolveEndpoint)(ruleSet2, {
        endpointParams,
        logger: context.logger
      }));
    }, "defaultEndpointResolver");
    import_util_endpoints4.customEndpointFunctions.aws = import_util_endpoints3.awsEndpointFunctions;
  }
});

// ../../node_modules/.pnpm/@aws-sdk+nested-clients@3.821.0/node_modules/@aws-sdk/nested-clients/dist-es/submodules/sts/runtimeConfig.shared.js
var import_smithy_client14, import_url_parser2, import_util_base644, import_util_utf84, getRuntimeConfig3;
var init_runtimeConfig_shared2 = __esm({
  "../../node_modules/.pnpm/@aws-sdk+nested-clients@3.821.0/node_modules/@aws-sdk/nested-clients/dist-es/submodules/sts/runtimeConfig.shared.js"() {
    init_dist_es2();
    init_dist_es();
    import_smithy_client14 = __toESM(require_dist_cjs18());
    import_url_parser2 = __toESM(require_dist_cjs32());
    import_util_base644 = __toESM(require_dist_cjs10());
    import_util_utf84 = __toESM(require_dist_cjs9());
    init_httpAuthSchemeProvider2();
    init_endpointResolver2();
    getRuntimeConfig3 = /* @__PURE__ */ __name((config) => {
      return {
        apiVersion: "2011-06-15",
        base64Decoder: config?.base64Decoder ?? import_util_base644.fromBase64,
        base64Encoder: config?.base64Encoder ?? import_util_base644.toBase64,
        disableHostPrefix: config?.disableHostPrefix ?? false,
        endpointProvider: config?.endpointProvider ?? defaultEndpointResolver2,
        extensions: config?.extensions ?? [],
        httpAuthSchemeProvider: config?.httpAuthSchemeProvider ?? defaultSTSHttpAuthSchemeProvider,
        httpAuthSchemes: config?.httpAuthSchemes ?? [
          {
            schemeId: "aws.auth#sigv4",
            identityProvider: /* @__PURE__ */ __name((ipc) => ipc.getIdentityProvider("aws.auth#sigv4"), "identityProvider"),
            signer: new AwsSdkSigV4Signer()
          },
          {
            schemeId: "smithy.api#noAuth",
            identityProvider: /* @__PURE__ */ __name((ipc) => ipc.getIdentityProvider("smithy.api#noAuth") || (async () => ({})), "identityProvider"),
            signer: new NoAuthSigner()
          }
        ],
        logger: config?.logger ?? new import_smithy_client14.NoOpLogger(),
        serviceId: config?.serviceId ?? "STS",
        urlParser: config?.urlParser ?? import_url_parser2.parseUrl,
        utf8Decoder: config?.utf8Decoder ?? import_util_utf84.fromUtf8,
        utf8Encoder: config?.utf8Encoder ?? import_util_utf84.toUtf8
      };
    }, "getRuntimeConfig");
  }
});

// ../../node_modules/.pnpm/@aws-sdk+nested-clients@3.821.0/node_modules/@aws-sdk/nested-clients/dist-es/submodules/sts/runtimeConfig.js
var import_util_user_agent_node2, import_config_resolver3, import_hash_node2, import_middleware_retry3, import_node_config_provider2, import_node_http_handler2, import_util_body_length_node2, import_util_retry2, import_smithy_client15, import_util_defaults_mode_node2, import_smithy_client16, getRuntimeConfig4;
var init_runtimeConfig2 = __esm({
  "../../node_modules/.pnpm/@aws-sdk+nested-clients@3.821.0/node_modules/@aws-sdk/nested-clients/dist-es/submodules/sts/runtimeConfig.js"() {
    init_package();
    init_dist_es2();
    import_util_user_agent_node2 = __toESM(require_dist_cjs40());
    import_config_resolver3 = __toESM(require_dist_cjs27());
    init_dist_es();
    import_hash_node2 = __toESM(require_dist_cjs41());
    import_middleware_retry3 = __toESM(require_dist_cjs36());
    import_node_config_provider2 = __toESM(require_dist_cjs30());
    import_node_http_handler2 = __toESM(require_dist_cjs13());
    import_util_body_length_node2 = __toESM(require_dist_cjs42());
    import_util_retry2 = __toESM(require_dist_cjs35());
    init_runtimeConfig_shared2();
    import_smithy_client15 = __toESM(require_dist_cjs18());
    import_util_defaults_mode_node2 = __toESM(require_dist_cjs43());
    import_smithy_client16 = __toESM(require_dist_cjs18());
    getRuntimeConfig4 = /* @__PURE__ */ __name((config) => {
      (0, import_smithy_client16.emitWarningIfUnsupportedVersion)(process.version);
      const defaultsMode = (0, import_util_defaults_mode_node2.resolveDefaultsModeConfig)(config);
      const defaultConfigProvider = /* @__PURE__ */ __name(() => defaultsMode().then(import_smithy_client15.loadConfigsForDefaultMode), "defaultConfigProvider");
      const clientSharedValues = getRuntimeConfig3(config);
      emitWarningIfUnsupportedVersion(process.version);
      const loaderConfig = {
        profile: config?.profile,
        logger: clientSharedValues.logger
      };
      return {
        ...clientSharedValues,
        ...config,
        runtime: "node",
        defaultsMode,
        authSchemePreference: config?.authSchemePreference ?? (0, import_node_config_provider2.loadConfig)(NODE_AUTH_SCHEME_PREFERENCE_OPTIONS, loaderConfig),
        bodyLengthChecker: config?.bodyLengthChecker ?? import_util_body_length_node2.calculateBodyLength,
        defaultUserAgentProvider: config?.defaultUserAgentProvider ?? (0, import_util_user_agent_node2.createDefaultUserAgentProvider)({ serviceId: clientSharedValues.serviceId, clientVersion: package_default.version }),
        httpAuthSchemes: config?.httpAuthSchemes ?? [
          {
            schemeId: "aws.auth#sigv4",
            identityProvider: /* @__PURE__ */ __name((ipc) => ipc.getIdentityProvider("aws.auth#sigv4") || (async (idProps) => await config.credentialDefaultProvider(idProps?.__config || {})()), "identityProvider"),
            signer: new AwsSdkSigV4Signer()
          },
          {
            schemeId: "smithy.api#noAuth",
            identityProvider: /* @__PURE__ */ __name((ipc) => ipc.getIdentityProvider("smithy.api#noAuth") || (async () => ({})), "identityProvider"),
            signer: new NoAuthSigner()
          }
        ],
        maxAttempts: config?.maxAttempts ?? (0, import_node_config_provider2.loadConfig)(import_middleware_retry3.NODE_MAX_ATTEMPT_CONFIG_OPTIONS, config),
        region: config?.region ?? (0, import_node_config_provider2.loadConfig)(import_config_resolver3.NODE_REGION_CONFIG_OPTIONS, { ...import_config_resolver3.NODE_REGION_CONFIG_FILE_OPTIONS, ...loaderConfig }),
        requestHandler: import_node_http_handler2.NodeHttpHandler.create(config?.requestHandler ?? defaultConfigProvider),
        retryMode: config?.retryMode ?? (0, import_node_config_provider2.loadConfig)({
          ...import_middleware_retry3.NODE_RETRY_MODE_CONFIG_OPTIONS,
          default: /* @__PURE__ */ __name(async () => (await defaultConfigProvider()).retryMode || import_util_retry2.DEFAULT_RETRY_MODE, "default")
        }, config),
        sha256: config?.sha256 ?? import_hash_node2.Hash.bind(null, "sha256"),
        streamCollector: config?.streamCollector ?? import_node_http_handler2.streamCollector,
        useDualstackEndpoint: config?.useDualstackEndpoint ?? (0, import_node_config_provider2.loadConfig)(import_config_resolver3.NODE_USE_DUALSTACK_ENDPOINT_CONFIG_OPTIONS, loaderConfig),
        useFipsEndpoint: config?.useFipsEndpoint ?? (0, import_node_config_provider2.loadConfig)(import_config_resolver3.NODE_USE_FIPS_ENDPOINT_CONFIG_OPTIONS, loaderConfig),
        userAgentAppId: config?.userAgentAppId ?? (0, import_node_config_provider2.loadConfig)(import_util_user_agent_node2.NODE_APP_ID_CONFIG_OPTIONS, loaderConfig)
      };
    }, "getRuntimeConfig");
  }
});

// ../../node_modules/.pnpm/@aws-sdk+nested-clients@3.821.0/node_modules/@aws-sdk/nested-clients/dist-es/submodules/sts/auth/httpAuthExtensionConfiguration.js
var getHttpAuthExtensionConfiguration2, resolveHttpAuthRuntimeConfig2;
var init_httpAuthExtensionConfiguration2 = __esm({
  "../../node_modules/.pnpm/@aws-sdk+nested-clients@3.821.0/node_modules/@aws-sdk/nested-clients/dist-es/submodules/sts/auth/httpAuthExtensionConfiguration.js"() {
    getHttpAuthExtensionConfiguration2 = /* @__PURE__ */ __name((runtimeConfig) => {
      const _httpAuthSchemes = runtimeConfig.httpAuthSchemes;
      let _httpAuthSchemeProvider = runtimeConfig.httpAuthSchemeProvider;
      let _credentials = runtimeConfig.credentials;
      return {
        setHttpAuthScheme(httpAuthScheme) {
          const index = _httpAuthSchemes.findIndex((scheme) => scheme.schemeId === httpAuthScheme.schemeId);
          if (index === -1) {
            _httpAuthSchemes.push(httpAuthScheme);
          } else {
            _httpAuthSchemes.splice(index, 1, httpAuthScheme);
          }
        },
        httpAuthSchemes() {
          return _httpAuthSchemes;
        },
        setHttpAuthSchemeProvider(httpAuthSchemeProvider) {
          _httpAuthSchemeProvider = httpAuthSchemeProvider;
        },
        httpAuthSchemeProvider() {
          return _httpAuthSchemeProvider;
        },
        setCredentials(credentials) {
          _credentials = credentials;
        },
        credentials() {
          return _credentials;
        }
      };
    }, "getHttpAuthExtensionConfiguration");
    resolveHttpAuthRuntimeConfig2 = /* @__PURE__ */ __name((config) => {
      return {
        httpAuthSchemes: config.httpAuthSchemes(),
        httpAuthSchemeProvider: config.httpAuthSchemeProvider(),
        credentials: config.credentials()
      };
    }, "resolveHttpAuthRuntimeConfig");
  }
});

// ../../node_modules/.pnpm/@aws-sdk+nested-clients@3.821.0/node_modules/@aws-sdk/nested-clients/dist-es/submodules/sts/runtimeExtensions.js
var import_region_config_resolver2, import_protocol_http13, import_smithy_client17, resolveRuntimeExtensions2;
var init_runtimeExtensions2 = __esm({
  "../../node_modules/.pnpm/@aws-sdk+nested-clients@3.821.0/node_modules/@aws-sdk/nested-clients/dist-es/submodules/sts/runtimeExtensions.js"() {
    import_region_config_resolver2 = __toESM(require_dist_cjs44());
    import_protocol_http13 = __toESM(require_dist_cjs2());
    import_smithy_client17 = __toESM(require_dist_cjs18());
    init_httpAuthExtensionConfiguration2();
    resolveRuntimeExtensions2 = /* @__PURE__ */ __name((runtimeConfig, extensions) => {
      const extensionConfiguration = Object.assign((0, import_region_config_resolver2.getAwsRegionExtensionConfiguration)(runtimeConfig), (0, import_smithy_client17.getDefaultExtensionConfiguration)(runtimeConfig), (0, import_protocol_http13.getHttpHandlerExtensionConfiguration)(runtimeConfig), getHttpAuthExtensionConfiguration2(runtimeConfig));
      extensions.forEach((extension) => extension.configure(extensionConfiguration));
      return Object.assign(runtimeConfig, (0, import_region_config_resolver2.resolveAwsRegionExtensionConfiguration)(extensionConfiguration), (0, import_smithy_client17.resolveDefaultRuntimeConfig)(extensionConfiguration), (0, import_protocol_http13.resolveHttpHandlerRuntimeConfig)(extensionConfiguration), resolveHttpAuthRuntimeConfig2(extensionConfiguration));
    }, "resolveRuntimeExtensions");
  }
});

// ../../node_modules/.pnpm/@aws-sdk+nested-clients@3.821.0/node_modules/@aws-sdk/nested-clients/dist-es/submodules/sts/STSClient.js
var import_middleware_host_header2, import_middleware_logger2, import_middleware_recursion_detection2, import_middleware_user_agent2, import_config_resolver4, import_middleware_content_length2, import_middleware_endpoint3, import_middleware_retry4, import_smithy_client18, STSClient;
var init_STSClient = __esm({
  "../../node_modules/.pnpm/@aws-sdk+nested-clients@3.821.0/node_modules/@aws-sdk/nested-clients/dist-es/submodules/sts/STSClient.js"() {
    import_middleware_host_header2 = __toESM(require_dist_cjs3());
    import_middleware_logger2 = __toESM(require_dist_cjs4());
    import_middleware_recursion_detection2 = __toESM(require_dist_cjs5());
    import_middleware_user_agent2 = __toESM(require_dist_cjs25());
    import_config_resolver4 = __toESM(require_dist_cjs27());
    init_dist_es();
    import_middleware_content_length2 = __toESM(require_dist_cjs28());
    import_middleware_endpoint3 = __toESM(require_dist_cjs33());
    import_middleware_retry4 = __toESM(require_dist_cjs36());
    import_smithy_client18 = __toESM(require_dist_cjs18());
    init_httpAuthSchemeProvider2();
    init_EndpointParameters2();
    init_runtimeConfig2();
    init_runtimeExtensions2();
    STSClient = class extends import_smithy_client18.Client {
      static {
        __name(this, "STSClient");
      }
      config;
      constructor(...[configuration]) {
        const _config_0 = getRuntimeConfig4(configuration || {});
        super(_config_0);
        this.initConfig = _config_0;
        const _config_1 = resolveClientEndpointParameters2(_config_0);
        const _config_2 = (0, import_middleware_user_agent2.resolveUserAgentConfig)(_config_1);
        const _config_3 = (0, import_middleware_retry4.resolveRetryConfig)(_config_2);
        const _config_4 = (0, import_config_resolver4.resolveRegionConfig)(_config_3);
        const _config_5 = (0, import_middleware_host_header2.resolveHostHeaderConfig)(_config_4);
        const _config_6 = (0, import_middleware_endpoint3.resolveEndpointConfig)(_config_5);
        const _config_7 = resolveHttpAuthSchemeConfig2(_config_6);
        const _config_8 = resolveRuntimeExtensions2(_config_7, configuration?.extensions || []);
        this.config = _config_8;
        this.middlewareStack.use((0, import_middleware_user_agent2.getUserAgentPlugin)(this.config));
        this.middlewareStack.use((0, import_middleware_retry4.getRetryPlugin)(this.config));
        this.middlewareStack.use((0, import_middleware_content_length2.getContentLengthPlugin)(this.config));
        this.middlewareStack.use((0, import_middleware_host_header2.getHostHeaderPlugin)(this.config));
        this.middlewareStack.use((0, import_middleware_logger2.getLoggerPlugin)(this.config));
        this.middlewareStack.use((0, import_middleware_recursion_detection2.getRecursionDetectionPlugin)(this.config));
        this.middlewareStack.use(getHttpAuthSchemeEndpointRuleSetPlugin(this.config, {
          httpAuthSchemeParametersProvider: defaultSTSHttpAuthSchemeParametersProvider,
          identityProviderConfigProvider: /* @__PURE__ */ __name(async (config) => new DefaultIdentityProviderConfig({
            "aws.auth#sigv4": config.credentials
          }), "identityProviderConfigProvider")
        }));
        this.middlewareStack.use(getHttpSigningPlugin(this.config));
      }
      destroy() {
        super.destroy();
      }
    };
  }
});

// ../../node_modules/.pnpm/@aws-sdk+nested-clients@3.821.0/node_modules/@aws-sdk/nested-clients/dist-es/submodules/sts/models/STSServiceException.js
var import_smithy_client19, STSServiceException;
var init_STSServiceException = __esm({
  "../../node_modules/.pnpm/@aws-sdk+nested-clients@3.821.0/node_modules/@aws-sdk/nested-clients/dist-es/submodules/sts/models/STSServiceException.js"() {
    import_smithy_client19 = __toESM(require_dist_cjs18());
    STSServiceException = class _STSServiceException extends import_smithy_client19.ServiceException {
      static {
        __name(this, "STSServiceException");
      }
      constructor(options) {
        super(options);
        Object.setPrototypeOf(this, _STSServiceException.prototype);
      }
    };
  }
});

// ../../node_modules/.pnpm/@aws-sdk+nested-clients@3.821.0/node_modules/@aws-sdk/nested-clients/dist-es/submodules/sts/models/models_0.js
var import_smithy_client20, CredentialsFilterSensitiveLog, AssumeRoleResponseFilterSensitiveLog, ExpiredTokenException2, MalformedPolicyDocumentException, PackedPolicyTooLargeException, RegionDisabledException, IDPRejectedClaimException, InvalidIdentityTokenException, AssumeRoleWithWebIdentityRequestFilterSensitiveLog, AssumeRoleWithWebIdentityResponseFilterSensitiveLog, IDPCommunicationErrorException;
var init_models_02 = __esm({
  "../../node_modules/.pnpm/@aws-sdk+nested-clients@3.821.0/node_modules/@aws-sdk/nested-clients/dist-es/submodules/sts/models/models_0.js"() {
    import_smithy_client20 = __toESM(require_dist_cjs18());
    init_STSServiceException();
    CredentialsFilterSensitiveLog = /* @__PURE__ */ __name((obj) => ({
      ...obj,
      ...obj.SecretAccessKey && { SecretAccessKey: import_smithy_client20.SENSITIVE_STRING }
    }), "CredentialsFilterSensitiveLog");
    AssumeRoleResponseFilterSensitiveLog = /* @__PURE__ */ __name((obj) => ({
      ...obj,
      ...obj.Credentials && { Credentials: CredentialsFilterSensitiveLog(obj.Credentials) }
    }), "AssumeRoleResponseFilterSensitiveLog");
    ExpiredTokenException2 = class _ExpiredTokenException extends STSServiceException {
      static {
        __name(this, "ExpiredTokenException");
      }
      name = "ExpiredTokenException";
      $fault = "client";
      constructor(opts) {
        super({
          name: "ExpiredTokenException",
          $fault: "client",
          ...opts
        });
        Object.setPrototypeOf(this, _ExpiredTokenException.prototype);
      }
    };
    MalformedPolicyDocumentException = class _MalformedPolicyDocumentException extends STSServiceException {
      static {
        __name(this, "MalformedPolicyDocumentException");
      }
      name = "MalformedPolicyDocumentException";
      $fault = "client";
      constructor(opts) {
        super({
          name: "MalformedPolicyDocumentException",
          $fault: "client",
          ...opts
        });
        Object.setPrototypeOf(this, _MalformedPolicyDocumentException.prototype);
      }
    };
    PackedPolicyTooLargeException = class _PackedPolicyTooLargeException extends STSServiceException {
      static {
        __name(this, "PackedPolicyTooLargeException");
      }
      name = "PackedPolicyTooLargeException";
      $fault = "client";
      constructor(opts) {
        super({
          name: "PackedPolicyTooLargeException",
          $fault: "client",
          ...opts
        });
        Object.setPrototypeOf(this, _PackedPolicyTooLargeException.prototype);
      }
    };
    RegionDisabledException = class _RegionDisabledException extends STSServiceException {
      static {
        __name(this, "RegionDisabledException");
      }
      name = "RegionDisabledException";
      $fault = "client";
      constructor(opts) {
        super({
          name: "RegionDisabledException",
          $fault: "client",
          ...opts
        });
        Object.setPrototypeOf(this, _RegionDisabledException.prototype);
      }
    };
    IDPRejectedClaimException = class _IDPRejectedClaimException extends STSServiceException {
      static {
        __name(this, "IDPRejectedClaimException");
      }
      name = "IDPRejectedClaimException";
      $fault = "client";
      constructor(opts) {
        super({
          name: "IDPRejectedClaimException",
          $fault: "client",
          ...opts
        });
        Object.setPrototypeOf(this, _IDPRejectedClaimException.prototype);
      }
    };
    InvalidIdentityTokenException = class _InvalidIdentityTokenException extends STSServiceException {
      static {
        __name(this, "InvalidIdentityTokenException");
      }
      name = "InvalidIdentityTokenException";
      $fault = "client";
      constructor(opts) {
        super({
          name: "InvalidIdentityTokenException",
          $fault: "client",
          ...opts
        });
        Object.setPrototypeOf(this, _InvalidIdentityTokenException.prototype);
      }
    };
    AssumeRoleWithWebIdentityRequestFilterSensitiveLog = /* @__PURE__ */ __name((obj) => ({
      ...obj,
      ...obj.WebIdentityToken && { WebIdentityToken: import_smithy_client20.SENSITIVE_STRING }
    }), "AssumeRoleWithWebIdentityRequestFilterSensitiveLog");
    AssumeRoleWithWebIdentityResponseFilterSensitiveLog = /* @__PURE__ */ __name((obj) => ({
      ...obj,
      ...obj.Credentials && { Credentials: CredentialsFilterSensitiveLog(obj.Credentials) }
    }), "AssumeRoleWithWebIdentityResponseFilterSensitiveLog");
    IDPCommunicationErrorException = class _IDPCommunicationErrorException extends STSServiceException {
      static {
        __name(this, "IDPCommunicationErrorException");
      }
      name = "IDPCommunicationErrorException";
      $fault = "client";
      constructor(opts) {
        super({
          name: "IDPCommunicationErrorException",
          $fault: "client",
          ...opts
        });
        Object.setPrototypeOf(this, _IDPCommunicationErrorException.prototype);
      }
    };
  }
});

// ../../node_modules/.pnpm/@aws-sdk+nested-clients@3.821.0/node_modules/@aws-sdk/nested-clients/dist-es/submodules/sts/protocols/Aws_query.js
var import_protocol_http14, import_smithy_client21, se_AssumeRoleCommand, se_AssumeRoleWithWebIdentityCommand, de_AssumeRoleCommand, de_AssumeRoleWithWebIdentityCommand, de_CommandError2, de_ExpiredTokenExceptionRes2, de_IDPCommunicationErrorExceptionRes, de_IDPRejectedClaimExceptionRes, de_InvalidIdentityTokenExceptionRes, de_MalformedPolicyDocumentExceptionRes, de_PackedPolicyTooLargeExceptionRes, de_RegionDisabledExceptionRes, se_AssumeRoleRequest, se_AssumeRoleWithWebIdentityRequest, se_policyDescriptorListType, se_PolicyDescriptorType, se_ProvidedContext, se_ProvidedContextsListType, se_Tag, se_tagKeyListType, se_tagListType, de_AssumedRoleUser, de_AssumeRoleResponse, de_AssumeRoleWithWebIdentityResponse, de_Credentials, de_ExpiredTokenException, de_IDPCommunicationErrorException, de_IDPRejectedClaimException, de_InvalidIdentityTokenException, de_MalformedPolicyDocumentException, de_PackedPolicyTooLargeException, de_RegionDisabledException, deserializeMetadata2, collectBodyString3, throwDefaultError2, buildHttpRpcRequest, SHARED_HEADERS, _, _A, _AKI, _AR, _ARI, _ARU, _ARWWI, _Ar, _Au, _C, _CA, _DS, _E, _EI, _K, _P, _PA, _PAr, _PC, _PI, _PPS, _Pr, _RA, _RSN, _SAK, _SFWIT, _SI, _SN, _ST, _T, _TC, _TTK, _V, _Va, _WIT, _a, _m, buildFormUrlencodedString, loadQueryErrorCode;
var init_Aws_query = __esm({
  "../../node_modules/.pnpm/@aws-sdk+nested-clients@3.821.0/node_modules/@aws-sdk/nested-clients/dist-es/submodules/sts/protocols/Aws_query.js"() {
    init_dist_es2();
    import_protocol_http14 = __toESM(require_dist_cjs2());
    import_smithy_client21 = __toESM(require_dist_cjs18());
    init_models_02();
    init_STSServiceException();
    se_AssumeRoleCommand = /* @__PURE__ */ __name(async (input, context) => {
      const headers = SHARED_HEADERS;
      let body;
      body = buildFormUrlencodedString({
        ...se_AssumeRoleRequest(input, context),
        [_A]: _AR,
        [_V]: _
      });
      return buildHttpRpcRequest(context, headers, "/", void 0, body);
    }, "se_AssumeRoleCommand");
    se_AssumeRoleWithWebIdentityCommand = /* @__PURE__ */ __name(async (input, context) => {
      const headers = SHARED_HEADERS;
      let body;
      body = buildFormUrlencodedString({
        ...se_AssumeRoleWithWebIdentityRequest(input, context),
        [_A]: _ARWWI,
        [_V]: _
      });
      return buildHttpRpcRequest(context, headers, "/", void 0, body);
    }, "se_AssumeRoleWithWebIdentityCommand");
    de_AssumeRoleCommand = /* @__PURE__ */ __name(async (output, context) => {
      if (output.statusCode >= 300) {
        return de_CommandError2(output, context);
      }
      const data = await parseXmlBody(output.body, context);
      let contents = {};
      contents = de_AssumeRoleResponse(data.AssumeRoleResult, context);
      const response = {
        $metadata: deserializeMetadata2(output),
        ...contents
      };
      return response;
    }, "de_AssumeRoleCommand");
    de_AssumeRoleWithWebIdentityCommand = /* @__PURE__ */ __name(async (output, context) => {
      if (output.statusCode >= 300) {
        return de_CommandError2(output, context);
      }
      const data = await parseXmlBody(output.body, context);
      let contents = {};
      contents = de_AssumeRoleWithWebIdentityResponse(data.AssumeRoleWithWebIdentityResult, context);
      const response = {
        $metadata: deserializeMetadata2(output),
        ...contents
      };
      return response;
    }, "de_AssumeRoleWithWebIdentityCommand");
    de_CommandError2 = /* @__PURE__ */ __name(async (output, context) => {
      const parsedOutput = {
        ...output,
        body: await parseXmlErrorBody(output.body, context)
      };
      const errorCode = loadQueryErrorCode(output, parsedOutput.body);
      switch (errorCode) {
        case "ExpiredTokenException":
        case "com.amazonaws.sts#ExpiredTokenException":
          throw await de_ExpiredTokenExceptionRes2(parsedOutput, context);
        case "MalformedPolicyDocument":
        case "com.amazonaws.sts#MalformedPolicyDocumentException":
          throw await de_MalformedPolicyDocumentExceptionRes(parsedOutput, context);
        case "PackedPolicyTooLarge":
        case "com.amazonaws.sts#PackedPolicyTooLargeException":
          throw await de_PackedPolicyTooLargeExceptionRes(parsedOutput, context);
        case "RegionDisabledException":
        case "com.amazonaws.sts#RegionDisabledException":
          throw await de_RegionDisabledExceptionRes(parsedOutput, context);
        case "IDPCommunicationError":
        case "com.amazonaws.sts#IDPCommunicationErrorException":
          throw await de_IDPCommunicationErrorExceptionRes(parsedOutput, context);
        case "IDPRejectedClaim":
        case "com.amazonaws.sts#IDPRejectedClaimException":
          throw await de_IDPRejectedClaimExceptionRes(parsedOutput, context);
        case "InvalidIdentityToken":
        case "com.amazonaws.sts#InvalidIdentityTokenException":
          throw await de_InvalidIdentityTokenExceptionRes(parsedOutput, context);
        default:
          const parsedBody = parsedOutput.body;
          return throwDefaultError2({
            output,
            parsedBody: parsedBody.Error,
            errorCode
          });
      }
    }, "de_CommandError");
    de_ExpiredTokenExceptionRes2 = /* @__PURE__ */ __name(async (parsedOutput, context) => {
      const body = parsedOutput.body;
      const deserialized = de_ExpiredTokenException(body.Error, context);
      const exception = new ExpiredTokenException2({
        $metadata: deserializeMetadata2(parsedOutput),
        ...deserialized
      });
      return (0, import_smithy_client21.decorateServiceException)(exception, body);
    }, "de_ExpiredTokenExceptionRes");
    de_IDPCommunicationErrorExceptionRes = /* @__PURE__ */ __name(async (parsedOutput, context) => {
      const body = parsedOutput.body;
      const deserialized = de_IDPCommunicationErrorException(body.Error, context);
      const exception = new IDPCommunicationErrorException({
        $metadata: deserializeMetadata2(parsedOutput),
        ...deserialized
      });
      return (0, import_smithy_client21.decorateServiceException)(exception, body);
    }, "de_IDPCommunicationErrorExceptionRes");
    de_IDPRejectedClaimExceptionRes = /* @__PURE__ */ __name(async (parsedOutput, context) => {
      const body = parsedOutput.body;
      const deserialized = de_IDPRejectedClaimException(body.Error, context);
      const exception = new IDPRejectedClaimException({
        $metadata: deserializeMetadata2(parsedOutput),
        ...deserialized
      });
      return (0, import_smithy_client21.decorateServiceException)(exception, body);
    }, "de_IDPRejectedClaimExceptionRes");
    de_InvalidIdentityTokenExceptionRes = /* @__PURE__ */ __name(async (parsedOutput, context) => {
      const body = parsedOutput.body;
      const deserialized = de_InvalidIdentityTokenException(body.Error, context);
      const exception = new InvalidIdentityTokenException({
        $metadata: deserializeMetadata2(parsedOutput),
        ...deserialized
      });
      return (0, import_smithy_client21.decorateServiceException)(exception, body);
    }, "de_InvalidIdentityTokenExceptionRes");
    de_MalformedPolicyDocumentExceptionRes = /* @__PURE__ */ __name(async (parsedOutput, context) => {
      const body = parsedOutput.body;
      const deserialized = de_MalformedPolicyDocumentException(body.Error, context);
      const exception = new MalformedPolicyDocumentException({
        $metadata: deserializeMetadata2(parsedOutput),
        ...deserialized
      });
      return (0, import_smithy_client21.decorateServiceException)(exception, body);
    }, "de_MalformedPolicyDocumentExceptionRes");
    de_PackedPolicyTooLargeExceptionRes = /* @__PURE__ */ __name(async (parsedOutput, context) => {
      const body = parsedOutput.body;
      const deserialized = de_PackedPolicyTooLargeException(body.Error, context);
      const exception = new PackedPolicyTooLargeException({
        $metadata: deserializeMetadata2(parsedOutput),
        ...deserialized
      });
      return (0, import_smithy_client21.decorateServiceException)(exception, body);
    }, "de_PackedPolicyTooLargeExceptionRes");
    de_RegionDisabledExceptionRes = /* @__PURE__ */ __name(async (parsedOutput, context) => {
      const body = parsedOutput.body;
      const deserialized = de_RegionDisabledException(body.Error, context);
      const exception = new RegionDisabledException({
        $metadata: deserializeMetadata2(parsedOutput),
        ...deserialized
      });
      return (0, import_smithy_client21.decorateServiceException)(exception, body);
    }, "de_RegionDisabledExceptionRes");
    se_AssumeRoleRequest = /* @__PURE__ */ __name((input, context) => {
      const entries = {};
      if (input[_RA] != null) {
        entries[_RA] = input[_RA];
      }
      if (input[_RSN] != null) {
        entries[_RSN] = input[_RSN];
      }
      if (input[_PA] != null) {
        const memberEntries = se_policyDescriptorListType(input[_PA], context);
        if (input[_PA]?.length === 0) {
          entries.PolicyArns = [];
        }
        Object.entries(memberEntries).forEach(([key, value]) => {
          const loc = `PolicyArns.${key}`;
          entries[loc] = value;
        });
      }
      if (input[_P] != null) {
        entries[_P] = input[_P];
      }
      if (input[_DS] != null) {
        entries[_DS] = input[_DS];
      }
      if (input[_T] != null) {
        const memberEntries = se_tagListType(input[_T], context);
        if (input[_T]?.length === 0) {
          entries.Tags = [];
        }
        Object.entries(memberEntries).forEach(([key, value]) => {
          const loc = `Tags.${key}`;
          entries[loc] = value;
        });
      }
      if (input[_TTK] != null) {
        const memberEntries = se_tagKeyListType(input[_TTK], context);
        if (input[_TTK]?.length === 0) {
          entries.TransitiveTagKeys = [];
        }
        Object.entries(memberEntries).forEach(([key, value]) => {
          const loc = `TransitiveTagKeys.${key}`;
          entries[loc] = value;
        });
      }
      if (input[_EI] != null) {
        entries[_EI] = input[_EI];
      }
      if (input[_SN] != null) {
        entries[_SN] = input[_SN];
      }
      if (input[_TC] != null) {
        entries[_TC] = input[_TC];
      }
      if (input[_SI] != null) {
        entries[_SI] = input[_SI];
      }
      if (input[_PC] != null) {
        const memberEntries = se_ProvidedContextsListType(input[_PC], context);
        if (input[_PC]?.length === 0) {
          entries.ProvidedContexts = [];
        }
        Object.entries(memberEntries).forEach(([key, value]) => {
          const loc = `ProvidedContexts.${key}`;
          entries[loc] = value;
        });
      }
      return entries;
    }, "se_AssumeRoleRequest");
    se_AssumeRoleWithWebIdentityRequest = /* @__PURE__ */ __name((input, context) => {
      const entries = {};
      if (input[_RA] != null) {
        entries[_RA] = input[_RA];
      }
      if (input[_RSN] != null) {
        entries[_RSN] = input[_RSN];
      }
      if (input[_WIT] != null) {
        entries[_WIT] = input[_WIT];
      }
      if (input[_PI] != null) {
        entries[_PI] = input[_PI];
      }
      if (input[_PA] != null) {
        const memberEntries = se_policyDescriptorListType(input[_PA], context);
        if (input[_PA]?.length === 0) {
          entries.PolicyArns = [];
        }
        Object.entries(memberEntries).forEach(([key, value]) => {
          const loc = `PolicyArns.${key}`;
          entries[loc] = value;
        });
      }
      if (input[_P] != null) {
        entries[_P] = input[_P];
      }
      if (input[_DS] != null) {
        entries[_DS] = input[_DS];
      }
      return entries;
    }, "se_AssumeRoleWithWebIdentityRequest");
    se_policyDescriptorListType = /* @__PURE__ */ __name((input, context) => {
      const entries = {};
      let counter = 1;
      for (const entry of input) {
        if (entry === null) {
          continue;
        }
        const memberEntries = se_PolicyDescriptorType(entry, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
          entries[`member.${counter}.${key}`] = value;
        });
        counter++;
      }
      return entries;
    }, "se_policyDescriptorListType");
    se_PolicyDescriptorType = /* @__PURE__ */ __name((input, context) => {
      const entries = {};
      if (input[_a] != null) {
        entries[_a] = input[_a];
      }
      return entries;
    }, "se_PolicyDescriptorType");
    se_ProvidedContext = /* @__PURE__ */ __name((input, context) => {
      const entries = {};
      if (input[_PAr] != null) {
        entries[_PAr] = input[_PAr];
      }
      if (input[_CA] != null) {
        entries[_CA] = input[_CA];
      }
      return entries;
    }, "se_ProvidedContext");
    se_ProvidedContextsListType = /* @__PURE__ */ __name((input, context) => {
      const entries = {};
      let counter = 1;
      for (const entry of input) {
        if (entry === null) {
          continue;
        }
        const memberEntries = se_ProvidedContext(entry, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
          entries[`member.${counter}.${key}`] = value;
        });
        counter++;
      }
      return entries;
    }, "se_ProvidedContextsListType");
    se_Tag = /* @__PURE__ */ __name((input, context) => {
      const entries = {};
      if (input[_K] != null) {
        entries[_K] = input[_K];
      }
      if (input[_Va] != null) {
        entries[_Va] = input[_Va];
      }
      return entries;
    }, "se_Tag");
    se_tagKeyListType = /* @__PURE__ */ __name((input, context) => {
      const entries = {};
      let counter = 1;
      for (const entry of input) {
        if (entry === null) {
          continue;
        }
        entries[`member.${counter}`] = entry;
        counter++;
      }
      return entries;
    }, "se_tagKeyListType");
    se_tagListType = /* @__PURE__ */ __name((input, context) => {
      const entries = {};
      let counter = 1;
      for (const entry of input) {
        if (entry === null) {
          continue;
        }
        const memberEntries = se_Tag(entry, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
          entries[`member.${counter}.${key}`] = value;
        });
        counter++;
      }
      return entries;
    }, "se_tagListType");
    de_AssumedRoleUser = /* @__PURE__ */ __name((output, context) => {
      const contents = {};
      if (output[_ARI] != null) {
        contents[_ARI] = (0, import_smithy_client21.expectString)(output[_ARI]);
      }
      if (output[_Ar] != null) {
        contents[_Ar] = (0, import_smithy_client21.expectString)(output[_Ar]);
      }
      return contents;
    }, "de_AssumedRoleUser");
    de_AssumeRoleResponse = /* @__PURE__ */ __name((output, context) => {
      const contents = {};
      if (output[_C] != null) {
        contents[_C] = de_Credentials(output[_C], context);
      }
      if (output[_ARU] != null) {
        contents[_ARU] = de_AssumedRoleUser(output[_ARU], context);
      }
      if (output[_PPS] != null) {
        contents[_PPS] = (0, import_smithy_client21.strictParseInt32)(output[_PPS]);
      }
      if (output[_SI] != null) {
        contents[_SI] = (0, import_smithy_client21.expectString)(output[_SI]);
      }
      return contents;
    }, "de_AssumeRoleResponse");
    de_AssumeRoleWithWebIdentityResponse = /* @__PURE__ */ __name((output, context) => {
      const contents = {};
      if (output[_C] != null) {
        contents[_C] = de_Credentials(output[_C], context);
      }
      if (output[_SFWIT] != null) {
        contents[_SFWIT] = (0, import_smithy_client21.expectString)(output[_SFWIT]);
      }
      if (output[_ARU] != null) {
        contents[_ARU] = de_AssumedRoleUser(output[_ARU], context);
      }
      if (output[_PPS] != null) {
        contents[_PPS] = (0, import_smithy_client21.strictParseInt32)(output[_PPS]);
      }
      if (output[_Pr] != null) {
        contents[_Pr] = (0, import_smithy_client21.expectString)(output[_Pr]);
      }
      if (output[_Au] != null) {
        contents[_Au] = (0, import_smithy_client21.expectString)(output[_Au]);
      }
      if (output[_SI] != null) {
        contents[_SI] = (0, import_smithy_client21.expectString)(output[_SI]);
      }
      return contents;
    }, "de_AssumeRoleWithWebIdentityResponse");
    de_Credentials = /* @__PURE__ */ __name((output, context) => {
      const contents = {};
      if (output[_AKI] != null) {
        contents[_AKI] = (0, import_smithy_client21.expectString)(output[_AKI]);
      }
      if (output[_SAK] != null) {
        contents[_SAK] = (0, import_smithy_client21.expectString)(output[_SAK]);
      }
      if (output[_ST] != null) {
        contents[_ST] = (0, import_smithy_client21.expectString)(output[_ST]);
      }
      if (output[_E] != null) {
        contents[_E] = (0, import_smithy_client21.expectNonNull)((0, import_smithy_client21.parseRfc3339DateTimeWithOffset)(output[_E]));
      }
      return contents;
    }, "de_Credentials");
    de_ExpiredTokenException = /* @__PURE__ */ __name((output, context) => {
      const contents = {};
      if (output[_m] != null) {
        contents[_m] = (0, import_smithy_client21.expectString)(output[_m]);
      }
      return contents;
    }, "de_ExpiredTokenException");
    de_IDPCommunicationErrorException = /* @__PURE__ */ __name((output, context) => {
      const contents = {};
      if (output[_m] != null) {
        contents[_m] = (0, import_smithy_client21.expectString)(output[_m]);
      }
      return contents;
    }, "de_IDPCommunicationErrorException");
    de_IDPRejectedClaimException = /* @__PURE__ */ __name((output, context) => {
      const contents = {};
      if (output[_m] != null) {
        contents[_m] = (0, import_smithy_client21.expectString)(output[_m]);
      }
      return contents;
    }, "de_IDPRejectedClaimException");
    de_InvalidIdentityTokenException = /* @__PURE__ */ __name((output, context) => {
      const contents = {};
      if (output[_m] != null) {
        contents[_m] = (0, import_smithy_client21.expectString)(output[_m]);
      }
      return contents;
    }, "de_InvalidIdentityTokenException");
    de_MalformedPolicyDocumentException = /* @__PURE__ */ __name((output, context) => {
      const contents = {};
      if (output[_m] != null) {
        contents[_m] = (0, import_smithy_client21.expectString)(output[_m]);
      }
      return contents;
    }, "de_MalformedPolicyDocumentException");
    de_PackedPolicyTooLargeException = /* @__PURE__ */ __name((output, context) => {
      const contents = {};
      if (output[_m] != null) {
        contents[_m] = (0, import_smithy_client21.expectString)(output[_m]);
      }
      return contents;
    }, "de_PackedPolicyTooLargeException");
    de_RegionDisabledException = /* @__PURE__ */ __name((output, context) => {
      const contents = {};
      if (output[_m] != null) {
        contents[_m] = (0, import_smithy_client21.expectString)(output[_m]);
      }
      return contents;
    }, "de_RegionDisabledException");
    deserializeMetadata2 = /* @__PURE__ */ __name((output) => ({
      httpStatusCode: output.statusCode,
      requestId: output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"] ?? output.headers["x-amz-request-id"],
      extendedRequestId: output.headers["x-amz-id-2"],
      cfId: output.headers["x-amz-cf-id"]
    }), "deserializeMetadata");
    collectBodyString3 = /* @__PURE__ */ __name((streamBody, context) => (0, import_smithy_client21.collectBody)(streamBody, context).then((body) => context.utf8Encoder(body)), "collectBodyString");
    throwDefaultError2 = (0, import_smithy_client21.withBaseException)(STSServiceException);
    buildHttpRpcRequest = /* @__PURE__ */ __name(async (context, headers, path, resolvedHostname, body) => {
      const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
      const contents = {
        protocol,
        hostname,
        port,
        method: "POST",
        path: basePath.endsWith("/") ? basePath.slice(0, -1) + path : basePath + path,
        headers
      };
      if (resolvedHostname !== void 0) {
        contents.hostname = resolvedHostname;
      }
      if (body !== void 0) {
        contents.body = body;
      }
      return new import_protocol_http14.HttpRequest(contents);
    }, "buildHttpRpcRequest");
    SHARED_HEADERS = {
      "content-type": "application/x-www-form-urlencoded"
    };
    _ = "2011-06-15";
    _A = "Action";
    _AKI = "AccessKeyId";
    _AR = "AssumeRole";
    _ARI = "AssumedRoleId";
    _ARU = "AssumedRoleUser";
    _ARWWI = "AssumeRoleWithWebIdentity";
    _Ar = "Arn";
    _Au = "Audience";
    _C = "Credentials";
    _CA = "ContextAssertion";
    _DS = "DurationSeconds";
    _E = "Expiration";
    _EI = "ExternalId";
    _K = "Key";
    _P = "Policy";
    _PA = "PolicyArns";
    _PAr = "ProviderArn";
    _PC = "ProvidedContexts";
    _PI = "ProviderId";
    _PPS = "PackedPolicySize";
    _Pr = "Provider";
    _RA = "RoleArn";
    _RSN = "RoleSessionName";
    _SAK = "SecretAccessKey";
    _SFWIT = "SubjectFromWebIdentityToken";
    _SI = "SourceIdentity";
    _SN = "SerialNumber";
    _ST = "SessionToken";
    _T = "Tags";
    _TC = "TokenCode";
    _TTK = "TransitiveTagKeys";
    _V = "Version";
    _Va = "Value";
    _WIT = "WebIdentityToken";
    _a = "arn";
    _m = "message";
    buildFormUrlencodedString = /* @__PURE__ */ __name((formEntries) => Object.entries(formEntries).map(([key, value]) => (0, import_smithy_client21.extendedEncodeURIComponent)(key) + "=" + (0, import_smithy_client21.extendedEncodeURIComponent)(value)).join("&"), "buildFormUrlencodedString");
    loadQueryErrorCode = /* @__PURE__ */ __name((output, data) => {
      if (data.Error?.Code !== void 0) {
        return data.Error.Code;
      }
      if (output.statusCode == 404) {
        return "NotFound";
      }
    }, "loadQueryErrorCode");
  }
});

// ../../node_modules/.pnpm/@aws-sdk+nested-clients@3.821.0/node_modules/@aws-sdk/nested-clients/dist-es/submodules/sts/commands/AssumeRoleCommand.js
var import_middleware_endpoint4, import_middleware_serde3, import_smithy_client22, AssumeRoleCommand;
var init_AssumeRoleCommand = __esm({
  "../../node_modules/.pnpm/@aws-sdk+nested-clients@3.821.0/node_modules/@aws-sdk/nested-clients/dist-es/submodules/sts/commands/AssumeRoleCommand.js"() {
    import_middleware_endpoint4 = __toESM(require_dist_cjs33());
    import_middleware_serde3 = __toESM(require_dist_cjs20());
    import_smithy_client22 = __toESM(require_dist_cjs18());
    init_EndpointParameters2();
    init_models_02();
    init_Aws_query();
    AssumeRoleCommand = class extends import_smithy_client22.Command.classBuilder().ep(commonParams2).m(function(Command, cs, config, o3) {
      return [
        (0, import_middleware_serde3.getSerdePlugin)(config, this.serialize, this.deserialize),
        (0, import_middleware_endpoint4.getEndpointPlugin)(config, Command.getEndpointParameterInstructions())
      ];
    }).s("AWSSecurityTokenServiceV20110615", "AssumeRole", {}).n("STSClient", "AssumeRoleCommand").f(void 0, AssumeRoleResponseFilterSensitiveLog).ser(se_AssumeRoleCommand).de(de_AssumeRoleCommand).build() {
      static {
        __name(this, "AssumeRoleCommand");
      }
    };
  }
});

// ../../node_modules/.pnpm/@aws-sdk+nested-clients@3.821.0/node_modules/@aws-sdk/nested-clients/dist-es/submodules/sts/commands/AssumeRoleWithWebIdentityCommand.js
var import_middleware_endpoint5, import_middleware_serde4, import_smithy_client23, AssumeRoleWithWebIdentityCommand;
var init_AssumeRoleWithWebIdentityCommand = __esm({
  "../../node_modules/.pnpm/@aws-sdk+nested-clients@3.821.0/node_modules/@aws-sdk/nested-clients/dist-es/submodules/sts/commands/AssumeRoleWithWebIdentityCommand.js"() {
    import_middleware_endpoint5 = __toESM(require_dist_cjs33());
    import_middleware_serde4 = __toESM(require_dist_cjs20());
    import_smithy_client23 = __toESM(require_dist_cjs18());
    init_EndpointParameters2();
    init_models_02();
    init_Aws_query();
    AssumeRoleWithWebIdentityCommand = class extends import_smithy_client23.Command.classBuilder().ep(commonParams2).m(function(Command, cs, config, o3) {
      return [
        (0, import_middleware_serde4.getSerdePlugin)(config, this.serialize, this.deserialize),
        (0, import_middleware_endpoint5.getEndpointPlugin)(config, Command.getEndpointParameterInstructions())
      ];
    }).s("AWSSecurityTokenServiceV20110615", "AssumeRoleWithWebIdentity", {}).n("STSClient", "AssumeRoleWithWebIdentityCommand").f(AssumeRoleWithWebIdentityRequestFilterSensitiveLog, AssumeRoleWithWebIdentityResponseFilterSensitiveLog).ser(se_AssumeRoleWithWebIdentityCommand).de(de_AssumeRoleWithWebIdentityCommand).build() {
      static {
        __name(this, "AssumeRoleWithWebIdentityCommand");
      }
    };
  }
});

// ../../node_modules/.pnpm/@aws-sdk+nested-clients@3.821.0/node_modules/@aws-sdk/nested-clients/dist-es/submodules/sts/STS.js
var import_smithy_client24, commands2, STS;
var init_STS = __esm({
  "../../node_modules/.pnpm/@aws-sdk+nested-clients@3.821.0/node_modules/@aws-sdk/nested-clients/dist-es/submodules/sts/STS.js"() {
    import_smithy_client24 = __toESM(require_dist_cjs18());
    init_AssumeRoleCommand();
    init_AssumeRoleWithWebIdentityCommand();
    init_STSClient();
    commands2 = {
      AssumeRoleCommand,
      AssumeRoleWithWebIdentityCommand
    };
    STS = class extends STSClient {
      static {
        __name(this, "STS");
      }
    };
    (0, import_smithy_client24.createAggregatedClient)(commands2, STS);
  }
});

// ../../node_modules/.pnpm/@aws-sdk+nested-clients@3.821.0/node_modules/@aws-sdk/nested-clients/dist-es/submodules/sts/commands/index.js
var init_commands2 = __esm({
  "../../node_modules/.pnpm/@aws-sdk+nested-clients@3.821.0/node_modules/@aws-sdk/nested-clients/dist-es/submodules/sts/commands/index.js"() {
    init_AssumeRoleCommand();
    init_AssumeRoleWithWebIdentityCommand();
  }
});

// ../../node_modules/.pnpm/@aws-sdk+nested-clients@3.821.0/node_modules/@aws-sdk/nested-clients/dist-es/submodules/sts/models/index.js
var init_models2 = __esm({
  "../../node_modules/.pnpm/@aws-sdk+nested-clients@3.821.0/node_modules/@aws-sdk/nested-clients/dist-es/submodules/sts/models/index.js"() {
    init_models_02();
  }
});

// ../../node_modules/.pnpm/@aws-sdk+nested-clients@3.821.0/node_modules/@aws-sdk/nested-clients/dist-es/submodules/sts/defaultStsRoleAssumers.js
var ASSUME_ROLE_DEFAULT_REGION, getAccountIdFromAssumedRoleUser, resolveRegion, getDefaultRoleAssumer, getDefaultRoleAssumerWithWebIdentity, decorateDefaultCredentialProvider, isH2;
var init_defaultStsRoleAssumers = __esm({
  "../../node_modules/.pnpm/@aws-sdk+nested-clients@3.821.0/node_modules/@aws-sdk/nested-clients/dist-es/submodules/sts/defaultStsRoleAssumers.js"() {
    init_client();
    init_AssumeRoleCommand();
    init_AssumeRoleWithWebIdentityCommand();
    ASSUME_ROLE_DEFAULT_REGION = "us-east-1";
    getAccountIdFromAssumedRoleUser = /* @__PURE__ */ __name((assumedRoleUser) => {
      if (typeof assumedRoleUser?.Arn === "string") {
        const arnComponents = assumedRoleUser.Arn.split(":");
        if (arnComponents.length > 4 && arnComponents[4] !== "") {
          return arnComponents[4];
        }
      }
      return void 0;
    }, "getAccountIdFromAssumedRoleUser");
    resolveRegion = /* @__PURE__ */ __name(async (_region, _parentRegion, credentialProviderLogger) => {
      const region = typeof _region === "function" ? await _region() : _region;
      const parentRegion = typeof _parentRegion === "function" ? await _parentRegion() : _parentRegion;
      credentialProviderLogger?.debug?.("@aws-sdk/client-sts::resolveRegion", "accepting first of:", `${region} (provider)`, `${parentRegion} (parent client)`, `${ASSUME_ROLE_DEFAULT_REGION} (STS default)`);
      return region ?? parentRegion ?? ASSUME_ROLE_DEFAULT_REGION;
    }, "resolveRegion");
    getDefaultRoleAssumer = /* @__PURE__ */ __name((stsOptions, STSClient2) => {
      let stsClient;
      let closureSourceCreds;
      return async (sourceCreds, params) => {
        closureSourceCreds = sourceCreds;
        if (!stsClient) {
          const { logger: logger3 = stsOptions?.parentClientConfig?.logger, region, requestHandler = stsOptions?.parentClientConfig?.requestHandler, credentialProviderLogger } = stsOptions;
          const resolvedRegion = await resolveRegion(region, stsOptions?.parentClientConfig?.region, credentialProviderLogger);
          const isCompatibleRequestHandler = !isH2(requestHandler);
          stsClient = new STSClient2({
            profile: stsOptions?.parentClientConfig?.profile,
            credentialDefaultProvider: /* @__PURE__ */ __name(() => async () => closureSourceCreds, "credentialDefaultProvider"),
            region: resolvedRegion,
            requestHandler: isCompatibleRequestHandler ? requestHandler : void 0,
            logger: logger3
          });
        }
        const { Credentials, AssumedRoleUser } = await stsClient.send(new AssumeRoleCommand(params));
        if (!Credentials || !Credentials.AccessKeyId || !Credentials.SecretAccessKey) {
          throw new Error(`Invalid response from STS.assumeRole call with role ${params.RoleArn}`);
        }
        const accountId = getAccountIdFromAssumedRoleUser(AssumedRoleUser);
        const credentials = {
          accessKeyId: Credentials.AccessKeyId,
          secretAccessKey: Credentials.SecretAccessKey,
          sessionToken: Credentials.SessionToken,
          expiration: Credentials.Expiration,
          ...Credentials.CredentialScope && { credentialScope: Credentials.CredentialScope },
          ...accountId && { accountId }
        };
        setCredentialFeature(credentials, "CREDENTIALS_STS_ASSUME_ROLE", "i");
        return credentials;
      };
    }, "getDefaultRoleAssumer");
    getDefaultRoleAssumerWithWebIdentity = /* @__PURE__ */ __name((stsOptions, STSClient2) => {
      let stsClient;
      return async (params) => {
        if (!stsClient) {
          const { logger: logger3 = stsOptions?.parentClientConfig?.logger, region, requestHandler = stsOptions?.parentClientConfig?.requestHandler, credentialProviderLogger } = stsOptions;
          const resolvedRegion = await resolveRegion(region, stsOptions?.parentClientConfig?.region, credentialProviderLogger);
          const isCompatibleRequestHandler = !isH2(requestHandler);
          stsClient = new STSClient2({
            profile: stsOptions?.parentClientConfig?.profile,
            region: resolvedRegion,
            requestHandler: isCompatibleRequestHandler ? requestHandler : void 0,
            logger: logger3
          });
        }
        const { Credentials, AssumedRoleUser } = await stsClient.send(new AssumeRoleWithWebIdentityCommand(params));
        if (!Credentials || !Credentials.AccessKeyId || !Credentials.SecretAccessKey) {
          throw new Error(`Invalid response from STS.assumeRoleWithWebIdentity call with role ${params.RoleArn}`);
        }
        const accountId = getAccountIdFromAssumedRoleUser(AssumedRoleUser);
        const credentials = {
          accessKeyId: Credentials.AccessKeyId,
          secretAccessKey: Credentials.SecretAccessKey,
          sessionToken: Credentials.SessionToken,
          expiration: Credentials.Expiration,
          ...Credentials.CredentialScope && { credentialScope: Credentials.CredentialScope },
          ...accountId && { accountId }
        };
        if (accountId) {
          setCredentialFeature(credentials, "RESOLVED_ACCOUNT_ID", "T");
        }
        setCredentialFeature(credentials, "CREDENTIALS_STS_ASSUME_ROLE_WEB_ID", "k");
        return credentials;
      };
    }, "getDefaultRoleAssumerWithWebIdentity");
    decorateDefaultCredentialProvider = /* @__PURE__ */ __name((provider) => (input) => provider({
      roleAssumer: getDefaultRoleAssumer(input, input.stsClientCtor),
      roleAssumerWithWebIdentity: getDefaultRoleAssumerWithWebIdentity(input, input.stsClientCtor),
      ...input
    }), "decorateDefaultCredentialProvider");
    isH2 = /* @__PURE__ */ __name((requestHandler) => {
      return requestHandler?.metadata?.handlerProtocol === "h2";
    }, "isH2");
  }
});

// ../../node_modules/.pnpm/@aws-sdk+nested-clients@3.821.0/node_modules/@aws-sdk/nested-clients/dist-es/submodules/sts/defaultRoleAssumers.js
var getCustomizableStsClientCtor, getDefaultRoleAssumer2, getDefaultRoleAssumerWithWebIdentity2, decorateDefaultCredentialProvider2;
var init_defaultRoleAssumers = __esm({
  "../../node_modules/.pnpm/@aws-sdk+nested-clients@3.821.0/node_modules/@aws-sdk/nested-clients/dist-es/submodules/sts/defaultRoleAssumers.js"() {
    init_defaultStsRoleAssumers();
    init_STSClient();
    getCustomizableStsClientCtor = /* @__PURE__ */ __name((baseCtor, customizations) => {
      if (!customizations)
        return baseCtor;
      else
        return class CustomizableSTSClient extends baseCtor {
          static {
            __name(this, "CustomizableSTSClient");
          }
          constructor(config) {
            super(config);
            for (const customization of customizations) {
              this.middlewareStack.use(customization);
            }
          }
        };
    }, "getCustomizableStsClientCtor");
    getDefaultRoleAssumer2 = /* @__PURE__ */ __name((stsOptions = {}, stsPlugins) => getDefaultRoleAssumer(stsOptions, getCustomizableStsClientCtor(STSClient, stsPlugins)), "getDefaultRoleAssumer");
    getDefaultRoleAssumerWithWebIdentity2 = /* @__PURE__ */ __name((stsOptions = {}, stsPlugins) => getDefaultRoleAssumerWithWebIdentity(stsOptions, getCustomizableStsClientCtor(STSClient, stsPlugins)), "getDefaultRoleAssumerWithWebIdentity");
    decorateDefaultCredentialProvider2 = /* @__PURE__ */ __name((provider) => (input) => provider({
      roleAssumer: getDefaultRoleAssumer2(input),
      roleAssumerWithWebIdentity: getDefaultRoleAssumerWithWebIdentity2(input),
      ...input
    }), "decorateDefaultCredentialProvider");
  }
});

// ../../node_modules/.pnpm/@aws-sdk+nested-clients@3.821.0/node_modules/@aws-sdk/nested-clients/dist-es/submodules/sts/index.js
var sts_exports = {};
__export(sts_exports, {
  AssumeRoleCommand: () => AssumeRoleCommand,
  AssumeRoleResponseFilterSensitiveLog: () => AssumeRoleResponseFilterSensitiveLog,
  AssumeRoleWithWebIdentityCommand: () => AssumeRoleWithWebIdentityCommand,
  AssumeRoleWithWebIdentityRequestFilterSensitiveLog: () => AssumeRoleWithWebIdentityRequestFilterSensitiveLog,
  AssumeRoleWithWebIdentityResponseFilterSensitiveLog: () => AssumeRoleWithWebIdentityResponseFilterSensitiveLog,
  CredentialsFilterSensitiveLog: () => CredentialsFilterSensitiveLog,
  ExpiredTokenException: () => ExpiredTokenException2,
  IDPCommunicationErrorException: () => IDPCommunicationErrorException,
  IDPRejectedClaimException: () => IDPRejectedClaimException,
  InvalidIdentityTokenException: () => InvalidIdentityTokenException,
  MalformedPolicyDocumentException: () => MalformedPolicyDocumentException,
  PackedPolicyTooLargeException: () => PackedPolicyTooLargeException,
  RegionDisabledException: () => RegionDisabledException,
  STS: () => STS,
  STSClient: () => STSClient,
  STSServiceException: () => STSServiceException,
  __Client: () => import_smithy_client18.Client,
  decorateDefaultCredentialProvider: () => decorateDefaultCredentialProvider2,
  getDefaultRoleAssumer: () => getDefaultRoleAssumer2,
  getDefaultRoleAssumerWithWebIdentity: () => getDefaultRoleAssumerWithWebIdentity2
});
var init_sts = __esm({
  "../../node_modules/.pnpm/@aws-sdk+nested-clients@3.821.0/node_modules/@aws-sdk/nested-clients/dist-es/submodules/sts/index.js"() {
    init_STSClient();
    init_STS();
    init_commands2();
    init_models2();
    init_defaultRoleAssumers();
    init_STSServiceException();
  }
});

// ../../node_modules/.pnpm/@aws-sdk+credential-provider-process@3.821.0/node_modules/@aws-sdk/credential-provider-process/dist-cjs/index.js
var require_dist_cjs48 = __commonJS({
  "../../node_modules/.pnpm/@aws-sdk+credential-provider-process@3.821.0/node_modules/@aws-sdk/credential-provider-process/dist-cjs/index.js"(exports2, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __name2 = /* @__PURE__ */ __name((target, value) => __defProp2(target, "name", { value, configurable: true }), "__name");
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: /* @__PURE__ */ __name(() => from[key], "get"), enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var index_exports = {};
    __export2(index_exports, {
      fromProcess: /* @__PURE__ */ __name(() => fromProcess, "fromProcess")
    });
    module2.exports = __toCommonJS2(index_exports);
    var import_shared_ini_file_loader = require_dist_cjs29();
    var import_property_provider2 = require_dist_cjs23();
    var import_child_process = require("child_process");
    var import_util = require("util");
    var import_client3 = (init_client(), __toCommonJS(client_exports));
    var getValidatedProcessCredentials = __name2((profileName, data, profiles) => {
      if (data.Version !== 1) {
        throw Error(`Profile ${profileName} credential_process did not return Version 1.`);
      }
      if (data.AccessKeyId === void 0 || data.SecretAccessKey === void 0) {
        throw Error(`Profile ${profileName} credential_process returned invalid credentials.`);
      }
      if (data.Expiration) {
        const currentTime = /* @__PURE__ */ new Date();
        const expireTime = new Date(data.Expiration);
        if (expireTime < currentTime) {
          throw Error(`Profile ${profileName} credential_process returned expired credentials.`);
        }
      }
      let accountId = data.AccountId;
      if (!accountId && profiles?.[profileName]?.aws_account_id) {
        accountId = profiles[profileName].aws_account_id;
      }
      const credentials = {
        accessKeyId: data.AccessKeyId,
        secretAccessKey: data.SecretAccessKey,
        ...data.SessionToken && { sessionToken: data.SessionToken },
        ...data.Expiration && { expiration: new Date(data.Expiration) },
        ...data.CredentialScope && { credentialScope: data.CredentialScope },
        ...accountId && { accountId }
      };
      (0, import_client3.setCredentialFeature)(credentials, "CREDENTIALS_PROCESS", "w");
      return credentials;
    }, "getValidatedProcessCredentials");
    var resolveProcessCredentials = __name2(async (profileName, profiles, logger3) => {
      const profile = profiles[profileName];
      if (profiles[profileName]) {
        const credentialProcess = profile["credential_process"];
        if (credentialProcess !== void 0) {
          const execPromise = (0, import_util.promisify)(import_child_process.exec);
          try {
            const { stdout } = await execPromise(credentialProcess);
            let data;
            try {
              data = JSON.parse(stdout.trim());
            } catch {
              throw Error(`Profile ${profileName} credential_process returned invalid JSON.`);
            }
            return getValidatedProcessCredentials(profileName, data, profiles);
          } catch (error2) {
            throw new import_property_provider2.CredentialsProviderError(error2.message, { logger: logger3 });
          }
        } else {
          throw new import_property_provider2.CredentialsProviderError(`Profile ${profileName} did not contain credential_process.`, { logger: logger3 });
        }
      } else {
        throw new import_property_provider2.CredentialsProviderError(`Profile ${profileName} could not be found in shared credentials file.`, {
          logger: logger3
        });
      }
    }, "resolveProcessCredentials");
    var fromProcess = __name2((init = {}) => async ({ callerClientConfig } = {}) => {
      init.logger?.debug("@aws-sdk/credential-provider-process - fromProcess");
      const profiles = await (0, import_shared_ini_file_loader.parseKnownFiles)(init);
      return resolveProcessCredentials(
        (0, import_shared_ini_file_loader.getProfileName)({
          profile: init.profile ?? callerClientConfig?.profile
        }),
        profiles,
        init.logger
      );
    }, "fromProcess");
  }
});

// ../../node_modules/.pnpm/@aws-sdk+credential-provider-web-identity@3.821.0/node_modules/@aws-sdk/credential-provider-web-identity/dist-cjs/fromWebToken.js
var require_fromWebToken = __commonJS({
  "../../node_modules/.pnpm/@aws-sdk+credential-provider-web-identity@3.821.0/node_modules/@aws-sdk/credential-provider-web-identity/dist-cjs/fromWebToken.js"(exports2) {
    "use strict";
    var __createBinding2 = exports2 && exports2.__createBinding || (Object.create ? function(o3, m3, k3, k22) {
      if (k22 === void 0) k22 = k3;
      var desc = Object.getOwnPropertyDescriptor(m3, k3);
      if (!desc || ("get" in desc ? !m3.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: /* @__PURE__ */ __name(function() {
          return m3[k3];
        }, "get") };
      }
      Object.defineProperty(o3, k22, desc);
    } : function(o3, m3, k3, k22) {
      if (k22 === void 0) k22 = k3;
      o3[k22] = m3[k3];
    });
    var __setModuleDefault2 = exports2 && exports2.__setModuleDefault || (Object.create ? function(o3, v6) {
      Object.defineProperty(o3, "default", { enumerable: true, value: v6 });
    } : function(o3, v6) {
      o3["default"] = v6;
    });
    var __importStar2 = exports2 && exports2.__importStar || /* @__PURE__ */ function() {
      var ownKeys = /* @__PURE__ */ __name(function(o3) {
        ownKeys = Object.getOwnPropertyNames || function(o4) {
          var ar = [];
          for (var k3 in o4) if (Object.prototype.hasOwnProperty.call(o4, k3)) ar[ar.length] = k3;
          return ar;
        };
        return ownKeys(o3);
      }, "ownKeys");
      return function(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) {
          for (var k3 = ownKeys(mod), i3 = 0; i3 < k3.length; i3++) if (k3[i3] !== "default") __createBinding2(result, mod, k3[i3]);
        }
        __setModuleDefault2(result, mod);
        return result;
      };
    }();
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.fromWebToken = void 0;
    var fromWebToken2 = /* @__PURE__ */ __name((init) => async (awsIdentityProperties) => {
      init.logger?.debug("@aws-sdk/credential-provider-web-identity - fromWebToken");
      const { roleArn, roleSessionName, webIdentityToken, providerId, policyArns, policy, durationSeconds } = init;
      let { roleAssumerWithWebIdentity } = init;
      if (!roleAssumerWithWebIdentity) {
        const { getDefaultRoleAssumerWithWebIdentity: getDefaultRoleAssumerWithWebIdentity3 } = await Promise.resolve().then(() => __importStar2((init_sts(), __toCommonJS(sts_exports))));
        roleAssumerWithWebIdentity = getDefaultRoleAssumerWithWebIdentity3({
          ...init.clientConfig,
          credentialProviderLogger: init.logger,
          parentClientConfig: {
            ...awsIdentityProperties?.callerClientConfig,
            ...init.parentClientConfig
          }
        }, init.clientPlugins);
      }
      return roleAssumerWithWebIdentity({
        RoleArn: roleArn,
        RoleSessionName: roleSessionName ?? `aws-sdk-js-session-${Date.now()}`,
        WebIdentityToken: webIdentityToken,
        ProviderId: providerId,
        PolicyArns: policyArns,
        Policy: policy,
        DurationSeconds: durationSeconds
      });
    }, "fromWebToken");
    exports2.fromWebToken = fromWebToken2;
  }
});

// ../../node_modules/.pnpm/@aws-sdk+credential-provider-web-identity@3.821.0/node_modules/@aws-sdk/credential-provider-web-identity/dist-cjs/fromTokenFile.js
var require_fromTokenFile = __commonJS({
  "../../node_modules/.pnpm/@aws-sdk+credential-provider-web-identity@3.821.0/node_modules/@aws-sdk/credential-provider-web-identity/dist-cjs/fromTokenFile.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.fromTokenFile = void 0;
    var client_1 = (init_client(), __toCommonJS(client_exports));
    var property_provider_1 = require_dist_cjs23();
    var fs_1 = require("fs");
    var fromWebToken_1 = require_fromWebToken();
    var ENV_TOKEN_FILE = "AWS_WEB_IDENTITY_TOKEN_FILE";
    var ENV_ROLE_ARN = "AWS_ROLE_ARN";
    var ENV_ROLE_SESSION_NAME = "AWS_ROLE_SESSION_NAME";
    var fromTokenFile2 = /* @__PURE__ */ __name((init = {}) => async () => {
      init.logger?.debug("@aws-sdk/credential-provider-web-identity - fromTokenFile");
      const webIdentityTokenFile = init?.webIdentityTokenFile ?? process.env[ENV_TOKEN_FILE];
      const roleArn = init?.roleArn ?? process.env[ENV_ROLE_ARN];
      const roleSessionName = init?.roleSessionName ?? process.env[ENV_ROLE_SESSION_NAME];
      if (!webIdentityTokenFile || !roleArn) {
        throw new property_provider_1.CredentialsProviderError("Web identity configuration not specified", {
          logger: init.logger
        });
      }
      const credentials = await (0, fromWebToken_1.fromWebToken)({
        ...init,
        webIdentityToken: (0, fs_1.readFileSync)(webIdentityTokenFile, { encoding: "ascii" }),
        roleArn,
        roleSessionName
      })();
      if (webIdentityTokenFile === process.env[ENV_TOKEN_FILE]) {
        (0, client_1.setCredentialFeature)(credentials, "CREDENTIALS_ENV_VARS_STS_WEB_ID_TOKEN", "h");
      }
      return credentials;
    }, "fromTokenFile");
    exports2.fromTokenFile = fromTokenFile2;
  }
});

// ../../node_modules/.pnpm/@aws-sdk+credential-provider-web-identity@3.821.0/node_modules/@aws-sdk/credential-provider-web-identity/dist-cjs/index.js
var require_dist_cjs49 = __commonJS({
  "../../node_modules/.pnpm/@aws-sdk+credential-provider-web-identity@3.821.0/node_modules/@aws-sdk/credential-provider-web-identity/dist-cjs/index.js"(exports2, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: /* @__PURE__ */ __name(() => from[key], "get"), enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __reExport = /* @__PURE__ */ __name((target, mod, secondTarget) => (__copyProps2(target, mod, "default"), secondTarget && __copyProps2(secondTarget, mod, "default")), "__reExport");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var index_exports = {};
    module2.exports = __toCommonJS2(index_exports);
    __reExport(index_exports, require_fromTokenFile(), module2.exports);
    __reExport(index_exports, require_fromWebToken(), module2.exports);
  }
});

// ../../node_modules/.pnpm/@aws-sdk+credential-provider-ini@3.821.0/node_modules/@aws-sdk/credential-provider-ini/dist-cjs/index.js
var require_dist_cjs50 = __commonJS({
  "../../node_modules/.pnpm/@aws-sdk+credential-provider-ini@3.821.0/node_modules/@aws-sdk/credential-provider-ini/dist-cjs/index.js"(exports2, module2) {
    "use strict";
    var __create2 = Object.create;
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __getProtoOf2 = Object.getPrototypeOf;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __name2 = /* @__PURE__ */ __name((target, value) => __defProp2(target, "name", { value, configurable: true }), "__name");
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: /* @__PURE__ */ __name(() => from[key], "get"), enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toESM2 = /* @__PURE__ */ __name((mod, isNodeMode, target) => (target = mod != null ? __create2(__getProtoOf2(mod)) : {}, __copyProps2(
      // If the importer is in node compatibility mode or this is not an ESM
      // file that has been converted to a CommonJS file using a Babel-
      // compatible transform (i.e. "__esModule" has not been set), then set
      // "default" to the CommonJS "module.exports" for node compatibility.
      isNodeMode || !mod || !mod.__esModule ? __defProp2(target, "default", { value: mod, enumerable: true }) : target,
      mod
    )), "__toESM");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var index_exports = {};
    __export2(index_exports, {
      fromIni: /* @__PURE__ */ __name(() => fromIni, "fromIni")
    });
    module2.exports = __toCommonJS2(index_exports);
    var import_shared_ini_file_loader = require_dist_cjs29();
    var import_client3 = (init_client(), __toCommonJS(client_exports));
    var import_property_provider2 = require_dist_cjs23();
    var resolveCredentialSource = __name2((credentialSource, profileName, logger3) => {
      const sourceProvidersMap = {
        EcsContainer: __name2(async (options) => {
          const { fromHttp } = await Promise.resolve().then(() => __toESM2(require_dist_cjs39()));
          const { fromContainerMetadata } = await Promise.resolve().then(() => __toESM2(require_dist_cjs38()));
          logger3?.debug("@aws-sdk/credential-provider-ini - credential_source is EcsContainer");
          return async () => (0, import_property_provider2.chain)(fromHttp(options ?? {}), fromContainerMetadata(options))().then(setNamedProvider);
        }, "EcsContainer"),
        Ec2InstanceMetadata: __name2(async (options) => {
          logger3?.debug("@aws-sdk/credential-provider-ini - credential_source is Ec2InstanceMetadata");
          const { fromInstanceMetadata } = await Promise.resolve().then(() => __toESM2(require_dist_cjs38()));
          return async () => fromInstanceMetadata(options)().then(setNamedProvider);
        }, "Ec2InstanceMetadata"),
        Environment: __name2(async (options) => {
          logger3?.debug("@aws-sdk/credential-provider-ini - credential_source is Environment");
          const { fromEnv } = await Promise.resolve().then(() => __toESM2(require_dist_cjs37()));
          return async () => fromEnv(options)().then(setNamedProvider);
        }, "Environment")
      };
      if (credentialSource in sourceProvidersMap) {
        return sourceProvidersMap[credentialSource];
      } else {
        throw new import_property_provider2.CredentialsProviderError(
          `Unsupported credential source in profile ${profileName}. Got ${credentialSource}, expected EcsContainer or Ec2InstanceMetadata or Environment.`,
          { logger: logger3 }
        );
      }
    }, "resolveCredentialSource");
    var setNamedProvider = __name2((creds) => (0, import_client3.setCredentialFeature)(creds, "CREDENTIALS_PROFILE_NAMED_PROVIDER", "p"), "setNamedProvider");
    var isAssumeRoleProfile = __name2((arg, { profile = "default", logger: logger3 } = {}) => {
      return Boolean(arg) && typeof arg === "object" && typeof arg.role_arn === "string" && ["undefined", "string"].indexOf(typeof arg.role_session_name) > -1 && ["undefined", "string"].indexOf(typeof arg.external_id) > -1 && ["undefined", "string"].indexOf(typeof arg.mfa_serial) > -1 && (isAssumeRoleWithSourceProfile(arg, { profile, logger: logger3 }) || isCredentialSourceProfile(arg, { profile, logger: logger3 }));
    }, "isAssumeRoleProfile");
    var isAssumeRoleWithSourceProfile = __name2((arg, { profile, logger: logger3 }) => {
      const withSourceProfile = typeof arg.source_profile === "string" && typeof arg.credential_source === "undefined";
      if (withSourceProfile) {
        logger3?.debug?.(`    ${profile} isAssumeRoleWithSourceProfile source_profile=${arg.source_profile}`);
      }
      return withSourceProfile;
    }, "isAssumeRoleWithSourceProfile");
    var isCredentialSourceProfile = __name2((arg, { profile, logger: logger3 }) => {
      const withProviderProfile = typeof arg.credential_source === "string" && typeof arg.source_profile === "undefined";
      if (withProviderProfile) {
        logger3?.debug?.(`    ${profile} isCredentialSourceProfile credential_source=${arg.credential_source}`);
      }
      return withProviderProfile;
    }, "isCredentialSourceProfile");
    var resolveAssumeRoleCredentials = __name2(async (profileName, profiles, options, visitedProfiles = {}) => {
      options.logger?.debug("@aws-sdk/credential-provider-ini - resolveAssumeRoleCredentials (STS)");
      const profileData = profiles[profileName];
      const { source_profile, region } = profileData;
      if (!options.roleAssumer) {
        const { getDefaultRoleAssumer: getDefaultRoleAssumer3 } = await Promise.resolve().then(() => __toESM2((init_sts(), __toCommonJS(sts_exports))));
        options.roleAssumer = getDefaultRoleAssumer3(
          {
            ...options.clientConfig,
            credentialProviderLogger: options.logger,
            parentClientConfig: {
              ...options?.parentClientConfig,
              region: region ?? options?.parentClientConfig?.region
            }
          },
          options.clientPlugins
        );
      }
      if (source_profile && source_profile in visitedProfiles) {
        throw new import_property_provider2.CredentialsProviderError(
          `Detected a cycle attempting to resolve credentials for profile ${(0, import_shared_ini_file_loader.getProfileName)(options)}. Profiles visited: ` + Object.keys(visitedProfiles).join(", "),
          { logger: options.logger }
        );
      }
      options.logger?.debug(
        `@aws-sdk/credential-provider-ini - finding credential resolver using ${source_profile ? `source_profile=[${source_profile}]` : `profile=[${profileName}]`}`
      );
      const sourceCredsProvider = source_profile ? resolveProfileData(
        source_profile,
        profiles,
        options,
        {
          ...visitedProfiles,
          [source_profile]: true
        },
        isCredentialSourceWithoutRoleArn(profiles[source_profile] ?? {})
      ) : (await resolveCredentialSource(profileData.credential_source, profileName, options.logger)(options))();
      if (isCredentialSourceWithoutRoleArn(profileData)) {
        return sourceCredsProvider.then((creds) => (0, import_client3.setCredentialFeature)(creds, "CREDENTIALS_PROFILE_SOURCE_PROFILE", "o"));
      } else {
        const params = {
          RoleArn: profileData.role_arn,
          RoleSessionName: profileData.role_session_name || `aws-sdk-js-${Date.now()}`,
          ExternalId: profileData.external_id,
          DurationSeconds: parseInt(profileData.duration_seconds || "3600", 10)
        };
        const { mfa_serial } = profileData;
        if (mfa_serial) {
          if (!options.mfaCodeProvider) {
            throw new import_property_provider2.CredentialsProviderError(
              `Profile ${profileName} requires multi-factor authentication, but no MFA code callback was provided.`,
              { logger: options.logger, tryNextLink: false }
            );
          }
          params.SerialNumber = mfa_serial;
          params.TokenCode = await options.mfaCodeProvider(mfa_serial);
        }
        const sourceCreds = await sourceCredsProvider;
        return options.roleAssumer(sourceCreds, params).then(
          (creds) => (0, import_client3.setCredentialFeature)(creds, "CREDENTIALS_PROFILE_SOURCE_PROFILE", "o")
        );
      }
    }, "resolveAssumeRoleCredentials");
    var isCredentialSourceWithoutRoleArn = __name2((section) => {
      return !section.role_arn && !!section.credential_source;
    }, "isCredentialSourceWithoutRoleArn");
    var isProcessProfile = __name2((arg) => Boolean(arg) && typeof arg === "object" && typeof arg.credential_process === "string", "isProcessProfile");
    var resolveProcessCredentials = __name2(async (options, profile) => Promise.resolve().then(() => __toESM2(require_dist_cjs48())).then(
      ({ fromProcess }) => fromProcess({
        ...options,
        profile
      })().then((creds) => (0, import_client3.setCredentialFeature)(creds, "CREDENTIALS_PROFILE_PROCESS", "v"))
    ), "resolveProcessCredentials");
    var resolveSsoCredentials = __name2(async (profile, profileData, options = {}) => {
      const { fromSSO } = await Promise.resolve().then(() => __toESM2(require_dist_cjs47()));
      return fromSSO({
        profile,
        logger: options.logger,
        parentClientConfig: options.parentClientConfig,
        clientConfig: options.clientConfig
      })().then((creds) => {
        if (profileData.sso_session) {
          return (0, import_client3.setCredentialFeature)(creds, "CREDENTIALS_PROFILE_SSO", "r");
        } else {
          return (0, import_client3.setCredentialFeature)(creds, "CREDENTIALS_PROFILE_SSO_LEGACY", "t");
        }
      });
    }, "resolveSsoCredentials");
    var isSsoProfile = __name2((arg) => arg && (typeof arg.sso_start_url === "string" || typeof arg.sso_account_id === "string" || typeof arg.sso_session === "string" || typeof arg.sso_region === "string" || typeof arg.sso_role_name === "string"), "isSsoProfile");
    var isStaticCredsProfile = __name2((arg) => Boolean(arg) && typeof arg === "object" && typeof arg.aws_access_key_id === "string" && typeof arg.aws_secret_access_key === "string" && ["undefined", "string"].indexOf(typeof arg.aws_session_token) > -1 && ["undefined", "string"].indexOf(typeof arg.aws_account_id) > -1, "isStaticCredsProfile");
    var resolveStaticCredentials = __name2(async (profile, options) => {
      options?.logger?.debug("@aws-sdk/credential-provider-ini - resolveStaticCredentials");
      const credentials = {
        accessKeyId: profile.aws_access_key_id,
        secretAccessKey: profile.aws_secret_access_key,
        sessionToken: profile.aws_session_token,
        ...profile.aws_credential_scope && { credentialScope: profile.aws_credential_scope },
        ...profile.aws_account_id && { accountId: profile.aws_account_id }
      };
      return (0, import_client3.setCredentialFeature)(credentials, "CREDENTIALS_PROFILE", "n");
    }, "resolveStaticCredentials");
    var isWebIdentityProfile = __name2((arg) => Boolean(arg) && typeof arg === "object" && typeof arg.web_identity_token_file === "string" && typeof arg.role_arn === "string" && ["undefined", "string"].indexOf(typeof arg.role_session_name) > -1, "isWebIdentityProfile");
    var resolveWebIdentityCredentials = __name2(async (profile, options) => Promise.resolve().then(() => __toESM2(require_dist_cjs49())).then(
      ({ fromTokenFile: fromTokenFile2 }) => fromTokenFile2({
        webIdentityTokenFile: profile.web_identity_token_file,
        roleArn: profile.role_arn,
        roleSessionName: profile.role_session_name,
        roleAssumerWithWebIdentity: options.roleAssumerWithWebIdentity,
        logger: options.logger,
        parentClientConfig: options.parentClientConfig
      })().then((creds) => (0, import_client3.setCredentialFeature)(creds, "CREDENTIALS_PROFILE_STS_WEB_ID_TOKEN", "q"))
    ), "resolveWebIdentityCredentials");
    var resolveProfileData = __name2(async (profileName, profiles, options, visitedProfiles = {}, isAssumeRoleRecursiveCall = false) => {
      const data = profiles[profileName];
      if (Object.keys(visitedProfiles).length > 0 && isStaticCredsProfile(data)) {
        return resolveStaticCredentials(data, options);
      }
      if (isAssumeRoleRecursiveCall || isAssumeRoleProfile(data, { profile: profileName, logger: options.logger })) {
        return resolveAssumeRoleCredentials(profileName, profiles, options, visitedProfiles);
      }
      if (isStaticCredsProfile(data)) {
        return resolveStaticCredentials(data, options);
      }
      if (isWebIdentityProfile(data)) {
        return resolveWebIdentityCredentials(data, options);
      }
      if (isProcessProfile(data)) {
        return resolveProcessCredentials(options, profileName);
      }
      if (isSsoProfile(data)) {
        return await resolveSsoCredentials(profileName, data, options);
      }
      throw new import_property_provider2.CredentialsProviderError(
        `Could not resolve credentials using profile: [${profileName}] in configuration/credentials file(s).`,
        { logger: options.logger }
      );
    }, "resolveProfileData");
    var fromIni = __name2((_init = {}) => async ({ callerClientConfig } = {}) => {
      const init = {
        ..._init,
        parentClientConfig: {
          ...callerClientConfig,
          ..._init.parentClientConfig
        }
      };
      init.logger?.debug("@aws-sdk/credential-provider-ini - fromIni");
      const profiles = await (0, import_shared_ini_file_loader.parseKnownFiles)(init);
      return resolveProfileData(
        (0, import_shared_ini_file_loader.getProfileName)({
          profile: _init.profile ?? callerClientConfig?.profile
        }),
        profiles,
        init
      );
    }, "fromIni");
  }
});

// ../../node_modules/.pnpm/@aws-sdk+credential-provider-node@3.821.0/node_modules/@aws-sdk/credential-provider-node/dist-cjs/index.js
var require_dist_cjs51 = __commonJS({
  "../../node_modules/.pnpm/@aws-sdk+credential-provider-node@3.821.0/node_modules/@aws-sdk/credential-provider-node/dist-cjs/index.js"(exports2, module2) {
    "use strict";
    var __create2 = Object.create;
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __getProtoOf2 = Object.getPrototypeOf;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __name2 = /* @__PURE__ */ __name((target, value) => __defProp2(target, "name", { value, configurable: true }), "__name");
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: /* @__PURE__ */ __name(() => from[key], "get"), enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toESM2 = /* @__PURE__ */ __name((mod, isNodeMode, target) => (target = mod != null ? __create2(__getProtoOf2(mod)) : {}, __copyProps2(
      // If the importer is in node compatibility mode or this is not an ESM
      // file that has been converted to a CommonJS file using a Babel-
      // compatible transform (i.e. "__esModule" has not been set), then set
      // "default" to the CommonJS "module.exports" for node compatibility.
      isNodeMode || !mod || !mod.__esModule ? __defProp2(target, "default", { value: mod, enumerable: true }) : target,
      mod
    )), "__toESM");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var index_exports = {};
    __export2(index_exports, {
      credentialsTreatedAsExpired: /* @__PURE__ */ __name(() => credentialsTreatedAsExpired, "credentialsTreatedAsExpired"),
      credentialsWillNeedRefresh: /* @__PURE__ */ __name(() => credentialsWillNeedRefresh, "credentialsWillNeedRefresh"),
      defaultProvider: /* @__PURE__ */ __name(() => defaultProvider, "defaultProvider")
    });
    module2.exports = __toCommonJS2(index_exports);
    var import_credential_provider_env = require_dist_cjs37();
    var import_shared_ini_file_loader = require_dist_cjs29();
    var import_property_provider2 = require_dist_cjs23();
    var ENV_IMDS_DISABLED = "AWS_EC2_METADATA_DISABLED";
    var remoteProvider = __name2(async (init) => {
      const { ENV_CMDS_FULL_URI, ENV_CMDS_RELATIVE_URI, fromContainerMetadata, fromInstanceMetadata } = await Promise.resolve().then(() => __toESM2(require_dist_cjs38()));
      if (process.env[ENV_CMDS_RELATIVE_URI] || process.env[ENV_CMDS_FULL_URI]) {
        init.logger?.debug("@aws-sdk/credential-provider-node - remoteProvider::fromHttp/fromContainerMetadata");
        const { fromHttp } = await Promise.resolve().then(() => __toESM2(require_dist_cjs39()));
        return (0, import_property_provider2.chain)(fromHttp(init), fromContainerMetadata(init));
      }
      if (process.env[ENV_IMDS_DISABLED] && process.env[ENV_IMDS_DISABLED] !== "false") {
        return async () => {
          throw new import_property_provider2.CredentialsProviderError("EC2 Instance Metadata Service access disabled", { logger: init.logger });
        };
      }
      init.logger?.debug("@aws-sdk/credential-provider-node - remoteProvider::fromInstanceMetadata");
      return fromInstanceMetadata(init);
    }, "remoteProvider");
    var multipleCredentialSourceWarningEmitted = false;
    var defaultProvider = __name2((init = {}) => (0, import_property_provider2.memoize)(
      (0, import_property_provider2.chain)(
        async () => {
          const profile = init.profile ?? process.env[import_shared_ini_file_loader.ENV_PROFILE];
          if (profile) {
            const envStaticCredentialsAreSet = process.env[import_credential_provider_env.ENV_KEY] && process.env[import_credential_provider_env.ENV_SECRET];
            if (envStaticCredentialsAreSet) {
              if (!multipleCredentialSourceWarningEmitted) {
                const warnFn = init.logger?.warn && init.logger?.constructor?.name !== "NoOpLogger" ? init.logger.warn : console.warn;
                warnFn(
                  `@aws-sdk/credential-provider-node - defaultProvider::fromEnv WARNING:
    Multiple credential sources detected: 
    Both AWS_PROFILE and the pair AWS_ACCESS_KEY_ID/AWS_SECRET_ACCESS_KEY static credentials are set.
    This SDK will proceed with the AWS_PROFILE value.
    
    However, a future version may change this behavior to prefer the ENV static credentials.
    Please ensure that your environment only sets either the AWS_PROFILE or the
    AWS_ACCESS_KEY_ID/AWS_SECRET_ACCESS_KEY pair.
`
                );
                multipleCredentialSourceWarningEmitted = true;
              }
            }
            throw new import_property_provider2.CredentialsProviderError("AWS_PROFILE is set, skipping fromEnv provider.", {
              logger: init.logger,
              tryNextLink: true
            });
          }
          init.logger?.debug("@aws-sdk/credential-provider-node - defaultProvider::fromEnv");
          return (0, import_credential_provider_env.fromEnv)(init)();
        },
        async () => {
          init.logger?.debug("@aws-sdk/credential-provider-node - defaultProvider::fromSSO");
          const { ssoStartUrl, ssoAccountId, ssoRegion, ssoRoleName, ssoSession } = init;
          if (!ssoStartUrl && !ssoAccountId && !ssoRegion && !ssoRoleName && !ssoSession) {
            throw new import_property_provider2.CredentialsProviderError(
              "Skipping SSO provider in default chain (inputs do not include SSO fields).",
              { logger: init.logger }
            );
          }
          const { fromSSO } = await Promise.resolve().then(() => __toESM2(require_dist_cjs47()));
          return fromSSO(init)();
        },
        async () => {
          init.logger?.debug("@aws-sdk/credential-provider-node - defaultProvider::fromIni");
          const { fromIni } = await Promise.resolve().then(() => __toESM2(require_dist_cjs50()));
          return fromIni(init)();
        },
        async () => {
          init.logger?.debug("@aws-sdk/credential-provider-node - defaultProvider::fromProcess");
          const { fromProcess } = await Promise.resolve().then(() => __toESM2(require_dist_cjs48()));
          return fromProcess(init)();
        },
        async () => {
          init.logger?.debug("@aws-sdk/credential-provider-node - defaultProvider::fromTokenFile");
          const { fromTokenFile: fromTokenFile2 } = await Promise.resolve().then(() => __toESM2(require_dist_cjs49()));
          return fromTokenFile2(init)();
        },
        async () => {
          init.logger?.debug("@aws-sdk/credential-provider-node - defaultProvider::remoteProvider");
          return (await remoteProvider(init))();
        },
        async () => {
          throw new import_property_provider2.CredentialsProviderError("Could not load credentials from any providers", {
            tryNextLink: false,
            logger: init.logger
          });
        }
      ),
      credentialsTreatedAsExpired,
      credentialsWillNeedRefresh
    ), "defaultProvider");
    var credentialsWillNeedRefresh = __name2((credentials) => credentials?.expiration !== void 0, "credentialsWillNeedRefresh");
    var credentialsTreatedAsExpired = __name2((credentials) => credentials?.expiration !== void 0 && credentials.expiration.getTime() - Date.now() < 3e5, "credentialsTreatedAsExpired");
  }
});

// ../../node_modules/.pnpm/@aws-sdk+client-sqs@3.821.0/node_modules/@aws-sdk/client-sqs/dist-cjs/endpoint/ruleset.js
var require_ruleset2 = __commonJS({
  "../../node_modules/.pnpm/@aws-sdk+client-sqs@3.821.0/node_modules/@aws-sdk/client-sqs/dist-cjs/endpoint/ruleset.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.ruleSet = void 0;
    var u3 = "required", v6 = "fn", w3 = "argv", x3 = "ref";
    var a3 = true, b3 = "isSet", c3 = "booleanEquals", d3 = "error", e3 = "endpoint", f3 = "tree", g3 = "PartitionResult", h3 = "getAttr", i3 = { [u3]: false, "type": "String" }, j3 = { [u3]: true, "default": false, "type": "Boolean" }, k3 = { [x3]: "Endpoint" }, l3 = { [v6]: c3, [w3]: [{ [x3]: "UseFIPS" }, true] }, m3 = { [v6]: c3, [w3]: [{ [x3]: "UseDualStack" }, true] }, n3 = {}, o3 = { [v6]: h3, [w3]: [{ [x3]: g3 }, "supportsFIPS"] }, p3 = { [x3]: g3 }, q3 = { [v6]: c3, [w3]: [true, { [v6]: h3, [w3]: [p3, "supportsDualStack"] }] }, r3 = [l3], s3 = [m3], t3 = [{ [x3]: "Region" }];
    var _data3 = { version: "1.0", parameters: { Region: i3, UseDualStack: j3, UseFIPS: j3, Endpoint: i3 }, rules: [{ conditions: [{ [v6]: b3, [w3]: [k3] }], rules: [{ conditions: r3, error: "Invalid Configuration: FIPS and custom endpoint are not supported", type: d3 }, { conditions: s3, error: "Invalid Configuration: Dualstack and custom endpoint are not supported", type: d3 }, { endpoint: { url: k3, properties: n3, headers: n3 }, type: e3 }], type: f3 }, { conditions: [{ [v6]: b3, [w3]: t3 }], rules: [{ conditions: [{ [v6]: "aws.partition", [w3]: t3, assign: g3 }], rules: [{ conditions: [l3, m3], rules: [{ conditions: [{ [v6]: c3, [w3]: [a3, o3] }, q3], rules: [{ endpoint: { url: "https://sqs-fips.{Region}.{PartitionResult#dualStackDnsSuffix}", properties: n3, headers: n3 }, type: e3 }], type: f3 }, { error: "FIPS and DualStack are enabled, but this partition does not support one or both", type: d3 }], type: f3 }, { conditions: r3, rules: [{ conditions: [{ [v6]: c3, [w3]: [o3, a3] }], rules: [{ conditions: [{ [v6]: "stringEquals", [w3]: [{ [v6]: h3, [w3]: [p3, "name"] }, "aws-us-gov"] }], endpoint: { url: "https://sqs.{Region}.amazonaws.com", properties: n3, headers: n3 }, type: e3 }, { endpoint: { url: "https://sqs-fips.{Region}.{PartitionResult#dnsSuffix}", properties: n3, headers: n3 }, type: e3 }], type: f3 }, { error: "FIPS is enabled but this partition does not support FIPS", type: d3 }], type: f3 }, { conditions: s3, rules: [{ conditions: [q3], rules: [{ endpoint: { url: "https://sqs.{Region}.{PartitionResult#dualStackDnsSuffix}", properties: n3, headers: n3 }, type: e3 }], type: f3 }, { error: "DualStack is enabled but this partition does not support DualStack", type: d3 }], type: f3 }, { endpoint: { url: "https://sqs.{Region}.{PartitionResult#dnsSuffix}", properties: n3, headers: n3 }, type: e3 }], type: f3 }], type: f3 }, { error: "Invalid Configuration: Missing Region", type: d3 }] };
    exports2.ruleSet = _data3;
  }
});

// ../../node_modules/.pnpm/@aws-sdk+client-sqs@3.821.0/node_modules/@aws-sdk/client-sqs/dist-cjs/endpoint/endpointResolver.js
var require_endpointResolver2 = __commonJS({
  "../../node_modules/.pnpm/@aws-sdk+client-sqs@3.821.0/node_modules/@aws-sdk/client-sqs/dist-cjs/endpoint/endpointResolver.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.defaultEndpointResolver = void 0;
    var util_endpoints_1 = require_dist_cjs22();
    var util_endpoints_2 = require_dist_cjs21();
    var ruleset_1 = require_ruleset2();
    var cache3 = new util_endpoints_2.EndpointCache({
      size: 50,
      params: ["Endpoint", "Region", "UseDualStack", "UseFIPS"]
    });
    var defaultEndpointResolver3 = /* @__PURE__ */ __name((endpointParams, context = {}) => {
      return cache3.get(endpointParams, () => (0, util_endpoints_2.resolveEndpoint)(ruleset_1.ruleSet, {
        endpointParams,
        logger: context.logger
      }));
    }, "defaultEndpointResolver");
    exports2.defaultEndpointResolver = defaultEndpointResolver3;
    util_endpoints_2.customEndpointFunctions.aws = util_endpoints_1.awsEndpointFunctions;
  }
});

// ../../node_modules/.pnpm/@aws-sdk+client-sqs@3.821.0/node_modules/@aws-sdk/client-sqs/dist-cjs/runtimeConfig.shared.js
var require_runtimeConfig_shared2 = __commonJS({
  "../../node_modules/.pnpm/@aws-sdk+client-sqs@3.821.0/node_modules/@aws-sdk/client-sqs/dist-cjs/runtimeConfig.shared.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.getRuntimeConfig = void 0;
    var core_1 = (init_dist_es2(), __toCommonJS(dist_es_exports2));
    var smithy_client_1 = require_dist_cjs18();
    var url_parser_1 = require_dist_cjs32();
    var util_base64_1 = require_dist_cjs10();
    var util_utf8_1 = require_dist_cjs9();
    var httpAuthSchemeProvider_1 = require_httpAuthSchemeProvider();
    var endpointResolver_1 = require_endpointResolver2();
    var getRuntimeConfig5 = /* @__PURE__ */ __name((config) => {
      return {
        apiVersion: "2012-11-05",
        base64Decoder: config?.base64Decoder ?? util_base64_1.fromBase64,
        base64Encoder: config?.base64Encoder ?? util_base64_1.toBase64,
        disableHostPrefix: config?.disableHostPrefix ?? false,
        endpointProvider: config?.endpointProvider ?? endpointResolver_1.defaultEndpointResolver,
        extensions: config?.extensions ?? [],
        httpAuthSchemeProvider: config?.httpAuthSchemeProvider ?? httpAuthSchemeProvider_1.defaultSQSHttpAuthSchemeProvider,
        httpAuthSchemes: config?.httpAuthSchemes ?? [
          {
            schemeId: "aws.auth#sigv4",
            identityProvider: /* @__PURE__ */ __name((ipc) => ipc.getIdentityProvider("aws.auth#sigv4"), "identityProvider"),
            signer: new core_1.AwsSdkSigV4Signer()
          }
        ],
        logger: config?.logger ?? new smithy_client_1.NoOpLogger(),
        serviceId: config?.serviceId ?? "SQS",
        urlParser: config?.urlParser ?? url_parser_1.parseUrl,
        utf8Decoder: config?.utf8Decoder ?? util_utf8_1.fromUtf8,
        utf8Encoder: config?.utf8Encoder ?? util_utf8_1.toUtf8
      };
    }, "getRuntimeConfig");
    exports2.getRuntimeConfig = getRuntimeConfig5;
  }
});

// ../../node_modules/.pnpm/@aws-sdk+client-sqs@3.821.0/node_modules/@aws-sdk/client-sqs/dist-cjs/runtimeConfig.js
var require_runtimeConfig2 = __commonJS({
  "../../node_modules/.pnpm/@aws-sdk+client-sqs@3.821.0/node_modules/@aws-sdk/client-sqs/dist-cjs/runtimeConfig.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.getRuntimeConfig = void 0;
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    var package_json_1 = tslib_1.__importDefault(require_package());
    var core_1 = (init_dist_es2(), __toCommonJS(dist_es_exports2));
    var credential_provider_node_1 = require_dist_cjs51();
    var util_user_agent_node_1 = require_dist_cjs40();
    var config_resolver_1 = require_dist_cjs27();
    var hash_node_1 = require_dist_cjs41();
    var middleware_retry_1 = require_dist_cjs36();
    var node_config_provider_1 = require_dist_cjs30();
    var node_http_handler_1 = require_dist_cjs13();
    var util_body_length_node_1 = require_dist_cjs42();
    var util_retry_1 = require_dist_cjs35();
    var runtimeConfig_shared_1 = require_runtimeConfig_shared2();
    var smithy_client_1 = require_dist_cjs18();
    var util_defaults_mode_node_1 = require_dist_cjs43();
    var smithy_client_2 = require_dist_cjs18();
    var getRuntimeConfig5 = /* @__PURE__ */ __name((config) => {
      (0, smithy_client_2.emitWarningIfUnsupportedVersion)(process.version);
      const defaultsMode = (0, util_defaults_mode_node_1.resolveDefaultsModeConfig)(config);
      const defaultConfigProvider = /* @__PURE__ */ __name(() => defaultsMode().then(smithy_client_1.loadConfigsForDefaultMode), "defaultConfigProvider");
      const clientSharedValues = (0, runtimeConfig_shared_1.getRuntimeConfig)(config);
      (0, core_1.emitWarningIfUnsupportedVersion)(process.version);
      const loaderConfig = {
        profile: config?.profile,
        logger: clientSharedValues.logger
      };
      return {
        ...clientSharedValues,
        ...config,
        runtime: "node",
        defaultsMode,
        authSchemePreference: config?.authSchemePreference ?? (0, node_config_provider_1.loadConfig)(core_1.NODE_AUTH_SCHEME_PREFERENCE_OPTIONS, loaderConfig),
        bodyLengthChecker: config?.bodyLengthChecker ?? util_body_length_node_1.calculateBodyLength,
        credentialDefaultProvider: config?.credentialDefaultProvider ?? credential_provider_node_1.defaultProvider,
        defaultUserAgentProvider: config?.defaultUserAgentProvider ?? (0, util_user_agent_node_1.createDefaultUserAgentProvider)({ serviceId: clientSharedValues.serviceId, clientVersion: package_json_1.default.version }),
        maxAttempts: config?.maxAttempts ?? (0, node_config_provider_1.loadConfig)(middleware_retry_1.NODE_MAX_ATTEMPT_CONFIG_OPTIONS, config),
        md5: config?.md5 ?? hash_node_1.Hash.bind(null, "md5"),
        region: config?.region ?? (0, node_config_provider_1.loadConfig)(config_resolver_1.NODE_REGION_CONFIG_OPTIONS, { ...config_resolver_1.NODE_REGION_CONFIG_FILE_OPTIONS, ...loaderConfig }),
        requestHandler: node_http_handler_1.NodeHttpHandler.create(config?.requestHandler ?? defaultConfigProvider),
        retryMode: config?.retryMode ?? (0, node_config_provider_1.loadConfig)({
          ...middleware_retry_1.NODE_RETRY_MODE_CONFIG_OPTIONS,
          default: /* @__PURE__ */ __name(async () => (await defaultConfigProvider()).retryMode || util_retry_1.DEFAULT_RETRY_MODE, "default")
        }, config),
        sha256: config?.sha256 ?? hash_node_1.Hash.bind(null, "sha256"),
        streamCollector: config?.streamCollector ?? node_http_handler_1.streamCollector,
        useDualstackEndpoint: config?.useDualstackEndpoint ?? (0, node_config_provider_1.loadConfig)(config_resolver_1.NODE_USE_DUALSTACK_ENDPOINT_CONFIG_OPTIONS, loaderConfig),
        useFipsEndpoint: config?.useFipsEndpoint ?? (0, node_config_provider_1.loadConfig)(config_resolver_1.NODE_USE_FIPS_ENDPOINT_CONFIG_OPTIONS, loaderConfig),
        userAgentAppId: config?.userAgentAppId ?? (0, node_config_provider_1.loadConfig)(util_user_agent_node_1.NODE_APP_ID_CONFIG_OPTIONS, loaderConfig)
      };
    }, "getRuntimeConfig");
    exports2.getRuntimeConfig = getRuntimeConfig5;
  }
});

// ../../node_modules/.pnpm/@aws-sdk+client-sqs@3.821.0/node_modules/@aws-sdk/client-sqs/dist-cjs/index.js
var require_dist_cjs52 = __commonJS({
  "../../node_modules/.pnpm/@aws-sdk+client-sqs@3.821.0/node_modules/@aws-sdk/client-sqs/dist-cjs/index.js"(exports2, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __name2 = /* @__PURE__ */ __name((target, value) => __defProp2(target, "name", { value, configurable: true }), "__name");
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: /* @__PURE__ */ __name(() => from[key], "get"), enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var index_exports = {};
    __export2(index_exports, {
      AddPermissionCommand: /* @__PURE__ */ __name(() => AddPermissionCommand, "AddPermissionCommand"),
      BatchEntryIdsNotDistinct: /* @__PURE__ */ __name(() => BatchEntryIdsNotDistinct, "BatchEntryIdsNotDistinct"),
      BatchRequestTooLong: /* @__PURE__ */ __name(() => BatchRequestTooLong, "BatchRequestTooLong"),
      CancelMessageMoveTaskCommand: /* @__PURE__ */ __name(() => CancelMessageMoveTaskCommand, "CancelMessageMoveTaskCommand"),
      ChangeMessageVisibilityBatchCommand: /* @__PURE__ */ __name(() => ChangeMessageVisibilityBatchCommand, "ChangeMessageVisibilityBatchCommand"),
      ChangeMessageVisibilityCommand: /* @__PURE__ */ __name(() => ChangeMessageVisibilityCommand, "ChangeMessageVisibilityCommand"),
      CreateQueueCommand: /* @__PURE__ */ __name(() => CreateQueueCommand, "CreateQueueCommand"),
      DeleteMessageBatchCommand: /* @__PURE__ */ __name(() => DeleteMessageBatchCommand, "DeleteMessageBatchCommand"),
      DeleteMessageCommand: /* @__PURE__ */ __name(() => DeleteMessageCommand, "DeleteMessageCommand"),
      DeleteQueueCommand: /* @__PURE__ */ __name(() => DeleteQueueCommand, "DeleteQueueCommand"),
      EmptyBatchRequest: /* @__PURE__ */ __name(() => EmptyBatchRequest, "EmptyBatchRequest"),
      GetQueueAttributesCommand: /* @__PURE__ */ __name(() => GetQueueAttributesCommand, "GetQueueAttributesCommand"),
      GetQueueUrlCommand: /* @__PURE__ */ __name(() => GetQueueUrlCommand, "GetQueueUrlCommand"),
      InvalidAddress: /* @__PURE__ */ __name(() => InvalidAddress, "InvalidAddress"),
      InvalidAttributeName: /* @__PURE__ */ __name(() => InvalidAttributeName, "InvalidAttributeName"),
      InvalidAttributeValue: /* @__PURE__ */ __name(() => InvalidAttributeValue, "InvalidAttributeValue"),
      InvalidBatchEntryId: /* @__PURE__ */ __name(() => InvalidBatchEntryId, "InvalidBatchEntryId"),
      InvalidIdFormat: /* @__PURE__ */ __name(() => InvalidIdFormat, "InvalidIdFormat"),
      InvalidMessageContents: /* @__PURE__ */ __name(() => InvalidMessageContents, "InvalidMessageContents"),
      InvalidSecurity: /* @__PURE__ */ __name(() => InvalidSecurity, "InvalidSecurity"),
      KmsAccessDenied: /* @__PURE__ */ __name(() => KmsAccessDenied, "KmsAccessDenied"),
      KmsDisabled: /* @__PURE__ */ __name(() => KmsDisabled, "KmsDisabled"),
      KmsInvalidKeyUsage: /* @__PURE__ */ __name(() => KmsInvalidKeyUsage, "KmsInvalidKeyUsage"),
      KmsInvalidState: /* @__PURE__ */ __name(() => KmsInvalidState, "KmsInvalidState"),
      KmsNotFound: /* @__PURE__ */ __name(() => KmsNotFound, "KmsNotFound"),
      KmsOptInRequired: /* @__PURE__ */ __name(() => KmsOptInRequired, "KmsOptInRequired"),
      KmsThrottled: /* @__PURE__ */ __name(() => KmsThrottled, "KmsThrottled"),
      ListDeadLetterSourceQueuesCommand: /* @__PURE__ */ __name(() => ListDeadLetterSourceQueuesCommand, "ListDeadLetterSourceQueuesCommand"),
      ListMessageMoveTasksCommand: /* @__PURE__ */ __name(() => ListMessageMoveTasksCommand, "ListMessageMoveTasksCommand"),
      ListQueueTagsCommand: /* @__PURE__ */ __name(() => ListQueueTagsCommand, "ListQueueTagsCommand"),
      ListQueuesCommand: /* @__PURE__ */ __name(() => ListQueuesCommand, "ListQueuesCommand"),
      MessageNotInflight: /* @__PURE__ */ __name(() => MessageNotInflight, "MessageNotInflight"),
      MessageSystemAttributeName: /* @__PURE__ */ __name(() => MessageSystemAttributeName, "MessageSystemAttributeName"),
      MessageSystemAttributeNameForSends: /* @__PURE__ */ __name(() => MessageSystemAttributeNameForSends, "MessageSystemAttributeNameForSends"),
      OverLimit: /* @__PURE__ */ __name(() => OverLimit, "OverLimit"),
      PurgeQueueCommand: /* @__PURE__ */ __name(() => PurgeQueueCommand, "PurgeQueueCommand"),
      PurgeQueueInProgress: /* @__PURE__ */ __name(() => PurgeQueueInProgress, "PurgeQueueInProgress"),
      QueueAttributeName: /* @__PURE__ */ __name(() => QueueAttributeName, "QueueAttributeName"),
      QueueDeletedRecently: /* @__PURE__ */ __name(() => QueueDeletedRecently, "QueueDeletedRecently"),
      QueueDoesNotExist: /* @__PURE__ */ __name(() => QueueDoesNotExist, "QueueDoesNotExist"),
      QueueNameExists: /* @__PURE__ */ __name(() => QueueNameExists, "QueueNameExists"),
      ReceiptHandleIsInvalid: /* @__PURE__ */ __name(() => ReceiptHandleIsInvalid, "ReceiptHandleIsInvalid"),
      ReceiveMessageCommand: /* @__PURE__ */ __name(() => ReceiveMessageCommand, "ReceiveMessageCommand"),
      RemovePermissionCommand: /* @__PURE__ */ __name(() => RemovePermissionCommand, "RemovePermissionCommand"),
      RequestThrottled: /* @__PURE__ */ __name(() => RequestThrottled, "RequestThrottled"),
      ResourceNotFoundException: /* @__PURE__ */ __name(() => ResourceNotFoundException, "ResourceNotFoundException"),
      SQS: /* @__PURE__ */ __name(() => SQS, "SQS"),
      SQSClient: /* @__PURE__ */ __name(() => SQSClient2, "SQSClient"),
      SQSServiceException: /* @__PURE__ */ __name(() => SQSServiceException, "SQSServiceException"),
      SendMessageBatchCommand: /* @__PURE__ */ __name(() => SendMessageBatchCommand, "SendMessageBatchCommand"),
      SendMessageCommand: /* @__PURE__ */ __name(() => SendMessageCommand2, "SendMessageCommand"),
      SetQueueAttributesCommand: /* @__PURE__ */ __name(() => SetQueueAttributesCommand, "SetQueueAttributesCommand"),
      StartMessageMoveTaskCommand: /* @__PURE__ */ __name(() => StartMessageMoveTaskCommand, "StartMessageMoveTaskCommand"),
      TagQueueCommand: /* @__PURE__ */ __name(() => TagQueueCommand, "TagQueueCommand"),
      TooManyEntriesInBatchRequest: /* @__PURE__ */ __name(() => TooManyEntriesInBatchRequest, "TooManyEntriesInBatchRequest"),
      UnsupportedOperation: /* @__PURE__ */ __name(() => UnsupportedOperation, "UnsupportedOperation"),
      UntagQueueCommand: /* @__PURE__ */ __name(() => UntagQueueCommand, "UntagQueueCommand"),
      __Client: /* @__PURE__ */ __name(() => import_smithy_client25.Client, "__Client"),
      paginateListDeadLetterSourceQueues: /* @__PURE__ */ __name(() => paginateListDeadLetterSourceQueues, "paginateListDeadLetterSourceQueues"),
      paginateListQueues: /* @__PURE__ */ __name(() => paginateListQueues, "paginateListQueues")
    });
    module2.exports = __toCommonJS2(index_exports);
    var import_middleware_host_header3 = require_dist_cjs3();
    var import_middleware_logger3 = require_dist_cjs4();
    var import_middleware_recursion_detection3 = require_dist_cjs5();
    var import_middleware_sdk_sqs = require_dist_cjs19();
    var import_middleware_user_agent3 = require_dist_cjs25();
    var import_config_resolver5 = require_dist_cjs27();
    var import_core17 = (init_dist_es(), __toCommonJS(dist_es_exports));
    var import_middleware_content_length3 = require_dist_cjs28();
    var import_middleware_endpoint6 = require_dist_cjs33();
    var import_middleware_retry5 = require_dist_cjs36();
    var import_httpAuthSchemeProvider5 = require_httpAuthSchemeProvider();
    var resolveClientEndpointParameters3 = __name2((options) => {
      return Object.assign(options, {
        useDualstackEndpoint: options.useDualstackEndpoint ?? false,
        useFipsEndpoint: options.useFipsEndpoint ?? false,
        defaultSigningName: "sqs"
      });
    }, "resolveClientEndpointParameters");
    var commonParams3 = {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" }
    };
    var import_runtimeConfig5 = require_runtimeConfig2();
    var import_region_config_resolver3 = require_dist_cjs44();
    var import_protocol_http15 = require_dist_cjs2();
    var import_smithy_client25 = require_dist_cjs18();
    var getHttpAuthExtensionConfiguration3 = __name2((runtimeConfig) => {
      const _httpAuthSchemes = runtimeConfig.httpAuthSchemes;
      let _httpAuthSchemeProvider = runtimeConfig.httpAuthSchemeProvider;
      let _credentials = runtimeConfig.credentials;
      return {
        setHttpAuthScheme(httpAuthScheme) {
          const index = _httpAuthSchemes.findIndex((scheme) => scheme.schemeId === httpAuthScheme.schemeId);
          if (index === -1) {
            _httpAuthSchemes.push(httpAuthScheme);
          } else {
            _httpAuthSchemes.splice(index, 1, httpAuthScheme);
          }
        },
        httpAuthSchemes() {
          return _httpAuthSchemes;
        },
        setHttpAuthSchemeProvider(httpAuthSchemeProvider) {
          _httpAuthSchemeProvider = httpAuthSchemeProvider;
        },
        httpAuthSchemeProvider() {
          return _httpAuthSchemeProvider;
        },
        setCredentials(credentials) {
          _credentials = credentials;
        },
        credentials() {
          return _credentials;
        }
      };
    }, "getHttpAuthExtensionConfiguration");
    var resolveHttpAuthRuntimeConfig3 = __name2((config) => {
      return {
        httpAuthSchemes: config.httpAuthSchemes(),
        httpAuthSchemeProvider: config.httpAuthSchemeProvider(),
        credentials: config.credentials()
      };
    }, "resolveHttpAuthRuntimeConfig");
    var resolveRuntimeExtensions3 = __name2((runtimeConfig, extensions) => {
      const extensionConfiguration = Object.assign(
        (0, import_region_config_resolver3.getAwsRegionExtensionConfiguration)(runtimeConfig),
        (0, import_smithy_client25.getDefaultExtensionConfiguration)(runtimeConfig),
        (0, import_protocol_http15.getHttpHandlerExtensionConfiguration)(runtimeConfig),
        getHttpAuthExtensionConfiguration3(runtimeConfig)
      );
      extensions.forEach((extension) => extension.configure(extensionConfiguration));
      return Object.assign(
        runtimeConfig,
        (0, import_region_config_resolver3.resolveAwsRegionExtensionConfiguration)(extensionConfiguration),
        (0, import_smithy_client25.resolveDefaultRuntimeConfig)(extensionConfiguration),
        (0, import_protocol_http15.resolveHttpHandlerRuntimeConfig)(extensionConfiguration),
        resolveHttpAuthRuntimeConfig3(extensionConfiguration)
      );
    }, "resolveRuntimeExtensions");
    var SQSClient2 = class extends import_smithy_client25.Client {
      static {
        __name(this, "SQSClient");
      }
      static {
        __name2(this, "SQSClient");
      }
      /**
       * The resolved configuration of SQSClient class. This is resolved and normalized from the {@link SQSClientConfig | constructor configuration interface}.
       */
      config;
      constructor(...[configuration]) {
        const _config_0 = (0, import_runtimeConfig5.getRuntimeConfig)(configuration || {});
        super(_config_0);
        this.initConfig = _config_0;
        const _config_1 = resolveClientEndpointParameters3(_config_0);
        const _config_2 = (0, import_middleware_user_agent3.resolveUserAgentConfig)(_config_1);
        const _config_3 = (0, import_middleware_retry5.resolveRetryConfig)(_config_2);
        const _config_4 = (0, import_config_resolver5.resolveRegionConfig)(_config_3);
        const _config_5 = (0, import_middleware_host_header3.resolveHostHeaderConfig)(_config_4);
        const _config_6 = (0, import_middleware_endpoint6.resolveEndpointConfig)(_config_5);
        const _config_7 = (0, import_middleware_sdk_sqs.resolveQueueUrlConfig)(_config_6);
        const _config_8 = (0, import_httpAuthSchemeProvider5.resolveHttpAuthSchemeConfig)(_config_7);
        const _config_9 = resolveRuntimeExtensions3(_config_8, configuration?.extensions || []);
        this.config = _config_9;
        this.middlewareStack.use((0, import_middleware_user_agent3.getUserAgentPlugin)(this.config));
        this.middlewareStack.use((0, import_middleware_retry5.getRetryPlugin)(this.config));
        this.middlewareStack.use((0, import_middleware_content_length3.getContentLengthPlugin)(this.config));
        this.middlewareStack.use((0, import_middleware_host_header3.getHostHeaderPlugin)(this.config));
        this.middlewareStack.use((0, import_middleware_logger3.getLoggerPlugin)(this.config));
        this.middlewareStack.use((0, import_middleware_recursion_detection3.getRecursionDetectionPlugin)(this.config));
        this.middlewareStack.use((0, import_middleware_sdk_sqs.getQueueUrlPlugin)(this.config));
        this.middlewareStack.use(
          (0, import_core17.getHttpAuthSchemeEndpointRuleSetPlugin)(this.config, {
            httpAuthSchemeParametersProvider: import_httpAuthSchemeProvider5.defaultSQSHttpAuthSchemeParametersProvider,
            identityProviderConfigProvider: __name2(async (config) => new import_core17.DefaultIdentityProviderConfig({
              "aws.auth#sigv4": config.credentials
            }), "identityProviderConfigProvider")
          })
        );
        this.middlewareStack.use((0, import_core17.getHttpSigningPlugin)(this.config));
      }
      /**
       * Destroy underlying resources, like sockets. It's usually not necessary to do this.
       * However in Node.js, it's best to explicitly shut down the client's agent when it is no longer needed.
       * Otherwise, sockets might stay open for quite a long time before the server terminates them.
       */
      destroy() {
        super.destroy();
      }
    };
    var import_middleware_serde5 = require_dist_cjs20();
    var import_core22 = (init_dist_es2(), __toCommonJS(dist_es_exports2));
    var SQSServiceException = class _SQSServiceException extends import_smithy_client25.ServiceException {
      static {
        __name(this, "_SQSServiceException");
      }
      static {
        __name2(this, "SQSServiceException");
      }
      /**
       * @internal
       */
      constructor(options) {
        super(options);
        Object.setPrototypeOf(this, _SQSServiceException.prototype);
      }
    };
    var InvalidAddress = class _InvalidAddress extends SQSServiceException {
      static {
        __name(this, "_InvalidAddress");
      }
      static {
        __name2(this, "InvalidAddress");
      }
      name = "InvalidAddress";
      $fault = "client";
      /**
       * @internal
       */
      constructor(opts) {
        super({
          name: "InvalidAddress",
          $fault: "client",
          ...opts
        });
        Object.setPrototypeOf(this, _InvalidAddress.prototype);
      }
    };
    var InvalidSecurity = class _InvalidSecurity extends SQSServiceException {
      static {
        __name(this, "_InvalidSecurity");
      }
      static {
        __name2(this, "InvalidSecurity");
      }
      name = "InvalidSecurity";
      $fault = "client";
      /**
       * @internal
       */
      constructor(opts) {
        super({
          name: "InvalidSecurity",
          $fault: "client",
          ...opts
        });
        Object.setPrototypeOf(this, _InvalidSecurity.prototype);
      }
    };
    var OverLimit = class _OverLimit extends SQSServiceException {
      static {
        __name(this, "_OverLimit");
      }
      static {
        __name2(this, "OverLimit");
      }
      name = "OverLimit";
      $fault = "client";
      /**
       * @internal
       */
      constructor(opts) {
        super({
          name: "OverLimit",
          $fault: "client",
          ...opts
        });
        Object.setPrototypeOf(this, _OverLimit.prototype);
      }
    };
    var QueueDoesNotExist = class _QueueDoesNotExist extends SQSServiceException {
      static {
        __name(this, "_QueueDoesNotExist");
      }
      static {
        __name2(this, "QueueDoesNotExist");
      }
      name = "QueueDoesNotExist";
      $fault = "client";
      /**
       * @internal
       */
      constructor(opts) {
        super({
          name: "QueueDoesNotExist",
          $fault: "client",
          ...opts
        });
        Object.setPrototypeOf(this, _QueueDoesNotExist.prototype);
      }
    };
    var RequestThrottled = class _RequestThrottled extends SQSServiceException {
      static {
        __name(this, "_RequestThrottled");
      }
      static {
        __name2(this, "RequestThrottled");
      }
      name = "RequestThrottled";
      $fault = "client";
      /**
       * @internal
       */
      constructor(opts) {
        super({
          name: "RequestThrottled",
          $fault: "client",
          ...opts
        });
        Object.setPrototypeOf(this, _RequestThrottled.prototype);
      }
    };
    var UnsupportedOperation = class _UnsupportedOperation extends SQSServiceException {
      static {
        __name(this, "_UnsupportedOperation");
      }
      static {
        __name2(this, "UnsupportedOperation");
      }
      name = "UnsupportedOperation";
      $fault = "client";
      /**
       * @internal
       */
      constructor(opts) {
        super({
          name: "UnsupportedOperation",
          $fault: "client",
          ...opts
        });
        Object.setPrototypeOf(this, _UnsupportedOperation.prototype);
      }
    };
    var ResourceNotFoundException = class _ResourceNotFoundException extends SQSServiceException {
      static {
        __name(this, "_ResourceNotFoundException");
      }
      static {
        __name2(this, "ResourceNotFoundException");
      }
      name = "ResourceNotFoundException";
      $fault = "client";
      /**
       * @internal
       */
      constructor(opts) {
        super({
          name: "ResourceNotFoundException",
          $fault: "client",
          ...opts
        });
        Object.setPrototypeOf(this, _ResourceNotFoundException.prototype);
      }
    };
    var MessageNotInflight = class _MessageNotInflight extends SQSServiceException {
      static {
        __name(this, "_MessageNotInflight");
      }
      static {
        __name2(this, "MessageNotInflight");
      }
      name = "MessageNotInflight";
      $fault = "client";
      /**
       * @internal
       */
      constructor(opts) {
        super({
          name: "MessageNotInflight",
          $fault: "client",
          ...opts
        });
        Object.setPrototypeOf(this, _MessageNotInflight.prototype);
      }
    };
    var ReceiptHandleIsInvalid = class _ReceiptHandleIsInvalid extends SQSServiceException {
      static {
        __name(this, "_ReceiptHandleIsInvalid");
      }
      static {
        __name2(this, "ReceiptHandleIsInvalid");
      }
      name = "ReceiptHandleIsInvalid";
      $fault = "client";
      /**
       * @internal
       */
      constructor(opts) {
        super({
          name: "ReceiptHandleIsInvalid",
          $fault: "client",
          ...opts
        });
        Object.setPrototypeOf(this, _ReceiptHandleIsInvalid.prototype);
      }
    };
    var BatchEntryIdsNotDistinct = class _BatchEntryIdsNotDistinct extends SQSServiceException {
      static {
        __name(this, "_BatchEntryIdsNotDistinct");
      }
      static {
        __name2(this, "BatchEntryIdsNotDistinct");
      }
      name = "BatchEntryIdsNotDistinct";
      $fault = "client";
      /**
       * @internal
       */
      constructor(opts) {
        super({
          name: "BatchEntryIdsNotDistinct",
          $fault: "client",
          ...opts
        });
        Object.setPrototypeOf(this, _BatchEntryIdsNotDistinct.prototype);
      }
    };
    var EmptyBatchRequest = class _EmptyBatchRequest extends SQSServiceException {
      static {
        __name(this, "_EmptyBatchRequest");
      }
      static {
        __name2(this, "EmptyBatchRequest");
      }
      name = "EmptyBatchRequest";
      $fault = "client";
      /**
       * @internal
       */
      constructor(opts) {
        super({
          name: "EmptyBatchRequest",
          $fault: "client",
          ...opts
        });
        Object.setPrototypeOf(this, _EmptyBatchRequest.prototype);
      }
    };
    var InvalidBatchEntryId = class _InvalidBatchEntryId extends SQSServiceException {
      static {
        __name(this, "_InvalidBatchEntryId");
      }
      static {
        __name2(this, "InvalidBatchEntryId");
      }
      name = "InvalidBatchEntryId";
      $fault = "client";
      /**
       * @internal
       */
      constructor(opts) {
        super({
          name: "InvalidBatchEntryId",
          $fault: "client",
          ...opts
        });
        Object.setPrototypeOf(this, _InvalidBatchEntryId.prototype);
      }
    };
    var TooManyEntriesInBatchRequest = class _TooManyEntriesInBatchRequest extends SQSServiceException {
      static {
        __name(this, "_TooManyEntriesInBatchRequest");
      }
      static {
        __name2(this, "TooManyEntriesInBatchRequest");
      }
      name = "TooManyEntriesInBatchRequest";
      $fault = "client";
      /**
       * @internal
       */
      constructor(opts) {
        super({
          name: "TooManyEntriesInBatchRequest",
          $fault: "client",
          ...opts
        });
        Object.setPrototypeOf(this, _TooManyEntriesInBatchRequest.prototype);
      }
    };
    var QueueAttributeName = {
      All: "All",
      ApproximateNumberOfMessages: "ApproximateNumberOfMessages",
      ApproximateNumberOfMessagesDelayed: "ApproximateNumberOfMessagesDelayed",
      ApproximateNumberOfMessagesNotVisible: "ApproximateNumberOfMessagesNotVisible",
      ContentBasedDeduplication: "ContentBasedDeduplication",
      CreatedTimestamp: "CreatedTimestamp",
      DeduplicationScope: "DeduplicationScope",
      DelaySeconds: "DelaySeconds",
      FifoQueue: "FifoQueue",
      FifoThroughputLimit: "FifoThroughputLimit",
      KmsDataKeyReusePeriodSeconds: "KmsDataKeyReusePeriodSeconds",
      KmsMasterKeyId: "KmsMasterKeyId",
      LastModifiedTimestamp: "LastModifiedTimestamp",
      MaximumMessageSize: "MaximumMessageSize",
      MessageRetentionPeriod: "MessageRetentionPeriod",
      Policy: "Policy",
      QueueArn: "QueueArn",
      ReceiveMessageWaitTimeSeconds: "ReceiveMessageWaitTimeSeconds",
      RedriveAllowPolicy: "RedriveAllowPolicy",
      RedrivePolicy: "RedrivePolicy",
      SqsManagedSseEnabled: "SqsManagedSseEnabled",
      VisibilityTimeout: "VisibilityTimeout"
    };
    var InvalidAttributeName = class _InvalidAttributeName extends SQSServiceException {
      static {
        __name(this, "_InvalidAttributeName");
      }
      static {
        __name2(this, "InvalidAttributeName");
      }
      name = "InvalidAttributeName";
      $fault = "client";
      /**
       * @internal
       */
      constructor(opts) {
        super({
          name: "InvalidAttributeName",
          $fault: "client",
          ...opts
        });
        Object.setPrototypeOf(this, _InvalidAttributeName.prototype);
      }
    };
    var InvalidAttributeValue = class _InvalidAttributeValue extends SQSServiceException {
      static {
        __name(this, "_InvalidAttributeValue");
      }
      static {
        __name2(this, "InvalidAttributeValue");
      }
      name = "InvalidAttributeValue";
      $fault = "client";
      /**
       * @internal
       */
      constructor(opts) {
        super({
          name: "InvalidAttributeValue",
          $fault: "client",
          ...opts
        });
        Object.setPrototypeOf(this, _InvalidAttributeValue.prototype);
      }
    };
    var QueueDeletedRecently = class _QueueDeletedRecently extends SQSServiceException {
      static {
        __name(this, "_QueueDeletedRecently");
      }
      static {
        __name2(this, "QueueDeletedRecently");
      }
      name = "QueueDeletedRecently";
      $fault = "client";
      /**
       * @internal
       */
      constructor(opts) {
        super({
          name: "QueueDeletedRecently",
          $fault: "client",
          ...opts
        });
        Object.setPrototypeOf(this, _QueueDeletedRecently.prototype);
      }
    };
    var QueueNameExists = class _QueueNameExists extends SQSServiceException {
      static {
        __name(this, "_QueueNameExists");
      }
      static {
        __name2(this, "QueueNameExists");
      }
      name = "QueueNameExists";
      $fault = "client";
      /**
       * @internal
       */
      constructor(opts) {
        super({
          name: "QueueNameExists",
          $fault: "client",
          ...opts
        });
        Object.setPrototypeOf(this, _QueueNameExists.prototype);
      }
    };
    var InvalidIdFormat = class _InvalidIdFormat extends SQSServiceException {
      static {
        __name(this, "_InvalidIdFormat");
      }
      static {
        __name2(this, "InvalidIdFormat");
      }
      name = "InvalidIdFormat";
      $fault = "client";
      /**
       * @internal
       */
      constructor(opts) {
        super({
          name: "InvalidIdFormat",
          $fault: "client",
          ...opts
        });
        Object.setPrototypeOf(this, _InvalidIdFormat.prototype);
      }
    };
    var PurgeQueueInProgress = class _PurgeQueueInProgress extends SQSServiceException {
      static {
        __name(this, "_PurgeQueueInProgress");
      }
      static {
        __name2(this, "PurgeQueueInProgress");
      }
      name = "PurgeQueueInProgress";
      $fault = "client";
      /**
       * @internal
       */
      constructor(opts) {
        super({
          name: "PurgeQueueInProgress",
          $fault: "client",
          ...opts
        });
        Object.setPrototypeOf(this, _PurgeQueueInProgress.prototype);
      }
    };
    var KmsAccessDenied = class _KmsAccessDenied extends SQSServiceException {
      static {
        __name(this, "_KmsAccessDenied");
      }
      static {
        __name2(this, "KmsAccessDenied");
      }
      name = "KmsAccessDenied";
      $fault = "client";
      /**
       * @internal
       */
      constructor(opts) {
        super({
          name: "KmsAccessDenied",
          $fault: "client",
          ...opts
        });
        Object.setPrototypeOf(this, _KmsAccessDenied.prototype);
      }
    };
    var KmsDisabled = class _KmsDisabled extends SQSServiceException {
      static {
        __name(this, "_KmsDisabled");
      }
      static {
        __name2(this, "KmsDisabled");
      }
      name = "KmsDisabled";
      $fault = "client";
      /**
       * @internal
       */
      constructor(opts) {
        super({
          name: "KmsDisabled",
          $fault: "client",
          ...opts
        });
        Object.setPrototypeOf(this, _KmsDisabled.prototype);
      }
    };
    var KmsInvalidKeyUsage = class _KmsInvalidKeyUsage extends SQSServiceException {
      static {
        __name(this, "_KmsInvalidKeyUsage");
      }
      static {
        __name2(this, "KmsInvalidKeyUsage");
      }
      name = "KmsInvalidKeyUsage";
      $fault = "client";
      /**
       * @internal
       */
      constructor(opts) {
        super({
          name: "KmsInvalidKeyUsage",
          $fault: "client",
          ...opts
        });
        Object.setPrototypeOf(this, _KmsInvalidKeyUsage.prototype);
      }
    };
    var KmsInvalidState = class _KmsInvalidState extends SQSServiceException {
      static {
        __name(this, "_KmsInvalidState");
      }
      static {
        __name2(this, "KmsInvalidState");
      }
      name = "KmsInvalidState";
      $fault = "client";
      /**
       * @internal
       */
      constructor(opts) {
        super({
          name: "KmsInvalidState",
          $fault: "client",
          ...opts
        });
        Object.setPrototypeOf(this, _KmsInvalidState.prototype);
      }
    };
    var KmsNotFound = class _KmsNotFound extends SQSServiceException {
      static {
        __name(this, "_KmsNotFound");
      }
      static {
        __name2(this, "KmsNotFound");
      }
      name = "KmsNotFound";
      $fault = "client";
      /**
       * @internal
       */
      constructor(opts) {
        super({
          name: "KmsNotFound",
          $fault: "client",
          ...opts
        });
        Object.setPrototypeOf(this, _KmsNotFound.prototype);
      }
    };
    var KmsOptInRequired = class _KmsOptInRequired extends SQSServiceException {
      static {
        __name(this, "_KmsOptInRequired");
      }
      static {
        __name2(this, "KmsOptInRequired");
      }
      name = "KmsOptInRequired";
      $fault = "client";
      /**
       * @internal
       */
      constructor(opts) {
        super({
          name: "KmsOptInRequired",
          $fault: "client",
          ...opts
        });
        Object.setPrototypeOf(this, _KmsOptInRequired.prototype);
      }
    };
    var KmsThrottled = class _KmsThrottled extends SQSServiceException {
      static {
        __name(this, "_KmsThrottled");
      }
      static {
        __name2(this, "KmsThrottled");
      }
      name = "KmsThrottled";
      $fault = "client";
      /**
       * @internal
       */
      constructor(opts) {
        super({
          name: "KmsThrottled",
          $fault: "client",
          ...opts
        });
        Object.setPrototypeOf(this, _KmsThrottled.prototype);
      }
    };
    var MessageSystemAttributeName = {
      AWSTraceHeader: "AWSTraceHeader",
      All: "All",
      ApproximateFirstReceiveTimestamp: "ApproximateFirstReceiveTimestamp",
      ApproximateReceiveCount: "ApproximateReceiveCount",
      DeadLetterQueueSourceArn: "DeadLetterQueueSourceArn",
      MessageDeduplicationId: "MessageDeduplicationId",
      MessageGroupId: "MessageGroupId",
      SenderId: "SenderId",
      SentTimestamp: "SentTimestamp",
      SequenceNumber: "SequenceNumber"
    };
    var InvalidMessageContents = class _InvalidMessageContents extends SQSServiceException {
      static {
        __name(this, "_InvalidMessageContents");
      }
      static {
        __name2(this, "InvalidMessageContents");
      }
      name = "InvalidMessageContents";
      $fault = "client";
      /**
       * @internal
       */
      constructor(opts) {
        super({
          name: "InvalidMessageContents",
          $fault: "client",
          ...opts
        });
        Object.setPrototypeOf(this, _InvalidMessageContents.prototype);
      }
    };
    var MessageSystemAttributeNameForSends = {
      AWSTraceHeader: "AWSTraceHeader"
    };
    var BatchRequestTooLong = class _BatchRequestTooLong extends SQSServiceException {
      static {
        __name(this, "_BatchRequestTooLong");
      }
      static {
        __name2(this, "BatchRequestTooLong");
      }
      name = "BatchRequestTooLong";
      $fault = "client";
      /**
       * @internal
       */
      constructor(opts) {
        super({
          name: "BatchRequestTooLong",
          $fault: "client",
          ...opts
        });
        Object.setPrototypeOf(this, _BatchRequestTooLong.prototype);
      }
    };
    var se_AddPermissionCommand = __name2(async (input, context) => {
      const headers = sharedHeaders("AddPermission");
      let body;
      body = JSON.stringify(se_AddPermissionRequest(input, context));
      return buildHttpRpcRequest2(context, headers, "/", void 0, body);
    }, "se_AddPermissionCommand");
    var se_CancelMessageMoveTaskCommand = __name2(async (input, context) => {
      const headers = sharedHeaders("CancelMessageMoveTask");
      let body;
      body = JSON.stringify(se_CancelMessageMoveTaskRequest(input, context));
      return buildHttpRpcRequest2(context, headers, "/", void 0, body);
    }, "se_CancelMessageMoveTaskCommand");
    var se_ChangeMessageVisibilityCommand = __name2(async (input, context) => {
      const headers = sharedHeaders("ChangeMessageVisibility");
      let body;
      body = JSON.stringify(se_ChangeMessageVisibilityRequest(input, context));
      return buildHttpRpcRequest2(context, headers, "/", void 0, body);
    }, "se_ChangeMessageVisibilityCommand");
    var se_ChangeMessageVisibilityBatchCommand = __name2(async (input, context) => {
      const headers = sharedHeaders("ChangeMessageVisibilityBatch");
      let body;
      body = JSON.stringify(se_ChangeMessageVisibilityBatchRequest(input, context));
      return buildHttpRpcRequest2(context, headers, "/", void 0, body);
    }, "se_ChangeMessageVisibilityBatchCommand");
    var se_CreateQueueCommand = __name2(async (input, context) => {
      const headers = sharedHeaders("CreateQueue");
      let body;
      body = JSON.stringify(se_CreateQueueRequest(input, context));
      return buildHttpRpcRequest2(context, headers, "/", void 0, body);
    }, "se_CreateQueueCommand");
    var se_DeleteMessageCommand = __name2(async (input, context) => {
      const headers = sharedHeaders("DeleteMessage");
      let body;
      body = JSON.stringify(se_DeleteMessageRequest(input, context));
      return buildHttpRpcRequest2(context, headers, "/", void 0, body);
    }, "se_DeleteMessageCommand");
    var se_DeleteMessageBatchCommand = __name2(async (input, context) => {
      const headers = sharedHeaders("DeleteMessageBatch");
      let body;
      body = JSON.stringify(se_DeleteMessageBatchRequest(input, context));
      return buildHttpRpcRequest2(context, headers, "/", void 0, body);
    }, "se_DeleteMessageBatchCommand");
    var se_DeleteQueueCommand = __name2(async (input, context) => {
      const headers = sharedHeaders("DeleteQueue");
      let body;
      body = JSON.stringify(se_DeleteQueueRequest(input, context));
      return buildHttpRpcRequest2(context, headers, "/", void 0, body);
    }, "se_DeleteQueueCommand");
    var se_GetQueueAttributesCommand = __name2(async (input, context) => {
      const headers = sharedHeaders("GetQueueAttributes");
      let body;
      body = JSON.stringify(se_GetQueueAttributesRequest(input, context));
      return buildHttpRpcRequest2(context, headers, "/", void 0, body);
    }, "se_GetQueueAttributesCommand");
    var se_GetQueueUrlCommand = __name2(async (input, context) => {
      const headers = sharedHeaders("GetQueueUrl");
      let body;
      body = JSON.stringify(se_GetQueueUrlRequest(input, context));
      return buildHttpRpcRequest2(context, headers, "/", void 0, body);
    }, "se_GetQueueUrlCommand");
    var se_ListDeadLetterSourceQueuesCommand = __name2(async (input, context) => {
      const headers = sharedHeaders("ListDeadLetterSourceQueues");
      let body;
      body = JSON.stringify(se_ListDeadLetterSourceQueuesRequest(input, context));
      return buildHttpRpcRequest2(context, headers, "/", void 0, body);
    }, "se_ListDeadLetterSourceQueuesCommand");
    var se_ListMessageMoveTasksCommand = __name2(async (input, context) => {
      const headers = sharedHeaders("ListMessageMoveTasks");
      let body;
      body = JSON.stringify(se_ListMessageMoveTasksRequest(input, context));
      return buildHttpRpcRequest2(context, headers, "/", void 0, body);
    }, "se_ListMessageMoveTasksCommand");
    var se_ListQueuesCommand = __name2(async (input, context) => {
      const headers = sharedHeaders("ListQueues");
      let body;
      body = JSON.stringify(se_ListQueuesRequest(input, context));
      return buildHttpRpcRequest2(context, headers, "/", void 0, body);
    }, "se_ListQueuesCommand");
    var se_ListQueueTagsCommand = __name2(async (input, context) => {
      const headers = sharedHeaders("ListQueueTags");
      let body;
      body = JSON.stringify(se_ListQueueTagsRequest(input, context));
      return buildHttpRpcRequest2(context, headers, "/", void 0, body);
    }, "se_ListQueueTagsCommand");
    var se_PurgeQueueCommand = __name2(async (input, context) => {
      const headers = sharedHeaders("PurgeQueue");
      let body;
      body = JSON.stringify(se_PurgeQueueRequest(input, context));
      return buildHttpRpcRequest2(context, headers, "/", void 0, body);
    }, "se_PurgeQueueCommand");
    var se_ReceiveMessageCommand = __name2(async (input, context) => {
      const headers = sharedHeaders("ReceiveMessage");
      let body;
      body = JSON.stringify(se_ReceiveMessageRequest(input, context));
      return buildHttpRpcRequest2(context, headers, "/", void 0, body);
    }, "se_ReceiveMessageCommand");
    var se_RemovePermissionCommand = __name2(async (input, context) => {
      const headers = sharedHeaders("RemovePermission");
      let body;
      body = JSON.stringify(se_RemovePermissionRequest(input, context));
      return buildHttpRpcRequest2(context, headers, "/", void 0, body);
    }, "se_RemovePermissionCommand");
    var se_SendMessageCommand = __name2(async (input, context) => {
      const headers = sharedHeaders("SendMessage");
      let body;
      body = JSON.stringify(se_SendMessageRequest(input, context));
      return buildHttpRpcRequest2(context, headers, "/", void 0, body);
    }, "se_SendMessageCommand");
    var se_SendMessageBatchCommand = __name2(async (input, context) => {
      const headers = sharedHeaders("SendMessageBatch");
      let body;
      body = JSON.stringify(se_SendMessageBatchRequest(input, context));
      return buildHttpRpcRequest2(context, headers, "/", void 0, body);
    }, "se_SendMessageBatchCommand");
    var se_SetQueueAttributesCommand = __name2(async (input, context) => {
      const headers = sharedHeaders("SetQueueAttributes");
      let body;
      body = JSON.stringify(se_SetQueueAttributesRequest(input, context));
      return buildHttpRpcRequest2(context, headers, "/", void 0, body);
    }, "se_SetQueueAttributesCommand");
    var se_StartMessageMoveTaskCommand = __name2(async (input, context) => {
      const headers = sharedHeaders("StartMessageMoveTask");
      let body;
      body = JSON.stringify(se_StartMessageMoveTaskRequest(input, context));
      return buildHttpRpcRequest2(context, headers, "/", void 0, body);
    }, "se_StartMessageMoveTaskCommand");
    var se_TagQueueCommand = __name2(async (input, context) => {
      const headers = sharedHeaders("TagQueue");
      let body;
      body = JSON.stringify(se_TagQueueRequest(input, context));
      return buildHttpRpcRequest2(context, headers, "/", void 0, body);
    }, "se_TagQueueCommand");
    var se_UntagQueueCommand = __name2(async (input, context) => {
      const headers = sharedHeaders("UntagQueue");
      let body;
      body = JSON.stringify(se_UntagQueueRequest(input, context));
      return buildHttpRpcRequest2(context, headers, "/", void 0, body);
    }, "se_UntagQueueCommand");
    var de_AddPermissionCommand = __name2(async (output, context) => {
      if (output.statusCode >= 300) {
        return de_CommandError3(output, context);
      }
      await (0, import_smithy_client25.collectBody)(output.body, context);
      const response = {
        $metadata: deserializeMetadata3(output)
      };
      return response;
    }, "de_AddPermissionCommand");
    var de_CancelMessageMoveTaskCommand = __name2(async (output, context) => {
      if (output.statusCode >= 300) {
        return de_CommandError3(output, context);
      }
      const data = await (0, import_core22.parseJsonBody)(output.body, context);
      let contents = {};
      contents = (0, import_smithy_client25._json)(data);
      const response = {
        $metadata: deserializeMetadata3(output),
        ...contents
      };
      return response;
    }, "de_CancelMessageMoveTaskCommand");
    var de_ChangeMessageVisibilityCommand = __name2(async (output, context) => {
      if (output.statusCode >= 300) {
        return de_CommandError3(output, context);
      }
      await (0, import_smithy_client25.collectBody)(output.body, context);
      const response = {
        $metadata: deserializeMetadata3(output)
      };
      return response;
    }, "de_ChangeMessageVisibilityCommand");
    var de_ChangeMessageVisibilityBatchCommand = __name2(async (output, context) => {
      if (output.statusCode >= 300) {
        return de_CommandError3(output, context);
      }
      const data = await (0, import_core22.parseJsonBody)(output.body, context);
      let contents = {};
      contents = (0, import_smithy_client25._json)(data);
      const response = {
        $metadata: deserializeMetadata3(output),
        ...contents
      };
      return response;
    }, "de_ChangeMessageVisibilityBatchCommand");
    var de_CreateQueueCommand = __name2(async (output, context) => {
      if (output.statusCode >= 300) {
        return de_CommandError3(output, context);
      }
      const data = await (0, import_core22.parseJsonBody)(output.body, context);
      let contents = {};
      contents = (0, import_smithy_client25._json)(data);
      const response = {
        $metadata: deserializeMetadata3(output),
        ...contents
      };
      return response;
    }, "de_CreateQueueCommand");
    var de_DeleteMessageCommand = __name2(async (output, context) => {
      if (output.statusCode >= 300) {
        return de_CommandError3(output, context);
      }
      await (0, import_smithy_client25.collectBody)(output.body, context);
      const response = {
        $metadata: deserializeMetadata3(output)
      };
      return response;
    }, "de_DeleteMessageCommand");
    var de_DeleteMessageBatchCommand = __name2(async (output, context) => {
      if (output.statusCode >= 300) {
        return de_CommandError3(output, context);
      }
      const data = await (0, import_core22.parseJsonBody)(output.body, context);
      let contents = {};
      contents = (0, import_smithy_client25._json)(data);
      const response = {
        $metadata: deserializeMetadata3(output),
        ...contents
      };
      return response;
    }, "de_DeleteMessageBatchCommand");
    var de_DeleteQueueCommand = __name2(async (output, context) => {
      if (output.statusCode >= 300) {
        return de_CommandError3(output, context);
      }
      await (0, import_smithy_client25.collectBody)(output.body, context);
      const response = {
        $metadata: deserializeMetadata3(output)
      };
      return response;
    }, "de_DeleteQueueCommand");
    var de_GetQueueAttributesCommand = __name2(async (output, context) => {
      if (output.statusCode >= 300) {
        return de_CommandError3(output, context);
      }
      const data = await (0, import_core22.parseJsonBody)(output.body, context);
      let contents = {};
      contents = (0, import_smithy_client25._json)(data);
      const response = {
        $metadata: deserializeMetadata3(output),
        ...contents
      };
      return response;
    }, "de_GetQueueAttributesCommand");
    var de_GetQueueUrlCommand = __name2(async (output, context) => {
      if (output.statusCode >= 300) {
        return de_CommandError3(output, context);
      }
      const data = await (0, import_core22.parseJsonBody)(output.body, context);
      let contents = {};
      contents = (0, import_smithy_client25._json)(data);
      const response = {
        $metadata: deserializeMetadata3(output),
        ...contents
      };
      return response;
    }, "de_GetQueueUrlCommand");
    var de_ListDeadLetterSourceQueuesCommand = __name2(async (output, context) => {
      if (output.statusCode >= 300) {
        return de_CommandError3(output, context);
      }
      const data = await (0, import_core22.parseJsonBody)(output.body, context);
      let contents = {};
      contents = (0, import_smithy_client25._json)(data);
      const response = {
        $metadata: deserializeMetadata3(output),
        ...contents
      };
      return response;
    }, "de_ListDeadLetterSourceQueuesCommand");
    var de_ListMessageMoveTasksCommand = __name2(async (output, context) => {
      if (output.statusCode >= 300) {
        return de_CommandError3(output, context);
      }
      const data = await (0, import_core22.parseJsonBody)(output.body, context);
      let contents = {};
      contents = (0, import_smithy_client25._json)(data);
      const response = {
        $metadata: deserializeMetadata3(output),
        ...contents
      };
      return response;
    }, "de_ListMessageMoveTasksCommand");
    var de_ListQueuesCommand = __name2(async (output, context) => {
      if (output.statusCode >= 300) {
        return de_CommandError3(output, context);
      }
      const data = await (0, import_core22.parseJsonBody)(output.body, context);
      let contents = {};
      contents = (0, import_smithy_client25._json)(data);
      const response = {
        $metadata: deserializeMetadata3(output),
        ...contents
      };
      return response;
    }, "de_ListQueuesCommand");
    var de_ListQueueTagsCommand = __name2(async (output, context) => {
      if (output.statusCode >= 300) {
        return de_CommandError3(output, context);
      }
      const data = await (0, import_core22.parseJsonBody)(output.body, context);
      let contents = {};
      contents = (0, import_smithy_client25._json)(data);
      const response = {
        $metadata: deserializeMetadata3(output),
        ...contents
      };
      return response;
    }, "de_ListQueueTagsCommand");
    var de_PurgeQueueCommand = __name2(async (output, context) => {
      if (output.statusCode >= 300) {
        return de_CommandError3(output, context);
      }
      await (0, import_smithy_client25.collectBody)(output.body, context);
      const response = {
        $metadata: deserializeMetadata3(output)
      };
      return response;
    }, "de_PurgeQueueCommand");
    var de_ReceiveMessageCommand = __name2(async (output, context) => {
      if (output.statusCode >= 300) {
        return de_CommandError3(output, context);
      }
      const data = await (0, import_core22.parseJsonBody)(output.body, context);
      let contents = {};
      contents = de_ReceiveMessageResult(data, context);
      const response = {
        $metadata: deserializeMetadata3(output),
        ...contents
      };
      return response;
    }, "de_ReceiveMessageCommand");
    var de_RemovePermissionCommand = __name2(async (output, context) => {
      if (output.statusCode >= 300) {
        return de_CommandError3(output, context);
      }
      await (0, import_smithy_client25.collectBody)(output.body, context);
      const response = {
        $metadata: deserializeMetadata3(output)
      };
      return response;
    }, "de_RemovePermissionCommand");
    var de_SendMessageCommand = __name2(async (output, context) => {
      if (output.statusCode >= 300) {
        return de_CommandError3(output, context);
      }
      const data = await (0, import_core22.parseJsonBody)(output.body, context);
      let contents = {};
      contents = (0, import_smithy_client25._json)(data);
      const response = {
        $metadata: deserializeMetadata3(output),
        ...contents
      };
      return response;
    }, "de_SendMessageCommand");
    var de_SendMessageBatchCommand = __name2(async (output, context) => {
      if (output.statusCode >= 300) {
        return de_CommandError3(output, context);
      }
      const data = await (0, import_core22.parseJsonBody)(output.body, context);
      let contents = {};
      contents = (0, import_smithy_client25._json)(data);
      const response = {
        $metadata: deserializeMetadata3(output),
        ...contents
      };
      return response;
    }, "de_SendMessageBatchCommand");
    var de_SetQueueAttributesCommand = __name2(async (output, context) => {
      if (output.statusCode >= 300) {
        return de_CommandError3(output, context);
      }
      await (0, import_smithy_client25.collectBody)(output.body, context);
      const response = {
        $metadata: deserializeMetadata3(output)
      };
      return response;
    }, "de_SetQueueAttributesCommand");
    var de_StartMessageMoveTaskCommand = __name2(async (output, context) => {
      if (output.statusCode >= 300) {
        return de_CommandError3(output, context);
      }
      const data = await (0, import_core22.parseJsonBody)(output.body, context);
      let contents = {};
      contents = (0, import_smithy_client25._json)(data);
      const response = {
        $metadata: deserializeMetadata3(output),
        ...contents
      };
      return response;
    }, "de_StartMessageMoveTaskCommand");
    var de_TagQueueCommand = __name2(async (output, context) => {
      if (output.statusCode >= 300) {
        return de_CommandError3(output, context);
      }
      await (0, import_smithy_client25.collectBody)(output.body, context);
      const response = {
        $metadata: deserializeMetadata3(output)
      };
      return response;
    }, "de_TagQueueCommand");
    var de_UntagQueueCommand = __name2(async (output, context) => {
      if (output.statusCode >= 300) {
        return de_CommandError3(output, context);
      }
      await (0, import_smithy_client25.collectBody)(output.body, context);
      const response = {
        $metadata: deserializeMetadata3(output)
      };
      return response;
    }, "de_UntagQueueCommand");
    var de_CommandError3 = __name2(async (output, context) => {
      const parsedOutput = {
        ...output,
        body: await (0, import_core22.parseJsonErrorBody)(output.body, context)
      };
      populateBodyWithQueryCompatibility(parsedOutput, output.headers);
      const errorCode = (0, import_core22.loadRestJsonErrorCode)(output, parsedOutput.body);
      switch (errorCode) {
        case "InvalidAddress":
        case "com.amazonaws.sqs#InvalidAddress":
          throw await de_InvalidAddressRes(parsedOutput, context);
        case "InvalidSecurity":
        case "com.amazonaws.sqs#InvalidSecurity":
          throw await de_InvalidSecurityRes(parsedOutput, context);
        case "OverLimit":
        case "com.amazonaws.sqs#OverLimit":
          throw await de_OverLimitRes(parsedOutput, context);
        case "QueueDoesNotExist":
        case "com.amazonaws.sqs#QueueDoesNotExist":
          throw await de_QueueDoesNotExistRes(parsedOutput, context);
        case "RequestThrottled":
        case "com.amazonaws.sqs#RequestThrottled":
          throw await de_RequestThrottledRes(parsedOutput, context);
        case "UnsupportedOperation":
        case "com.amazonaws.sqs#UnsupportedOperation":
          throw await de_UnsupportedOperationRes(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.sqs#ResourceNotFoundException":
          throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
        case "MessageNotInflight":
        case "com.amazonaws.sqs#MessageNotInflight":
          throw await de_MessageNotInflightRes(parsedOutput, context);
        case "ReceiptHandleIsInvalid":
        case "com.amazonaws.sqs#ReceiptHandleIsInvalid":
          throw await de_ReceiptHandleIsInvalidRes(parsedOutput, context);
        case "BatchEntryIdsNotDistinct":
        case "com.amazonaws.sqs#BatchEntryIdsNotDistinct":
          throw await de_BatchEntryIdsNotDistinctRes(parsedOutput, context);
        case "EmptyBatchRequest":
        case "com.amazonaws.sqs#EmptyBatchRequest":
          throw await de_EmptyBatchRequestRes(parsedOutput, context);
        case "InvalidBatchEntryId":
        case "com.amazonaws.sqs#InvalidBatchEntryId":
          throw await de_InvalidBatchEntryIdRes(parsedOutput, context);
        case "TooManyEntriesInBatchRequest":
        case "com.amazonaws.sqs#TooManyEntriesInBatchRequest":
          throw await de_TooManyEntriesInBatchRequestRes(parsedOutput, context);
        case "InvalidAttributeName":
        case "com.amazonaws.sqs#InvalidAttributeName":
          throw await de_InvalidAttributeNameRes(parsedOutput, context);
        case "InvalidAttributeValue":
        case "com.amazonaws.sqs#InvalidAttributeValue":
          throw await de_InvalidAttributeValueRes(parsedOutput, context);
        case "QueueDeletedRecently":
        case "com.amazonaws.sqs#QueueDeletedRecently":
          throw await de_QueueDeletedRecentlyRes(parsedOutput, context);
        case "QueueNameExists":
        case "com.amazonaws.sqs#QueueNameExists":
          throw await de_QueueNameExistsRes(parsedOutput, context);
        case "InvalidIdFormat":
        case "com.amazonaws.sqs#InvalidIdFormat":
          throw await de_InvalidIdFormatRes(parsedOutput, context);
        case "PurgeQueueInProgress":
        case "com.amazonaws.sqs#PurgeQueueInProgress":
          throw await de_PurgeQueueInProgressRes(parsedOutput, context);
        case "KmsAccessDenied":
        case "com.amazonaws.sqs#KmsAccessDenied":
          throw await de_KmsAccessDeniedRes(parsedOutput, context);
        case "KmsDisabled":
        case "com.amazonaws.sqs#KmsDisabled":
          throw await de_KmsDisabledRes(parsedOutput, context);
        case "KmsInvalidKeyUsage":
        case "com.amazonaws.sqs#KmsInvalidKeyUsage":
          throw await de_KmsInvalidKeyUsageRes(parsedOutput, context);
        case "KmsInvalidState":
        case "com.amazonaws.sqs#KmsInvalidState":
          throw await de_KmsInvalidStateRes(parsedOutput, context);
        case "KmsNotFound":
        case "com.amazonaws.sqs#KmsNotFound":
          throw await de_KmsNotFoundRes(parsedOutput, context);
        case "KmsOptInRequired":
        case "com.amazonaws.sqs#KmsOptInRequired":
          throw await de_KmsOptInRequiredRes(parsedOutput, context);
        case "KmsThrottled":
        case "com.amazonaws.sqs#KmsThrottled":
          throw await de_KmsThrottledRes(parsedOutput, context);
        case "InvalidMessageContents":
        case "com.amazonaws.sqs#InvalidMessageContents":
          throw await de_InvalidMessageContentsRes(parsedOutput, context);
        case "BatchRequestTooLong":
        case "com.amazonaws.sqs#BatchRequestTooLong":
          throw await de_BatchRequestTooLongRes(parsedOutput, context);
        default:
          const parsedBody = parsedOutput.body;
          return throwDefaultError3({
            output,
            parsedBody,
            errorCode
          });
      }
    }, "de_CommandError");
    var de_BatchEntryIdsNotDistinctRes = __name2(async (parsedOutput, context) => {
      const body = parsedOutput.body;
      const deserialized = (0, import_smithy_client25._json)(body);
      const exception = new BatchEntryIdsNotDistinct({
        $metadata: deserializeMetadata3(parsedOutput),
        ...deserialized
      });
      return (0, import_smithy_client25.decorateServiceException)(exception, body);
    }, "de_BatchEntryIdsNotDistinctRes");
    var de_BatchRequestTooLongRes = __name2(async (parsedOutput, context) => {
      const body = parsedOutput.body;
      const deserialized = (0, import_smithy_client25._json)(body);
      const exception = new BatchRequestTooLong({
        $metadata: deserializeMetadata3(parsedOutput),
        ...deserialized
      });
      return (0, import_smithy_client25.decorateServiceException)(exception, body);
    }, "de_BatchRequestTooLongRes");
    var de_EmptyBatchRequestRes = __name2(async (parsedOutput, context) => {
      const body = parsedOutput.body;
      const deserialized = (0, import_smithy_client25._json)(body);
      const exception = new EmptyBatchRequest({
        $metadata: deserializeMetadata3(parsedOutput),
        ...deserialized
      });
      return (0, import_smithy_client25.decorateServiceException)(exception, body);
    }, "de_EmptyBatchRequestRes");
    var de_InvalidAddressRes = __name2(async (parsedOutput, context) => {
      const body = parsedOutput.body;
      const deserialized = (0, import_smithy_client25._json)(body);
      const exception = new InvalidAddress({
        $metadata: deserializeMetadata3(parsedOutput),
        ...deserialized
      });
      return (0, import_smithy_client25.decorateServiceException)(exception, body);
    }, "de_InvalidAddressRes");
    var de_InvalidAttributeNameRes = __name2(async (parsedOutput, context) => {
      const body = parsedOutput.body;
      const deserialized = (0, import_smithy_client25._json)(body);
      const exception = new InvalidAttributeName({
        $metadata: deserializeMetadata3(parsedOutput),
        ...deserialized
      });
      return (0, import_smithy_client25.decorateServiceException)(exception, body);
    }, "de_InvalidAttributeNameRes");
    var de_InvalidAttributeValueRes = __name2(async (parsedOutput, context) => {
      const body = parsedOutput.body;
      const deserialized = (0, import_smithy_client25._json)(body);
      const exception = new InvalidAttributeValue({
        $metadata: deserializeMetadata3(parsedOutput),
        ...deserialized
      });
      return (0, import_smithy_client25.decorateServiceException)(exception, body);
    }, "de_InvalidAttributeValueRes");
    var de_InvalidBatchEntryIdRes = __name2(async (parsedOutput, context) => {
      const body = parsedOutput.body;
      const deserialized = (0, import_smithy_client25._json)(body);
      const exception = new InvalidBatchEntryId({
        $metadata: deserializeMetadata3(parsedOutput),
        ...deserialized
      });
      return (0, import_smithy_client25.decorateServiceException)(exception, body);
    }, "de_InvalidBatchEntryIdRes");
    var de_InvalidIdFormatRes = __name2(async (parsedOutput, context) => {
      const body = parsedOutput.body;
      const deserialized = (0, import_smithy_client25._json)(body);
      const exception = new InvalidIdFormat({
        $metadata: deserializeMetadata3(parsedOutput),
        ...deserialized
      });
      return (0, import_smithy_client25.decorateServiceException)(exception, body);
    }, "de_InvalidIdFormatRes");
    var de_InvalidMessageContentsRes = __name2(async (parsedOutput, context) => {
      const body = parsedOutput.body;
      const deserialized = (0, import_smithy_client25._json)(body);
      const exception = new InvalidMessageContents({
        $metadata: deserializeMetadata3(parsedOutput),
        ...deserialized
      });
      return (0, import_smithy_client25.decorateServiceException)(exception, body);
    }, "de_InvalidMessageContentsRes");
    var de_InvalidSecurityRes = __name2(async (parsedOutput, context) => {
      const body = parsedOutput.body;
      const deserialized = (0, import_smithy_client25._json)(body);
      const exception = new InvalidSecurity({
        $metadata: deserializeMetadata3(parsedOutput),
        ...deserialized
      });
      return (0, import_smithy_client25.decorateServiceException)(exception, body);
    }, "de_InvalidSecurityRes");
    var de_KmsAccessDeniedRes = __name2(async (parsedOutput, context) => {
      const body = parsedOutput.body;
      const deserialized = (0, import_smithy_client25._json)(body);
      const exception = new KmsAccessDenied({
        $metadata: deserializeMetadata3(parsedOutput),
        ...deserialized
      });
      return (0, import_smithy_client25.decorateServiceException)(exception, body);
    }, "de_KmsAccessDeniedRes");
    var de_KmsDisabledRes = __name2(async (parsedOutput, context) => {
      const body = parsedOutput.body;
      const deserialized = (0, import_smithy_client25._json)(body);
      const exception = new KmsDisabled({
        $metadata: deserializeMetadata3(parsedOutput),
        ...deserialized
      });
      return (0, import_smithy_client25.decorateServiceException)(exception, body);
    }, "de_KmsDisabledRes");
    var de_KmsInvalidKeyUsageRes = __name2(async (parsedOutput, context) => {
      const body = parsedOutput.body;
      const deserialized = (0, import_smithy_client25._json)(body);
      const exception = new KmsInvalidKeyUsage({
        $metadata: deserializeMetadata3(parsedOutput),
        ...deserialized
      });
      return (0, import_smithy_client25.decorateServiceException)(exception, body);
    }, "de_KmsInvalidKeyUsageRes");
    var de_KmsInvalidStateRes = __name2(async (parsedOutput, context) => {
      const body = parsedOutput.body;
      const deserialized = (0, import_smithy_client25._json)(body);
      const exception = new KmsInvalidState({
        $metadata: deserializeMetadata3(parsedOutput),
        ...deserialized
      });
      return (0, import_smithy_client25.decorateServiceException)(exception, body);
    }, "de_KmsInvalidStateRes");
    var de_KmsNotFoundRes = __name2(async (parsedOutput, context) => {
      const body = parsedOutput.body;
      const deserialized = (0, import_smithy_client25._json)(body);
      const exception = new KmsNotFound({
        $metadata: deserializeMetadata3(parsedOutput),
        ...deserialized
      });
      return (0, import_smithy_client25.decorateServiceException)(exception, body);
    }, "de_KmsNotFoundRes");
    var de_KmsOptInRequiredRes = __name2(async (parsedOutput, context) => {
      const body = parsedOutput.body;
      const deserialized = (0, import_smithy_client25._json)(body);
      const exception = new KmsOptInRequired({
        $metadata: deserializeMetadata3(parsedOutput),
        ...deserialized
      });
      return (0, import_smithy_client25.decorateServiceException)(exception, body);
    }, "de_KmsOptInRequiredRes");
    var de_KmsThrottledRes = __name2(async (parsedOutput, context) => {
      const body = parsedOutput.body;
      const deserialized = (0, import_smithy_client25._json)(body);
      const exception = new KmsThrottled({
        $metadata: deserializeMetadata3(parsedOutput),
        ...deserialized
      });
      return (0, import_smithy_client25.decorateServiceException)(exception, body);
    }, "de_KmsThrottledRes");
    var de_MessageNotInflightRes = __name2(async (parsedOutput, context) => {
      const body = parsedOutput.body;
      const deserialized = (0, import_smithy_client25._json)(body);
      const exception = new MessageNotInflight({
        $metadata: deserializeMetadata3(parsedOutput),
        ...deserialized
      });
      return (0, import_smithy_client25.decorateServiceException)(exception, body);
    }, "de_MessageNotInflightRes");
    var de_OverLimitRes = __name2(async (parsedOutput, context) => {
      const body = parsedOutput.body;
      const deserialized = (0, import_smithy_client25._json)(body);
      const exception = new OverLimit({
        $metadata: deserializeMetadata3(parsedOutput),
        ...deserialized
      });
      return (0, import_smithy_client25.decorateServiceException)(exception, body);
    }, "de_OverLimitRes");
    var de_PurgeQueueInProgressRes = __name2(async (parsedOutput, context) => {
      const body = parsedOutput.body;
      const deserialized = (0, import_smithy_client25._json)(body);
      const exception = new PurgeQueueInProgress({
        $metadata: deserializeMetadata3(parsedOutput),
        ...deserialized
      });
      return (0, import_smithy_client25.decorateServiceException)(exception, body);
    }, "de_PurgeQueueInProgressRes");
    var de_QueueDeletedRecentlyRes = __name2(async (parsedOutput, context) => {
      const body = parsedOutput.body;
      const deserialized = (0, import_smithy_client25._json)(body);
      const exception = new QueueDeletedRecently({
        $metadata: deserializeMetadata3(parsedOutput),
        ...deserialized
      });
      return (0, import_smithy_client25.decorateServiceException)(exception, body);
    }, "de_QueueDeletedRecentlyRes");
    var de_QueueDoesNotExistRes = __name2(async (parsedOutput, context) => {
      const body = parsedOutput.body;
      const deserialized = (0, import_smithy_client25._json)(body);
      const exception = new QueueDoesNotExist({
        $metadata: deserializeMetadata3(parsedOutput),
        ...deserialized
      });
      return (0, import_smithy_client25.decorateServiceException)(exception, body);
    }, "de_QueueDoesNotExistRes");
    var de_QueueNameExistsRes = __name2(async (parsedOutput, context) => {
      const body = parsedOutput.body;
      const deserialized = (0, import_smithy_client25._json)(body);
      const exception = new QueueNameExists({
        $metadata: deserializeMetadata3(parsedOutput),
        ...deserialized
      });
      return (0, import_smithy_client25.decorateServiceException)(exception, body);
    }, "de_QueueNameExistsRes");
    var de_ReceiptHandleIsInvalidRes = __name2(async (parsedOutput, context) => {
      const body = parsedOutput.body;
      const deserialized = (0, import_smithy_client25._json)(body);
      const exception = new ReceiptHandleIsInvalid({
        $metadata: deserializeMetadata3(parsedOutput),
        ...deserialized
      });
      return (0, import_smithy_client25.decorateServiceException)(exception, body);
    }, "de_ReceiptHandleIsInvalidRes");
    var de_RequestThrottledRes = __name2(async (parsedOutput, context) => {
      const body = parsedOutput.body;
      const deserialized = (0, import_smithy_client25._json)(body);
      const exception = new RequestThrottled({
        $metadata: deserializeMetadata3(parsedOutput),
        ...deserialized
      });
      return (0, import_smithy_client25.decorateServiceException)(exception, body);
    }, "de_RequestThrottledRes");
    var de_ResourceNotFoundExceptionRes = __name2(async (parsedOutput, context) => {
      const body = parsedOutput.body;
      const deserialized = (0, import_smithy_client25._json)(body);
      const exception = new ResourceNotFoundException({
        $metadata: deserializeMetadata3(parsedOutput),
        ...deserialized
      });
      return (0, import_smithy_client25.decorateServiceException)(exception, body);
    }, "de_ResourceNotFoundExceptionRes");
    var de_TooManyEntriesInBatchRequestRes = __name2(async (parsedOutput, context) => {
      const body = parsedOutput.body;
      const deserialized = (0, import_smithy_client25._json)(body);
      const exception = new TooManyEntriesInBatchRequest({
        $metadata: deserializeMetadata3(parsedOutput),
        ...deserialized
      });
      return (0, import_smithy_client25.decorateServiceException)(exception, body);
    }, "de_TooManyEntriesInBatchRequestRes");
    var de_UnsupportedOperationRes = __name2(async (parsedOutput, context) => {
      const body = parsedOutput.body;
      const deserialized = (0, import_smithy_client25._json)(body);
      const exception = new UnsupportedOperation({
        $metadata: deserializeMetadata3(parsedOutput),
        ...deserialized
      });
      return (0, import_smithy_client25.decorateServiceException)(exception, body);
    }, "de_UnsupportedOperationRes");
    var se_ActionNameList = __name2((input, context) => {
      return input.filter((e3) => e3 != null).map((entry) => {
        return (0, import_core22._toStr)(entry);
      });
    }, "se_ActionNameList");
    var se_AddPermissionRequest = __name2((input, context) => {
      return (0, import_smithy_client25.take)(input, {
        AWSAccountIds: __name2((_2) => se_AWSAccountIdList(_2, context), "AWSAccountIds"),
        Actions: __name2((_2) => se_ActionNameList(_2, context), "Actions"),
        Label: import_core22._toStr,
        QueueUrl: import_core22._toStr
      });
    }, "se_AddPermissionRequest");
    var se_AttributeNameList = __name2((input, context) => {
      return input.filter((e3) => e3 != null).map((entry) => {
        return (0, import_core22._toStr)(entry);
      });
    }, "se_AttributeNameList");
    var se_AWSAccountIdList = __name2((input, context) => {
      return input.filter((e3) => e3 != null).map((entry) => {
        return (0, import_core22._toStr)(entry);
      });
    }, "se_AWSAccountIdList");
    var se_BinaryList = __name2((input, context) => {
      return input.filter((e3) => e3 != null).map((entry) => {
        return context.base64Encoder(entry);
      });
    }, "se_BinaryList");
    var se_CancelMessageMoveTaskRequest = __name2((input, context) => {
      return (0, import_smithy_client25.take)(input, {
        TaskHandle: import_core22._toStr
      });
    }, "se_CancelMessageMoveTaskRequest");
    var se_ChangeMessageVisibilityBatchRequest = __name2((input, context) => {
      return (0, import_smithy_client25.take)(input, {
        Entries: __name2((_2) => se_ChangeMessageVisibilityBatchRequestEntryList(_2, context), "Entries"),
        QueueUrl: import_core22._toStr
      });
    }, "se_ChangeMessageVisibilityBatchRequest");
    var se_ChangeMessageVisibilityBatchRequestEntry = __name2((input, context) => {
      return (0, import_smithy_client25.take)(input, {
        Id: import_core22._toStr,
        ReceiptHandle: import_core22._toStr,
        VisibilityTimeout: import_core22._toNum
      });
    }, "se_ChangeMessageVisibilityBatchRequestEntry");
    var se_ChangeMessageVisibilityBatchRequestEntryList = __name2((input, context) => {
      return input.filter((e3) => e3 != null).map((entry) => {
        return se_ChangeMessageVisibilityBatchRequestEntry(entry, context);
      });
    }, "se_ChangeMessageVisibilityBatchRequestEntryList");
    var se_ChangeMessageVisibilityRequest = __name2((input, context) => {
      return (0, import_smithy_client25.take)(input, {
        QueueUrl: import_core22._toStr,
        ReceiptHandle: import_core22._toStr,
        VisibilityTimeout: import_core22._toNum
      });
    }, "se_ChangeMessageVisibilityRequest");
    var se_CreateQueueRequest = __name2((input, context) => {
      return (0, import_smithy_client25.take)(input, {
        Attributes: __name2((_2) => se_QueueAttributeMap(_2, context), "Attributes"),
        QueueName: import_core22._toStr,
        tags: __name2((_2) => se_TagMap(_2, context), "tags")
      });
    }, "se_CreateQueueRequest");
    var se_DeleteMessageBatchRequest = __name2((input, context) => {
      return (0, import_smithy_client25.take)(input, {
        Entries: __name2((_2) => se_DeleteMessageBatchRequestEntryList(_2, context), "Entries"),
        QueueUrl: import_core22._toStr
      });
    }, "se_DeleteMessageBatchRequest");
    var se_DeleteMessageBatchRequestEntry = __name2((input, context) => {
      return (0, import_smithy_client25.take)(input, {
        Id: import_core22._toStr,
        ReceiptHandle: import_core22._toStr
      });
    }, "se_DeleteMessageBatchRequestEntry");
    var se_DeleteMessageBatchRequestEntryList = __name2((input, context) => {
      return input.filter((e3) => e3 != null).map((entry) => {
        return se_DeleteMessageBatchRequestEntry(entry, context);
      });
    }, "se_DeleteMessageBatchRequestEntryList");
    var se_DeleteMessageRequest = __name2((input, context) => {
      return (0, import_smithy_client25.take)(input, {
        QueueUrl: import_core22._toStr,
        ReceiptHandle: import_core22._toStr
      });
    }, "se_DeleteMessageRequest");
    var se_DeleteQueueRequest = __name2((input, context) => {
      return (0, import_smithy_client25.take)(input, {
        QueueUrl: import_core22._toStr
      });
    }, "se_DeleteQueueRequest");
    var se_GetQueueAttributesRequest = __name2((input, context) => {
      return (0, import_smithy_client25.take)(input, {
        AttributeNames: __name2((_2) => se_AttributeNameList(_2, context), "AttributeNames"),
        QueueUrl: import_core22._toStr
      });
    }, "se_GetQueueAttributesRequest");
    var se_GetQueueUrlRequest = __name2((input, context) => {
      return (0, import_smithy_client25.take)(input, {
        QueueName: import_core22._toStr,
        QueueOwnerAWSAccountId: import_core22._toStr
      });
    }, "se_GetQueueUrlRequest");
    var se_ListDeadLetterSourceQueuesRequest = __name2((input, context) => {
      return (0, import_smithy_client25.take)(input, {
        MaxResults: import_core22._toNum,
        NextToken: import_core22._toStr,
        QueueUrl: import_core22._toStr
      });
    }, "se_ListDeadLetterSourceQueuesRequest");
    var se_ListMessageMoveTasksRequest = __name2((input, context) => {
      return (0, import_smithy_client25.take)(input, {
        MaxResults: import_core22._toNum,
        SourceArn: import_core22._toStr
      });
    }, "se_ListMessageMoveTasksRequest");
    var se_ListQueuesRequest = __name2((input, context) => {
      return (0, import_smithy_client25.take)(input, {
        MaxResults: import_core22._toNum,
        NextToken: import_core22._toStr,
        QueueNamePrefix: import_core22._toStr
      });
    }, "se_ListQueuesRequest");
    var se_ListQueueTagsRequest = __name2((input, context) => {
      return (0, import_smithy_client25.take)(input, {
        QueueUrl: import_core22._toStr
      });
    }, "se_ListQueueTagsRequest");
    var se_MessageAttributeNameList = __name2((input, context) => {
      return input.filter((e3) => e3 != null).map((entry) => {
        return (0, import_core22._toStr)(entry);
      });
    }, "se_MessageAttributeNameList");
    var se_MessageAttributeValue = __name2((input, context) => {
      return (0, import_smithy_client25.take)(input, {
        BinaryListValues: __name2((_2) => se_BinaryList(_2, context), "BinaryListValues"),
        BinaryValue: context.base64Encoder,
        DataType: import_core22._toStr,
        StringListValues: __name2((_2) => se_StringList(_2, context), "StringListValues"),
        StringValue: import_core22._toStr
      });
    }, "se_MessageAttributeValue");
    var se_MessageBodyAttributeMap = __name2((input, context) => {
      return Object.entries(input).reduce((acc, [key, value]) => {
        if (value === null) {
          return acc;
        }
        acc[key] = se_MessageAttributeValue(value, context);
        return acc;
      }, {});
    }, "se_MessageBodyAttributeMap");
    var se_MessageBodySystemAttributeMap = __name2((input, context) => {
      return Object.entries(input).reduce(
        (acc, [key, value]) => {
          if (value === null) {
            return acc;
          }
          acc[key] = se_MessageSystemAttributeValue(value, context);
          return acc;
        },
        {}
      );
    }, "se_MessageBodySystemAttributeMap");
    var se_MessageSystemAttributeList = __name2((input, context) => {
      return input.filter((e3) => e3 != null).map((entry) => {
        return (0, import_core22._toStr)(entry);
      });
    }, "se_MessageSystemAttributeList");
    var se_MessageSystemAttributeValue = __name2((input, context) => {
      return (0, import_smithy_client25.take)(input, {
        BinaryListValues: __name2((_2) => se_BinaryList(_2, context), "BinaryListValues"),
        BinaryValue: context.base64Encoder,
        DataType: import_core22._toStr,
        StringListValues: __name2((_2) => se_StringList(_2, context), "StringListValues"),
        StringValue: import_core22._toStr
      });
    }, "se_MessageSystemAttributeValue");
    var se_PurgeQueueRequest = __name2((input, context) => {
      return (0, import_smithy_client25.take)(input, {
        QueueUrl: import_core22._toStr
      });
    }, "se_PurgeQueueRequest");
    var se_QueueAttributeMap = __name2((input, context) => {
      return Object.entries(input).reduce((acc, [key, value]) => {
        if (value === null) {
          return acc;
        }
        acc[key] = (0, import_core22._toStr)(value);
        return acc;
      }, {});
    }, "se_QueueAttributeMap");
    var se_ReceiveMessageRequest = __name2((input, context) => {
      return (0, import_smithy_client25.take)(input, {
        AttributeNames: __name2((_2) => se_AttributeNameList(_2, context), "AttributeNames"),
        MaxNumberOfMessages: import_core22._toNum,
        MessageAttributeNames: __name2((_2) => se_MessageAttributeNameList(_2, context), "MessageAttributeNames"),
        MessageSystemAttributeNames: __name2((_2) => se_MessageSystemAttributeList(_2, context), "MessageSystemAttributeNames"),
        QueueUrl: import_core22._toStr,
        ReceiveRequestAttemptId: import_core22._toStr,
        VisibilityTimeout: import_core22._toNum,
        WaitTimeSeconds: import_core22._toNum
      });
    }, "se_ReceiveMessageRequest");
    var se_RemovePermissionRequest = __name2((input, context) => {
      return (0, import_smithy_client25.take)(input, {
        Label: import_core22._toStr,
        QueueUrl: import_core22._toStr
      });
    }, "se_RemovePermissionRequest");
    var se_SendMessageBatchRequest = __name2((input, context) => {
      return (0, import_smithy_client25.take)(input, {
        Entries: __name2((_2) => se_SendMessageBatchRequestEntryList(_2, context), "Entries"),
        QueueUrl: import_core22._toStr
      });
    }, "se_SendMessageBatchRequest");
    var se_SendMessageBatchRequestEntry = __name2((input, context) => {
      return (0, import_smithy_client25.take)(input, {
        DelaySeconds: import_core22._toNum,
        Id: import_core22._toStr,
        MessageAttributes: __name2((_2) => se_MessageBodyAttributeMap(_2, context), "MessageAttributes"),
        MessageBody: import_core22._toStr,
        MessageDeduplicationId: import_core22._toStr,
        MessageGroupId: import_core22._toStr,
        MessageSystemAttributes: __name2((_2) => se_MessageBodySystemAttributeMap(_2, context), "MessageSystemAttributes")
      });
    }, "se_SendMessageBatchRequestEntry");
    var se_SendMessageBatchRequestEntryList = __name2((input, context) => {
      return input.filter((e3) => e3 != null).map((entry) => {
        return se_SendMessageBatchRequestEntry(entry, context);
      });
    }, "se_SendMessageBatchRequestEntryList");
    var se_SendMessageRequest = __name2((input, context) => {
      return (0, import_smithy_client25.take)(input, {
        DelaySeconds: import_core22._toNum,
        MessageAttributes: __name2((_2) => se_MessageBodyAttributeMap(_2, context), "MessageAttributes"),
        MessageBody: import_core22._toStr,
        MessageDeduplicationId: import_core22._toStr,
        MessageGroupId: import_core22._toStr,
        MessageSystemAttributes: __name2((_2) => se_MessageBodySystemAttributeMap(_2, context), "MessageSystemAttributes"),
        QueueUrl: import_core22._toStr
      });
    }, "se_SendMessageRequest");
    var se_SetQueueAttributesRequest = __name2((input, context) => {
      return (0, import_smithy_client25.take)(input, {
        Attributes: __name2((_2) => se_QueueAttributeMap(_2, context), "Attributes"),
        QueueUrl: import_core22._toStr
      });
    }, "se_SetQueueAttributesRequest");
    var se_StartMessageMoveTaskRequest = __name2((input, context) => {
      return (0, import_smithy_client25.take)(input, {
        DestinationArn: import_core22._toStr,
        MaxNumberOfMessagesPerSecond: import_core22._toNum,
        SourceArn: import_core22._toStr
      });
    }, "se_StartMessageMoveTaskRequest");
    var se_StringList = __name2((input, context) => {
      return input.filter((e3) => e3 != null).map((entry) => {
        return (0, import_core22._toStr)(entry);
      });
    }, "se_StringList");
    var se_TagKeyList = __name2((input, context) => {
      return input.filter((e3) => e3 != null).map((entry) => {
        return (0, import_core22._toStr)(entry);
      });
    }, "se_TagKeyList");
    var se_TagMap = __name2((input, context) => {
      return Object.entries(input).reduce((acc, [key, value]) => {
        if (value === null) {
          return acc;
        }
        acc[key] = (0, import_core22._toStr)(value);
        return acc;
      }, {});
    }, "se_TagMap");
    var se_TagQueueRequest = __name2((input, context) => {
      return (0, import_smithy_client25.take)(input, {
        QueueUrl: import_core22._toStr,
        Tags: __name2((_2) => se_TagMap(_2, context), "Tags")
      });
    }, "se_TagQueueRequest");
    var se_UntagQueueRequest = __name2((input, context) => {
      return (0, import_smithy_client25.take)(input, {
        QueueUrl: import_core22._toStr,
        TagKeys: __name2((_2) => se_TagKeyList(_2, context), "TagKeys")
      });
    }, "se_UntagQueueRequest");
    var de_BinaryList = __name2((output, context) => {
      const retVal = (output || []).filter((e3) => e3 != null).map((entry) => {
        return context.base64Decoder(entry);
      });
      return retVal;
    }, "de_BinaryList");
    var de_Message = __name2((output, context) => {
      return (0, import_smithy_client25.take)(output, {
        Attributes: import_smithy_client25._json,
        Body: import_smithy_client25.expectString,
        MD5OfBody: import_smithy_client25.expectString,
        MD5OfMessageAttributes: import_smithy_client25.expectString,
        MessageAttributes: __name2((_2) => de_MessageBodyAttributeMap(_2, context), "MessageAttributes"),
        MessageId: import_smithy_client25.expectString,
        ReceiptHandle: import_smithy_client25.expectString
      });
    }, "de_Message");
    var de_MessageAttributeValue = __name2((output, context) => {
      return (0, import_smithy_client25.take)(output, {
        BinaryListValues: __name2((_2) => de_BinaryList(_2, context), "BinaryListValues"),
        BinaryValue: context.base64Decoder,
        DataType: import_smithy_client25.expectString,
        StringListValues: import_smithy_client25._json,
        StringValue: import_smithy_client25.expectString
      });
    }, "de_MessageAttributeValue");
    var de_MessageBodyAttributeMap = __name2((output, context) => {
      return Object.entries(output).reduce((acc, [key, value]) => {
        if (value === null) {
          return acc;
        }
        acc[key] = de_MessageAttributeValue(value, context);
        return acc;
      }, {});
    }, "de_MessageBodyAttributeMap");
    var de_MessageList = __name2((output, context) => {
      const retVal = (output || []).filter((e3) => e3 != null).map((entry) => {
        return de_Message(entry, context);
      });
      return retVal;
    }, "de_MessageList");
    var de_ReceiveMessageResult = __name2((output, context) => {
      return (0, import_smithy_client25.take)(output, {
        Messages: __name2((_2) => de_MessageList(_2, context), "Messages")
      });
    }, "de_ReceiveMessageResult");
    var deserializeMetadata3 = __name2((output) => ({
      httpStatusCode: output.statusCode,
      requestId: output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"] ?? output.headers["x-amz-request-id"],
      extendedRequestId: output.headers["x-amz-id-2"],
      cfId: output.headers["x-amz-cf-id"]
    }), "deserializeMetadata");
    var throwDefaultError3 = (0, import_smithy_client25.withBaseException)(SQSServiceException);
    var buildHttpRpcRequest2 = __name2(async (context, headers, path, resolvedHostname, body) => {
      const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
      const contents = {
        protocol,
        hostname,
        port,
        method: "POST",
        path: basePath.endsWith("/") ? basePath.slice(0, -1) + path : basePath + path,
        headers
      };
      if (resolvedHostname !== void 0) {
        contents.hostname = resolvedHostname;
      }
      if (body !== void 0) {
        contents.body = body;
      }
      return new import_protocol_http15.HttpRequest(contents);
    }, "buildHttpRpcRequest");
    function sharedHeaders(operation) {
      return {
        "content-type": "application/x-amz-json-1.0",
        "x-amz-target": `AmazonSQS.${operation}`,
        "x-amzn-query-mode": "true"
      };
    }
    __name(sharedHeaders, "sharedHeaders");
    __name2(sharedHeaders, "sharedHeaders");
    var populateBodyWithQueryCompatibility = __name2((parsedOutput, headers) => {
      const queryErrorHeader = headers["x-amzn-query-error"];
      if (parsedOutput.body !== void 0 && queryErrorHeader != null) {
        const codeAndType = queryErrorHeader.split(";");
        parsedOutput.body.Code = codeAndType[0];
        parsedOutput.body.Type = codeAndType[1];
      }
    }, "populateBodyWithQueryCompatibility");
    var AddPermissionCommand = class extends import_smithy_client25.Command.classBuilder().ep(commonParams3).m(function(Command, cs, config, o3) {
      return [
        (0, import_middleware_serde5.getSerdePlugin)(config, this.serialize, this.deserialize),
        (0, import_middleware_endpoint6.getEndpointPlugin)(config, Command.getEndpointParameterInstructions())
      ];
    }).s("AmazonSQS", "AddPermission", {}).n("SQSClient", "AddPermissionCommand").f(void 0, void 0).ser(se_AddPermissionCommand).de(de_AddPermissionCommand).build() {
      static {
        __name(this, "AddPermissionCommand");
      }
      static {
        __name2(this, "AddPermissionCommand");
      }
    };
    var CancelMessageMoveTaskCommand = class extends import_smithy_client25.Command.classBuilder().ep(commonParams3).m(function(Command, cs, config, o3) {
      return [
        (0, import_middleware_serde5.getSerdePlugin)(config, this.serialize, this.deserialize),
        (0, import_middleware_endpoint6.getEndpointPlugin)(config, Command.getEndpointParameterInstructions())
      ];
    }).s("AmazonSQS", "CancelMessageMoveTask", {}).n("SQSClient", "CancelMessageMoveTaskCommand").f(void 0, void 0).ser(se_CancelMessageMoveTaskCommand).de(de_CancelMessageMoveTaskCommand).build() {
      static {
        __name(this, "CancelMessageMoveTaskCommand");
      }
      static {
        __name2(this, "CancelMessageMoveTaskCommand");
      }
    };
    var ChangeMessageVisibilityBatchCommand = class extends import_smithy_client25.Command.classBuilder().ep(commonParams3).m(function(Command, cs, config, o3) {
      return [
        (0, import_middleware_serde5.getSerdePlugin)(config, this.serialize, this.deserialize),
        (0, import_middleware_endpoint6.getEndpointPlugin)(config, Command.getEndpointParameterInstructions())
      ];
    }).s("AmazonSQS", "ChangeMessageVisibilityBatch", {}).n("SQSClient", "ChangeMessageVisibilityBatchCommand").f(void 0, void 0).ser(se_ChangeMessageVisibilityBatchCommand).de(de_ChangeMessageVisibilityBatchCommand).build() {
      static {
        __name(this, "ChangeMessageVisibilityBatchCommand");
      }
      static {
        __name2(this, "ChangeMessageVisibilityBatchCommand");
      }
    };
    var ChangeMessageVisibilityCommand = class extends import_smithy_client25.Command.classBuilder().ep(commonParams3).m(function(Command, cs, config, o3) {
      return [
        (0, import_middleware_serde5.getSerdePlugin)(config, this.serialize, this.deserialize),
        (0, import_middleware_endpoint6.getEndpointPlugin)(config, Command.getEndpointParameterInstructions())
      ];
    }).s("AmazonSQS", "ChangeMessageVisibility", {}).n("SQSClient", "ChangeMessageVisibilityCommand").f(void 0, void 0).ser(se_ChangeMessageVisibilityCommand).de(de_ChangeMessageVisibilityCommand).build() {
      static {
        __name(this, "ChangeMessageVisibilityCommand");
      }
      static {
        __name2(this, "ChangeMessageVisibilityCommand");
      }
    };
    var CreateQueueCommand = class extends import_smithy_client25.Command.classBuilder().ep(commonParams3).m(function(Command, cs, config, o3) {
      return [
        (0, import_middleware_serde5.getSerdePlugin)(config, this.serialize, this.deserialize),
        (0, import_middleware_endpoint6.getEndpointPlugin)(config, Command.getEndpointParameterInstructions())
      ];
    }).s("AmazonSQS", "CreateQueue", {}).n("SQSClient", "CreateQueueCommand").f(void 0, void 0).ser(se_CreateQueueCommand).de(de_CreateQueueCommand).build() {
      static {
        __name(this, "CreateQueueCommand");
      }
      static {
        __name2(this, "CreateQueueCommand");
      }
    };
    var DeleteMessageBatchCommand = class extends import_smithy_client25.Command.classBuilder().ep(commonParams3).m(function(Command, cs, config, o3) {
      return [
        (0, import_middleware_serde5.getSerdePlugin)(config, this.serialize, this.deserialize),
        (0, import_middleware_endpoint6.getEndpointPlugin)(config, Command.getEndpointParameterInstructions())
      ];
    }).s("AmazonSQS", "DeleteMessageBatch", {}).n("SQSClient", "DeleteMessageBatchCommand").f(void 0, void 0).ser(se_DeleteMessageBatchCommand).de(de_DeleteMessageBatchCommand).build() {
      static {
        __name(this, "DeleteMessageBatchCommand");
      }
      static {
        __name2(this, "DeleteMessageBatchCommand");
      }
    };
    var DeleteMessageCommand = class extends import_smithy_client25.Command.classBuilder().ep(commonParams3).m(function(Command, cs, config, o3) {
      return [
        (0, import_middleware_serde5.getSerdePlugin)(config, this.serialize, this.deserialize),
        (0, import_middleware_endpoint6.getEndpointPlugin)(config, Command.getEndpointParameterInstructions())
      ];
    }).s("AmazonSQS", "DeleteMessage", {}).n("SQSClient", "DeleteMessageCommand").f(void 0, void 0).ser(se_DeleteMessageCommand).de(de_DeleteMessageCommand).build() {
      static {
        __name(this, "DeleteMessageCommand");
      }
      static {
        __name2(this, "DeleteMessageCommand");
      }
    };
    var DeleteQueueCommand = class extends import_smithy_client25.Command.classBuilder().ep(commonParams3).m(function(Command, cs, config, o3) {
      return [
        (0, import_middleware_serde5.getSerdePlugin)(config, this.serialize, this.deserialize),
        (0, import_middleware_endpoint6.getEndpointPlugin)(config, Command.getEndpointParameterInstructions())
      ];
    }).s("AmazonSQS", "DeleteQueue", {}).n("SQSClient", "DeleteQueueCommand").f(void 0, void 0).ser(se_DeleteQueueCommand).de(de_DeleteQueueCommand).build() {
      static {
        __name(this, "DeleteQueueCommand");
      }
      static {
        __name2(this, "DeleteQueueCommand");
      }
    };
    var GetQueueAttributesCommand = class extends import_smithy_client25.Command.classBuilder().ep(commonParams3).m(function(Command, cs, config, o3) {
      return [
        (0, import_middleware_serde5.getSerdePlugin)(config, this.serialize, this.deserialize),
        (0, import_middleware_endpoint6.getEndpointPlugin)(config, Command.getEndpointParameterInstructions())
      ];
    }).s("AmazonSQS", "GetQueueAttributes", {}).n("SQSClient", "GetQueueAttributesCommand").f(void 0, void 0).ser(se_GetQueueAttributesCommand).de(de_GetQueueAttributesCommand).build() {
      static {
        __name(this, "GetQueueAttributesCommand");
      }
      static {
        __name2(this, "GetQueueAttributesCommand");
      }
    };
    var GetQueueUrlCommand = class extends import_smithy_client25.Command.classBuilder().ep(commonParams3).m(function(Command, cs, config, o3) {
      return [
        (0, import_middleware_serde5.getSerdePlugin)(config, this.serialize, this.deserialize),
        (0, import_middleware_endpoint6.getEndpointPlugin)(config, Command.getEndpointParameterInstructions())
      ];
    }).s("AmazonSQS", "GetQueueUrl", {}).n("SQSClient", "GetQueueUrlCommand").f(void 0, void 0).ser(se_GetQueueUrlCommand).de(de_GetQueueUrlCommand).build() {
      static {
        __name(this, "GetQueueUrlCommand");
      }
      static {
        __name2(this, "GetQueueUrlCommand");
      }
    };
    var ListDeadLetterSourceQueuesCommand = class extends import_smithy_client25.Command.classBuilder().ep(commonParams3).m(function(Command, cs, config, o3) {
      return [
        (0, import_middleware_serde5.getSerdePlugin)(config, this.serialize, this.deserialize),
        (0, import_middleware_endpoint6.getEndpointPlugin)(config, Command.getEndpointParameterInstructions())
      ];
    }).s("AmazonSQS", "ListDeadLetterSourceQueues", {}).n("SQSClient", "ListDeadLetterSourceQueuesCommand").f(void 0, void 0).ser(se_ListDeadLetterSourceQueuesCommand).de(de_ListDeadLetterSourceQueuesCommand).build() {
      static {
        __name(this, "ListDeadLetterSourceQueuesCommand");
      }
      static {
        __name2(this, "ListDeadLetterSourceQueuesCommand");
      }
    };
    var ListMessageMoveTasksCommand = class extends import_smithy_client25.Command.classBuilder().ep(commonParams3).m(function(Command, cs, config, o3) {
      return [
        (0, import_middleware_serde5.getSerdePlugin)(config, this.serialize, this.deserialize),
        (0, import_middleware_endpoint6.getEndpointPlugin)(config, Command.getEndpointParameterInstructions())
      ];
    }).s("AmazonSQS", "ListMessageMoveTasks", {}).n("SQSClient", "ListMessageMoveTasksCommand").f(void 0, void 0).ser(se_ListMessageMoveTasksCommand).de(de_ListMessageMoveTasksCommand).build() {
      static {
        __name(this, "ListMessageMoveTasksCommand");
      }
      static {
        __name2(this, "ListMessageMoveTasksCommand");
      }
    };
    var ListQueuesCommand = class extends import_smithy_client25.Command.classBuilder().ep(commonParams3).m(function(Command, cs, config, o3) {
      return [
        (0, import_middleware_serde5.getSerdePlugin)(config, this.serialize, this.deserialize),
        (0, import_middleware_endpoint6.getEndpointPlugin)(config, Command.getEndpointParameterInstructions())
      ];
    }).s("AmazonSQS", "ListQueues", {}).n("SQSClient", "ListQueuesCommand").f(void 0, void 0).ser(se_ListQueuesCommand).de(de_ListQueuesCommand).build() {
      static {
        __name(this, "ListQueuesCommand");
      }
      static {
        __name2(this, "ListQueuesCommand");
      }
    };
    var ListQueueTagsCommand = class extends import_smithy_client25.Command.classBuilder().ep(commonParams3).m(function(Command, cs, config, o3) {
      return [
        (0, import_middleware_serde5.getSerdePlugin)(config, this.serialize, this.deserialize),
        (0, import_middleware_endpoint6.getEndpointPlugin)(config, Command.getEndpointParameterInstructions())
      ];
    }).s("AmazonSQS", "ListQueueTags", {}).n("SQSClient", "ListQueueTagsCommand").f(void 0, void 0).ser(se_ListQueueTagsCommand).de(de_ListQueueTagsCommand).build() {
      static {
        __name(this, "ListQueueTagsCommand");
      }
      static {
        __name2(this, "ListQueueTagsCommand");
      }
    };
    var PurgeQueueCommand = class extends import_smithy_client25.Command.classBuilder().ep(commonParams3).m(function(Command, cs, config, o3) {
      return [
        (0, import_middleware_serde5.getSerdePlugin)(config, this.serialize, this.deserialize),
        (0, import_middleware_endpoint6.getEndpointPlugin)(config, Command.getEndpointParameterInstructions())
      ];
    }).s("AmazonSQS", "PurgeQueue", {}).n("SQSClient", "PurgeQueueCommand").f(void 0, void 0).ser(se_PurgeQueueCommand).de(de_PurgeQueueCommand).build() {
      static {
        __name(this, "PurgeQueueCommand");
      }
      static {
        __name2(this, "PurgeQueueCommand");
      }
    };
    var ReceiveMessageCommand = class extends import_smithy_client25.Command.classBuilder().ep(commonParams3).m(function(Command, cs, config, o3) {
      return [
        (0, import_middleware_serde5.getSerdePlugin)(config, this.serialize, this.deserialize),
        (0, import_middleware_endpoint6.getEndpointPlugin)(config, Command.getEndpointParameterInstructions()),
        (0, import_middleware_sdk_sqs.getReceiveMessagePlugin)(config)
      ];
    }).s("AmazonSQS", "ReceiveMessage", {}).n("SQSClient", "ReceiveMessageCommand").f(void 0, void 0).ser(se_ReceiveMessageCommand).de(de_ReceiveMessageCommand).build() {
      static {
        __name(this, "ReceiveMessageCommand");
      }
      static {
        __name2(this, "ReceiveMessageCommand");
      }
    };
    var RemovePermissionCommand = class extends import_smithy_client25.Command.classBuilder().ep(commonParams3).m(function(Command, cs, config, o3) {
      return [
        (0, import_middleware_serde5.getSerdePlugin)(config, this.serialize, this.deserialize),
        (0, import_middleware_endpoint6.getEndpointPlugin)(config, Command.getEndpointParameterInstructions())
      ];
    }).s("AmazonSQS", "RemovePermission", {}).n("SQSClient", "RemovePermissionCommand").f(void 0, void 0).ser(se_RemovePermissionCommand).de(de_RemovePermissionCommand).build() {
      static {
        __name(this, "RemovePermissionCommand");
      }
      static {
        __name2(this, "RemovePermissionCommand");
      }
    };
    var SendMessageBatchCommand = class extends import_smithy_client25.Command.classBuilder().ep(commonParams3).m(function(Command, cs, config, o3) {
      return [
        (0, import_middleware_serde5.getSerdePlugin)(config, this.serialize, this.deserialize),
        (0, import_middleware_endpoint6.getEndpointPlugin)(config, Command.getEndpointParameterInstructions()),
        (0, import_middleware_sdk_sqs.getSendMessageBatchPlugin)(config)
      ];
    }).s("AmazonSQS", "SendMessageBatch", {}).n("SQSClient", "SendMessageBatchCommand").f(void 0, void 0).ser(se_SendMessageBatchCommand).de(de_SendMessageBatchCommand).build() {
      static {
        __name(this, "SendMessageBatchCommand");
      }
      static {
        __name2(this, "SendMessageBatchCommand");
      }
    };
    var SendMessageCommand2 = class extends import_smithy_client25.Command.classBuilder().ep(commonParams3).m(function(Command, cs, config, o3) {
      return [
        (0, import_middleware_serde5.getSerdePlugin)(config, this.serialize, this.deserialize),
        (0, import_middleware_endpoint6.getEndpointPlugin)(config, Command.getEndpointParameterInstructions()),
        (0, import_middleware_sdk_sqs.getSendMessagePlugin)(config)
      ];
    }).s("AmazonSQS", "SendMessage", {}).n("SQSClient", "SendMessageCommand").f(void 0, void 0).ser(se_SendMessageCommand).de(de_SendMessageCommand).build() {
      static {
        __name(this, "SendMessageCommand");
      }
      static {
        __name2(this, "SendMessageCommand");
      }
    };
    var SetQueueAttributesCommand = class extends import_smithy_client25.Command.classBuilder().ep(commonParams3).m(function(Command, cs, config, o3) {
      return [
        (0, import_middleware_serde5.getSerdePlugin)(config, this.serialize, this.deserialize),
        (0, import_middleware_endpoint6.getEndpointPlugin)(config, Command.getEndpointParameterInstructions())
      ];
    }).s("AmazonSQS", "SetQueueAttributes", {}).n("SQSClient", "SetQueueAttributesCommand").f(void 0, void 0).ser(se_SetQueueAttributesCommand).de(de_SetQueueAttributesCommand).build() {
      static {
        __name(this, "SetQueueAttributesCommand");
      }
      static {
        __name2(this, "SetQueueAttributesCommand");
      }
    };
    var StartMessageMoveTaskCommand = class extends import_smithy_client25.Command.classBuilder().ep(commonParams3).m(function(Command, cs, config, o3) {
      return [
        (0, import_middleware_serde5.getSerdePlugin)(config, this.serialize, this.deserialize),
        (0, import_middleware_endpoint6.getEndpointPlugin)(config, Command.getEndpointParameterInstructions())
      ];
    }).s("AmazonSQS", "StartMessageMoveTask", {}).n("SQSClient", "StartMessageMoveTaskCommand").f(void 0, void 0).ser(se_StartMessageMoveTaskCommand).de(de_StartMessageMoveTaskCommand).build() {
      static {
        __name(this, "StartMessageMoveTaskCommand");
      }
      static {
        __name2(this, "StartMessageMoveTaskCommand");
      }
    };
    var TagQueueCommand = class extends import_smithy_client25.Command.classBuilder().ep(commonParams3).m(function(Command, cs, config, o3) {
      return [
        (0, import_middleware_serde5.getSerdePlugin)(config, this.serialize, this.deserialize),
        (0, import_middleware_endpoint6.getEndpointPlugin)(config, Command.getEndpointParameterInstructions())
      ];
    }).s("AmazonSQS", "TagQueue", {}).n("SQSClient", "TagQueueCommand").f(void 0, void 0).ser(se_TagQueueCommand).de(de_TagQueueCommand).build() {
      static {
        __name(this, "TagQueueCommand");
      }
      static {
        __name2(this, "TagQueueCommand");
      }
    };
    var UntagQueueCommand = class extends import_smithy_client25.Command.classBuilder().ep(commonParams3).m(function(Command, cs, config, o3) {
      return [
        (0, import_middleware_serde5.getSerdePlugin)(config, this.serialize, this.deserialize),
        (0, import_middleware_endpoint6.getEndpointPlugin)(config, Command.getEndpointParameterInstructions())
      ];
    }).s("AmazonSQS", "UntagQueue", {}).n("SQSClient", "UntagQueueCommand").f(void 0, void 0).ser(se_UntagQueueCommand).de(de_UntagQueueCommand).build() {
      static {
        __name(this, "UntagQueueCommand");
      }
      static {
        __name2(this, "UntagQueueCommand");
      }
    };
    var commands3 = {
      AddPermissionCommand,
      CancelMessageMoveTaskCommand,
      ChangeMessageVisibilityCommand,
      ChangeMessageVisibilityBatchCommand,
      CreateQueueCommand,
      DeleteMessageCommand,
      DeleteMessageBatchCommand,
      DeleteQueueCommand,
      GetQueueAttributesCommand,
      GetQueueUrlCommand,
      ListDeadLetterSourceQueuesCommand,
      ListMessageMoveTasksCommand,
      ListQueuesCommand,
      ListQueueTagsCommand,
      PurgeQueueCommand,
      ReceiveMessageCommand,
      RemovePermissionCommand,
      SendMessageCommand: SendMessageCommand2,
      SendMessageBatchCommand,
      SetQueueAttributesCommand,
      StartMessageMoveTaskCommand,
      TagQueueCommand,
      UntagQueueCommand
    };
    var SQS = class extends SQSClient2 {
      static {
        __name(this, "SQS");
      }
      static {
        __name2(this, "SQS");
      }
    };
    (0, import_smithy_client25.createAggregatedClient)(commands3, SQS);
    var paginateListDeadLetterSourceQueues = (0, import_core17.createPaginator)(SQSClient2, ListDeadLetterSourceQueuesCommand, "NextToken", "NextToken", "MaxResults");
    var paginateListQueues = (0, import_core17.createPaginator)(SQSClient2, ListQueuesCommand, "NextToken", "NextToken", "MaxResults");
  }
});

// src/handler.ts
var handler_exports = {};
__export(handler_exports, {
  handler: () => handler
});
module.exports = __toCommonJS(handler_exports);
var import_client_sqs = __toESM(require_dist_cjs52());
var sqs = new import_client_sqs.SQSClient({
  endpoint: "http://localhost:9324"
});
var handler = /* @__PURE__ */ __name(async () => {
  await sqs.send(new import_client_sqs.SendMessageCommand({
    QueueUrl: process.env.TEST_QUEUE_URL,
    MessageBody: JSON.stringify({ message: "hello world" })
  }));
  await sqs.send(new import_client_sqs.SendMessageCommand({
    QueueUrl: process.env.TEST_QUEUE_2_URL,
    MessageBody: JSON.stringify({ message: "hello world" })
  }));
  return {
    statusCode: 200
  };
}, "handler");
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  handler
});
//# sourceMappingURL=handler.js.map
