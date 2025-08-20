import { UsuarioLoginDto } from './dtos/usuario.dtos';
import { PrismaService } from 'prisma/prisma.service';
import { ErroPatterns } from 'src/ErroPatterns/erroPatterns';
export declare class UsuarioService {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    login(dtoLogin: UsuarioLoginDto): Promise<ErroPatterns<UsuarioLoginDto>>;
}
