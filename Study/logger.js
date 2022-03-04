export const TYPE_LOG = 'log';
export const TYPE_WARN = 'warn';
export const TYPE_ERROR = 'error';
function logger5(log, type= TYPE_LOG){
    console[type](log);
}

export default logger5;