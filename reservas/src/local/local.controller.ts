import { Body,Param, Controller, Get, HttpStatus, Post, UsePipes, ValidationPipe, ParseIntPipe, Delete } from '@nestjs/common';
import { LocalService } from './local.service';
import { LocalDTO } from './dtos/local.dtos';
import { ErroPatterns } from 'src/ErroPatterns/erroPatterns';

@Controller('local')
export class LocalController {
    private readonly localService: LocalService;

    constructor(localService:LocalService){
        this.localService=localService;
    }

    @Post('cadastrarLocal')
    @UsePipes(new ValidationPipe({ whitelist: true })) //se esta de acordo com o dtos
    async cadastrarLocal(@Body() dtoCadastroLocal:LocalDTO){
        let resultado : ErroPatterns<LocalDTO>= await this.localService.cadastroLocal(dtoCadastroLocal);
        if(resultado.status){
            return {
                statusCode:HttpStatus.CREATED,
                message: 'Local cadastrado com sucesso',
                data:resultado.dados
            };
        }else{
            return {
                statusCode:HttpStatus.BAD_REQUEST,
                message: resultado.erro,
            };
        }
    }

    @Get('listarLocais')
    @UsePipes(new ValidationPipe({ whitelist: true })) //se esta de acordo com o dtos
    async listarTodos(){
        const resultado:ErroPatterns<LocalDTO[]>= await this.localService.ListarLocais();
        if(resultado.status){
            if(resultado.dados?.length===0){
                return {
                    statusCode:HttpStatus.OK,
                    message: 'Nao existem locais'
                };
            }else{
                return{
                    statusCode:HttpStatus.OK,
                    message: 'Locais:',
                    data:resultado.dados
                };
            }
        }else{
            return{
                statusCode:HttpStatus.BAD_REQUEST,
                message: resultado.erro,
            };
        }
    }

    @Get('listarLocal/:id')
    async BuscarLocalAtivo(@Param('id',ParseIntPipe) id:number){
        const resultado : ErroPatterns<LocalDTO> = await this.localService.BuscarLocal(id);
        if(resultado.status){
            if(resultado.dados===null){
                return {
                    statusCode:HttpStatus.OK,
                    message: 'Local inexistente'
                };
            }else{
                return{
                    statusCode:HttpStatus.OK,
                    message: 'Local:',
                    data:resultado.dados
                };
            }
        }else{
            return{
                statusCode:HttpStatus.BAD_REQUEST,
                message:resultado.erro,
            };
        }
    }

    @Post('apagarLocal/:id')
    async desativarLocal(@Param('id',ParseIntPipe) id:number){
        const resultado : ErroPatterns<Boolean>= await this.localService.DesativarLocal(id);
        if(resultado.status){
            return {
                statusCode:HttpStatus.OK,
                message:'Local apagado com sucesso',
            };

        }else{
            return {
                statusCode:HttpStatus.BAD_REQUEST,
                message:resultado.erro,
            };
        }
    
    }



}
