import { IsNotEmpty } from 'class-validator';

export class UsuarioLoginDto    {
    @IsNotEmpty()
    username:string;

    @IsNotEmpty()
    senha:string;
    
}