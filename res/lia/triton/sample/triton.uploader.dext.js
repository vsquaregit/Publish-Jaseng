

var PathHelper = {

    getFileUrl: function (url, destFilename) {

        if (String.isBlank(url)) {
            return undefined;
        }

        if ( url.startsWith('http://') || url.startsWith('https://') ) {
            return url;
        }

        var jLocation = $(location);
        var baseUrl = jLocation.attr('protocol') + '//' + jLocation.attr('host');

        var fileParameterMap = {
            path: url
        };

        if ( String.isNotBlank(destFilename) ) {
            fileParameterMap['destFilename'] = destFilename;
        }

        return baseUrl + '/api/file/get' + Lia.convertArrayToQueryString(fileParameterMap);
    }
};



var Uploader = Triton.Uploader = function (options) {
    this.init(options);
};

Triton.Uploader.fileFormName = 'file';
Triton.Uploader.setFormInputName = function (name) {
    Triton.Uploader.fileFormName = name;
};
Triton.Uploader.uploadHandler = function (uploader, uploadUrl, jForm, parameterMap) {
};
Triton.Uploader.setUploadHandler = function (handler) {
    Triton.Uploader.uploadHandler = handler;
};
Triton.Uploader.uploadUrl = undefined;
Triton.Uploader.setUploadUrl = function (uploadUrl) {
    Triton.Uploader.uploadUrl = uploadUrl;
};

Triton.Uploader.openFileHandler = undefined;
Triton.Uploader.setOpenFileHandler = function (openFileHandler) {
    Triton.Uploader.openFileHandler = openFileHandler;
};

Triton.Uploader.attachmentListGetter = function (uploader) {
};
Triton.Uploader.setAttachmentListGetter = function (attachmentListGetter) {
    Triton.Uploader.attachmentListGetter = attachmentListGetter;
};
Triton.Uploader.attachmentListSetter = function (uploader, attachmentList) {
};
Triton.Uploader.setAttachmentListSetter = function (attachmentListSetter) {
    Triton.Uploader.attachmentListSetter = attachmentListSetter;
};

Triton.Uploader.MessageCode = {
    EXCEEDED_UPLOAD_COUNT: 1
};

Triton.Uploader.messageHandler = function (messageCode, data) {
};
Triton.Uploader.setMessageHandler = function (messageHandler) {
    Triton.Uploader.messageHandler = messageHandler;
};

Triton.Uploader.uploadFilenameHandler = function (item) {
};
Triton.Uploader.setUploadFilenameHandler = function (handler) {
    Triton.Uploader.uploadFilenameHandler = handler;
};


// 호환성을 위해 남겨놓음
Triton.Uploader.maxFileSize = undefined;
Triton.Uploader.setMaxFileSize = function (maxFileSize) {
    Triton.Uploader.maxFileSize = maxFileSize;
};

// 호환성을 위해 남겨놓음
Triton.Uploader.allowedExtensionList = undefined;
Triton.Uploader.setAllowedExtensionList = function ( list ) {
    Triton.Uploader.allowedExtensionList = list;
};

Triton.Uploader.allowedExtensionList = undefined;
Triton.Uploader.setAllowedExtensionList = function ( list ) {
    Triton.Uploader.allowedExtensionList = list;
};

Triton.Uploader.prototype = new Triton();
Triton.Uploader.prototype.init = function (options) {

    var j = Triton.createJQueryElement(Triton.Uploader.HTML);
    j = Triton.applyOptions(j, options);

    var parameterMap = Lia.p(options, 'parameterMap');
    this.parameterMap = parameterMap;

    var messageHandler = Lia.pd(Triton.Uploader.messageHandler, options, 'messageHandler');
    this.messageHandler = messageHandler;

    var uploadHandler = Lia.pd(Triton.Uploader.uploadHandler, options, 'uploadHandler');
    this.uploadHandler = uploadHandler;

    var openFileHandler = Lia.pd(Triton.Uploader.openFileHandler, options, 'openFileHandler');
    this.openFileHandler = openFileHandler;

    var allowedExtensionList = Lia.pd(Triton.Uploader.allowedExtensionList, options, 'allowedExtensionList');
    this.allowedExtensionList = allowedExtensionList;

    var maxUploadCount = Lia.p(options, 'maxUploadCount');
    this.maxUploadCount = maxUploadCount;

    var uploadFilenameHandler = Lia.pd(Triton.Uploader.uploadFilenameHandler, options, 'uploadFilenameHandler');
    this.uploadFilenameHandler = uploadFilenameHandler;

    var attachmentListGetter = Lia.pd(Triton.Uploader.attachmentListGetter, options, 'attachmentListGetter');
    this.attachmentListGetter = attachmentListGetter;

    var attachmentListSetter = Lia.pd(Triton.Uploader.attachmentListSetter, options, 'attachmentListSetter');
    this.attachmentListSetter = attachmentListSetter;

    var onUploadedAttachment = Lia.p(options, 'onUploadedAttachment');
    this.onUploadedAttachment = onUploadedAttachment;

    var useFolderDivisionByYYYMM = Lia.p(options, 'useFolderDivisionByYYYMM');
    this.useFolderDivisionByYYYMM = useFolderDivisionByYYYMM;

    var path = Lia.p(options, 'path');
    this.path = path;

    var useRealFilename = Lia.p(options, 'useRealFilename');
    this.useRealFilename = useRealFilename;

    var readOnly = Lia.pd(false, options, 'readOnly');
    this.readOnly = readOnly;

    if (!readOnly) {

        var jButton = j.find('.triton_uploader_button');
        j.find('.triton_uploader_control').initButton().on(Lia.Component.Event.STATUS_CHANGED, {
            jButton: jButton
        }, function (e) {

            var status = e.status;
            var jButton = e.data.jButton;
            if (status == Lia.Component.Value.Button.Status.DEFAULT) {
                jButton.css({
                    'background-color': TritonTheme.UPLOADER_BACKGROUND_COLOR,
                    'color': TritonTheme.UPLOADER_TEXT_COLOR
                });
            } else {
                jButton.css({
                    'background-color': TritonTheme.UPLOADER_HOVERING_BACKGROUND_COLOR,
                    'color': TritonTheme.UPLOADER_HOVERING_TEXT_COLOR
                });
            }
        }).on('click', {
            uploader: this
        }, function (e) {

            var jInput = $(this);
            var uploader = e.data.uploader;

            var uploadHandler = uploader.uploadHandler;
            var parameterMap = uploader.parameterMap;
            var uploadUrl = uploader.uploadUrl;
            var maxUploadCount = uploader.maxUploadCount;
            var onUploadedAttachment = uploader.onUploadedAttachment;
            var path = uploader.path;
            var useRealFilename = uploader.useRealFilename;
            var useFolderDivisionByYYYMM = uploader.useFolderDivisionByYYYMM;

            if (maxUploadCount != undefined) {

                var fileList = uploader.getFileList();

                if (( maxUploadCount - fileList.length ) <= 0) {
                    uploader.messageHandler(Triton.Uploader.MessageCode.EXCEEDED_UPLOAD_COUNT, {
                        maxUploadCount: maxUploadCount
                    });
                    return;
                }
            }

            AjaxPopupManager.show('dext-file_input_select', {
                allowedExtensionList: uploader.allowedExtensionList,
                parameterMap: uploader.parameterMap,
                onUploadedAttachment : onUploadedAttachment,
                maxUploadCount: maxUploadCount,
                useRealFilename : useRealFilename,
                useFolderDivisionByYYYMM : useFolderDivisionByYYYMM,
                path : path,
                onCompleted: function (list) {

                    if (list != undefined && list.length > 0) {
                        for (var i = 0, l = list.length; i < l; i++) {

                            var item = list[i];
                            uploader.add(item);
                        }
                    }
                }
            }, {
                jsFilePath : '/res/lia/popup/file_input_select.js'
            });

            //AjaxPopupManager.show(PopupUrl.FILE_UPLOADER, {
            //
            //    maxUploadCount : maxUploadCount,
            //    onCompleted : function(list) {
            //
            //        if ( list != undefined && list.length > 0 ) {
            //            for ( var i = 0, l = list.length; i < l; i++ ) {
            //
            //                var item = list[i];
            //                uploader.add(item);
            //            }
            //        }
            //    }
            //});
        });

    } else {

        j.find('.triton_uploader_control').hide();
    }

    this.jView = j;
    this.jFileList = j.find('.triton_uploader_file_list');

    this.initTriton(options);
};
Triton.Uploader.prototype.add = function (item) {

    var filename = this.uploadFilenameHandler(item);

    var jFile = Triton.createJQueryElement(Triton.Uploader.HTML_FILE);
    jFile.data('triton-uploader-file', item);
    var jContent = Triton.findTritonContent(jFile);
    jContent.text(filename);
    jContent.initButton().on(Lia.Component.Event.STATUS_CHANGED, function (e) {

        var jThis = $(this);
        var status = e.status;
        if (status == Lia.Component.Value.Button.Status.DEFAULT) {
            jThis.css({
                'text-decoration': 'none'
            });
        } else {
            jThis.css({
                'text-decoration': 'underline'
            });
        }

    }).on('click', {
        uploader: this,
        item: item
    }, function (e) {

        var uploader = e.data.uploader;
        uploader.openFileHandler(item);
    });


    if (this.readOnly) {

        jFile.find('.triton_uploader_file_delete_button').hide();

    } else {

        jFile.find('.triton_uploader_file_delete_button').on('click', {}, function (e) {

            var jThis = $(this);
            jThis.closest('.triton_uploader_file').remove();
        });
    }

    this.jFileList.append(jFile);
    return this;
};
Triton.Uploader.prototype.addAll = function (itemList) {
    if (itemList != undefined) {
        for (var i = 0, l = itemList.length; i < l; i++) {
            var item = itemList[i];
            this.add(item);
        }
    }

    return this;
};
Triton.Uploader.prototype.clear = function () {
    this.jFileList.empty();
    return this;
};
Triton.Uploader.prototype.setValue = function (itemList) {
    this.clear();

    if (typeof itemList == "string")
        itemList = JSON.parse(itemList);

    this.setAttachmentList(itemList);
    return this;
};
Triton.Uploader.prototype.getValue = function () {

    var attachmentList = this.getAttachmentList();
    if (typeof attachmentList != "string")
        attachmentList = JSON.stringify(attachmentList);

    return attachmentList;
};
Triton.Uploader.prototype.getFileList = function () {
    var j = this.jView;
    var jFileList = j.find('.triton_uploader_file_list').children('.triton_uploader_file');

    var fileList = [];
    for (var i = 0, l = jFileList.length; i < l; i++) {
        fileList.push(jFileList.eq(i).data('triton-uploader-file'));
    }
    return fileList;
};
Triton.Uploader.prototype.getFile = function () {
    var fileList = this.getFileList();
    if (fileList != undefined && fileList.length > 0) {
        return fileList[0];
    }
    return undefined;
};
Triton.Uploader.prototype.getAttachmentList = function () {
    return this.attachmentListGetter(this);
};
Triton.Uploader.prototype.setAttachmentList = function (attachmentList) {
    this.attachmentListSetter(this, attachmentList);
    return this;
};
Triton.Uploader.prototype.getParameterMap = function () {
    return this.parameterMap;
};

Triton.Uploader.NAME = 'triton_uploader';
Triton.Uploader.HTML = '<div class="triton_uploader triton_value" style="position:relative;width:500px;">' +
    '<div class="triton_uploader_control" ' +
    'style="height:30px;line-height:30px;background-color:'+TritonTheme.UPLOADER_BACKGROUND_COLOR+';border:1px solid '+TritonTheme.UPLOADER_BORDER_COLOR+';overflow:hidden;border-top-right-radius:30px;border-bottom-right-radius:30px;">' +
    '<div class="triton_uploader_button" style="position:relative;overflow:auto;border-left:1px solid '+TritonTheme.UPLOADER_BORDER_COLOR+';float:right;height:30px;font-family:notokr-medium, NanumGothicBold;line-height:30px;font-size:13px;color:'+TritonTheme.UPLOADER_TEXT_COLOR+';padding-left:25px;padding-right:25px;">' +
    '<img style="float:left;margin-top:8px;" src="'+TritonTheme.UPLOADER_FILE_ICON_IMAGE_URL+'" /><span style="margin-left:10px;float:left;line-height:30px;">첨부파일</span></>' +
    '</div>' +
    '</div>' +
    '<div class="triton_uploader_file_list"></div>' +
    '</div>';

Triton.Uploader.HTML_FILE = '<div class="triton_uploader_file" style="position:relative;overflow:auto;margin-top:5px;line-height:normal;height:auto;">' +
    '<img style="float:left;margin-top:2px; margin-right: 5px;" src="'+TritonTheme.UPLOADER_FILE_ITEM_ICON_IMAGE_URL+'" />' +
    '<div class="triton_content" style="cursor:pointer;color:'+TritonTheme.UPLOADER_FILE_ITEM_TEXT_COLOR+';font-family: notokr-regular, NanumGothic; font-size:12px; float:left;"></div><img class="triton_uploader_file_delete_button" style="cursor:pointer;padding-top:4px;padding-bottom:4px;padding-right:10px;padding-left:10px;float:left;" src="'+TritonTheme.UPLOADER_FILE_ITEM_DELETE_IMAGE_URL+'" />' +
    '</div>';

// 업로더 기본 설정
{
    Triton.Uploader.initValues = function (type) {
        Triton.Uploader.siteType = type;
    };

    Triton.Uploader.setMessageHandler(function (messageCode, data) {

        if (messageCode == Triton.Uploader.MessageCode.EXCEEDED_UPLOAD_COUNT) {
            var maxUploadCount = data['maxUploadCount'];
            PopupManager.alert('안내', '업로드 파일 갯수는 ' + maxUploadCount + '개를 초과할 수 없습니다.');
            return;
        }
    });

    Triton.Uploader.setOpenFileHandler(function (item) {
        var originalFilename = Lia.p(item, 'original_filename');
        var url = Lia.p(item, 'url');

        Requester.open(PathHelper.getFileUrl(url, originalFilename));
    });


    Triton.Uploader.setUploadFilenameHandler(function (item) {

        var originalFilename = Lia.p(item, 'original_filename');
        if (originalFilename != undefined) {
            return originalFilename;
        }

        var url = Lia.p(item, 'url');
        if (url != undefined)
            return Lia.extractFilename(url);

        return undefined;

    });


    Triton.Uploader.setAttachmentListSetter(function (uploader, attachmentList) {

        if (Triton.Uploader.siteType == Triton.SiteType.Polaris) {
            var list = Lia.p(attachmentList, 'list');
            uploader.addAll(list);
        } else {
            uploader.addAll(attachmentList);
        }

    });

    Triton.Uploader.setAttachmentListGetter(function (uploader) {

        return uploader.getFileList();
    });

    Triton.Uploader.setUploadHandler(function (uploader, uploadUrl, jForm, jInput, parameterMap) {


        var popup = undefined;
        if (Requester.isProgressSupported) {
            popup = AjaxPopupManager.show(Lia.Popup.Progress.NAME, {}, {
                jsFilePath: Lia.Popup.Progress.JS_FILE_PATH,
                htmlFilePath: Lia.Popup.Progress.HTML_FILE_PATH
            });
        } else {
            LoadingPopupManager.show();
        }

        Requester.formUploadWithoutBlank(uploadUrl, parameterMap, jForm, function (status, data, request) {

            var jInput = request.object.jInput;
            jInput.val('');

            if (Requester.isProgressSupported) {
                var popup = request.object.popup;
                popup.hide();

            } else {
                LoadingPopupManager.hide();
            }

            if (status != Requester.Status.SUCCESS) {
                return;
            }

            var list = Lia.p(data, 'body', 'list');
            if (list == undefined || list.length == 0) {
                PopupManager.alert('안내', '업로드 된 파일을 찾을 수 없습니다.');
                return;
            }

            var uploader = request.object.uploader;
            for (var i = 0, l = list.length; i < l; i++) {

                var item = list[i];
                uploader.add(item);
            }

        }, function (data, request) {

            var popup = request.object.popup;
            if (popup != undefined) {

                if (!popup.isInited()) {
                    return;
                }

                var percent = Lia.pd(0, data, 'percentComplete');
                if (popup.setPercent != undefined) {
                    popup.setPercent(percent);
                }
            }

        }, {
            jInput: jInput,
            popup: popup,
            uploader: uploader
        });
    });
}


var ThumbnailUploader = Triton.ThumbnailUploader = function (options) {
    this.init(options);
};

Triton.ThumbnailUploader.fileFormName = 'file';
Triton.ThumbnailUploader.setFormInputName = function (name) {
    Triton.ThumbnailUploader.fileFormName = name;
};
Triton.ThumbnailUploader.uploadHandler = function (ThumbnailUploader, uploadUrl, jForm, parameterMap) {
};
Triton.ThumbnailUploader.setUploadHandler = function (handler) {
    Triton.ThumbnailUploader.uploadHandler = handler;
};
Triton.ThumbnailUploader.uploadUrl = undefined;
Triton.ThumbnailUploader.setUploadUrl = function (uploadUrl) {
    Triton.ThumbnailUploader.uploadUrl = uploadUrl;
};
Triton.ThumbnailUploader.uploadFilePathHandler = function (attachment) {
};
Triton.ThumbnailUploader.setUploadFilePathHandler = function (uploadFilePathHandler) {
    Triton.ThumbnailUploader.uploadFilePathHandler = uploadFilePathHandler;
};
Triton.ThumbnailUploader.uploadFileUrlHandler = function (attachment) {
};
Triton.ThumbnailUploader.setUploadFileUrlHandler = function (uploadFileUrlHandler) {
    Triton.ThumbnailUploader.uploadFileUrlHandler = uploadFileUrlHandler;
};
Triton.ThumbnailUploader.openFileHandler = undefined;
Triton.ThumbnailUploader.setOpenFileHandler = function (openFileHandler) {
    Triton.ThumbnailUploader.openFileHandler = openFileHandler;
};

Triton.ThumbnailUploader.uploadFilenameHandler = undefined;
Triton.ThumbnailUploader.setUploadFilenameHandler = function (openFileHandler) {
    Triton.ThumbnailUploader.uploadFilenameHandler = openFileHandler;
};

// 호환성을 위해 남겨놓음
Triton.ThumbnailUploader.maxFileSize = undefined;
Triton.ThumbnailUploader.setMaxFileSize = function (maxFileSize) {
    Triton.ThumbnailUploader.maxFileSize = maxFileSize;
};

// 호환성을 위해 남겨놓음
Triton.ThumbnailUploader.allowedExtensionList = undefined;
Triton.ThumbnailUploader.setAllowedExtensionList = function ( list ) {
    Triton.ThumbnailUploader.allowedExtensionList = list;
};







Triton.ThumbnailUploader.prototype = new Triton();
Triton.ThumbnailUploader.prototype.init = function (options) {

    var j = Triton.createJQueryElement(Triton.ThumbnailUploader.HTML);
    j = Triton.applyOptions(j, options);

    var defaultFilename = Lia.pd(Triton.ThumbnailUploader.fileFormName, options, 'defaultFilename');
    this.defaultFilename = defaultFilename;

    var fileFormName = Lia.pd(Triton.ThumbnailUploader.fileFormName, options, 'fileFormName');

    var parameterMap = Lia.p(options, 'parameterMap');
    this.parameterMap = parameterMap;

    var uploadUrl = Lia.pd(Triton.ThumbnailUploader.uploadUrl, options, 'uploadUrl');
    this.uploadUrl = uploadUrl;

    var uploadFilePathHandler = Lia.pd(Triton.ThumbnailUploader.uploadFilePathHandler, options, 'uploadFilePathHandler');
    this.uploadFilePathHandler = uploadFilePathHandler;

    var uploadFilenameHandler = Lia.pd(Triton.ThumbnailUploader.uploadFilenameHandler, options, 'uploadFilenameHandler');
    this.uploadFilenameHandler = uploadFilenameHandler;

    var uploadFileUrlHandler = Lia.pd(Triton.ThumbnailUploader.uploadFileUrlHandler, options, 'uploadFileUrlHandler');
    this.uploadFileUrlHandler = uploadFileUrlHandler;

    var uploadHandler = Lia.pd(Triton.ThumbnailUploader.uploadHandler, options, 'uploadHandler');
    this.uploadHandler = uploadHandler;

    var openFileHandler = Lia.pd(Triton.ThumbnailUploader.openFileHandler, options, 'openFileHandler');
    this.openFileHandler = openFileHandler;

    var isMovieUploader = Lia.pd(false, options, 'isMovieUploader');
    this.isMovieUploader = isMovieUploader;

    var jButton = j.find('.triton_thumbnail_uploader_button');
    j.find('.triton_thumbnail_uploader_control').initButton().on(Lia.Component.Event.STATUS_CHANGED, {
        jButton: jButton
    }, function (e) {

        var status = e.status;
        var jButton = e.data.jButton;
        if (status == Lia.Component.Value.Button.Status.DEFAULT) {
            jButton.css({
                'background-color': TritonTheme.UPLOADER_BACKGROUND_COLOR,
                'color': TritonTheme.UPLOADER_TEXT_COLOR
            });
        } else {
            jButton.css({
                'background-color': TritonTheme.UPLOADER_HOVERING_BACKGROUND_COLOR,
                'color': TritonTheme.UPLOADER_HOVERING_TEXT_COLOR
            });
        }
    }).on('click', {
        uploader: this
    }, function (e) {

        var jInput = $(this);
        var uploader = e.data.uploader;

        AjaxPopupManager.show('dext-file_input_select', {

            parameterMap: uploader.parameterMap,
            maxUploadCount: 1,
            onCompleted: function (list) {

                if (list != undefined && list.length > 0) {
                    uploader.setAttachment(list[0]);
                }
            }
        }, {
            jsFilePath : '/res/lia/popup/file_input_select.js'
        });

    });

    this.jFileList = j.find('.triton_thumbnail_uploader_file_list');
    this.path = undefined;
    this.jView = j;

    this.initTriton(options);
};
Triton.ThumbnailUploader.prototype.setAttachment = function (attachment) {

    var path = this.uploadFilePathHandler(attachment);
    var filename = this.uploadFilenameHandler(attachment);

    this.setValue(path, filename);

    this.attachment = attachment;
    return this;
};

Triton.ThumbnailUploader.prototype.getAttachment = function () {
    return this.attachment;
};

Triton.ThumbnailUploader.prototype.clear = function () {
    this.attachment = null;
    this.path = null;

    this.find('.triton_thumbnail_uploader_file').remove();

    this.jFileList.hide();
    return this;
};

Triton.ThumbnailUploader.prototype.setValue = function (path, filename) {

    this.clear();

    if (!String.isBlank(path)) {

        if (String.isBlank(filename)) {

            var defaultFilename = this.defaultFilename;

            if (String.isBlank(defaultFilename)) {
                filename = Lia.extractFilename(path);
            } else {
                filename = defaultFilename + Lia.extractFileExt(path);
            }
        }

        this.path = path;
        this.attachment = {
            original_filename: filename,
            url: path
        };

        var jFile = Triton.createJQueryElement(Triton.ThumbnailUploader.HTML_FILE);
        var jContent = Triton.findTritonContent(jFile);
        jContent.text(filename);
        jContent.initButton().on(Lia.Component.Event.STATUS_CHANGED, function (e) {

            var jThis = $(this);
            var status = e.status;
            if (status == Lia.Component.Value.Button.Status.DEFAULT) {
                jThis.css({
                    'text-decoration': 'none'
                });
            } else {
                jThis.css({
                    'text-decoration': 'underline'
                });
            }

        }).on('click', {
            uploader: this,
            path: path,
            filename: filename
        }, function (e) {

            var path = e.data.path;
            var filename = e.data.filename;
            var uploader = e.data.uploader;
            uploader.openFileHandler(path, filename);
        });
        jFile.find('.triton_thumbnail_uploader_file_delete_button').on('click', {
            thumbnailUploader : this
        }, function (e) {

            var thumbnailUploader = e.data.thumbnailUploader;
            thumbnailUploader.clear();
        });

        this.jFileList.append(jFile);

        //var imageExtList = ['.png', '.jpg', '.jpeg', '.gif', '.bmp' ];
        //
        //var ext = Lia.extractFileExt(path);
        //var isImage = false;
        //for(var i = 0,l = imageExtList.length; i < l; i++ ){
        //    var imageExt = imageExtList[i];
        //    if ( ext == imageExt ) {
        //        isImage = true;
        //    }
        //}
        //
        //var thumbnailUrl = undefined;
        //if ( isImage ) {
        //    thumbnailUrl = this.uploadFileUrlHandler(path);
        //} else {
        //    thumbnailUrl= Triton.ReplaceMap.BASE_PATH + '/img/img_file_icon.png';
        //}
        //
        //this.jThumbnailImg.attr('src', thumbnailUrl);

        this.jFileList.show();
    }

    return this;
};
Triton.ThumbnailUploader.prototype.getValue = function () {
    return this.path;
};

Triton.ThumbnailUploader.NAME = 'triton_thumbnail_uploader';
Triton.ThumbnailUploader.HTML = '<div class="triton_thumbnail_uploader triton_value" style="position:relative;width:580px;">' +
    '<div class="triton_thumbnail_uploader_control" style="background-color:'+TritonTheme.UPLOADER_BACKGROUND_COLOR+';height:30px;line-height:30px;border:1px solid '+TritonTheme.UPLOADER_BORDER_COLOR+';overflow:hidden;border-top-right-radius:30px;border-bottom-right-radius:30px;margin-right:80px;">' +
    '<div class="triton_thumbnail_uploader_button" style="position:relative;overflow:auto;border-left:1px solid '+TritonTheme.UPLOADER_BORDER_COLOR+';float:right;height:30px;font-family:notokr-medium, NanumGothicBold;line-height:30px;font-size:13px;color:'+TritonTheme.UPLOADER_TEXT_COLOR+';padding-left:25px;padding-right:25px;">' +
    '<img style="float:left;margin-top:8px;" src="'+TritonTheme.UPLOADER_FILE_ICON_IMAGE_URL+'" /><span style="margin-left:10px;float:left;line-height:30px;">첨부파일</span></>' +
    '</div>' +
    '</div>' +
    '<div class="triton_thumbnail_uploader_file_list"></div>' +
    '</div>';

Triton.ThumbnailUploader.HTML_FILE = '<div class="triton_thumbnail_uploader_file" style="position:relative;overflow:auto;margin-top:5px;line-height:normal;height:auto;">' +
    '<img style="float:left;margin-top:2px; margin-right: 5px;" src="#{BASE_PATH}/img/img_file.png" />' +
    '<div class="triton_content" style="cursor:pointer;color:#5d5d5d;font-family: notokr-regular, NanumGothic; font-size:12px; float:left;"></div><img class="triton_thumbnail_uploader_file_delete_button" style="cursor:pointer;padding-top:4px;padding-bottom:4px;padding-right:10px;padding-left:10px;float:left;" src="#{BASE_PATH}/img/img_file_delete.png" />' +
    '</div>';




// 업로더 기본 설정
{

    Triton.ThumbnailUploader.initValues = function (type) {
        Triton.ThumbnailUploader.siteType = type;
    };

    Triton.ThumbnailUploader.setOpenFileHandler(function (path, filename) {
        Requester.open(PathHelper.getFileUrl(path, filename));
    });

    Triton.ThumbnailUploader.setUploadFilenameHandler(function (item) {

        var originalFilename = Lia.p(item, 'original_filename');
        if (originalFilename != undefined) {
            return originalFilename;
        }

        var url = Lia.p(item, 'url');
        if (url != undefined)
            return Lia.extractFilename(url);

        return undefined;

    });

    Triton.ThumbnailUploader.setUploadFileUrlHandler(function (path) {
        return PathHelper.getFileUrl(path);
    });

    Triton.ThumbnailUploader.setUploadFilePathHandler(function (attachment) {

        var path = Lia.p(attachment, 'url');
        return path;
    });

    Triton.ThumbnailUploader.setUploadHandler(function (thumbnailUploader, uploadUrl, jForm, jInput, parameterMap) {

        var popup = undefined;
        if (Requester.isProgressSupported) {
            popup = AjaxPopupManager.show(Lia.Popup.Progress.NAME, {}, {
                jsFilePath: Lia.Popup.Progress.JS_FILE_PATH,
                htmlFilePath: Lia.Popup.Progress.HTML_FILE_PATH
            });
        } else {
            LoadingPopupManager.show();
        }

        Requester.formUploadWithoutBlank(uploadUrl, parameterMap, jForm, function (status, data, request) {

            var jInput = request.object.jInput;
            jInput.val('');

            if (Requester.isProgressSupported) {
                var popup = request.object.popup;
                popup.hide();

            } else {
                LoadingPopupManager.hide();
            }

            if (status != Requester.Status.SUCCESS) {
                return;
            }

            var attachment = Lia.p(data, 'body', 'list', 0);
            var path = Lia.p(attachment, 'url');
            if (String.isBlank(path)) {
                PopupManager.alert('안내', '업로드 된 파일을 찾을 수 없습니다.');
                return;
            }

            var thumbnailUploader = request.object.thumbnailUploader;
            console.log(attachment);

            thumbnailUploader.setAttachment(attachment);

        }, function (data, request) {

            var popup = request.object.popup;
            if (popup != undefined) {

                if (!popup.isInited()) {
                    return;
                }

                var percent = Lia.pd(0, data, 'percentComplete');
                if (popup.setPercent != undefined) {
                    popup.setPercent(percent);
                }
            }

        }, {
            jInput: jInput,
            popup: popup,
            thumbnailUploader: thumbnailUploader
        });
    });

}




