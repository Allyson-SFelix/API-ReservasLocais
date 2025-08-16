"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErroPatterns = void 0;
class ErroPatterns {
    status;
    dados;
    erro;
    constructor(dados, erro, status) {
        this.dados = dados;
        this.erro = erro;
        this.status = status;
    }
    static sucesso(dados) {
        const resposta = new ErroPatterns(dados, "", true);
        return resposta;
    }
    static falha(erro) {
        const resposta = new ErroPatterns(null, erro, false);
        return resposta;
    }
}
exports.ErroPatterns = ErroPatterns;
//# sourceMappingURL=erroPatterns.js.map