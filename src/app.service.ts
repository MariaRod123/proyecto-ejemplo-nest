import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getPrimerPrograma(): string {
    return 'Esta es mi primer aplicación con NEST';
  }
}
