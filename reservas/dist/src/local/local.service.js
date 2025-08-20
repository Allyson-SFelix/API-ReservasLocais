"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocalService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma/prisma.service");
const erroPatterns_1 = require("../ErroPatterns/erroPatterns");
let LocalService = class LocalService {
    prismaService;
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    async cadastroLocal(localRecebido) {
        try {
            await this.prismaService.local.create({
                data: {
                    capacidade: localRecebido.capacidade,
                    descricao: localRecebido.descricao,
                    status: true,
                    local: localRecebido.local,
                }
            });
            return erroPatterns_1.ErroPatterns.sucesso(localRecebido);
        }
        catch (erro) {
            return erroPatterns_1.ErroPatterns.falha("nao cadastrado com sucesso\n" + erro.message);
        }
    }
    async listarLocais() {
        try {
            let resultado = await this.prismaService.local.findMany({
                where: { status: true },
            });
            return erroPatterns_1.ErroPatterns.sucesso(resultado);
        }
        catch (erro) {
            return erroPatterns_1.ErroPatterns.falha("erro:" + erro.message);
        }
    }
};
exports.LocalService = LocalService;
exports.LocalService = LocalService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], LocalService);
//# sourceMappingURL=local.service.js.map