import { UsuarioLoginDto } from './dtos/usuario.dtos';
import { PrismaService } from 'prisma/prisma.service';
import { ErroPatterns } from 'src/ErroPatterns/erroPatterns';
export declare class UsuarioService {
    private readonly usuarioPrisma;
    constructor(usuarioPrisma: PrismaService);
    login(dtoLogin: UsuarioLoginDto): Promise<ErroPatterns<UsuarioLoginDto>>;
}
