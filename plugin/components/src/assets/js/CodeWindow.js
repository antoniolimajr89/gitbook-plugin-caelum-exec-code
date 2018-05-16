document.addEventListener("DOMContentLoaded", function(event) { 
console.log('[CodeWindow: load]')

// Start both CodeMirrors
window.$userEditor = CodeMirror.fromTextArea(document.querySelector('#userEditor'), {
    value: 'package example;',
    lineNumbers: true,
    matchBrackets: true,
    mode: "text/x-java" // ISSO ESTÁ ATRELADO COM OS MODES
});

window.$compilerReturn = CodeMirror.fromTextArea(document.querySelector('#compilerReturn'), {
    value: 'package example;',
    lineNumbers: true,
    matchBrackets: true,
    mode: "text/x-java" // ISSO ESTÁ ATRELADO COM OS MODES
});

;(function(compilers) {
    const CompilerService = compilers.SphereEngineService

    const $formCodigo = document.querySelector("#formCodigo")
    $formCodigo.addEventListener("submit", (event) => {
        event.preventDefault()
        const codigo = event.target.elements.codigo.value
        const  compilerService = new CompilerService("JAVA")

        // Código vem de um editor assim: https://codemirror.net/
        console.log('Enviando código... aguarde...')
        $compilerReturn.getDoc().setValue('Enviando código... aguarde...');
        compilerService
            .submit(codigo)
            .then(result => {
                $compilerReturn.getDoc().setValue(result.submissionResult);
            })
            .catch((err) => {
                console.log(err.message)
            })
    })

})(compilers)

});
