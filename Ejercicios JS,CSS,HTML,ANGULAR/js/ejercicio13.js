try {
    throw new EvalError('Se ha producido un error', 'ejercicio13.js', 100);
} catch (error) {
    console.error(error.name + ': ' + error.message);
    console.error('Fichero: ' + error.fileName);
    console.error('Línea: ' + error.lineNumber);
}