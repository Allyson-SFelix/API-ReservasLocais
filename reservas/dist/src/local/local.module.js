"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocalModule = void 0;
const common_1 = require("@nestjs/common");
const local_controller_1 = require("./local.controller");
const local_service_1 = require("./local.service");
const prisma_module_1 = require("../../prisma/prisma.module");
const erroPatterns_1 = require("../ErroPatterns/erroPatterns");
const local_dtos_1 = require("./dtos/local.dtos");
let LocalModule = class LocalModule {
};
exports.LocalModule = LocalModule;
exports.LocalModule = LocalModule = __decorate([
    (0, common_1.Module)({
        controllers: [local_controller_1.LocalController],
        providers: [local_service_1.LocalService],
        imports: [local_dtos_1.LocalDTO, erroPatterns_1.ErroPatterns, prisma_module_1.PrismaModule]
    })
], LocalModule);
//# sourceMappingURL=local.module.js.map