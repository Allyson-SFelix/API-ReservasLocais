import { HttpStatus } from '@nestjs/common';
import { LocalService } from './local.service';
import { LocalDTO } from './dtos/local.dtos';
export declare class LocalController {
    private readonly localService;
    constructor(localService: LocalService);
    cadastrarLocal(dtoCadastroLocal: LocalDTO): Promise<{
        statusCode: HttpStatus;
        message: string;
        data: LocalDTO | null;
    } | {
        statusCode: HttpStatus;
        message: string | undefined;
        data?: undefined;
    }>;
    listarTodos(): Promise<{
        statusCode: HttpStatus;
        message: string;
        data: LocalDTO[] | null;
    } | {
        statusCode: HttpStatus;
        message: string | undefined;
        data?: undefined;
    }>;
}
