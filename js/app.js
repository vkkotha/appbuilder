var abEditorControls = new Vue({
    el: "#ab-editor-controls",
    data: {
        components: [{
            id: 'text',
            name: 'Text',
            grid: {
                width: 4,
                height: 1
            }
        }, {
            id: 'input',
            name: 'Input',
            grid: {
                width: 4,
                height: 1
            }
        }, {
            id: 'table',
            name: 'Table',
            grid: {
                width: 10,
                height: 6
            }
        }]
    }
});