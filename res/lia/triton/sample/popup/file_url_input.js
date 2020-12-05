(function () {

    return {

        cssLoading: false,
        htmlLoading: false,

        count: 10,

        onConstruct: function (jLayout, path, object, jPopupListLayout) {

            var popup = this;
            PopupHelper.appendLayout(popup, {
                title: '파일 URL 입력'
            });
        },

        add: function () {

            var page = this;
            var listSection = page.addListSection;

            var urlTable = new Triton.SeparateTable({
                appendTo: listSection,
                'css': {'margin-bottom': '5px'}
            });

            urlTable.appendRow({});

            var urlSection = new Triton.Section();

            var textInput = urlTable.textInput = new Triton.TextInput({
                addClass: 'url_text_input',
                appendTo: urlSection,
                value: '',
                attr: {'placeholder': 'URL을 입력해 주십시오.'},
                css: {width: '550px'}
            });

            window.setTimeout(function () {
                textInput.focus();
            }, 100);

            urlTable.appendColumn({
                css: {width: '550px'},
                content: urlSection
            });

            urlTable.appendColumn({

                content: new Triton.Image({
                    css: {'margin-top': '9px', 'margin-left': '5px', 'cursor': 'pointer'},
                    attr: {src: '/res/lia/triton/img/img_comment_delete.png'},
                    onClick: function () {

                        PopupManager.alert('안내', '삭제하시겠습니까?', function () {
                            urlTable.remove();

                            if (page.maxUploadCount != undefined) {

                                var length = page.find('.url_text_input').length;
                                if (length < page.maxUploadCount) {
                                    page.textInputListSection.show();
                                }
                            }

                            page.adjust();

                        }, true);

                    }
                })

            });


            if (page.maxUploadCount != undefined) {

                var length = page.find('.url_text_input').length;
                if (length >= page.maxUploadCount) {
                    page.textInputListSection.hide();
                }
            }

            page.adjust();

        },


        onInit: function (jLayout, path, object, jPopupListLayout) {

            var popup = this;
            var jContent = popup.find('.popup_content');

            var onCompleted = Lia.p(object, 'onCompleted');
            var maxUploadCount = popup.maxUploadCount = Lia.p(object, 'maxUploadCount');
            var onUploadedAttachment = popup.onUploadedAttachment = object['onUploadedAttachment'];

            popup.addListSection = new Triton.Section({appendTo: jContent});

            var textInputListSection = popup.textInputListSection = new Triton.Section({appendTo: jContent});

            {
                var urlTable = new Triton.SeparateTable({
                    appendTo: textInputListSection
                });
                urlTable.appendRow({});

                var urlSection = new Triton.Section();

                new Triton.TextInput({
                    appendTo: urlSection,
                    attr: {'placeholder': 'URL을 입력해 주십시오.'},
                    css: {width: '550px'},
                    onFocus: function (e) {

                        e.preventDefault();
                        $(this).blur();
                        popup.add();
                    }
                });

                urlTable.appendColumn({
                    css: {width: '550px'},
                    content: urlSection
                });

                urlTable.appendColumn({

                    content: new Triton.Image({
                        css: {'margin-top': '9px', 'margin-left': '5px'},
                        attr: {src: '/res/lia/triton/img/img_comment_delete.png'}
                    })
                });
            }


            var buttonSection = new Triton.Section({
                appendTo: jContent,
                css: {'margin-top': '10px'}
            });
            buttonSection.append(new Triton.FlatButton({
                theme: Triton.FlatButton.Theme.Normal,
                content: '추가',
                onClick: function (e) {

                    var jInput = popup.find('.url_text_input');
                    var attachmentList = [];

                    var noHttpStarted = false;
                    for (var i = 0, l = jInput.length; i < l; i++) {

                        var jInputEq = jInput.eq(i);

                        var url = jInputEq.val();
                        if (String.isNotBlank(url)) {

                            if (!url.toLowerCase().startsWith('http'))
                                noHttpStarted = true;

                            attachmentList.push({
                                original_filename: url,
                                url: url
                            })
                        }
                    }

                    if (attachmentList.length == 0) {
                        PopupManager.alert('안내', 'URL을 입력 바랍니다.');
                        return;
                    }

                    if (noHttpStarted) {

                        PopupManager.alert('안내', 'URL에 http://가 포함되지 않은 항목이 있습니다.<br/>http://를 추가하여 저장하시겠습니까?', function () {

                            var jInput = popup.find('.url_text_input');
                            var attachmentList = [];

                            for (var i = 0, l = jInput.length; i < l; i++) {

                                var jInputEq = jInput.eq(i);

                                var url = jInputEq.val();
                                if (String.isNotBlank(url)) {

                                    if (!url.toLowerCase().startsWith('http')) {
                                        url = 'http://' + url;
                                    }

                                    attachmentList.push({
                                        original_filename: url,
                                        url: url
                                    })
                                }
                            }

                            if ( popup.onUploadedAttachment != undefined ) {
                                attachmentList = popup.onUploadedAttachment(attachmentList);
                            }

                            onCompleted(attachmentList);
                            popup.hide();

                        }, function () {


                            if ( popup.onUploadedAttachment != undefined ) {
                                attachmentList = popup.onUploadedAttachment(attachmentList);
                            }

                            onCompleted(attachmentList);
                            popup.hide();

                        }, '추가하여 저장', '입력한 대로 저장');

                        return;
                    }

                    if ( popup.onUploadedAttachment != undefined ) {
                        attachmentList = popup.onUploadedAttachment(attachmentList);
                    }

                    onCompleted(attachmentList);
                    popup.hide();
                }
            }));

            buttonSection.append(new Triton.FlatButton({
                css: {'margin-left': '10px'},
                theme: Triton.FlatButton.Theme.Delete,
                content: '취소',
                onClick: function (e) {
                    popup.hide();
                }
            }));

        },
        onShow: function (jLayout, path, parameterMap, jPopupListLayout, object) {
        },
        onHide: function (jLayout, path, parameterMap, jPopupListLayout) {
        }
    };
})();

