if(APOSTILA === 'java') {
    console.log('[mode - java]')
    require("./java-mode")
}

if(APOSTILA === 'javascript') {
    console.log('[mode - javascript]')
    require("./javascript-mode")
}

const modes = new Map()
modes.set('java', 'text/x-java')
modes.set('javascript', 'text/javascript')

export default modes