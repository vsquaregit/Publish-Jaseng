/**
 * texteditor ckeditor
 */
/*
 $.initTextEditor();

 */
(function ($) {

    $.extend({

        liaTextEditorIdx: 0,
        liaTextEditorOptions: {
            'height': '300px',
            'filebrowserUploadUrl': '/api/file/ckEditorUpload',
            'extraAllowedContent': 'span(*);br(*)'
        },

        setTextEditorOptions: function (options) {

            jQuery.liaTextEditorOptions = options;
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
                        if (jQuery.liaTextEditorIdx >= 100000000)
                            jQuery.liaTextEditorIdx = 0;

                        jItem.attr('id', id);

                    }

                    CKEDITOR.replace(id, newOptions);

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

                        var id = jItem.attr('id');
                        return CKEDITOR.instances[id].getData();

                    } else {

                        return undefined;
                    }
                }
            }

            for (var i = 0, l = this.size(); i < l; i++) {

                var jItem = this.eq(i);
                if (jItem.hasClass(Lia.Component.Flag.INITED)) {

                    var id = jItem.attr('id');
                    window.setTimeout(function () {

                        try {
                            CKEDITOR.instances[id].setData(val);
                        } catch (e) {
                            window.setTimeout(function () {
                                jItem.textEditorVal(val);
                            }, 1000);
                        }
                    }, 1000);

                }
            }

            return this;
        }

    });

})(jQuery);