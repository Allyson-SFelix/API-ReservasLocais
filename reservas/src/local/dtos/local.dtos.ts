import { IsString, IsInt, Min, IsOptional } from 'class-validator';

export class LocalDTO{

    @IsOptional()
    @IsInt()
    id?:number;

    @IsInt()
    capacidade: number;
    
    @IsString()
    local:string;

    @IsString()
    descricao:string;
    
    constructor(capacidade:number,local:string,descricao:string,id:number){
        this.id=id;
        this.capacidade=capacidade;
        this.descricao=descricao;
        this.local=local;
    }
}