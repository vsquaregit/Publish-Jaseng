var ApiUrl = {};

var PageUrl = {};

var Code = {

    SUCCESS : 10000,

    // HTTP
    BAD_REQUEST : 400,
    PAGE_NOT_FOUND: 404,
    INTERNAL_SERVER_ERROR: 500,
    BAD_GATEWAY: 502,

    MALFORMED_USER_PASSWORD: 20002,

    MessageMap: {},

    init: function () {

        Code.MessageMap[Code.SUCCESS] = {title: '성공', message: '요청이 성공적으로 완료되었습니다.'};

        // HTTP
        Code.MessageMap[Code.BAD_REQUEST] = {title: '안내', message: '잘못된 입력이 존재합니다.'};
        Code.MessageMap[Code.PAGE_NOT_FOUND] = {title: '안내', message: '페이지를 찾을 수 없습니다.'};
        Code.MessageMap[Code.INTERNAL_SERVER_ERROR] = {title: '안내', message: '오류가 발생하였습니다.'};
        Code.MessageMap[Code.BAD_GATEWAY] = {title: '안내', message: '서버와 연결상태가 좋지 않습니다.'};
    },

    getMessage: function (value, defaultValues) {

        if (defaultValues == undefined) {
            defaultValues = '에러가 발생하였습니다.' + '(' + value + ')';
        }

        return Lia.pd(defaultValues, Code.MessageMap, value, 'message');
    },
    getMessageByResponse: function (data, defaultValues) {

        var code = Lia.p(data, 'code');
        if (code == undefined)
            code = data;

        return Code.getMessage(code, defaultValues);
    },
    getTitle: function (value, defaultValues) {

        if (defaultValues == undefined) {
            defaultValues = '안내';
        }

        return Lia.pd(defaultValues, Code.MessageMap, value, 'title');
    },
    getTitleByResponse: function (data, defaultValues) {

        var code = Lia.p(data, 'code');
        if (code == undefined)
            code = data;

        return Code.getTitle(code, defaultValues);
    },
    getCodeByResponse: function (response) {

        var code = Lia.p(response, 'code');
        if (code == undefined) {
            code = response;
        }
        return code;
    }
};
Code.init();
