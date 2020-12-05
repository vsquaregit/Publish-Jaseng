var PopupHelper = Triton.PopupHelper = {


    bindTitleDrag: function (jPopup, jTitle) {

        jTitle.on('mousedown', {
            jPopup: jPopup
        }, function (e) {

            e.preventDefault();

            var jPopup = e.data.jPopup;

            jPopup.data('triton-popup-base-page-x', e.pageX);
            jPopup.data('triton-popup-base-page-y', e.pageY);

            jPopup.data('triton-popup-base-popup-x', parseInt(jPopup.css('left')));
            jPopup.data('triton-popup-base-popup-y', parseInt(jPopup.css('top')));


            jQuery(document).on('mousemove.tritonpopuphelper', {
                jPopup: jPopup
            }, function (e) {

                var jPopup = e.data.jPopup;

                jPopup.css({
                    left: parseInt(jPopup.data('triton-popup-base-popup-x')) - parseInt(jPopup.data('triton-popup-base-page-x')) + e.pageX,
                    top: parseInt(jPopup.data('triton-popup-base-popup-y')) - parseInt(jPopup.data('triton-popup-base-page-y')) + e.pageY
                });

            });

            jQuery(document).on('mouseup.tritonpopuphelper', {
                jPopup: jPopup
            }, function (e) {

                var jPopup = e.data.jPopup;
                jQuery(document).off('mousemove.tritonpopuphelper mouseup.tritonpopuphelper');
            });
        });

    },

    appendLayout: function (popup, options) {

        var closeButtonHidden = Lia.pd(false, options, 'closeButtonHidden');

        var html = '<div class="dim" lia-popup="{next-popup}"></div>' +
            '    <div class="popup" lia-dim="{prev-dim}">' +
            '    <div class="popup_title"><span class="popup_title_text"></span>' +

            (closeButtonHidden ? '' : '    <img src="' + TritonTheme.POPUP_CLOSE_BUTTON_IMAGE_URL + '" class="popup_close_button right" alt="popup close button right"/>') +

            '    </div>' +
            '    <div class="popup_content">' +
            '    </div>' +
            '    </div>';

        popup.append(html);


        var title = Lia.pd('', options, 'title');
        var position = Lia.pd('absolute', options, 'position');

        var jPopup = popup.find('.popup');
        jPopup.attr('lia-position', position);

        var css = Lia.p(options, 'css');
        if (css != undefined) {
            jPopup.css(css);
        }

        popup.find('.popup_title').css({
            'height': '47px',
            'background-color': TritonTheme.POPUP_TITLE_BACKGROUND_COLOR,
            'padding-left': '15px',
            'padding-right': '15px',
            'line-height': '45px',
            'font-family': 'notokr-medium, NanumGothicBold',
            'color': TritonTheme.POPUP_TITLE_TEXT_COLOR
        });

        popup.find('.popup_title_text').html(title);


        popup.find('.popup_close_button').css({
            'margin-top': '16px',
            'cursor': 'pointer'
        });

        popup.find('.popup_content').css({
            'background': TritonTheme.POPUP_BACKGROUND_COLOR,
            'color': TritonTheme.POPUP_TEXT_COLOR,
            'text-align': 'center',
            'font-size': '14px',
            'font-family': 'notokr-medium, NanumGothicBold',
            'padding': '10px'
        });


        if (!closeButtonHidden) {
            popup.find('.popup_close_button').on('click', function (e) {
                popup.hide();
            });
        }

    }
};


var PopupManager = Triton.PopupManager = {

    HTML: '<div class="popup_layout">' +
        '<div class="dim" lia-popup="{next-popup}"></div>' +
        '<div class="alert_popup popup" lia-dim="{prev-dim}" style="background-color:' + TritonTheme.POPUP_BACKGROUND_COLOR + ';color:' + TritonTheme.POPUP_TEXT_COLOR + ';">' +
        '<div class="alert_popup_title" style="background-color:' + TritonTheme.POPUP_TITLE_BACKGROUND_COLOR + ';color:' + TritonTheme.POPUP_TITLE_TEXT_COLOR + ';">' +
        '<span class="alert_popup_title_text"></span>' +
        '<img src="' + TritonTheme.POPUP_CLOSE_BUTTON_IMAGE_URL + '" class="alert_popup_close_button right" alt="alert popup close button right">' +
        '</div>' +
        '<div class="alert_popup_content">' +
        '<p class="alert_popup_message"></p>' +
        '</div>' +
        '<div class="alert_popup_input_div">' +
        '<input class="alert_popup_input" type="text" title="alert popup input"/>' +
        '<div class="alert_popup_input_error_text"></div>' +
        '</div>' +
        '<div class="alert_popup_input_list_div">' +
        '</div>' +
        '<div class="alert_buttons">' +
        '<div class="button alert_confirm_button"></div>' +
        '<span class="alert_popup_button_padding" style="margin-left:5px;margin-right:5px;"></span>' +
        '<div class="button alert_cancel_button"></div>' +
        '</div>' +
        '</div>' +
        '</div>',

    isBindingTitleDrag: false,
    setBindingTitleDrag: function (isBindingTitleDrag) {
        PopupManager.isBindingTitleDrag = isBindingTitleDrag;
    },

    popupLayoutListSelector: '#popup_layout_list',
    setPopupLayoutListSelector: function (popupLayoutListSelector) {
        PopupManager.popupLayoutListSelector = popupLayoutListSelector;
    },

    init: function (options) {
    },

    getTitleByResponse: function (response) {

        var code = Triton.PopupManager.getCodeByResponse(response);
        return Code.getTitle(code);
    },

    getMessageByResponse: function (response, messageAppend) {

        var code = Triton.PopupManager.getCodeByResponse(response);
        var message = Lia.p(response, 'message');
        if (message == undefined) {
            message = Triton.PopupManager.getMessageByCode(code);
        }

        if (String.isNotBlank(messageAppend)) {
            if (String.isBlank(message))
                message = '';

            message += messageAppend;
        }

        var cellNumber = Lia.p(response, 'body', 'cell_number');
        var rowNumber = Lia.p(response, 'body', 'row_number');
        var description = Lia.p(response, 'body', 'description');

        var info = '';

        if (rowNumber != undefined) {

            if (String.isNotBlank(info))
                info += ', ';

            info += '행 : ' + (rowNumber + 1) + '';
        }
        if (cellNumber != undefined) {

            if (String.isNotBlank(info))
                info += ', ';

            info += '열 : ' + (cellNumber + 1) + '';
        }

        var m = '';
        if (String.isNotBlank(info))
            m += info;

        if (String.isNotBlank(description)) {

            if (String.isNotBlank(m)) {
                m += '<br/>';
            }

            m += description;
        }

        if (String.isNotBlank(message)) {

            if (String.isNotBlank(m)) {
                m += '<br/>';
            }

            m += message;
        }

        return m;
    },

    getCodeByResponse: function (response) {

        if (Code.getCodeByResponse == undefined) {

            var code = Lia.p(response, 'code');
            if (code == undefined) {
                code = response;
            }
            return code;
        }

        return Code.getCodeByResponse(response);
    },

    getTitleByCode: function (code) {
        return Code.getTitle(code);
    },

    getMessageByCode: function (code) {
        return Code.getMessage(code);
    },

    alertByResponse: function (response, confirm, cancel, messageAppend) {

        var m = PopupManager.getMessageByResponse(response, messageAppend);
        var title = PopupManager.getTitleByResponse(response);

        Triton.PopupManager.show({
            title: title,
            message: m,
            confirm: confirm,
            cancel: cancel
        });
    },

    alert: function (title, message, confirm, cancel, confirmText, cancelText, object) {

        Triton.PopupManager.show({
            title: title,
            message: message,
            confirm: confirm,
            cancel: cancel,
            confirmText: confirmText,
            cancelText: cancelText,
            input: false,
            object: object
        });

    },

    alertWithCaution: function (title, message, caution, confirm, cancel, object) {

        message = message + '<br /><br /><p style="font-weight: bold;"><span style="color: #ff0000;">※ 주의 : ' + caution + '</span></p>';
        var confirmText = '주의 사항을 확인하였고, 계속하겠습니다.';
        var cancelText = '아니오, 진행하지 않겠습니다.';

        Triton.PopupManager.show({
            title: title,
            message: message,
            confirm: confirm,
            cancel: cancel,
            confirmText: confirmText,
            cancelText: cancelText,
            input: false,
            object: object,
        });
    },

    alertMessage: function (message, confirm, cancel, confirmText, cancelText, object) {

        Triton.PopupManager.show({
            message: message,
            confirm: confirm,
            cancel: cancel,
            confirmText: confirmText,
            cancelText: cancelText,
            input: false,
            object: object
        });

    },


    alertInput: function (title, message, confirm, cancel, confirmText, cancelText, inputText, object) {

        Triton.PopupManager.show({
            title: title,
            message: message,
            confirm: confirm,
            cancel: cancel,
            confirmText: confirmText,
            cancelText: cancelText,
            input: true,
            inputText: inputText,
            object: object
        });
    },

    alertInputList: function (title, message, confirm, cancel, confirmText, cancelText, inputList, object) {

        Triton.PopupManager.show({
            title: title,
            message: message,
            confirm: confirm,
            cancel: cancel,
            confirmText: confirmText,
            cancelText: cancelText,
            inputList: inputList,
            object: object
        });
    },

    show: function (options) {

        var jPopupLayoutList = $(Triton.PopupManager.popupLayoutListSelector);

        var jPopupLayout = $(PopupManager.HTML);

        jPopupLayout.find('.button').initButton();

        $.initDim(jPopupLayout);
        $.initPopup(jPopupLayout).on('lia:hide', {
            jPopupLayout: jPopupLayout
        }, function (e) {

            var object = e.data;
            var jPopupLayout = object.jPopupLayout;
            jPopupLayout.remove();
        });

        var jPopup = jPopupLayout.find('.popup');
        var jTitle = jPopup.find('.alert_popup_title');
        var jTitleText = jPopup.find('.alert_popup_title_text');
        var jMessage = jPopup.find('.alert_popup_message');
        var jConfirm = jPopup.find('.alert_confirm_button');
        var jCancel = jPopup.find('.alert_cancel_button');
        var jPadding = jPopup.find('.alert_popup_button_padding');
        var jInput = jPopup.find('.alert_popup_input_div');
        var jInputList = jPopup.find('.alert_popup_input_list_div');

        jPopupLayout.find('.alert_popup_close_button').on('click', {
            jPopup: jPopup
        }, function (e) {
            var jPopup = e.data.jPopup;
            jPopup.hidePopup();
        });

        jPopupLayoutList.append(jPopupLayout);

        jTitleText.html(options['title']);
        jMessage.html(options['message']);

        var confirmFunction = options['confirm'];
        if (confirmFunction == false) {
            jConfirm.hide();
        }

        var cancelFunction = options['cancel'];
        if (cancelFunction == undefined) {
            jCancel.hide();
        }

        var confirmText = options['confirmText'];
        if (confirmText == undefined) {
            confirmText = Lia.Strings.getString(Lia.Strings.POPUP.BUTTON.OK);
        }

        var cancelText = options['cancelText'];
        if (cancelText == undefined) {
            cancelText = Lia.Strings.getString(Lia.Strings.POPUP.BUTTON.CANCEL);
        }

        var inputBox = options['input'];
        if (inputBox) {
            jInput.show();
        }

        var inputText = options['inputText'];
        if (String.isNotBlank(inputText)) {
            jInput.find('input').val(inputText);
        }

        var inputList = options['inputList'];
        if (inputList != undefined && inputList.length > 0) {

            jInputList.show();

            for (var i = 0, l = inputList.length; i < l; i++) {

                var item = inputList[i];

                var addClass = item['addClass'];
                var placeholder = item['placeholder'];
                var type = Lia.pd('text', item['type']);

                var jItem = $('<div>' +
                    '<input title="alert popup input" class="alert_popup_input ' + addClass + '" type="' + type + '" placeholder="' + placeholder + '" />' +
                    '</div>');

                jInputList.append(jItem);
            }
        }

        var object = options['object'];
        if (confirmFunction != false) {

            jConfirm.css({
                'background-color': TritonTheme.POPUP_CONFIRM_BUTTON_BACKGROUND_COLOR,
                'color': TritonTheme.POPUP_CONFIRM_BUTTON_TEXT_COLOR,
                'border-color': TritonTheme.POPUP_CONFIRM_BUTTON_BORDER_COLOR
            }).text(confirmText).show().off('click').on('click', {
                confirmFunction: confirmFunction,
                object: object,
                jPopup: jPopup
            }, function (e) {
                var data = e.data;
                var confirmFunction = data['confirmFunction'];
                var object = data['object'];
                var jPopup = data['jPopup'];

                var hidePopup = true;
                if (typeof confirmFunction == 'function') {
                    hidePopup = confirmFunction.call(jPopup.get(0), object);
                    if (hidePopup == undefined) {
                        hidePopup = true;
                    }
                }

                if (hidePopup == true) {
                    jPopup.hidePopup();
                }
            }).on(Lia.Component.Event.STATUS_CHANGED, function (e) {

                var status = e.status;
                var jThis = $(this);
                if (status == Lia.Component.Value.Button.Status.DEFAULT) {

                    jThis.css({
                        'background-color': TritonTheme.POPUP_CONFIRM_BUTTON_BACKGROUND_COLOR,
                        'color': TritonTheme.POPUP_CONFIRM_BUTTON_TEXT_COLOR,
                        'border-color': TritonTheme.POPUP_CONFIRM_BUTTON_BORDER_COLOR
                    });

                } else {

                    jThis.css({
                        'background-color': TritonTheme.POPUP_CONFIRM_BUTTON_HOVERING_BACKGROUND_COLOR,
                        'color': TritonTheme.POPUP_CONFIRM_BUTTON_HOVERING_TEXT_COLOR,
                        'border-color': TritonTheme.POPUP_CONFIRM_BUTTON_HOVERING_BORDER_COLOR
                    });
                }
            });
        }

        if (cancelFunction != undefined && cancelFunction != false) {
            jCancel.css({
                'background-color': TritonTheme.POPUP_CANCEL_BUTTON_BACKGROUND_COLOR,
                'color': TritonTheme.POPUP_CANCEL_BUTTON_TEXT_COLOR,
                'border-color': TritonTheme.POPUP_CANCEL_BUTTON_BORDER_COLOR
            }).text(cancelText).show().off('click').on('click', {
                cancelFunction: cancelFunction,
                object: object,
                jPopup: jPopup
            }, function (e) {
                var data = e.data;
                var cancelFunction = data['cancelFunction'];
                var object = data['object'];
                var jPopup = data['jPopup'];

                var hidePopup = true;
                if (typeof cancelFunction == 'function') {
                    hidePopup = cancelFunction.call(jPopup.get(0), object);
                    if (hidePopup == undefined) {
                        hidePopup = true;
                    }
                }

                if (hidePopup == true) {
                    jPopup.hidePopup();
                }
            }).on(Lia.Component.Event.STATUS_CHANGED, function (e) {

                var status = e.status;
                var jThis = $(this);
                if (status == Lia.Component.Value.Button.Status.DEFAULT) {

                    jThis.css({
                        'background-color': TritonTheme.POPUP_CANCEL_BUTTON_BACKGROUND_COLOR,
                        'color': TritonTheme.POPUP_CANCEL_BUTTON_TEXT_COLOR,
                        'border-color': TritonTheme.POPUP_CANCEL_BUTTON_BORDER_COLOR
                    });

                } else {

                    jThis.css({
                        'background-color': TritonTheme.POPUP_CANCEL_BUTTON_HOVERING_BACKGROUND_COLOR,
                        'color': TritonTheme.POPUP_CANCEL_BUTTON_HOVERING_TEXT_COLOR,
                        'border-color': TritonTheme.POPUP_CANCEL_BUTTON_HOVERING_BORDER_COLOR
                    });
                }
            });
        }

        if (confirmFunction == null || cancelFunction == null)
            jPadding.hide();
        else
            jPadding.show();


        if (PopupManager.isBindingTitleDrag == true)
            PopupHelper.bindTitleDrag(jPopup, jTitle);

        jPopup.showPopup();
    },

    hide: function () {

        $.hidePopup();
    }
};

Triton.PopupManager.a = Triton.PopupManager.alert;
Triton.PopupManager.am = Triton.PopupManager.alertMessage;


var LoadingPopupManager = Triton.LoadingPopupManager = {

    init: function () {

        $.initDim();
        $.initPopup();
        $.initPopupLoading();
    },

    show: function () {
        $.showPopupLoading();
    },

    hide: function () {
        $.hidePopupLoading();
    },

    clear: function () {
        $.clearAndHidePopupLoading();
    }

};


var SideMenu = Triton.SideMenu = {

    HTML_SIDE_MENU_BUTTON: '<div class="side_menu_button">' +
        '<img class="side_menu_button_logo" alt="side menu button logo"/>' +
        '<p class="side_menu_button_text"></p>' +
        '</div>',

    HTML_SUB_SIDE_MENU_BUTTON: '<div class="sub_side_menu_button">' +
        '<span class="sub_side_menu_button_dot">·</span><span class="sub_side_menu_button_text"></span>' +
        '</div>',

    SIDE_MENU_HOVER_COLOR: '#848484',
    SIDE_MENU_PRESSED_COLOR: '#00a3b4',
    SIDE_MENU_TEXT_NORMAL_COLOR: '#6a6a6a',
    SIDE_MENU_BORDER_NORMAL_COLOR: '#2a2a2a',

    sideMenuHoverColor: undefined,
    sideMenuPressedColor: undefined,
    sideMenuTextNormalColor: undefined,
    sideMenuBorderNormalColor: undefined,

    sideMenuButtonCount: 0,
    sideMenuButtonMarginTop: 82,
    sideMenuButtonBaseHeight: 65,
    showBig: true,

    jSideMenuButtons: undefined,
    jSubSideMenuButtons: undefined,

    parameterMap: undefined,

    menuShowChecker: function (menu, depth) {
        return true;
    },

    setMenuShowChecker: function (checker) {

        SideMenu.menuShowChecker = checker;
    },

    init: function (options) {

        SideMenu.sideMenuHoverColor = Lia.pd(SideMenu.SIDE_MENU_HOVER_COLOR, options, 'hoverColor');
        SideMenu.sideMenuPressedColor = Lia.pd(SideMenu.SIDE_MENU_PRESSED_COLOR, options, 'pressedColor');
        SideMenu.sideMenuTextNormalColor = Lia.pd(SideMenu.SIDE_MENU_TEXT_NORMAL_COLOR, options, 'textNormalColor');
        SideMenu.sideMenuBorderNormalColor = Lia.pd(SideMenu.SIDE_MENU_BORDER_NORMAL_COLOR, options, 'borderNormalColor');

        SideMenu.jSideMenuButtons = jQuery('#sub_menu_buttons');
        SideMenu.jSubSideMenuButtons = jQuery('#sub_side_menu_buttons');
        SideMenu.jSubSideMenuButtons.mouseleave(function () {
            $(this).data('sub-index', -1).removeClass('showing');
        });
    },

    add: function (options) {

        var menu = options['menu'];
        var menuParameterMap = options['menuParameterMap'];
        var subMenuList = options['subMenuList'];

        var logoImageUrl = options['logoImageUrl'];
        var pressedLogoImageUrl = options['pressedLogoImageUrl'];
        var text = options['text'];
        var hide = options['hide'];
        var markPrefixList = options['markPrefixList'];

        if (SideMenu.menuShowChecker(menu, 0, options) != true || hide == true) {
            return;
        }

        var jButton = jQuery(SideMenu.HTML_SIDE_MENU_BUTTON);
        jButton.css({
            'border-left': '2px solid ' + SideMenu.sideMenuBorderNormalColor,
            'padding-right': '0px',
            'color': SideMenu.sideMenuTextNormalColor
        });

        jButton.data('menu', menu);
        jButton.data('menu-parameter-map', menuParameterMap);
        jButton.data('sub-menu-list', subMenuList);

        if (String.isNotBlank(logoImageUrl)) {
            jButton.find('.side_menu_button_logo').attr('src', logoImageUrl);
        } else {
            jButton.find('.side_menu_button_logo').hide();
        }

        jButton.find('.side_menu_button_text').html(text);

        if (subMenuList != undefined && subMenuList.length > 0) {

            if (markPrefixList == undefined)
                markPrefixList = [];

            for (var i = 0, l = subMenuList.length; i < l; i++) {
                var subMenuItem = subMenuList[i];

                var path = '';
                var subMenu = subMenuItem['menu'];
                for (var j = 0, jl = subMenu.length; j < jl; j++) {

                    var menuName = subMenu[j];
                    if (String.isNotBlank(path)) {
                        path += '/';
                    }

                    path += menuName;
                }

                markPrefixList.push(path);
            }
        }
        jButton.data('mark-prefix-list', markPrefixList);

        jButton.data('logoImageUrl', logoImageUrl);
        jButton.data('pressedLogoImageUrl', pressedLogoImageUrl);

        SideMenu.jSideMenuButtons.append(jButton);
        jButton.mouseenter(function () {

            var jThis = $(this).addClass('hovering');
            if (!jThis.hasClass('pressed')) {

                // 눌러진 상태 아닐때
                jThis.css({
                    'border-left': '4px solid ' + SideMenu.sideMenuHoverColor,
                    'padding-right': '2px',
                    'color': SideMenu.sideMenuHoverColor
                });
            }

            var currentSubIndex = jThis.index();

            var showing = SideMenu.jSubSideMenuButtons.hasClass('showing');

            var subMenuList = jThis.data('sub-menu-list');
            if (subMenuList == undefined) {
                // 없는경우 닫음
                if (showing)
                    SideMenu.jSubSideMenuButtons.removeClass('showing');
            } else {

                var beforeSubIndex = SideMenu.jSubSideMenuButtons.data('sub-index');
                if (beforeSubIndex != currentSubIndex) {

                    // 다른 상태에서만 다시 그려주어야 함
                    var subMenuTop = jThis.position().top;
                    SideMenu.jSubSideMenuButtons.empty().css({'padding-top': subMenuTop + 'px'});

                    for (var i = 0, l = subMenuList.length; i < l; i++) {

                        var subMenuItem = subMenuList[i];

                        var menu = subMenuItem['menu'];
                        var menuParameterMap = subMenuItem['menuParameterMap'];
                        var hide = subMenuItem['hide'];
                        var text = subMenuItem['text'];
                        var markPrefixList = subMenuItem['markPrefixList'];

                        if (SideMenu.menuShowChecker(menu, 1, subMenuItem) != true || hide == true) {
                            continue;
                        }

                        var jSubButton = jQuery(SideMenu.HTML_SUB_SIDE_MENU_BUTTON);
                        jSubButton.css({
                            'color': SideMenu.sideMenuTextNormalColor
                        });

                        jSubButton.data('mark-prefix-list', markPrefixList).data('jButton', jButton).data('menu', menu).data('menu-parameter-map', menuParameterMap).find('.sub_side_menu_button_text').html(text);
                        SideMenu.jSubSideMenuButtons.append(jSubButton);

                        SideMenu.markSubButton(jSubButton, SideMenu.parameterMap);
                        jSubButton.mouseenter(function () {

                            var jThis = $(this).addClass('hovering');
                            if (jThis.hasClass('pressed')) {
                                return;
                            }

                            jThis.css({
                                'color': SideMenu.sideMenuHoverColor
                            });

                        }).mouseleave(function () {

                            var jThis = $(this).removeClass('hovering');
                            if (jThis.hasClass('pressed')) {
                                return;
                            }

                            jThis.css({
                                'color': SideMenu.sideMenuTextNormalColor
                            });

                        }).click(function () {

                            var jThis = $(this);
                            SideMenu.jSubSideMenuButtons.mouseleave();
                            var menu = jThis.data('menu');
                            var menuParameterMap = jThis.data('menu-parameter-map');
                            jQuery.PageManager.go(menu, menuParameterMap);
                        });
                    }

                    if (!showing)
                        SideMenu.jSubSideMenuButtons.addClass('showing');
                }
            }

            SideMenu.jSubSideMenuButtons.data('sub-index', currentSubIndex);

        }).mouseleave(function () {

            var jThis = $(this).removeClass('hovering');
            if (jThis.hasClass('pressed')) {
                return;
            }

            jThis.css({
                'border-left': '2px solid ' + SideMenu.sideMenuBorderNormalColor,
                'padding-right': '0px',
                'color': SideMenu.sideMenuTextNormalColor
            });
        }).click(function () {

            var jThis = $(this);
            var subMenuList = jThis.data('sub-menu-list');
            if (subMenuList == undefined) {
                var menu = jThis.data('menu');
                var menuParameterMap = jThis.data('menu-parameter-map');
                jQuery.PageManager.go(menu, menuParameterMap);
            }
        });

        SideMenu.sideMenuButtonCount++;
    },

    resize: function () {

        var jWindow = jQuery(window);
        var windowHeight = jWindow.height();

        // true이면 큰 메뉴로 보여 줌
        var willBig = SideMenu.sideMenuButtonMarginTop + SideMenu.sideMenuButtonCount * SideMenu.sideMenuButtonBaseHeight < windowHeight;


        if (SideMenu.showBig == true && willBig == false) {

            // 작은 메뉴
            //SideMenu.jSideMenuButtons.find('.side_menu_button p').css('margin-top', '2.5px');
            //SideMenu.jSideMenuButtons.find('.side_menu_button p').css('margin-bottom', '2.5px');
            //SideMenu.jSideMenuButtons.find('.side_menu_button p').css('font-size', '13px');
            //SideMenu.jSideMenuButtons.find('.side_menu_button_logo').hide();

            SideMenu.jSideMenuButtons.find('.side_menu_button_logo').hide();

        } else if (SideMenu.showBig == false && willBig == true) {

            // 큰 메뉴
            SideMenu.jSideMenuButtons.find('.side_menu_button_logo').each(function () {

                var jThis = $(this);
                var src = jThis.attr('src');

                if (String.isNotBlank(src)) {
                    jThis.show();
                }
            });

        }

        SideMenu.showBig = willBig;
    },

    mark: function (parameterMap) {

        var jButtons = SideMenu.jSideMenuButtons.find('.side_menu_button');
        for (var i = 0, l = jButtons.length; i < l; i++) {
            var jButton = jButtons.eq(i);

            var menu = jButton.data('menu');

            var markPrefixList = jButton.data('mark-prefix-list');
            var pressed = jButton.hasClass('pressed');

            if (menu != undefined) {

                var path = '';
                for (var j = 0, jl = menu.length; j < jl; j++) {

                    var menuName = jQuery.PageManager.getMenuParameter(j, parameterMap);
                    if (String.isNotBlank(path)) {
                        path += '/';
                    }

                    path += menuName;
                }

                var contain;
                if (markPrefixList != undefined) {

                    contain = false;
                    for (var k = 0, kl = markPrefixList.length; k < kl; k++) {

                        var prefix = markPrefixList[k];
                        if (path.startsWith(prefix)) {
                            contain = true;
                            break;
                        }
                    }

                } else {

                    contain = true;
                    for (var j = 0, jl = menu.length; j < jl; j++) {

                        var menuName = jQuery.PageManager.getMenuParameter(j, parameterMap);
                        if (!(menuName == menu[j] || menuName.startsWith(menu[j] + '/'))) {
                            contain = false;
                            break;
                        }
                    }
                }

                if (pressed != contain) {

                    // 현재 상태가 다른 경우
                    if (contain) {

                        jButton.css({
                            'border-left': '4px solid ' + SideMenu.sideMenuPressedColor,
                            'padding-right': '2px',
                            'color': SideMenu.sideMenuPressedColor
                        });

                        var logoImageUrl = jButton.data('logoImageUrl');
                        var pressedLogoImageUrl = jButton.data('pressedLogoImageUrl');

                        if (String.isNotBlank(pressedLogoImageUrl)) {
                            jButton.find('.side_menu_button_logo').attr('src', pressedLogoImageUrl);
                        }

                        jButton.addClass('pressed');

                    } else {

                        // 마우스 위로 올라간 상태에서 빠지는 케이스
                        if (jButton.hasClass('hovering')) {

                            jButton.css({
                                'border-left': '4px solid ' + SideMenu.sideMenuHoverColor,
                                'padding-right': '2px',
                                'color': SideMenu.sideMenuHoverColor
                            });

                        } else {

                            jButton.css({
                                'border-left': '2px solid ' + SideMenu.sideMenuBorderNormalColor,
                                'padding-right': '0px',
                                'color': SideMenu.sideMenuTextNormalColor
                            });

                        }

                        var logoImageUrl = jButton.data('logoImageUrl');
                        var pressedLogoImageUrl = jButton.data('pressedLogoImageUrl');

                        if (String.isNotBlank(logoImageUrl)) {
                            jButton.find('.side_menu_button_logo').attr('src', logoImageUrl);
                        }

                        jButton.removeClass('pressed');
                    }

                }
            }
        }

        var jSubButtons = SideMenu.jSubSideMenuButtons.find('.sub_side_menu_button');
        for (var i = 0, l = jSubButtons.length; i < l; i++) {
            var jSubButton = jSubButtons.eq(i);
            SideMenu.markSubButton(jSubButton, parameterMap);
        }

        SideMenu.parameterMap = parameterMap;

    },

    markSubButton: function (jSubButton, parameterMap) {

        if (parameterMap == undefined)
            return;

        var menu = jSubButton.data('menu');
        var pressed = jSubButton.hasClass('pressed');
        var markPrefixList = jSubButton.data('mark-prefix-list');

        if (menu != undefined) {

            var path = '';
            for (var j = 0, jl = menu.length; j < jl; j++) {

                var menuName = jQuery.PageManager.getMenuParameter(j, parameterMap);
                if (String.isNotBlank(path)) {
                    path += '/';
                }

                path += menuName;
            }

            var contain = true;
            for (var j = 0, jl = jQuery.PageManager.getDepth(); j <= jl; j++) {

                var menuName = jQuery.PageManager.getMenuParameter(j, parameterMap);
                if (!(menuName == menu[j] || menuName.startsWith(menu[j] + '/'))) {
                    contain = false;
                    break;
                }
            }

            if (contain == false && markPrefixList != undefined) {

                contain = false;
                for (var k = 0, kl = markPrefixList.length; k < kl; k++) {
                    var prefix = markPrefixList[k];
                    if (path.startsWith(prefix)) {
                        contain = true;
                        break;
                    }
                }
            }

            if (pressed != contain) {

                // 현재 상태가 다른 경우
                if (contain) {

                    jSubButton.css({
                        'color': SideMenu.sideMenuPressedColor
                    });

                    jSubButton.addClass('pressed');

                } else {


                    // 마우스 위로 올라간 상태에서 빠지는 케이스
                    if (jSubButton.hasClass('hovering')) {

                        jSubButton.css({
                            'color': SideMenu.sideMenuHoverColor
                        });

                    } else {

                        jSubButton.css({
                            'color': SideMenu.sideMenuTextNormalColor
                        });

                    }

                    jSubButton.removeClass('pressed');
                }

            }
        }
    }
};


var MiniMenu = Triton.MiniMenu = {

    HTML_MENU_BUTTON: '<div class="mini_menu_button">· <span class="mini_menu_button_text"></span></div>',
    jMiniMenuButtons: undefined,
    parameterHandler: undefined,
    setParameterHandler: function (handler) {
        MiniMenu.parameterHandler = handler;
    },

    menuShowChecker: function () {
        return true;
    },

    setMenuShowChecker: function (checker) {

        MiniMenu.menuShowChecker = checker;
    },

    init: function () {

        MiniMenu.jMiniMenuButtons = jQuery('#mini_menu_buttons');
    },

    add: function (options) {

        var menu = options['menu'];
        var text = options['text'];
        var hide = options['hide'];
        var onClick = options['onClick'];

        if (MiniMenu.menuShowChecker(menu) != true || hide == true) {
            return;
        }

        var jMiniMenuButtons = MiniMenu.jMiniMenuButtons;

        var jMenu = jQuery(MiniMenu.HTML_MENU_BUTTON);
        jMenu.find('.mini_menu_button_text').text(text);

        if (menu) {
            jMenu.on('click', {
                menu: menu
            }, function (e) {

                var menu = e.data.menu;

                var parameterMap = undefined;
                if (MiniMenu.parameterHandler != undefined) {
                    parameterMap = MiniMenu.parameterHandler();
                }

                jQuery.PageManager.go(menu, parameterMap);
            });

            jMenu.data('menu', menu);
        } else if (onClick) {
            jMenu.on('click', {}, function (e) {
                onClick();
            });
        }

        jMiniMenuButtons.append(jMenu);
    },

    mark: function (parameterMap) {

        var jMiniMenuButtons = MiniMenu.jMiniMenuButtons;

        var jButtons = jMiniMenuButtons.find('.mini_menu_button');
        for (var i = 0, l = jButtons.length; i < l; i++) {
            var jButton = jButtons.eq(i);

            var menu = jButton.data('menu');
            var pressed = jButton.hasClass('pressed');

            if (menu != undefined) {

                var contain = true;
                for (var j = 0, jl = menu.length; j < jl; j++) {

                    var menuName = jQuery.PageManager.getMenuParameter(j, parameterMap);
                    if (!menuName.startsWith(menu[j])) {
                        contain = false;
                        break;
                    }
                }

                if (pressed != contain) {

                    // 현재 상태가 다른 경우
                    if (contain) {

                        jButton.addClass('pressed');

                    } else {

                        jButton.removeClass('pressed');
                    }

                }
            }
        }
    }
};

var CategoryMenu = Triton.CategoryMenu = {

    HTML_CATEGORY_MENU_BUTTON: '<div class="category_menu_button button">'
        + '<div class="category_menu_button_icon"><img alt="category menu button icon" /></div>'
        + '<div class="category_menu_button_text"><span></span></div>'
        + '<div class="category_menu_button_flag"></div>'
        + '</div>',

    HTML_CATEGORY_MENU_BUTTONS: '<div class="category_menu_button_buttons"></div>',

    jCategoryMenuLayout: undefined,
    categoryMenuList: undefined,
    jServicePageMenuButton: undefined,

    menuShowChecker: function (menu, parameterMap) {
        return true;
    },

    setMenuShowChecker: function (checker) {

        CategoryMenu.menuShowChecker = checker;
    },

    init: function (options) {

        CategoryMenu.jCategoryMenuLayout = jQuery('#category_menu_button_layout');
        CategoryMenu.categoryMenuList = [];

        var jServicePageMenuButton = jQuery(CategoryMenu.HTML_CATEGORY_MENU_BUTTON);
        jServicePageMenuButton.addClass('service_page_menu_button');

        var name = Lia.pd('LMS로 가기', options, 'servicePageMenu', 'name');
        var src = Lia.pd('/res/lia/triton/img/menu/category/img_lms.png', options, 'servicePageMenu', 'src');

        jServicePageMenuButton.find('.category_menu_button_icon img').attr({
                'src': src,
                'lia-src': src
            }
        );
        jServicePageMenuButton.find('.category_menu_button_text span').text(name);

        CategoryMenu.jCategoryMenuLayout.append(
            CategoryMenu.jServicePageMenuButton = jServicePageMenuButton.on('click', function () {

                var url = jQuery(this).data('url');
                window.open(url);
            })
        );
    },

    /**
     * deprecated
     *
     * 먼저 초기화 해주어야 함
     * @param servicePageMenu
     */
    setServicePageMenuButton: function (servicePageMenu) {
    },

    markServicePageMenu: function (url) {

        var jServicePageMenuButton = CategoryMenu.jServicePageMenuButton;

        jServicePageMenuButton.data('url', url);

        if (url != undefined) {
            jServicePageMenuButton.show();
        } else {
            jServicePageMenuButton.hide();
        }
    },

    add: function (categoryMenu) {

        CategoryMenu.categoryMenuList.push(categoryMenu);
    },

    containsMenu: function (menu, parameterMap) {

        if (parameterMap == undefined)
            return false;

        for (var i = 0, l = menu.length; i < l; i++) {

            var menuName = jQuery.PageManager.getMenuParameter(i, parameterMap);
            if (!menuName.startsWith(menu[i])) {
                return false;
            }
        }

        return true;
    },

    onNormalizeParameter: function (parameterMap) {

        var categoryMenuList = CategoryMenu.categoryMenuList;
        for (var i = 0, l = categoryMenuList.length; i < l; i++) {

            var categoryMenu = categoryMenuList[i];
            var menu = categoryMenu['menu'];

            if (CategoryMenu.containsMenu(menu, parameterMap)) {

                var items = categoryMenu['items'];
                var defaultIndex = categoryMenu['defaultIndex'];

                var categoryMenuParameterMap = Lia.p(items, defaultIndex, 'parameterMap');
                if (categoryMenuParameterMap != undefined) {

                    for (var key in categoryMenuParameterMap) {

                        if (String.isBlank(parameterMap[key])) {
                            parameterMap[key] = categoryMenuParameterMap[key];
                        }
                    }
                }
            }
        }

        return parameterMap;
    },

    mark: function (parameterMap, beforeParameterMap) {

        var jCategoryMenuLayout = CategoryMenu.jCategoryMenuLayout;
        var jBeforeCategoryMenuButtons = jCategoryMenuLayout.children('.category_menu_button_buttons');

        var deleteBeforeCategoryMenuButton = true;
        var categoryMenuList = CategoryMenu.categoryMenuList;
        for (var i = 0, l = categoryMenuList.length; i < l; i++) {

            var categoryMenu = categoryMenuList[i];
            var menu = categoryMenu['menu'];
            var hide = categoryMenu['hide'];
            if (menu != undefined) {

                if (CategoryMenu.menuShowChecker(menu, undefined) != true || hide == true) {
                    continue;
                }

                if (CategoryMenu.containsMenu(menu, parameterMap)) {

                    var jCurrentCategoryMenuButtons = jBeforeCategoryMenuButtons;

                    if (!CategoryMenu.containsMenu(menu, beforeParameterMap)) {

                        // 새로 생성
                        var jAddCategoryButtons = jQuery(CategoryMenu.HTML_CATEGORY_MENU_BUTTONS);
                        var items = categoryMenu['items'];
                        for (var key in items) {

                            var categoryMenuItem = items[key];
                            var categoryMenuItemName = categoryMenuItem['name'];
                            var categoryMenuItemSrc = categoryMenuItem['src'];
                            var categoryMenuParameterMap = categoryMenuItem['parameterMap'];
                            var categoryMenuHide = categoryMenuItem['hide'];

                            if (CategoryMenu.menuShowChecker(menu, categoryMenuParameterMap) != true || categoryMenuHide == true) {
                                continue;
                            }

                            var jAddCategoryMenuButton = jQuery(CategoryMenu.HTML_CATEGORY_MENU_BUTTON);

                            jAddCategoryMenuButton.find('.category_menu_button_icon img').attr({
                                    'src': categoryMenuItemSrc,
                                    'lia-src': categoryMenuItemSrc
                                }
                            );
                            jAddCategoryMenuButton.find('.category_menu_button_text span').text(categoryMenuItemName);

                            jAddCategoryMenuButton.data('category-menu-parameter-map', categoryMenuParameterMap).on('click', {
                                categoryMenuParameterMap: categoryMenuParameterMap,
                                menu: menu
                            }, function (e) {

                                var data = e.data;
                                var parameterMap = data.categoryMenuParameterMap;
                                var menu = data.menu;

                                PageManager.go(menu, parameterMap);
                            });

                            jAddCategoryButtons.append(jAddCategoryMenuButton.initButton().on(Lia.Component.Event.STATUS_CHANGED, function (e) {

                                var status = e.status;

                                $(this).find('img').setImageButtonByPressed(
                                    (status == 'pressing' || status == 'hovering' || status == 'pressed')
                                );
                            }));
                        }

                        jCategoryMenuLayout.prepend(jAddCategoryButtons);
                        jCurrentCategoryMenuButtons = jAddCategoryButtons;

                    } else {

                        // 기존꺼 재활용 하는 케이스
                        deleteBeforeCategoryMenuButton = false;
                    }

                    // 현재 있는것 체크
                    if (jCurrentCategoryMenuButtons.length > 0) {

                        var jCategoryMenuButtonList = jCurrentCategoryMenuButtons.children();
                        for (var j = 0, jl = jCategoryMenuButtonList.length; j < jl; j++) {

                            var jCategoryMenuButton = jCategoryMenuButtonList.eq(j);
                            var categoryMenuParameterMap = jCategoryMenuButton.data('category-menu-parameter-map');

                            var contains = true;
                            for (var key in categoryMenuParameterMap) {

                                var parameter = categoryMenuParameterMap[key];
                                if (parameter != parameterMap[key]) {

                                    contains = false;
                                    break;
                                }
                            }

                            if (contains == true) {

                                // 표시
                                jCategoryMenuButton.buttonPressed(true);

                            } else {

                                // 해제
                                jCategoryMenuButton.buttonPressed(false);

                            }
                        }
                    }

                }

            }
        }

        if (deleteBeforeCategoryMenuButton == true && jBeforeCategoryMenuButtons.length > 0)
            jBeforeCategoryMenuButtons.remove();

    }

};


var SubMenu = Triton.SubMenu = function (options) {

    this.jAppendTo = options['jAppendTo'];
    this.jSubMenu = jQuery(Triton.SubMenu.HTML);
    this.jAppendTo.append(this.jSubMenu);

    var title = options['title'];
    if (title != undefined) {
        this.setTitle(title);
    }

    var description = options['description'];
    if (description != undefined) {
        this.setDescription(description);
    }

    var pageClassName = options['pageClassName'];
    if (pageClassName != undefined) {
        this.jSubMenu.find('.sub_menu_table_right').addClass(pageClassName);
    }

};

Triton.SubMenu.prototype.getJSubMenu = function () {
    return this.jSubMenu;
};

Triton.SubMenu.prototype.setBackButton = function (func) {

    if (func == undefined) {
        this.jSubMenu.find('.sub_menu_back').hide();
    } else {
        this.jSubMenu.find('.sub_menu_back').show().off('click').on('click', func);
    }
};

Triton.SubMenu.prototype.setBackButtonColor = function (color) {

    this.jSubMenu.find('.sub_menu_back').css('color', color);
};

Triton.SubMenu.prototype.setTitle = function (title) {

    this.jSubMenu.find('.sub_menu_title').html(title);
};

Triton.SubMenu.prototype.setTitleColor = function (color) {

    this.jSubMenu.find('.sub_menu_title').css('color', color);
};

Triton.SubMenu.prototype.setDescription = function (description) {

    this.jSubMenu.find('.sub_menu_description').html(description);
};


Triton.SubMenu.prototype.appendToTitle = function (j) {

    this.jSubMenu.find('.sub_menu_title_append').append(j);
};


Triton.SubMenu.getMenuPath = function (menu) {

    var path = '';

    for (var j = 0, jl = menu.length; j < jl; j++) {

        var menuName = menu[j];
        if (String.isNotBlank(path) && !path.endsWith('/')) {
            path += '/';
        }

        path += menuName;
    }

    return path;
};

Triton.SubMenu.setMenuMarkPrefixListInternal = function (menu) {

    var markPrefixList = menu['markPrefixList'];
    var subMenuList = menu['subMenuList'];

    if (markPrefixList == undefined
        &&
        ((subMenuList != undefined && subMenuList.length > 0))
    ) {
        markPrefixList = [];
    }

    if (subMenuList != undefined && subMenuList.length > 0) {

        for (var i = 0, l = subMenuList.length; i < l; i++) {
            var subMenuItem = subMenuList[i];
            Triton.SubMenu.setMenuMarkPrefixListInternal(subMenuItem);

            var subMenu = subMenuItem['menu'];
            var subMenuMarkPrefixList = subMenuItem['markPrefixList'];
            if (subMenuMarkPrefixList != undefined && subMenuMarkPrefixList.length > 0) {

                for (var j = 0, jl = subMenuMarkPrefixList.length; j < jl; j++) {
                    markPrefixList.push(subMenuMarkPrefixList[j]);
                }
            }

            markPrefixList.push(Triton.SubMenu.getMenuPath(subMenu));
        }
    }

    menu['markPrefixList'] = markPrefixList;

};

Triton.SubMenu.prototype.add = function (options) {

    Triton.SubMenu.setMenuMarkPrefixListInternal(options);

    var hide = options['hide'];
    var menu = options['menu'];
    var markPrefixList = options['markPrefixList'];
    var text = options['text'];
    var subMenuList = options['subMenuList'];
    var menuParameterMap = options['menuParameterMap'];

    if (this.menuShowChecker(menu) != true || hide == true) {
        return;
    }

    var jMenu = jQuery(Triton.SubMenu.HTML_MENU);
    var jTitle = jMenu.find('.sub_menu_item_title');
    var jTitleFlag = jMenu.find('.sub_menu_item_title_flag');

    text = '·&nbsp;&nbsp;' + text;
    jMenu.data('menu', menu).data('mark-prefix-list', markPrefixList).data('sub-menu-list', subMenuList).data('menu-parameter-map', menuParameterMap);

    var jSubMenuList = jMenu.find('.sub_menu_item_sub_menu_list');
    jSubMenuList.css({
        'border-bottom': '1px solid ' + TritonTheme.SUB_MENU_BORDER_COLOR,
        'border-left': '1px solid ' + TritonTheme.SUB_MENU_BORDER_COLOR,
        'border-right': '1px solid ' + TritonTheme.SUB_MENU_BORDER_COLOR,
        'background-color': TritonTheme.SUB_MENU_ITEM_SUB_LIST_BACKGROUND
    });

    jTitle.initButton().on('click', {
        subMenu: this,
        subMenuList: subMenuList,
        jSubMenuList: jSubMenuList,
        jTitleFlag: jTitleFlag,
        menuParameterMap: menuParameterMap
    }, function (e) {

        var j = jQuery(this).parent();
        var menu = j.data('menu');

        var subMenu = e.data.subMenu;
        var subMenuList = e.data.subMenuList;
        var jTitleFlag = e.data.jTitleFlag;
        var jSubMenuList = e.data.jSubMenuList;
        var menuParameterMap = e.data.menuParameterMap;

        if (subMenuList != undefined && subMenuList.length > 0) {

            if (j.hasClass('sub_menu_list_opened')) {

                jTitleFlag.attr('src', TritonTheme.SUB_MENU_FLAG_OPEN_IMAGE_URL);
                jSubMenuList.hide();

                j.removeClass('sub_menu_list_opened');

            } else {

                jTitleFlag.attr('src', TritonTheme.SUB_MENU_FLAG_CLOSE_IMAGE_URL);
                jSubMenuList.show();

                j.addClass('sub_menu_list_opened');
            }

        } else {

            subMenu.go.call(subMenu, menu, menuParameterMap);

        }

    }).css({
        'background-color': TritonTheme.SUB_MENU_ITEM_BACKGROUND_COLOR,
        'color': TritonTheme.SUB_MENU_ITEM_TEXT_COLOR,
        'border-left': '1px solid ' + TritonTheme.SUB_MENU_BORDER_COLOR,
        'border-right': '1px solid ' + TritonTheme.SUB_MENU_BORDER_COLOR,
        'border-bottom': '1px solid ' + TritonTheme.SUB_MENU_BORDER_COLOR
    }).on(Lia.Component.Event.STATUS_CHANGED, function (e) {

        var jThis = $(this);
        var status = e.status;
        if (status == Lia.Component.Value.Button.Status.DEFAULT) {

            jThis.css({
                'background-color': TritonTheme.SUB_MENU_ITEM_BACKGROUND_COLOR,
                'color': TritonTheme.SUB_MENU_ITEM_TEXT_COLOR
            });

        } else {

            jThis.css({
                'background-color': TritonTheme.SUB_MENU_ITEM_PRESSED_BACKGROUND_COLOR,
                'color': TritonTheme.SUB_MENU_ITEM_PRESSED_TEXT_COLOR
            });
        }

        if (status == Lia.Component.Value.Button.Status.PRESSED) {

            jThis.parent().find('.sub_menu_item_sub_menu_list').css({
                'background-color': TritonTheme.SUB_MENU_ITEM_SUB_LIST_PRESSED_BACKGROUND
            });

        } else {

            jThis.parent().find('.sub_menu_item_sub_menu_list').css({
                'background-color': TritonTheme.SUB_MENU_ITEM_SUB_LIST_BACKGROUND
            });
        }

    }).find('.sub_menu_item_title_text').html(text);

    if (subMenuList != undefined && subMenuList.length > 0) {

        jTitleFlag.show().attr('src', TritonTheme.SUB_MENU_FLAG_OPEN_IMAGE_URL);

        for (var i = 0, l = subMenuList.length; i < l; i++) {

            var subMenu = subMenuList[i];
            var jSubMenu = jQuery(Triton.SubMenu.HTML_MENU_SUB_MENU);
            var jSubMenuMark = jSubMenu.find('.sub_menu_item_sub_menu_mark');
            var jSubMenuText = jSubMenu.find('.sub_menu_item_sub_menu_text');

            var subMenuText = subMenu['text'];
            var subMenuMarkPrefixList = subMenu['markPrefixList'];
            var subMenuMenuParameterMap = subMenu['menuParameterMap'];
            var subMenuMenu = subMenu['menu'];

            jSubMenuMark.attr({'src': TritonTheme.SUB_MENU_MARK_IMAGE_URL});
            jSubMenuText.html(subMenuText);

            jSubMenuList.append(jSubMenu);

            jSubMenu.data('menu', subMenuMenu).data('mark-prefix-list', subMenuMarkPrefixList).data('menu-parameter-map', subMenuMenuParameterMap);

            jSubMenu.initButton().on('click', {
                subMenuMenu: subMenuMenu,
                subMenuMenuParameterMap: subMenuMenuParameterMap,
                subMenu: this
            }, function (e) {

                var subMenu = e.data.subMenu;
                var subMenuMenu = e.data.subMenuMenu;
                var subMenuMenuParameterMap = e.data.subMenuMenuParameterMap;

                subMenu.go.call(subMenu, subMenuMenu, subMenuMenuParameterMap);

            }).css({
                'color': TritonTheme.SUB_MENU_ITEM_TEXT_COLOR
            }).on(Lia.Component.Event.STATUS_CHANGED, function (e) {

                var jThis = $(this);
                var status = e.status;
                if (status == Lia.Component.Value.Button.Status.DEFAULT) {

                    jThis.css({
                        'color': TritonTheme.SUB_MENU_ITEM_TEXT_COLOR
                    });

                } else {

                    jThis.css({
                        'color': TritonTheme.SUB_MENU_ITEM_PRESSED_TEXT_COLOR
                    });
                }

            });
        }
    }

    this.appendToLeft(jMenu);
};

Triton.SubMenu.prototype.appendToLeft = function ( item ) {
    var j = Triton.get(item);
    this.jSubMenu.find('.sub_menu_table_left').append(j);
};

Triton.SubMenu.prototype.go = function (menu) {
    jQuery.PageManager.go(menu);
};

Triton.SubMenu.prototype.setGo = function (go) {
    this.go = go;
};

Triton.SubMenu.prototype.setMenuShowChecker = function (checker) {
    this.menuShowChecker = checker;
};

Triton.SubMenu.prototype.menuShowChecker = function (menu) {
    return true;
};

Triton.SubMenu.prototype.mark = function (parameterMap) {

    var jSubMenu = this.jSubMenu;

    var jButtons = jSubMenu.find('.sub_menu_item');
    for (var i = 0, l = jButtons.length; i < l; i++) {
        var jButton = jButtons.eq(i);

        var menu = jButton.data('menu');
        var markPrefixList = jButton.data('mark-prefix-list');
        var subMenuList = jButton.data('sub-menu-list');
        var menuParamterMap = jButton.data('menu-parameter-map');

        var contain = this.markHandler(menu, markPrefixList, parameterMap, menuParamterMap);
        if (contain) {
            jButton.find('.sub_menu_item_title').buttonPressed(true);
        } else {
            jButton.find('.sub_menu_item_title').buttonPressed(false);
        }


        if (subMenuList != undefined && subMenuList.length > 0) {

            var jSubMenuList = jButton.find('.sub_menu_item_sub_menu_list');
            var jSubMenuButtons = jSubMenuList.find('.sub_menu_item_sub_menu');

            if (contain == true) {

                if (!jButton.hasClass('sub_menu_list_opened')) {
                    jButton.find('.sub_menu_item_title').trigger('click');
                }

            }

            for (var j = 0, jl = jSubMenuButtons.length; j < jl; j++) {

                var jSubMenuButton = jSubMenuButtons.eq(j);
                var subMenuMarkPrefixList = jSubMenuButton.data('mark-prefix-list');
                var subMenuMenuParameterMap = jSubMenuButton.data('menu-parameter-map');
                var subMenu = jSubMenuButton.data('menu');

                if (contain) {

                    var subMenuContain = this.markHandler(subMenu, subMenuMarkPrefixList, parameterMap, subMenuMenuParameterMap);

                    if (subMenuContain) {

                        jSubMenuButton.buttonPressed(true);
                    } else {

                        jSubMenuButton.buttonPressed(false);
                    }


                } else {

                    jSubMenuButton.buttonPressed(false);
                }

            }

        }
    }
};

Triton.SubMenu.prototype.markHandler = function (menu, markPrefixList, parameterMap, menuParameterMap) {

    var path = '';

    for (var j = 0, jl = jQuery.PageManager.getDepth(); j <= jl; j++) {

        var menuName = jQuery.PageManager.getMenuParameter(j);
        if (String.isNotBlank(path)) {
            path += '/';
        }

        path += menuName;
    }

    var contain = (menu != undefined);
    if (menu != undefined) {

        for (var j = 0, jl = jQuery.PageManager.getDepth(); j <= jl; j++) {

            var menuName = jQuery.PageManager.getMenuParameter(j);
            if (!(menuName == menu[j] || menuName.startsWith(menu[j] + '/'))) {
                contain = false;
                break;
            }
        }
    }

    if (contain == false && markPrefixList != undefined) {

        contain = false;
        for (var k = 0, kl = markPrefixList.length; k < kl; k++) {
            var prefix = markPrefixList[k];
            if (path.startsWith(prefix)) {
                contain = true;
                break;
            }
        }
    }


    if (contain == true && parameterMap != undefined && menuParameterMap != undefined) {

        for (var key in menuParameterMap) {

            if (menuParameterMap[key] != parameterMap[key]) {
                contain = false;
                break;
            }

        }
    }


    return contain;
};

Triton.SubMenu.prototype.setMarkHandler = function (handler) {
    this.markHandler = handler;
};

Triton.SubMenu.HTML = '<div class="sub_menu">' +
    '<div class="sub_menu_bar" style="background-color:' + TritonTheme.SUB_MENU_BACKGROUND + ';color:' + TritonTheme.SUB_MENU_TEXT_COLOR + '">' +
    '<div class="sub_menu_back" style="background-color:' + TritonTheme.SUB_MENU_TITLE_BACKGROUND + ';">&lt;</div>' +
    '<div class="sub_menu_title" style="background-color:' + TritonTheme.SUB_MENU_TITLE_BACKGROUND + ';color:' + TritonTheme.SUB_MENU_TEXT_COLOR + '""></div>' +
    '<div class="sub_menu_title_append"></div>' +
    '<div class="sub_menu_description"></div>' +
    '</div>' +
    '<div class="sub_menu_table">' +
    '<div class="sub_menu_table_right"></div>' +
    '<div class="sub_menu_table_left"></div>' +
    '</div>' +
    '</div>';

Triton.SubMenu.HTML_MENU = '<div class="sub_menu_item">' +
    '<div class="sub_menu_item_title">' +
    '<img class="sub_menu_item_title_flag" alt="sub menu item title flag"/>' +
    '<div class="sub_menu_item_title_text"></div>' +
    '</div>' +
    '<div class="sub_menu_item_sub_menu_list"></div>' +
    '</div>';

Triton.SubMenu.HTML_MENU_SUB_MENU = '<div class="sub_menu_item_sub_menu button">' +
    '<img class="sub_menu_item_sub_menu_mark" alt="sub menu item sub menu mark"/>' +
    '<div class="sub_menu_item_sub_menu_text"></div>' +
    '</div>';


var ContextMenuPopupManager = Triton.ContextMenuPopupManager = function (options) {
    this.init(options);
};

Triton.ContextMenuPopupManager.jAppendTo = undefined;
Triton.ContextMenuPopupManager.setJAppendTo = function (jAppendTo) {
    Triton.ContextMenuPopupManager.jAppendTo = jAppendTo;
};

Triton.ContextMenuPopupManager.prototype.init = function (options) {

    options = Triton.combineOptions(options, {
        theme: Triton.ContextMenuPopupManager.Theme.Text
    });

    this.jAppendTo = options['jAppendTo'];
    if (this.jAppendTo == undefined) {
        this.jAppendTo = Triton.ContextMenuPopupManager.jAppendTo;
    }

    this.options = options;
};

Triton.ContextMenuPopupManager.prototype.getJAppendTo = function () {
    return this.jAppendTo;
};

Triton.ContextMenuPopupManager.prototype.getOptions = function () {
    return this.options;
};

Triton.ContextMenuPopupManager.prototype.setBindHandler = function (handler) {
    this.bindHandler = handler;
};
Triton.ContextMenuPopupManager.prototype.getBindHandler = function () {
    return this.bindHandler;
};

Triton.ContextMenuPopupManager.prototype.setDropDown = function (dropDown) {
    this.dropDown = dropDown;
};

Triton.ContextMenuPopupManager.prototype.isDropDown = function () {
    return this.dropDown;
};

Triton.ContextMenuPopupManager.prototype.bind = function (item, object) {

    var jBind = Triton.get(item);
    for (var i = 0, l = jBind.length; i < l; i++) {

        var jBindEq = jBind.eq(i);
        var contextMenuPopupManager = this;
        var options = contextMenuPopupManager.getOptions();
        Triton.applyThemeOptions(jBindEq, options);

        jBindEq.initButton().on(Lia.Component.Event.STATUS_CHANGED, {
            contextMenuPopupManager: this,
            jBindEq: jBindEq
        }, function (e) {

            var status = Lia.p(e, 'status');
            var contextMenuPopupManager = Lia.p(e, 'data', 'contextMenuPopupManager');
            var options = contextMenuPopupManager.getOptions();
            var jBindEq = Lia.p(e, 'data', 'jBindEq');

            if (status == Lia.Component.Value.Button.Status.DEFAULT) {

                var defaultSet = Lia.pt(options, options['theme'], 'defaultSet');
                Triton.applyTheme(jBindEq, defaultSet);

            } else {

                var hoveringSet = Lia.pt(options, options['theme'], 'hoveringSet');
                Triton.applyTheme(jBindEq, hoveringSet);
            }

        }).on('click', {
            contextMenuPopupManager: this,
            jBindEq: jBindEq,
            object: object
        }, function (e) {

            var contextMenuPopupManager = Lia.p(e, 'data', 'contextMenuPopupManager');
            var jBindEq = Lia.p(e, 'data', 'jBindEq');
            var object = Lia.p(e, 'data', 'object');

            var options = contextMenuPopupManager.getOptions();
            var onBoundItemClick = Lia.pt(options, options['theme'], 'onBoundItemClick');
            onBoundItemClick.call(this, e, contextMenuPopupManager, jBindEq, object);
        });
    }
};

Triton.ContextMenuPopupManager.prototype.show = function (item, object, e) {

    var jBind = Triton.get(item);
    var contextMenuPopupManager = this;
    var options = contextMenuPopupManager.getOptions();
    var onBoundItemClick = Lia.pt(options, options['theme'], 'onBoundItemClick');
    onBoundItemClick.call(jBind, e, contextMenuPopupManager, jBind, object);

};


Triton.ContextMenuPopupManager.HTML =
    '<div class="triton_context_menu_layout">' +
    '<div class="triton_context_menu_dim dim cancelable without_animating" lia-opacity="0" lia-popup="{next-popup}"></div>' +
    '<div class="triton_context_menu_popup popup no_adjust without_animating" lia-dim="{prev-dim}"></div>' +
    '</div>';

Triton.ContextMenuPopupManager.Theme = {

    Text: {

        css: {
            'cursor': 'pointer'
        },

        attr: {},

        hoveringSet: {
            css: {
                'text-decoration': 'underline'
            },
            attr: {}
        },

        defaultSet: {
            css: {
                'text-decoration': 'none'
            },
            attr: {}
        },

        onBoundItemClick: function (e, contextMenuPopupManager, jBind, object) {

            if (e != undefined) {
                e.stopPropagation();
                e.preventDefault();
            }

            var bindHandler = contextMenuPopupManager.getBindHandler();

            var jAppendTo = contextMenuPopupManager.getJAppendTo();
            var jPopupLayout = jQuery(Triton.ContextMenuPopupManager.HTML);

            $.initDim(jPopupLayout);
            $.initPopup(jPopupLayout).on(Lia.Component.Event.HIDE, {
                jPopupLayout: jPopupLayout
            }, function (e) {

                var object = e.data;
                var jPopupLayout = object.jPopupLayout;
                jPopupLayout.remove();
            });

            var contextMenu = bindHandler(contextMenuPopupManager, object);

            var jPopup = jPopupLayout.find('.' + Lia.Component.Name.POPUP);
            contextMenu.addOnItemClick(function (item, contextMenu, object) {
                var jPopup = object['jPopup'];
                jPopup.hidePopup();
            }, {
                jPopup: jPopup
            });

            var offset = jBind.offset();
            offset.left -= Lia.getScrollLeft() - jBind.outerWidth(true) / 2;
            offset.top -= Lia.getScrollTop() - jBind.outerHeight(true) / 2;

            contextMenu.setPosition(offset.left, offset.top);

            contextMenu.appendTo(jPopup);
            jAppendTo.append(jPopupLayout);

            contextMenu.show();
            jPopup.showPopup();
        }
    },

    Button: {

        css: {
            'cursor': 'pointer'
        },

        attr: {},

        hoveringSet: {
            css: {},
            attr: {}
        },

        defaultSet: {
            css: {},
            attr: {}
        },

        onBoundItemClick: function (e, contextMenuPopupManager, jBind, object) {

            if (e != undefined) {
                e.stopPropagation();
                e.preventDefault();
            }

            var bindHandler = contextMenuPopupManager.getBindHandler();

            var jAppendTo = contextMenuPopupManager.getJAppendTo();
            var jPopupLayout = jQuery(Triton.ContextMenuPopupManager.HTML);

            $.initDim(jPopupLayout);
            $.initPopup(jPopupLayout).on(Lia.Component.Event.HIDE, {
                jPopupLayout: jPopupLayout
            }, function (e) {

                var object = e.data;
                var jPopupLayout = object.jPopupLayout;
                jPopupLayout.remove();
            });

            var contextMenu = bindHandler(contextMenuPopupManager, object);

            var jPopup = jPopupLayout.find('.' + Lia.Component.Name.POPUP);
            contextMenu.addOnItemClick(function (item, contextMenu, object) {
                var jPopup = object['jPopup'];
                jPopup.hidePopup();
            }, {
                jPopup: jPopup
            });

            contextMenu.appendTo(jPopup);
            jAppendTo.append(jPopupLayout);
            contextMenu.show();
            jPopup.showPopup();

            // 여기 수정했음
            var offset = jBind.offset();

            var isDropDown = Lia.pd(contextMenuPopupManager.isDropDown(), object, 'isDropDown');
            if (isDropDown == true) {

                offset.top -= Lia.getScrollTop() - jBind.outerHeight(true) - 10;

            } else {

                offset.top -= Lia.getScrollTop() + contextMenu.get().outerHeight(true) + 10;
            }

            var contextMenuOuterWidth = contextMenu.get().outerWidth(true);
            contextMenu.setPosition(offset.left, offset.top);
            var jBindOuterWidth = jBind.outerWidth(true);

            if (contextMenuOuterWidth > jBindOuterWidth) {

                var widthDifference = contextMenuOuterWidth - jBindOuterWidth;

                offset.left -= Lia.getScrollLeft() + widthDifference + 5;
                contextMenu.setPosition(offset.left, offset.top);
                contextMenu.setWidth(contextMenuOuterWidth);

            } else {

                offset.left -= Lia.getScrollLeft();
                contextMenu.setWidth(jBindOuterWidth);
            }
        }
    },


    Mouse: {

        css: {
            'cursor': 'pointer'
        },

        attr: {},

        hoveringSet: {
            css: {},
            attr: {}
        },

        defaultSet: {
            css: {},
            attr: {}
        },

        onBoundItemClick: function (e, contextMenuPopupManager, jBind, object) {

            if (e != undefined) {
                e.stopPropagation();
                e.preventDefault();
            }

            var bindHandler = contextMenuPopupManager.getBindHandler();

            var jAppendTo = contextMenuPopupManager.getJAppendTo();
            var jPopupLayout = jQuery(Triton.ContextMenuPopupManager.HTML);

            $.initDim(jPopupLayout);
            $.initPopup(jPopupLayout).on(Lia.Component.Event.HIDE, {
                jPopupLayout: jPopupLayout
            }, function (e) {

                var object = e.data;
                var jPopupLayout = object.jPopupLayout;
                jPopupLayout.remove();
            });

            var contextMenu = bindHandler(contextMenuPopupManager, object);

            var jPopup = jPopupLayout.find('.' + Lia.Component.Name.POPUP);
            contextMenu.addOnItemClick(function (item, contextMenu, object) {
                var jPopup = object['jPopup'];
                jPopup.hidePopup();
            }, {
                jPopup: jPopup
            });

            contextMenu.appendTo(jPopup);
            jAppendTo.append(jPopupLayout);
            contextMenu.show();
            jPopup.showPopup();

            // 여기 수정했음
            var offset = {};
            offset.left = e.clientX;
            offset.top = e.clientY;

            contextMenu.setPosition(offset.left, offset.top);
        }
    }
};


var Board = Triton.Board = function (options) {
    this.typeCode = undefined;
    this.boardId = undefined;
    this.targetBoardId = undefined;
    this.requireBoardId = undefined;
    this.moduleTypeCode = undefined;
    this.requester = undefined;
    this.fieldList = undefined;
    this.categoryOptionList = undefined;
    this.options = undefined;
    this.parameterMap = undefined;
    this.boardContentId = undefined;
    this.boardContent = undefined;
    this.boardContentCategory = undefined;
    this.boardContentCategoryId = undefined;
    this.baseRequestParameterMap = undefined;
    this.datetimeFormat = undefined;
    this.colspan = undefined;
};

Triton.Board.Field = {

    XXX : {

        attachHeaderToBoardList : function ( listTable, boardList ) {
        },
        
        attachToBoardList : function ( listTable, contentSummary, data, boardList ){
        },

        attachToBoardWrite: function (detailTable, boardContent, boardWrite) {
        },

        attachToBoardDetail: function (detailTable, boardContent, boardDetail) {
        },

        attachToParameterMap: function (parameterMap, fieldObject, boardWrite) {
        }
    },

    TitleBold: {

        attachToBoardWrite: function (detailTable, boardContent, boardWrite) {
        },

        attachToBoardDetail: function (detailTable, boardContent, boardDetail) {

            var colspan = Lia.pd(2, boardDetail.getColspan());

            var board = boardDetail;
            var item = boardContent;

            detailTable.appendRow({});
            detailTable.appendKeyColumn({
                content : '제목'
            });

            var section = new Triton.Section({});
            detailTable.appendValueColumn({
                content : section,
                attr : { colspan : (colspan-1) }
            });

            if (board.titleAnsweredShow) {

                if (Lia.p(item, 'is_answered')) {

                    new Triton.Label({
                        appendTo: section,
                        theme: Triton.Label.Theme.TitleAnswered,
                        content: '답변완료'
                    });

                } else {

                    new Triton.Label({
                        appendTo: section,
                        theme: Triton.Label.Theme.TitleNotAnswered,
                        content: '답변대기'
                    });
                }
            }

            if (board.titleNewShow) {

                if (Lia.p(item, 'is_new')) {

                    new Triton.Label({
                        appendTo: section,
                        theme: Triton.Label.Theme.TitleNew,
                        content: 'NEW'
                    });
                }
            }

            section.append(new Triton.Span({css : { 'font-family' : 'notokr-medium, NanumGothicBold'}}).text(Lia.p(item, 'title')));

            if (board.titleCommentCountShow) {

                var commentCount = Lia.p(item, 'comment_count');
                if (commentCount > 0) {

                    section.append(new Triton.Span({
                            theme: Triton.Span.Theme.CommentCount,
                            content: '&nbsp;&nbsp;(' + commentCount + ')'
                        }
                    ));
                }
            }

            if (board.titlePrivateShow) {

                var isPrivate = Lia.p(item, 'is_private');
                if (isPrivate) {
                    section.append(new Triton.Image({theme: Triton.Image.Theme.Private}));
                }
            }
        },

        attachToParameterMap: function (parameterMap, fieldObject, boardWrite) {
        }
    },

    LinkList: {

        linkUrlView: function (name, url) {

            var page = this;

            var linkUrlInputSection = page.linkUrlInputSection = new Triton.Section({
                addClass: 'link_url_input_section',
                css: {'position': 'relative', 'margin-bottom': '10px'}
            });

            new Triton.Image({
                appendTo: linkUrlInputSection,
                attr: {
                    'src': '/res/cms/img/common/img_delete.png'
                },
                page: page,
                css: {
                    'margin-right': '10px',
                    'padding': '10px',
                    'float': 'right',
                    'cursor': 'pointer',
                    'position': 'absolute',
                    'top': 0,
                    'right': '450px'
                },
                onClick: function (e) {

                    e.stopPropagation();
                    var page = e.data.page;

                    var linkUrlInputSection = $(this).parent('.link_url_input_section');

                    PopupManager.alert('확인', '삭제 하시겠습니까?', function () {
                        linkUrlInputSection.remove();
                    }, true);
                }
            });

            new Triton.TextInput({
                appendTo: linkUrlInputSection,
                css: {'width': '100px'},
                addClass: 'link_title',
                value: name,
                attr: {
                    'placeholder': '제목'
                }
            });

            new Triton.TextInput({
                appendTo: linkUrlInputSection,
                css: {'width': '500px', 'margin-left': '10px'},
                addClass: 'link_url',
                value: url,
                attr: {
                    'placeholder': 'URL을 입력 해 주세요.'
                }
            });

            return linkUrlInputSection;

        },

        attachToBoardWrite: function (detailTable, boardContent, boardDetail) {

            var page = this;

            var colspan = Lia.pd(2, boardDetail.getColspan());

            var boardContent = Lia.p(boardDetail, 'boardContent');
            var linkUrl = Lia.p(boardContent, 'link_url');

            detailTable.appendRow({});
            detailTable.appendKeyColumn({
                content: '링크 URL'
            });

            var linkUrlValueColumnSection = page.linkUrlValueColumnSection = new Triton.Section({});

            if (linkUrl != undefined && linkUrl.length > 0) {

                for (var li = 0, ll = linkUrl.length; li < ll; li++) {

                    var link = linkUrl[li];
                    var name = Lia.p(link, 'name');
                    var url = Lia.p(link, 'url');

                    page.linkUrlValueColumnSection.append(page.linkUrlView(name, url));
                }

            } else {

                linkUrlValueColumnSection.append(page.linkUrlView());
            }

            detailTable.appendValueColumn({
                content: linkUrlValueColumnSection,
                attr : { colspan : (colspan -1) }
            });

            detailTable.appendItem(new Triton.FlatButton({
                content: '링크 추가',
                theme: Triton.FlatButton.Theme.Normal,
                css: {
                    'padding': '0px 20px',
                    'border-radius': '15px',
                    'float': 'right'
                },
                onClick: function (e) {

                    e.stopPropagation();

                    page.linkUrlValueColumnSection.append(page.linkUrlView());
                }
            }));

        },

        attachToBoardDetail: function (detailTable, boardContent, boardDetail) {

            var colspan = Lia.pd(2, boardDetail.getColspan());

            var boardContent = boardDetail['boardContent'];

            detailTable.appendRow({});
            detailTable.appendKeyColumn({
                content: '링크 URL'
            });
            var linkUrlSection = new Triton.Section({});

            var linkUrl = Lia.p(boardContent, 'link_url');

            if (linkUrl != undefined && linkUrl.length > 0) {

                for (var i = 0, l = linkUrl.length; i < l; i++) {

                    var link = linkUrl[i];

                    new Triton.Section({
                        appendTo: linkUrlSection,
                        content: Lia.p(link, 'name') + ' - ' + Lia.p(link, 'url')
                    });
                }
            } else {

                linkUrlSection.append('-');
            }

            detailTable.appendValueColumn({
                content: linkUrlSection,
                attr : { colspan : (colspan -1) }
            });

        },

        attachToParameterMap: function (parameterMap, fieldObject, boardWrite) {

            var page = this;

            var jLinkUrl = page.linkUrlValueColumnSection.find('.link_url_input_section');

            var linkUrlList = undefined;

            for (var i = 0, l = jLinkUrl.length; i < l; i++) {

                var linkUrlEq = jLinkUrl.eq(i);

                var linkTitle = linkUrlEq.find('.link_title').getTriton().getValue();
                var linkUrl = linkUrlEq.find('.link_url').getTriton().getValue();

                if (String.isBlank(linkTitle) && String.isBlank(linkUrl))
                    continue;

                if (linkUrlList == undefined)
                    linkUrlList = [];

                var linkUrlJson;

                linkUrlJson = {
                    name: linkTitle,
                    url: linkUrl
                };

                linkUrlList.push(linkUrlJson);
            }

            if (linkUrlList != undefined)
                parameterMap['linkUrl'] = JSON.stringify(linkUrlList);

        }

    },


    Link : {

        attachToBoardWrite: function (detailTable, boardContent, boardDetail) {

            var page = this;

            var colspan = Lia.pd(2, boardDetail.getColspan());

            var boardContent = Lia.p(boardDetail, 'boardContent');
            var linkUrl = Lia.p(boardContent, 'link_url');

            detailTable.appendRow({});
            detailTable.appendKeyColumn({
                content: '링크 URL'
            });

            detailTable.appendValueColumn({
                content: page.linkUrlTextInput = new Triton.TextInput({
                    theme: Triton.TextInput.Theme.Full,
                    value: linkUrl
                }),
                attr : { colspan : (colspan -1) }
            });

        },

        attachToBoardDetail: function (detailTable, boardContent, boardDetail) {

            var colspan = Lia.pd(2, boardDetail.getColspan());

            var boardContent = boardDetail['boardContent'];
            var linkUrl = Lia.p(boardContent, 'link_url');

            detailTable.appendRow({});
            detailTable.appendKeyColumn({
                content: '링크 URL'
            });

            detailTable.appendValueColumn({
                content: Lia.pcd('-', linkUrl),
                attr : { colspan : (colspan -1) }
            });
        },

        attachToParameterMap: function (parameterMap, fieldObject, boardWrite) {

            var page = this;
            parameterMap['linkUrl'] = page.linkUrlTextInput.getValue();
        }

    },


    Gallery: {

        attachToBoardWrite: function (detailTable, boardContent, boardDetail) {

            var colspan = Lia.pd(2, boardDetail.getColspan());

            var videoRow = null;
            var imageRow = null;
            var thumbnailImageRow = null;

            var data = {
                detailTable: detailTable
            };

            detailTable.appendRow({});
            detailTable.appendKeyColumn({
                content: '갤러리 타입'
            });

            var typeCodeValue = 0;

            if (boardContent != undefined) {

                var videoUrl = Lia.p(boardContent, 'video_url');

                if (String.isNotBlank(videoUrl))
                    typeCodeValue = 1;

            }
            var galleryTypeComboBox;
            detailTable.appendValueColumn({
                content: galleryTypeComboBox = new Triton.ComboBox({
                    optionList: [
                        {name: '사진첩', value: 0},
                        {name: '동영상', value: 1}
                    ],
                    selectedValue: typeCodeValue,
                    onSelected: function (val) {

                        if (val == 0) {

                            imageRow.show();
                            videoRow.hide();

                        } else {

                            imageRow.hide();
                            videoRow.show();
                        }
                    }
                })
            });

            thumbnailImageRow = detailTable.appendRow({});
            detailTable.appendKeyColumn({
                content: '썸네일 이미지', css: {'width': PolarisSettings.DetailTableWidth.DEFAULT}
            });
            var thumbnailUploader;
            detailTable.appendValueColumn({
                content: thumbnailUploader = new Triton.ThumbnailUploader({
                    form: {name: 'imageUrl'},
                    parameterMap: {
                        categoryCode: UploadedFileCategory.BOARD_ATTACHMENT_PUBLIC
                    }
                }),
                attr : { colspan : (colspan -1) }
            });

            var imageUrl = Lia.p(boardContent, 'image_url');

            if (imageUrl != undefined)
                thumbnailUploader.setValue(imageUrl);

            var imageRowCss = '';
            var videoRowCss = 'none';

            if (boardContent != undefined) {

                if (String.isNotBlank(boardContent['video_url'])) {

                    imageRowCss = 'none';
                    videoRowCss = '';

                }

            }

            imageRow = detailTable.appendRow({css: {'display': imageRowCss}});
            detailTable.appendKeyColumn({
                content: '이미지', css: {'width': PolarisSettings.DetailTableWidth.DEFAULT}
            });
            var uploader;
            detailTable.appendValueColumn({
                content: uploader = new Triton.Uploader({
                    form: {name: 'attachmentList'},
                    parameterMap: {
                        categoryCode: UploadedFileCategory.BOARD_ATTACHMENT_PUBLIC
                    }
                }),
                attr : { colspan : (colspan -1) }
            });

            if (imageUrl != undefined)
                uploader.addAll(imageUrl);

            var videoUrl = Lia.p(boardContent, 'video_url');

            videoRow = detailTable.appendRow({css: {'display': videoRowCss}});
            detailTable.appendKeyColumn({
                content: '비디오', css: {'width': PolarisSettings.DetailTableWidth.DEFAULT}
            });
            var videoSection = new Triton.Section({
                css: {'overflow': 'auto'}
            });

            var comboBox = new Triton.ComboBox({
                form: {'name': 'videoUrl'},
                css: {'float': 'left'},
                appendTo: videoSection,
                optionList: [
                    {
                        'name': '선택',
                        'value': ''
                    }, {
                        'name': VideoType.getName(VideoType.YOUTUBE) + ' ID',
                        'value': VideoType.YOUTUBE
                    }, {
                        'name': VideoType.getName(VideoType.VIMEO) + ' ID',
                        'value': VideoType.VIMEO
                    }
                ]
            });

            var textInput = new Triton.TextInput({
                form: {'name': 'videoUrlText'},
                css: {
                    'float': 'left',
                    'margin-left': '10px'
                },
                appendTo: videoSection
            });

            if (videoUrl != undefined) {

                var videoTypeCode = Lia.p(videoUrl, 'type_code');
                var videoRealUrl = Lia.p(videoUrl, 'url');

                comboBox.setValue(videoTypeCode);
                textInput.setValue(videoRealUrl);
            }

            detailTable.appendValueColumn({
                content: videoSection,
                attr : { colspan : (colspan -1) }
            });

            detailTable.videoTypeCode = comboBox;
            detailTable.videoUrlText = textInput;
            detailTable.galleryTypeComboBox = galleryTypeComboBox;
            detailTable.thumbnailUploader = thumbnailUploader;
            return data;
        },

        attachToBoardDetail: function (detailTable, boardContent, boardDetail) {

        },

        attachToParameterMap: function (parameterMap, fieldObject, boardWrite) {

            var detailTable = fieldObject.detailTable;
            var galleryTypeComboBox = detailTable.galleryTypeComboBox;
            var videoTypeCode = detailTable.videoTypeCode;
            var videoUrlText = detailTable.videoUrlText;
            var thumbnailUploader = detailTable.thumbnailUploader;

            if (String.isBlank(thumbnailUploader.getAttachment())) {
                PopupManager.alert('확인', '썸네일 이미지를 첨부해주세요.');
                return true;
            }

            if (galleryTypeComboBox.getValue() == 1) {

                var videoUrlMap = {};

                var typeCode = videoTypeCode.getValue();
                var urlText = videoUrlText.getValue();

                if (String.isNotBlank(typeCode))
                    videoUrlMap['type_code'] = typeCode;

                if (String.isNotBlank(urlText))
                    videoUrlMap['url'] = urlText;

                parameterMap['videoUrl'] = JSON.stringify(videoUrlMap);
            }
        }
    }
};


Triton.Board.prototype = new Triton();
Triton.Board.prototype.getColspan = function() {
    return this.colspan;
};
Triton.Board.prototype.setColspan = function( colspan ) {
    this.colspan = colspan;
};
Triton.Board.prototype.initBoard = function (options) {

    this.datetimeFormat = Lia.p(options, 'datetimeFormat');
    this.initTriton(options);
};
Triton.Board.prototype.getTypeCode = function () {
    return this.typeCode;
};
Triton.Board.prototype.setTypeCode = function (typeCode) {
    this.typeCode = typeCode;
};
Triton.Board.prototype.setBoardId = function (boardId) {
    this.boardId = boardId;
};
Triton.Board.prototype.getBoardId = function () {
    return this.boardId;
};
Triton.Board.prototype.setBaseRequestParameterMap = function (map) {
    this.baseRequestParameterMap = map;
};
Triton.Board.prototype.getBaseRequestParameterMap = function () {
    return this.baseRequestParameterMap;
};
Triton.Board.prototype.setTargetBoardId = function (boardId) {
    this.targetBoardId = boardId;
};
Triton.Board.prototype.getTargetBoardId = function () {
    return this.targetBoardId;
};
Triton.Board.prototype.setModuleTypeCode = function (code) {
    this.moduleTypeCode = code;
};
Triton.Board.prototype.getModuleTypeCode = function () {
    return this.moduleTypeCode;
};
Triton.Board.prototype.getFieldList = function (fieldList) {
    return this.fieldList;
};
Triton.Board.prototype.setFieldList = function (fieldList) {
    this.fieldList = fieldList;
};
Triton.Board.prototype.isListModule = function () {
    return (this.moduleTypeCode == Triton.Board.ModuleType.BOARD_LIST);
};
Triton.Board.prototype.isWriteModule = function () {
    return (this.moduleTypeCode == Triton.Board.ModuleType.BOARD_WRITE);
};
Triton.Board.prototype.isDetailModule = function () {
    return (this.moduleTypeCode == Triton.Board.ModuleType.BOARD_DETAIL);
};
Triton.Board.prototype.isCommentListModule = function () {
    return (this.moduleTypeCode == Triton.Board.ModuleType.BOARD_COMMENT_LIST);
};
Triton.Board.prototype.getOptions = function () {
    return this.options;
};
Triton.Board.prototype.setOptions = function (options) {
    this.options = options;
};
Triton.Board.prototype.setParameterMap = function (parameterMap) {
    this.parameterMap = parameterMap;
};
Triton.Board.prototype.getParameterMap = function () {
    return this.parameterMap;
};

Triton.Board.prototype.getCategoryOptionList = function () {
    return this.categoryOptionList;
};
Triton.Board.prototype.setCategoryOptionList = function (optionList) {
    this.categoryOptionList = optionList;
};
Triton.Board.prototype.getBoardContentId = function () {
    return this.boardContentId;
};
Triton.Board.prototype.setBoardContentId = function (boardContentId) {
    this.boardContentId = boardContentId;
};
Triton.Board.prototype.getBoardContent = function () {
    return this.boardContent;
};
Triton.Board.prototype.setBoardContent = function (boardContent) {
    this.boardContent = boardContent;
};
Triton.Board.prototype.getBoardContentCategory = function () {
    return this.boardContentCategory;
};
Triton.Board.prototype.setBoardContentCategory = function (boardContentCategory) {
    this.boardContentCategory = boardContentCategory;
};
Triton.Board.prototype.setBoardContentCategoryId = function (id) {
    this.boardContentCategoryId = id;
};
Triton.Board.prototype.getBoardContentCategoryId = function () {
    return this.boardContentCategoryId;
};

Triton.Board.UrlType = {
    GET_BOARD_LIST: 1,
    ADD_BOARD_CONTENT_CATEGORY: 2,
    DELETE_BOARD_CONTENT_CATEGORY: 3,
    EDIT_BOARD_CONTENT_CATEGORY: 4,
    GET_BOARD_CONTENT_CATEGORY_LIST: 5,
    GET_BOARD_CONTENT_CATEGORY: 6,
    ADD_BOARD_CONTENT: 7,
    EDIT_BOARD_CONTENT: 8,
    GET_BOARD_CONTENT: 9,
    RECOVER_BOARD_CONTENT: 10,
    DELETE_BOARD_CONTENT: 11,
    DELETE_BOARD_CONTENT_PERMANENTLY: 12,
    GET_BOARD_CONTENT_SUMMARY_LIST: 13,
    SET_BOARD_CONTENT_AVAILABILITY: 14
};
Triton.Board.ApiUrl = {
    GET_BOARD_LIST: '/api/board/getBoardList',                                       //게시판 목록 가져오기
    ADD_BOARD_CONTENT_CATEGORY: '/api/board/addBoardContentCategory',                //게시판 카테고리 추가
    DELETE_BOARD_CONTENT_CATEGORY: '/api/board/deleteBoardContentCategory',          //게시판 카테고리 삭제
    EDIT_BOARD_CONTENT_CATEGORY: '/api/board/editBoardContentCategory',              //게시판 카테고리 수정
    GET_BOARD_CONTENT_CATEGORY_LIST: '/api/board/getBoardContentCategoryList',       //게시판 카테고리 목록
    GET_BOARD_CONTENT_CATEGORY: '/api/board/getBoardContentCategory',                //게시판 카테고리 목록
    ADD_BOARD_CONTENT: '/api/board/addBoardContent',                                 //게시판 글쓰기
    EDIT_BOARD_CONTENT: '/api/board/editBoardContent',                               //게시판 글 수정
    GET_BOARD_CONTENT: '/api/board/getBoardContent',                                 //게시판 글 가져오기
    RECOVER_BOARD_CONTENT: '/api/board/recoverBoardContent',                         //게시판 글 복구
    DELETE_BOARD_CONTENT: '/api/board/deleteBoardContent',                           //게시판 글 삭제
    DELETE_BOARD_CONTENT_PERMANENTLY: '/api/board/deleteBoardContentPermanently',    //게시판 글 완전삭제
    GET_BOARD_CONTENT_SUMMARY_LIST: '/api/board/getBoardContentSummaryList',         //게시판 글 목록
    SET_BOARD_CONTENT_AVAILABILITY: '/api/board/setBoardContentAvailability',        //게시판 글 게시여부
    SET_BOARD_CONTENTS_AVAILABILITY: '/api/board/setBoardContentsAvailability',      //게시판 글들 게시여부
    GET_DUPLICATED_BOARD_CONTENT_COUNT: '/api/board/getDuplicatedBoardContentCount'  //일괄 등록 콘텐츠(복제 콘텐츠) 개수 얻기
};

Triton.Board.useUserOpenPopup = true;
Triton.Board.setUseUserOpenPopup = function (use) {
    Triton.Board.useUserOpenPopup = use;
};


Triton.Board.setApiUrl = function (apiUrls) {
    Triton.Board.ApiUrl = Lia.combine(Triton.Board.ApiUrl, apiUrls);
};

Triton.Board.requester = undefined;
Triton.Board.setRequester = function (requester) {
    Triton.Board.requester = requester;
};

// 요청 파라미터 조정
Triton.Board.parameterMapConverter = function (type, parameterMap, data, board) {
};
Triton.Board.setParameterMapConverter = function (listener) {
    Triton.Board.parameterMapConverter = listener;
};

// 메세지 체크
Triton.Board.responseChecker = function (type, status, data, request) {
    if (status != Lia.Requester.Status.SUCCESS)
        return false;
    return true;
};
Triton.Board.setResponseChecker = function (checker) {
    Triton.Board.responseChecker = checker;
};


Triton.Board.SectionType = {
    BUTTON: 1,
    COMMENT_WRITE: 2,
    COMMENT_LIST: 3
};

Triton.Board.ModuleType = {
    BOARD_LIST: 1,
    BOARD_WRITE: 2,
    BOARD_DETAIL: 3,
    BOARD_COMMENT_LIST: 4,
    BOARD_CATEGORY_LIST: 5,
    BOARD_CATEGORY_WRITE: 6,
    BOARD_GALLERY_LIST: 7
};

// 값 리스트
Triton.Board.ValueType = {
    BOARD_ID: 1,
    CATEGORY_OPTION_LIST: 2,
    SEARCH_OPTION_LIST: 3,

    BOARD_CONTENT_SUMMARY_LIST: 5,

    ROW_NUMBER: 6,
    TITLE: 7,
    CATEGORY: 8,
    IS_PRIVATE: 9,
    IS_EDITABLE: 10,
    IS_NEW: 11,
    IS_READABLE: 12,
    EFFECTIVE_START_DATE: 13,
    EFFECTIVE_END_DATE: 14,
    IS_ALWAYS_ON_TOP: 15,
    IS_AVAILABLE: 16,
    COMMENT_COUNT: 17,
    VIEW_COUNT: 18,
    ATTACHMENT: 19,
    WRITER: 20,
    REGISTERED_DATE: 21,

    TOTAL_COUNT: 22,
    PAGE: 23,
    COUNT: 24,
    IS_VIEWABLE: 25,
    BODY: 26,

    BOARD_CONTENT: 27,
    EFFECTIVE_DATE: 28,
    IS_AVAILABLE_EFFECTIVE_DATE: 29,
    THUMBNAIL_IMAGE_URL: 30,

    TITLE_AND_WRITER_AND_REGISTERED_DATE: 31,
    TITLE_AND_REGISTERED_DATE_AND_VIEW_COUNT: 67,

    ATTACHMENT_LIST: 32,
    ATTACHMENT_FILE_NAME: 33,
    ATTACHMENT_FILE_SIZE: 34,
    ATTACHMENT_FILE_URL: 35,

    IS_DELETED: 36,

    DELETION_INFO_WHEN_DELETED: 37,

    DELETED_BY_USER_NAME: 38,
    DELETED_FROM_IP_ADDRESS: 39,
    DELETED_DATE: 40,

    CATEGORY_NAME: 41,
    BOARD_CONTENT_CATEGORY_LIST: 42,

    MODIFY_AND_DELETE: 43,
    BOARD_CONTENT_CATEGORY: 44,

    WRITABLE_START_DATE: 45,
    WRITABLE_END_DATE: 46,
    WRITABLE_DATE: 47,

    STATUS: 48,
    SHOW_ON_CMS_ONLY: 49,
    LINK: 50,

    CHECK_BOX: 51,
    IMAGE_URL: 52,

    PROGRESS: 53,

    TASK_START_DATE: 54,
    TASK_END_DATE: 55,
    TASK_DATE: 56,

    VIDEO_URL: 57,

    FLOATING_TEXT: 58,

    GALLERY_TYPE: 59,

    EVENT_START_DATE: 60,
    EVENT_END_DATE: 61,
    EVENT_DATE: 62,

    ALWAYS_ON_TOP_DATE: 63,
    IS_ALWAYS_ON_TOP_DATE: 64,
    ALWAYS_ON_TOP_START_DATE: 65,
    ALWAYS_ON_TOP_END_DATE: 66,

    SEND_SMS_NOTIFICATION: 67,
    SEND_EMAIL_NOTIFICATION: 68,

    COMMENT_BODY: 69,

    ROW_THEME: 70,

    LAST_MODIFIED_DATE: 71,

    TITLE_AND_WRITER_AND_LAST_MODIFIED_DATE : 72
};

Triton.Board.CustomFieldType = {
    LIST_NAME: 20001,
    LIST_VALUE: 20002,
    LIST_OPTIONS: 20003,
    LIST_HEADER_OPTIONS: 20004,


    DETAIL_NAME: 10001,
    DETAIL_VALUE: 10002,

    WRITE_NAME: 30001,
    WRITE_VALUE: 30002,
};

Triton.Board.FieldName = {

    BOARD_ID: 1,
    ID: 2,
    CATEGORY_ID: 3,
    PARENT_ID: 4,
    PARENT_BOARD_CONTENT_ID: 5,
    BOARD_CONTENT_CATEGORY_ID: 6,
    ID_LIST: 7,
    BOARD_ID_LIST: 8,

    requestNameMap: {},
    responseNameMap: {},

    init: function () {

        Triton.Board.FieldName.setName(Triton.Board.FieldName.BOARD_ID, "boardId", "board_id");
        Triton.Board.FieldName.setName(Triton.Board.FieldName.ID, "id");
        Triton.Board.FieldName.setName(Triton.Board.FieldName.CATEGORY_ID, "categoryId", 'category_id');
        Triton.Board.FieldName.setName(Triton.Board.FieldName.PARENT_ID, "parentId", 'parent_id');
        Triton.Board.FieldName.setName(Triton.Board.FieldName.PARENT_BOARD_CONTENT_ID, "parentBoardContentId", 'parent_board_content_id');
        Triton.Board.FieldName.setName(Triton.Board.FieldName.BOARD_CONTENT_CATEGORY_ID, "boardContentCategoryId", 'board_content_category_id');
        Triton.Board.FieldName.setName(Triton.Board.FieldName.ID_LIST, "idList", 'id_list');
        Triton.Board.FieldName.setName(Triton.Board.FieldName.BOARD_ID_LIST, "boardIdList", 'board_id_list');
    },

    setName: function (code, requestName, responseName) {

        if (responseName == undefined) {
            responseName = requestName;
        }

        Triton.Board.FieldName.setRequestName(code, requestName);
        Triton.Board.FieldName.setResponseName(code, responseName);
    },

    setRequestName: function (code, name) {
        Triton.Board.FieldName.requestNameMap[code] = name;
    },

    setResponseName: function (code, name) {
        Triton.Board.FieldName.responseNameMap[code] = name;
    },

    getRequestName: function (code) {
        return Triton.Board.FieldName.requestNameMap[code];
    },

    getResponseName: function (code) {
        return Triton.Board.FieldName.responseNameMap[code];
    }
};
Triton.Board.FieldName.init();

// 값 이름
Triton.Board.ColumnValue = {

    Type: {

        LIST_HEADER_COLUMN: 1,
        LIST_COLUMN: 2
    },

    nameMap: {},
    optionsMap: {},
    typeOptionMap: {},

    setDefaultValues: function () {

        Triton.Board.ColumnValue.setOptions(Triton.Board.ValueType.CHECK_BOX, {
            css: {'width': '50px'}
        });
        Triton.Board.ColumnValue.setOptions(Triton.Board.ValueType.ROW_NUMBER, {
            css: {'width': '65px'}
        });
        Triton.Board.ColumnValue.setOptions(Triton.Board.ValueType.CATEGORY, {
            css: {'width': '100px'}
        });
        Triton.Board.ColumnValue.setOptions(Triton.Board.ValueType.WRITER, {
            css: {'width': '150px'}
        });
        Triton.Board.ColumnValue.setOptions(Triton.Board.ValueType.REGISTERED_DATE, {
            css: {'width': '85px'}
        });
        Triton.Board.ColumnValue.setOptions(Triton.Board.ValueType.LAST_MODIFIED_DATE, {
            css: {'width': '85px'}
        });
        Triton.Board.ColumnValue.setOptions(Triton.Board.ValueType.VIEW_COUNT, {
            css: {'width': '85px'}
        });
        Triton.Board.ColumnValue.setOptions(Triton.Board.ValueType.COMMENT_COUNT, {
            css: {'width': '85px'}
        });
        Triton.Board.ColumnValue.setOptions(Triton.Board.ValueType.IS_AVAILABLE, {
            css: {'width': '60px'}
        });
        Triton.Board.ColumnValue.setOptions(Triton.Board.ValueType.MODIFY_AND_DELETE, {
            css: {'width': '240px'}
        });
        Triton.Board.ColumnValue.setOptions(Triton.Board.ValueType.WRITABLE_START_DATE, {
            css: {'width': '150px'}
        });
        Triton.Board.ColumnValue.setOptions(Triton.Board.ValueType.WRITABLE_END_DATE, {
            css: {'width': '150px'}
        });
        Triton.Board.ColumnValue.setOptions(Triton.Board.ValueType.WRITABLE_DATE, {
            css: {'width': '280px'}
        });
        Triton.Board.ColumnValue.setOptions(Triton.Board.ValueType.ATTACHMENT, {
            css: {'width': '60px'}
        });
        Triton.Board.ColumnValue.setOptions(Triton.Board.ValueType.TITLE, {
            css: {'text-align': 'left', 'padding-left': '15px'}
        }, Triton.Board.ColumnValue.Type.LIST_COLUMN);
        Triton.Board.ColumnValue.setOptions(Triton.Board.ValueType.STATUS, {
            css: {'width': '156px'}
        });
        Triton.Board.ColumnValue.setOptions(Triton.Board.ValueType.PROGRESS, {
            css: {'width': '50px'}
        });

        Triton.Board.ColumnValue.setName(Triton.Board.ValueType.ROW_NUMBER, Lia.Strings.getString(Lia.Strings.BOARD.NO));
        Triton.Board.ColumnValue.setName(Triton.Board.ValueType.TITLE, Lia.Strings.getString(Lia.Strings.BOARD.TITLE));
        Triton.Board.ColumnValue.setName(Triton.Board.ValueType.TITLE_AND_WRITER_AND_REGISTERED_DATE, Lia.Strings.getString(Lia.Strings.BOARD.TITLE));
        Triton.Board.ColumnValue.setName(Triton.Board.ValueType.TITLE_AND_REGISTERED_DATE_AND_VIEW_COUNT, Lia.Strings.getString(Lia.Strings.BOARD.TITLE));
        Triton.Board.ColumnValue.setName(Triton.Board.ValueType.TITLE_AND_WRITER_AND_LAST_MODIFIED_DATE, Lia.Strings.getString(Lia.Strings.BOARD.TITLE));
        Triton.Board.ColumnValue.setName(Triton.Board.ValueType.CATEGORY, Lia.Strings.getString(Lia.Strings.BOARD.CATEGORY));
        Triton.Board.ColumnValue.setName(Triton.Board.ValueType.IS_PRIVATE, Lia.Strings.getString(Lia.Strings.BOARD.PRIVATE_CONTENT));
        Triton.Board.ColumnValue.setName(Triton.Board.ValueType.EFFECTIVE_START_DATE, '게시 시작 일');
        Triton.Board.ColumnValue.setName(Triton.Board.ValueType.EFFECTIVE_END_DATE, '게시 마감 일');
        Triton.Board.ColumnValue.setName(Triton.Board.ValueType.EFFECTIVE_DATE, '게시 일');
        Triton.Board.ColumnValue.setName(Triton.Board.ValueType.IS_AVAILABLE, '게시');
        Triton.Board.ColumnValue.setName(Triton.Board.ValueType.IS_AVAILABLE_EFFECTIVE_DATE, '게시');
        Triton.Board.ColumnValue.setName(Triton.Board.ValueType.THUMBNAIL_IMAGE_URL, '썸네일 이미지');
        Triton.Board.ColumnValue.setName(Triton.Board.ValueType.IMAGE_URL, '이미지');
        Triton.Board.ColumnValue.setName(Triton.Board.ValueType.VIDEO_URL, '비디오');
        Triton.Board.ColumnValue.setName(Triton.Board.ValueType.VIEW_COUNT, Lia.Strings.getString(Lia.Strings.BOARD.VIEWS));
        Triton.Board.ColumnValue.setName(Triton.Board.ValueType.COMMENT_COUNT, '참여자 수');
        Triton.Board.ColumnValue.setName(Triton.Board.ValueType.ATTACHMENT, Lia.Strings.getString(Lia.Strings.BOARD.ATTACHMENT));
        Triton.Board.ColumnValue.setName(Triton.Board.ValueType.WRITER, Lia.Strings.getString(Lia.Strings.BOARD.AUTHOR));
        Triton.Board.ColumnValue.setName(Triton.Board.ValueType.BODY, Lia.Strings.getString(Lia.Strings.BOARD.BODY));
        Triton.Board.ColumnValue.setName(Triton.Board.ValueType.COMMENT_BODY, '댓글 내용');
        Triton.Board.ColumnValue.setName(Triton.Board.ValueType.LINK, '링크');
        Triton.Board.ColumnValue.setName(Triton.Board.ValueType.IS_ALWAYS_ON_TOP, '항상 위');
        Triton.Board.ColumnValue.setName(Triton.Board.ValueType.REGISTERED_DATE, Lia.Strings.getString(Lia.Strings.BOARD.REGISTERED_DATE));
        Triton.Board.ColumnValue.setName(Triton.Board.ValueType.LAST_MODIFIED_DATE, Lia.Strings.getString(Lia.Strings.BOARD.LAST_MODIFIED_DATE));
        Triton.Board.ColumnValue.setName(Triton.Board.ValueType.DELETION_INFO_WHEN_DELETED, '삭제정보');

        Triton.Board.ColumnValue.setName(Triton.Board.ValueType.DELETED_BY_USER_NAME, '이름');
        Triton.Board.ColumnValue.setName(Triton.Board.ValueType.DELETED_FROM_IP_ADDRESS, 'IP');
        Triton.Board.ColumnValue.setName(Triton.Board.ValueType.DELETED_DATE, '삭제일시');

        Triton.Board.ColumnValue.setName(Triton.Board.ValueType.CATEGORY_NAME, '이름');
        Triton.Board.ColumnValue.setName(Triton.Board.ValueType.MODIFY_AND_DELETE, '수정 및 삭제');

        Triton.Board.ColumnValue.setName(Triton.Board.ValueType.WRITABLE_DATE, '쓰기 가능 기간');
        Triton.Board.ColumnValue.setName(Triton.Board.ValueType.WRITABLE_START_DATE, '쓰기 가능 시작 기간');
        Triton.Board.ColumnValue.setName(Triton.Board.ValueType.WRITABLE_END_DATE, '쓰기 가능 종료 기간');

        Triton.Board.ColumnValue.setName(Triton.Board.ValueType.STATUS, '상태');

        Triton.Board.ColumnValue.setName(Triton.Board.ValueType.PROGRESS, '공정률');

        Triton.Board.ColumnValue.setName(Triton.Board.ValueType.TASK_DATE, '작업 기간');
        Triton.Board.ColumnValue.setName(Triton.Board.ValueType.EVENT_DATE, '이벤트 기간');

        Triton.Board.ColumnValue.setName(Triton.Board.ValueType.FLOATING_TEXT, '흐르는 TEXT');

        Triton.Board.ColumnValue.setName(Triton.Board.ValueType.GALLERY_TYPE, '갤러리 타입');

        Triton.Board.ColumnValue.setName(Triton.Board.ValueType.ALWAYS_ON_TOP_DATE, '항상 위 기간');
        Triton.Board.ColumnValue.setName(Triton.Board.ValueType.IS_ALWAYS_ON_TOP_DATE, '항상 위');
    },

    setOptions: function (typeCode, options, type) {

        if (type == undefined) {

            Triton.Board.ColumnValue.optionsMap[typeCode] = options;

        } else {

            if (Triton.Board.ColumnValue.typeOptionMap[type] == undefined) {
                Triton.Board.ColumnValue.typeOptionMap[type] = {};
            }

            Triton.Board.ColumnValue.typeOptionMap[type][typeCode] = options;
        }
    },
    getOptions: function (typeCode, type) {

        var defaultOptions = Lia.pd({}, Triton.Board.ColumnValue.optionsMap, typeCode);

        var options = undefined;
        if (type == undefined) {
            options = defaultOptions;
        } else {
            options = Lia.pd(defaultOptions, Triton.Board.ColumnValue.typeOptionMap, type, typeCode);
        }

        return Lia.deepCopy(options);
    },

    setName: function (typeCode, name) {
        Triton.Board.ColumnValue.nameMap[typeCode] = name;
    },

    getName: function (typeCode) {
        return Triton.Board.ColumnValue.nameMap[typeCode];
    }
};
Triton.Board.ColumnValue.setDefaultValues();


// 값 뽑는 것
Triton.Board.valueExtractor = function (type, data, item, board) {
    return undefined;
};
Triton.Board.setValueExtractor = function (listener) {
    Triton.Board.valueExtractor = listener;
};

Triton.Board.MessageType = {
    LOADING_START: 1,
    LOADING_END: 2,

    AVAILABLE_CHANGE: 3,
    AVAILABLE_CHANGE_COMPLETED: 4,

    FAILED_TO_FIND_BOARD: 5,
    FAILED_TO_FIND_BOARD_CONTENT: 6,

    REQUIRE_FIELD: 7,

    DELETE_BOARD_CONTENT: 8,
    DELETE_BOARD_CONTENT_PERMANENTLY: 9,

    RECOVER_BOARD_CONTENT: 10,

    DELETE_BOARD_CONTENT_CATEGORY: 11,

    DELETE_BOARD_CONTENT_CATEGORY_COMPLETED: 12,

    FAILED_TO_FIND_BOARD_CONTENT_CATEGORY: 13,

    NO_SELECTED_ITEM: 14
};

Triton.Board.messageHandler = function (messageTypeCode, data, item, callback, callbackData) {
};
Triton.Board.setMessageHandler = function (messageHandler) {
    Triton.Board.messageHandler = messageHandler;
};

// 표시 필드 리스트
Triton.Board.FormName = {

    formNameMap: {},

    init: function () {

        Triton.Board.FormName.formNameMap[Triton.Board.ValueType.CATEGORY] = 'categoryId';
        Triton.Board.FormName.formNameMap[Triton.Board.ValueType.TITLE] = 'title';
        Triton.Board.FormName.formNameMap[Triton.Board.ValueType.THUMBNAIL_IMAGE_URL] = 'thumbnailImageUrl';
        Triton.Board.FormName.formNameMap[Triton.Board.ValueType.IMAGE_URL] = 'imageUrl';
        Triton.Board.FormName.formNameMap[Triton.Board.ValueType.VIDEO_URL] = 'videoUrl';
        Triton.Board.FormName.formNameMap[Triton.Board.ValueType.BODY] = 'body';
        Triton.Board.FormName.formNameMap[Triton.Board.ValueType.EFFECTIVE_START_DATE] = 'effectiveStartDate';
        Triton.Board.FormName.formNameMap[Triton.Board.ValueType.EFFECTIVE_END_DATE] = 'effectiveEndDate';
        Triton.Board.FormName.formNameMap[Triton.Board.ValueType.ATTACHMENT] = 'attachmentList';
        Triton.Board.FormName.formNameMap[Triton.Board.ValueType.ATTACHMENT_LIST] = 'attachmentList';
        Triton.Board.FormName.formNameMap[Triton.Board.ValueType.IS_PRIVATE] = 'isPrivate';
        Triton.Board.FormName.formNameMap[Triton.Board.ValueType.IS_ALWAYS_ON_TOP] = 'isAlwaysOnTop';
        Triton.Board.FormName.formNameMap[Triton.Board.ValueType.IS_AVAILABLE] = 'isAvailable';
        Triton.Board.FormName.formNameMap[Triton.Board.ValueType.CATEGORY_NAME] = 'name';
        Triton.Board.FormName.formNameMap[Triton.Board.ValueType.WRITABLE_START_DATE] = 'writableStartDate';
        Triton.Board.FormName.formNameMap[Triton.Board.ValueType.WRITABLE_END_DATE] = 'writableEndDate';
        Triton.Board.FormName.formNameMap[Triton.Board.ValueType.STATUS] = 'statusCode';
        Triton.Board.FormName.formNameMap[Triton.Board.ValueType.SHOW_ON_CMS_ONLY] = 'showOnCmsOnly';
        Triton.Board.FormName.formNameMap[Triton.Board.ValueType.PROGRESS] = 'progress';
        Triton.Board.FormName.formNameMap[Triton.Board.ValueType.TASK_START_DATE] = 'taskStartDate';
        Triton.Board.FormName.formNameMap[Triton.Board.ValueType.TASK_END_DATE] = 'taskEndDate';
        Triton.Board.FormName.formNameMap[Triton.Board.ValueType.EVENT_START_DATE] = 'eventStartDate';
        Triton.Board.FormName.formNameMap[Triton.Board.ValueType.EVENT_END_DATE] = 'eventEndDate';
        Triton.Board.FormName.formNameMap[Triton.Board.ValueType.FLOATING_TEXT] = 'title';
        Triton.Board.FormName.formNameMap[Triton.Board.ValueType.LINK] = 'linkUrl';
        Triton.Board.FormName.formNameMap[Triton.Board.ValueType.ALWAYS_ON_TOP_START_DATE] = 'alwaysOnTopStartDate';
        Triton.Board.FormName.formNameMap[Triton.Board.ValueType.ALWAYS_ON_TOP_END_DATE] = 'alwaysOnTopEndDate';
        Triton.Board.FormName.formNameMap[Triton.Board.ValueType.SEND_SMS_NOTIFICATION] = 'sendSmsNotification';
        Triton.Board.FormName.formNameMap[Triton.Board.ValueType.SEND_EMAIL_NOTIFICATION] = 'sendEmailNotification';
        Triton.Board.FormName.formNameMap[Triton.Board.ValueType.COMMENT_BODY] = 'body';

    },

    getName: function (valueTypeCode) {
        return Triton.Board.FormName.formNameMap[valueTypeCode];
    }

};
Triton.Board.FormName.init();
Triton.Board.uploaderParmaeterMap = {};

Triton.Board.setUploaderParameterMap = function (parameterMap) {
    Triton.Board.uploaderParmaeterMap = parameterMap;
};


/*

함수형
    var customName = customFunction(Triton.Board.CustomFieldType.LIST_NAME, data, undefined, boardList);
    var customOptions = customFunction(Triton.Board.CustomFieldType.LIST_HEADER_OPTIONS, data, undefined, boardList);
    var customValue = customFunction(Triton.Board.CustomFieldType.LIST_VALUE, data, contentSummary, boardList);
    var customOptions = customFunction(Triton.Board.CustomFieldType.LIST_OPTIONS, data, contentSummary, boardList);

객체
    {
        attachHeaderToBoardList : function ( listTable, boardList ) {

        },
        attachToBoardList : function ( listTable, contentSummary, data, boardList ){
        }
    }

*/

var BoardList = Triton.BoardList = function (options) {
    this.init(options);
};


Triton.BoardList.prototype = new Triton.Board();
Triton.BoardList.prototype.init = function (options) {

    //this.boardContentSummaryRequestParameterMap
    //this.boardId = undefined;
    //this.categoryOptionList = undefined;
    //this.parameterMap = undefined;
    //this.boardContentId = undefined;
    //this.boardContent = undefined;
    //this.boardContentCategory = undefined;
    //this.boardContentCategoryId = undefined;

    this.moduleTypeCode = Triton.Board.ModuleType.BOARD_LIST;
    this.options = options;
    this.requireBoardId = Lia.pd(true, options, 'requireBoardId');
    this.targetBoardId = Lia.p(options, 'targetBoardId');
    this.typeCode = Lia.p(options, 'typeCode');
    this.baseRequestParameterMap = Lia.p(options, 'baseRequestParameterMap');
    this.fieldOrderByChecker = Lia.pd(Triton.BoardList.fieldOrderByChecker, options, 'fieldOrderByChecker');
    this.listRequestParameterMap = Lia.p(options, 'listRequestParameterMap');
    this.markBoardContentId = Lia.p(options, 'markBoardContentId');
    this.onPageSelected = Lia.p(options, 'onPageSelected');

    this.requester = Lia.pd(Triton.Board.requester, options, 'requester');
    if (this.requester == undefined) {
        this.requester = new jQuery.Requester();
    }

    {
        var fieldList = Lia.pd(Triton.BoardList.fieldList, options, 'fieldList');
        var hideFieldList = Lia.p(options, 'hideFieldList');
        if (hideFieldList != undefined) {

            var newFieldList = [];
            for (var i = 0, l = fieldList.length; i < l; i++) {

                var field = fieldList[i];
                var hide = false;
                for (var i2 = 0, l2 = hideFieldList.length; i2 < l2; i2++) {

                    var hideField = hideFieldList[i2];
                    if (field == hideField) {
                        hide = true;
                        break;
                    }
                }

                if (hide == false) {
                    newFieldList.push(field);
                }
            }

            fieldList = newFieldList;
        }
        this.fieldList = fieldList;
    }

    var section = new Triton.Section();

    var title = Lia.p(options, 'title');
    if (title != undefined) {
        section.append(new Triton.Title({content: title}));
    }

    this.categorySection = new Triton.LeftRightSection({
        appendTo: section
    });

    this.listSection = new Triton.Section({
        appendTo: section
    });

    this.onMoveDetailPage = Lia.p(options, 'onMoveDetailPage');

    this.registerButtonName = Lia.pd(Triton.BoardList.defaultRegisterButtonName, options, 'registerButtonName');

    {
        this.bottomButtonSection = new Triton.ButtonSection({
            appendTo: section
        });

        this.useTopButtonSection = Lia.pd(Triton.BoardList.defaultUseTopButtonSection, options, 'useTopButtonSection');

        var buttonSection = this.buttonSection = (this.useTopButtonSection) ? this.categorySection : this.bottomButtonSection;

        var defaultButtonLayout = Lia.pd(true, options, 'defaultButtonLayout');
        if (defaultButtonLayout) {

            var onMoveCategoryEditPage = Lia.p(options, 'onMoveCategoryEditPage');
            if (onMoveCategoryEditPage != undefined) {

                var onMoveCategoryEditPageButtonName = Lia.pd('카테고리 편집', options, 'onMoveCategoryEditPageButtonName');

                buttonSection.appendToRight(new Triton.FlatButton({
                    theme: Triton.FlatButton.Theme.Header,
                    content: onMoveCategoryEditPageButtonName,
                    boardList: this,
                    onMoveCategoryEditPage: onMoveCategoryEditPage,
                    onClick: function (e) {

                        var onMoveCategoryEditPage = e.data.onMoveCategoryEditPage;
                        var boardList = e.data.boardList;

                        onMoveCategoryEditPage(boardList);
                    }
                }));
            }

            var onMoveRegisterPage = Lia.p(options, 'onMoveRegisterPage');
            if (onMoveRegisterPage != undefined) {

                buttonSection.appendToRight(new Triton.FlatButton({
                    theme: Triton.FlatButton.Theme.Header,
                    content: this.registerButtonName,
                    boardList: this,
                    onMoveRegisterPage: onMoveRegisterPage,
                    onClick: function (e) {

                        var onMoveRegisterPage = e.data.onMoveRegisterPage;
                        var boardList = e.data.boardList;

                        onMoveRegisterPage(boardList);
                    }
                }));
            }

        }
    }

    this.disavailabilityButtonShow = Lia.pd(Triton.BoardList.defaultDisavailabilityButtonShow, options, 'disavailabilityButtonShow');
    if (this.disavailabilityButtonShow == true) {
        this.disavailabilityButtonName = Lia.pd('게시 해제', options, 'disavailabilityButtonName');

        buttonSection.appendToRight(new Triton.FlatButton({
            theme: Triton.FlatButton.Theme.Header,
            content: this.disavailabilityButtonName,
            boardList: this,
            onClick: function (e) {

                var boardList = e.data.boardList;
                var rowList = boardList.getCheckedRowList();
                if (rowList.length == 0) {
                    Triton.Board.messageHandler(Triton.Board.MessageType.NO_SELECTED_ITEM);
                } else {

                    Triton.Board.messageHandler(Triton.Board.MessageType.AVAILABLE_CHANGE, undefined, undefined, function (data) {

                        var rowList = data['rowList'];
                        var boardList = data['boardList'];

                        Triton.Board.messageHandler(Triton.Board.MessageType.LOADING_START);

                        boardList.requester.ajaxWithoutBlank(Triton.Board.ApiUrl.SET_BOARD_CONTENTS_AVAILABILITY,
                            Triton.Board.parameterMapConverter(Triton.Board.UrlType.SET_BOARD_CONTENTS_AVAILABILITY, rowList, 0, boardList),
                            function (status, data, request) {

                                Triton.Board.messageHandler(Triton.Board.MessageType.LOADING_END);

                                if (Triton.Board.responseChecker(Triton.Board.UrlType.SET_BOARD_CONTENT_AVAILABILITY, status, data, request) == false) {
                                    return;
                                }

                                Triton.Board.messageHandler(Triton.Board.MessageType.AVAILABLE_CHANGE_COMPLETED, undefined, undefined, function () {
                                    Lia.refresh();
                                });
                            });


                    }, {
                        rowList: rowList,
                        boardList: boardList
                    });
                }

            }
        }));
    }

    this.availabilityButtonShow = Lia.pd(Triton.BoardList.defaultAvailabilityButtonShow, options, 'availabilityButtonShow');
    if (this.availabilityButtonShow == true) {

        this.availabilityButtonName = Lia.pd('게시 설정', options, 'availabilityButtonName');

        buttonSection.appendToRight(new Triton.FlatButton({
            theme: Triton.FlatButton.Theme.Header,
            content: this.availabilityButtonName,
            boardList: this,
            onClick: function (e) {


                var boardList = e.data.boardList;
                var rowList = boardList.getCheckedRowList();
                if (rowList.length == 0) {
                    Triton.Board.messageHandler(Triton.Board.MessageType.NO_SELECTED_ITEM);
                } else {

                    Triton.Board.messageHandler(Triton.Board.MessageType.AVAILABLE_CHANGE, undefined, undefined, function (data) {

                        var rowList = data['rowList'];
                        var boardList = data['boardList'];

                        Triton.Board.messageHandler(Triton.Board.MessageType.LOADING_START);

                        boardList.requester.ajaxWithoutBlank(Triton.Board.ApiUrl.SET_BOARD_CONTENTS_AVAILABILITY,
                            Triton.Board.parameterMapConverter(Triton.Board.UrlType.SET_BOARD_CONTENTS_AVAILABILITY, rowList, 1, boardList),
                            function (status, data, request) {

                                Triton.Board.messageHandler(Triton.Board.MessageType.LOADING_END);

                                if (Triton.Board.responseChecker(Triton.Board.UrlType.SET_BOARD_CONTENT_AVAILABILITY, status, data, request) == false) {
                                    return;
                                }

                                Triton.Board.messageHandler(Triton.Board.MessageType.AVAILABLE_CHANGE_COMPLETED, undefined, undefined, function () {
                                    Lia.refresh();
                                });
                            });


                    }, {
                        rowList: rowList,
                        boardList: boardList
                    });
                }

            }
        }));
    }

    this.simpleAvailabilityButtonShow = Lia.pd(Triton.BoardList.defaultSimpleAvailabilityButtonShow, options, 'simpleAvailabilityButtonShow');
    if (this.simpleAvailabilityButtonShow == true) {
        this.simpleAvailabilityButtonName = Lia.pd('게시 설정', options, 'availabilityButtonName');

        buttonSection.appendToRight(new Triton.FlatButton({
            theme: Triton.FlatButton.Theme.Header,
            content: this.simpleAvailabilityButtonName,
            boardList: this,
            onClick: function (e) {

                var boardList = e.data.boardList;
                var rowList = boardList.getCheckedRowList();
                if (rowList.length == 0) {
                    Triton.Board.messageHandler(Triton.Board.MessageType.NO_SELECTED_ITEM);
                } else {

                    //Triton.Board.messageHandler(Triton.Board.MessageType.AVAILABLE_CHANGE, undefined, undefined, function (data) {

                    // var rowList = data['rowList'];
                    // var boardList = data['boardList'];

                    //Triton.Board.messageHandler(Triton.Board.MessageType.LOADING_START);

                    AjaxPopupManager.show(Triton.PopupUrl.BOARD_AVAILABLE_RADIO, {
                        'rowList': rowList,
                        'url': ApiUrl.Board.SET_BOARD_CONTENT_AVAILABILITY,
                        'boardList': boardList
                    });

                    // boardList.requester.ajaxWithoutBlank(Triton.Board.ApiUrl.SET_BOARD_CONTENTS_AVAILABILITY,
                    //     Triton.Board.parameterMapConverter(Triton.Board.UrlType.SET_BOARD_CONTENTS_AVAILABILITY, rowList, 1, boardList),
                    //     function (status, data, request) {
                    //
                    //         Triton.Board.messageHandler(Triton.Board.MessageType.LOADING_END);
                    //
                    //         if (Triton.Board.responseChecker(Triton.Board.UrlType.SET_BOARD_CONTENT_AVAILABILITY, status, data, request) == false) {
                    //             return;
                    //         }
                    //
                    //         Triton.Board.messageHandler(Triton.Board.MessageType.AVAILABLE_CHANGE_COMPLETED, undefined, undefined, function () {
                    //             Lia.refresh();
                    //         });
                    //     });


                    // }, {
                    //     rowList: rowList,
                    //     boardList: boardList
                    // });
                }

            }
        }));
    }

    this.checkBoxRequired = (Lia.pd(false, options, 'checkBoxRequired') || this.disavailabilityButtonShow || this.availabilityButtonShow
        || this.simpleAvailabilityButtonShow);

    this.additionalParameterMap = Lia.p(options, 'additionalParameterMap');

    this.statusComboBoxShow = Lia.pd(true, options, 'statusComboBoxShow');
    this.countComBoxShow = Lia.pd(true, options, 'countComBoxShow');
    this.categoryComboBoxShow = Lia.pd(true, options, 'categoryComboBoxShow');

    this.allCategoryShow = Lia.pd(Triton.BoardList.defaultAllCategoryShow, options, 'allCategoryShow');
    this.allCategoryName = Lia.pd(Triton.BoardList.defaultAllCategoryName, options, 'allCategoryName');
    this.allCategoryValue = Lia.pd(Triton.BoardList.defaultAllCategoryValue, options, 'allCategoryValue');

    this.searcherShow = Lia.pd(true, options, 'searcherShow');

    this.titleCommentCountShow = Lia.pd(true, options, 'titleCommentCountShow');
    this.titlePrivateShow = Lia.pd(true, options, 'titlePrivateShow');
    this.titleNewShow = Lia.pd(true, options, 'titleNewShow');
    this.titleAnsweredShow = Lia.pd(false, options, 'titleAnsweredShow');

    this.stausComboBox = undefined;
    this.countComboBox = undefined;
    this.categoryComboBox = undefined;
    this.searcher = undefined;

    this.jView = section.get();
    this.initBoard(options);
};

Triton.BoardList.prototype.getCategorySection = function () {
    return this.categorySection;
};


Triton.BoardList.prototype.appendButtonSectionToRight = function (item) {
    this.buttonSection.appendToRight(item);
};

Triton.BoardList.prototype.appendButtonSectionToLeft = function (item) {
    this.buttonSection.appendToLeft(item);
};

Triton.BoardList.prototype.getCheckedRowList = function () {

    var boardList = this;

    var rowList = [];

    var jCheckBox = boardList.find('.triton_board_list_check_box');
    for (var i = 0, l = jCheckBox.length; i < l; i++) {

        if (jCheckBox.eq(i).getTriton().getPressed()) {
            rowList.push(jCheckBox.eq(i).closest('.' + Triton.ListTable.Row.NAME).getTriton());
        }
    }

    return rowList;
};

Triton.BoardList.prototype.change = function (parameterMap) {

    var boardList = this;

    parameterMap = Lia.deepCopy(parameterMap);

    Triton.Board.messageHandler(Triton.Board.MessageType.LOADING_START);

    if (boardList.requireBoardId && Triton.BoardList.boardListChangeChecker(Triton.Board.ValueType.BOARD_ID, parameterMap, boardList)) {

        //boardList.optionSection.empty();

        if (boardList.stausComboBox != undefined) {
            boardList.stausComboBox.remove();
            boardList.stausComboBox = null;
        }

        if (boardList.stausComboBox != undefined) {
            boardList.stausComboBox.remove();
            boardList.stausComboBox = null;
        }

        if (boardList.countComboBox != undefined) {
            boardList.countComboBox.remove();
            boardList.countComboBox = null;
        }

        if (boardList.categoryComboBox != undefined) {
            boardList.categoryComboBox.remove();
            boardList.categoryComboBox = null;
        }

        if (boardList.searcher != undefined) {
            boardList.searcher.remove();
            boardList.searcher = null;
        }

        var targetBoardId = boardList.getTargetBoardId();
        if (targetBoardId == undefined) {

            boardList.requester.ajaxWithoutBlank(Triton.Board.ApiUrl.GET_BOARD_LIST,
                Triton.Board.parameterMapConverter(Triton.Board.UrlType.GET_BOARD_LIST, parameterMap, undefined, boardList),
                function (status, data, request) {

                    if (Triton.Board.responseChecker(Triton.Board.UrlType.GET_BOARD_LIST, status, data, request) == false) {
                        Triton.Board.messageHandler(Triton.Board.MessageType.LOADING_END);
                        return;
                    }

                    var boardList = request.object.boardList;
                    var boardId = Triton.Board.valueExtractor(Triton.Board.ValueType.BOARD_ID, data, undefined, boardList);
                    if (boardId == undefined) {
                        Triton.Board.messageHandler(Triton.Board.MessageType.FAILED_TO_FIND_BOARD, data, undefined, boardList);
                        return;
                    }

                    boardList.setBoardId(boardId);

                }, {boardList: boardList});

        } else {

            boardList.setBoardId(targetBoardId);
        }

        if (boardList.categoryComboBoxShow) {

            boardList.requester.func(function (execute) {

                var boardList = execute.object.boardList;
                var boardId = boardList.getBoardId();
                if (boardId == undefined) {
                    return;
                }

                var parameterMap = execute.object.parameterMap;

                boardList.requester.ajaxWithoutBlank(Triton.Board.ApiUrl.GET_BOARD_CONTENT_CATEGORY_LIST,
                    Triton.Board.parameterMapConverter(Triton.Board.UrlType.GET_BOARD_CONTENT_CATEGORY_LIST, parameterMap, undefined, boardList),
                    function (status, data, request) {

                        if (Triton.Board.responseChecker(Triton.Board.UrlType.GET_BOARD_CONTENT_CATEGORY_LIST, status, data, request) == false) {
                            Triton.Board.messageHandler(Triton.Board.MessageType.LOADING_END);
                            return;
                        }

                        var boardList = request.object.boardList;
                        boardList.setCategoryOptionList(Triton.Board.valueExtractor(Triton.Board.ValueType.CATEGORY_OPTION_LIST, data, undefined, boardList));

                    }, {boardList: boardList});

            }, {
                parameterMap: parameterMap,
                boardList: boardList
            });
        }
    }

    // 개수랑 검색 조건은 공통으로 들고오는 거라 보드 아이디랑 상관없음
    boardList.requester.func(function (execute) {

        var boardList = execute.object.boardList;
        boardList.requester.func(function (execute) {


            var boardList = execute.object.boardList;
            var boardId = boardList.getBoardId();
            if (boardList.requireBoardId && boardId == undefined) {
                return;
            }

            var categoryTheme = Triton.ComboBox.Theme.Category;

            if (boardList.statusComboBoxShow && boardList.stausComboBox == undefined) {

                boardList.stausComboBox = new Triton.ComboBox({
                    theme: categoryTheme,
                    form: {name: Triton.BoardList.OptionParameterName.STATUS_CODE},
                    optionList: [
                        {name: '등록 된 글', value: Triton.BoardList.StatusOption.REGISTERED},
                        {name: '삭제 된 글', value: Triton.BoardList.StatusOption.DELETED}
                    ],
                    boardList: boardList,
                    parameterMap: parameterMap,
                    onSelected: function (val, selectedOption, options) {
                        var boardList = Lia.p(options, 'boardList');
                        var parameterMap = Lia.p(options, 'parameterMap');
                        Triton.BoardList.onOptionChangeListener(Triton.BoardList.OptionParameterName.STATUS_CODE, val, parameterMap, boardList);
                    }
                });

                boardList.categorySection.appendToLeft(boardList.stausComboBox);
            }

            if (boardList.countComBoxShow && boardList.countComboBox == undefined) {

                var countOptionList = [];
                for (var i = 1, l = 10; i <= l; i++) {

                    var count = i * 10;
                    countOptionList.push({
                        name: count + ' ' + Lia.Strings.getString(Lia.Strings.BOARD.ITEMS_PER_PAGES),
                        value: count
                    });
                }

                boardList.countComboBox = new Triton.ComboBox({
                    form: {name: Triton.BoardList.OptionParameterName.COUNT},
                    theme: categoryTheme,
                    optionList: countOptionList,
                    appendTo: boardList.optionSection,
                    boardList: boardList,
                    parameterMap: parameterMap,
                    addClass: 'triton_mobile_hide',
                    onSelected: function (val, selectedOption, options) {

                        var boardList = Lia.p(options, 'boardList');
                        var parameterMap = Lia.p(options, 'parameterMap');

                        Triton.BoardList.onOptionChangeListener(Triton.BoardList.OptionParameterName.COUNT, val, parameterMap, boardList);
                    }
                });

                boardList.categorySection.appendToLeft(boardList.countComboBox);
            }

            if (boardList.categoryComboBoxShow && boardList.categoryComboBox == undefined) {

                boardList.categoryComboBox = new Triton.ComboBox({
                    form: {name: Triton.BoardList.OptionParameterName.CATEGORY_ID},
                    theme: categoryTheme,
                    optionList: boardList.getCategoryOptionList(),
                    appendTo: boardList.optionSection,
                    boardList: boardList,
                    parameterMap: parameterMap,
                    onSelected: function (val, selectedOption, options) {
                        var boardList = Lia.p(options, 'boardList');
                        var parameterMap = Lia.p(options, 'parameterMap');
                        Triton.BoardList.onOptionChangeListener(Triton.BoardList.OptionParameterName.CATEGORY_ID, val, parameterMap, boardList);
                    }
                });

                boardList.categorySection.appendToLeft(boardList.categoryComboBox);
            }

            if (boardList.searcherShow && boardList.searcher == undefined) {

                var searchOptionList = Triton.Board.valueExtractor(Triton.Board.ValueType.SEARCH_OPTION_LIST, undefined, undefined, boardList);

                boardList.searcher = new Triton.Searcher({
                    theme: Triton.Searcher.Theme.Category,
                    comboBoxOptions: {
                        form: {name: Triton.BoardList.OptionParameterName.SEARCH_BY_CODE}
                    },
                    textInputOptions: {
                        form: {name: Triton.BoardList.OptionParameterName.SEARCH_KEYWORD}
                    },
                    searchOptionList: searchOptionList,
                    css: {float: 'left', 'margin-left': '10px'},
                    addClass: 'triton_mobile_hide',
                    boardList: boardList,
                    parameterMap: parameterMap,
                    onSearch: function (searchKeyword, searchOptionValue, searchOptionText, jSelect, options) {

                        var boardList = Lia.p(options, 'boardList');
                        var parameterMap = Lia.p(options, 'parameterMap');
                        var value = {};

                        value[Triton.BoardList.OptionParameterName.SEARCH_KEYWORD] = searchKeyword;
                        value[Triton.BoardList.OptionParameterName.SEARCH_BY_CODE] = searchOptionValue;

                        Triton.BoardList.onOptionChangeListener(Triton.BoardList.OptionParameterName.SEARCHER, value, parameterMap, boardList);
                    }
                });

                boardList.categorySection.appendToRight(boardList.searcher);
            }

        }, {
            boardList: boardList
        });

    }, {boardList: boardList});


    this.listSection.empty();
    // 실제 리스트 요청
    boardList.requester.func(function (execute) {

        var boardList = execute.object.boardList;
        var parameterMap = execute.object.parameterMap;

        boardList.requester.func(function (execute) {

            var boardList = execute.object.boardList;
            var boardId = boardList.getBoardId();
            if (boardList.requireBoardId && boardId == undefined) {
                Triton.Board.messageHandler(Triton.Board.MessageType.LOADING_END);
                Triton.Board.messageHandler(Triton.Board.MessageType.FAILED_TO_FIND_BOARD);
                return;
            }

            var parameterMap = execute.object.parameterMap;

            Triton.BoardList.optionChangeChecker(parameterMap, boardList, boardList.searcher,
                boardList.stausComboBox, boardList.countComboBox, boardList.categoryComboBox);

            boardList.requester.ajaxWithoutBlank(Triton.Board.ApiUrl.GET_BOARD_CONTENT_SUMMARY_LIST,
                boardList.boardContentSummaryRequestParameterMap = Triton.Board.parameterMapConverter(Triton.Board.UrlType.GET_BOARD_CONTENT_SUMMARY_LIST, parameterMap, undefined, boardList),
                function (status, data, request) {

                    Triton.Board.messageHandler(Triton.Board.MessageType.LOADING_END);

                    if (Triton.Board.responseChecker(Triton.Board.UrlType.GET_BOARD_CONTENT_SUMMARY_LIST, status, data, request) == false) {
                        return;
                    }

                    var parameterMap = request.object.parameterMap;
                    var boardList = request.object.boardList;

                    var fieldList = boardList.fieldList;
                    var listSection = boardList.listSection;

                    var listPanel = new Triton.Panel({
                        theme: Triton.Panel.Theme.List,
                        contentMinWidth: '800px',
                        appendTo: listSection
                    });

                    var listTable = new Triton.ListTable({
                        appendTo: listPanel,
                        css: {}
                    });

                    listTable.appendHeaderRow({});
                    if (boardList.checkBoxRequired) {

                        var options = Triton.Board.ColumnValue.getOptions(Triton.Board.ValueType.CHECK_BOX);
                        options['content'] = new Triton.CheckBox({
                            boardList: boardList,
                            addClass: 'triton_board_list_header_check_box',
                            onChecked: function (value) {

                                var jThis = $(this);
                                var triton = jThis.getTriton();
                                var options = triton.getOptions();
                                var boardList = Lia.p(options, 'boardList');

                                var jCheckBox = boardList.find('.triton_board_list_check_box');
                                for (var i = 0, l = jCheckBox.length; i < l; i++) {
                                    jCheckBox.eq(i).getTriton().setValue(value, true);
                                }
                            }
                        });

                        listTable.appendHeaderColumn(options);
                    }

                    for (var i = 0, l = fieldList.length; i < l; i++) {

                        var field = fieldList[i];

                        if (typeof field == 'object') {

                            var customObject = Lia.deepCopy(field);
                            customObject.attachHeaderToBoardList(
                                listTable, boardList
                            );

                        } else if (typeof field == 'function') {

                            var customFunction = field;
                            var customName = customFunction(Triton.Board.CustomFieldType.LIST_NAME, data, undefined, boardList);

                            var customOptions = customFunction(Triton.Board.CustomFieldType.LIST_HEADER_OPTIONS, data, undefined, boardList);
                            listTable.appendHeaderColumn(customOptions);
                            listTable.appendItem(new Triton.Span({
                                content: customName
                            }));

                        } else {

                            var options = Triton.Board.ColumnValue.getOptions(field, Triton.Board.ColumnValue.Type.LIST_HEADER_COLUMN);
                            listTable.appendHeaderColumn(options);

                            var content = Triton.Board.ColumnValue.getName(field);

                            if (boardList.fieldOrderByChecker(field, boardList)) {

                                listTable.appendItem(new Triton.FlagSpan({
                                    theme: Triton.FlagSpan.Theme.OrderBy,
                                    content: content,
                                    boardList: boardList,
                                    parameterMap: parameterMap,
                                    field: field,
                                    onClick: function (e) {

                                        var options = e.data;
                                        var boardList = Lia.p(options, 'boardList');
                                        var parameterMap = Lia.p(options, 'parameterMap');
                                        var field = Lia.p(options, 'field');
                                        Triton.BoardList.onOptionChangeListener(Triton.BoardList.OptionParameterName.ORDER_BY_CODE, field, parameterMap, boardList);
                                    }
                                }));

                            } else {

                                listTable.appendItem(new Triton.Span({
                                    content: content
                                }));
                            }
                        }

                    }

                    var contentSummaryList = Triton.Board.valueExtractor(Triton.Board.ValueType.BOARD_CONTENT_SUMMARY_LIST, data, undefined, boardList);
                    if (contentSummaryList == undefined || contentSummaryList.length == 0) {

                        new Triton.Section({
                            appendTo: listPanel,
                            theme: Triton.Section.Theme.ListMessage,
                            content: Lia.Strings.getString(Lia.Strings.BOARD.NO_CONTENT)
                        });
                        return;
                    }

                    for (var i = 0, l = contentSummaryList.length; i < l; i++) {

                        var contentSummary = contentSummaryList[i];

                        var theme = Triton.Board.valueExtractor(Triton.Board.ValueType.ROW_THEME, data, contentSummary, boardList);

                        listTable.appendRow({
                            theme: theme,
                            contentSummary: contentSummary,
                            data: data,
                            boardList: boardList,
                            onClick: function (e) {

                                var boardList = e.data.boardList;
                                var contentSummary = e.data.contentSummary;
                                boardList.onMoveDetailPage(boardList, contentSummary, data);
                            }
                        });

                        if (boardList.checkBoxRequired) {

                            listTable.appendHeaderColumn({
                                content: new Triton.CheckBox({
                                    boardList: boardList,
                                    addClass: 'triton_board_list_check_box',
                                    onChecked: function (val) {

                                        var jThis = $(this);
                                        var triton = jThis.getTriton();
                                        var options = triton.getOptions();
                                        var boardList = Lia.p(options, 'boardList');

                                        var checked = true;
                                        var jCheckBox = boardList.find('.triton_board_list_check_box');
                                        var l = jCheckBox.length;
                                        if (l == 0) {
                                            checked = false;
                                        } else {

                                            for (var i = 0; i < l; i++) {

                                                if (!jCheckBox.eq(i).getTriton().getPressed()) {
                                                    checked = false;
                                                    break;
                                                }
                                            }
                                        }

                                        var jHeaderCheckBox = boardList.find('.triton_board_list_header_check_box');
                                        jHeaderCheckBox.getTriton().setPressed(checked, true);
                                    }
                                }),
                                onClick: function (e) {

                                    e.stopPropagation();
                                }
                            });
                        }

                        for (var i2 = 0, l2 = fieldList.length; i2 < l2; i2++) {

                            var field = fieldList[i2];

                            if (typeof field == 'object') {

                                var customObject = Lia.deepCopy(field);
                                customObject.attachToBoardList(
                                    listTable, contentSummary, data, boardList
                                );

                            } else if (typeof field == 'function') {

                                var customFunction = field;
                                var customValue = customFunction(Triton.Board.CustomFieldType.LIST_VALUE, data, contentSummary, boardList);
                                var customOptions = customFunction(Triton.Board.CustomFieldType.LIST_OPTIONS, data, contentSummary, boardList);

                                customOptions['content'] = customValue;
                                listTable.appendColumn(customOptions);

                            } else {

                                var options = Triton.Board.ColumnValue.getOptions(field, Triton.Board.ColumnValue.Type.LIST_COLUMN);
                                var content = Triton.Board.valueExtractor(field, data, contentSummary, boardList);

                                if (field == Triton.Board.ValueType.ATTACHMENT) {

                                    if (typeof content == "number" && content > 0) {

                                        var image = new Triton.Image({
                                            src: Triton.ReplaceMap.BASE_PATH + '/img/img_attach.png',
                                            css: {'vertical-align': 'middle'}
                                        });

                                        content = image;

                                    } else if (typeof content == "string") {

                                        var image = new Triton.Image({
                                            src: Triton.ReplaceMap.BASE_PATH + '/img/img_attach.png',
                                            url: content,
                                            boardList: boardList,
                                            onClick: function (e) {
                                                var url = e.data.url;
                                                var boardList = e.data.boardList;
                                                boardList.requester.open(url);
                                            }
                                        });

                                        content = image;


                                    } else {

                                        content = '-';
                                    }

                                } else if (field == Triton.Board.ValueType.IS_AVAILABLE) {

                                    var checkBox = new Triton.CheckBox({
                                        pressed: content,
                                        manual: true,
                                        contentSummary: contentSummary,
                                        boardList: boardList,
                                        data: data,
                                        onClick: function (e) {

                                            e.stopPropagation();

                                            var checkBox = $(this).getTriton();
                                            var contentSummary = e.data.contentSummary;
                                            var boardList = e.data.boardList;
                                            var data = e.data.data;

                                            Triton.Board.messageHandler(Triton.Board.MessageType.AVAILABLE_CHANGE, data, contentSummary, function (data) {

                                                var checkBox = data['checkBox'];
                                                var contentSummary = data['contentSummary'];
                                                var boardList = data['boardList'];
                                                var status = checkBox.getStatus();

                                                Triton.Board.messageHandler(Triton.Board.MessageType.LOADING_START);

                                                boardList.requester.ajaxWithoutBlank(Triton.Board.ApiUrl.SET_BOARD_CONTENT_AVAILABILITY,
                                                    Triton.Board.parameterMapConverter(Triton.Board.UrlType.SET_BOARD_CONTENT_AVAILABILITY, contentSummary, status, boardList),
                                                    function (status, data, request) {

                                                        Triton.Board.messageHandler(Triton.Board.MessageType.LOADING_END);

                                                        if (Triton.Board.responseChecker(Triton.Board.UrlType.SET_BOARD_CONTENT_AVAILABILITY, status, data, request) == false) {
                                                            return;
                                                        }

                                                        var checkBox = request.object.checkBox;
                                                        checkBox.setValue(!checkBox.getValue(), true);

                                                        Triton.Board.messageHandler(Triton.Board.MessageType.AVAILABLE_CHANGE_COMPLETED);

                                                    }, {
                                                        checkBox: checkBox
                                                    });


                                            }, {
                                                contentSummary: contentSummary,
                                                boardList: boardList,
                                                checkBox: checkBox,
                                                data: data
                                            });
                                        }
                                    });

                                    content = checkBox;

                                }

                                options['content'] = content;
                                listTable.appendColumn(options);
                            }
                        }
                    }

                    var pagerSection = new Triton.Section({
                        theme: Triton.Section.Theme.Pager,
                        appendTo: listPanel
                    });

                    var requestParameterMap = Lia.p(request, 'parameterMap');

                    var pager = new Triton.Pager({
                        appendTo: pagerSection,
                        boardList: boardList,
                        parameterMap: parameterMap,
                        'pageNumber': Triton.Board.valueExtractor(Triton.Board.ValueType.PAGE, requestParameterMap),
                        'countPerPage': Triton.Board.valueExtractor(Triton.Board.ValueType.COUNT, requestParameterMap),
                        'totalCount': boardList.boardContentSummaryTotalCount = Triton.Board.valueExtractor(Triton.Board.ValueType.TOTAL_COUNT, data),
                        'onPageSelected': function (pageNumber, options) {

                            var boardList = Lia.p(options, 'boardList');
                            var parameterMap = Lia.p(options, 'parameterMap');

                            if ( boardList.onPageSelected != undefined ) {
                                boardList.onPageSelected(pageNumber, parameterMap, boardList);
                            } else {
                                Triton.BoardList.onOptionChangeListener(Triton.BoardList.OptionParameterName.PAGE, pageNumber, parameterMap, boardList);
                            }
                        }
                    });


                    var options = boardList.getOptions();
                    var onLoaded = Lia.p(options, 'onLoaded');
                    if (onLoaded) {
                        onLoaded(boardList);
                    }


                }, {
                    boardList: boardList,
                    parameterMap: parameterMap
                });


        }, {
            parameterMap: parameterMap,
            boardList: boardList
        });

    }, {
        parameterMap: parameterMap,
        boardList: boardList
    });
};
Triton.BoardList.OptionParameterName = {
    STATUS_CODE: 'status_code',
    COUNT: 'count',
    PAGE: 'page',
    CATEGORY_ID: 'category_id',
    SEARCH_KEYWORD: 'search_keyword',
    SEARCH_BY_CODE: 'search_by_code',
    SEARCHER: 'searcher',
    ORDER_BY_CODE: 'order_by_code'
};
Triton.BoardList.StatusOption = {
    REGISTERED: 0,
    DELETED: 1
};

// 보드 리스트 갱신해 줄 필요 체크
Triton.BoardList.boardListChangeChecker = function (type, parameterMap, boardList) {
    return true;
};
Triton.BoardList.setBoardListChangeChecker = function (listener) {
    Triton.BoardList.boardListChangeChecker = listener;
};

// 옵션 바뀌는거 실제로 변경해 주도록
Triton.BoardList.optionChangeChecker = function (parameterMap, boardList,
                                                 searcher, statusComboBox,
                                                 countComboBox, categoryComboBox) {
};
Triton.BoardList.setOptionChangeChecker = function (listener) {
    Triton.BoardList.optionChangeChecker = listener;
};

// 옵션 바뀔 때 ( 상태, 카테고리, 갯수, 검색, orderby )
Triton.BoardList.setOnOptionChangeListener = function (listener) {
    Triton.BoardList.onOptionChangeListener = listener;
};
Triton.BoardList.onOptionChangeListener = function (name, value, boardList) {
};

// order by 여부 체크
Triton.BoardList.fieldOrderByChecker = function (type, boardList) {
    return false;
};
Triton.BoardList.setFieldOrderByChecker = function (checker) {
    Triton.BoardList.fieldOrderByChecker = checker;
};


Triton.BoardList.defaultUseTopButtonSection = true;
Triton.BoardList.setDefaultUseTopButtonSection = function (use) {
    Triton.BoardList.defaultUseTopButtonSection = use;
};

Triton.BoardList.defaultDisavailabilityButtonShow = false;
Triton.BoardList.setDefaultDisavailabilityButtonShow = function (show) {
    Triton.BoardList.defaultDisavailabilityButtonShow = show;
};

Triton.BoardList.defaultAvailabilityButtonShow = false;
Triton.BoardList.setDefaultAvailabilityButtonShow = function (show) {
    Triton.BoardList.defaultAvailabilityButtonShow = show;
};

Triton.BoardList.defaultSimpleAvailabilityButtonShow = true;
Triton.BoardList.setDefaultSimpleAvailabilityButtonShow = function (show) {
    Triton.BoardList.defaultSimpleAvailabilityButtonShow = show;
};

Triton.BoardList.defaultAllCategoryShow = true;
Triton.BoardList.setDefaultAllCategoryShow = function (show) {
    Triton.BoardList.defaultAllCategoryShow = show;
};

Triton.BoardList.defaultAllCategoryName = '전체';
Triton.BoardList.setDefaultAllCategoryName = function (name) {
    Triton.BoardList.defaultAllCategoryName = name;
};

Triton.BoardList.defaultAllCategoryValue = '';
Triton.BoardList.setDefaultAllCategoryValue = function (value) {
    Triton.BoardList.defaultAllCategoryValue = value;
};

Triton.BoardList.defaultRegisterButtonName = '+ 추가';
Triton.BoardList.setDefaultRegisterButtonName = function (registerButtonName) {
    Triton.BoardList.defaultRegisterButtonName = registerButtonName;
};


// 표시 필드 리스트
Triton.BoardList.fieldList = [
    Triton.Board.ValueType.ROW_NUMBER,
    Triton.Board.ValueType.CATEGORY,
    Triton.Board.ValueType.TITLE,
    Triton.Board.ValueType.ATTACHMENT,
    Triton.Board.ValueType.WRITER,
    Triton.Board.ValueType.REGISTERED_DATE,
    Triton.Board.ValueType.VIEW_COUNT,
    Triton.Board.ValueType.IS_AVAILABLE
];
Triton.BoardList.setFieldList = function (list) {
    Triton.BoardList.fieldList = list;
};


var BoardCategoryList = Triton.BoardCategoryList = function (options) {
    this.init(options);
};
Triton.BoardCategoryList.prototype = new Triton.Board();
Triton.BoardCategoryList.prototype.init = function (options) {

    //this.boardId = undefined;
    //this.categoryOptionList = undefined;
    //this.parameterMap = undefined;
    //this.boardContentId = undefined;
    //this.boardContent = undefined;
    //this.boardContentCategory = undefined;
    //this.boardContentCategoryId = undefined;
    //his.targetBoardId = undefined;

    this.moduleTypeCode = Triton.Board.ModuleType.BOARD_CATEGORY_LIST;
    this.options = options;
    this.targetBoardId = Lia.p(options, 'targetBoardId');
    this.baseRequestParameterMap = Lia.p(options, 'baseRequestParameterMap');
    this.typeCode = Lia.p(options, 'typeCode');
    this.requester = Lia.pd(Triton.Board.requester, options, 'requester');
    if (this.requester == undefined) {
        this.requester = new jQuery.Requester();
    }

    {
        var fieldList = Lia.pd(Triton.BoardCategoryList.fieldList, options, 'fieldList');
        var hideFieldList = Lia.p(options, 'hideFieldList');
        if (hideFieldList != undefined) {

            var newFieldList = [];
            for (var i = 0, l = fieldList.length; i < l; i++) {

                var field = fieldList[i];
                var hide = false;
                for (var i2 = 0, l2 = hideFieldList.length; i2 < l2; i2++) {

                    var hideField = hideFieldList[i2];
                    if (field == hideField) {
                        hide = true;
                        break;
                    }
                }

                if (hide == false) {
                    newFieldList.push(field);
                }
            }

            fieldList = newFieldList;
        }
        this.fieldList = fieldList;
    }

    var section = new Triton.Section();

    var title = Lia.p(options, 'title');
    if (title != undefined) {
        section.append(new Triton.Title({content: title}));
    }

    this.optionSection = new Triton.Section({
        theme: Triton.Section.Theme.Category,
        appendTo: section
    });

    this.listSection = new Triton.Section({
        appendTo: section
    });

    {
        this.buttonSection = new Triton.ButtonSection({
            appendTo: section
        });

        var defaultButtonLayout = Lia.pd(true, options, 'defaultButtonLayout');
        if (defaultButtonLayout) {

            var onMoveListPage = Lia.p(options, 'onMoveListPage');
            if (onMoveListPage != undefined) {

                var onMoveListPageButtonName = Lia.pd(Lia.Strings.getString(Lia.Strings.BOARD.LIST), options, 'onMoveListPageButtonName');

                this.buttonSection.appendToLeft(new Triton.FlatButton({
                    theme: Triton.FlatButton.Theme.Shade,
                    content: onMoveListPageButtonName,
                    boardCategoryList: this,
                    onMoveListPage: onMoveListPage,
                    onClick: function (e) {

                        var onMoveListPage = e.data.onMoveListPage;
                        var boardCategoryList = e.data.boardCategoryList;

                        onMoveListPage(boardCategoryList);
                    }
                }));
            }

            var onMoveRegisterPage = Lia.p(options, 'onMoveRegisterPage');
            if (onMoveRegisterPage != undefined) {

                var onMoveRegisterPageButtonName = Lia.pd('카테고리 등록', options, 'onMoveRegisterPageButtonName');

                this.buttonSection.appendToRight(new Triton.FlatButton({
                    theme: Triton.FlatButton.Theme.Normal,
                    content: onMoveRegisterPageButtonName,
                    boardCategoryList: this,
                    onMoveRegisterPage: onMoveRegisterPage,
                    onClick: function (e) {

                        var onMoveRegisterPage = e.data.onMoveRegisterPage;
                        var boardCategoryList = e.data.boardCategoryList;

                        onMoveRegisterPage(boardCategoryList);
                    }
                }));
            }
        }
    }


    this.onMoveEditPage = Lia.p(options, 'onMoveEditPage');

    this.jView = section.get();
    this.initBoard(options);
};

Triton.BoardCategoryList.prototype.change = function (parameterMap) {

    var boardCategoryList = this;

    parameterMap = Lia.deepCopy(parameterMap);

    Triton.Board.messageHandler(Triton.Board.MessageType.LOADING_START);

    if (Triton.BoardCategoryList.boardListChangeChecker(Triton.Board.ValueType.BOARD_ID, parameterMap, boardCategoryList)) {

        var targetBoardId = boardCategoryList.getTargetBoardId();
        if (targetBoardId == undefined) {

            boardCategoryList.requester.ajaxWithoutBlank(Triton.Board.ApiUrl.GET_BOARD_LIST,
                Triton.Board.parameterMapConverter(Triton.Board.UrlType.GET_BOARD_LIST, parameterMap, undefined, boardCategoryList),
                function (status, data, request) {

                    if (Triton.Board.responseChecker(Triton.Board.UrlType.GET_BOARD_LIST, status, data, request) == false) {
                        Triton.Board.messageHandler(Triton.Board.MessageType.LOADING_END);
                        return;
                    }

                    var boardCategoryList = request.object.boardCategoryList;
                    var boardId = Triton.Board.valueExtractor(Triton.Board.ValueType.BOARD_ID, data, undefined, boardCategoryList);
                    if (boardId == undefined) {
                        Triton.Board.messageHandler(Triton.Board.MessageType.FAILED_TO_FIND_BOARD, data, undefined, boardCategoryList);
                        return;
                    }

                    boardCategoryList.setBoardId(boardId);

                }, {boardCategoryList: boardCategoryList});

        } else {

            boardCategoryList.setBoardId(targetBoardId);
        }
    }

    this.listSection.empty();
    // 실제 리스트 요청
    boardCategoryList.requester.func(function (execute) {

        var boardCategoryList = execute.object.boardCategoryList;
        var parameterMap = execute.object.parameterMap;

        boardCategoryList.requester.func(function (execute) {

            var boardCategoryList = execute.object.boardCategoryList;
            var boardId = boardCategoryList.getBoardId();
            if (boardId == undefined) {
                Triton.Board.messageHandler(Triton.Board.MessageType.LOADING_END);
                Triton.Board.messageHandler(Triton.Board.MessageType.FAILED_TO_FIND_BOARD);
                return;
            }

            var parameterMap = execute.object.parameterMap;

            boardCategoryList.requester.ajaxWithoutBlank(Triton.Board.ApiUrl.GET_BOARD_CONTENT_CATEGORY_LIST,
                Triton.Board.parameterMapConverter(Triton.Board.UrlType.GET_BOARD_CONTENT_CATEGORY_LIST, parameterMap, undefined, boardCategoryList),
                function (status, data, request) {

                    Triton.Board.messageHandler(Triton.Board.MessageType.LOADING_END);

                    if (Triton.Board.responseChecker(Triton.Board.UrlType.GET_BOARD_CONTENT_CATEGORY_LIST, status, data, request) == false) {
                        return;
                    }

                    var parameterMap = request.object.parameterMap;
                    var boardCategoryList = request.object.boardCategoryList;

                    var fieldList = boardCategoryList.fieldList;
                    var listSection = boardCategoryList.listSection;

                    var listPanel = new Triton.Panel({
                        theme: Triton.Panel.Theme.List,
                        appendTo: listSection,
                        contentMinWidth: '800px'
                    });

                    var listTable = new Triton.ListTable({
                        appendTo: listPanel
                    });

                    listTable.appendHeaderRow({});
                    for (var i = 0, l = fieldList.length; i < l; i++) {

                        var field = fieldList[i];

                        var options = Triton.Board.ColumnValue.getOptions(field, Triton.Board.ColumnValue.Type.LIST_HEADER_COLUMN);
                        listTable.appendHeaderColumn(options);

                        var content = Triton.Board.ColumnValue.getName(field);

                        listTable.appendItem(new Triton.Span({
                            content: content
                        }));
                    }

                    var categoryList = Triton.Board.valueExtractor(Triton.Board.ValueType.BOARD_CONTENT_CATEGORY_LIST, data, undefined, boardCategoryList);
                    if (categoryList == undefined || categoryList.length == 0) {

                        new Triton.Section({
                            appendTo: listPanel,
                            theme: Triton.Section.Theme.ListMessage,
                            content: '표시할 게시물이 없습니다.'
                        });
                        return;
                    }

                    for (var i = 0, l = categoryList.length; i < l; i++) {

                        var category = categoryList[i];

                        var theme = Triton.ListTable.Row.Theme.NoLink;
                        listTable.appendRow({
                            theme: theme
                        });

                        var row = listTable.getCurrentRow();

                        for (var i2 = 0, l2 = fieldList.length; i2 < l2; i2++) {

                            var field = fieldList[i2];

                            var options = Triton.Board.ColumnValue.getOptions(field, Triton.Board.ColumnValue.Type.LIST_COLUMN);
                            var content = Triton.Board.valueExtractor(field, data, category, boardCategoryList);

                            if (field == Triton.Board.ValueType.MODIFY_AND_DELETE) {

                                content = new Triton.Section({});

                                new Triton.FlatButton({
                                    appendTo: content,
                                    theme: Triton.FlatButton.Theme.ListEditLeft,
                                    content: '편집',
                                    category: category,
                                    boardCategoryList: boardCategoryList,
                                    onClick: function (e) {

                                        e.stopPropagation();

                                        var category = e.data.category;
                                        var boardCategoryList = e.data.boardCategoryList;

                                        boardCategoryList.onMoveEditPage(category, boardCategoryList);
                                    }
                                });

                                new Triton.FlatButton({
                                    appendTo: content,
                                    theme: Triton.FlatButton.Theme.ListDeleteRight,
                                    content: '삭제',
                                    category: category,
                                    boardCategoryList: boardCategoryList,
                                    data: data,
                                    row: row,
                                    onClick: function (e) {

                                        e.stopPropagation();

                                        var category = e.data.category;
                                        var boardCategoryList = e.data.boardCategoryList;
                                        var row = e.data.row;
                                        var data = e.data.data;

                                        Triton.Board.messageHandler(Triton.Board.MessageType.DELETE_BOARD_CONTENT_CATEGORY, data, category, function (data) {

                                            var category = data['category'];
                                            var boardCategoryList = data['boardCategoryList'];
                                            var row = data['row'];

                                            Triton.Board.messageHandler(Triton.Board.MessageType.LOADING_START);

                                            boardCategoryList.requester.ajaxWithoutBlank(Triton.Board.ApiUrl.DELETE_BOARD_CONTENT_CATEGORY,
                                                Triton.Board.parameterMapConverter(Triton.Board.UrlType.DELETE_BOARD_CONTENT_CATEGORY, category, undefined, boardCategoryList),
                                                function (status, data, request) {

                                                    Triton.Board.messageHandler(Triton.Board.MessageType.LOADING_END);

                                                    if (Triton.Board.responseChecker(Triton.Board.UrlType.DELETE_BOARD_CONTENT_CATEGORY, status, data, request) == false) {
                                                        return;
                                                    }

                                                    var row = request.object.row;
                                                    row.remove();

                                                    Triton.Board.messageHandler(Triton.Board.MessageType.DELETE_BOARD_CONTENT_CATEGORY_COMPLETED);

                                                }, {
                                                    row: row
                                                });


                                        }, {
                                            category: category,
                                            boardCategoryList: boardCategoryList,
                                            data: data,
                                            row: row
                                        });

                                    }
                                });


                            }

                            options['content'] = content;
                            listTable.appendColumn(options);
                        }
                    }

                    var pagerSection = new Triton.Section({
                        theme: Triton.Section.Theme.Pager,
                        appendTo: listPanel
                    });


                    var options = boardCategoryList.getOptions();
                    var onLoaded = Lia.p(options, 'onLoaded');
                    if (onLoaded) {
                        onLoaded(boardCategoryList);
                    }


                }, {
                    boardCategoryList: boardCategoryList,
                    parameterMap: parameterMap
                });


        }, {
            parameterMap: parameterMap,
            boardCategoryList: boardCategoryList
        });

    }, {
        parameterMap: parameterMap,
        boardCategoryList: boardCategoryList
    });
};

// 보드 리스트 갱신해 줄 필요 체크
Triton.BoardCategoryList.boardListChangeChecker = function (type, parameterMap, boardList) {
    return true;
};
Triton.BoardCategoryList.setBoardListChangeChecker = function (listener) {
    Triton.BoardCategoryList.boardListChangeChecker = listener;
};

// 옵션 바뀌는거 실제로 변경해 주도록
Triton.BoardCategoryList.optionChangeChecker = function (parameterMap, boardList,
                                                         searcher, statusComboBox,
                                                         countComboBox, categoryComboBox) {
};
Triton.BoardCategoryList.setOptionChangeChecker = function (listener) {
    Triton.BoardCategoryList.optionChangeChecker = listener;
};

// 옵션 바뀔 때 ( 상태, 카테고리, 갯수, 검색, orderby )
Triton.BoardCategoryList.setOnOptionChangeListener = function (listener) {
    Triton.BoardCategoryList.onOptionChangeListener = listener;
};
Triton.BoardCategoryList.onOptionChangeListener = function (name, value, boardList) {
};

// order by 여부 체크
Triton.BoardCategoryList.fieldOrderByChecker = function (type, boardList) {
    return false;
};
Triton.BoardCategoryList.setFieldOrderByChecker = function (checker) {
    Triton.BoardList.fieldOrderByChecker = checker;
};

// 표시 필드 리스트
Triton.BoardCategoryList.fieldList = [
    Triton.Board.ValueType.CATEGORY_NAME,
    Triton.Board.ValueType.WRITABLE_START_DATE,
    Triton.Board.ValueType.WRITABLE_END_DATE,
    Triton.Board.ValueType.MODIFY_AND_DELETE
];
Triton.BoardCategoryList.setFieldList = function (list) {
    Triton.BoardCategoryList.fieldList = list;
};


var BoardCategoryWrite = Triton.BoardCategoryWrite = function (options) {
    this.init(options);
};
Triton.BoardCategoryWrite.prototype = new Triton.Board();
Triton.BoardCategoryWrite.prototype.init = function (options) {

    //this.boardId = undefined;
    //this.leftButtonSection = undefined;
    //this.rightButtonSection = undefined;
    //this.categoryOptionList = undefined;
    //this.boardContent = undefined;
    //this.boardId = undefined;
    //this.boardContentCategory = undefined;
    //his.targetBoardId = undefined;

    this.moduleTypeCode = Triton.Board.ModuleType.BOARD_CATEGORY_WRITE;
    this.options = options;
    this.targetBoardId = Lia.p(options, 'targetBoardId');
    this.boardContentCategoryId = Lia.p(options, 'boardContentCategoryId');
    this.baseRequestParameterMap = Lia.p(options, 'baseRequestParameterMap');

    this.parameterMap = Lia.p(options, 'parameterMap');
    this.requireFieldList = Lia.pd(Triton.BoardCategoryWrite.requireFieldList, options, 'requireFieldList');

    this.requester = Lia.pd(Triton.Board.requester, options, 'requester');
    if (this.requester == undefined) {
        this.requester = new jQuery.Requester();
    }

    {
        var fieldList = Lia.pd(Triton.BoardCategoryWrite.fieldList, options, 'fieldList');
        var hideFieldList = Lia.p(options, 'hideFieldList');
        if (hideFieldList != undefined) {

            var newFieldList = [];
            for (var i = 0, l = fieldList.length; i < l; i++) {

                var field = fieldList[i];
                var hide = false;
                for (var i2 = 0, l2 = hideFieldList.length; i2 < l2; i2++) {

                    var hideField = hideFieldList[i2];
                    if (field == hideField) {
                        hide = true;
                        break;
                    }
                }

                if (hide == false) {
                    newFieldList.push(field);
                }
            }

            fieldList = newFieldList;
        }

        this.fieldList = fieldList;
    }

    var section = new Triton.Section({});

    var title = Lia.p(options, 'title');
    if (title != undefined) {
        section.append(new Triton.Title({content: title}));
    }

    var writeSection = this.writeSection = new Triton.Section({
        appendTo: section
    });

    // 버튼 레이아웃 쪽
    {
        this.buttonSection = new Triton.Section({
            theme: Triton.Section.Theme.ButtonLayout,
            appendTo: section
        });

        this.leftButtonSection = new Triton.Section({
            css: {
                'float': 'left',
                'overflow': 'auto'
            },
            appendTo: this.buttonSection
        });

        this.rightButtonSection = new Triton.Section({
            css: {
                'float': 'right',
                'overflow': 'auto'
            },
            appendTo: this.buttonSection
        });

        var defaultButtonLayout = Lia.pd(true, options, 'defaultButtonLayout');
        if (defaultButtonLayout) {

            var onMoveListPage = Lia.p(options, 'onMoveListPage');
            if (onMoveListPage != undefined) {

                new Triton.FlatButton({
                    theme: Triton.FlatButton.Theme.Shade,
                    appendTo: this.leftButtonSection,
                    content: Lia.Strings.getString(Lia.Strings.BOARD.LIST),
                    boardWrite: this,
                    onMoveListPage: onMoveListPage,
                    onClick: function (e) {

                        var onMoveListPage = e.data.onMoveListPage;
                        var boardWrite = e.data.boardWrite;

                        onMoveListPage(boardWrite);
                    }
                });
            }

            var onSaved = Lia.p(options, 'onSaved');
            if (onSaved != undefined) {

                new Triton.FlatButton({
                    theme: Triton.FlatButton.Theme.NormalLeft,
                    appendTo: this.rightButtonSection,
                    content: Lia.Strings.getString(Lia.Strings.BOARD.SAVE),
                    boardCategoryWrite: this,
                    onSaved: onSaved,
                    onClick: function (e) {

                        var onSaved = e.data.onSaved;
                        var boardCategoryWrite = e.data.boardCategoryWrite;

                        if (Triton.checkFormData(boardCategoryWrite) == false) {
                            return;
                        }

                        var parameterMap = Triton.extractFormData(boardCategoryWrite);

                        // 필드 체크는 위에서 하므로 주석 처리 : 원복
                        var requireFieldList = boardCategoryWrite.getRequireFieldList();
                        if (requireFieldList != undefined) {

                            var fieldList = boardCategoryWrite.getFieldList();
                            for (var i = 0, l = requireFieldList.length; i < l; i++) {

                                var requireField = requireFieldList[i];
                                for (var i2 = 0, l2 = fieldList.length; i2 < l2; i2++) {

                                    var field = fieldList[i2];
                                    if (field == requireField) {

                                        var formName = Triton.Board.FormName.getName(field);
                                        var required = Triton.BoardWrite.fieldRequiredChecker(field, parameterMap[formName]);
                                        if (required) {
                                            Triton.Board.messageHandler(Triton.Board.MessageType.REQUIRE_FIELD, field);
                                            return;
                                        }
                                        break;
                                    }

                                }
                            }
                        }

                        Triton.Board.messageHandler(Triton.Board.MessageType.LOADING_START);

                        var boardContentCategoryId = boardCategoryWrite.getBoardContentCategoryId();
                        if (boardContentCategoryId == undefined) {

                            boardCategoryWrite.requester.ajaxWithoutBlank(Triton.Board.ApiUrl.ADD_BOARD_CONTENT_CATEGORY,
                                Triton.Board.parameterMapConverter(Triton.Board.UrlType.ADD_BOARD_CONTENT_CATEGORY, parameterMap, undefined, boardCategoryWrite),
                                function (status, data, request) {

                                    Triton.Board.messageHandler(Triton.Board.MessageType.LOADING_END);
                                    if (Triton.Board.responseChecker(Triton.Board.UrlType.ADD_BOARD_CONTENT_CATEGORY, status, data, request) == false) {
                                        return;
                                    }

                                    var onSaved = request.object.onSaved;
                                    var boardCategoryWrite = request.object.boardCategoryWrite;
                                    onSaved(boardCategoryWrite);

                                }, {
                                    onSaved: onSaved,
                                    boardCategoryWrite: boardCategoryWrite
                                });

                        } else {

                            boardCategoryWrite.requester.ajaxWithoutBlank(Triton.Board.ApiUrl.EDIT_BOARD_CONTENT_CATEGORY,
                                Triton.Board.parameterMapConverter(Triton.Board.UrlType.EDIT_BOARD_CONTENT_CATEGORY, parameterMap, undefined, boardCategoryWrite),
                                function (status, data, request) {

                                    Triton.Board.messageHandler(Triton.Board.MessageType.LOADING_END);
                                    if (Triton.Board.responseChecker(Triton.Board.UrlType.EDIT_BOARD_CONTENT_CATEGORY, status, data, request) == false) {
                                        return;
                                    }

                                    var onSaved = request.object.onSaved;
                                    var boardCategoryWrite = request.object.boardCategoryWrite;
                                    onSaved(boardCategoryWrite);

                                }, {
                                    onSaved: onSaved,
                                    boardCategoryWrite: boardCategoryWrite
                                });

                        }


                    }
                });

            }

            var onCanceled = Lia.p(options, 'onCanceled');
            if (onCanceled != undefined) {

                new Triton.FlatButton({
                    theme: Triton.FlatButton.Theme.DeleteRight,
                    appendTo: this.rightButtonSection,
                    content: Lia.Strings.getString(Lia.Strings.BOARD.CANCEL),
                    boardCategoryWrite: this,
                    onCanceled: onCanceled,
                    onClick: function (e) {

                        var onCanceled = e.data.onCanceled;
                        var boardCategoryWrite = e.data.boardCategoryWrite;

                        onCanceled(boardCategoryWrite);
                    }
                });
            }
        }
    }

    // 패널 부분
    this.writePanel = new Triton.Panel({
        appendTo: writeSection
    });

    this.jView = section.get();
    this.initTriton(options);

    if (this.targetBoardId == undefined) {

        Triton.Board.messageHandler(Triton.Board.MessageType.LOADING_START);

        this.requester.ajaxWithoutBlank(Triton.Board.ApiUrl.GET_BOARD_LIST,
            Triton.Board.parameterMapConverter(Triton.Board.UrlType.GET_BOARD_LIST, this.parameterMap, undefined, this),
            function (status, data, request) {

                Triton.Board.messageHandler(Triton.Board.MessageType.LOADING_END);

                if (Triton.Board.responseChecker(Triton.Board.UrlType.GET_BOARD_LIST, status, data, request) == false) {
                    return;
                }

                var boardCategoryWrite = request.object.boardCategoryWrite;
                var boardId = Triton.Board.valueExtractor(Triton.Board.ValueType.BOARD_ID, data, undefined, boardCategoryWrite);
                if (boardId == undefined) {
                    return;
                }

                boardCategoryWrite.setBoardId(boardId);

            }, {boardCategoryWrite: this});

    } else {

        this.boardId = (this.targetBoardId);
    }


    // 기존 게시판 카테고리 정보 들고와야되면 들고옴
    if (this.boardContentCategoryId != undefined) {

        Triton.Board.messageHandler(Triton.Board.MessageType.LOADING_START);

        this.requester.ajaxWithoutBlank(Triton.Board.ApiUrl.GET_BOARD_CONTENT_CATEGORY,
            Triton.Board.parameterMapConverter(Triton.Board.UrlType.GET_BOARD_CONTENT_CATEGORY, this.parameterMap, undefined, this),
            function (status, data, request) {

                Triton.Board.messageHandler(Triton.Board.MessageType.LOADING_END);
                if (Triton.Board.responseChecker(Triton.Board.UrlType.GET_BOARD_CONTENT_CATEGORY, status, data, request) == false) {
                    return;
                }

                var boardCategoryWrite = request.object.boardCategoryWrite;
                var boardContentCategory = Triton.Board.valueExtractor(Triton.Board.ValueType.BOARD_CONTENT_CATEGORY, data, undefined, boardCategoryWrite);
                if (boardContentCategory == undefined) {
                    return;
                }

                boardCategoryWrite.setBoardContentCategory(boardContentCategory);

            }, {boardCategoryWrite: this});
    }


    this.requester.func(function (execute) {

        var boardCategoryWrite = execute.object.boardCategoryWrite;
        var boardId = boardCategoryWrite.getBoardId();
        if (boardId == undefined) {
            Triton.Board.messageHandler(Triton.Board.MessageType.FAILED_TO_FIND_BOARD);
            return;
        }

        var boardContentCategory = boardCategoryWrite.getBoardContentCategory();
        var boardContentCategoryId = boardCategoryWrite.getBoardContentCategoryId();
        if (boardContentCategoryId != undefined && boardContentCategory == undefined) {
            Triton.Board.messageHandler(Triton.Board.MessageType.FAILED_TO_FIND_BOARD_CONTENT_CATEGORY);
            return;
        }

        boardCategoryWrite.requester.func(function (execute) {

            var boardCategoryWrite = execute.object.boardCategoryWrite;
            boardCategoryWrite.requester.func(function (execute) {

                var boardCategoryWrite = execute.object.boardCategoryWrite;
                var boardId = boardCategoryWrite.getBoardId();
                if (boardId == undefined) {
                    return;
                }

                var boardContentCategory = boardCategoryWrite.getBoardContentCategory();

                var writePanel = boardCategoryWrite.writePanel;
                var detailTable = new Triton.DetailTable({appendTo: writePanel});

                var fieldList = boardCategoryWrite.getFieldList();
                for (var i = 0, l = fieldList.length; i < l; i++) {
                    var field = fieldList[i];

                    var columnNameSuffix = '';
                    var requireField = undefined;
                    var requireFieldList = boardCategoryWrite.getRequireFieldList();
                    if (requireFieldList != undefined) {

                        for (var i2 = 0, l2 = requireFieldList.length; i2 < l2; i2++) {

                            var item = Lia.p(requireFieldList, i2);
                            if (typeof item == 'object') {

                                if (Lia.p(item, 'field') == field) {
                                    var required = Lia.p(item, 'required');

                                    if (required == true) {
                                        columnNameSuffix = ' *';
                                    }

                                    requireField = item;
                                    break;
                                }

                            } else {

                                if (item == field) {
                                    columnNameSuffix = ' *';
                                    requireField = {noBlank: 1};
                                    break;
                                }

                            }
                        }
                    }

                    detailTable.appendRow({});

                    var columnName = Triton.Board.ColumnValue.getName(field);
                    detailTable.appendKeyColumn({
                        content: columnName + columnNameSuffix
                    });

                    var formName = Triton.Board.FormName.getName(field);
                    var fieldValue = Triton.Board.valueExtractor(field, undefined, boardContentCategory, boardCategoryWrite);
                    if (field == Triton.Board.ValueType.CATEGORY_NAME) {

                        fieldValue = new Triton.TextInput({
                            form: {name: formName, title: columnName, validation: Lia.p(requireField, 'validation')},
                            theme: Triton.TextInput.Theme.Full,
                            value: fieldValue
                        });

                    } else if (field == Triton.Board.ValueType.WRITABLE_START_DATE) {

                        fieldValue = new Triton.DatetimePicker({
                            form: {name: formName, title: columnName, validation: Lia.p(requireField, 'validation')},
                            value: fieldValue
                        });

                    } else if (field == Triton.Board.ValueType.WRITABLE_END_DATE) {

                        fieldValue = new Triton.DatetimePicker({
                            form: {name: formName, title: columnName, validation: Lia.p(requireField, 'validation')},
                            value: fieldValue
                        });

                    } else if (field == Triton.Board.ValueType.WRITABLE_DATE) {

                        var writableStartDate = Triton.Board.valueExtractor(Triton.Board.ValueType.WRITABLE_START_DATE, undefined, boardContentCategory, boardCategoryWrite);
                        var writableEndDate = Triton.Board.valueExtractor(Triton.Board.ValueType.WRITABLE_END_DATE, undefined, boardContentCategory, boardCategoryWrite);

                        fieldValue = new Triton.DatetimePeriodPicker({

                            startOptions: {
                                form: {
                                    name: Triton.Board.FormName.getName(Triton.Board.ValueType.WRITABLE_START_DATE),
                                    title: columnName,
                                    validation: Lia.p(requireField, 'validation')
                                },
                                value: writableStartDate
                            },

                            endOptions: {
                                form: {
                                    name: Triton.Board.FormName.getName(Triton.Board.ValueType.WRITABLE_END_DATE),
                                    title: columnName,
                                    validation: Lia.p(requireField, 'validation')
                                },
                                value: writableEndDate
                            }

                        });

                    }

                    detailTable.appendValueColumn({
                        content: fieldValue
                    });
                }

                var options = boardCategoryWrite.getOptions();
                var onLoaded = Lia.p(options, 'onLoaded');
                if (onLoaded != undefined) {
                    onLoaded(boardCategoryWrite);
                }

            }, {
                boardCategoryWrite: boardCategoryWrite
            });


        }, {
            boardCategoryWrite: boardCategoryWrite
        });


    }, {
        boardCategoryWrite: this
    });

};
Triton.BoardCategoryWrite.prototype.getUploaderParameterMap = function () {
    return this.uploaderParameterMap;
};
Triton.BoardCategoryWrite.prototype.setUploaderParameterMap = function (map) {
    this.uploaderParameterMap = map;
};
Triton.BoardCategoryWrite.prototype.getOptionalCategoryId = function () {
    return this.optionalCategoryId;
};
Triton.BoardCategoryWrite.prototype.setOptionalCategoryId = function (id) {
    this.optionalCategoryId = id;
};
Triton.BoardCategoryWrite.prototype.setRequireFieldList = function (list) {
    this.requireFieldList = list;
};
Triton.BoardCategoryWrite.prototype.getRequireFieldList = function () {
    return this.requireFieldList;
};


// 표시 필드 리스트
Triton.BoardCategoryWrite.fieldList = [
    Triton.Board.ValueType.CATEGORY_NAME,
    Triton.Board.ValueType.WRITABLE_DATE
];
Triton.BoardCategoryWrite.setFieldList = function (list) {
    Triton.BoardCategoryWrite.fieldList = list;
};
Triton.BoardCategoryWrite.requireFieldList = [
    Triton.Board.ValueType.CATEGORY_NAME
];
Triton.BoardCategoryWrite.setRequireFieldList = function (list) {
    Triton.BoardCategoryWrite.requireFieldList = list;
};


Triton.BoardCategoryWrite.fieldRequiredChecker = function (typeCode, value) {
};
Triton.BoardCategoryWrite.setFieldRequiredChecker = function (fieldRequiredChecker) {
    Triton.BoardCategoryWrite.fieldRequiredChecker = fieldRequiredChecker;
};

Triton.BoardCategoryWrite.requireFieldChecker = function (typeCode, value) {
};
Triton.BoardCategoryWrite.setRequireFieldChecker = function (requireFieldChecker) {
    Triton.BoardCategoryWrite.requireFieldChecker = requireFieldChecker;
};


var BoardCommentList = Triton.BoardCommentList = function (options) {
    this.init(options);
};


Triton.BoardCommentList.useShowNotificationCheckBox = false;
Triton.BoardCommentList.setUseShowNotificationCheckBox = function (use) {
    Triton.BoardCommentList.useShowNotificationCheckBox = use;
};

Triton.BoardCommentList.commentUploaderBodyValidation = {noBlank: 1};
Triton.BoardCommentList.setCommentUploaderBodyValidation = function (val) {
    Triton.BoardCommentList.commentUploaderBodyValidation = val;
};

Triton.BoardCommentList.prototype = new Triton.Board();
Triton.BoardCommentList.prototype.init = function (options) {

    //this.typeCode = undefined;
    //this.boardId = undefined;
    //this.leftButtonSection = undefined;
    //this.rightButtonSection = undefined;
    //this.moduleTypeCode = undefined;
    //this.requester = undefined;
    //this.fieldList = undefined;
    //this.categoryOptionList = undefined;
    //this.options = undefined;
    //this.boardContentCategory = undefined;
    //this.boardContentCategoryId = undefined;
    //his.targetBoardId = undefined;

    this.moduleTypeCode = Triton.Board.ModuleType.BOARD_COMMENT_LIST;
    this.options = options;
    this.parameterMap = Lia.p(options, 'parameterMap');
    this.targetBoardId = Lia.p(options, 'targetBoardId');
    this.boardContentId = Lia.p(options, 'boardContentId');
    this.requester = Lia.pd(Triton.Board.requester, options, 'requester');
    if (this.requester == undefined) {
        this.requester = new jQuery.Requester();
    }
    this.boardDetail = Lia.p(options, 'boardDetail');
    this.useShowOnCmsOnlyComment = Lia.p(options, 'useShowOnCmsOnlyComment');
    this.useCommentUploader = Lia.p(options, 'useCommentUploader');
    this.baseRequestParameterMap = Lia.p(options, 'baseRequestParameterMap');
    this.commentUploaderParameterMap = Lia.pd(Triton.Board.uploaderParmaeterMap, options, 'commentUploaderParameterMap');
    this.commentWriteBaseRequestParameterMap = Lia.p(options, 'commentWriteBaseRequestParameterMap');
    this.commentUploaderBodyValidation = Lia.pd(Triton.BoardCommentList.commentUploaderBodyValidation, options, 'commentUploaderBodyValidation');
    this.onCommentWritten = Lia.p(options, 'onCommentWritten');
    this.useShowNotificationCheckBox = Lia.pd(Triton.BoardCommentList.useShowNotificationCheckBox, options, 'useShowNotificationCheckBox');
    this.sectionTypeList = Lia.pd(undefined, options, 'sectionTypeList');
    this.commentListBaseRequestParameterMap = Lia.p(options, 'commentListBaseRequestParameterMap');
    this.unuseCommentWrite = Lia.p(options, 'unuseCommentWrite');
    this.cmsOnlyCommentDefaultChecked = Lia.p(options, 'cmsOnlyCommentDefaultChecked');
    this.textEditorOptions = Lia.p(options, 'textEditorOptions');

    var section = new Triton.Section();

    this.jView = this.jContent = section.get();
    this.initBoard(options);

    if (Array.isNotBlank(this.sectionTypeList)) {

        for (var i = 0, l = this.sectionTypeList.length; i < l; i++) {

            var item = this.sectionTypeList[i];
            if (item == Triton.Board.SectionType.COMMENT_LIST) {

                this.listSection = new Triton.Section({
                    appendTo: section
                });

            } else if (item == Triton.Board.SectionType.COMMENT_WRITE) {

                this.writeSection = new Triton.Section({
                    theme: Triton.Section.Theme.CommentWrite,
                    appendTo: section
                });
            }
        }

    } else {

        this.listSection = new Triton.Section({
            appendTo: section
        });

        this.writeSection = new Triton.Section({
            theme: Triton.Section.Theme.CommentWrite,
            appendTo: section
        });
    }

    if (this.targetBoardId == undefined) {

        Triton.Board.messageHandler(Triton.Board.MessageType.LOADING_START);

        this.requester.ajaxWithoutBlank(Triton.Board.ApiUrl.GET_BOARD_LIST,
            Triton.Board.parameterMapConverter(Triton.Board.UrlType.GET_BOARD_LIST, this.parameterMap, undefined, this),
            function (status, data, request) {

                Triton.Board.messageHandler(Triton.Board.MessageType.LOADING_END);

                if (Triton.Board.responseChecker(Triton.Board.UrlType.GET_BOARD_LIST, status, data, request) == false) {
                    return;
                }

                var boardCommentList = request.object.boardCommentList;
                var boardId = Triton.Board.valueExtractor(Triton.Board.ValueType.BOARD_ID, data, undefined, boardCommentList);
                if (boardId == undefined) {
                    return;
                }

                boardCommentList.setBoardId(boardId);

            }, {boardCommentList: this});

    } else {

        this.boardId = (this.targetBoardId);
    }

    this.requester.func(function (execute) {

        var boardCommentList = execute.object.boardCommentList;
        var commentWriteInternal = boardCommentList.writeSection;


        if (boardCommentList.unuseCommentWrite != true) {

            new Triton.SubTitle({
                appendTo: commentWriteInternal,
                content: Lia.Strings.getString(Lia.Strings.BOARD.COMMENT)
            });

            var formName = Triton.Board.FormName.getName(Triton.Board.ValueType.COMMENT_BODY);
            var columnName = Triton.Board.ColumnValue.getName(Triton.Board.ValueType.COMMENT_BODY);
            var textEditor = new Triton.TextEditor({
                theme: Triton.TextEditor.Theme.Comment,
                textEditorOptions: boardCommentList.textEditorOptions,
                appendTo: commentWriteInternal,
                form: {name: formName, title: columnName, validation: boardCommentList.commentUploaderBodyValidation}
            });
            textEditor.initTextEditor();
            boardCommentList.commentTerxtEditor = textEditor;

            var commentButtonLayout = new Triton.ButtonSection({
                appendTo: commentWriteInternal
            });


            if (boardCommentList.useCommentUploader) {

                commentButtonLayout.appendToLeft(boardCommentList.commentUploader = new Triton.Uploader({
                    parameterMap: boardCommentList.commentUploaderParameterMap,
                    form: {name: Triton.Board.FormName.getName(Triton.Board.ValueType.ATTACHMENT)},
                    css: {
                        'float': 'left',
                        'margin-right': '20px'
                    }
                }));

            }


            if (boardCommentList.useShowOnCmsOnlyComment) {

                commentButtonLayout.appendToLeft(boardCommentList.commentChowOnCmsOnlyComboBox = new Triton.CheckBox({
                    content: '관리자 용 댓글',
                    css: {
                        'margin-top': '6px',
                        'float': 'left'
                    },
                    pressed: boardCommentList.cmsOnlyCommentDefaultChecked,
                    form: {name: Triton.Board.FormName.getName(Triton.Board.ValueType.SHOW_ON_CMS_ONLY)}
                }));
            }

            commentButtonLayout.appendToRight(new Triton.FlatButton({
                content: Lia.Strings.getString(Lia.Strings.BOARD.SAVE),
                css: {
                    'float': 'right'
                },
                boardCommentList: boardCommentList,
                onClick: function (e) {

                    var boardCommentList = e.data.boardCommentList;

                    if (Triton.checkFormData(boardCommentList.writeSection) == false) {
                        return;
                    }

                    var parameterMap = Triton.extractFormData(boardCommentList.writeSection);

                    var showOnCMSOnlyParameterName = Triton.Board.FormName.getName(Triton.Board.ValueType.SHOW_ON_CMS_ONLY);

                    if (parameterMap[showOnCMSOnlyParameterName] == undefined && boardCommentList.cmsOnlyCommentDefaultChecked != undefined) {
                        parameterMap[showOnCMSOnlyParameterName] = boardCommentList.cmsOnlyCommentDefaultChecked == true ? Triton.CheckBox.Status.PRESSED : Triton.CheckBox.Status.NORMAL;
                    }

                    var commentWriteBaseRequestParameterMap = boardCommentList.commentWriteBaseRequestParameterMap;

                    Triton.Board.messageHandler(Triton.Board.MessageType.LOADING_START);
                    boardCommentList.requester.ajaxWithoutBlank(Triton.Board.ApiUrl.ADD_BOARD_CONTENT,
                        Triton.Board.parameterMapConverter(Triton.Board.UrlType.ADD_BOARD_CONTENT, parameterMap, undefined, boardCommentList, commentWriteBaseRequestParameterMap),
                        function (status, data, request) {

                            Triton.Board.messageHandler(Triton.Board.MessageType.LOADING_END);
                            if (Triton.Board.responseChecker(Triton.Board.UrlType.ADD_BOARD_CONTENT, status, data, request) == false) {
                                return;
                            }

                            var boardCommentList = request.object.boardCommentList;
                            if (boardCommentList.commentTerxtEditor != undefined) {
                                boardCommentList.commentTerxtEditor.setValue('');
                            }

                            if (boardCommentList.commentChowOnCmsOnlyComboBox != undefined) {
                                boardCommentList.commentChowOnCmsOnlyComboBox.setPressed(false);
                            }

                            if (boardCommentList.commentSendSMSNotficationComboBox != undefined) {
                                boardCommentList.commentSendSMSNotficationComboBox.setPressed(false);
                            }

                            if (boardCommentList.commentSendEmailNotficationComboBox != undefined) {
                                boardCommentList.commentSendEmailNotficationComboBox.setPressed(false);
                            }

                            if (boardCommentList.commentUploader != undefined) {
                                boardCommentList.commentUploader.clear();
                            }

                            var doNotReload = false;
                            if (boardCommentList.onCommentWritten != undefined) {
                                doNotReload = boardCommentList.onCommentWritten(boardCommentList.contentSummaryList, boardCommentList, boardCommentList.boardDetail);
                            }

                            if (doNotReload != true) {
                                boardCommentList.reload();
                            }

                        }, {
                            boardCommentList: boardCommentList
                        });

                }
            }));


            if (boardCommentList.useShowNotificationCheckBox == 1) {

                var commentNotificationLayout = new Triton.ButtonSection({
                    appendTo: commentWriteInternal
                });

                commentNotificationLayout.appendToLeft(boardCommentList.commentSendSMSNotficationComboBox = new Triton.CheckBox({
                    content: '문자 알림',
                    form: {name: Triton.Board.FormName.getName(Triton.Board.ValueType.SEND_SMS_NOTIFICATION)},
                    css: {
                        'margin-top': '6px',
                        'float': 'left'
                    }
                }));

                commentNotificationLayout.appendToLeft(boardCommentList.commentSendEmailNotficationComboBox = new Triton.CheckBox({
                    content: '이메일 알림',
                    form: {name: Triton.Board.FormName.getName(Triton.Board.ValueType.SEND_EMAIL_NOTIFICATION)},
                    css: {
                        'margin-top': '6px',
                        'float': 'left'
                    }
                }));


                var commentNotificationInfoLayout = new Triton.ButtonSection({
                    appendTo: commentWriteInternal
                });

                commentNotificationInfoLayout.appendToLeft(new Triton.Section({
                    content: '문자 알림 또는 이메일 알림을 선택하면 원글의 작성자에게 답변 내용이 전달됩니다.'
                }));
            }

        }

    }, {
        boardCommentList: this
    });

};

Triton.BoardCommentList.prototype.reload = function () {

    this.listSection.empty();

    Triton.Board.messageHandler(Triton.Board.MessageType.LOADING_START);
    this.requester.ajaxWithoutBlank(Triton.Board.ApiUrl.GET_BOARD_CONTENT_SUMMARY_LIST,
        Triton.Board.parameterMapConverter(Triton.Board.UrlType.GET_BOARD_CONTENT_SUMMARY_LIST, this.getParameterMap(), undefined, this, this.commentListBaseRequestParameterMap),
        function (status, data, request) {

            Triton.Board.messageHandler(Triton.Board.MessageType.LOADING_END);
            if (Triton.Board.responseChecker(Triton.Board.UrlType.GET_BOARD_CONTENT_SUMMARY_LIST, status, data, request) == false) {
                return;
            }

            var boardCommentList = request.object.boardCommentList;
            var contentSummaryList = Triton.Board.valueExtractor(Triton.Board.ValueType.BOARD_CONTENT_SUMMARY_LIST, data, undefined, boardCommentList);
            if (contentSummaryList == undefined || contentSummaryList.length == 0) {
                return;
            }

            boardCommentList.contentSummaryList = contentSummaryList;

            for (var i = 0, l = contentSummaryList.length; i < l; i++) {

                var contentSummary = contentSummaryList[i];

                var commentItem = new Triton.Section({
                    theme: Triton.Section.Theme.CommentItem
                });
                boardCommentList.listSection.append(commentItem);

                {
                    var commentHeaderSection = new Triton.Section({
                        theme: Triton.Section.Theme.CommentHeader
                    });
                    commentItem.append(commentHeaderSection);

                    var body = Triton.Board.valueExtractor(Triton.Board.ValueType.BODY, data, contentSummary, boardCommentList);
                    var commentBody = new Triton.Section({
                        content: body
                    });
                    commentItem.append(commentBody);
                }

                {
                    var writer = Triton.Board.valueExtractor(Triton.Board.ValueType.WRITER, data, contentSummary, boardCommentList);

                    var writerSpan = new Triton.Span({
                        theme: Triton.Span.Theme.CommentWriter,
                        content: writer
                    });

                    commentHeaderSection.append(writerSpan);


                    var registeredDate = Triton.Board.valueExtractor(Triton.Board.ValueType.REGISTERED_DATE, data, contentSummary, boardCommentList);

                    var registeredDateSpan = new Triton.Span({
                        theme: Triton.Span.Theme.CommentRegisteredDater,
                        content: registeredDate
                    });

                    commentHeaderSection.append(registeredDateSpan);

                    var showOnCmsOnly = Triton.Board.valueExtractor(Triton.Board.ValueType.SHOW_ON_CMS_ONLY, data, contentSummary, boardCommentList);
                    if (showOnCmsOnly && boardCommentList.useShowOnCmsOnlyComment) {

                        var showOnCmsOnlySpan = new Triton.Span({
                            theme: Triton.Span.Theme.CommentRegisteredDater,
                            content: '(관리자 용 댓글)',
                            css: {'font-weight': 'bold', 'color': '#084897'}
                        });

                        commentHeaderSection.append(showOnCmsOnlySpan);
                    }

                    var attachment = Triton.Board.valueExtractor(Triton.Board.ValueType.ATTACHMENT, data, contentSummary, boardCommentList);
                    if (boardCommentList.useCommentUploader && attachment != undefined) {


                        commentBody.append(new Triton.Section({css: {'margin-top': '5px'}}));


                        var attachmentList = Triton.Board.valueExtractor(Triton.Board.ValueType.ATTACHMENT_LIST, data, attachment, boardCommentList);
                        if (attachmentList != undefined) {

                            for (var i2 = 0, l2 = attachmentList.length; i2 < l2; i2++) {

                                var attachmentItem = attachmentList[i2];

                                var fileUrl = Triton.Board.valueExtractor(Triton.Board.ValueType.ATTACHMENT_FILE_URL, data, attachmentItem, boardCommentList);
                                var fileSize = Triton.Board.valueExtractor(Triton.Board.ValueType.ATTACHMENT_FILE_SIZE, data, attachmentItem, boardCommentList);
                                var fileName = Triton.Board.valueExtractor(Triton.Board.ValueType.ATTACHMENT_FILE_NAME, data, attachmentItem, boardCommentList);

                                commentBody.append(new Triton.AttachmentItem({
                                    fileUrl: fileUrl,
                                    fileSize: fileSize,
                                    fileName: fileName
                                }));

                            }
                        }
                    }

                    var isEditable = Lia.p(contentSummary, 'is_editable');

                    if (isEditable) {

                        var editImage = new Triton.Image({
                            theme: Triton.Image.Theme.CommentButton,
                            attr: {
                                src: Triton.ReplaceMap.BASE_PATH + '/img/img_comment_edit.png'
                            },
                            boardCommentList: boardCommentList,
                            contentSummary: contentSummary,
                            commentBody: commentBody,
                            showOnCmsOnly: showOnCmsOnly,
                            attachment: attachment,
                            body: body,
                            onClick: function (e) {

                                var editImage = $(this).getTriton();
                                editImage.hide();

                                var boardCommentList = e.data.boardCommentList;
                                var commentBody = e.data.commentBody;
                                var contentSummary = e.data.contentSummary;
                                var showOnCmsOnly = e.data.showOnCmsOnly;
                                var attachment = e.data.attachment;
                                var body = e.data.body;
                                commentBody.empty();

                                var formName = Triton.Board.FormName.getName(Triton.Board.ValueType.COMMENT_BODY);
                                var textEditor = new Triton.TextEditor({
                                    appendTo: commentBody,
                                    theme: Triton.TextEditor.Theme.CommentList,
                                    textEditorOptions: boardCommentList.textEditorOptions,
                                    value: body,
                                    form: {
                                        name: formName,
                                        title: Triton.Board.ColumnValue.getName(Triton.Board.ValueType.COMMENT_BODY),
                                        validation: boardCommentList.commentUploaderBodyValidation
                                    }
                                });
                                textEditor.initTextEditor();

                                var buttonSection = new Triton.ButtonSection({
                                    theme: Triton.Section.Theme.CommentButtonLayout,
                                    appendTo: commentBody
                                });

                                if (boardCommentList.useCommentUploader) {

                                    var uploader = undefined;
                                    buttonSection.appendToLeft(uploader = new Triton.Uploader({
                                        parameterMap: boardCommentList.commentUploaderParameterMap,
                                        form: {name: Triton.Board.FormName.getName(Triton.Board.ValueType.ATTACHMENT)},
                                        css: {
                                            'float': 'left',
                                            'margin-right': '20px'
                                        }
                                    }));

                                    if (attachment != undefined)
                                        uploader.setAttachmentList(attachment);
                                }


                                if (boardCommentList.useShowOnCmsOnlyComment) {

                                    buttonSection.appendToLeft(new Triton.CheckBox({
                                        content: '관리자 용 댓글',
                                        pressed: showOnCmsOnly,
                                        css: {
                                            'margin-top': '6px',
                                            'float': 'left'
                                        },
                                        form: {name: Triton.Board.FormName.getName(Triton.Board.ValueType.SHOW_ON_CMS_ONLY)}
                                    }));
                                }


                                buttonSection.appendToRight(new Triton.FlatButton({
                                    content: Lia.Strings.getString(Lia.Strings.BOARD.SAVE),
                                    theme: Triton.FlatButton.Theme.Normal,
                                    boardCommentList: boardCommentList,
                                    contentSummary: contentSummary,
                                    commentBody: commentBody,
                                    onClick: function (e) {

                                        var boardCommentList = e.data.boardCommentList;
                                        var contentSummary = e.data.contentSummary;
                                        var commentBody = e.data.commentBody;

                                        if (Triton.checkFormData(commentBody) == false) {
                                            return;
                                        }

                                        var parameterMap = Triton.extractFormData(commentBody);

                                        Triton.Board.messageHandler(Triton.Board.MessageType.LOADING_START);
                                        boardCommentList.requester.ajaxWithoutBlank(Triton.Board.ApiUrl.EDIT_BOARD_CONTENT,
                                            Triton.Board.parameterMapConverter(Triton.Board.UrlType.EDIT_BOARD_CONTENT, parameterMap, contentSummary, boardCommentList),
                                            function (status, data, request) {

                                                Triton.Board.messageHandler(Triton.Board.MessageType.LOADING_END);
                                                if (Triton.Board.responseChecker(Triton.Board.UrlType.EDIT_BOARD_CONTENT, status, data, request) == false) {
                                                    return;
                                                }

                                                request.object.boardCommentList.reload();

                                            }, {
                                                boardCommentList: boardCommentList
                                            });

                                    },
                                    css: {
                                        'margin-left': '5px'
                                    }
                                }));

                                buttonSection.appendToRight(new Triton.FlatButton({
                                    content: Lia.Strings.getString(Lia.Strings.BOARD.CANCEL),
                                    theme: Triton.FlatButton.Theme.Shade,
                                    contentSummary: contentSummary,
                                    commentBody: commentBody,
                                    body: body,
                                    editImage: editImage,
                                    onClick: function (e) {

                                        var contentSummary = e.data.contentSummary;
                                        var commentBody = e.data.commentBody;
                                        var body = e.data.body;
                                        commentBody.empty();
                                        commentBody.append(body);
                                        editImage.show();


                                    }
                                }));

                            }
                        });

                        commentHeaderSection.append(editImage);

                        var deleteImage = new Triton.Image({
                            theme: Triton.Image.Theme.CommentButton,
                            attr: {
                                src: Triton.ReplaceMap.BASE_PATH + '/img/img_comment_delete.png'
                            },
                            boardCommentList: boardCommentList,
                            contentSummary: contentSummary,
                            commentItem: commentItem,
                            onClick: function (e) {

                                var commentItem = e.data.commentItem;
                                var contentSummary = e.data.contentSummary;
                                var boardCommentList = e.data.boardCommentList;

                                Triton.Board.messageHandler(Triton.Board.MessageType.DELETE_BOARD_CONTENT, undefined, undefined, function (data) {

                                    var boardCommentList = data.boardCommentList;
                                    var contentSummary = data.contentSummary;
                                    var commentItem = data.commentItem;

                                    Triton.Board.messageHandler(Triton.Board.MessageType.LOADING_START);
                                    boardCommentList.requester.ajaxWithoutBlank(Triton.Board.ApiUrl.DELETE_BOARD_CONTENT,
                                        Triton.Board.parameterMapConverter(Triton.Board.UrlType.DELETE_BOARD_CONTENT, boardCommentList.getParameterMap(), contentSummary, boardCommentList),
                                        function (status, data, request) {

                                            Triton.Board.messageHandler(Triton.Board.MessageType.LOADING_END);
                                            if (Triton.Board.responseChecker(Triton.Board.UrlType.DELETE_BOARD_CONTENT, status, data, request) == false) {
                                                return;
                                            }

                                            var commentItem = request.object.commentItem;
                                            commentItem.remove();

                                            //var boardCommentList = request.object.boardCommentList;
                                            //boardCommentList.reload();

                                        }, {
                                            commentItem: commentItem,
                                            boardCommentList: boardCommentList
                                        });

                                }, {
                                    contentSummary: contentSummary,
                                    commentItem: commentItem,
                                    boardCommentList: boardCommentList
                                });
                            }
                        });

                        commentHeaderSection.append(deleteImage);
                    }
                }
            }

        }, {
            boardCommentList: this
        });


};


/**
 custom field 설정 방법

 1. object 설정

 object의 attachToBoardWrite : function ( detailTable, boardContent, boardWrite ) 로 붙여 넣음
 attachToParameterMap : function (parameterMap, fieldObject, boardWrite)
 로 값 설정 return true 이면 에러로 중지

 {
     attachToBoardWrite : function ( detailTable, boardContent, boardWrite ) {
     },
     attachToParameterMap : function (parameterMap, fieldObject, boardWrite) {
     }
 }


 attachHeaderToBoardList : function ( listTable, boardList )
 attachToBoardList : function ( listTable, contentSummary, data, boardList )

 2. function 설정

 ( deprecated )

 customFieldFunction(Triton.Board.CustomFieldType.WRITE_NAME, undefined, boardContent, boardWrite);
 customFieldFunction(Triton.Board.CustomFieldType.WRITE_VALUE, undefined, boardContent, boardWrite);

 호출되어 key 값과 value 값 설정

 form : { name : '' } 에 들어잇는 name 으로 값 올라감

 3. 정의된 field number 설정

 */



var BoardWrite = Triton.BoardWrite = function (options) {
    this.init(options);
};
Triton.BoardWrite.prototype = new Triton.Board();
Triton.BoardWrite.prototype.init = function (options) {

    //this.boardId = undefined;
    //this.leftButtonSection = undefined;
    //this.rightButtonSection = undefined;
    //this.categoryOptionList = undefined;
    //this.boardContent = undefined;
    //this.boardId = undefined;
    //this.boardContentCategory = undefined;
    //his.targetBoardId = undefined;

    this.moduleTypeCode = Triton.Board.ModuleType.BOARD_WRITE;
    this.options = options;
    this.optionalCategoryId = Lia.p(options, 'optionalCategoryId');
    this.typeCode = Lia.p(options, 'typeCode');
    this.targetBoardId = Lia.p(options, 'targetBoardId');
    this.parameterMap = Lia.p(options, 'parameterMap');
    this.boardContentId = Lia.p(options, 'boardContentId');
    this.uploaderParameterMap = Lia.pd(Triton.Board.uploaderParmaeterMap, options, 'uploaderParameterMap');
    this.requireFieldList = Lia.pd(Triton.BoardWrite.requireFieldList, options, 'requireFieldList');
    this.requireBoardId = Lia.pd(false, options, 'requireBoardId');
    this.boardTypeCode = Lia.p(options, 'boardTypeCode');
    this.baseRequestParameterMap = Lia.p(options, 'baseRequestParameterMap');
    this.fieldNameMap = Lia.p(options, 'fieldNameMap');
    this.doNotCheckDuplication = Lia.pd(false, options, 'doNotCheckDuplication');
    this.boardContentResponseData = Lia.p(options, 'boardContentResponseData');

    this.requester = Lia.pd(Triton.Board.requester, options, 'requester');
    if (this.requester == undefined) {
        this.requester = new jQuery.Requester();
    }
    this.customFieldList = undefined;

    {
        var fieldList = Lia.pd(Triton.BoardWrite.fieldList, options, 'fieldList');
        var hideFieldList = Lia.p(options, 'hideFieldList');
        if (hideFieldList != undefined) {

            var newFieldList = [];
            for (var i = 0, l = fieldList.length; i < l; i++) {

                var field = fieldList[i];
                var hide = false;
                for (var i2 = 0, l2 = hideFieldList.length; i2 < l2; i2++) {

                    var hideField = hideFieldList[i2];
                    if (field == hideField) {
                        hide = true;
                        break;
                    }
                }

                if (hide == false) {
                    newFieldList.push(field);
                }
            }

            fieldList = newFieldList;
        }

        this.fieldList = fieldList;
    }

    var section = new Triton.Section({});

    var title = Lia.p(options, 'title');
    if (title != undefined) {
        section.append(new Triton.Title({content: title}));
    }

    var writeSection = this.writeSection = new Triton.Section({
        appendTo: section
    });

    // 버튼 레이아웃 쪽
    {
        this.buttonSection = new Triton.ButtonSection({
            appendTo: section
        });

        var defaultButtonLayout = Lia.pd(true, options, 'defaultButtonLayout');
        if (defaultButtonLayout) {

            var onMoveListPage = Lia.p(options, 'onMoveListPage');
            if (onMoveListPage != undefined) {

                this.buttonSection.appendToLeft(new Triton.FlatButton({
                    theme: Triton.FlatButton.Theme.Shade,
                    content: Lia.Strings.getString(Lia.Strings.BOARD.LIST),
                    boardWrite: this,
                    onMoveListPage: onMoveListPage,
                    onClick: function (e) {

                        var onMoveListPage = e.data.onMoveListPage;
                        var boardWrite = e.data.boardWrite;

                        onMoveListPage(boardWrite);
                    }
                }));
            }

            var onSaved = Lia.p(options, 'onSaved');
            if (onSaved != undefined) {

                var onPreSaved = Lia.p(options, 'onPreSaved');
                var onSaveCheck = Lia.p(options, 'onSaveCheck');

                this.buttonSection.appendToRight(new Triton.FlatButton({
                    theme: Triton.FlatButton.Theme.NormalLeft,
                    content: Lia.Strings.getString(Lia.Strings.BOARD.SAVE),
                    boardWrite: this,
                    onSaved: onSaved,
                    onPreSaved: onPreSaved,
                    onSaveCheck: onSaveCheck,
                    onClick: function (e) {

                        var onSaved = e.data.onSaved;
                        var boardWrite = e.data.boardWrite;
                        var onPreSaved = e.data.onPreSaved;
                        var onSaveCheck = e.data.onSaveCheck;

                        if (Triton.checkFormData(boardWrite) == false) {
                            return;
                        }

                        var parameterMap = Triton.extractFormData(boardWrite);

                        var checkPeriodList = [
                            [Triton.Board.ValueType.EFFECTIVE_START_DATE, Triton.Board.ValueType.EFFECTIVE_END_DATE, Triton.Board.ValueType.EFFECTIVE_DATE],
                            [Triton.Board.ValueType.TASK_START_DATE, Triton.Board.ValueType.TASK_END_DATE, Triton.Board.ValueType.TASK_DATE],
                            [Triton.Board.ValueType.EVENT_START_DATE, Triton.Board.ValueType.EVENT_END_DATE, Triton.Board.ValueType.EVENT_DATE],
                            [Triton.Board.ValueType.WRITABLE_START_DATE, Triton.Board.ValueType.WRITABLE_END_DATE, Triton.Board.ValueType.WRITABLE_DATE],
                            [Triton.Board.ValueType.ALWAYS_ON_TOP_START_DATE, Triton.Board.ValueType.ALWAYS_ON_TOP_END_DATE, Triton.Board.ValueType.ALWAYS_ON_TOP_DATE]
                        ];

                        for (var i = 0, l = checkPeriodList.length; i < l; i++) {

                            var checkPeriod = Lia.p(checkPeriodList, i);

                            var startValue = Lia.p(parameterMap, Triton.Board.FormName.getName(Lia.p(checkPeriod, 0)));
                            var endValue = Lia.p(parameterMap, Triton.Board.FormName.getName(Lia.p(checkPeriod, 1)));

                            if (String.isNotBlank(startValue) && String.isNotBlank(endValue) && startValue > endValue) {

                                var formTitle = Triton.Board.ColumnValue.getName(Lia.p(checkPeriod, 2));
                                PopupManager.alert(Lia.Strings.getString(Lia.Strings.POPUP.TITLE.INFO), formTitle + '의 시작일 및 종료일을 확인해 주십시오.');
                                return;

                            }
                        }

                        // 필드 체크는 위에서 하므로 주석 처리 : 원복
                        var requireFieldList = boardWrite.getRequireFieldList();
                        if (requireFieldList != undefined) {

                            var fieldList = boardWrite.getFieldList();
                            for (var i = 0, l = requireFieldList.length; i < l; i++) {

                                var requireField = requireFieldList[i];
                                for (var i2 = 0, l2 = fieldList.length; i2 < l2; i2++) {

                                    var field = fieldList[i2];
                                    if (field == requireField) {

                                        var formName = Triton.Board.FormName.getName(field);
                                        var required = Triton.BoardWrite.fieldRequiredChecker(field, parameterMap[formName]);
                                        if (required) {
                                            Triton.Board.messageHandler(Triton.Board.MessageType.REQUIRE_FIELD, field);
                                            return;
                                        }
                                        break;
                                    }

                                }
                            }
                        }

                        var customFieldList = boardWrite.getCustomFieldList();
                        if (customFieldList != undefined) {

                            for (var i = 0, l = customFieldList.length; i < l; i++) {

                                var customField = customFieldList[i];

                                var customObject = customField['customObject'];
                                var fieldObject = customField['fieldObject'];

                                var error = customObject.attachToParameterMap(parameterMap, fieldObject, boardWrite);
                                if (error == true) {
                                    return;
                                }
                            }
                        }

                        if (onSaveCheck != undefined) {
                            var result = onSaveCheck(parameterMap, boardWrite);
                            if (result == true) {
                                return;
                            }
                        }

                        boardWrite.save(parameterMap);
                    }
                }));

            }

            var onCanceled = Lia.p(options, 'onCanceled');
            if (onCanceled != undefined) {

                this.buttonSection.appendToRight(new Triton.FlatButton({
                    theme: Triton.FlatButton.Theme.DeleteRight,
                    content: Lia.Strings.getString(Lia.Strings.BOARD.CANCEL),
                    boardWrite: this,
                    onCanceled: onCanceled,
                    onClick: function (e) {

                        var onCanceled = e.data.onCanceled;
                        var boardWrite = e.data.boardWrite;

                        onCanceled(boardWrite);
                    }
                }));
            }
        }
    }

    // 패널 부분
    this.writePanel = new Triton.Panel({
        appendTo: writeSection
    });

    this.jView = section.get();
    this.initTriton(options);

    if (this.requireBoardId && this.targetBoardId == undefined) {

        Triton.Board.messageHandler(Triton.Board.MessageType.LOADING_START);

        this.requester.ajaxWithoutBlank(Triton.Board.ApiUrl.GET_BOARD_LIST,
            Triton.Board.parameterMapConverter(Triton.Board.UrlType.GET_BOARD_LIST, this.parameterMap, undefined, this),
            function (status, data, request) {

                Triton.Board.messageHandler(Triton.Board.MessageType.LOADING_END);

                if (Triton.Board.responseChecker(Triton.Board.UrlType.GET_BOARD_LIST, status, data, request) == false) {
                    return;
                }

                var boardWrite = request.object.boardWrite;
                var boardId = Triton.Board.valueExtractor(Triton.Board.ValueType.BOARD_ID, data, undefined, boardWrite);
                if (boardId == undefined) {
                    return;
                }

                boardWrite.setBoardId(boardId);

            }, {boardWrite: this});

    } else {

        this.boardId = (this.targetBoardId);
    }


    if (this.boardContentResponseData == undefined) {

        // 기존 게시판 정보 들고와야되면 들고옴
        if (this.boardContentId != undefined) {

            Triton.Board.messageHandler(Triton.Board.MessageType.LOADING_START);

            this.requester.ajaxWithoutBlank(Triton.Board.ApiUrl.GET_BOARD_CONTENT,
                Triton.Board.parameterMapConverter(Triton.Board.UrlType.GET_BOARD_CONTENT, this.parameterMap, undefined, this),
                function (status, data, request) {

                    Triton.Board.messageHandler(Triton.Board.MessageType.LOADING_END);

                    if (Triton.Board.responseChecker(Triton.Board.UrlType.GET_BOARD_CONTENT, status, data, request) == false) {
                        return;
                    }

                    var boardWrite = request.object.boardWrite;
                    boardWrite.boardContentResponseData = data;

                }, {boardWrite: this});

        }

    }

    this.requester.func(function (execute) {

        var boardWrite = execute.object.boardWrite;
        var data = boardWrite.boardContentResponseData;

        var boardContent = Triton.Board.valueExtractor(Triton.Board.ValueType.BOARD_CONTENT, data, undefined, boardWrite);
        boardWrite.setBoardContent(boardContent);

        var boardId = boardWrite.getBoardId();
        if (boardWrite.requireBoardId && boardId == undefined) {
            Triton.Board.messageHandler(Triton.Board.MessageType.FAILED_TO_FIND_BOARD);
            return;
        }

        var boardContentId = boardWrite.getBoardContentId();
        if (boardContentId != undefined && boardContent == undefined) {
            Triton.Board.messageHandler(Triton.Board.MessageType.FAILED_TO_FIND_BOARD_CONTENT);
            return;
        }

        // 카테고리 항목 있는지 체크
        var occurCategoryField = false;
        var fieldList = boardWrite.getFieldList();
        for (var i = 0, l = fieldList.length; i < l; i++) {
            var field = fieldList[i];
            if (field == Triton.Board.ValueType.CATEGORY) {
                occurCategoryField = true;
                break;
            }
        }

        if (occurCategoryField == true) {

            boardWrite.requester.func(function (execute) {

                var boardWrite = execute.object.boardWrite;
                var boardId = boardWrite.getBoardId();
                if (boardId == undefined) {
                    return;
                }

                Triton.Board.messageHandler(Triton.Board.MessageType.LOADING_START);

                boardWrite.requester.ajaxWithoutBlank(Triton.Board.ApiUrl.GET_BOARD_CONTENT_CATEGORY_LIST,
                    Triton.Board.parameterMapConverter(Triton.Board.UrlType.GET_BOARD_CONTENT_CATEGORY_LIST, boardWrite.getParameterMap(), undefined, boardWrite),
                    function (status, data, request) {

                        Triton.Board.messageHandler(Triton.Board.MessageType.LOADING_END);

                        if (Triton.Board.responseChecker(Triton.Board.UrlType.GET_BOARD_CONTENT_CATEGORY_LIST, status, data, request) == false) {
                            return;
                        }

                        var boardWrite = request.object.boardWrite;
                        boardWrite.setCategoryOptionList(Triton.Board.valueExtractor(Triton.Board.ValueType.CATEGORY_OPTION_LIST, data, undefined, boardWrite));

                    }, {boardWrite: boardWrite});

            }, {
                boardWrite: boardWrite
            });
        }

        boardWrite.requester.func(function (execute) {

            var boardWrite = execute.object.boardWrite;
            boardWrite.requester.func(function (execute) {

                var boardWrite = execute.object.boardWrite;
                var boardId = boardWrite.getBoardId();
                if (boardWrite.requireBoardId && boardId == undefined) {
                    return;
                }

                var boardContent = boardWrite.getBoardContent();

                var writePanel = boardWrite.writePanel;
                var detailTable = new Triton.DetailTable({appendTo: writePanel});

                var customFieldList = [];
                var colspan = 2;
                var fieldList = boardWrite.getFieldList();
                for (var i = 0, l = fieldList.length; i < l; i++) {

                    var field = fieldList[i];
                    if (field == undefined) {
                        continue;
                    }

                    if (typeof field == 'object') {

                        var customObject = Lia.deepCopy(field);
                        fieldList[i] = customObject;
                        if ( customObject.getBoardWriteColspan != undefined ) {

                            var currentColspan = customObject.getBoardWriteColspan(
                                detailTable, boardContent, boardWrite
                            );

                            if ( colspan < currentColspan ) {
                                colspan = currentColspan;
                            }
                        }
                    }
                }
                boardWrite.setColspan(colspan);


                for (var i = 0, l = fieldList.length; i < l; i++) {
                    var field = fieldList[i];
                    if (field == undefined)
                        continue;


                    if (typeof field == 'object') {

                        var customObject = field;
                        var fieldObject = customObject.attachToBoardWrite(
                            detailTable, boardContent, boardWrite
                        );

                        customFieldList.push({
                            customObject: customObject,
                            fieldObject: fieldObject
                        });

                    } else if (typeof field == 'function') {

                        var customFieldFunction = field;

                        var columnName = customFieldFunction(Triton.Board.CustomFieldType.WRITE_NAME, undefined, boardContent, boardWrite);
                        var columnValue = customFieldFunction(Triton.Board.CustomFieldType.WRITE_VALUE, undefined, boardContent, boardWrite);

                        detailTable.appendRow({});
                        detailTable.appendKeyColumn({
                            content: columnName
                        });

                        detailTable.appendValueColumn({
                            content: columnValue,
                            attr : { colspan : (colspan - 1)}
                        });

                    } else {

                        var columnName = Lia.p(boardWrite.fieldNameMap, field);
                        if (columnName == undefined) {
                            columnName = Triton.Board.ColumnValue.getName(field);
                        }

                        var columnNameSuffix = '';
                        var requireField = undefined;
                        var requireFieldList = boardWrite.getRequireFieldList();
                        if (requireFieldList != undefined) {

                            for (var i2 = 0, l2 = requireFieldList.length; i2 < l2; i2++) {

                                var item = Lia.p(requireFieldList, i2);
                                if (typeof item == 'object') {


                                    if (Lia.p(item, 'field') == field) {
                                        var required = Lia.p(item, 'required');

                                        if (required == true) {
                                            columnNameSuffix = ' *';
                                        }

                                        requireField = item;
                                        break;
                                    }

                                } else {

                                    if (item == field) {
                                        columnNameSuffix = ' *';
                                        requireField = {noBlank: 1};
                                        break;
                                    }

                                }


                            }
                        }

                        detailTable.appendRow({});
                        detailTable.appendKeyColumn({
                            content: columnName + columnNameSuffix
                        });

                        var formName = Triton.Board.FormName.getName(field);
                        var fieldValue = Triton.Board.valueExtractor(field, undefined, boardContent, boardWrite);
                        if (field == Triton.Board.ValueType.CATEGORY) {

                            var categoryId = fieldValue;
                            if (categoryId == undefined) {
                                categoryId = boardWrite.getOptionalCategoryId();
                            }

                            fieldValue = new Triton.ComboBox({
                                form: {
                                    name: formName,
                                    title: columnName,
                                    validation: Lia.p(requireField, 'validation')
                                },
                                selectedValue: categoryId,
                                optionList: boardWrite.getCategoryOptionList()
                            });

                        } else if (field == Triton.Board.ValueType.TITLE) {

                            fieldValue = new Triton.TextInput({
                                form: {
                                    name: formName,
                                    title: columnName,
                                    validation: Lia.p(requireField, 'validation')
                                },
                                theme: Triton.TextInput.Theme.Full,
                                value: fieldValue
                            });

                        } else if (field == Triton.Board.ValueType.BODY) {

                            fieldValue = new Triton.TextEditor({
                                form: {
                                    name: formName,
                                    title: columnName,
                                    validation: Lia.p(requireField, 'validation')
                                },
                                value: fieldValue
                            });

                        } else if (field == Triton.Board.ValueType.ATTACHMENT) {

                            var attachment = fieldValue;
                            fieldValue = new Triton.Uploader({
                                form: {
                                    name: formName,
                                    title: columnName,
                                    validation: Lia.p(requireField, 'validation')
                                },
                                parameterMap: boardWrite.getUploaderParameterMap()
                            });

                            if (attachment != undefined)
                                fieldValue.setValue(attachment);

                        } else if (field == Triton.Board.ValueType.LINK) {

                            fieldValue = new Triton.TextInput({
                                form: {
                                    name: formName,
                                    title: columnName,
                                    validation: Lia.p(requireField, 'validation')
                                },
                                theme: Triton.TextInput.Theme.Full,
                                value: fieldValue
                            });

                        } else if (field == Triton.Board.ValueType.IS_AVAILABLE) {

                            fieldValue = new Triton.CheckBox({
                                form: {
                                    name: formName,
                                    title: columnName,
                                    validation: Lia.p(requireField, 'validation')
                                },
                                status: fieldValue
                            });

                        } else if (field == Triton.Board.ValueType.IS_ALWAYS_ON_TOP) {

                            fieldValue = new Triton.CheckBox({
                                form: {
                                    name: formName,
                                    title: columnName,
                                    validation: Lia.p(requireField, 'validation')
                                },
                                status: fieldValue
                            });

                        } else if (field == Triton.Board.ValueType.IS_PRIVATE) {

                            fieldValue = new Triton.CheckBox({
                                form: {
                                    name: formName,
                                    title: columnName,
                                    validation: Lia.p(requireField, 'validation')
                                },
                                status: fieldValue
                            });

                        } else if (field == Triton.Board.ValueType.EFFECTIVE_START_DATE) {

                            fieldValue = new Triton.DatetimePicker({
                                form: {
                                    name: formName,
                                    title: columnName,
                                    validation: Lia.p(requireField, 'validation')
                                },
                                value: fieldValue
                            });

                        } else if (field == Triton.Board.ValueType.EFFECTIVE_END_DATE) {

                            fieldValue = new Triton.DatetimePicker({
                                form: {
                                    name: formName,
                                    title: columnName,
                                    validation: Lia.p(requireField, 'validation')
                                },
                                value: fieldValue
                            });

                        } else if (field == Triton.Board.ValueType.EFFECTIVE_DATE) {

                            var effectiveStartDate = Triton.Board.valueExtractor(Triton.Board.ValueType.EFFECTIVE_START_DATE, undefined, boardContent, boardWrite);
                            var effectiveEndDate = Triton.Board.valueExtractor(Triton.Board.ValueType.EFFECTIVE_END_DATE, undefined, boardContent, boardWrite);

                            fieldValue = new Triton.DatetimePeriodPicker({

                                startOptions: {
                                    form: {
                                        name: Triton.Board.FormName.getName(Triton.Board.ValueType.EFFECTIVE_START_DATE),
                                        title: columnName,
                                        validation: Lia.p(requireField, 'start', 'validation')
                                    },
                                    value: effectiveStartDate
                                },

                                endOptions: {
                                    form: {
                                        name: Triton.Board.FormName.getName(Triton.Board.ValueType.EFFECTIVE_END_DATE),
                                        title: columnName,
                                        validation: Lia.p(requireField, 'end', 'validation')
                                    },
                                    value: effectiveEndDate
                                }
                            });

                        } else if (field == Triton.Board.ValueType.THUMBNAIL_IMAGE_URL) {

                            var thumbnailImageUrl = Triton.Board.valueExtractor(Triton.Board.ValueType.THUMBNAIL_IMAGE_URL, undefined, boardContent, boardWrite);

                            fieldValue = new Triton.ThumbnailUploader({
                                form: {
                                    name: formName,
                                    title: columnName,
                                    validation: Lia.p(requireField, 'validation')
                                },
                                parameterMap: boardWrite.getUploaderParameterMap()
                            });

                            if (thumbnailImageUrl != undefined)
                                fieldValue.setValue(thumbnailImageUrl);

                        } else if (field == Triton.Board.ValueType.VIDEO_URL) {

                            var videoUrl = Triton.Board.valueExtractor(Triton.Board.ValueType.VIDEO_URL, undefined, boardContent, boardWrite);
                            fieldValue = new Triton.Section({
                                css: {
                                    'overflow': 'auto'
                                }
                            });

                            var comboBox = new Triton.ComboBox({
                                form: {
                                    name: formName + 'TypeCode',
                                    title: columnName,
                                    validation: Lia.p(requireField, 'validation')
                                },
                                css: {
                                    'float': 'left'
                                },
                                appendTo: fieldValue,
                                optionList: [{
                                    'name': '선택',
                                    'value': ''
                                }, {
                                    'name': VideoType.getName(VideoType.YOUTUBE) + ' ID',
                                    'value': VideoType.YOUTUBE
                                }, {
                                    'name': VideoType.getName(VideoType.VIMEO) + ' ID',
                                    'value': VideoType.VIMEO
                                }]
                            });

                            var textInput = new Triton.TextInput({
                                form: {
                                    name: formName + 'Text',
                                    title: columnName,
                                    validation: Lia.p(requireField, 'validation')
                                },
                                css: {
                                    'float': 'left',
                                    'margin-left': '10px'
                                },
                                appendTo: fieldValue
                            });

                            if (videoUrl != undefined) {

                                var videoTypeCode = Lia.p(videoUrl, 'type_code');
                                var videoRealUrl = Lia.p(videoUrl, 'url');

                                comboBox.setValue(videoTypeCode);
                                textInput.setValue(videoRealUrl);
                            }
                        } else if (field == Triton.Board.ValueType.IMAGE_URL) {

                            var imageUrl = Triton.Board.valueExtractor(Triton.Board.ValueType.IMAGE_URL, undefined, boardContent, boardWrite);

                            fieldValue = new Triton.ThumbnailUploader({
                                form: {
                                    name: formName,
                                    title: columnName,
                                    validation: Lia.p(requireField, 'validation')
                                },
                                parameterMap: boardWrite.getUploaderParameterMap()
                            });

                            if (imageUrl != undefined)
                                fieldValue.setValue(imageUrl);

                        } else if (field == Triton.Board.ValueType.IS_ALWAYS_ON_TOP_DATE) {

                            var alwaysOnTopStartDate = Triton.Board.valueExtractor(Triton.Board.ValueType.ALWAYS_ON_TOP_START_DATE, undefined, boardContent, boardWrite);
                            var alwaysOnTopEndDate = Triton.Board.valueExtractor(Triton.Board.ValueType.ALWAYS_ON_TOP_END_DATE, undefined, boardContent, boardWrite);

                            var isAvailable = Triton.CheckBox.Status.PRESSED;
                            if (boardContent != undefined) {
                                isAvailable = Triton.Board.valueExtractor(Triton.Board.ValueType.IS_ALWAYS_ON_TOP, undefined, boardContent, boardWrite);
                            }

                            var checkOptions = {
                                status: isAvailable,
                                form: {
                                    name: Triton.Board.FormName.getName(Triton.Board.ValueType.IS_ALWAYS_ON_TOP),
                                    title: columnName,
                                    validation: Lia.p(requireField, 'validation')
                                },
                                onChecked: function () {

                                    var checkBox = $(this).getTriton();
                                    var jDateRow = checkBox.jDateRow;
                                    if (checkBox.getPressed()) {
                                        jDateRow.show();
                                    } else {
                                        jDateRow.hide();
                                    }
                                }
                            };

                            var checkBox = new Triton.CheckBox(checkOptions);

                            detailTable.appendValueColumn({
                                content: checkBox,
                                attr : { colspan : (colspan - 1)}
                            });

                            detailTable.appendRow({});
                            checkBox.jDateRow = detailTable.getJCurrentRow().hide();
                            checkBox.change();


                            var extraColumnName = Triton.Board.ColumnValue.getName(Triton.Board.ValueType.ALWAYS_ON_TOP_DATE);
                            detailTable.appendKeyColumn({
                                content: extraColumnName
                            });

                            var extraFieldValue = new Triton.DatetimePeriodPicker({

                                startOptions: {
                                    form: {
                                        name: Triton.Board.FormName.getName(Triton.Board.ValueType.ALWAYS_ON_TOP_START_DATE),
                                        title: columnName,
                                        validation: Lia.p(requireField, 'start', 'validation')
                                    },
                                    value: alwaysOnTopStartDate
                                },

                                endOptions: {
                                    form: {
                                        name: Triton.Board.FormName.getName(Triton.Board.ValueType.ALWAYS_ON_TOP_END_DATE),
                                        title: columnName,
                                        validation: Lia.p(requireField, 'end', 'validation')
                                    },
                                    value: alwaysOnTopEndDate
                                }
                            });

                            detailTable.appendValueColumn({
                                content: extraFieldValue,
                                attr : { colspan : (colspan - 1)}
                            });

                            if (isAvailable) {
                                checkBox.change();
                            }

                            continue;

                        } else if (field == Triton.Board.ValueType.IS_AVAILABLE_EFFECTIVE_DATE) {

                            var effectiveStartDate = Triton.Board.valueExtractor(Triton.Board.ValueType.EFFECTIVE_START_DATE, undefined, boardContent, boardWrite);
                            var effectiveEndDate = Triton.Board.valueExtractor(Triton.Board.ValueType.EFFECTIVE_END_DATE, undefined, boardContent, boardWrite);

                            var isAvailable = Triton.CheckBox.Status.PRESSED;
                            if (boardContent != undefined) {
                                isAvailable = Triton.Board.valueExtractor(Triton.Board.ValueType.IS_AVAILABLE, undefined, boardContent, boardWrite);
                            }

                            var checkOptions = {
                                status: isAvailable,
                                form: {
                                    name: Triton.Board.FormName.getName(Triton.Board.ValueType.IS_AVAILABLE),
                                    title: columnName,
                                    validation: Lia.p(requireField, 'validation')
                                },
                                onChecked: function () {

                                    var checkBox = $(this).getTriton();
                                    var jDateRow = checkBox.jDateRow;
                                    if (checkBox.getPressed()) {
                                        jDateRow.show();
                                    } else {
                                        jDateRow.hide();
                                    }
                                }
                            };

                            var checkBox = new Triton.CheckBox(checkOptions);

                            detailTable.appendValueColumn({
                                content: checkBox,
                                attr : { colspan : (colspan - 1)}
                            });

                            detailTable.appendRow({});
                            checkBox.jDateRow = detailTable.getJCurrentRow().hide();
                            checkBox.change();


                            var extraColumnName = Triton.Board.ColumnValue.getName(Triton.Board.ValueType.EFFECTIVE_DATE);
                            detailTable.appendKeyColumn({
                                content: extraColumnName
                            });

                            var extraFieldValue = new Triton.DatetimePeriodPicker({

                                startOptions: {
                                    form: {
                                        name: Triton.Board.FormName.getName(Triton.Board.ValueType.EFFECTIVE_START_DATE),
                                        title: columnName,
                                        validation: Lia.p(requireField, 'start', 'validation')
                                    },
                                    value: effectiveStartDate
                                },

                                endOptions: {
                                    form: {
                                        name: Triton.Board.FormName.getName(Triton.Board.ValueType.EFFECTIVE_END_DATE),
                                        title: columnName,
                                        validation: Lia.p(requireField, 'end', 'validation')
                                    },
                                    value: effectiveEndDate
                                }
                            });

                            detailTable.appendValueColumn({
                                content: extraFieldValue,
                                attr : { colspan : (colspan - 1)}
                            });

                            if (isAvailable) {
                                checkBox.change();
                            }

                            continue;

                        } else if (field == Triton.Board.ValueType.PROGRESS) {

                            var progressRateSection = new Triton.Section({});

                            new Triton.TextInput({
                                appendTo: progressRateSection,
                                form: {
                                    name: formName,
                                    title: columnName,
                                    validation: Lia.p(requireField, 'validation')
                                },
                                value: fieldValue
                            });

                            new Triton.Span({
                                appendTo: progressRateSection,
                                content: '%',
                                css: {'margin-left': '10px'}
                            });

                            fieldValue = progressRateSection;
                        } else if (field == Triton.Board.ValueType.TASK_DATE) {

                            var taskStartDate = Triton.Board.valueExtractor(Triton.Board.ValueType.TASK_START_DATE, undefined, boardContent, boardWrite);
                            var taskEndDate = Triton.Board.valueExtractor(Triton.Board.ValueType.TASK_END_DATE, undefined, boardContent, boardWrite);

                            fieldValue = new Triton.DatetimePeriodPicker({

                                startOptions: {
                                    form: {
                                        name: Triton.Board.FormName.getName(Triton.Board.ValueType.TASK_START_DATE),
                                        title: columnName,
                                        validation: Lia.p(requireField, 'start', 'validation')
                                    },
                                    value: taskStartDate,
                                    type: Triton.DatetimePicker.TYPE_DATE
                                },

                                endOptions: {
                                    form: {
                                        name: Triton.Board.FormName.getName(Triton.Board.ValueType.TASK_END_DATE),
                                        title: columnName,
                                        validation: Lia.p(requireField, 'end', 'validation')
                                    },
                                    value: taskEndDate,
                                    type: Triton.DatetimePicker.TYPE_DATE
                                },
                            });
                        } else if (field == Triton.Board.ValueType.EVENT_DATE) {

                            var eventStartDate = Triton.Board.valueExtractor(Triton.Board.ValueType.EVENT_START_DATE, undefined, boardContent, boardWrite);
                            var eventEndDate = Triton.Board.valueExtractor(Triton.Board.ValueType.EVENT_END_DATE, undefined, boardContent, boardWrite);

                            fieldValue = new Triton.DatetimePeriodPicker({

                                startOptions: {
                                    form: {
                                        name: Triton.Board.FormName.getName(Triton.Board.ValueType.EVENT_START_DATE),
                                        title: columnName,
                                        validation: Lia.p(requireField, 'start', 'validation')
                                    },
                                    value: eventStartDate
                                },

                                endOptions: {
                                    form: {
                                        name: Triton.Board.FormName.getName(Triton.Board.ValueType.EVENT_END_DATE),
                                        title: columnName,
                                        validation: Lia.p(requireField, 'end', 'validation')
                                    },
                                    value: eventEndDate
                                }
                            });
                        } else if (field == Triton.Board.ValueType.FLOATING_TEXT) {

                            fieldValue = new Triton.TextInput({
                                form: {
                                    name: formName,
                                    title: columnName,
                                    validation: Lia.p(requireField, 'validation')
                                },
                                theme: Triton.TextInput.Theme.Full,
                                value: fieldValue
                            });

                        }

                        detailTable.appendValueColumn({
                            content: fieldValue,
                            attr : { colspan : (colspan - 1)}
                        });

                        if (field == Triton.Board.ValueType.BODY) {
                            fieldValue.initTextEditor();
                        }
                    }
                }

                boardWrite.setCustomFieldList(customFieldList);

                var options = boardWrite.getOptions();
                var onLoaded = Lia.p(options, 'onLoaded');
                if (onLoaded != undefined) {
                    onLoaded(boardWrite);
                }

                // if (galleryContentTypeComboBox != undefined)
                //     galleryContentTypeComboBox.change();

            }, {
                boardWrite: boardWrite
            });


        }, {
            boardWrite: boardWrite
        });


    }, {
        boardWrite: this
    });

};

Triton.BoardWrite.prototype.save = function (parameterMap) {

    var boardWrite = this;
    var options = boardWrite.options;
    var onPreSaved = Lia.p(options, 'onPreSaved');
    var onSaved = Lia.p(options, 'onSaved');

    if (onPreSaved != undefined) {
        onPreSaved(boardWrite, parameterMap);
    }

    Triton.Board.messageHandler(Triton.Board.MessageType.LOADING_START);

    boardWrite.requester.func(function (execute) {

        var boardWrite = execute.object.boardWrite;
        var onSaved = execute.object.onSaved;
        var parameterMap = execute.object.parameterMap;

        var boardContentId = boardWrite.getBoardContentId();
        if (boardContentId == undefined) {

            boardWrite.requester.ajaxWithoutBlank(Triton.Board.ApiUrl.ADD_BOARD_CONTENT,
                Triton.Board.parameterMapConverter(Triton.Board.UrlType.ADD_BOARD_CONTENT, parameterMap, undefined, boardWrite, boardWrite.baseRequestParameterMap),
                function (status, data, request) {

                    Triton.Board.messageHandler(Triton.Board.MessageType.LOADING_END);
                    if (Triton.Board.responseChecker(Triton.Board.UrlType.ADD_BOARD_CONTENT, status, data, request) == false) {
                        return;
                    }

                    var onSaved = request.object.onSaved;
                    var boardWrite = request.object.boardWrite;
                    var parameterMap = request.parameterMap;
                    onSaved(boardWrite, parameterMap, data);

                }, {
                    onSaved: onSaved,
                    boardWrite: boardWrite
                });

        } else {


            if (Triton.Board.siteType == Triton.SiteType.Polaris2 && boardWrite.doNotCheckDuplication != true) {

                Requester.ajaxWithoutBlank(Triton.Board.ApiUrl.GET_DUPLICATED_BOARD_CONTENT_COUNT, {
                    boardContentId: boardContentId
                }, function (status, data, request) {

                    if (status != Requester.Status.SUCCESS)
                        return;

                    var body = Lia.p(data, 'body');
                    var count = Lia.p(body, 'count');

                    if (count < 2) {

                        parameterMap['editDuplicatedBoardContents'] = 0;

                        boardWrite.requester.ajaxWithoutBlank(Triton.Board.ApiUrl.EDIT_BOARD_CONTENT,
                            Triton.Board.parameterMapConverter(Triton.Board.UrlType.EDIT_BOARD_CONTENT, parameterMap, undefined, boardWrite, boardWrite.baseRequestParameterMap),
                            function (status, data, request) {

                                Triton.Board.messageHandler(Triton.Board.MessageType.LOADING_END);
                                if (Triton.Board.responseChecker(Triton.Board.UrlType.EDIT_BOARD_CONTENT, status, data, request) == false) {
                                    return;
                                }

                                var onSaved = request.object.onSaved;
                                var boardWrite = request.object.boardWrite;
                                var parameterMap = request.parameterMap;
                                onSaved(boardWrite, parameterMap, data);

                            }, {
                                onSaved: onSaved,
                                boardWrite: boardWrite
                            });

                    } else if (count >= 2) {

                        PopupManager.alert(Lia.Strings.getString(Lia.Strings.POPUP.TITLE.INFO), '동일 게시물이 다수 존재합니다. 일괄 수정할까요?', function (object) {

                            parameterMap['editDuplicatedBoardContents'] = 1;

                            boardWrite.requester.ajaxWithoutBlank(Triton.Board.ApiUrl.EDIT_BOARD_CONTENT,
                                Triton.Board.parameterMapConverter(Triton.Board.UrlType.EDIT_BOARD_CONTENT, parameterMap, undefined, boardWrite, boardWrite.baseRequestParameterMap),
                                function (status, data, request) {

                                    Triton.Board.messageHandler(Triton.Board.MessageType.LOADING_END);
                                    if (Triton.Board.responseChecker(Triton.Board.UrlType.EDIT_BOARD_CONTENT, status, data, request) == false) {
                                        return;
                                    }

                                    var onSaved = request.object.onSaved;
                                    var boardWrite = request.object.boardWrite;
                                    var parameterMap = request.parameterMap;
                                    onSaved(boardWrite, parameterMap);

                                }, {
                                    onSaved: onSaved,
                                    boardWrite: boardWrite
                                });

                        }, function (object) {

                            parameterMap['editDuplicatedBoardContents'] = 0;

                            boardWrite.requester.ajaxWithoutBlank(Triton.Board.ApiUrl.EDIT_BOARD_CONTENT,
                                Triton.Board.parameterMapConverter(Triton.Board.UrlType.EDIT_BOARD_CONTENT, parameterMap, undefined, boardWrite),
                                function (status, data, request) {

                                    Triton.Board.messageHandler(Triton.Board.MessageType.LOADING_END);
                                    if (Triton.Board.responseChecker(Triton.Board.UrlType.EDIT_BOARD_CONTENT, status, data, request) == false) {
                                        return;
                                    }

                                    var onSaved = request.object.onSaved;
                                    var boardWrite = request.object.boardWrite;
                                    var parameterMap = request.parameterMap;
                                    onSaved(boardWrite, parameterMap);

                                }, {
                                    onSaved: onSaved,
                                    boardWrite: boardWrite
                                });

                        }, '예', '아니오', {});


                    }

                });

            } else {

                boardWrite.requester.ajaxWithoutBlank(Triton.Board.ApiUrl.EDIT_BOARD_CONTENT,
                    Triton.Board.parameterMapConverter(Triton.Board.UrlType.EDIT_BOARD_CONTENT, parameterMap, undefined, boardWrite, boardWrite.baseRequestParameterMap),
                    function (status, data, request) {

                        Triton.Board.messageHandler(Triton.Board.MessageType.LOADING_END);
                        if (Triton.Board.responseChecker(Triton.Board.UrlType.EDIT_BOARD_CONTENT, status, data, request) == false) {
                            return;
                        }

                        var onSaved = request.object.onSaved;
                        var boardWrite = request.object.boardWrite;
                        var parameterMap = request.parameterMap;
                        onSaved(boardWrite, parameterMap);

                    }, {
                        onSaved: onSaved,
                        boardWrite: boardWrite
                    });
            }
        }

    }, {
        onSaved: onSaved,
        boardWrite: boardWrite,
        parameterMap: parameterMap
    });
};

Triton.BoardWrite.prototype.getUploaderParameterMap = function () {
    return this.uploaderParameterMap;
};
Triton.BoardWrite.prototype.setUploaderParameterMap = function (map) {
    this.uploaderParameterMap = map;
};
Triton.BoardWrite.prototype.getOptionalCategoryId = function () {
    return this.optionalCategoryId;
};
Triton.BoardWrite.prototype.setOptionalCategoryId = function (id) {
    this.optionalCategoryId = id;
};
Triton.BoardWrite.prototype.setRequireFieldList = function (list) {
    this.requireFieldList = list;
};
Triton.BoardWrite.prototype.getRequireFieldList = function () {
    return this.requireFieldList;
};
Triton.BoardWrite.prototype.setCustomFieldList = function (list) {
    this.customFieldList = list;
};
Triton.BoardWrite.prototype.getCustomFieldList = function () {
    return this.customFieldList;
};


// 표시 필드 리스트
Triton.BoardWrite.fieldList = [
    Triton.Board.ValueType.CATEGORY,
    Triton.Board.ValueType.TITLE,
    Triton.Board.ValueType.BODY,
    Triton.Board.ValueType.ATTACHMENT,
    Triton.Board.ValueType.THUMBNAIL_IMAGE_URL,
    Triton.Board.ValueType.IS_ALWAYS_ON_TOP,
    Triton.Board.ValueType.IS_PRIVATE,
    Triton.Board.ValueType.IS_AVAILABLE_EFFECTIVE_DATE
];
Triton.BoardWrite.setFieldList = function (list) {
    Triton.BoardWrite.fieldList = list;
};
Triton.BoardWrite.requireFieldList = [
    Triton.Board.ValueType.TITLE
];
Triton.BoardWrite.setRequireFieldList = function (list) {
    Triton.BoardWrite.requireFieldList = list;
};


Triton.BoardWrite.fieldRequiredChecker = function (typeCode, value) {
};
Triton.BoardWrite.setFieldRequiredChecker = function (fieldRequiredChecker) {
    Triton.BoardWrite.fieldRequiredChecker = fieldRequiredChecker;
};

Triton.BoardWrite.requireFieldChecker = function (typeCode, value) {
};
Triton.BoardWrite.setRequireFieldChecker = function (requireFieldChecker) {
    Triton.BoardWrite.requireFieldChecker = requireFieldChecker;
};


/*

 fieldList 설정하는 부분

 1. object 설정
 attachToBoardDetail : function (detailTable, boardContent, boardDetail); 로 해당 데이터 붙임

 2. function 설정

 customFieldFunction(Triton.Board.CustomFieldType.DETAIL_NAME, data, boardContent, boardDetail);
 customFieldFunction(Triton.Board.CustomFieldType.DETAIL_VALUE, data, boardContent, boardDetail);

 로 이름 밸류 값 처리

 3. 정의된 field list 부분

 */

var BoardDetail = Triton.BoardDetail = function (options) {
    this.init(options);
};
Triton.BoardDetail.prototype = new Triton.Board();
Triton.BoardDetail.prototype.init = function (options) {

    //this.leftButtonSection = undefined;
    //this.rightButtonSection = undefined;
    //this.categoryOptionList = undefined;
    //this.typeCode = undefined;
    //this.boardContentId = undefined;
    //this.boardContent = undefined;
    //this.boardContentCategory = undefined;
    //his.targetBoardId = undefined;

    this.moduleTypeCode = Triton.Board.ModuleType.BOARD_DETAIL;
    this.options = options;
    this.parameterMap = Lia.p(options, 'parameterMap');
    this.targetBoardId = this.boardId = Lia.p(options, 'targetBoardId');
    this.boardContentId = Lia.p(options, 'boardContentId');
    this.boardContentResponseData = Lia.p(options, 'boardContentResponseData');
    this.sectionTypeList = Lia.pd(Triton.BoardDetail.sectionTypeList, options, 'sectionTypeList');
    this.isEditable = Lia.pd(true, options, 'isEditable');
    this.baseRequestParameterMap = Lia.p(options, 'baseRequestParameterMap');

    // TODO COMMENT 쪽 fieldlist로 빼야함
    this.commentCss = Lia.p(options, 'commentCss');
    this.unuseComment = Lia.p(options, 'unuseComment');
    this.unuseCommentWrite = Lia.p(options, 'unuseCommentWrite');
    this.useShowOnCmsOnlyComment = Lia.p(options, 'useShowOnCmsOnlyComment');
    this.useCommentUploader = Lia.p(options, 'useCommentUploader');
    this.commentUploaderParameterMap = Lia.pd(Triton.Board.uploaderParmaeterMap, options, 'commentUploaderParameterMap');
    this.commentWriteBaseRequestParameterMap = Lia.p(options, 'commentWriteBaseRequestParameterMap');
    this.cmsOnlyCommentDefaultChecked = Lia.p(options, 'cmsOnlyCommentDefaultChecked');
    this.onCommentWritten = Lia.p(options, 'onCommentWritten');
    this.commentListBaseRequestParameterMap = Lia.p(options, 'commentListBaseRequestParameterMap');
    this.doNotCheckDuplication = Lia.p(options, 'doNotCheckDuplication');

    this.onLoaded = Lia.p(options, 'onLoaded');
    this.requester = Lia.pd(Triton.Board.requester, options, 'requester');
    if (this.requester == undefined) {
        this.requester = new jQuery.Requester();
    }

    {
        var fieldList = Lia.pd(Triton.BoardDetail.fieldList, options, 'fieldList');

        var hideFieldList = Lia.p(options, 'hideFieldList');
        if (hideFieldList != undefined) {

            var newFieldList = [];
            for (var i = 0, l = fieldList.length; i < l; i++) {

                var field = fieldList[i];
                var hide = false;
                for (var i2 = 0, l2 = hideFieldList.length; i2 < l2; i2++) {

                    var hideField = hideFieldList[i2];
                    if (field == hideField) {
                        hide = true;
                        break;
                    }
                }

                if (hide == false) {
                    newFieldList.push(field);
                }
            }

            fieldList = newFieldList;
        }

        this.fieldList = fieldList;
    }

    var section = new Triton.Section({});

    var title = Lia.p(options, 'title');
    if (title != undefined) {
        section.append(new Triton.Title({content: title}));
    }

    var detailSection = this.detailSection = new Triton.Section({
        appendTo: section
    });

    // 패널 부분
    this.detailPanel = new Triton.Panel({
        appendTo: detailSection,
        css: {'overflow-x': 'auto'}
    });


    var commentCss = this.commentCss;

    for (var i = 0, l = this.sectionTypeList.length; i < l; i++) {

        var sectionType = this.sectionTypeList[i];

        if (sectionType == Triton.Board.SectionType.BUTTON) {

            // 버튼 부분
            this.buttonSection = new Triton.ButtonSection({
                appendTo: section
            });

        } else if (sectionType == Triton.Board.SectionType.COMMENT_WRITE) {

            // 코멘트 쓰기
            this.commentWriteSection = new Triton.Section({
                appendTo: section,
                css : commentCss
            });

        } else if (sectionType == Triton.Board.SectionType.COMMENT_LIST) {

            // 코멘트 리스트
            this.commentListSection = new Triton.Section({
                appendTo: section,
                css : commentCss
            });
        }
    }

    this.titleCommentCountShow = Lia.pd(true, options, 'titleCommentCountShow');
    this.titlePrivateShow = Lia.pd(true, options, 'titlePrivateShow');
    this.titleNewShow = Lia.pd(true, options, 'titleNewShow');
    this.titleAnsweredShow = Lia.pd(false, options, 'titleAnsweredShow');

    this.jView = section.get();
    this.initTriton(options);

    if (this.targetBoardId == undefined) {

        Triton.Board.messageHandler(Triton.Board.MessageType.LOADING_START);

        this.requester.ajaxWithoutBlank(Triton.Board.ApiUrl.GET_BOARD_LIST,
            Triton.Board.parameterMapConverter(Triton.Board.UrlType.GET_BOARD_LIST, this.parameterMap, undefined, this),
            function (status, data, request) {

                Triton.Board.messageHandler(Triton.Board.MessageType.LOADING_END);

                if (Triton.Board.responseChecker(Triton.Board.UrlType.GET_BOARD_LIST, status, data, request) == false) {
                    return;
                }

                var boardDetail = request.object.boardDetail;
                var boardId = Triton.Board.valueExtractor(Triton.Board.ValueType.BOARD_ID, data, undefined, boardDetail);
                if (boardId == undefined) {
                    return;
                }

                boardDetail.setBoardId(boardId);

            }, {boardDetail: this});

    } else {

        this.boardId = (this.targetBoardId);
    }

    if (this.boardContentResponseData == undefined) {

        Triton.Board.messageHandler(Triton.Board.MessageType.LOADING_START);

        this.requester.ajaxWithoutBlank(Triton.Board.ApiUrl.GET_BOARD_CONTENT,
            Triton.Board.parameterMapConverter(Triton.Board.UrlType.GET_BOARD_CONTENT, this.parameterMap, undefined, this),
            function (status, data, request) {

                Triton.Board.messageHandler(Triton.Board.MessageType.LOADING_END);

                if (Triton.Board.responseChecker(Triton.Board.UrlType.GET_BOARD_CONTENT, status, data, request) == false) {
                    return;
                }

                var boardDetail = request.object.boardDetail;
                boardDetail.boardContentResponseData = data;

            }, {
                boardDetail: this
            });
    }

    this.requester.func(function (execute) {

        var boardDetail = execute.object.boardDetail;
        var data = boardDetail.boardContentResponseData;

        var boardContent = Triton.Board.valueExtractor(Triton.Board.ValueType.BOARD_CONTENT, data, undefined, boardDetail);
        if (boardContent == undefined) {
            Triton.Board.messageHandler(Triton.Board.MessageType.FAILED_TO_FIND_BOARD_CONTENT, data, undefined, boardDetail);
        }
        boardDetail.setBoardContent(boardContent);

        var boardContent = boardDetail.getBoardContent();
        if (boardContent == undefined) {
            return;
        }

        var options = boardDetail.getOptions();
        {
            var defaultButtonLayout = Lia.pd(true, options, 'defaultButtonLayout');
            if (defaultButtonLayout) {

                var onMoveListPage = Lia.p(options, 'onMoveListPage');
                if (onMoveListPage != undefined) {

                    boardDetail.buttonSection.appendToLeft(new Triton.FlatButton({
                        theme: Triton.FlatButton.Theme.Shade,
                        appendTo: boardDetail.leftButtonSection,
                        content: Lia.Strings.getString(Lia.Strings.BOARD.LIST),
                        BoardDetail: boardDetail,
                        onMoveListPage: onMoveListPage,
                        onClick: function (e) {

                            var onMoveListPage = e.data.onMoveListPage;
                            var boardDetail = e.data.BoardDetail;

                            onMoveListPage(boardDetail);
                        }
                    }));
                }

                var isEditable = Triton.Board.valueExtractor(Triton.Board.ValueType.IS_EDITABLE, data, boardContent, boardDetail);
                if (isEditable) {

                    var isDeleted = Triton.Board.valueExtractor(Triton.Board.ValueType.IS_DELETED, data, boardContent, boardDetail);
                    if (isDeleted) {

                        // 삭제 된 상태이면 영구 삭제
                        var onDeletedPermanently = Lia.p(options, 'onDeletedPermanently');
                        if (onDeletedPermanently != undefined) {

                            boardDetail.buttonSection.appendToRight(new Triton.FlatButton({
                                theme: Triton.FlatButton.Theme.Delete,
                                content: '영구삭제',
                                boardDetail: boardDetail,
                                onDeletedPermanently: onDeletedPermanently,
                                onClick: function (e) {

                                    var onDeletedPermanently = e.data.onDeletedPermanently;
                                    var boardDetail = e.data.boardDetail;

                                    var parameterMap = Triton.extractFormData(boardDetail);

                                    if (Triton.Board.siteType == Triton.SiteType.Polaris2 && boardDetail.doNotCheckDuplication != true) {

                                        Requester.ajaxWithoutBlank(Triton.Board.ApiUrl.GET_DUPLICATED_BOARD_CONTENT_COUNT, {
                                            boardContentId: PageManager.pc('id')
                                        }, function (status, data, request) {

                                            if (status != Requester.Status.SUCCESS)
                                                return;

                                            var body = Lia.p(data, 'body');
                                            var count = Lia.p(body, 'count');

                                            if (count < 2) {

                                                parameterMap['deleteDuplicatedBoardContentsPermanently'] = 0;

                                                Triton.Board.messageHandler(Triton.Board.MessageType.DELETE_BOARD_CONTENT_PERMANENTLY, undefined, undefined, function (data) {

                                                    var onDeletedPermanently = data.onDeletedPermanently;
                                                    var boardDetail = data.boardDetail;

                                                    Triton.Board.messageHandler(Triton.Board.MessageType.LOADING_START);
                                                    boardDetail.requester.ajaxWithoutBlank(Triton.Board.ApiUrl.DELETE_BOARD_CONTENT_PERMANENTLY,
                                                        Triton.Board.parameterMapConverter(Triton.Board.UrlType.DELETE_BOARD_CONTENT_PERMANENTLY, parameterMap, undefined, boardDetail, boardDetail.baseRequestParameterMap),
                                                        function (status, data, request) {

                                                            Triton.Board.messageHandler(Triton.Board.MessageType.LOADING_END);
                                                            if (Triton.Board.responseChecker(Triton.Board.UrlType.DELETE_BOARD_CONTENT_PERMANENTLY, status, data, request) == false) {
                                                                return;
                                                            }

                                                            var onDeletedPermanently = request.object.onDeletedPermanently;
                                                            var boardDetail = request.object.boardDetail;
                                                            onDeletedPermanently(boardDetail);

                                                        }, {
                                                            onDeletedPermanently: onDeletedPermanently,
                                                            boardDetail: boardDetail
                                                        });

                                                }, {
                                                    onDeletedPermanently: onDeletedPermanently,
                                                    boardDetail: boardDetail
                                                });

                                            } else if (count >= 2) {

                                                PopupManager.alert(Lia.Strings.getString(Lia.Strings.POPUP.TITLE.INFO), '동일 게시물이 다수 존재합니다. 일괄 영구 삭제할까요?', function (object) {

                                                    parameterMap['deleteDuplicatedBoardContentsPermanently'] = 1;

                                                    Triton.Board.messageHandler(Triton.Board.MessageType.DELETE_BOARD_CONTENT_PERMANENTLY, undefined, undefined, function (data) {

                                                        var onDeletedPermanently = data.onDeletedPermanently;
                                                        var boardDetail = data.boardDetail;

                                                        Triton.Board.messageHandler(Triton.Board.MessageType.LOADING_START);
                                                        boardDetail.requester.ajaxWithoutBlank(Triton.Board.ApiUrl.DELETE_BOARD_CONTENT_PERMANENTLY,
                                                            Triton.Board.parameterMapConverter(Triton.Board.UrlType.DELETE_BOARD_CONTENT_PERMANENTLY, parameterMap, undefined, boardDetail, boardDetail.baseRequestParameterMap),
                                                            function (status, data, request) {

                                                                Triton.Board.messageHandler(Triton.Board.MessageType.LOADING_END);
                                                                if (Triton.Board.responseChecker(Triton.Board.UrlType.DELETE_BOARD_CONTENT_PERMANENTLY, status, data, request) == false) {
                                                                    return;
                                                                }

                                                                var onDeletedPermanently = request.object.onDeletedPermanently;
                                                                var boardDetail = request.object.boardDetail;
                                                                onDeletedPermanently(boardDetail);

                                                            }, {
                                                                onDeletedPermanently: onDeletedPermanently,
                                                                boardDetail: boardDetail
                                                            });

                                                    }, {
                                                        onDeletedPermanently: onDeletedPermanently,
                                                        boardDetail: boardDetail
                                                    });

                                                }, function (object) {

                                                    parameterMap['deleteDuplicatedBoardContentsPermanently'] = 0;

                                                    Triton.Board.messageHandler(Triton.Board.MessageType.DELETE_BOARD_CONTENT_PERMANENTLY, undefined, undefined, function (data) {

                                                        var onDeletedPermanently = data.onDeletedPermanently;
                                                        var boardDetail = data.boardDetail;

                                                        Triton.Board.messageHandler(Triton.Board.MessageType.LOADING_START);
                                                        boardDetail.requester.ajaxWithoutBlank(Triton.Board.ApiUrl.DELETE_BOARD_CONTENT_PERMANENTLY,
                                                            Triton.Board.parameterMapConverter(Triton.Board.UrlType.DELETE_BOARD_CONTENT_PERMANENTLY, parameterMap, undefined, boardDetail, boardDetail.baseRequestParameterMap),
                                                            function (status, data, request) {

                                                                Triton.Board.messageHandler(Triton.Board.MessageType.LOADING_END);
                                                                if (Triton.Board.responseChecker(Triton.Board.UrlType.DELETE_BOARD_CONTENT_PERMANENTLY, status, data, request) == false) {
                                                                    return;
                                                                }

                                                                var onDeletedPermanently = request.object.onDeletedPermanently;
                                                                var boardDetail = request.object.boardDetail;
                                                                onDeletedPermanently(boardDetail);

                                                            }, {
                                                                onDeletedPermanently: onDeletedPermanently,
                                                                boardDetail: boardDetail
                                                            });

                                                    }, {
                                                        onDeletedPermanently: onDeletedPermanently,
                                                        boardDetail: boardDetail
                                                    });

                                                }, '예', '아니오', {});
                                            }

                                        });

                                    } else {

                                        Triton.Board.messageHandler(Triton.Board.MessageType.DELETE_BOARD_CONTENT_PERMANENTLY, undefined, undefined, function (data) {

                                            var onDeletedPermanently = data.onDeletedPermanently;
                                            var boardDetail = data.boardDetail;

                                            Triton.Board.messageHandler(Triton.Board.MessageType.LOADING_START);
                                            boardDetail.requester.ajaxWithoutBlank(Triton.Board.ApiUrl.DELETE_BOARD_CONTENT_PERMANENTLY,
                                                Triton.Board.parameterMapConverter(Triton.Board.UrlType.DELETE_BOARD_CONTENT_PERMANENTLY, parameterMap, undefined, boardDetail, boardDetail.baseRequestParameterMap),
                                                function (status, data, request) {

                                                    Triton.Board.messageHandler(Triton.Board.MessageType.LOADING_END);
                                                    if (Triton.Board.responseChecker(Triton.Board.UrlType.DELETE_BOARD_CONTENT_PERMANENTLY, status, data, request) == false) {
                                                        return;
                                                    }

                                                    var onDeletedPermanently = request.object.onDeletedPermanently;
                                                    var boardDetail = request.object.boardDetail;
                                                    onDeletedPermanently(boardDetail);

                                                }, {
                                                    onDeletedPermanently: onDeletedPermanently,
                                                    boardDetail: boardDetail
                                                });

                                        }, {
                                            onDeletedPermanently: onDeletedPermanently,
                                            boardDetail: boardDetail
                                        });
                                    }

                                }
                            }));
                        }

                    } else {

                        var onMoveEditPage = Lia.p(options, 'onMoveEditPage');
                        if (onMoveEditPage != undefined) {

                            boardDetail.buttonSection.appendToRight(new Triton.FlatButton({
                                theme: Triton.FlatButton.Theme.NormalLeft,
                                content: '편집',
                                boardDetail: boardDetail,
                                onMoveEditPage: onMoveEditPage,
                                onClick: function (e) {

                                    var onMoveEditPage = e.data.onMoveEditPage;
                                    var boardDetail = e.data.boardDetail;

                                    onMoveEditPage(boardDetail);
                                }
                            }));
                        }


                        var onDeleted = Lia.p(options, 'onDeleted');
                        if (onDeleted != undefined) {

                            boardDetail.buttonSection.appendToRight(new Triton.FlatButton({
                                theme: Triton.FlatButton.Theme.DeleteRight,
                                content: '삭제',
                                boardDetail: boardDetail,
                                onDeleted: onDeleted,
                                onClick: function (e) {

                                    var onDeleted = e.data.onDeleted;
                                    var onDelete = e.data.onDelete;
                                    var boardDetail = e.data.boardDetail;

                                    var parameterMap = Triton.extractFormData(boardDetail);

                                    if (Triton.Board.siteType == Triton.SiteType.Polaris2 && boardDetail.doNotCheckDuplication != true) {

                                        Requester.ajaxWithoutBlank(Triton.Board.ApiUrl.GET_DUPLICATED_BOARD_CONTENT_COUNT, {
                                            boardContentId: PageManager.pc('id')
                                        }, function (status, data, request) {

                                            if (status != Requester.Status.SUCCESS)
                                                return;

                                            var body = Lia.p(data, 'body');
                                            var count = Lia.p(body, 'count');

                                            if (count < 2) {

                                                parameterMap['deleteDuplicatedBoardContents'] = 0;

                                                Triton.Board.messageHandler(Triton.Board.MessageType.DELETE_BOARD_CONTENT, undefined, undefined, function (data) {

                                                    var onDeleted = data.onDeleted;
                                                    var boardDetail = data.boardDetail;

                                                    Triton.Board.messageHandler(Triton.Board.MessageType.LOADING_START);
                                                    boardDetail.requester.ajaxWithoutBlank(Triton.Board.ApiUrl.DELETE_BOARD_CONTENT,
                                                        Triton.Board.parameterMapConverter(Triton.Board.UrlType.DELETE_BOARD_CONTENT, parameterMap, undefined, boardDetail, boardDetail.baseRequestParameterMap),
                                                        function (status, data, request) {

                                                            Triton.Board.messageHandler(Triton.Board.MessageType.LOADING_END);
                                                            if (Triton.Board.responseChecker(Triton.Board.UrlType.DELETE_BOARD_CONTENT, status, data, request) == false) {
                                                                return;
                                                            }

                                                            var onDeleted = request.object.onDeleted;
                                                            var boardDetail = request.object.boardDetail;
                                                            onDeleted(boardDetail);

                                                        }, {
                                                            onDeleted: onDeleted,
                                                            boardDetail: boardDetail
                                                        });

                                                }, {
                                                    onDeleted: onDeleted,
                                                    boardDetail: boardDetail
                                                });

                                            } else if (count >= 2) {

                                                PopupManager.alert(Lia.Strings.getString(Lia.Strings.POPUP.TITLE.INFO), '동일 게시물이 다수 존재합니다. 일괄 삭제할까요?', function (object) {

                                                    parameterMap['deleteDuplicatedBoardContents'] = 1;

                                                    Triton.Board.messageHandler(Triton.Board.MessageType.DELETE_BOARD_CONTENT, undefined, undefined, function (data) {

                                                        var onDeleted = data.onDeleted;
                                                        var boardDetail = data.boardDetail;

                                                        Triton.Board.messageHandler(Triton.Board.MessageType.LOADING_START);

                                                        boardDetail.requester.ajaxWithoutBlank(Triton.Board.ApiUrl.DELETE_BOARD_CONTENT,
                                                            Triton.Board.parameterMapConverter(Triton.Board.UrlType.DELETE_BOARD_CONTENT, parameterMap, undefined, boardDetail, boardDetail.baseRequestParameterMap),
                                                            function (status, data, request) {

                                                                Triton.Board.messageHandler(Triton.Board.MessageType.LOADING_END);
                                                                if (Triton.Board.responseChecker(Triton.Board.UrlType.DELETE_BOARD_CONTENT, status, data, request) == false) {
                                                                    return;
                                                                }

                                                                var onDeleted = request.object.onDeleted;
                                                                var boardDetail = request.object.boardDetail;
                                                                onDeleted(boardDetail);

                                                            }, {
                                                                onDeleted: onDeleted,
                                                                boardDetail: boardDetail
                                                            });

                                                    }, {
                                                        onDeleted: onDeleted,
                                                        boardDetail: boardDetail
                                                    });

                                                }, function (object) {

                                                    parameterMap['deleteDuplicatedBoardContents'] = 0;

                                                    Triton.Board.messageHandler(Triton.Board.MessageType.DELETE_BOARD_CONTENT, undefined, undefined, function (data) {

                                                        var onDeleted = data.onDeleted;
                                                        var boardDetail = data.boardDetail;

                                                        Triton.Board.messageHandler(Triton.Board.MessageType.LOADING_START);
                                                        boardDetail.requester.ajaxWithoutBlank(Triton.Board.ApiUrl.DELETE_BOARD_CONTENT,
                                                            Triton.Board.parameterMapConverter(Triton.Board.UrlType.DELETE_BOARD_CONTENT, parameterMap, undefined, boardDetail, boardDetail.baseRequestParameterMap),
                                                            function (status, data, request) {

                                                                Triton.Board.messageHandler(Triton.Board.MessageType.LOADING_END);
                                                                if (Triton.Board.responseChecker(Triton.Board.UrlType.DELETE_BOARD_CONTENT, status, data, request) == false) {
                                                                    return;
                                                                }

                                                                var onDeleted = request.object.onDeleted;
                                                                var boardDetail = request.object.boardDetail;
                                                                onDeleted(boardDetail);

                                                            }, {
                                                                onDeleted: onDeleted,
                                                                boardDetail: boardDetail
                                                            });

                                                    }, {
                                                        onDeleted: onDeleted,
                                                        boardDetail: boardDetail
                                                    });

                                                }, '예', '아니오', {});
                                            }
                                        });

                                    } else {

                                        Triton.Board.messageHandler(Triton.Board.MessageType.DELETE_BOARD_CONTENT, undefined, undefined, function (data) {

                                            var onDeleted = data.onDeleted;
                                            var boardDetail = data.boardDetail;

                                            Triton.Board.messageHandler(Triton.Board.MessageType.LOADING_START);
                                            boardDetail.requester.ajaxWithoutBlank(Triton.Board.ApiUrl.DELETE_BOARD_CONTENT,
                                                Triton.Board.parameterMapConverter(Triton.Board.UrlType.DELETE_BOARD_CONTENT, parameterMap, undefined, boardDetail, boardDetail.baseRequestParameterMap),
                                                function (status, data, request) {

                                                    Triton.Board.messageHandler(Triton.Board.MessageType.LOADING_END);
                                                    if (Triton.Board.responseChecker(Triton.Board.UrlType.DELETE_BOARD_CONTENT, status, data, request) == false) {
                                                        return;
                                                    }

                                                    var onDeleted = request.object.onDeleted;
                                                    var boardDetail = request.object.boardDetail;
                                                    onDeleted(boardDetail);

                                                }, {
                                                    onDeleted: onDeleted,
                                                    boardDetail: boardDetail
                                                });

                                        }, {
                                            onDeleted: onDeleted,
                                            boardDetail: boardDetail
                                        });

                                    }

                                }
                            }));
                        }

                    }

                }

            }
        }

        var detailPanel = boardDetail.detailPanel;
        var detailTable = new Triton.DetailTable({appendTo: detailPanel, css: {'min-width': '800px'}});

        var colspan = 2;
        var fieldList = boardDetail.getFieldList();
        for (var i = 0, l = fieldList.length; i < l; i++) {

            var field = fieldList[i];
            if (field == undefined) {
                continue;
            }

            if (typeof field == 'object') {

                var customObject = Lia.deepCopy(field);
                fieldList[i] = customObject;
                if ( customObject.getBoardDetailColspan != undefined ) {

                    var currentColspan = customObject.getBoardDetailColspan(
                        detailTable, boardContent, boardDetail
                    );

                    if ( colspan < currentColspan ) {
                        colspan = currentColspan;
                    }
                }
            }
        }

        boardDetail.setColspan(colspan);

        for (var i = 0, l = fieldList.length; i < l; i++) {

            var field = fieldList[i];
            if (field == undefined) {
                continue;
            }

            if (typeof field == 'object') {

                // 그전에 deepcopy 하여 지금은 하지 않음
                var customObject = field;
                customObject.attachToBoardDetail(
                    detailTable, boardContent, boardDetail
                );

            } else if (typeof field == 'function') {

                var customFieldFunction = field;

                var columnName = customFieldFunction(Triton.Board.CustomFieldType.DETAIL_NAME, data, boardContent, boardDetail);
                var columnValue = customFieldFunction(Triton.Board.CustomFieldType.DETAIL_VALUE, data, boardContent, boardDetail);


                detailTable.appendRow({});
                detailTable.appendKeyColumn({
                    content: columnName
                });

                detailTable.appendValueColumn({
                    content: columnValue,
                    attr : { colspan : (colspan-1) }
                });

            } else {

                var columnName = Triton.Board.ColumnValue.getName(field);
                if (field == Triton.Board.ValueType.DELETION_INFO_WHEN_DELETED) {

                    var isDeleted = Triton.Board.valueExtractor(Triton.Board.ValueType.IS_DELETED, data, boardContent, boardDetail);
                    if (isDeleted) {

                        detailTable.appendRow({});
                        detailTable.appendKeyColumn({
                            content: columnName
                        });

                        var separateTable = new Triton.SeparateTable({});
                        detailTable.appendValueColumn({
                            content: separateTable,
                            attr : { colspan : (colspan-1) }
                        });
                        separateTable.appendRow({});

                        var infoSection = new Triton.Section({});

                        separateTable.appendColumn({
                            content: infoSection
                        });

                        var deletedByUserName = Triton.Board.valueExtractor(Triton.Board.ValueType.DELETED_BY_USER_NAME, data, boardContent, boardDetail);
                        var deletedByUserNameColumnName = Triton.Board.ColumnValue.getName(Triton.Board.ValueType.DELETED_BY_USER_NAME);

                        var deletedByIpAddress = Triton.Board.valueExtractor(Triton.Board.ValueType.DELETED_FROM_IP_ADDRESS, data, boardContent, boardDetail);
                        var deletedByIpAddressColumnName = Triton.Board.ColumnValue.getName(Triton.Board.ValueType.DELETED_FROM_IP_ADDRESS);

                        var deletedDate = Triton.Board.valueExtractor(Triton.Board.ValueType.DELETED_DATE, data, boardContent, boardDetail);
                        var deletedDateColumnName = Triton.Board.ColumnValue.getName(Triton.Board.ValueType.DELETED_DATE);

                        infoSection.append(new Triton.KeyValueSection({
                            keyContent: deletedByUserNameColumnName,
                            valueContent: deletedByUserName
                        }));

                        infoSection.append(new Triton.KeyValueSection({
                            keyContent: deletedByIpAddressColumnName,
                            valueContent: deletedByIpAddress
                        }));

                        infoSection.append(new Triton.KeyValueSection({
                            keyContent: deletedDateColumnName,
                            valueContent: deletedDate
                        }));

                        separateTable.appendColumn({
                            theme: Triton.SeparateTable.Column.Theme.Middle,
                            css: {
                                'text-align': 'right'
                            },
                            content: new Triton.FlatButton({
                                theme: Triton.FlatButton.Theme.Refresh,
                                content: '복구',
                                boardDetail: boardDetail,
                                onClick: function (e) {

                                    var boardDetail = e.data.boardDetail;
                                    Triton.Board.messageHandler(Triton.Board.MessageType.RECOVER_BOARD_CONTENT, undefined, undefined, function (data) {

                                        var boardDetail = data.boardDetail;

                                        Triton.Board.messageHandler(Triton.Board.MessageType.LOADING_START);
                                        boardDetail.requester.ajaxWithoutBlank(Triton.Board.ApiUrl.RECOVER_BOARD_CONTENT,
                                            Triton.Board.parameterMapConverter(Triton.Board.UrlType.RECOVER_BOARD_CONTENT, boardDetail.getParameterMap(), undefined, boardDetail),
                                            function (status, data, request) {

                                                Triton.Board.messageHandler(Triton.Board.MessageType.LOADING_END);
                                                if (Triton.Board.responseChecker(Triton.Board.UrlType.RECOVER_BOARD_CONTENT, status, data, request) == false) {
                                                    return;
                                                }

                                                var boardDetail = request.object.boardDetail;
                                                var options = boardDetail.getOptions();
                                                var onRecovered = Lia.p(options, 'onRecovered');
                                                if (onRecovered != undefined) {
                                                    onRecovered(boardDetail);
                                                }

                                            }, {
                                                boardDetail: boardDetail
                                            });

                                    }, {
                                        boardDetail: boardDetail
                                    });

                                }
                            })
                        });
                    }
                    continue;
                }

                detailTable.appendRow({});
                detailTable.appendKeyColumn({
                    content: columnName
                });

                var fieldValue = undefined;
                if (field == Triton.Board.ValueType.TITLE_AND_REGISTERED_DATE_AND_VIEW_COUNT) {

                    var title = Triton.Board.valueExtractor(Triton.Board.ValueType.TITLE, data, boardContent, boardDetail);
                    var viewCount = Triton.Board.valueExtractor(Triton.Board.ValueType.VIEW_COUNT, data, boardContent, boardDetail);
                    var registeredDate = Triton.Board.valueExtractor(Triton.Board.ValueType.REGISTERED_DATE, data, boardContent, boardDetail);

                    var section = new Triton.Section({
                        css: {
                            position: 'relative'
                        }
                    });

                    title.css({
                        'float': 'left'
                    });

                    section.append(title);

                    var titleInfo = new Triton.Span({
                        theme: Triton.Span.Theme.WriterAndRegisteredDate
                    });

                    titleInfo.append(registeredDate);
                    titleInfo.append('　|　조회수 ');
                    titleInfo.append(viewCount);
                    titleInfo.append('　　');

                    section.append(titleInfo);

                    fieldValue = section;

                } else if (field == Triton.Board.ValueType.TITLE_AND_WRITER_AND_REGISTERED_DATE) {

                    var title = Triton.Board.valueExtractor(Triton.Board.ValueType.TITLE, data, boardContent, boardDetail);
                    var writer = Triton.Board.valueExtractor(Triton.Board.ValueType.WRITER, data, boardContent, boardDetail);
                    var registeredDate = Triton.Board.valueExtractor(Triton.Board.ValueType.REGISTERED_DATE, data, boardContent, boardDetail);

                    var section = new Triton.Section({
                        css: {
                            position: 'relative'
                        }
                    });

                    title.css({
                        'float': 'left'
                    });

                    section.append(title);

                    var titleInfo = new Triton.Span({
                        theme: Triton.Span.Theme.WriterAndRegisteredDate
                    });

                    titleInfo.append(writer);
                    titleInfo.append(' | ');
                    titleInfo.append(registeredDate);

                    section.append(titleInfo);

                    fieldValue = section;

                } else if (field == Triton.Board.ValueType.TITLE_AND_WRITER_AND_LAST_MODIFIED_DATE) {

                    var title = Triton.Board.valueExtractor(Triton.Board.ValueType.TITLE, data, boardContent, boardDetail);
                    var writer = Triton.Board.valueExtractor(Triton.Board.ValueType.WRITER, data, boardContent, boardDetail);
                    var lastModifiedDate = Triton.Board.valueExtractor(Triton.Board.ValueType.LAST_MODIFIED_DATE, data, boardContent, boardDetail);

                    var section = new Triton.Section({
                        css: {
                            position: 'relative'
                        }
                    });

                    title.css({
                        'float': 'left'
                    });

                    section.append(title);

                    var titleInfo = new Triton.Span({
                        theme: Triton.Span.Theme.WriterAndRegisteredDate
                    });

                    titleInfo.append(writer);
                    titleInfo.append(' | ');
                    titleInfo.append(lastModifiedDate);

                    section.append(titleInfo);

                    fieldValue = section;

                } else if (
                    field == Triton.Board.ValueType.IS_PRIVATE
                    || field == Triton.Board.ValueType.IS_ALWAYS_ON_TOP
                    || field == Triton.Board.ValueType.IS_AVAILABLE) {

                    var status = Triton.Board.valueExtractor(field, data, boardContent, boardDetail);
                    var content = (status) ? '비밀글 설정 중' : '비밀글 미 설정 중';
                    if (field == Triton.Board.ValueType.IS_ALWAYS_ON_TOP) {
                        content = (status) ? '항상 맨 위에 고정 (우선순위로 게시) 설정 중' : '항상 맨 위에 고정 (우선순위로 게시) 미 설정 중';
                    } else if (field == Triton.Board.ValueType.IS_AVAILABLE) {
                        content = (status) ? '게시 중' : '게시 중지';
                    }

                    //fieldValue = new Triton.CheckBox({
                    //    link : false,
                    //    manual : true,
                    //    status : status,
                    //    content : content
                    //});

                    fieldValue = new Triton.Span({
                        content: content
                    });

                } else if (field == Triton.Board.ValueType.ATTACHMENT) {

                    detailTable.appendValueColumn({
                        attr : { colspan : (colspan-1)}
                    });

                    var attachment = Triton.Board.valueExtractor(field, data, boardContent, boardDetail);
                    var attachmentList = Triton.Board.valueExtractor(Triton.Board.ValueType.ATTACHMENT_LIST, data, attachment, boardDetail);
                    if (attachmentList != undefined) {

                        for (var i2 = 0, l2 = attachmentList.length; i2 < l2; i2++) {

                            var attachmentItem = attachmentList[i2];

                            var fileUrl = Triton.Board.valueExtractor(Triton.Board.ValueType.ATTACHMENT_FILE_URL, data, attachmentItem, boardDetail);
                            var fileSize = Triton.Board.valueExtractor(Triton.Board.ValueType.ATTACHMENT_FILE_SIZE, data, attachmentItem, boardDetail);
                            var fileName = Triton.Board.valueExtractor(Triton.Board.ValueType.ATTACHMENT_FILE_NAME, data, attachmentItem, boardDetail);

                            detailTable.appendItem(new Triton.AttachmentItem({
                                fileUrl: fileUrl,
                                fileSize: fileSize,
                                fileName: fileName
                            }));

                        }
                    } else {

                        detailTable.appendItem(new Triton.Span({content: '-'}));
                    }
                    continue;

                } else if (field == Triton.Board.ValueType.IS_ALWAYS_ON_TOP_DATE) {

                    var isAlwaysOnTop = Triton.Board.valueExtractor(Triton.Board.ValueType.IS_ALWAYS_ON_TOP, undefined, boardContent, boardDetail);

                    //fieldValue = new Triton.CheckBox({
                    //    link : false,
                    //    manual : true,
                    //    status : isAvailable
                    //});

                    fieldValue = (isAlwaysOnTop) ? '항상 맨 위에 고정 (우선순위로 게시) 설정 중' : '항상 맨 위에 고정 (우선순위로 게시) 미 설정 중';

                    detailTable.appendValueColumn({
                        content: fieldValue,
                        attr : { colspan : (colspan-1) }
                    });

                    if (isAlwaysOnTop) {

                        detailTable.appendRow({});

                        var extraColumnName = Triton.Board.ColumnValue.getName(Triton.Board.ValueType.ALWAYS_ON_TOP_DATE);
                        detailTable.appendKeyColumn({
                            content: extraColumnName
                        });

                        var alwaysOnTopStartDate = Triton.Board.valueExtractor(Triton.Board.ValueType.ALWAYS_ON_TOP_START_DATE, data, boardContent, boardDetail);
                        if (String.isBlank(alwaysOnTopStartDate)) {
                            alwaysOnTopStartDate = '무제한';
                        }

                        var alwaysOnTopEndDate = Triton.Board.valueExtractor(Triton.Board.ValueType.ALWAYS_ON_TOP_END_DATE, data, boardContent, boardDetail);
                        if (String.isBlank(alwaysOnTopEndDate)) {
                            alwaysOnTopEndDate = '무제한';
                        }

                        var alwaysOnTopDateString = alwaysOnTopStartDate + ' ~ ' + alwaysOnTopEndDate;

                        detailTable.appendValueColumn({
                            content: alwaysOnTopDateString,
                            attr : { colspan : (colspan-1) }
                        });

                    }
                    continue;

                } else if (field == Triton.Board.ValueType.IS_AVAILABLE_EFFECTIVE_DATE) {

                    var isAvailable = Triton.Board.valueExtractor(Triton.Board.ValueType.IS_AVAILABLE, undefined, boardContent, boardDetail);

                    //fieldValue = new Triton.CheckBox({
                    //    link : false,
                    //    manual : true,
                    //    status : isAvailable
                    //});

                    fieldValue = (isAvailable) ? '게시 중' : '게시 중지';

                    detailTable.appendValueColumn({
                        content: fieldValue,
                        attr : { colspan : (colspan-1) }
                    });

                    if (isAvailable) {

                        detailTable.appendRow({});

                        var extraColumnName = Triton.Board.ColumnValue.getName(Triton.Board.ValueType.EFFECTIVE_DATE);
                        detailTable.appendKeyColumn({
                            content: extraColumnName
                        });

                        var effectiveStartDate = Triton.Board.valueExtractor(Triton.Board.ValueType.EFFECTIVE_START_DATE, data, boardContent, boardDetail);
                        if (String.isBlank(effectiveStartDate)) {
                            effectiveStartDate = '무제한';
                        }

                        var effectiveEndDate = Triton.Board.valueExtractor(Triton.Board.ValueType.EFFECTIVE_END_DATE, data, boardContent, boardDetail);
                        if (String.isBlank(effectiveEndDate)) {
                            effectiveEndDate = '무제한';
                        }

                        var effectiveDateString = effectiveStartDate + ' ~ ' + effectiveEndDate;

                        detailTable.appendValueColumn({
                            content: effectiveDateString,
                            attr : { colspan : (colspan-1) }
                        });

                    }
                    continue;

                } else if (field == Triton.Board.ValueType.THUMBNAIL_IMAGE_URL || field == Triton.Board.ValueType.IMAGE_URL) {

                    var url = Triton.Board.valueExtractor(field, data, boardContent, boardDetail);
                    if (url != undefined) {
                        fieldValue = new Triton.Image({
                            attr: {
                                src: url
                            },
                            css: {
                                'max-width': '100%'
                            }
                        })
                    } else {
                        fieldValue = '-';
                    }

                } else if (field == Triton.Board.ValueType.EFFECTIVE_DATE) {

                    var effectiveStartDate = Triton.Board.valueExtractor(Triton.Board.ValueType.EFFECTIVE_START_DATE, data, boardContent, boardDetail);
                    if (String.isBlank(effectiveStartDate)) {
                        effectiveStartDate = '무제한';
                    }

                    var effectiveEndDate = Triton.Board.valueExtractor(Triton.Board.ValueType.EFFECTIVE_END_DATE, data, boardContent, boardDetail);
                    if (String.isBlank(effectiveEndDate)) {
                        effectiveEndDate = '무제한';
                    }

                    var effectiveDateString = effectiveStartDate + ' ~ ' + effectiveEndDate;
                    fieldValue = effectiveDateString;

                } else if (field == Triton.Board.ValueType.TASK_DATE) {

                    var taskStartDate = Triton.Board.valueExtractor(Triton.Board.ValueType.TASK_START_DATE, data, boardContent, boardDetail);
                    if (String.isBlank(taskStartDate)) {
                        taskStartDate = '';
                    }

                    var taskEndDate = Triton.Board.valueExtractor(Triton.Board.ValueType.TASK_END_DATE, data, boardContent, boardDetail);
                    if (String.isBlank(taskEndDate)) {
                        taskEndDate = '';
                    }

                    var taskDateString = '';

                    if (String.isBlank(taskStartDate) && String.isBlank(taskEndDate))
                        taskDateString = '지정하지않음';
                    else if (String.isNotBlank(taskStartDate) && String.isNotBlank(taskEndDate))
                        taskDateString = taskStartDate.substring(0, 10) + ' 부터 ' + taskEndDate.substring(0, 10) + ' 까지';
                    else if (String.isNotBlank(taskStartDate) && String.isBlank(taskEndDate))
                        taskDateString = taskStartDate.substring(0, 10) + ' 부터';
                    else if (String.isBlank(taskStartDate) && String.isNotBlank(taskEndDate))
                        taskDateString = taskEndDate.substring(0, 10) + ' 까지';

                    fieldValue = taskDateString;

                } else if (field == Triton.Board.ValueType.EVENT_DATE) {

                    var eventStartDate = Triton.Board.valueExtractor(Triton.Board.ValueType.EVENT_START_DATE, data, boardContent, boardDetail);
                    if (String.isBlank(eventStartDate)) {
                        eventStartDate = '';
                    }

                    var eventEndDate = Triton.Board.valueExtractor(Triton.Board.ValueType.EVENT_END_DATE, data, boardContent, boardDetail);
                    if (String.isBlank(eventEndDate)) {
                        eventEndDate = '';
                    }

                    var eventDateString = '';

                    if (String.isBlank(eventStartDate) && String.isBlank(eventEndDate))
                        eventDateString = '지정하지않음';
                    else if (String.isNotBlank(eventStartDate) && String.isNotBlank(eventEndDate))
                        eventDateString = eventStartDate + ' 부터 ' + eventEndDate + ' 까지';
                    else if (String.isNotBlank(eventStartDate) && String.isBlank(eventEndDate))
                        eventDateString = eventStartDate + ' 부터';
                    else if (String.isBlank(eventStartDate) && String.isNotBlank(eventEndDate))
                        eventDateString = eventEndDate + ' 까지';

                    fieldValue = eventDateString;
                } else {
                    fieldValue = Triton.Board.valueExtractor(field, data, boardContent, boardDetail);
                }

                detailTable.appendValueColumn({
                    content: fieldValue,
                    attr : { colspan : (colspan-1) }
                });
            }

        }

        var onLoaded = Lia.p(options, 'onLoaded');
        if (onLoaded != undefined) {
            onLoaded(boardDetail);
        }

        if (boardDetail.unuseComment != true) {

            var boardCommentList = new Triton.BoardCommentList({
                boardDetail: boardDetail,
                targetBoardId: boardDetail.getBoardId(),
                boardContentId: boardDetail.getBoardContentId(),
                sectionTypeList: boardDetail.sectionTypeList,
                commentUploaderBodyValidation: boardDetail.commentUploaderBodyValidation,
                useShowOnCmsOnlyComment: boardDetail.useShowOnCmsOnlyComment,
                useCommentUploader: boardDetail.useCommentUploader,
                commentUploaderParameterMap: boardDetail.commentUploaderParameterMap,
                commentWriteBaseRequestParameterMap: boardDetail.commentWriteBaseRequestParameterMap,
                onCommentWritten: boardDetail.onCommentWritten,
                commentListBaseRequestParameterMap: boardDetail.commentListBaseRequestParameterMap,
                unuseCommentWrite: boardDetail.unuseCommentWrite,
                cmsOnlyCommentDefaultChecked: boardDetail.cmsOnlyCommentDefaultChecked
            });

            boardDetail.commentListSection.append(boardCommentList);
            boardCommentList.reload();
            boardDetail.boardCommentList = boardCommentList;
        }

    }, {boardDetail: this});

};


Triton.BoardDetail.prototype.appendButtonSectionToLeft = function (item) {
    var boardDetail = this;
    boardDetail.buttonSection.appendToLeft(item);
};

Triton.BoardDetail.prototype.appendButtonSectionToRight = function (item) {
    var boardDetail = this;
    boardDetail.buttonSection.appendToRight(item);
};


// 표시 필드 리스트
Triton.BoardDetail.fieldList = [
    Triton.Board.ValueType.CATEGORY,
    Triton.Board.ValueType.TITLE_AND_WRITER_AND_REGISTERED_DATE,
    Triton.Board.ValueType.BODY,
    Triton.Board.ValueType.ATTACHMENT,
    Triton.Board.ValueType.THUMBNAIL_IMAGE_URL,
    Triton.Board.ValueType.IS_ALWAYS_ON_TOP,
    Triton.Board.ValueType.IS_PRIVATE,
    Triton.Board.ValueType.IS_AVAILABLE_EFFECTIVE_DATE,
    Triton.Board.ValueType.DELETION_INFO_WHEN_DELETED
];
Triton.BoardDetail.setFieldList = function (list) {
    Triton.BoardDetail.fieldList = list;
};

Triton.BoardDetail.sectionTypeList = [
    Triton.Board.SectionType.BUTTON,
    Triton.Board.SectionType.COMMENT_LIST,
    Triton.Board.SectionType.COMMENT_WRITE
];
Triton.BoardDetail.setSectionTypeList = function (list) {
    Triton.BoardDetail.sectionTypeList = list;
};


var BoardGalleryList = Triton.BoardGalleryList = function (options) {
    this.init(options);
};
Triton.BoardGalleryList.prototype = new Triton.Board();
Triton.BoardGalleryList.prototype.init = function (options) {

    var page = this;

    //this.boardId = undefined;
    //this.leftButtonSection = undefined;
    //this.rightButtonSection = undefined;
    //this.categoryOptionList = undefined;
    //this.parameterMap = undefined;
    //this.boardContentId = undefined;
    //this.boardContent = undefined;
    //this.boardContentCategory = undefined;
    //this.boardContentCategoryId = undefined;

    this.moduleTypeCode = Triton.Board.ModuleType.BOARD_GALLERY_LIST;
    this.options = options;
    this.targetBoardId = Lia.p(options, 'targetBoardId');
    this.parentBoardContentId = Lia.p(options, 'parentBoardContentId');
    this.title = Lia.p(options, 'title');

    this.requester = Lia.pd(Triton.Board.requester, options, 'requester');
    if (this.requester == undefined) {
        this.requester = new jQuery.Requester();
    }

    var section = new Triton.Section({
        css: Lia.p(options, 'css')
    });

    var topGallerySection = new Triton.Section({
        appendTo: section
    });


    if (String.isNotBlank(this.title)) {
        new Triton.Title({
            appendTo: topGallerySection,
            content: page.title
        });
    }

    new Triton.FlatButton({
        appendTo: topGallerySection,
        content: '사진등록',
        css: {'margin-left': '15px', 'float': 'right', 'border-radius': '10px'},
        theme: Triton.FlatButton.Theme.Normal,
        page: page,
        onClick: function (e) {

            AjaxPopupManager.show(Triton.PopupUrl.RADIO_SELECT, {
                title: '이미지 등록',
                optionList: [{
                    'value': '0', name: '개별등록', selected: true, onSelected: function () {
                        PageManager.go(['board_gallery_item_register'], {
                            'board_id': PageManager.pc('board_id'),
                            'id': PageManager.pc('id')
                        });
                    }
                }, {
                    'value': '1', name: '일괄등록', onSelected: function () {
                        AjaxPopupManager.show(['register_gallery'])
                    }

                }]
            });
        }
    });

    var middleGallerySection = new Triton.Section({
        appendTo: section,
        css: {'display': 'inline-block'}
    });

    page.categorySection = new Triton.Section({
        appendTo: middleGallerySection
    });

    page.isAvailableComboBox = new Triton.ComboBox({
        appendTo: page.categorySection,
        theme: Triton.ComboBox.Theme.Category,
        form: {name: 'isAvailable'},
        //css : { 'float' : 'left'},
        optionList: [
            {name: '게시', value: 1},
            {name: '비게시', value: 0}
        ],
        onSelected: function (val) {
            PageManager.cpcpm({'is_available': val});
        }
    });

    new Triton.ComboBox({
        appendTo: this.categorySection,
        theme: Triton.ComboBox.Theme.CategoryNotFirst,
        form: {name: 'content_count'},
        optionList: PolarisSettings.CountOptionList,
        onSelected: function (val) {
            PageManager.cpcpm({'content_count': val});
        }
    });

    this.galleryImageSection = new Triton.Section({
        appendTo: section,
        addClass: 'gallery',
        css: {
            overflow: 'auto',
            'clear': 'both',
            'margin-top': '15px'
        }
    });

    this.pagingSection = new Triton.Section({
        appendTo: section
    });


    this.jView = section.get();
    this.initBoard(options);

};


Triton.BoardGalleryList.prototype.change = function (parameterMap) {

    var page = this;

    var targetBoardId = page.targetBoardId;
    var parentBoardContentId = page.parentBoardContentId;

    var pageIndex = Lia.pd(1, parameterMap, 'content_page');
    var pageCount = Lia.pd(20, parameterMap, 'content_count');

    var requestParameterMap = {
        boardId: targetBoardId,
        parentBoardContentId: parentBoardContentId,
        //isAvailable: 1,
        isDeleted: 0,
        includeAttachmentList: 1,
        includeProperties: 1,
        includeBody: 1,
        orderByCode: BoardContentOrderBy.REGISTERED_DATE_DESC,
        page: pageIndex,
        count: pageCount
    };

    requestParameterMap['isAvailable'] = Lia.pd(1, parameterMap, 'is_available');

    Requester.ajaxWithoutBlank(ApiUrl.Board.GET_BOARD_CONTENT_SUMMARY_LIST, requestParameterMap, function (status, data, request) {

        if (status != Requester.Status.SUCCESS) {
            return;
        }

        var section = page.galleryImageSection;
        section.empty();

        var list = Lia.p(data, 'body', 'list');

        if (list != undefined) {

            for (var i = 0, l = list.length; i < l; i++) {

                var item = list[i];

                var url;

                var imageUrl = item['image_url'];
                var thumbnailImageUrl = Lia.p(imageUrl, 'thumbnail_image_url');
                if (String.isBlank(thumbnailImageUrl)) {
                    thumbnailImageUrl = Lia.p(imageUrl, 'url');
                }

                if (thumbnailImageUrl != undefined) {

                    thumbnailImageUrl = PathHelper.getFileUrl(thumbnailImageUrl);
                    url = '<img src="' + thumbnailImageUrl + '" width="300px" height="300px" alt="board gallery item register"/>';
                }

                var imageSection = new Triton.Section({
                    appendTo: section,
                    css: {
                        /*'width': '300px',*/
                        'float': 'left',
                        'margin-left': '15px',
                        'margin-top': '15px'
                    },
                    item: item,
                    onClick: function (e) {

                        var item = e.data.item;

                        PageManager.go(['board_gallery_item_register'], {
                            'board_id': PageManager.pc('board_id'),
                            'id': PageManager.pc('id'),
                            'child_id': item['id']
                        });

                        // AjaxPopupManager.show(PopupUrl.GALLERY_IMAGE_POPUP, {
                        //     item: item
                        // });

                    }
                });

                imageSection.append(url);

                new Triton.CheckBox({
                    appendTo: imageSection,
                    manual: true,
                    item: item,
                    pressed: item['is_available'],
                    css: {'vertical-align': 'top', 'margin-left': '5px'},
                    onClick: function (e) {

                        e.stopPropagation();

                        var triton = $(this).getTriton();
                        var item = e.data.item;
                        var id = item['id'];
                        var isAvailable = triton.getValue() == 1 ? 0 : 1;

                        PopupManager.alert(Lia.Strings.getString(Lia.Strings.POPUP.TITLE.INFO), '게시여부를 변경하시겠습니까?', function (object) {

                            Requester.ajaxWithoutBlank(ApiUrl.Board.SET_BOARD_CONTENT_AVAILABILITY, {
                                id: id,
                                isAvailable: isAvailable
                            }, function (status, data, request) {

                                if (status != Requester.Status.SUCCESS) {
                                    return;
                                }

                                triton.setValue(isAvailable);
                                location.reload();
                            });
                        }, function (object) {
                            PopupManager.hide();
                        }, '확인', '취소', {});
                    }
                });

                $(window).off('resize.board_gallery_list').on('resize.board_gallery_list', function () {

                    var containerWidth = page.find('.triton_container.triton_content').width();
                    if (containerWidth <= 1095) {

                        if (i % 3 == 0)
                            imageSection.css('margin-left', '0px');

                        if (i < 3)
                            imageSection.css('margin-top', '0px');

                    } else if (1095 < containerWidth <= 1830) {

                        if (i % 4 == 0)
                            imageSection.css('margin-left', '0px');

                        if (i < 4)
                            imageSection.css('margin-top', '0px');

                    } else {

                        if (i % 5 == 0)
                            imageSection.css('margin-left', '0px');


                        if (i < 5)
                            imageSection.css('margin-top', '0px');
                    }
                });
            }

            page.pagingSection.empty();

            var jPagerContainer = new Triton.Section({
                theme: Triton.Section.Theme.Pager,
                appendTo: page.pagingSection
            });

            new Triton.Pager({
                appendTo: jPagerContainer,
                'css': {'margin-top': '20px'},
                'pageNumber': Lia.p(request, 'parameterMap', 'page'),
                'countPerPage': Lia.p(request, 'parameterMap', 'count'),
                'totalCount': page.responseTotalCount = Lia.p(data, 'body', 'total_count'),
                'onPageSelected': function (pageNumber) {
                    PageManager.goCurrentPageWithCurrentParameterMap({
                        content_page: pageNumber
                    });
                }
            });
        } else {

            new Triton.Span({
                content: '사진이 없습니다.',
                appendTo: section
            });
        }

    });


};


Triton.BoardGalleryList.prototype.release = function (options) {
    $(window).off('resize.board_gallery_list');
};


// 게시판 초기 세팅
{
    Triton.Board.initValues = function (type) {

        Triton.Board.siteType = type;

        if (Triton.Board.siteType == Triton.SiteType.Polaris) {
            Triton.Board.FieldName.setName(Triton.Board.FieldName.BOARD_ID, "boardIdx", "board_idx");
            Triton.Board.FieldName.setName(Triton.Board.FieldName.ID, "idx");
            Triton.Board.FieldName.setName(Triton.Board.FieldName.CATEGORY_ID, "categoryIdx", 'category_idx');
            Triton.Board.FieldName.setName(Triton.Board.FieldName.PARENT_ID, "parentIdx", 'parent_idx');
            Triton.Board.FieldName.setName(Triton.Board.FieldName.PARENT_BOARD_CONTENT_ID, "parentBoardContentIdx", 'parent_board_content_idx');
            Triton.Board.FieldName.setName(Triton.Board.FieldName.BOARD_CONTENT_CATEGORY_ID, "boardContentCategoryIdx", 'board_content_category_idx');
        }
    };
    Triton.Board.initValues(Triton.SiteType.Polaris2);


    Triton.BoardWrite.setFieldRequiredChecker(function (typeCode, value) {

        if (typeCode == Triton.Board.ValueType.CATEGORY || typeCode == Triton.Board.ValueType.TITLE || typeCode == Triton.Board.ValueType.THUMBNAIL_IMAGE_URL || typeCode == Triton.Board.ValueType.IMAGE_URL) {

            return String.isBlank(value);

        } else if (typeCode == Triton.Board.ValueType.ATTACHMENT) {

            if (String.isBlank(value)) {
                return true;
            }

            var list = Lia.p(JSON.parse(value), 'list');
            if (list == undefined || list.length == 0) {
                return true;
            }

            return false;
        }

        return false;
    });

    Triton.Board.setMessageHandler(function (messageType, data, item, callback, callbackData) {

        if (messageType == Triton.Board.MessageType.LOADING_START) {
            LoadingPopupManager.show();
        } else if (messageType == Triton.Board.MessageType.LOADING_END) {
            LoadingPopupManager.hide();
        } else if (messageType == Triton.Board.MessageType.AVAILABLE_CHANGE) {

            PopupManager.alert('변경', '글의 게시 상태를 변경하시겠습니까?', function (data) {

                var callback = data['callback'];
                var callbackData = data['callbackData'];
                callback(callbackData);

            }, true, undefined, undefined, {
                callback: callback,
                callbackData: callbackData
            });

        } else if (messageType == Triton.Board.MessageType.DELETE_BOARD_CONTENT) {

            PopupManager.alert(Lia.Strings.getString(Lia.Strings.POPUP.TITLE.INFO),
                Lia.Strings.getString(Lia.Strings.MESSAGE.CONFIRM_DELETE), function (data) {

                var callback = data['callback'];
                var callbackData = data['callbackData'];
                callback(callbackData);

            }, true, undefined, undefined, {
                callback: callback,
                callbackData: callbackData
            });

        } else if (messageType == Triton.Board.MessageType.NO_SELECTED_ITEM) {

            PopupManager.alert(Lia.Strings.getString(Lia.Strings.POPUP.TITLE.INFO), '선택한 항목이 없습니다.');

        } else if (messageType == Triton.Board.MessageType.RECOVER_BOARD_CONTENT) {

            PopupManager.alert(Lia.Strings.getString(Lia.Strings.POPUP.TITLE.INFO), '복구하시겠습니까?', function (data) {

                var callback = data['callback'];
                var callbackData = data['callbackData'];
                callback(callbackData);

            }, true, undefined, undefined, {
                callback: callback,
                callbackData: callbackData
            });

        } else if (messageType == Triton.Board.MessageType.DELETE_BOARD_CONTENT_PERMANENTLY) {

            PopupManager.alert(Lia.Strings.getString(Lia.Strings.POPUP.TITLE.INFO), '영구 삭제하시겠습니까?', function (data) {

                var callback = data['callback'];
                var callbackData = data['callbackData'];
                callback(callbackData);

            }, true, undefined, undefined, {
                callback: callback,
                callbackData: callbackData
            });

        } else if (messageType == Triton.Board.MessageType.DELETE_BOARD_CONTENT_CATEGORY) {

            var name = item['name'];

            PopupManager.alert(Lia.Strings.getString(Lia.Strings.POPUP.TITLE.INFO), name + ' 카테고리를 삭제하시겠습니까?', function (data) {

                var callback = data['callback'];
                var callbackData = data['callbackData'];
                callback(callbackData);

            }, true, undefined, undefined, {
                callback: callback,
                callbackData: callbackData
            });

        } else if (messageType == Triton.Board.MessageType.AVAILABLE_CHANGE_COMPLETED) {

            if (callback != undefined)
                callback(callbackData);

            // PopupManager.alert(Lia.Strings.getString(Lia.Strings.POPUP.TITLE.INFO), '변경 완료되었습니다.', function (data) {
            //
            //     var callback = data['callback'];
            //     var callbackData = data['callbackData'];
            //
            //     if (callback != undefined)
            //         callback(callbackData);
            //
            // }, undefined, undefined, undefined, {
            //     callback: callback,
            //     callbackData: callbackData
            // });

        } else if (messageType == Triton.Board.MessageType.DELETE_BOARD_CONTENT_CATEGORY_COMPLETED) {
            // PopupManager.alert(Lia.Strings.getString(Lia.Strings.POPUP.TITLE.INFO), '삭제 완료되었습니다.');
        } else if (messageType == Triton.Board.MessageType.FAILED_TO_FIND_BOARD) {
            PopupManager.alert(Lia.Strings.getString(Lia.Strings.POPUP.TITLE.INFO), '게시판을 찾을 수 없습니다.');
        } else if (messageType == Triton.Board.MessageType.FAILED_TO_FIND_BOARD_CONTENT) {
            PopupManager.alert(Lia.Strings.getString(Lia.Strings.POPUP.TITLE.INFO), '게시물을 찾을 수 없습니다.');
        } else if (messageType == Triton.Board.MessageType.FAILED_TO_FIND_BOARD_CONTENT_CATEGORY) {
            PopupManager.alert(Lia.Strings.getString(Lia.Strings.POPUP.TITLE.INFO), '카테고리를 찾을 수 없습니다.');
        } else if (messageType == Triton.Board.MessageType.REQUIRE_FIELD) {

            if (data == Triton.Board.ValueType.TITLE) {
                PopupManager.alert(Lia.Strings.getString(Lia.Strings.POPUP.TITLE.INFO), '제목을 입력해 주세요.');
            } else if (data == Triton.Board.ValueType.CATEGORY) {
                PopupManager.alert(Lia.Strings.getString(Lia.Strings.POPUP.TITLE.INFO), '카테고리를 선택해 주세요.');
            } else if (data == Triton.Board.ValueType.ATTACHMENT) {
                PopupManager.alert(Lia.Strings.getString(Lia.Strings.POPUP.TITLE.INFO), '파일을 업로드 해 주십시오.');
            } else if (data == Triton.Board.ValueType.THUMBNAIL_IMAGE_URL) {
                PopupManager.alert(Lia.Strings.getString(Lia.Strings.POPUP.TITLE.INFO), '썸네일을 업로드 해 주십시오.');
            }
        }

    });


    Triton.BoardList.setFieldOrderByChecker(function (type, boardList) {

        var allowTypes = [
            Triton.Board.ValueType.TITLE,
            Triton.Board.ValueType.REGISTERED_DATE,
            Triton.Board.ValueType.LAST_MODIFIED_DATE,
            Triton.Board.ValueType.EFFECTIVE_START_DATE,
            Triton.Board.ValueType.EFFECTIVE_END_DATE,
            Triton.Board.ValueType.VIEW_COUNT,
            Triton.Board.ValueType.COMMENT_COUNT
        ];

        for (var i = 0, l = allowTypes.length; i < l; i++) {

            if (allowTypes[i] == type)
                return true;
        }

        return false;
    });


    Triton.BoardList.setOptionChangeChecker(function (parameterMap, boardList,
                                                      searcher, statusComboBox,
                                                      countComboBox, categoryComboBox) {

        var statusCode = parameterMap[Triton.BoardList.OptionParameterName.STATUS_CODE];
        var categoryId = parameterMap[Triton.BoardList.OptionParameterName.CATEGORY_ID];
        var count = parameterMap[Triton.BoardList.OptionParameterName.COUNT];
        if (String.isBlank(count)) {
            count = 20;
        }

        var searchByCode = parameterMap[Triton.BoardList.OptionParameterName.SEARCH_BY_CODE];
        var searchKeyword = parameterMap[Triton.BoardList.OptionParameterName.SEARCH_KEYWORD];
        if (String.isBlank(searchKeyword)) {
            searchKeyword = '';
        }

        if (!String.isBlank(statusCode) && statusComboBox != undefined) {
            statusComboBox.setValue(statusCode, true);
        }

        if (!String.isBlank(categoryId) && categoryComboBox != undefined) {
            categoryComboBox.setValue(categoryId, true);
        }

        if (!String.isBlank(count) && countComboBox != undefined) {
            countComboBox.setValue(count, true);
        }

        if (searcher != undefined) {

            if (!String.isBlank(searchByCode)) {
                searcher.setSearchSelectedValue(searchByCode, true);
            }

            searcher.setSearchKeyword(searchKeyword);
        }
    });


    Triton.BoardList.setOnOptionChangeListener(function (name, value, parameterMap, boardList) {


        if (name == Triton.BoardList.OptionParameterName.ORDER_BY_CODE) {

            var orderByCode = parameterMap[name];

            var codeMap = {};
            codeMap[Triton.Board.ValueType.TITLE] = [BoardContentOrderBy.TITLE_DESC, BoardContentOrderBy.TITLE_ASC];
            codeMap[Triton.Board.ValueType.REGISTERED_DATE] = [BoardContentOrderBy.REGISTERED_DATE_DESC, BoardContentOrderBy.REGISTERED_DATE_ASC];
            codeMap[Triton.Board.ValueType.LAST_MODIFIED_DATE] = [BoardContentOrderBy.LAST_MODIFIED_DATE_DESC, BoardContentOrderBy.LAST_MODIFIED_DATE_ASC];
            codeMap[Triton.Board.ValueType.VIEW_COUNT] = [BoardContentOrderBy.VIEW_COUNT_DESC, BoardContentOrderBy.VIEW_COUNT_ASC];
            codeMap[Triton.Board.ValueType.COMMENT_COUNT] = [BoardContentOrderBy.COMMENT_COUNT_DESC, BoardContentOrderBy.COMMENT_COUNT_ASC];
            codeMap[Triton.Board.ValueType.EFFECTIVE_START_DATE] = [BoardContentOrderBy.EFFECTIVE_START_DATE_DESC, BoardContentOrderBy.EFFECTIVE_START_DATE_ASC];
            codeMap[Triton.Board.ValueType.EFFECTIVE_END_DATE] = [BoardContentOrderBy.EFFECTIVE_END_DATE_DESC, BoardContentOrderBy.EFFECTIVE_END_DATE_ASC];

            var codeList = codeMap[value];
            if (orderByCode == codeList[0]) {
                orderByCode = codeList[1];
            } else {
                orderByCode = codeList[0];
            }

            var pageParameterMap = {};
            pageParameterMap[name] = orderByCode;

            PageManager.goCurrentPageWithCurrentParameterMap(pageParameterMap);

        } else if (name == Triton.BoardList.OptionParameterName.PAGE) {

            PageManager.goCurrentPageWithCurrentParameterMap({
                page: value
            });

        } else {

            var categorySection = boardList.categorySection;
            var pageParameterMap = Triton.extractFormData(categorySection);
            pageParameterMap['page'] = 1;
            PageManager.goCurrentPageWithCurrentParameterMap(pageParameterMap);
        }


    });


    Triton.Board.setResponseChecker(function (type, status, data, request) {

        if (status != Lia.Requester.Status.SUCCESS) {
            return false;
        }

        return true;
    });

    Triton.BoardList.setBoardListChangeChecker(function (type, parameterMap, boardList) {

        if (type == Triton.Board.ValueType.BOARD_ID) {

            var termId = Lia.p(parameterMap, 'term_id');
            var institutionId = Lia.p(parameterMap, 'institution_id');
            var organizationId = Lia.p(parameterMap, 'organization_id');
            var courseId = Lia.p(parameterMap, 'course_id');
            var courseSectionId = Lia.p(parameterMap, 'section_id');

            if (boardList.termId != termId || boardList.institutionId != institutionId || boardList.courseId != courseId ||
                boardList.courseSectionId != courseSectionId || boardList.organizationId != organizationId) {

                boardList.courseId = courseId;
                boardList.courseSectionId = courseSectionId;
                boardList.termId = termId;
                boardList.institutionId = institutionId;
                boardList.organizationId = organizationId;
                return true;
            }

            if (boardList.getBoardId() == undefined)
                return true;

            return false;
        }

        return false;
    });


    Triton.Board.setValueExtractor(function (type, data, item, board) {

        var idName = Triton.Board.FieldName.getResponseName(Triton.Board.FieldName.ID);

        if (type == Triton.Board.ValueType.BOARD_ID) {
            return Lia.p(data, 'body', 'list', 0, idName);
        } else if (type == Triton.Board.ValueType.CATEGORY_OPTION_LIST) {

            var optionList = [];

            var list = Lia.p(data, 'body', 'list');

            if (board.isListModule()) {

                if (board.allCategoryShow) {

                    var allCategoryName = board.allCategoryName;
                    if (list == undefined || list.length == 0) {
                        allCategoryName += '(' + Lia.Strings.getString(Lia.Strings.BOARD.NO_CATEGORY) + ')';
                    }

                    optionList.push({value: board.allCategoryValue, name: allCategoryName});
                }

            } else if (board.isWriteModule()) {

                optionList.push({value: '', name: '선택'});
            }

            if (list != undefined) {

                for (var i = 0, l = list.length; i < l; i++) {
                    var item = list[i];
                    optionList.push({value: item[idName], name: item['name']});
                }

            }

            return optionList;

        } else if (type == Triton.Board.ValueType.SEARCH_OPTION_LIST) {

            var optionList = [];
            optionList.push({value: BoardContentSearchBy.TITLE, name: Lia.Strings.getString(Lia.Strings.BOARD.TITLE)});
            optionList.push({value: BoardContentSearchBy.BODY, name: Lia.Strings.getString(Lia.Strings.BOARD.BODY)});
            optionList.push({
                value: BoardContentSearchBy.TITLE_OR_BODY,
                name: Lia.Strings.getString(Lia.Strings.BOARD.TITLE) + '+' + Lia.Strings.getString(Lia.Strings.BOARD.BODY)
            });
            optionList.push({
                value: BoardContentSearchBy.REGISTERED_BY_USER_NAME,
                name: Lia.Strings.getString(Lia.Strings.BOARD.NAME)
            });
            optionList.push({
                value: BoardContentSearchBy.REGISTERED_BY_USER_ID,
                name: Lia.Strings.getString(Lia.Strings.BOARD.ID)
            });
            return optionList;
        } else if (type == Triton.Board.ValueType.SHOW_ON_CMS_ONLY) {
            return Lia.p(item, 'show_on_cms_only');
        } else if (type == Triton.Board.ValueType.BOARD_CONTENT_SUMMARY_LIST) {
            return Lia.p(data, 'body', 'list');
        } else if (type == Triton.Board.ValueType.BOARD_CONTENT_CATEGORY_LIST) {
            return Lia.p(data, 'body', 'list');
        } else if (type == Triton.Board.ValueType.CATEGORY_NAME) {
            return Lia.p(item, 'name');
        } else if (type == Triton.Board.ValueType.BOARD_CONTENT) {
            return Lia.p(data, 'body');
        } else if (type == Triton.Board.ValueType.BOARD_CONTENT_CATEGORY) {
            return Lia.p(data, 'body');
        } else if (type == Triton.Board.ValueType.ROW_NUMBER) {

            var isAlwaysOnTop = Lia.p(item, 'is_always_on_top');
            if (isAlwaysOnTop)
                return '';

            if ( String.isNotBlank(board.markBoardContentId) && Lia.p(item,'id') == board.markBoardContentId) {
                return '▶';
            }

            if (Triton.Board.siteType == Triton.SiteType.Polaris2 || Triton.Board.siteType == Triton.SiteType.Pluto) {

                return rowNumber = Lia.p(item, 'row_number');

            } else {

                var totalCount = Lia.p(data, 'body', 'total_count');
                var rowNumber = Lia.p(item, 'row_number');
                return totalCount - rowNumber + 1;
            }


        } else if (type == Triton.Board.ValueType.CATEGORY) {

            if (board.isListModule()) {

                var categoryName = Lia.pd('-', item, 'category', 'name');
                var categoryId = Lia.pd('', item, 'category', idName);

                var span = new Triton.Span({
                    theme: Triton.Span.Theme.UnderlineWhenHover,
                    content: categoryName,
                    categoryId: categoryId,
                    onClick: function (e) {

                        e.preventDefault();
                        e.stopPropagation();

                        var options = e.data;
                        var map = {};
                        map[Triton.BoardList.OptionParameterName.CATEGORY_ID] = options['categoryId'];
                        PageManager.goCurrentPageWithCurrentParameterMap(map);
                    }
                });

                return span;

            } else if (board.isDetailModule()) {
                return Lia.pd('-', item, 'category', 'name');
            } else if (board.isWriteModule()) {
                return Lia.p(item, 'category', idName);
            }

        } else if (type == Triton.Board.ValueType.BODY) {

            var body = Lia.p(item, 'body');

            if (board.isDetailModule()) {

                var bodySection = new Triton.Section({});
                bodySection.html(body);
                bodySection.find('img').css('max-width', '100%');

                return bodySection;

            } else {

                return body;
            }

            // return Lia.p(item, 'body');

        } else if (type == Triton.Board.ValueType.LINK) {

            if (board.isWriteModule()) {

                return Lia.p(item, 'link_url');

            } else {

                return Lia.pd('-', item, 'link_url');
            }

        } else if (type == Triton.Board.ValueType.TITLE) {

            if (board.isWriteModule()) {

                return Lia.p(item, 'title');

            } else {

                var section = new Triton.Section({});

                if (board.titleAnsweredShow) {

                    if (Lia.p(item, 'is_answered')) {

                        new Triton.Label({
                            appendTo: section,
                            theme: Triton.Label.Theme.TitleAnswered,
                            content: '답변완료'
                        });

                    } else {

                        new Triton.Label({
                            appendTo: section,
                            theme: Triton.Label.Theme.TitleNotAnswered,
                            content: '답변대기'
                        });
                    }
                }

                if (board.titleNewShow) {

                    if (Lia.p(item, 'is_new')) {

                        new Triton.Label({
                            appendTo: section,
                            theme: Triton.Label.Theme.TitleNew,
                            content: 'NEW'
                        });
                    }
                }

                section.append(new Triton.Span({}).text(Lia.p(item, 'title')));

                if (board.titleCommentCountShow) {

                    var commentCount = Lia.p(item, 'comment_count');
                    if (commentCount > 0) {

                        section.append(new Triton.Span({
                                theme: Triton.Span.Theme.CommentCount,
                                content: '&nbsp;&nbsp;(' + commentCount + ')'
                            }
                        ));
                    }
                }

                if (board.titlePrivateShow) {

                    var isPrivate = Lia.p(item, 'is_private');
                    if (isPrivate) {
                        section.append(new Triton.Image({theme: Triton.Image.Theme.Private}));
                    }
                }

                return section;

            }


        } else if (type == Triton.Board.ValueType.WRITER) {

            var idx = Lia.p(item, 'registered_by_user_idx');
            var name = Lia.p(item, 'registered_by_user_name');
            var roleCode = Lia.p(item, 'registered_by_user_role_code');

            var span = undefined;
            if (String.isNotBlank(name)) {

                var options = {
                    content: name
                };


                if (Triton.Board.useUserOpenPopup == true) {

                    if (String.isNotBlank(idx) && (Triton.Board.siteType == Triton.SiteType.Polaris2 || Triton.Board.siteType == Triton.SiteType.Pluto)) {
                        options['theme'] = Triton.Span.Theme.UnderlineWhenHover;
                    }

                }

                span = new Triton.Span(options);

                if (Triton.Board.useUserOpenPopup == true) {

                    if (String.isNotBlank(idx)) {

                        if (Triton.Board.siteType == Triton.SiteType.Pluto) {

                            span.on('click', {
                                idx: idx
                            }, function (e) {

                                e.stopPropagation();
                                e.preventDefault();

                                var idx = e.data.idx;
                                PageManager.open(PageUrl.USER_INFO, ['home'], {idx: idx}, {
                                    width: '1000px',
                                    height: '800px',
                                    scrollbars: 'yes'
                                });

                            });

                        } else if (Triton.Board.siteType == Triton.SiteType.Polaris2) {

                            ContextMenuHelper.bindUser(span.get(), {
                                idx: idx,
                                role_code: roleCode
                            });
                        }
                    }
                }
            }

            return span;

        } else if (type == Triton.Board.ValueType.VIEW_COUNT) {

            var viewCount = Lia.pd('-', item, 'view_count');
            return viewCount;

        } else if (type == Triton.Board.ValueType.COMMENT_COUNT) {

            var commentCount = Lia.pd('-', item, 'comment_count');
            return commentCount;

        } else if (type == Triton.Board.ValueType.ATTACHMENT_LIST) {

            if (Triton.Board.siteType == Triton.SiteType.Polaris) {
                return Lia.p(item, 'list');
            } else {
                return item;
            }

        } else if (type == Triton.Board.ValueType.ATTACHMENT) {

            if (board.isListModule()) {

                // TODO 솔루션간 호환성을 위한 코드: Polaris2가 아닌 타 솔루션에서도 향후 BoardSummaryList에는 attachment_count보다는 has_attachment로 내려주도록 수정하기
                var attachmentFlag = Lia.p(item, 'attachment_count');

                if (attachmentFlag == undefined)
                    attachmentFlag = Lia.p(item, 'has_attachment');

                return attachmentFlag;
            }
            return Lia.p(item, 'attachment_list');

        } else if (type == Triton.Board.ValueType.ATTACHMENT_FILE_NAME) {
            return Lia.p(item, 'original_filename');
        } else if (type == Triton.Board.ValueType.ATTACHMENT_FILE_SIZE) {

            var size = Lia.p(item, 'size');
            if (String.isNotBlank(size)) {
                return Lia.convertBytesToSize(size);
            }

            return '-';

        } else if (type == Triton.Board.ValueType.ATTACHMENT_FILE_URL) {

            if (Triton.Board.siteType == Triton.SiteType.Polaris2 || Triton.Board.siteType == Triton.SiteType.Pluto) {

                return Lia.p(item, 'url');

            } else {

                var parameterMap = {
                    path: Lia.p(item, 'url')
                };

                var destFilename = Lia.p(item, 'original_filename');
                if (String.isNotBlank(destFilename)) {
                    parameterMap['destFilename'] = destFilename;
                }

                return ApiUrl.File.GET + Lia.convertArrayToQueryString(parameterMap);
            }

        } else if (type == Triton.Board.ValueType.THUMBNAIL_IMAGE_URL) {

            var path = Lia.p(item, 'thumbnail_image_url');
            if (String.isBlank(path)) {
                return undefined;
            }

            return ApiUrl.File.GET + Lia.convertArrayToQueryString({
                path: path
            });

        } else if (type == Triton.Board.ValueType.VIDEO_URL) {

            var videoUrl = Lia.p(item, 'video_url');
            if (board.isDetailModule()) {

                var videoTypeCode = Lia.p(videoUrl, 'type_code');

                var jVideo = '-';
                if (videoTypeCode == VideoType.VIMEO) {

                    var videoUrl = Lia.p(videoUrl, 'url');
                    var videoId = videoUrl.replace('/videos/', '');

                    jVideo = $('<iframe title="video" width="400px" height="225px" style="border:none;" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>');
                    jVideo.attr('src', 'https://player.vimeo.com/video/' + videoId);

                } else if (videoTypeCode == VideoType.YOUTUBE) {

                    var videoUrl = Lia.p(videoUrl, 'url');

                    jVideo = $('<iframe title="video" width="400px" height="225px" style="border:none;" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>');
                    jVideo.attr('src', YouTubeHelper.getEmbedUrl(videoUrl));
                }

                return jVideo;


            } else if (board.isWriteModule()) {
                return videoUrl
            }

        } else if (type == Triton.Board.ValueType.IMAGE_URL) {

            var imageUrl = Lia.p(item, 'image_url');
            if (board.isDetailModule()) {

                var imageUrlObject;
                try {
                    imageUrlObject = JSON.parse(imageUrl);
                } catch (ex) {
                    imageUrlObject = imageUrl;
                }

                var imageUrlPath = Lia.pd(Lia.p(imageUrlObject, 'url'), imageUrl, 'thumbnail_image_url');
                if (String.isBlank(imageUrlPath)) {
                    imageUrlPath = imageUrl;
                }

                if (String.isBlank(imageUrlPath)) {
                    return undefined;
                }

                return ApiUrl.File.GET + Lia.convertArrayToQueryString({
                    path: imageUrlPath
                });

            } else if (board.isWriteModule()) {

                return imageUrl;
            }

        } else if (type == Triton.Board.ValueType.REGISTERED_DATE) {

            var registeredDate = Lia.p(item, 'registered_date');
            if (String.isNotBlank(board.datetimeFormat)) {

                try {
                    return Date.parse(registeredDate).toString(board.datetimeFormat);
                } catch (e) {
                }
            }

            return registeredDate;

        } else if (type == Triton.Board.ValueType.LAST_MODIFIED_DATE) {

            var lastModifiedDate = Lia.p(item, 'last_modified_date');

            if (String.isNotBlank(board.datetimeFormat)) {

                try {
                    return Date.parse(lastModifiedDate).toString(board.datetimeFormat);
                } catch (e) {
                }
            }

            return lastModifiedDate;

        } else if (type == Triton.Board.ValueType.PAGE) {
            // 요청 파라미터 들어옴
            return Lia.p(data, 'page');
        } else if (type == Triton.Board.ValueType.COUNT) {
            // 요청 파라미터 들어옴
            return Lia.p(data, 'count');
        } else if (type == Triton.Board.ValueType.TOTAL_COUNT) {
            return Lia.p(data, 'body', 'total_count');
        } else if (type == Triton.Board.ValueType.IS_AVAILABLE) {

            var defaultValue = undefined;

            if (board.isWriteModule()) {

                if (Triton.Board.siteType == Triton.SiteType.Polaris2 || Triton.Board.siteType == Triton.SiteType.Pluto) {
                    if (UserManager.equalsToUserRoleCode(UserRole.TEACHER, UserRole.TEACHING_ASSISTANT))
                        defaultValue = Triton.CheckBox.Status.PRESSED;
                }

            }

            return Lia.pd(defaultValue, item, 'is_available');

        } else if (type == Triton.Board.ValueType.IS_DELETED) {
            return Lia.p(item, 'is_deleted');
        } else if (type == Triton.Board.ValueType.EFFECTIVE_DATE) {

            var effectiveStartDate = Lia.p(item, 'effective_start_date');
            var effectiveEndDate = Lia.p(item, 'effective_end_date');

            if (effectiveStartDate == undefined && effectiveEndDate == undefined)
                return undefined;

            return Lia.pd('', effectiveStartDate) + ' ~ ' + Lia.pd('', effectiveEndDate);

        } else if (type == Triton.Board.ValueType.TASK_DATE) {

            var taskStartDate = Lia.p(item, 'task_start_date');
            var taskEndDate = Lia.p(item, 'task_end_date');
            var taskDateString = '';

            if (taskStartDate == undefined && taskEndDate == undefined)
                return '지정하지않음';

            if (String.isNotBlank(taskStartDate) && String.isNotBlank(taskEndDate))
                taskDateString = taskStartDate + ' 부터 ' + taskEndDate + ' 까지';
            else if (String.isNotBlank(taskStartDate) && String.isBlank(taskEndDate))
                taskDateString = taskStartDate + ' 부터';
            else if (String.isBlank(taskStartDate) && String.isNotBlank(taskEndDate))
                taskDateString = taskEndDate + ' 까지';

            return taskDateString;

        } else if (type == Triton.Board.ValueType.EVENT_DATE) {

            var eventStartDate = Lia.p(item, 'event_start_date');
            var eventEndDate = Lia.p(item, 'event_end_date');
            var eventDateString = '';

            if (eventStartDate == undefined && eventEndDate == undefined)
                return '지정하지않음';

            if (String.isNotBlank(eventStartDate) && String.isNotBlank(eventEndDate))
                eventDateString = eventStartDate + ' 부터 ' + eventEndDate + ' 까지';
            else if (String.isNotBlank(eventStartDate) && String.isBlank(eventEndDate))
                eventDateString = eventStartDate + ' 부터';
            else if (String.isBlank(eventStartDate) && String.isNotBlank(eventEndDate))
                eventDateString = eventEndDate + ' 까지';

            return eventDateString;

        } else if (type == Triton.Board.ValueType.EFFECTIVE_START_DATE) {
            return Lia.p(item, 'effective_start_date');
        } else if (type == Triton.Board.ValueType.EFFECTIVE_END_DATE) {
            return Lia.p(item, 'effective_end_date');
        } else if (type == Triton.Board.ValueType.TASK_START_DATE) {
            return Lia.p(item, 'task_start_date');
        } else if (type == Triton.Board.ValueType.TASK_END_DATE) {
            return Lia.p(item, 'task_end_date');
        } else if (type == Triton.Board.ValueType.EVENT_START_DATE) {
            return Lia.p(item, 'event_start_date');
        } else if (type == Triton.Board.ValueType.EVENT_END_DATE) {
            return Lia.p(item, 'event_end_date');
        } else if (type == Triton.Board.ValueType.WRITABLE_DATE) {

            var writableStartDate = Lia.p(item, 'writable_start_date');
            var writableEndDate = Lia.p(item, 'writable_end_date');

            if (writableStartDate == undefined && writableEndDate == undefined)
                return undefined;

            return Lia.pd('', writableStartDate) + ' ~ ' + Lia.pd('', writableEndDate);

        } else if (type == Triton.Board.ValueType.WRITABLE_START_DATE) {
            return Lia.p(item, 'writable_start_date');
        } else if (type == Triton.Board.ValueType.WRITABLE_END_DATE) {
            return Lia.p(item, 'writable_end_date');
        } else if (type == Triton.Board.ValueType.IS_PRIVATE) {
            return Lia.p(item, 'is_private');
        } else if (type == Triton.Board.ValueType.ROW_THEME) {

            var theme = Triton.ListTable.Row.Theme.Normal;
            if ( Lia.p(item, 'is_always_on_top') == 1 ) {
                theme = Triton.ListTable.Row.Theme.AlwaysOnTop;
            } else if ( String.isNotBlank(board.markBoardContentId) && Lia.p(item,'id') == board.markBoardContentId) {
                theme = Triton.ListTable.Row.Theme.Selected;
            }

            return theme;

        } else if (type == Triton.Board.ValueType.IS_ALWAYS_ON_TOP) {
            return Lia.p(item, 'is_always_on_top');
        } else if (type == Triton.Board.ValueType.IS_EDITABLE) {
            return Lia.p(item, 'is_editable');
        } else if (type == Triton.Board.ValueType.DELETED_FROM_IP_ADDRESS) {
            return Lia.p(item, 'deleted_from_ip_address');
        } else if (type == Triton.Board.ValueType.DELETED_BY_USER_NAME) {

            var idx = Lia.p(item, 'deleted_by_user_idx');
            var name = Lia.p(item, 'deleted_by_user_name');

            var span = new Triton.Span({
                content: name
            });

            if (!String.isBlank(idx)) {

                // UserContextMenuPopupManager.bind(span, {
                //     idx: idx,
                //     name: name
                // })
            }

            return span;

        } else if (type == Triton.Board.ValueType.DELETED_DATE) {
            return Lia.p(item, 'deleted_date');
        } else if (type == Triton.Board.ValueType.STATUS) {


            if (board.isWriteModule()) {

                var comboBox = new Triton.ComboBox({
                    form: {name: Triton.Board.FormName.getName(type)},
                    optionList: BoardContentStatus.createOptionList(),
                    selectedValue: Lia.p(item, 'status_code')
                });


                return comboBox;


            } else {


                var isColored = false;

                try {

                    if (typeof SYSTEM_CONFIGURATION_TARGET != 'undefined' && typeof SystemConfigurationTarget != 'undefined') {
                        isColored = (SYSTEM_CONFIGURATION_TARGET != undefined && SystemConfigurationTarget != undefined && Configs.containsSystemConfigurationTarget(SystemConfigurationTarget.UNIVERSITY)) ? true : false;
                    }

                } catch (e) {
                }

                return BoardContentStatus.getName(Lia.p(item, 'status_code'), undefined, isColored);
            }

        } else if (type == Triton.Board.ValueType.PROGRESS) {
            return Lia.p(item, 'progress');
        } else if (type == Triton.Board.ValueType.FLOATING_TEXT) {
            return Lia.p(item, 'title');
        } else if (type == Triton.Board.ValueType.ALWAYS_ON_TOP_START_DATE) {
            return Lia.p(item, 'always_on_top_start_date');
        } else if (type == Triton.Board.ValueType.ALWAYS_ON_TOP_END_DATE) {
            return Lia.p(item, 'always_on_top_end_date');
        }

        return undefined;
    });


    Triton.Board.setParameterMapConverter(function (type, data, check, board, additionalBaseRequestParameterMap) {

        var boardIdName = Triton.Board.FieldName.getRequestName(Triton.Board.FieldName.BOARD_ID);
        var parentIdName = Triton.Board.FieldName.getRequestName(Triton.Board.FieldName.PARENT_ID);
        var categoryIdName = Triton.Board.FieldName.getRequestName(Triton.Board.FieldName.CATEGORY_ID);
        var idName = Triton.Board.FieldName.getRequestName(Triton.Board.FieldName.ID);
        var idListName = Triton.Board.FieldName.getRequestName(Triton.Board.FieldName.ID_LIST);
        var parentBoardContentIdName = Triton.Board.FieldName.getRequestName(Triton.Board.FieldName.PARENT_BOARD_CONTENT_ID);
        var boardContentCategoryIdName = Triton.Board.FieldName.getRequestName(Triton.Board.FieldName.BOARD_CONTENT_CATEGORY_ID);
        var boardIdListName = Triton.Board.FieldName.getRequestName(Triton.Board.FieldName.BOARD_ID_LIST);

        var idResponseName = Triton.Board.FieldName.getResponseName(Triton.Board.FieldName.ID);

        var returnParameterMap = {};

        var baseRequestParameterMap = board.getBaseRequestParameterMap();
        if (baseRequestParameterMap != undefined) {

            for (key in baseRequestParameterMap) {
                returnParameterMap[key] = baseRequestParameterMap[key];
            }
        }

        if (additionalBaseRequestParameterMap != undefined) {

            for (key in additionalBaseRequestParameterMap) {
                returnParameterMap[key] = additionalBaseRequestParameterMap[key];
            }
        }

        var convertList = undefined;
        if (type == Triton.Board.UrlType.GET_BOARD_LIST) {

            var typeCode = board.getTypeCode();
            if (typeCode != undefined)
                returnParameterMap['typeCode'] = typeCode;

            if (Triton.Board.siteType == Triton.SiteType.Polaris2 || Triton.Board.siteType == Triton.SiteType.Pluto) {

                convertList = {
                    'term_id': 'termId',
                    'course_id': 'courseId',
                    'institution_id': 'institutionId',
                    'organization_id': 'organizationId',
                    'course_content_id': 'courseContentId',
                    'course_code_id': 'courseCodeId',
                    'course_section_id': 'courseSectionId',
                    'curriculum_id': 'curriculumId'
                };


            } else {

                convertList = {
                    'term_id': 'termId',
                    'course_id': 'courseId',
                    'section_id': 'courseSectionId'
                };


            }


        } else if (type == Triton.Board.UrlType.ADD_BOARD_CONTENT) {

            if (board.isCommentListModule()) {

                returnParameterMap[boardIdName] = board.getBoardId();
                returnParameterMap[parentIdName] = board.getBoardContentId();
                returnParameterMap['body'] = data[Triton.Board.FormName.getName(Triton.Board.ValueType.BODY)];
                returnParameterMap['showOnCmsOnly'] = data[Triton.Board.FormName.getName(Triton.Board.ValueType.SHOW_ON_CMS_ONLY)];
                returnParameterMap['attachmentList'] = data[Triton.Board.FormName.getName(Triton.Board.ValueType.ATTACHMENT)];


                var parentUserIdx = Lia.p(board, 'boardDetail', 'boardContent', 'registered_by_user_idx');
                if (String.isNotBlank(parentUserIdx)) {

                    // 메세지 날리는 부분
                    try {

                        // @RequestParam(value = "sendNotificationMessage", required = false) Integer sendNotificationMessageInteger,
                        //                   @RequestParam(value = "notificationMessageTypeCodeList", required = false) String notificationMessageTypeCodeListString,
                        //                   @RequestParam(value = "notificationMessageTargetUserIdxList", required = false) String notificationMessageTargetUserIdxListString,

                        var notificationMessageTypeCodeList = [];
                        if (data[Triton.Board.FormName.getName(Triton.Board.ValueType.SEND_SMS_NOTIFICATION)] == 1) {
                            notificationMessageTypeCodeList.push(MessageType.TEXT);
                        }

                        if (data[Triton.Board.FormName.getName(Triton.Board.ValueType.SEND_EMAIL_NOTIFICATION)] == 1) {
                            notificationMessageTypeCodeList.push(MessageType.EMAIL);
                        }

                        if (notificationMessageTypeCodeList.length > 0) {
                            returnParameterMap['sendNotificationMessage'] = 1;
                            returnParameterMap['notificationMessageTypeCodeList'] = notificationMessageTypeCodeList.join(',');
                            returnParameterMap['notificationMessageTargetUserIdxList'] = parentUserIdx;
                        }

                    } catch (e) {
                    }
                }

            } else {

                var boardId = board.getBoardId();
                if (boardId != undefined)
                    data[boardIdName] = boardId;

                for (var key in data) {

                    var value = data[key];
                    if (key == Triton.Board.FormName.getName(Triton.Board.ValueType.CATEGORY)) {
                        returnParameterMap[categoryIdName] = value;
                    } else {
                        returnParameterMap[key] = value;
                    }
                }

                returnParameterMap['boardTypeCode'] = board.boardTypeCode;

                var videoUrlTypeCode = data['videoUrlTypeCode'];
                if (String.isNotBlank(videoUrlTypeCode)) {

                    var videoUrlText = data['videoUrlText'];

                    var videoUrl = {};
                    videoUrl['type_code'] = videoUrlTypeCode;
                    videoUrl['url'] = videoUrlText;

                    returnParameterMap['videoUrl'] = JSON.stringify(videoUrl);
                }
            }

            if (returnParameterMap['isPrivate'] == undefined)
                returnParameterMap['isPrivate'] = 0;

            if (returnParameterMap['isAlwaysOnTop'] == undefined)
                returnParameterMap['isAlwaysOnTop'] = 0;

            if (returnParameterMap['isAvailable'] == undefined)
                returnParameterMap['isAvailable'] = 1;

            if (returnParameterMap['showOnMainPage'] == undefined)
                returnParameterMap['showOnMainPage'] = 0;

            if (returnParameterMap['showOnCmsOnly'] == undefined)
                returnParameterMap['showOnCmsOnly'] = 0;

            if (returnParameterMap['showOnCmsOnly'] == undefined)
                returnParameterMap['showOnCmsOnly'] = 0;

            if (returnParameterMap['isAnonymous'] == undefined)
                returnParameterMap['isAnonymous'] = 0;

        } else if (type == Triton.Board.UrlType.EDIT_BOARD_CONTENT) {

            if (board.isCommentListModule()) {

                returnParameterMap[idName] = check[idResponseName];
                returnParameterMap['body'] = data[Triton.Board.FormName.getName(Triton.Board.ValueType.BODY)];
                returnParameterMap['showOnCmsOnly'] = data[Triton.Board.FormName.getName(Triton.Board.ValueType.SHOW_ON_CMS_ONLY)];
                returnParameterMap['attachmentList'] = data[Triton.Board.FormName.getName(Triton.Board.ValueType.ATTACHMENT)];

            } else {


                var boardContentId = board.getBoardContentId();
                if (boardContentId != undefined)
                    data[idName] = boardContentId;

                for (var key in data) {

                    var value = data[key];
                    if (key == Triton.Board.FormName.getName(Triton.Board.ValueType.CATEGORY)) {
                        returnParameterMap[categoryIdName] = value;
                    } else {
                        returnParameterMap[key] = value;
                    }

                }
            }

            var boardContent = board.getBoardContent();
            var properties = Lia.p(boardContent, 'properties');
            if (properties != undefined)
                properties = JSON.stringify(properties);

            if (returnParameterMap['properties'] == undefined)
                returnParameterMap['properties'] = properties;

            if (returnParameterMap['isPrivate'] == undefined)
                returnParameterMap['isPrivate'] = 0;

            if (returnParameterMap['isAlwaysOnTop'] == undefined)
                returnParameterMap['isAlwaysOnTop'] = 0;

            if (returnParameterMap['isAvailable'] == undefined)
                returnParameterMap['isAvailable'] = 1;

            if (returnParameterMap['showOnMainPage'] == undefined)
                returnParameterMap['showOnMainPage'] = 0;

            if (returnParameterMap['showOnCmsOnly'] == undefined)
                returnParameterMap['showOnCmsOnly'] = 0;

            if (returnParameterMap['isAnonymous'] == undefined)
                returnParameterMap['isAnonymous'] = 0;

            var videoUrlTypeCode = data['videoUrlTypeCode'];
            if (String.isNotBlank(videoUrlTypeCode)) {

                var videoUrlText = data['videoUrlText'];

                var videoUrl = {};
                videoUrl['type_code'] = videoUrlTypeCode;
                videoUrl['url'] = videoUrlText;

                returnParameterMap['videoUrl'] = JSON.stringify(videoUrl);
            }


        } else if (type == Triton.Board.UrlType.ADD_BOARD_CONTENT_CATEGORY) {

            var boardId = board.getBoardId();
            if (boardId != undefined)
                returnParameterMap[boardIdName] = boardId;

            for (var key in data) {

                var value = data[key];
                returnParameterMap[key] = value;
            }

        } else if (type == Triton.Board.UrlType.EDIT_BOARD_CONTENT_CATEGORY) {

            var boardContentCategoryId = board.getBoardContentCategoryId();
            if (boardContentCategoryId != undefined)
                returnParameterMap[idName] = boardContentCategoryId;

            for (var key in data) {

                var value = data[key];
                returnParameterMap[key] = value;
            }

        } else if (type == Triton.Board.UrlType.DELETE_BOARD_CONTENT) {

            if (board.isCommentListModule()) {

                var boardContentId = check[idResponseName];
                if (boardContentId != undefined)
                    returnParameterMap[idName] = boardContentId;


            } else {

                var boardContentId = board.getBoardContentId();
                if (boardContentId != undefined)
                    returnParameterMap[idName] = boardContentId;
            }

            for (var key in data) {

                var value = data[key];
                if (key == Triton.Board.FormName.getName(Triton.Board.ValueType.CATEGORY)) {
                    returnParameterMap[categoryIdName] = value;
                } else {
                    returnParameterMap[key] = value;
                }
            }

        } else if (type == Triton.Board.UrlType.DELETE_BOARD_CONTENT_PERMANENTLY) {

            var boardContentId = board.getBoardContentId();
            if (boardContentId != undefined)
                returnParameterMap[idName] = boardContentId;

            for (var key in data) {

                var value = data[key];
                if (key == Triton.Board.FormName.getName(Triton.Board.ValueType.CATEGORY)) {
                    returnParameterMap[categoryIdName] = value;
                } else {
                    returnParameterMap[key] = value;
                }
            }

        } else if (type == Triton.Board.UrlType.DELETE_BOARD_CONTENT_CATEGORY) {

            var boardContentCategorytId = data[idResponseName];
            if (boardContentCategorytId != undefined)
                returnParameterMap[idName] = boardContentCategorytId;

        } else if (type == Triton.Board.UrlType.GET_BOARD_CONTENT) {

            var boardContentId = board.getBoardContentId();
            if (boardContentId != undefined)
                returnParameterMap[idName] = boardContentId;

            returnParameterMap['increaseViewCount'] = 1;

        } else if (type == Triton.Board.UrlType.GET_BOARD_CONTENT_CATEGORY) {

            var boardContentCategoryId = board.getBoardContentCategoryId();
            if (boardContentCategoryId != undefined) {

                if (Triton.Board.siteType == Triton.SiteType.Polaris2 || Triton.Board.siteType == Triton.SiteType.Pluto) {

                    returnParameterMap[idName] = boardContentCategoryId;

                } else {

                    returnParameterMap[boardContentCategoryIdName] = boardContentCategoryId;
                }
            }

            var boardId = board.getBoardId();
            if (boardId != undefined)
                returnParameterMap[boardIdName] = boardId;

        } else if (type == Triton.Board.UrlType.GET_BOARD_CONTENT_CATEGORY_LIST) {

            var boardId = board.getBoardId();
            if (boardId != undefined)
                returnParameterMap[boardIdName] = boardId;

        } else if (type == Triton.Board.UrlType.RECOVER_BOARD_CONTENT) {

            var boardContentId = board.getBoardContentId();
            if (boardContentId != undefined)
                returnParameterMap[idName] = boardContentId;

        } else if (type == Triton.Board.UrlType.GET_BOARD_CONTENT_SUMMARY_LIST) {

            if (board.isCommentListModule()) {

                if (Triton.ThumbnailUploader.siteType == Triton.SiteType.Pluto) {
                    returnParameterMap[boardIdListName] = board.getBoardId();
                } else {
                    returnParameterMap[boardIdName] = board.getBoardId();
                }

                returnParameterMap[parentBoardContentIdName] = board.getBoardContentId();
                returnParameterMap['isAvailable'] = 1;
                returnParameterMap['isDeleted'] = 0;

                var orderByCode = returnParameterMap['orderByCode'];

                if (String.isBlank(orderByCode)) {

                    if (String.isNotBlank(returnParameterMap['parentBoardContentId'])) {

                        returnParameterMap['orderByCode'] = 3;

                    } else {

                        returnParameterMap['orderByCode'] = 4;
                    }
                }

                if (Triton.Board.siteType == Triton.SiteType.Polaris2 || Triton.Board.siteType == Triton.SiteType.Pluto) {

                    returnParameterMap['includeBody'] = 1;

                    if (board.useCommentUploader) {
                        returnParameterMap['includeAttachmentList'] = 1;
                    }

                    // 오류신고쪽 댓글 안보여서 일단 이렇게 수정
                    // var statusCodes = Lia.p(board, 'options', 'boardDetail', 'options', 'boardContentStatusCodeList');
                    //
                    // var statusCodeList = undefined;
                    // if (statusCodes != undefined) {
                    //     statusCodeList = statusCodes.join(',');
                    // }
                    //
                    // if (String.isNotBlank(statusCodeList))
                    //     returnParameterMap['statusCodeList'] = statusCodeList;
                }

            } else {

                var boardId = board.getBoardId();
                if (!String.isBlank(boardId)) {

                    if (Triton.ThumbnailUploader.siteType == Triton.SiteType.Pluto) {
                        returnParameterMap[boardIdListName] = boardId;
                    } else {
                        returnParameterMap[boardIdName] = boardId;
                    }
                }

                var categorySection = board.categorySection;
                var map = Triton.extractFormData(categorySection);
                var categoryId = map[Triton.BoardList.OptionParameterName.CATEGORY_ID];
                if (String.isNotBlank(categoryId)) {
                    returnParameterMap[categoryIdName] = categoryId;
                }

                // Triton.BoardList.StatusOption.REGISTERED
                // Triton.BoardList.StatusOption.DELETED
                var statusCode = map[Triton.BoardList.OptionParameterName.STATUS_CODE];
                if (!String.isBlank(statusCode))
                    returnParameterMap['isDeleted'] = statusCode;

                var count = map[Triton.BoardList.OptionParameterName.COUNT];
                if (!String.isBlank(count)) {
                    returnParameterMap['count'] = count;
                }

                var orderByCode = map[Triton.BoardList.OptionParameterName.ORDER_BY_CODE];
                if (!String.isBlank(orderByCode)) {
                    returnParameterMap['orderByCode'] = orderByCode;
                }

                var page = Lia.pd(1, data, Triton.BoardList.OptionParameterName.PAGE);
                returnParameterMap['page'] = page;

                if (Triton.Board.siteType == Triton.SiteType.Polaris2 || Triton.Board.siteType == Triton.SiteType.Pluto) {

                    if (String.isBlank(returnParameterMap[parentBoardContentIdName])) {
                        returnParameterMap[parentBoardContentIdName] = -1;
                    }

                    var options = board.getOptions();

                    // 타겟 유저
                    var registeredByUserIdx = Lia.p(options, 'registeredByUserIdx');
                    if (registeredByUserIdx != undefined) {
                        returnParameterMap['registeredByUserIdx'] = registeredByUserIdx;
                    }

                    // 자기 자신 글 옵션
                    var isRequesterContent = Lia.p(options, 'isRequesterContent');
                    if (isRequesterContent == true) {
                        returnParameterMap['isRequesterContent'] = 1;
                    }

                    // 메인페이지글 들고오기 옵션
                    var showOnMainPage = Lia.p(options, 'showOnMainPage');
                    if (showOnMainPage == true) {
                        returnParameterMap['showOnMainPage'] = 1;
                    }

                    var camelMap = FormatHelper.arrayKeyToCamel(data);
                    for (var key in camelMap) {
                        returnParameterMap[key] = camelMap[key];
                    }

                    var writerOrganizationTypeCode = camelMap['writerOrganizationTypeCode'];

                    if (writerOrganizationTypeCode != undefined) {

                        if (writerOrganizationTypeCode == 1) {

                            returnParameterMap['registeredByUserOrganizationId'] = -1;

                        } else if (writerOrganizationTypeCode == 2) {

                            returnParameterMap['registeredByUserOrganizationId'] = camelMap['writerOrganizationId'];
                            returnParameterMap['registeredByUserOrganizationTypeCode'] = 1;

                        } else if (writerOrganizationTypeCode == 3) {

                            returnParameterMap['registeredByUserOrganizationId'] = camelMap['writerOrganizationId'];
                            returnParameterMap['registeredByUserOrganizationTypeCode'] = 2;
                        }
                    }

                    var searchOption = new SearchOption();
                    if (String.isNotBlank(camelMap['title'])) {
                        searchOption.add(SearchOption.BoardContent.TITLE, camelMap['title']);
                    }
                    if (String.isNotBlank(camelMap['titleOrBody'])) {
                        searchOption.add(SearchOption.BoardContent.TITLE_OR_BODY, camelMap['titleOrBody']);
                    }
                    if (String.isNotBlank(camelMap['body'])) {
                        searchOption.add(SearchOption.BoardContent.BODY, camelMap['body']);
                    }
                    if (String.isNotBlank(camelMap['searchByUserName'])) {
                        searchOption.add(SearchOption.BoardContent.REGISTERED_BY_USER_NAME, camelMap['searchByUserName']);
                    }
                    if (String.isNotBlank(camelMap['searchByUserId'])) {
                        searchOption.add(SearchOption.BoardContent.REGISTERED_BY_USER_ID, camelMap['searchByUserId']);
                    }
                    if (String.isNotBlank(camelMap['startDate'])) {
                        searchOption.add(SearchOption.BoardContent.REGISTERED_DATE_FROM_DATE, camelMap['startDate']);
                    }
                    if (String.isNotBlank(camelMap['endDate'])) {
                        searchOption.add(SearchOption.BoardContent.REGISTERED_DATE_TO_DATE, camelMap['endDate']);
                    }
                    if (String.isNotBlank(camelMap['courseServiceTitle'])) {
                        searchOption.add(SearchOption.BoardContent.COURSE_SERVICE_TITLE, camelMap['courseServiceTitle']);
                    }

                    var searchByCode = map[Triton.BoardList.OptionParameterName.SEARCH_BY_CODE];
                    var searchKeyword = map[Triton.BoardList.OptionParameterName.SEARCH_KEYWORD];

                    if (String.isNotBlank(searchByCode) && String.isNotBlank(searchKeyword)) {
                        searchOption.add(searchByCode, searchKeyword);
                    }

                    if (searchOption.size() > 0) {
                        returnParameterMap['searchOptionList'] = searchOption.get();
                    }

                    // Polaris2 에서 파라미터 값으로 처리하는 부분
                    var typeCode = board.getTypeCode();
                    if (typeCode != undefined)
                        returnParameterMap['boardTypeCode'] = typeCode;

                    returnParameterMap['institutionId'] = data['institution_id'];

                    // 체크 안하는 부분은 null로 변경
                    // @RequestParam(value = "courseCodeId", required = false) Long courseCodeId,
                    // @RequestParam(value = "courseContentId", required = false) Long courseContentId,
                    // @RequestParam(value = "termId", required = false) Long termId,
                    // @RequestParam(value = "organizationId", required = false) Long organizationId,
                    // @RequestParam(value = "courseId", required = false) Long courseId,
                    // @RequestParam(value = "courseSectionId", required = false) Long courseSectionId,
                    // @RequestParam(value = "categoryId", required = false) Long categoryId,
                    var checkParameterList = ['courseCodeId', 'courseContentId', 'termId', 'organizationId', 'courseId', 'courseSectionId', 'categoryId'];
                    for (var key in checkParameterList) {

                        var name = checkParameterList[key];
                        var underscoreName = FormatHelper.toUnderscore(name);
                        if (String.isNotBlank(data[underscoreName])) {
                            returnParameterMap[name] = data[underscoreName];
                        }
                    }


                } else {

                    var searchByCode = map[Triton.BoardList.OptionParameterName.SEARCH_BY_CODE];
                    var searchKeyword = map[Triton.BoardList.OptionParameterName.SEARCH_KEYWORD];
                    if (!String.isBlank(searchKeyword)) {
                        returnParameterMap['searchByCode'] = searchByCode;
                        returnParameterMap['searchKeyword'] = searchKeyword;
                    }

                }
            }


        } else if (type == Triton.Board.UrlType.SET_BOARD_CONTENT_AVAILABILITY) {

            returnParameterMap[idName] = Lia.p(data, idResponseName);
            returnParameterMap['isAvailable'] = (check == Triton.CheckBox.Status.PRESSED) ? 0 : 1;

        } else if (type == Triton.Board.UrlType.SET_BOARD_CONTENTS_AVAILABILITY) {


            var rowList = data;
            var idList = '';
            for (var i = 0, l = rowList.length; i < l; i++) {

                if (String.isNotBlank(idList)) {
                    idList += ',';
                }

                var row = rowList[i];
                var rowOptions = row.getOptions();
                var rowData = Lia.p(rowOptions, 'contentSummary');

                idList += rowData[idResponseName];
            }

            returnParameterMap[idListName] = idList;
            returnParameterMap['isAvailable'] = check;
        }

        if (convertList != undefined) {

            for (var key in convertList) {

                var value = Lia.p(convertList, key);
                var item = Lia.p(data, key);
                if (!String.isBlank(item)) {
                    returnParameterMap[value] = item;
                }
            }
        }


        if (type == Triton.Board.UrlType.GET_BOARD_CONTENT_SUMMARY_LIST) {

            var listRequestParameterMap = board.listRequestParameterMap;
            if (listRequestParameterMap != undefined) {

                for (key in listRequestParameterMap) {
                    returnParameterMap[key] = listRequestParameterMap[key];
                }
            }
        }

        return returnParameterMap;
    });

    Triton.BoardWrite.setFieldList([
        Triton.Board.ValueType.CATEGORY,
        Triton.Board.ValueType.TITLE,
        Triton.Board.ValueType.BODY,
        Triton.Board.ValueType.THUMBNAIL_IMAGE_URL,
        Triton.Board.ValueType.ATTACHMENT,
        Triton.Board.ValueType.IS_ALWAYS_ON_TOP,
        Triton.Board.ValueType.IS_PRIVATE,
        Triton.Board.ValueType.IS_AVAILABLE_EFFECTIVE_DATE
    ]);

    Triton.BoardDetail.setFieldList([
        Triton.Board.ValueType.TITLE_AND_WRITER_AND_REGISTERED_DATE,
        Triton.Board.ValueType.CATEGORY,
        Triton.Board.ValueType.BODY,
        Triton.Board.ValueType.ATTACHMENT,
        Triton.Board.ValueType.THUMBNAIL_IMAGE_URL,
        Triton.Board.ValueType.IS_ALWAYS_ON_TOP,
        Triton.Board.ValueType.IS_PRIVATE,
        Triton.Board.ValueType.IS_AVAILABLE_EFFECTIVE_DATE,
        Triton.Board.ValueType.DELETION_INFO_WHEN_DELETED
    ]);

    try {
        Triton.Board.setRequester(Requester);
    } catch (e) {
    }

    try {
        Triton.Board.setApiUrl(Lia.p(ApiUrl, 'Board'));
    } catch (e) {
    }

    try {

        var categoryCode = UploadedFileCategory.BOARD_ATTACHMENT;0
        if (String.isBlank(categoryCode)) {
            categoryCode = UploadedFileCategory.BOARD_ATTACHMENT_PUBLIC;
        }

        Triton.Board.setUploaderParameterMap({
            // path: 'Data/Polaris/board'
            categoryCode: categoryCode
        });
    } catch (e) {
    }
}


var Tab = Triton.Tab = function (options) {
    this.init(options);
};

Triton.Tab.prototype = new Triton();
Triton.Tab.prototype.init = function (options) {

    var tab = this;

    // 기본 옵션 적용
    options = Triton.combineOptions(options, {
        theme: Triton.Tab.Theme.Normal
    });

    var j = Triton.createJQueryElement(Triton.Tab.HTML);
    j = Triton.applyOptions(j, options);

    var onAddTabButton = tab.onAddTabButton = Lia.pd(function (tab, name) {

        tab.addTabButton({name: name});

    }, options, 'onAddTabButton');

    var onEditTabButton = tab.onEditTabButton = Lia.pd(function (tab, name, j, index, options) {

        tab.setTabName(index, name);

    }, options, 'onEditTabButton');

    var onDeleteTabButton = tab.onDeleteTabButton = Lia.pd(function (tab, j, index, options) {

        j.remove();

    }, options, 'onDeleteTabButton');


    j.find('.button').initButton().on(Lia.Component.Event.STATUS_CHANGED, function (e) {

        if (e.status != Lia.Component.Value.Button.Status.DEFAULT) {

            $(this).find('img').setImageButtonByPressed(true);

        } else {

            $(this).find('img').setImageButtonByPressed(false);

        }
    });


    j.find('.triton_tab_add_button').on('click', function () {

        PopupManager.alertInput('추가', '이름을 입력해 주십시오,', function () {

            var name = $(this).find('input').val();
            if (String.isBlank(name)) {

                PopupManager.alert(Lia.Strings.getString(Lia.Strings.POPUP.TITLE.INFO), '이름을 입력해 주십시오.');
                return false;
            }

            tab.onAddTabButton(tab, name);

        }, function () {
        }, '확인', '취소', '항목 ' + (tab.size() + 1));
    });


    j.find('.triton_tab_list_button').on('click', function (e) {

        var jTabButtonLayout = tab.jTabButtonLayout;

        var manager = new Triton.ContextMenuPopupManager({});
        manager.setBindHandler(function (contextMenuPopupManager, object) {

            var contextMenu = new Triton.ContextMenu({
                theme: Triton.ContextMenu.Theme.ContextMenu.Text
            });
            contextMenu.addOnItemClick(function (item, contextMenu, object) {

                tab.setTabIndex(item['idx']);

            }, object);

            var jChildren = jTabButtonLayout.children();
            for (var i = 0, l = jChildren.length; i < l; i++) {

                contextMenu.add({
                    theme: Triton.ContextMenu.Theme.ContextMenuItem.Text,
                    content: jChildren.eq(i).text(),
                    idx: i
                });

            }
            return contextMenu;
        });
        manager.show($(this), undefined, e)
    });


    j.find('.triton_tab_left_button').on('click', function (e) {

        var size = tab.size();
        var index = tab.getTabIndex();

        tab.setTabIndex((index - 1 + size) % size);

    });

    j.find('.triton_tab_right_button').on('click', function (e) {

        var size = tab.size();
        var index = tab.getTabIndex();

        tab.setTabIndex((index + 1 + size) % size);

    });

    var addButtonHidden = Lia.p(options, 'addButtonHidden');
    if (addButtonHidden == true) j.find('.triton_tab_add_button').hide();

    var listButtonHidden = Lia.p(options, 'listButtonHidden');
    if (listButtonHidden == true) j.find('.triton_tab_list_button').hide();

    var leftButtonHidden = Lia.p(options, 'leftButtonHidden');
    if (leftButtonHidden == true) j.find('.triton_tab_left_button').hide();

    var rightButtonHidden = Lia.p(options, 'rightButtonHidden');
    if (rightButtonHidden == true) j.find('.triton_tab_right_button').hide();


    if (addButtonHidden && listButtonHidden) {
        j.find('.triton_tab_button_layout').css({'left': '0'});
    }

    if (leftButtonHidden && rightButtonHidden) {
        j.find('.triton_tab_button_layout').css({'right': '0'});
    }


    this.readOnly = Lia.p(options, 'readOnly');
    if (this.readOnly) {
        j.find('.triton_tab_add_button').css({'cursor': 'default'}).off();
    }

    this.onBind = Lia.p(options, 'onBind');
    this.onAdd = Lia.p(options, 'onAdd');
    this.jTabButtonLayout = j.find('.triton_tab_button_layout');
    this.count = 0;
    this.jView = j;
    this.initTriton(options);
};


Triton.Tab.prototype.getTabView = function (index) {
    return this.jTabButtonLayout.children().eq(index).data('view');
};

Triton.Tab.prototype.getTabName = function (index) {
    return this.jTabButtonLayout.children().eq(index).text();
};

Triton.Tab.prototype.setTabName = function (index, text) {
    return this.jTabButtonLayout.children().eq(index).text(text);
};

Triton.Tab.prototype.addTabButton = function (options, withoutIndexSetting, withoutEditing) {

    var tab = this;

    // 기본 옵션 적용
    options = Triton.combineOptions(options, {});

    var j = Triton.createJQueryElement(Triton.Tab.HTML_BUTTON);
    j = Triton.applyOptions(j, options);

    var name = options['name'];

    j.html(name);

    if (tab.onAdd != undefined) {

        var view = tab.onAdd(options);
        j.data('view', view);
    }

    j.data('options', options);

    j.on('contextmenu', function (e) {

        e.preventDefault();
        e.stopPropagation();

        if (tab.readOnly)
            return;

        var jTabButtonLayout = tab.jTabButtonLayout;

        var manager = new Triton.ContextMenuPopupManager({});
        manager.setBindHandler(function (contextMenuPopupManager, object) {

            var contextMenu = new Triton.ContextMenu({
                theme: Triton.ContextMenu.Theme.ContextMenu.Text
            });
            contextMenu.addOnItemClick(function (item, contextMenu, object) {

                var index = j.index();
                var options = j.data('options');
                var size = tab.size();

                var idx = item['idx'];
                if (idx == 1) {
                    tab.setTabIndex(index);
                } else if (idx == 2) {

                    PopupManager.alertInput('추가', '이름을 입력해 주십시오,', function () {

                        var name = $(this).find('input').val();
                        if (String.isBlank(name)) {

                            PopupManager.alert(Lia.Strings.getString(Lia.Strings.POPUP.TITLE.INFO), '이름을 입력해 주십시오.');
                            return false;
                        }

                        tab.onEditTabButton(tab, name, j, index, options);

                    }, function () {
                    }, '확인', '취소', j.text());


                } else if (idx == 3) {

                    tab.setTabIndex((index - 1 + size) % size);

                    var options = j.data('options');
                    var view = j.data('view');
                    if (view != undefined)
                        view.remove();

                    tab.onDeleteTabButton(tab, j, index, options);
                }

            }, object);

            contextMenu.add({
                theme: Triton.ContextMenu.Theme.ContextMenuItem.Text,
                content: '선택',
                idx: 1
            });

            if (withoutEditing != true) {

                contextMenu.add({
                    theme: Triton.ContextMenu.Theme.ContextMenuItem.Text,
                    content: '이름 바꾸기',
                    idx: 2
                });
                contextMenu.add({
                    theme: Triton.ContextMenu.Theme.ContextMenuItem.Text,
                    content: '삭제',
                    idx: 3
                });

            }

            return contextMenu;
        });
        manager.show($(this), undefined, e);

    });

    j.on('mousedown', function (e) {

        e.preventDefault();
        e.stopPropagation();

        if (e.which == 1) {

            var index = j.index();
            tab.setTabIndex(index);
        }

    });

    this.jTabButtonLayout.append(j);

    this.count = this.jTabButtonLayout.children().size();

    if (withoutIndexSetting != true) {
        this.setTabIndex(this.count - 1);
    }

};

Triton.Tab.prototype.setTabIndex = function (index, withoutOnBindCall) {

    var tab = this;
    var jChildren = this.jTabButtonLayout.children();

    for (var i = 0, l = jChildren.length; i < l; i++) {

        var jEq = jChildren.eq(i);

        if (i == 0) {

            jEq.css({'border-left': '1px solid #e4e4e4'});

        } else {

            jEq.css({'border-left': '0px'});
        }

        var view = jEq.data('view');

        if (index == i) {

            if (view != undefined)
                view.show();

            jEq.addClass('triton_tab_selected').css({'background-color': '#ffffff'});

        } else {

            if (view != undefined)
                view.hide();

            jEq.removeClass('triton_tab_selected').css({'background-color': 'transparent'});

        }

    }

    if (withoutOnBindCall != true) {

        var jSelected = jChildren.eq(index);
        if (jSelected != undefined) {

            var options = jSelected.data('options');
            var onBind = tab.onBind;
            if (onBind != undefined) {
                onBind(options, index);
            }

            var tabOnBind = Lia.p(options, 'onBind');
            if (tabOnBind != undefined) {
                tabOnBind(options, index);
            }
        }
    }
};


Triton.Tab.prototype.getTabButtonOptionsList = function () {

    var jChildren = this.jTabButtonLayout.children();
    var optionsList = [];

    for (var i = 0, l = jChildren.length; i < l; i++) {

        var jEq = jChildren.eq(i);
        var options = jEq.data('options');
        if (options == undefined) {
            options = {};
        }
        optionsList.push(options);
    }

    return optionsList;
};

Triton.Tab.prototype.getTabButtonOptionsAt = function (index) {

    var jChildren = this.jTabButtonLayout.children();

    var jEq = jChildren.eq(index);
    var options = jEq.data('options');
    if (options == undefined) {
        options = {};
    }
    return options;
};


Triton.Tab.prototype.getTabIndex = function () {
    return this.jTabButtonLayout.children('.triton_tab_selected').index();
};

Triton.Tab.prototype.size = function () {
    return this.count = this.jTabButtonLayout.children().size();
};


Triton.Tab.Theme = {
    Normal: {}
};

Triton.Tab.HTML = '<div class="triton_tab" style="background-color:#f2f6fa;height:49px;position:relative;">' +
    '<div style="position:absolute;border:1px solid #e4e4e4;box-sizing:border-box;left:0px;right:0px;top:0px;bottom:0px;"></div>' +
    '<div style="width:102px;">' +
    '<div class="triton_tab_add_button button" style="position:absolute;left:0;width:50px;height:49px;line-height:49px;border-right:1px solid #e4e4e4;text-align:center;">' +
    '<img lia-src="/res/lia/triton/img/img_list_add.png" src="/res/lia/triton/img/img_list_add.png" style="line-height:49px;vertical-align: middle;" alt="triton tab add button"/>' +
    '</div>' +
    '<div class="triton_tab_list_button button" style="position:absolute;left:51px;width:50px;height:49px;line-height:49px;border-right:1px solid #e4e4e4;text-align:center;">' +
    '<img lia-src="/res/lia/triton/img/img_list_all_view.png"  src="/res/lia/triton/img/img_list_all_view.png" style="line-height:49px;vertical-align: middle;" alt="triton tab list button"/>' +
    '</div>' +
    '</div>' +
    '<div  style="width:102px;position:absolute;right:0;">' +
    '<div class="triton_tab_left_button button" style="position:absolute;left:0;width:50px;height:49px;line-height:49px;border-left:1px solid #e4e4e4;text-align:center;">' +
    '<img lia-src="/res/lia/triton/img/img_list_arrow_left.png" src="/res/lia/triton/img/img_list_arrow_left.png" style="line-height:49px;vertical-align: middle;" alt="triton tab left button"/>' +
    '</div>' +
    '<div class="triton_tab_right_button button" style="position:absolute;left:51px;width:50px;height:49px;line-height:49px;border-left:1px solid #e4e4e4;text-align:center;">' +
    '<img lia-src="/res/lia/triton/img/img_list_arrow_right.png" src="/res/lia/triton/img/img_list_arrow_right.png" style="line-height:49px;vertical-align: middle;" alt="triton tab right button"/>' +
    '</div>' +
    '</div>' +
    '<div class="triton_tab_button_layout" style="position:absolute;right:102px;top:0;left:102px;overflow:hidden;height:49px;padding-left:10px;padding-right:10px;">' +
    '</div>' +

    '</div>';


Triton.Tab.HTML_BUTTON = '<div class="triton_tab_button" style="cursor:pointer;float:left;background-color:#ffffff;height:39px;position:relative;margin-top:10px;' +
    'border-top:1px solid #e4e4e4;border-left:1px solid #e4e4e4;border-right:1px solid #e4e4e4;border-bottom:1px solid #e4e4e4;line-height:39px;padding-left:15px;padding-right:15px;">' +
    '</div>';


// onBind(options, index);

var SubTab = Triton.SubTab = function (options) {
    this.init(options);
};

Triton.SubTab.prototype = new Triton();
Triton.SubTab.prototype.init = function (options) {

    var tab = this;

    // 기본 옵션 적용
    options = Triton.combineOptions(options, {
        theme: Triton.SubTab.Theme.Normal
    });

    var j = Triton.createJQueryElement(Triton.SubTab.HTML);
    j = Triton.applyOptions(j, options);

    this.onBind = Lia.p(options, 'onBind');
    this.onAdd = Lia.p(options, 'onAdd');
    this.jSubTabButtonLayout = j.find('.triton_sub_tab_button_layout');
    this.count = 0;
    this.jView = j;
    this.initTriton(options);
};

Triton.SubTab.prototype.getSubTabView = function (index) {
    return this.jSubTabButtonLayout.children().eq(index).data('view');
};

Triton.SubTab.prototype.addSubTabButton = function (options, withoutIndexSetting) {

    var tab = this;

    // 기본 옵션 적용
    options = Triton.combineOptions(options, {});

    var j = Triton.createJQueryElement(Triton.SubTab.HTML_BUTTON);
    j = Triton.applyOptions(j, options);

    var name = options['name'];
    var flagOptionsCss = Lia.p(options, 'flagOptions', 'css');
    var flagOptionsText = Lia.pd('', options, 'flagOptions', 'text');
    var defaultBackgroundColor = Lia.pd('#ffffff', options, 'defaultBackgroundColor');
    var selectedBackgroundColor = Lia.pd('#f7f7f7', options, 'selectedBackgroundColor');
    var textHide = Lia.pd(false, options, 'textHide');

    // background-color
    j.css({
        'background-color': defaultBackgroundColor
    });

    // flag-css
    var jFlag = j.find('.triton_sub_tab_button_flag');
    if (flagOptionsCss != undefined) {
        jFlag.show();
        jFlag.css(flagOptionsCss);
        jFlag.text(flagOptionsText);
    } else {
        jFlag.hide();
    }

    if (textHide == true) {

        j.find('.triton_sub_tab_button_text').hide();
        j.css({'padding-right': 0});

        jFlag.css({
            'min-width': '18px',
            'height': '16px',
            'margin-top': '7px',
            'line-height': '16px'
        });

    } else {

        j.find('.triton_sub_tab_button_text').html(name);
    }


    if (tab.onAdd != undefined) {

        var view = tab.onAdd(options);
        j.data('view', view);
    }

    j.data('options', options);

    j.on('click', {
        tab: tab
    }, function (e) {

        var tab = e.data.tab;

        e.preventDefault();
        e.stopPropagation();

        var index = j.index();

        tab.setSubTabIndex(index);
    });

    this.jSubTabButtonLayout.append(j);

    this.count = this.jSubTabButtonLayout.children().size();

    if (withoutIndexSetting != true) {
        this.setSubTabIndex(this.count - 1);
    }

};


Triton.SubTab.prototype.applySubTabButtonAt = function (index, options) {

    var jChildren = this.jSubTabButtonLayout.children();
    var j = jChildren.eq(index);

    var name = options['name'];
    var flagOptionsCss = Lia.p(options, 'flagOptions', 'css');
    var flagOptionsText = Lia.pd('', options, 'flagOptions', 'text');

    var jFlag = j.find('.triton_sub_tab_button_flag');
    if (flagOptionsCss != undefined) {
        jFlag.show();
        jFlag.css(flagOptionsCss);
        jFlag.text(flagOptionsText);
    } else {
        jFlag.hide();
    }

    var jText = j.find('.triton_sub_tab_button_text');
    jText.html(name);

    j.data('options', options);

    if (index == this.getSubTabIndex()) {
        this.setSubTabIndex(index, true);
    }
};


Triton.SubTab.prototype.setSubTabIndex = function (index, withoutOnBindCall) {

    var tab = this;
    var jChildren = this.jSubTabButtonLayout.children();

    for (var i = 0, l = jChildren.length; i < l; i++) {

        var jEq = jChildren.eq(i);
        var options = jEq.data('options');
        var defaultBackgroundColor = Lia.pd('#ffffff', options, 'defaultBackgroundColor');
        var selectedBackgroundColor = Lia.pd('#f7f7f7', options, 'selectedBackgroundColor');

        if (i == 0) {

            // jEq.css({'border-left': '1px solid #e4e4e4'});

        } else {

            // jEq.css({'border-left': '0px'});
        }

        var view = jEq.data('view');

        if (index == i) {

            if (view != undefined)
                view.show();

            jEq.addClass('triton_sub_tab_selected').css({
                'background-color': selectedBackgroundColor
                // 'border-bottom': '1px solid ' + selectedBackgroundColor
            });

        } else {

            if (view != undefined)
                view.hide();

            jEq.removeClass('triton_sub_tab_selected').css({
                'background-color': defaultBackgroundColor
                // 'border-bottom': 'none'
            });
        }
    }

    if (withoutOnBindCall != true) {

        var jSelected = jChildren.eq(index);
        if (jSelected != undefined) {

            var options = jSelected.data('options');
            var onBind = tab.onBind;
            if (onBind != undefined) {
                onBind(options, index);
            }

            var tabOnBind = Lia.p(options, 'onBind');
            if (tabOnBind != undefined) {
                tabOnBind(options, index);
            }
        }
    }
};


Triton.SubTab.prototype.getSubTabButtonOptionsList = function () {

    var jChildren = this.jSubTabButtonLayout.children();
    var optionsList = [];

    for (var i = 0, l = jChildren.length; i < l; i++) {

        var jEq = jChildren.eq(i);
        var options = jEq.data('options');
        if (options == undefined) {
            options = {};
        }
        optionsList.push(options);
    }

    return optionsList;
};

Triton.SubTab.prototype.getSubTabButtonOptionsAt = function (index) {

    var jChildren = this.jSubTabButtonLayout.children();

    var jEq = jChildren.eq(index);
    var options = jEq.data('options');
    if (options == undefined) {
        options = {};
    }
    return options;
};


Triton.SubTab.prototype.getSelectedSubTabButtonOptions = function () {

    var index = this.getSubTabIndex();
    if (index != undefined) {
        return this.getSubTabButtonOptionsAt(index);
    }

    return undefined;
};


Triton.SubTab.prototype.getSubTabIndex = function () {
    return this.jSubTabButtonLayout.children('.triton_sub_tab_selected').index();
};

Triton.SubTab.prototype.size = function () {
    return this.count = this.jSubTabButtonLayout.children().size();
};


Triton.SubTab.Theme = {
    Normal: {}
};

Triton.SubTab.HTML = '<div class="triton_sub_tab" style="background-color:#ffffff;position:relative;">' +
    '<div class="triton_sub_tab_button_layout" style="position:relative;right:0px;left:0px;overflow:auto;padding-left:10px;padding-right:10px;">' +
    '</div>' +
    '<div class="triton_sub_tab_border_top" style="position:absolute;box-sizing:border-box;left:0px;right:0px;top:0px;border-top:1px solid #e4e4e4;"></div>' +
    '<div class="triton_sub_tab_border_bottom" style="position:absolute;box-sizing:border-box;left:0px;right:0px;bottom:0px;border-bottom:1px solid #e4e4e4;"></div>' +
    '</div>';


Triton.SubTab.HTML_BUTTON = '<div class="triton_sub_tab_button" style="cursor:pointer;float:left;background-color:#ffffff;height:30px;position:relative;' +
    'border:1px solid #e4e4e4;line-height:30px;padding-left:10px;padding-right:10px;overflow:auto;margin-left:-1px;margin-top:-1px;">' +
    '<div class="triton_sub_tab_button_flag" style="display:none;min-width:12px;height:12px;line-height:12px;float:left;margin-top: 9px;margin-right: 8px;font-size: 12px;text-align: center;font-family:notokr-medium, NanumGothicBold;"></div>' +
    '<div class="triton_sub_tab_button_text" style="float:left;font-family: notokr-medium, NanumGothicBold;font-size:13px;color:#5d5d5d;"></div>' +
    '</div>';


// 검색 된 내용 선택 컴포넌트
// fieldList : [ {  'headerContent', 'css', 'itemKey  } ... ]
var SelectionSection = Triton.SelectionSection = function (options) {
    this.init(options);
};

Triton.SelectionSection.prototype = new Triton();
Triton.SelectionSection.prototype.init = function (options) {

    var selectionSection = this;

    var fieldList = selectionSection.fieldList = Lia.pd(Triton.SelectionSection.fieldList, options, 'fieldList');
    var leftTitle = Lia.pd('검색 된 사용자', options, 'leftTitle');
    var rightTitle = Lia.pd('추가 될 사용자', options, 'rightTitle');

    var leftPanelWidth = Lia.pd('45%', options, 'leftPanelWidth');
    var rightPanelWidth = Lia.pd('45%', options, 'rightPanelWidth');
    var buttonPanelWidth = Lia.pd('10%', options, 'buttonPanelWidth');

    var totalMoveButton = Lia.pd(false, options, 'totalMoveButton');
    var moveXButton = Lia.pd(false, options, 'moveXButton');

    var allCheckedFlag = this.allCheckedFlag = Lia.pd(false, options, 'allCheckedFlag');

    var sepTable = new Triton.SeparateTable({
        css: {height: '300px'}
    });
    sepTable.appendRow({});

    sepTable.appendColumn({
        attr: {valign: 'middle', 'align': 'center'},
        css: {'width': leftPanelWidth}
    });
    sepTable.appendItem(new Triton.Section({
        content: leftTitle,
        css: {'margin-bottom': '10px'}
    }));

    {
        sepTable.appendItem(
            selectionSection.leftSection = new Triton.Section({
                content: '',
                theme: Triton.Section.Theme.Square,
                css: {'width': '100%', 'height': '300px', 'overflow-y': 'scroll'}
            })
        );

        selectionSection.leftTable = new Triton.ListTable({
            appendTo: selectionSection.leftSection
        });

        selectionSection.leftTable.appendHeaderRow({
            css: {
                'border-right': 'none',
                'border-left': 'none'
            }
        });

        selectionSection.leftTable.appendHeaderColumn({
            content: new Triton.CheckBox({
                addClass: 'triton_selection_section_all_checkbox',
                onChecked: function (val) {

                    selectionSection.leftTable.find('.triton_selection_section_checkbox').each(function () {
                        $(this).getTriton().setValue(val);
                    });
                }
            }), css: {width: '40px'}
        });


        selectionSection.leftMessage = new Triton.Section({
            appendTo: selectionSection.leftSection,
            content: '표시할 내역이 없습니다.',
            css: {
                'line-height': '259px'
            }
        });
    }


    sepTable.appendColumn({
        css: {'width': buttonPanelWidth},
        attr: {valign: 'middle', 'align': 'center'}
    });
    sepTable.appendItem($('<img class="image_button press" src="/res/lia/triton/img/btn_right.png" style="display:block;" alt="image button press"/>').initImageButton().click(function () {

        selectionSection.leftTable.find('.triton_selection_section_checkbox').each(function () {

            var triton = $(this).getTriton();
            if (triton.getPressed()) {

                var options = triton.getOptions();
                var item = options['item'];

                triton.closest('tr').remove();

                selectionSection.appendItemToRightTable(item);
            }

            if (selectionSection.leftTable.find('.triton_selection_section_row').length == 0) {
                selectionSection.leftMessage.show();
            }

        });

        selectionSection.checkLeftTableCheckBox();
        selectionSection.checkRightTableCheckBox();

    }));
    sepTable.appendItem($('<img class="image_button press"  src="/res/lia/triton/img/btn_left.png" style="display:block;margin-top:10px;" alt="image button press"/>').initImageButton().click(function () {

        selectionSection.rightTable.find('.triton_selection_section_checkbox').each(function () {

            var triton = $(this).getTriton();
            if (triton.getPressed()) {
                var options = triton.getOptions();
                var item = options['item'];

                triton.closest('tr').remove();

                selectionSection.appendItemToLeftTable(item);

            }
        });

        if (selectionSection.rightTable.find('.triton_selection_section_row').length == 0) {
            selectionSection.rightMessage.show();
        }

        selectionSection.checkLeftTableCheckBox();
        selectionSection.checkRightTableCheckBox();

    }));


    if (totalMoveButton == true) {

        var tempSection = new Triton.Section({});
        sepTable.appendItem(tempSection);
        new Triton.FlatButton({
            appendTo: tempSection,
            theme: Triton.FlatButton.Theme.Square,
            content: '전체 이동 ▶',
            css: {
                'margin-top': '10px'
            },
            onClick: function () {

                selectionSection.leftTable.find('.triton_selection_section_checkbox').each(function () {

                    var triton = $(this).getTriton();
                    var options = triton.getOptions();
                    var item = options['item'];

                    triton.closest('tr').remove();

                    selectionSection.appendItemToRightTable(item);
                    if (selectionSection.leftTable.find('.triton_selection_section_row').length == 0) {
                        selectionSection.leftMessage.show();
                    }
                });

                selectionSection.checkLeftTableCheckBox();
                selectionSection.checkRightTableCheckBox();
            }
        });

        tempSection = new Triton.Section({});
        sepTable.appendItem(tempSection);
        new Triton.FlatButton({
            appendTo: tempSection,
            theme: Triton.FlatButton.Theme.Square,
            content: '◀ 전체 이동',
            css: {
                'margin-top': '10px'
            },
            onClick: function () {

                selectionSection.rightTable.find('.triton_selection_section_checkbox').each(function () {

                    var triton = $(this).getTriton();
                    var options = triton.getOptions();
                    var item = options['item'];

                    triton.closest('tr').remove();

                    selectionSection.appendItemToLeftTable(item);

                });

                if (selectionSection.rightTable.find('.triton_selection_section_row').length == 0) {
                    selectionSection.rightMessage.show();
                }

                selectionSection.checkLeftTableCheckBox();
                selectionSection.checkRightTableCheckBox();
            }
        });
    }

    if (moveXButton == true) {

        var tempSection = new Triton.Section({});
        sepTable.appendItem(tempSection);
        new Triton.FlatButton({
            appendTo: tempSection,
            theme: Triton.FlatButton.Theme.Square,
            content: '홀수 이동 ▶',
            css: {
                'margin-top': '10px'
            },
            onClick: function () {

                selectionSection.leftTable.find('.triton_selection_section_checkbox').each(function (index) {

                    var triton = $(this).getTriton();
                    if (index % 2 == 0) {

                        var options = triton.getOptions();
                        var item = options['item'];

                        triton.closest('tr').remove();

                        selectionSection.appendItemToRightTable(item);
                    }

                    if (selectionSection.leftTable.find('.triton_selection_section_row').length == 0) {
                        selectionSection.leftMessage.show();
                    }

                });

                selectionSection.checkLeftTableCheckBox();
                selectionSection.checkRightTableCheckBox();
            }
        });

        tempSection = new Triton.Section({});
        sepTable.appendItem(tempSection);
        new Triton.FlatButton({
            appendTo: tempSection,
            theme: Triton.FlatButton.Theme.Square,
            content: '짝수 이동 ▶',
            css: {
                'margin-top': '10px'
            },
            onClick: function () {

                selectionSection.leftTable.find('.triton_selection_section_checkbox').each(function (index) {

                    var triton = $(this).getTriton();
                    if (index % 2 == 1) {

                        var options = triton.getOptions();
                        var item = options['item'];

                        triton.closest('tr').remove();

                        selectionSection.appendItemToRightTable(item);
                    }

                    if (selectionSection.leftTable.find('.triton_selection_section_row').length == 0) {
                        selectionSection.leftMessage.show();
                    }

                });

                selectionSection.checkLeftTableCheckBox();
                selectionSection.checkRightTableCheckBox();
            }
        });


        tempSection = new Triton.Section({});
        sepTable.appendItem(tempSection);
        new Triton.FlatButton({
            appendTo: tempSection,
            theme: Triton.FlatButton.Theme.Square,
            content: '1/3 이동 ▶',
            css: {
                'margin-top': '10px'
            },
            onClick: function () {

                selectionSection.leftTable.find('.triton_selection_section_checkbox').each(function (index) {

                    var triton = $(this).getTriton();
                    if (index % 3 == 0) {

                        var options = triton.getOptions();
                        var item = options['item'];

                        triton.closest('tr').remove();

                        selectionSection.appendItemToRightTable(item);
                    }

                    if (selectionSection.leftTable.find('.triton_selection_section_row').length == 0) {
                        selectionSection.leftMessage.show();
                    }

                });

                selectionSection.checkLeftTableCheckBox();
                selectionSection.checkRightTableCheckBox();

            }
        });

        tempSection = new Triton.Section({});
        sepTable.appendItem(tempSection);
        new Triton.FlatButton({
            appendTo: tempSection,
            theme: Triton.FlatButton.Theme.Square,
            content: '1/4 이동 ▶',
            css: {
                'margin-top': '10px'
            },
            onClick: function () {

                selectionSection.leftTable.find('.triton_selection_section_checkbox').each(function (index) {

                    var triton = $(this).getTriton();
                    if (index % 5 == 0) {

                        var options = triton.getOptions();
                        var item = options['item'];

                        triton.closest('tr').remove();

                        selectionSection.appendItemToRightTable(item);
                    }

                    if (selectionSection.leftTable.find('.triton_selection_section_row').length == 0) {
                        selectionSection.leftMessage.show();
                    }

                });

                selectionSection.checkLeftTableCheckBox();
                selectionSection.checkRightTableCheckBox();
            }
        });
    }

    sepTable.appendColumn({
        attr: {valign: 'middle', 'align': 'center'},
        css: {'width': rightPanelWidth}
    });

    sepTable.appendItem(new Triton.Section({
        content: rightTitle,
        css: {'margin-bottom': '10px'}
    }));

    sepTable.appendItem(new Triton.Section({
        content: selectionSection.rightSection = new Triton.Section({
            content: '',
            theme: Triton.Section.Theme.Square,
            css: {'width': '100%', 'height': '300px', 'overflow-y': 'scroll'}
        })
    }));

    selectionSection.rightTable = new Triton.ListTable({
        appendTo: selectionSection.rightSection
    });

    selectionSection.rightTable.appendHeaderRow({
        css: {
            'border-right': 'none',
            'border-left': 'none'
        }
    });

    selectionSection.rightTable.appendHeaderColumn({
        content: new Triton.CheckBox({
            addClass: 'triton_selection_section_all_checkbox',
            pressed: (allCheckedFlag) ? true : false,
            onChecked: function (val) {
                selectionSection.rightTable.find('.triton_selection_section_checkbox').each(function () {
                    $(this).getTriton().setValue(val, true);
                });
            }
        }), css: {width: '40px'}
    });

    selectionSection.rightMessage = new Triton.Section({
        appendTo: selectionSection.rightSection,
        content: '표시할 내역이 없습니다.',
        css: {
            'line-height': '259px'
        }
    });


    for (var i in fieldList) {

        var item = fieldList[i];

        var content = item['headerContent'];
        var css = item['css'];
        var viewType = Lia.pd(Triton.SelectionSection.ViewType.DEFAULT, item['viewType']);

        if (viewType == Triton.SelectionSection.ViewType.DEFAULT) {

            selectionSection.leftTable.appendHeaderColumn({
                content: new Triton.FlagSpan({
                    code: i,
                    theme: Triton.FlagSpan.Theme.OrderBy,
                    content: content,
                    onClick: function (e) {


                        var options = $(this).getTriton().getOptions();
                        var code = options['code'];

                        if (selectionSection.leftOrderByCode == code && selectionSection.leftOrderByType == 'desc') {
                            selectionSection.leftOrderByCode = code;
                            selectionSection.leftOrderByType = 'asc';
                        } else {
                            selectionSection.leftOrderByCode = code;
                            selectionSection.leftOrderByType = 'desc';
                        }

                        selectionSection.refreshByOrderCode();

                    }
                }), css: css
            });
        }

        selectionSection.rightTable.appendHeaderColumn({
            content: new Triton.FlagSpan({
                code: i,
                theme: Triton.FlagSpan.Theme.OrderBy,
                content: content,
                onClick: function (e) {

                    var options = $(this).getTriton().getOptions();
                    var code = options['code'];

                    if (selectionSection.rightOrderByCode == code && selectionSection.rightOrderByType == 'desc') {
                        selectionSection.rightOrderByCode = code;
                        selectionSection.rightOrderByType = 'asc';
                    } else {
                        selectionSection.rightOrderByCode = code;
                        selectionSection.rightOrderByType = 'desc';
                    }

                    selectionSection.refreshByOrderCode();

                }
            }), css: css
        });

    }


    this.jView = sepTable.get();
    this.initTriton(options);
};


Triton.SelectionSection.prototype.checkLeftTableCheckBox = function () {

    var page = this;

    // 초기화
    var allChecked = 1;

    var jCheckbox = page.leftTable.find('.triton_selection_section_checkbox');
    if (jCheckbox.length == 0) {
        allChecked = 0;
    } else {

        jCheckbox.each(function () {

            if (!$(this).getTriton().getValue()) {
                allChecked = 0;
            }
        });
    }

    page.leftTable.find('.triton_selection_section_all_checkbox').getTriton().setValue(allChecked, true);
};

Triton.SelectionSection.prototype.checkRightTableCheckBox = function () {

    var page = this;
    var allChecked = 1;
    var jCheckbox = page.rightTable.find('.triton_selection_section_checkbox');
    if (jCheckbox.length == 0) {
        allChecked = 0;
    } else {

        jCheckbox.each(function () {

            if (!$(this).getTriton().getValue()) {
                allChecked = 0;
            }
        });
    }

    page.rightTable.find('.triton_selection_section_all_checkbox').getTriton().setValue(allChecked, true);
};


Triton.SelectionSection.prototype.refreshByOrderCode = function () {

    var page = this;

    var jLeftTableRowList = page.leftTable.find('.triton_selection_section_row');
    var jRightTableRowList = page.rightTable.find('.triton_selection_section_row');

    var jLeftOrderedRowList = [];
    var jRightOrderedRowList = [];

    for (var i = 0, l = jLeftTableRowList.length; i < l; i++) {
        jLeftOrderedRowList.push(jLeftTableRowList.eq(i));
    }

    for (var i = 0, l = jRightTableRowList.length; i < l; i++) {
        jRightOrderedRowList.push(jRightTableRowList.eq(i));
    }

    if (page.leftOrderByCode != undefined) {

        // left table
        for (var i = 0, l = jLeftOrderedRowList.length; i < l; i++) {

            for (var j = i + 1; j < l; j++) {

                var jRow1 = jLeftOrderedRowList[i];
                var jRow2 = jLeftOrderedRowList[j];

                var row1Triton = jRow1.getTriton();
                var row2Triton = jRow2.getTriton();

                var row1Option = row1Triton.getOptions();
                var row2Option = row2Triton.getOptions();

                var row1Item = row1Option['item'];
                var row2Item = row2Option['item'];

                var code = page.leftOrderByCode;
                var type = page.leftOrderByType;

                var viewType = Lia.pd(Triton.SelectionSection.ViewType.DEFAULT, page.fieldList[code]['viewType']);

                var row1Content = undefined;
                var row2Content = undefined;


                if (viewType == Triton.SelectionSection.ViewType.DEFAULT) {

                    row1Content = row1Item[page.fieldList[code]['itemKey']];
                    row2Content = row2Item[page.fieldList[code]['itemKey']];

                    var getItemString = page.fieldList[code]['getItemString'];

                    if (getItemString != undefined) {

                        row1Content = getItemString(row1Content);
                        row2Content = getItemString(row2Content);
                    }

                } else if (viewType == Triton.SelectionSection.ViewType.RIGHT_SIDE_COMBO_BOX) {

                    row1Content = Lia.p(Triton.extractFormData(jRow1), page.fieldList[code]['itemKey']);
                    row2Content = Lia.p(Triton.extractFormData(jRow2), page.fieldList[code]['itemKey']);

                    var getItemString = page.fieldList[code]['getItemString'];

                    if (getItemString != undefined) {

                        row1Content = getItemString(row1Content);
                        row2Content = getItemString(row2Content);
                    }
                }

                if (type == 'asc') {

                    if (row1Content > row2Content) {

                        jLeftOrderedRowList[i] = jRow2;
                        jLeftOrderedRowList[j] = jRow1;

                    }

                } else { // desc

                    if (row1Content < row2Content) {

                        jLeftOrderedRowList[i] = jRow2;
                        jLeftOrderedRowList[j] = jRow1;
                    }

                }

            }
        }

        for (var i = 0, l = jLeftOrderedRowList.length; i < l; i++) {

            var triton = jLeftOrderedRowList[i].getTriton();
            page.leftTable.append(jLeftOrderedRowList[i]);
            jLeftOrderedRowList[i].data('triton-instance', triton);
        }

    }


    if (page.rightOrderByCode != undefined) {

        // right table

        for (var i = 0, l = jRightOrderedRowList.length; i < l; i++) {

            for (var j = i + 1; j < l; j++) {

                var jRow1 = jRightOrderedRowList[i];
                var jRow2 = jRightOrderedRowList[j];

                var row1Triton = jRow1.getTriton();
                var row2Triton = jRow2.getTriton();

                var row1Option = row1Triton.getOptions();
                var row2Option = row2Triton.getOptions();

                var row1Item = row1Option['item'];
                var row2Item = row2Option['item'];

                var code = page.rightOrderByCode;
                var type = page.rightOrderByType;

                var viewType = Lia.pd(Triton.SelectionSection.ViewType.DEFAULT, page.fieldList[code]['viewType']);

                var row1Content = undefined;
                var row2Content = undefined;

                if (viewType == Triton.SelectionSection.ViewType.DEFAULT) {

                    row1Content = row1Item[page.fieldList[code]['itemKey']];
                    row2Content = row2Item[page.fieldList[code]['itemKey']];

                    var getItemString = page.fieldList[code]['getItemString'];

                    if (getItemString != undefined) {

                        row1Content = getItemString(row1Content);
                        row2Content = getItemString(row2Content);
                    }

                } else if (viewType == Triton.SelectionSection.ViewType.RIGHT_SIDE_COMBO_BOX) {

                    row1Content = Lia.p(Triton.extractFormData(jRow1), page.fieldList[code]['itemKey']);
                    row2Content = Lia.p(Triton.extractFormData(jRow2), page.fieldList[code]['itemKey']);

                    var getItemString = page.fieldList[code]['getItemString'];

                    if (getItemString != undefined) {

                        row1Content = getItemString(row1Content);
                        row2Content = getItemString(row2Content);
                    }

                } else if (viewType == Triton.SelectionSection.ViewType.RIGHT_SIDE_CHECK_BOX) {

                    row1Content = Lia.p(Triton.extractFormData(jRow1), page.fieldList[code]['itemKey']);
                    row2Content = Lia.p(Triton.extractFormData(jRow2), page.fieldList[code]['itemKey']);

                    var getItemString = page.fieldList[code]['getItemString'];

                    if (getItemString != undefined) {

                        row1Content = getItemString(row1Content);
                        row2Content = getItemString(row2Content);
                    }
                }


                if (type == 'asc') {

                    if (row1Content > row2Content) {

                        jRightOrderedRowList[i] = jRow2;
                        jRightOrderedRowList[j] = jRow1;

                    }

                } else { // desc

                    if (row1Content < row2Content) {

                        jRightOrderedRowList[i] = jRow2;
                        jRightOrderedRowList[j] = jRow1;
                    }

                }

            }
        }

        for (var i = 0, l = jRightOrderedRowList.length; i < l; i++) {

            var triton = jRightOrderedRowList[i].getTriton();
            page.rightTable.append(jRightOrderedRowList[i]);
            jRightOrderedRowList[i].data('triton-instance', triton);
        }

    }


};


Triton.SelectionSection.prototype.clearLeftTable = function () {

    var page = this;
    page.leftTable.find('.triton_selection_section_row').remove();
    page.leftMessage.show();
};

Triton.SelectionSection.prototype.clearRightTable = function () {

    var page = this;
    page.rightTable.find('.triton_selection_section_row').remove();
    page.rightMessage.show();
};


Triton.SelectionSection.prototype.clear = function () {

    var page = this;
    page.clearLeftTable();
    page.clearRightTable();
};

Triton.SelectionSection.prototype.clear = function () {

    var page = this;
    page.leftTable.find('.triton_selection_section_row').remove();
    page.leftMessage.show();

    page.rightTable.find('.triton_selection_section_row').remove();
    page.rightMessage.show();
};


Triton.SelectionSection.prototype.appendItemToLeftTable = function (item) {

    var page = this;
    var searchedTable = page.leftTable;
    page.leftMessage.hide();

    searchedTable.appendRow({
        item: item,
        addClass: 'triton_selection_section_row',
        css: {
            'border-right': 'none',
            'border-left': 'none'
        },
        onClick: function () {
            $(this).find('.triton_selection_section_checkbox').trigger('click');
        }
    });
    searchedTable.appendColumn({
        content: new Triton.CheckBox({
            addClass: 'triton_selection_section_checkbox',
            item: item,
            onChecked: function () {
                page.checkLeftTableCheckBox();
            }
        })
    });

    var fieldList = page.fieldList;

    for (var i in fieldList) {

        var fieldListItem = fieldList[i];

        var css = fieldListItem['css'];
        var itemKey = fieldListItem['itemKey'];
        var viewType = Lia.pd(Triton.SelectionSection.ViewType.DEFAULT, fieldListItem['viewType']);
        if (viewType == Triton.SelectionSection.ViewType.DEFAULT) {

            var content = item[itemKey];
            if (content == undefined) {
                content = '-';
            }

            var getItemString = fieldListItem['getItemString'];

            if (getItemString != undefined) {

                content = getItemString(content);
            }

            searchedTable.appendColumn({
                content: content
            });
        }
    }

};


Triton.SelectionSection.prototype.setItemListToLeftTable = function (itemList) {

    var page = this;
    var searchedTable = page.leftTable;

    searchedTable.find('.triton_selection_section_row').remove();

    if (itemList != undefined && itemList.length > 0) {

        page.leftMessage.hide();

        for (var i in itemList) {

            var item = itemList[i];
            page.appendItemToLeftTable(item);
        }


    } else {
        page.leftMessage.show();
    }


};


Triton.SelectionSection.prototype.appendItemToRightTable = function (item) {

    var page = this;
    var searchedTable = page.rightTable;
    page.rightMessage.hide();

    searchedTable.appendRow({
        item: item,
        addClass: 'triton_selection_section_row',
        css: {
            'border-right': 'none',
            'border-left': 'none'
        },
        onClick: function () {
            $(this).find('.triton_selection_section_checkbox').trigger('click');
        }
    });
    searchedTable.appendColumn({
        content: new Triton.CheckBox({
            addClass: 'triton_selection_section_checkbox',
            pressed: (this.allCheckedFlag) ? true : false,
            item: item,
            onChecked: function () {
                page.checkRightTableCheckBox();
            }
        })
    });

    var fieldList = page.fieldList;

    for (var i in fieldList) {

        var fieldListItem = fieldList[i];

        var css = fieldListItem['css'];
        var itemKey = fieldListItem['itemKey'];
        var viewType = Lia.pd(Triton.SelectionSection.ViewType.DEFAULT, fieldListItem['viewType']);

        if (viewType == Triton.SelectionSection.ViewType.RIGHT_SIDE_COMBO_BOX) {

            var value = Lia.p(item, itemKey);

            var comboBoxOptionList = undefined;
            var optionList = fieldListItem['optionList'];
            if (typeof optionList == 'function') {
                comboBoxOptionList = optionList(fieldListItem);
            } else {
                comboBoxOptionList = optionList;
            }

            searchedTable.appendColumn({
                content: new Triton.ComboBox({
                    form: {name: itemKey},
                    css: {
                        width: '100%'
                    },
                    onClick: function (e) {
                        e.stopPropagation();
                        e.preventDefault();
                    },
                    optionList: comboBoxOptionList,
                    selectedValue: value
                })
            });

        } else if (viewType == Triton.SelectionSection.ViewType.RIGHT_SIDE_CHECK_BOX) {

            var value = Lia.p(item, itemKey);

            searchedTable.appendColumn({
                content: new Triton.CheckBox({
                    form: {name: itemKey},
                    onClick: function (e) {
                        e.stopPropagation();
                        e.preventDefault();
                    },
                    status: value
                })
            });

        } else if (viewType == Triton.SelectionSection.ViewType.DEFAULT) {

            var content = item[itemKey];
            if (content == undefined) {
                content = '-';
            }

            var getItemString = fieldListItem['getItemString'];

            if (getItemString != undefined) {

                content = getItemString(content);
            }

            searchedTable.appendColumn({
                content: content
            });

        }

    }
};

Triton.SelectionSection.prototype.getSelectedItemList = function () {

    var page = this;
    var selectedItemList = [];

    var jRowList = page.rightTable.find('.triton_selection_section_row');

    for (var i = 0, l = jRowList.length; i < l; i++) {

        var jRow = jRowList.eq(i);

        var item = Lia.p(jRow.getTriton().getOptions(), 'item');

        var formData = Triton.extractFormData(jRow);
        item = Lia.combine(Lia.deepCopy(item), formData);
        selectedItemList.push(item);
    }

    return selectedItemList;
};

Triton.SelectionSection.ViewType = {
    DEFAULT: 0,
    RIGHT_SIDE_COMBO_BOX: 1,
    RIGHT_SIDE_CHECK_BOX: 2
};

Triton.SelectionSection.Field = {

    Name: {
        headerContent: '이름',
        itemKey: 'name',
        css: {'width': '15%'}
    },
    Id: {
        headerContent: '아이디',
        itemKey: 'id'
    },
    PhoneNumber: {
        headerContent: '전화번호',
        itemKey: 'mobile_phone_number'
    },
    AdvisorName: {
        headerContent: '담당자',
        itemKey: 'academic_adviser_user_name'
    },

    Role: {
        headerContent: '권한',
        itemKey: 'role_code'
    }
};


Triton.SelectionSection.fieldList = [
    Triton.SelectionSection.Field.Name,
    Triton.SelectionSection.Field.Id,
    Triton.SelectionSection.Field.PhoneNumber
];

Triton.SelectionSection.setFieldList = function (list) {
    Triton.SelectionSection.fieldList = list;
};


var QuickMenu = Triton.QuickMenu = {

    init: function (options) {

        var appendTo = Triton.QuickMenu.appendTo = Lia.p(options, 'appendTo');

        appendTo.css({'position': 'fixed', 'bottom': '30px', 'right': '190px', 'width': '75px', 'opacity': '0.25'});

        appendTo.on('mouseleave', function (e) {

            e.stopPropagation();
            e.preventDefault();

            var jThis = $(this);
            jThis.stop().animate({
                'opacity': '0.25'
            });
        }).on('mouseenter', function (e) {

            e.stopPropagation();
            e.preventDefault();

            var jThis = $(this);
            jThis.stop().animate({
                'opacity': '1'
            });
        });

        Triton.QuickMenu.quickMenuSection = new Triton.Section({
            appendTo: appendTo,
            css: {
                'background-color': '#F7F7F7',
                'border-radius': '15px',
                'border': '1px solid #e1e1e1',
                'padding': '15px 10px',
                'display': 'none'
            }
        });

        var quickMenuButtonSection = Triton.QuickMenu.quickMenuButtonSection = new Triton.Section({
            appendTo: appendTo,
            css: {'margin-top': '5px', 'text-align': 'center', 'cursor': 'pointer', 'width': '100%'}
        });


        quickMenuButtonSection.get().on('mousedown', {}, function (e) {

            e.stopPropagation();
            e.preventDefault();

            var jThis = $(this);
            jThis.data('ON', 'ON');

            jThis.data('base-page-x', e.pageX);
            jThis.data('base-page-y', e.pageY);

            jThis.data('base-popup-x', parseInt(appendTo.css('right')));
            jThis.data('base-popup-y', parseInt(appendTo.css('bottom')));

        }).on('mousemove', {}, function (e) {

            e.stopPropagation();
            e.preventDefault();

            var jThis = $(this);
            if (String.isNullOrWhitespace(jThis.data('ON')))
                return;

            appendTo.css({
                right: parseInt(jThis.data('base-popup-x')) + parseInt(jThis.data('base-page-x')) - e.pageX,
                bottom: parseInt(jThis.data('base-popup-y')) + parseInt(jThis.data('base-page-y')) - e.pageY
            });

        }).on('mouseup', {}, function (e) {

            e.stopPropagation();
            e.preventDefault();

            var jThis = $(this);
            jThis.data('ON', '');

            var dx = parseInt(jThis.data('base-page-x')) - e.pageX;
            var dy = parseInt(jThis.data('base-page-y')) - e.pageY;

            if (dx * dx + dy * dy < 10) {
                Triton.QuickMenu.toggleQuickMenuList();
            }
        });

        Triton.QuickMenu.quickMenuListButton = new Triton.Image({
            appendTo: quickMenuButtonSection,
            attr: {'src': '/res/lia/triton/img/quick_menu/btn_quickmenu.png'},
            onClick: function (e) {
                e.stopPropagation();
            }
        });

        Triton.QuickMenu.quickMenuHideButton = new Triton.Image({
            appendTo: quickMenuButtonSection,
            attr: {'src': '/res/lia/triton/img/quick_menu/btn_close.png'},
            css: {'display': 'none'},
            onClick: function (e) {
                e.stopPropagation();
            }
        });


        Triton.QuickMenu.shown = false;
    },

    hideQuickMenuList: function () {

        Triton.QuickMenu.quickMenuSection.hide();
        Triton.QuickMenu.quickMenuHideButton.hide();
        Triton.QuickMenu.quickMenuListButton.show();

        Triton.QuickMenu.shown = false;
    },


    toggleQuickMenuList: function () {

        if (Triton.QuickMenu.shown) {
            Triton.QuickMenu.hideQuickMenuList();
        } else {
            Triton.QuickMenu.showQuickMenuList();
        }

    },

    showQuickMenuList: function () {

        Triton.QuickMenu.quickMenuSection.show();
        Triton.QuickMenu.quickMenuHideButton.show();
        Triton.QuickMenu.quickMenuListButton.hide();

        Triton.QuickMenu.shown = true;
    },

    add: function (item) {


        var text = Lia.p(item, 'text');
        var onClick = Lia.p(item, 'onClick');
        var menu = Lia.p(item, 'menu');
        var menuParameterMap = Lia.p(menu, 'menuParameterMap');

        var logoImageUrl = Lia.p(item, 'logoImageUrl');
        var pressedLogoImageUrl = Lia.p(item, 'pressedLogoImageUrl');

        var jItem = $('<div style="cursor:pointer;width:100%;text-align:center;">' +
            '<div style="width:100%;text-align:center;""><img src="' + logoImageUrl + '"  alt="file upload"/></div>' +
            '<div style="width:100%;text-align:center;font-size:13px;rgb(93, 93, 93);font-family: notokr-regular, NanumGothic;">' + text + '</div>' +
            '</div>').initButton().on(Lia.Component.Event.STATUS_CHANGED, {
                logoImageUrl: logoImageUrl,
                pressedLogoImageUrl: pressedLogoImageUrl
            },
            function (e) {

                var jThis = $(this);

                if (e.status != Lia.Component.Value.Button.Status.DEFAULT) {

                    jThis.find('img').attr('src', e.data.pressedLogoImageUrl);
                    jThis.find('div').css({
                        color: 'rgb(8, 72, 151)',
                        'font-family': 'notokr-medium, NanumGothicBold'
                    });

                } else {

                    jThis.find('img').attr('src', e.data.logoImageUrl);
                    jThis.find('div').css({
                        color: 'rgb(93, 93, 93)',
                        'font-family': 'notokr-regular, NanumGothic'
                    });
                }
            });

        jItem.on('click', {
            menu: menu,
            menuParameterMap: menuParameterMap,
            onClick: onClick
        }, function (e) {

            var menu = e.data.menu;
            var menuParameterMap = e.data.menuParameterMap;
            if (menu != undefined) {
                jQuery.PageManager.go(menu, menuParameterMap);
            }

            var onClick = e.data.onClick;
            if (onClick != undefined) {
                onClick();
            }

            Triton.QuickMenu.hideQuickMenuList();
        });


        if (Triton.QuickMenu.quickMenuSection.children().length > 0) {
            Triton.QuickMenu.quickMenuSection.append('<div style="border-bottom:1px solid rgb(225, 225, 225);width:100%;margin-top:10px;margin-bottom:10px;"></div>');

        }


        Triton.QuickMenu.quickMenuSection.append(jItem);
    }
};


var BoardDetail2 = Triton.BoardDetail2 = function (options) {
    this.init(options);
};
Triton.BoardDetail2.prototype = new Triton.Board();
Triton.BoardDetail2.prototype.init = function (options) {

    //this.leftButtonSection = undefined;
    //this.rightButtonSection = undefined;
    //this.categoryOptionList = undefined;
    //this.typeCode = undefined;
    //this.boardContentId = undefined;
    //this.boardContent = undefined;
    //this.boardContentCategory = undefined;
    //his.targetBoardId = undefined;

    this.moduleTypeCode = Triton.Board.ModuleType.BOARD_DETAIL;
    this.options = options;
    this.parameterMap = Lia.p(options, 'parameterMap');
    this.targetBoardId = this.boardId = Lia.p(options, 'targetBoardId');
    this.boardContentId = Lia.p(options, 'boardContentId');
    this.sectionTypeList = Lia.pd(Triton.BoardDetail2.sectionTypeList, options, 'sectionTypeList');
    this.isEditable = Lia.pd(true, options, 'isEditable');
    this.baseRequestParameterMap = Lia.p(options, 'baseRequestParameterMap');

    // TODO COMMENT 쪽 fieldlist로 빼야함
    this.unuseComment = Lia.p(options, 'unuseComment');
    this.useShowOnCmsOnlyComment = Lia.p(options, 'useShowOnCmsOnlyComment');
    this.cmsOnlyCommentDefaultChecked = Lia.p(options, 'cmsOnlyCommentDefaultChecked');
    this.useCommentUploader = Lia.p(options, 'useCommentUploader');
    this.commentUploaderParameterMap = Lia.pd(Triton.Board.uploaderParmaeterMap, options, 'commentUploaderParameterMap');
    this.commentWriteBaseRequestParameterMap = Lia.p(options, 'commentWriteBaseRequestParameterMap');

    this.onLoaded = Lia.p(options, 'onLoaded');
    this.requester = Lia.pd(Triton.Board.requester, options, 'requester');
    if (this.requester == undefined) {
        this.requester = new jQuery.Requester();
    }

    {
        var fieldList = Lia.pd(Triton.BoardDetail2.fieldList, options, 'fieldList');

        var hideFieldList = Lia.p(options, 'hideFieldList');
        if (hideFieldList != undefined) {

            var newFieldList = [];
            for (var i = 0, l = fieldList.length; i < l; i++) {

                var field = fieldList[i];
                var hide = false;
                for (var i2 = 0, l2 = hideFieldList.length; i2 < l2; i2++) {

                    var hideField = hideFieldList[i2];
                    if (field == hideField) {
                        hide = true;
                        break;
                    }
                }

                if (hide == false) {
                    newFieldList.push(field);
                }
            }

            fieldList = newFieldList;
        }

        this.fieldList = fieldList;
    }

    var section = new Triton.Section({});

    var title = Lia.p(options, 'title');
    if (title != undefined) {
        section.append(new Triton.Title({content: title}));
    }

    var detailSection = this.detailSection = new Triton.Section({
        appendTo: section
    });

    // 패널 부분
    this.detailPanel = new Triton.Panel({
        appendTo: detailSection
    });


    for (var i = 0, l = this.sectionTypeList.length; i < l; i++) {

        var sectionType = this.sectionTypeList[i];
        if (sectionType == Triton.Board.SectionType.BUTTON) {

            // 버튼 부분
            this.buttonSection = new Triton.ButtonSection({
                appendTo: section
            });

        } else if (sectionType == Triton.Board.SectionType.COMMENT_WRITE) {

            // 코멘트 쓰기
            this.commentWriteSection = new Triton.Section({
                appendTo: section
            });

        } else if (sectionType == Triton.Board.SectionType.COMMENT_LIST) {

            // 코멘트 리스트
            this.commentListSection = new Triton.Section({
                appendTo: section
            });
        }
    }

    this.titleCommentCountShow = Lia.pd(true, options, 'titleCommentCountShow');
    this.titlePrivateShow = Lia.pd(true, options, 'titlePrivateShow');
    this.titleNewShow = Lia.pd(true, options, 'titleNewShow');
    this.titleAnsweredShow = Lia.pd(false, options, 'titleAnsweredShow');

    this.jView = section.get();
    this.initTriton(options);

    if (this.targetBoardId == undefined) {

        Triton.Board.messageHandler(Triton.Board.MessageType.LOADING_START);

        this.requester.ajaxWithoutBlank(Triton.Board.ApiUrl.GET_BOARD_LIST,
            Triton.Board.parameterMapConverter(Triton.Board.UrlType.GET_BOARD_LIST, this.parameterMap, undefined, this),
            function (status, data, request) {

                Triton.Board.messageHandler(Triton.Board.MessageType.LOADING_END);

                if (Triton.Board.responseChecker(Triton.Board.UrlType.GET_BOARD_LIST, status, data, request) == false) {
                    return;
                }

                var boardDetail = request.object.boardDetail;
                var boardId = Triton.Board.valueExtractor(Triton.Board.ValueType.BOARD_ID, data, undefined, boardDetail);
                if (boardId == undefined) {
                    return;
                }

                boardDetail.setBoardId(boardId);

            }, {boardDetail: this});

    } else {

        this.boardId = (this.targetBoardId);
    }

    Triton.Board.messageHandler(Triton.Board.MessageType.LOADING_START);

    this.requester.ajaxWithoutBlank(Triton.Board.ApiUrl.GET_BOARD_CONTENT,
        Triton.Board.parameterMapConverter(Triton.Board.UrlType.GET_BOARD_CONTENT, this.parameterMap, undefined, this),
        function (status, data, request) {

            Triton.Board.messageHandler(Triton.Board.MessageType.LOADING_END);
            if (Triton.Board.responseChecker(Triton.Board.UrlType.GET_BOARD_LIST, status, data, request) == false) {
                return;
            }

            var boardDetail = request.object.boardDetail;
            var boardContent = Triton.Board.valueExtractor(Triton.Board.ValueType.BOARD_CONTENT, data, undefined, boardDetail);
            if (boardContent == undefined) {
                Triton.Board.messageHandler(Triton.Board.MessageType.FAILED_TO_FIND_BOARD_CONTENT, data, undefined, boardDetail);
            }
            boardDetail.setBoardContent(boardContent);

            var options = boardDetail.getOptions();
            {
                var defaultButtonLayout = Lia.pd(true, options, 'defaultButtonLayout');
                if (defaultButtonLayout) {

                    var onMoveListPage = Lia.p(options, 'onMoveListPage');
                    if (onMoveListPage != undefined) {

                        boardDetail.buttonSection.appendToLeft(new Triton.FlatButton({
                            theme: Triton.FlatButton.Theme.Shade,
                            appendTo: boardDetail.leftButtonSection,
                            content: Lia.Strings.getString(Lia.Strings.BOARD.LIST),
                            BoardDetail: boardDetail,
                            onMoveListPage: onMoveListPage,
                            onClick: function (e) {

                                var onMoveListPage = e.data.onMoveListPage;
                                var boardDetail = e.data.BoardDetail;

                                onMoveListPage(boardDetail);
                            }
                        }));
                    }

                    var isEditable = Triton.Board.valueExtractor(Triton.Board.ValueType.IS_EDITABLE, data, boardContent, boardDetail);
                    if (isEditable) {

                        var isDeleted = Triton.Board.valueExtractor(Triton.Board.ValueType.IS_DELETED, data, boardContent, boardDetail);
                        if (isDeleted) {

                            // 삭제 된 상태이면 영구 삭제
                            var onDeletedPermanently = Lia.p(options, 'onDeletedPermanently');
                            if (onDeletedPermanently != undefined) {

                                boardDetail.buttonSection.appendToRight(new Triton.FlatButton({
                                    theme: Triton.FlatButton.Theme.Delete,
                                    content: '영구삭제',
                                    boardDetail: boardDetail,
                                    onDeletedPermanently: onDeletedPermanently,
                                    onClick: function (e) {

                                        var onDeletedPermanently = e.data.onDeletedPermanently;
                                        var boardDetail = e.data.boardDetail;

                                        var parameterMap = Triton.extractFormData(boardDetail);

                                        if (Triton.Board.siteType == Triton.SiteType.Polaris2) {

                                            Requester.ajaxWithoutBlank(Triton.Board.ApiUrl.GET_DUPLICATED_BOARD_CONTENT_COUNT, {
                                                boardContentId: PageManager.pc('id')
                                            }, function (status, data, request) {

                                                if (status != Lia.Requester.Status.SUCCESS)
                                                    return;

                                                var body = Lia.p(data, 'body');
                                                var count = Lia.p(body, 'count');

                                                if (count < 2) {

                                                    parameterMap['deleteDuplicatedBoardContentsPermanently'] = 0;

                                                    Triton.Board.messageHandler(Triton.Board.MessageType.DELETE_BOARD_CONTENT_PERMANENTLY, undefined, undefined, function (data) {

                                                        var onDeletedPermanently = data.onDeletedPermanently;
                                                        var boardDetail = data.boardDetail;

                                                        Triton.Board.messageHandler(Triton.Board.MessageType.LOADING_START);
                                                        boardDetail.requester.ajaxWithoutBlank(Triton.Board.ApiUrl.DELETE_BOARD_CONTENT_PERMANENTLY,
                                                            Triton.Board.parameterMapConverter(Triton.Board.UrlType.DELETE_BOARD_CONTENT_PERMANENTLY, parameterMap, undefined, boardDetail),
                                                            function (status, data, request) {

                                                                Triton.Board.messageHandler(Triton.Board.MessageType.LOADING_END);
                                                                if (Triton.Board.responseChecker(Triton.Board.UrlType.DELETE_BOARD_CONTENT_PERMANENTLY, status, data, request) == false) {
                                                                    return;
                                                                }

                                                                var onDeletedPermanently = request.object.onDeletedPermanently;
                                                                var boardDetail = request.object.boardDetail;
                                                                onDeletedPermanently(boardDetail);

                                                            }, {
                                                                onDeletedPermanently: onDeletedPermanently,
                                                                boardDetail: boardDetail
                                                            });

                                                    }, {
                                                        onDeletedPermanently: onDeletedPermanently,
                                                        boardDetail: boardDetail
                                                    });

                                                } else if (count >= 2) {

                                                    PopupManager.alert(Lia.Strings.getString(Lia.Strings.POPUP.TITLE.INFO), '동일 게시물이 다수 존재합니다. 일괄 영구 삭제할까요?', function (object) {

                                                        parameterMap['deleteDuplicatedBoardContentsPermanently'] = 1;

                                                        Triton.Board.messageHandler(Triton.Board.MessageType.DELETE_BOARD_CONTENT_PERMANENTLY, undefined, undefined, function (data) {

                                                            var onDeletedPermanently = data.onDeletedPermanently;
                                                            var boardDetail = data.boardDetail;

                                                            Triton.Board.messageHandler(Triton.Board.MessageType.LOADING_START);
                                                            boardDetail.requester.ajaxWithoutBlank(Triton.Board.ApiUrl.DELETE_BOARD_CONTENT_PERMANENTLY,
                                                                Triton.Board.parameterMapConverter(Triton.Board.UrlType.DELETE_BOARD_CONTENT_PERMANENTLY, parameterMap, undefined, boardDetail),
                                                                function (status, data, request) {

                                                                    Triton.Board.messageHandler(Triton.Board.MessageType.LOADING_END);
                                                                    if (Triton.Board.responseChecker(Triton.Board.UrlType.DELETE_BOARD_CONTENT_PERMANENTLY, status, data, request) == false) {
                                                                        return;
                                                                    }

                                                                    var onDeletedPermanently = request.object.onDeletedPermanently;
                                                                    var boardDetail = request.object.boardDetail;
                                                                    onDeletedPermanently(boardDetail);

                                                                }, {
                                                                    onDeletedPermanently: onDeletedPermanently,
                                                                    boardDetail: boardDetail
                                                                });

                                                        }, {
                                                            onDeletedPermanently: onDeletedPermanently,
                                                            boardDetail: boardDetail
                                                        });

                                                    }, function (object) {

                                                        parameterMap['deleteDuplicatedBoardContentsPermanently'] = 0;

                                                        Triton.Board.messageHandler(Triton.Board.MessageType.DELETE_BOARD_CONTENT_PERMANENTLY, undefined, undefined, function (data) {

                                                            var onDeletedPermanently = data.onDeletedPermanently;
                                                            var boardDetail = data.boardDetail;

                                                            Triton.Board.messageHandler(Triton.Board.MessageType.LOADING_START);
                                                            boardDetail.requester.ajaxWithoutBlank(Triton.Board.ApiUrl.DELETE_BOARD_CONTENT_PERMANENTLY,
                                                                Triton.Board.parameterMapConverter(Triton.Board.UrlType.DELETE_BOARD_CONTENT_PERMANENTLY, parameterMap, undefined, boardDetail),
                                                                function (status, data, request) {

                                                                    Triton.Board.messageHandler(Triton.Board.MessageType.LOADING_END);
                                                                    if (Triton.Board.responseChecker(Triton.Board.UrlType.DELETE_BOARD_CONTENT_PERMANENTLY, status, data, request) == false) {
                                                                        return;
                                                                    }

                                                                    var onDeletedPermanently = request.object.onDeletedPermanently;
                                                                    var boardDetail = request.object.boardDetail;
                                                                    onDeletedPermanently(boardDetail);

                                                                }, {
                                                                    onDeletedPermanently: onDeletedPermanently,
                                                                    boardDetail: boardDetail
                                                                });

                                                        }, {
                                                            onDeletedPermanently: onDeletedPermanently,
                                                            boardDetail: boardDetail
                                                        });

                                                    }, '예', '아니오', {});
                                                }

                                            });

                                        } else {

                                            Triton.Board.messageHandler(Triton.Board.MessageType.DELETE_BOARD_CONTENT_PERMANENTLY, undefined, undefined, function (data) {

                                                var onDeletedPermanently = data.onDeletedPermanently;
                                                var boardDetail = data.boardDetail;

                                                Triton.Board.messageHandler(Triton.Board.MessageType.LOADING_START);
                                                boardDetail.requester.ajaxWithoutBlank(Triton.Board.ApiUrl.DELETE_BOARD_CONTENT_PERMANENTLY,
                                                    Triton.Board.parameterMapConverter(Triton.Board.UrlType.DELETE_BOARD_CONTENT_PERMANENTLY, parameterMap, undefined, boardDetail),
                                                    function (status, data, request) {

                                                        Triton.Board.messageHandler(Triton.Board.MessageType.LOADING_END);
                                                        if (Triton.Board.responseChecker(Triton.Board.UrlType.DELETE_BOARD_CONTENT_PERMANENTLY, status, data, request) == false) {
                                                            return;
                                                        }

                                                        var onDeletedPermanently = request.object.onDeletedPermanently;
                                                        var boardDetail = request.object.boardDetail;
                                                        onDeletedPermanently(boardDetail);

                                                    }, {
                                                        onDeletedPermanently: onDeletedPermanently,
                                                        boardDetail: boardDetail
                                                    });

                                            }, {
                                                onDeletedPermanently: onDeletedPermanently,
                                                boardDetail: boardDetail
                                            });
                                        }

                                    }
                                }));
                            }

                        } else {

                            var onMoveEditPage = Lia.p(options, 'onMoveEditPage');
                            if (onMoveEditPage != undefined) {

                                boardDetail.buttonSection.appendToRight(new Triton.FlatButton({
                                    theme: Triton.FlatButton.Theme.NormalLeft,
                                    content: '편집',
                                    boardDetail: boardDetail,
                                    onMoveEditPage: onMoveEditPage,
                                    onClick: function (e) {

                                        var onMoveEditPage = e.data.onMoveEditPage;
                                        var boardDetail = e.data.boardDetail;

                                        onMoveEditPage(boardDetail);
                                    }
                                }));
                            }

                            var onDeleted = Lia.p(options, 'onDeleted');
                            if (onDeleted != undefined) {

                                boardDetail.buttonSection.appendToRight(new Triton.FlatButton({
                                    theme: Triton.FlatButton.Theme.DeleteRight,
                                    content: '삭제',
                                    boardDetail: boardDetail,
                                    onDeleted: onDeleted,
                                    onClick: function (e) {

                                        var onDeleted = e.data.onDeleted;
                                        var boardDetail = e.data.boardDetail;

                                        var parameterMap = Triton.extractFormData(boardDetail);

                                        if (Triton.Board.siteType == Triton.SiteType.Polaris2) {

                                            Requester.ajaxWithoutBlank(Triton.Board.ApiUrl.GET_DUPLICATED_BOARD_CONTENT_COUNT, {
                                                boardContentId: PageManager.pc('id')
                                            }, function (status, data, request) {

                                                if (status != Lia.Requester.Status.SUCCESS)
                                                    return;

                                                var body = Lia.p(data, 'body');
                                                var count = Lia.p(body, 'count');

                                                if (count < 2) {

                                                    parameterMap['deleteDuplicatedBoardContents'] = 0;

                                                    Triton.Board.messageHandler(Triton.Board.MessageType.DELETE_BOARD_CONTENT, undefined, undefined, function (data) {

                                                        var onDeleted = data.onDeleted;
                                                        var boardDetail = data.boardDetail;

                                                        Triton.Board.messageHandler(Triton.Board.MessageType.LOADING_START);
                                                        boardDetail.requester.ajaxWithoutBlank(Triton.Board.ApiUrl.DELETE_BOARD_CONTENT,
                                                            Triton.Board.parameterMapConverter(Triton.Board.UrlType.DELETE_BOARD_CONTENT, parameterMap, undefined, boardDetail),
                                                            function (status, data, request) {

                                                                Triton.Board.messageHandler(Triton.Board.MessageType.LOADING_END);
                                                                if (Triton.Board.responseChecker(Triton.Board.UrlType.DELETE_BOARD_CONTENT, status, data, request) == false) {
                                                                    return;
                                                                }

                                                                var onDeleted = request.object.onDeleted;
                                                                var boardDetail = request.object.boardDetail;
                                                                onDeleted(boardDetail);

                                                            }, {
                                                                onDeleted: onDeleted,
                                                                boardDetail: boardDetail
                                                            });

                                                    }, {
                                                        onDeleted: onDeleted,
                                                        boardDetail: boardDetail
                                                    });

                                                } else if (count >= 2) {

                                                    PopupManager.alert(Lia.Strings.getString(Lia.Strings.POPUP.TITLE.INFO), '동일 게시물이 다수 존재합니다. 일괄 삭제할까요?', function (object) {

                                                        parameterMap['deleteDuplicatedBoardContents'] = 1;

                                                        Triton.Board.messageHandler(Triton.Board.MessageType.DELETE_BOARD_CONTENT, undefined, undefined, function (data) {

                                                            var onDeleted = data.onDeleted;
                                                            var boardDetail = data.boardDetail;

                                                            Triton.Board.messageHandler(Triton.Board.MessageType.LOADING_START);

                                                            boardDetail.requester.ajaxWithoutBlank(Triton.Board.ApiUrl.DELETE_BOARD_CONTENT,
                                                                Triton.Board.parameterMapConverter(Triton.Board.UrlType.DELETE_BOARD_CONTENT, parameterMap, undefined, boardDetail),
                                                                function (status, data, request) {

                                                                    Triton.Board.messageHandler(Triton.Board.MessageType.LOADING_END);
                                                                    if (Triton.Board.responseChecker(Triton.Board.UrlType.DELETE_BOARD_CONTENT, status, data, request) == false) {
                                                                        return;
                                                                    }

                                                                    var onDeleted = request.object.onDeleted;
                                                                    var boardDetail = request.object.boardDetail;
                                                                    onDeleted(boardDetail);

                                                                }, {
                                                                    onDeleted: onDeleted,
                                                                    boardDetail: boardDetail
                                                                });

                                                        }, {
                                                            onDeleted: onDeleted,
                                                            boardDetail: boardDetail
                                                        });

                                                    }, function (object) {

                                                        parameterMap['deleteDuplicatedBoardContents'] = 0;

                                                        Triton.Board.messageHandler(Triton.Board.MessageType.DELETE_BOARD_CONTENT, undefined, undefined, function (data) {

                                                            var onDeleted = data.onDeleted;
                                                            var boardDetail = data.boardDetail;

                                                            Triton.Board.messageHandler(Triton.Board.MessageType.LOADING_START);
                                                            boardDetail.requester.ajaxWithoutBlank(Triton.Board.ApiUrl.DELETE_BOARD_CONTENT,
                                                                Triton.Board.parameterMapConverter(Triton.Board.UrlType.DELETE_BOARD_CONTENT, parameterMap, undefined, boardDetail),
                                                                function (status, data, request) {

                                                                    Triton.Board.messageHandler(Triton.Board.MessageType.LOADING_END);
                                                                    if (Triton.Board.responseChecker(Triton.Board.UrlType.DELETE_BOARD_CONTENT, status, data, request) == false) {
                                                                        return;
                                                                    }

                                                                    var onDeleted = request.object.onDeleted;
                                                                    var boardDetail = request.object.boardDetail;
                                                                    onDeleted(boardDetail);

                                                                }, {
                                                                    onDeleted: onDeleted,
                                                                    boardDetail: boardDetail
                                                                });

                                                        }, {
                                                            onDeleted: onDeleted,
                                                            boardDetail: boardDetail
                                                        });

                                                    }, '예', '아니오', {});
                                                }
                                            });

                                        } else {

                                            Triton.Board.messageHandler(Triton.Board.MessageType.DELETE_BOARD_CONTENT, undefined, undefined, function (data) {

                                                var onDeleted = data.onDeleted;
                                                var boardDetail = data.boardDetail;

                                                Triton.Board.messageHandler(Triton.Board.MessageType.LOADING_START);
                                                boardDetail.requester.ajaxWithoutBlank(Triton.Board.ApiUrl.DELETE_BOARD_CONTENT,
                                                    Triton.Board.parameterMapConverter(Triton.Board.UrlType.DELETE_BOARD_CONTENT, parameterMap, undefined, boardDetail),
                                                    function (status, data, request) {

                                                        Triton.Board.messageHandler(Triton.Board.MessageType.LOADING_END);
                                                        if (Triton.Board.responseChecker(Triton.Board.UrlType.DELETE_BOARD_CONTENT, status, data, request) == false) {
                                                            return;
                                                        }

                                                        var onDeleted = request.object.onDeleted;
                                                        var boardDetail = request.object.boardDetail;
                                                        onDeleted(boardDetail);

                                                    }, {
                                                        onDeleted: onDeleted,
                                                        boardDetail: boardDetail
                                                    });

                                            }, {
                                                onDeleted: onDeleted,
                                                boardDetail: boardDetail
                                            });

                                        }

                                    }
                                }));
                            }

                        }

                    }

                }
            }

            var detailPanel = boardDetail.detailPanel;
            var detailTable = new Triton.DetailTable2({appendTo: detailPanel});

            var fieldList = boardDetail.getFieldList();
            for (var i = 0, l = fieldList.length; i < l; i++) {

                var field = fieldList[i];
                if (field == undefined) {
                    continue;
                }

                if (typeof field == 'object') {

                    var customObject = Lia.deepCopy(field);
                    customObject.attachToBoardDetail(
                        detailTable, boardContent, boardDetail
                    );

                } else if (typeof field == 'function') {

                    var customFieldFunction = field;

                    var columnName = customFieldFunction(Triton.Board.CustomFieldType.DETAIL_NAME, data, boardContent, boardDetail);
                    var columnValue = customFieldFunction(Triton.Board.CustomFieldType.DETAIL_VALUE, data, boardContent, boardDetail);

                    detailTable.appendRow({});
                    detailTable.appendKeyColumn({
                        content: columnName
                    });

                    detailTable.appendValueColumn({
                        content: columnValue
                    });

                } else {

                    detailTable.appendRow({});

                    var columnName = Triton.Board.ColumnValue.getName(field);
                    if (field == Triton.Board.ValueType.DELETION_INFO_WHEN_DELETED) {

                        var isDeleted = Triton.Board.valueExtractor(Triton.Board.ValueType.IS_DELETED, data, boardContent, boardDetail);
                        if (isDeleted) {

                            detailTable.appendKeyColumn({
                                content: columnName
                            });

                            var separateTable = new Triton.SeparateTable({});
                            detailTable.appendValueColumn({
                                content: separateTable
                            });
                            separateTable.appendRow({});

                            var infoSection = new Triton.Section({});

                            separateTable.appendColumn({
                                content: infoSection
                            });

                            var deletedByUserName = Triton.Board.valueExtractor(Triton.Board.ValueType.DELETED_BY_USER_NAME, data, boardContent, boardDetail);
                            var deletedByUserNameColumnName = Triton.Board.ColumnValue.getName(Triton.Board.ValueType.DELETED_BY_USER_NAME);

                            var deletedByIpAddress = Triton.Board.valueExtractor(Triton.Board.ValueType.DELETED_FROM_IP_ADDRESS, data, boardContent, boardDetail);
                            var deletedByIpAddressColumnName = Triton.Board.ColumnValue.getName(Triton.Board.ValueType.DELETED_FROM_IP_ADDRESS);

                            var deletedDate = Triton.Board.valueExtractor(Triton.Board.ValueType.DELETED_DATE, data, boardContent, boardDetail);
                            var deletedDateColumnName = Triton.Board.ColumnValue.getName(Triton.Board.ValueType.DELETED_DATE);

                            infoSection.append(new Triton.KeyValueSection({
                                keyContent: deletedByUserNameColumnName,
                                valueContent: deletedByUserName
                            }));

                            infoSection.append(new Triton.KeyValueSection({
                                keyContent: deletedByIpAddressColumnName,
                                valueContent: deletedByIpAddress
                            }));

                            infoSection.append(new Triton.KeyValueSection({
                                keyContent: deletedDateColumnName,
                                valueContent: deletedDate
                            }));

                            separateTable.appendColumn({
                                theme: Triton.SeparateTable.Column.Theme.Middle,
                                css: {
                                    'text-align': 'right'
                                },
                                content: new Triton.FlatButton({
                                    theme: Triton.FlatButton.Theme.Refresh,
                                    content: '복구',
                                    boardDetail: boardDetail,
                                    onClick: function (e) {

                                        var boardDetail = e.data.boardDetail;
                                        Triton.Board.messageHandler(Triton.Board.MessageType.RECOVER_BOARD_CONTENT, undefined, undefined, function (data) {

                                            var boardDetail = data.boardDetail;

                                            Triton.Board.messageHandler(Triton.Board.MessageType.LOADING_START);
                                            boardDetail.requester.ajaxWithoutBlank(Triton.Board.ApiUrl.RECOVER_BOARD_CONTENT,
                                                Triton.Board.parameterMapConverter(Triton.Board.UrlType.RECOVER_BOARD_CONTENT, boardDetail.getParameterMap(), undefined, boardDetail),
                                                function (status, data, request) {

                                                    Triton.Board.messageHandler(Triton.Board.MessageType.LOADING_END);
                                                    if (Triton.Board.responseChecker(Triton.Board.UrlType.RECOVER_BOARD_CONTENT, status, data, request) == false) {
                                                        return;
                                                    }

                                                    var boardDetail = request.object.boardDetail;
                                                    var options = boardDetail.getOptions();
                                                    var onRecovered = Lia.p(options, 'onRecovered');
                                                    if (onRecovered != undefined) {
                                                        onRecovered(boardDetail);
                                                    }

                                                }, {
                                                    boardDetail: boardDetail
                                                });

                                        }, {
                                            boardDetail: boardDetail
                                        });

                                    }
                                })
                            });
                        }
                        continue;
                    } else if (field == Triton.Board.ValueType.BODY) {

                        var body = Triton.Board.valueExtractor(Triton.Board.ValueType.TITLE, data, boardContent, boardDetail);
                        detailTable.appendValueColumn({
                            content: body,
                            attr: {'colspan': '2'},
                            css: {'padding': '20px'}
                        });
                        continue;
                    }


                    detailTable.appendKeyColumn({
                        content: columnName
                    });

                    var fieldValue = undefined;
                    if (field == Triton.Board.ValueType.TITLE_AND_WRITER_AND_REGISTERED_DATE) {

                        var title = Triton.Board.valueExtractor(Triton.Board.ValueType.TITLE, data, boardContent, boardDetail);
                        var writer = Triton.Board.valueExtractor(Triton.Board.ValueType.WRITER, data, boardContent, boardDetail);
                        var registeredDate = Triton.Board.valueExtractor(Triton.Board.ValueType.REGISTERED_DATE, data, boardContent, boardDetail);

                        var section = new Triton.Section({
                            css: {
                                position: 'relative'
                            }
                        });

                        title.css({
                            'float': 'left'
                        });

                        section.append(title);

                        var titleInfo = new Triton.Span({
                            theme: Triton.Span.Theme.WriterAndRegisteredDate
                        });

                        titleInfo.append(writer);
                        titleInfo.append(' | ');
                        titleInfo.append(registeredDate);

                        section.append(titleInfo);

                        fieldValue = section;

                    } else if (field == Triton.Board.ValueType.TITLE_AND_REGISTERED_DATE_AND_VIEW_COUNT) {

                        var title = Triton.Board.valueExtractor(Triton.Board.ValueType.TITLE, data, boardContent, boardDetail);
                        var viewCount = Triton.Board.valueExtractor(Triton.Board.ValueType.VIEW_COUNT, data, boardContent, boardDetail);
                        var registeredDate = Triton.Board.valueExtractor(Triton.Board.ValueType.REGISTERED_DATE, data, boardContent, boardDetail);

                        var section = new Triton.Section({
                            css: {
                                position: 'relative'
                            }
                        });

                        title.css({
                            'float': 'left'
                        });

                        section.append(title);

                        var titleInfo = new Triton.Span({
                            theme: Triton.Span.Theme.WriterAndRegisteredDate
                        });

                        titleInfo.append(registeredDate);
                        titleInfo.append('　|　조회수 ');
                        titleInfo.append(viewCount);
                        titleInfo.append('　　');

                        section.append(titleInfo);

                        fieldValue = section;

                    } else if (
                        field == Triton.Board.ValueType.IS_PRIVATE
                        || field == Triton.Board.ValueType.IS_ALWAYS_ON_TOP
                        || field == Triton.Board.ValueType.IS_AVAILABLE) {

                        var status = Triton.Board.valueExtractor(field, data, boardContent, boardDetail);
                        var content = (status) ? '비밀글 설정 중' : '비밀글 미 설정 중';
                        if (field == Triton.Board.ValueType.IS_ALWAYS_ON_TOP) {
                            content = (status) ? '항상 맨 위에 고정 (우선순위로 게시) 설정 중' : '항상 맨 위에 고정 (우선순위로 게시) 미 설정 중';
                        } else if (field == Triton.Board.ValueType.IS_AVAILABLE) {
                            content = (status) ? '게시 중' : '게시 중지';
                        }

                        //fieldValue = new Triton.CheckBox({
                        //    link : false,
                        //    manual : true,
                        //    status : status,
                        //    content : content
                        //});

                        fieldValue = new Triton.Span({
                            content: content
                        });

                    } else if (field == Triton.Board.ValueType.ATTACHMENT) {

                        detailTable.appendValueColumn({});

                        var attachment = Triton.Board.valueExtractor(field, data, boardContent, boardDetail);
                        var attachmentList = Triton.Board.valueExtractor(Triton.Board.ValueType.ATTACHMENT_LIST, data, attachment, boardDetail);
                        if (attachmentList != undefined) {

                            for (var i2 = 0, l2 = attachmentList.length; i2 < l2; i2++) {

                                var attachmentItem = attachmentList[i2];

                                var fileUrl = Triton.Board.valueExtractor(Triton.Board.ValueType.ATTACHMENT_FILE_URL, data, attachmentItem, boardDetail);
                                var fileSize = Triton.Board.valueExtractor(Triton.Board.ValueType.ATTACHMENT_FILE_SIZE, data, attachmentItem, boardDetail);
                                var fileName = Triton.Board.valueExtractor(Triton.Board.ValueType.ATTACHMENT_FILE_NAME, data, attachmentItem, boardDetail);

                                detailTable.appendItem(new Triton.AttachmentItem({
                                    fileUrl: fileUrl,
                                    fileSize: fileSize,
                                    fileName: fileName
                                }));

                            }
                        } else {

                            detailTable.appendItem(new Triton.Span({content: '-'}));
                        }
                        continue;

                    } else if (field == Triton.Board.ValueType.IS_ALWAYS_ON_TOP_DATE) {

                        var isAlwaysOnTop = Triton.Board.valueExtractor(Triton.Board.ValueType.IS_ALWAYS_ON_TOP, undefined, boardContent, boardDetail);

                        //fieldValue = new Triton.CheckBox({
                        //    link : false,
                        //    manual : true,
                        //    status : isAvailable
                        //});

                        fieldValue = (isAlwaysOnTop) ? '항상 맨 위에 고정 (우선순위로 게시) 설정 중' : '항상 맨 위에 고정 (우선순위로 게시) 미 설정 중';

                        detailTable.appendValueColumn({
                            content: fieldValue
                        });

                        if (isAlwaysOnTop) {

                            detailTable.appendRow({});

                            var extraColumnName = Triton.Board.ColumnValue.getName(Triton.Board.ValueType.ALWAYS_ON_TOP_DATE);
                            detailTable.appendKeyColumn({
                                content: extraColumnName
                            });

                            var alwaysOnTopStartDate = Triton.Board.valueExtractor(Triton.Board.ValueType.ALWAYS_ON_TOP_START_DATE, data, boardContent, boardDetail);
                            if (String.isBlank(alwaysOnTopStartDate)) {
                                alwaysOnTopStartDate = '무제한';
                            }

                            var alwaysOnTopEndDate = Triton.Board.valueExtractor(Triton.Board.ValueType.ALWAYS_ON_TOP_END_DATE, data, boardContent, boardDetail);
                            if (String.isBlank(alwaysOnTopEndDate)) {
                                alwaysOnTopEndDate = '무제한';
                            }

                            var alwaysOnTopDateString = alwaysOnTopStartDate + ' ~ ' + alwaysOnTopEndDate;

                            detailTable.appendValueColumn({
                                content: alwaysOnTopDateString
                            });

                        }
                        continue;

                    } else if (field == Triton.Board.ValueType.IS_AVAILABLE_EFFECTIVE_DATE) {

                        var isAvailable = Triton.Board.valueExtractor(Triton.Board.ValueType.IS_AVAILABLE, undefined, boardContent, boardDetail);

                        //fieldValue = new Triton.CheckBox({
                        //    link : false,
                        //    manual : true,
                        //    status : isAvailable
                        //});

                        fieldValue = (isAvailable) ? '게시 중' : '게시 중지';

                        detailTable.appendValueColumn({
                            content: fieldValue
                        });

                        if (isAvailable) {

                            detailTable.appendRow({});

                            var extraColumnName = Triton.Board.ColumnValue.getName(Triton.Board.ValueType.EFFECTIVE_DATE);
                            detailTable.appendKeyColumn({
                                content: extraColumnName
                            });

                            var effectiveStartDate = Triton.Board.valueExtractor(Triton.Board.ValueType.EFFECTIVE_START_DATE, data, boardContent, boardDetail);
                            if (String.isBlank(effectiveStartDate)) {
                                effectiveStartDate = '무제한';
                            }

                            var effectiveEndDate = Triton.Board.valueExtractor(Triton.Board.ValueType.EFFECTIVE_END_DATE, data, boardContent, boardDetail);
                            if (String.isBlank(effectiveEndDate)) {
                                effectiveEndDate = '무제한';
                            }

                            var effectiveDateString = effectiveStartDate + ' ~ ' + effectiveEndDate;

                            detailTable.appendValueColumn({
                                content: effectiveDateString
                            });

                        }
                        continue;

                    } else if (field == Triton.Board.ValueType.THUMBNAIL_IMAGE_URL || field == Triton.Board.ValueType.IMAGE_URL) {

                        var url = Triton.Board.valueExtractor(field, data, boardContent, boardDetail);
                        if (url != undefined) {
                            fieldValue = new Triton.Image({
                                attr: {
                                    src: url
                                },
                                css: {
                                    'max-width': '100%'
                                }
                            })
                        } else {
                            fieldValue = '-';
                        }

                    } else if (field == Triton.Board.ValueType.EFFECTIVE_DATE) {

                        var effectiveStartDate = Triton.Board.valueExtractor(Triton.Board.ValueType.EFFECTIVE_START_DATE, data, boardContent, boardDetail);
                        if (String.isBlank(effectiveStartDate)) {
                            effectiveStartDate = '무제한';
                        }

                        var effectiveEndDate = Triton.Board.valueExtractor(Triton.Board.ValueType.EFFECTIVE_END_DATE, data, boardContent, boardDetail);
                        if (String.isBlank(effectiveEndDate)) {
                            effectiveEndDate = '무제한';
                        }

                        var effectiveDateString = effectiveStartDate + ' ~ ' + effectiveEndDate;
                        fieldValue = effectiveDateString;

                    } else if (field == Triton.Board.ValueType.TASK_DATE) {

                        var taskStartDate = Triton.Board.valueExtractor(Triton.Board.ValueType.TASK_START_DATE, data, boardContent, boardDetail);
                        if (String.isBlank(taskStartDate)) {
                            taskStartDate = '';
                        }

                        var taskEndDate = Triton.Board.valueExtractor(Triton.Board.ValueType.TASK_END_DATE, data, boardContent, boardDetail);
                        if (String.isBlank(taskEndDate)) {
                            taskEndDate = '';
                        }

                        var taskDateString = '';

                        if (String.isBlank(taskStartDate) && String.isBlank(taskEndDate))
                            taskDateString = '지정하지않음';
                        else if (String.isNotBlank(taskStartDate) && String.isNotBlank(taskEndDate))
                            taskDateString = taskStartDate + ' 부터 ' + taskEndDate + ' 까지';
                        else if (String.isNotBlank(taskStartDate) && String.isBlank(taskEndDate))
                            taskDateString = taskStartDate + ' 부터';
                        else if (String.isBlank(taskStartDate) && String.isNotBlank(taskEndDate))
                            taskDateString = taskEndDate + ' 까지';

                        fieldValue = taskDateString;

                    } else if (field == Triton.Board.ValueType.EVENT_DATE) {

                        var eventStartDate = Triton.Board.valueExtractor(Triton.Board.ValueType.EVENT_START_DATE, data, boardContent, boardDetail);
                        if (String.isBlank(eventStartDate)) {
                            eventStartDate = '';
                        }

                        var eventEndDate = Triton.Board.valueExtractor(Triton.Board.ValueType.EVENT_END_DATE, data, boardContent, boardDetail);
                        if (String.isBlank(eventEndDate)) {
                            eventEndDate = '';
                        }

                        var eventDateString = '';

                        if (String.isBlank(eventStartDate) && String.isBlank(eventEndDate))
                            eventDateString = '지정하지않음';
                        else if (String.isNotBlank(eventStartDate) && String.isNotBlank(eventEndDate))
                            eventDateString = eventStartDate + ' 부터 ' + eventEndDate + ' 까지';
                        else if (String.isNotBlank(eventStartDate) && String.isBlank(eventEndDate))
                            eventDateString = eventStartDate + ' 부터';
                        else if (String.isBlank(eventStartDate) && String.isNotBlank(eventEndDate))
                            eventDateString = eventEndDate + ' 까지';

                        fieldValue = eventDateString;
                    } else {
                        fieldValue = Triton.Board.valueExtractor(field, data, boardContent, boardDetail);
                    }

                    detailTable.appendValueColumn({
                        content: fieldValue
                    });

                }

            }

            var onLoaded = Lia.p(options, 'onLoaded');
            if (onLoaded != undefined) {
                onLoaded(boardDetail);
            }

            if (boardDetail.unuseComment != true) {

                var boardCommentList = new Triton.BoardCommentList2({
                    boardDetail: boardDetail,
                    targetBoardId: boardDetail.getBoardId(),
                    boardContentId: boardDetail.getBoardContentId(),
                    useShowOnCmsOnlyComment: boardDetail.useShowOnCmsOnlyComment,
                    useCommentUploader: boardDetail.useCommentUploader,
                    commentUploaderParameterMap: boardDetail.commentUploaderParameterMap,
                    commentWriteBaseRequestParameterMap: boardDetail.commentWriteBaseRequestParameterMap
                });

                boardDetail.commentListSection.append(boardCommentList);
                boardCommentList.reload();
                boardDetail.boardCommentList = boardCommentList;
            }

        }, {boardDetail: this});

};

// 표시 필드 리스트
Triton.BoardDetail2.fieldList = [
    Triton.Board.ValueType.CATEGORY,
    Triton.Board.ValueType.TITLE_AND_WRITER_AND_REGISTERED_DATE,
    Triton.Board.ValueType.BODY,
    Triton.Board.ValueType.ATTACHMENT,
    Triton.Board.ValueType.THUMBNAIL_IMAGE_URL,
    Triton.Board.ValueType.IS_ALWAYS_ON_TOP,
    Triton.Board.ValueType.IS_PRIVATE,
    Triton.Board.ValueType.IS_AVAILABLE_EFFECTIVE_DATE,
    Triton.Board.ValueType.DELETION_INFO_WHEN_DELETED
];
Triton.BoardDetail2.setFieldList = function (list) {
    Triton.BoardDetail.fieldList = list;
};

Triton.BoardDetail2.sectionTypeList = [
    Triton.Board.SectionType.BUTTON,
    Triton.Board.SectionType.COMMENT_LIST,
    Triton.Board.SectionType.COMMENT_WRITE
];
Triton.BoardDetail2.setSectionTypeList = function (list) {
    Triton.BoardDetail2.sectionTypeList = list;
};


var BoardCommentList2 = Triton.BoardCommentList2 = function (options) {
    this.init(options);
};
Triton.BoardCommentList2.prototype = new Triton.Board();
Triton.BoardCommentList2.prototype.init = function (options) {

    //this.typeCode = undefined;
    //this.boardId = undefined;
    //this.leftButtonSection = undefined;
    //this.rightButtonSection = undefined;
    //this.moduleTypeCode = undefined;
    //this.requester = undefined;
    //this.fieldList = undefined;
    //this.categoryOptionList = undefined;
    //this.options = undefined;
    //this.boardContentCategory = undefined;
    //this.boardContentCategoryId = undefined;
    //his.targetBoardId = undefined;

    this.moduleTypeCode = Triton.Board.ModuleType.BOARD_COMMENT_LIST;
    this.options = options;
    this.parameterMap = Lia.p(options, 'parameterMap');
    this.targetBoardId = Lia.p(options, 'targetBoardId');
    this.boardContentId = Lia.p(options, 'boardContentId');
    this.requester = Lia.pd(Triton.Board.requester, options, 'requester');
    if (this.requester == undefined) {
        this.requester = new jQuery.Requester();
    }
    this.useShowOnCmsOnlyComment = Lia.p(options, 'useShowOnCmsOnlyComment');
    this.useCommentUploader = Lia.p(options, 'useCommentUploader');
    this.baseRequestParameterMap = Lia.p(options, 'baseRequestParameterMap');
    this.commentUploaderParameterMap = Lia.pd(Triton.Board.uploaderParmaeterMap, options, 'commentUploaderParameterMap');
    this.commentWriteBaseRequestParameterMap = Lia.p(options, 'commentWriteBaseRequestParameterMap');

    var section = new Triton.Section();

    this.jView = this.jContent = section.get();
    this.initBoard(options);

    this.writeSection = new Triton.Section({
        theme: Triton.Section.Theme.CommentWrite2,
        appendTo: section
    });

    this.listSection = new Triton.Section({
        appendTo: section,
        css: {'background': '#f4f4f4'}
    });

    if (this.targetBoardId == undefined) {

        Triton.Board.messageHandler(Triton.Board.MessageType.LOADING_START);

        this.requester.ajaxWithoutBlank(Triton.Board.ApiUrl.GET_BOARD_LIST,
            Triton.Board.parameterMapConverter(Triton.Board.UrlType.GET_BOARD_LIST, this.parameterMap, undefined, this),
            function (status, data, request) {

                Triton.Board.messageHandler(Triton.Board.MessageType.LOADING_END);

                if (Triton.Board.responseChecker(Triton.Board.UrlType.GET_BOARD_LIST, status, data, request) == false) {
                    return;
                }

                var boardCommentList = request.object.boardCommentList;
                var boardId = Triton.Board.valueExtractor(Triton.Board.ValueType.BOARD_ID, data, undefined, boardCommentList);
                if (boardId == undefined) {
                    return;
                }

                boardCommentList.setBoardId(boardId);

            }, {boardCommentList: this});

    } else {

        this.boardId = (this.targetBoardId);
    }

    this.requester.func(function (execute) {

        var boardCommentList = execute.object.boardCommentList;
        var commentWriteInternal = boardCommentList.writeSection;

        new Triton.Span({
            appendTo: commentWriteInternal,
            content: '<span style="padding-right: 10px;">―</span>답변',
            css: {
                'display': 'block',
                'color': '#084897',
                'font-family': 'notokr-medium, NanumGothicBold',
                'font-size': '17px',
                'margin': '30px 0 20px'
            }
        });

        var commentWriteInner = new Triton.Section({
            appendTo: commentWriteInternal,
            css: {'background': '#f4f4f4', 'padding': '30px'}
        });

        var formName = Triton.Board.FormName.getName(Triton.Board.ValueType.BODY);
        var textEditor = new Triton.TextEditor({
            theme: Triton.TextEditor.Theme.Comment,
            appendTo: commentWriteInner,
            form: {name: formName}
        });
        textEditor.initTextEditor();
        boardCommentList.commentTerxtEditor = textEditor;

        var commentButtonLayout = new Triton.ButtonSection({
            appendTo: commentWriteInner
        });


        if (boardCommentList.useCommentUploader) {

            commentButtonLayout.appendToLeft(boardCommentList.commentUploader = new Triton.Uploader({
                parameterMap: boardCommentList.commentUploaderParameterMap,
                form: {name: Triton.Board.FormName.getName(Triton.Board.ValueType.ATTACHMENT)},
                css: {
                    'float': 'left',
                    'margin-right': '20px'
                }
            }));

        }


        if (boardCommentList.useShowOnCmsOnlyComment) {

            commentButtonLayout.appendToLeft(boardCommentList.commentChowOnCmsOnlyComboBox = new Triton.CheckBox({
                content: '관리자 용 댓글',
                pressed: boardCommentList.cmsOnlyCommentDefaultChecked,
                css: {
                    'margin-top': '6px',
                    'float': 'left'
                },
                form: {name: Triton.Board.FormName.getName(Triton.Board.ValueType.SHOW_ON_CMS_ONLY)}
            }));
        }

        commentButtonLayout.appendToRight(new Triton.FlatButton({
            content: '등록',
            css: {
                'float': 'right'
            },
            boardCommentList: boardCommentList,
            onClick: function (e) {

                var boardCommentList = e.data.boardCommentList;
                var parameterMap = Triton.extractFormData(boardCommentList.writeSection);

                var commentWriteBaseRequestParameterMap = boardCommentList.commentWriteBaseRequestParameterMap;

                Triton.Board.messageHandler(Triton.Board.MessageType.LOADING_START);
                boardCommentList.requester.ajaxWithoutBlank(Triton.Board.ApiUrl.ADD_BOARD_CONTENT,
                    Triton.Board.parameterMapConverter(Triton.Board.UrlType.ADD_BOARD_CONTENT, parameterMap, undefined, boardCommentList, commentWriteBaseRequestParameterMap),
                    function (status, data, request) {

                        Triton.Board.messageHandler(Triton.Board.MessageType.LOADING_END);
                        if (Triton.Board.responseChecker(Triton.Board.UrlType.ADD_BOARD_CONTENT, status, data, request) == false) {
                            return;
                        }

                        var boardCommentList = request.object.boardCommentList;
                        if (boardCommentList.commentTerxtEditor != undefined) {
                            boardCommentList.commentTerxtEditor.setValue('');
                        }

                        if (boardCommentList.useShowOnCmsOnlyComment != undefined) {
                            boardCommentList.commentChowOnCmsOnlyComboBox.setPressed(true);
                        }

                        if (boardCommentList.commentUploader != undefined) {
                            boardCommentList.commentUploader.clear();
                        }

                        boardCommentList.reload();

                    }, {
                        boardCommentList: boardCommentList
                    });

            }
        }));

    }, {
        boardCommentList: this
    });


};

Triton.BoardCommentList2.prototype.reload = function () {

    this.listSection.empty();

    Triton.Board.messageHandler(Triton.Board.MessageType.LOADING_START);
    this.requester.ajaxWithoutBlank(Triton.Board.ApiUrl.GET_BOARD_CONTENT_SUMMARY_LIST,
        Triton.Board.parameterMapConverter(Triton.Board.UrlType.GET_BOARD_CONTENT_SUMMARY_LIST, this.getParameterMap(), undefined, this),
        function (status, data, request) {

            Triton.Board.messageHandler(Triton.Board.MessageType.LOADING_END);
            if (Triton.Board.responseChecker(Triton.Board.UrlType.GET_BOARD_CONTENT_SUMMARY_LIST, status, data, request) == false) {
                return;
            }

            var boardCommentList = request.object.boardCommentList;
            var contentSummaryList = Triton.Board.valueExtractor(Triton.Board.ValueType.BOARD_CONTENT_SUMMARY_LIST, data, undefined, boardCommentList);
            if (contentSummaryList == undefined || contentSummaryList.length == 0) {
                return;
            }

            for (var i = 0, l = contentSummaryList.length; i < l; i++) {

                var contentSummary = contentSummaryList[i];

                var commentItem = new Triton.Section({
                    theme: Triton.Section.Theme.CommentItem2,
                    css: {'position': 'relative', 'padding-left': '80px', 'background': '#f4f4f4'}
                });
                boardCommentList.listSection.append(commentItem);

                {
                    var commentHeaderSection = new Triton.Section({
                        theme: Triton.Section.Theme.CommentHeader2,
                        css: {
                            'position': 'absolute',
                            'left': '0',
                            'top': '20px',
                            'width': '100%',
                            'box-sizing': 'border-box',
                            'padding-right': '200px'
                        }
                    });
                    commentItem.append(commentHeaderSection);

                    var body = Triton.Board.valueExtractor(Triton.Board.ValueType.BODY, data, contentSummary, boardCommentList);
                    var registeredDate = Triton.Board.valueExtractor(Triton.Board.ValueType.REGISTERED_DATE, data, contentSummary, boardCommentList);
                    var jBody = $(body).append('<span style="margin-left:20px;margin-right:20px;font-size:12px;color:#b7b7b7">' + registeredDate + '</span>');
                    var commentBody = new Triton.Section({
                        content: jBody
                    });
                    commentItem.append(commentBody);
                }

                {
                    var writer = Triton.Board.valueExtractor(Triton.Board.ValueType.WRITER, data, contentSummary, boardCommentList);

                    var writerSpan = new Triton.Span({
                        theme: Triton.Span.Theme.CommentWriter,
                        content: writer
                    });

                    commentHeaderSection.append(writerSpan);

                    var showOnCmsOnly = Triton.Board.valueExtractor(Triton.Board.ValueType.SHOW_ON_CMS_ONLY, data, contentSummary, boardCommentList);
                    if (showOnCmsOnly && boardCommentList.useShowOnCmsOnlyComment) {

                        var showOnCmsOnlySpan = new Triton.Span({
                            theme: Triton.Span.Theme.CommentRegisteredDater,
                            content: '(관리자 용 댓글)',
                            css: {'font-weight': 'bold', 'color': '#084897'}
                        });

                        commentHeaderSection.append(showOnCmsOnlySpan);
                    }

                    var attachment = Triton.Board.valueExtractor(Triton.Board.ValueType.ATTACHMENT, data, contentSummary, boardCommentList);
                    if (boardCommentList.useCommentUploader && attachment != undefined) {


                        commentBody.append(new Triton.Section({css: {'margin-top': '5px'}}));


                        var attachmentList = Triton.Board.valueExtractor(Triton.Board.ValueType.ATTACHMENT_LIST, data, attachment, boardCommentList);
                        if (attachmentList != undefined) {

                            for (var i2 = 0, l2 = attachmentList.length; i2 < l2; i2++) {

                                var attachmentItem = attachmentList[i2];

                                var fileUrl = Triton.Board.valueExtractor(Triton.Board.ValueType.ATTACHMENT_FILE_URL, data, attachmentItem, boardCommentList);
                                var fileSize = Triton.Board.valueExtractor(Triton.Board.ValueType.ATTACHMENT_FILE_SIZE, data, attachmentItem, boardCommentList);
                                var fileName = Triton.Board.valueExtractor(Triton.Board.ValueType.ATTACHMENT_FILE_NAME, data, attachmentItem, boardCommentList);

                                commentBody.append(new Triton.AttachmentItem({
                                    fileUrl: fileUrl,
                                    fileSize: fileSize,
                                    fileName: fileName
                                }));

                            }
                        }
                    }

                    var isEditable = Lia.p(contentSummary, 'is_editable');

                    if (isEditable) {

                        var editImage = new Triton.Image({
                            theme: Triton.Image.Theme.CommentButtonEdit,
                            attr: {
                                src: Triton.ReplaceMap.BASE_PATH + '/img/img_comment_edit.png'
                            },
                            boardCommentList: boardCommentList,
                            contentSummary: contentSummary,
                            commentBody: commentBody,
                            showOnCmsOnly: showOnCmsOnly,
                            attachment: attachment,
                            body: body,
                            onClick: function (e) {

                                var editImage = $(this).getTriton();
                                editImage.hide();

                                var boardCommentList = e.data.boardCommentList;
                                var commentBody = e.data.commentBody;
                                var contentSummary = e.data.contentSummary;
                                var showOnCmsOnly = e.data.showOnCmsOnly;
                                var attachment = e.data.attachment;
                                var body = e.data.body;
                                commentBody.empty();

                                var formName = Triton.Board.FormName.getName(Triton.Board.ValueType.BODY);
                                var textEditor = new Triton.TextEditor({
                                    appendTo: commentBody,
                                    theme: Triton.TextEditor.Theme.CommentList,
                                    value: body,
                                    form: {name: formName}
                                });
                                textEditor.initTextEditor();

                                var buttonSection = new Triton.ButtonSection({
                                    theme: Triton.Section.Theme.CommentButtonLayout2,
                                    appendTo: commentBody
                                });

                                if (boardCommentList.useCommentUploader) {

                                    var uploader = undefined;
                                    buttonSection.appendToLeft(uploader = new Triton.Uploader({
                                        parameterMap: boardCommentList.commentUploaderParameterMap,
                                        form: {name: Triton.Board.FormName.getName(Triton.Board.ValueType.ATTACHMENT)},
                                        css: {
                                            'float': 'left',
                                            'margin-right': '20px'
                                        }
                                    }));

                                    if (attachment != undefined)
                                        uploader.setAttachmentList(attachment);
                                }


                                if (boardCommentList.useShowOnCmsOnlyComment) {

                                    buttonSection.appendToLeft(new Triton.CheckBox({
                                        content: '관리자 용 댓글',
                                        pressed: showOnCmsOnly,
                                        css: {
                                            'margin-top': '6px',
                                            'float': 'left'
                                        },
                                        form: {name: Triton.Board.FormName.getName(Triton.Board.ValueType.SHOW_ON_CMS_ONLY)}
                                    }));
                                }

                                buttonSection.appendToRight(new Triton.FlatButton({
                                    content: '취소',
                                    theme: Triton.FlatButton.Theme.Shade,
                                    contentSummary: contentSummary,
                                    commentBody: commentBody,
                                    body: body,
                                    editImage: editImage,
                                    onClick: function (e) {

                                        var contentSummary = e.data.contentSummary;
                                        var commentBody = e.data.commentBody;
                                        var body = e.data.body;
                                        commentBody.empty();
                                        commentBody.append(body);
                                        editImage.show();


                                    }
                                }));

                                buttonSection.appendToRight(new Triton.FlatButton({
                                    content: Lia.Strings.getString(Lia.Strings.BOARD.SAVE),
                                    theme: Triton.FlatButton.Theme.Normal,
                                    boardCommentList: boardCommentList,
                                    contentSummary: contentSummary,
                                    commentBody: commentBody,
                                    onClick: function (e) {

                                        var boardCommentList = e.data.boardCommentList;
                                        var contentSummary = e.data.contentSummary;
                                        var commentBody = e.data.commentBody;
                                        var parameterMap = Triton.extractFormData(commentBody);

                                        Triton.Board.messageHandler(Triton.Board.MessageType.LOADING_START);
                                        boardCommentList.requester.ajaxWithoutBlank(Triton.Board.ApiUrl.EDIT_BOARD_CONTENT,
                                            Triton.Board.parameterMapConverter(Triton.Board.UrlType.EDIT_BOARD_CONTENT, parameterMap, contentSummary, boardCommentList),
                                            function (status, data, request) {

                                                Triton.Board.messageHandler(Triton.Board.MessageType.LOADING_END);
                                                if (Triton.Board.responseChecker(Triton.Board.UrlType.EDIT_BOARD_CONTENT, status, data, request) == false) {
                                                    return;
                                                }

                                                request.object.boardCommentList.reload();

                                            }, {
                                                boardCommentList: boardCommentList
                                            });

                                    },
                                    css: {
                                        'margin-left': '5px'
                                    }
                                }));

                            }
                        });

                        commentHeaderSection.append(editImage);

                        var deleteImage = new Triton.Image({
                            theme: Triton.Image.Theme.CommentButtonDel,
                            attr: {
                                src: Triton.ReplaceMap.BASE_PATH + '/img/img_comment_delete.png'
                            },
                            boardCommentList: boardCommentList,
                            contentSummary: contentSummary,
                            commentItem: commentItem,
                            onClick: function (e) {

                                var commentItem = e.data.commentItem;
                                var contentSummary = e.data.contentSummary;
                                var boardCommentList = e.data.boardCommentList;

                                Triton.Board.messageHandler(Triton.Board.MessageType.DELETE_BOARD_CONTENT, undefined, undefined, function (data) {

                                    var boardCommentList = data.boardCommentList;
                                    var contentSummary = data.contentSummary;
                                    var commentItem = data.commentItem;

                                    Triton.Board.messageHandler(Triton.Board.MessageType.LOADING_START);
                                    boardCommentList.requester.ajaxWithoutBlank(Triton.Board.ApiUrl.DELETE_BOARD_CONTENT,
                                        Triton.Board.parameterMapConverter(Triton.Board.UrlType.DELETE_BOARD_CONTENT, boardCommentList.getParameterMap(), contentSummary, boardCommentList),
                                        function (status, data, request) {

                                            Triton.Board.messageHandler(Triton.Board.MessageType.LOADING_END);
                                            if (Triton.Board.responseChecker(Triton.Board.UrlType.DELETE_BOARD_CONTENT, status, data, request) == false) {
                                                return;
                                            }

                                            var commentItem = request.object.commentItem;
                                            commentItem.remove();

                                            //var boardCommentList = request.object.boardCommentList;
                                            //boardCommentList.reload();

                                        }, {
                                            commentItem: commentItem,
                                            boardCommentList: boardCommentList
                                        });

                                }, {
                                    contentSummary: contentSummary,
                                    commentItem: commentItem,
                                    boardCommentList: boardCommentList
                                });
                            }
                        });

                        commentHeaderSection.append(deleteImage);
                    }
                }
            }

        }, {
            boardCommentList: this
        });


};


var PageConstructor = Triton.PageConstructor = {

    HEADER_ELEMENT_QUICK_MENU: 'HEADER_ELEMENT_QUICK_MENU',
    HEADER_ELEMENT_ALARM_BUTTON: 'HEADER_ELEMENT_ALARM_BUTTON',
    HEADER_ELEMENT_LOGO: 'HEADER_ELEMENT_LOGO',
    HEADER_ELEMENT_MORE: 'HEADER_ELEMENT_MORE',
    HEADER_ELEMENT_MENU_BUTTON: 'HEADER_ELEMENT_MENU_BUTTON',
    HEADER_ELEMENT_ICON_BUTTON: 'HEADER_ELEMENT_ICON_BUTTON',
    HEADER_ELEMENT_BUTTON: 'HEADER_ELEMENT_BUTTON',
    HEADER_ELEMENT_SERVICE_PAGE: 'HEADER_ELEMENT_SERVICE_PAGE',

    MenuOpenedKey: {
        AUTO: 'auto',
        STORAGE: 'storage'
    },

    HeaderMenuButtonImageUrl: {
        BOOK: '/res/lia/triton/img/header_menu_button/book.png',
        CALC: '/res/lia/triton/img/header_menu_button/calc.png',
        CAP: '/res/lia/triton/img/header_menu_button/cap.png',
        CALENDAR: '/res/lia/triton/img/header_menu_button/calendar.png',
        DOCUMENT: '/res/lia/triton/img/header_menu_button/document.png',
        EMAIL: '/res/lia/triton/img/header_menu_button/email.png',
        EXIT: '/res/lia/triton/img/header_menu_button/exit.png',
        HEADSET: '/res/lia/triton/img/header_menu_button/headset.png',
        HOMEPAGE: '/res/lia/triton/img/header_menu_button/homepage.png',
        LOGIN: '/res/lia/triton/img/header_menu_button/login.png',
        LOGOUT: '/res/lia/triton/img/header_menu_button/logout.png',
        MYPAGE: '/res/lia/triton/img/header_menu_button/mypage.png',
        NOTE: '/res/lia/triton/img/header_menu_button/note.png',
        PEN: '/res/lia/triton/img/header_menu_button/pen.png',
        PORTAL: '/res/lia/triton/img/header_menu_button/portal.png',
        POST: '/res/lia/triton/img/header_menu_button/post.png',
        PRESENTATION: '/res/lia/triton/img/header_menu_button/presentation.png',
        SEARCH: '/res/lia/triton/img/header_menu_button/search.png',
        SUPPORT: '/res/lia/triton/img/header_menu_button/support.png',
        X: '/res/lia/triton/img/header_menu_button/x.png'
    },

    TYPE_1: 'Type1',
    TYPE_2: 'Type2',
    TYPE_3: 'Type3',

    Type1: {

        HTML: '<div id="wrapper">\n' +
            '<div id="page" class="page1" style="position:absolute;top:82px;left:75px;right:0;padding:35px 30px;overflow:hidden;min-width:1095px;min-height:800px">\n' +
            '</div>\n' +
            '<div id="category_menu_button_layout">\n' +
            '</div>\n' +

            '<div id="side_menu">\n' +
            '<div id="side_menu_logo">\n' +
            '<img alt="side menu logo" />' +
            '</div>\n' +
            '<div id="sub_menu_buttons">\n' +
            '</div>\n' +
            '</div>\n' +

            '<div id="sub_side_menu_buttons">\n' +
            '</div>\n' +

            '<div id="quick_menu">\n' +
            '</div>\n' +

            '<div id="popup_layout_list">\n' +
            '</div>\n' +

            '<div class="dim" id="loading_dim" lia-opacity="0" lia-popup="#loading_popup"></div>\n' +
            '<div class="popup loading" id="loading_popup" lia-dim="#loading_dim" lia-src="" lia-start-index="" lia-end-index=""></div>\n' +
            '</div>',

        LOADING_IMAGE_URL: '/res/lia/triton/img/loading_bar_1/loading_{index}.png',
        LOADING_IMAGE_START_INDEX: 1,
        LOADING_IMAGE_END_INDEX: 16
    },

    Type2: {

        HTML: '<div id="wrapper">\n' +
            '<div class="page1" style="position:absolute;top:118px;left:0;right:0;padding:25px 20px;overflow:hidden;min-height:800px">\n' +
            '</div>\n' +

            '<div id="top_drop_down_menu">\n' +
            '</div>\n' +

            '<div id="popup_layout_list">\n' +
            '</div>\n' +

            '<div class="dim" id="loading_dim" lia-opacity="0" lia-popup="#loading_popup"></div>\n' +
            '<div class="popup loading" id="loading_popup" lia-dim="#loading_dim" lia-src="" lia-start-index="" lia-end-index=""></div>\n' +
            '</div>',

        LOADING_IMAGE_URL: TritonTheme.LOADING_IMAGE_URL,
        LOADING_IMAGE_START_INDEX: TritonTheme.LOADING_IMAGE_START_INDEX,
        LOADING_IMAGE_END_INDEX: TritonTheme.LOADING_IMAGE_END_INDEX
    },

    Type3: {

        HTML:
            '<div id="wrapper">\n' +

            '<div class="page1" style="position:absolute;top:118px;left:0;right:0;padding:25px 20px;overflow:hidden;min-height:800px">\n' +
            '</div>\n' +

            '<div id="side_drop_down_menu">\n' +
            '</div>\n' +

            '<div id="popup_layout_list">\n' +
            '</div>\n' +

            '<div class="dim" id="loading_dim" lia-opacity="0" lia-popup="#loading_popup"></div>\n' +
            '<div class="popup loading" id="loading_popup" lia-dim="#loading_dim" lia-src="" lia-start-index="" lia-end-index=""></div>\n' +
            '</div>',

        LOADING_IMAGE_URL: TritonTheme.LOADING_IMAGE_URL,
        LOADING_IMAGE_START_INDEX: TritonTheme.LOADING_IMAGE_START_INDEX,
        LOADING_IMAGE_END_INDEX: TritonTheme.LOADING_IMAGE_END_INDEX
    },

    init: function (options) {

        var type = Triton.PageConstructor.type = options['type'];
        var appendTo = Triton.PageConstructor.appendTo = options['appendTo'];

        var settings = Triton.PageConstructor.settings = Triton.PageConstructor[type];
        var html = settings['HTML'];
        appendTo.append(html);

        var loadingImageUrl = Lia.pd(settings['LOADING_IMAGE_URL'], options, 'loadingImageUrl');
        var loadingImageStartIndex = Lia.pd(settings['LOADING_IMAGE_START_INDEX'], options, 'loadingImageStartIndex');
        var loadingImageEndIndex = Lia.pd(settings['LOADING_IMAGE_END_INDEX'], options, 'loadingImageEndIndex');

        var jLoadingPopup = appendTo.find('#loading_popup');
        jLoadingPopup.attr({
            'lia-src': loadingImageUrl,
            'lia-start-index': loadingImageStartIndex,
            'lia-end-index': loadingImageEndIndex
        });

        var jPageContainer = appendTo.find('.page1');
        options['jPageContainer'] = jPageContainer;

        Triton.PageConstructor.instaince = undefined;

        if (Triton.PageConstructor.checkType(Triton.PageConstructor.TYPE_1)) {
            Triton.PageConstructor.instaince = Triton.SideMenu;
            Triton.PageConstructor.instaince.init(options);

            Triton.PageConstructor.categoryMenu = Triton.CategoryMenu;
            Triton.PageConstructor.categoryMenu.init(options);

        } else if (Triton.PageConstructor.checkType(Triton.PageConstructor.TYPE_2)) {

            Triton.PageConstructor.instaince = Triton.TopDropDownMenu;
            Triton.PageConstructor.instaince.init(options);

        } else if (Triton.PageConstructor.checkType(Triton.PageConstructor.TYPE_3)) {

            Triton.PageConstructor.instaince = Triton.SideDropDownMenu;
            Triton.PageConstructor.instaince.init(options);
        }

        Triton.LoadingPopupManager.init();
    },

    checkType: function (type) {
        return (Triton.PageConstructor.type == type);
    },

    setMenuShowChecker: function (func) {
        Triton.PageConstructor.instaince.setMenuShowChecker(func);
    },

    resize: function () {
        Triton.PageConstructor.instaince.resize();
    },

    add: function (menu) {
        Triton.PageConstructor.instaince.add(menu);
    },

    addHeaderElement: function (item) {

        if (!Triton.PageConstructor.checkType(Triton.PageConstructor.TYPE_1)) {
            return Triton.PageConstructor.instaince.addHeaderElement(item);
        }
    },

    addCategoryMenu: function (menu) {

        if (Triton.PageConstructor.checkType(Triton.PageConstructor.TYPE_1)) {
            Triton.PageConstructor.categoryMenu.add(menu);
        } else { // if (Triton.PageConstructor.checkType(Triton.PageConstructor.TYPE_2)) {
            Triton.PageConstructor.instaince.addCategoryMenu(menu);
        }
    },

    addAlarmItem: function (item, backward) {

        // 1타입이 아닌경우 설정
        if (!Triton.PageConstructor.checkType(Triton.PageConstructor.TYPE_1)) {
            Triton.PageConstructor.instaince.addAlarmItem(item, backward);
        }
    },

    addSubMenu: function (menu) {

        if (Triton.PageConstructor.checkType(Triton.PageConstructor.TYPE_1)) {

        } else if (Triton.PageConstructor.checkType(Triton.PageConstructor.TYPE_2)) {
            Triton.PageConstructor.instaince.addSubMenu(menu);
        }
    },

    addQuickMenu: function (menu) {

        if (Triton.PageConstructor.checkType(Triton.PageConstructor.TYPE_1)) {
            Triton.PageConstructor.quickMenu.add(menu);
        } else {
            Triton.PageConstructor.instaince.addQuickMenu(menu);
        }
    },

    setCategoryMenuShowChecker: function (menu) {

        if (Triton.PageConstructor.checkType(Triton.PageConstructor.TYPE_1)) {
            Triton.PageConstructor.categoryMenu.setMenuShowChecker(menu);
        }
    },


    getCurrentMenuName: function () {

        // 1타입이 아닌경우 설정
        if (!Triton.PageConstructor.checkType(Triton.PageConstructor.TYPE_1)) {
            return Triton.PageConstructor.instaince.getCurrentMenuName();
        }

        return undefined;
    },


    mark: function (parameterMap, beforeParameterMap) {

        Triton.PageConstructor.instaince.mark(parameterMap, beforeParameterMap);

        if (Triton.PageConstructor.checkType(Triton.PageConstructor.TYPE_1)) {
            Triton.PageConstructor.categoryMenu.mark(parameterMap, beforeParameterMap);
        }
    },

    onNormalizeParameter: function (parameterMap) {

        if (Triton.PageConstructor.checkType(Triton.PageConstructor.TYPE_1)) {
            parameterMap = Triton.PageConstructor.categoryMenu.onNormalizeParameter(parameterMap);
        }

        return parameterMap;
    },

    setHeaderElement: function (type, data) {

        if (Triton.PageConstructor.checkType(Triton.PageConstructor.TYPE_1)
            && type == PageConstructor.HEADER_ELEMENT_SERVICE_PAGE) {
            Triton.PageConstructor.categoryMenu.markServicePageMenu(data);
            return;
        }

        if (Triton.PageConstructor.checkType(Triton.PageConstructor.TYPE_1)
            && type == PageConstructor.HEADER_ELEMENT_QUICK_MENU) {

            Triton.PageConstructor.quickMenu = Triton.QuickMenu;
            Triton.PageConstructor.quickMenu.init({
                appendTo: $('#quick_menu')
            });
            return;
        }

        if (Triton.PageConstructor.checkType(Triton.PageConstructor.TYPE_1)
            && type == PageConstructor.HEADER_ELEMENT_LOGO) {

            var logoImageUrl = Lia.p(data, 'logoImageUrl');
            var logoImageWidth = Lia.pd('', data, 'logoImageWidth');
            var logoImageHeight = Lia.pd('', data, 'logoImageHeight');

            var jElement = $('#side_menu_logo img');
            if (String.isBlank(logoImageUrl)) {
                jElement.hide();
            } else {

                jElement.attr('src', logoImageUrl).css({
                    'max-width': logoImageWidth,
                    'max-height': logoImageHeight
                });
                jElement.show();

                var onClick = Lia.p(data, 'onClick');
                if (onClick != undefined) {

                    jElement.css({
                        'cursor': 'pointer'
                    }).off('click').on('click', {
                        onClick: onClick
                    }, function (e) {
                        e.preventDefault();
                        e.stopPropagation();

                        var onClick = e.data.onClick;
                        onClick();
                    });

                } else {

                    jElement.css({
                        'cursor': 'default'
                    });
                }
            }
        }

        if (Triton.PageConstructor.checkType(Triton.PageConstructor.TYPE_1)
            && type == PageConstructor.HEADER_ELEMENT_QUICK_MENU) {

            Triton.PageConstructor.quickMenu = Triton.QuickMenu;
            Triton.PageConstructor.quickMenu.init({
                appendTo: $('#quick_menu')
            });
            return;
        }

        if (!Triton.PageConstructor.checkType(Triton.PageConstructor.TYPE_1)) {
            Triton.PageConstructor.instaince.setHeaderElement(type, data);
        }
    },


    getHeaderElement: function (type, data) {

        if (!Triton.PageConstructor.checkType(Triton.PageConstructor.TYPE_1)) {
            return Triton.PageConstructor.instaince.getHeaderElement(type, data);
        }
    },

    setButtonTabBar: function (use, options) {

        if (!Triton.PageConstructor.checkType(Triton.PageConstructor.TYPE_1)) {
            return Triton.PageConstructor.instaince.setButtonTabBar(use, options);
        }
    }

};


var SideDropDownMenu = Triton.SideDropDownMenu = {

    HEADER_ELEMENT_LOGO: 'HEADER_ELEMENT_LOGO',

    HEADER_ELEMENT_MENU_BUTTON: 'HEADER_ELEMENT_MENU_BUTTON',
    HEADER_ELEMENT_ICON_BUTTON: 'HEADER_ELEMENT_ICON_BUTTON',

    HEADER_ELEMENT_MORE: 'HEADER_ELEMENT_MORE',
    HEADER_ELEMENT_QUICK_MENU: 'HEADER_ELEMENT_QUICK_MENU',
    HEADER_ELEMENT_ALARM_BUTTON: 'HEADER_ELEMENT_ALARM_BUTTON',
    HEADER_ELEMENT_BUTTON: 'HEADER_ELEMENT_BUTTON',

    MenuOpenedKey: Triton.PageConstructor.MenuOpenedKey,
    HeaderMenuButtonImageUrl: Triton.PageConstructor.HeaderMenuButtonImageUrl,

    HTML: '<div style="position:relative;">' +

        '<div class="side_drop_down_menu_panel_background" style="position:fixed;top:0;bottom:0;border-right:1px solid ' + TritonTheme.SIDE_DROP_DOWN_MENU_PANEL_LINE_COLOR + ';width:' + TritonTheme.SIDE_DROP_DOWN_MENU_PANEL_WIDTH_DEFAULT + ';background-color:' + TritonTheme.SIDE_DROP_DOWN_MENU_PANEL_BACKGROUND_COLOR + ';display:none;"></div>' +

        // 추가 상단 바
        '<div class="side_drop_down_menu_header_container" style="position:absolute;top:0;left:0;right:0;z-index:100;">' +
        '<div class="side_drop_down_menu_header_button_tab_bar" style="display:none;overflow:auto;font-family: notokr-regular, NanumGothic;line-height:35px;font-size:13px;background-color:' + TritonTheme.SIDE_DROP_DOWN_MENU_STATUS_BACKGROUND_COLOR + ';border-bottom:1px solid ' + TritonTheme.SIDE_DROP_DOWN_MENU_PANEL_BORDER_COLOR + '">' +
        '<div class="side_drop_down_menu_header_button_tab_bar_left_section" style="float:left;overflow:auto;">' +
        '</div>' +

        '<div class="side_drop_down_menu_header_button_tab_bar_right_section" style="float:right;overflow:auto;">' +
        '</div>' +
        '</div>' +

        // 상단 상태 바
        '<div class="side_drop_down_menu_header_status_bar" style="display:none;overflow:auto;font-family: notokr-regular, NanumGothic;line-height:35px;font-size:13px;background-color:' + TritonTheme.SIDE_DROP_DOWN_MENU_STATUS_BACKGROUND_COLOR + ';border-bottom:1px solid ' + TritonTheme.SIDE_DROP_DOWN_MENU_PANEL_BORDER_COLOR + '">' +

        '<div style="float:left;height:35px;">' +
        '<img class="side_drop_down_menu_header_status_bar_profile_img" src="/res/lia/triton/img/menu_topdropdown/ico_profile.png" style="float:left;margin:7px 10px 0 20px;" alt="top drop down menu header status bar profile img"/>' +
        '<div class="side_drop_down_menu_header_status_bar_name" style="float:left;display:none;"><span class="side_drop_down_menu_header_status_bar_name_text" style="font-family: notokr-medium, NanumGothicBold;"></span><span class="strings" lia-string-key="TRITON.HEADER.HELLO"></span></div>' +
        '<div class="side_drop_down_menu_header_status_bar_info" style="float:left;display:none;"><span style="padding-left:10px;padding-right:10px;">|</span><span class="side_drop_down_menu_header_status_bar_info_text" style="font-family: notokr-medium, NanumGothicBold;"></span></div>' +
        '</div>' +

        '<div style="float:right;overflow:auto;">' +

        '<div class="side_drop_down_menu_header_status_bar_login_info" style="height:35px;float:left;padding-right:10px;display:none;"><span style="font-family: notokr-medium, NanumGothicBold;" class="strings" lia-string-key="TRITON.HEADER.LAST_LOGGED_IN"></span> <span class="side_drop_down_menu_header_status_bar_login_date">-</span><span class="side_drop_down_menu_header_status_bar_dash" style="display:none;"> / </span><span class="side_drop_down_menu_header_status_bar_login_ip_address" style="display:none;">-</span></div>' +
        '<div class="side_drop_down_menu_header_status_bar_time" style="display:none;height:35px;float:left;background-color:' + TritonTheme.SIDE_DROP_DOWN_MENU_STATUS_CLOCK_BACKGROUND_COLOR + ';color:' + TritonTheme.SIDE_DROP_DOWN_MENU_STATUS_CLOCK_COLOR + ';font-family: notokr-medium, NanumGothicBold;padding-left:10px;padding-right:10px;font-size:14px;border-left:1px solid ' + TritonTheme.SIDE_DROP_DOWN_MENU_PANEL_BORDER_COLOR + '"></div>' +

        '</div>' +

        '</div>' +

        // 헤더
        '<div class="side_drop_down_menu_header" style="position:relative;height:73px;background-color:' + TritonTheme.BACKGROUND_COLOR + ';border-bottom:1px solid ' + TritonTheme.SIDE_DROP_DOWN_MENU_PANEL_BORDER_COLOR + ';">' +

        // 로고 이미지
        '<div class="side_drop_down_menu_header_element_logo" style="position:absolute;top:0;width:100%;height:73px;line-height:73px;text-align:center;display:none;">' +
        '<img title="Logo" style="vertical-align:middle;" alt="logo"/>' +
        '</div>' +

        // 오른쪽 메뉴
        '<div class="side_drop_down_menu_header_element_right_layout" style="position:absolute;right:0;top:0;height:73px;line-height:73px;">' +
        '</div>' +

        // 왼쪽 메뉴
        '<div class="side_drop_down_menu_header_element_left_layout" style="position:absolute;left:0;top:0;">' +
        '</div>' +


        '</div>' +

        // 모바일 해더
        '<div class="side_drop_down_menu_header_mobile" style="position:relative;height:50px;background-color:' + TritonTheme.BACKGROUND_COLOR + ';border-bottom:1px solid ' + TritonTheme.SIDE_DROP_DOWN_MENU_PANEL_BORDER_COLOR + ';display:none;">' +

        // 로고 이미지
        '<div class="side_drop_down_menu_header_element_logo_mobile" style="position:absolute;top:0;width:100%;height:50px;line-height:50px;text-align:center;display:none;">' +
        '<img title="Logo" style="vertical-align:middle;width:auto;" alt="Logo"/>' +
        '</div>' +

        // 오른쪽 이미지
        '<div class="side_drop_down_menu_header_element_right_layout_mobile" style="position:absolute;top:0;right:0;">' +
        '</div>' +

        // 왼쪽 이미지
        '<div class="side_drop_down_menu_header_element_left_layout_mobile" style="position:absolute;left:0;top:0;">' +
        '</div>' +

        '</div>' +

        // 탭
        '<div class="side_drop_down_menu_tab_container" style="position:relative;height:44px;display:none;">' +

        '<div style="position:absolute;top:0;left:0;right:0;height:43px;border-bottom:1px solid ' + TritonTheme.SIDE_DROP_DOWN_MENU_PANEL_BORDER_COLOR + ';background-color:' + TritonTheme.SIDE_DROP_DOWN_MENU_TAB_CONTAINER_BACKGROUND_COLOR + ';"></div>' +

        '<div style="position:relative;overflow:hidden;top:0;margin-left:15px;margin-right:70px;padding-top:9px;height:35px;">' +
        '<div class="side_drop_down_menu_tab_panel" style="position:absolute;"></div>' +
        '</div>' +

        '<img src="' + TritonTheme.SIDE_DROP_DOWN_MENU_TAB_LEFT_ARROW_BUTTON_IMAGE_URL + '" ' +
        ' class="side_drop_down_menu_tab_left_button image_button press" style="position:absolute;top:1px;right:35px;display:none;" alt="top drop down menu tab left button press"/>' +

        '<img src="' + TritonTheme.SIDE_DROP_DOWN_MENU_TAB_RIGHT_ARROW_BUTTON_IMAGE_URL + '" ' +
        ' class="side_drop_down_menu_tab_right_button image_button press" style="position:absolute;top:1px;right:15px;display:none;" alt="top drop down menu tab right button press"/>' +
        '</div>' +

        '</div>' +

        '<div class="side_drop_down_menu_panel" style="z-index:100;position:absolute;border-right:1px solid ' + TritonTheme.SIDE_DROP_DOWN_MENU_PANEL_LINE_COLOR + ';border-top:1px solid ' + TritonTheme.SIDE_DROP_DOWN_MENU_PANEL_LINE_COLOR + ';width:' + TritonTheme.SIDE_DROP_DOWN_MENU_PANEL_WIDTH_DEFAULT + ';background-color:' + TritonTheme.SIDE_DROP_DOWN_MENU_PANEL_BACKGROUND_COLOR + ';min-height:45px;display:none;">' +
        '</div>' +

        // 퀵메뉴
        '<div class="side_drop_down_menu_quick_menu_panel" style="position:absolute;left:0;top:0;right:0;bottom:0;display:none;">' +

        '<div class="side_drop_down_menu_quick_panel_content" style="position:absolute;top:74px;width:auto;height:auto;margin-bottom:20px;z-index:1000;">' +

        '<div style="position:relative;top:10px;overflow:auto;border:1px solid ' + TritonTheme.SIDE_DROP_DOWN_MENU_PANEL_BORDER_COLOR + ';border-radius:5px;background:' + TritonTheme.BACKGROUND_COLOR + ';">' +
        '<div class="side_drop_down_menu_quick_menu_item_panel" style=""></div>' +
        '</div>' +

        '<img src="' + TritonTheme.SIDE_DROP_DOWN_MENU_ARROW_IMAGE_URL + '" style="position:absolute;top:0;left:50%;margin-left:-7px;z-index:1000; " alt="top drop down menu quick panel content"/>' +

        '</div>' +

        '</div>' +


        // 알림 패널
        '<div class="side_drop_down_menu_alarm_panel" style="position:absolute;left:0;top:0;right:0;bottom:0;display:none;z-index:1000;">' +

        '<div class="side_drop_down_menu_alarm_panel_content" style="position:absolute;top:74px;width:auto;height:auto;margin-bottom:20px;">' +

        '<div style="position:relative;top:10px;overflow:auto;border:1px solid ' + TritonTheme.SIDE_DROP_DOWN_MENU_PANEL_BORDER_COLOR + ';border-radius:5px;background:' + TritonTheme.BACKGROUND_COLOR + ';">' +
        '<div class="side_drop_down_menu_alarm_item_panel" style="height:400px;width:350px;overflow-y:auto;">' +
        '<div class="side_drop_down_menu_alarm_item_panel_message" style="line-height:400px;text-align:center;">표시할 항목이 없습니다.</div>' +
        '</div>' +
        '</div>' +

        '<img class="side_drop_down_menu_alarm_panel_arrow_image" src="' + TritonTheme.SIDE_DROP_DOWN_MENU_ARROW_IMAGE_URL + '" style="position:absolute;top:0;margin-left:-7px " alt="top drop down menu alarm panel arrow image"/>' +

        '</div>' +

        '</div>' +


        // 더보기
        '<div class="side_drop_down_menu_more_panel" style="position:absolute;left:0;top:0;right:0;bottom:0;display:none;z-index:1000;">' +

        '<div class="side_drop_down_menu_more_panel_content" style="position:absolute;right:5px;top:48px;width:200px;height:auto;margin-bottom:20px;font-size:15px;color:' + TritonTheme.SIDE_DROP_DOWN_MENU_TEXT_COLOR + ';">' +

        '<div class="side_drop_down_menu_more_item_panel" style="position:relative;top:10px;overflow:auto;border:1px solid ' + TritonTheme.SIDE_DROP_DOWN_MENU_PANEL_BORDER_COLOR + ';border-radius:5px;background:' + TritonTheme.BACKGROUND_COLOR + ';">' +
        '</div>' +

        '<img src="' + TritonTheme.SIDE_DROP_DOWN_MENU_ARROW_IMAGE_URL + '" style="position:absolute;top:0;right:10px;" alt="top drop down menu more panel content"/>' +
        '</div>' +

        '</div>' +


        // 탭 컨텍스트 메뉴
        '<div class="side_drop_down_menu_tab_context_menu_panel" style="position:absolute;left:0;top:0;right:0;bottom:0;display:none;">' +

        '<div style="position:absolute;top:0px;width:auto;height:auto;margin-bottom:0px;">' +

        '<div style="position:relative;top:0px;overflow:auto;border:1px solid ' + TritonTheme.SIDE_DROP_DOWN_MENU_PANEL_BORDER_COLOR + ';border-radius:1px;background:' + TritonTheme.BACKGROUND_COLOR + ';">' +
        '<div class="side_drop_down_menu_quick_tab_context_menu_item_panel"></div>' +
        '</div>' +

        '</div>' +
        '</div>' +

        '</div>',

    HTML_TAB:
        '<div class="side_drop_down_menu_tab button" style="float:left;position:relative;background-color:' + TritonTheme.SIDE_DROP_DOWN_MENU_TAB_BACKGROUND_COLOR + ';font-family: notokr-regular, NanumGothic;font-size:14px;color:' + TritonTheme.SIDE_DROP_DOWN_MENU_TEXT_COLOR + ';line-height:33px;height:33px;border-left:1px solid ' + TritonTheme.SIDE_DROP_DOWN_MENU_TAB_BORDER_COLOR + ';border-top:1px solid ' + TritonTheme.SIDE_DROP_DOWN_MENU_TAB_BORDER_COLOR + ';border-right:1px solid ' + TritonTheme.SIDE_DROP_DOWN_MENU_TAB_BORDER_COLOR + ';border-top-left-radius: 3px;border-top-right-radius: 3px;">' +
        '<div class="side_drop_down_menu_tab_text" style="position:relative;margin-left:15px;margin-right:30px;"></div>' +
        '<div style="position:absolute;top:0;right:10px;height:33px;line-height:33px;" class="side_drop_down_menu_tab_close_button image_button_container press">' +
        '<img style="width:8px;vertical-align:middle" src="' + TritonTheme.SIDE_DROP_DOWN_MENU_TAB_CLOSE_BUTTON_IMAGE_URL + '" alt="top drop down menu tab close button"/>' +
        '</div>' +
        '</div>',

    HTML_MENU_PANEL_BUTTON_DEPTH_1:
        '<div class="side_drop_down_menu_panel_button">' +
        '<div class="side_drop_down_menu_panel_button button" style="position:relative;overflow:auto;padding-left:15px;padding-right:20px;height:50px;color:' + TritonTheme.SIDE_DROP_DOWN_MENU_PANEL_TEXT_COLOR + ';font-family: notokr-medium, NanumGothicBold;font-size:15px;">' +
        '<div style="float:left;width:16px;height:50px;text-align:center;vertical-align:middle;line-height:50px;padding-right:12px;display:none;" class="side_drop_down_menu_icon"></div>' +
        '<a style="float:left;line-height:50px; font-size:14px;" class="side_drop_down_menu_text"></a>' +
        '<img class="side_drop_down_menu_arrow" style="position:absolute;right:20px;top:21px;display:none;" src="' + TritonTheme.SIDE_DROP_DOWN_MENU_PANEL_1_DOWN_ARROW_IMAGE_URL + '" alt="top drop down menu text" />' +
        '</div>' +
        '<div class="side_drop_down_menu_panel_button_sub" style="background-color:' + TritonTheme.SIDE_DROP_DOWN_MENU_PANEL_DEPTH_2_BACKGROUND_COLOR + ';display:none;"></div>' +
        '</div>',

    HTML_MENU_PANEL_BUTTON_DEPTH_2:
        '<div class="side_drop_down_menu_panel_button">' +
        '<div class="side_drop_down_menu_panel_button button" style="position:relative;overflow:auto;padding-left:15px;padding-right:20px;height:50px;color:' + TritonTheme.SIDE_DROP_DOWN_MENU_PANEL_TEXT_COLOR + ';font-family: notokr-medium, NanumGothicBold;font-size:15px;">' +
        '<div style="float:left;width:16px;height:50px;text-align:center;vertical-align:middle;line-height:50px;padding-right:10px;">·</div>' +
        '<a style="position:absolute;left:35px;right:40px;line-height:50px; font-size:14px;text-overflow: ellipsis; white-space: nowrap; overflow: hidden;" class="side_drop_down_menu_text"></a>' +
        '<img class="side_drop_down_menu_arrow" style="position:absolute;right:20px;top:19px;display:none;" src="' + TritonTheme.SIDE_DROP_DOWN_MENU_PANEL_2_DOWN_ARROW_IMAGE_URL + '" alt="top drop down menu text" />' +
        '</div>' +
        '<div class="side_drop_down_menu_panel_button_sub" style="display:none;margin-left:20px;margin-right:20px;border-bottom:5px solid ' + TritonTheme.SIDE_DROP_DOWN_MENU_PANEL_DEPTH_2_BACKGROUND_COLOR + ';background-color:' + TritonTheme.SIDE_DROP_DOWN_MENU_PANEL_DEPTH_3_BACKGROUND_COLOR + ';"></div>' +
        '</div>',

    HTML_MENU_PANEL_BUTTON_DEPTH_3:
        '<div class="side_drop_down_menu_panel_button">' +
        '<div class="side_drop_down_menu_panel_button button" style="position:relative;overflow:auto;padding-left:10px;padding-right:10px;height:50px;color:' + TritonTheme.SIDE_DROP_DOWN_MENU_PANEL_TEXT_COLOR + ';font-family: notokr-medium, NanumGothicBold;font-size:15px;">' +
        '<div style="float:left;width:10px;height:50px;text-align:center;vertical-align:middle;line-height:50px;padding-right:5px;">·</div>' +
        '<a style="position:absolute;left:25px;right:10px;line-height:50px; font-size:14px;text-overflow: ellipsis; white-space: nowrap; overflow: hidden;" class="side_drop_down_menu_text"></a>' +
        '<img class="side_drop_down_menu_arrow" style="position:absolute;right:20px;top:19px;display:none;" src="' + TritonTheme.SIDE_DROP_DOWN_MENU_PANEL_3_DOWN_ARROW_IMAGE_URL + '" alt="top drop down menu text" />' +
        '</div>' +
        '<div class="side_drop_down_menu_panel_button_sub" style="display:none;margin-left:15px;margin-right:15px;padding-top:10px;padding-bottom:10px;border-bottom:5px solid ' + TritonTheme.SIDE_DROP_DOWN_MENU_PANEL_DEPTH_3_BACKGROUND_COLOR + ';background-color:' + TritonTheme.SIDE_DROP_DOWN_MENU_PANEL_DEPTH_4_BACKGROUND_COLOR + ';"></div>' +
        '</div>',

    HTML_MENU_PANEL_BUTTON_DEPTH_4:
        '<div class="side_drop_down_menu_panel_button">' +
        '<div class="side_drop_down_menu_panel_button button" style="position:relative;overflow:auto;padding-left:10px;padding-right:10px;height:30px;color:' + TritonTheme.SIDE_DROP_DOWN_MENU_PANEL_TEXT_COLOR + ';font-family: notokr-medium, NanumGothicBold;font-size:13px;">' +
        '<div style="float:left;width:10px;height:30px;text-align:center;vertical-align:middle;line-height:30px;padding-right:5px;">·</div>' +
        '<a style="position:absolute;left:25px;right:10px;line-height:30px; font-size:14px;text-overflow: ellipsis; white-space: nowrap; overflow: hidden;" class="side_drop_down_menu_text"></a>' +
        // '<img class="side_drop_down_menu_arrow" style="position:absolute;right:20px;top:19px;display:none;" src="' + TritonTheme.SIDE_DROP_DOWN_MENU_PANEL_2_DOWN_ARROW_IMAGE_URL + '" alt="top drop down menu text" />' +
        '</div>' +
        // '<div class="side_drop_down_menu_panel_button_sub"></div>' +
        '</div>',

    HTML_MORE_BUTTON_BACKGROUND_MOBILE: ['#ffffff', '#e9eef6', '#f5f8fb'],
    HTML_MORE_BUTTON_MOBILE:
        '<div>' +
        '<div class="button side_drop_down_menu_more_button_mobile" ' +
        'style="position:relative;height:43px;line-height:43px;clear:both;width:100%;display:block;font-family:notokr-regular, NanumGothic;color:' + TritonTheme.SIDE_DROP_DOWN_MENU_TEXT_COLOR + ';">' +
        '<div class="side_drop_down_menu_more_button_icon_mobile" style="float:left;width:16px;height:43px;text-align:center;vertical-align:middle;line-height:43px;padding-left:15px;padding-right:5px;display:none;"></div>' +
        '<div class="side_drop_down_menu_more_button_text_mobile" style="padding-left:15px;padding-right:20px;float:left;line-height:43px; font-size:14px;"></div>' +
        '<div class="side_drop_down_menu_more_button_arrow_mobile" style="float:right;padding-left:5px;width:10px;padding-right:15px;height:43px;text-align:center;vertical-align:middle;line-height:43px;display:none;">' +
        '<img src="' + TritonTheme.SIDE_DROP_DOWN_MENU_MOBILE_1DEPTH_DOWN_ARROW_IMAGE_URL + '" style="vertical-align:middle;" alt="top drop down menu more button arrow mobile"/>' +
        '</div>' +
        '</div>' +
        '<div class="side_drop_down_menu_more_button_sub_panel_mobile" style="display:none;clear:both;"></div>' +
        '</div>',


    HTML_QUICK_MENU_BUTTON:
        '<div class="image_button_container" style="position:relative;text-align:center;overflow:auto;width:72px;padding-left:10px;padding-right:10px;padding-top:22px;padding-bottom:22px;color:' + TritonTheme.SIDE_DROP_DOWN_MENU_TEXT_COLOR + ';font-family: notokr-regular, NanumGothic;font-size:14px;">' +
        '<div class="side_drop_down_menu_quick_menu_button_image_panel" style="padding-bottom:10px;display:none;">' +
        '<img style="display:block;margin:0 auto;" alt="top drop down menu quick menu button image panel"/>' +
        '</div>' +
        '<div class="side_drop_down_menu_quick_menu_button_text"></div>' +
        '</div>',

    HTML_TAB_CONTEXT_MENU_BUTTON:
        '<div class="button" style="position:relative;text-align:left;overflow:auto;padding:10px;color:' + TritonTheme.SIDE_DROP_DOWN_MENU_TEXT_COLOR + ';font-family: notokr-regular, NanumGothic;font-size:14px;"></div>',

    HTML_ALARM_ITEM:
        '<div class="button" style="border-bottom:1px solid ' + TritonTheme.SIDE_DROP_DOWN_MENU_BORDER_COLOR + ';position:relative;text-align:left;overflow:auto;padding:10px;color:' + TritonTheme.SIDE_DROP_DOWN_MENU_TEXT_COLOR + ';font-family: notokr-regular, NanumGothic;font-size:14px;">' +
        '<div class="side_drop_down_menu_alarm_item_sub_title" style="font-family: notokr-regular, NanumGothic;color:' + TritonTheme.SIDE_DROP_DOWN_MENU_ALARM_SUB_TITLE_TEXT_COLOR + ';display:none;"></div>' +
        '<div class="side_drop_down_menu_alarm_item_title" style="font-family: notokr-medium, NanumGothicBold;"></div>' +
        '<div class="side_drop_down_menu_alarm_item_date"  style="font-family: notokr-regular, NanumGothic;"></div>' +
        '</div>',

    categoryMenuList: undefined,
    menuList: undefined,
    currentMenuName: undefined,
    animationDuration: 250,

    getCurrentMenuName: function () {
        return Triton.SideDropDownMenu.currentMenuName;
    },

    checkTabInternal: function (list) {

        var path = Triton.SideDropDownMenu.getPageManagerPath();

        for (var i = 0, l = list.length; i < l; i++) {

            var item = list[i];
            var menu = item['menu'];
            var markPrefixList = item['markPrefixList'];
            var subMenuList = item['subMenuList'];

            var contain = (menu != undefined);
            if (menu != undefined) {

                for (var j = 0, jl = jQuery.PageManager.getDepth(); j <= jl; j++) {

                    var menuName = jQuery.PageManager.getMenuParameter(j);
                    if (!(menuName == menu[j] || menuName.startsWith(menu[j] + '/'))) {
                        contain = false;
                        break;
                    }
                }
            }

            if (contain == false && markPrefixList != undefined) {

                contain = false;
                for (var k = 0, kl = markPrefixList.length; k < kl; k++) {
                    var prefix = markPrefixList[k];
                    if (path.startsWith(prefix)) {
                        contain = true;
                        break;
                    }
                }
            }

            if (contain == true) {

                if (subMenuList != undefined && subMenuList.length > 0) {

                    var result = Triton.SideDropDownMenu.checkTabInternal(subMenuList);
                    if (result != undefined) {
                        return result;
                    }

                } else {

                    return {
                        text: item['text'],
                        path: Triton.SideDropDownMenu.getMenuPath(menu)
                    };

                }
            }
        }

        return undefined;
    },

    checkTab: function (parameterMap, beforeParameterMap) {

        var data = Triton.SideDropDownMenu.checkTabInternal(Triton.SideDropDownMenu.menuList);
        if (data == undefined) {
            data = {
                text: '이름 없음',
                path: ''
            };
        }

        var text = data['text'];
        var path = data['path'];

        Triton.SideDropDownMenu.currentMenuName = text;

        var jTab = Triton.SideDropDownMenu.jMenu.find('.side_drop_down_menu_tab_panel .side_drop_down_menu_tab');
        for (var i = 0, l = jTab.length; i < l; i++) {

            var jItem = jTab.eq(i);
            var itemPath = jItem.data('path');
            if (path == itemPath) {
                jItem.data('parameter-map', parameterMap);
                jItem.buttonPressed(true).siblings().buttonPressed(false);
                return;
            }
        }

        Triton.SideDropDownMenu.addTab({
            text: text,
            parameterMap: parameterMap,
            path: path
        });
    },


    addTab: function (item) {

        var text = Lia.p(item, 'text');
        var path = Lia.p(item, 'path');
        var parameterMap = Lia.p(item, 'parameterMap');
        var fixed = Lia.pd(false, item, 'fixed');

        var jPanel = Triton.SideDropDownMenu.jMenu.find('.side_drop_down_menu_tab_panel');
        var panelWidth = jPanel.outerWidth(true);

        var jTab = $(Triton.SideDropDownMenu.HTML_TAB);
        if (panelWidth != 0) {
            jTab.css({
                'border-left': 'none'
            });
        }

        jPanel.append(jTab);

        if (fixed == true) {

            jTab.addClass('side_drop_down_menu_tab_fixed');
            jTab.find('.side_drop_down_menu_tab_close_button').hide();
            jTab.find('.side_drop_down_menu_tab_text').css({'margin-right': '15px'});

        } else {

            jTab.addClass('side_drop_down_menu_tab_normal');
        }

        jTab.find('.side_drop_down_menu_tab_text').text(text);
        jTab.data('text', text);
        jTab.data('path', path);
        jTab.data('parameter-map', parameterMap);

        jPanel.css({
            'width': (jPanel.children().length * 1000) + 'px'
        });

        jTab.initButton().on(Lia.Component.Event.STATUS_CHANGED, function (e) {

            var jThis = $(this);
            var status = e.status;
            if (status == Lia.Component.Value.Button.Status.PRESSED) {

                jThis.css({
                    'background-color': TritonTheme.SIDE_DROP_DOWN_MENU_TAB_SELECTED_BACKGROUND_COLOR,
                    height: '34px'
                });

            } else {

                jThis.css({
                    'background-color': TritonTheme.SIDE_DROP_DOWN_MENU_TAB_BACKGROUND_COLOR,
                    height: '33px'

                });
            }

        }).on('click', function (e) {

            e.stopPropagation();
            e.preventDefault();

            var jThis = $(this);
            jThis.buttonPressed(true).siblings().buttonPressed(false);

            var parameterMap = jThis.data('parameter-map');
            PageManager.move(parameterMap);

        }).on('contextmenu', {
            fixed: fixed
        }, function (e) {

            var fixed = e.data.fixed;

            var jTabs = Triton.SideDropDownMenu.jMenu.find('.side_drop_down_menu_tab_panel .side_drop_down_menu_tab');
            if (jTabs.length < 2) {
                return;
            }

            e.stopPropagation();
            e.preventDefault();

            var jThis = $(this);

            Triton.SideDropDownMenu.clearTabContextMenu();

            if (fixed != true) {

                Triton.SideDropDownMenu.addTabContextMenu({
                    text: Lia.Strings.getString(Lia.Strings.TRITON.TAB.CLOSE),
                    object: {
                        jThis: jThis
                    },
                    onClick: function (object) {

                        var j = Lia.p(object, 'jThis');

                        var jThis = j.closest('.side_drop_down_menu_tab');
                        var jTabs = Triton.SideDropDownMenu.jMenu.find('.side_drop_down_menu_tab_panel .side_drop_down_menu_tab');
                        if (jTabs.length > 1) {

                            var pressed = jThis.buttonPressed();
                            if (pressed == true) {

                                var jItem = jThis.prev();
                                if (jItem.length == 0) {
                                    jItem = jThis.next();
                                }

                                jItem.trigger('click');
                            }

                            jThis.remove();
                        }

                        Triton.SideDropDownMenu.saveStorage();
                        Triton.SideDropDownMenu.adjustTab();
                    }
                });
            }

            Triton.SideDropDownMenu.addTabContextMenu({
                text: Lia.Strings.getString(Lia.Strings.TRITON.TAB.CLOSE_OTHERS),
                object: {
                    jThis: jThis
                },
                onClick: function (object) {

                    var j = Lia.p(object, 'jThis');

                    var jThis = j.closest('.side_drop_down_menu_tab');
                    var jTabs = Triton.SideDropDownMenu.jMenu.find('.side_drop_down_menu_tab_panel .side_drop_down_menu_tab.side_drop_down_menu_tab_normal');
                    jTabs.not(jThis).remove();

                    if (jThis.buttonPressed() == false) {
                        jThis.trigger('click');
                    }

                    Triton.SideDropDownMenu.saveStorage();
                    Triton.SideDropDownMenu.adjustTab();

                }
            });

            var jPanel = Triton.SideDropDownMenu.jMenu.find('.side_drop_down_menu_tab_context_menu_panel').show();

            var x = e.pageX;
            var y = e.pageY;

            jPanel.children().css({
                left: x + 'px',
                top: y + 'px'
            });

        });


        jTab.find('.image_button_container').initImageButtonContainer().on(Lia.Component.Event.STATUS_CHANGED, function (e) {

            e.stopPropagation();
            e.preventDefault();

        }).on('click', function (e) {

            e.stopPropagation();
            e.preventDefault();

            var jThis = $(this).closest('.side_drop_down_menu_tab');
            var jTabs = Triton.SideDropDownMenu.jMenu.find('.side_drop_down_menu_tab_panel .side_drop_down_menu_tab');
            if (jTabs.length > 1) {

                var pressed = jThis.buttonPressed();
                if (pressed == true) {

                    var jItem = jThis.prev();
                    if (jItem.length == 0) {
                        jItem = jThis.next();
                    }

                    jItem.trigger('click');
                }

                jThis.remove();
            }

            Triton.SideDropDownMenu.saveStorage();
            Triton.SideDropDownMenu.adjustTab();

        });

        jTab.buttonPressed(true).siblings().buttonPressed(false);
        Triton.SideDropDownMenu.adjustTab();
    },

    menuShowChecker: function (menu, depth) {
        return true;
    },

    setMenuShowChecker: function (checker) {

        Triton.SideDropDownMenu.menuShowChecker = checker;
    },

    // direction : false 왼쪽, true 오른쪽
    // mobile 모바일 여부
    addHeaderElement: function (item) {

        var direction = Lia.pd(false, item, 'direction');
        var addClass = Lia.p(item, 'addClass');
        var mobile = Lia.pd(false, item, 'mobile');
        var prepend = Lia.pd(false, item, 'prepend');
        var border = Lia.pd(false, item, 'border');

        var jContainer = jQuery('<div class="side_drop_down_menu_header_element_item image_button_container hover" style="float:left;text-align:center;"></div>');
        if (String.isNotBlank(addClass)) {
            jContainer.addClass(addClass);
        }

        var width = Lia.p(item, 'width');
        var padding = Lia.pd('', item, 'padding');

        if (mobile == true) {

            if ((width === '' || width === 'auto') && String.isBlank(padding)) {
                padding = '10px';
            }

            jContainer.css({
                width: Lia.pd('50px', width),
                height: '50px',
                'line-height': '50px',
                'padding-left': padding,
                'padding-right': padding
            });

        } else {

            if ((width === '' || width === 'auto') && String.isBlank(padding)) {
                padding = '5px';
            }

            jContainer.css({
                width: Lia.pd('73px', width),
                height: '73px',
                'line-height': '73px',
                'padding-left': padding,
                'padding-right': padding
            });
        }

        if (border == true) {
            jContainer.css('border-' + ((direction == false) ? 'right' : 'left'), '1px solid ' + TritonTheme.SIDE_DROP_DOWN_MENU_BORDER_COLOR);
        }

        var append = Lia.pd(Lia.p(item, 'append'), item, 'jAppend');
        if (append == undefined) {

            var imageUrl = Lia.p(item, 'imageUrl');

            var imageWidth = Lia.p(item, 'imageWidth');
            var imageHeight = Lia.p(item, 'imageHeight');
            var maxWidth = Lia.p(item, 'imageMaxWidth');

            var text = Lia.p(item, 'text');

            var jImage = undefined;
            var jText = undefined;

            if (String.isNotBlank(imageUrl)) {

                jImage = jQuery('<img class="side_drop_down_menu_header_element_item_image" style="vertical-align: middle;" />');
                jImage.attr({'src': imageUrl});

                if (String.isNotBlank(imageWidth)) {
                    jImage.css({'width': imageWidth});
                }

                if (String.isNotBlank(imageHeight)) {
                    jImage.css({'height': imageHeight});
                }

                if (String.isNotBlank(text)) {
                    jImage.attr('alt', text);
                }

                if (String.isNotBlank(maxWidth)) {
                    jImage.css('max-width', maxWidth);
                }
            }

            if (String.isNotBlank(text)) {
                jText = jQuery('<div class="side_drop_down_menu_header_element_item_text" style="vertical-align: middle;"></div>');
                jText.html(text);

                var fontSize = Lia.pd('13px', item, 'fontSize');
                var textMarginTop = Lia.pd('', item, 'textMarginTop');
                jText.css({
                    'font-family': 'notokr-medium, NanumGothicBold',
                    'color': TritonTheme.HEADER_MENU_BUTTON_DEFAULT_FONT_COLOR,
                    'font-size': fontSize, 'line-height': fontSize, 'margin-top': textMarginTop
                });
            }

            if (jImage != undefined && jText != undefined) {

                if (mobile == true) {

                    jContainer.append(jImage);

                } else {

                    var jImageContainer = jQuery('<div></div>');
                    jImageContainer.append(jImage);
                    jImageContainer.css({'padding-top': '5px', 'line-height': '42px'});
                    jContainer.append(jImageContainer);

                    jContainer.append(jText);


                }
            } else if (jImage != undefined) {

                jContainer.append(jImage);

            } else if (jText != undefined) {

                if (mobile == true) {

                    jText.css({'line-height': '50px'});

                } else {

                    jText.css({'line-height': '73px'});
                }

                jContainer.append(jText);
            }

        } else {

            jContainer.append(append);
        }


        var onClick = Lia.p(item, 'onClick');
        if (onClick != undefined) {

            jContainer.on('click', {
                onClick: onClick,
                item: item
            }, function (e) {
                e.data.onClick(item);
            });
        }

        // right, mobile 쪽은 구현해야함
        var jAppendLayout = Triton.SideDropDownMenu.jMenu.find('.' +
            (direction == false ? 'side_drop_down_menu_header_element_left_layout' : 'side_drop_down_menu_header_element_right_layout')
            + ((mobile == true) ? '_mobile' : ''));

        if (prepend) {
            jAppendLayout.prepend(jContainer);
        } else {
            jAppendLayout.append(jContainer);
        }

        jContainer.initImageButtonContainer();
        if (jText != undefined) {

            jContainer.on(Lia.Component.Event.STATUS_CHANGED, {
                jText: jText
            }, function (e) {

                var jThis = $(this);
                var status = e.status;
                var jText = e.data.jText;

                if (status == Lia.Component.Value.Button.Status.DEFAULT) {

                    jText.css({
                        'color': TritonTheme.HEADER_MENU_BUTTON_DEFAULT_FONT_COLOR
                    });


                } else if (status == Lia.Component.Value.Button.Status.HOVERING) {

                    jText.css({
                        'color': TritonTheme.HEADER_MENU_BUTTON_HOVERING_FONT_COLOR
                    });

                } else if (status == Lia.Component.Value.Button.Status.PRESSING || status == Lia.Component.Value.Button.Status.PRESSED) {

                    jText.css({
                        'color': TritonTheme.HEADER_MENU_BUTTON_PRESSED_FONT_COLOR
                    });
                }
            });
        }


        return jContainer;
    },

    setHeaderMoreElement: function (item, jMoreElement, depth) {

        var depth = 0;

        // 모바일 관련된 항목 추가
        var jMorePanel = Triton.SideDropDownMenu.jMenu.find('.side_drop_down_menu_more_item_panel');
        if (jMoreElement != undefined) {
            jMorePanel = jMoreElement.show().children('.side_drop_down_menu_more_button_sub_panel_mobile');
            depth = parseInt(jMorePanel.attr('top-drop-down-menu-more-item-depth')) + 1;
        }

        var menu = Lia.p(item, 'menu');
        var menuParameterMap = Lia.p(item, 'menuParameterMap');
        var name = Lia.p(item, 'name');
        var addClass = Lia.p(item, 'addClass');

        var jMoreButtonContainer = undefined;
        if (String.isBlank(name) || ((jMoreButtonContainer = jMorePanel.find('.' + name)).length == 0)) {

            jMoreButtonContainer = jQuery(Triton.SideDropDownMenu.HTML_MORE_BUTTON_MOBILE);

            if (String.isNotBlank(name)) {
                jMoreButtonContainer.addClass(name);
            }

            jMorePanel.append(jMoreButtonContainer);
        }

        if (String.isNotBlank(addClass)) {
            jMoreButtonContainer.addClass(addClass);
        }

        var jButton = jMoreButtonContainer.find('.side_drop_down_menu_more_button_mobile');
        var jPanel = jMoreButtonContainer.find('.side_drop_down_menu_more_button_sub_panel_mobile');
        jPanel.attr('top-drop-down-menu-more-item-depth', depth);

        var text = Lia.p(item, 'text');
        var iconImageUrl = Lia.p(item, 'iconImageUrl');
        if (iconImageUrl != undefined) {
            jButton.find('.side_drop_down_menu_more_button_icon_mobile').show().html('<img src="' + iconImageUrl + '" style="vertical-align:middle;max-width:16px;" alt="top drop down menu more button icon mobile"/>');
        } else {
            jButton.find('.side_drop_down_menu_more_button_icon_mobile').hide();
        }

        var backgroundColor = Triton.SideDropDownMenu.HTML_MORE_BUTTON_BACKGROUND_MOBILE[depth % Triton.SideDropDownMenu.HTML_MORE_BUTTON_BACKGROUND_MOBILE.length];
        jButton.css({'background-color': backgroundColor});

        var onClick = Lia.p(item, 'onClick');

        var panelCss = Lia.p(item, 'panel', 'css');
        var defaultMessage = Lia.p(item, 'panel', 'defaultMessage');
        if (String.isNotBlank(defaultMessage)) {

            var messageBackgroundColor = Triton.SideDropDownMenu.HTML_MORE_BUTTON_BACKGROUND_MOBILE[(depth + 1) % Triton.SideDropDownMenu.HTML_MORE_BUTTON_BACKGROUND_MOBILE.length];
            jPanel.html('<div class="side_drop_down_menu_more_button_default_message" style="padding-left:15px;padding-right:15px;line-height:43px;background-color:' + messageBackgroundColor + ';">' + defaultMessage + '</div>');
        }

        if (panelCss != undefined) {
            jPanel.css(panelCss);
        }

        jButton.find('.side_drop_down_menu_more_button_text_mobile').text(text);
        jButton.initButton().off(Lia.Component.Event.STATUS_CHANGED).on(Lia.Component.Event.STATUS_CHANGED, {}, function (e) {

            var jThis = $(this);
            var status = e.status;

            if (status == Lia.Component.Value.Button.Status.DEFAULT) {

                jThis.css({
                    'font-family': 'notokr-regular, NanumGothic'
                });


            } else if (status == Lia.Component.Value.Button.Status.HOVERING || status == Lia.Component.Value.Button.Status.PRESSING || status == Lia.Component.Value.Button.Status.PRESSED) {

                jThis.css({
                    'font-family': 'notokr-medium, NanumGothicBold'
                });
            }

        }).off('click').on('click', {
            menu: menu,
            menuParameterMap: menuParameterMap,
            onClick: onClick,
            defaultMessage: defaultMessage
        }, function (e) {

            e.preventDefault();
            e.stopPropagation();

            var jThis = $(this);
            var jButton = jThis.parent();
            var defaultMessage = e.data.defaultMessage;

            if (String.isNotBlank(defaultMessage) || jButton.hasClass('side_drop_down_menu_more_button_has_children')) {

                var jPanel = jButton.children('.side_drop_down_menu_more_button_sub_panel_mobile');
                if (jPanel.hasClass('side_drop_down_menu_more_button_sub_panel_mobile_shown')) {

                    jThis.buttonPressed(false);
                    jPanel.removeClass('side_drop_down_menu_more_button_sub_panel_mobile_shown');
                    jPanel.hide();

                } else {

                    jThis.buttonPressed(true);
                    jPanel.addClass('side_drop_down_menu_more_button_sub_panel_mobile_shown');
                    jPanel.show();
                }

                return;
            }


            var menu = e.data.menu;
            var menuParameterMap = e.data.menuParameterMap;
            if (menu != undefined) {
                jQuery.PageManager.go(menu, menuParameterMap);
            }

            var onClick = e.data.onClick;
            if (onClick != undefined) {
                onClick();
            }

            Triton.SideDropDownMenu.hideMorePanel();
        });


        if (onClick != undefined || menu != undefined || String.isNotBlank(defaultMessage)) {
            jMoreButtonContainer.show();
        } else {
            jMoreButtonContainer.hide();
        }

        if (String.isNotBlank(defaultMessage)) {
            jMoreButtonContainer.children('.side_drop_down_menu_more_button_mobile').find('.side_drop_down_menu_more_button_arrow_mobile').show();
        }

        if (jMoreElement != undefined) {

            jMoreElement.addClass('side_drop_down_menu_more_button_has_children');
            jMoreElement.children('.side_drop_down_menu_more_button_mobile').find('.side_drop_down_menu_more_button_arrow_mobile').show();
        }

    },

    setHeaderElement: function (type, data) {

        // 왼쪽 메뉴 관련 사항
        if (type == SideDropDownMenu.HEADER_ELEMENT_MENU_BUTTON) {

            var mobile = Lia.pd(true, data, 'mobile');
            var addClass = Lia.p(data, 'addClass');
            var text = Lia.p(data, 'text');
            var mobileText = Lia.pd(text, data, 'mobileText');

            var iconImageUrl = Lia.pd(TritonTheme.SIDE_DROP_DOWN_MENU_MENU_BUTTON_IMAGE_URL, data, 'iconImageUrl');
            if (String.isNotBlank(addClass)) {
                addClass += ' side_drop_down_menu_button';
            } else {
                addClass = 'side_drop_down_menu_button';
            }

            Triton.SideDropDownMenu.addHeaderElement({
                addClass: addClass,
                imageUrl: iconImageUrl,
                imageMaxWidth: Lia.pd('30px', data, 'imageMaxWidth'),
                width: Lia.p(data, 'width'),
                padding: Lia.p(data, 'padding'),
                onClick: Lia.p(data, 'onClick'),
                text: Lia.p(data, 'text'),
                fontSize: Lia.p(data, 'fontSize'),
                textMarginTop: Lia.p(data, 'textMarginTop'),
                border: true,
                direction: false
            });

            if (mobile) {

                Triton.SideDropDownMenu.addHeaderElement({
                    addClass: addClass,
                    mobile: true,
                    imageUrl: iconImageUrl,
                    width: Lia.p(data, 'width'),
                    padding: Lia.p(data, 'padding'),
                    imageMaxWidth: Lia.pd('18px', data, 'imageMaxWidth'),

                    border: true,
                    direction: false,
                    onClick: Lia.p(data, 'onClick')
                });
            }

            Triton.SideDropDownMenu.jMenu.find('.side_drop_down_menu_button').on('click', function (e) {
                e.preventDefault();
                e.stopPropagation();

                if (jQuery(this).buttonPressed()) {
                    Triton.SideDropDownMenu.hideMenuPanel();
                } else {
                    Triton.SideDropDownMenu.showMenuPanel();
                }
            });

            var menuOpened = Lia.pd(Triton.SideDropDownMenu.MenuOpenedKey.AUTO, data, 'menuOpened');
            if (menuOpened == Triton.SideDropDownMenu.MenuOpenedKey.AUTO) {
                menuOpened = Lia.isMobile != true && Triton.Responsive.getType() == Triton.Responsive.Type.PC;
            } else if (menuOpened == Triton.SideDropDownMenu.MenuOpenedKey.STORAGE) {
                menuOpened = Triton.SideDropDownMenu.getStorageMenuOpened();
                if (menuOpened === undefined) {
                    menuOpened = Lia.isMobile != true && Triton.Responsive.getType() == Triton.Responsive.Type.PC;
                }
            }

            if (menuOpened == true) {
                Triton.SideDropDownMenu.showMenuPanel();
            }

        } else if (type == SideDropDownMenu.HEADER_ELEMENT_ICON_BUTTON) {


            var mobile = Lia.pd(true, data, 'mobile');
            var addClass = Lia.p(data, 'addClass');
            var text = Lia.p(data, 'text');
            var mobileText = Lia.pd(text, data, 'mobileText');

            if (Triton.SideDropDownMenu.jMenu.find('.side_drop_down_menu_icon_button').length == 0) {

                var iconImageUrl = Lia.pd(TritonTheme.SIDE_DROP_DOWN_MENU_ICON_BUTTON_IMAGE_URL, data, 'iconImageUrl');
                if (String.isNotBlank(addClass)) {
                    addClass += ' side_drop_down_menu_icon_button';
                } else {
                    addClass = 'side_drop_down_menu_icon_button';
                }

                Triton.SideDropDownMenu.addHeaderElement({
                    addClass: addClass,
                    imageUrl: iconImageUrl,
                    imageMaxWidth: Lia.pd('30px', data, 'imageMaxWidth'),
                    width: Lia.p(data, 'width'),
                    padding: Lia.p(data, 'padding'),
                    onClick: Lia.p(data, 'onClick'),
                    text: Lia.p(data, 'text'),
                    fontSize: Lia.p(data, 'fontSize'),
                    textMarginTop: Lia.p(data, 'textMarginTop'),
                    border: true,
                    direction: false
                });

                if (mobile) {

                    Triton.SideDropDownMenu.addHeaderElement({
                        addClass: addClass,
                        mobile: true,
                        imageUrl: iconImageUrl,
                        width: Lia.p(data, 'width'),
                        padding: Lia.p(data, 'padding'),
                        imageMaxWidth: Lia.pd('18px', data, 'imageMaxWidth'),

                        border: true,
                        direction: false,
                        onClick: Lia.p(data, 'onClick')
                    });
                }
            }

            var onClick = Lia.p(data, 'onClick');
            if (onClick != undefined) {

                Triton.SideDropDownMenu.jMenu.find('.side_drop_down_menu_icon_button').off('click').on('click', {
                    onClick: onClick
                }, function (e) {

                    e.preventDefault();
                    e.stopPropagation();

                    var onClick = e.data.onClick;
                    if (onClick != undefined) {
                        onClick();
                    }
                });
            }

            var visible = Lia.p(data, 'visible');
            if (visible !== undefined) {

                if (visible == true) {
                    Triton.SideDropDownMenu.jMenu.find('.side_drop_down_menu_icon_button').show();
                } else {
                    Triton.SideDropDownMenu.jMenu.find('.side_drop_down_menu_icon_button').hide();
                }
            }

            var pressed = Lia.p(data, 'pressed');
            if (pressed !== undefined) {
                Triton.SideDropDownMenu.jMenu.find('.side_drop_down_menu_icon_button').imageButtonContainerPressed(pressed);
            }

        } else if (type == SideDropDownMenu.HEADER_ELEMENT_LOGO) {

            var logoImageUrl = Lia.p(data, 'logoImageUrl');
            var logoImageWidth = Lia.pd('', data, 'logoImageWidth');
            var logoImageHeight = Lia.pd('', data, 'logoImageHeight');

            var css = Lia.p(data, 'css');
            var mobileCss = Lia.pd(css, data, 'mobileCss');

            var mobileLogoImageUrl = Lia.pd(logoImageUrl, data, 'mobileLogoImageUrl');
            var mobileLogoImageWidth = Lia.pd(logoImageWidth, data, 'mobileLogoImageWidth');
            var mobileLogoImageHeight = Lia.pd(logoImageHeight, data, 'mobileLogoImageHeight');

            var jElement = Triton.SideDropDownMenu.jMenu.find('.side_drop_down_menu_header_element_logo, .side_drop_down_menu_header_element_logo_mobile');
            if (String.isBlank(logoImageUrl)) {
                jElement.hide();
            } else {

                jElement.filter('.side_drop_down_menu_header_element_logo').find('img').attr('src', logoImageUrl).css({
                    'max-width': logoImageWidth,
                    'max-height': logoImageHeight
                });

                if (css != undefined) {
                    jElement.filter('.side_drop_down_menu_header_element_logo').css(css);
                }

                jElement.filter('.side_drop_down_menu_header_element_logo_mobile').find('img').attr('src', mobileLogoImageUrl).css({
                    'max-width': mobileLogoImageWidth,
                    'max-height': mobileLogoImageHeight
                });

                if (mobileCss != undefined) {
                    jElement.filter('.side_drop_down_menu_header_element_logo_mobile').css(mobileCss);
                }

                var jImg = jElement.find('img');
                jElement.show();

                var onClick = Lia.p(data, 'onClick');
                if (onClick != undefined) {

                    jImg.css({
                        'cursor': 'pointer'
                    }).off('click').on('click', {
                        onClick: onClick
                    }, function (e) {
                        e.preventDefault();
                        e.stopPropagation();

                        var onClick = e.data.onClick;
                        onClick();
                    });

                } else {

                    jImg.css({
                        'cursor': 'default'
                    });
                }
            }

        } else if (type == SideDropDownMenu.HEADER_ELEMENT_MORE) {

            // 모바일에서 more 이 있으면 해당 부분에 추가
            // 아니면 옆으로 추가, 그래서 2개 이상이면 more을 먼저 추가해야야 함
            var jElement = Triton.SideDropDownMenu.jMenu.find('.side_drop_down_menu_header_element_more');
            if (jElement.length > 0) {
                return;
            }

            jElement = jQuery('<div class="side_drop_down_menu_header_element_more image_button_container hover inline_block" style="border-left:1px solid ' + TritonTheme.SIDE_DROP_DOWN_MENU_BORDER_COLOR + ';width:50px;text-align:center;height:50px;line-height:50px;">' +
                '<img src="' + TritonTheme.SIDE_DROP_DOWN_MENU_MENU_MORE_BUTTON_IMAGE_URL + '" style="vertical-align:middle;" alt="top drop down menu header element more image button container"/>' +
                '</div>');

            Triton.SideDropDownMenu.jMenu.find('.side_drop_down_menu_header_element_right_layout_mobile').append(jElement);

            jElement.initImageButtonContainer();
            jElement.on('click', function (e) {

                var jThis = $(this);
                jThis.imageButtonContainerPressed(true);

                var jPanel = Triton.SideDropDownMenu.jMenu.find('.side_drop_down_menu_more_panel');
                jPanel.show();

                var jPanelInner = jPanel.children();

                var windowWidth = $(window).width();

                var offset = jThis.offset();
                var right = windowWidth - offset.left - jThis.width() + 10;
                var top = offset.top + jThis.outerHeight(true);

                jPanelInner.css({
                    'top': top + 'px',
                    'right': right + 'px'
                });
            });

            var jPanel = Triton.SideDropDownMenu.jMenu.find('.side_drop_down_menu_more_panel');
            jPanel.on('click', function (e) {

                e.preventDefault();
                e.stopPropagation();

                Triton.SideDropDownMenu.hideMorePanel();

            });

        } else if (type == SideDropDownMenu.HEADER_ELEMENT_QUICK_MENU) {

            var jElement = Triton.SideDropDownMenu.jMenu.find('.side_drop_down_menu_header_element_quick_menu');
            if (jElement.length > 0) {
                return;
            }
            var text = Lia.pd('퀵메뉴', data, 'text');
            var mobileText = Lia.pd(text, data, 'mobileText');

            jElement = Triton.SideDropDownMenu.addHeaderElement({
                addClass: 'side_drop_down_menu_header_element_quick_menu',
                imageUrl: TritonTheme.SIDE_DROP_DOWN_MENU_QUICK_MENU_BUTTON_IMAGE_URL,
                imageMaxWidth: Lia.pd('30px', data, 'imageMaxWidth'),
                width: Lia.p(data, 'width'),
                padding: Lia.p(data, 'padding'),
                onClick: Lia.p(data, 'onClick'),
                text: text,
                border: true,
                direction: true
            });

            jElement.on('click', function (e) {

                var jThis = $(this);
                jThis.imageButtonContainerPressed(true);

                var jPanel = Triton.SideDropDownMenu.jMenu.find('.side_drop_down_menu_quick_menu_panel');
                jPanel.show();

                var jPanelInner = jPanel.children();

                var windowWidth = $(window).width();
                var offset = jThis.offset();
                var right = windowWidth - offset.left - jThis.width() / 2 - jPanelInner.width() / 2;
                var top = offset.top + jThis.outerHeight(true);

                jPanelInner.css({
                    'top': top + 'px',
                    'right': right + 'px'
                });
            });

            var jPanel = Triton.SideDropDownMenu.jMenu.find('.side_drop_down_menu_quick_menu_panel');
            jPanel.on('click', function (e) {

                e.preventDefault();
                e.stopPropagation();

                var jThis = $(this);
                jThis.hide();

                var jButton = Triton.SideDropDownMenu.jMenu.find('.side_drop_down_menu_header_element_quick_menu');
                jButton.imageButtonContainerPressed(false);
            });

            var mobile = Lia.pd(true, data, 'mobile');
            if (mobile) {

                Triton.SideDropDownMenu.setHeaderMoreElement({
                    name: 'side_drop_down_menu_more_quick_button',
                    onClick: onClick,
                    text: mobileText,
                    iconImageUrl: '/res/lia/triton/img/menu_topdropdown/btn_quickmenu.png'
                });
            }


        } else if (type == SideDropDownMenu.HEADER_ELEMENT_ALARM_BUTTON) {

            var jElement = Triton.SideDropDownMenu.jMenu.find('.side_drop_down_menu_header_element_alarm_button');
            if (jElement.length > 0) {
                return;
            }

            var text = Lia.pd('알람', data, 'text');
            var mobileText = Lia.pd(text, data, 'mobileText');

            jElement = Triton.SideDropDownMenu.addHeaderElement({
                addClass: 'side_drop_down_menu_header_element_alarm_button',
                imageUrl: TritonTheme.SIDE_DROP_DOWN_MENU_ALARM_BUTTON_IMAGE_URL,
                imageMaxWidth: Lia.pd('30px', data, 'imageMaxWidth'),
                width: Lia.p(data, 'width'),
                padding: Lia.p(data, 'padding'),
                onClick: Lia.p(data, 'onClick'),
                text: text,
                border: true,
                direction: true
            });

            jElement.find('img').addClass('side_drop_down_menu_header_element_alarm_button_normal_image').parent().append(
                '<img src="' + TritonTheme.SIDE_DROP_DOWN_MENU_ALARM_NOTICE_BUTTON_IMAGE_URL + '" class="side_drop_down_menu_header_element_alarm_button_white_image no_contain" style="vertical-align: middle;display:none;"   alt="top drop down menu header element alarm button white image no contain"/>'
            );

            if (String.isNotBlank(text)) {

                var jText = jElement.find('.side_drop_down_menu_header_element_item_text');

                jText.parent().append(
                    jText.clone().css({
                        color: TritonTheme.HEADER_MENU_BUTTON_INVERSE_FONT_COLOR,
                        display: 'none'
                    }).addClass('side_drop_down_menu_header_element_alarm_button_white_text')
                );

                jText.addClass('side_drop_down_menu_header_element_alarm_button_normal_text');
            }

            jElement.on('click', function (e) {

                var jThis = $(this);
                jThis.imageButtonContainerPressed(true);

                var jPanel = Triton.SideDropDownMenu.jMenu.find('.side_drop_down_menu_alarm_panel');
                jPanel.show();

                var jPanelInner = jPanel.children();

                var jThisWidthD2 = jThis.width() / 2;
                var windowWidth = $(window).width();
                var offset = jThis.offset();
                var right = windowWidth - offset.left - jThisWidthD2 - jPanelInner.width() / 2;
                if (right < 10) {
                    right = 10;
                }

                var top = offset.top + jThis.outerHeight(true);
                jPanelInner.css({
                    'top': top + 'px',
                    'right': right + 'px'
                });

                var jPanelArrowImage = Triton.SideDropDownMenu.jMenu.find('.side_drop_down_menu_alarm_panel_arrow_image');
                jPanelArrowImage.css({
                    'left': (offset.left - jPanelInner.offset().left + jThisWidthD2) + 'px'
                });
            });

            var jPanel = Triton.SideDropDownMenu.jMenu.find('.side_drop_down_menu_alarm_panel');
            jPanel.on('click', function (e) {

                e.preventDefault();
                e.stopPropagation();

                var jThis = $(this);
                jThis.hide();

                var jButton = Triton.SideDropDownMenu.jMenu.find('.side_drop_down_menu_header_element_alarm_button');
                jButton.imageButtonContainerPressed(false);
            });


            var mobile = Lia.pd(true, data, 'mobile');
            if (mobile) {

                Triton.SideDropDownMenu.setHeaderMoreElement({
                    name: 'side_drop_down_menu_more_alarm_button',
                    text: mobileText,
                    iconImageUrl: '/res/lia/triton/img/menu_topdropdown/btn_notice.png',
                    panel: {
                        defaultMessage: '표시할 알람이 없습니다.',
                        css: {
                            'max-height': '300px',
                            'overflow': 'auto'
                        }
                    }
                });
            }


        }
        // 나머지 사항들
        else if (
            Lia.contains(type, SideDropDownMenu.HEADER_ELEMENT_BUTTON)
        ) {

            var hasMoreButton = Triton.SideDropDownMenu.jMenu.find('.side_drop_down_menu_header_element_more').length > 0;
            var mobile = Lia.pd(true, data, 'mobile');

            var addClass = Lia.p(data, 'addClass');
            var text = Lia.p(data, 'text');
            var mobileText = Lia.pd(text, data, 'mobileText');

            Triton.SideDropDownMenu.addHeaderElement({
                addClass: addClass,
                imageUrl: Lia.p(data, 'iconImageUrl'),
                imageMaxWidth: Lia.pd('30px', data, 'imageMaxWidth'),
                width: Lia.p(data, 'width'),
                padding: Lia.p(data, 'padding'),
                onClick: Lia.p(data, 'onClick'),
                text: Lia.p(data, 'text'),
                fontSize: Lia.p(data, 'fontSize'),
                textMarginTop: Lia.p(data, 'textMarginTop'),
                border: true,
                direction: true
            });


            if (mobile) {

                if (hasMoreButton) {

                    Triton.SideDropDownMenu.setHeaderMoreElement({
                        addClass: addClass,
                        name: Lia.p(data, 'name'),
                        onClick: Lia.p(data, 'onClick'),
                        text: mobileText,
                        iconImageUrl: Lia.p(data, 'iconImageUrl')
                    });

                } else {

                    Triton.SideDropDownMenu.addHeaderElement({
                        addClass: addClass,
                        mobile: true,
                        imageUrl: Lia.p(data, 'iconImageUrl'),
                        width: Lia.p(data, 'width'),
                        padding: Lia.p(data, 'padding'),
                        imageMaxWidth: Lia.pd('18px', data, 'imageMaxWidth'),

                        border: true,
                        direction: true,
                        onClick: Lia.p(data, 'onClick')
                    });
                }
            }
        }
    },

    getHeaderElement: function (type, data) {

        if (type == SideDropDownMenu.HEADER_ELEMENT_ICON_BUTTON) {

            var pressed = Lia.p(data, 'pressed');
            if (pressed == true) {

                var jElementPT = Triton.SideDropDownMenu.jMenu.find('.side_drop_down_menu_icon_button');
                return jElementPT.imageButtonContainerPressed();
            }
        }
    },

    addQuickMenu: function (item) {

        var iconImageUrl = Lia.p(item, 'iconImageUrl');
        var menu = Lia.p(item, 'menu');
        var menuParameterMap = Lia.p(item, 'menuParameterMap');
        var onClick = Lia.p(item, 'onClick');
        var text = Lia.p(item, 'text');

        var jQuickMenuItemPanel = Triton.SideDropDownMenu.jMenu.find('.side_drop_down_menu_quick_menu_item_panel');

        var jItem = $(Triton.SideDropDownMenu.HTML_QUICK_MENU_BUTTON);
        jQuickMenuItemPanel.append(jItem);
        jItem.find('.side_drop_down_menu_quick_menu_button_text').html(text);
        jItem.find('.side_drop_down_menu_quick_menu_button_image_panel').show().find('img').attr({
            'src': iconImageUrl
        });
        jItem.initImageButtonContainer();
        jItem.on(Lia.Component.Event.STATUS_CHANGED, function (e) {

            var jThis = $(this);
            var status = e.status;
            if (status == Lia.Component.Value.Button.Status.DEFAULT) {

                jThis.css({
                    'background-color': ''
                });

            } else {

                jThis.css({
                    'background-color': TritonTheme.SIDE_DROP_DOWN_MENU_QUICK_MENU_ITEM_SELECTED_BACKGROUND_COLOR
                });
            }


            if (status == Lia.Component.Value.Button.Status.PRESSED) {

                jThis.css({
                    'font-family': 'notokr-medium, NanumGothicBold'
                });

            } else {

                jThis.css({
                    'font-family': 'notokr-regular, NanumGothic'
                });
            }

        }).on('click', {
            menu: menu,
            menuParameterMap: menuParameterMap,
            onClick: onClick
        }, function (e) {

            var menu = e.data.menu;
            var menuParameterMap = e.data.menuParameterMap;
            if (menu != undefined) {
                jQuery.PageManager.go(menu, menuParameterMap);
            }

            var onClick = e.data.onClick;
            if (onClick != undefined) {
                onClick();
            }
        });


        if (jQuickMenuItemPanel.children().length > 1) {
            jItem.css({
                'border-top': '1px solid ' + TritonTheme.SIDE_DROP_DOWN_MENU_BORDER_COLOR
            })
        }

        var jElementMobile = Triton.SideDropDownMenu.jMenu.find('.side_drop_down_menu_more_quick_button');
        if (jElementMobile.length > 0) {
            Triton.SideDropDownMenu.setHeaderMoreElement(item, jElementMobile);
        }
    },

    saveStorage: function () {

        var list = [];

        var jTabs = Triton.SideDropDownMenu.jMenu.find('.side_drop_down_menu_tab_panel .side_drop_down_menu_tab.side_drop_down_menu_tab_normal');
        for (var i = 0, l = jTabs.length; i < l; i++) {

            var jTab = jTabs.eq(i);

            var text = jTab.data('text');
            var parameterMap = jTab.data('parameter-map');
            var path = jTab.data('path');

            var item = {
                text: text,
                parameterMap: parameterMap,
                path: path
            };

            list.push(item);
        }

        var tabStorageKey = Triton.SideDropDownMenu.tabStorageKey;
        if (tabStorageKey === undefined) {
            window.localStorage.setItem('tab_list', JSON.stringify(list));
        } else if (tabStorageKey === false) {

            // do noting;

        } else {

            var map = undefined;

            var tabListMapString = window.localStorage.getItem('tab_list_map');
            if (String.isNotBlank(tabListMapString)) {
                map = JSON.parse(tabListMapString);
            }

            if (map == undefined) {
                map = {};
            }

            map[tabStorageKey] = list;

            window.localStorage.setItem('tab_list_map', JSON.stringify(map));
        }
    },

    loadStorage: function () {


        var tabStorageKey = Triton.SideDropDownMenu.tabStorageKey;

        var list = undefined;
        if (tabStorageKey === undefined) {

            var tabListString = window.localStorage.getItem('tab_list');
            if (String.isNotBlank(tabListString)) {
                list = JSON.parse(tabListString);
            }

        } else if (tabStorageKey === false) {

            // do noting;

        } else {

            var map = undefined;

            var tabListMapString = window.localStorage.getItem('tab_list_map');
            if (String.isNotBlank(tabListMapString)) {
                map = JSON.parse(tabListMapString);
            }

            list = Lia.p(map, tabStorageKey);
        }


        if (list != undefined && list.length > 0) {

            for (var i = 0, l = list.length; i < l; i++) {

                var item = list[i];
                Triton.SideDropDownMenu.addTab(item);
            }
        }
    },

    init: function (options) {

        Triton.SideDropDownMenu.tabStorageKey = Lia.p(options, 'tabStorageKey');
        Triton.SideDropDownMenu.unuseTab = Lia.pd(false, options, 'unuseTab');
        Triton.SideDropDownMenu.useStatusBar = Lia.pd(false, options, 'useStatusBar');
        Triton.SideDropDownMenu.useButtonTabBar = Lia.pd(false, options, 'useButtonTabBar');
        Triton.SideDropDownMenu.fixedTabList = Lia.p(options, 'fixedTabList');
        Triton.SideDropDownMenu.menuPanelWidth = Lia.p(options, 'menuPanelWidth');

        Triton.SideDropDownMenu.categoryMenuList = [];
        Triton.SideDropDownMenu.menuList = [];

        Triton.SideDropDownMenu.jPageContainer = Lia.p(options, 'jPageContainer');
        Triton.SideDropDownMenu.appendTo = Lia.pd('#side_drop_down_menu', options, 'menuAppendTo');

        Triton.SideDropDownMenu.jMenu = jQuery(Triton.SideDropDownMenu.appendTo);
        Triton.SideDropDownMenu.jMenu.append(Triton.SideDropDownMenu.HTML);
        Lia.Strings.applyStrings(Triton.SideDropDownMenu.jMenu);

        if (String.isNotBlank(Triton.SideDropDownMenu.menuPanelWidth)) {
            Triton.SideDropDownMenu.jMenu.find('.side_drop_down_menu_panel_background').css({width: Triton.SideDropDownMenu.menuPanelWidth});
            Triton.SideDropDownMenu.jMenu.find('.side_drop_down_menu_panel').css({width: Triton.SideDropDownMenu.menuPanelWidth});
        }

        Triton.SideDropDownMenu.jMenu.find('.image_button_container').initImageButtonContainer();
        Triton.SideDropDownMenu.jMenu.find('.image_button').initImageButton();

        Triton.SideDropDownMenu.jMenu.find('.side_drop_down_menu_tab_left_button').on('click', function () {

            var windowWidth = $(window).width();
            var d = windowWidth / 2;

            var jPanel = Triton.SideDropDownMenu.jMenu.find('.side_drop_down_menu_tab_panel');
            var left = parseFloat(jPanel.css('left'));

            var dest = left + d;
            if (dest > 0) {
                dest = 0;
            }

            jPanel.animate({
                left: dest + 'px'
            }, {
                duration: 200
            });
        });


        Triton.SideDropDownMenu.jMenu.find('.side_drop_down_menu_tab_right_button').on('click', function () {

            var windowWidth = $(window).width();
            var d = windowWidth / 2;

            var jPanel = Triton.SideDropDownMenu.jMenu.find('.side_drop_down_menu_tab_panel');

            var totalWidth = 0;
            var jPanelChildren = jPanel.children();
            for (var i = 0, l = l = jPanelChildren.length; i < l; i++) {

                var jItem = jPanelChildren.eq(i);
                totalWidth += jItem.outerWidth(true);
            }

            var panelWidth = jPanel.parent().width();
            if (totalWidth <= panelWidth) {

                jPanel.css({
                    left: '0px'
                });

            } else {

                var leastWidth = panelWidth - totalWidth;
                var left = parseFloat(jPanel.css('left'));
                var dest = left - d;
                if (dest < leastWidth) {
                    dest = leastWidth;
                }

                jPanel.animate({
                    left: dest + 'px'
                }, {
                    duration: 200
                });
            }
        });

        if (Triton.SideDropDownMenu.useStatusBar == true) {

            var jStatusBar = Triton.SideDropDownMenu.jMenu.find('.side_drop_down_menu_header_status_bar');
            jStatusBar.show();

            var statusBar = Lia.p(options, 'statusBar');
            var statusBarName = Lia.p(statusBar, 'name');
            var statusBarInfo = Lia.p(statusBar, 'info');

            var jStatusBarName = jStatusBar.find('.side_drop_down_menu_header_status_bar_name');
            if (String.isNotBlank(jStatusBarName)) {
                jStatusBarName.show();
                jStatusBarName.find('.side_drop_down_menu_header_status_bar_name_text').text(statusBarName);
            }

            var jStatusBarInfo = jStatusBar.find('.side_drop_down_menu_header_status_bar_info');
            if (String.isNotBlank(statusBarInfo)) {
                jStatusBarInfo.show();
                jStatusBarInfo.addClass('side_drop_down_menu_header_status_bar_bas_content').find('.side_drop_down_menu_header_status_bar_info_text').text(statusBarInfo);

                var statusBarOnInfoClick = Lia.p(statusBar, 'onInfoClick');
                if (statusBarOnInfoClick != undefined) {

                    jStatusBarInfo.find('.side_drop_down_menu_header_status_bar_info_text').initButton().on(Lia.Component.Event.STATUS_CHANGED, {
                        statusBarOnInfoClick: statusBarOnInfoClick
                    }, function (e) {

                        var jThis = $(this);
                        var status = e.status;

                        if (status == Lia.Component.Value.Button.Status.DEFAULT) {

                            jThis.css({
                                'font-family': 'notokr-medium, NanumGothicBold',
                                'text-decoration': '',
                                'cursor': 'none'
                            });

                        } else if (status == Lia.Component.Value.Button.Status.HOVERING) {

                            jThis.css({
                                'text-decoration': 'underline',
                                'cursor': 'pointer',
                                'font-family': 'notokr-medium, NanumGothicBold'
                            });
                        }
                    }).on('click', {
                        statusBarOnInfoClick: statusBarOnInfoClick
                    }, function (e) {

                        e.preventDefault();
                        e.stopPropagation();

                        e.data.statusBarOnInfoClick();
                    });
                }

            }

            var statusBarLastLoginIpAddress = Lia.p(statusBar, 'lastLoginIpAddress');
            var statusBarLastLoginDate = Lia.p(statusBar, 'lastLoginDate');

            var jStatusBarLoginInfo = jStatusBar.find('.side_drop_down_menu_header_status_bar_login_info');
            if (String.isNotBlank(statusBarLastLoginIpAddress) || String.isNotBlank(statusBarLastLoginDate)) {

                jStatusBarLoginInfo.find('.side_drop_down_menu_header_status_bar_login_date').text(Lia.pd('-', statusBarLastLoginDate));

                if ( String.isNotBlank(statusBarLastLoginIpAddress) ) {

                    jStatusBarLoginInfo.find('.side_drop_down_menu_header_status_bar_dash').show();
                    jStatusBarLoginInfo.find('.side_drop_down_menu_header_status_bar_login_ip_address').show().text(Lia.pd('-', statusBarLastLoginIpAddress));
                }

                jStatusBarLoginInfo.addClass('side_drop_down_menu_header_status_bar_bas_content');
                jStatusBarLoginInfo.show();
            }


            var statusBarCurrentDate = Lia.p(statusBar, 'currentDate');
            if (String.isNotBlank(statusBarCurrentDate)) {

                var jStatusBarLoginTime = jStatusBar.find('.side_drop_down_menu_header_status_bar_time');
                var statusBarCurrentDateObject = Date.parse(statusBarCurrentDate);

                var statusBarCurrentDateString = statusBarCurrentDateObject.toString('tt hh:mm:ss');
                jStatusBarLoginTime.text(statusBarCurrentDateString);
                jStatusBarLoginTime.show();

                Triton.SideDropDownMenu.baseDate = new Date();
                Triton.SideDropDownMenu.currentDate = statusBarCurrentDateObject;
                window.setInterval(function () {

                    var serverBaseDate = Triton.SideDropDownMenu.currentDate.clone();
                    var nowDate = serverBaseDate.addMilliseconds(new Date() - Triton.SideDropDownMenu.baseDate);

                    var statusBarCurrentDateString = nowDate.toString('tt hh:mm:ss');
                    jStatusBarLoginTime.text(statusBarCurrentDateString);

                }, 500);
            }

            var statusBarOnNameClick = Lia.p(statusBar, 'onNameClick');
            if (statusBarOnNameClick != null) {

                Triton.SideDropDownMenu.jMenu.find('.side_drop_down_menu_header_status_bar_profile_img').initButton().on(Lia.Component.Event.STATUS_CHANGED, {
                    statusBarOnNameClick: statusBarOnNameClick
                }, function (e) {

                    var jThis = $(this);
                    var status = e.status;

                    if (status == Lia.Component.Value.Button.Status.DEFAULT) {

                        jThis.css({
                            'cursor': 'none'
                        });

                    } else if (status == Lia.Component.Value.Button.Status.HOVERING) {

                        jThis.css({
                            'cursor': 'pointer'
                        });
                    }
                }).on('click', {
                    statusBarOnNameClick: statusBarOnNameClick
                }, function (e) {

                    e.preventDefault();
                    e.stopPropagation();

                    e.data.statusBarOnNameClick();
                });

                Triton.SideDropDownMenu.jMenu.find('.side_drop_down_menu_header_status_bar_name span').eq(0).initButton().on(Lia.Component.Event.STATUS_CHANGED, {
                    statusBarOnNameClick: statusBarOnNameClick
                }, function (e) {

                    var jThis = $(this);
                    var status = e.status;

                    if (status == Lia.Component.Value.Button.Status.DEFAULT) {

                        jThis.css({
                            'font-family': 'notokr-medium, NanumGothicBold',
                            'text-decoration': '',
                            'cursor': 'none'
                        });

                    } else if (status == Lia.Component.Value.Button.Status.HOVERING) {

                        jThis.css({
                            'text-decoration': 'underline',
                            'cursor': 'pointer',
                            'font-family': 'notokr-medium, NanumGothicBold'
                        });
                    }
                }).on('click', {
                    statusBarOnNameClick: statusBarOnNameClick
                }, function (e) {

                    e.preventDefault();
                    e.stopPropagation();

                    e.data.statusBarOnNameClick();
                });

            }

        }

        Triton.SideDropDownMenu.setButtonTabBar(Triton.SideDropDownMenu.useButtonTabBar, Lia.p(options, 'buttonTabBar'));

        if (Triton.SideDropDownMenu.unuseTab != true) {

            jQuery('html').css({'overflow-y': 'scroll'});

            Triton.SideDropDownMenu.jMenu.find('.side_drop_down_menu_tab_container').show();

            if (Triton.SideDropDownMenu.fixedTabList != undefined && Triton.SideDropDownMenu.fixedTabList.length > 0) {
                for (var i = 0, l = Triton.SideDropDownMenu.fixedTabList.length; i < l; i++) {
                    var fixedTab = Lia.deepCopy(Lia.p(Triton.SideDropDownMenu.fixedTabList, i));
                    fixedTab['fixed'] = true;
                    Triton.SideDropDownMenu.addTab(fixedTab);
                }
            }


            Triton.SideDropDownMenu.loadStorage();
            Triton.SideDropDownMenu.adjustTab();

        } else {

            Triton.SideDropDownMenu.jMenu.find('.side_drop_down_menu_tab_container').hide();
        }

        Triton.SideDropDownMenu.jPageContainer.css({
            top: Triton.SideDropDownMenu.jMenu.find('.side_drop_down_menu_header_container').outerHeight(true) + 'px'
        });

        Triton.SideDropDownMenu.jMenu.find('.side_drop_down_menu_tab_context_menu_panel').on('click contextmenu', function (e) {
            e.preventDefault();
            e.stopPropagation();

            Triton.SideDropDownMenu.jMenu.find('.side_drop_down_menu_tab_context_menu_panel').hide();
        });

        Triton.Responsive.addListener('side_drop_down_menu', function (currentType, beforeType, object) {

            var menuShow = Triton.SideDropDownMenu.jMenu.find('.side_drop_down_menu_button').imageButtonContainerPressed();
            var quickMenuShow = Triton.SideDropDownMenu.jMenu.find('.side_drop_down_menu_header_element_quick_menu').imageButtonContainerPressed();
            var moreShow = Triton.SideDropDownMenu.jMenu.find('.side_drop_down_menu_header_element_more').imageButtonContainerPressed();
            var alarmShow = Triton.SideDropDownMenu.jMenu.find('.side_drop_down_menu_header_element_alarm_button').imageButtonContainerPressed();

            if (currentType == Triton.Responsive.Type.PC || currentType == Triton.Responsive.Type.TABLET) {

                Triton.SideDropDownMenu.jMenu.find('.side_drop_down_menu_header').show();
                Triton.SideDropDownMenu.jMenu.find('.side_drop_down_menu_header_mobile').hide();

                if (moreShow == true) {
                    Triton.SideDropDownMenu.jMenu.find('.side_drop_down_menu_more_panel').trigger('click');
                }

                if (Triton.SideDropDownMenu.useStatusBar == true) {
                    var jStatusBar = Triton.SideDropDownMenu.jMenu.find('.side_drop_down_menu_header_status_bar');
                    var jStatusBarLoginInfo = jStatusBar.find('.side_drop_down_menu_header_status_bar_login_info');
                    if (jStatusBarLoginInfo.hasClass('side_drop_down_menu_header_status_bar_bas_content')) {
                        jStatusBarLoginInfo.show();
                    }

                    var jStatusBarInfo = jStatusBar.find('.side_drop_down_menu_header_status_bar_info');
                    if (jStatusBarInfo.hasClass('side_drop_down_menu_header_status_bar_bas_content')) {
                        jStatusBarInfo.show();
                    }
                }

            } else if (currentType == Triton.Responsive.Type.MOBILE) {

                Triton.SideDropDownMenu.jMenu.find('.side_drop_down_menu_header').hide();
                Triton.SideDropDownMenu.jMenu.find('.side_drop_down_menu_header_mobile').show();

                Triton.SideDropDownMenu.jPageContainer.css({
                    top: Triton.SideDropDownMenu.jMenu.find('.side_drop_down_menu_header_container').outerHeight(true) + 'px'
                });

                if (quickMenuShow == true) {
                    Triton.SideDropDownMenu.jMenu.find('.side_drop_down_menu_quick_menu_panel').trigger('click');
                }

                if (alarmShow == true) {
                    Triton.SideDropDownMenu.jMenu.find('.side_drop_down_menu_alarm_panel').trigger('click');
                }

                if (Triton.SideDropDownMenu.useStatusBar == true) {
                    var jStatusBar = Triton.SideDropDownMenu.jMenu.find('.side_drop_down_menu_header_status_bar');
                    var jStatusBarLoginInfo = jStatusBar.find('.side_drop_down_menu_header_status_bar_login_info');
                    if (jStatusBarLoginInfo.hasClass('side_drop_down_menu_header_status_bar_bas_content')) {
                        jStatusBarLoginInfo.hide();
                    }

                    var jStatusBarInfo = jStatusBar.find('.side_drop_down_menu_header_status_bar_info');
                    if (jStatusBarInfo.hasClass('side_drop_down_menu_header_status_bar_bas_content')) {
                        jStatusBarInfo.hide();
                    }
                }
            }
            // 패널 관련된 사항
            if (Triton.SideDropDownMenu.jMenu.find('.side_drop_down_menu_button').buttonPressed()) {

                if (currentType == Triton.Responsive.Type.PC || currentType == Triton.Responsive.Type.TABLET) {

                    var jHeader = Triton.SideDropDownMenu.jMenu.find('.side_drop_down_menu_header');
                    var top = (jHeader.offset().top + jHeader.outerHeight(true) - 1);

                    Triton.SideDropDownMenu.jMenu.find('.side_drop_down_menu_panel').css({
                        top: top + 'px'
                    }, {
                        duration: Triton.SideDropDownMenu.animationDuration
                    });

                } else if (currentType == Triton.Responsive.Type.MOBILE) {

                    var jHeader = Triton.SideDropDownMenu.jMenu.find('.side_drop_down_menu_header_mobile');
                    var top = (jHeader.offset().top + jHeader.outerHeight(true) - 1);

                    Triton.SideDropDownMenu.jMenu.find('.side_drop_down_menu_panel').css({
                        top: top + 'px'
                    }, {
                        duration: Triton.SideDropDownMenu.animationDuration
                    });
                }

                if (currentType != beforeType) {

                    if (currentType == Triton.Responsive.Type.PC) {

                        var menuWidth = Triton.SideDropDownMenu.jMenu.find('.side_drop_down_menu_panel').width();
                        Triton.SideDropDownMenu.jPageContainer.css({
                            'left': menuWidth + 'px'
                        });

                    } else {

                        Triton.SideDropDownMenu.jPageContainer.css({
                            'left': '0'
                        });
                    }

                }

            }

            Triton.SideDropDownMenu.adjustLayout();

        }, {});
    },

    saveStorageMenuOpened: function (opened) {

        if (opened == true) {
            opened = 'on';
        } else {
            opened = 'off';
        }

        window.localStorage.setItem('menu_opened', opened);
    },

    getStorageMenuOpened: function () {

        var opened = window.localStorage.getItem('menu_opened');
        if (opened == undefined) {
            return undefined;
        }

        return opened == 'on';
    },


    adjustLayout: function () {

        var height = Triton.SideDropDownMenu.jMenu.find('.side_drop_down_menu_header_container').outerHeight(true);

        Triton.SideDropDownMenu.jPageContainer.css({
            top: height+ 'px'
        });
    },


    setButtonTabBar: function (use, buttonTabBar) {

        Triton.SideDropDownMenu.useButtonTabBar = use;

        var jStatusBar = Triton.SideDropDownMenu.jMenu.find('.side_drop_down_menu_header_button_tab_bar');
        var jStatusBarLeft = Triton.SideDropDownMenu.jMenu.find('.side_drop_down_menu_header_button_tab_bar_left_section');
        var jStatusBarRight = Triton.SideDropDownMenu.jMenu.find('.side_drop_down_menu_header_button_tab_bar_right_section');

        jStatusBarLeft.empty();
        jStatusBarRight.empty();

        if (use) {
            jStatusBar.show();
        } else {
            jStatusBar.hide();
            Triton.SideDropDownMenu.adjustLayout();
            return;
        }

        var backgroundColor = Lia.p(buttonTabBar, 'backgroundColor');
        if (String.isNotBlank(backgroundColor)) {
            jStatusBar.css({'background-color': backgroundColor});
        }

        var textColor = Lia.pd(TritonTheme.TITLE_TEXT_COLOR, buttonTabBar, 'textColor');
        var pressedTextColor = Lia.pd(textColor, buttonTabBar, 'pressedTextColor');

        var leftButtonList = Lia.p(buttonTabBar, 'leftButtonList');

        if (leftButtonList != undefined && leftButtonList.length > 0) {

            for (var i = 0, l = leftButtonList.length; i < l; i++) {

                var item = leftButtonList[i];

                var name = Lia.p(item, 'name');
                var selected = Lia.p(item, 'selected');
                var onClick = Lia.p(item, 'onClick');

                var jItem = $('<div class="button" style="float: left;text-align: center;padding-left: 10px;padding-right:10px;"></div>');

                jItem.html(name);

                jStatusBarLeft.append(jItem);

                jItem.css({
                    'color': textColor
                });

                jItem.initButton().on(Lia.Component.Event.STATUS_CHANGED, {
                    textColor: textColor,
                    pressedTextColor: pressedTextColor
                }, function (e) {

                    var status = e.status;
                    var textColor = e.data.textColor;
                    var pressedTextColor = e.data.pressedTextColor;

                    if (status == Lia.Component.Value.Button.Status.DEFAULT) {

                        $(this).css({'background-color': '', 'color': textColor});

                    } else {

                        $(this).css({'background-color': '#fff', 'color': pressedTextColor});

                    }
                });

                if (onClick != undefined) {
                    jItem.on('click', item, onClick).css({'cursor': 'pointer'});
                }

                if (selected == true) {
                    jItem.buttonPressed(true);
                }


            }

        }

        var rightButtonList = Lia.p(buttonTabBar, 'rightButtonList');
        if (rightButtonList != undefined && rightButtonList.length > 0) {


            for (var i = 0, l = rightButtonList.length; i < l; i++) {

                var item = rightButtonList[i];

                var name = Lia.p(item, 'name');
                var selected = Lia.p(item, 'selected');
                var onClick = Lia.p(item, 'onClick');

                var jItem = $('<div class="button" style="float: left;text-align: center;padding-left: 10px;padding-right:10px;"></div>');

                jItem.html(name);

                jStatusBarRight.append(jItem);

                jItem.css({
                    'color': textColor
                });

                jItem.initButton().on(Lia.Component.Event.STATUS_CHANGED, {
                    textColor: textColor,
                    pressedTextColor: pressedTextColor
                }, function (e) {

                    var status = e.status;
                    var textColor = e.data.textColor;
                    var pressedTextColor = e.data.pressedTextColor;

                    if (status == Lia.Component.Value.Button.Status.DEFAULT) {

                        $(this).css({'background-color': '', 'color': textColor});

                    } else {

                        $(this).css({'background-color': '#fff', 'color': pressedTextColor});

                    }
                });

                if (onClick != undefined) {
                    jItem.on('click', item, onClick).css({'cursor': 'pointer'});
                }

                if (selected == true) {
                    jItem.buttonPressed(true);
                }
            }
        }

        Triton.SideDropDownMenu.adjustLayout();
    },


    clearTabContextMenu: function () {

        var jPanel = Triton.SideDropDownMenu.jMenu.find('.side_drop_down_menu_quick_tab_context_menu_item_panel');
        jPanel.empty();

    },

    addTabContextMenu: function (item) {

        var jPanel = Triton.SideDropDownMenu.jMenu.find('.side_drop_down_menu_quick_tab_context_menu_item_panel');

        var text = Lia.p(item, 'text');
        var object = Lia.p(item, 'object');
        var onClick = Lia.p(item, 'onClick');

        var jItem = $(Triton.SideDropDownMenu.HTML_TAB_CONTEXT_MENU_BUTTON);
        jItem.html(text);
        jItem.initButton().on(Lia.Component.Event.STATUS_CHANGED, function (e) {

            var jThis = $(this);
            var status = e.status;
            if (status == Lia.Component.Value.Button.Status.DEFAULT) {

                jThis.css({
                    'background-color': '#ffffff'
                });

            } else {

                jThis.css({
                    'background-color': '#e9eef6'
                });
            }


            if (status == Lia.Component.Value.Button.Status.PRESSED) {

                jThis.css({
                    'font-family': 'notokr-medium, NanumGothicBold'
                });

            } else {

                jThis.css({
                    'font-family': 'notokr-regular, NanumGothic'
                });
            }

        }).on('click', {
            object: object,
            onClick: onClick
        }, function (e) {

            e.stopPropagation();
            e.preventDefault();

            var object = e.data.object;
            var onClick = e.data.onClick;

            onClick(object);

            Triton.SideDropDownMenu.jMenu.find('.side_drop_down_menu_tab_context_menu_panel').hide();
        });

        jPanel.append(jItem);

        if (jPanel.children().length > 1) {
            jItem.css({
                'border-top': '1px solid ' + TritonTheme.SIDE_DROP_DOWN_MENU_BORDER_COLOR
            })
        }
    },


    adjustTab: function () {

        var jPanel = Triton.SideDropDownMenu.jMenu.find('.side_drop_down_menu_tab_panel');

        var jPanelChildren = jPanel.children();
        if (jPanelChildren.length == 1) {
            jPanelChildren.filter('.side_drop_down_menu_tab_normal').find('.side_drop_down_menu_tab_close_button').hide();
            jPanelChildren.filter('.side_drop_down_menu_tab_normal').find('.side_drop_down_menu_tab_text').css({'margin-right': '15px'});
        } else {
            jPanelChildren.filter('.side_drop_down_menu_tab_normal').find('.side_drop_down_menu_tab_close_button').show();
            jPanelChildren.filter('.side_drop_down_menu_tab_normal').find('.side_drop_down_menu_tab_text').css({'margin-right': '30px'});
        }

        var panelWidth = jPanel.parent().width();
        var totalWidth = 0;
        for (var i = 0, l = jPanelChildren.length; i < l; i++) {
            var jItem = jPanelChildren.eq(i);
            totalWidth += jItem.outerWidth(true);
        }

        if (totalWidth <= panelWidth) {

            Triton.SideDropDownMenu.jMenu.find('.side_drop_down_menu_tab_left_button').addClass('no_change').hide();
            Triton.SideDropDownMenu.jMenu.find('.side_drop_down_menu_tab_right_button').addClass('no_change').hide();

            jPanel.css({
                left: 0
            });

        } else {

            Triton.SideDropDownMenu.jMenu.find('.side_drop_down_menu_tab_left_button').removeClass('no_change').show();
            Triton.SideDropDownMenu.jMenu.find('.side_drop_down_menu_tab_right_button').removeClass('no_change').show();

            var leastWidth = panelWidth - totalWidth;
            var left = parseFloat(jPanel.css('left'));
            if (left < leastWidth) {
                left = leastWidth;
            } else if (left > 0) {
                left = 0;
            }

            jPanel.css({
                left: left + 'px'
            });
        }
    },

    showMenuPanel: function () {

        Triton.SideDropDownMenu.jMenu.find('.side_drop_down_menu_button').imageButtonContainerPressed(true);
        Triton.SideDropDownMenu.jMenu.find('.side_drop_down_menu_button').animate({'background-color': TritonTheme.SIDE_DROP_DOWN_MENU_PANEL_BACKGROUND_COLOR}, {
            duration: Triton.SideDropDownMenu.animationDuration
        });

        Triton.SideDropDownMenu.jMenu.find('.side_drop_down_menu_panel, .side_drop_down_menu_panel_background').show().css({
            left: (Triton.SideDropDownMenu.jMenu.find('.side_drop_down_menu_panel').outerWidth(true) * -1) + 'px'
        }).animate({
            left: '0'
        }, {
            duration: Triton.SideDropDownMenu.animationDuration
        });


        // PC일때만 레이아웃 밀어주기
        if (Triton.Responsive.getType() == Triton.Responsive.Type.PC) {

            var menuWidth = Triton.SideDropDownMenu.jMenu.find('.side_drop_down_menu_panel').outerWidth(true);
            if (Triton.SideDropDownMenu.unuseTab != true) {

                var windowWidth = jQuery(window).width() - menuWidth;
                Triton.SideDropDownMenu.jMenu.find('.side_drop_down_menu_tab_container').animate({
                    'left': menuWidth + 'px',
                    'width': windowWidth + 'px'
                }, {
                    duration: Triton.SideDropDownMenu.animationDuration
                });
            }

            Triton.SideDropDownMenu.jPageContainer.animate({
                'left': menuWidth + 'px'
            }, {
                duration: Triton.SideDropDownMenu.animationDuration
            });
        }

        Triton.Responsive.apply(true);

        Triton.SideDropDownMenu.saveStorageMenuOpened(true);
    },

    hideMenuPanel: function () {

        Triton.SideDropDownMenu.jMenu.find('.side_drop_down_menu_button').imageButtonContainerPressed(false);
        Triton.SideDropDownMenu.jMenu.find('.side_drop_down_menu_button').animate({'background-color': TritonTheme.BACKGROUND_COLOR}, {
            duration: Triton.SideDropDownMenu.animationDuration
        });
        Triton.SideDropDownMenu.jMenu.find('.side_drop_down_menu_panel, .side_drop_down_menu_panel_background').animate({
            left: (Triton.SideDropDownMenu.jMenu.find('.side_drop_down_menu_panel').outerWidth(true) * -1) + 'px'
        }, {
            duration: Triton.SideDropDownMenu.animationDuration,
            complete: function () {
                $(this).hide();
            }
        });


        if (Triton.Responsive.type == Triton.Responsive.Type.PC) {

            if (Triton.SideDropDownMenu.unuseTab != true) {

                Triton.SideDropDownMenu.jMenu.find('.side_drop_down_menu_tab_container').animate({
                    'left': '0',
                    'width': '100%'
                }, {
                    duration: Triton.SideDropDownMenu.animationDuration
                });
            }

            Triton.SideDropDownMenu.jPageContainer.animate({
                'left': '0'
            }, {
                duration: Triton.SideDropDownMenu.animationDuration
            });
        }

        Triton.Responsive.apply(true);

        Triton.SideDropDownMenu.saveStorageMenuOpened(false);
    },


    hideMorePanel: function () {

        Triton.SideDropDownMenu.jMenu.find('.side_drop_down_menu_header_element_more').imageButtonContainerPressed(false);
        Triton.SideDropDownMenu.jMenu.find('.side_drop_down_menu_more_panel').hide();
    },


    getMenuPath: function (menu) {

        if (menu == undefined) {
            return undefined;
        }

        var path = '';

        for (var j = 0, jl = menu.length; j < jl; j++) {

            var menuName = menu[j];
            if (String.isNotBlank(path) && !path.endsWith('/')) {
                path += '/';
            }

            path += menuName;
        }

        return path;
    },

    createMenuButton: function (options, depth) {

        var menu = options['menu'];
        var menuParameterMap = options['menuParameterMap'];
        var subMenuList = options['subMenuList'];

        var iconImageUrl = options['iconImageUrl'];
        var pressedIconImageUrl = options['pressedIconImageUrl'];
        var logoImageUrl = options['logoImageUrl'];
        var pressedLogoImageUrl = options['pressedLogoImageUrl'];
        var text = options['text'];
        var hide = options['hide'];
        var markPrefixList = options['markPrefixList'];
        var noMoreDepth = options['noMoreDepth'];

        var redirectUrl = options['redirectUrl'];
        var openUrl = options['openUrl'];
        var onClick = options['onClick'];

        // CategoryMenu 체크하고 넘어감
        if (noMoreDepth != true && (subMenuList == undefined || subMenuList.length == 0)) {

            for (var i = 0, l = Triton.SideDropDownMenu.categoryMenuList.length; i < l; i++) {

                var categoryMenu = Triton.SideDropDownMenu.categoryMenuList[i];
                var categoryMenuMenu = categoryMenu['menu'];
                var categoryMenuItems = categoryMenu['items'];

                if (menu.length == categoryMenuMenu.length) {

                    var matched = true;
                    for (var j = 0, jl = menu.length; j < jl; j++) {

                        if (menu[j] != categoryMenuMenu[j]) {
                            matched = false;
                            break;
                        }
                    }

                    if (matched == true) {

                        if (subMenuList == undefined)
                            subMenuList = [];

                        // 카테고리 메뉴 맞는거있어서 다음 메뉴 그려줘야 함
                        for (var j = 0, jl = categoryMenuItems.length; j < jl; j++) {

                            var categoryMenuItem = categoryMenuItems[j];
                            var subMenuItem = {};

                            subMenuItem['noMoreDepth'] = true;
                            subMenuItem['menu'] = categoryMenuMenu;
                            subMenuItem['menuParameterMap'] = categoryMenuItem['parameterMap'];
                            subMenuItem['text'] = categoryMenuItem['name'];

                            subMenuList.push(subMenuItem);
                        }
                    }
                }
            }
        }

        var html = Triton.SideDropDownMenu['HTML_MENU_PANEL_BUTTON_DEPTH_' + (depth + 1)];

        var jHtml = jQuery(html);
        var jButton = jHtml.children('.side_drop_down_menu_panel_button');
        // jButton.attr('title', text);
        jButton.data('text', text);
        jButton.data('menu', menu);
        jButton.data('menu-parameter-map', menuParameterMap);
        jButton.data('sub-menu-list', subMenuList);
        jButton.data('mark-prefix-list', markPrefixList);

        jButton.find('.side_drop_down_menu_text').text(text);
        if (iconImageUrl != undefined) {
            jButton.find('.side_drop_down_menu_icon').show().append('<img src="' + iconImageUrl + '" style="vertical-align:middle;width:16px;" alt="top drop down menu text"/>');
        }

        jButton.initButton().on(Lia.Component.Event.STATUS_CHANGED, {
            pressedIconImageUrl: pressedIconImageUrl,
            iconImageUrl: iconImageUrl,
            depth: depth,
            subMenuList: subMenuList,
            menu: menu,
            noMoreDepth: noMoreDepth,
            menuParameterMap: menuParameterMap,
            redirectUrl: redirectUrl,
            openUrl: openUrl,
            onClick: onClick
        }, function (e) {

            var jThis = $(this);
            var status = e.status;

            var pressedIconImageUrl = e.data.pressedIconImageUrl;
            var iconImageUrl = e.data.iconImageUrl;
            var subMenuList = e.data.subMenuList;
            var menu = e.data.menu;
            var depth = e.data.depth;
            var menuParameterMap = e.data.menuParameterMap;
            var noMoreDepth = e.data.noMoreDepth;
            var redirectUrl = e.data.redirectUrl;
            var openUrl = e.data.openUrl;

            if (status == Lia.Component.Value.Button.Status.DEFAULT) {

                jThis.css({
                    'color': TritonTheme.SIDE_DROP_DOWN_MENU_PANEL_TEXT_COLOR
                });

                jThis.find('.side_drop_down_menu_text').css({
                    'color': TritonTheme.SIDE_DROP_DOWN_MENU_PANEL_TEXT_COLOR
                });

                if (depth == 0) {

                    jThis.css({
                        'background': '',
                    });

                    if (String.isNotBlank(TritonTheme.SIDE_DROP_DOWN_MENU_PANEL_1_DOWN_ARROW_SELECTED_IMAGE_URL)) {
                        jThis.find('.side_drop_down_menu_arrow').attr('src', TritonTheme.SIDE_DROP_DOWN_MENU_PANEL_1_DOWN_ARROW_IMAGE_URL);
                    }

                    if (String.isNotBlank(pressedIconImageUrl)) {
                        jThis.find('.side_drop_down_menu_icon img').attr({'src': iconImageUrl});
                    }

                } else if (depth == 1) {
                    if (String.isNotBlank(TritonTheme.SIDE_DROP_DOWN_MENU_PANEL_2_DOWN_ARROW_SELECTED_IMAGE_URL)) {
                        jThis.find('.side_drop_down_menu_arrow').attr('src', TritonTheme.SIDE_DROP_DOWN_MENU_PANEL_2_DOWN_ARROW_IMAGE_URL);
                    }
                } else if (depth == 2) {
                    if (String.isNotBlank(TritonTheme.SIDE_DROP_DOWN_MENU_PANEL_3_DOWN_ARROW_SELECTED_IMAGE_URL)) {
                        jThis.find('.side_drop_down_menu_arrow').attr('src', TritonTheme.SIDE_DROP_DOWN_MENU_PANEL_3_DOWN_ARROW_IMAGE_URL);
                    }
                }

            } else if (status == Lia.Component.Value.Button.Status.HOVERING || status == Lia.Component.Value.Button.Status.PRESSING || status == Lia.Component.Value.Button.Status.PRESSED) {


                if (depth == 0) {

                    jThis.css({
                        'color': TritonTheme.SIDE_DROP_DOWN_MENU_PANEL_DEPTH_1_SELECTED_TEXT_COLOR
                    });

                    jThis.find('.side_drop_down_menu_text').css({
                        'color': TritonTheme.SIDE_DROP_DOWN_MENU_PANEL_DEPTH_1_SELECTED_TEXT_COLOR
                    });

                    jThis.css({
                        'background': TritonTheme.SIDE_DROP_DOWN_MENU_PANEL_SELECTED_BACKGROUND_COLOR
                    });

                    if (String.isNotBlank(TritonTheme.SIDE_DROP_DOWN_MENU_PANEL_1_DOWN_ARROW_SELECTED_IMAGE_URL)) {
                        jThis.find('.side_drop_down_menu_arrow').attr('src', TritonTheme.SIDE_DROP_DOWN_MENU_PANEL_1_DOWN_ARROW_SELECTED_IMAGE_URL);
                    }


                    if (String.isNotBlank(pressedIconImageUrl)) {
                        jThis.find('.side_drop_down_menu_icon img').attr({'src': pressedIconImageUrl});
                    }

                } else if (depth == 1) {

                    jThis.css({
                        'color': TritonTheme.SIDE_DROP_DOWN_MENU_PANEL_SELECTED_TEXT_COLOR
                    });

                    jThis.find('.side_drop_down_menu_text').css({
                        'color': TritonTheme.SIDE_DROP_DOWN_MENU_PANEL_SELECTED_TEXT_COLOR
                    });


                    if (String.isNotBlank(TritonTheme.SIDE_DROP_DOWN_MENU_PANEL_2_DOWN_ARROW_SELECTED_IMAGE_URL)) {
                        jThis.find('.side_drop_down_menu_arrow').attr('src', TritonTheme.SIDE_DROP_DOWN_MENU_PANEL_2_DOWN_ARROW_SELECTED_IMAGE_URL);
                    }

                } else if (depth == 2) {

                    jThis.css({
                        'color': TritonTheme.SIDE_DROP_DOWN_MENU_PANEL_SELECTED_TEXT_COLOR
                    });

                    jThis.find('.side_drop_down_menu_text').css({
                        'color': TritonTheme.SIDE_DROP_DOWN_MENU_PANEL_SELECTED_TEXT_COLOR
                    });


                    if (String.isNotBlank(TritonTheme.SIDE_DROP_DOWN_MENU_PANEL_3_DOWN_ARROW_SELECTED_IMAGE_URL)) {
                        jThis.find('.side_drop_down_menu_arrow').attr('src', TritonTheme.SIDE_DROP_DOWN_MENU_PANEL_3_DOWN_ARROW_SELECTED_IMAGE_URL);
                    }

                } else if (depth == 3) {

                    jThis.css({
                        'color': TritonTheme.SIDE_DROP_DOWN_MENU_PANEL_SELECTED_TEXT_COLOR
                    });

                    jThis.find('.side_drop_down_menu_text').css({
                        'color': TritonTheme.SIDE_DROP_DOWN_MENU_PANEL_SELECTED_TEXT_COLOR
                    });
                }
            }

        }).on('click', {
            depth: depth,
            subMenuList: subMenuList,
            menu: menu,
            noMoreDepth: noMoreDepth,
            menuParameterMap: menuParameterMap,
            redirectUrl: redirectUrl,
            openUrl: openUrl,
            onClick: onClick
        }, function (e) {

            e.preventDefault();
            e.stopPropagation();

            var menu = e.data.menu;
            var depth = e.data.depth;
            var subMenuList = e.data.subMenuList;
            var menuParameterMap = e.data.menuParameterMap;
            var noMoreDepth = e.data.noMoreDepth;
            var redirectUrl = e.data.redirectUrl;
            var openUrl = e.data.openUrl;

            if (String.isNotBlank(openUrl)) {
                Lia.open(openUrl);
                return;
            }

            if (String.isNotBlank(redirectUrl)) {
                Lia.redirect(redirectUrl);
                return;
            }

            var jThis = jQuery(this);
            var jSub = jThis.parent().find('.side_drop_down_menu_panel_button_sub');

            if (jThis.buttonPressed()) {
                jThis.buttonPressed(false);
                jSub.slideUp({
                    duration: Triton.SideDropDownMenu.animationDuration,
                    complete: function () {
                        $(this).empty().hide();
                    }
                });
                return;

            } else {
                jThis.parent().siblings().children('.side_drop_down_menu_panel_button.pressed').trigger('click');
            }

            jThis.buttonPressed(true);

            if (noMoreDepth != true && subMenuList != undefined && subMenuList.length > 0) {

                var nextDepth = depth + 1;

                if (subMenuList != undefined && subMenuList.length > 0) {

                    for (var i = 0, l = subMenuList.length; i < l; i++) {

                        var subMenuItem = subMenuList[i];

                        var subMenuItemMenu = subMenuItem['menu'];
                        var subMenuItemMenuParameterMap = subMenuItem['menuParameterMap'];
                        var subMenuItemHide = subMenuItem['hide'];
                        var subMenuItemText = subMenuItem['text'];
                        var subMenuItemMarkPrefixList = subMenuItem['markPrefixList'];

                        if (Triton.SideDropDownMenu.menuShowChecker(subMenuItemMenu, nextDepth, subMenuItem) != true || subMenuItemHide == true) {
                            continue;
                        }

                        jSub.append(Triton.SideDropDownMenu.createMenuButton(subMenuItem, nextDepth));
                    }
                }

                jSub.slideDown({
                    duration: Triton.SideDropDownMenu.animationDuration
                });
                return;
            }

            if (onClick != undefined) {
                onClick();
            }

            if (menu != undefined) {
                jQuery.PageManager.go(menu, menuParameterMap);
            }

            if (Triton.Responsive.getType() != Triton.Responsive.Type.PC) {
                Triton.SideDropDownMenu.hideMenuPanel();
            }
        });

        if (subMenuList == undefined || subMenuList.length == 0) {
            jButton.find('.side_drop_down_menu_arrow').hide();
        } else {
            jButton.find('.side_drop_down_menu_arrow').show();
        }

        return jHtml;
    },

    addCategoryMenu: function (categoryMenu) {
        Triton.SideDropDownMenu.categoryMenuList.push(categoryMenu);
    },

    /*
     item : { sub_title : '', title : '', registered_date : '', body : '', onClick : function() {} }
     * @param item
     */
    addAlarmItem: function (item, options, backward) {

        Triton.SideDropDownMenu.jMenu.find('.side_drop_down_menu_alarm_item_panel_message').hide();

        var title = Lia.p(item, 'title');
        var subTitle = Lia.p(item, 'sub_title');
        var registeredDate = Lia.p(item, 'registered_date');
        var isConsumed = Lia.p(item, 'is_consumed');

        var onClick = Lia.p(options, 'onClick');

        var jPanel = Triton.SideDropDownMenu.jMenu.find('.side_drop_down_menu_alarm_item_panel');

        var jItemPc = jQuery(SideDropDownMenu.HTML_ALARM_ITEM);
        var jItemMobile = jQuery(SideDropDownMenu.HTML_ALARM_ITEM);

        var jItem = jQuery(jItemPc).add(jItemMobile);
        jItem.initButton().addClass('side_drop_down_menu_alarm_item_no_consumed').css({
            'background-color': '#eeeeee'
        });

        jItem.on(Lia.Component.Event.STATUS_CHANGED, function (e) {

            var jThis = $(this);

            var status = e.status;
            if (status == Lia.Component.Value.Button.Status.HOVERING) {

                jThis.css({
                    'text-decoration': 'underline'
                });

            } else {

                jThis.css({
                    'text-decoration': ''
                });
            }


            if (status == Lia.Component.Value.Button.Status.PRESSED) {

                jThis.css({
                    'background-color': '#ffffff'
                });

            } else {

                jThis.css({
                    'background-color': '#eeeeee'
                });
            }

        }).on('click', {
            item: item,
            options: options,
            onClick: onClick
        }, function (e) {

            var item = e.data.item;
            var options = e.data.options;

            var onClick = e.data.onClick;
            if (onClick != undefined) {
                onClick(item, options);
            }

            var jThis = $(this);
            jThis.removeClass('side_drop_down_menu_alarm_item_no_consumed').buttonPressed(true);

            Triton.SideDropDownMenu.jMenu.find('.side_drop_down_menu_alarm_panel').trigger('click');

            if (jPanel.find('.side_drop_down_menu_alarm_item_no_consumed').length > 0) {
                Triton.SideDropDownMenu.jMenu.find('.side_drop_down_menu_header_element_alarm_button').css('background-color', TritonTheme.SIDE_DROP_DOWN_MENU_ALARM_NOTICE_BACKGROUND_COLOR);
                Triton.SideDropDownMenu.jMenu.find('.side_drop_down_menu_header_element_alarm_button_normal_image').hide();
                Triton.SideDropDownMenu.jMenu.find('.side_drop_down_menu_header_element_alarm_button_white_text').show();
                Triton.SideDropDownMenu.jMenu.find('.side_drop_down_menu_header_element_alarm_button_normal_text').hide();
            } else {
                Triton.SideDropDownMenu.jMenu.find('.side_drop_down_menu_header_element_alarm_button').css('background-color', '');
                Triton.SideDropDownMenu.jMenu.find('.side_drop_down_menu_header_element_alarm_button_normal_image').show();
                Triton.SideDropDownMenu.jMenu.find('.side_drop_down_menu_header_element_alarm_button_white_text').hide();
                Triton.SideDropDownMenu.jMenu.find('.side_drop_down_menu_header_element_alarm_button_normal_text').show();
            }
        });

        jItem.find('.side_drop_down_menu_alarm_item_title').html(title);
        jItem.find('.side_drop_down_menu_alarm_item_date').html(registeredDate);

        if (String.isNotBlank(subTitle)) {
            jItem.find('.side_drop_down_menu_alarm_item_sub_title').html(subTitle).show();
        }

        if (backward == true) {
            jPanel.append(jItemPc);
        } else {
            jPanel.prepend(jItemPc);
        }

        if (isConsumed == 1) {
            jItem.removeClass('side_drop_down_menu_alarm_item_no_consumed').buttonPressed(true);
        }

        if (jPanel.find('.side_drop_down_menu_alarm_item_no_consumed').length > 0) {
            Triton.SideDropDownMenu.jMenu.find('.side_drop_down_menu_header_element_alarm_button').css('background-color', TritonTheme.SIDE_DROP_DOWN_MENU_ALARM_NOTICE_BACKGROUND_COLOR);
            Triton.SideDropDownMenu.jMenu.find('.side_drop_down_menu_header_element_alarm_button_normal_image').hide();
            Triton.SideDropDownMenu.jMenu.find('.side_drop_down_menu_header_element_alarm_button_white_image').show();
            Triton.SideDropDownMenu.jMenu.find('.side_drop_down_menu_header_element_alarm_button_white_text').show();
            Triton.SideDropDownMenu.jMenu.find('.side_drop_down_menu_header_element_alarm_button_normal_text').hide();
        } else {
            Triton.SideDropDownMenu.jMenu.find('.side_drop_down_menu_header_element_alarm_button').css('background-color', '');
            Triton.SideDropDownMenu.jMenu.find('.side_drop_down_menu_header_element_alarm_button_normal_image').show();
            Triton.SideDropDownMenu.jMenu.find('.side_drop_down_menu_header_element_alarm_button_white_image').hide();
            Triton.SideDropDownMenu.jMenu.find('.side_drop_down_menu_header_element_alarm_button_white_text').hide();
            Triton.SideDropDownMenu.jMenu.find('.side_drop_down_menu_header_element_alarm_button_normal_text').show();
        }

        var jElementMobile = Triton.SideDropDownMenu.jMenu.find('.side_drop_down_menu_more_alarm_button');
        if (jElementMobile.length > 0) {

            var jSubPanel = jElementMobile.children('.side_drop_down_menu_more_button_sub_panel_mobile');
            jSubPanel.children('.side_drop_down_menu_more_button_default_message').hide();
            if (backward == true) {
                jSubPanel.append(jItemMobile);
            } else {
                jSubPanel.prepend(jItemMobile);
            }
        }

    },

    setMenuMarkPrefixListInternal: function (menu) {

        var markPrefixList = menu['markPrefixList'];
        var markSubMenuList = menu['markSubMenuList'];
        var subMenuList = menu['subMenuList'];

        if (markPrefixList == undefined
            &&
            ((subMenuList != undefined && subMenuList.length > 0)
                || (markSubMenuList != undefined && markSubMenuList.length > 0))
        ) {
            markPrefixList = [];
        }

        if (subMenuList != undefined && subMenuList.length > 0) {

            for (var i = 0, l = subMenuList.length; i < l; i++) {
                var subMenuItem = subMenuList[i];
                Triton.SideDropDownMenu.setMenuMarkPrefixListInternal(subMenuItem);

                var subMenu = subMenuItem['menu'];
                var subMenuMarkPrefixList = subMenuItem['markPrefixList'];
                if (subMenuMarkPrefixList != undefined && subMenuMarkPrefixList.length > 0) {

                    for (var j = 0, jl = subMenuMarkPrefixList.length; j < jl; j++) {
                        markPrefixList.push(subMenuMarkPrefixList[j]);
                    }
                }

                markPrefixList.push(Triton.SideDropDownMenu.getMenuPath(subMenu));
            }
        }

        if (markSubMenuList != undefined && markSubMenuList.length > 0) {

            for (var i = 0, l = markSubMenuList.length; i < l; i++) {
                var markSubMenuItem = markSubMenuList[i];
                var markSubMenuItemMenu = markSubMenuItem['menu'];
                if (markSubMenuItemMenu != undefined && markSubMenuItemMenu.length > 0) {
                    markPrefixList.push(Triton.SideDropDownMenu.getMenuPath(markSubMenuItemMenu));
                }

                var markSubMenuItemSubMenuList = markSubMenuItemMenu['subMenuList'];
                if (markSubMenuItemSubMenuList != undefined && markSubMenuItemSubMenuList.length > 0) {

                    for (var j = 0, jl = markSubMenuItemSubMenuList.length; j < jl; j++) {

                        var markSubMenuItemSubMenuItem = markSubMenuItemSubMenuList[j];
                        var markSubMenuItemSubMenuItemMenu = markSubMenuItemSubMenuItem['menu'];
                        var markSubMenuItemSubMenuItemMarkPrefixList = markSubMenuItemSubMenuItem['markPrefixList'];

                        markPrefixList.push(Triton.SideDropDownMenu.getMenuPath(markSubMenuItemSubMenuItem));

                        if (markSubMenuItemSubMenuItemMarkPrefixList != undefined && markSubMenuItemSubMenuItemMarkPrefixList.length > 0) {

                            for (var k = 0, kl = markSubMenuItemSubMenuItemMarkPrefixList.length; k < kl; k++) {
                                markPrefixList.push(markSubMenuItemSubMenuItemMarkPrefixList[k]);
                            }
                        }
                    }

                }

            }
        }


        menu['markPrefixList'] = markPrefixList;
    },

    add: function (options) {

        var menu = options['menu'];
        var menuParameterMap = options['menuParameterMap'];
        var subMenuList = options['subMenuList'];

        var iconImageUrl = options['iconImageUrl'];
        var logoImageUrl = options['logoImageUrl'];
        var pressedLogoImageUrl = options['pressedLogoImageUrl'];
        var text = options['text'];
        var hide = options['hide'];
        var markPrefixList = options['markPrefixList'];

        Triton.SideDropDownMenu.setMenuMarkPrefixListInternal(options);

        Triton.SideDropDownMenu.menuList.push(options);

        if (Triton.SideDropDownMenu.menuShowChecker(menu, 0, options) != true || hide == true) {
            return;
        }

        var depth = 0;
        var jButton = Triton.SideDropDownMenu.createMenuButton(options, depth);
        Triton.SideDropDownMenu.jMenu.find('.side_drop_down_menu_panel').append(jButton);
    },

    resize: function () {

        if (Triton.SideDropDownMenu.unuseTab != true) {

            if (Triton.SideDropDownMenu.jMenu.find('.side_drop_down_menu_button').buttonPressed()) {

                if (Triton.Responsive.getType() == Triton.Responsive.Type.PC) {

                    var menuWidth = Triton.SideDropDownMenu.jMenu.find('.side_drop_down_menu_panel').outerWidth(true);
                    var windowWidth = jQuery(window).width() - menuWidth;
                    Triton.SideDropDownMenu.jMenu.find('.side_drop_down_menu_tab_container').css({
                        'left': menuWidth + 'px',
                        'width': windowWidth + 'px'
                    });

                } else {

                    Triton.SideDropDownMenu.jMenu.find('.side_drop_down_menu_tab_container').css({
                        'left': '0',
                        'width': '100%'
                    });
                }
            }
        }

        Triton.SideDropDownMenu.adjustTab();
    },

    getPageManagerPath: function () {

        var path = '';

        for (var j = 0, jl = jQuery.PageManager.getDepth(); j <= jl; j++) {

            var menuName = jQuery.PageManager.getMenuParameter(j);
            if (String.isNotBlank(path) && !path.endsWith('/')) {
                path += '/';
            }

            path += menuName;
        }

        return path;
    },

    markInternal: function (parameterMap, beforeParameterMap, depth, jMenu) {

        var path = Triton.SideDropDownMenu.getPageManagerPath();

        var jButtons = jMenu.children().children('.side_drop_down_menu_panel_button');

        for (var i = 0, l = jButtons.length; i < l; i++) {
            var jButton = jButtons.eq(i);

            var menu = jButton.data('menu');
            var menuParameterMap = jButton.data('menu-parameter-map');
            var subMenuList = jButton.data('sub-menu-list');
            var markPrefixList = jButton.data('mark-prefix-list');

            var contain = (menu != undefined);
            if (menu != undefined) {

                for (var j = 0, jl = jQuery.PageManager.getDepth(); j <= jl; j++) {

                    var menuName = jQuery.PageManager.getMenuParameter(j);
                    if (!(menuName == menu[j] || menuName.startsWith(menu[j] + '/'))) {
                        contain = false;
                        break;
                    }
                }
            }

            if (contain == false && markPrefixList != undefined) {

                contain = false;
                for (var k = 0, kl = markPrefixList.length; k < kl; k++) {
                    var prefix = markPrefixList[k];
                    if (path.startsWith(prefix)) {
                        contain = true;
                        break;
                    }
                }
            }

            if (contain == true && menuParameterMap != undefined) {

                for (var key in menuParameterMap) {

                    if (String.isNotBlank(menuParameterMap[key]) && parameterMap[key] != menuParameterMap[key]) {
                        contain = false;
                        break;
                    }
                }
            }

            if (contain == true) {


                if (subMenuList != undefined && subMenuList.length > 0) {

                    if (!jButton.buttonPressed()) {
                        jButton.trigger('click');
                    }

                    // 다음 메뉴가 있으니 클릭
                    Triton.SideDropDownMenu.markInternal(parameterMap, beforeParameterMap, depth + 1, jButton.siblings('.side_drop_down_menu_panel_button_sub'));
                    break;

                } else {

                    if (!jButton.buttonPressed()) {
                        jButton.buttonPressed(true);
                    }
                }

            } else {

                if (jButton.buttonPressed()) {
                    jButton.trigger('click');
                }
            }
        }
    },

    mark: function (parameterMap, beforeParameterMap) {

        Triton.SideDropDownMenu.markInternal(parameterMap, beforeParameterMap, 0, Triton.SideDropDownMenu.jMenu.find('.side_drop_down_menu_panel'));

        Triton.SideDropDownMenu.checkTab(parameterMap, beforeParameterMap);

        Triton.SideDropDownMenu.saveStorage();
    }
};


var TopDropDownMenu = Triton.TopDropDownMenu = {

    HEADER_ELEMENT_LOGO: 'HEADER_ELEMENT_LOGO',

    HEADER_ELEMENT_MENU_BUTTON: 'HEADER_ELEMENT_MENU_BUTTON',
    HEADER_ELEMENT_ICON_BUTTON: 'HEADER_ELEMENT_ICON_BUTTON',

    HEADER_ELEMENT_MORE: 'HEADER_ELEMENT_MORE',
    HEADER_ELEMENT_QUICK_MENU: 'HEADER_ELEMENT_QUICK_MENU',
    HEADER_ELEMENT_ALARM_BUTTON: 'HEADER_ELEMENT_ALARM_BUTTON',

    HEADER_ELEMENT_BUTTON: 'HEADER_ELEMENT_BUTTON',

    HeaderMenuButtonImageUrl: Triton.PageConstructor.HeaderMenuButtonImageUrl,

    HTML:
        '<div>' +

        '<div class="top_drop_down_menu_header_container" style="position:absolute;top:0;left:0;right:0;">' +

        // 추가 상단 바
        '<div class="top_drop_down_menu_header_button_tab_bar" style="display:none;overflow:auto;font-family: notokr-regular, NanumGothic;line-height:35px;font-size:13px;background-color:' + TritonTheme.TOP_DROP_DOWN_MENU_STATUS_BACKGROUND_COLOR + ';border-bottom:1px solid ' + TritonTheme.TOP_DROP_DOWN_MENU_PANEL_BORDER_COLOR + '">' +

        '<div class="top_drop_down_menu_header_button_tab_bar_left_section" style="float:left;overflow:auto;"></div>' +
        '<div class="top_drop_down_menu_header_button_tab_bar_right_section" style="float:right;overflow:auto;"></div>' +

        '</div>' +


        // 상단 상태 바
        '<div class="top_drop_down_menu_header_status_bar" style="display:none;overflow:auto;font-family: notokr-regular, NanumGothic;line-height:35px;font-size:13px;background-color:' + TritonTheme.TOP_DROP_DOWN_MENU_STATUS_BACKGROUND_COLOR + ';border-bottom:1px solid ' + TritonTheme.TOP_DROP_DOWN_MENU_PANEL_BORDER_COLOR + '">' +

        '<div style="float:left;height:35px;">' +

        '<img class="top_drop_down_menu_header_status_bar_profile_img" src="/res/lia/triton/img/menu_topdropdown/ico_profile.png" style="float:left;margin:7px 10px 0 20px;" alt="top drop down menu header status bar profile img"/>' +
        '<div class="top_drop_down_menu_header_status_bar_name" style="float:left;display:none;"><span class="top_drop_down_menu_header_status_bar_name_text" style="font-family: notokr-medium, NanumGothicBold;"></span><span class="strings" lia-string-key="TRITON.HEADER.HELLO"></span></div>' +
        '<div class="top_drop_down_menu_header_status_bar_info" style="float:left;display:none;"><span style="padding-left:10px;padding-right:10px;">|</span><span class="top_drop_down_menu_header_status_bar_info_text" style="font-family: notokr-medium, NanumGothicBold;"></span></div>' +

        '</div>' +


        '<div style="float:right;overflow:auto;">' +

        '<div class="top_drop_down_menu_header_status_bar_login_info" style="height:35px;float:left;padding-right:10px;display:none;"><span style="font-family: notokr-medium, NanumGothicBold;" class="strings" lia-string-key="TRITON.HEADER.LAST_LOGGED_IN"></span> <span class="top_drop_down_menu_header_status_bar_login_date">-</span><span class="top_drop_down_menu_header_status_bar_dash" style="display:none;"> / </span><span class="top_drop_down_menu_header_status_bar_login_ip_address" style="display:none;">-</span></div>' +
        '<div class="top_drop_down_menu_header_status_bar_time" style="display:none;height:35px;float:left;background-color:' + TritonTheme.TOP_DROP_DOWN_MENU_STATUS_CLOCK_BACKGROUND_COLOR + ';color:' + TritonTheme.TOP_DROP_DOWN_MENU_STATUS_CLOCK_COLOR + ';font-family: notokr-medium, NanumGothicBold;padding-left:10px;padding-right:10px;font-size:14px;border-left:1px solid ' + TritonTheme.TOP_DROP_DOWN_MENU_PANEL_BORDER_COLOR + '"></div>' +

        '</div>' +

        '</div>' +

        // 헤더
        '<div class="top_drop_down_menu_header" style="position:relative;height:73px;background-color:' + TritonTheme.BACKGROUND_COLOR + ';border-bottom:1px solid ' + TritonTheme.TOP_DROP_DOWN_MENU_PANEL_BORDER_COLOR + ';">' +

        // 로고 이미지
        '<div class="top_drop_down_menu_header_element_logo" style="position:absolute;top:0;width:100%;height:73px;line-height:73px;text-align:center;display:none;">' +
        '<img title="Logo" style="vertical-align:middle;" alt="logo"/>' +
        '</div>' +

        // 오른쪽 이미지
        '<div class="top_drop_down_menu_header_element_right_layout" style="position:absolute;right:0;top:0;height:73px;line-height:73px;"">' +
        '</div>' +

        // 왼쪾 이미지
        '<div class="top_drop_down_menu_header_element_left_layout" style="position:absolute;left:0;top:0;">' +
        '</div>' +

        '</div>' +

        // 모바일 해더
        '<div class="top_drop_down_menu_header_mobile" style="position:relative;height:50px;background-color:' + TritonTheme.BACKGROUND_COLOR + ';border-bottom:1px solid ' + TritonTheme.TOP_DROP_DOWN_MENU_PANEL_BORDER_COLOR + ';display:none;">' +

        // 로고 이미지
        '<div class="top_drop_down_menu_header_element_logo_mobile" style="position:absolute;top:0;width:100%;height:50px;line-height:50px;text-align:center;display:none;">' +
        '<img title="Logo" style="vertical-align:middle;width:auto;" alt="Logo"/>' +
        '</div>' +

        // 오른쪽 이미지
        '<div class="top_drop_down_menu_header_element_right_layout_mobile" style="position:absolute;top:0;right:0;">' +
        '</div>' +

        // 왼쪽 이미지
        '<div class="top_drop_down_menu_header_element_left_layout_mobile" style="position:absolute;left:0;top:0;">' +
        '</div>' +

        '</div>' +

        // 탭
        '<div class="top_drop_down_menu_tab_container" style="position:relative;height:44px;display:none;">' +

        '<div style="position:absolute;top:0;left:0;right:0;height:43px;border-bottom:1px solid ' + TritonTheme.TOP_DROP_DOWN_MENU_PANEL_BORDER_COLOR + ';background-color:' + TritonTheme.TOP_DROP_DOWN_MENU_TAB_CONTAINER_BACKGROUND_COLOR + ';"></div>' +

        '<div style="position:relative;overflow:hidden;top:0;margin-left:15px;margin-right:70px;padding-top:9px;height:35px;">' +
        '<div class="top_drop_down_menu_tab_panel" style="position:absolute;"></div>' +
        '</div>' +

        '<img src="' + TritonTheme.TOP_DROP_DOWN_MENU_TAB_LEFT_ARROW_BUTTON_IMAGE_URL + '" ' +
        ' class="top_drop_down_menu_tab_left_button image_button press" style="position:absolute;top:1px;right:35px;display:none;" alt="top drop down menu tab left button press"/>' +

        '<img src="' + TritonTheme.TOP_DROP_DOWN_MENU_TAB_RIGHT_ARROW_BUTTON_IMAGE_URL + '" ' +
        ' class="top_drop_down_menu_tab_right_button image_button press" style="position:absolute;top:1px;right:15px;display:none;" alt="top drop down menu tab right button press"/>' +
        '</div>' +

        '</div>' +

        '<div class="top_drop_down_menu_panel" style="position:absolute;left:0;top:0;right:0;bottom:0;display:none;">' +

        '<div class="top_drop_down_menu_panel_content" style="position:absolute;left:5px;top:74px;width:auto;height:auto;margin-bottom:20px;z-index:1000;">' +

        '<div style="position:relative;top:10px;overflow:auto;border:1px solid ' + TritonTheme.TOP_DROP_DOWN_MENU_PANEL_BORDER_COLOR + ';border-radius:5px;background:' + TritonTheme.BACKGROUND_COLOR + ';">' +

        '<div class="top_drop_down_menu_1depth_panel" style="float:left;"></div>' +
        '<div class="top_drop_down_menu_2depth_panel" style="float:left;border-left:1px solid ' + TritonTheme.TOP_DROP_DOWN_MENU_BORDER_COLOR + ';display:none;"></div>' +
        '<div class="top_drop_down_menu_3depth_panel" style="float:left;border-left:1px solid ' + TritonTheme.TOP_DROP_DOWN_MENU_BORDER_COLOR + ';display:none;"></div>' +
        '<div class="top_drop_down_menu_4depth_panel" style="float:left;border-left:1px solid ' + TritonTheme.TOP_DROP_DOWN_MENU_BORDER_COLOR + ';display:none;"></div>' +
        '</div>' +

        '<img src="' + TritonTheme.TOP_DROP_DOWN_MENU_ARROW_IMAGE_URL + '" style="position:absolute;top:0;left:25px;z-index:1000; " alt="top drop down menu panel"/>' +

        '</div>' +

        '<div class="top_drop_down_menu_panel_content_mobile" style="position:absolute;left:8px;top:48px;height:auto;margin-bottom:20px;display:none;font-size:15px;">' +

        '<div class="top_drop_down_menu_depth_panel_mobile" style="position:relative;top:10px;overflow:auto;border:1px solid ' + TritonTheme.TOP_DROP_DOWN_MENU_PANEL_BORDER_COLOR + ';border-radius:5px;background:' + TritonTheme.BACKGROUND_COLOR + ';z-index:1000;">' +
        '</div>' +

        '<img src="' + TritonTheme.TOP_DROP_DOWN_MENU_ARROW_IMAGE_URL + '" style="position:absolute;top:0;left:10px;z-index:1000;" alt="top drop down menu panel content mobile"/>' +
        '</div>' +

        '</div>' +

        // 퀵메뉴
        '<div class="top_drop_down_menu_quick_menu_panel" style="position:absolute;left:0;top:0;right:0;bottom:0;display:none;">' +

        '<div class="top_drop_down_menu_quick_panel_content" style="position:absolute;top:74px;width:auto;height:auto;margin-bottom:20px;z-index:1000;">' +

        '<div style="position:relative;top:10px;overflow:auto;border:1px solid ' + TritonTheme.TOP_DROP_DOWN_MENU_PANEL_BORDER_COLOR + ';border-radius:5px;background:' + TritonTheme.BACKGROUND_COLOR + ';">' +
        '<div class="top_drop_down_menu_quick_menu_item_panel" style=""></div>' +
        '</div>' +

        '<img src="' + TritonTheme.TOP_DROP_DOWN_MENU_ARROW_IMAGE_URL + '" style="position:absolute;top:0;left:50%;margin-left:-7px;z-index:1000; " alt="top drop down menu quick panel content"/>' +

        '</div>' +

        '</div>' +


        // 알림 패널
        '<div class="top_drop_down_menu_alarm_panel" style="position:absolute;left:0;top:0;right:0;bottom:0;display:none;z-index:1000;">' +

        '<div class="top_drop_down_menu_alarm_panel_content" style="position:absolute;top:74px;width:auto;height:auto;margin-bottom:20px;">' +

        '<div style="position:relative;top:10px;overflow:auto;border:1px solid ' + TritonTheme.TOP_DROP_DOWN_MENU_PANEL_BORDER_COLOR + ';border-radius:5px;background:' + TritonTheme.BACKGROUND_COLOR + ';">' +
        '<div class="top_drop_down_menu_alarm_item_panel" style="height:400px;width:350px;overflow-y:auto;">' +
        '<div class="top_drop_down_menu_alarm_item_panel_message" style="line-height:400px;text-align:center;">표시할 항목이 없습니다.</div>' +
        '</div>' +
        '</div>' +

        '<img class="top_drop_down_menu_alarm_panel_arrow_image" src="' + TritonTheme.TOP_DROP_DOWN_MENU_ARROW_IMAGE_URL + '" style="position:absolute;top:0;margin-left:-7px " alt="top drop down menu alarm panel arrow image"/>' +

        '</div>' +

        '</div>' +


        // 더보기
        '<div class="top_drop_down_menu_more_panel" style="position:absolute;left:0;top:0;right:0;bottom:0;display:none;z-index:1000;">' +

        '<div class="top_drop_down_menu_more_panel_content" style="position:absolute;right:5px;top:48px;width:200px;height:auto;margin-bottom:20px;font-size:15px;color:' + TritonTheme.TOP_DROP_DOWN_MENU_TEXT_COLOR + ';">' +

        '<div class="top_drop_down_menu_more_item_panel" style="position:relative;top:10px;overflow:auto;border:1px solid ' + TritonTheme.TOP_DROP_DOWN_MENU_PANEL_BORDER_COLOR + ';border-radius:5px;background:' + TritonTheme.BACKGROUND_COLOR + ';">' +
        '</div>' +

        '<img src="' + TritonTheme.TOP_DROP_DOWN_MENU_ARROW_IMAGE_URL + '" style="position:absolute;top:0;right:10px;" alt="top drop down menu more panel content"/>' +
        '</div>' +

        '</div>' +


        // 탭 컨텍스트 메뉴
        '<div class="top_drop_down_menu_tab_context_menu_panel" style="position:absolute;left:0;top:0;right:0;bottom:0;display:none;">' +

        '<div style="position:absolute;top:0px;width:auto;height:auto;margin-bottom:0px;">' +
        '<div style="position:relative;top:0px;overflow:auto;border:1px solid ' + TritonTheme.TOP_DROP_DOWN_MENU_PANEL_BORDER_COLOR + ';border-radius:1px;background:' + TritonTheme.BACKGROUND_COLOR + ';">' +
        '<div class="top_drop_down_menu_quick_tab_context_menu_item_panel"></div>' +
        '</div>' +
        '</div>' +
        '</div>' +

        '</div>',

    HTML_TAB:
        '<div class="top_drop_down_menu_tab button" style="float:left;position:relative;background-color:' + TritonTheme.TOP_DROP_DOWN_MENU_TAB_BACKGROUND_COLOR + ';font-family: notokr-regular, NanumGothic;font-size:14px;color:' + TritonTheme.TOP_DROP_DOWN_MENU_TEXT_COLOR + ';line-height:33px;height:33px;border-left:1px solid ' + TritonTheme.TOP_DROP_DOWN_MENU_TAB_BORDER_COLOR + ';border-top:1px solid ' + TritonTheme.TOP_DROP_DOWN_MENU_TAB_BORDER_COLOR + ';border-right:1px solid ' + TritonTheme.TOP_DROP_DOWN_MENU_TAB_BORDER_COLOR + ';border-top-left-radius: 3px;border-top-right-radius: 3px;">' +
        '<div class="top_drop_down_menu_tab_text" style="position:relative;margin-left:15px;margin-right:30px;"></div>' +
        '<div style="position:absolute;top:0;right:10px;height:33px;line-height:33px;" class="top_drop_down_menu_tab_close_button image_button_container press">' +
        '<img style="width:8px;vertical-align:middle" src="' + TritonTheme.TOP_DROP_DOWN_MENU_TAB_CLOSE_BUTTON_IMAGE_URL + '" alt="top drop down menu tab close button"/>' +
        '</div>' +
        '</div>',

    HTML_MENU_BUTTON:
        '<div class="button" style="position:relative;overflow:auto;padding-left:16px;padding-right:46px;height:43px;color:' + TritonTheme.TOP_DROP_DOWN_MENU_TEXT_COLOR + ';font-family: notokr-regular, NanumGothic;font-size:15px;">' +
        '<div style="float:left;width:16px;height:43px;text-align:center;vertical-align:middle;line-height:43px;padding-right:20px;display:none;" class="top_drop_down_menu_icon"></div>' +
        '<div style="float:left;line-height:43px; font-size:15px;" class="top_drop_down_menu_text"></div>' +
        '<img class="top_drop_down_menu_arrow" style="position:absolute;right:20px;top:17px;display:none;" src="' + TritonTheme.TOP_DROP_DOWN_MENU_1DEPTH_DOWN_ARROW_IMAGE_URL + '" alt="top drop down menu text" />' +
        '</div>',


    HTML_MENU_BUTTON_BACKGROUND_MOBILE: ['#ffffff', '#e9eef6', '#f5f8fb'],
    HTML_MENU_BUTTON_MOBILE:
        '<div>' +
        '<div class="button top_drop_down_menu_depth_button_mobile" ' +
        'style="position:relative;height:43px;width:100%;clear:both;line-height:43px;display:block;font-family:notokr-regular, NanumGothic;color:' + TritonTheme.TOP_DROP_DOWN_MENU_TEXT_COLOR + ';">' +
        '<div class="top_drop_down_menu_icon_mobile" style="float:left;width:16px;height:43px;text-align:center;vertical-align:middle;line-height:43px;padding-left:15px;padding-right:5px;display:none;"></div>' +
        '<div class="top_drop_down_menu_text_mobile" style="padding-left:15px;padding-right:20px;float:left;line-height:43px; font-size:14px;"></div>' +
        '<div class="top_drop_down_menu_arrow_mobile" style="float:right;padding-left:5px;width:10px;padding-right:15px;height:43px;text-align:center;vertical-align:middle;line-height:43px;display:none;">' +
        '<img src="' + TritonTheme.TOP_DROP_DOWN_MENU_MOBILE_1DEPTH_DOWN_ARROW_IMAGE_URL + '" style="vertical-align:middle;" alt="top drop down menu arrow mobile"/>' +
        '</div>' +
        '</div>' +
        '<div class="top_drop_down_menu_depth_sub_panel_mobile" style="display:none;clear:both;"></div>' +
        '</div>',


    HTML_MORE_BUTTON_BACKGROUND_MOBILE: ['#ffffff', '#e9eef6', '#f5f8fb'],
    HTML_MORE_BUTTON_MOBILE:
        '<div>' +
        '<div class="button top_drop_down_menu_more_button_mobile" ' +
        'style="position:relative;height:43px;line-height:43px;clear:both;width:100%;display:block;font-family:notokr-regular, NanumGothic;color:' + TritonTheme.TOP_DROP_DOWN_MENU_TEXT_COLOR + ';">' +
        '<div class="top_drop_down_menu_more_button_icon_mobile" style="float:left;width:16px;height:43px;text-align:center;vertical-align:middle;line-height:43px;padding-left:15px;padding-right:5px;display:none;"></div>' +
        '<div class="top_drop_down_menu_more_button_text_mobile" style="padding-left:15px;padding-right:20px;float:left;line-height:43px; font-size:14px;"></div>' +
        '<div class="top_drop_down_menu_more_button_arrow_mobile" style="float:right;padding-left:5px;width:10px;padding-right:15px;height:43px;text-align:center;vertical-align:middle;line-height:43px;display:none;">' +
        '<img src="' + TritonTheme.TOP_DROP_DOWN_MENU_MOBILE_1DEPTH_DOWN_ARROW_IMAGE_URL + '" style="vertical-align:middle;" alt="top drop down menu more button arrow mobile"/>' +
        '</div>' +
        '</div>' +
        '<div class="top_drop_down_menu_more_button_sub_panel_mobile" style="display:none;clear:both;">' +
        '</div>' +
        '</div>',


    HTML_QUICK_MENU_BUTTON:
        '<div class="image_button_container" style="position:relative;text-align:center;overflow:auto;width:72px;padding-left:10px;padding-right:10px;padding-top:22px;padding-bottom:22px;color:' + TritonTheme.TOP_DROP_DOWN_MENU_TEXT_COLOR + ';font-family: notokr-regular, NanumGothic;font-size:14px;">' +
        '<div class="top_drop_down_menu_quick_menu_button_image_panel" style="padding-bottom:10px;display:none;">' +
        '<img style="display:block;margin:0 auto;" alt="top drop down menu quick menu button image panel"/>' +
        '</div>' +
        '<div class="top_drop_down_menu_quick_menu_button_text"></div>' +
        '</div>',

    HTML_TAB_CONTEXT_MENU_BUTTON:
        '<div class="button" style="position:relative;text-align:left;overflow:auto;padding:10px;color:' + TritonTheme.TOP_DROP_DOWN_MENU_TEXT_COLOR + ';font-family: notokr-regular, NanumGothic;font-size:14px;">' +
        '</div>',

    HTML_ALARM_ITEM:
        '<div class="button" style="border-bottom:1px solid ' + TritonTheme.TOP_DROP_DOWN_MENU_BORDER_COLOR + ';position:relative;text-align:left;overflow:auto;padding:10px;color:' + TritonTheme.TOP_DROP_DOWN_MENU_TEXT_COLOR + ';font-family: notokr-regular, NanumGothic;font-size:14px;">' +
        '<div class="top_drop_down_menu_alarm_item_sub_title" style="font-family: notokr-regular, NanumGothic;color:' + TritonTheme.TOP_DROP_DOWN_MENU_ALARM_SUB_TITLE_TEXT_COLOR + ';display:none;"></div>' +
        '<div class= "top_drop_down_menu_alarm_item_title" style="font-family: notokr-medium, NanumGothicBold;"></div>' +
        '<div class="top_drop_down_menu_alarm_item_date"  style="font-family: notokr-regular, NanumGothic;"></div>' +
        '</div>',

    categoryMenuList: undefined,
    menuList: undefined,
    currentMenuName: undefined,
    getCurrentMenuName: function () {
        return Triton.TopDropDownMenu.currentMenuName;
    },

    checkTabInternal: function (list) {

        var path = Triton.TopDropDownMenu.getPageManagerPath();

        for (var i = 0, l = list.length; i < l; i++) {

            var item = list[i];
            var menu = item['menu'];
            var markPrefixList = item['markPrefixList'];
            var subMenuList = item['subMenuList'];

            var contain = (menu != undefined);
            if (menu != undefined) {

                for (var j = 0, jl = jQuery.PageManager.getDepth(); j <= jl; j++) {

                    var menuName = jQuery.PageManager.getMenuParameter(j);
                    if (!(menuName == menu[j] || menuName.startsWith(menu[j] + '/'))) {
                        contain = false;
                        break;
                    }
                }
            }

            if (contain == false && markPrefixList != undefined) {

                contain = false;
                for (var k = 0, kl = markPrefixList.length; k < kl; k++) {
                    var prefix = markPrefixList[k];
                    if (path.startsWith(prefix)) {
                        contain = true;
                        break;
                    }
                }
            }

            if (contain == true) {

                if (subMenuList != undefined && subMenuList.length > 0) {

                    var result = Triton.TopDropDownMenu.checkTabInternal(subMenuList);
                    if (result != undefined) {
                        return result;
                    }

                } else {

                    return {
                        text: item['text'],
                        path: Triton.TopDropDownMenu.getMenuPath(menu)
                    };

                }
            }
        }

        return undefined;
    },

    checkTab: function (parameterMap, beforeParameterMap) {

        var data = Triton.TopDropDownMenu.checkTabInternal(Triton.TopDropDownMenu.menuList);
        if (data == undefined) {
            data = {
                text: '이름 없음',
                path: ''
            };
        }

        var text = data['text'];
        var path = data['path'];

        Triton.TopDropDownMenu.currentMenuName = text;

        var jTab = Triton.TopDropDownMenu.jMenu.find('.top_drop_down_menu_tab_panel .top_drop_down_menu_tab');
        for (var i = 0, l = jTab.length; i < l; i++) {

            var jItem = jTab.eq(i);
            var itemPath = jItem.data('path');
            if (path == itemPath) {
                jItem.data('parameter-map', parameterMap);
                jItem.buttonPressed(true).siblings().buttonPressed(false);
                return;
            }
        }

        Triton.TopDropDownMenu.addTab({
            text: text,
            parameterMap: parameterMap,
            path: path
        });
    },


    addTab: function (item) {

        var text = Lia.p(item, 'text');
        var path = Lia.p(item, 'path');
        var parameterMap = Lia.p(item, 'parameterMap');
        var fixed = Lia.pd(false, item, 'fixed');

        var jPanel = Triton.TopDropDownMenu.jMenu.find('.top_drop_down_menu_tab_panel');
        var panelWidth = jPanel.outerWidth(true);

        var jTab = $(Triton.TopDropDownMenu.HTML_TAB);
        if (panelWidth != 0) {
            jTab.css({
                'border-left': 'none'
            });
        }

        jPanel.append(jTab);

        if (fixed == true) {

            jTab.addClass('top_drop_down_menu_tab_fixed');
            jTab.find('.top_drop_down_menu_tab_close_button').hide();
            jTab.find('.top_drop_down_menu_tab_text').css({'margin-right': '15px'});

        } else {

            jTab.addClass('top_drop_down_menu_tab_normal');
        }

        jTab.find('.top_drop_down_menu_tab_text').text(text);
        jTab.data('text', text);
        jTab.data('path', path);
        jTab.data('parameter-map', parameterMap);

        jPanel.css({
            'width': (jPanel.children().length * 1000) + 'px'
        });

        jTab.initButton().on(Lia.Component.Event.STATUS_CHANGED, function (e) {

            var jThis = $(this);
            var status = e.status;
            if (status == Lia.Component.Value.Button.Status.PRESSED) {

                jThis.css({
                    'background-color': TritonTheme.TOP_DROP_DOWN_MENU_TAB_SELECTED_BACKGROUND_COLOR,
                    height: '34px'
                });

            } else {

                jThis.css({
                    'background-color': TritonTheme.TOP_DROP_DOWN_MENU_TAB_BACKGROUND_COLOR,
                    height: '33px'

                });
            }

        }).on('click', function (e) {

            e.stopPropagation();
            e.preventDefault();

            var jThis = $(this);
            jThis.buttonPressed(true).siblings().buttonPressed(false);

            var parameterMap = jThis.data('parameter-map');
            PageManager.move(parameterMap);

        }).on('contextmenu', {
            fixed: fixed
        }, function (e) {

            var fixed = e.data.fixed;

            var jTabs = Triton.TopDropDownMenu.jMenu.find('.top_drop_down_menu_tab_panel .top_drop_down_menu_tab');
            if (jTabs.length < 2) {
                return;
            }

            e.stopPropagation();
            e.preventDefault();

            var jThis = $(this);

            Triton.TopDropDownMenu.clearTabContextMenu();

            if (fixed != true) {

                Triton.TopDropDownMenu.addTabContextMenu({
                    text: Lia.Strings.getString(Lia.Strings.TRITON.TAB.CLOSE),
                    object: {
                        jThis: jThis
                    },
                    onClick: function (object) {

                        var j = Lia.p(object, 'jThis');

                        var jThis = j.closest('.top_drop_down_menu_tab');
                        var jTabs = Triton.TopDropDownMenu.jMenu.find('.top_drop_down_menu_tab_panel .top_drop_down_menu_tab');
                        if (jTabs.length > 1) {

                            var pressed = jThis.buttonPressed();
                            if (pressed == true) {

                                var jItem = jThis.prev();
                                if (jItem.length == 0) {
                                    jItem = jThis.next();
                                }

                                jItem.trigger('click');
                            }

                            jThis.remove();
                        }

                        Triton.TopDropDownMenu.saveStorage();
                        Triton.TopDropDownMenu.adjustTab();
                    }
                });
            }

            Triton.TopDropDownMenu.addTabContextMenu({
                text: Lia.Strings.getString(Lia.Strings.TRITON.TAB.CLOSE_OTHERS),
                object: {
                    jThis: jThis
                },
                onClick: function (object) {

                    var j = Lia.p(object, 'jThis');

                    var jThis = j.closest('.top_drop_down_menu_tab');
                    var jTabs = Triton.TopDropDownMenu.jMenu.find('.top_drop_down_menu_tab_panel .top_drop_down_menu_tab.top_drop_down_menu_tab_normal');
                    jTabs.not(jThis).remove();

                    if (jThis.buttonPressed() == false) {
                        jThis.trigger('click');
                    }

                    Triton.TopDropDownMenu.saveStorage();
                    Triton.TopDropDownMenu.adjustTab();

                }
            });

            var jPanel = Triton.TopDropDownMenu.jMenu.find('.top_drop_down_menu_tab_context_menu_panel').show();

            var x = e.pageX;
            var y = e.pageY;

            jPanel.children().css({
                left: x + 'px',
                top: y + 'px'
            });

        });


        jTab.find('.image_button_container').initImageButtonContainer().on(Lia.Component.Event.STATUS_CHANGED, function (e) {

            e.stopPropagation();
            e.preventDefault();

        }).on('click', function (e) {

            e.stopPropagation();
            e.preventDefault();

            var jThis = $(this).closest('.top_drop_down_menu_tab');
            var jTabs = Triton.TopDropDownMenu.jMenu.find('.top_drop_down_menu_tab_panel .top_drop_down_menu_tab');
            if (jTabs.length > 1) {

                var pressed = jThis.buttonPressed();
                if (pressed == true) {

                    var jItem = jThis.prev();
                    if (jItem.length == 0) {
                        jItem = jThis.next();
                    }

                    jItem.trigger('click');
                }

                jThis.remove();
            }

            Triton.TopDropDownMenu.saveStorage();
            Triton.TopDropDownMenu.adjustTab();

        });

        jTab.buttonPressed(true).siblings().buttonPressed(false);
        Triton.TopDropDownMenu.adjustTab();
    },

    menuShowChecker: function (menu, depth) {
        return true;
    },

    setMenuShowChecker: function (checker) {

        Triton.TopDropDownMenu.menuShowChecker = checker;
    },


    // direction : false 왼쪽, true 오른쪽
    // mobile 모바일 여부
    addHeaderElement: function (item) {

        var direction = Lia.pd(false, item, 'direction');
        var addClass = Lia.p(item, 'addClass');
        var mobile = Lia.pd(false, item, 'mobile');
        var prepend = Lia.pd(false, item, 'prepend');
        var border = Lia.pd(false, item, 'border');

        var jContainer = jQuery('<div class="top_drop_down_menu_header_element_item image_button_container hover" style="float:left;text-align:center;"></div>');
        if (String.isNotBlank(addClass)) {
            jContainer.addClass(addClass);
        }

        var width = Lia.p(item, 'width');
        var padding = Lia.pd('', item, 'padding');

        if (mobile == true) {

            if ((width === '' || width === 'auto') && String.isBlank(padding)) {
                padding = '10px';
            }

            jContainer.css({
                width: Lia.pd('50px', width),
                height: '50px',
                'line-height': '50px',
                'padding-left': padding,
                'padding-right': padding
            });

        } else {

            if ((width === '' || width === 'auto') && String.isBlank(padding)) {
                padding = '5px';
            }

            jContainer.css({
                width: Lia.pd('73px', width),
                height: '73px',
                'line-height': '73px',
                'padding-left': padding,
                'padding-right': padding
            });
        }

        if (border == true) {
            jContainer.css('border-' + ((direction == false) ? 'right' : 'left'), '1px solid ' + TritonTheme.TOP_DROP_DOWN_MENU_BORDER_COLOR);
        }

        var append = Lia.pd(Lia.p(item, 'append'), item, 'jAppend');
        if (append == undefined) {

            var imageUrl = Lia.p(item, 'imageUrl');

            var imageWidth = Lia.p(item, 'imageWidth');
            var imageHeight = Lia.p(item, 'imageHeight');
            var maxWidth = Lia.p(item, 'imageMaxWidth');

            var text = Lia.p(item, 'text');

            var jImage = undefined;
            var jText = undefined;

            if (String.isNotBlank(imageUrl)) {

                jImage = jQuery('<img class="top_drop_down_menu_header_element_item_image" style="vertical-align: middle;" />');
                jImage.attr({'src': imageUrl});

                if (String.isNotBlank(imageWidth)) {
                    jImage.css({'width': imageWidth});
                }

                if (String.isNotBlank(imageHeight)) {
                    jImage.css({'height': imageHeight});
                }

                if (String.isNotBlank(text)) {
                    jImage.attr('alt', text);
                }

                if (String.isNotBlank(maxWidth)) {
                    jImage.css('max-width', maxWidth);
                }
            }

            if (String.isNotBlank(text)) {
                jText = jQuery('<div class="top_drop_down_menu_header_element_item_text" style="vertical-align: middle;"></div>');
                jText.html(text);

                var fontSize = Lia.pd('13px', item, 'fontSize');
                var textMarginTop = Lia.pd('', item, 'textMarginTop');
                jText.css({
                    'font-family': 'notokr-medium, NanumGothicBold',
                    'color': TritonTheme.HEADER_MENU_BUTTON_DEFAULT_FONT_COLOR,
                    'font-size': fontSize, 'line-height': fontSize, 'margin-top': textMarginTop
                });
            }

            if (jImage != undefined && jText != undefined) {

                if (mobile == true) {

                    jContainer.append(jImage);

                } else {

                    var jImageContainer = jQuery('<div></div>');
                    jImageContainer.append(jImage);
                    jImageContainer.css({'padding-top': '5px', 'line-height': '42px'});
                    jContainer.append(jImageContainer);

                    jContainer.append(jText);


                }
            } else if (jImage != undefined) {

                jContainer.append(jImage);

            } else if (jText != undefined) {

                if (mobile == true) {

                    jText.css({'line-height': '50px'});

                } else {

                    jText.css({'line-height': '73px'});
                }

                jContainer.append(jText);
            }

        } else {

            jContainer.append(append);
        }


        var onClick = Lia.p(item, 'onClick');
        if (onClick != undefined) {

            jContainer.on('click', {
                onClick: onClick,
                item: item
            }, function (e) {
                e.data.onClick(item);
            });
        }

        // right, mobile 쪽은 구현해야함
        var jAppendLayout = Triton.TopDropDownMenu.jMenu.find('.' +
            (direction == false ? 'top_drop_down_menu_header_element_left_layout' : 'top_drop_down_menu_header_element_right_layout')
            + ((mobile == true) ? '_mobile' : ''));

        if (prepend) {
            jAppendLayout.prepend(jContainer);
        } else {
            jAppendLayout.append(jContainer);
        }

        jContainer.initImageButtonContainer();
        if (jText != undefined) {

            jContainer.on(Lia.Component.Event.STATUS_CHANGED, {
                jText: jText
            }, function (e) {

                var jThis = $(this);
                var status = e.status;
                var jText = e.data.jText;

                if (status == Lia.Component.Value.Button.Status.DEFAULT) {

                    jText.css({
                        'color': TritonTheme.HEADER_MENU_BUTTON_DEFAULT_FONT_COLOR
                    });


                } else if (status == Lia.Component.Value.Button.Status.HOVERING) {

                    jText.css({
                        'color': TritonTheme.HEADER_MENU_BUTTON_HOVERING_FONT_COLOR
                    });

                } else if (status == Lia.Component.Value.Button.Status.PRESSING || status == Lia.Component.Value.Button.Status.PRESSED) {

                    jText.css({
                        'color': TritonTheme.HEADER_MENU_BUTTON_PRESSED_FONT_COLOR
                    });
                }
            });
        }

        return jContainer;
    },

    setHeaderMoreElement: function (item, jMoreElement, depth) {

        var depth = 0;

        // 모바일 관련된 항목 추가
        var jMorePanel = Triton.TopDropDownMenu.jMenu.find('.top_drop_down_menu_more_item_panel');
        if (jMoreElement != undefined) {
            jMorePanel = jMoreElement.show().children('.top_drop_down_menu_more_button_sub_panel_mobile');
            depth = parseInt(jMorePanel.attr('top-drop-down-menu-more-item-depth')) + 1;
        }

        var menu = Lia.p(item, 'menu');
        var menuParameterMap = Lia.p(item, 'menuParameterMap');
        var name = Lia.p(item, 'name');
        var addClass = Lia.p(item, 'addClass');

        var jMoreButtonContainer = undefined;
        if (String.isBlank(name) || ((jMoreButtonContainer = jMorePanel.find('.' + name)).length == 0)) {

            jMoreButtonContainer = jQuery(Triton.TopDropDownMenu.HTML_MORE_BUTTON_MOBILE);

            if (String.isNotBlank(name)) {
                jMoreButtonContainer.addClass(name);
            }

            jMorePanel.append(jMoreButtonContainer);
        }

        if (String.isNotBlank(addClass)) {
            jMoreButtonContainer.addClass(addClass);
        }

        var jButton = jMoreButtonContainer.find('.top_drop_down_menu_more_button_mobile');
        var jPanel = jMoreButtonContainer.find('.top_drop_down_menu_more_button_sub_panel_mobile');
        jPanel.attr('top-drop-down-menu-more-item-depth', depth);

        var text = Lia.p(item, 'text');
        var iconImageUrl = Lia.p(item, 'iconImageUrl');
        if (iconImageUrl != undefined) {
            jButton.find('.top_drop_down_menu_more_button_icon_mobile').show().html('<img src="' + iconImageUrl + '" style="vertical-align:middle;max-width:16px;" alt="top drop down menu more button icon mobile"/>');
        } else {
            jButton.find('.top_drop_down_menu_more_button_icon_mobile').hide();
        }

        var backgroundColor = Triton.TopDropDownMenu.HTML_MENU_BUTTON_BACKGROUND_MOBILE[depth % Triton.TopDropDownMenu.HTML_MENU_BUTTON_BACKGROUND_MOBILE.length];
        jButton.css({'background-color': backgroundColor});

        var onClick = Lia.p(item, 'onClick');

        var panelCss = Lia.p(item, 'panel', 'css');
        var defaultMessage = Lia.p(item, 'panel', 'defaultMessage');
        if (String.isNotBlank(defaultMessage)) {

            var messageBackgroundColor = Triton.TopDropDownMenu.HTML_MENU_BUTTON_BACKGROUND_MOBILE[(depth + 1) % Triton.TopDropDownMenu.HTML_MENU_BUTTON_BACKGROUND_MOBILE.length];
            jPanel.html('<div class="top_drop_down_menu_more_button_default_message" style="padding-left:15px;padding-right:15px;line-height:43px;background-color:' + messageBackgroundColor + ';">' + defaultMessage + '</div>');
        }

        if (panelCss != undefined) {
            jPanel.css(panelCss);
        }

        jButton.find('.top_drop_down_menu_more_button_text_mobile').text(text);
        jButton.initButton().off(Lia.Component.Event.STATUS_CHANGED).on(Lia.Component.Event.STATUS_CHANGED, {}, function (e) {

            var jThis = $(this);
            var status = e.status;

            if (status == Lia.Component.Value.Button.Status.DEFAULT) {

                jThis.css({
                    'font-family': 'notokr-regular, NanumGothic'
                });


            } else if (status == Lia.Component.Value.Button.Status.HOVERING || status == Lia.Component.Value.Button.Status.PRESSING || status == Lia.Component.Value.Button.Status.PRESSED) {

                jThis.css({
                    'font-family': 'notokr-medium, NanumGothicBold'
                });
            }

        }).off('click').on('click', {
            menu: menu,
            menuParameterMap: menuParameterMap,
            onClick: onClick,
            defaultMessage: defaultMessage
        }, function (e) {

            e.preventDefault();
            e.stopPropagation();

            var jThis = $(this);
            var jButton = jThis.parent();
            var defaultMessage = e.data.defaultMessage;

            if (String.isNotBlank(defaultMessage) || jButton.hasClass('top_drop_down_menu_more_button_has_children')) {

                var jPanel = jButton.children('.top_drop_down_menu_more_button_sub_panel_mobile');
                if (jPanel.hasClass('top_drop_down_menu_more_button_sub_panel_mobile_shown')) {

                    jThis.buttonPressed(false);
                    jPanel.removeClass('top_drop_down_menu_more_button_sub_panel_mobile_shown');
                    jPanel.hide();

                } else {

                    jThis.buttonPressed(true);
                    jPanel.addClass('top_drop_down_menu_more_button_sub_panel_mobile_shown');
                    jPanel.show();
                }

                return;
            }


            var menu = e.data.menu;
            var menuParameterMap = e.data.menuParameterMap;
            if (menu != undefined) {
                jQuery.PageManager.go(menu, menuParameterMap);
            }

            var onClick = e.data.onClick;
            if (onClick != undefined) {
                onClick();
            }

            Triton.TopDropDownMenu.hideMorePanel();
        });


        if (onClick != undefined || menu != undefined || String.isNotBlank(defaultMessage)) {
            jMoreButtonContainer.show();
        } else {
            jMoreButtonContainer.hide();
        }

        if (String.isNotBlank(defaultMessage)) {
            jMoreButtonContainer.children('.top_drop_down_menu_more_button_mobile').find('.top_drop_down_menu_more_button_arrow_mobile').show();
        }

        if (jMoreElement != undefined) {

            jMoreElement.addClass('top_drop_down_menu_more_button_has_children');
            jMoreElement.children('.top_drop_down_menu_more_button_mobile').find('.top_drop_down_menu_more_button_arrow_mobile').show();
        }

    },

    setHeaderElement: function (type, data) {

        // 왼쪽 메뉴 관련 사항
        if (type == TopDropDownMenu.HEADER_ELEMENT_MENU_BUTTON) {

            var mobile = Lia.pd(true, data, 'mobile');
            var addClass = Lia.p(data, 'addClass');
            var text = Lia.p(data, 'text');
            var mobileText = Lia.pd(text, data, 'mobileText');

            var iconImageUrl = Lia.pd(TritonTheme.TOP_DROP_DOWN_MENU_MENU_BUTTON_IMAGE_URL, data, 'iconImageUrl');
            if (String.isNotBlank(addClass)) {
                addClass += ' top_drop_down_menu_button';
            } else {
                addClass = 'top_drop_down_menu_button';
            }

            Triton.TopDropDownMenu.addHeaderElement({
                addClass: addClass,
                imageUrl: iconImageUrl,
                imageMaxWidth: Lia.pd('30px', data, 'imageMaxWidth'),
                width: Lia.p(data, 'width'),
                padding: Lia.p(data, 'padding'),
                onClick: Lia.p(data, 'onClick'),
                text: Lia.p(data, 'text'),
                fontSize: Lia.p(data, 'fontSize'),
                textMarginTop: Lia.p(data, 'textMarginTop'),
                border: true,
                direction: false
            });

            if (mobile) {

                Triton.TopDropDownMenu.addHeaderElement({
                    addClass: addClass,
                    mobile: true,
                    imageUrl: iconImageUrl,
                    width: Lia.p(data, 'width'),
                    padding: Lia.p(data, 'padding'),
                    imageMaxWidth: Lia.pd('18px', data, 'imageMaxWidth'),

                    border: true,
                    direction: false,
                    onClick: Lia.p(data, 'onClick')
                });
            }

            Triton.TopDropDownMenu.jMenu.find('.top_drop_down_menu_panel').on('click', function (e) {
                e.preventDefault();
                e.stopPropagation();
                Triton.TopDropDownMenu.hideMenuPanel();
            });

            Triton.TopDropDownMenu.jMenu.find('.top_drop_down_menu_button').on('click', function (e) {
                e.preventDefault();
                e.stopPropagation();
                Triton.TopDropDownMenu.showMenuPanel();
            });

        } else if (type == TopDropDownMenu.HEADER_ELEMENT_ICON_BUTTON) {

            var mobile = Lia.pd(true, data, 'mobile');
            var addClass = Lia.p(data, 'addClass');
            var text = Lia.p(data, 'text');
            var mobileText = Lia.pd(text, data, 'mobileText');

            if (Triton.TopDropDownMenu.jMenu.find('.top_drop_down_menu_icon_button').length == 0) {

                var iconImageUrl = Lia.pd(TritonTheme.TOP_DROP_DOWN_MENU_ICON_BUTTON_IMAGE_URL, data, 'iconImageUrl');
                if (String.isNotBlank(addClass)) {
                    addClass += ' top_drop_down_menu_icon_button';
                } else {
                    addClass = 'top_drop_down_menu_icon_button';
                }

                Triton.TopDropDownMenu.addHeaderElement({
                    addClass: addClass,
                    imageUrl: iconImageUrl,
                    imageMaxWidth: Lia.pd('30px', data, 'imageMaxWidth'),
                    width: Lia.p(data, 'width'),
                    padding: Lia.p(data, 'padding'),
                    onClick: Lia.p(data, 'onClick'),
                    text: Lia.p(data, 'text'),
                    fontSize: Lia.p(data, 'fontSize'),
                    textMarginTop: Lia.p(data, 'textMarginTop'),
                    border: true,
                    direction: false
                });

                if (mobile) {

                    Triton.TopDropDownMenu.addHeaderElement({
                        addClass: addClass,
                        mobile: true,
                        imageUrl: iconImageUrl,
                        width: Lia.p(data, 'width'),
                        padding: Lia.p(data, 'padding'),
                        imageMaxWidth: Lia.pd('18px', data, 'imageMaxWidth'),

                        border: true,
                        direction: false,
                        onClick: Lia.p(data, 'onClick')
                    });
                }
            }

            var onClick = Lia.p(data, 'onClick');
            if (onClick != undefined) {

                Triton.TopDropDownMenu.jMenu.find('.top_drop_down_menu_icon_button').off('click').on('click', {
                    onClick: onClick
                }, function (e) {

                    e.preventDefault();
                    e.stopPropagation();

                    var onClick = e.data.onClick;
                    if (onClick != undefined) {
                        onClick();
                    }
                });
            }

            var visible = Lia.p(data, 'visible');
            if (visible !== undefined) {

                if (visible == true) {
                    Triton.TopDropDownMenu.jMenu.find('.top_drop_down_menu_icon_button').show();
                } else {
                    Triton.TopDropDownMenu.jMenu.find('.top_drop_down_menu_icon_button').hide();
                }
            }

            var pressed = Lia.p(data, 'pressed');
            if (pressed !== undefined) {
                Triton.TopDropDownMenu.jMenu.find('.top_drop_down_menu_icon_button').imageButtonContainerPressed(pressed);
            }


        } else if (type == TopDropDownMenu.HEADER_ELEMENT_LOGO) {

            var logoImageUrl = Lia.p(data, 'logoImageUrl');
            var logoImageWidth = Lia.pd('', data, 'logoImageWidth');
            var logoImageHeight = Lia.pd('', data, 'logoImageHeight');

            var css = Lia.p(data, 'css');
            var mobileCss = Lia.pd(css, data, 'mobileCss');

            var mobileLogoImageUrl = Lia.pd(logoImageUrl, data, 'mobileLogoImageUrl');
            var mobileLogoImageWidth = Lia.pd(logoImageWidth, data, 'mobileLogoImageWidth');
            var mobileLogoImageHeight = Lia.pd(logoImageHeight, data, 'mobileLogoImageHeight');

            var jElement = Triton.TopDropDownMenu.jMenu.find('.top_drop_down_menu_header_element_logo, .top_drop_down_menu_header_element_logo_mobile');
            if (String.isBlank(logoImageUrl)) {
                jElement.hide();
            } else {

                jElement.filter('.top_drop_down_menu_header_element_logo').find('img').attr('src', logoImageUrl).css({
                    'max-width': logoImageWidth,
                    'max-height': logoImageHeight
                });

                if (css != undefined) {
                    jElement.filter('.top_drop_down_menu_header_element_logo').css(css);
                }

                jElement.filter('.top_drop_down_menu_header_element_logo_mobile').find('img').attr('src', mobileLogoImageUrl).css({
                    'max-width': mobileLogoImageWidth,
                    'max-height': mobileLogoImageHeight
                });

                if (mobileCss != undefined) {
                    jElement.filter('.top_drop_down_menu_header_element_logo_mobile').css(mobileCss);
                }

                var jImg = jElement.find('img');
                jElement.show();

                var onClick = Lia.p(data, 'onClick');
                if (onClick != undefined) {

                    jImg.css({
                        'cursor': 'pointer'
                    }).off('click').on('click', {
                        onClick: onClick
                    }, function (e) {
                        e.preventDefault();
                        e.stopPropagation();

                        var onClick = e.data.onClick;
                        onClick();
                    });

                } else {

                    jImg.css({
                        'cursor': 'default'
                    });
                }
            }

        } else if (type == TopDropDownMenu.HEADER_ELEMENT_MORE) {

            // 모바일에서 more 이 있으면 해당 부분에 추가
            // 아니면 옆으로 추가, 그래서 2개 이상이면 more을 먼저 추가해야야 함
            var jElement = Triton.TopDropDownMenu.jMenu.find('.top_drop_down_menu_header_element_more');
            if (jElement.length > 0) {
                return;
            }

            jElement = jQuery('<div class="top_drop_down_menu_header_element_more image_button_container hover inline_block" style="border-left:1px solid ' + TritonTheme.TOP_DROP_DOWN_MENU_BORDER_COLOR + ';width:50px;text-align:center;height:50px;line-height:50px;">' +
                '<img src="' + TritonTheme.TOP_DROP_DOWN_MENU_MENU_MORE_BUTTON_IMAGE_URL + '" style="vertical-align:middle;" alt="top drop down menu header element more image button container"/>' +
                '</div>');

            Triton.TopDropDownMenu.jMenu.find('.top_drop_down_menu_header_element_right_layout_mobile').append(jElement);

            jElement.initImageButtonContainer();
            jElement.on('click', function (e) {

                var jThis = $(this);
                jThis.imageButtonContainerPressed(true);

                var jPanel = Triton.TopDropDownMenu.jMenu.find('.top_drop_down_menu_more_panel');
                jPanel.show();

                var jPanelInner = jPanel.children();

                var windowWidth = $(window).width();

                var offset = jThis.offset();
                var right = windowWidth - offset.left - jThis.width() + 10;
                var top = offset.top + jThis.outerHeight(true);

                jPanelInner.css({
                    'top': top + 'px',
                    'right': right + 'px'
                });
            });

            var jPanel = Triton.TopDropDownMenu.jMenu.find('.top_drop_down_menu_more_panel');
            jPanel.on('click', function (e) {

                e.preventDefault();
                e.stopPropagation();

                Triton.TopDropDownMenu.hideMorePanel();

            });

        } else if (type == TopDropDownMenu.HEADER_ELEMENT_QUICK_MENU) {

            var jElement = Triton.TopDropDownMenu.jMenu.find('.top_drop_down_menu_header_element_quick_menu');
            if (jElement.length > 0) {
                return;
            }
            var text = Lia.pd('퀵메뉴', data, 'text');
            var mobileText = Lia.pd(text, data, 'mobileText');

            jElement = Triton.TopDropDownMenu.addHeaderElement({
                addClass: 'top_drop_down_menu_header_element_quick_menu',
                imageUrl: TritonTheme.TOP_DROP_DOWN_MENU_QUICK_MENU_BUTTON_IMAGE_URL,
                imageMaxWidth: Lia.pd('30px', data, 'imageMaxWidth'),
                width: Lia.p(data, 'width'),
                padding: Lia.p(data, 'padding'),
                onClick: Lia.p(data, 'onClick'),
                text: text,
                border: true,
                direction: true
            });

            jElement.on('click', function (e) {

                var jThis = $(this);
                jThis.imageButtonContainerPressed(true);

                var jPanel = Triton.TopDropDownMenu.jMenu.find('.top_drop_down_menu_quick_menu_panel');
                jPanel.show();

                var jPanelInner = jPanel.children();

                var windowWidth = $(window).width();
                var offset = jThis.offset();
                var right = windowWidth - offset.left - jThis.width() / 2 - jPanelInner.width() / 2;
                var top = offset.top + jThis.outerHeight(true);

                jPanelInner.css({
                    'top': top + 'px',
                    'right': right + 'px'
                });
            });

            var jPanel = Triton.TopDropDownMenu.jMenu.find('.top_drop_down_menu_quick_menu_panel');
            jPanel.on('click', function (e) {

                e.preventDefault();
                e.stopPropagation();

                var jThis = $(this);
                jThis.hide();

                var jButton = Triton.TopDropDownMenu.jMenu.find('.top_drop_down_menu_header_element_quick_menu');
                jButton.imageButtonContainerPressed(false);
            });

            var mobile = Lia.pd(true, data, 'mobile');
            if (mobile) {

                Triton.TopDropDownMenu.setHeaderMoreElement({
                    name: 'top_drop_down_menu_more_quick_button',
                    onClick: onClick,
                    text: mobileText,
                    iconImageUrl: '/res/lia/triton/img/menu_topdropdown/btn_quickmenu.png'
                });
            }


        } else if (type == TopDropDownMenu.HEADER_ELEMENT_ALARM_BUTTON) {

            var jElement = Triton.TopDropDownMenu.jMenu.find('.top_drop_down_menu_header_element_alarm_button');
            if (jElement.length > 0) {
                return;
            }

            var text = Lia.pd('알람', data, 'text');
            var mobileText = Lia.pd(text, data, 'mobileText');

            jElement = Triton.TopDropDownMenu.addHeaderElement({
                addClass: 'top_drop_down_menu_header_element_alarm_button',
                imageUrl: TritonTheme.TOP_DROP_DOWN_MENU_ALARM_BUTTON_IMAGE_URL,
                imageMaxWidth: Lia.pd('30px', data, 'imageMaxWidth'),
                width: Lia.p(data, 'width'),
                padding: Lia.p(data, 'padding'),
                onClick: Lia.p(data, 'onClick'),
                text: text,
                border: true,
                direction: true
            });

            jElement.find('img').addClass('top_drop_down_menu_header_element_alarm_button_normal_image').parent().append(
                '<img src="' + TritonTheme.TOP_DROP_DOWN_MENU_ALARM_NOTICE_BUTTON_IMAGE_URL + '" class="top_drop_down_menu_header_element_alarm_button_white_image no_contain" style="vertical-align: middle;display:none;"   alt="top drop down menu header element alarm button white image no contain"/>'
            );

            if (String.isNotBlank(text)) {

                var jText = jElement.find('.top_drop_down_menu_header_element_item_text');

                jText.parent().append(
                    jText.clone().css({
                        color: TritonTheme.HEADER_MENU_BUTTON_INVERSE_FONT_COLOR,
                        display: 'none'
                    }).addClass('top_drop_down_menu_header_element_alarm_button_white_text')
                );

                jText.addClass('top_drop_down_menu_header_element_alarm_button_normal_text');
            }

            jElement.on('click', function (e) {

                var jThis = $(this);
                jThis.imageButtonContainerPressed(true);

                var jPanel = Triton.TopDropDownMenu.jMenu.find('.top_drop_down_menu_alarm_panel');
                jPanel.show();

                var jPanelInner = jPanel.children();

                var jThisWidthD2 = jThis.width() / 2;
                var windowWidth = $(window).width();
                var offset = jThis.offset();
                var right = windowWidth - offset.left - jThisWidthD2 - jPanelInner.width() / 2;
                if (right < 10) {
                    right = 10;
                }

                var top = offset.top + jThis.outerHeight(true);
                jPanelInner.css({
                    'top': top + 'px',
                    'right': right + 'px'
                });

                var jPanelArrowImage = Triton.TopDropDownMenu.jMenu.find('.top_drop_down_menu_alarm_panel_arrow_image');
                jPanelArrowImage.css({
                    'left': (offset.left - jPanelInner.offset().left + jThisWidthD2) + 'px'
                });
            });

            var jPanel = Triton.TopDropDownMenu.jMenu.find('.top_drop_down_menu_alarm_panel');
            jPanel.on('click', function (e) {

                e.preventDefault();
                e.stopPropagation();

                var jThis = $(this);
                jThis.hide();

                var jButton = Triton.TopDropDownMenu.jMenu.find('.top_drop_down_menu_header_element_alarm_button');
                jButton.imageButtonContainerPressed(false);
            });


            var mobile = Lia.pd(true, data, 'mobile');
            if (mobile) {

                Triton.TopDropDownMenu.setHeaderMoreElement({
                    name: 'top_drop_down_menu_more_alarm_button',
                    text: mobileText,
                    iconImageUrl: '/res/lia/triton/img/menu_topdropdown/btn_notice.png',
                    panel: {
                        defaultMessage: '표시할 알람이 없습니다.',
                        css: {
                            'max-height': '300px',
                            'overflow': 'auto'
                        }
                    }
                });
            }


        }
        // 나머지 사항들
        else if (
            Lia.contains(type, TopDropDownMenu.HEADER_ELEMENT_BUTTON)
        ) {

            var hasMoreButton = Triton.TopDropDownMenu.jMenu.find('.top_drop_down_menu_header_element_more').length > 0;
            var mobile = Lia.pd(true, data, 'mobile');

            var addClass = Lia.p(data, 'addClass');
            var text = Lia.p(data, 'text');
            var mobileText = Lia.pd(text, data, 'mobileText');

            Triton.TopDropDownMenu.addHeaderElement({
                addClass: addClass,
                imageUrl: Lia.p(data, 'iconImageUrl'),
                imageMaxWidth: Lia.pd('30px', data, 'imageMaxWidth'),
                width: Lia.p(data, 'width'),
                padding: Lia.p(data, 'padding'),
                onClick: Lia.p(data, 'onClick'),
                text: Lia.p(data, 'text'),
                fontSize: Lia.p(data, 'fontSize'),
                textMarginTop: Lia.p(data, 'textMarginTop'),
                border: true,
                direction: true
            });


            if (mobile) {

                if (hasMoreButton) {

                    Triton.TopDropDownMenu.setHeaderMoreElement({
                        addClass: addClass,
                        name: Lia.p(data, 'name'),
                        onClick: Lia.p(data, 'onClick'),
                        text: mobileText,
                        iconImageUrl: Lia.p(data, 'iconImageUrl')
                    });

                } else {

                    Triton.TopDropDownMenu.addHeaderElement({
                        addClass: addClass,
                        mobile: true,
                        imageUrl: Lia.p(data, 'iconImageUrl'),
                        width: Lia.p(data, 'width'),
                        padding: Lia.p(data, 'padding'),
                        imageMaxWidth: Lia.pd('18px', data, 'imageMaxWidth'),

                        border: true,
                        direction: true,
                        onClick: Lia.p(data, 'onClick')
                    });
                }
            }
        }
    },


    getHeaderElement: function (type, data) {

        if (type == TopDropDownMenu.HEADER_ELEMENT_ICON_BUTTON) {

            var pressed = Lia.p(data, 'pressed');
            if (pressed == true) {

                var jElementPT = Triton.TopDropDownMenu.jMenu.find('.top_drop_down_menu_icon_button');
                return jElementPT.imageButtonContainerPressed();
            }
        }
    },

    addQuickMenu: function (item) {

        var iconImageUrl = Lia.p(item, 'iconImageUrl');
        var menu = Lia.p(item, 'menu');
        var menuParameterMap = Lia.p(item, 'menuParameterMap');
        var onClick = Lia.p(item, 'onClick');
        var text = Lia.p(item, 'text');

        var jQuickMenuItemPanel = Triton.TopDropDownMenu.jMenu.find('.top_drop_down_menu_quick_menu_item_panel');

        var jItem = $(Triton.TopDropDownMenu.HTML_QUICK_MENU_BUTTON);
        jQuickMenuItemPanel.append(jItem);
        jItem.find('.top_drop_down_menu_quick_menu_button_text').html(text);
        jItem.find('.top_drop_down_menu_quick_menu_button_image_panel').show().find('img').attr({
            'src': iconImageUrl
        });
        jItem.initImageButtonContainer();
        jItem.on(Lia.Component.Event.STATUS_CHANGED, function (e) {

            var jThis = $(this);
            var status = e.status;
            if (status == Lia.Component.Value.Button.Status.DEFAULT) {

                jThis.css({
                    'background-color': ''
                });

            } else {

                jThis.css({
                    'background-color': TritonTheme.TOP_DROP_DOWN_MENU_QUICK_MENU_ITEM_SELECTED_BACKGROUND_COLOR
                });
            }


            if (status == Lia.Component.Value.Button.Status.PRESSED) {

                jThis.css({
                    'font-family': 'notokr-medium, NanumGothicBold'
                });

            } else {

                jThis.css({
                    'font-family': 'notokr-regular, NanumGothic'
                });
            }

        }).on('click', {
            menu: menu,
            menuParameterMap: menuParameterMap,
            onClick: onClick
        }, function (e) {

            var menu = e.data.menu;
            var menuParameterMap = e.data.menuParameterMap;
            if (menu != undefined) {
                jQuery.PageManager.go(menu, menuParameterMap);
            }

            var onClick = e.data.onClick;
            if (onClick != undefined) {
                onClick();
            }
        });


        if (jQuickMenuItemPanel.children().length > 1) {
            jItem.css({
                'border-top': '1px solid ' + TritonTheme.TOP_DROP_DOWN_MENU_BORDER_COLOR
            })
        }

        var jElementMobile = Triton.TopDropDownMenu.jMenu.find('.top_drop_down_menu_more_quick_button');
        if (jElementMobile.length > 0) {
            Triton.TopDropDownMenu.setHeaderMoreElement(item, jElementMobile);
        }
    },

    saveStorage: function () {

        var list = [];

        var jTabs = Triton.TopDropDownMenu.jMenu.find('.top_drop_down_menu_tab_panel .top_drop_down_menu_tab.top_drop_down_menu_tab_normal');
        for (var i = 0, l = jTabs.length; i < l; i++) {

            var jTab = jTabs.eq(i);

            var text = jTab.data('text');
            var parameterMap = jTab.data('parameter-map');
            var path = jTab.data('path');

            var item = {
                text: text,
                parameterMap: parameterMap,
                path: path
            };

            list.push(item);
        }

        var tabStorageKey = Triton.TopDropDownMenu.tabStorageKey;
        if (tabStorageKey === undefined) {
            window.localStorage.setItem('tab_list', JSON.stringify(list));
        } else if (tabStorageKey === false) {

            // do noting;

        } else {

            var map = undefined;

            var tabListMapString = window.localStorage.getItem('tab_list_map');
            if (String.isNotBlank(tabListMapString)) {
                map = JSON.parse(tabListMapString);
            }

            if (map == undefined) {
                map = {};
            }

            map[tabStorageKey] = list;

            window.localStorage.setItem('tab_list_map', JSON.stringify(map));
        }
    },

    loadStorage: function () {


        var tabStorageKey = Triton.TopDropDownMenu.tabStorageKey;

        var list = undefined;
        if (tabStorageKey === undefined) {

            var tabListString = window.localStorage.getItem('tab_list');
            if (String.isNotBlank(tabListString)) {
                list = JSON.parse(tabListString);
            }

        } else if (tabStorageKey === false) {

            // do noting;

        } else {

            var map = undefined;

            var tabListMapString = window.localStorage.getItem('tab_list_map');
            if (String.isNotBlank(tabListMapString)) {
                map = JSON.parse(tabListMapString);
            }

            list = Lia.p(map, tabStorageKey);
        }


        if (list != undefined && list.length > 0) {

            for (var i = 0, l = list.length; i < l; i++) {

                var item = list[i];
                Triton.TopDropDownMenu.addTab(item);
            }
        }
    },

    init: function (options) {

        Triton.TopDropDownMenu.tabStorageKey = Lia.p(options, 'tabStorageKey');
        Triton.TopDropDownMenu.unuseTab = Lia.pd(false, options, 'unuseTab');
        Triton.TopDropDownMenu.useStatusBar = Lia.pd(false, options, 'useStatusBar');
        Triton.TopDropDownMenu.useButtonTabBar = Lia.pd(false, options, 'useButtonTabBar');
        Triton.TopDropDownMenu.fixedTabList = Lia.p(options, 'fixedTabList');

        Triton.TopDropDownMenu.categoryMenuList = [];
        Triton.TopDropDownMenu.menuList = [];

        Triton.TopDropDownMenu.jPageContainer = Lia.p(options, 'jPageContainer');
        Triton.TopDropDownMenu.appendTo = Lia.pd('#top_drop_down_menu', options, 'menuAppendTo');

        Triton.TopDropDownMenu.jMenu = jQuery(Triton.TopDropDownMenu.appendTo);
        Triton.TopDropDownMenu.jMenu.append(Triton.TopDropDownMenu.HTML);

        // 문자 세팅
        Lia.Strings.applyStrings(Triton.TopDropDownMenu.jMenu);

        Triton.TopDropDownMenu.jMenu.find('.image_button_container').initImageButtonContainer();
        Triton.TopDropDownMenu.jMenu.find('.image_button').initImageButton();

        Triton.TopDropDownMenu.jDepthPanel = [
            Triton.TopDropDownMenu.jMenu.find('.top_drop_down_menu_1depth_panel'),
            Triton.TopDropDownMenu.jMenu.find('.top_drop_down_menu_2depth_panel'),
            Triton.TopDropDownMenu.jMenu.find('.top_drop_down_menu_3depth_panel'),
            Triton.TopDropDownMenu.jMenu.find('.top_drop_down_menu_4depth_panel')
        ];

        Triton.TopDropDownMenu.jDepthPanelMobile = Triton.TopDropDownMenu.jMenu.find('.top_drop_down_menu_depth_panel_mobile');

        Triton.TopDropDownMenu.jMenu.find('.top_drop_down_menu_tab_left_button').on('click', function () {

            var windowWidth = $(window).width();
            var d = windowWidth / 2;

            var jPanel = Triton.TopDropDownMenu.jMenu.find('.top_drop_down_menu_tab_panel');
            var left = parseFloat(jPanel.css('left'));

            var dest = left + d;
            if (dest > 0) {
                dest = 0;
            }

            jPanel.animate({
                left: dest + 'px'
            }, {
                duration: 200
            });
        });


        Triton.TopDropDownMenu.jMenu.find('.top_drop_down_menu_tab_right_button').on('click', function () {

            var windowWidth = $(window).width();
            var d = windowWidth / 2;

            var jPanel = Triton.TopDropDownMenu.jMenu.find('.top_drop_down_menu_tab_panel');

            var totalWidth = 0;
            var jPanelChildren = jPanel.children();
            for (var i = 0, l = l = jPanelChildren.length; i < l; i++) {

                var jItem = jPanelChildren.eq(i);
                totalWidth += jItem.outerWidth(true);
            }

            var panelWidth = jPanel.parent().width();
            if (totalWidth <= panelWidth) {

                jPanel.css({
                    left: '0px'
                });

            } else {

                var leastWidth = panelWidth - totalWidth;
                var left = parseFloat(jPanel.css('left'));
                var dest = left - d;
                if (dest < leastWidth) {
                    dest = leastWidth;
                }

                jPanel.animate({
                    left: dest + 'px'
                }, {
                    duration: 200
                });
            }
        });

        if (Triton.TopDropDownMenu.useStatusBar == true) {

            var jStatusBar = Triton.TopDropDownMenu.jMenu.find('.top_drop_down_menu_header_status_bar');
            jStatusBar.show();

            var statusBar = Lia.p(options, 'statusBar');
            var statusBarName = Lia.p(statusBar, 'name');
            var statusBarInfo = Lia.p(statusBar, 'info');

            var jStatusBarName = jStatusBar.find('.top_drop_down_menu_header_status_bar_name');
            if (String.isNotBlank(jStatusBarName)) {
                jStatusBarName.show();
                jStatusBarName.find('.top_drop_down_menu_header_status_bar_name_text').text(statusBarName);
            }

            var jStatusBarInfo = jStatusBar.find('.top_drop_down_menu_header_status_bar_info');
            if (String.isNotBlank(statusBarInfo)) {
                jStatusBarInfo.show();
                jStatusBarInfo.addClass('top_drop_down_menu_header_status_bar_bas_content').find('.top_drop_down_menu_header_status_bar_info_text').text(statusBarInfo);

                var statusBarOnInfoClick = Lia.p(statusBar, 'onInfoClick');
                if (statusBarOnInfoClick != undefined) {

                    jStatusBarInfo.find('.top_drop_down_menu_header_status_bar_info_text').initButton().on(Lia.Component.Event.STATUS_CHANGED, {
                        statusBarOnInfoClick: statusBarOnInfoClick
                    }, function (e) {

                        var jThis = $(this);
                        var status = e.status;

                        if (status == Lia.Component.Value.Button.Status.DEFAULT) {

                            jThis.css({
                                'font-family': 'notokr-medium, NanumGothicBold',
                                'text-decoration': '',
                                'cursor': 'none'
                            });

                        } else if (status == Lia.Component.Value.Button.Status.HOVERING) {

                            jThis.css({
                                'text-decoration': 'underline',
                                'cursor': 'pointer',
                                'font-family': 'notokr-medium, NanumGothicBold'
                            });
                        }
                    }).on('click', {
                        statusBarOnInfoClick: statusBarOnInfoClick
                    }, function (e) {

                        e.preventDefault();
                        e.stopPropagation();

                        e.data.statusBarOnInfoClick();
                    });
                }

            }

            var statusBarLastLoginIpAddress = Lia.p(statusBar, 'lastLoginIpAddress');
            var statusBarLastLoginDate = Lia.p(statusBar, 'lastLoginDate');

            var jStatusBarLoginInfo = jStatusBar.find('.top_drop_down_menu_header_status_bar_login_info');
            if (String.isNotBlank(statusBarLastLoginIpAddress) || String.isNotBlank(statusBarLastLoginDate)) {

                jStatusBarLoginInfo.find('.top_drop_down_menu_header_status_bar_login_date').text(Lia.pd('-', statusBarLastLoginDate));

                if ( String.isNotBlank(statusBarLastLoginIpAddress) ) {
                    jStatusBarLoginInfo.find('.top_drop_down_menu_header_status_bar_dash').show();
                    jStatusBarLoginInfo.find('.top_drop_down_menu_header_status_bar_login_ip_address').show().text(Lia.pd('-', statusBarLastLoginIpAddress));
                }

                jStatusBarLoginInfo.addClass('top_drop_down_menu_header_status_bar_bas_content');
                jStatusBarLoginInfo.show();
            }


            var statusBarCurrentDate = Lia.p(statusBar, 'currentDate');
            if (String.isNotBlank(statusBarCurrentDate)) {

                var jStatusBarLoginTime = jStatusBar.find('.top_drop_down_menu_header_status_bar_time');
                var statusBarCurrentDateObject = Date.parse(statusBarCurrentDate);

                var statusBarCurrentDateString = statusBarCurrentDateObject.toString('tt hh:mm:ss');
                jStatusBarLoginTime.text(statusBarCurrentDateString);
                jStatusBarLoginTime.show();

                Triton.TopDropDownMenu.baseDate = new Date();
                Triton.TopDropDownMenu.currentDate = statusBarCurrentDateObject;
                window.setInterval(function () {

                    var serverBaseDate = Triton.TopDropDownMenu.currentDate.clone();
                    var nowDate = serverBaseDate.addMilliseconds(new Date() - Triton.TopDropDownMenu.baseDate);

                    var statusBarCurrentDateString = nowDate.toString('tt hh:mm:ss');
                    jStatusBarLoginTime.text(statusBarCurrentDateString);

                }, 500);
            }

            var statusBarOnNameClick = Lia.p(statusBar, 'onNameClick');
            if (statusBarOnNameClick != null) {

                Triton.TopDropDownMenu.jMenu.find('.top_drop_down_menu_header_status_bar_profile_img').initButton().on(Lia.Component.Event.STATUS_CHANGED, {
                    statusBarOnNameClick: statusBarOnNameClick
                }, function (e) {

                    var jThis = $(this);
                    var status = e.status;

                    if (status == Lia.Component.Value.Button.Status.DEFAULT) {

                        jThis.css({
                            'cursor': 'none'
                        });

                    } else if (status == Lia.Component.Value.Button.Status.HOVERING) {

                        jThis.css({
                            'cursor': 'pointer'
                        });
                    }
                }).on('click', {
                    statusBarOnNameClick: statusBarOnNameClick
                }, function (e) {

                    e.preventDefault();
                    e.stopPropagation();

                    e.data.statusBarOnNameClick();
                });

                Triton.TopDropDownMenu.jMenu.find('.top_drop_down_menu_header_status_bar_name span').eq(0).initButton().on(Lia.Component.Event.STATUS_CHANGED, {
                    statusBarOnNameClick: statusBarOnNameClick
                }, function (e) {

                    var jThis = $(this);
                    var status = e.status;

                    if (status == Lia.Component.Value.Button.Status.DEFAULT) {

                        jThis.css({
                            'font-family': 'notokr-medium, NanumGothicBold',
                            'text-decoration': '',
                            'cursor': 'none'
                        });

                    } else if (status == Lia.Component.Value.Button.Status.HOVERING) {

                        jThis.css({
                            'text-decoration': 'underline',
                            'cursor': 'pointer',
                            'font-family': 'notokr-medium, NanumGothicBold'
                        });
                    }
                }).on('click', {
                    statusBarOnNameClick: statusBarOnNameClick
                }, function (e) {

                    e.preventDefault();
                    e.stopPropagation();

                    e.data.statusBarOnNameClick();
                });

            }

        }

        Triton.TopDropDownMenu.setButtonTabBar(Triton.TopDropDownMenu.useButtonTabBar, Lia.p(options, 'buttonTabBar'));

        if (Triton.TopDropDownMenu.unuseTab != true) {

            Triton.TopDropDownMenu.jMenu.find('.top_drop_down_menu_tab_container').show();

            if (Triton.TopDropDownMenu.fixedTabList != undefined && Triton.TopDropDownMenu.fixedTabList.length > 0) {
                for (var i = 0, l = Triton.TopDropDownMenu.fixedTabList.length; i < l; i++) {
                    var fixedTab = Lia.deepCopy(Lia.p(Triton.TopDropDownMenu.fixedTabList, i));
                    fixedTab['fixed'] = true;
                    Triton.TopDropDownMenu.addTab(fixedTab);
                }
            }


            Triton.TopDropDownMenu.loadStorage();
            Triton.TopDropDownMenu.adjustTab();

        } else {

            Triton.TopDropDownMenu.jMenu.find('.top_drop_down_menu_tab_container').hide();
            // Triton.TopDropDownMenu.jMenu.find('.top_drop_down_menu_header, .top_drop_down_menu_header_mobile').css({
            //     'border-bottom' : '1px solid #e6e6e6'
            // });
        }

        Triton.TopDropDownMenu.jPageContainer.css({
            top: Triton.TopDropDownMenu.jMenu.find('.top_drop_down_menu_header_container').outerHeight(true) + 'px'
        });

        Triton.TopDropDownMenu.jMenu.find('.top_drop_down_menu_tab_context_menu_panel').on('click contextmenu', function (e) {
            e.preventDefault();
            e.stopPropagation();

            Triton.TopDropDownMenu.jMenu.find('.top_drop_down_menu_tab_context_menu_panel').hide();
        });

        Triton.Responsive.addListener('top_drop_down_menu', function (currentType, beforeType, object) {

            var menuShow = Triton.TopDropDownMenu.jMenu.find('.top_drop_down_menu_button').imageButtonContainerPressed();
            var quickMenuShow = Triton.TopDropDownMenu.jMenu.find('.top_drop_down_menu_header_element_quick_menu').imageButtonContainerPressed();
            var moreShow = Triton.TopDropDownMenu.jMenu.find('.top_drop_down_menu_header_element_more').imageButtonContainerPressed();
            var alarmShow = Triton.TopDropDownMenu.jMenu.find('.top_drop_down_menu_header_element_alarm_button').imageButtonContainerPressed();

            if (currentType == Triton.Responsive.Type.PC || currentType == Triton.Responsive.Type.TABLET) {

                Triton.TopDropDownMenu.jMenu.find('.top_drop_down_menu_header').show();
                Triton.TopDropDownMenu.jMenu.find('.top_drop_down_menu_header_mobile').hide();

                if (menuShow == true) {
                    Triton.TopDropDownMenu.jMenu.find('.top_drop_down_menu_panel_content').show();
                    Triton.TopDropDownMenu.jMenu.find('.top_drop_down_menu_panel_content_mobile').hide();
                }

                if (moreShow == true) {
                    Triton.TopDropDownMenu.jMenu.find('.top_drop_down_menu_more_panel').trigger('click');
                }

                if (Triton.TopDropDownMenu.useStatusBar == true) {
                    var jStatusBar = Triton.TopDropDownMenu.jMenu.find('.top_drop_down_menu_header_status_bar');
                    var jStatusBarLoginInfo = jStatusBar.find('.top_drop_down_menu_header_status_bar_login_info');
                    if (jStatusBarLoginInfo.hasClass('top_drop_down_menu_header_status_bar_bas_content')) {
                        jStatusBarLoginInfo.show();
                    }

                    var jStatusBarInfo = jStatusBar.find('.top_drop_down_menu_header_status_bar_info');
                    if (jStatusBarInfo.hasClass('top_drop_down_menu_header_status_bar_bas_content')) {
                        jStatusBarInfo.show();
                    }
                }


            } else if (currentType == Triton.Responsive.Type.MOBILE) {

                Triton.TopDropDownMenu.jMenu.find('.top_drop_down_menu_header').hide();
                Triton.TopDropDownMenu.jMenu.find('.top_drop_down_menu_header_mobile').show();

                Triton.TopDropDownMenu.jPageContainer.css({
                    top: Triton.TopDropDownMenu.jMenu.find('.top_drop_down_menu_header_container').outerHeight(true) + 'px'
                });

                if (menuShow == true) {
                    Triton.TopDropDownMenu.jMenu.find('.top_drop_down_menu_panel_content').hide();
                    Triton.TopDropDownMenu.jMenu.find('.top_drop_down_menu_panel_content_mobile').show();
                }

                if (quickMenuShow == true) {
                    Triton.TopDropDownMenu.jMenu.find('.top_drop_down_menu_quick_menu_panel').trigger('click');
                }

                if (alarmShow == true) {
                    Triton.TopDropDownMenu.jMenu.find('.top_drop_down_menu_alarm_panel').trigger('click');
                }

                if (Triton.TopDropDownMenu.useStatusBar == true) {
                    var jStatusBar = Triton.TopDropDownMenu.jMenu.find('.top_drop_down_menu_header_status_bar');
                    var jStatusBarLoginInfo = jStatusBar.find('.top_drop_down_menu_header_status_bar_login_info');
                    if (jStatusBarLoginInfo.hasClass('top_drop_down_menu_header_status_bar_bas_content')) {
                        jStatusBarLoginInfo.hide();
                    }

                    var jStatusBarInfo = jStatusBar.find('.top_drop_down_menu_header_status_bar_info');
                    if (jStatusBarInfo.hasClass('top_drop_down_menu_header_status_bar_bas_content')) {
                        jStatusBarInfo.hide();
                    }
                }

            }

            Triton.TopDropDownMenu.adjustLayout();

        }, {});


    },

    adjustLayout: function () {


        Triton.TopDropDownMenu.jPageContainer.css({
            top: Triton.TopDropDownMenu.jMenu.find('.top_drop_down_menu_header_container').outerHeight(true) + 'px'
        });

    },


    setButtonTabBar: function (use, buttonTabBar) {

        Triton.TopDropDownMenu.useButtonTabBar = use;

        var jStatusBar = Triton.TopDropDownMenu.jMenu.find('.top_drop_down_menu_header_button_tab_bar');
        var jStatusBarLeft = Triton.TopDropDownMenu.jMenu.find('.top_drop_down_menu_header_button_tab_bar_left_section');
        var jStatusBarRight = Triton.TopDropDownMenu.jMenu.find('.top_drop_down_menu_header_button_tab_bar_right_section');

        jStatusBarLeft.empty();
        jStatusBarRight.empty();

        if (use) {
            jStatusBar.show();
        } else {
            jStatusBar.hide();
            Triton.TopDropDownMenu.adjustLayout();
            return;
        }

        var backgroundColor = Lia.p(buttonTabBar, 'backgroundColor');
        if (String.isNotBlank(backgroundColor)) {
            jStatusBar.css({'background-color': backgroundColor});
        }

        var textColor = Lia.pd(TritonTheme.TITLE_TEXT_COLOR, buttonTabBar, 'textColor');
        var pressedTextColor = Lia.pd(textColor, buttonTabBar, 'pressedTextColor');

        var leftButtonList = Lia.p(buttonTabBar, 'leftButtonList');

        if (leftButtonList != undefined && leftButtonList.length > 0) {

            for (var i = 0, l = leftButtonList.length; i < l; i++) {

                var item = leftButtonList[i];

                var name = Lia.p(item, 'name');
                var selected = Lia.p(item, 'selected');
                var onClick = Lia.p(item, 'onClick');

                var jItem = $('<div class="button" style="float: left;text-align: center;padding-left: 10px;padding-right:10px;"></div>');

                jItem.html(name);

                jStatusBarLeft.append(jItem);

                jItem.css({
                    'color': textColor
                });

                jItem.initButton().on(Lia.Component.Event.STATUS_CHANGED, {
                    textColor: textColor,
                    pressedTextColor: pressedTextColor
                }, function (e) {

                    var status = e.status;
                    var textColor = e.data.textColor;
                    var pressedTextColor = e.data.pressedTextColor;

                    if (status == Lia.Component.Value.Button.Status.DEFAULT) {

                        $(this).css({'background-color': '', 'color': textColor});

                    } else {

                        $(this).css({'background-color': '#fff', 'color': pressedTextColor});

                    }
                });

                if (onClick != undefined) {
                    jItem.on('click', item, onClick).css({'cursor': 'pointer'});
                }

                if (selected == true) {
                    jItem.buttonPressed(true);
                }
            }

        }

        var rightButtonList = Lia.p(buttonTabBar, 'rightButtonList');
        if (rightButtonList != undefined && rightButtonList.length > 0) {


            for (var i = 0, l = rightButtonList.length; i < l; i++) {

                var item = rightButtonList[i];

                var name = Lia.p(item, 'name');
                var selected = Lia.p(item, 'selected');
                var onClick = Lia.p(item, 'onClick');

                var jItem = $('<div class="button" style="float: left;text-align: center;padding-left: 10px;padding-right:10px;"></div>');

                jItem.html(name);

                jStatusBarRight.append(jItem);

                jItem.css({
                    'color': textColor
                });

                jItem.initButton().on(Lia.Component.Event.STATUS_CHANGED, {
                    textColor: textColor,
                    pressedTextColor: pressedTextColor
                }, function (e) {

                    var status = e.status;
                    var textColor = e.data.textColor;
                    var pressedTextColor = e.data.pressedTextColor;

                    if (status == Lia.Component.Value.Button.Status.DEFAULT) {

                        $(this).css({'background-color': '', 'color': textColor});

                    } else {

                        $(this).css({'background-color': '#fff', 'color': pressedTextColor});

                    }
                });

                if (onClick != undefined) {
                    jItem.on('click', item, onClick).css({'cursor': 'pointer'});
                }

                if (selected == true) {
                    jItem.buttonPressed(true);
                }
            }
        }

        Triton.TopDropDownMenu.adjustLayout();

    },


    clearTabContextMenu: function () {

        var jPanel = Triton.TopDropDownMenu.jMenu.find('.top_drop_down_menu_quick_tab_context_menu_item_panel');
        jPanel.empty();

    },

    addTabContextMenu: function (item) {

        var jPanel = Triton.TopDropDownMenu.jMenu.find('.top_drop_down_menu_quick_tab_context_menu_item_panel');

        var text = Lia.p(item, 'text');
        var object = Lia.p(item, 'object');
        var onClick = Lia.p(item, 'onClick');

        var jItem = $(Triton.TopDropDownMenu.HTML_TAB_CONTEXT_MENU_BUTTON);
        jItem.html(text);
        jItem.initButton().on(Lia.Component.Event.STATUS_CHANGED, function (e) {

            var jThis = $(this);
            var status = e.status;
            if (status == Lia.Component.Value.Button.Status.DEFAULT) {

                jThis.css({
                    'background-color': '#ffffff'
                });

            } else {

                jThis.css({
                    'background-color': '#e9eef6'
                });
            }


            if (status == Lia.Component.Value.Button.Status.PRESSED) {

                jThis.css({
                    'font-family': 'notokr-medium, NanumGothicBold'
                });

            } else {

                jThis.css({
                    'font-family': 'notokr-regular, NanumGothic'
                });
            }

        }).on('click', {
            object: object,
            onClick: onClick
        }, function (e) {

            e.stopPropagation();
            e.preventDefault();

            var object = e.data.object;
            var onClick = e.data.onClick;

            onClick(object);

            Triton.TopDropDownMenu.jMenu.find('.top_drop_down_menu_tab_context_menu_panel').hide();
        });

        jPanel.append(jItem);

        if (jPanel.children().length > 1) {
            jItem.css({
                'border-top': '1px solid ' + TritonTheme.TOP_DROP_DOWN_MENU_BORDER_COLOR
            })
        }
    },


    adjustTab: function () {

        var jPanel = Triton.TopDropDownMenu.jMenu.find('.top_drop_down_menu_tab_panel');

        var jPanelChildren = jPanel.children();
        if (jPanelChildren.length == 1) {
            jPanelChildren.filter('.top_drop_down_menu_tab_normal').find('.top_drop_down_menu_tab_close_button').hide();
            jPanelChildren.filter('.top_drop_down_menu_tab_normal').find('.top_drop_down_menu_tab_text').css({'margin-right': '15px'});
        } else {
            jPanelChildren.filter('.top_drop_down_menu_tab_normal').find('.top_drop_down_menu_tab_close_button').show();
            jPanelChildren.filter('.top_drop_down_menu_tab_normal').find('.top_drop_down_menu_tab_text').css({'margin-right': '30px'});
        }

        var panelWidth = jPanel.parent().width();
        var totalWidth = 0;
        for (var i = 0, l = jPanelChildren.length; i < l; i++) {
            var jItem = jPanelChildren.eq(i);
            totalWidth += jItem.outerWidth(true);
        }

        if (totalWidth <= panelWidth) {

            Triton.TopDropDownMenu.jMenu.find('.top_drop_down_menu_tab_left_button').addClass('no_change').hide();
            Triton.TopDropDownMenu.jMenu.find('.top_drop_down_menu_tab_right_button').addClass('no_change').hide();

            jPanel.css({
                left: 0
            });

        } else {

            Triton.TopDropDownMenu.jMenu.find('.top_drop_down_menu_tab_left_button').removeClass('no_change').show();
            Triton.TopDropDownMenu.jMenu.find('.top_drop_down_menu_tab_right_button').removeClass('no_change').show();

            var leastWidth = panelWidth - totalWidth;
            var left = parseFloat(jPanel.css('left'));
            if (left < leastWidth) {
                left = leastWidth;
            } else if (left > 0) {
                left = 0;
            }

            jPanel.css({
                left: left + 'px'
            });
        }
    },

    showMenuPanel: function () {

        Triton.TopDropDownMenu.jMenu.find('.top_drop_down_menu_button').imageButtonContainerPressed(true);
        Triton.TopDropDownMenu.jMenu.find('.top_drop_down_menu_panel').show();

        var jHeader = Triton.TopDropDownMenu.jMenu.find('.top_drop_down_menu_header');
        var jHeaderMobile = Triton.TopDropDownMenu.jMenu.find('.top_drop_down_menu_header_mobile');

        var top = jHeader.offset().top + jHeader.outerHeight(true);
        var mobileTop = jHeaderMobile.offset().top + jHeaderMobile.outerHeight(true);

        Triton.TopDropDownMenu.jMenu.find('.top_drop_down_menu_panel_content').css({
            'top': top
        });

        Triton.TopDropDownMenu.jMenu.find('.top_drop_down_menu_panel_content_mobile').css({
            'top': mobileTop
        });

        Triton.Responsive.apply(true);
    },

    hideMenuPanel: function () {

        Triton.TopDropDownMenu.jMenu.find('.top_drop_down_menu_button').imageButtonContainerPressed(false);
        Triton.TopDropDownMenu.jMenu.find('.top_drop_down_menu_panel').hide();

        Triton.Responsive.apply(true);
    },


    hideMorePanel: function () {

        Triton.TopDropDownMenu.jMenu.find('.top_drop_down_menu_header_element_more').imageButtonContainerPressed(false);
        Triton.TopDropDownMenu.jMenu.find('.top_drop_down_menu_more_panel').hide();
    },


    getMenuPath: function (menu) {

        if (menu == undefined) {
            return undefined;
        }

        var path = '';

        for (var j = 0, jl = menu.length; j < jl; j++) {

            var menuName = menu[j];
            if (String.isNotBlank(path) && !path.endsWith('/')) {
                path += '/';
            }

            path += menuName;
        }

        return path;
    },

    createMenuButton: function (options, depth) {

        var menu = options['menu'];
        var menuParameterMap = options['menuParameterMap'];
        var subMenuList = options['subMenuList'];

        var iconImageUrl = options['iconImageUrl'];
        var logoImageUrl = options['logoImageUrl'];
        var pressedLogoImageUrl = options['pressedLogoImageUrl'];
        var text = options['text'];
        var hide = options['hide'];
        var markPrefixList = options['markPrefixList'];
        var noMoreDepth = options['noMoreDepth'];

        var redirectUrl = options['redirectUrl'];
        var openUrl = options['openUrl'];
        var onClick = options['onClick'];

        // CategoryMenu 체크하고 넘어감
        if (noMoreDepth != true && (subMenuList == undefined || subMenuList.length == 0)) {

            for (var i = 0, l = Triton.TopDropDownMenu.categoryMenuList.length; i < l; i++) {

                var categoryMenu = Triton.TopDropDownMenu.categoryMenuList[i];
                var categoryMenuMenu = categoryMenu['menu'];
                var categoryMenuItems = categoryMenu['items'];

                if (menu.length == categoryMenuMenu.length) {

                    var matched = true;
                    for (var j = 0, jl = menu.length; j < jl; j++) {

                        if (menu[j] != categoryMenuMenu[j]) {
                            matched = false;
                            break;
                        }
                    }

                    if (matched == true) {

                        if (subMenuList == undefined)
                            subMenuList = [];

                        // 카테고리 메뉴 맞는거있어서 다음 메뉴 그려줘야 함
                        for (var j = 0, jl = categoryMenuItems.length; j < jl; j++) {

                            var categoryMenuItem = categoryMenuItems[j];
                            var subMenuItem = {};

                            subMenuItem['noMoreDepth'] = true;
                            subMenuItem['menu'] = categoryMenuMenu;
                            subMenuItem['menuParameterMap'] = categoryMenuItem['parameterMap'];
                            subMenuItem['text'] = categoryMenuItem['name'];

                            subMenuList.push(subMenuItem);
                        }
                    }
                }
            }
        }

        var jButton = jQuery(Triton.TopDropDownMenu.HTML_MENU_BUTTON);
        // jButton.attr('title', text);
        jButton.data('text', text);
        jButton.data('menu', menu);
        jButton.data('menu-parameter-map', menuParameterMap);
        jButton.data('sub-menu-list', subMenuList);
        jButton.data('mark-prefix-list', markPrefixList);

        // 첫번째 메뉴만 크기 고정
        if (depth == 0) {

            jButton.css({
                'min-width': '180px'
            });
        }

        jButton.find('.top_drop_down_menu_text').text(text);
        if (iconImageUrl != undefined) {
            jButton.find('.top_drop_down_menu_icon').show().append('<img src="' + iconImageUrl + '" style="vertical-align:middle;max-width:18px;" alt="top drop down menu text"/>');
        }

        jButton.initButton().on(Lia.Component.Event.STATUS_CHANGED, {
            depth: depth,
            subMenuList: subMenuList,
            menu: menu,
            noMoreDepth: noMoreDepth,
            menuParameterMap: menuParameterMap,
            redirectUrl: redirectUrl,
            openUrl: openUrl,
            onClick: onClick
        }, function (e) {

            var jThis = $(this);
            var status = e.status;

            var subMenuList = e.data.subMenuList;
            var menu = e.data.menu;
            var depth = e.data.depth;
            var menuParameterMap = e.data.menuParameterMap;
            var noMoreDepth = e.data.noMoreDepth;
            var redirectUrl = e.data.redirectUrl;
            var openUrl = e.data.openUrl;

            if (status == Lia.Component.Value.Button.Status.DEFAULT) {

                jThis.css({
                    'background': '',
                    'font-family': 'notokr-regular, NanumGothic'
                });

                if (String.isNotBlank(TritonTheme.TOP_DROP_DOWN_MENU_1DEPTH_DOWN_ARROW_SELECTED_IMAGE_URL)) {
                    jThis.find('.top_drop_down_menu_arrow').attr('src', TritonTheme.TOP_DROP_DOWN_MENU_1DEPTH_DOWN_ARROW_IMAGE_URL);
                }

            } else if (status == Lia.Component.Value.Button.Status.HOVERING || status == Lia.Component.Value.Button.Status.PRESSING || status == Lia.Component.Value.Button.Status.PRESSED) {

                if (status != Lia.Component.Value.Button.Status.PRESSED) {
                    jThis.buttonPressed(true);
                    return;
                }

                Triton.TopDropDownMenu.jDepthPanel[depth].find('.button').not(jThis).buttonPressed(false);

                jThis.css({
                    'background': TritonTheme.TOP_DROP_DOWN_MENU_MENU_ITEM_SELECTED_BACKGROUND_COLOR,
                    'font-family': 'notokr-medium, NanumGothicBold'
                });

                if (String.isNotBlank(TritonTheme.TOP_DROP_DOWN_MENU_1DEPTH_DOWN_ARROW_SELECTED_IMAGE_URL)) {
                    jThis.find('.top_drop_down_menu_arrow').attr('src', TritonTheme.TOP_DROP_DOWN_MENU_1DEPTH_DOWN_ARROW_SELECTED_IMAGE_URL);
                }

                if (noMoreDepth != true) {

                    var nextDepth = depth + 1;

                    for (var i = nextDepth, l = Triton.TopDropDownMenu.jDepthPanel.length; i < l; i++) {
                        Triton.TopDropDownMenu.jDepthPanel[i].hide();
                    }

                    if (subMenuList != undefined && subMenuList.length > 0) {

                        var panel = Triton.TopDropDownMenu.jDepthPanel[nextDepth];
                        panel.empty().show();

                        for (var i = 0, l = subMenuList.length; i < l; i++) {

                            var subMenuItem = subMenuList[i];

                            var subMenuItemMenu = subMenuItem['menu'];
                            var subMenuItemMenuParameterMap = subMenuItem['menuParameterMap'];
                            var subMenuItemHide = subMenuItem['hide'];
                            var subMenuItemText = subMenuItem['text'];
                            var subMenuItemMarkPrefixList = subMenuItem['markPrefixList'];

                            if (Triton.TopDropDownMenu.menuShowChecker(subMenuItemMenu, nextDepth, subMenuItem) != true || subMenuItemHide == true) {
                                continue;
                            }

                            panel.append(Triton.TopDropDownMenu.createMenuButton(subMenuItem, nextDepth));
                        }

                        // 길이 보정 ( border 때문에 )

                        for (var i = 1, l = nextDepth; i <= l; i++) {
                            Triton.TopDropDownMenu.jDepthPanel[i].css({
                                height: 'auto'
                            });
                        }

                        var maxCount = 0;
                        for (var i = 0, l = nextDepth; i <= l; i++) {
                            var count = Triton.TopDropDownMenu.jDepthPanel[i].find('.button').length;
                            if (maxCount < count) {
                                maxCount = count;
                            }
                        }

                        for (var i = 1, l = nextDepth; i <= l; i++) {

                            Triton.TopDropDownMenu.jDepthPanel[i].css({
                                height: (maxCount * 43) + 'px'
                            });
                        }
                    }
                }
            }
        }).on('click', {
            depth: depth,
            subMenuList: subMenuList,
            menu: menu,
            noMoreDepth: noMoreDepth,
            menuParameterMap: menuParameterMap,
            redirectUrl: redirectUrl,
            openUrl: openUrl,
            onClick: onClick
        }, function (e) {

            e.preventDefault();
            e.stopPropagation();

            var menu = e.data.menu;
            var depth = e.data.depth;
            var subMenuList = e.data.subMenuList;
            var menuParameterMap = e.data.menuParameterMap;
            var noMoreDepth = e.data.noMoreDepth;
            var redirectUrl = e.data.redirectUrl;
            var openUrl = e.data.openUrl;

            if (noMoreDepth != true && subMenuList != undefined && subMenuList.length > 0) {
                return;
            }

            if (onClick != undefined) {
                onClick();
            }

            if (String.isNotBlank(openUrl)) {
                Lia.open(openUrl);
            }

            if (String.isNotBlank(redirectUrl)) {
                Lia.redirect(redirectUrl);
            }

            if (menu != undefined) {
                jQuery.PageManager.go(menu, menuParameterMap);
            }

            Triton.TopDropDownMenu.hideMenuPanel();
        });

        if (subMenuList == undefined || subMenuList.length == 0) {
            jButton.find('.top_drop_down_menu_arrow').hide();
        } else {
            jButton.find('.top_drop_down_menu_arrow').show();
        }

        return jButton;
    },


    createMenuButtonMobile: function (options, depth) {

        var menu = options['menu'];
        var menuParameterMap = options['menuParameterMap'];
        var subMenuList = options['subMenuList'];

        var iconImageUrl = options['iconImageUrl'];
        var logoImageUrl = options['logoImageUrl'];
        var pressedLogoImageUrl = options['pressedLogoImageUrl'];
        var text = options['text'];
        var hide = options['hide'];
        var markPrefixList = options['markPrefixList'];
        var noMoreDepth = options['noMoreDepth'];

        var redirectUrl = options['redirectUrl'];
        var openUrl = options['openUrl'];

        // CategoryMenu 체크하고 넘어감
        if (noMoreDepth != true && (subMenuList == undefined || subMenuList.length == 0)) {

            for (var i = 0, l = Triton.TopDropDownMenu.categoryMenuList.length; i < l; i++) {

                var categoryMenu = Triton.TopDropDownMenu.categoryMenuList[i];
                var categoryMenuMenu = categoryMenu['menu'];
                var categoryMenuItems = categoryMenu['items'];

                if (menu.length == categoryMenuMenu.length) {

                    var matched = true;
                    for (var j = 0, jl = menu.length; j < jl; j++) {

                        if (menu[j] != categoryMenuMenu[j]) {
                            matched = false;
                            break;
                        }
                    }

                    if (matched == true) {

                        if (subMenuList == undefined)
                            subMenuList = [];

                        // 카테고리 메뉴 맞는거있어서 다음 메뉴 그려줘야 함
                        for (var j = 0, jl = categoryMenuItems.length; j < jl; j++) {

                            var categoryMenuItem = categoryMenuItems[j];
                            var subMenuItem = {};

                            subMenuItem['noMoreDepth'] = true;
                            subMenuItem['menu'] = categoryMenuMenu;
                            subMenuItem['menuParameterMap'] = categoryMenuItem['parameterMap'];
                            subMenuItem['text'] = categoryMenuItem['name'];

                            subMenuList.push(subMenuItem);
                        }
                    }
                }
            }
        }

        var jButtonContainer = jQuery(Triton.TopDropDownMenu.HTML_MENU_BUTTON_MOBILE);
        var jButton = jButtonContainer.find('.top_drop_down_menu_depth_button_mobile');
        jButton.data('text', text);
        jButton.data('menu', menu);
        jButton.data('menu-parameter-map', menuParameterMap);
        jButton.data('sub-menu-list', subMenuList);
        jButton.data('mark-prefix-list', markPrefixList);
        jButton.addClass('top_drop_down_menu_depth_button_mobile_depth' + depth);

        var backgroundColor = Triton.TopDropDownMenu.HTML_MENU_BUTTON_BACKGROUND_MOBILE[depth % Triton.TopDropDownMenu.HTML_MENU_BUTTON_BACKGROUND_MOBILE.length];
        jButton.css({'background-color': backgroundColor});

        jButton.find('.top_drop_down_menu_text_mobile').text(text);
        if (iconImageUrl != undefined) {
            jButton.find('.top_drop_down_menu_icon_mobile').show().append('<img src="' + iconImageUrl + '" style="vertical-align:middle;max-width:18px;" alt="top drop down menu text mobile"/>');
        }

        jButton.initButton().on(Lia.Component.Event.STATUS_CHANGED, {
            depth: depth,
            subMenuList: subMenuList,
            menu: menu,
            noMoreDepth: noMoreDepth,
            menuParameterMap: menuParameterMap
        }, function (e) {

            var jThis = $(this);
            var status = e.status;

            var subMenuList = e.data.subMenuList;
            var menu = e.data.menu;
            var depth = e.data.depth;
            var menuParameterMap = e.data.menuParameterMap;
            var noMoreDepth = e.data.noMoreDepth;

            if (status == Lia.Component.Value.Button.Status.DEFAULT) {

                jThis.css({
                    'font-family': 'notokr-regular, NanumGothic'
                });


            } else if (status == Lia.Component.Value.Button.Status.HOVERING || status == Lia.Component.Value.Button.Status.PRESSING || status == Lia.Component.Value.Button.Status.PRESSED) {

                jThis.css({
                    'font-family': 'notokr-medium, NanumGothicBold'
                });
            }

        }).on('click', {
            depth: depth,
            subMenuList: subMenuList,
            menu: menu,
            noMoreDepth: noMoreDepth,
            menuParameterMap: menuParameterMap,
            redirectUrl: redirectUrl,
            openUrl: openUrl
        }, function (e) {

            e.preventDefault();
            e.stopPropagation();

            var menu = e.data.menu;
            var depth = e.data.depth;
            var subMenuList = e.data.subMenuList;
            var menuParameterMap = e.data.menuParameterMap;
            var noMoreDepth = e.data.noMoreDepth;

            var jThis = jQuery(this);

            if (noMoreDepth != true && subMenuList != undefined && subMenuList.length > 0) {

                var nextDepth = depth + 1;

                var jButton = jThis.parent();
                var jPanel = jButton.find('.top_drop_down_menu_depth_sub_panel_mobile');
                if (!jPanel.hasClass('top_drop_down_menu_depth_sub_panel_mobile_created')) {

                    for (var i = 0, l = subMenuList.length; i < l; i++) {

                        var subMenuItem = subMenuList[i];

                        var subMenuItemMenu = subMenuItem['menu'];
                        var subMenuItemMenuParameterMap = subMenuItem['menuParameterMap'];
                        var subMenuItemHide = subMenuItem['hide'];
                        var subMenuItemText = subMenuItem['text'];
                        var subMenuItemMarkPrefixList = subMenuItem['markPrefixList'];

                        if (Triton.TopDropDownMenu.menuShowChecker(subMenuItemMenu, nextDepth, subMenuItem) != true || subMenuItemHide == true) {
                            continue;
                        }

                        jPanel.append(Triton.TopDropDownMenu.createMenuButtonMobile(subMenuItem, nextDepth));
                    }

                    jPanel.addClass('top_drop_down_menu_depth_sub_panel_mobile_created');
                }

                if (jPanel.hasClass('top_drop_down_menu_depth_sub_panel_mobile_shown')) {

                    jThis.buttonPressed(false);
                    jPanel.removeClass('top_drop_down_menu_depth_sub_panel_mobile_shown');
                    jPanel.hide();

                } else {

                    jThis.buttonPressed(true);
                    jPanel.addClass('top_drop_down_menu_depth_sub_panel_mobile_shown');
                    jPanel.show();
                }

                return;
            }

            if (String.isNotBlank(openUrl)) {
                Lia.open(openUrl);
            }

            if (String.isNotBlank(redirectUrl)) {
                Lia.redirect(redirectUrl);
            }

            if (menu != undefined) {
                jQuery.PageManager.go(menu, menuParameterMap);
            }

            Triton.TopDropDownMenu.hideMenuPanel();
        });

        if (subMenuList == undefined || subMenuList.length == 0) {
            jButton.find('.top_drop_down_menu_arrow_mobile').hide();
        } else {
            jButton.find('.top_drop_down_menu_arrow_mobile').show();
        }

        return jButtonContainer;
    },


    addCategoryMenu: function (categoryMenu) {
        Triton.TopDropDownMenu.categoryMenuList.push(categoryMenu);
    },


    /*
     item : { sub_title : '', title : '', registered_date : '', body : '', onClick : function() {} }
     * @param item
     */
    addAlarmItem: function (item, options, backward) {

        Triton.TopDropDownMenu.jMenu.find('.top_drop_down_menu_alarm_item_panel_message').hide();

        var title = Lia.p(item, 'title');
        var subTitle = Lia.p(item, 'sub_title');
        var registeredDate = Lia.p(item, 'registered_date');
        var isConsumed = Lia.p(item, 'is_consumed');

        var onClick = Lia.p(options, 'onClick');

        var jPanel = Triton.TopDropDownMenu.jMenu.find('.top_drop_down_menu_alarm_item_panel');

        var jItemPc = jQuery(TopDropDownMenu.HTML_ALARM_ITEM);
        var jItemMobile = jQuery(TopDropDownMenu.HTML_ALARM_ITEM);

        var jItem = jQuery(jItemPc).add(jItemMobile);
        jItem.initButton().addClass('top_drop_down_menu_alarm_item_no_consumed').css({
            'background-color': '#eeeeee'
        });

        jItem.on(Lia.Component.Event.STATUS_CHANGED, function (e) {

            var jThis = $(this);

            var status = e.status;
            if (status == Lia.Component.Value.Button.Status.HOVERING) {

                jThis.css({
                    'text-decoration': 'underline'
                });

            } else {

                jThis.css({
                    'text-decoration': ''
                });
            }


            if (status == Lia.Component.Value.Button.Status.PRESSED) {

                jThis.css({
                    'background-color': '#ffffff'
                });

            } else {

                jThis.css({
                    'background-color': '#eeeeee'
                });
            }

        }).on('click', {
            item: item,
            options: options,
            onClick: onClick
        }, function (e) {

            var item = e.data.item;
            var options = e.data.options;

            var onClick = e.data.onClick;
            if (onClick != undefined) {
                onClick(item, options);
            }

            var jThis = $(this);
            jThis.removeClass('top_drop_down_menu_alarm_item_no_consumed').buttonPressed(true);

            Triton.TopDropDownMenu.jMenu.find('.top_drop_down_menu_alarm_panel').trigger('click');

            if (jPanel.find('.top_drop_down_menu_alarm_item_no_consumed').length > 0) {
                Triton.TopDropDownMenu.jMenu.find('.top_drop_down_menu_header_element_alarm_button').css('background-color', TritonTheme.TOP_DROP_DOWN_MENU_ALARM_NOTICE_BACKGROUND_COLOR);
                Triton.TopDropDownMenu.jMenu.find('.top_drop_down_menu_header_element_alarm_button_normal_image').hide();
                Triton.TopDropDownMenu.jMenu.find('.top_drop_down_menu_header_element_alarm_button_white_image').show();
                Triton.TopDropDownMenu.jMenu.find('.top_drop_down_menu_header_element_alarm_button_white_text').show();
                Triton.TopDropDownMenu.jMenu.find('.top_drop_down_menu_header_element_alarm_button_normal_text').hide();
            } else {
                Triton.TopDropDownMenu.jMenu.find('.top_drop_down_menu_header_element_alarm_button').css('background-color', '');
                Triton.TopDropDownMenu.jMenu.find('.top_drop_down_menu_header_element_alarm_button_normal_image').show();
                Triton.TopDropDownMenu.jMenu.find('.top_drop_down_menu_header_element_alarm_button_white_image').hide();
                Triton.TopDropDownMenu.jMenu.find('.top_drop_down_menu_header_element_alarm_button_white_text').hide();
                Triton.TopDropDownMenu.jMenu.find('.top_drop_down_menu_header_element_alarm_button_normal_text').show();
            }
        });

        jItem.find('.top_drop_down_menu_alarm_item_title').html(title);
        jItem.find('.top_drop_down_menu_alarm_item_date').html(registeredDate);

        if (String.isNotBlank(subTitle)) {
            jItem.find('.top_drop_down_menu_alarm_item_sub_title').html(subTitle).show();
        }

        if (backward == true) {
            jPanel.append(jItemPc);
        } else {
            jPanel.prepend(jItemPc);
        }

        if (isConsumed == 1) {
            jItem.removeClass('top_drop_down_menu_alarm_item_no_consumed').buttonPressed(true);
        }

        if (jPanel.find('.top_drop_down_menu_alarm_item_no_consumed').length > 0) {
            Triton.TopDropDownMenu.jMenu.find('.top_drop_down_menu_header_element_alarm_button').css('background-color', TritonTheme.TOP_DROP_DOWN_MENU_ALARM_NOTICE_BACKGROUND_COLOR);
            Triton.TopDropDownMenu.jMenu.find('.top_drop_down_menu_header_element_alarm_button_normal_image').hide();
            Triton.TopDropDownMenu.jMenu.find('.top_drop_down_menu_header_element_alarm_button_white_image').show();
            Triton.TopDropDownMenu.jMenu.find('.top_drop_down_menu_header_element_alarm_button_white_text').show();
            Triton.TopDropDownMenu.jMenu.find('.top_drop_down_menu_header_element_alarm_button_normal_text').hide();
        } else {
            Triton.TopDropDownMenu.jMenu.find('.top_drop_down_menu_header_element_alarm_button').css('background-color', '');
            Triton.TopDropDownMenu.jMenu.find('.top_drop_down_menu_header_element_alarm_button_normal_image').show();
            Triton.TopDropDownMenu.jMenu.find('.top_drop_down_menu_header_element_alarm_button_white_image').hide();
            Triton.TopDropDownMenu.jMenu.find('.top_drop_down_menu_header_element_alarm_button_white_text').hide();
            Triton.TopDropDownMenu.jMenu.find('.top_drop_down_menu_header_element_alarm_button_normal_text').show();
        }

        var jElementMobile = Triton.TopDropDownMenu.jMenu.find('.top_drop_down_menu_more_alarm_button');
        if (jElementMobile.length > 0) {

            var jSubPanel = jElementMobile.children('.top_drop_down_menu_more_button_sub_panel_mobile');
            jSubPanel.children('.top_drop_down_menu_more_button_default_message').hide();
            if (backward == true) {
                jSubPanel.append(jItemMobile);
            } else {
                jSubPanel.prepend(jItemMobile);
            }
        }

    },

    setMenuMarkPrefixListInternal: function (menu) {

        var markPrefixList = menu['markPrefixList'];
        var markSubMenuList = menu['markSubMenuList'];
        var subMenuList = menu['subMenuList'];

        if (markPrefixList == undefined
            &&
            ((subMenuList != undefined && subMenuList.length > 0)
                || (markSubMenuList != undefined && markSubMenuList.length > 0))
        ) {
            markPrefixList = [];
        }

        if (subMenuList != undefined && subMenuList.length > 0) {

            for (var i = 0, l = subMenuList.length; i < l; i++) {
                var subMenuItem = subMenuList[i];
                Triton.TopDropDownMenu.setMenuMarkPrefixListInternal(subMenuItem);

                var subMenu = subMenuItem['menu'];
                var subMenuMarkPrefixList = subMenuItem['markPrefixList'];
                if (subMenuMarkPrefixList != undefined && subMenuMarkPrefixList.length > 0) {

                    for (var j = 0, jl = subMenuMarkPrefixList.length; j < jl; j++) {
                        markPrefixList.push(subMenuMarkPrefixList[j]);
                    }
                }

                markPrefixList.push(Triton.TopDropDownMenu.getMenuPath(subMenu));
            }
        }

        if (markSubMenuList != undefined && markSubMenuList.length > 0) {

            for (var i = 0, l = markSubMenuList.length; i < l; i++) {
                var markSubMenuItem = markSubMenuList[i];
                var markSubMenuItemMenu = markSubMenuItem['menu'];
                if (markSubMenuItemMenu != undefined && markSubMenuItemMenu.length > 0) {
                    markPrefixList.push(Triton.TopDropDownMenu.getMenuPath(markSubMenuItemMenu));
                }

                var markSubMenuItemSubMenuList = markSubMenuItemMenu['subMenuList'];
                if (markSubMenuItemSubMenuList != undefined && markSubMenuItemSubMenuList.length > 0) {

                    for (var j = 0, jl = markSubMenuItemSubMenuList.length; j < jl; j++) {

                        var markSubMenuItemSubMenuItem = markSubMenuItemSubMenuList[j];
                        var markSubMenuItemSubMenuItemMenu = markSubMenuItemSubMenuItem['menu'];
                        var markSubMenuItemSubMenuItemMarkPrefixList = markSubMenuItemSubMenuItem['markPrefixList'];

                        markPrefixList.push(Triton.TopDropDownMenu.getMenuPath(markSubMenuItemSubMenuItem));

                        if (markSubMenuItemSubMenuItemMarkPrefixList != undefined && markSubMenuItemSubMenuItemMarkPrefixList.length > 0) {

                            for (var k = 0, kl = markSubMenuItemSubMenuItemMarkPrefixList.length; k < kl; k++) {
                                markPrefixList.push(markSubMenuItemSubMenuItemMarkPrefixList[k]);
                            }
                        }
                    }

                }

            }
        }


        menu['markPrefixList'] = markPrefixList;
    },

    add: function (options) {

        var menu = options['menu'];
        var menuParameterMap = options['menuParameterMap'];
        var subMenuList = options['subMenuList'];

        var iconImageUrl = options['iconImageUrl'];
        var logoImageUrl = options['logoImageUrl'];
        var pressedLogoImageUrl = options['pressedLogoImageUrl'];
        var text = options['text'];
        var hide = options['hide'];
        var markPrefixList = options['markPrefixList'];

        Triton.TopDropDownMenu.setMenuMarkPrefixListInternal(options);

        Triton.TopDropDownMenu.menuList.push(options);

        if (Triton.TopDropDownMenu.menuShowChecker(menu, 0, options) != true || hide == true) {
            return;
        }

        var depth = 0;
        var jButton = Triton.TopDropDownMenu.createMenuButton(options, depth);
        Triton.TopDropDownMenu.jDepthPanel[depth].append(jButton);

        var jButtonMobile = Triton.TopDropDownMenu.createMenuButtonMobile(options, depth);
        Triton.TopDropDownMenu.jDepthPanelMobile.append(jButtonMobile);
    },

    resize: function () {

        Triton.TopDropDownMenu.adjustTab();
    },

    getPageManagerPath: function () {

        var path = '';

        for (var j = 0, jl = jQuery.PageManager.getDepth(); j <= jl; j++) {

            var menuName = jQuery.PageManager.getMenuParameter(j);
            if (String.isNotBlank(path) && !path.endsWith('/')) {
                path += '/';
            }

            path += menuName;
        }

        return path;
    },

    markInternal: function (parameterMap, beforeParameterMap, depth) {

        var jButtons = Triton.TopDropDownMenu.jDepthPanel[depth].find('.button');
        jButtons.buttonPressed(false);

        var path = Triton.TopDropDownMenu.getPageManagerPath();

        for (var i = 0, l = jButtons.length; i < l; i++) {
            var jButton = jButtons.eq(i);

            var menu = jButton.data('menu');
            var menuParameterMap = jButton.data('menu-parameter-map');
            var subMenuList = jButton.data('sub-menu-list');
            var markPrefixList = jButton.data('mark-prefix-list');

            var contain = (menu != undefined);
            if (menu != undefined) {

                for (var j = 0, jl = jQuery.PageManager.getDepth(); j <= jl; j++) {

                    var menuName = jQuery.PageManager.getMenuParameter(j);
                    if (!(menuName == menu[j] || menuName.startsWith(menu[j] + '/'))) {
                        contain = false;
                        break;
                    }
                }
            }

            if (contain == false && markPrefixList != undefined) {

                contain = false;
                for (var k = 0, kl = markPrefixList.length; k < kl; k++) {
                    var prefix = markPrefixList[k];
                    if (path.startsWith(prefix)) {
                        contain = true;
                        break;
                    }
                }
            }

            if (contain == true && menuParameterMap != undefined) {

                for (var key in menuParameterMap) {

                    if (String.isNotBlank(menuParameterMap[key]) && parameterMap[key] != menuParameterMap[key]) {
                        contain = false;
                        break;
                    }
                }
            }

            if (contain == true) {

                jButton.buttonPressed(true);

                if (subMenuList != undefined && subMenuList.length > 0) {

                    // 다음 메뉴가 있으니 클릭
                    Triton.TopDropDownMenu.markInternal(parameterMap, beforeParameterMap, depth + 1);
                    break;
                }

            }
        }
    },


    markInternalMobile: function (parameterMap, beforeParameterMap, depth) {

        var jButtonsMobile = Triton.TopDropDownMenu.jDepthPanelMobile.find('.top_drop_down_menu_depth_button_mobile_depth' + depth);


        var path = Triton.TopDropDownMenu.getPageManagerPath();

        for (var i = 0, l = jButtonsMobile.length; i < l; i++) {
            var jButton = jButtonsMobile.eq(i);

            var menu = jButton.data('menu');
            var menuParameterMap = jButton.data('menu-parameter-map');
            var subMenuList = jButton.data('sub-menu-list');
            var markPrefixList = jButton.data('mark-prefix-list');

            var contain = (menu != undefined);
            if (menu != undefined) {

                for (var j = 0, jl = jQuery.PageManager.getDepth(); j <= jl; j++) {

                    var menuName = jQuery.PageManager.getMenuParameter(j);
                    if (!(menuName == menu[j] || menuName.startsWith(menu[j] + '/'))) {
                        contain = false;
                        break;
                    }
                }
            }

            if (contain == false && markPrefixList != undefined) {

                contain = false;
                for (var k = 0, kl = markPrefixList.length; k < kl; k++) {
                    var prefix = markPrefixList[k];
                    if (path.startsWith(prefix)) {
                        contain = true;
                        break;
                    }
                }
            }

            if (contain == true && menuParameterMap != undefined) {

                for (var key in menuParameterMap) {

                    if (String.isNotBlank(menuParameterMap[key]) && parameterMap[key] != menuParameterMap[key]) {
                        contain = false;
                        break;
                    }
                }
            }

            if (contain == true) {

                jButton.buttonPressed(true);

                if (subMenuList != undefined && subMenuList.length > 0) {

                    jButton.trigger('click');

                    // 다음 메뉴가 있으니 클릭
                    Triton.TopDropDownMenu.markInternalMobile(parameterMap, beforeParameterMap, depth + 1);
                    break;
                }

            }
        }
    },


    mark: function (parameterMap, beforeParameterMap) {

        for (var i = 1, l = Triton.TopDropDownMenu.jDepthPanel.length; i < l; i++) {
            Triton.TopDropDownMenu.jDepthPanel[i].hide();
        }

        Triton.TopDropDownMenu.markInternal(parameterMap, beforeParameterMap, 0);


        var jButtonsMobile = Triton.TopDropDownMenu.jDepthPanelMobile.find('.top_drop_down_menu_depth_button_mobile');
        jButtonsMobile.buttonPressed(false);
        jButtonsMobile.parent().find('.top_drop_down_menu_depth_sub_panel_mobile_shown').removeClass('top_drop_down_menu_depth_sub_panel_mobile_shown').hide();

        Triton.TopDropDownMenu.markInternalMobile(parameterMap, beforeParameterMap, 0);

        Triton.TopDropDownMenu.checkTab(parameterMap, beforeParameterMap);

        Triton.TopDropDownMenu.saveStorage();
    }
};

































var MenuDirectory = Triton.MenuDirectory = function (options) {
    this.init(options);
};


Triton.MenuDirectory.requester = undefined;
Triton.MenuDirectory.setRequester = function (r) {
    Triton.MenuDirectory.requester = r;
};


Triton.MenuDirectory.prototype = new Triton();
Triton.MenuDirectory.prototype.init = function (options) {

    this.options = options;

    this.requester = Lia.pd(Triton.MenuDirectory.requester, options, 'requester');
    if (this.requester == undefined) {
        this.requester = new jQuery.Requester();
    }

    this.menuAddButtonShow = Lia.pd(true, options, 'menuAddButtonShow');
    this.contextMenuPopupAppendTo = Lia.p(options, 'contextMenuPopupAppendTo');
    this.menuChangeOrderButtonShow = Lia.pd(true, options, 'menuChangeOrderButtonShow');
    this.menuEditButtonShow = Lia.pd(true, options, 'menuEditButtonShow');
    this.menuDeleteButtonShow = Lia.pd(false, options, 'menuDeleteButtonShow');
    this.menuManagerButtonShow = Lia.pd(false, options, 'menuManagerButtonShow');

    this.onMenu = Lia.pd(function (options) {

        var menuId = Lia.pd('', options, 'menuId');
        var parentMenuId = Lia.pd('', options, 'parentMenuId');
        var expand = Lia.pd('', options, 'expand');
        var menuAdd = Lia.pd('', options, 'menuAdd');

        Lia.PageManager.cpcpm({
            menu_id: menuId,
            expand: expand,
            menu_add: menuAdd,
            parent_menu_id: parentMenuId,
            edit: 0,
            add: 0
        });

    }, options, 'onMenu');

    this.onMenuAdd = Lia.p(options, 'onMenuAdd');
    this.onMenuEdit = Lia.p(options, 'onMenuEdit');

    this.width = Lia.pd('180px', options, 'width');
    this.height = Lia.pd('740px', options, 'height');
    this.menuAddNodeShow = Lia.pd(false, options, 'menuAddNodeShow');

    var section = new Triton.Section({
        css: {
            'height': this.height,
            "width": this.width,
            'border': '1px solid rgb(225, 225, 225)',
            'overflow': 'auto',
            'position': 'relative'
        }
    });

    this.rootTree = new Triton.Section({
        appendTo: section,
        addClass: 'menu_children root_menu_children inline_block',
        css: {
            'position': 'relative',
            'min-width': '100%'
        },
        attr: {
            'depth': 0
        }
    });

    this.jView = section.get();
    this.initTriton(options);
};

Triton.MenuDirectory.prototype.createMenuNode = function (menu, depth) {

    var page = this;

    var jNode = $(
        '<div class="menu">' +
        '<div class="menu_title">' +
        '<div class="menu_flag"></div>' +
        '<div class="menu_text"></div>' +
        '</div>' +
        '<div class="menu_children">' +
        '</div>' +
        '</div>'
    );

    var isAvailable = Lia.p(menu, 'is_available');
    var menuId = Lia.p(menu, 'id');
    var parentMenuId = Lia.p(menu, 'parent_id');

    var jMenuText = jNode.find('.menu_text');
    var title = undefined;
    if (menuId == undefined) {

        title = '메뉴 추가';
        jNode.find('.menu_title').addClass('menu_add');
        jNode.find('.menu_children').remove();

    } else {

        title = Lia.p(menu, 'title');
        if (isAvailable != 1) {
            jMenuText.addClass('unavailable');
        }

        jNode.find('.menu_children').attr({
            'menu-id': menuId,
            'parent-menu-id': parentMenuId,
            'depth': depth
        }).data('menu', menu);
    }

    jMenuText.html(title);

    var jTitle = jNode.find('.menu_title');
    jTitle.css({
        'padding-left': ((depth * 20)) + 'px',
        'padding-right': '20px'
    }).attr({
        'menu-id': menuId,
        'parent-menu-id': parentMenuId
    }).on('click', function () {

        var jThis = $(this);
        var expanded = jThis.hasClass('expanded');
        if (expanded) {

            jThis.next().removeClass('expanded');
            jThis.removeClass('expanded');

        } else {

            jThis.next().addClass('expanded');
            jThis.addClass('expanded');
        }

        var menuId = jThis.attr('menu-id');
        var parentMenuId = jThis.attr('parent-menu-id');
        var menuAdd = jThis.hasClass('menu_add') ? 1 : 0;

        page.onMenu({
            menuId: menuId,
            expand: expanded ? 0 : 1,
            menuAdd: menuAdd,
            parentMenuId: parentMenuId
        });

    }).data('menu', menu);

    // on('mousedown', {
    //     page : page
    // }, function(e){
    //
    //     e.preventDefault();
    //
    //     var page = e.data.page;
    //     page.rootTree.addClass('menu_directory_moving');
    //
    //
    // }).on('mouseup', {
    //     page : page
    // }, function(e){
    //
    //     e.preventDefault();
    //
    //     var page = e.data.page;
    //     page.rootTree.removeClass('menu_directory_moving');
    //
    // }).

    jNode.on('contextmenu', {
        menu: menu,
        page: page
    }, function (e) {

        e.stopPropagation();

        var menu = e.data.menu;
        var page = e.data.page;

        var manager = new Triton.ContextMenuPopupManager({
            jAppendTo: page.contextMenuPopupAppendTo,
            theme: Triton.ContextMenuPopupManager.Theme.Mouse
        });
        manager.setBindHandler(function (contextMenuPopupManager, object) {

            var contextMenu = new Triton.ContextMenu({
                theme: Triton.ContextMenu.Theme.ContextMenu.Text
            });
            contextMenu.addOnItemClick(function (item, contextMenu, object) {

                var idx = item['idx'];
                var menu = item['menu'];
                var page = item['page'];

                if (idx == 1) {

                    if (page.onMenuAdd != undefined) {
                        page.onMenuAdd(page, menu);
                    }

                } else if (idx == 2) {

                    page.moveSelectedMenu(-1, menuId);

                } else if (idx == 3) {

                    page.moveSelectedMenu(1, menuId);

                } else if (idx == 4) {

                    PopupManager.alert('삭제', '정말 삭제하시겠습니까?', function (object) {

                        page.requester.awb(Lia.MenuPage.ApiUrl.DELETE_MENU, {
                            id: menuId
                        }, function (status, data, request) {

                            if (status != Lia.Requester.Status.SUCCESS) {
                                return;
                            }

                            if (page.onDeleted != undefined) {
                                page.onDeleted(page);
                            } else {
                                Lia.refresh();
                            }

                        });

                    }, function (object) {

                    }, '확인', '취소', {});

                } else if (idx == 5) {

                    var page = Lia.p(item, 'page');
                    var menu = Lia.p(item, 'menu');
                    if (page.onMenuEdit != undefined) {
                        page.onMenuEdit(page, menu);
                    }

                } else if (idx == 6) {

                    AjaxPopupManager.show(Lia.MenuPage.PopupUrl.MENU_MANAGER, {
                        'menuId': menuId
                    });

                }

            }, object);

            if (page.menuAddButtonShow) {

                contextMenu.add({
                    theme: Triton.ContextMenu.Theme.ContextMenuItem.TextNoPadding,
                    content: '<img class="image_button press" src="/res/lia/triton/img/context_menu/btn_lowmenu.png" alt="image button press">',
                    idx: 1,
                    menu: menu,
                    page: page
                });
            }

            if (page.menuChangeOrderButtonShow) {

                contextMenu.add({
                    theme: Triton.ContextMenu.Theme.ContextMenuItem.TextNoPadding,
                    content: '<img class="image_button press" src="/res/lia/triton/img/context_menu/btn_up.png" alt="image button press">',
                    idx: 2,
                    menu: menu,
                    page: page
                });
                contextMenu.add({
                    theme: Triton.ContextMenu.Theme.ContextMenuItem.TextNoPadding,
                    content: '<img class="image_button press" src="/res/lia/triton/img/context_menu/btn_down.png" alt="image button press">',
                    idx: 3,
                    menu: menu,
                    page: page
                });
            }

            if (page.menuDeleteButtonShow) {

                contextMenu.add({
                    theme: Triton.ContextMenu.Theme.ContextMenuItem.TextNoPadding,
                    content: '<img class="image_button press" src="/res/lia/triton/img/context_menu/btn_delete.png" alt="image button press">',
                    idx: 4,
                    menu: menu,
                    page: page
                });
            }

            if (page.menuEditButtonShow) {

                contextMenu.add({
                    theme: Triton.ContextMenu.Theme.ContextMenuItem.TextNoPadding,
                    content: '<img class="image_button press" src="/res/lia/triton/img/context_menu/btn_edit.png"  alt="image button press">',
                    idx: 5,
                    menu: menu,
                    page: page
                });
            }

            if (page.menuManagerButtonShow) {

                contextMenu.add({
                    theme: Triton.ContextMenu.Theme.ContextMenuItem.TextNoPadding,
                    content: '<img class="image_button press" src="/res/lia/triton/img/context_menu/btn_manage.png" alt="image button press">',
                    idx: 6,
                    menu: menu,
                    page: page
                });

            }

            return contextMenu;
        });

        manager.show($(this), undefined, e);
    });

    return jNode;
};

Triton.MenuDirectory.prototype.setMenu = function (menuId, list, expand) {

    var page = this;

    var isRoot = undefined;
    var jMenuChildren = undefined;

    if (menuId == undefined || menuId <= 0) {
        jMenuChildren = page.find('.menu_children.root_menu_children');
        isRoot = true;
    } else {
        jMenuChildren = page.find('.menu_children[menu-id="' + menuId + '"]');
        isRoot = false;
    }

    jMenuChildren.empty();

    page.find('.selected').removeClass('selected');

    if (isRoot) {

        if (expand == 0) {
            jMenuChildren.removeClass('expanded');
        } else {
            jMenuChildren.addClass('expanded');
        }

    } else {

        var jMenu = jMenuChildren.parent();
        jMenu.find('.menu_title').addClass('selected');

        if (expand == 0) {
            jMenu.removeClass('expanded');
            jMenu.children().removeClass('expanded');
        } else {
            jMenu.addClass('expanded');
            jMenu.children().addClass('expanded');
        }

    }

    // 펼쳐지고 자식 있을때는 그리기
    if (expand == 1) {

        var depth = parseInt(jMenuChildren.attr('depth'));
        if (list != undefined) {

            for (var i = 0, l = list.length; i < l; i++) {

                var item = list[i];
                jMenuChildren.append(
                    page.createMenuNode(item, depth + 1)
                );
            }
        }

        if (page.menuAddNodeShow == true && menuId != undefined && menuId > 0) {

            jMenuChildren.append(
                page.createMenuNode({
                    id: undefined,
                    parent_id: menuId
                }, depth + 1)
            );
        }
    }
};


Triton.MenuDirectory.prototype.setMenuAdd = function (parentMenuId) {

    var page = this;

    var jParentMenuChildren = page.find('.menu_children[menu-id="' + parentMenuId + '"]');
    var jParentMenu = jParentMenuChildren.parent();

    jParentMenu.addClass('expanded');
    jParentMenu.children().addClass('expanded');

    page.find('.selected').removeClass('selected');

    jParentMenuChildren.children('.menu').children('.menu_add').addClass('selected');
};


Triton.MenuDirectory.prototype.loadMenu = function (options) {

    var page = this;

    var includeContent = Lia.pd(0, options, 'includeContent');

    var isAvailable = Lia.p(options, 'isAvailable');

    var serviceProviderId = Lia.p(options, 'serviceProviderId');
    var institutionId = Lia.p(options, 'institutionId');
    var organizationId = Lia.p(options, 'organizationId');

    var departmentIdx = Lia.p(options, 'departmentIdx');

    var languageTypeCode = Lia.pd('ko', options, 'languageTypeCode');
    var expand = Lia.pd(1, options, 'expand');
    var menuAdd = page.menuAdd = Lia.pd(0, options, 'menuAdd');
    var parentMenuId = page.parentMenuId = Lia.p(options, 'parentMenuId');
    var onCompleted = Lia.p(options, 'onCompleted');
    var menuId = page.menuId = Lia.p(options, 'menuId');
    if (menuId == undefined) {
        if (String.isBlank(departmentIdx)) {
            menuId = -1;
        } else {
            menuId = undefined;
        }
    }

    var parameterMap = {

        serviceProviderId : serviceProviderId,
        institutionId : institutionId,
        organizationId : organizationId,

        departmentIdx: departmentIdx,

        parentId: menuId,
        includeContent: includeContent,
        isAvailable: isAvailable,
        languageTypeCode: languageTypeCode,
        isDeleted: 0
    };

    var allRequest =
        (menuId != undefined && menuId > 0 && page.find('.menu_children[menu-id="' + menuId + '"]').length == 0) ||
        (menuAdd == 1 && parentMenuId != undefined && page.find('.menu_children[menu-id="' + parentMenuId + '"]').length == 0);
    if (allRequest) {
        page.find('.menu_children.root_menu_children').empty();
        parameterMap['parentId'] = undefined;
    }

    if (!allRequest && menuAdd == 1 && parentMenuId != 0) {

        page.setMenuAdd(parentMenuId);
        if (onCompleted != undefined) {
            onCompleted(page, options);
        }

    } else if (!allRequest && expand == 0) {

        page.setMenu(menuId, undefined, expand);
        if (onCompleted != undefined) {
            onCompleted(page, options);
        }

    } else {

        page.requester.awb(Lia.MenuPage.ApiUrl.GET_MENU_LIST, parameterMap, function (status, data, request) {

            if (status != Lia.Requester.Status.SUCCESS) {
                return;
            }

            var menuId = request.object.menuId;
            var expand = request.object.expand;
            var page = request.object.page;
            var allRequest = request.object.allRequest;
            var parentMenuId = request.object.parentMenuId;
            var menuAdd = request.object.menuAdd;

            if (menuAdd == 1) {
                menuId = parentMenuId;
            }

            var list = page.list = Lia.p(data, 'body', 'list');
            if (allRequest) {

                var map = {};
                page.loopMenuMap(list, map);

                var menuList = [];
                while (true) {

                    menuList.push(menuId);
                    menuId = Lia.p(map, menuId, 'parent_id');
                    if (String.isBlank(menuId)) {
                        break;
                    }
                }

                page.setMenu(undefined, list, 1);
                for (var i = menuList.length - 1; i >= 0; --i) {

                    var itemMenuId = menuList[i];
                    var itemChildList = Lia.p(map, itemMenuId, 'child_list');
                    page.setMenu(itemMenuId, itemChildList, (i == 0) ? expand : 1);
                }

            } else {
                page.setMenu(menuId, list, expand);
            }

            if (menuAdd == 1) {
                page.setMenuAdd(parentMenuId);
            }

            var onCompleted = request.object.onCompleted;
            var options = request.object.options;
            if (options != undefined) {
                onCompleted(page, options);
            }

        }, {
            menuId: menuId,
            expand: expand,
            page: page,
            allRequest: allRequest,
            menuAdd: menuAdd,
            parentMenuId: parentMenuId,
            onCompleted: onCompleted,
            options: options
        });
    }

};


Triton.MenuDirectory.prototype.loopMenuMap = function (list, map) {

    var page = this;

    if (list == undefined) {
        return;
    }

    for (var i = 0, l = list.length; i < l; i++) {

        var item = list[i];
        var itemId = item['id'];
        map[itemId] = item;

        var childList = item['child_list'];
        if (childList != undefined && childList.length > 0) {
            page.loopMenuMap(childList, map);
        }
    }
};


// 화면상의 노드들을 따라가서 제목들을 합쳐서 리턴
Triton.MenuDirectory.prototype.getNavigationTitle = function () {

    var page = this;
    var menuId = page.menuId;
    var parentMenuId = page.parentMenuId;
    var menuAdd = page.menuAdd;

    var title = '';

    var findMenuId = (menuAdd == 1) ? parentMenuId : menuId;
    while (true) {

        var jMenuTitle = page.find('.menu_title[menu-id="' + findMenuId + '"]');
        if (jMenuTitle.length == 0) {
            break;
        }

        var titleValue = jMenuTitle.text();

        if (String.isNotBlank(title)) {
            title = ' > ' + title;
        }

        title = titleValue + title;

        findMenuId = jMenuTitle.attr('parent-menu-id');
        if (String.isBlank(findMenuId)) {
            break;
        }
    }

    return title;
};


Triton.MenuDirectory.prototype.getSiblingMenuList = function (menuId) {

    var page = this;
    var list = [];

    var jSelected = undefined;
    if (menuId != undefined) {
        jSelected = page.find('.menu_title[menu-id="' + menuId + '"]');
    } else {
        jSelected = page.find('.selected');
    }

    if (jSelected.length > 0) {

        var jMenu = jSelected.closest('.menu');
        var jMenuSibling = jMenu.parent().children();

        for (var i = 0, l = jMenuSibling.length; i < l; i++) {
            var jMenuTitleEq = jMenuSibling.eq(i).children('.menu_title');
            if (!jMenuTitleEq.hasClass('menu_add')) {
                var menu = jMenuTitleEq.data('menu');
                list.push(menu);
            }
        }
    }


    return list;
};


Triton.MenuDirectory.prototype.moveSelectedMenu = function (direction, menuId) {

    var page = this;
    if (menuId == undefined) {
        menuId = page.menuId;
    }

    var siblingMenuList = page.getSiblingMenuList(menuId);
    var jSelected = undefined;
    if (menuId != undefined) {
        jSelected = page.find('.menu_title[menu-id="' + menuId + '"]');
    } else {
        jSelected = page.find('.selected');
    }

    if (siblingMenuList != undefined && siblingMenuList.length > 0) {

        var foundIndex = undefined;
        for (var i = 0, l = siblingMenuList.length; i < l; i++) {
            var item = siblingMenuList[i];

            if (item['id'] == menuId) {
                foundIndex = i;
                break;
            }
        }

        if (foundIndex == undefined) {
            return;
        }

        var temp = siblingMenuList[foundIndex + direction];
        if (temp == undefined) {
            return;
        }

        siblingMenuList[foundIndex + direction] = siblingMenuList[foundIndex];
        siblingMenuList[foundIndex] = temp;

        var idListString = '';

        for (var i = 0, l = siblingMenuList.length; i < l; i++) {

            var item = siblingMenuList[i];
            if (String.isNotBlank(idListString)) {
                idListString += ',';
            }

            idListString += item['id'];
        }

        page.requester.ajaxWithoutBlank(Lia.MenuPage.ApiUrl.SET_MENU_DISPLAY_ORDER, {
            idList: idListString
        }, function (status, data, request) {

            if (status != Lia.Requester.Status.SUCCESS)
                return;


            var jMenu = jSelected.parent();

            var direction = request.object.direction;
            if (direction > 0) {
                jMenu.next().after(jMenu);
            } else {
                jMenu.prev().before(jMenu);
            }


        }, {
            direction: direction,
            jSelected: jSelected
        })
    }
};


Triton.MenuDirectory.prototype.getSelectedMenu = function () {
    var page = this;
    return page.find('.selected').data('menu');
};

Triton.MenuDirectory.prototype.setSelectedMenuTitle = function (title) {
    var page = this;
    page.find('.selected').children('.menu_text').html(title);
};

Triton.MenuDirectory.prototype.isMenuAdd = function () {
    var page = this;
    return (page.menuAdd == 1);
};

Triton.MenuDirectory.prototype.getMenuId = function () {
    var page = this;
    return page.menuId;
};

Triton.MenuDirectory.prototype.getList = function () {
    var page = this;
    return page.list;
};






















/*

 {

 // 이게 인지 아닌지 찾으면 된다고 함
 check: function (options) {

 // 맞으면 true
 // true가 리턴되면 해당 내역을 사용


 // 틀리면 false

 return false;
 },


 attachToMenuWrite: function (detailTable, menu, menuWrite) {

 return {};
 },

 attachToParameterMap: function (parameterMap, fieldObject, menuWrite) {

 var page = this;
 }



 };

 */

var MenuWrite = Triton.MenuWrite = function (options) {
    this.init(options);
};

Triton.MenuWrite.requester = undefined;
Triton.MenuWrite.setRequester = function (r) {
    Triton.MenuWrite.requester = r;
};


Triton.MenuWrite.onContentTypeCodeSet = function (contentTypeComboBox, contentTypeCode, content, body) {
    contentTypeComboBox.setValue(contentTypeCode);
};

Triton.MenuWrite.setOnContentTypeCodeSet = function (onContentTypeCodeSet) {
    Triton.MenuWrite.onContentTypeCodeSet = onContentTypeCodeSet;
};

Triton.MenuWrite.contentTypeOptionList = undefined;
Triton.MenuWrite.setContentTypeOptionList = function (list) {
    Triton.MenuWrite.contentTypeOptionList = list;
};

Triton.MenuWrite.contentTypeFieldItemMap = {};
Triton.MenuWrite.setContentTypeFieldItem = function (contentTypeCode, item) {
    Triton.MenuWrite.contentTypeFieldItemMap[contentTypeCode] = item;
};


Triton.MenuWrite.prototype = new Triton();
Triton.MenuWrite.prototype.init = function (options) {

    this.options = options;

    this.onContentTypeCodeSet = Lia.pd(Triton.MenuWrite.onContentTypeCodeSet, options, 'onContentTypeCodeSet');
    this.contentTypeOptionList = Lia.pd(Triton.MenuWrite.contentTypeOptionList, options, 'contentTypeOptionList');
    this.customFieldList = Lia.p(options, 'customFieldList');
    this.onEdited = Lia.p(options, 'onEdited');
    this.onAdded = Lia.p(options, 'onAdded');
    this.onDeleted = Lia.p(options, 'onDeleted');

    var contentTypeFieldItemMap = {};
    var baseContentTypeFieldItemMap = Lia.pd(Triton.MenuWrite.contentTypeFieldItemMap, options, 'contentTypeFieldItemMap');
    if (baseContentTypeFieldItemMap != undefined) {
        for (var baseContentTypeCode in baseContentTypeFieldItemMap) {
            var baseContentTypeFieldItem = baseContentTypeFieldItemMap[baseContentTypeCode];
            contentTypeFieldItemMap[baseContentTypeCode] = Lia.deepCopy(baseContentTypeFieldItem);
        }
    }
    this.contentTypeFieldItemMap = contentTypeFieldItemMap;

    this.requester = Lia.pd(Triton.MenuWrite.requester, options, 'requester');
    if (this.requester == undefined) {
        this.requester = new jQuery.Requester();
    }

    var section = new Triton.Section({
        appendTo: Lia.p(options, 'appendTo')
    });

    this.jView = section.get();
    this.jContent = section.get();
    this.initTriton(options);
};


Triton.MenuWrite.prototype.getMenu = function () {
    return this.menu;
};

Triton.MenuWrite.prototype.getParentMenu = function () {
    return this.parentMenu;
};

Triton.MenuWrite.prototype.load = function (options) {

    var page = this;

    page.empty();

    var menuId = Lia.p(options, 'menuId');
    var parentMenuId = Lia.p(options, 'parentMenuId');

    var serviceProviderId = page.serviceProviderId = Lia.p(options, 'serviceProviderId');
    var institutionId = page.institutionId = Lia.p(options, 'institutionId');
    var organizationId = page.organizationId = Lia.p(options, 'organizationId');
    var departmentIdx = page.departmentIdx = Lia.p(options, 'departmentIdx');

    var languageTypeCode = page.languageTypeCode = Lia.p(options, 'languageTypeCode');
    var menuAdd = Lia.p(options, 'menuAdd');

    if (String.isNotBlank(menuId)) {

        page.menu = undefined;
        page.requester.awb(Lia.MenuPage.ApiUrl.GET_MENU, {
            id: menuId
        }, function (status, data, request) {

            if (status != Lia.Requester.Status.SUCCESS)
                return;

            var page = request.object.page;
            page.body = page.menu = Lia.p(data, 'body');

        }, {
            page: page
        });
    }

    if (String.isNotBlank(parentMenuId)) {

        page.parentMenu = undefined;
        page.requester.awb(Lia.MenuPage.ApiUrl.GET_MENU, {
            id: parentMenuId
        }, function (status, data, request) {

            if (status != Lia.Requester.Status.SUCCESS)
                return;

            var page = request.object.page;
            page.parentMenu = Lia.p(data, 'body');

        }, {
            page: page
        });
    }

    page.requester.func(function (execute) {

        var page = execute.object.page;
        var body;
        var contentValue;

        if (String.isNotBlank(menuId)) {
            body = page.body;
            contentValue = Lia.p(body, 'content');
        }

        var contentSection = new Triton.Section({
            appendTo: page.get(),
            css : { 'padding' : '20px' }
        });

        var panel = new Triton.Panel({
            appendTo: contentSection
        });

        var detailTable = new Triton.DetailTable({
            appendTo: panel
        });

        {
            detailTable.appendRow({});
            detailTable.appendKeyColumn({
                content: '제목'
            });
            detailTable.appendValueColumn({
                content: new Triton.TextInput({
                    form: {'name': 'title'},
                    theme: Triton.TextInput.Theme.Full,
                    value: Lia.p(body, 'title')
                })
            });
        }

        page.addedCustomFildList = [];
        page.useCustomField = false;
        if (page.customFieldList != undefined && page.customFieldList.length > 0) {

            for (var i = 0, l = page.customFieldList.length; i < l; i++) {
                var item = page.customFieldList[i];
                if (item.check != undefined) {

                    var customObject = Lia.deepCopy(item);
                    var result = customObject.check(body, page);
                    if (result == true) {

                        page.useCustomField = true;

                        var fieldObject = customObject.attachToMenuWrite(
                            detailTable, body, page
                        );

                        page.addedCustomFildList.push({
                            customObject: customObject,
                            fieldObject: fieldObject
                        });
                    }

                }

            }
        }

        if (page.useCustomField == false) {

            var contentTypeCode = Lia.p(body, 'content', 'type_code');

            detailTable.appendRow({});
            detailTable.appendKeyColumn({
                content: '콘텐츠 타입'
            });
            detailTable.appendValueColumn({
                content: page.contentTypeCodeComboBox = new Triton.ComboBox({
                    form: {name: 'contentTypeCode'},
                    optionList: page.contentTypeOptionList,
                    // disabled : String.isNotBlank(menuId),

                    contentTypeFieldItemMap: page.contentTypeFieldItemMap,
                    page: page,
                    onSelected: function (val) {

                        var triton = $(this).getTriton();
                        var options = triton.getOptions();
                        var page = Lia.p(options, 'page');

                        if (page.currentContentTypeFieldItem != undefined) {
                            page.currentContentTypeFieldItem.hide();
                        }

                        var contentTypeFieldItem = Lia.p(options, 'contentTypeFieldItemMap', val);
                        if (contentTypeFieldItem != undefined) {
                            contentTypeFieldItem.show();
                        }

                        page.currentContentTypeFieldItem = contentTypeFieldItem;
                    }
                })
            });

            var contentTypeFieldItemMap = page.contentTypeFieldItemMap;
            for (var contentTypeFieldItemTypeCode in contentTypeFieldItemMap) {
                var contentTypeFieldItem = contentTypeFieldItemMap[contentTypeFieldItemTypeCode];

                if (contentTypeFieldItemTypeCode == contentTypeCode) {
                    contentTypeFieldItem.create(detailTable, contentValue, body);
                } else {
                    contentTypeFieldItem.create(detailTable, undefined, undefined);
                }

                contentTypeFieldItem.hide();
            }

            page.onContentTypeCodeSet(page.contentTypeCodeComboBox, contentTypeCode, contentValue, body);
        }

        {
            detailTable.appendRow({});
            detailTable.appendKeyColumn({
                content: '게시'
            });
            detailTable.appendValueColumn({
                content: new Triton.CheckBox({
                    form: {name: 'isAvailable'},
                    content: '게시',
                    pressed: Lia.p(body, 'is_available'),
                    onChecked: function (isAvailable) {
                    }
                })
            });
        }

        var buttonSection = new Triton.ButtonSection({
            appendTo: contentSection
        });

        buttonSection.appendToRight(new Triton.FlatButton({
            content: '저장',
            theme: Triton.FlatButton.Theme.Normal,
            page: page,
            options: options,
            onClick: function (e) {

                var page = e.data.page;
                var options = e.data.options;

                var dataMap = Triton.extractFormData(page.get());

                var menuId = Lia.p(options, 'menuId');
                var parentMenuId = Lia.p(options, 'parentMenuId');

                dataMap['id'] = menuId;
                dataMap['parentId'] = parentMenuId;
                dataMap['contentRequiresLogin'] = 0;

                if ( page.parentMenu == undefined ) {

                    dataMap['serviceProviderId'] =  page.serviceProviderId;
                    dataMap['instituionId'] =  page.instituionId;
                    dataMap['organizationId'] =  page.organizationId;

                    dataMap['departmentIdx'] =  page.departmentIdx;
                    dataMap['languageTypeCode'] = page.languageTypeCode;

                } else {

                    dataMap['serviceProviderId']  = Lia.p(page.parentMenu, 'service_provider_id');
                    dataMap['instituionId']  = Lia.p(page.parentMenu, 'institution_id');
                    dataMap['organizationId']  = Lia.p(page.parentMenu, 'organization_id');
                    
                    dataMap['departmentIdx']  = Lia.p(page.parentMenu, 'department_idx');
                    dataMap['languageTypeCode'] = Lia.p(page.parentMenu, 'language_type_code');
                }

                if (String.isBlank(dataMap['title'])) {
                    PopupManager.alert('안내', '제목을 입력해주세요.');
                    return;
                }

                if (page.addedCustomFildList != undefined) {

                    for (var i = 0, l = page.addedCustomFildList.length; i < l; i++) {

                        var customField = page.addedCustomFildList[i];

                        var customObject = customField['customObject'];
                        var fieldObject = customField['fieldObject'];

                        var error = customObject.attachToParameterMap(dataMap, fieldObject, page);
                        if (error == true) {
                            return;
                        }
                    }
                }


                if (page.useCustomField == false) {

                    var contentTypeCode = dataMap['contentTypeCode'];
                    if (String.isBlank(contentTypeCode)) {
                        PopupManager.alert('안내', '콘텐츠 타입을 선택해주세요.');
                        return;
                    }

                    var contentTypeFieldItemMap = page.contentTypeFieldItemMap;
                    var contentTypeFieldItem = contentTypeFieldItemMap[contentTypeCode];
                    if (contentTypeFieldItem.attachToParameterMap != undefined) {
                        var error = contentTypeFieldItem.attachToParameterMap(dataMap);
                        if (error == true) {
                            return;
                        }
                    }
                }

                if (String.isBlank(menuId)) {

                    page.requester.ajaxWithoutBlank(Lia.MenuPage.ApiUrl.ADD_MENU, dataMap, function (status, data, request) {

                        if (status != Lia.Requester.Status.SUCCESS)
                            return;

                        PopupManager.alert('안내', '반영 완료 되었습니다.', function () {

                            if (page.onAdded != undefined) {
                                page.onAdded(page);
                            }

                        });

                    });

                } else {

                    page.requester.ajaxWithoutBlank(Lia.MenuPage.ApiUrl.EDIT_MENU, dataMap, function (status, data, request) {

                        if (status != Lia.Requester.Status.SUCCESS)
                            return;

                        PopupManager.alert('안내', '수정 완료 되었습니다.', function () {

                            if (page.onEdited != undefined) {
                                page.onEdited(page);
                            }

                        });

                    });
                }
            }
        }));

        if (String.isNotBlank(menuId) && page.onDeleted != undefined) {

            buttonSection.appendToRight(new Triton.FlatButton({
                content: '삭제',
                css: {'margin-left': '10px'},
                theme: Triton.FlatButton.Theme.Delete,
                page: page,
                options: options,
                onClick: function (e) {

                    var page = e.data.page;
                    var options = e.data.options;

                    var menuId = Lia.p(options, 'menuId');

                    PopupManager.alert('안내', '정말 삭제하시겠습니까?', function () {

                        page.requester.ajaxWithoutBlank(Lia.MenuPage.ApiUrl.DELETE_MENU, {
                            id: menuId
                        }, function (status, data, request) {

                            if (status != Lia.Requester.Status.SUCCESS)
                                return;

                            PopupManager.alert('안내', '삭제가 완료되었습니다.', function () {

                                if (page.onDeleted != undefined) {
                                    page.onDeleted(page);
                                }

                            });

                        });
                        PopupManager.hide();
                    }, function (object) {
                        PopupManager.hide();
                    }, '확인', '취소', {});

                }
            }));
        }

        return contentSection;

    }, {
        page: page
    });

};












var MenuDetail = Triton.MenuDetail = function (options) {
    this.init(options);
};


Triton.MenuDetail.requester = undefined;
Triton.MenuDetail.setRequester = function (r) {
    Triton.MenuDetail.requester = r;
};

Triton.MenuDetail.detailPageHandler = function( section, menu, childList ) {

    var height = section.css('height');

    if ( Array.isNotEmpty(childList) ) {

        section.append(new Triton.Section({

            css: {
                'line-height': height,
                'text-align': 'center'
            },
            content: '내용을 표시하지 않는 메뉴입니다.'
        }));

        return;
    }

    var contentTypeCode = Lia.p(menu, 'content','type_code');
    var menuId = Lia.p(menu,'id');

    if (contentTypeCode == ContentType.LINK) {

        var panel = new Triton.Panel({
            appendTo: section
        });

        var detailTable = new Triton.DetailTable({
            appendTo: panel
        });

        detailTable.appendRow();
        detailTable.appendKeyColumn({
            content: '링크'
        });

        var link = Lia.p(menu, 'content', 'data');
        detailTable.appendValueColumn({
            content: link,
            css: {
                'cursor': 'pointer'
            },
            onClick: function (e) {
                Requester.open(link);
            }
        });

    } else if (contentTypeCode == ContentType.BOARD) {

        var requestParameterMap = {};
        requestParameterMap['board_id'] = Lia.p(menu, 'content', 'data', 'id');
        requestParameterMap['type_code'] = Lia.p(menu, 'content', 'data', 'type_code');
        requestParameterMap['menu_id'] = Lia.p(menu, 'id');

        var url = '/page/cms/board' + Lia.convertArrayToQueryString(requestParameterMap);

        var jBody = $('<iframe title="iframe" src="' + url + '" width="100%" height="'+height+'" style="border:none;" />');
        section.append(jBody);

    } else {

        var url = '/' + Lia.convertArrayToQueryString({
            'm1' : 'page',
            'menu_id' : menuId,
            'contentOnly': 1
        });

        var jBody = $('<iframe title="iframe" src="' + url + '" width="100%" height="'+ height + '" style="border:none;" />');
        section.append(jBody);
    }
};


Triton.MenuDetail.setDetailPageHandler = function ( handler ) {
    Triton.MenuDetail.detailPageHandler = handler;
};

Triton.MenuDetail.prototype = new Triton();
Triton.MenuDetail.prototype.init = function (options) {

    var page = this;

    this.options = options;
    this.onDeleted = Lia.p(options, 'onDeleted');

    this.requester = Lia.pd(Triton.MenuDetail.requester, options, 'requester');
    if (this.requester == undefined) {
        this.requester = new jQuery.Requester();
    }

    this.menuDirectory = Lia.p(options, 'menuDirectory');
    this.detailPageHandler = Lia.pd(Triton.MenuDetail.detailPageHandler, options, 'detailPageHandler');
    
    this.addButtonHide = Lia.pd(false, options, 'addButtonHide');
    this.deleteButtonShow = Lia.pd(false, options, 'deleteButtonShow');
    this.menuManagerButtonShow = Lia.pd(false, options, 'menuManagerButtonShow');
    this.customMenuWriteFieldList = Lia.p(options, 'customMenuWriteFieldList');
    this.menuWriteContentTypeOptionList = Lia.p(options, 'menuWriteContentTypeOptionList');
    this.menuWriteContentTypeFieldItemMap = Lia.p(options, 'menuWriteContentTypeFieldItemMap');
    this.menuWriteOnContentTypeCodeSet = Lia.p(options, 'menuWriteOnContentTypeCodeSet');

    var section = new Triton.Section({
        css : {
            'height': '828px',
            'border': '1px solid rgb(225, 225, 225)',
            'overflow': 'auto'
        }
    });

    this.bodySection = section;
    this.jView = section.get();
    this.jContent = section.get();
    this.initTriton(options);
};


Triton.MenuDetail.prototype.menu = undefined;
Triton.MenuDetail.prototype.getMenu = function () {
    return this.menu;
};

Triton.MenuDetail.prototype.load = function (options) {

    var page = this;

    page.menu = undefined;
    page.bodySection.empty();

    var onLoaded = page.onLoaded = Lia.p(options, 'onLoaded');
    var serviceProviderId = page.serviceProviderId = Lia.p(options, 'serviceProviderId');
    var institutionId = page.institutionId = Lia.p(options, 'institutionId');
    var organizationId = page.departmentIdx = Lia.p(options, 'organizationId');
    var departmentIdx = page.departmentIdx = Lia.p(options, 'departmentIdx');
    var isAvailable = page.isAvailable = Lia.p(options, 'isAvailable');
    var menuId = page.menuId = Lia.p(options, 'menuId');
    var languageTypeCode = page.languageTypeCode = Lia.p(options, 'languageTypeCode');

    page.childList = undefined;

    page.requester.awb(Lia.MenuPage.ApiUrl.GET_MENU_LIST, {

        serviceProviderId: serviceProviderId,
        institutionId : institutionId,
        organizationId: organizationId,

        departmentIdx: departmentIdx,
        parentId: menuId,
        isDeleted: 0,
        includeContent: 1,
        isAvailable: isAvailable,
        languageTypeCode : languageTypeCode

    }, function (status, data) {

        if (status != Lia.Requester.Status.SUCCESS) {
            return;
        }

        page.childList = Lia.p(data, 'body', 'list');
    });

    page.requester.awb(Lia.MenuPage.ApiUrl.GET_MENU, {
        id: menuId
    }, function (status, data) {

        if (status != Lia.Requester.Status.SUCCESS) {
            return;
        }

        page.menu = Lia.p(data, 'body');

        page.detailPageHandler( page.bodySection, page.menu, page.childList );
    });

    page.requester.func(function () {

        page.requester.func(function () {

            if (page.onLoaded != undefined) {
                page.onLoaded(page);
            }

        });
    });
};

Triton.MenuDetail.prototype.editMenu = function () {

    var page = this;

    page.bodySection.empty();

    var menuWrite = new Triton.MenuWrite({
        customFieldList: page.customMenuWriteFieldList,
        contentTypeOptionList: page.menuWriteContentTypeOptionList,
        contentTypeFieldItemMap: page.menuWriteContentTypeFieldItemMap,
        onContentTypeCodeSet: page.menuWriteOnContentTypeCodeSet,

        appendTo: page.bodySection,
        onEdited: function () {
            Lia.refresh();
        },
        onAdded: function () {
            Lia.refresh();
        }
    });

    var menuId = page.menuId;
    menuWrite.load({
        menuId: menuId,
        languageTypeCode : page.languageTypeCode
    });
};

Triton.MenuDetail.prototype.addMenu = function () {

    var page = this;
    page.bodySection.empty();

    var menuWrite = new Triton.MenuWrite({
        customFieldList: page.customMenuWriteFieldList,
        contentTypeOptionList: page.menuWriteContentTypeOptionList,
        contentTypeFieldItemMap: page.menuWriteContentTypeFieldItemMap,
        onContentTypeCodeSet: page.menuWriteOnContentTypeCodeSet,

        appendTo: page.bodySection,
        onEdited: function () {
            Lia.refresh();
        },
        onAdded: function () {
            Lia.refresh();
        }
    });

    var menuId = page.menuId;
    menuWrite.load({
        parentMenuId: menuId,
        languageTypeCode : page.languageTypeCode
    });

};


Triton.MenuDetail.prototype.getMenuId = function () {
    return this.menuId;
};



