(function () {

    return {

        cssLoading: false,
        htmlLoading: false,

        count: 10,

        onConstruct: function (jLayout, path, object, jPopupListLayout) {

            var popup = this;
            PopupHelper.appendLayout(popup, {
                title: '첨부 파일 입력 방법 선택'
            });
        },

        onInit: function (jLayout, popupPath, object, jPopupListLayout) {

            var popup = this;
            var jContent = popup.find('.popup_content');

            var onCompleted = Lia.p(object, 'onCompleted');
            var maxUploadCount = Lia.p(object, 'maxUploadCount');
            var parameterMap = Lia.p(object, 'parameterMap');
            var allowedExtensionList = Lia.p(object, 'allowedExtensionList');
            var onUploadedAttachment = object['onUploadedAttachment'];
            var useRealFilename = object['useRealFilename'];
            var path = object['path'];
            var useFolderDivisionByYYYMM = object['useFolderDivisionByYYYMM'];

            new Triton.FlatButton({
                theme: Triton.FlatButton.Theme.Delete,

                appendTo: jContent,
                content: '첨부파일 업로드',
                css: {

                    'display': 'block',
                    'margin': '10px',
                    'width': '200px'
                },

                onClick: function () {

                    popup.hide();

                    AjaxPopupManager.show('dext-file_uploader', {
                        parameterMap: parameterMap,
                        maxUploadCount: maxUploadCount,
                        onCompleted: onCompleted,
                        allowedExtensionList : allowedExtensionList,
                        onUploadedAttachment : onUploadedAttachment,
                        useRealFilename : useRealFilename,
                        useFolderDivisionByYYYMM : useFolderDivisionByYYYMM,
                        path : path
                    }, {
                        jsFilePath : '/res/lia/popup/file_uploader.js',
                        htmlFilePath : '/res/lia/popup/file_uploader.html'
                    });
                }
            });


            new Triton.FlatButton({
                appendTo: jContent,
                content: '직접 URL 입력',
                css: {

                    'display': 'block',
                    'margin': '10px',
                    'width': '200px'
                },
                onClick: function () {

                    popup.hide();

                    AjaxPopupManager.show('dext-file_url_input', {
                        parameterMap: parameterMap,
                        maxUploadCount: maxUploadCount,
                        onCompleted: onCompleted,
                        allowedExtensionList : allowedExtensionList,
                        onUploadedAttachment : onUploadedAttachment
                    },{
                        jsFilePath : '/res/lia/popup/file_url_input.js'
                    });


                }
            });


        },
        onShow: function (jLayout, path, parameterMap, jPopupListLayout, object) {
        },
        onHide: function (jLayout, path, parameterMap, jPopupListLayout) {
        }
    };
})();

