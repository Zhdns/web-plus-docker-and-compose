import { ArgumentsHost, ExceptionFilter } from '@nestjs/common';
import { ValidationError } from 'sequelize';
export declare class ValidationExceptionFilter implements ExceptionFilter {
    catch(exception: ValidationError, host: ArgumentsHost): void;
}
