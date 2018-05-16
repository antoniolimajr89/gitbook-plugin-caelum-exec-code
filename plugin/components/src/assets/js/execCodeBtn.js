document.addEventListener("DOMContentLoaded", function(event) { 
console.log('[execCodeBtn: load]')

;(function() {
    const $btnsCloseCodeWindow = document.querySelectorAll('.CodeWindow-btnToggle')
    $btnsCloseCodeWindow.forEach(($btnsClose) => {
        $btnsClose.addEventListener('click', toggleCodeWindow)
    })


    const $btnsToggleCodeWindow = document.querySelectorAll('.execCodeBtn')
    $btnsToggleCodeWindow.forEach(($btnExecAtual) => {
        $btnExecAtual.addEventListener('click', toggleCodeWindow)
        $btnExecAtual.addEventListener('click', getCodeAndInsertIntoEditor)
    }) 
    
    function toggleCodeWindow() {
        document.querySelector('.CodeWindow').classList.toggle('CodeWindow--active')
    }

    function getCodeAndInsertIntoEditor({ target: $btn }) {
        const $tpl = $btn.nextElementSibling.content.cloneNode(true)
            
        $userEditor.getDoc().setValue($tpl.querySelector('code').innerText)
    }
})()

})