const fs = require('fs');
const { ipcRenderer } = require('electron')
const loader = require('monaco-loader')

loader().then((monaco) => {
    let editor = monaco.editor.create(document.querySelector('#container'), {
        language: 'javascript',
        theme: 'vs-dark',
        automaticLayout: true
    })

    ipcRenderer.on('open-file', (e, url) => {
        fs.readFile(url.slice(7), 'utf-8', (err, data) => {
            editor.setModel(monaco.editor.createModel(data, 'javascript'))
        })
    })
})
