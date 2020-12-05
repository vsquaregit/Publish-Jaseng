(function () {

    return {

        cssLoading: false,
        htmlLoading: false,

        onConstruct: function (jLayout, path, object, jPopupListLayout) {

            var popup = this;

            PopupHelper.appendLayout(popup, {
                title: '게시판 게시 설정',
                css: {width: '400px'}
            });
        },

        onInit: function (jLayout, path, object, jPopupListLayout) {

            var popup = this;
            var jContent = popup.find('.popup_content');
            jContent.css({'font-family': 'notokr-regular, NanumGothic'});

            var textSection = new Triton.Section({
                appendTo : jContent,
                css : {'margin-top' : '42px'}
            });

            new Triton.Span({
                appendTo : textSection,
                content : '<strong>선택한 게시물의 게시 여부를 변경하시겠습니까?</strong>'
            });

            var radioSection = new Triton.Section({
                appendTo : jContent,
                css : {'margin-top' : '20px', 'margin-left' : '50px'}
            });

            new Triton.RadioButtonSection({
                appendTo : radioSection,
                radioButtonTheme: Triton.RadioButton.Theme.Line,
                form: {name: 'isAvailable'},
                selectedValue : 1,
                optionList: [
                    {
                        value: 1,
                        name: '<strong style="color: #0000FF">게시</strong>'
                    },
                    {
                        value: 0,
                        name: '<strong style="color: #FF0000">비게시</strong>'
                    }
                ]
            });

            var buttonSection = new Triton.ButtonSection({
                appendTo : jContent,
                css : {'margin-top' : '20px'}
            });

            new Triton.FlatButton({
                appendTo : buttonSection,
                content : '확인',
                popup : popup,
                onClick : function (e) {

                    var popup = e.data.popup;
                    var dataMap = Triton.extractFormData(popup.get());

                    var rowList = Lia.p(object, 'rowList');
                    var url = Lia.p(object, 'url');
                    var isAvailable = dataMap['isAvailable'];
                    var boardList = Lia.p(object, 'boardList');

                    if (String.isBlank(isAvailable) ) {
                        PopupManager.alert('확인', '변경할 글의 상태를 선택해주세요.');
                        return;
                    }

                    if (isAvailable == 1) {

                        PopupManager.alert('변경', '글의 게시 상태를 <span style="color: #0000ff">게시</span>로 변경하시겠습니까?', function (object) {

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

                        }, function (object) {
                        }, '확인', '취소', {});

                    } else {

                        PopupManager.alert('변경', '글의 게시 상태를 <span style="color: #FF0000">비게시</span>로 변경하시겠습니까?', function (object) {

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

                        }, function (object) {
                        }, '확인', '취소', {});
                    }

                }
            });

            new Triton.FlatButton({
                appendTo : buttonSection,
                content : '취소',
                theme : Triton.FlatButton.Theme.Delete,
                css : {'margin-left' : '10px'},
                onClick : function () {
                    popup.hide();
                }
            });

        },
        onShow: function (jLayout, path, parameterMap, jPopupListLayout) {
        },
        onHide: function (jLayout, path, parameterMap, jPopupListLayout) {
        }
    };
})();

