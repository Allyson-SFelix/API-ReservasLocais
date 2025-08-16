import { UsuarioLoginDto } from './dtos/usuario.dtos';
import { UsuarioService } from './usuario.service';
export declare class UsuarioController {
    private readonly usuarioService;
    constructor(usuarioService: UsuarioService);
    login(dtoLogin: UsuarioLoginDto): Promise<import("../ErroPatterns/erroPatterns").ErroPatterns<UsuarioLoginDto>>;
}
