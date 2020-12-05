/**
 * code editor
 */
/*
 $.initTextEditor();

 */
(function ($) {

    $.extend({

        liaTextEditorOptions: {
            'height': '300px'
        },

        liaTextEditorIdx: 0,
        liaTextEditorUrl: '/res/lia/embed/smarteditor.html',

        setTextEditorOptions: function (options) {
            jQuery.liaTextEditorOptions = options;
        },

        setTextEditorUrl: function ( url ) {
            jQuery.liaTextEditorUrl = url;
        },


        /**
         * 초기화
         */
        initTextEditor: function (j, option) {

            var selector = '.' + Lia.Component.Name.TEXT_EDITOR;

            if (j == undefined)
                j = $(selector);
            else
                j = j.find(selector);

            return j.initTextEditor(option);
        }

    });

    $.fn.extend({

        initTextEditor: function (options) {

            var newOptions = Lia.deepCopy(jQuery.liaTextEditorOptions);
            Lia.combine(newOptions, options);

            for (var i = 0, l = this.size(); i < l; i++) {

                var jItem = this.eq(i);
                if (!jItem.hasClass(Lia.Component.Flag.INITED)) {

                    var id = jItem.attr('id');
                    if (String.isNullOrWhitespace(id)) {

                        id = Lia.Component.Name.TEXT_EDITOR + '_id_' + Lia.getTimestamp() + jQuery.liaTextEditorIdx++;
                        jItem.attr({
                            'id': id,
                            'src': jQuery.liaTextEditorUrl + Lia.convertArrayToQueryString({
                                'height': Lia.p(newOptions, 'height'),
                                '_' : Lia.getTimestamp()
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

        textEditorVal: function (val) {

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
                            jItem.textEditorVal(val);
                        }, 500);

                    }


                }
            }

            return this;
        },


        attachTextEditorVal: function (val) {

            for (var i = 0, l = this.size(); i < l; i++) {

                var jItem = this.eq(i);

                if (jItem.hasClass(Lia.Component.Flag.INITED)) {

                    var obj = jItem.get(0);
                    var objDoc = obj.contentWindow || obj.contentDocument;
                    try {
                        console.log(objDoc);
                        console.log(objDoc.attachEditorValue);
                        objDoc.attachEditorValue(val);
                    } catch (e) {
                        // window.setTimeout(function () {
                        //     jItem.attachTextEditorVal(val);
                        // }, 500);

                    }


                }
            }

            return this;
        }


    });

})(jQuery);


// Triton 객체 재설정
try {

    var TextEditor = Triton.TextEditor = function (options) {
        this.init(options);
    };
    Triton.TextEditor.prototype = new Triton();
    Triton.TextEditor.prototype.init = function (options) {

        options = Triton.combineOptions(options, {
            theme: Triton.TextEditor.Theme.Normal
        });

        this.jView = Triton.createJQueryElement(Triton.TextEditor.HTML);
        Triton.applyOptions(this.jView, options);

        var theme = options['theme'];

        this.value = Lia.p(options, 'value');
        this.textEditorOptions = Triton.combineOptions(options['textEditorOptions'], theme['textEditorOptions']);
        this.jValue = Triton.findTritonValue(this.jView);

        this.initTriton(options);
    };
    Triton.TextEditor.prototype.initTextEditor = function () {
        this.jValue.initTextEditor(this.textEditorOptions);

        if (this.value != undefined) {
            this.jValue.textEditorVal(this.value);
        }

        return this;
    };
    Triton.TextEditor.prototype.setValue = function (value) {
        this.jValue.textEditorVal(value);
        return this;
    };
    Triton.TextEditor.prototype.getValue = function () {
        return this.jValue.textEditorVal();
    };

    Triton.TextEditor.prototype.attachValue = function ( value ) {
        return this.jValue.attachTextEditorVal( value );
    };

    Triton.TextEditor.HTML = '<iframe title="triton text editor" class="triton_text_editor triton_content triton_value"></iframe>';
    Triton.TextEditor.Theme = {

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

            textEditorOptions: {
                'height': '300px'
            }
        }
    };


    Triton.TextEditor.create = function (options) {
        return new Triton.TextEditor(options).getJView();
    };
    Triton.TextEditor.append = function (j, options) {
        var jView = Triton.TextEditor.create(options);
        j.append(jView);
        return Triton.findTritonContent(jView);
    };
    Triton.TextEditor.getValue = function (j) {
        var jValue = Triton.findTritonValue(j);
        return jValue.textEditorVal();
    };


} catch (e) {
}

