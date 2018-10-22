console.log('[execCodeBtn: load]');
    
const $btnsCloseCodeWindow = document.querySelectorAll('.CodeWindow-btnToggle')
const $btnsToggleCodeWindow = document.querySelectorAll('.execCodeBtn')

$btnsCloseCodeWindow.forEach(($btnsClose) => {
    $btnsClose.addEventListener('click', closeCodeWindow)
})

$btnsToggleCodeWindow.forEach(($btnExecAtual) => {
    $btnExecAtual.addEventListener('click', openCodeWindow)
    $btnExecAtual.addEventListener('click', getCodeAndInsertIntoEditor)
}) 

function openCodeWindow() {
    document.querySelector('.CodeWindow').classList.add('CodeWindow--active')
}
function closeCodeWindow() {
    document.querySelector('.CodeWindow').classList.remove('CodeWindow--active')
}

function getCodeAndInsertIntoEditor({ target: $btn }) {
    const $tpl = $btn.nextElementSibling.content.cloneNode(true)
        
    $userEditor.getDoc().setValue($tpl.querySelector('code').innerText)
    $userEditor.refresh();
}

// progressive enhancement
document.querySelectorAll('.CodeWindow, .execCodeBtn')
        .forEach((element) => element.classList.remove('exec-code-no-js'))