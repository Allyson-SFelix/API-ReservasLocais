import { IsNotEmpty } from 'class-validator';

export class UsuarioLoginDto    {
    @IsNotEmpty()
    username:String;

    @IsNotEmpty()
    senha:String;
    
}