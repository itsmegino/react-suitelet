/**
 *@NApiVersion 2.1
 *@NModuleScope public
 */

 var logic_react_lib = {
    getReactIncludes: ()=> {
        return [
            '',
            '<script crossorigin src="https://unpkg.com/react@16/umd/react.development.js"></script>',
            '<script crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script>',
            '<script crossorigin src="https://cdnjs.cloudflare.com/ajax/libs/babel-standalone/6.26.0/babel.min.js"></script>',
            ''
        ].join("\n");


    },
    getComponentScript: function (componentName, tagName, file) {
        switch (componentName) {
            case 'PartFinder':
                    return [
                        '',
                        '<script type="text/babel">',
                        this.PartFinder(file),
                        '   ReactDOM.render(',
                        '       <PartFinder />,',
                        '           document.getElementById("' + tagName + '"));',
                        '</script>',
                        ''
                    ].join("\n");

            break;
        }
    },
    PartFinder: (file)=> {
        let fileObj = file.load({
            id: 'SuiteScripts/logic_react_PartFinder.js'
        });

        return fileObj.getContents();
    }
 }