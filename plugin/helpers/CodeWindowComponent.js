const fs = require('fs')
const path = require('path')



module.exports = function($) {
    
    return $(`
<div class="CodeWindow CodeWindow--active">
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

public class Main {

    public static void main(String[] args) {

        System.out.println("Hello, World!");

    }

}
            </textarea>
            <button class="CodeWindow-run">Roda</button>
        </form>
    </div><!--
    --><div class="CodeWindow-block">
        <h4 class="CodeWindow-blockTitle">Resultado</h4>            
        <!-- CodeMirror: Result -->
        <textarea id="compilerReturn"></textarea>
    </div>
</div>
    `)
    
}
