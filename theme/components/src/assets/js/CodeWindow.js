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
    lineNumbers: true,
    matchBrackets: true,
    mode: CodeMirrorModes.get(APOSTILA)
});


const $formCodigo = document.querySelector("#formCodigo")
const $btnCodeWindowRun = document.querySelector(".CodeWindow-run")

$formCodigo.addEventListener("submit", (event) => {
    event.preventDefault()
    $btnCodeWindowRun.setAttribute('disabled', 'true')

    const codigo = event.target.elements.codigo.value
    const  compilerService = new CompilerService("JAVA")

    console.log('Enviando código... aguarde...')
    $compilerReturn.getDoc().setValue('Enviando código, aguarde...');
    compilerService
        .submit(codigo)
        .then(result => {
            $compilerReturn.getDoc().setValue(result.submissionResult);
            $btnCodeWindowRun.setAttribute('disabled', 'false')
        })
        .catch((err) => {
            console.log(err.message)
            $compilerReturn.getDoc().setValue('Ops! Ocorreu algum problema durante a submissão');
            $btnCodeWindowRun.setAttribute('disabled', 'false')
        })
})
