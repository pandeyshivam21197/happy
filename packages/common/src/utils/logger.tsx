enum LogLevel {
  Trace = "trace",
  Debug = "debug",
  Info = "info",
  Warn = "warn",
  Error = "error",
}

export default class Logger {
  public _isDebugMode = false;

  get isDebugMode(): boolean {
    return this._isDebugMode;
  }

  set isDebugMode(isDebug: boolean) {
    this._isDebugMode = isDebug;
  }

  public trace = (message: any, ...rest: any[]): void => {
    this.logWithLevel(LogLevel.Trace, message, ...rest);
  };

  public debug = (message: any, ...rest: any[]): void => {
    this.logWithLevel(LogLevel.Debug, message, ...rest);
  };

  public info = (message: any, ...rest: any[]): void => {
    this.logWithLevel(LogLevel.Info, message, ...rest);
  };

  public warn = (message: any, ...rest: any[]): void => {
    this.logWithLevel(LogLevel.Warn, message, ...rest);
  };

  public error = (message: any, ...rest: any[]): void => {
    this.logWithLevel(LogLevel.Error, message, ...rest);
  };

  private logWithLevel = (
    logLevel: LogLevel,
    message: any,
    ...rest: any[]
  ): void => {
    const logMessage = message ? JSON.parse(JSON.stringify(message)) : message;
    if (!this.isDebugMode) {
      console[logLevel.toString() as LogLevel](logMessage, ...rest);
    }
  };
}

const logger = new Logger();
export { logger as Logger };
