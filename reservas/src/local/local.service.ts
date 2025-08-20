import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { ErroPatterns } from 'src/ErroPatterns/erroPatterns';
import { LocalDTO } from './dtos/local.dtos';
import { Local } from 'generated/prisma';

@Injectable()
export class LocalService {

    private readonly prismaService:PrismaService;

    constructor(prismaService:PrismaService){
        this.prismaService=prismaService;
    }

    async cadastroLocal(localRecebido:LocalDTO):Promise<ErroPatterns<LocalDTO>>{
        try{
            await this.prismaService.local.create({
                data: {
                    capacidade: localRecebido.capacidade,
                    descricao: localRecebido.descricao,
                    status:true,
                    local:localRecebido.local,
                }
            });

            return ErroPatterns.sucesso(localRecebido);
        }catch(erro){
            return ErroPatterns.falha("nao cadastrado com sucesso\n"+erro.message);
        }
    }


    async ListarLocais():Promise<ErroPatterns<LocalDTO[]>>{
        try{

            let resultado : LocalDTO[] = await this.prismaService.local.findMany({
                where:{ status:true},
            });
            return ErroPatterns.sucesso(resultado);
            
        }catch(erro){
            return ErroPatterns.falha("erro:"+erro.message)
        }
    }


    async BuscarLocal(idEntrada:number):Promise<ErroPatterns<LocalDTO>>{
        try{
            const resultado : LocalDTO|null = await this.prismaService.local.findFirst({
                where:{
                    id:idEntrada,
                    status:true,
                },
                select: { id:true,capacidade: true, descricao: true,local:true }, 
            });
            return ErroPatterns.sucesso(resultado);
        }catch(erro){
            return ErroPatterns.falha("erro:"+erro.message);
       }
    }


    async DesativarLocal(idRecebido:number): Promise<ErroPatterns<Boolean>>{
        try{
            let resultado: number| null=await this.prismaService.reserva.count({
                where:{id_local:idRecebido, status:true},
            });

            if(resultado==0){    
                await this.prismaService.local.update({
                    where:{id:idRecebido},
                    data:{status:false},
                });
                return ErroPatterns.sucesso(true);
            }else{
                return ErroPatterns.falha("Local com reserva(s) pendente");
            }
        }catch(erro){
            return ErroPatterns.falha(erro.message);
        }
    }
    
}
