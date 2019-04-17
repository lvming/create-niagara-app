export type LogFunc = (message?: any, ...optionalParams: any[]) => void;

function noop() {}

export enum LoggerLevel {
  trace,
  debug,
  info,
  warn,
  error,
}

export class Logger {
  level = LoggerLevel.info;

  constructor(readonly name: string) {}

  get trace(): LogFunc {
    return this.level > LoggerLevel.trace
      ? noop
      : console.debug.bind(console, `[${this.name}]`);
  }

  get debug(): LogFunc {
    return this.level > LoggerLevel.debug
      ? noop
      : console.debug.bind(console, `[${this.name}]`);
  }

  get info(): LogFunc {
    return this.level > LoggerLevel.info
      ? noop
      : console.info.bind(console, `[${this.name}]`);
  }

  get warn(): LogFunc {
    return this.level > LoggerLevel.warn
      ? noop
      : console.warn.bind(console, `[${this.name}]`);
  }

  get error(): LogFunc {
    return this.level > LoggerLevel.error
      ? noop
      : console.error.bind(console, `[${this.name}]`);
  }
}

export default new Logger("app");
