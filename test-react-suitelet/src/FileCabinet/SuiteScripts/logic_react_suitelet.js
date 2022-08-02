/**
 *@NApiVersion 2.1
 *@NScriptType Suitelet
 *@NAmdConfig ./ReactLibConfig.json
 */
define(['N/ui/serverWidget', 'N/file', 'react_lib'], function(serverWidget, file, react_lib) {

    function onRequest(context) {
        try {
            if (context.request.method == 'GET') {
                let form = serverWidget.createForm({
                    title: 'React Test Demo'
                });

                let field = form.addField({
                    id: 'custpage_inline',
                    label: 'Inline',
                    type: serverWidget.FieldType.INLINEHTML
                });

                field.defaultValue = react_lib.getReactIncludes() +
                    '<div id="dynHTML" />' +
                    react_lib.getComponentScript('PartFinder', 'dynHTML', file);

                    context.response.writePage(form);
            }
        } catch (e) {
            throw e;
        }
    }

    return {
        onRequest
    }
});
