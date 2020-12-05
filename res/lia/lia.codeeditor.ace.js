/**
 * texteditor ckeditor
 */
/*
 $.initCodeEditor();

 */
(function ($) {

    $.extend({

        liaCodeEditorOptions: {
            'height': '300px'
        },

        liaCodeEditorIdx: 0,

        setCodeEditorOptions: function (options) {

            jQuery.liaCodeEditorOptions = options;
        },

        /**
         * 초기화
         */
        initCodeEditor: function (j, option) {

            var selector = '.' + Lia.Component.Name.CODE_EDITOR;

            if (j == undefined)
                j = $(selector);
            else
                j = j.find(selector);

            return j.initCodeEditor(option);
        }

    });

    $.fn.extend({

        initCodeEditor: function (options) {

            var newOptions = Lia.deepCopy(jQuery.liaCodeEditorOptions);
            Lia.combine(newOptions, options);

            for (var i = 0, l = this.size(); i < l; i++) {

                var jItem = this.eq(i);
                if (!jItem.hasClass(Lia.Component.Flag.INITED)) {

                    var id = jItem.attr('id');
                    if (String.isNullOrWhitespace(id)) {

                        id = Lia.Component.Name.CODE_EDITOR + '_id_' + Lia.getTimestamp() + jQuery.liaCodeEditorIdx++;
                        jItem.attr({
                            'id': id,
                            'src': '/res/lia/embed/aceeditor.html' + Lia.convertArrayToQueryString({
                                height: Lia.p(newOptions, 'height'),
                                mode: Lia.pd('html', newOptions, 'mode')
                            }),
                            frameborder: "0",
                            scrolling: "no",
                            allowfullscreen: 'true',
                            allowTransparency: "true"
                        });

                        jItem.css(newOptions)

                    }

                    jItem.addClass(Lia.Component.Flag.INITED);
                }

            }


            return this;

        },

        codeEditorVal: function (val) {

            if (val == undefined) {

                if (this.size() < 1) {

                    return undefined;

                } else {

                    var jItem = this.eq(0);
                    if (jItem.hasClass(Lia.Component.Flag.INITED)) {

                        var obj = jItem.get(0);
                        var objDoc = obj.contentWindow || obj.contentDocument;

                        var value = undefined;
                        try {
                            value = objDoc.getEditorValue();
                        } catch (e) {
                        }

                        return value;

                    } else {

                        return undefined;
                    }
                }
            }

            for (var i = 0, l = this.size(); i < l; i++) {

                var jItem = this.eq(i);

                if (jItem.hasClass(Lia.Component.Flag.INITED)) {


                    var obj = jItem.get(0);
                    var objDoc = obj.contentWindow || obj.contentDocument;
                    try {
                        return objDoc.setEditorValue(val);
                    } catch (e) {
                        window.setTimeout(function () {
                            jItem.codeEditorVal(val);
                        }, 500);

                    }


                }
            }

            return this;
        }

    });

})(jQuery);


// Triton 객체 재설정
try {

    var CodeEditor = Triton.CodeEditor = function (options) {
        this.init(options);
    };
    Triton.CodeEditor.prototype = new Triton();
    Triton.CodeEditor.prototype.init = function (options) {

        options = Triton.combineOptions(options, {
            theme: Triton.CodeEditor.Theme.Normal
        });

        this.jView = Triton.createJQueryElement(Triton.CodeEditor.HTML);
        Triton.applyOptions(this.jView, options);

        var theme = options['theme'];

        this.value = Lia.p(options, 'value');
        this.codeEditorOptions = Triton.combineOptions(options['codeEditorOptions'], theme['codeEditorOptions']);
        this.jValue = Triton.findTritonValue(this.jView);

        this.initTriton(options);
    };
    Triton.CodeEditor.prototype.initCodeEditor = function () {

        this.jValue.initCodeEditor(this.codeEditorOptions);

        if (this.value != undefined) {
            this.jValue.codeEditorVal(this.value);
        }

        return this;
    };
    Triton.CodeEditor.prototype.setValue = function (value) {
        this.jValue.codeEditorVal(value);
        return this;
    };
    Triton.CodeEditor.prototype.getValue = function () {
        return this.jValue.codeEditorVal();
    };

    Triton.CodeEditor.HTML = '<iframe title="triton code editor" class="triton_code_editor triton_content triton_value"></iframe>';
    Triton.CodeEditor.Theme = {

        Normal: {

            attr: {

                frameborder: "0",
                scrolling: "no",
                allowfullscreen: 'true',
                allowTransparency: "true"
            },

            css: {

                width: '100%',
                'height': '300px',
                'overflow': 'hidden'
            },

            codeEditorOptions: {
                'height': '300px'
            }
        }
    };


    Triton.CodeEditor.create = function (options) {
        return new Triton.CodeEditor(options).getJView();
    };
    Triton.CodeEditor.append = function (j, options) {
        var jView = Triton.CodeEditor.create(options);
        j.append(jView);
        return Triton.findTritonContent(jView);
    };
    Triton.CodeEditor.getValue = function (j) {
        var jValue = Triton.findTritonValue(j);
        return jValue.codeEditorVal();
    };


} catch (e) {
}

