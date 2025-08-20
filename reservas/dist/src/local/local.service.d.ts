import { PrismaService } from 'prisma/prisma.service';
import { ErroPatterns } from 'src/ErroPatterns/erroPatterns';
import { LocalDTO } from './dtos/local.dtos';
export declare class LocalService {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    cadastroLocal(localRecebido: LocalDTO): Promise<ErroPatterns<LocalDTO>>;
    listarLocais(): Promise<ErroPatterns<LocalDTO[]>>;
}
