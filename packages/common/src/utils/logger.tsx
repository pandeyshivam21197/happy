enum LogLevel {
  Trace = 'trace',
  Debug = 'debug',
  Info = 'info',
  Warn = 'warn',
  Error = 'error',
}

export default class Logger {
  public _isDebugMode = false;

  get isDebugMode(): boolean {
    return this._isDebugMode;
  }

  set isDebugMode(isDebug: boolean) {
    this._isDebugMode = isDebug;
  }

  public trace = (message: string): void => {
    this.logWithLevel(LogLevel.Trace, message);
  }

  public debug = (message: string): void => {
    this.logWithLevel(LogLevel.Debug, message);
  }

  public info = (message: string): void => {
    this.logWithLevel(LogLevel.Info, message);
  }

  public warn = (message: string): void => {
    this.logWithLevel(LogLevel.Warn, message);
  }

  public error = (message: string): void => {
    this.logWithLevel(LogLevel.Error, message);
  }

  private logWithLevel = (logLevel: LogLevel, message: any): void => {
    const logMessage = JSON.parse(JSON.stringify(message));
    if (!this.isDebugMode) {
      console[logLevel.toString() as LogLevel](logMessage);
    }
  }
}

const logger = new Logger();
export { logger as Logger };