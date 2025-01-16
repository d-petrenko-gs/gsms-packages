export class GsmsLogger {
  info(context: string) {
    console.info("Infos", context);
  }

  error(context: string) {
    console.error("Errors", context);
  }

  warning(context: string) {
    console.warn("Warn", context);
  }
}