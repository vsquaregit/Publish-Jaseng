// // 상단 카테고리 메뉴
// if (PageConstructor.checkType(PageConstructor.TYPE_1)) {
//
//     PageConstructor.setCategoryMenuShowChecker(function (menu, parameterMap) {
//         return true;
//     });
//
//     var categoryMenuList = BaseCategoryMenuList[roleCode];
//     for (var i = 0, l = categoryMenuList.length; i < l; i++) {
//
//         var menu = categoryMenuList[i];
//         PageConstructor.addCategoryMenu(menu);
//     }
// }
//
// // 퀵메뉴
// if (PageConstructor.checkType(PageConstructor.TYPE_2))
// {
//     var quickMenuList = BaseQuickMenuList[roleCode];
//     if ( quickMenuList != undefined && quickMenuList.length > 0 ) {
//
//         PageConstructor.setHeaderElement(PageConstructor.HEADER_ELEMENT_QUICK_MENU, {});
//
//         for (var i = 0, l = quickMenuList.length; i < l; i++  ) {
//             var item = list[i];
//             PageConstructor.addQuickMenu(item);
//         }
//     }
// }


var pageConstructorType = PageConstructor.TYPE_2;

PageConstructor.init({
    appendTo: $('body'),
    type: pageConstructorType
});
PageConstructor.setMenuShowChecker(function (menu, depth) {
    return true;
});

// PageConstructor.setHeaderElement(PageConstructor.HEADER_ELEMENT_EXIT_BUTTON, {
//     onClick: function () {
//     }
// });

// PageConstructor.setHeaderElement(PageConstructor.HEADER_ELEMENT_MY_PAGE, {
//     onClick: function () {
//     }
// });

PageConstructor.setHeaderElement(PageConstructor.HEADER_ELEMENT_LOGO, {
    logoImageUrl: '/res/lia/document/img/logo.png',
    onClick: function () {
        PageManager.go(['introduction']);
    }
});

PageConstructor.setHeaderElement(PageConstructor.HEADER_ELEMENT_MENU_BUTTON);



{
    var menuList = [
        {
            'text': 'Introduction',
            'menu': ['introduction']
        },

        {
            'text': '기본 UI 프레임워크',
            'menu': ['lia'],
            'subMenuList' : [
                {
                    'text' : 'Structure',
                    'menu': ['lia/structure']
                },
                {
                    'text' : 'UI Component',
                    'menu': ['lia/uicomponent']
                },
                {
                    'text' : 'Network',
                    'menu': ['lia/network']
                },
                {
                    'text' : 'PageManager',
                    'menu': ['lia/pagemanager']
                },
                {
                    'text' : 'AjaxPopupManager',
                    'menu': ['lia/ajaxpopupmanager']
                },
                {
                    'text' : 'Helper Class',
                    'menu': ['lia/helperclass']
                }
            ]
        },

        {
            'text': '관리자 화면 프레임워크',
            'menu': ['triton'],
            'subMenuList' : [
                {
                    'text' : 'Structure',
                    'menu': ['lia/structure']
                },
                {
                    'text' : 'UI Component',
                    'menu': ['triton'],
                    'subMenuList' : [
                        {
                            'text' : '페이지 기본구성',
                            'menu': ['triton'],
                            'subMenuList' : [
                                {
                                    'text' : '전체 페이지 구성',
                                    'menu': ['triton/container']
                                },
                                {
                                    'text' : '페이지 일반 범위 구성',
                                    'menu': ['triton/section']
                                },
                                {
                                    'text' : '카테고리 범위 구성',
                                    'menu': ['triton/categorySection']
                                },
                                {
                                    'text' : '더보기 범위 구성',
                                    'menu': ['triton/moreSection']
                                }
                            ]
                        },
                        {
                            'text' : '타이틀',
                            'menu': ['triton/title']
                        },
                        {
                            'text' : '버튼',
                            'menu': ['triton'],
                            'subMenuList' : [
                                {
                                    'text' : '버튼 범위 구성',
                                    'menu': ['triton/buttonSection']
                                },
                                {
                                    'text' : '기본 버튼',
                                    'menu': ['triton/button']
                                }
                            ]
                        },
                        {
                            'text' : '검색 구성',
                            'menu' : ['triton/searcher']
                        },
                        {
                            'text' : '판넬',
                            'menu' : ['triton'],
                            'subMenuList' : [
                                {
                                    'text' : '기본 판넬',
                                    'menu' : ['triton/panel']
                                },
                                {
                                    'text' : '접을 수 있는 판넬',
                                    'menu' : ['triton/foldablePanel']
                                }
                            ]
                        },
                        {
                            'text' : '테이블',
                            'menu' : ['triton'],
                            'subMenuList' : [
                                {
                                    'text' : '목록형 테이블',
                                    'menu': ['triton/listtable']
                                },
                                {
                                    'text' : '상세 테이블',
                                    'menu': ['triton/detailtable']
                                },
                                {
                                    'text' : '세퍼레이트 테이블',
                                    'menu': ['triton/separatetable']
                                }
                            ]
                        },
                        {
                            'text' : 'KeyValueSection',
                            'menu': ['triton/keyvaluesection']
                        },
                        {
                            'text' : '체크박스',
                            'menu': ['triton/checkbox']
                        },
                        {
                            'text' : '선택박스',
                            'menu': ['triton/combobox']
                        },
                        {
                            'text' : '라디오버튼',
                            'menu': ['triton'],
                            'subMenuList' : [
                                {
                                    'text' : '기본 라디오 버튼',
                                    'menu': ['triton/radiobutton']
                                },
                                {
                                    'text' : '플래그 라디오 버튼',
                                    'menu': ['triton/flagRadioButton']
                                }
                            ]
                        },
                        {
                            'text' : '입력양식',
                            'menu' : ['triton'],
                            'subMenuList' : [
                                {
                                    'text' : '기본 입력 폼',
                                    'menu': ['triton/textInput']
                                },
                                {
                                    'text' : '전화번호 입력 폼',
                                    'menu': ['triton/phoneNumberInput']
                                },
                                {
                                    'text' : '이메일 입력 폼',
                                    'menu': ['triton/emailInput']
                                },
                                {
                                    'text' : '주소 입력 폼',
                                    'menu': ['triton/addressInput']
                                },
                                {
                                    'text' : '장문 입력 폼',
                                    'menu': ['triton/textArea']
                                }
                            ]
                        },
                        {
                            'text' : '텍스트에디터',
                            'menu': ['triton/textEditor']
                        },
                        {
                            'text' : '날짜 입력',
                            'menu' : ['triton'],
                            'subMenuList' : [
                                {
                                    'text' : '기본 날짜 폼',
                                    'menu': ['triton/datetime']
                                },
                                {
                                    'text' : '날짜 기간 폼',
                                    'menu': ['triton/datetimeperiod']
                                }
                            ]
                        },
                        {
                            'text' : '파일 구성',
                            'menu' : ['triton'],
                            'subMenuList' : [
                                {
                                    'text' : '업로더',
                                    'menu': ['triton/uploader']
                                },
                                {
                                    'text' : '썸네일 업로더',
                                    'menu': ['triton/thumbnailUploader']
                                },
                                {
                                    'text' : '파일 정보 양식',
                                    'menu': ['triton/attachmentItem']
                                }
                            ]
                        },
                        {
                            'text' : '이미지 표시',
                            'menu': ['triton/image']
                        },
                        {
                            'text' : '탭 구성',
                            'menu' : ['triton'],
                            'subMenuList' : [
                                {
                                    'text' : '기본 탭',
                                    'menu' : ['triton/tab']
                                },
                                {
                                    'text' : '서브 탭',
                                    'menu' : ['triton/subTab']
                                }
                            ]
                        },
                        {
                            'text' : '페이징',
                            'menu' : ['triton/pager']
                        },
                        {
                            'text' : '스팬',
                            'menu' : ['triton'],
                            'subMenuList' : [
                                {
                                    'text' : '기본 스팬',
                                    'menu' : ['triton/span']
                                },
                                {
                                    'text' : '플래그 스팬',
                                    'menu' : ['triton/flagSpan']
                                }
                            ]
                        },
                        {
                            'text' : '라벨',
                            'menu' : ['triton/label']
                        },
                        {
                            'text' : '컨텍스트 메뉴',
                            'menu' : ['triton/contextMenu']
                        }
                    ]
                },
                // {
                //     'text' : 'Responsive',
                //     'menu': ['triton/responsive']
                // },
                // {
                //     'text' : 'Network',
                //     'menu': ['lia/network']
                // },
                // {
                //     'text' : 'PageManager',
                //     'menu': ['lia/pagemanager']
                // },
                // {
                //     'text' : 'AjaxPopupManager',
                //     'menu': ['lia/ajaxpopupmanager']
                // },
                // {
                //     'text' : 'Helper Class',
                //     'menu': ['lia/helper']
                // }
            ]
        },

        {
            'text': 'Change Log',
            'menu': ['change_log']
        }
    ];

    for (var i = 0, l = menuList.length; i < l; i++) {

        var menu = menuList[i];
        PageConstructor.add(menu);
    }
}

jQuery(window).resize(PageConstructor.resize).resize();

//Requester 관련
var Requester = new jQuery.Requester({

    onRequestStart: function (request) {

        var autoLoading = Lia.p(request, 'object', 'autoLoading');
        if (autoLoading == undefined)
            autoLoading = true;

        if (autoLoading) {

            if (LoadingPopupManager != undefined)
                LoadingPopupManager.show();
        }
    },

    onRequestEnded: function (status, data, request) {

        var autoLoading = Lia.p(request, 'object', 'autoLoading');
        if (autoLoading == undefined)
            autoLoading = true;

        if (autoLoading) {

            if (LoadingPopupManager != undefined)
                LoadingPopupManager.hide();
        }
    },

    responseCheckHandler: function (status, data, request) {

        // 응답 체크하여 결과값 전달
        var code = undefined;
        var error = (status == Requester.Status.ERROR || data == undefined );
        if (!error) {

            if (request['dataType'] == 'json' || request['dataType'] == 'jsonp') {

                code = Lia.p(data, 'code');
                if (code != Code.SUCCESS) {
                    error = true;
                }
            }
        }

        if (error) {

            var autoPopup = Lia.p(request, 'object', 'autoPopup');
            if (autoPopup == undefined)
                autoPopup = true;

            if (autoPopup) {
                PopupManager.alertByResponse(data);
            }

            return jQuery.Requester.Status.ERROR;
        }

        return status;
    }
});
Requester.Status = jQuery.Requester.Status;



Triton.Board.initValues(Triton.SiteType.General);
Triton.Uploader.initValues(Triton.SiteType.General);
Triton.ThumbnailUploader.initValues(Triton.SiteType.General);

var AjaxPopupManager = $.AjaxPopupManager;
AjaxPopupManager.init({

    popupListLayoutSelector: '#popup_layout_list',

    requester : Requester,

    cssLoading: false,      // css 로딩 여부
    htmlLoading: true,      // html 로딩 여부
    jsLoading: true,        // js 로딩 여부

    caching: undefined,     // 파일 받은 뒤로 caching 여부

    // caching 여부 결정 함수
    filePathCachingHandler: function (path, parameterMap, contentType) {
        return true;
    },

    // 최종 파일 경로
    filePathFormatHandler: function (path, parameterMap) {
        return path;
    },

    // css 파일 경로
    cssFilePathFormatHandler: function (path, parameterMap) {
        return '/res/lia/document/popup/' + path + '.css';
    },

    // html 파일 경로
    htmlFilePathFormatHandler: function (path, parameterMap) {
        return '/res/lia/document/popup/' + path + '.html';
    },

    // js 파일 경로
    jsFilePathFormatHandler: function (path, parameterMap) {
        return '/res/lia/document/popup/' + path + '.js';
    }
});


var PageManager = jQuery.PageManager;
PageManager.init({

    requester : Requester,

    // 페이지 이동 전에 체크하여 false 리턴되면  이동하지 않음
    onMoveCheck: function (parameterMap) {

        var m1 = PageManager.getMenuParameter(0, parameterMap);

        // 로그아웃 등의 페이지 이동이 안되는 요청 구현
        if (m1 == 'logout') {
            return false;
        }

        return true;
    },

    // 페이지 파라미터 균일화
    // 파라미터 없을 때 등등 변환해 줘야되는 것 설정
    onNormalizeParameter: function (data) {

        var key = PageManager.getMenuKey(0);
        if (String.isNullOrWhitespace(data[key]))
            data[key] = 'introduction';

        // PageConstructor 파라미터 균일화 함수 호출
        return PageConstructor.onNormalizeParameter(data);
    },

    // 페이지 이동했을 때에 실제 요청할지 안할지 여부
    // true 면 요청하고 false 이면 요청을 하지 않는다.
    onPageCheck: function (parameterMap) {
        return true;
    },

    // 페이지 같은 페이지인지 같은 페이지가 이닌지 체크
    // 페이지 관련된 파라미터가 모두 같을 때 페이지를 다시 로딩할 지 여부
    // true이면 같음 -> 마지막 페이지만 onChange, 아니면 마지막만 다시 로딩
    // ?m1=page1&m2=page2&other=1
    // ?m1=page1&m2=page2&other=2
    onSameCheck: function (parameterMap) {
        return true;
    },

    // 페이지 변하기 직전에
    // beforeDepth : 전 depth
    // baseDepth : 요청 시작 depth
    // depth : 현재 depth
    // requesting : 요청하고 나서 변한건지 아닌지
    onPageChangeStart : function ( beforeDepth, baseDepth, depth, requesting ) {
    },

    // 페이지 요청 끝날 때
    // onPageChangeStart 와 대응
    onPageChangeEnd : function( beforeDepth, baseDepth, depth, requesting ) {
    },

    // 페이지 요청 상태
    onProgress: function (status, parameterMap, beforeParameterMap) {

        if (status == PageManager.Status.START) {
            // 시작
            LoadingPopupManager.show();

            // PageConstructor 현재 페이지 표시
            PageConstructor.mark(parameterMap, beforeParameterMap);

        } else if (status == PageManager.Status.ERROR) {

            // 에러
            LoadingPopupManager.hide();

        } else if (status == PageManager.Status.SUCCESS) {

            // 성공
            LoadingPopupManager.hide();
        }
    },

    // 파일 경로 리턴, path로 던져질 문자열 반환
    filePathFormatHandler: function (path, data, depth) {
        return path;
    },
    // css 파일 경로
    // undefined면 로딩 안함
    cssFilePathFormatHandler: function (path, data, depth) {
        return '/res/lia/document/page/' + path + '.css';
    },
    // html 파일 경로
    // undefined면 로딩 안함
    htmlFilePathFormatHandler: function (path, data, depth) {
        return '/res/lia/document/page/' + path + '.html';
    },
    // ㅓㄴ 파일 경로
    jsFilePathFormatHandler: function (path, data, depth) {
        return '/res/lia/document/page/' + path + '.js';
    },

    // 페이지 공통 초기화 함수
    onPageInit : function ( j ) {



        j.find('.page_title').each(function() {


            var jThis = $(this);
            var content = jThis.attr('triton-content');

            new Triton.Title({
                appendTo : jThis,
                content : content
            });
        });


        j.find('.code_editor_sample_code, .code_editor_sample_view').each(function(){

            var jThis = $(this);

            var filename = jThis.attr('filename');
            var path = '/res/lia/document/page';
            for (var i = 0, l = jQuery.PageManager.getDepth(); i <= l; i++) {

                var menuName = jQuery.PageManager.getMenuParameter(i);
                if (String.isNotBlank(path) && !path.endsWith('/') ) {
                    path += '/';
                }

                path += menuName;
            }
            path += '/' + filename;

            if ( jThis.hasClass('code_editor_sample_code') ) {

                var j = $('<iframe title="code editor" class="code_editor"></iframe>');
                jThis.append(j);
                j.initCodeEditor({
                    'height' : '100%'
                });

                Requester.twb(path, {}, function( status, data, request ){

                    var j = request.object.j;
                    j.codeEditorVal(data);
                }, {
                    j : j,
                    autoLoading : false
                });

            } else if ( jThis.hasClass('code_editor_sample_view') ) {


                var j = $('<iframe title="code editor"></iframe>');
                j.attr('src', '/res/lia/document/sample/base.html');
                jThis.append(j);

                Requester.twb(path, {}, function( status, data, request ){

                    var j = request.object.j;
                    var dom = j.get(0);

                    var iframe = dom.contentWindow || dom.contentDocument;
                    try {
                        iframe.setData(data);
                    } catch (e) {

                        window.setTimeout(function(){
                            iframe.setData(data);
                        }, 500);
                    }

                }, {
                    j : j,
                    autoLoading : false
                });

            }

        });







    },

    // 페이지 공통 릴리즈 함수
    onPageRelease : function( j ) {
    },

    // 페이지 추가할 때 함수
    onPageAdd: function (jPage, jPageContainer, depth) {
        jPageContainer.append(jPage);
    },
    // 페이지 삭제할 때 함수
    onPageRemove: function (jPage, jPageContainer, depth) {
        jPageContainer.empty();
    },

    ajaxQSync : false, // ajax 요청시 sync 여부
    ajaxQCssMethod : 'get', // css 파일 ajax 요청 시 method
    ajaxQJsMethod : 'get', // js 파일 ajax 요청 시 method
    ajaxQHtmlMethod : 'get', // html 파일 ajax 요청 시 method

    cssLoading : false, // css 로딩 여부
    htmlLoading : true, // html 로딩 여부
    jsLoading : true, // js 로딩 여부
    parameterPostfixAdding: true, // 낮은 브라우져 호환성 위해 true로 설정, postfix 붙임
    title: 'VSQUARE', // 타이틀

    // 페이지 파라미터 리스트
    pageParameterNameList: [
        'm1', 'm2', 'm3', 'm4'
    ],
    // 페이지 구분 셀렉터
    pageContainerSelectorList: [
        '.page1', '.page2', '.page3', '.page4'
    ]
});


