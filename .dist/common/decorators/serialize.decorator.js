"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Serialize = Serialize;
const common_1 = require("@nestjs/common");
const serialize_interceptor_1 = require("../interceptors/serialize.interceptor");
function Serialize(dto) {
    return (0, common_1.UseInterceptors)(new serialize_interceptor_1.SerializeInterceptor(dto));
}
//# sourceMappingURL=serialize.decorator.js.map