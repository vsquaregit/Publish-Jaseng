/**
 * texteditor ckeditor
 */
/*
 $.initTextEditor();

 */
(function ($) {

    $.extend({

        showFileUploaderPopup : function( options ) {

            var onUploaded = Lia.p(options, 'onUploaded');
            var allowedExtensionList = Lia.p(options, 'allowedExtensionList');
            var useRealFilename = Lia.p(options, 'useRealFilename');
            var onUploadedAttachment = Lia.p(options, 'onUploadedAttachment');
            var maxUploadCount = Lia.p(options, 'maxUploadCount');
            var path = Lia.p(options, 'path');

            AjaxPopupManager.show('dext-file_uploader', {
                useRealFilename : useRealFilename,
                allowedExtensionList : allowedExtensionList,
                maxUploadCount : maxUploadCount,
                path : path,
                onUploadedAttachment : onUploadedAttachment,
                onCompleted: function (list) {

                    if (list == null || list.length > 0) {
                        return;
                    }

                    onUploaded(list);
                }

            }, {
                jsFilePath : '/res/lia/popup/file_uploader.js',
                htmlFilePath : '/res/lia/popup/file_uploader.html'
            });


        },


        setFileUploaderOptions: function (options) {

            jQuery.liaFileUploaderOptions = options;
        },

        /**
         * 초기화
         */
        initFileUploader: function (j, option) {

            var selector = '.' + Lia.Component.Name.FILE_UPLOADER;

            if (j == undefined)
                j = $(selector);
            else
                j = j.find(selector);

            return j.initFileUploader(option);
        },

        initFileUploaderList: function (j, option) {

            var selector = '.' + Lia.Component.Name.FILE_UPLOADER_LIST;

            if (j == undefined)
                j = $(selector);
            else
                j = j.find(selector);

            return j.initFileUploaderList(option);
        }


    });

    $.fn.extend({

        initFileUploader: function (options) {

            var newOptions = Lia.deepCopy(jQuery.liaFileUploaderOptions);
            Lia.combine(newOptions, options);

            for (var i = 0, l = this.size(); i < l; i++) {

                var jItem = this.eq(i);
                if (!jItem.hasClass(Lia.Component.Flag.INITED)) {

                    var html = '<div class="cinputbox clearfix">' +
                        '<input readonly class="cinput st-boardwrite" type="text">' +
                        '<div class="cinput-btn cinput-btn-upload">' +
                        '<button>업로드</button>' +
                        '</div>' +
                        '</div>' +
                        '<div class="clearfix"></div>' +
                        '<div class="file_uploader_list">' +
                        '</div>';

                    jItem.append(html);

                    // 파일 리스트 초기화
                    $.initFileUploaderList(jItem);

                    jItem.find('button').on('click', {
                        jItem: jItem
                    }, function (e) {

                        var jItem = e.data.jItem;

                        AjaxPopupManager.show('dext-file_uploader', {

                            onCompleted: function (list) {

                                if (list == null) {
                                    return;
                                }

                                for (var i = 0, l = list.length; i < l; i++) {

                                    var item = list[i];
                                    jItem.fileUploaderAdd(item);

                                }
                            }

                        }, {
                            jsFilePath : '/res/lia/popup/file_uploader.js',
                            htmlFilePath : '/res/lia/popup/file_uploader.html'
                        });

                    });


                    jItem.addClass(Lia.Component.Flag.INITED);
                }
            }


            return this;
        },


        initFileUploaderList: function (options) {


            // 크게 다른것들은 해줄 건 없음
            for (var i = 0, l = this.size(); i < l; i++) {

                var jItem = this.eq(i);
                if (!jItem.hasClass(Lia.Component.Flag.INITED)) {

                    jItem.hide().append('<div class="bw-filelist"></div>');
                    jItem.addClass(Lia.Component.Flag.INITED);
                }
            }


            return this;
        },


        // 파일 추가 연결만 시켜줌
        fileUploaderAdd: function (attachment, unuseDeleteButton) {

            this.find('.' + Lia.Component.Name.FILE_UPLOADER_LIST).fileUploaderListAdd(attachment, unuseDeleteButton);
            return this;

        },


        fileUploaderListAdd: function (attachment, unuseDeleteButton) {

            for (var i = 0, l = this.size(); i < l; i++) {

                var jItem = this.eq(i);
                if (!jItem.hasClass(Lia.Component.Flag.INITED)) {
                    continue;
                }

                var attachmentSize = attachment.size;

                if(attachmentSize < 1024 ) {
                    attachmentSize = attachmentSize + 'B';
                }
                else if(attachmentSize < 1024*1024) {
                    attachmentSize = (attachmentSize/1024).toFixed(1) + 'KB';
                }
                else {
                    attachmentSize = (attachmentSize/1024/1024).toFixed(1) + 'MB';
                }

                var jAttachment = $('<li class="file_item"><span class="ico-file"></span><span class="hover_underline file_name bold">' + attachment.original_filename + '</span>' +
                        '<span class="file_size">['+attachmentSize+']</span>'+
                    (unuseDeleteButton ? '' : ' <button class="delete-uploadfile"><span class="ico-file-delete"></span></button>') +
                    '</li>');
                jAttachment.data('attachment', attachment);
                jAttachment.on('click', function () {

                    var attachment = $(this).data('attachment');
                    var url = attachment['url'];
                    var originalFileName = attachment['original_filename'];

                    Requester.owb(PathHelper.getFileUrl(url, originalFileName));
                });

                jItem.find('.bw-filelist').append(jAttachment);

                jAttachment.find('.delete-uploadfile').on('click', {
                    jUploaderList: jItem
                }, function (e) {

                    $(this).parents('.file_item').remove();

                    var jUploaderList = e.data.jUploaderList;
                    if (jUploaderList.find('.file_item').length == 0) {

                        jUploaderList.hide();
                    }
                });


                jItem.show();
            }

        },


        fileUploaderVal: function (val, unuseDeleteButton) {

            if (val == undefined) {
                return this.find('.' + Lia.Component.Name.FILE_UPLOADER_LIST).fileUploaderListVal();
            }

            this.find('.' + Lia.Component.Name.FILE_UPLOADER_LIST).fileUploaderListVal(val, unuseDeleteButton);
            return this;

        },

        fileUploaderListVal: function (val, unuseDeleteButton) {

            if (val == undefined) {

                if (this.size() < 1) {

                    return undefined;

                } else {

                    var jItem = this.eq(0);
                    if (jItem.hasClass(Lia.Component.Flag.INITED)) {

                        var attachmentList = [];

                        var jFileItem = jItem.find('.file_item');
                        for (var i = 0, l = jFileItem.length; i < l; i++) {

                            var jFileItemEq = jFileItem.eq(i);

                            var attachment = jFileItemEq.data('attachment');

                            attachmentList.push(attachment);
                        }

                        return attachmentList;

                    } else {

                        return undefined;
                    }
                }
            }

            for (var i = 0, l = this.size(); i < l; i++) {

                var jItem = this.eq(i);

                if (jItem.hasClass(Lia.Component.Flag.INITED)) {

                    jItem.find('.file_item').remove();
                    jItem.hide();

                    var attachmentList = val;
                    if (attachmentList != undefined && attachmentList.length > 0) {

                        for (var i2 = 0, l2 = attachmentList.length; i2 < l2; i2++) {

                            var attachment = attachmentList[i2];
                            jItem.fileUploaderListAdd(attachment, unuseDeleteButton);
                        }

                    }

                }
            }

            return this;
        }

    });

})(jQuery);

