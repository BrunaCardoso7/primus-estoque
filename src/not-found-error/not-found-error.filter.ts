import { ArgumentsHost, Catch, ExceptionFilter } from '@nestjs/common';
import { NotFound } from 'src/erros';

@Catch(NotFound)
export class NotFoundErrorFilter implements ExceptionFilter {
  catch(exception: NotFound, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();

    response.status(404).json({
      statusCode: 404,
      message: exception.message,
    });
  }
}
