//let logType: string = 'info';
//logType = 'warn';

//let logType: 'info'
//logType = 'info' -> Só aceita o valor info -> Por isso é literal type

export function logger(type: 'info' | 'warn' | 'error', message: string) {
  switch (type) {
    case 'info':
      console.log(`Info: ${message}`);
      break;

    case 'warn':
      console.warn(`Warn: ${message}`);
      break;

    case 'error':
      console.error(`Error: ${message}`);
      break;
  }
}

logger('error', 'Log com alguma informação sobre o que houve!');
