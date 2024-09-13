export class GsmsLogger {
    info(context: string) {
      console.info('Info', context);
    }

    error(context: string) {
      console.error('Error', context);
    }

    warning(context: string) {
      console.warn('Warn', context);
    }
}