import { Injectable } from '@nestjs/common';
import { UsuarioLoginDto } from './dtos/usuario.dtos';
import { PrismaService } from 'prisma/prisma.service';
import { ErroPatterns } from 'src/ErroPatterns/erroPatterns';

@Injectable()
export class UsuarioService {

    private readonly prismaService:PrismaService; 

    constructor(prismaService:PrismaService){
        this.prismaService=prismaService;
    };
    

    async login(dtoLogin:UsuarioLoginDto) : Promise<ErroPatterns<UsuarioLoginDto>>{
        if(dtoLogin.username=="admin" && dtoLogin.senha=="admin"){
            return ErroPatterns.sucesso(dtoLogin);
        }else{
            try{
                const resultadoBusca= await this.prismaService.usuario.findUnique(
                {
                    where:{username:dtoLogin.username}
                }
                );
                // fazer a decodificação da senha do banco
                //comparar com a que recebi do dtoLogin
                    //usar no fail login
                    //return ErroPatterns.falha("Usuário ou/e senha estão incorretos");
                    
                return ErroPatterns.sucesso(dtoLogin);
            }   catch(e){
                return ErroPatterns.falha(e.message);
            }
        }
    }


}
