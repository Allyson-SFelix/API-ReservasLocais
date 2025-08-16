import { Body, Controller, Get, UsePipes, ValidationPipe } from '@nestjs/common';
import { UsuarioLoginDto } from './dtos/usuario.dtos';
import { UsuarioService } from './usuario.service';

@Controller('usuario')
export class UsuarioController {

    private readonly usuarioService:UsuarioService;

    constructor(usuarioService:UsuarioService){
        this.usuarioService=usuarioService;
    };

    @Get('login')
    @UsePipes(new ValidationPipe({ whitelist: true })) //se esta de acordo com o dtos
    login(@Body() dtoLogin:UsuarioLoginDto){
        return this.usuarioService.login(dtoLogin);
        //return token
    }
}
