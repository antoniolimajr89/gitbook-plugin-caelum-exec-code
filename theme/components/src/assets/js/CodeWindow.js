import CodeMirror from 'codemirror'
import CodeMirrorModes from './libs/codemirror/modes'
import CompilerService from './compilers/sphereEngine/SphereEngineService'

console.log('[CodeWindow: load]')

// Start both CodeMirrors
window.$userEditor = CodeMirror.fromTextArea(document.querySelector('#userEditor'), {
    value: 'package example;',
    lineNumbers: true,
    matchBrackets: true,
    mode: CodeMirrorModes.get(APOSTILA)
});

window.$compilerReturn = CodeMirror.fromTextArea(document.querySelector('#compilerReturn'), {
    value: 'package example;',
    matchBrackets: true,
    lineNumbers: true,
    mode: CodeMirrorModes.get(APOSTILA)
});


const $formCodigo = document.querySelector("#formCodigo")
const $btnCodeWindowRun = document.querySelector(".CodeWindow-run")

$formCodigo.addEventListener("submit", (event) => {
    event.preventDefault()
    $btnCodeWindowRun.setAttribute('disabled', 'true')

    const codigo = event.target.elements.codigo.value
    const compilerService = new CompilerService("JAVA")


    $compilerReturn.getDoc().setValue('Enviando código, aguarde...');
    compilerService
        .submit(codigo)
        .then(result => {
            if(!result) throw new Error()
            if(!result.processCompilerOutput) throw new Error(result.processCompilerError)
            $compilerReturn.getDoc().setValue(result.processCompilerOutput);
            $btnCodeWindowRun.removeAttribute('disabled')
        })
        .catch((err) => {
            const message = err.message || 'Ops! tivemos algum problema com o compilador :('
            $compilerReturn.getDoc().setValue(message);
            $btnCodeWindowRun.removeAttribute('disabled')
        })
})
