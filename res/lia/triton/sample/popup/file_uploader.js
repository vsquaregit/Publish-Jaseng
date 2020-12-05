FILE_UPLOADER_POPUP = undefined;

(function () {

    return {


        checkAndSet: function () {

            var popup = this;

            var jIframe = popup.find('.file_uploader_popup_iframe');
            var obj = jIframe.get(0);
            var objDoc = obj.contentWindow || obj.contentDocument;

            var result = false;
            var value = undefined;
            try {
                result = objDoc.setOnFileUploaded(popup.onFileUploaded);
            } catch (e) {
            }

            if (result == false) {

                window.setTimeout(function () {
                    popup.checkAndSet();
                }, 500);
            }

        },


        onFileUploaded: function (list) {

            if (list == undefined) {
                PopupManager.alert('안내', '파일 전송에 오류가 발생하였습니다.');
                return;
            }

            var popup = FILE_UPLOADER_POPUP;
            popup.hide();

            list = list['newFile'];
            var uploadPathList = Lia.p(list, 'uploadPath');

            var attachmentList = [];
            if (uploadPathList != undefined && uploadPathList.length > 0) {

                for (var i = 0, l = uploadPathList.length; i < l; i++) {

                    var url = Lia.p(list, 'uploadPath', i);

                    attachmentList.push({
                        original_filename: Lia.p(list, 'originalName', i),
                        url: url,
                        size: Lia.p(list, 'size', i)
                    });
                }

            }

            if ( popup.onUploadedAttachment != undefined ) {
                attachmentList = popup.onUploadedAttachment(attachmentList);
            }

            popup.onCompleted(attachmentList);
        },


        onInit: function (jLayout, popupPath, object, jPopupListLayout) {

            var popup = FILE_UPLOADER_POPUP = this;

            var onCompleted = object['onCompleted'];
            popup.onCompleted = onCompleted;

            var allowedExtensionList = object['allowedExtensionList'];
            var maxUploadCount = object['maxUploadCount'];
            var path = object['path'];
            var useRealFilename = object['useRealFilename'];
            var useFolderDivisionByYYYMM = object['useFolderDivisionByYYYMM'];
            var onUploadedAttachment = popup.onUploadedAttachment = object['onUploadedAttachment'];

            var parameterMap = object['parameterMap'];

            popup.find('.alert_popup_close_button').on('click', {}, function (e) {
                popup.hide();
            });


            var height = '300px';

            var iframeMap = {
                height: height
            };

            if ( allowedExtensionList != undefined ) {
                iframeMap['allowedExtensionList'] = allowedExtensionList;
            }

            if (maxUploadCount != undefined) {
                iframeMap['maxUploadCount'] = maxUploadCount;
            }

            if (path != undefined) {
                iframeMap['path'] = path;
            }

            if (useRealFilename != undefined) {
                iframeMap['useRealFilename'] = useRealFilename;
            }

            if (useFolderDivisionByYYYMM != undefined) {
                iframeMap['useFolderDivisionByYYYMM'] = useFolderDivisionByYYYMM;
            }

            for (var key in parameterMap) {
                iframeMap[key] = parameterMap[key];
            }

            if ( String.isBlank( iframeMap['path'] ) ) {
                iframeMap['path'] = '/oiel/board';
            }


            var jIframe = popup.find('.file_uploader_popup_iframe');
            jIframe.attr(
                {
                    'src': '/dext/upload' + Lia.convertArrayToQueryString(iframeMap),
                    frameborder: "0",
                    scrolling: "no",
                    allowfullscreen: 'true',
                    allowTransparency: "true"
                });
            jIframe.css({height: height, 'width': '100%', 'overflow': 'hidden'});

            popup.checkAndSet();
        },
        onShow: function (jLayout, path, parameterMap, jPopupListLayout) {

            var popup = this;
            popup.adjustPopup();
        },
        onHide: function (jLayout, path, parameterMap, jPopupListLayout) {
        }
    };
})();

