const fs = require('fs')
const path = require('path')



module.exports = function($) {
    console.log('DIRNAME', __dirname)
    return $(`
<div class="CodeWindow exec-code-no-js">
    <nav class="CodeWindow-menu">
        <button class="CodeWindow-btnToggle CodeWindow-btn--black">Fechar</button>
    </nav>
    <div class="CodeWindow-block">
        <h4 class="CodeWindow-blockTitle">Código</h4>
        <!-- CodeMirror: Result -->
        <form id="formCodigo" class="CodeWindow-form">
            <textarea name="codigo" id="userEditor" >
// Seja bem vindo a apostila interativa de Java da Caelum.
// Sempre que encontrar um botão "Executar Código"
// Teste e veja os resultados do trecho :)

class Teste {
    public static void main(String[] args) {
        System.out.println("Minha primeira aplicação Java!");
    }
}
  
            </textarea>
            <button class="CodeWindow-run">Executar</button>
        </form>
    </div><!--
    --><div class="CodeWindow-block">
        <h4 class="CodeWindow-blockTitle">Resultado</h4>            
        <!-- CodeMirror: Result -->
        <textarea id="compilerReturn">
        </textarea>
    </div>
</div>
    `)
    
}
