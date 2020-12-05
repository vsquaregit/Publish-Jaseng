if (typeof TritonTheme == "undefined") {

    var TritonTheme = {
        BACKGROUND_COLOR: '#ffffff',
        TEXT_COLOR: '#5d5d5d',
        BORDER_COLOR: '#d7d7d5',

        POPUP_BACKGROUND_COLOR: '#ffffff',
        POPUP_TEXT_COLOR: '#575757',
        POPUP_TITLE_BACKGROUND_COLOR: '#17539d',
        POPUP_TITLE_TEXT_COLOR: '#FFFFFF',
        POPUP_CLOSE_BUTTON_IMAGE_URL: '/res/lia/triton/img/img_alert_popup_close.png',
        POPUP_CONFIRM_BUTTON_BORDER_COLOR: '#084897',
        POPUP_CONFIRM_BUTTON_HOVERING_BORDER_COLOR: '#084897',
        POPUP_CONFIRM_BUTTON_TEXT_COLOR: '#084897',
        POPUP_CONFIRM_BUTTON_HOVERING_TEXT_COLOR: '#084897',
        POPUP_CONFIRM_BUTTON_BACKGROUND_COLOR: '#ffffff',
        POPUP_CONFIRM_BUTTON_HOVERING_BACKGROUND_COLOR: '#f2f6fa',
        POPUP_CANCEL_BUTTON_BORDER_COLOR: '#ec4c4c',
        POPUP_CANCEL_BUTTON_HOVERING_BORDER_COLOR: '#ec4c4c',
        POPUP_CANCEL_BUTTON_TEXT_COLOR: '#ec4c4c',
        POPUP_CANCEL_BUTTON_HOVERING_TEXT_COLOR: '#ec4c4c',
        POPUP_CANCEL_BUTTON_BACKGROUND_COLOR: '#ffffff',
        POPUP_CANCEL_BUTTON_HOVERING_BACKGROUND_COLOR: '#faf2f2',

        LIST_TABLE_BORDER_COLOR: '#e1e1e1',
        LIST_TABLE_TEXT_COLOR: '#5d5d5d',
        LIST_TABLE_BACKGROUND_COLOR: '#ffffff',
        LIST_TABLE_HOVERING_TEXT_COLOR: '#5d5d5d',
        LIST_TABLE_HOVERING_BACKGROUND_COLOR: '#f7f7f7',
        LIST_TABLE_HEADER_BACKGROUND_COLOR: '#ffffff',
        LIST_TABLE_HEADER_TEXT_COLOR: '#084897',

        LIST_TABLE_HIGH_TEXT_COLOR: '#5d5d5d',
        LIST_TABLE_HIGH_BACKGROUND_COLOR: '#edf7fe',
        LIST_TABLE_ALWAYS_ON_TOP_TEXT_COLOR: '#5d5d5d',
        LIST_TABLE_ALWAYS_ON_TOP_BACKGROUND_COLOR: 'rgb(248, 248, 248)',
        LIST_TABLE_ALWAYS_ON_TOP_HOVERING_TEXT_COLOR: '#084897',
        LIST_TABLE_SELECTED_TEXT_COLOR: '#084897',
        LIST_TABLE_SELECTED_BACKGROUND_COLOR: '#f7f7f7',
        LIST_TABLE_DIVISION_TEXT_COLOR: '#084897',
        LIST_TABLE_DIVISION_BACKGROUND_COLOR: '#f7f7f7',

        DETAIL_TABLE_BORDER_COLOR: '#e1e1e1',
        DETAIL_TABLE_BACKGROUND_COLOR: '#ffffff',
        DETAIL_TABLE_TEXT_COLOR: '#5d5d5d',
        DETAIL_TABLE_POINT_BACKGROUND_COLOR: '#f2f6fa',
        DETAIL_TABLE_POINT_TEXT_COLOR: '#084897',

        PANEL_BORDER_COLOR: '#084897',

        TITLE_POINT_COLOR: '#084897',
        TITLE_TEXT_COLOR: '#5d5d5d',

        SUB_TITLE_TEXT_COLOR: 'rgb(8, 72, 151)',

        HEADER_MENU_BUTTON_DEFAULT_FONT_COLOR: '#7a7a7a',
        HEADER_MENU_BUTTON_HOVERING_FONT_COLOR: '#606060',
        HEADER_MENU_BUTTON_PRESSED_FONT_COLOR: '#253a73',
        HEADER_MENU_BUTTON_INVERSE_FONT_COLOR: '#ffffff',

        TOP_DROP_DOWN_MENU_STATUS_BACKGROUND_COLOR: '#e8e8e8',
        TOP_DROP_DOWN_MENU_STATUS_CLOCK_BACKGROUND_COLOR: '#606060',
        TOP_DROP_DOWN_MENU_STATUS_CLOCK_COLOR: '#ffffff',

        TOP_DROP_DOWN_MENU_BORDER_COLOR: '#e6e6e6',
        TOP_DROP_DOWN_MENU_TAB_CONTAINER_BACKGROUND_COLOR: '#e6e6e6',
        TOP_DROP_DOWN_MENU_PANEL_BORDER_COLOR: '#cecece',
        TOP_DROP_DOWN_MENU_TEXT_COLOR: '#000000',
        TOP_DROP_DOWN_MENU_ALARM_SUB_TITLE_TEXT_COLOR: '#666666',
        TOP_DROP_DOWN_MENU_TAB_BACKGROUND_COLOR: '#ebebeb',
        TOP_DROP_DOWN_MENU_TAB_SELECTED_BACKGROUND_COLOR: '#ffffff',
        TOP_DROP_DOWN_MENU_TAB_BORDER_COLOR: '#d1d1d1',
        TOP_DROP_DOWN_MENU_MENU_ITEM_SELECTED_BACKGROUND_COLOR: '#e9eef6',
        TOP_DROP_DOWN_MENU_QUICK_MENU_ITEM_SELECTED_BACKGROUND_COLOR: '#e9eef6',
        TOP_DROP_DOWN_MENU_ALARM_BUTTON_IMAGE_URL: '/res/lia/triton/img/menu_topdropdown/btn_notice.png',
        TOP_DROP_DOWN_MENU_ALARM_NOTICE_BACKGROUND_COLOR: '#d85460',
        TOP_DROP_DOWN_MENU_ALARM_NOTICE_BUTTON_IMAGE_URL: '/res/lia/triton/img/menu_topdropdown/btn_notice_alaram.png',
        TOP_DROP_DOWN_MENU_ALARM_POINT_IMAGE_URL: '/res/lia/triton/img/menu_topdropdown/btn_notice_point.png',
        TOP_DROP_DOWN_MENU_QUICK_MENU_BUTTON_IMAGE_URL: '/res/lia/triton/img/menu_topdropdown/btn_quickmenu.png',
        TOP_DROP_DOWN_MENU_MENU_BUTTON_IMAGE_URL: '/res/lia/triton/img/menu_topdropdown/btn_menu.png',
        TOP_DROP_DOWN_MENU_ICON_BUTTON_IMAGE_URL: '/res/lia/triton/img/menu_topdropdown/btn_menu_icon.png',
        TOP_DROP_DOWN_MENU_BACK_BUTTON_IMAGE_URL: '/res/lia/triton/img/menu_topdropdown/btn_back.png',
        TOP_DROP_DOWN_MENU_MENU_MORE_BUTTON_IMAGE_URL: '/res/lia/triton/img/menu_topdropdown/btn_header_more.png',
        TOP_DROP_DOWN_MENU_ARROW_IMAGE_URL: '/res/lia/triton/img/menu_topdropdown/img_arrow.png',
        TOP_DROP_DOWN_MENU_TAB_CLOSE_BUTTON_IMAGE_URL: '/res/lia/triton/img/menu_topdropdown/btn_tabclose.png',
        TOP_DROP_DOWN_MENU_MOBILE_1DEPTH_DOWN_ARROW_IMAGE_URL: '/res/lia/triton/img/menu_topdropdown/arr_menu_1depth_down.png',
        TOP_DROP_DOWN_MENU_1DEPTH_DOWN_ARROW_IMAGE_URL: '/res/lia/triton/img/menu_topdropdown/btn_arr_menu.png',
        TOP_DROP_DOWN_MENU_1DEPTH_DOWN_ARROW_SELECTED_IMAGE_URL: undefined,
        TOP_DROP_DOWN_MENU_TAB_LEFT_ARROW_BUTTON_IMAGE_URL: '/res/lia/triton/img/menu_topdropdown/btn_tabarr_left.png',
        TOP_DROP_DOWN_MENU_TAB_RIGHT_ARROW_BUTTON_IMAGE_URL: '/res/lia/triton/img/menu_topdropdown/btn_tabarr_right.png',

        SIDE_DROP_DOWN_MENU_PANEL_WIDTH_DEFAULT: '220px',
        SIDE_DROP_DOWN_MENU_STATUS_CLOCK_COLOR: '#ffffff',
        SIDE_DROP_DOWN_MENU_PANEL_BACKGROUND_COLOR: '#ffffff',
        SIDE_DROP_DOWN_MENU_PANEL_LINE_COLOR: 'rgb(230, 230, 230)',
        SIDE_DROP_DOWN_MENU_PANEL_DEPTH_2_BACKGROUND_COLOR: '#f2f6fa',
        SIDE_DROP_DOWN_MENU_PANEL_DEPTH_3_BACKGROUND_COLOR: '#ffffff',
        SIDE_DROP_DOWN_MENU_PANEL_DEPTH_4_BACKGROUND_COLOR: 'rgba(242, 246, 250, 0.8)',
        SIDE_DROP_DOWN_MENU_PANEL_TEXT_COLOR: '#696969',
        SIDE_DROP_DOWN_MENU_PANEL_SELECTED_BACKGROUND_COLOR: '#003679',
        SIDE_DROP_DOWN_MENU_PANEL_DEPTH_1_SELECTED_TEXT_COLOR: '#ffffff',
        SIDE_DROP_DOWN_MENU_PANEL_SELECTED_TEXT_COLOR: '#003679',
        SIDE_DROP_DOWN_MENU_MENU_BUTTON_IMAGE_URL: '/res/lia/triton/img/menu_sidedropdown/btn_menu.png',
        SIDE_DROP_DOWN_MENU_PANEL_2_DOWN_ARROW_IMAGE_URL: '/res/lia/triton/img/menu_sidedropdown/btn_menu_more.png',
        SIDE_DROP_DOWN_MENU_PANEL_2_DOWN_ARROW_SELECTED_IMAGE_URL: '/res/lia/triton/img/menu_sidedropdown/btn_menu_more_pressed.png',
        SIDE_DROP_DOWN_MENU_PANEL_3_DOWN_ARROW_IMAGE_URL: '/res/lia/triton/img/menu_sidedropdown/btn_menu_more.png',
        SIDE_DROP_DOWN_MENU_PANEL_3_DOWN_ARROW_SELECTED_IMAGE_URL: '/res/lia/triton/img/menu_sidedropdown/btn_menu_more_pressed.png',


        // SIDE_DROP_DOWN_MENU_PANEL_WIDTH_DEFAULT : '220px',
        // SIDE_DROP_DOWN_MENU_STATUS_CLOCK_COLOR: '#ffffff',
        // SIDE_DROP_DOWN_MENU_PANEL_LINE_COLOR: '#333333',
        // SIDE_DROP_DOWN_MENU_PANEL_BACKGROUND_COLOR: '#333333',
        // SIDE_DROP_DOWN_MENU_PANEL_DEPTH_2_BACKGROUND_COLOR: '#2c2b2b',
        // SIDE_DROP_DOWN_MENU_PANEL_DEPTH_3_BACKGROUND_COLOR: '#222222',
        // SIDE_DROP_DOWN_MENU_PANEL_TEXT_COLOR: '#aaaaaa',
        // SIDE_DROP_DOWN_MENU_PANEL_SELECTED_BACKGROUND_COLOR: '#222222',
        // SIDE_DROP_DOWN_MENU_PANEL_DEPTH_1_SELECTED_TEXT_COLOR: '#ffffff',
        // SIDE_DROP_DOWN_MENU_PANEL_SELECTED_TEXT_COLOR: '#ffffff',
        // SIDE_DROP_DOWN_MENU_MENU_BUTTON_IMAGE_URL: '/res/lia/triton/img/menu_sidedropdown_gray/btn_menu.png',
        // SIDE_DROP_DOWN_MENU_PANEL_2_DOWN_ARROW_IMAGE_URL: '/res/lia/triton/img/menu_sidedropdown_gray/btn_menu_more.png',
        // SIDE_DROP_DOWN_MENU_PANEL_2_DOWN_ARROW_SELECTED_IMAGE_URL: '/res/lia/triton/img/menu_sidedropdown_gray/btn_menu_more_pressed.png',

        SIDE_DROP_DOWN_MENU_STATUS_BACKGROUND_COLOR: '#e8e8e8',
        SIDE_DROP_DOWN_MENU_STATUS_CLOCK_BACKGROUND_COLOR: '#606060',
        SIDE_DROP_DOWN_MENU_PANEL_1_DOWN_ARROW_IMAGE_URL: '/res/lia/triton/img/menu_sidedropdown/arr_menu_down.png',
        SIDE_DROP_DOWN_MENU_PANEL_1_DOWN_ARROW_SELECTED_IMAGE_URL: '/res/lia/triton/img/menu_sidedropdown/arr_menu_up.png',
        SIDE_DROP_DOWN_MENU_MOBILE_1DEPTH_DOWN_ARROW_IMAGE_URL: '/res/lia/triton/img/menu_sidedropdown/arr_menu_1depth_down.png',
        SIDE_DROP_DOWN_MENU_TEXT_COLOR: '#000000',
        SIDE_DROP_DOWN_MENU_BORDER_COLOR: '#e6e6e6',
        SIDE_DROP_DOWN_MENU_TAB_CONTAINER_BACKGROUND_COLOR: '#e6e6e6',
        SIDE_DROP_DOWN_MENU_PANEL_BORDER_COLOR: '#cecece',
        SIDE_DROP_DOWN_MENU_ALARM_SUB_TITLE_TEXT_COLOR: '#666666',
        SIDE_DROP_DOWN_MENU_TAB_BACKGROUND_COLOR: '#ebebeb',
        SIDE_DROP_DOWN_MENU_TAB_SELECTED_BACKGROUND_COLOR: '#ffffff',
        SIDE_DROP_DOWN_MENU_TAB_BORDER_COLOR: '#d1d1d1',
        SIDE_DROP_DOWN_MENU_QUICK_MENU_ITEM_SELECTED_BACKGROUND_COLOR: '#e9eef6',
        SIDE_DROP_DOWN_MENU_ALARM_BUTTON_IMAGE_URL: '/res/lia/triton/img/menu_topdropdown/btn_notice.png',
        SIDE_DROP_DOWN_MENU_ALARM_NOTICE_BACKGROUND_COLOR: '#d85460',
        SIDE_DROP_DOWN_MENU_ALARM_NOTICE_BUTTON_IMAGE_URL: '/res/lia/triton/img/menu_topdropdown/btn_notice_alaram.png',
        SIDE_DROP_DOWN_MENU_ALARM_POINT_IMAGE_URL: '/res/lia/triton/img/menu_topdropdown/btn_notice_point.png',
        SIDE_DROP_DOWN_MENU_QUICK_MENU_BUTTON_IMAGE_URL: '/res/lia/triton/img/menu_topdropdown/btn_quickmenu.png',
        SIDE_DROP_DOWN_MENU_ICON_BUTTON_IMAGE_URL: '/res/lia/triton/img/menu_topdropdown/btn_menu_icon.png',
        SIDE_DROP_DOWN_MENU_BACK_BUTTON_IMAGE_URL: '/res/lia/triton/img/menu_topdropdown/btn_back.png',
        SIDE_DROP_DOWN_MENU_MENU_MORE_BUTTON_IMAGE_URL: '/res/lia/triton/img/menu_topdropdown/btn_header_more.png',
        SIDE_DROP_DOWN_MENU_ARROW_IMAGE_URL: '/res/lia/triton/img/menu_topdropdown/img_arrow.png',
        SIDE_DROP_DOWN_MENU_TAB_CLOSE_BUTTON_IMAGE_URL: '/res/lia/triton/img/menu_topdropdown/btn_tabclose.png',
        SIDE_DROP_DOWN_MENU_TAB_LEFT_ARROW_BUTTON_IMAGE_URL: '/res/lia/triton/img/menu_topdropdown/btn_tabarr_left.png',
        SIDE_DROP_DOWN_MENU_TAB_RIGHT_ARROW_BUTTON_IMAGE_URL: '/res/lia/triton/img/menu_topdropdown/btn_tabarr_right.png',

        CHECK_BOX_NORMAL_IMAGE_URL: '/res/lia/triton/img/checkbox.png',
        CHECK_BOX_PRESSED_IMAGE_URL: '/res/lia/triton/img/checkbox_pressed.png',
        CHECK_BOX_INACTIVE_IMAGE_URL: '/res/lia/triton/img/checkbox_inactive.png',
        CHECK_BOX_PRESSED_INACTIVE_IMAGE_URL: '/res/lia/triton/img/checkbox_pressed_inactive.png',
        CHECK_BOX_TOGGLE_IMAGE_URL: '/res/lia/triton/img/toggle.jpg',
        CHECK_BOX_TOGGLE_PRESSED_IMAGE_URL: '/res/lia/triton/img/toggle_pressed.jpg',

        SECTION_BORDER: '#e1e1e1',

        COMBO_BOX_BACKGROUND_COLOR: '#ffffff',
        COMBO_BOX_BORDER_COLOR: '#d7d7d5',
        COMBO_BOX_TEXT_COLOR: '#5d5d5d',
        COMBO_BOX_ARROW_COLOR: '#b0aaa8',
        COMBO_BOX_DISABLED_BACKGROUND_COLOR: 'rgb(235, 235, 228)',
        COMBO_BOX_DISABLED_BORDER_COLOR: '#d7d7d5',
        COMBO_BOX_DISABLED_TEXT_COLOR: '#5d5d5d',
        COMBO_BOX_DISABLED_ARROW_COLOR: '#5d5d5d',
        COMBO_BOX_CATEGORY_BACKGROUND_COLOR: '#ffffff',
        COMBO_BOX_CATEGORY_BORDER_COLOR: '#084897',
        COMBO_BOX_CATEGORY_TEXT_COLOR: '#084897',
        COMBO_BOX_CATEGORY_ARROW_COLOR: '#084897',
        COMBO_BOX_SUB_MENU_TITLE_BACKGROUND_COLOR: '#FFFFFF',
        COMBO_BOX_SUB_MENU_TITLE_TEXT_COLOR: '#003679',
        COMBO_BOX_SUB_MENU_TITLE_ARROW_COLOR: '#003679',

        TEXT_INPUT_BACKGROUND_COLOR: '#ffffff',
        TEXT_INPUT_TEXT_COLOR: '#5d5d5d',
        TEXT_INPUT_BORDER_COLOR: '#d7d7d5',

        TEXT_INPUT_DISABLED_BACKGROUND_COLOR: 'rgb(235, 235, 228)',
        TEXT_INPUT_DISABLED_TEXT_COLOR: 'rgb(93, 93, 93)',
        TEXT_INPUT_DISABLED_BORDER_COLOR: '#cccccc',

        SUB_MENU_TITLE_BACKGROUND: '#003679',
        SUB_MENU_BACKGROUND: '#003679',
        SUB_MENU_TEXT_COLOR: '#ffffff',
        SUB_MENU_BORDER_COLOR: '#e1e1e1',
        SUB_MENU_ITEM_BACKGROUND_COLOR: '#ffffff',
        SUB_MENU_ITEM_TEXT_COLOR: '#5d5d5d',
        SUB_MENU_ITEM_PRESSED_BACKGROUND_COLOR: '#f2f6fa',
        SUB_MENU_ITEM_PRESSED_TEXT_COLOR: '#084897',
        SUB_MENU_ITEM_SUB_LIST_BACKGROUND: '#ffffff',
        SUB_MENU_ITEM_SUB_LIST_PRESSED_BACKGROUND: '#f2f6fa',
        // 이미지 필요
        SUB_MENU_FLAG_OPEN_IMAGE_URL: '/res/lia/triton/img/img_submenu_open.png',
        SUB_MENU_FLAG_CLOSE_IMAGE_URL: '/res/lia/triton/img/img_submenu_close.png',
        SUB_MENU_MARK_IMAGE_URL: '/res/lia/triton/img/img_submenu_mark.png',

        FLAT_BUTTON_NORMAL_BACKGROUND_COLOR: '#ffffff',
        FLAT_BUTTON_NORMAL_HOVER_BACKGROUND_COLOR: '#f7f7f7',
        FLAT_BUTTON_NORMAL_TEXT_COLOR: '#084897',
        FLAT_BUTTON_NORMAL_HOVER_TEXT_COLOR: '#084897',
        FLAT_BUTTON_NORMAL_BORDER_COLOR: '#084897',
        FLAT_BUTTON_NORMAL_HOVER_BORDER_COLOR: '#084897',
        FLAT_BUTTON_DELETE_BACKGROUND_COLOR: '#ffffff',
        FLAT_BUTTON_DELETE_HOVER_BACKGROUND_COLOR: '#f7f7f7',
        FLAT_BUTTON_DELETE_TEXT_COLOR: '#ec4c4c',
        FLAT_BUTTON_DELETE_HOVER_TEXT_COLOR: '#ec4c4c',
        FLAT_BUTTON_DELETE_BORDER_COLOR: '#ec4c4c',
        FLAT_BUTTON_DELETE_HOVER_BORDER_COLOR: '#ec4c4c',
        FLAT_BUTTON_SHADE_BACKGROUND_COLOR: '#ffffff',
        FLAT_BUTTON_SHADE_HOVER_BACKGROUND_COLOR: '#f7f7f7',
        FLAT_BUTTON_SHADE_TEXT_COLOR: '#9a9a9a',
        FLAT_BUTTON_SHADE_HOVER_TEXT_COLOR: '#9a9a9a',
        FLAT_BUTTON_SHADE_BORDER_COLOR: '#9a9a9a',
        FLAT_BUTTON_SHADE_HOVER_BORDER_COLOR: '#9a9a9a',

        FLAT_BUTTON_SHADE_LIGHT_BACKGROUND_COLOR: '#ffffff',
        FLAT_BUTTON_SHADE_LIGHT_HOVER_BACKGROUND_COLOR: '#f7f7f7',
        FLAT_BUTTON_SHADE_LIGHT_TEXT_COLOR: '#5d5d5d',
        FLAT_BUTTON_SHADE_LIGHT_HOVER_TEXT_COLOR: '#5d5d5d',
        FLAT_BUTTON_SHADE_LIGHT_BORDER_COLOR: '#d7d7d5',
        FLAT_BUTTON_SHADE_LIGHT_HOVER_BORDER_COLOR: '#d7d7d5',

        FLAT_BUTTON_SQUARE_BACKGROUND_COLOR: '#ffffff',
        FLAT_BUTTON_SQUARE_HOVER_BACKGROUND_COLOR: '#f7f7f7',
        FLAT_BUTTON_SQUARE_TEXT_COLOR: '#b0aaa8',
        FLAT_BUTTON_SQUARE_HOVER_TEXT_COLOR: '#b0aaa8',
        FLAT_BUTTON_SQUARE_BORDER_COLOR: '#d7d7d5',
        FLAT_BUTTON_SQUARE_HOVER_BORDER_COLOR: '#d7d7d5',
        FLAT_BUTTON_SEARCH_BACKGROUND_COLOR: '#ffffff',
        FLAT_BUTTON_SEARCH_HOVER_BACKGROUND_COLOR: '#f7f7f7',
        FLAT_BUTTON_SEARCH_TEXT_COLOR: '#b1b1b1',
        FLAT_BUTTON_SEARCH_HOVER_TEXT_COLOR: '#b1b1b1',
        FLAT_BUTTON_SEARCH_BORDER_COLOR: '#d7d7d5',
        FLAT_BUTTON_SEARCH_HOVER_BORDER_COLOR: '#d7d7d5',
        FLAT_BUTTON_SEARCH_ICON_IMAGE_URL: '/res/lia/triton/img/img_search.png',
        FLAT_BUTTON_EXCEL_ICON_IMAGE_URL: '/res/lia/triton/img/img_exceldown.png',
        FLAT_BUTTON_REFRESH_ICON_IMAGE_URL: '/res/lia/triton/img/img_restore.png',
        FLAT_BUTTON_EDIT_SMALL_ICON_IMAGE_URL: '/res/lia/triton/img/img_small_edit.png',
        FLAT_BUTTON_EDIT_SMALL_BLUE_ICON_IMAGE_URL: '/res/lia/triton/img/img_small_edit_blue.png',
        FLAT_BUTTON_INQUIRY_SMALL_ICON_IMAGE_URL: '/res/lia/triton/img/img_small_list_view.png',
        FLAT_BUTTON_DELETE_SMALL_ICON_IMAGE_URL: '/res/lia/triton/img/img_small_x_red.png',
        FLAT_BUTTON_DELETE_SMALL_GRAY_ICON_IMAGE_URL: '/res/lia/triton/img/img_small_x_gray.png',

        DATETIME_PICKER_BORDER_COLOR: '#d7d7d5',
        DATETIME_PICKER_BACKGROUND_COLOR: '#ffffff',
        DATETIME_PICKER_HOVERING_BACKGROUND_COLOR: '#f7f7f7',
        DATETIME_PICKER_TEXT_COLOR: '#5d5d5d',
        DATETIME_PICKER_DELETE_IMAGE_URL: '/res/lia/triton/img/img_file_delete.png',
        DATETIME_PICKER_CALENDAR_IMAGE_URL: '/res/lia/triton/img/img_calendar.png',
        DATETIME_PICKER_CALENDAR_PRESSED_IMAGE_URL: undefined,

        DATETIME_PICKER_DISABLED_BACKGROUND_COLOR: 'rgb(235, 235, 228)',
        DATETIME_PICKER_DISABLED_TEXT_COLOR: 'rgb(93, 93, 93)',
        DATETIME_PICKER_DISABLED_BORDER_COLOR: '#cccccc',

        RADIO_BUTTON_NORMAL_IMAGE_URL: '/res/lia/triton/img/radiobtn.png',
        RADIO_BUTTON_PRESSED_IMAGE_URL: '/res/lia/triton/img/radiobtn_pressed.png',
        RADIO_BUTTON_INACTIVE_IMAGE_URL: '/res/lia/triton/img/radiobtn_inactive.png',

        PAGER_BACKGROUND_COLOR: '#ffffff',
        PAGER_PRESSED_BACKGROUND_COLOR: '#f7f7f7',
        PAGER_BORDER_COLOR: '#e5e5e5',
        PAGER_TEXT_COLOR: '#666666',
        PAGER_PRESSED_TEXT_COLOR: '#084897',
        PAGER_ARROW_FIRST_IMAGE_URL: '/res/lia/triton/img/img_arrow_first.png',
        PAGER_ARROW_FIRST_PRESSED_IMAGE_URL: '/res/lia/triton/img/img_arrow_first_pressed.png',
        PAGER_ARROW_LAST_IMAGE_URL: '/res/lia/triton/img/img_arrow_last.png',
        PAGER_ARROW_LAST_PRESSED_IMAGE_URL: '/res/lia/triton/img/img_arrow_last_pressed.png',
        PAGER_ARROW_PREV_IMAGE_URL: '/res/lia/triton/img/img_arrow_prev.png',
        PAGER_ARROW_PREV_PRESSED_IMAGE_URL: '/res/lia/triton/img/img_arrow_prev_pressed.png',
        PAGER_ARROW_NEXT_IMAGE_URL: '/res/lia/triton/img/img_arrow_next.png',
        PAGER_ARROW_NEXT_PRESSED_IMAGE_URL: '/res/lia/triton/img/img_arrow_next_pressed.png',

        SEARCH_BACKGROUND_COLOR: '#ffffff',
        SEARCH_TEXT_COLOR: '#5d5d5d',
        SEARCH_BORDER_COLOR: '#d7d7d5',
        SEARCH_ARROW_COLOR: '#d7d7d5',
        SEARCH_ICON_IMAGE_URL: '/res/lia/triton/img/btn_search.png',
        SEARCH_CATEGORY_BACKGROUND_COLOR: '#ffffff',
        SEARCH_CATEGORY_BORDER_COLOR: '#d7d7d5',
        SEARCH_CATEGORY_TEXT_COLOR: '#5d5d5d',
        SEARCH_CATEGORY_ARROW_COLOR: '#5d5d5d',

        UPLOADER_BORDER_COLOR: '#d7d7d5',
        UPLOADER_BACKGROUND_COLOR: '#ffffff',
        UPLOADER_HOVERING_BACKGROUND_COLOR: '#f7f7f7',
        UPLOADER_TEXT_COLOR: '#999999',
        UPLOADER_HOVERING_TEXT_COLOR: '#999999',
        UPLOADER_FILE_ITEM_TEXT_COLOR: '#5d5d5d',
        UPLOADER_FILE_ICON_IMAGE_URL: '/res/lia/triton/img/img_file.png',
        UPLOADER_FILE_ITEM_DELETE_IMAGE_URL: '/res/lia/triton/img/img_file_delete.png',
        UPLOADER_FILE_ITEM_ICON_IMAGE_URL: '/res/lia/triton/img/img_file.png',
        UPLOADER_THUMBNAIL_ICON_IMAGE_URL: '/res/lia/triton/img/img_file_icon.png',
        UPLOADER_THUMBNAIL_DELETE_IMAGE_URL: '/res/lia/triton/img/img_small_x_red.png',

        TEXT_AREA_BACKGROUND_COLOR: '#ffffff',
        TEXT_AREA_TEXT_COLOR: '#5d5d5d',
        TEXT_AREA_BORDER_COLOR: '#d7d7d5',

        LOADING_IMAGE_URL: '/res/lia/triton/img/loading_bar_2/img_{index}.png',
        LOADING_IMAGE_START_INDEX: 1,
        LOADING_IMAGE_END_INDEX: 8,

        init: function () {
        }
    };
}
TritonTheme.init();


var Triton = function (options) {
    this.jView = undefined;
    this.jContent = undefined;
};

Triton.PopupUrl = {
    RADIO_SELECT: 'lia/triton/popup/radio_select',
    COMBO_BOX: 'lia/triton/popup/combo_box',
    BOARD_AVAILABLE_RADIO: 'lia/triton/popup/board_available_radio'
};

Triton.prototype.initTriton = function (options) {

    this.options = options;

    var jAppendTo = Lia.p(options, 'jAppendTo');
    if (jAppendTo != undefined) {
        this.appendTo(jAppendTo);
    }

    var appendTo = Lia.p(options, 'appendTo');
    if (appendTo != undefined) {
        this.appendTo(appendTo);
    }

    this.jView.data('triton-instance', this);
};

Triton.prototype.MODULE_NAME = 'TRITON';
Triton.prototype.getJView = Triton.prototype.get = function () {
    return this.jView;
};
Triton.prototype.getOptions = function () {
    return this.options;
};

Triton.prototype.append = function (item) {
    var j = Triton.get(item);
    this.jContent.append(j);
    return this;
};
Triton.prototype.after = function (item) {
    var j = Triton.get(item);
    this.jView.after(j);
    return this;
};
Triton.prototype.before = function (item) {
    var j = Triton.get(item);
    this.jView.before(j);
    return this;
};
Triton.prototype.appendTo = function (item) {
    item.append(this.jView);
    return this;
};
Triton.prototype.empty = function () {
    this.jContent.empty();
    return this;
};
Triton.prototype.val = function (value) {

    if (value != undefined) {
        return this.setValue(value);
    } else {
        return this.getValue();
    }
};
Triton.prototype.setValue = function (value) {
    this.jValue.val(value);
    return this;
};
Triton.prototype.html = function (html) {

    if (html != undefined) {
        this.jView.html(html);
        return this;
    } else {
        return this.jView.html();
    }
};

Triton.prototype.text = function (text) {

    if (text != undefined) {
        this.jView.text(text);
        return this;
    } else {
        return this.jView.text();
    }
};
Triton.prototype.css = function (arg1, arg2) {

    var css = Lia.p(this.getOptions(), 'css');
    if ( css != undefined ) {

        if (arg2 == undefined) {

            if ( typeof arg1 == 'object' ) {

                for( var key in arg1 ) {
                    css[key] = arg1[key];
                }
            }

        } else {
            css[arg1] = arg2;
        }
    }

    if (arg2 == undefined) {
        return this.jView.css(arg1);
    } else {
        this.jView.css(arg1, arg2);
    }

    return this;
};
Triton.prototype.attr = function (arg1, arg2) {

    var attr = Lia.p(this.getOptions(), 'attr');
    if ( attr != undefined ) {

        if (arg2 == undefined) {

            if ( typeof arg1 == 'object' ) {

                for( var key in arg1 ) {
                    attr[attr] = arg1[key];
                }
            }

        } else {
            attr[arg1] = arg2;
        }
    }

    if (arg2 == undefined) {
        return this.jView.attr(arg1);
    } else {
        this.jView.attr(arg1, arg2);
    }

    return this;
};
Triton.prototype.getValue = function () {
    return this.jValue.val();
};
Triton.prototype.find = function (selector) {
    return this.jView.find(selector);
};
Triton.prototype.height = function () {
    return this.jView.height();
};
Triton.prototype.width = function () {
    return this.jView.width();
};

Triton.prototype.offset = function () {
    return this.jView.offset();
};

Triton.prototype.children = function (selector) {
    return this.jView.children(selector);
};
Triton.prototype.closest = function (selector) {
    return this.jView.closest(selector);
};
Triton.prototype.hide = function () {
    this.jView.hide();

    var css = Lia.p(this.getOptions(), 'css');
    if (css != undefined) {
        css['display'] = this.jView.css('display');
    }
    return this;
};
Triton.prototype.trigger = function (event) {
    this.jView.trigger(event);
    return this;
};
Triton.prototype.on = function (arg1, arg2, arg3) {
    this.jView.on(arg1, arg2, arg3);
    return this;
};

Triton.prototype.show = function () {
    this.jView.show();

    var css = Lia.p(this.getOptions(), 'css');
    if (css != undefined) {
        css['display'] = this.jView.css('display');
    }
    return this;
};
Triton.prototype.remove = function () {
    this.jView.remove();
    return this;
};

Triton.prototype.remove = function () {
    this.jView.remove();
    return this;
};

Triton.prototype.setContent = function (content) {

    if (typeof content == "string") {
        content = Lia.preventScript(content);
    }

    this.jContent.html(content);
    return this;
};

Triton.prototype.addClass = function (classText) {
    this.jView.addClass(classText);
    return this;
};
Triton.prototype.removeClass = function (classText) {
    this.jView.removeClass(classText);
    return this;
};
Triton.prototype.focus = function () {
    this.jValue.focus();
    return this;
};
Triton.prototype.pagerIndex = function (index) {
    return this.jView.pagerIndex(index);
};
Triton.prototype.setTheme = function (theme) {

    var options = this.getOptions();
    if (options == undefined) {
        options = {};
    }

    options['theme'] = theme;
    Triton.applyThemeOptions(this.jView, options);

    return this;
};

Triton.prototype.applyThemeOptions = function (options) {

    Triton.applyThemeOptions(this.jView, options);
    return this;
};

Triton.prototype.applyResponsive = function (responsiveType, BeforeResponsiveType) {

    if (Triton.Responsive.inited == false) {
        return this;
    }

    return this.refreshThemeOptions();
};

Triton.prototype.refreshThemeOptions = function () {

    var options = this.getOptions();
    if (options == undefined) {
        options = {};
    }

    Triton.applyThemeOptions(this.jView, options);
    return this;
};


Triton.ReplaceMap = {
    BASE_PATH: '/res/lia/triton',
    LIST_HEADER_ROW_HEIGHT: '40px',
    LIST_ROW_HEIGHT: '40px',
    DETAIL_ROW_HEIGHT: '42px',
    EDITOR_UPLOAD_URL: '/api/file/ckEditorUpload'
};

Triton.getJView = Triton.get = function (item) {

    var j = undefined;
    if (Lia.p(item, 'MODULE_NAME') == Triton.prototype.MODULE_NAME) {
        j = item.get();
    } else {
        j = item;
    }

    return j;
};
Triton.getTritonInstance = Triton.getTriton = function (j) {
    return j.data('triton-instance');
};
Triton.findTritonContent = function (j) {
    return Triton.findTriton(j, 'triton_content');
};
Triton.findTritonValue = function (j) {
    return Triton.findTriton(j, 'triton_value');
};
Triton.setTritonValue = function (j, val) {
    var jVal = Triton.findTritonValue(j);
    jVal.val(val);
};
Triton.getTritonValue = function (j) {

    var jVal = Triton.findTritonValue(j);
    return jVal.val();
};
Triton.findTriton = function (j, className) {

    if (j.hasClass(className) == true)
        return j;

    return j.find('.' + className);
};


/*
*
*
* return value
*   false 이면 에러 존재
*   true 이면 통과
*
* title : 팝업표시시 나올 필드 이름
* validation : 유효성 검사 항목
*       noBlank 공백 허용 안됨
*       number  숫자만 하용
*       email 이메일 형식만 허용
*       maxLength : 최대 글자수
*       minLength : 최소 글자수
*       minValue : 최소값
*       maxValue : 최대값
*       maxValueComponent : 최대값 컴포넌트
*       minValueComponent : 최소값 컴포넌트
*
* */
Triton.checkFormData = function (item) {

    var j = Triton.get(item);

    var jTritonForm = j.filter('.triton_form');
    for (var i = 0, l = jTritonForm.length; i < l; i++) {

        if (Triton.checkFormDataEach(jTritonForm.eq(i)) == false) {
            return false;
        }
    }

    jTritonForm = j.find('.triton_form');
    for (var i = 0, l = jTritonForm.length; i < l; i++) {

        if (Triton.checkFormDataEach(jTritonForm.eq(i)) == false) {
            return false;
        }
    }

    return true;
};

Triton.onCheckFormDataPopup = function (type, tritonInstance, formTitle, data) {

    if (type == 'noBlank') {

        PopupManager.alert(Lia.Strings.getString(Lia.Strings.POPUP.TITLE.INFO), formTitle + '을(를) 입력해 주십시오.', function () {

            try {
                tritonInstance.focus();
            } catch (e) {
            }

        });

    } else if (type == 'maxByteLength') {

        var maxByteLength = Lia.p(data, 'maxByteLength');

        PopupManager.alert(Lia.Strings.getString(Lia.Strings.POPUP.TITLE.INFO), formTitle + '가 ' + maxByteLength + ' Byte 보다 길이가 초과됩니다.', function () {

            try {
                tritonInstance.focus();
            } catch (e) {
            }

        });

    } else if (type == 'maxLength') {

        var maxLength = Lia.p(data, 'maxLength');

        PopupManager.alert(Lia.Strings.getString(Lia.Strings.POPUP.TITLE.INFO), formTitle + '의 길이가 ' + maxLength + ' 보다 깁니다.', function () {

            try {
                tritonInstance.focus();
            } catch (e) {
            }

        });

    } else if (type == 'minLength') {

        var minLength = Lia.p(data, 'minLength');

        PopupManager.alert(Lia.Strings.getString(Lia.Strings.POPUP.TITLE.INFO), formTitle + '의 길이가 ' + minLength + ' 보다 짧습니다.', function () {

            try {
                tritonInstance.focus();
            } catch (e) {
            }

        });

    } else if (type == 'number') {


        PopupManager.alert(Lia.Strings.getString(Lia.Strings.POPUP.TITLE.INFO), formTitle + '의 형식을 숫자 형식으로 입력해 주십시오.', function () {

            try {
                tritonInstance.focus();
            } catch (e) {
            }

        });

    } else if (type == 'email') {

        PopupManager.alert(Lia.Strings.getString(Lia.Strings.POPUP.TITLE.INFO), formTitle + '의 형식을 이메일 형식으로 입력해 주십시오.', function () {

            try {
                tritonInstance.focus();
            } catch (e) {
            }

        });

    } else if (type == 'maxValue') {

        var maxValue = Lia.p(data, 'maxValue');
        PopupManager.alert(Lia.Strings.getString(Lia.Strings.POPUP.TITLE.INFO), formTitle + '의 값이 ' + maxValue + '보다 작아야 합니다', function () {

            try {
                tritonInstance.focus();
            } catch (e) {
            }

        });

    } else if (type == 'minValue') {

        var minValue = Lia.p(data, 'minValue');
        PopupManager.alert(Lia.Strings.getString(Lia.Strings.POPUP.TITLE.INFO), formTitle + '의 값이 ' + minValue + '보다 커야 합니다.', function () {

            try {
                tritonInstance.focus();
            } catch (e) {
            }

        });

    } else if (type == 'maxValueComponent') {

        var maxValueComponent = Lia.p(data, 'maxValueComponent');
        var maxValueComponentTitle = Lia.p(maxValueComponent.getOptions(), 'form', 'title');

        PopupManager.alert(Lia.Strings.getString(Lia.Strings.POPUP.TITLE.INFO), formTitle + '의 값이 ' + maxValueComponentTitle + '값보다 보다 작아야 합니다.', function () {

            try {
                tritonInstance.focus();
            } catch (e) {
            }

        });
    } else if (type == 'minValueComponent') {

        var minValueComponent = Lia.p(data, 'minValueComponent');
        var minValueComponentTitle = Lia.p(minValueComponent.getOptions(), 'form', 'title');

        PopupManager.alert(Lia.Strings.getString(Lia.Strings.POPUP.TITLE.INFO), formTitle + '의 값이 ' + minValueComponentTitle + '보다 커야 합니다.', function () {

            try {
                tritonInstance.focus();
            } catch (e) {
            }

        });
    }
};


Triton.checkFormDataEach = function (j) {

    var form = j.data('triton-form');

    var tritonInstance = Triton.getTritonInstance(j);

    var value = undefined;
    try {
        value = tritonInstance.getValue();
    } catch (e) {
    }

    if (value != undefined) {

        if (j.hasClass('triton_check_box')) {
            if (value == Triton.CheckBox.Status.INACTIVE) {
                value = undefined;
            }
        }
    }

    var formTitle = form['title'];
    var formValidation = form['validation'];

    if (formValidation != undefined) {

        var noBlank = Lia.p(formValidation, 'noBlank');
        var notBlank = Lia.p(formValidation, 'notBlank');
        if (noBlank == true || noBlank == 1 || notBlank == true || notBlank == 1) {

            if (String.isBlank(value)) {

                Triton.onCheckFormDataPopup('noBlank', tritonInstance, formTitle, formValidation);
                return false;
            }
        }


        var maxByteLength = Lia.p(formValidation, 'maxByteLength');
        if (String.isNotBlank(maxByteLength)) {

            if (String.isNotBlank(value)) {

                var byteLength = ~-encodeURI(value).split(/%..|./).length;
                if (byteLength > maxByteLength) {
                    Triton.onCheckFormDataPopup('maxByteLength', tritonInstance, formTitle, formValidation);
                    return false;
                }
            }
        }

        var maxLength = Lia.p(formValidation, 'maxLength');
        if (String.isNotBlank(maxLength)) {

            if (String.isNotBlank(value) && value.length > maxLength) {
                Triton.onCheckFormDataPopup('maxLength', tritonInstance, formTitle, formValidation);
                return false;
            }
        }


        var minLength = Lia.p(formValidation, 'minLength');
        if (String.isNotBlank(minLength)) {

            if (String.isBlank(value) || value.length < minLength) {

                Triton.onCheckFormDataPopup('minLength', tritonInstance, formTitle, formValidation);
                return false;
            }
        }

        var number = Lia.p(formValidation, 'number');
        if ((number == 1 || number == true) && String.isNotBlank(value) && Lia.checkValidNumeric(value) == false) {

            Triton.onCheckFormDataPopup('number', tritonInstance, formTitle, formValidation);
            return false;
        }

        var email = Lia.p(formValidation, 'email');
        if ((email == 1 || email == true) && String.isNotBlank(value) && Lia.checkValidEmail(value) == false) {

            Triton.onCheckFormDataPopup('email', tritonInstance, formTitle, formValidation);
            return false;
        }


        var minValueComponent = Lia.p(formValidation, 'minValueComponent');
        if (minValueComponent != undefined) {

            var minValueComponentValue = undefined;
            try {
                minValueComponentValue = minValueComponent.getValue();
            } catch (e) {
            }

            if (value < minValueComponentValue) {

                Triton.onCheckFormDataPopup('minValueComponent', tritonInstance, formTitle, formValidation);
                return false;
            }
        }

        var maxValueComponent = Lia.p(formValidation, 'maxValueComponent');
        if (maxValueComponent != undefined) {

            var maxValueComponentValue = undefined;
            try {
                maxValueComponentValue = maxValueComponent.getValue();
            } catch (e) {
            }

            if (maxValueComponentValue < value) {
                Triton.onCheckFormDataPopup('maxValueComponent', tritonInstance, formTitle, formValidation);
                return false;
            }
        }

        var minValue = Lia.p(formValidation, 'minValue');
        if (String.isNotBlank(minValue) && minValue > value) {

            Triton.onCheckFormDataPopup('minValue', tritonInstance, formTitle, formValidation);
            return false;
        }

        var maxValue = Lia.p(formValidation, 'maxValue');
        if (String.isNotBlank(maxValue) && maxValue < value) {

            Triton.onCheckFormDataPopup('maxValue', tritonInstance, formTitle, formValidation);
            return false;
        }
    }

    return true;
};

Triton.placeFormData = function (item, parameterMap) {

    var j = Triton.get(item);

    var jTritonForm = j.filter('.triton_form');
    for (var i = 0, l = jTritonForm.length; i < l; i++) {
        Triton.placeFormDataEach(jTritonForm.eq(i), parameterMap);
    }

    jTritonForm = j.find('.triton_form');
    for (var i = 0, l = jTritonForm.length; i < l; i++) {
        Triton.placeFormDataEach(jTritonForm.eq(i), parameterMap);
    }
};


Triton.placeFormDataEach = function (j, parameterMap) {

    var form = j.data('triton-form');
    var formName = form['name'];

    var tritonInstance = Triton.getTritonInstance(j);

    var value = parameterMap[formName];
    tritonInstance.setValue(value, true);
};


Triton.extractFormData = function (item) {

    var j = Triton.get(item);

    var formData = {};

    var jTritonForm = j.filter('.triton_form');
    for (var i = 0, l = jTritonForm.length; i < l; i++) {
        Triton.extractFormDataEach(jTritonForm.eq(i), formData);
    }

    jTritonForm = j.find('.triton_form');
    for (var i = 0, l = jTritonForm.length; i < l; i++) {
        Triton.extractFormDataEach(jTritonForm.eq(i), formData);
    }

    return formData;
};
Triton.extractFormDataEach = function (j, formData) {

    var form = j.data('triton-form');
    var formName = form['name'];

    var tritonInstance = Triton.getTritonInstance(j);

    var value = undefined;
    try {
        value = tritonInstance.getValue();
    } catch (e) {
    }

    if (value != undefined) {

        if (j.hasClass('triton_check_box')) {
            if (value == Triton.CheckBox.Status.INACTIVE) {
                value = undefined;
            }
        }

        formData[formName] = value;
    }
};

Triton.combineOptions = function (options, defaultOptions) {

    var o = undefined;
    if (options == undefined) {
        o = {};
    } else {
        o = Lia.deepCopy(options);
    }

    if (defaultOptions != undefined) {

        for (var key in defaultOptions) {

            if (o[key] == undefined) {
                o[key] = defaultOptions[key];
            }
        }
    }

    return o;
};


Triton.applyTheme = function (j, theme) {

    var display = j.css('display');

    if (theme != undefined) {

        var css = theme['css'];
        if (css != undefined) {
            j.css(css);
        }

        var attr = theme['attr'];
        if (attr != undefined) {
            j.attr(attr);
        }

        if (j.hasClass('triton_responsive') == true && Triton.Responsive.inited == true) {

            if (Triton.Responsive.type == Triton.Responsive.Type.PC) {

                var pcCss = theme['pcCss'];
                if (pcCss != undefined) {
                    j.css(pcCss);
                }

                var pcAttr = theme['pcAttr'];
                if (pcAttr != undefined) {
                    j.attr(pcAttr);
                }
            }

            if (Triton.Responsive.type == Triton.Responsive.Type.TABLET) {

                var tabletCss = theme['tabletCss'];
                if (tabletCss != undefined) {
                    j.css(tabletCss);
                }

                var tabletAttr = theme['tabletAttr'];
                if (tabletAttr != undefined) {
                    j.attr(tabletAttr);
                }
            }

            if (Triton.Responsive.type == Triton.Responsive.Type.MOBILE) {

                var mobileCss = theme['mobileCss'];
                if (mobileCss != undefined) {
                    j.css(mobileCss);
                }

                var mobileAttr = theme['mobileAttr'];
                if (mobileAttr != undefined) {
                    j.attr(mobileAttr);
                }
            }
        }
    }

    if (display == 'none') {
        j.hide();
    }

};
Triton.applyThemeOptions = function (j, options) {

    var theme = Lia.p(options, 'theme');

    Triton.applyTheme(j, theme);
    Triton.applyTheme(j, options);

    var isDefault = Lia.p(options, 'isDefault');
    var isHovered = Lia.p(options, 'isHovered');

    var defaultSet = Lia.pt(options, options['theme'], 'defaultSet');
    var hoveringSet = Lia.pt(options, options['theme'], 'hoveringSet');

    j.off(Lia.Component.Event.STATUS_CHANGED);

    if (defaultSet != undefined || hoveringSet != undefined) {

        //if ( isDefault != true && isHovered != true ) {
        //    j.css( { 'cursor' : 'pointer' } );
        //}

        j.on(Lia.Component.Event.STATUS_CHANGED, {
            defaultSet: defaultSet,
            hoveringSet: hoveringSet,
            isDefault: isDefault,
            isHovered: isHovered
        }, function (e) {

            var status = e.status;
            var item = e.data;
            var isHovered = item.isHovered;
            var isDefault = item.isDefault;

            var jThis = $(this);
            if (isHovered == true) {
                Triton.applyTheme(jThis, item['hoveringSet']);
            } else if (isDefault == true) {
                Triton.applyTheme(jThis, item['defaultSet']);
            } else {

                if (status == Lia.Component.Value.Button.Status.DEFAULT) {
                    Triton.applyTheme(jThis, item['defaultSet']);
                } else {
                    Triton.applyTheme(jThis, item['hoveringSet']);
                }
            }
        }).initButton();
    }
};

Triton.applyOptions = function (j, options) {

    Lia.Strings.applyStrings(j);

    if (options != undefined) {

        // 기본값 매핑
        options['responsive'] = Lia.pd(Triton.Responsive.defaultResponsive, options, 'responsive');

        var responsive = options['responsive'];
        if (responsive == true) {
            j.addClass('triton_responsive');
        }

        Triton.applyThemeOptions(j, options);

        var addClass = options['addClass'];
        if (addClass != undefined)
            j.addClass(addClass);

        var removeClass = options['removeClass'];
        if (removeClass != undefined)
            j.removeClass(removeClass);

        var form = options['form'];
        if (form != undefined) {
            j.addClass('triton_form').data('triton-form', form);
        }

        var content = options['content'];
        if (content != undefined) {

            var jContent = Triton.findTritonContent(j);

            var contentValue = Triton.get(content);
            if (typeof contentValue == "string") {
                contentValue = Lia.preventScript(contentValue);
            }

            jContent.append(contentValue);
        }

        var value = options['value'];
        if (value != undefined) {
            var jValue = Triton.findTritonValue(j);
            jValue.val(value);
        }

        var onClick = options['onClick'];
        if (onClick != undefined) {
            j.on('click', options, onClick);
        }

        var onKeyPress = options['onKeyPress'];
        if (onKeyPress != undefined) {
            j.on('keypress', options, onKeyPress);
        }

        var onKeyUp = options['onKeyUp'];
        if (onKeyUp != undefined) {
            j.on('keyup', options, onKeyUp);
        }

        var onKeyDown = options['onKeyDown'];
        if (onKeyDown != undefined) {
            j.on('keydown', options, onKeyDown);
        }

        var onBlur = options['onBlur'];
        if (onBlur != undefined) {
            j.on('blur', options, onBlur);
        }

        var onFocus = options['onFocus'];
        if (onFocus != undefined) {
            j.on('focus', options, onFocus);
        }

        var onChange = options['onChange'];
        if (onChange != undefined) {
            j.on('change', options, onChange);
        }

        var onInput = options['onInput'];
        if (onInput != undefined) {
            j.on('input', options, onInput);
        }

        var onMouseDown = options['onMouseDown'];
        if (onMouseDown != undefined) {
            j.on('mousedown', options, onMouseDown);
        }

        var onMouseUp = options['onMouseUp'];
        if (onMouseUp != undefined) {
            j.on('mouseup', options, onMouseUp);
        }

        var onMouseMove = options['onMouseMove'];
        if (onMouseMove != undefined) {
            j.on('mousemove', options, onMouseMove);
        }

        var onMouseLeave = options['onMouseLeave'];
        if (onMouseLeave != undefined) {
            j.on('mouseleave', options, onMouseLeave);
        }

        var onMouseEnter = options['onMouseEnter'];
        if (onMouseEnter != undefined) {
            j.on('mouseenter', options, onMouseEnter);
        }
    }

    return j;
};
Triton.convertReplaceMap = function (text) {

    for (var key in Triton.ReplaceMap) {

        var value = Triton.ReplaceMap[key];
        text = text.replace(new RegExp('#{' + key + '}', 'g'), value);
    }

    return text;
};
Triton.createJQueryElement = function (html) {
    return jQuery(Triton.convertReplaceMap(html));
};

{
    Triton.SiteType = {
        General: 0,
        Polaris: 1,
        Polaris2: 2,
        Callisto: 3,
        Btn: 4,
        Pluto: 5,
        Pyxis2: 6
    };

    // Triton.Theme = {
    //
    //     Type : {
    //         General : 0,
    //         Dark : 1
    //     },
    //
    //     Current : {
    //         BACKGROUND : {
    //             '' : '#ffffff'
    //         }
    //     },
    //
    //     General : {
    //         BACKGROUND : '#ffffff'
    //     },
    //
    //     Dark : {
    //         BACKGROUND : '#1f1f1f'
    //     },
    //
    //     ClassName : {
    //         BACKGROUND : '.triton_theme_background'
    //     },
    //
    //     type : undefined,
    //     setType : function( type ) {
    //         Triton.Theme.type = type;
    //
    //         if (Triton.Theme.type == Triton.Theme.Type.General) {
    //             Triton.Theme.Current = Triton.Theme.General;
    //         } else if (Triton.Theme.type == Triton.Theme.Type.Dark) {
    //             Triton.Theme.Current = Triton.Theme.Dark;
    //         }
    //     },
    //     getType : function() {
    //         return Triton.Theme.type;
    //     },
    //
    //     setThemeElement : function( j ) {
    //
    //         if ( j == undefined ) {
    //             j = $(document);
    //         }
    //
    //         Triton.Theme.setThemeElementInternal(j.filter(Triton.Theme.ClassName.BACKGROUND));
    //         Triton.Theme.setThemeElementInternal(j.find(Triton.Theme.ClassName.BACKGROUND));
    //     },
    //
    //     setThemeElementInternal : function( j ) {
    //
    //         j.css({
    //             'background-color' : Triton.Theme.Current.BACKGROUND
    //         });
    //     }
    // };
    //
    // Triton.Theme.setType( Triton.Theme.General );
}

(function ($) {

    $.fn.extend({

        getTritonInstance: function () {
            return Triton.getTritonInstance(this);
        },
        getTriton: function () {
            return Triton.getTriton(this);
        }
    });

})(jQuery);

{
    Triton.Responsive = {

        Type: {
            PC: 1,
            TABLET: 2,
            MOBILE: 3
        },

        inited: false,

        type: undefined,
        getType: function () {
            return Triton.Responsive.type;
        },

        tabletWidth: 1024,
        mobileWidth: 767,

        jTablet: undefined,
        jMobile: undefined,

        listenerList: [],
        addListener: function (key, listener, object) {

            Triton.Responsive.listenerList.push({
                key: key,
                listener: listener,
                object: object
            });
        },

        removeListener: function (key) {

            for (var i = Triton.Responsive.listenerList.length; i--;) {
                if (Lia.p(Triton.Responsive.listenerList, i, 'key') === key) {
                    Triton.listenerList.splice(i, 1);
                }
            }
        },

        executeListener: function (currentType, beforeType) {

            if (Triton.Responsive.inited != true)
                return;

            for (var i = 0, l = Triton.Responsive.listenerList.length; i < l; i++) {
                var func = Lia.p(Triton.Responsive.listenerList, i, 'listener');
                var object = Lia.p(Triton.Responsive.listenerList, i, 'object');
                func(currentType, beforeType, object);
            }
        },

        defaultResponsive: false,

        init: function (defaultResponsive, tabletWidth, mobileWidth) {

            if (Triton.Responsive.inited == true)
                return;

            Triton.Responsive.defaultResponsive = defaultResponsive;

            if (tabletWidth != undefined) {

                if (typeof tabletWidth == 'object') {
                    Triton.Responsive.jTablet = tabletWidth;
                } else {
                    Triton.Responsive.tabletWidth = tabletWidth;
                }
            }

            if (mobileWidth != undefined) {

                if (typeof mobileWidth == 'object') {
                    Triton.Responsive.jMobile = mobileWidth;
                } else {
                    Triton.Responsive.mobileWidth = mobileWidth;
                }
            }

            Triton.Responsive.inited = true;

            $(window).on('resize', function () {
                Triton.Responsive.apply();
            });
            Triton.Responsive.apply();
        },

        apply: function (force, j) {

            if (Triton.Responsive.inited == false) {
                return;
            }

            var windowWidth = $(window).width();

            var beforeResponsiveType = Triton.Responsive.type;
            var currentResponsiveType = Triton.Responsive.Type.PC;
            if ((Triton.Responsive.jMobile != undefined && Triton.Responsive.jMobile.css('display') != 'none')
                || (Triton.Responsive.jMobile == undefined && windowWidth < Triton.Responsive.mobileWidth)) {
                currentResponsiveType = Triton.Responsive.Type.MOBILE;
            } else if ((Triton.Responsive.jTablet != undefined && Triton.Responsive.jTablet.css('display') != 'none')
                || (Triton.Responsive.jTablet == undefined && windowWidth < Triton.Responsive.tabletWidth)) {
                currentResponsiveType = Triton.Responsive.Type.TABLET;
            }

            Triton.Responsive.type = currentResponsiveType;

            if (force == true || beforeResponsiveType != currentResponsiveType) {

                var jResponsive = undefined;
                if (j != undefined) {
                    jResponsive = j.find('.triton_responsive');
                } else {
                    jResponsive = $('.triton_responsive');
                }

                for (var i = 0, l = jResponsive.length; i < l; i++) {

                    var jResponsiveEq = jResponsive.eq(i);
                    var triton = jResponsiveEq.getTriton();
                    if (triton != undefined) {
                        triton.applyResponsive(currentResponsiveType, beforeResponsiveType);
                    }
                }

                Triton.Responsive.executeListener(currentResponsiveType, beforeResponsiveType);

                var jTritonShowHide = undefined;
                if (j != undefined) {
                    jTritonShowHide = j.find('.triton_pc_show, .triton_pc_hide, .triton_tablet_show, .triton_tablet_hide, .triton_mobile_show, .triton_mobile_hide');
                } else {
                    jTritonShowHide = jQuery('.triton_pc_show, .triton_pc_hide, .triton_tablet_show, .triton_tablet_hide, .triton_mobile_show, .triton_mobile_hide');
                }


                jTritonShowHide.each(function () {

                    var jThis = $(this);

                    var shown = true;

                    if (currentResponsiveType == Triton.Responsive.Type.PC) {
                        shown = jThis.hasClass('triton_pc_show') || jThis.hasClass('triton_tablet_hide') || jThis.hasClass('triton_mobile_hide');
                    } else if (currentResponsiveType == Triton.Responsive.Type.TABLET) {
                        shown = jThis.hasClass('triton_tablet_show') || jThis.hasClass('triton_pc_hide') || jThis.hasClass('triton_mobile_hide');
                    } else if (currentResponsiveType == Triton.Responsive.Type.MOBILE) {
                        shown = jThis.hasClass('triton_mobile_show') || jThis.hasClass('triton_pc_hide') || jThis.hasClass('triton_tablet_hide');
                    }

                    if (shown) {
                        jThis.show();
                    } else {
                        jThis.hide();
                    }

                });


            }
        }
    };

    Triton.Responsive.type = Triton.Responsive.Type.PC;
    // Triton.Responsive.init(true);
}

{
    Triton.ResponsiveResize = {

        inited: false,

        init: function () {

            if (Triton.ResponsiveResize.inited == true)
                return;

            Triton.ResponsiveResize.inited = true;

            $(window).on('resize', function () {
                Triton.ResponsiveResize.apply();
            });
            Triton.ResponsiveResize.apply();
        },

        apply: function (j) {

            if (Triton.ResponsiveResize.inited == false) {
                return;
            }

            var jResponsiveResizable = undefined;
            if (j != undefined) {
                jResponsiveResizable = j.find('.triton_responsive_resizable');
            } else {
                jResponsiveResizable = $('.triton_responsive_resizable');
            }

            for (var i = 0, l = jResponsiveResizable.length; i < l; i++) {

                var jResponsiveResizableEq = jResponsiveResizable.eq(i);
                var triton = jResponsiveResizableEq.getTriton();
                if (triton != undefined && triton.onResponsiveResize != undefined) {
                    triton.onResponsiveResize();
                }
            }
        }
    };

    // Triton.ResponsiveResize.init();
}


// comboBoxHide : false
// onSearchCallWhenKeyPress : false
// onSearch : function( searchKeyword, searchOptionValue, searchOptionText, jSelect, options ) {}
Triton.Searcher = function (options) {
    this.init(options);
};
Triton.Searcher.prototype = new Triton();
Triton.Searcher.prototype.init = function (options) {

    // 기본 옵션 적용
    options = Triton.combineOptions(options, {
        theme: Triton.Searcher.Theme.Normal
    });

    var j = Triton.createJQueryElement(Triton.Searcher.HTML);
    j = Triton.applyOptions(j, options);


    var jComboBoxContainer = j.find('.triton_combo_box_container');
    var jTextInputContainer = j.find('.triton_text_input_container');
    var jFlatButtonContainer = j.find('.triton_flat_button_container');

    var theme = options['theme'];

    var comboBoxOptions = Triton.combineOptions(options['comboBoxOptions'], Lia.p(theme, 'comboBox'));
    var textInputOptions = Triton.combineOptions(options['textInputOptions'], Lia.p(theme, 'textInput'));
    var flatButtonOptions = Triton.combineOptions(options['flatButtonOptions'], Lia.p(theme, 'flatButton'));

    // 사용자 데이터 입력
    var onSearch = options['onSearch'];
    if (onSearch != undefined) {
        j.data('triton-on-search', onSearch);
        flatButtonOptions['onClick'] = Triton.Searcher.onContainerSearch;
    }

    j.data('triton-options', options);

    var searchOptionList = options['searchOptionList'];
    if (searchOptionList != undefined)
        comboBoxOptions['optionList'] = searchOptionList;

    var searchOptionMap = options['searchOptionMap'];
    if (searchOptionMap != undefined)
        comboBoxOptions['optionMap'] = searchOptionMap;

    var searchSelectedValue = options['searchSelectedValue'];
    if (searchSelectedValue != undefined)
        comboBoxOptions['selectedValue'] = searchSelectedValue;

    var searchKeyword = options['searchKeyword'];
    if (searchKeyword != undefined) {
        textInputOptions['value'] = searchKeyword;
    }


    this.comboBox = new Triton.ComboBox(comboBoxOptions).appendTo(jComboBoxContainer);
    this.flatButton = new Triton.FlatButton(flatButtonOptions).appendTo(jFlatButtonContainer);

    var onSearchCallWhenInput = Lia.pd(false, options, 'onSearchCallWhenInput');

    this.textInput = new Triton.TextInput(textInputOptions).appendTo(jTextInputContainer);
    var jTextInput = this.textInput.get().on('keypress', {}, function (e) {
        if (e.which == Lia.KeyCode.ENTER)
            Triton.Searcher.onContainerSearch.call(this);
    });

    if (onSearchCallWhenInput == true) {
        jTextInput.on('input', function (e) {
            Triton.Searcher.onContainerSearch.call(this);
        });
    }

    var comboBoxHide = Lia.pd(false, options, 'comboBoxHide');
    if (comboBoxHide == true) {
        this.comboBox.hide();
    }

    this.jView = j;
    this.initTriton(options);
};
Triton.Searcher.prototype.setSearchKeyword = function (keyword) {
    this.textInput.setValue(keyword);
    return this;
};
Triton.Searcher.prototype.setSearchSelectedValue = function (searchSelectedValue, unExecuteOnSelectedListener) {
    this.comboBox.setValue(searchSelectedValue, unExecuteOnSelectedListener);
    return this;
};
Triton.Searcher.prototype.getSearchKeyword = function () {
    return this.textInput.getValue();
};
Triton.Searcher.prototype.getSearchSelectedValue = function () {
    return this.comboBox.getValue();
};
Triton.Searcher.prototype.getComboBox = function () {
    return this.comboBox;
};
Triton.Searcher.prototype.getTextInput = function () {
    return this.textInput;
};
Triton.Searcher.prototype.getFlatButton = function () {
    return this.flatButton;
};
Triton.Searcher.prototype.change = function () {
    Triton.Searcher.onContainerSearch.call(this.get());
};


Triton.Searcher.create = function (options) {
    return new Triton.Searcher(options).getJView();
};
Triton.Searcher.append = function (j, options) {
    var jView = Triton.Searcher.create(options);
    j.append(jView);
    return Triton.findTritonContent(jView);
};

Triton.Searcher.Theme = {

    Normal: {

        css: {
            'line-height': '30px',
            'height': '32px',
            'overflow': 'hidden'
        },

        comboBox: {

            theme: {

                css: {
                    'width': '100px',
                    'background-color': TritonTheme.SEARCH_BACKGROUND_COLOR

                },

                text: {

                    css: {

                        'border': '1px solid ' + TritonTheme.SEARCH_BORDER_COLOR,
                        'border-right': 'none',
                        'color': TritonTheme.SEARCH_TEXT_COLOR
                    }
                },

                arrow: {

                    css: {

                        'color': TritonTheme.SEARCH_ARROW_COLOR
                    }
                },

                select: {

                    css: {

                        'background-color': TritonTheme.SEARCH_BACKGROUND_COLOR,
                        'color': TritonTheme.SEARCH_TEXT_COLOR
                    }
                }
            }
        },

        textInput: {

            theme: {

                'css': {

                    'padding': '0px 10px',
                    'background-color': TritonTheme.SEARCH_BACKGROUND_COLOR,
                    'color': TritonTheme.SEARCH_TEXT_COLOR,
                    'border': '1px solid ' + TritonTheme.SEARCH_BORDER_COLOR,
                    'height': '30px',
                    'line-height': '30px',
                    'outline': 'none',
                    'box-sizing': 'content-box',
                    'font-size': '13px',
                    'font-family': 'notokr-regular, NanumGothic',
                    'width': '150px',
                    'border-right': 'none'
                }
            }

        },

        flatButton: {

            theme: {

                css: {
                    'cursor': 'pointer',
                    'display': 'inline-block',
                    'height': '30px',
                    'width': '32px',
                    '*zoom': '1',
                    '*display': 'inline',
                    'color': TritonTheme.SEARCH_TEXT_COLOR,
                    'border': '1px solid ' + TritonTheme.SEARCH_BORDER_COLOR,
                    'border-left': 'none',
                    'box-sizing': 'content-box',
                    'background-image': 'url(' + TritonTheme.SEARCH_ICON_IMAGE_URL + ')',
                    'background-repeat': 'no-repeat',
                    'background-position': '10px 8px'
                }

            }
        }
    },

    Category: {

        css: {
            'float': 'right'
        },

        comboBox: {

            theme: {

                css: {
                    'width': '100px',
                    'background-color': TritonTheme.SEARCH_CATEGORY_BACKGROUND_COLOR

                },

                text: {

                    css: {

                        'border': '1px solid ' + TritonTheme.SEARCH_CATEGORY_BORDER_COLOR,
                        'border-right': 'none',
                        'color': TritonTheme.SEARCH_CATEGORY_TEXT_COLOR
                    }
                },

                arrow: {

                    css: {

                        'color': TritonTheme.SEARCH_CATEGORY_ARROW_COLOR
                    }
                },

                select: {

                    css: {

                        'background-color': TritonTheme.SEARCH_CATEGORY_BACKGROUND_COLOR,
                        'color': TritonTheme.SEARCH_CATEGORY_TEXT_COLOR
                    }
                }
            }
        },

        textInput: {

            theme: {

                'css': {

                    'padding': '0px 10px',
                    'background-color': TritonTheme.SEARCH_CATEGORY_BACKGROUND_COLOR,
                    'border': '1px solid ' + TritonTheme.SEARCH_CATEGORY_BORDER_COLOR,
                    'color': TritonTheme.SEARCH_CATEGORY_TEXT_COLOR,
                    'height': '30px',
                    'outline': 'none',
                    'box-sizing': 'content-box',
                    'font-size': '13px',
                    'font-family': 'notokr-regular, NanumGothic',
                    'width': '150px',
                    'border-right': 'none'
                }
            }

        },

        flatButton: {

            theme: {

                css: {
                    'cursor': 'pointer',
                    'display': 'inline-block',
                    'height': '30px',
                    'width': '32px',
                    '*zoom': '1',
                    '*display': 'inline',
                    'color': TritonTheme.SEARCH_CATEGORY_TEXT_COLOR,
                    'border': '1px solid ' + TritonTheme.SEARCH_CATEGORY_BORDER_COLOR,
                    'border-left': 'none',
                    'box-sizing': 'content-box',
                    'background-image': 'url(' + TritonTheme.SEARCH_ICON_IMAGE_URL + ')',
                    'background-repeat': 'no-repeat',
                    'background-position': '10px 8px'
                }

            }
        }
    }
};
Triton.Searcher.NAME = 'triton_searcher';
Triton.Searcher.HTML = '<div class="triton_searcher" style="overflow:auto;">' +
    '<div class="triton_combo_box_container" style="overflow: auto;float:left;"></div>' +
    '<div class="triton_text_input_container" style="overflow: auto;float:left;"></div>' +
    '<div class="triton_flat_button_container" style="overflow: auto;float:left;"></div>' +
    '</div>';

Triton.Searcher.onContainerSearch = function () {

    var jThis = $(this);
    var jParent = jThis.closest('.triton_searcher');

    var jSelect = jParent.find('select');
    var jInput = jParent.find('input');
    var jSelectedOption = jSelect.find(':selected');

    var options = jParent.data('triton-options');
    var onSearch = jParent.data('triton-on-search');
    onSearch.call(this, jInput.val(), jSelectedOption.attr('value'), jSelectedOption.text(), jSelect, options);
};


Triton.Image = function (options) {
    this.init(options);
};
Triton.Image.prototype = new Triton();
Triton.Image.prototype.init = function (options) {

    this.jView = Triton.createJQueryElement(Triton.Image.HTML);
    Triton.applyOptions(this.jView, options);

    this.jContent = Triton.findTritonContent(this.jView);

    var src = options['src'];
    this.jContent.attr('src', src);

    this.initTriton(options);
};
Triton.Image.NAME = 'triton_img';
Triton.Image.HTML = '<img class="triton_img triton_content" alt="triton img triton content"/>';

Triton.Image.Theme = {
    Private: {
        css: {
            'margin-left': '10px',
            'vertical-align': 'middle'
        },
        attr: {
            src: Triton.ReplaceMap.BASE_PATH + '/img/img_lock.png'
        }
    },

    CommentButton: {
        css: {
            'cursor': 'pointer',
            'padding-left': '5px',
            'padding-right': '5px'
        }
    },

    CommentButtonDel: {
        css: {
            'position': 'absolute',
            'right': '0'
        }
    },

    CommentButtonEdit: {
        css: {
            'position': 'absolute',
            'right': '30px'
        }
    }
};
Triton.Image.create = function (options) {
    return new Triton.Image(options).getJView();
};
Triton.Image.append = function (j, options) {
    var jView = Triton.Image.create(options);
    j.append(jView);
    return Triton.findTritonContent(jView);
};


Triton.TextInput = function (options) {
    this.init(options);
};
Triton.TextInput.Status = {
    NORMAL: 0,
    DISABLED: 1,
    READONLY: 2
};

Triton.TextInput.prototype = new Triton();
Triton.TextInput.prototype.init = function (options) {

    options = Triton.combineOptions(options, {
        theme: Triton.TextInput.Theme.Normal
    });

    var jView = Triton.createJQueryElement(Triton.TextInput.HTML);
    jView = Triton.applyOptions(jView, options);
    this.jView = jView;
    this.jContent = Triton.findTritonContent(this.jView);
    this.jValue = Triton.findTritonValue(this.jView);

    this.initTriton(options);

    var disabled = Lia.pd(false, options, 'disabled');
    var readonly = Lia.pd(false, options, 'readonly');

    var status = Triton.TextInput.Status.NORMAL;

    if (disabled == true) {
        status = Triton.TextInput.Status.DISABLED;
    } else if (readonly == true) {
        status = Triton.TextInput.Status.READONLY;
    }

    this.setStatus(status);

    var digitonly = Lia.pd(false, options, 'digitonly');
    if ( digitonly == true ) {
        this.jValue.on('input', function() {
            var jThis = jQuery(this);
            var val = jThis.val();
            val = val.replace(/[^0-9]/g, '');
            jThis.val(val);
        });
    }

    var phonenumberonly = Lia.pd(false, options, 'phonenumberonly');
    if ( phonenumberonly == true ) {
        this.jValue.on('input', function() {
            var jThis = jQuery(this);
            var val = jThis.val();
            val = val.replace(/[^0-9\-]/g, '');
            jThis.val(val);
        });
    }

    var numberonly = Lia.pd(false, options, 'numberonly');
    if ( numberonly == true ) {
        this.jValue.on('input', function() {
            var jThis = jQuery(this);
            var val = jThis.val();
            val = val.replace(/[^0-9\.]/g, '');
            jThis.val(val);
        });
    }

};

Triton.TextInput.prototype.setDisabled = function (disabled) {

    this.setTheme(this.options['theme'], disabled, false);
};

Triton.TextInput.prototype.setReadonly = function (readonly) {

    this.setTheme(this.options['theme'], disabled, readonly);
};


Triton.TextInput.prototype.setStatus = function (status) {

    this.setTheme(this.options['theme'], status);

    if (status == Triton.TextInput.Status.NORMAL) {

        this.dsiabled = false;
        this.readonly = false;

    } else if (status == Triton.TextInput.Status.DISABLED) {

        this.dsiabled = true;
        this.readonly = false;

    } else if (status == Triton.TextInput.Status.READONLY) {

        this.dsiabled = false;
        this.readonly = true;

    }

    this.status = status;

    return this;
};

Triton.TextInput.prototype.setTheme = function (theme, status) {


    var options = this.getOptions();
    if (options == undefined) {
        options = {};
    }

    options['theme'] = theme;

    var themeOptions = {};
    if (status == Triton.TextInput.Status.DISABLED) {
        themeOptions['theme'] = theme = theme['disabled'];
    } else if (status == Triton.TextInput.Status.READONLY) {
        themeOptions['theme'] = theme = theme['readonly'];
    } else {
        themeOptions['theme'] = theme;
    }

    Triton.applyTheme(this.jView, themeOptions['theme']);
    Triton.applyTheme(this.jView, options);

    return this;
};

Triton.TextInput.prototype.refreshThemeOptions = function () {
    return this;
};


Triton.TextInput.Theme = {

    Normal: {

        attr: {

            readonly: false,
            disabled: false
        },

        css: {

            'padding': '0px 10px',
            'width': '250px',
            'background-color': TritonTheme.TEXT_INPUT_BACKGROUND_COLOR,
            'border': '1px solid ' + TritonTheme.TEXT_INPUT_BORDER_COLOR,
            'color': TritonTheme.TEXT_INPUT_TEXT_COLOR,
            'height': '32px',
            'line-height': '30px',
            'outline': 'none',
            'box-sizing': 'border-box',
            'font-size': '13px',
            'font-family': 'notokr-regular, NanumGothic'
        },

        pcCss: {
            'width': '230px'
        },
        tabletCss: {
            'width': '100%'
        },
        mobileCss: {
            'width': '100%'
        },

        disabled: {

            attr: {

                disabled: true
            },

            css: {
                'background-color': TritonTheme.TEXT_INPUT_DISABLED_BACKGROUND_COLOR,
                'border': '1px solid ' + TritonTheme.TEXT_INPUT_DISABLED_BORDER_COLOR,
                'color': TritonTheme.TEXT_INPUT_DISABLED_TEXT_COLOR
            }
        },

        readonly: {

            attr: {

                readonly: true
            },

            css: {
                'background-color': TritonTheme.TEXT_INPUT_BACKGROUND_COLOR,
                'border': '1px solid ' + TritonTheme.TEXT_INPUT_BORDER_COLOR,
                'color': TritonTheme.TEXT_INPUT_TEXT_COLOR
            }
        }

    },

    Full: {

        attr: {

            readonly: false,
            disabled: false
        },

        css: {
            'box-sizing': 'border-box',
            'width': '100%',
            'padding': '0px 10px',
            'background-color': TritonTheme.TEXT_INPUT_BACKGROUND_COLOR,
            'border': '1px solid ' + TritonTheme.TEXT_INPUT_BORDER_COLOR,
            'color': TritonTheme.TEXT_INPUT_TEXT_COLOR,
            'height': '32px',
            'line-height': '30px',
            'outline': 'none',
            'font-size': '13px',
            'font-family': 'notokr-regular, NanumGothic'
        },

        disabled: {

            attr: {

                disabled: true
            },

            css: {
                'background-color': TritonTheme.TEXT_INPUT_DISABLED_BACKGROUND_COLOR,
                'border': '1px solid ' + TritonTheme.TEXT_INPUT_DISABLED_BORDER_COLOR,
                'color': TritonTheme.TEXT_INPUT_DISABLED_TEXT_COLOR
            }
        },

        readonly: {

            attr: {

                readonly: true
            },

            css: {
                'background-color': TritonTheme.TEXT_INPUT_BACKGROUND_COLOR,
                'border': '1px solid ' + TritonTheme.TEXT_INPUT_BORDER_COLOR,
                'color': TritonTheme.TEXT_INPUT_TEXT_COLOR
            }
        }
    }
};
Triton.TextInput.NAME = 'triton_text_input';
Triton.TextInput.HTML = '<input class="triton_text_input triton_content triton_value" type="text" title="triton text input"/>';
Triton.TextInput.create = function (options) {
    return new Triton.TextInput(options).getJView();
};
Triton.TextInput.append = function (j, options) {
    var jView = Triton.TextInput.create(options);
    j.append(jView);
    return Triton.findTritonContent(jView);
};
Triton.TextInput.setValue = function (j, value) {
    this.jValue = Triton.findTritonValue(j);
    this.jValue.val(value);
};


Triton.TextArea = function (options) {
    this.init(options);
};
Triton.TextArea.prototype = new Triton();
Triton.TextArea.prototype.init = function (options) {

    options = Triton.combineOptions(options, {
        theme: Triton.TextArea.Theme.Normal
    });

    var jView = Triton.createJQueryElement(Triton.TextArea.HTML);
    jView = Triton.applyOptions(jView, options);
    this.jView = jView;
    this.jContent = Triton.findTritonContent(this.jView);
    this.jValue = Triton.findTritonValue(this.jView);

    this.initTriton(options);
};
Triton.TextArea.Theme = {

    Normal: {

        css: {

            'background-color': TritonTheme.TEXT_AREA_BACKGROUND_COLOR,
            'border': '1px solid ' + TritonTheme.TEXT_AREA_BORDER_COLOR,
            'color': TritonTheme.TEXT_AREA_TEXT_COLOR,
            'resize': 'none',
            'outline': 'none',
            'padding': '10px 10px',
            'box-sizing': 'border-box',
            'width': '100%',
            'height': '100px',
            'font-family': 'notokr-regular, NanumGothic',
            'font-size': '13px'
        }
    },
    Full: {

        css: {

            'background-color': TritonTheme.TEXT_AREA_BACKGROUND_COLOR,
            'border': '1px solid ' + TritonTheme.TEXT_AREA_BORDER_COLOR,
            'color': TritonTheme.TEXT_AREA_TEXT_COLOR,
            'resize': 'none',
            'outline': 'none',
            'padding': '10px 10px',
            'box-sizing': 'border-box',
            'width': '100%',
            'height': '100px',
            'font-family': 'notokr-regular, NanumGothic',
            'font-size': '13px'
        }
    }

};

Triton.TextArea.NAME = 'triton_textarea';
Triton.TextArea.HTML = '<textarea class="triton_textarea triton_content triton_value"></textarea>';
Triton.TextArea.create = function (options) {
    return new Triton.TextArea(options).getJView();
};
Triton.TextArea.append = function (j, options) {
    var jView = Triton.TextArea.create(options);
    j.append(jView);
    return Triton.findTritonContent(jView);
};
Triton.TextArea.setValue = function (j, value) {
    this.jValue = Triton.findTritonValue(j);
    this.jValue.val(value);
};


/*
 !!! onChange 는 사용하지 말것 !!!

 onSelected ( val, selectedOption, options) )
 selectedValue
 optionMap = { key : value, key : value, ... }
 optionList = [ { name : 'name',  value : 'value', selected : true }, { name : 'name',  value : 'value', selected : false }, ... ]
 tableColumns = [ { name : '테이블 컬럼 이름', key : 'option key'  } ]
 */

Triton.ComboBox = function (options) {
    this.init(options);
};
Triton.ComboBox.prototype = new Triton();
Triton.ComboBox.prototype.init = function (options) {

    options = Triton.combineOptions(options, {
        theme: Triton.ComboBox.Theme.Normal
    });

    var jView = Triton.createJQueryElement(Triton.ComboBox.HTML);
    jView = Triton.applyOptions(jView, options);

    if (options != undefined) {

        var theme = options['theme'];
        if (theme != undefined) {

            var text = theme['text'];
            Triton.applyTheme(jView.find('.triton_combo_box_text'), text);

            var arrow = theme['arrow'];
            Triton.applyTheme(jView.find('.triton_combo_box_arrow'), arrow);

            var select = theme['select'];
            Triton.applyTheme(jView.find('.triton_combo_box_select'), select);
        }

    }

    var selectedValue = options['selectedValue'];
    var defaultValue = this.defaultValue = Lia.pd(Triton.ComboBox.defaultValue, options, 'defaultValue');

    this.maxSelectCount = Lia.pd(Triton.ComboBox.maxSelectCount, options, 'maxSelectCount');
    this.popupUrl = Lia.pd(Triton.ComboBox.popupUrl, options, 'popupUrl');

    this.mode = Lia.pd(Triton.ComboBox.mode, options, 'mode');
    this.tableColumns = Lia.p(options, 'tableColumns');

    var jSelect = jView.find('.triton_select');
    var optionList = options['optionList'];
    if (optionList != undefined) {

        for (var i = 0, l = optionList.length; i < l; i++) {
            var option = optionList[i];

            var name = option['name'];
            var value = option['value'];
            var color = option['color'];

            if (option['selected'] == true) {
                selectedValue = value;
            }

            var jOption = jQuery('<option value="' + value + '">' + name + '</option>');
            if (color != undefined) {

                jOption.css({
                    'color': color
                });
            }

            jOption.data('triton-combo-box-option', option);
            jSelect.append(jOption);
        }
    }

    var optionMap = options['optionMap'];
    if (optionMap != null) {
        for (var key in optionMap) {

            var name = optionMap[key];

            var jOption = jQuery('<option value="' + key + '">' + name + '</option>');
            jOption.data('triton-combo-box-option', {name: name, value: key});
            jSelect.append(jOption);
        }
    }

    var jSelectText = jView.find('.triton_combo_box_text');
    var name = jSelect.children("option:selected").text();
    jSelectText.text(name);

    jSelect.on('change', {
        jView: jView,
        options: options
    }, function (e, unExecuteOnSelectedListener) {

        var options = e.data.options;
        var jView = e.data.jView;
        var comboBox = e.data.comboBox;

        var jThis = jQuery(this);
        var jSelected = jThis.find("option:selected");

        jThis.parents('.triton_combo_box').find('.triton_combo_box_text').text(jSelected.text());
        if (unExecuteOnSelectedListener != undefined && unExecuteOnSelectedListener == true) {
            return;
        }

        var selectedOption = jSelected.data('triton-combo-box-option');

        var onSelected = Lia.p(options, 'onSelected');
        if (onSelected != undefined) {
            onSelected.call(jView, jSelected.attr('value'), selectedOption, options);
        }
    });

    jView.on('click', {
        comboBox: this
    }, function (e) {

        var comboBox = e.data.comboBox;
        var mode = comboBox.mode;
        if (comboBox.disabled || mode == Triton.ComboBox.Mode.SELECT) {
            return;
        }

        var optionCount = comboBox.find('option').length;
        if (mode == Triton.ComboBox.Mode.POPUP || (mode == Triton.ComboBox.Mode.MIX && optionCount > comboBox.maxSelectCount)) {


            var popupUrl = comboBox.popupUrl;
            AjaxPopupManager.show(popupUrl, {
                comboBox: comboBox,
                onSelected: function (comboBox, val) {
                    comboBox.setValue(val);
                }
            });
        }
    });

    this.jView = jView;
    this.jSelect = jSelect;
    this.jSelectText = jSelectText;
    this.jContent = Triton.findTritonContent(this.jView);

    this.initTriton(options);

    this.setValue(selectedValue, true);

    var disabled = Lia.pd(false, options, 'disabled');
    this.setDisabled(disabled);
};

Triton.ComboBox.prototype.setTheme = function (theme, disabled) {

    var options = this.getOptions();
    if (options == undefined) {
        options = {};
    }

    options['theme'] = theme;

    var themeOptions = {};
    if (disabled) {
        themeOptions['theme'] = theme = theme['disabled'];
    } else {
        themeOptions['theme'] = theme;
    }

    Triton.applyTheme(this.jView, themeOptions['theme']);
    Triton.applyTheme(this.jView, options);

    if (theme != undefined) {

        var text = theme['text'];
        Triton.applyTheme(this.jView.find('.triton_combo_box_text'), text);

        var arrow = theme['arrow'];
        Triton.applyTheme(this.jView.find('.triton_combo_box_arrow'), arrow);

        var select = theme['select'];
        Triton.applyTheme(this.jView.find('.triton_combo_box_select'), select);
    }

    return this;
};


Triton.ComboBox.prototype.checkLayout = function () {

    var comboBox = this;

    if (comboBox.disabled) {
        this.jView.css({'cursor': 'default'});
        this.jSelect.hide();
        return this;
    }

    var mode = comboBox.mode;
    var optionCount = comboBox.find('option').length;
    if (mode == Triton.ComboBox.Mode.POPUP || (mode == Triton.ComboBox.Mode.MIX && optionCount > comboBox.maxSelectCount)) {
        this.jView.css({'cursor': 'pointer'});
        this.jSelect.hide();
        return this;
    }

    this.jView.css({'cursor': 'pointer'});
    this.jSelect.show();
    return this;
};


Triton.ComboBox.prototype.setDisabled = function (disabled) {

    this.setTheme(this.options['theme'], disabled);

    this.disabled = disabled;

    this.checkLayout();

    return this;
};


Triton.ComboBox.prototype.change = function (unExecuteOnSelectedListener) {
    this.jSelect.trigger('change', unExecuteOnSelectedListener);
    return this;
};

Triton.ComboBox.prototype.getTableColumns = function () {
    return this.tableColumns;
};

Triton.ComboBox.prototype.setOptionList = function (optionList) {

    var selectedValue = this.getValue();

    var jSelect = this.jSelect;
    this.jSelect.empty();
    if (optionList != undefined) {

        for (var i = 0, l = optionList.length; i < l; i++) {
            var option = optionList[i];

            var name = option['name'];
            var value = option['value'];

            var selected = '';
            if ((selectedValue != undefined && selectedValue == value) || option['selected'] == true) {
                selected = 'selected';
            }

            var jOption = jQuery('<option value="' + value + '" ' + selected + '>' + name + '</option>');
            jOption.data('triton-combo-box-option', option);
            jSelect.append(jOption);
        }
    }

    var jSelectText = this.jSelectText;
    var name = jSelect.children("option:selected").text();
    jSelectText.text(name);

    this.checkLayout();
};

Triton.ComboBox.prototype.setValue = function (value, unExecuteOnSelectedListener) {

    var jOptionList = this.jView.find('option');
    var jOptionListLength = jOptionList.length;
    if (jOptionListLength > 0) {

        if (value == undefined)
            value = this.defaultValue;
        if (value == undefined) {

            // 선택 된 것 설정
            //var jSelectedOption = jOptionList.filter(':selected');
            //if ( jSelectedOption.length == 0 )
            //    jSelectedOption = jOptionList.eq(0);

            // 처음 항목으로 선택
            var jSelectedOption = jOptionList.eq(0);
            value = jSelectedOption.attr('value');
        }

        for (var i = 0, l = jOptionListLength; i < l; i++) {

            var jOption = jOptionList.eq(i);
            var optionValue = jOption.attr('value');
            if (optionValue == value) {
                jOption.prop('selected', true);
            } else {
                jOption.prop('selected', false);
            }
        }

        //jOptionList.prop('selected', false);
        //jOptionList.eq(0).prop('selected', true);
    }

    this.change(unExecuteOnSelectedListener);

    return this;
};

Triton.ComboBox.prototype.getValue = function () {
    var jSelected = this.jView.find('option:selected');
    return jSelected.attr('value');
};

Triton.ComboBox.prototype.getSelectedOption = function () {
    var jSelected = this.jView.find('option:selected');
    return jSelected.data('triton-combo-box-option');
};

Triton.ComboBox.prototype.val = function (value, unExecuteOnSelectedListener) {

    if (value != undefined) {
        return this.setValue(value, unExecuteOnSelectedListener);
    } else {
        return this.getValue();
    }
};


Triton.ComboBox.prototype.refreshThemeOptions = function () {
    return this;
};

Triton.ComboBox.defaultValue = undefined;
Triton.ComboBox.setDefaultValue = function (defaultValue) {
    Triton.ComboBox.defaultValue = defaultValue;
};

Triton.ComboBox.Mode = {
    SELECT: 1,
    POPUP: 2,
    MIX: 3
};

Triton.ComboBox.maxSelectCount = undefined;
Triton.ComboBox.setMaxSelectCount = function (maxSelectCount) {
    Triton.ComboBox.maxSelectCount = maxSelectCount;
};

Triton.ComboBox.popupUrl = undefined;
Triton.ComboBox.setPopupUrl = function (url) {
    Triton.ComboBox.popupUrl = url;
};

Triton.ComboBox.mode = undefined;
Triton.ComboBox.setMode = function (mode) {
    Triton.ComboBox.mode = mode;
};

Triton.ComboBox.initValues = function (type) {

    if (type == Triton.SiteType.Polaris2 || type == Triton.SiteType.Pluto) {

        Triton.ComboBox.setMode(Triton.ComboBox.Mode.MIX);
        Triton.ComboBox.setMaxSelectCount(20);
        Triton.ComboBox.setPopupUrl(Triton.PopupUrl.COMBO_BOX);

    } else if (type == Triton.SiteType.Polaris) {

        Triton.ComboBox.setMode(Triton.ComboBox.Mode.MIX);
        Triton.ComboBox.setMaxSelectCount(20);
        Triton.ComboBox.setPopupUrl(Triton.PopupUrl.COMBO_BOX);

    } else if (type == Triton.SiteType.Callisto) {

        Triton.ComboBox.setMode(Triton.ComboBox.Mode.MIX);
        Triton.ComboBox.setMaxSelectCount(20);
        Triton.ComboBox.setPopupUrl(Triton.PopupUrl.COMBO_BOX);
    }

};

Triton.ComboBox.Theme = {

    Normal: {

        css: {

            'background-color': TritonTheme.COMBO_BOX_BACKGROUND_COLOR

        },

        // pcCss: {
        //     'width': ''
        // },
        // tabletCss: {
        //     'width': '100%'
        // },
        // mobileCss: {
        //     'width': '100%'
        // },

        text: {

            css: {

                'border': '1px solid ' + TritonTheme.COMBO_BOX_BORDER_COLOR,
                'color': TritonTheme.COMBO_BOX_TEXT_COLOR
            }
        },

        arrow: {

            css: {

                'color': TritonTheme.COMBO_BOX_ARROW_COLOR
            }
        },

        select: {

            css: {

                'background-color': TritonTheme.COMBO_BOX_BACKGROUND_COLOR,
                'color': TritonTheme.COMBO_BOX_TEXT_COLOR
            }
        },


        disabled: {

            css: {

                'background-color': TritonTheme.COMBO_BOX_DISABLED_BACKGROUND_COLOR

            },

            text: {

                css: {

                    'border': '1px solid ' + TritonTheme.COMBO_BOX_DISABLED_BORDER_COLOR,
                    'color': TritonTheme.COMBO_BOX_DISABLED_TEXT_COLOR
                }
            },

            arrow: {

                css: {

                    'color': TritonTheme.COMBO_BOX_DISABLED_TEXT_COLOR
                }
            },

            select: {

                css: {

                    'color': TritonTheme.COMBO_BOX_DISABLED_TEXT_COLOR
                }
            }
        }

    },

    Full: {

        css: {
            'background-color': TritonTheme.COMBO_BOX_BACKGROUND_COLOR,
            'width': '100%'
        },

        text: {

            css: {

                'border': '1px solid ' + TritonTheme.COMBO_BOX_BORDER_COLOR,
                'color': TritonTheme.COMBO_BOX_TEXT_COLOR
            }
        },

        arrow: {

            css: {

                'color': TritonTheme.COMBO_BOX_ARROW_COLOR
            }
        },

        select: {

            css: {

                'background-color': TritonTheme.COMBO_BOX_BACKGROUND_COLOR,
                'color': TritonTheme.COMBO_BOX_TEXT_COLOR
            }
        },


        disabled: {

            css: {

                'background-color': TritonTheme.COMBO_BOX_DISABLED_BACKGROUND_COLOR

            },

            text: {

                css: {

                    'border': '1px solid ' + TritonTheme.COMBO_BOX_DISABLED_BORDER_COLOR,
                    'color': TritonTheme.COMBO_BOX_DISABLED_TEXT_COLOR
                }
            },

            arrow: {

                css: {

                    'color': TritonTheme.COMBO_BOX_DISABLED_TEXT_COLOR
                }
            },

            select: {

                css: {

                    'color': TritonTheme.COMBO_BOX_DISABLED_TEXT_COLOR
                }
            }
        }
    },

    SubMenuTitle: {

        css: {

            width: '240px'
        },

        text: {

            css: {

                'height': '30px',
                'line-height': '30px',
                'background-color': TritonTheme.COMBO_BOX_SUB_MENU_TITLE_BACKGROUND_COLOR,
                'color': TritonTheme.COMBO_BOX_SUB_MENU_TITLE_TEXT_COLOR,
                'border': 'none',
                'padding-left': '10px',
                'padding-right': '10px',
                'font-family': 'notokr-medium, NanumGothicBold'
            }
        },

        arrow: {

            css: {

                'color': TritonTheme.COMBO_BOX_SUB_MENU_TITLE_TEXT_COLOR
            }
        },

        select: {

            css: {

                'background-color': TritonTheme.COMBO_BOX_SUB_MENU_TITLE_BACKGROUND_COLOR,
                'color': TritonTheme.COMBO_BOX_SUB_MENU_TITLE_TEXT_COLOR
            }
        }
    },

    SubMenuTitleSelectWhite: {

        css: {

            width: '240px'
        },

        text: {

            css: {

                'height': '30px',
                'line-height': '30px',
                'background-color': TritonTheme.COMBO_BOX_SUB_MENU_TITLE_BACKGROUND_COLOR,
                'color': TritonTheme.COMBO_BOX_SUB_MENU_TITLE_TEXT_COLOR,
                'border': 'none',
                'padding-left': '10px',
                'padding-right': '10px',
                'font-weight': 'bold'
            }
        },

        arrow: {

            css: {

                'color': TritonTheme.COMBO_BOX_SUB_MENU_TITLE_TEXT_COLOR
            }
        },

        select: {

            css: {

                'background-color': TritonTheme.COMBO_BOX_SUB_MENU_TITLE_BACKGROUND_COLOR,
                'color': TritonTheme.COMBO_BOX_SUB_MENU_TITLE_TEXT_COLOR
            }
        }
    },


    Category: {

        css: {
            'background-color': TritonTheme.COMBO_BOX_CATEGORY_BACKGROUND_COLOR,
            'float': 'left',
            'width': '180px'
        },

        // pcCss: {
        //     'float': 'left',
        //     'width': '180px'
        // },
        // tabletCss: {
        //     'float': 'left',
        //     'width': '180px'
        // },
        // mobileCss: {
        //     'float': '',
        //     'width': '100%'
        // },


        text: {

            css: {
                'border': '1px solid ' + TritonTheme.COMBO_BOX_CATEGORY_BORDER_COLOR,
                'color': TritonTheme.COMBO_BOX_CATEGORY_TEXT_COLOR,
                'font-family': 'notokr-medium, NanumGothicBold'
            }
        },

        arrow: {

            css: {

                'color': TritonTheme.COMBO_BOX_CATEGORY_ARROW_COLOR
            }
        },

        select: {

            css: {

                'background-color': TritonTheme.COMBO_BOX_CATEGORY_BACKGROUND_COLOR,
                'color': TritonTheme.COMBO_BOX_CATEGORY_TEXT_COLOR
            }
        }
    },

    CategoryNotFirst: {


        css: {
            'background-color': TritonTheme.COMBO_BOX_CATEGORY_BACKGROUND_COLOR,
            'float': 'left',
            'width': '180px',
            'margin-left': '10px'
        },

        // pcCss: {
        //     'float': 'left',
        //     'width': '180px',
        //     'margin-left': '10px'
        // },
        // tabletCss: {
        //     'float': 'left',
        //     'width': '180px',
        //     'margin-left': '0'
        // },
        // mobileCss: {
        //     'float': '',
        //     'width': '100%'
        // },


        text: {

            css: {
                'border': '1px solid ' + TritonTheme.COMBO_BOX_CATEGORY_BORDER_COLOR,
                'color': TritonTheme.COMBO_BOX_CATEGORY_TEXT_COLOR,
                'font-family': 'notokr-medium, NanumGothicBold'
            }
        },

        arrow: {

            css: {

                'color': TritonTheme.COMBO_BOX_CATEGORY_ARROW_COLOR
            }
        },

        select: {

            css: {

                'background-color': TritonTheme.COMBO_BOX_CATEGORY_BACKGROUND_COLOR,
                'color': TritonTheme.COMBO_BOX_CATEGORY_TEXT_COLOR
            }
        }
    }

};

Triton.ComboBox.NAME = 'triton_combo_box';
Triton.ComboBox.HTML = '<div class="triton_combo_box" style="position:relative;width:250px; text-align: left;" >' +
    '<div class="triton_combo_box_text" style="text-overflow:ellipsis;white-space:nowrap;word-wrap:normal;overflow:hidden;border:1px solid #d7d7d5;position:relative;padding-left:10px;padding-right:25px;;height: 30px;line-height:30px;color:rgb(93, 93, 93);font-size:13px;font-family: notokr-regular, NanumGothic;"></div>' +
    '<div class="triton_combo_box_arrow" style="color:#b0aaa8;position:absolute;text-align:right;left:0px;top:0px;right:0px;bottom:0px;padding-left:11px;padding-right:11px;padding-top:1px;padding-bottom:1px;height:30px;line-height:30px;font-size:10px;font-family: notokr-regular, NanumGothic;">▼</div>' +
    '<select title="Triton ComboBox" class="triton_combo_box_select triton_content triton_value triton_select" style="' +
    'cursor:pointer;box-sizing:border-box;padding-left:10px;height:30px;padding-right:10px;position:absolute;left:0px;right:0px;color:rgb(93, 93, 93);top:0px;bottom:0px; width:100%; opacity:0; filter: alpha(opacity=0); outline:none;font-size:13px;font-family: notokr-regular, NanumGothic;">' +
    '</select>' +
    '</div>';
Triton.ComboBox.create = function (options) {
    return new Triton.ComboBox(options).getJView();
};
Triton.ComboBox.append = function (j, options) {
    var jView = Triton.ComboBox.create(options);
    j.append(jView);
    return Triton.findTritonContent(jView);
};

Triton.ComboBox.change = function (j, unExecuteOnSelectedListener) {
    var jSelect = j.find('.triton_select');
    jSelect.trigger('change', unExecuteOnSelectedListener);
};
Triton.ComboBox.setValue = function (j, value, unExecuteOnSelectedListener) {

    var jOptionList = j.find('option');
    for (var i = 0, l = jOptionList.length; i < l; i++) {

        var jOption = jOptionList.eq(i);
        var optionValue = jOption.attr('value');
        if (optionValue == value) {
            jOption.prop('selected', true);
            Triton.ComboBox.change(j, unExecuteOnSelectedListener);
            return;
        }
    }

    jOptionList.prop('selected', false);
    Triton.ComboBox.change(j, unExecuteOnSelectedListener);
};


// onSelect : function( text )
// inputCss : {}
// inputAttr : {}

Triton.DatetimePicker = function (options) {
    this.init(options);
};


Triton.DatetimePicker.Module = {
    JQUERY_UI : 1,
    TRITON : 2
};

Triton.DatetimePicker.module = Triton.DatetimePicker.Module.TRITON;

Triton.DatetimePicker.unuseSecond = false;
Triton.DatetimePicker.setUnuseSecond = function( unuse ) {
    Triton.DatetimePicker.unuseSecond = unuse;
}

Triton.DatetimePicker.hhmmssByInputBoxAtOnce = false;
Triton.DatetimePicker.setHHMMSSByInputBoxAtOnce = function( check ) {
    Triton.DatetimePicker.hhmmssByInputBoxAtOnce = check;
}

Triton.DatetimePicker.hhmmssByInputBox = false;
Triton.DatetimePicker.setHHMMSSByInputBox = function( hhmmssByInputBox ) {
    Triton.DatetimePicker.hhmmssByInputBox = hhmmssByInputBox;
}

Triton.DatetimePicker.DAYS_LABELS = ['일', '월', '화', '수', '목', '금', '토'];
Triton.DatetimePicker.DAYS_WIDTH = ['14.5%', '14.2%', '14.2%', '14.2%', '14.2%', '14.2%', '14.5%'];
Triton.DatetimePicker.DAYS_COLOR = ['#e95050', '', '', '', '', '', '#3291d4'];

Triton.DatetimePicker.prototype = new Triton();

Triton.DatetimePicker.prototype.hide = function() {

    var triton = this;
    var j = triton.getJView();

    var jValue = Triton.findTritonValue(j);

    var key = jValue.attr('triton-datetime-picker-key');
    if ( String.isNotBlank(key) ) {

        var dimKey = key + '_dim';
        jValue.attr('triton-datetime-picker-key', '');
        jQuery('body .' + key).remove();
        jQuery('body .' + dimKey).remove();
        jQuery(document).off('click.' + key);
    }
};

Triton.DatetimePicker.prototype.init = function (options) {

    options = Triton.combineOptions(options, {
        theme: Triton.DatetimePicker.Theme.Normal
    });
    var j = Triton.createJQueryElement(Triton.DatetimePicker.HTML);
    j = Triton.applyOptions(j, options);

    var onSelect = undefined;
    var type = Lia.pd(Triton.DatetimePicker.TYPE_DEFAULT, options,'type');
    var module = Lia.pd(Triton.DatetimePicker.module, options,'module');
    var unuseSecond = Lia.pd( Triton.DatetimePicker.unuseSecond, options, 'unuseSecond');
    var hhmmssByInputBox = Lia.pd( Triton.DatetimePicker.hhmmssByInputBox, options, 'hhmmssByInputBox');
    var hhmmssByInputBoxAtOnce = Lia.pd( Triton.DatetimePicker.hhmmssByInputBoxAtOnce, options, 'hhmmssByInputBoxAtOnce');

    var jValue = Triton.findTritonValue(j);
    var width = (type == Triton.DatetimePicker.TYPE_DATETIME) ? Triton.DatetimePicker.DATETIME_WIDTH : Triton.DatetimePicker.DATE_WIDTH;
    j.css('width', width);

    j.data('triton-options', options);

    var inputOptions = Lia.p(options, 'inputOptions');
    if (inputOptions != undefined) {
        jValue = Triton.applyOptions(jValue, inputOptions);
    }

    if ( module == Triton.DatetimePicker.Module.TRITON ) {

        if (type == Triton.DatetimePicker.TYPE_DATETIME) {

            if ( unuseSecond == true ) {
                jValue.attr('placeholder','YYYY-MM-DD hh:mm');
            } else {
                jValue.attr('placeholder','YYYY-MM-DD hh:mm:ss');
            }

        } else {
            jValue.attr('placeholder','YYYY-MM-DD');
        }

        jValue.on('focusout', {
            type : type,
            unuseSecond : unuseSecond
        }, function(e) {

            var type = e.data.type;
            var unuseSecond = e.data.unuseSecond;
            var jValue = $(this);

            var v = jValue.val();
            v = v.replace(/[^0-9]/g, '');

            var nv = '';

            var YYYY = Lia.pcd('', v.substr(0, 4));
            nv += YYYY;

            var MM = Lia.pcd('', v.substr(4, 2));
            if ( String.isNotBlank(MM) ) {

                if ( MM > 12 ) {
                    MM = 12;
                }

                nv += '-' + MM;
            }

            var DD = Lia.pcd('',v.substr(6, 2));
            if ( String.isNotBlank(DD) ) {

                var dateObject = new Date(YYYY, parseInt(MM)-1);
                dateObject = dateObject.moveToLastDayOfMonth();
                var lastDay = dateObject.getDate();

                if ( DD > lastDay ) {
                    DD = lastDay;
                }

                nv += '-' + DD;
            }

            if (type == Triton.DatetimePicker.TYPE_DATETIME) {

                var hh = Lia.pcd('', v.substr(8, 2));
                if ( String.isNotBlank(hh) ) {

                    if ( hh > 23 ) {
                        hh = 23;
                    }

                    nv += ' ' + hh;
                }

                var mm = Lia.pcd('',v.substr(10, 2));
                if ( String.isNotBlank(mm) ) {

                    if ( mm > 59 ) {
                        mm = 59;
                    }

                    nv += ':' + mm;
                }

                if ( unuseSecond != true ) {

                    var ss = Lia.pcd('', v.substr(12, 2));
                    if ( String.isNotBlank(ss) ) {

                        if ( ss > 59 ) {
                            ss = 59;
                        }

                        nv += ':' + ss;
                    }


                }
            }

            jValue.val(nv);

        }).on('input', {
            type : type,
            unuseSecond : unuseSecond
        }, function( e ) {

            var type = e.data.type;
            var unuseSecond = e.data.unuseSecond;
            var jValue = $(this);

            var v = jValue.val();
            v = v.replace(/[^0-9]/g, '');

            var nv = '';

            var YYYY = Lia.pcd('', v.substr(0, 4));
            nv += YYYY;

            var MM = Lia.pcd('', v.substr(4, 2));
            if ( String.isNotBlank(MM) ) {
                nv += '-' + MM;
            }

            var DD = Lia.pcd('',v.substr(6, 2));
            if ( String.isNotBlank(DD) ) {
                nv += '-' + DD;
            }

            if (type == Triton.DatetimePicker.TYPE_DATETIME) {

                var hh = Lia.pcd('', v.substr(8, 2));
                if ( String.isNotBlank(hh) ) {
                    nv += ' ' + hh;
                }

                var mm = Lia.pcd('',v.substr(10, 2));
                if ( String.isNotBlank(mm) ) {
                    nv += ':' + mm;
                }

                if ( unuseSecond != true ) {
                    var ss = Lia.pcd('', v.substr(12, 2));
                    if ( String.isNotBlank(ss) ) {
                        nv += ':' + ss;
                    }

                }
            }

            jValue.val(nv);

        });


        j.find('.triton_datetime_trigger_button').on('click', {
            triton : this,
            j : j,
            type : type,
            unuseSecond: unuseSecond,
            hhmmssByInputBox : hhmmssByInputBox,
            hhmmssByInputBoxAtOnce : hhmmssByInputBoxAtOnce,
            options : options,
            jValue : jValue
        }, function(e) {

            e.stopPropagation();

            var j = e.data.j;
            var type = e.data.type;
            var unuseSecond = e.data.unuseSecond;
            var options = e.data.options;
            var triton = e.data.triton;
            var hhmmssByInputBox = e.data.hhmmssByInputBox;
            var hhmmssByInputBoxAtOnce = e.data.hhmmssByInputBoxAtOnce;

            if ( triton.disabled == true ) {
                return;
            }

            if ( String.isNotBlank( jValue.attr('triton-datetime-picker-key') ) ) {
                return;
            }

            var o =  j.offset();

            var x = o.left;
            var y = o.top + j.height();
            var key = 'triton_datetime_picker_popup_' + Lia.getTimestamp();
            var dimKey = key + '_dim';

            var v = jValue.val();

            var selectedDate = undefined;
            if ( String.isNotBlank(v) ) {
                selectedDate = Date.parse(v);
            } else {

                var hour = Lia.pcd(0, options, 'hour');
                var minute = Lia.pcd(0, options, 'minute');
                var second = Lia.pcd(0, options, 'second');

                selectedDate = new Date();
                selectedDate.setHours(hour ,minute, second);
            }

            jValue.attr('triton-datetime-picker-key', key);

            // TODO : z-index 100000 대로
            var zIndex = 100000;

            var jContainerDim = jQuery('<div class="'+dimKey+'"></div>');
            jContainerDim.on('click', {
                triton : triton
            }, function(e){

                var triton = e.data.triton;

                e.stopPropagation();
                triton.hide();
            });
            jContainerDim.css({'position' : 'fixed', 'top' : 0, 'left' : 0, 'right' : 0, 'bottom' : 0, 'z-index': zIndex });
            jQuery('body').append(jContainerDim);

            var jContainer = jQuery('<div class="'+key+'"></div>');
            jContainer.on('click', function(e){
                e.stopPropagation();
            });

            jContainer.css({ 'background-color' : '#ffffff', 'padding' : '5px', 'width' : '220px','position':'absolute',
                'top' : y + 'px', 'left' : x + 'px', 'border-radius' : '5px', 'border' : '1px solid rgb(225, 225, 225)',
                'z-index' : (zIndex+1)
            });
            jQuery('body').append(jContainer);

            var backgroundColor = 'rgb(242, 246, 250)';
            var borderColor = 'rgb(225, 225, 225)';

            var jYM = jQuery('<div></div>');
            jYM.css({
                'background-color' : backgroundColor,
                'border-radius' : '5px',
                'border' : '1px solid ' + borderColor,
                'padding-top' : '5px',
                'padding-bottom' : '5px',
                'text-align' : 'center'
            })

            jContainer.append(jYM);

            var jDate = jQuery('<div></div>');
            jDate.css({
                'border-radius' : '5px',
                'border' : '1px solid ' + borderColor,
                'margin-top' : '5px',
                'padding' : '5px'
            });
            jContainer.append(jDate);

            jDate.attr('triton-datetime-picker-date', selectedDate.toString('yyyy-MM-dd'));

            if (type == Triton.DatetimePicker.TYPE_DATETIME) {

                var jDateTime = jQuery('<div></div>');
                jDateTime.css({
                    'border-radius': '5px',
                    'border': '1px solid ' + borderColor,
                    'margin-top': '5px',
                    'padding': '5px'
                });
                jContainer.append(jDateTime);

                var jHHMMSSInput;
                var jMMSelect;
                var jHHSelect;
                var jSSSelect = undefined;

                if ( hhmmssByInputBoxAtOnce ) {

                    var inputTitle = '시분초';
                    if ( unuseSecond ) {
                        inputTitle = '시분'
                    }

                    var jHHMMSS = jQuery('<div style="overflow:auto;">' +
                        '<div style="line-height:20px;font-size:14px;float:left;width:60px;padding-left:10px;font-family:notokr-medium, NanumGothicBold;">'+inputTitle+'</div>' +
                        '<div class="triton_datetime_picker_hhmmss" style="float:left;"></div>' +
                        '</div>');

                    jHHMMSSInput = $('<input type="text"></input>');

                    jHHMMSSInput.css({
                        'font-family': 'notokr-medium, NanumGothicBold',
                        'border': '1px solid ' + borderColor,
                        'text-align': 'left',
                        'padding-left' : '10px',
                        'padding-right' : '10px',
                        'width': '100px'
                    });

                    jHHMMSS.find('.triton_datetime_picker_hhmmss').append(jHHMMSSInput);

                    jHHMMSSInput.on('input', {
                        type : type,
                        unuseSecond : unuseSecond
                    }, function( e ) {

                        var type = e.data.type;
                        var unuseSecond = e.data.unuseSecond;
                        var jValue = $(this);

                        var v = jValue.val();
                        v = v.replace(/[^0-9]/g, '');

                        var nv = '';

                        if (type == Triton.DatetimePicker.TYPE_DATETIME) {

                            var hh = Lia.pcd('', v.substr(0, 2));
                            if ( String.isNotBlank(hh) ) {
                                nv += '' + hh;
                            }

                            var mm = Lia.pcd('',v.substr(2, 2));
                            if ( String.isNotBlank(mm) ) {
                                nv += ':' + mm;
                            }

                            if ( unuseSecond != true ) {
                                var ss = Lia.pcd('', v.substr(4, 2));
                                if ( String.isNotBlank(ss) ) {
                                    nv += ':' + ss;
                                }

                            }
                        }

                        jValue.val(nv);
                    });

                    jDateTime.append(jHHMMSS);

                } else {


                    {
                        var jHH = jQuery('<div style="overflow:auto;">' +
                            '<div style="line-height:20px;font-size:14px;float:left;width:50px;padding-left:10px;font-family:notokr-medium, NanumGothicBold;">시</div>' +
                            '<div class="triton_datetime_picker_hh" style="float:left;"></div>' +
                            '</div>');

                        if ( hhmmssByInputBox ) {

                            jHHSelect = $('<input type="text"></input>');

                            jHHSelect.css({
                                'font-family': 'notokr-medium, NanumGothicBold',
                                'border': '1px solid ' + borderColor,
                                'text-align': 'left',
                                'padding-left' : '10px',
                                'padding-right' : '10px',
                                'width': '60px'
                            });

                            jHH.find('.triton_datetime_picker_hh').append(jHHSelect);

                            jHHSelect.numeric( {decimal: false, negative: false} );

                        } else {

                            jHHSelect = $('<select></select>');

                            jHHSelect.css({
                                'font-family': 'notokr-medium, NanumGothicBold',
                                'border': '1px solid ' + borderColor,
                                'text-align': 'center',
                                'width': '80px'
                            });

                            for ( var i = 0, l = 23; i <= l; i++ ) {

                                var s = i;
                                if ( s < 10 ) {
                                    s = '0' + s;
                                }

                                jHHSelect.append('<option value="'+i+'">'+s+'</option');
                            }

                            jHH.find('.triton_datetime_picker_hh').append(jHHSelect);
                        }

                        jDateTime.append(jHH);

                    }




                    {
                        var jMM = jQuery('<div style="overflow:auto;margin-top:5px;">' +
                            '<div style="line-height:20px;font-size:14px;float:left;width:50px;padding-left:10px;font-family:notokr-medium, NanumGothicBold;">분</div>' +
                            '<div class="triton_datetime_picker_mm" style="float:left;"></div>' +
                            '</div>');

                        if ( hhmmssByInputBox ) {

                            jMMSelect = $('<input type="text"></input>');

                            jMMSelect.css({
                                'font-family': 'notokr-medium, NanumGothicBold',
                                'border': '1px solid ' + borderColor,
                                'text-align': 'left',
                                'padding-left' : '10px',
                                'padding-right' : '10px',
                                'width': '60px'
                            });

                            jMM.find('.triton_datetime_picker_mm').append(jMMSelect);

                            jMMSelect.numeric( {decimal: false, negative: false} );

                        } else {

                            jMMSelect = $('<select></select>');

                            jMMSelect.css({
                                'font-family': 'notokr-medium, NanumGothicBold',
                                'border': '1px solid ' + borderColor,
                                'text-align': 'center',
                                'width': '80px'
                            });

                            for ( var i = 0, l = 59; i <= l; i++ ) {

                                var s = i;
                                if ( s < 10 ) {
                                    s = '0' + s;
                                }

                                jMMSelect.append('<option value="'+i+'">'+s+'</option');
                            }

                            jMM.find('.triton_datetime_picker_mm').append(jMMSelect);
                        }


                        jDateTime.append(jMM);
                    }

                    if ( unuseSecond != true ) {

                        var jSS = jQuery('<div style="overflow:auto;margin-top:5px;">' +
                            '<div style="line-height:20px;font-size:14px;float:left;width:50px;padding-left:10px;font-family:notokr-medium, NanumGothicBold;">초</div>' +
                            '<div class="triton_datetime_picker_ss" style="float:left;"></div>' +
                            '</div>');

                        if ( hhmmssByInputBox ) {

                            jSSSelect = $('<input type="text"></input>');

                            jSSSelect.css({
                                'font-family': 'notokr-medium, NanumGothicBold',
                                'border': '1px solid ' + borderColor,
                                'text-align': 'left',
                                'padding-left' : '10px',
                                'padding-right' : '10px',
                                'width': '60px'
                            });

                            jSS.find('.triton_datetime_picker_ss').append(jSSSelect);
                            
                            jSSSelect.numeric(  {decimal: false, negative: false} );

                        } else {

                            jSSSelect = $('<select></select>');

                            jSSSelect.css({
                                'font-family': 'notokr-medium, NanumGothicBold',
                                'border': '1px solid ' + borderColor,
                                'text-align': 'center',
                                'width': '80px'
                            });

                            for ( var i = 0, l = 59; i <= l; i++ ) {

                                var s = i;
                                if ( s < 10 ) {
                                    s = '0' + s;
                                }

                                jSSSelect.append('<option value="'+i+'">'+s+'</option');
                            }

                            jSS.find('.triton_datetime_picker_ss').append(jSSSelect);

                        }

                        jDateTime.append(jSS);
                    }


                }







                var jButtonSection = jQuery('<div></div>');
                jButtonSection.css({
                    'margin-top' : '5px',
                    'text-align' : 'right'
                });
                jContainer.append(jButtonSection);

                if ( hhmmssByInputBox ) {

                    var hhmmss = '';
                    
                    var h = selectedDate.getHours();
                    if ( h < 10 ) {
                        h = '0' + h;
                    }

                    if ( hhmmssByInputBoxAtOnce ) {
                        hhmmss += h;
                    } else {
                        jHHSelect.val( h );
                    }

                    var m = selectedDate.getMinutes();
                    if ( m < 10 ) {
                        m = '0' + m;
                    }

                    if ( hhmmssByInputBoxAtOnce ) {
                        hhmmss += ':' + m;
                    } else {
                        jMMSelect.val( m );
                    }


                    if ( !unuseSecond ) {

                        var s = selectedDate.getSeconds();
                        if ( s < 10 ) {
                            s = '0' + s;
                        }

                        if ( hhmmssByInputBoxAtOnce ) {
                            hhmmss += ':' + s;
                        } else {
                            jSSSelect.val( s );
                        }
                    }

                    if ( hhmmssByInputBoxAtOnce ) {
                        jHHMMSSInput.val(hhmmss);
                    }

                    // jDateTime.find('input').on('focus', function() {
                    //     $(this).val('');
                    // });


                    jDateTime.find('input').on('focusout', {
                        j : j,
                        jHHMMSSInput : jHHMMSSInput,
                        jHHSelect : jHHSelect,
                        jSSSelect : jSSSelect,
                        jMMSelect : jMMSelect,
                        key : key,
                        jValue : jValue,
                        type : type,
                        jDate : jDate,
                        hhmmssByInputBoxAtOnce : hhmmssByInputBoxAtOnce
                    }, function(e) {

                        var jHHSelect = e.data.jHHSelect;
                        var jSSSelect = e.data.jSSSelect;
                        var jMMSelect = e.data.jMMSelect;
                        var jHHMMSSInput = e.data.jHHMMSSInput;
                        var key = e.data.key;
                        var jValue = e.data.jValue;
                        var jDate = e.data.jDate;
                        var hhmmssByInputBoxAtOnce = e.data.hhmmssByInputBoxAtOnce;

                        var selectedDate = jDate.attr('triton-datetime-picker-date');

                        var hhmmss = '';

                        if( hhmmssByInputBoxAtOnce ) {

                            var v = jHHMMSSInput.val();
                            v = v.replace(/[^0-9]/g, '');

                            var nv = '';

                            var hh = Lia.pcd('', v.substr(0, 2));
                            if ( String.isNotBlank(hh) ) {

                                if ( hh >= 23 ) {
                                    hh = 23;
                                }

                                nv += hh;
                            }

                            var mm = Lia.pcd('',v.substr(2, 2));
                            if ( String.isNotBlank(mm) ) {

                                if ( mm >= 60 ) {
                                    mm = 59;
                                }

                                nv += ':' + mm;
                            }

                            if ( unuseSecond != true ) {
                                var ss = Lia.pcd('', v.substr(4, 2));
                                if ( String.isNotBlank(ss) ) {

                                    if ( ss >= 60 ) {
                                        ss = 59;
                                    }

                                    nv += ':' + ss;
                                }
                            }

                            hhmmss = nv;
                            jHHMMSSInput.val(nv);

                        } else {


                            var h = parseInt(Lia.pcd('0', jHHSelect.val()));
                            if ( h >= 23 ) {
                                h = 23;
                            }

                            if ( h < 10 ) {
                                h = '0' + h;
                            }

                            hhmmss += h;
                            jHHSelect.val(h);

                            var m = parseInt(Lia.pcd('0', jMMSelect.val()));
                            if ( m >= 60 ) {
                                m = 59;
                            }

                            if ( m < 10 ) {
                                m = '0' + m;
                            }

                            hhmmss += ":" + m;
                            jMMSelect.val(m);

                            var s = '';
                            if (jSSSelect != undefined){

                                s = parseInt(Lia.pcd('0', jSSSelect.val()));
                                if ( s >= 60 ) {
                                    s = 59;
                                }

                                if ( s < 10 ) {
                                    s = '0' + s;
                                }

                                hhmmss += ":" + s;
                                jSSSelect.val(s);
                            }

                        }


                        var text = selectedDate.toString('yyyy-MM-dd') + ' ' + hhmmss;
                        jValue.val(text);
                        Triton.DatetimePicker.onSelect.call(jValue.get(0), text);
                    });


                } else {

                    jHHSelect.val( selectedDate.getHours() );

                    var minutes = selectedDate.getMinutes();
                    jMMSelect.val( minutes );

                    if ( jSSSelect != undefined ) {
                        jSSSelect.val( selectedDate.getSeconds() );
                    }

                    jDateTime.find('select').on('change', {
                        j : j,
                        jHHSelect : jHHSelect,
                        jSSSelect : jSSSelect,
                        jMMSelect : jMMSelect,
                        key : key,
                        jValue : jValue,
                        type : type,
                        jDate : jDate
                    }, function(e) {

                        var jHHSelect = e.data.jHHSelect;
                        var jSSSelect = e.data.jSSSelect;
                        var jMMSelect = e.data.jMMSelect;
                        var key = e.data.key;
                        var jValue = e.data.jValue;
                        var jDate = e.data.jDate;

                        var selectedDate = jDate.attr('triton-datetime-picker-date');

                        var h = jHHSelect.val();
                        if ( h < 10 ) {
                            h = '0' + h;
                        }

                        var m = jMMSelect.val();
                        if ( m < 10 ) {
                            m = '0' + m;
                        }

                        var s = '';
                        if (jSSSelect != undefined){

                            s = jSSSelect.val();
                            if ( s < 10 ) {
                                s= '0' + s;
                            }

                            s = ":" + s;
                        }

                        var text = selectedDate.toString('yyyy-MM-dd') + ' ' + h + ':' + m + s;
                        jValue.val(text);

                        Triton.DatetimePicker.onSelect.call(jValue.get(0), text);
                    });


                }



                new Triton.FlatButton({
                    content : '설정',
                    theme : Triton.FlatButton.Theme.DatetimePicker,
                    appendTo : jButtonSection,
                    key : key,
                    jDateTime : jDateTime,
                    jValue : jValue,
                    triton: triton,
                    hhmmssByInputBox : hhmmssByInputBox,
                    onClick : function(e) {

                        e.stopPropagation();

                        var key = e.data.key;
                        var jValue = e.data.jValue;
                        var jDateTime = e.data.jDateTime;
                        var triton = e.data.triton;
                        var hhmmssByInputBox = e.data.hhmmssByInputBox;

                        if ( hhmmssByInputBox ) {
                            jDateTime.find('input').eq(0).trigger('focuseout');
                        } else {
                            jDateTime.find('select').eq(0).trigger('change');
                        }

                        triton.hide();
                    }
                });
            }


            {
                var jY = jQuery('<select></select>');
                for( var i = 1930, l =  (new Date().getFullYear() + 2); i <= l; i++ ) {
                    jY.append('<option value="'+i+'">'+i+'</option>');
                }

                jY.css({
                    'font-family': 'notokr-medium, NanumGothicBold',
                    'border' : '1px solid ' + borderColor,
                    'text-align' : 'center',
                    'width' : '80px'
                });

                var jM = jQuery('<select></select>');
                jM.css({
                    'font-family': 'notokr-medium, NanumGothicBold',
                    'border' : '1px solid ' + borderColor,
                    'text-align' : 'center',
                    'width' : '60px',
                    'margin-left' : '5px'
                });

                for( var i = 1, l = 12; i <= l; i++ ) {
                    jM.append('<option value="'+i+'">'+i+'</option>');
                }

                jYM.append(jY);
                jYM.append(jM);

                var year = selectedDate.getFullYear();
                jY.val(year);

                var month = selectedDate.getMonth() + 1;
                jM.val(month);

                jY.on('change', {
                    jM : jM
                }, function( e ) {
                    e.data.jM.trigger('change');
                });

                jM.on('change', {
                    jDate : jDate,
                    jValue : jValue,
                    jY : jY
                }, function(e) {


                    var jM = $(this);
                    var jY = e.data.jY;
                    var jValue = e.data.jValue;

                    var jDate = e.data.jDate;
                    jDate.empty();

                    var dayWeekSection = new Triton.Section({
                        appendTo: jDate,
                        css: {
                            'position': 'relative',
                            'overflow': 'auto'
                        }
                    });

                    for (var i = 0, l = Triton.DatetimePicker.DAYS_LABELS.length; i < l; i++) {

                        new Triton.Section({
                            appendTo: dayWeekSection,
                            css: {
                                'float': 'left',
                                'font-family': 'notokr-medium, NanumGothicBold',
                                'line-height': '30px',
                                'text-align': 'center',
                                'height': '30px',
                                'width': Triton.DatetimePicker.DAYS_WIDTH[i],
                                'color': Triton.DatetimePicker.DAYS_COLOR[i],
                                'font-size': '14px',
                                'box-sizing': 'border-box'
                            },
                            content: Triton.Calendar.DAYS_LABELS[i]
                        });
                    }

                    var daysSection = new Triton.Section({
                        appendTo: jDate,
                        css: {
                            'position': 'relative',
                            'overflow': 'auto',
                            'clear': 'both'
                        }
                    });

                    var calendarRowSection = new Triton.Section({
                        appendTo: daysSection,
                        css: {
                            'position': 'relative',
                            'overflow': 'hidden',
                            'clear': 'both'
                        }
                    });

                    var currentDate = new Date();

                    var dateYear = parseInt(jY.val());
                    var dateMonth = parseInt(jM.val())-1;

                    var firstDay = new Date(dateYear, dateMonth, 1);
                    var lastDay = new Date(dateYear, dateMonth, 1).moveToLastDayOfMonth();

                    var lastDayInPrevMonth = new Date(dateYear, dateMonth, 1).addDays(-1);
                    var prevMonthLength = Date.getDaysInMonth(lastDayInPrevMonth.getFullYear(), lastDayInPrevMonth.getMonth());

                    var monthLength = Date.getDaysInMonth(dateYear, dateMonth);

                    var startDate = new Date(dateYear, dateMonth, 1).moveToDayOfWeek(0, -1);
                    var dayLength = prevMonthLength - startDate.getDate() + 1 + monthLength;
                    var lineCount = Math.ceil(dayLength / 7);
                    var endDate = startDate.clone().addDays(lineCount * 7).addMilliseconds(-1);

                    var weekStartDate = startDate.clone();
                    var weekEndDate = startDate.clone().addDays(7).addMilliseconds(-1);

                    for (var i = 0; i < lineCount; i++) {

                        for (var j = 0; j < 7; j++) {

                            var loopDate = startDate.clone();
                            startDate.addDays(1);

                            var currentDateString = currentDate.toString('yyyy-MM-dd');
                            var loopDateString = loopDate.toString('yyyy-MM-dd');
                            var selectedString = '';
                            if ( selectedDate != undefined ) {
                                selectedString = selectedDate.toString('yyyy-MM-dd');
                            }

                            var borderColor = '#aaaaaa';
                            var isToday = (currentDateString == loopDateString);
                            var isSelected = (selectedString == loopDateString);
                            var backgroundColor = (isToday) ? '#f2f6fa' : '#ffffff';


                            var inPrevMonth = Date.compare(firstDay, loopDate) > 0;
                            var inNextMonth = Date.compare(lastDay, loopDate) < 0;
                            var inMonth = (!inPrevMonth && !inNextMonth);

                            var opacity = inMonth ? 1 : 0.3;


                            var calendarDaySectionOptions = {
                                appendTo: calendarRowSection,
                                addClass : isSelected?'triton_datetime_picker_popup_selected':'',
                                css: {
                                    'float': 'left',
                                    'position': 'relative',
                                    'width': Triton.DatetimePicker.DAYS_WIDTH[j],
                                    'background-color': backgroundColor,
                                    'box-sizing': 'border-box',
                                    'text-align' : 'center',
                                    'opacity': opacity,
                                    'font-family': 'notokr-regular, NanumGothic',
                                    'font-size': '13px',
                                    'line-height': '25px',
                                    'height': '25px',
                                    'color': Triton.DatetimePicker.DAYS_COLOR[j],
                                    'border' : isSelected?'1px solid '+borderColor:'1px solid #ffffff',
                                    'cursor' : 'pointer',
                                },
                                key : key,
                                jValue : jValue,
                                date: loopDate,
                                content: loopDate.getDate(),
                                type : type,
                                jDate : jDate,
                                borderColor : borderColor,
                                jContainer : jContainer,
                                triton: triton,
                                hhmmssByInputBox : hhmmssByInputBox,
                                jDateTime : jDateTime,
                                onMouseEnter : function(e) {

                                    var borderColor = e.data.borderColor;

                                    if ( $(this).hasClass('triton_datetime_picker_popup_selected') ) {
                                        return;
                                    }

                                    $(this).css({
                                        'border' : '1px solid '+ borderColor
                                    });

                                },
                                onMouseLeave : function() {

                                    if ( $(this).hasClass('triton_datetime_picker_popup_selected') ) {
                                        return;
                                    }

                                    $(this).css({
                                        'border' : '1px solid #ffffff'
                                    });
                                },

                                onClick : function(e) {

                                    e.stopPropagation();

                                    var triton = e.data.triton;
                                    var type = e.data.type;
                                    var borderColor = e.data.borderColor;
                                    var jDate = e.data.jDate;
                                    var jContainer = e.data.jContainer;
                                    var hhmmssByInputBox = e.data.hhmmssByInputBox;
                                    var jDateTime = e.data.jDateTime;
                                    var text = e.data.date.toString('yyyy-MM-dd');
                                    jDate.attr('triton-datetime-picker-date', text);

                                    if (type == Triton.DatetimePicker.TYPE_DATETIME) {

                                        jDate.find('.triton_datetime_picker_popup_selected').css({
                                            'border' : '1px solid #ffffff'
                                        });
                                        jDate.find('.triton_datetime_picker_popup_selected').removeClass('triton_datetime_picker_popup_selected');

                                        $(this).addClass('triton_datetime_picker_popup_selected');
                                        $(this).css({
                                            'border' : '1px solid '+ borderColor
                                        });


                                        if ( hhmmssByInputBox == true ) {
                                            jDateTime.find('input').eq(0).trigger('focusout');
                                        } else {
                                            jDateTime.find('select').eq(0).trigger('change');
                                        }



                                    } else {

                                        var key = e.data.key;
                                        var jValue = e.data.jValue;

                                        jValue.val(text);

                                        Triton.DatetimePicker.onSelect.call(jValue.get(0), text);

                                        triton.hide();
                                    }




                                }
                            };

                            new Triton.Section(calendarDaySectionOptions);

                        }
                    }
                });

                jM.trigger('change');
            }

            jQuery(document).on('click.' + key, {
                triton : triton
            }, function(e) {

                var triton = e.data.triton;
                triton.hide();
            });
        });


        // j.find('.triton_datetime_trigger_button').on('click', {
        //     jValue :jValue
        // }, function(e){
        //
        //     e.stopPropagation()
        //
        //     e.data.jValue.trigger('click');
        //
        // });
        j.find('.triton_datetime_trigger_button').on(Lia.Component.Event.STATUS_CHANGED, {
            component: this
        }, function (e) {

            var component = e.data.component;
            if (component.disabled == true) {
                return;
            }

            var status = e.status;
            var jButton = $(this);

            if (status == Lia.Component.Value.Button.Status.DEFAULT) {

                jButton.css({
                    'background-color': TritonTheme.DATETIME_PICKER_BACKGROUND_COLOR
                });

                if (String.isNotBlank(TritonTheme.DATETIME_PICKER_CALENDAR_PRESSED_IMAGE_URL)) {
                    jButton.find('img').attr({
                        'src': TritonTheme.DATETIME_PICKER_CALENDAR_IMAGE_URL
                    });
                }

            } else {

                jButton.css({
                    'background-color': TritonTheme.DATETIME_PICKER_HOVERING_BACKGROUND_COLOR
                });

                if (String.isNotBlank(TritonTheme.DATETIME_PICKER_CALENDAR_PRESSED_IMAGE_URL)) {
                    jButton.find('img').attr({
                        'src': TritonTheme.DATETIME_PICKER_CALENDAR_PRESSED_IMAGE_URL
                    });
                }
            }

        }).initButton();

        j.find('.triton_datetime_delete_button').on('click', {
            jValue: jValue
        }, function (e) {

            e.stopPropagation();
            e.preventDefault();

            var jValue = e.data.jValue;
            jValue.val('');

            var key = jValue.attr('triton-datetime-picker-key');
            if ( String.isNotBlank(key) ) {

                var dimKey = key + '_dim';

                jValue.attr('triton-datetime-picker-key', '');
                jQuery('body .' + key).remove();
                jQuery('body .' + dimKey).remove();
                jQuery(document).off('click.' + key);
            }
        });

    } else {

        if (type == Triton.DatetimePicker.TYPE_DATE) {

            jValue.datepicker({
                changeMonth: true,
                changeYear: true,
                controlType: 'select',
                dateFormat: 'yy-mm-dd',
                yearRange: '1930:' + (new Date().getFullYear() + 2),
                dayNames: ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'],
                dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'],
                monthNamesShort: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
                monthNames: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
                onSelect: Triton.DatetimePicker.onSelect
            });

        } else {

            var hour = Lia.p(options, 'hour');
            var minute = Lia.p(options, 'minute');
            var second = Lia.p(options, 'second');

            var timeFormat = 'HH:mm:ss';

            if (unuseSecond == true) {

                timeFormat = 'HH:mm';
                second = 0;
            }

            jValue.datetimepicker({
                hour: hour,
                minute: minute,
                second: second,
                changeMonth: true,
                changeYear: true,
                controlType: 'select',
                timeFormat: timeFormat,
                dateFormat: 'yy-mm-dd',
                yearRange: '1930:' + (new Date().getFullYear() + 2),
                dayNames: ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'],
                dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'],
                monthNamesShort: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
                monthNames: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
                onSelect: Triton.DatetimePicker.onSelect
            });
        }

        jValue.on('keyup', {
            component: this
        }, function (e) {

            var component = e.data.component;
            if (component.disabled == true) {
                return;
            }

            if (e.keyCode == Lia.KeyCode.DEL) {
                jQuery.datepicker._clearDate(this);
            }
        });

        j.find('.triton_datetime_trigger_button').on('click', {
            component: this
        }, function (e) {

            var component = e.data.component;
            if (component.disabled == true) {
                return;
            }

            var jThis = $(this);
            var jParent = jThis.parents('.triton_datetime_picker');
            var jValue = Triton.findTritonValue(jParent);
            jValue.trigger('focus');
        });


        //j.on(Lia.Component.Event.STATUS_CHANGED, function(e){
        //
        //    var status = e.status;
        //    var jButton = $(this).find('.triton_datetime_trigger_button');
        //
        //    if ( status == Lia.Component.Value.Button.Status.DEFAULT ) {
        //
        //        jButton.css({
        //            'background-color' : '#ffffff'
        //        });
        //
        //    } else {
        //
        //        jButton.css({
        //            'background-color' : '#f7f7f7'
        //        });
        //    }
        //
        //}).initButton();

        j.find('.triton_datetime_trigger_button').on(Lia.Component.Event.STATUS_CHANGED, {
            component: this
        }, function (e) {

            var component = e.data.component;
            if (component.disabled == true) {
                return;
            }

            var status = e.status;
            var jButton = $(this);

            if (status == Lia.Component.Value.Button.Status.DEFAULT) {

                jButton.css({
                    'background-color': TritonTheme.DATETIME_PICKER_BACKGROUND_COLOR
                });

                if (String.isNotBlank(TritonTheme.DATETIME_PICKER_CALENDAR_PRESSED_IMAGE_URL)) {
                    jButton.find('img').attr({
                        'src': TritonTheme.DATETIME_PICKER_CALENDAR_IMAGE_URL
                    });
                }

            } else {

                jButton.css({
                    'background-color': TritonTheme.DATETIME_PICKER_HOVERING_BACKGROUND_COLOR
                });

                if (String.isNotBlank(TritonTheme.DATETIME_PICKER_CALENDAR_PRESSED_IMAGE_URL)) {
                    jButton.find('img').attr({
                        'src': TritonTheme.DATETIME_PICKER_CALENDAR_PRESSED_IMAGE_URL
                    });
                }
            }

        }).initButton();

        j.find('.triton_datetime_delete_button').on('click', {
            //datetimePicker : this,
            jValue: jValue
        }, function (e) {

            e.stopPropagation();
            e.preventDefault();

            //e.data.datetimePicker.setValue('');
            jQuery.datepicker._clearDate(e.data.jValue);
        });

    }


    this.jView = j;
    this.jContent = Triton.findTritonContent(this.jView);
    this.jValue = Triton.findTritonValue(this.jView);

    this.initTriton(options);

    var disabled = Lia.pd(false, options, 'disabled');
    this.setDisabled(disabled);
};


Triton.DatetimePicker.prototype.setDisabled = function (disabled) {

    this.disabled = disabled;
    if (disabled == true) {
        this.jView.find('.triton_datetime_delete_button').hide();
        this.jView.find('.triton_datetime_trigger_button').css({
            'cursor': 'default',
            'border-color': TritonTheme.DATETIME_PICKER_DISABLED_BORDER_COLOR
        });
        this.jValue.css({
            'background-color': TritonTheme.DATETIME_PICKER_DISABLED_BACKGROUND_COLOR,
            'color': TritonTheme.DATETIME_PICKER_DISABLED_TEXT_COLOR
        });
        this.jValue.attr({'disabled': true});
    } else {
        this.jView.find('.triton_datetime_delete_button').show();
        this.jView.find('.triton_datetime_trigger_button').css({
            'cursor': 'pointer',
            'border-color': TritonTheme.DATETIME_PICKER_BORDER_COLOR
        });
        this.jValue.css({
            'background-color': TritonTheme.DATETIME_PICKER_BACKGROUND_COLOR,
            'color': TritonTheme.DATETIME_PICKER_TEXT_COLOR
        });
        this.jValue.attr({'disabled': false});
    }
};

Triton.DatetimePicker.TYPE_DATETIME = 'DATETIME';
Triton.DatetimePicker.TYPE_DATE = 'DATE';
Triton.DatetimePicker.TYPE_DEFAULT = 'DATETIME';

Triton.DatetimePicker.DATETIME_WIDTH = '215px';
Triton.DatetimePicker.DATE_WIDTH = '155px';

Triton.DatetimePicker.NAME = 'triton_datetime_picker';
Triton.DatetimePicker.HTML = '<div class="triton_datetime_picker" style="text-align:left;cursor:pointer;position:relative;border:1px solid ' + TritonTheme.DATETIME_PICKER_BORDER_COLOR + ';box-sizing:border-box;border-top-right-radius: 30px;border-bottom-right-radius: 30px;overflow:hidden;">' +
    '<input title="triton value" class="triton_value" type="text" style="box-sizing: border-box;border:none;height:30px;line-height:30px;width:100%;padding-left:10px;background-color:' + TritonTheme.DATETIME_PICKER_BACKGROUND_COLOR + ';color:' + TritonTheme.DATETIME_PICKER_TEXT_COLOR + '" />' +
    '<div class="triton_datetime_delete_button" style="position:absolute;top:0px;right:34px;width:32px;height:30px;">' +
        '<img alt="triton datetime delete button" src="' + TritonTheme.DATETIME_PICKER_DELETE_IMAGE_URL + '" style="margin-left:11px;margin-top:12px;text-align:center;" alt="triton datetime delete button"/>' +
    '</div>' +
    '<div class="triton_datetime_trigger_button" style="position:absolute;top:0px;right:0px;width:40px;border-left:1px solid ' + TritonTheme.DATETIME_PICKER_BORDER_COLOR + ';background-color:' + TritonTheme.DATETIME_PICKER_BACKGROUND_COLOR + ';height:30px;text-align:center;">' +
    '<img src="' + TritonTheme.DATETIME_PICKER_CALENDAR_IMAGE_URL + '" style="margin-top:8px;margin-right:4px" alt="triton datetime trigger button"/>' +
    '</div>' +
    '</div>';


Triton.DatetimePicker.create = function (options) {
    return new Triton.DatetimePicker(options).getJView();
};
Triton.DatetimePicker.createDatetimePicker = function (options) {

    if (options == undefined) {
        options = {};
    }

    options['type'] = Triton.DatetimePicker.TYPE_DATETIME;
    return Triton.DatetimePicker.create(options);
};
Triton.DatetimePicker.createDatePicker = function (options) {

    if (options == undefined) {
        options = {};
    }

    options['type'] = Triton.DatetimePicker.TYPE_DATE;
    return Triton.DatetimePicker.create(options);
};
Triton.DatetimePicker.append = function (j, options) {
    var jView = Triton.DatetimePicker.create(options);
    j.append(jView);
};
Triton.DatetimePicker.onSelect = function (text, event) {
    var jThis = $(this);
    var jParent = jThis.closest('.triton_datetime_picker');

    var options = jParent.data('triton-options');
    var onSelect = Lia.p(options, 'onSelect');
    if (onSelect != undefined) {
        onSelect.call(this, text, jParent, options);
    }
};

Triton.DatetimePicker.Theme = {

    Normal: {

        // 반응형 처리 안되도록 수정
        // css : {
        //     'width' : ''
        // },
        // pcCss: {
        //     'width': ''
        // },
        // tabletCss: {
        //     'width': '100%'
        // },
        // mobileCss: {
        //     'width': '100%'
        // }
    }
};


Triton.DatetimePeriodPicker = function (options) {
    this.init(options);
};
Triton.DatetimePeriodPicker.prototype = new Triton();
Triton.DatetimePeriodPicker.prototype.init = function (options) {

    var j = Triton.createJQueryElement(Triton.DatetimePeriodPicker.HTML);
    j = Triton.applyOptions(j, options);

    var startOptions = options['startOptions'];
    var endOptions = options['endOptions'];


    if (endOptions == undefined) {
        endOptions = {};
    }

    endOptions['hour'] = Lia.pd(23, endOptions, 'hour');
    endOptions['minute'] = Lia.pd(59, endOptions, 'minute');
    endOptions['second'] = Lia.pd(59, endOptions, 'second');

    this.startDatetimePicker = new Triton.DatetimePicker(startOptions).appendTo(j.find('.triton_start_datetime_picker'));
    this.endDatetimePicker = new Triton.DatetimePicker(endOptions).appendTo(j.find('.triton_end_datetime_picker'));

    this.jView = j;

    this.initTriton(options);
};
Triton.DatetimePeriodPicker.prototype.getStartDatetimePicker = function () {
    return this.startDatetimePicker;
};
Triton.DatetimePeriodPicker.prototype.getEndDatetimePicker = function () {
    return this.endDatetimePicker;
};

Triton.DatetimePeriodPicker.NAME = 'triton_datetime_period_picker';
Triton.DatetimePeriodPicker.HTML = '<div class="triton_datetime_period_picker" style="position:relative;overflow:auto;;text-align:left;">' +
    '<div class="triton_start_datetime_picker" style="float:left;"></div>' +
    '<div style="float:left;height:30px;line-height:30px;margin-left:10px;margin-right:10px;color:' + TritonTheme.DATETIME_PICKER_TEXT_COLOR + '">~</div>' +
    '<div class="triton_end_datetime_picker" style="float:left;"></div>' +
    '</div>';
Triton.DatetimePeriodPicker.create = function (options) {
    return new Triton.DatetimePeriodPicker(options).getJView();
};
Triton.DatetimePeriodPicker.append = function (j, options) {
    var jView = Triton.DatetimePeriodPicker.create(options);
    j.append(jView);
};
Triton.DatetimePeriodPicker.createPeriodPicker = Triton.DatetimePicker.createPeriodPicker = function (startOptions, endOptions) {
    return new Triton.DatetimePeriodPicker({
        startOptions: startOptions,
        endOptions: endOptions
    }).getJView();
};
Triton.DatetimePeriodPicker.createDatePeriodPicker = Triton.DatetimePicker.createDatePeriodPicker = function (startOptions, endOptions, options) {

    if (options == undefined) {
        options = {};
    }

    if (startOptions == undefined) {
        startOptions = {};
    }

    if (endOptions == undefined) {
        endOptions = {};
    }

    startOptions['type'] = Triton.DatetimePicker.TYPE_DATE;
    endOptions['type'] = Triton.DatetimePicker.TYPE_DATE;

    options['startOptions'] = startOptions;
    options['endOptions'] = endOptions;

    return new Triton.DatetimePeriodPicker(options).getJView();
};

Triton.DatetimePeriodPicker.createDatetimePeriodPicker = Triton.DatetimePicker.createDatetimePeriodPicker = function (startOptions, endOptions, options) {

    if (options == undefined) {
        options = {};
    }

    if (startOptions == undefined) {
        startOptions = {};
    }

    if (endOptions == undefined) {
        endOptions = {};
    }

    startOptions['type'] = Triton.DatetimePicker.TYPE_DATETIME;
    endOptions['type'] = Triton.DatetimePicker.TYPE_DATETIME;

    options['startOptions'] = startOptions;
    options['endOptions'] = endOptions;

    return new Triton.DatetimePeriodPicker(options).getJView();
};


Triton.Uploader = function (options) {
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

Triton.Uploader.maxFileSize = undefined;
Triton.Uploader.setMaxFileSize = function (maxFileSize) {
    Triton.Uploader.maxFileSize = maxFileSize;
};

Triton.Uploader.allowedExtensionList = undefined;
Triton.Uploader.setAllowedExtensionList = function (list) {
    Triton.Uploader.allowedExtensionList = list;
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

Triton.Uploader.parameterMapHandler = undefined;
Triton.Uploader.setParameterMapHandler = function (h) {
    Triton.Uploader.parameterMapHandler = h;
};


Triton.Uploader.MessageCode = {
    EXCEEDED_UPLOAD_COUNT: 1,
    EXCEEDED_MAX_FILE_SIZE: 2,
    NOT_ALLOWED_EXTENSION: 3,
    MOVIE_FILE_DISABLED: 4
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


Triton.Uploader.uploadFilenameHandler = function (item) {
};
Triton.Uploader.setUploadFilenameHandler = function (handler) {
    Triton.Uploader.uploadFilenameHandler = handler;
};


Triton.Uploader.prototype = new Triton();
Triton.Uploader.prototype.init = function (options) {

    var j = Triton.createJQueryElement(Triton.Uploader.HTML);
    j = Triton.applyOptions(j, options);

    var fileFormName = Lia.pd(Triton.Uploader.fileFormName, options, 'fileFormName');

    var movieFileDisabled = Lia.pd(false, options, 'movieFileDisabled');
    this.movieFileDisabled = movieFileDisabled;

    var maxFileSize = Lia.pd(Triton.Uploader.maxFileSize, options, 'maxFileSize');
    this.maxFileSize = maxFileSize;

    var allowedExtensionList = Lia.pd(Triton.Uploader.allowedExtensionList, options, 'allowedExtensionList');
    this.allowedExtensionList = allowedExtensionList;

    var parameterMap = Lia.p(options, 'parameterMap');
    this.parameterMap = parameterMap;

    var uploadUrl = Lia.pd(Triton.Uploader.uploadUrl, options, 'uploadUrl');
    this.uploadUrl = uploadUrl;

    var messageHandler = Lia.pd(Triton.Uploader.messageHandler, options, 'messageHandler');
    this.messageHandler = messageHandler;

    var uploadHandler = Lia.pd(Triton.Uploader.uploadHandler, options, 'uploadHandler');
    this.uploadHandler = uploadHandler;

    var openFileHandler = Lia.pd(Triton.Uploader.openFileHandler, options, 'openFileHandler');
    this.openFileHandler = openFileHandler;

    var maxUploadCount = Lia.p(options, 'maxUploadCount');
    this.maxUploadCount = maxUploadCount;

    var singleFileMode = Lia.p(options, 'singleFileMode');
    this.singleFileMode = singleFileMode;
    if ( singleFileMode == true ) {
        this.maxUploadCount = maxUploadCount = 1;
    }


    var openFileHandler = Lia.pd(Triton.Uploader.openFileHandler, options, 'openFileHandler');
    this.openFileHandler = openFileHandler;

    var uploadFilenameHandler = Lia.pd(Triton.Uploader.uploadFilenameHandler, options, 'uploadFilenameHandler');
    this.uploadFilenameHandler = uploadFilenameHandler;

    var attachmentListGetter = Lia.pd(Triton.Uploader.attachmentListGetter, options, 'attachmentListGetter');
    this.attachmentListGetter = attachmentListGetter;

    var attachmentListSetter = Lia.pd(Triton.Uploader.attachmentListSetter, options, 'attachmentListSetter');
    this.attachmentListSetter = attachmentListSetter;

    var parameterMapHandler = Lia.pd(Triton.ThumbnailUploader.parameterMapHandler, options, 'parameterMapHandler');
    this.parameterMapHandler = parameterMapHandler;

    var attachmentClickDisabled = Lia.pd(false, options, 'attachmentClickDisabled');
    this.attachmentClickDisabled = attachmentClickDisabled;

    var onDeleted = Lia.pd(undefined, options, 'onDeleted');
    this.onDeleted = onDeleted;

    var onUploaded = Lia.pd(undefined, options, 'onUploaded');
    this.onUploaded = onUploaded;

    var manualUploadHandler = Lia.pd(undefined, options, 'manualUploadHandler');
    this.manualUploadHandler = manualUploadHandler;

    var jButton = j.find('.triton_uploader_button');
    var jInput = j.find('.triton_uploader_input');
    if ( manualUploadHandler != undefined ) {

        j.find('.triton_uploader_form').remove();

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
            manualUploadHandler : manualUploadHandler,
            uploader : this
        }, function(e) {

            var manualUploadHandler = e.data.manualUploadHandler;
            var uploader = e.data.uploader;

            manualUploadHandler(uploader);
        });

    } else {

        jInput.initButton().on(Lia.Component.Event.STATUS_CHANGED, {
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
        }).attr({
            'name': fileFormName
        }).on('change', {
            jForm: j.find('.triton_uploader_form'),
            uploader: this
        }, function (e) {

            var jInput = $(this);
            var value = jInput.val();
            if (String.isBlank(value))
                return;

            var jForm = e.data.jForm;
            var uploader = e.data.uploader;
            var inputVal = jInput.val();


            var movieFileDisabled = uploader.movieFileDisabled;
            if ( movieFileDisabled == true ) {

                if ( FileHelper.isVideoFile(inputVal) ) {

                    jInput.val('');
                    uploader.messageHandler(Triton.Uploader.MessageCode.MOVIE_FILE_DISABLED, {});
                    return;
                }
            }


            var maxFileSize = uploader.maxFileSize;
            if (String.isNotBlank(maxFileSize)) {

                var files0 = this.files[0];
                var fileSize = files0.size || files0.fileSize;

                if (fileSize > maxFileSize) {

                    jInput.val('');
                    uploader.messageHandler(Triton.Uploader.MessageCode.EXCEEDED_MAX_FILE_SIZE, {
                        maxFileSize: maxFileSize
                    });
                    return;
                }
            }

            var allowedExtensionList = uploader.allowedExtensionList;
            if (String.isNotBlank(allowedExtensionList)) {

                var ext = FileHelper.extractFileExtOnly(inputVal);
                var filtered = true;
                if (String.isNotBlank(ext)) {

                    var extList = allowedExtensionList.split(',');
                    for (var i = 0, l = extList.length; i < l; i++) {

                        var extListItem = extList[i];
                        if (extListItem.toLowerCase().trim() == ext.trim()) {
                            filtered = false;
                            break;
                        }
                    }
                }

                if (filtered == true) {

                    jInput.val('');
                    uploader.messageHandler(Triton.Uploader.MessageCode.NOT_ALLOWED_EXTENSION, {
                        allowedExtensionList: allowedExtensionList
                    });
                    return;
                }
            }

            var uploadHandler = uploader.uploadHandler;
            var parameterMap = uploader.parameterMap;
            var uploadUrl = uploader.uploadUrl;
            var maxUploadCount = uploader.maxUploadCount;
            var parameterMapHandler = uploader.parameterMapHandler;
            var singleFileMode = uploader.singleFileMode;

            if ( singleFileMode != true ) {

                if (maxUploadCount != undefined) {

                    var fileList = uploader.getFileList();

                    if (fileList.length >= maxUploadCount) {
                        jInput.val('');

                        uploader.messageHandler(Triton.Uploader.MessageCode.EXCEEDED_UPLOAD_COUNT, {
                            maxUploadCount: maxUploadCount
                        });
                        return;
                    }
                }
            }

            if (parameterMapHandler != undefined) {
                parameterMap = parameterMapHandler(Lia.deepCopy(parameterMap), uploader);
            }

            uploadHandler(uploader, uploadUrl, jForm, jInput, parameterMap);
        });
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

    if ( this.attachmentClickDisabled == true ) {

        jContent.css( { 'cursor' : '' } );

    } else {

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
    }

    jFile.find('.triton_uploader_file_delete_button').on('click', {
        uploader : this
    }, function (e) {

        var uploader = e.data.uploader;

        var jThis = $(this);

        PopupManager.alert(Lia.Strings.getString(Lia.Strings.POPUP.TITLE.INFO), Lia.Strings.getString(Lia.Strings.MESSAGE.CONFIRM_DELETE), function( data ) {

            var jFile = data.jThis.closest('.triton_uploader_file');

            var item = jFile.data('triton-uploader-file');
            jFile.remove();

            var uploader = data.uploader;
            if (  uploader.onDeleted != undefined ) {
                uploader.onDeleted(item, uploader);
            }

        }, true, undefined, undefined, {
            jThis : jThis,
            uploader : uploader
        });


    });

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

Triton.Uploader.prototype.getAttachment = function () {
    
    var attachment = Lia.p(this.getAttachmentList(), 0);
    return attachment;
};
Triton.Uploader.prototype.setAttachment = function (attachment) {
    this.setAttachmentList([attachment]);
    return this;
};

Triton.Uploader.prototype.getParameterMap = function () {
    return this.parameterMap;
};
Triton.Uploader.NAME = 'triton_uploader';
Triton.Uploader.HTML = '<div class="triton_uploader triton_value" style="position:relative;width:500px;cursor:pointer;">' +
    '<div class="triton_uploader_control" ' +
    'style="height:30px;line-height:30px;background-color:' + TritonTheme.UPLOADER_BACKGROUND_COLOR + ';border:1px solid ' + TritonTheme.UPLOADER_BORDER_COLOR + ';overflow:hidden;border-top-right-radius:30px;border-bottom-right-radius:30px;">' +
    '<div class="triton_uploader_button" style="position:relative;overflow:auto;border-left:1px solid ' + TritonTheme.UPLOADER_BORDER_COLOR + ';float:right;height:30px;font-family:notokr-medium, NanumGothicBold;line-height:30px;font-size:13px;color:' + TritonTheme.UPLOADER_TEXT_COLOR + ';padding-left:25px;padding-right:25px;">' +
    '<img style="float:left;margin-top:8px;" src="' + TritonTheme.UPLOADER_FILE_ICON_IMAGE_URL + '" alt="triton uploader button"/><span style="margin-left:10px;float:left;line-height:30px;" class="strings" lia-string-key="TRITON.UPLAODER.ATTACHMENT"></span></>' +
    '</div>' +
    '<form class="triton_uploader_form" method="post" enctype="multipart/form-data" style="overflow:hidden;position:absolute;top:0;width:100%;left:0;height:30px;padding:0;margin:0;opacity:0;filter: alpha(opacity=0);cursor:pointer;">' +
    '<input title="triton uploader input" class="triton_uploader_input" type="file" style="top:0;width:100%;left:0;height:30px;cursor:pointer;font-size:999999px;opacity:0;filter: alpha(opacity=0);" />' +
    '</form>' +
    '</div>' +
    '<div class="triton_uploader_file_list"></div>' +
    '</div>';

Triton.Uploader.HTML_FILE = '<div class="triton_uploader_file" style="position:relative;overflow:auto;margin-top:5px;line-height:normal;height:auto;">' +
    '<img style="float:left;margin-top:2px; margin-right: 5px;" src="' + TritonTheme.UPLOADER_FILE_ITEM_ICON_IMAGE_URL + '"  alt="triton uploader file"/>' +
    '<div class="triton_content" style="cursor:pointer;color:' + TritonTheme.UPLOADER_FILE_ITEM_TEXT_COLOR + ';font-family: notokr-regular, NanumGothic; font-size:12px; float:left;"></div><img class="triton_uploader_file_delete_button" style="cursor:pointer;padding-top:4px;padding-bottom:4px;padding-right:10px;padding-left:10px;float:left;" src="' + TritonTheme.UPLOADER_FILE_ITEM_DELETE_IMAGE_URL + '" alt="triton uploader file delete button" />' +
    '</div>';


// 업로더 기본 설정
{
    Triton.Uploader.initValues = function (type) {
        Triton.Uploader.siteType = type;
    };

    Triton.Uploader.setMessageHandler(function (messageCode, data) {

        if (messageCode == Triton.Uploader.MessageCode.EXCEEDED_UPLOAD_COUNT) {
            var maxUploadCount = data['maxUploadCount'];
            PopupManager.alert(Lia.Strings.getString(Lia.Strings.POPUP.TITLE.INFO), '업로드 파일 갯수는 ' + maxUploadCount + '개를 초과할 수 없습니다.');

        } else if (messageCode == Triton.Uploader.MessageCode.EXCEEDED_MAX_FILE_SIZE) {
            var maxFileSize = data['maxFileSize'];
            var mb = maxFileSize / (1024 * 1024);
            PopupManager.alert(Lia.Strings.getString(Lia.Strings.POPUP.TITLE.INFO), '첨부파일 용량은 ' + mb + 'MB 를 초과할 수 없습니다.');

        } else if (messageCode == Triton.Uploader.MessageCode.NOT_ALLOWED_EXTENSION) {
            var allowedExtensionList = data['allowedExtensionList'];
            PopupManager.alert(Lia.Strings.getString(Lia.Strings.POPUP.TITLE.INFO), '업로드 가능한 파일 확장자는 ' + allowedExtensionList + '입니다.');
        } else if (messageCode == Triton.Uploader.MessageCode.MOVIE_FILE_DISABLED) {
            PopupManager.alert(Lia.Strings.getString(Lia.Strings.POPUP.TITLE.INFO), '동영상 파일은 업로드 할 수 없습니다.');
        }



    });


    Triton.Uploader.setOpenFileHandler(function (item) {

        var uploader = this;

        if (Triton.Uploader.siteType == Triton.SiteType.Callisto) {

            var parameterMap = uploader.getParameterMap();
            var categoryCode = Lia.p(parameterMap, 'categoryCode');
            if (categoryCode == UploadedFileCategory.CONTENT_FTP) {

                var videoUrl = Lia.p(item, 'url');
                AjaxPopupManager.show(PopupUrl.PLAYER, {
                    playerUrl: PlayerUrl.infoPlayerUrl(),
                    videoUrl: videoUrl
                });
                return;
            }

        } else if (Triton.Uploader.siteType == Triton.SiteType.Polaris) {

            var parameterMap = uploader.getParameterMap();
            var categoryCode = Lia.p(parameterMap, 'categoryCode');
            if (categoryCode == UploadFileCategory.COURSE_VOD) {

                var videoUrl = Lia.p(item, 'url');

                Requester.owb(ApiUrl.Player.PLAYER, {
                    videoUrl: videoUrl
                });
                return;
            }

        } else if (Triton.Uploader.siteType == Triton.SiteType.Polaris2 || Triton.Uploader.siteType == Triton.SiteType.Pluto) {

            PathHelper.open(Lia.p(item, 'url'), Lia.p(item, 'original_filename'));
            return;
        }

        var parameterMap = {
            path: Lia.p(item, 'url')
        };

        var destFilename = Lia.p(item, 'original_filename');
        if (String.isNotBlank(destFilename)) {
            parameterMap['destFilename'] = destFilename;
        }

        Requester.open(ApiUrl.File.GET, parameterMap);
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

        uploader.clear();

        if (Triton.Uploader.siteType == Triton.SiteType.Polaris) {
            var list = Lia.p(attachmentList, 'list');
            uploader.addAll(list);
        } else {
            uploader.addAll(attachmentList);
        }

    });


    Triton.Uploader.setAttachmentListGetter(function (uploader) {

        if (Triton.Uploader.siteType == Triton.SiteType.Polaris) {

            var list = uploader.getFileList();
            var attachmentList = {};
            attachmentList['total_count'] = list.length;
            attachmentList['list'] = list;
            return attachmentList;

        } else {

            return uploader.getFileList();

        }

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
            var uploader = request.object.uploader;
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
                PopupManager.alert(Lia.Strings.getString(Lia.Strings.POPUP.TITLE.INFO), '업로드 된 파일을 찾을 수 없습니다.');
                return;
            }

            var uploader = request.object.uploader;
            var singleFileMode = uploader.singleFileMode;
            if ( singleFileMode == true && Array.isNotEmpty(list) ) {
                uploader.clear();
            }

            for (var i = 0, l = list.length; i < l; i++) {

                var item = list[i];
                uploader.add(item);
            }

            if (  uploader.onUploaded != undefined ) {
                uploader.onUploaded(list, uploader);
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
            uploader: uploader,
            autoLoading : false
        });
    });

    try {
        Triton.Uploader.setUploadUrl(Lia.p(ApiUrl, 'File', 'UPLOAD'));
    } catch (e) {
    }
}


Triton.ThumbnailUploader = function (options) {
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

Triton.ThumbnailUploader.maxFileSize = undefined;
Triton.ThumbnailUploader.setMaxFileSize = function (maxFileSize) {
    Triton.ThumbnailUploader.maxFileSize = maxFileSize;
};

Triton.ThumbnailUploader.allowedExtensionList = undefined;
Triton.ThumbnailUploader.setAllowedExtensionList = function (list) {
    Triton.ThumbnailUploader.allowedExtensionList = list;
};

Triton.ThumbnailUploader.valueGetHandler = undefined;
Triton.ThumbnailUploader.setValueGetHandler = function (handler) {
    Triton.ThumbnailUploader.valueGetHandler = handler;
};

Triton.ThumbnailUploader.valueSetHandler = undefined;
Triton.ThumbnailUploader.setValueSetHandler = function (handler) {
    Triton.ThumbnailUploader.valueSetHandler = handler;
};

Triton.ThumbnailUploader.openFileHandler = undefined;
Triton.ThumbnailUploader.setOpenFileHandler = function (openFileHandler) {
    Triton.ThumbnailUploader.openFileHandler = openFileHandler;
};

Triton.ThumbnailUploader.parameterMapHandler = undefined;
Triton.ThumbnailUploader.setParameterMapHandler = function (h) {
    Triton.ThumbnailUploader.parameterMapHandler = h;
};

Triton.ThumbnailUploader.uploadFilenameHandler = function (item) {
};
Triton.ThumbnailUploader.setUploadFilenameHandler = function (handler) {
    Triton.ThumbnailUploader.uploadFilenameHandler = handler;
};


Triton.ThumbnailUploader.MessageCode = {
    EXCEEDED_MAX_FILE_SIZE: 1,
    NOT_ALLOWED_EXTENSION: 2
};

Triton.ThumbnailUploader.messageHandler = function (messageCode, data) {
};
Triton.ThumbnailUploader.setMessageHandler = function (messageHandler) {
    Triton.ThumbnailUploader.messageHandler = messageHandler;
};


Triton.ThumbnailUploader.prototype = new Triton();
Triton.ThumbnailUploader.prototype.init = function (options) {

    var j = Triton.createJQueryElement(Triton.ThumbnailUploader.HTML);
    j = Triton.applyOptions(j, options);

    var fileFormName = Lia.pd(Triton.ThumbnailUploader.fileFormName, options, 'fileFormName');

    var maxFileSize = Lia.pd(Triton.ThumbnailUploader.maxFileSize, options, 'maxFileSize');
    this.maxFileSize = maxFileSize;

    var allowedExtensionList = Lia.pd(Triton.ThumbnailUploader.allowedExtensionList, options, 'allowedExtensionList');
    this.allowedExtensionList = allowedExtensionList;

    var parameterMap = Lia.p(options, 'parameterMap');
    this.parameterMap = parameterMap;

    var uploadUrl = Lia.pd(Triton.ThumbnailUploader.uploadUrl, options, 'uploadUrl');
    this.uploadUrl = uploadUrl;

    var uploadFilePathHandler = Lia.pd(Triton.ThumbnailUploader.uploadFilePathHandler, options, 'uploadFilePathHandler');
    this.uploadFilePathHandler = uploadFilePathHandler;

    var uploadFileUrlHandler = Lia.pd(Triton.ThumbnailUploader.uploadFileUrlHandler, options, 'uploadFileUrlHandler');
    this.uploadFileUrlHandler = uploadFileUrlHandler;

    var uploadHandler = Lia.pd(Triton.ThumbnailUploader.uploadHandler, options, 'uploadHandler');
    this.uploadHandler = uploadHandler;

    var openFileHandler = Lia.pd(Triton.ThumbnailUploader.openFileHandler, options, 'openFileHandler');
    this.openFileHandler = openFileHandler;

    var valueGetHandler = Lia.pd(Triton.ThumbnailUploader.valueGetHandler, options, 'valueGetHandler');
    this.valueGetHandler = valueGetHandler;

    var valueSetHandler = Lia.pd(Triton.ThumbnailUploader.valueSetHandler, options, 'valueSetHandler');
    this.valueSetHandler = valueSetHandler;

    var parameterMapHandler = Lia.pd(Triton.ThumbnailUploader.parameterMapHandler, options, 'parameterMapHandler');
    this.parameterMapHandler = parameterMapHandler;

    var messageHandler = Lia.pd(Triton.ThumbnailUploader.messageHandler, options, 'messageHandler');
    this.messageHandler = messageHandler;

    var jButton = j.find('.triton_thumbnail_uploader_button');
    j.find('.triton_thumbnail_uploader_input').initButton().on(Lia.Component.Event.STATUS_CHANGED, {
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
    }).attr({
        'name': fileFormName
    }).on('change', {
        jForm: j.find('.triton_thumbnail_uploader_form'),
        thumbnailUploader: this
    }, function (e) {

        var jInput = $(this);
        var value = jInput.val();

        if (String.isBlank(value))
            return;

        var jForm = e.data.jForm;
        var thumbnailUploader = e.data.thumbnailUploader;

        var maxFileSize = thumbnailUploader.maxFileSize;
        if (String.isNotBlank(maxFileSize)) {

            var files0 = this.files[0];
            var fileSize = files0.size || files0.fileSize;

            if (fileSize > maxFileSize) {

                jInput.val('');
                thumbnailUploader.messageHandler(Triton.ThumbnailUploader.MessageCode.EXCEEDED_MAX_FILE_SIZE, {
                    maxFileSize: maxFileSize
                });
                return;
            }
        }

        var allowedExtensionList = thumbnailUploader.allowedExtensionList;
        if (String.isNotBlank(allowedExtensionList)) {

            var inputVal = jInput.val();
            var ext = FileHelper.extractFileExtOnly(inputVal);
            var filtered = true;
            if (String.isNotBlank(ext)) {

                var extList = allowedExtensionList.split(',');
                for (var i = 0, l = extList.length; i < l; i++) {

                    var extListItem = extList[i];
                    if (extListItem.toLowerCase().trim() == ext.trim()) {
                        filtered = false;
                        break;
                    }
                }
            }

            if (filtered == true) {

                jInput.val('');
                thumbnailUploader.messageHandler(Triton.ThumbnailUploader.MessageCode.NOT_ALLOWED_EXTENSION, {
                    allowedExtensionList: allowedExtensionList
                });
                return;
            }
        }

        var uploadHandler = thumbnailUploader.uploadHandler;
        var parameterMap = thumbnailUploader.parameterMap;
        var uploadUrl = thumbnailUploader.uploadUrl;
        var parameterMapHandler = thumbnailUploader.parameterMapHandler;

        if (parameterMapHandler != undefined) {
            parameterMap = parameterMapHandler(Lia.deepCopy(parameterMap), thumbnailUploader);
        }

        uploadHandler(thumbnailUploader, uploadUrl, jForm, jInput, parameterMap);

    });

    j.find('.triton_thumbnail_uploader_delete_button').on('click', {
        thumbnailUploader: this
    }, function (e) {

        var data = e.data;
        var thumbnailUploader = data.thumbnailUploader;
        thumbnailUploader.clear();

    });

    this.path = undefined;
    this.jThumbnailImg = j.find('.triton_thumbnail_uploader_thumbnail_img').on('click', {
        thumbnailUploader: this
    }, function (e) {

        var data = e.data;
        var thumbnailUploader = data.thumbnailUploader;

        var path = thumbnailUploader.getValue();
        if (!String.isBlank(path)) {
            thumbnailUploader.openFileHandler(path);
        }
    });

    this.jFileLayout = j.find('.triton_thumbnail_uploader_file_layout');
    this.jView = j;

    this.initTriton(options);
};

Triton.ThumbnailUploader.prototype.add = function (item) {

    var filename = Lia.p(item, 'original_filename');

    // var jFile = Triton.createJQueryElement(Triton.ThumbnailUploader.HTML);
    //jFile.data('triton-uploader-file', item);
    var jContent = this.jFileLayout.find('.triton_content');
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
        thumbnailUploader: this,
        item: item
    }, function (e) {

        var thumbnailUploader = e.data.thumbnailUploader;

        var path = thumbnailUploader.getValue();
        if (!String.isBlank(path)) {
            thumbnailUploader.openFileHandler(path);
        }
    });


    return this;
};

Triton.ThumbnailUploader.prototype.setAttachment = function (attachment) {

    var path = this.uploadFilePathHandler(attachment);

    this.setValue(path);
    this.attachment = attachment;
    this.add(attachment);
    return this;
};

Triton.ThumbnailUploader.prototype.getAttachment = function (attachment) {
    return this.attachment;
};


Triton.ThumbnailUploader.prototype.clear = function () {
    this.attachment = null;
    this.path = null;
    this.jFileLayout.hide();
    return this;
};
Triton.ThumbnailUploader.prototype.setValue = function (path) {
    return this.valueSetHandler(this, path);
};
Triton.ThumbnailUploader.prototype.getValue = function () {
    return this.valueGetHandler(this);
};

Triton.ThumbnailUploader.NAME = 'triton_thumbnail_uploader';
Triton.ThumbnailUploader.HTML = '<div class="triton_thumbnail_uploader triton_value" style="position:relative;">' +
    '<div class="triton_thumbnail_uploader_control" style="background-color:' + TritonTheme.UPLOADER_BACKGROUND_COLOR + ';height:30px;line-height:30px;border:1px solid ' + TritonTheme.UPLOADER_BORDER_COLOR + ';overflow:hidden;border-top-right-radius:30px;border-bottom-right-radius:30px;margin-right:80px;width:500px;">' +
    '<div class="triton_thumbnail_uploader_button" style="position:relative;overflow:auto;border-left:1px solid ' + TritonTheme.UPLOADER_BORDER_COLOR + ';float:right;height:30px;font-family:notokr-medium, NanumGothicBold;line-height:30px;font-size:13px;color:' + TritonTheme.UPLOADER_TEXT_COLOR + ';padding-left:25px;padding-right:25px;">' +
    '<img style="float:left;margin-top:8px;" src="' + TritonTheme.UPLOADER_FILE_ICON_IMAGE_URL + '" alt="triton thumbnail uploader button"/><span style="margin-left:10px;float:left;line-height:30px;">첨부파일</span></>' +
    '</div>' +
    '<form class="triton_thumbnail_uploader_form" method="post" enctype="multipart/form-data" style="overflow:hidden;position:absolute;top:0;width:100%;left:0;height:30px;padding:0;margin:0;opacity:0;filter: alpha(opacity=0);cursor:pointer;">' +
    '<input title="triton thumbnail uploader input" class="triton_thumbnail_uploader_input" type="file" style="top:0;width:100%;left:0;height:30px;cursor:pointer;font-size:999999px;opacity:0;filter: alpha(opacity=0);" />' +
    '</form>' +
    '</div>' +
    '<div class="triton_thumbnail_uploader_file_layout" style="position:absolute;left:515px;top:0px;display:none;">' +
    '<img class="triton_thumbnail_uploader_thumbnail_img" alt="triton thumbnail uploader thumbnail img" src="' + TritonTheme.UPLOADER_THUMBNAIL_ICON_IMAGE_URL + '" style="width:30px;height:30px;cursor:pointer;float:left;" />' +
    '<div class="triton_content" style="cursor:pointer;color:' + TritonTheme.UPLOADER_FILE_ITEM_TEXT_COLOR + ';font-family: notokr-regular, NanumGothic; font-size:12px;float:left;margin-top:8px;margin-left:10px;display:none;"></div>' +
    '<img class="triton_thumbnail_uploader_delete_button"  alt="triton thumbnail uploader delete button" src="' + TritonTheme.UPLOADER_THUMBNAIL_DELETE_IMAGE_URL + '" style="padding-top:12px;padding-bottom:11px;padding-left:11px;padding-right:11px;cursor:pointer;float:left;" />' +
    '</div>';


// 업로더 기본 설정
{


    Triton.ThumbnailUploader.setMessageHandler(function (messageCode, data) {

        if (messageCode == Triton.ThumbnailUploader.MessageCode.EXCEEDED_MAX_FILE_SIZE) {
            var maxFileSize = data['maxFileSize'];
            var mb = maxFileSize / (1024 * 1024);
            PopupManager.alert(Lia.Strings.getString(Lia.Strings.POPUP.TITLE.INFO), '첨부파일 용량은 ' + mb + 'MB 를 초과할 수 없습니다.');

        } else if (messageCode == Triton.ThumbnailUploader.MessageCode.NOT_ALLOWED_EXTENSION) {
            var allowedExtensionList = data['allowedExtensionList'];
            PopupManager.alert(Lia.Strings.getString(Lia.Strings.POPUP.TITLE.INFO), '업로드 가능한 파일 확장자는 ' + allowedExtensionList + '입니다.');

        }
    });

    Triton.ThumbnailUploader.initValues = function (type) {

        Triton.ThumbnailUploader.siteType = type;
    };

    Triton.ThumbnailUploader.setOpenFileHandler(function (path) {

        if (Triton.ThumbnailUploader.siteType == Triton.SiteType.Pluto) {

            try {

                var imageUrl;

                try {

                    imageUrl = JSON.parse(path);

                } catch (error) {

                    imageUrl = path;
                }

                var url;
                if (imageUrl == undefined) {
                    url = path;
                } else {

                    url = Lia.p(imageUrl, 'url');
                    if (String.isBlank(url)) {
                        url = imageUrl;
                    }
                }

                PathHelper.open(PathHelper.getFileUrl(url));

            } catch (e) {
            }

        } else {

            Requester.open(ApiUrl.File.GET, {
                'path': path
            });
        }

    });

    Triton.ThumbnailUploader.setUploadFileUrlHandler(function (path) {

        if (Triton.ThumbnailUploader.siteType == Triton.SiteType.Pluto) {

            return PathHelper.getFileUrl(path);

        } else {

            if (path.startsWith('http://') || path.startsWith('https://'))
                return path;

            return ApiUrl.File.GET + Lia.convertArrayToQueryString({path: path});
        }

    });

    Triton.ThumbnailUploader.setUploadFilePathHandler(function (attachment) {

        if (Triton.ThumbnailUploader.siteType == Triton.SiteType.Pluto) {

            return JSON.stringify(attachment);

        } else {

            var path = Lia.p(attachment, 'url');
            return path;

        }


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
                PopupManager.alert(Lia.Strings.getString(Lia.Strings.POPUP.TITLE.INFO), '업로드 된 파일을 찾을 수 없습니다.');
                return;
            }

            var thumbnailUploader = request.object.thumbnailUploader;
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
            thumbnailUploader: thumbnailUploader,
            autoLoading : false
        });
    });


    Triton.ThumbnailUploader.setValueGetHandler(function (uploader) {

        if (Triton.ThumbnailUploader.siteType == Triton.SiteType.Pluto) {
            return JSON.stringify(uploader.attachment);
        } else {
            return uploader.path;
        }
    });

    Triton.ThumbnailUploader.setValueSetHandler(function (uploader, path) {

        uploader.clear();

        if (Triton.ThumbnailUploader.siteType == Triton.SiteType.Pluto) {

            var imageUrl;

            try {
                imageUrl = JSON.parse(path);
            } catch (error) {
                imageUrl = path;
            }

            var thumbnailImageUrl = Lia.pd(Lia.p(imageUrl, 'url'), imageUrl, 'thumbnail_image_url');
            if (String.isBlank(thumbnailImageUrl)) {
                thumbnailImageUrl = path;
            }

            if (!String.isBlank(thumbnailImageUrl)) {

                this.attachment = imageUrl;

                var imageExtList = ['.png', '.jpg', '.jpeg', '.gif', '.bmp'];

                var ext = Lia.extractFileExt(thumbnailImageUrl);
                var isImage = false;
                for (var i = 0, l = imageExtList.length; i < l; i++) {
                    var imageExt = imageExtList[i];
                    if (ext == imageExt) {
                        isImage = true;
                    }
                }

                var thumbnailUrl = undefined;
                if (isImage) {
                    thumbnailUrl = uploader.uploadFileUrlHandler(thumbnailImageUrl);
                } else {
                    thumbnailUrl = Triton.ReplaceMap.BASE_PATH + '/img/img_file_icon.png';
                }

                uploader.jThumbnailImg.attr('src', thumbnailUrl);
                uploader.jFileLayout.show();
            }

        } else {

            if (!String.isBlank(path)) {

                this.path = path;

                var imageExtList = ['.png', '.jpg', '.jpeg', '.gif', '.bmp'];

                var ext = Lia.extractFileExt(path);
                var isImage = false;
                for (var i = 0, l = imageExtList.length; i < l; i++) {
                    var imageExt = imageExtList[i];
                    if (ext == imageExt) {
                        isImage = true;
                    }
                }

                var thumbnailUrl = undefined;
                if (isImage) {
                    thumbnailUrl = uploader.uploadFileUrlHandler(path);
                } else {
                    thumbnailUrl = Triton.ReplaceMap.BASE_PATH + '/img/img_file_icon.png';
                }

                uploader.jThumbnailImg.attr('src', thumbnailUrl);
                uploader.jFileLayout.show();
            }


        }

        return uploader;

    });

    try {
        Triton.ThumbnailUploader.setUploadUrl(Lia.p(ApiUrl, 'File', 'UPLOAD'));
    } catch (e) {
    }


}


Triton.ListTable = function (options) {
    this.init(options);
};
Triton.ListTable.prototype = new Triton();
Triton.ListTable.prototype.init = function (options) {

    this.currentRow = undefined;
    this.currentColumn = undefined;

    options = Triton.combineOptions(options, {theme: Triton.ListTable.Theme.Normal});

    this.jView = Triton.createJQueryElement(Triton.ListTable.HTML);
    Triton.applyOptions(this.jView, options);
    this.jContent = Triton.findTritonContent(this.jView);

    this.initTriton(options);
};
Triton.ListTable.prototype.appendHeaderRow = function (options) {

    options = Triton.combineOptions(options, {theme: Triton.ListTable.Row.Theme.Header});

    this.currentRow = new Triton.ListTable.Row(options);
    this.append(this.currentRow);

    return this.currentRow;
};

Triton.ListTable.prototype.appendRow = function (options) {
    this.currentRow = this.createRow(options);
    this.append(this.currentRow);
    return this.currentRow;
};

Triton.ListTable.prototype.createRow = function (options) {
    options = Triton.combineOptions(options, {theme: Triton.ListTable.Row.Theme.Normal});
    return new Triton.ListTable.Row(options);
};

Triton.ListTable.prototype.appendHeaderColumn = function (options) {

    options = Triton.combineOptions(options, {theme: Triton.ListTable.Column.Theme.Header});

    this.currentColumn = new Triton.ListTable.Column(options);
    this.currentRow.append(this.currentColumn);

    return this.currentColumn;
};
Triton.ListTable.prototype.appendColumn = function (options) {

    return this.currentColumn = this.currentRow.appendColumn(options);
};
Triton.ListTable.prototype.appendItem = function (item) {
    this.currentColumn.append(item);
    return this;
};
Triton.ListTable.prototype.getCurrentRow = function () {
    return this.currentRow;
};
Triton.ListTable.prototype.getCurrentColumn = function () {
    return this.currentColumn;
};

Triton.ListTable.Theme = {

    Normal: {
        css: {
            'border-collapse': 'collapse',
            'vertical-align': 'middle'
        }
    }
};
Triton.ListTable.NAME = 'triton_list_table';
Triton.ListTable.HTML = '<table class="triton_list_table triton_content" cellpadding="0" cellspacing="0" style="width:100%;"><tbody class="triton_content"></tbody></table>';
Triton.ListTable.create = function (options) {
    return new Triton.ListTable(options).getJView();
};
Triton.ListTable.append = function (j, options) {
    var jView = Triton.ListTable.create(options);
    j.append(jView);
    return Triton.findTritonContent(jView);
};
Triton.ListTable.createRow = function (options) {
    var j = Triton.createJQueryElement(Triton.ListTable.Row.HTML);
    options = Triton.combineOptions(options, {theme: Triton.ListTable.Row.Theme.Normal});
    j = Triton.applyOptions(j, options);
    return j;
};

Triton.ListTable.appendRow = function (jTableContent, options) {
    var j = Triton.ListTable.createRow(options);
    jTableContent.append(j);
    return Triton.findTritonContent(j);
};
Triton.ListTable.createHeaderRow = function (options) {
    var j = Triton.createJQueryElement(Triton.ListTable.Row.HTML);
    options = Triton.combineOptions(options, {theme: Triton.ListTable.Row.Theme.Header});
    j = Triton.applyOptions(j, options);
    return j;
};
Triton.ListTable.appendHeaderRow = function (jTableContent, options) {
    var j = Triton.ListTable.createHeaderRow(options);
    jTableContent.append(j);
    return Triton.findTritonContent(j);
};
Triton.ListTable.createColumn = function (options) {
    var j = Triton.createJQueryElement(Triton.ListTable.Column.HTML);
    options = Triton.combineOptions(options, {theme: Triton.ListTable.Column.Theme.Normal});
    j = Triton.applyOptions(j, options);
    return j;
};
Triton.ListTable.appendColumn = function (jRowContent, options) {
    var j = Triton.ListTable.createColumn(options);
    jRowContent.append(j);
    return Triton.findTritonContent(j);
};
Triton.ListTable.createHeaderColumn = function (options) {
    var j = Triton.createJQueryElement(Triton.ListTable.Column.HTML);
    options = Triton.combineOptions(options, {theme: Triton.ListTable.Column.Theme.Header});
    j = Triton.applyOptions(j, options);
    return j;
};
Triton.ListTable.appendHeaderColumn = function (jRowContent, options) {
    var j = Triton.ListTable.createHeaderColumn(options);
    jRowContent.append(j);
    return Triton.findTritonContent(j);
};
Triton.ListTable.appendRowWithColumns = function (jTableContent, columnsOptions, rowOptions) {

    var jRowContent = Triton.ListTable.appendRow(jTableContent, rowOptions);
    for (var i = 0, l = columnsOptions.length; i < l; i++) {
        var columnOption = columnsOptions[i];
        Triton.ListTable.appendColumn(jRowContent, columnOption);
    }
    return jRowContent;
};

Triton.ListTable.appendHeaderRowWithHeaderColumns = function (jTableContent, columnOptions, rowOptions) {
    var jRowContent = Triton.ListTable.appendHeaderRow(jTableContent, rowOptions);
    for (var i = 0, l = columnOptions.length; i < l; i++) {
        var columnOption = columnOptions[i];
        Triton.ListTable.appendHeaderColumn(jRowContent, columnOption);
    }
    return jRowContent;
};


Triton.ListTable.Row = function (options) {
    this.init(options);
};
Triton.ListTable.Row.prototype = new Triton();
Triton.ListTable.Row.prototype.init = function (options) {

    this.currentColumn = undefined;

    options = Triton.combineOptions(options, {theme: Triton.ListTable.Row.Theme.Normal});

    this.jView = Triton.createJQueryElement(Triton.ListTable.Row.HTML);
    Triton.applyOptions(this.jView, options);
    this.jContent = Triton.findTritonContent(this.jView);

    this.initTriton(options);
};
Triton.ListTable.Row.prototype.appendColumn = function (options) {

    options = Triton.combineOptions(options, {theme: Triton.ListTable.Column.Theme.Normal});

    this.currentColumn = new Triton.ListTable.Column(options);
    this.currentColumn.setRow(this);
    this.append(this.currentColumn);
    return this.currentColumn;
};
Triton.ListTable.Row.NAME = "triton_list_table_row";
Triton.ListTable.Row.HTML = '<tr class="triton_list_table_row triton_content"></tr>';
Triton.ListTable.Row.Theme = {


    Normal: {

        defaultSet: {
            css: {
                'color': TritonTheme.LIST_TABLE_TEXT_COLOR,
                'background-color': TritonTheme.LIST_TABLE_BACKGROUND_COLOR
            }
        },
        hoveringSet: {
            css: {
                'color': TritonTheme.LIST_TABLE_HOVERING_TEXT_COLOR,
                'background-color': TritonTheme.LIST_TABLE_HOVERING_BACKGROUND_COLOR
            }
        },

        css: {
            'vertical-align': 'middle',
            'border-bottom': '1px solid ' + TritonTheme.LIST_TABLE_BORDER_COLOR,
            'background-color': TritonTheme.LIST_TABLE_BACKGROUND_COLOR,
            'cursor': 'pointer',
            'border-right': '1px solid ' + TritonTheme.LIST_TABLE_BORDER_COLOR,
            'border-left': '1px solid ' + TritonTheme.LIST_TABLE_BORDER_COLOR,
            'text-align': 'center',
            'line-height': '18px',
            'color': TritonTheme.LIST_TABLE_TEXT_COLOR,
            'font-size': '13px',
            'font-family': 'notokr-regular, NanumGothic',
            'height': Triton.ReplaceMap.LIST_ROW_HEIGHT
        }
    },

    Selected: {

        css: {
            'vertical-align': 'middle',
            'border-bottom': '1px solid ' + TritonTheme.LIST_TABLE_BORDER_COLOR,
            'cursor': 'default',
            'color': TritonTheme.LIST_TABLE_SELECTED_TEXT_COLOR,
            'background-color': TritonTheme.LIST_TABLE_SELECTED_BACKGROUND_COLOR,
            'border-right': '1px solid ' + TritonTheme.LIST_TABLE_BORDER_COLOR,
            'border-left': '1px solid ' + TritonTheme.LIST_TABLE_BORDER_COLOR,
            'text-align': 'center',
            'line-height': '18px',
            'font-size': '13px',
            'font-family': 'notokr-regular, NanumGothic',
            'height': Triton.ReplaceMap.LIST_ROW_HEIGHT
        }
    },

    Division: {

        css: {
            'vertical-align': 'middle',
            'border-top': '2px solid #084897',
            'border-bottom': '1px solid ' + TritonTheme.LIST_TABLE_BORDER_COLOR,
            'cursor': 'default',
            'color': TritonTheme.LIST_TABLE_DIVISION_TEXT_COLOR,
            'background-color': TritonTheme.LIST_TABLE_DIVISION_BACKGROUND_COLOR,
            'border-right': '1px solid ' + TritonTheme.LIST_TABLE_BORDER_COLOR,
            'border-left': '1px solid ' + TritonTheme.LIST_TABLE_BORDER_COLOR,
            'text-align': 'center',
            'line-height': '18px',
            'font-size': '13px',
            'font-family': 'notokr-regular, NanumGothic',
            'height': Triton.ReplaceMap.LIST_ROW_HEIGHT
        }
    },

    NoLink: {
        css: {
            'vertical-align': 'middle',
            'border-bottom': '1px solid ' + TritonTheme.LIST_TABLE_BORDER_COLOR,
            'text-align': 'center',
            'cursor': 'default',
            'font-size': '13px',
            'font-family': 'notokr-regular, NanumGothic',
            'border-right': '1px solid ' + TritonTheme.LIST_TABLE_BORDER_COLOR,
            'border-left': '1px solid ' + TritonTheme.LIST_TABLE_BORDER_COLOR,
            'height': Triton.ReplaceMap.LIST_ROW_HEIGHT,
            'line-height': '18px'
        }
    },

    Header: {

        addClass: 'triton_list_table_header_row',

        css: {
            'vertical-align': 'middle',
            'border-bottom': '1px solid ' + TritonTheme.LIST_TABLE_BORDER_COLOR,
            'text-align': 'center',
            'line-height': '18px',
            'background-color': TritonTheme.LIST_TABLE_HEADER_BACKGROUND_COLOR,
            'color': TritonTheme.LIST_TABLE_HEADER_TEXT_COLOR,
            'font-size': '13px',
            'font-family': 'notokr-medium, NanumGothicBold',
            'border-right': '1px solid ' + TritonTheme.LIST_TABLE_BORDER_COLOR,
            'border-left': '1px solid ' + TritonTheme.LIST_TABLE_BORDER_COLOR,
            'height': Triton.ReplaceMap.LIST_HEADER_ROW_HEIGHT
        }
    },

    High: {
        css: {
            'vertical-align': 'middle',
            'border-bottom': '1px solid ' + TritonTheme.LIST_TABLE_BORDER_COLOR,
            'text-align': 'center',
            'line-height': '18px',
            'color': TritonTheme.LIST_TABLE_HIGH_TEXT_COLOR,
            'background-color': TritonTheme.LIST_TABLE_HIGH_BACKGROUND_COLOR,
            'font-family': 'notokr-medium, NanumGothicBold',
            'border-right': '1px solid ' + TritonTheme.LIST_TABLE_BORDER_COLOR,
            'border-left': '1px solid ' + TritonTheme.LIST_TABLE_BORDER_COLOR,
            'height': Triton.ReplaceMap.LIST_HEADER_ROW_HEIGHT
        }
    },

    AlwaysOnTop: {

        defaultSet: {
            css: {
                'color': TritonTheme.LIST_TABLE_ALWAYS_ON_TOP_TEXT_COLOR
            }
        },
        hoveringSet: {
            css: {
                'color': TritonTheme.LIST_TABLE_ALWAYS_ON_TOP_HOVERING_TEXT_COLOR
            }
        },
        css: {
            'vertical-align': 'middle',
            'cursor': 'pointer',
            'border-bottom': '1px solid ' + TritonTheme.LIST_TABLE_BORDER_COLOR,
            'text-align': 'center',
            'color': TritonTheme.LIST_TABLE_ALWAYS_ON_TOP_TEXT_COLOR,
            'background-color': TritonTheme.LIST_TABLE_ALWAYS_ON_TOP_BACKGROUND_COLOR,
            'font-family': 'notokr-medium, NanumGothicBold',
            'border-right': '1px solid ' + TritonTheme.LIST_TABLE_BORDER_COLOR,
            'border-left': '1px solid ' + TritonTheme.LIST_TABLE_BORDER_COLOR,
            'height': Triton.ReplaceMap.LIST_HEADER_ROW_HEIGHT,
            'line-height': '18px',
        }
    }

};


Triton.ListTable.Column = function (options) {
    this.row = undefined;
    this.init(options);
};
Triton.ListTable.Column.prototype = new Triton();
Triton.ListTable.Column.prototype.init = function (options) {

    options = Triton.combineOptions(options, {theme: Triton.ListTable.Column.Theme.Normal});

    this.jView = Triton.createJQueryElement(Triton.ListTable.Column.HTML);
    Triton.applyOptions(this.jView, options);
    this.jContent = Triton.findTritonContent(this.jView);

    this.initTriton(options);
};
Triton.ListTable.Column.prototype.getRow = function (row) {
    this.row = row
};
Triton.ListTable.Column.prototype.setRow = function () {
    return this.row;
};
Triton.ListTable.Column.NAME = 'triton_list_table_column';
Triton.ListTable.Column.HTML = '<td class="triton_list_table_column triton_content"></td>';
Triton.ListTable.Column.Theme = {

    Normal: {
        css: {
            'vertical-align': 'middle',
            'height': Triton.ReplaceMap.LIST_ROW_HEIGHT,
            'padding-top': '2px', 'padding-bottom': '2px'
        }
    },

    Header: {
        css: {
            'vertical-align': 'middle',
            'height': Triton.ReplaceMap.LIST_HEADER_ROW_HEIGHT,
            'padding-top': '2px', 'padding-bottom': '2px'
        }
    }

};


Triton.DetailTable = function (options) {
    this.init(options);
};
Triton.DetailTable.prototype = new Triton();
Triton.DetailTable.prototype.init = function (options) {

    this.currentRow = undefined;
    this.currentColumn = undefined;

    options = Triton.combineOptions(options, {theme: Triton.DetailTable.Theme.Normal});

    this.jView = Triton.createJQueryElement(Triton.DetailTable.HTML);
    Triton.applyOptions(this.jView, options);
    this.jContent = Triton.findTritonContent(this.jView);

    this.responsive = Lia.p(options, 'responsive');
    this.keyColumnWidth = parseInt(Lia.extractPropertyFromTwoMap(options, Lia.p(options, 'theme'), 'keyColumnWidth'));
    this.responsiveWidth = parseInt(Lia.extractPropertyFromTwoMap(options, Lia.p(options, 'theme'), 'responsiveWidth'));

    this.rowTheme = Lia.pd(Triton.DetailTable.Row.Theme.Normal, options, 'rowTheme');
    this.keyColumnTheme = Lia.pd(Triton.DetailTable.Column.Theme.Key, options, 'keyColumnTheme');
    this.valueColumTheme = Lia.pd(Triton.DetailTable.Column.Theme.Value, options, 'valueColumnTheme');

    this.initTriton(options);
    // this.onResponsiveResize();
};
Triton.DetailTable.prototype.appendRow = function (options) {

    options = Triton.combineOptions(options, {theme: this.rowTheme});
    this.currentRow = new Triton.DetailTable.Row(options);
    this.append(this.currentRow);
    // this.onResponsiveResize();
    return this.currentRow;
};
Triton.DetailTable.prototype.appendKeyColumn = function (options) {

    options = Triton.combineOptions(options, {theme: this.keyColumnTheme});

    var css = Lia.pd({}, options, 'css');
    css['width'] = Lia.pd(this.keyColumnWidth, css, 'width');
    options['css'] = css;

    this.currentColumn = new Triton.DetailTable.Column(options);
    this.currentRow.append(this.currentColumn);
    // this.onResponsiveResize();
    return this.currentColumn;
};
Triton.DetailTable.prototype.appendValueColumn = function (options) {

    options = Triton.combineOptions(options, {theme: this.valueColumTheme});
    this.currentColumn = new Triton.DetailTable.Column(options);
    this.currentRow.append(this.currentColumn);
    // this.onResponsiveResize();
    return this.currentColumn;
};
Triton.DetailTable.prototype.appendItem = function (item) {
    this.currentColumn.append(item);
    return this;
};
Triton.DetailTable.prototype.getCurrentRow = function () {
    return this.currentRow;
};
Triton.DetailTable.prototype.getJCurrentRow = function () {
    return this.currentRow.get();
};
Triton.DetailTable.prototype.getCurrentColumn = function () {
    return this.currentColumn;
};


Triton.DetailTable.prototype.onResponsiveResize = function () {

    // var width = this.jView.width();
    //
    // if (this.responsive == true && width < this.responsiveWidth) {
    //
    //     this.find('.triton_detail_table_row').each(function () {
    //
    //         var jThis = $(this);
    //         if (jThis.css('display') != 'none') {
    //             jThis.css({
    //                 'display': 'block'
    //             });
    //         }
    //     });
    //
    //     this.find('.triton_detail_table_column_key').each(function(){
    //
    //         var jThis = $(this);
    //         jThis.css({
    //             'width': '',
    //             'height': '',
    //             'padding-top': '10px',
    //             'padding-bottom': '10px'
    //         });
    //
    //         if (jThis.css('display') != 'none') {
    //
    //             jThis.css({
    //                 'display': 'block'
    //             });
    //         }
    //     });
    //
    //     this.find('.triton_detail_table_column_value').each(function(){
    //
    //         var jThis = $(this);
    //         jThis.css({
    //             'width': '',
    //             'height': ''
    //         });
    //
    //         if (jThis.css('display') != 'none') {
    //
    //             jThis.css({
    //                 'display': 'block'
    //             });
    //         }
    //     });
    //
    // } else {
    //
    //     var keyColumnWidth = parseInt(this.keyColumnWidth);
    //
    //     var jRow = this.find('.triton_detail_table_row').each(function () {
    //
    //         var jThis = $(this);
    //         if (jThis.css('display') != 'none') {
    //             jThis.css({
    //                 'display': 'table-row'
    //             });
    //         }
    //     });
    //
    //     for (var i = 0, l = jRow.length; i < l; i++) {
    //
    //         var jRowEq = jRow.eq(i);
    //
    //         var tableWidth = width;
    //
    //         var jKeyColumn = jRowEq.find('.triton_detail_table_column_key').css({
    //             'height': Triton.ReplaceMap.LIST_HEADER_ROW_HEIGHT,
    //             'width': keyColumnWidth + 'px',
    //             'padding-top': '',
    //             'padding-bottom': ''
    //         });
    //
    //
    //         var keyColumnCount = 0;
    //
    //         for ( var i2 = 0, l2 = jKeyColumn.length; i2 < l2; i2++ ) {
    //
    //             var jKeyColumnEq = jKeyColumn.eq(i2);
    //             if (jKeyColumnEq.css('display') != 'none') {
    //                 jKeyColumnEq.css({
    //                     'display': 'table-cell'
    //                 });
    //
    //                 ++keyColumnCount;
    //             }
    //         }
    //
    //         tableWidth -= keyColumnWidth * keyColumnCount;
    //
    //         var jValue = jRowEq.find('.triton_detail_table_column_value');
    //
    //         var totoalColspan = 0;
    //
    //         for (var j = 0, jl = jValue.length; j < jl; j++) {
    //
    //             var jValueEq = jValue.eq(j);
    //             if ( jValueEq.css('display') == 'none' ) {
    //                 continue;
    //             }
    //
    //             var colspan = jValueEq.attr('colspan');
    //             if (String.isBlank(colspan)) {
    //                 colspan = 1;
    //             }
    //
    //             totoalColspan += parseInt(colspan);
    //         }
    //
    //
    //         for (var j = 0, jl = jValue.length; j < jl; j++) {
    //
    //             var jValueEq = jValue.eq(j);
    //             if ( jValueEq.css('display') == 'none' ) {
    //                 continue;
    //             }
    //
    //             var colspan = jValueEq.attr('colspan');
    //             if (String.isBlank(colspan)) {
    //                 colspan = 1;
    //             }
    //
    //             jValueEq.css({
    //                 'display': 'table-cell',
    //                 'width': Math.floor(tableWidth * colspan / totoalColspan) + 'px'
    //             });
    //         }
    //
    //     }
    //
    // }

};
Triton.DetailTable.prototype.applyResponsive = function () {
};


Triton.DetailTable.NAME = 'triton_detail_table';
Triton.DetailTable.HTML = '<table class="triton_detail_table triton_responsive_resizable" cellpadding="0" cellspacing="0" style="width:100%;"><tbody class="triton_content"></tbody></table>';
Triton.DetailTable.Theme = {

    Normal: {

        keyColumnWidth: '150px',
        responsiveWidth: '1024px',

        css: {
            'vertical-align': 'middle',
            'border-collapse': 'collapse'
        }
    },

    Line: {

        keyColumnWidth: '150px',
        responsiveWidth: '1024px',

        css: {
            'border-top': '1px solid ' + TritonTheme.DETAIL_TABLE_BORDER_COLOR,
            'border-left': '1px solid ' + TritonTheme.DETAIL_TABLE_BORDER_COLOR,
            'vertical-align': 'middle',
            'border-collapse': 'collapse'
        }
    }
};


Triton.DetailTable.create = function (options) {
    return new Triton.DetailTable(options).getJView();
};
Triton.DetailTable.append = function (j, options) {
    var jView = Triton.DetailTable.create(options);
    j.append(jView);
    return Triton.findTritonContent(jView);
};
Triton.DetailTable.createRow = function (options) {
    var j = Triton.createJQueryElement(Triton.DetailTable.Row.HTML);
    options = Triton.combineOptions(options, {theme: Triton.DetailTable.Row.Theme.Normal});
    j = Triton.applyOptions(j, options);
    return j;
};
Triton.DetailTable.appendRow = function (j, options) {
    var jView = Triton.DetailTable.createRow(options);
    j.append(jView);
    return Triton.findTritonContent(jView);
};
Triton.DetailTable.createKeyColumn = function (options) {
    var j = Triton.createJQueryElement(Triton.DetailTable.Column.HTML);
    options = Triton.combineOptions(options, {theme: Triton.DetailTable.Column.Theme.Key});
    j = Triton.applyOptions(j, options);
    return j;
};
Triton.DetailTable.appendKeyColumn = function (jRowContent, options) {
    var jView = Triton.DetailTable.createKeyColumn(options);
    jRowContent.append(jView);
    return Triton.findTritonContent(jView);
};
Triton.DetailTable.createValueColumn = function (options) {
    var j = Triton.createJQueryElement(Triton.DetailTable.Column.HTML);
    options = Triton.combineOptions(options, {theme: Triton.DetailTable.Column.Theme.Value});
    j = Triton.applyOptions(j, options);
    return j;
};
Triton.DetailTable.appendValueColumn = function (jRowContent, options) {
    var jView = Triton.DetailTable.createValueColumn(options);
    jRowContent.append(jView);
    return Triton.findTritonContent(jView);
};
Triton.DetailTable.appendKeyValueColumn = function (jRowContent, keyOption, valueOption) {
    if (keyOption != undefined)
        Triton.DetailTable.appendKeyColumn(jRowContent, keyOption);
    if (valueOption != undefined)
        Triton.DetailTable.appendValueColumn(jRowContent, valueOption);
};
Triton.DetailTable.appendRowWithKeyValueColumns = function (jTableContent, keyValueOptions, rowOptions) {

    var jRow = Triton.DetailTable.appendRow(jTableContent, rowOptions);
    for (var i = 0, l = keyValueOptions.length; i < l; i += 2) {

        var keyOption = Lia.p(keyValueOptions, i);
        var valueOption = Lia.p(keyValueOptions, i + 1);

        if (keyOption != undefined)
            Triton.DetailTable.appendKeyColumn(jRow, keyOption);

        if (valueOption != undefined)
            Triton.DetailTable.appendValueColumn(jRow, valueOption);
    }
};


Triton.DetailTable.Row = function (options) {
    this.init(options);
};
Triton.DetailTable.Row.prototype = new Triton();
Triton.DetailTable.Row.prototype.init = function (options) {

    options = Triton.combineOptions(options, {theme: Triton.DetailTable.Row.Theme.Normal});

    this.jView = Triton.createJQueryElement(Triton.DetailTable.Row.HTML);
    Triton.applyOptions(this.jView, options);
    this.jContent = Triton.findTritonContent(this.jView);

    this.initTriton(options);
};

Triton.DetailTable.Row.NAME = 'triton_detail_table_row';
Triton.DetailTable.Row.HTML = '<tr class="triton_detail_table_row triton_content"></tr>';
Triton.DetailTable.Row.Theme = {

    Normal: {

        css: {
            'vertical-align': 'middle',
            'font-size': '13px',
            'background': TritonTheme.DETAIL_TABLE_POINT_BACKGROUND_COLOR,
            'text-align': 'center',
            'border-right': '1px solid ' + TritonTheme.DETAIL_TABLE_BORDER_COLOR,
            'border-bottom': '1px solid ' + TritonTheme.DETAIL_TABLE_BORDER_COLOR
        }
    },

    Line: {

        css: {
            'vertical-align': 'middle',
            'font-size': '13px',
            'background': TritonTheme.DETAIL_TABLE_BACKGROUND_COLOR,
            'text-align': 'center',
            'border-right': '1px solid ' + TritonTheme.DETAIL_TABLE_BORDER_COLOR,
            'border-bottom': '1px solid ' + TritonTheme.DETAIL_TABLE_BORDER_COLOR
        }
    }
};
Triton.DetailTable.Row.prototype.applyResponsive = function () {
};


Triton.DetailTable.Column = function (options) {
    this.init(options);
};
Triton.DetailTable.Column.prototype = new Triton();
Triton.DetailTable.Column.prototype.init = function (options) {

    options = Triton.combineOptions(options, {theme: Triton.DetailTable.Column.Theme.Normal});

    this.jView = Triton.createJQueryElement(Triton.DetailTable.Column.HTML);
    var addClass = Lia.p(options, 'theme', 'addClass');
    if (String.isNotBlank(addClass)) {
        this.jView.addClass(addClass);
    }

    Triton.applyOptions(this.jView, options);
    this.jContent = Triton.findTritonContent(this.jView);

    this.initTriton(options);
};
Triton.DetailTable.Column.NAME = 'triton_detail_table_column';
Triton.DetailTable.Column.HTML = '<td class="triton_detail_table_column triton_content"></td>';
Triton.DetailTable.Column.Theme = {

    Key: {


        addClass: 'triton_detail_table_column_key',

        css: {
            'height': Triton.ReplaceMap.LIST_HEADER_ROW_HEIGHT,
            'vertical-align': 'middle',
            'font-size': '13px',
            'color': TritonTheme.DETAIL_TABLE_POINT_TEXT_COLOR,
            'font-family': 'notokr-medium, NanumGothicBold',
            'background': TritonTheme.DETAIL_TABLE_POINT_BACKGROUND_COLOR,
            'text-align': 'center',
            'border-left': '1px solid ' + TritonTheme.DETAIL_TABLE_BORDER_COLOR,
            'box-sizing': 'border-box'
        }
    },

    LineKey: {


        addClass: 'triton_detail_table_column_key',

        css: {
            'height': Triton.ReplaceMap.LIST_HEADER_ROW_HEIGHT,
            'vertical-align': 'middle',
            'font-size': '13px',
            'color': TritonTheme.DETAIL_TABLE_TEXT_COLOR,
            'font-family': 'notokr-medium, NanumGothicBold',
            'background': TritonTheme.DETAIL_TABLE_BACKGROUND_COLOR,
            'text-align': 'center',
            'box-sizing': 'border-box'
        }
    },


    Value: {

        addClass: 'triton_detail_table_column_value',

        css: {
            'vertical-align': 'middle',
            'padding': '5px',
            'font-size': '13px',
            'overflow': 'auto',
            'color': TritonTheme.DETAIL_TABLE_TEXT_COLOR,
            'font-family': ' notokr-regular, NanumGothic',
            'background': TritonTheme.DETAIL_TABLE_BACKGROUND_COLOR,
            'text-align': 'left',
            'border-left': '1px solid ' + TritonTheme.DETAIL_TABLE_BORDER_COLOR,
            'box-sizing': 'border-box'
        }
    },

    LineValue: {

        addClass: 'triton_detail_table_column_value',

        css: {
            'vertical-align': 'middle',
            'padding': '5px',
            'font-size': '13px',
            'overflow': 'auto',
            'color': TritonTheme.DETAIL_TABLE_TEXT_COLOR,
            'font-family': ' notokr-regular, NanumGothic',
            'background': TritonTheme.DETAIL_TABLE_BACKGROUND_COLOR,
            'text-align': 'left',
            'box-sizing': 'border-box'
        }
    },

};
Triton.DetailTable.Column.prototype.applyResponsive = function () {
};


Triton.SeparateTable = function (options) {
    this.init(options);
};
Triton.SeparateTable.prototype = new Triton();
Triton.SeparateTable.prototype.init = function (options) {

    this.currentRow = undefined;
    this.currentColumn = undefined;

    options = Triton.combineOptions(options, {theme: Triton.SeparateTable.Theme.Normal});

    this.jView = Triton.createJQueryElement(Triton.SeparateTable.HTML);
    Triton.applyOptions(this.jView, options);
    this.jContent = Triton.findTritonContent(this.jView);

    this.initTriton(options);
};
Triton.SeparateTable.prototype.appendRow = function (options) {

    options = Triton.combineOptions(options, {theme: Triton.SeparateTable.Row.Theme.Normal});

    this.currentRow = new Triton.ListTable.Row(options);
    this.append(this.currentRow);

    return this.currentRow;
};
Triton.SeparateTable.prototype.appendColumn = function (options) {

    options = Triton.combineOptions(options, {theme: Triton.SeparateTable.Column.Theme.Normal});
    this.currentColumn = new Triton.SeparateTable.Column(options);
    this.currentRow.append(this.currentColumn);
    return this.currentColumn;
};
Triton.SeparateTable.prototype.appendItem = function (item) {
    this.currentColumn.append(item);
    return this;
};


Triton.SeparateTable.Theme = {
    Normal: {}
};
Triton.SeparateTable.NAME = 'triton_separate_table';
Triton.SeparateTable.HTML = '<table class="triton_separate_table" cellpadding="0" cellspacing="0" style="width:100%;">' +
    '<tbody class="triton_separate_table_body triton_content"></tbody>' +
    '</table>';
Triton.SeparateTable.create = function (options) {
    return new Triton.SeparateTable(options).getJView();
};
Triton.SeparateTable.append = function (j, options) {
    var jView = Triton.SeparateTable.create(options);
    j.append(jView);
    return Triton.findTritonContent(jView);
};

Triton.SeparateTable.createRow = function (options) {
    var j = Triton.createJQueryElement(Triton.SeparateTable.Row.HTML);
    j = Triton.applyOptions(j, options);
    return j;
};
Triton.SeparateTable.createColumn = function (options) {

    options = Triton.combineOptions(options, {
        theme: Triton.SeparateTable.Column.Theme.Normal
    });

    var j = Triton.createJQueryElement(Triton.SeparateTable.Column.HTML);
    j = Triton.applyOptions(j, options);
    return j;
};
Triton.SeparateTable.appendRow = function (j, options) {
    var jView = Triton.SeparateTable.createRow(options);
    j.append(jView);
    return Triton.findTritonContent(jView);
};
Triton.SeparateTable.appendColumn = function (j, options) {
    var jView = Triton.SeparateTable.createColumn(options);
    j.append(jView);
    return Triton.findTritonContent(jView);
};


Triton.SeparateTable.Row = function (options) {
    this.init(options);
};
Triton.SeparateTable.Row.prototype = new Triton();
Triton.SeparateTable.Row.prototype.init = function (options) {

    options = Triton.combineOptions(options, {theme: Triton.SeparateTable.Row.Theme.Normal});

    this.jView = Triton.createJQueryElement(Triton.SeparateTable.Row.HTML);
    Triton.applyOptions(this.jView, options);
    this.jContent = Triton.findTritonContent(this.jView);

    this.initTriton(options);
};
Triton.SeparateTable.Row.NAME = 'triton_separate_table_row';
Triton.SeparateTable.Row.HTML = '<tr class="triton_separate_table_row triton_content"></tr>';
Triton.SeparateTable.Row.Theme = {

    Normal: {}
};


Triton.SeparateTable.Column = function (options) {
    this.init(options);
};
Triton.SeparateTable.Column.prototype = new Triton();
Triton.SeparateTable.Column.prototype.init = function (options) {

    options = Triton.combineOptions(options, {theme: Triton.SeparateTable.Column.Theme.Normal});

    this.jView = Triton.createJQueryElement(Triton.SeparateTable.Column.HTML);
    Triton.applyOptions(this.jView, options);
    this.jContent = Triton.findTritonContent(this.jView);

    this.initTriton(options);
};
Triton.SeparateTable.Column.NAME = 'triton_separate_table_column';
Triton.SeparateTable.Column.HTML = '<td class="triton_separate_table_column triton_content"></td>';
Triton.SeparateTable.Column.Theme = {

    Normal: {
        attr: {
            'valign': 'top'
        }
    },

    Middle: {
        attr: {
            'valign': 'middle'
        }
    }
};


Triton.Title = function (options) {
    this.init(options);
};
Triton.Title.prototype = new Triton();
Triton.Title.prototype.init = function (options) {

    options = Triton.combineOptions(options, {
        theme: Triton.Title.Theme.Normal
    });

    this.jView = Triton.createJQueryElement(Triton.Title.HTML);
    Triton.applyOptions(this.jView, options);
    this.jContent = Triton.findTritonContent(this.jView);

    this.initTriton(options);
};
Triton.Title.prototype.setTitle = function (title) {
    this.jContent.html(title);
};

Triton.Title.NAME = 'triton_title';
Triton.Title.HTML = '<div class="triton_title" style="line-height:25px;position:relative;">' +
    '<div style="width:4px;background-color:' + TritonTheme.TITLE_POINT_COLOR + ';height:23px;position:absolute;left:0;top:2px;"></div>' +
    '<div class="triton_title_text triton_content" style="font-size:22px;font-family: notokr-medium, NanumGothicBold;color:' + TritonTheme.TITLE_TEXT_COLOR + ';letter-spacing:-0.3px;text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.004);margin-left:18px;text-align:left;"></div>' +
    '</div>';

Triton.Title.Theme = {
    Normal: {
        css: {
            'margin-bottom': '30px'
        }
    },

    NoMargin: {
        css: {
            'margin-bottom': 0
        }
    }
};

Triton.Title.create = function (options) {
    return new Triton.Title(options).getJView();
};
Triton.Title.append = function (j, options) {
    var jView = Triton.Title.create(options);
    j.append(jView);
    return Triton.findTritonContent(jView);
};


Triton.SubTitle = function (options) {
    this.init(options);
};
Triton.SubTitle.prototype = new Triton();
Triton.SubTitle.prototype.init = function (options) {
    this.jView = Triton.createJQueryElement(Triton.SubTitle.HTML);
    Triton.applyOptions(this.jView, options);
    this.jContent = Triton.findTritonContent(this.jView);

    this.initTriton(options);
};

Triton.SubTitle.NAME = 'triton_sub_title';
Triton.SubTitle.HTML = '<div class="triton_sub_title" style="margin-bottom:20px;font-size:16px;color:' + TritonTheme.SUB_TITLE_TEXT_COLOR + ';font-family: notokr-medium, NanumGothicBold;">' +
    '<span style="margin-right:10px">·</span>' +
    '<span class="triton_content"></span>' +
    '</div>';

Triton.SubTitle.create = function (options) {
    return new Triton.SubTitle(options).getJView();
};
Triton.SubTitle.append = function (j, options) {
    var jView = Triton.SubTitle.create(options);
    j.append(jView);
    return Triton.findTritonContent(jView);
};


Triton.Container = function (options) {
    this.init(options);
};
Triton.Container.prototype = new Triton();
Triton.Container.prototype.init = function (options) {

    options = Triton.combineOptions(options, {
        theme: Triton.Container.Theme.Normal
    });

    this.jView = Triton.createJQueryElement(Triton.Container.HTML);

    Triton.applyOptions(this.jView, options);
    this.jContent = Triton.findTritonContent(this.jView);

    this.initTriton(options);
};


Triton.Container.NAME = 'triton_container';
Triton.Container.HTML = '<div class="triton_container triton_content"></div>';
Triton.Container.Theme = {
    Normal: {
        css: {}
    }
};

Triton.Container.create = function (options) {
    return new Triton.Container(options).getJView();
};
Triton.Container.append = function (j, options) {
    var jView = Triton.Container.create(options);
    j.append(jView);
    return Triton.findTritonContent(jView);
};


Triton.Section = function (options) {
    this.init(options);
};
Triton.Section.prototype = new Triton();
Triton.Section.prototype.init = function (options) {

    this.jView = Triton.createJQueryElement(Triton.Section.HTML);
    Triton.applyOptions(this.jView, options);
    this.jContent = Triton.findTritonContent(this.jView);

    this.initTriton(options);
};

Triton.Section.NAME = 'triton_section';
Triton.Section.HTML = '<div class="triton_section triton_content"></div>';
Triton.Section.Theme = {
    Normal: {},


    UnderlineWhenHover: {
        css: {
            'cursor': 'pointer'
        },
        defaultSet: {
            css: {
                'text-decoration': 'none'
            }
        },
        hoveringSet: {
            css: {
                'text-decoration': 'underline'
            }
        }
    },

    Hover: {
        defaultSet: {
            css: {
                'color': '',
                'background-color': ''
            }
        },
        hoveringSet: {
            css: {
                'color': '#084897',
                'background-color': '#f7f7f7'
            }
        }
    },
    Square: {
        css: {
            'border': '1px solid ' + TritonTheme.SECTION_BORDER
        }
    },

    ListMessage: {
        css: {
            'border-left': '1px solid ' + TritonTheme.SECTION_BORDER,
            'border-right': '1px solid ' + TritonTheme.SECTION_BORDER,
            'border-bottom': '1px solid ' + TritonTheme.SECTION_BORDER,
            'height': '100px',
            'line-height': '100px',
            'text-align': 'center'
        }
    },

    Message: {
        css: {
            'border': '1px solid ' + TritonTheme.SECTION_BORDER,
            'padding': '20px',
            'text-align': 'center',
            'font-family': 'notokr-regular, NanumGothic'
        }
    },


    CategoryLayout: {
        css: {
            'overflow': 'auto'
        }
    },

    LeftRightLayout: {
        css: {
            'margin-top': '10px',
            'overflow': 'auto'
        }
    },

    ButtonLayout: {
        css: {
            'margin-top': '10px',
            'overflow': 'auto'
        }
    },

    LeftButtonLayout: {
        css: {
            'float': 'left',
            'overflow': 'auto'
        }
    },

    RightButtonLayout: {
        css: {
            'float': 'right',
            'overflow': 'auto'
        }
    },


    Pager: {
        css: {
            'margin-top': '30px',
            'line-height': '30px',
            'text-align': 'center'
        }
    },

    Category: {
        css: {
            'overflow': 'auto'
        }
    },

    CommentButtonLayout: {
        css: {
            'margin-top': '5px',
            'overflow': 'auto'
        }
    },

    CommentButtonLayout2: {
        css: {
            'position': 'absolute',
            'right': '0',
            'top': '5px',
            'overflow': 'auto'
        }
    },

    CommentWrite: {
        css: {
            'margin-top': '20px',
            'margin-bottom': '10px'
        }
    },

    CommentWrite2: {
        css: {
            'margin-top': '20px'
        }
    },

    CommentItem: {
        css: {
            'padding': '20px',
            'margin-top': '10px',
            'border': '1px solid #e1e1e1'
        }
    },

    CommentItem2: {
        css: {
            'margin': '0 30px',
            'padding': '20px 0',
            'border-top': '1px dotted #565656',
            'background': '#f4f4f4'
        }
    },

    CommentHeader: {
        css: {
            'margin-bottom': '10px'
        }
    },

    CommentHeader2: {
        css: {}
    }
};
Triton.Section.create = function (options) {
    return new Triton.Section(options).getJView();
};
Triton.Section.append = function (j, options) {
    var jView = Triton.Section.create(options);
    j.append(jView);
    return Triton.findTritonContent(jView);
};
Triton.Paragraph = Triton.Section;


Triton.LeftRightSection = function (options) {
    this.init(options);
};
Triton.LeftRightSection.prototype = new Triton();
Triton.LeftRightSection.prototype.init = function (options) {

    options = Triton.combineOptions(options, {
        theme: Triton.LeftRightSection.Theme.Normal
    });

    this.jView = Triton.createJQueryElement(Triton.LeftRightSection.HTML);
    Triton.applyOptions(this.jView, options);
    this.jContent = Triton.findTritonContent(this.jView);

    var leftSectionOptions = {
        css: {
            'float': 'left',
            'overflow': 'auto'
        },
        // pcCss: {
        //     'float': 'left'
        // },
        // tabletCss: {
        //     'float': 'left'
        // },
        // mobileCss: {
        //     'float': ''
        // },
        appendTo: this.jContent
    };
    leftSectionOptions['responsive'] = Lia.p(options, 'responsive');

    this.leftSection = new Triton.Section(leftSectionOptions);

    var rightSectionOptions = {
        css: {
            'float': 'right',
            'overflow': 'auto'
        },
        // pcCss: {
        //     'float': 'right'
        // },
        // tabletCss: {
        //     'float': 'right'
        // },
        // mobileCss: {
        //     'float': ''
        // },
        appendTo: this.jContent
    };
    rightSectionOptions['responsive'] = Lia.p(options, 'responsive');

    this.rightSection = new Triton.Section(rightSectionOptions);

    this.initTriton(options);
};
Triton.LeftRightSection.prototype.appendToLeft = function (item) {
    this.leftSection.append(item);

    this.applyResponsive();
};
Triton.LeftRightSection.prototype.appendToRight = function (item) {
    this.rightSection.append(item);

    this.applyResponsive();
};

Triton.LeftRightSection.prototype.applyResponsive = function () {

    this.leftSection.children().each(function () {

        var marginRight = '10px';

        var triton = $(this).getTriton();
        if (triton != undefined) {

            var options = triton.getOptions();

            var topLeft = Lia.p(options, 'theme', 'css', 'border-top-left-radius');
            var bottomLeft = Lia.p(options, 'theme', 'css', 'border-bottom-left-radius');

            var topRight = Lia.p(options, 'theme', 'css', 'border-top-right-radius');
            var bottomRight = Lia.p(options, 'theme', 'css', 'border-bottom-right-radius');

            if ((String.isBlank(topRight) || parseInt(topRight) == 0) &&
                (String.isBlank(bottomRight) || parseInt(bottomRight) == 0) &&
                (String.isNotBlank(topLeft) && parseInt(topLeft) > 0) &&
                (String.isNotBlank(bottomLeft) && parseInt(bottomLeft) > 0)) {
                marginRight = '0';
            }
        }

        $(this).css({
            'margin-left': '0',
            'margin-right': marginRight,
            'margin-bottom': '0'
        });
    });

    this.rightSection.children().each(function () {

        var marginLeft = '10px';

        var triton = $(this).getTriton();
        if (triton != undefined) {

            var options = triton.getOptions();

            var topLeft = Lia.p(options, 'theme', 'css', 'border-top-left-radius');
            var bottomLeft = Lia.p(options, 'theme', 'css', 'border-bottom-left-radius');

            var topRight = Lia.p(options, 'theme', 'css', 'border-top-right-radius');
            var bottomRight = Lia.p(options, 'theme', 'css', 'border-bottom-right-radius');

            if ((String.isBlank(topLeft) || parseInt(topLeft) == 0) &&
                (String.isBlank(bottomLeft) || parseInt(bottomLeft) == 0) &&
                (String.isNotBlank(topRight) && parseInt(topRight) > 0) &&
                (String.isNotBlank(bottomRight) && parseInt(bottomRight) > 0)) {
                marginLeft = '0';
            }
        }

        $(this).css({
            'margin-left': marginLeft,
            'margin-right': '0',
            'margin-bottom': '0'
        });

    });
    //
    // if (this.jView.hasClass('triton_responsive') != true || Triton.Responsive.inited != true) {
    //     return this;
    // }
    //
    // var responsiveType = Triton.Responsive.type;
    // if ( responsiveType == Triton.Responsive.Type.PC ) {
    //
    //     this.leftLeftRightSection.children().css({
    //         'margin-left' : '0',
    //         'margin-right' : '10px',
    //         'margin-bottom' : '0'
    //     });
    //     this.rightLeftRightSection.children().css({
    //         'margin-left' : '10px',
    //         'margin-right' : '0',
    //         'margin-bottom' : '0'
    //     });
    //
    //
    // } else
    //     if ( responsiveType == Triton.Responsive.Type.TABLET ) {
    //
    //     this.leftLeftRightSection.children().css({
    //         'margin-left' : '0',
    //         'margin-right' : '10px',
    //         'margin-bottom' : '0'
    //     });
    //     this.rightLeftRightSection.children().css({
    //         'margin-left' : '10px',
    //         'margin-right' : '0',
    //         'margin-bottom' : '0'
    //     });
    //
    // } else
    // if (responsiveType == Triton.Responsive.Type.MOBILE) {
    //
    //     this.leftSection.children().css({
    //         'margin-left': '0',
    //         'margin-right': '0',
    //         'margin-bottom': '10px'
    //     });
    //     this.rightSection.children().css({
    //         'margin-left': '0',
    //         'margin-right': '0',
    //         'margin-bottom': '10px'
    //     });
    //
    // }
    //
    // return this.refreshThemeOptions();
};


Triton.LeftRightSection.NAME = 'triton_left_right_section';
Triton.LeftRightSection.HTML = '<div class="triton_left_right_section triton_content"></div>';
Triton.LeftRightSection.create = function (options) {
    return new Triton.LeftRightSection(options).getJView();
};
Triton.LeftRightSection.append = function (j, options) {
    var jView = Triton.LeftRightSection.create(options);
    j.append(jView);
    return Triton.findTritonContent(jView);
};

Triton.LeftRightSection.Theme = {

    Normal: {
        css: {
            'margin-top': '10px',
            'overflow': 'auto'
        }
    }
};

Triton.CategorySection = Triton.LeftRightSection;
Triton.ButtonSection = Triton.LeftRightSection;


Triton.Panel = function (options) {
    this.init(options);
};

Triton.Panel.prototype = new Triton();
Triton.Panel.prototype.init = function (options) {

    options = Triton.combineOptions(options, {
        theme: Triton.Panel.Theme.Normal
    });

    this.jView = Triton.createJQueryElement(Triton.Panel.HTML);
    Triton.applyOptions(this.jView, options);
    this.jContent = Triton.findTritonContent(this.jView);

    var contentMinWidth = Lia.p(options, 'contentMinWidth');
    if (contentMinWidth != undefined) {

        this.jView.css({
            'overflow-x': 'auto'
        });

        this.jContent.css({
            'width': '100%',
            'min-width': contentMinWidth
        });
    }

    var contentMinHeight = Lia.p(options, 'contentMinHeight');
    if (contentMinHeight != undefined) {

        this.jView.css({
            'overflow-y': 'auto'
        });

        this.jContent.css({
            'height': '100%',
            'min-height': contentMinHeight
        });
    }


    this.initTriton(options);
};

Triton.Panel.NAME = 'triton_panel';
Triton.Panel.HTML = '<div class="triton_panel"><div class="triton_content"></div></div>';
Triton.Panel.Theme = {

    Normal: {
        css: {
            'border-top': '2px solid ' + TritonTheme.PANEL_BORDER_COLOR
        }
    },

    Search: {
        css: {
            'border-top': '2px solid ' + TritonTheme.PANEL_BORDER_COLOR,
            'margin-bottom': '10px'
        }
    },

    List: {
        css: {
            'margin-top': '10px',
            'border-top': '2px solid ' + TritonTheme.PANEL_BORDER_COLOR
        }
    }
};

Triton.Panel.create = function (options) {
    return new Triton.Panel(options).getJView();
};
Triton.Panel.append = function (j, options) {
    var jView = Triton.Panel.create(options);
    j.append(jView);
    return Triton.findTritonContent(jView);
};


Triton.FoldablePanel = function (options) {
    this.init(options);
};

Triton.FoldablePanel.prototype = new Triton();
Triton.FoldablePanel.prototype.init = function (options) {

    options = Triton.combineOptions(options, {
        theme: Triton.FoldablePanel.Theme.Normal
    });

    this.jView = Triton.createJQueryElement(Triton.FoldablePanel.HTML);
    Triton.applyOptions(this.jView, options);


    this.jContentContainer = this.jView.find('.triton_foldable_panel_container');

    this.jView.find('.triton_foldable_panel_title').on('click', {
        panel: this
    }, function (e) {

        var panel = e.data.panel;
        panel.fold(!panel.isFolded());
    }).on('mouseenter', function (e) {
        $(this).find('.triton_foldable_panel_title_text').css({
            'text-decoration': 'underline'
        });
    }).on('mouseleave', function (e) {
        $(this).find('.triton_foldable_panel_title_text').css({
            'text-decoration': ''
        });
    });

    this.jContent = Triton.findTritonContent(this.jView);

    var title = Lia.p(options, 'title');
    var jTitle = this.jView.find('.triton_foldable_panel_title_text');
    jTitle.html(title);

    var contentMinWidth = Lia.p(options, 'contentMinWidth');
    if (contentMinWidth != undefined) {

        this.jContentContainer.css({
            'overflow-x': 'auto'
        });

        this.jContent.css({
            'width': '100%',
            'min-width': contentMinWidth
        });
    }

    var contentMinHeight = Lia.p(options, 'contentMinHeight');
    if (contentMinHeight != undefined) {

        this.jContentContainer.css({
            'overflow-y': 'auto'
        });

        this.jContent.css({
            'height': '100%',
            'min-height': contentMinHeight
        });
    }

    this.jImage = this.jView.find('.triton_foldable_panel_title_image');

    this.fold(Lia.pd(false, options, 'folded'));

    this.initTriton(options);
};

Triton.FoldablePanel.prototype.fold = function (folded) {

    if (folded == true) {

        this.jContent.hide();
        this.jImage.attr({'src': '/res/lia/triton/img/img_open_more.png'});

    } else {

        this.jImage.attr({'src': '/res/lia/triton/img/img_close_more.png'});
        this.jContent.show();
    }

    Triton.Responsive.apply(true, this.jContent);
    Triton.ResponsiveResize.apply(this.jContent);

    this.folded = folded;
};

Triton.FoldablePanel.prototype.isFolded = function () {
    return this.folded;
};

Triton.FoldablePanel.NAME = 'triton_foldable_panel';
Triton.FoldablePanel.HTML = '<div class="triton_foldable_panel">' +
    '<div class="triton_foldable_panel_title" style="overflow:auto;cursor:pointer;margin-bottom:10px;">' +
    '<div style="float:left;height:25px;line-height:25px;vertical-align: middle;"><img class="triton_foldable_panel_title_image" alt="triton foldable panel title image" style="vertical-align: middle;"/></div>' +
    '<div class="triton_foldable_panel_title_text" style="float:left;height:25px;line-height:25px;font-size:18px;margin-left:7px;font-family: notokr-medium, NanumGothicBold;"></div>' +
    '</div>' +
    '<div class="triton_foldable_panel_container" style="">' +
    '<div class="triton_content" style="border-top:2px solid #084897"></div>' +
    '</div>' +
    '</div>';
Triton.FoldablePanel.Theme = {

    Normal: {},

    Padding: {
        css: {
            'margin-top': '20px'
        }
    }
};

Triton.FoldablePanel.create = function (options) {
    return new Triton.FoldablePanel(options).getJView();
};
Triton.FoldablePanel.append = function (j, options) {
    var jView = Triton.FoldablePanel.create(options);
    j.append(jView);
    return Triton.findTritonContent(jView);
};


Triton.Label = function (options) {
    this.init(options);
};

Triton.Label.prototype = new Triton();
Triton.Label.prototype.init = function (options) {

    options = Triton.combineOptions(options, {
        theme: Triton.Label.Theme.Normal
    });

    var j = Triton.createJQueryElement(Triton.Label.HTML);
    j = Triton.applyOptions(j, options);

    this.jView = j;
    this.jContent = Triton.findTritonContent(this.jView);

    this.initTriton(options);
};
Triton.Label.NAME = 'triton_label';
Triton.Label.HTML = '<div class="triton_label triton_content"></div>';
Triton.Label.Theme = {

    Normal: {
        css: {}
    },

    ListFlag: {

        css: {
            'height': '20px',
            'line-height': '20px',
            'font-size': '10px',
            'display': 'inline-block',
            '*zoom': '1',
            '*display': 'inline',
            'color': '#767575',
            'text-align': 'center',
            'padding': '0px 20px',
            'background-color': '#e1e1e1',
            'border-radius': '50px',
            'font-family': 'notokr-medium, NanumGothicBold'
        }
    },

    TitleNotAnswered: {

        css: {
            'height': '20px',
            'line-height': '20px',
            'font-size': '10px',
            'display': 'inline-block',
            '*zoom': '1',
            '*display': 'inline',
            'color': '#767575',
            'text-align': 'center',
            'padding': '0px 15px',
            'background-color': '#e1e1e1',
            'border-radius': '50px',
            'font-family': 'notokr-medium, NanumGothicBold',
            'margin-right': '10px'

        }
    },

    TitleAnswered: {

        css: {
            'height': '20px',
            'line-height': '20px',
            'font-size': '10px',
            'display': 'inline-block',
            '*zoom': '1',
            '*display': 'inline',
            'color': '#ffffff',
            'text-align': 'center',
            'padding': '0px 15px',
            'background-color': '#084897',
            'border-radius': '50px',
            'font-family': 'notokr-medium, NanumGothicBold',
            'margin-right': '10px'
        }
    },

    TitleNew: {

        css: {
            'height': '20px',
            'line-height': '20px',
            'font-size': '10px',
            'display': 'inline-block',
            '*zoom': '1',
            '*display': 'inline',
            'color': '#ffffff',
            'text-align': 'center',
            'padding': '0px 15px',
            'background-color': '#ec1b1b',
            'border-radius': '50px',
            'font-family': 'notokr-medium, NanumGothicBold',
            'margin-right': '10px'
        }
    }
};


Triton.Span = function (options) {
    this.init(options);
};

Triton.Span.prototype = new Triton();
Triton.Span.prototype.init = function (options) {

    options = Triton.combineOptions(options, {
        theme: Triton.Span.Theme.Normal
    });

    var j = Triton.createJQueryElement(Triton.Span.HTML);
    j = Triton.applyOptions(j, options);

    this.jView = j;
    this.jContent = Triton.findTritonContent(this.jView);

    this.initTriton(options);
};

Triton.Span.NAME = 'triton_span';
Triton.Span.HTML = '<span class="triton_span triton_content"></span>';
Triton.Span.Theme = {

    Normal: {
        css: {}
    },

    CommentCount: {
        css: {
            color: '#rgb(8, 72, 151)',
            'font-family': 'notokr-medium, NanumGothicBold'
        }
    },

    WriterAndRegisteredDate: {
        css: {
            color: '#9a9a9a',
            float: 'right'
        }
    },

    UnderlineWhenHover: {
        css: {
            'cursor': 'pointer'
        },
        defaultSet: {
            css: {
                'text-decoration': 'none'
            }
        },
        hoveringSet: {
            css: {
                'text-decoration': 'underline'
            }
        }
    },

    CommentWriter: {
        css: {
            'font-family': 'notokr-medium, NanumGothicBold',
            'color': '#5d5d5d',
            'font-size': '13px'

        }
    },

    CommentRegisteredDater: {
        css: {
            'margin-left': '20px',
            'margin-right': '20px',
            'font-size': '12px',
            'color': '#b7b7b7'
        }
    }

};


Triton.FlagSpan = function (options) {
    this.init(options);
};

Triton.FlagSpan.prototype = new Triton();
Triton.FlagSpan.prototype.init = function (options) {

    var j = Triton.createJQueryElement(Triton.FlagSpan.HTML);
    j = Triton.applyOptions(j, options);

    var theme = options['theme'];

    var spanOptions = Triton.combineOptions(options['spanOptions'], Lia.p(theme, 'span'));
    var imgOptions = Triton.combineOptions(options['imgOptions'], Lia.p(theme, 'img'));

    var content = options['content'];
    if (content != undefined) {
        spanOptions['content'] = content;
    }

    this.span = new Triton.Span(spanOptions).appendTo(j);
    this.image = new Triton.Image(imgOptions).appendTo(j);

    this.jView = j;
    this.jContent = Triton.findTritonContent(this.jView);

    this.initTriton(options);
};
Triton.FlagSpan.prototype.getSpan = function () {
    return this.span;
};

Triton.FlagSpan.NAME = 'triton_flag_span';
Triton.FlagSpan.HTML = '<span class="triton_flag_span"></span>';
Triton.FlagSpan.Theme = {

    OrderBy: {

        span: {
            css: {
                'height': '20px',
                'line-height': '20px'
            },
            attr: {}
        },

        img: {
            css: {
                'margin-left': '5px',
                'vertical-align': 'middle'
            },
            attr: {
                src: Triton.ReplaceMap.BASE_PATH + '/img/img_arrow_updown.png'
            }
        },

        css: {
            'cursor': 'pointer'
        }
    },

    NamDelete: {

        span: {
            css: {
                'height': '20px',
                'line-height': '20px'
            },
            attr: {}
        },

        img: {
            css: {
                'margin-left': '5px',
                'vertical-align': 'middle',
                'cursor': 'pointer'
            },
            attr: {
                src: Triton.ReplaceMap.BASE_PATH + '/img/img_small_x_red.png'
            },

            onClick: function () {

                $(this).parent().remove();
            }
        },

        css: {
            'display': 'block',
            'margin-top': '5px'
        }
    }
};


Triton.MoreSection = function (options) {
    this.init(options);
};

Triton.MoreSection.prototype = new Triton();
Triton.MoreSection.prototype.init = function (options) {

    options = Triton.combineOptions(options, {
        theme: Triton.MoreSection.Theme.Normal
    });
    var j = Triton.createJQueryElement(Triton.MoreSection.HTML);
    j = Triton.applyOptions(j, options);

    var triton = this;

    var title = Lia.pd('+ 더보기', options, 'title');
    var titleFontSize = Lia.pd('13px', options, 'titleFontSize');


    this.textSection = new Triton.Span({
        appendTo: j,
        theme: Triton.Span.Theme.UnderlineWhenHover,
        content: title,
        css: {
            'line-height': '30px',
            'cursor': 'pointer',
            'font-family': 'notokr-regular, NanumGothic',
            'font-size': titleFontSize,
            'font-weight': 'bold',
            'color': 'rgb(8, 72, 151)'
        },
        onClick: function (e) {

            if (triton.showing == true) {
                triton.moreSection.hide();
                triton.showing = false;
            } else {
                triton.moreSection.show();
                triton.showing = true;
            }
        }
    });

    this.moreSection = new Triton.Section({
        appendTo: j,
        css: {
            display: 'none'
        }
    });

    this.jView = j;
    this.initTriton(options);
};
Triton.MoreSection.prototype.showing = false;
Triton.MoreSection.prototype.appendToMore = function (j) {
    this.moreSection.append(j);
};


Triton.MoreSection.NAME = 'triton_key_value_section';
Triton.MoreSection.HTML = '<div class="triton_more_section"></div>';
Triton.MoreSection.Theme = {

    Normal: {}
};


Triton.KeyValueSection = function (options) {
    this.init(options);
};

Triton.KeyValueSection.prototype = new Triton();
Triton.KeyValueSection.prototype.init = function (options) {

    options = Triton.combineOptions(options, {
        theme: Triton.KeyValueSection.Theme.Normal
    });

    var j = Triton.createJQueryElement(Triton.KeyValueSection.HTML);
    j = Triton.applyOptions(j, options);

    var theme = options['theme'];

    var keyOptions = Triton.combineOptions(options['keyOptions'], Lia.p(theme, 'key'));
    var colonOptions = Triton.combineOptions(options['colonOptions'], Lia.p(theme, 'colon'));
    var valueOptions = Triton.combineOptions(options['valueOptions'], Lia.p(theme, 'value'));

    var keyContent = Lia.p(options, 'keyContent');
    var valueContent = Lia.p(options, 'valueContent');

    keyOptions['content'] = keyContent;
    colonOptions['content'] = ':';
    valueOptions['content'] = valueContent;

    this.key = new Triton.Span(keyOptions).appendTo(j);
    this.colon = new Triton.Span(colonOptions).appendTo(j);
    this.value = new Triton.Span(valueOptions).appendTo(j);

    this.jView = j;
    this.initTriton(options);
};

Triton.KeyValueSection.NAME = 'triton_key_value_section';
Triton.KeyValueSection.HTML = '<div class="triton_key_value_section"></div>';
Triton.KeyValueSection.Theme = {

    Normal: {

        key: {
            css: {
                'font-family': 'notokr-medium, NanumGothicBold'
            }
        },

        colon: {
            css: {
                'font-family': 'notokr-medium, NanumGothicBold',
                'margin-right': '10px',
                'margin-left': '10px'
            }
        },

        value: {
            css: {}
        },

        css: {
            'line-height': '20px',
            'height': '20px'
        }

    }
};


Triton.AttachmentItem = function (options) {
    this.init(options);
};

Triton.AttachmentItem.prototype = new Triton();
Triton.AttachmentItem.prototype.init = function (options) {

    options = Triton.combineOptions(options, {
        theme: Triton.AttachmentItem.Theme.Normal
    });

    var j = Triton.createJQueryElement(Triton.AttachmentItem.HTML);
    j = Triton.applyOptions(j, options);

    var theme = options['theme'];

    var openFileHandler = Lia.pd(Triton.AttachmentItem.openFileHandler, options, 'openFileHandler');
    var imgOptions = Triton.combineOptions(options['imgOptions'], Lia.p(theme, 'img'));
    var nameOptions = Triton.combineOptions(options['nameOptions'], Lia.p(theme, 'name'));
    var sizeOptions = Triton.combineOptions(options['sizeOptions'], Lia.p(theme, 'size'));

    var fileName = Lia.p(options, 'fileName');
    var fileSize = Lia.p(options, 'fileSize');
    var fileUrl = Lia.p(options, 'fileUrl');

    nameOptions['openFileHandler'] = openFileHandler;
    nameOptions['content'] = fileName;
    nameOptions['fileUrl'] = fileUrl;
    nameOptions['fileName'] = fileName;
    nameOptions['onClick'] = function (e) {

        var data = e.data;
        var openFileHandler = data.openFileHandler;
        if (openFileHandler != undefined) {
            openFileHandler(data.fileUrl, data.fileName);
        }
    };

    if ( fileSize != undefined && typeof fileSize != 'string') {
        fileSize = Lia.convertBytesToSize(fileSize);
    }

    sizeOptions['content'] = '( ' + fileSize + ' )';

    this.img = new Triton.Image(imgOptions).appendTo(j);
    this.name = new Triton.Span(nameOptions).appendTo(j);

    if (String.isNotBlank(fileSize) && fileSize != 0) {
        this.size = new Triton.Span(sizeOptions).appendTo(j);
    }

    this.jView = j;
    this.initTriton(options);
};
Triton.AttachmentItem.NAME = 'triton_attachment_item';
Triton.AttachmentItem.HTML = '<div class="triton_attachment_item"></div>';
Triton.AttachmentItem.Theme = {

    Normal: {

        img: {
            css: {
                'vertical-align': 'middle'
            },
            attr: {
                src: Triton.ReplaceMap.BASE_PATH + '/img/img_file.png'
            }
        },

        name: {

            defaultSet: {
                css: {
                    'text-decoration': 'none'
                }
            },

            hoveringSet: {
                css: {
                    'text-decoration': 'underline'
                }
            },

            css: {
                'cursor': 'pointer',
                'margin-right': '10px',
                'margin-left': '10px'
            },
            attr: {}
        },

        size: {
            css: {
                'color': '#b1b1b1'
            }
        },

        css: {
            'line-height': '25px'
        }
    },

    SIZE_NONE: {

        img: {
            css: {
                'vertical-align': 'middle'
            },
            attr: {
                src: Triton.ReplaceMap.BASE_PATH + '/img/img_file.png'
            }
        },

        name: {

            defaultSet: {
                css: {
                    'text-decoration': 'none'
                }
            },

            hoveringSet: {
                css: {
                    'text-decoration': 'underline'
                }
            },

            css: {
                'margin-right': '20px',
                'margin-left': '10px'
            },
            attr: {}
        },

        size: {
            css: {
                'display': 'none'
            }
        },

        css: {
            'height': '25px',
            'line-height': '25px'
        }
    }
};

Triton.AttachmentItem.openFileHandler = function (path) {
};
Triton.AttachmentItem.setOpenFileHandler = function (handler) {
    Triton.AttachmentItem.openFileHandler = handler;
};
Triton.AttachmentItem.setOpenFileHandler(function (path, destFilename) {

    if (Triton.AttachmentItem.siteType == Triton.SiteType.Polaris2 || Triton.AttachmentItem.siteType == Triton.SiteType.Pluto) {

        PathHelper.open(path, destFilename);

    } else {

        Requester.open(ApiUrl.File.GET, {
            'path': path,
            'destFilename': destFilename
        });
    }
});

Triton.AttachmentItem.initValues = function (type) {
    Triton.AttachmentItem.siteType = type;
};


Triton.FlatButton = function (options) {
    this.init(options);
};
Triton.FlatButton.prototype = new Triton();
Triton.FlatButton.prototype.init = function (options) {

    options = Triton.combineOptions(options, {
        theme: Triton.FlatButton.Theme.Normal
    });

    var j = Triton.createJQueryElement(Triton.FlatButton.HTML);
    j = Triton.applyOptions(j, options);

    var content = Lia.p(options, 'content');
    if (String.isNotBlank(content)) {
        j.attr('title', content);
    }

    if (options != undefined) {

        var theme = options['theme'];

        var icon = Lia.extractPropertyFromTwoMap(options, theme, 'icon');
        if (icon != undefined) {

            var iconUrl = icon['url'];
            if (iconUrl != undefined) {

                var jIcon = $('<img />');
                jIcon.attr('src', iconUrl);
                if (String.isNotBlank(content)) {
                    jIcon.attr('alt', content);
                }
                j.prepend(jIcon);
                Triton.applyTheme(jIcon, icon);
            }
        }

        var defaultColor = Lia.extractPropertyFromTwoMap(options, theme, 'defaultColor');
        if (defaultColor != undefined) {

            j.attr({
                'triton-default-background-color': defaultColor
            });
        }

        var hoverColor = Lia.extractPropertyFromTwoMap(options, theme, 'hoverColor');
        if (hoverColor != undefined) {

            j.attr({
                'triton-hover-background-color': hoverColor
            });
        }
    }

    this.jView = j;
    this.jContent = Triton.findTritonContent(this.jView);

    this.initTriton(options);
};

Triton.FlatButton.NAME = 'triton_flat_button';
Triton.FlatButton.HTML = '<div class="triton_flat_button triton_content"></div>';
Triton.FlatButton.Theme = {

    Square: {

        defaultSet: {
            css: {
                'background-color': TritonTheme.FLAT_BUTTON_SQUARE_BACKGROUND_COLOR,
                'color': TritonTheme.FLAT_BUTTON_SQUARE_TEXT_COLOR,
                'border-color': TritonTheme.FLAT_BUTTON_SQUARE_BORDER_COLOR
            },
            attr: {}
        },

        hoveringSet: {

            css: {
                'background-color': TritonTheme.FLAT_BUTTON_SQUARE_HOVER_BACKGROUND_COLOR,
                'color': TritonTheme.FLAT_BUTTON_SQUARE_HOVER_TEXT_COLOR,
                'border-color': TritonTheme.FLAT_BUTTON_SQUARE_HOVER_BORDER_COLOR
            },
            attr: {}
        },

        css: {
            'cursor': 'pointer',
            'display': 'inline-block',
            'font-size': '13px',
            '*zoom': '1',
            '*display': 'inline',
            'text-align': 'center',
            'padding': '5px 5px',
            'font-family': 'notokr-medium, NanumGothicBold',
            'background-color': TritonTheme.FLAT_BUTTON_SQUARE_BACKGROUND_COLOR,
            'color': TritonTheme.FLAT_BUTTON_SQUARE_HOVER_TEXT_COLOR,
            'border': '1px solid ' + TritonTheme.FLAT_BUTTON_SQUARE_BORDER_COLOR
        }
    },


    Header: {

        defaultSet: {
            css: {
                'background-color': TritonTheme.FLAT_BUTTON_NORMAL_BACKGROUND_COLOR,
                'color': TritonTheme.FLAT_BUTTON_NORMAL_TEXT_COLOR,
                'border-color': TritonTheme.FLAT_BUTTON_NORMAL_BORDER_COLOR
            },
            attr: {}
        },

        hoveringSet: {

            css: {
                'background-color': TritonTheme.FLAT_BUTTON_NORMAL_HOVER_BACKGROUND_COLOR,
                'color': TritonTheme.FLAT_BUTTON_NORMAL_HOVER_TEXT_COLOR,
                'border-color': TritonTheme.FLAT_BUTTON_NORMAL_HOVER_BORDER_COLOR
            },
            attr: {}
        },

        css: {
            'cursor': 'pointer',
            'display': 'inline-block',
            'height': '30px',
            'line-height': '30px',
            'font-size': '13px',
            '*zoom': '1',
            '*display': 'inline',
            'color': TritonTheme.FLAT_BUTTON_NORMAL_TEXT_COLOR,
            'text-align': 'center',
            'padding': '0px 15px',
            'border': '1px solid ' + TritonTheme.FLAT_BUTTON_NORMAL_BORDER_COLOR,
            'border-radius': '10px',
            'font-family': 'notokr-medium, NanumGothicBold'
        },

        // pcCss: {
        //     'display': 'inline-block'
        // },
        // tabletCss: {
        //     'display': 'inline-block'
        // },
        // mobileCss: {
        //     'display': 'block'
        // }
    },

    HeaderShade: {

        defaultSet: {
            css: {
                'background-color': TritonTheme.FLAT_BUTTON_SHADE_BACKGROUND_COLOR,
                'color': TritonTheme.FLAT_BUTTON_SHADE_TEXT_COLOR,
                'border-color': TritonTheme.FLAT_BUTTON_SHADE_BORDER_COLOR
            },
            attr: {}
        },

        hoveringSet: {

            css: {
                'background-color': TritonTheme.FLAT_BUTTON_SHADE_HOVER_BACKGROUND_COLOR,
                'color': TritonTheme.FLAT_BUTTON_SHADE_HOVER_TEXT_COLOR,
                'border-color': TritonTheme.FLAT_BUTTON_SHADE_HOVER_BORDER_COLOR
            },
            attr: {}
        },

        icon: {

            css: {
                'float': 'left',
                'margin-right': '5px',
                'margin-top': '10px'
            }
        },

        css: {
            'cursor': 'pointer',
            'height': '30px',
            'line-height': '30px',
            'font-size': '13px',
            'display': 'inline-block',
            '*zoom': '1',
            '*display': 'inline',
            'background-color': TritonTheme.FLAT_BUTTON_SHADE_BACKGROUND_COLOR,
            'color': TritonTheme.FLAT_BUTTON_SHADE_HOVER_TEXT_COLOR,
            'border': '1px solid ' + TritonTheme.FLAT_BUTTON_SHADE_BORDER_COLOR,
            'text-align': 'center',
            'padding': '0px 15px',
            'border-radius': '10px',
            'font-family': 'notokr-medium, NanumGothicBold'
        },

        // pcCss: {
        //     'display': 'inline-block'
        // },
        // tabletCss: {
        //     'display': 'inline-block'
        // },
        // mobileCss: {
        //     'display': 'block'
        // }
    },


    DatetimePicker: {

        defaultSet: {
            css: {
                'background-color': TritonTheme.FLAT_BUTTON_NORMAL_BACKGROUND_COLOR,
                'color': TritonTheme.FLAT_BUTTON_NORMAL_TEXT_COLOR,
                'border-color': TritonTheme.FLAT_BUTTON_NORMAL_BORDER_COLOR
            },
            attr: {}
        },

        hoveringSet: {

            css: {
                'background-color': TritonTheme.FLAT_BUTTON_NORMAL_HOVER_BACKGROUND_COLOR,
                'color': TritonTheme.FLAT_BUTTON_NORMAL_HOVER_TEXT_COLOR,
                'border-color': TritonTheme.FLAT_BUTTON_NORMAL_HOVER_BORDER_COLOR
            },
            attr: {}
        },

        css: {
            'cursor': 'pointer',
            'display': 'inline-block',
            'height': '18px',
            'line-height': '18px',
            'font-size': '13px',
            '*zoom': '1',
            '*display': 'inline',
            'color': TritonTheme.FLAT_BUTTON_NORMAL_TEXT_COLOR,
            'text-align': 'center',
            'padding': '5px 5px',
            'border': '1px solid ' + TritonTheme.FLAT_BUTTON_NORMAL_BORDER_COLOR,
            'border-radius': '10px',
            'font-family': 'notokr-medium, NanumGothicBold',
        }
    },

    Normal: {

        defaultSet: {
            css: {
                'background-color': TritonTheme.FLAT_BUTTON_NORMAL_BACKGROUND_COLOR,
                'color': TritonTheme.FLAT_BUTTON_NORMAL_TEXT_COLOR,
                'border-color': TritonTheme.FLAT_BUTTON_NORMAL_BORDER_COLOR
            },
            attr: {}
        },

        hoveringSet: {

            css: {
                'background-color': TritonTheme.FLAT_BUTTON_NORMAL_HOVER_BACKGROUND_COLOR,
                'color': TritonTheme.FLAT_BUTTON_NORMAL_HOVER_TEXT_COLOR,
                'border-color': TritonTheme.FLAT_BUTTON_NORMAL_HOVER_BORDER_COLOR
            },
            attr: {}
        },

        css: {
            'cursor': 'pointer',
            'display': 'inline-block',
            'height': '30px',
            'line-height': '30px',
            'font-size': '13px',
            '*zoom': '1',
            '*display': 'inline',
            'color': TritonTheme.FLAT_BUTTON_NORMAL_TEXT_COLOR,
            'text-align': 'center',
            'padding': '0px 15px',
            'border': '1px solid ' + TritonTheme.FLAT_BUTTON_NORMAL_BORDER_COLOR,
            'border-radius': '50px',
            'font-family': 'notokr-medium, NanumGothicBold',
        },

        // pcCss: {
        //     'display': 'inline-block'
        // },
        // tabletCss: {
        //     'display': 'inline-block'
        // },
        // mobileCss: {
        //     'display': 'block'
        // }
    },

    ListNormalFlat: {

        defaultSet: {
            css: {
                'background-color': TritonTheme.FLAT_BUTTON_NORMAL_BACKGROUND_COLOR,
                'color': TritonTheme.FLAT_BUTTON_NORMAL_TEXT_COLOR,
                'border-color': TritonTheme.FLAT_BUTTON_NORMAL_BORDER_COLOR
            },
            attr: {}
        },

        hoveringSet: {

            css: {
                'background-color': TritonTheme.FLAT_BUTTON_NORMAL_HOVER_BACKGROUND_COLOR,
                'color': TritonTheme.FLAT_BUTTON_NORMAL_HOVER_TEXT_COLOR,
                'border-color': TritonTheme.FLAT_BUTTON_NORMAL_HOVER_BORDER_COLOR
            },
            attr: {}
        },

        css: {
            'cursor': 'pointer',
            'display': 'inline-block',
            '*zoom': '1',
            '*display': 'inline',
            'text-align': 'center',
            'border-radius': '50px',
            'font-family': 'notokr-medium, NanumGothicBold',
            'height': '24px',
            'line-height': '24px',
            'font-size': '13px',
            'padding': '0 10px',
            'background-color': TritonTheme.FLAT_BUTTON_NORMAL_BACKGROUND_COLOR,
            'color': TritonTheme.FLAT_BUTTON_NORMAL_TEXT_COLOR,
            'border': '1px solid ' + TritonTheme.FLAT_BUTTON_NORMAL_BORDER_COLOR
        },

        // pcCss: {
        //     'display': 'inline-block'
        // },
        // tabletCss: {
        //     'display': 'inline-block'
        // },
        // mobileCss: {
        //     'display': 'block'
        // }
    },


    NormalLeft: {

        defaultSet: {
            css: {
                'background-color': TritonTheme.FLAT_BUTTON_NORMAL_BACKGROUND_COLOR,
                'color': TritonTheme.FLAT_BUTTON_NORMAL_TEXT_COLOR,
                'border-color': TritonTheme.FLAT_BUTTON_NORMAL_BORDER_COLOR
            },
            attr: {}
        },

        hoveringSet: {

            css: {
                'background-color': TritonTheme.FLAT_BUTTON_NORMAL_HOVER_BACKGROUND_COLOR,
                'color': TritonTheme.FLAT_BUTTON_NORMAL_HOVER_TEXT_COLOR,
                'border-color': TritonTheme.FLAT_BUTTON_NORMAL_HOVER_BORDER_COLOR
            },
            attr: {}
        },

        css: {
            'background-color': TritonTheme.FLAT_BUTTON_NORMAL_BACKGROUND_COLOR,
            'color': TritonTheme.FLAT_BUTTON_NORMAL_TEXT_COLOR,
            'border': '1px solid ' + TritonTheme.FLAT_BUTTON_NORMAL_BORDER_COLOR,
            'cursor': 'pointer',
            'display': 'inline-block',
            'height': '30px',
            'line-height': '30px',
            'font-size': '13px',
            '*zoom': '1',
            '*display': 'inline',
            'text-align': 'center',
            'padding-left': '20px',
            'padding-right': '15px',
            'border-top-left-radius': '50px',
            'border-bottom-left-radius': '50px',
            'font-family': 'notokr-medium, NanumGothicBold'
        },

        // pcCss: {
        //     'padding-left': '20px',
        //     'padding-right': '15px',
        //     'display': 'inline-block',
        //     'border-top-right-radius': '0px',
        //     'border-bottom-right-radius': '0px',
        //     'border-top-left-radius': '50px',
        //     'border-bottom-left-radius': '50px'
        // },
        // tabletCss: {
        //     'padding-left': '20px',
        //     'padding-right': '15px',
        //     'display': 'inline-block',
        //     'border-top-right-radius': '0px',
        //     'border-bottom-right-radius': '0px',
        //     'border-top-left-radius': '50px',
        //     'border-bottom-left-radius': '50px'
        // },
        // mobileCss: {
        //     'padding-left': '15px',
        //     'padding-right': '15px',
        //     'display': 'block',
        //     'border-top-right-radius': '50px',
        //     'border-bottom-right-radius': '50px',
        //     'border-top-left-radius': '50px',
        //     'border-bottom-left-radius': '50px'
        // }
    },

    NormalRight: {

        defaultSet: {
            css: {
                'background-color': TritonTheme.FLAT_BUTTON_NORMAL_BACKGROUND_COLOR,
                'color': TritonTheme.FLAT_BUTTON_NORMAL_TEXT_COLOR,
                'border-color': TritonTheme.FLAT_BUTTON_NORMAL_BORDER_COLOR
            },
            attr: {}
        },

        hoveringSet: {

            css: {
                'background-color': TritonTheme.FLAT_BUTTON_NORMAL_HOVER_BACKGROUND_COLOR,
                'color': TritonTheme.FLAT_BUTTON_NORMAL_HOVER_TEXT_COLOR,
                'border-color': TritonTheme.FLAT_BUTTON_NORMAL_HOVER_BORDER_COLOR
            },
            attr: {}
        },

        css: {
            'cursor': 'pointer',
            'display': 'inline-block',
            'height': '30px',
            'line-height': '30px',
            'font-size': '13px',
            '*zoom': '1',
            '*display': 'inline',
            'text-align': 'center',
            'padding-left': '15px',
            'padding-right': '20px',
            'border-top-right-radius': '50px',
            'border-bottom-right-radius': '50px',
            'font-family': 'notokr-medium, NanumGothicBold',
            'background-color': TritonTheme.FLAT_BUTTON_NORMAL_BACKGROUND_COLOR,
            'color': TritonTheme.FLAT_BUTTON_NORMAL_TEXT_COLOR,
            'border': '1px solid ' + TritonTheme.FLAT_BUTTON_NORMAL_BORDER_COLOR
        },

        // pcCss: {
        //     'padding-left': '15px',
        //     'padding-right': '20px',
        //     'display': 'inline-block',
        //     'border-top-left-radius': '0px',
        //     'border-bottom-left-radius': '0px',
        //     'border-top-right-radius': '50px',
        //     'border-bottom-right-radius': '50px'
        // },
        // tabletCss: {
        //     'padding-left': '15px',
        //     'padding-right': '20px',
        //     'display': 'inline-block',
        //     'border-top-left-radius': '0px',
        //     'border-bottom-left-radius': '0px',
        //     'border-top-right-radius': '50px',
        //     'border-bottom-right-radius': '50px'
        // },
        // mobileCss: {
        //     'padding-left': '15px',
        //     'padding-right': '15px',
        //     'display': 'block',
        //     'border-top-left-radius': '50px',
        //     'border-bottom-left-radius': '50px',
        //     'border-top-right-radius': '50px',
        //     'border-bottom-right-radius': '50px'
        // }
    },

    NoFlat: {
        defaultSet: {
            css: {
                'background-color': TritonTheme.FLAT_BUTTON_NORMAL_BACKGROUND_COLOR,
                'color': TritonTheme.FLAT_BUTTON_NORMAL_TEXT_COLOR,
                'border-color': TritonTheme.FLAT_BUTTON_NORMAL_BORDER_COLOR
            },
            attr: {}
        },

        hoveringSet: {

            css: {
                'background-color': TritonTheme.FLAT_BUTTON_NORMAL_HOVER_BACKGROUND_COLOR,
                'color': TritonTheme.FLAT_BUTTON_NORMAL_HOVER_TEXT_COLOR,
                'border-color': TritonTheme.FLAT_BUTTON_NORMAL_HOVER_BORDER_COLOR
            },
            attr: {}
        },

        css: {
            'cursor': 'pointer',
            'display': 'inline-block',
            'height': '39px',
            'line-height': '39px',
            'font-size': '13px',
            '*zoom': '1',
            '*display': 'inline',
            'text-align': 'center',
            'padding': '0px 20px',
            'border-radius': '50px',
            'font-family': 'notokr-medium, NanumGothicBold',
            'background-color': TritonTheme.FLAT_BUTTON_NORMAL_BACKGROUND_COLOR,
            'color': TritonTheme.FLAT_BUTTON_NORMAL_TEXT_COLOR,
            'border': '1px solid ' + TritonTheme.FLAT_BUTTON_NORMAL_BORDER_COLOR
        },

        // pcCss: {
        //     'display': 'inline-block'
        // },
        // tabletCss: {
        //     'display': 'inline-block'
        // },
        // mobileCss: {
        //     'display': 'block'
        // }
    },

    Delete: {

        defaultSet: {
            css: {
                'background-color': TritonTheme.FLAT_BUTTON_DELETE_BACKGROUND_COLOR,
                'color': TritonTheme.FLAT_BUTTON_DELETE_TEXT_COLOR,
                'border-color': TritonTheme.FLAT_BUTTON_DELETE_BORDER_COLOR
            },
            attr: {}
        },

        hoveringSet: {

            css: {
                'background-color': TritonTheme.FLAT_BUTTON_DELETE_HOVER_BACKGROUND_COLOR,
                'color': TritonTheme.FLAT_BUTTON_DELETE_HOVER_TEXT_COLOR,
                'border-color': TritonTheme.FLAT_BUTTON_DELETE_HOVER_BORDER_COLOR
            },
            attr: {}
        },

        icon: {

            css: {
                'float': 'left',
                'margin-right': '5px',
                'margin-top': '10px'
            }
        },

        css: {
            'cursor': 'pointer',
            'height': '30px',
            'line-height': '30px',
            'font-size': '13px',
            'display': 'inline-block',
            '*zoom': '1',
            '*display': 'inline',
            'text-align': 'center',
            'padding': '0px 15px',
            'border-radius': '50px',
            'font-family': 'notokr-medium, NanumGothicBold',
            'background-color': TritonTheme.FLAT_BUTTON_DELETE_BACKGROUND_COLOR,
            'color': TritonTheme.FLAT_BUTTON_DELETE_TEXT_COLOR,
            'border': '1px solid ' + TritonTheme.FLAT_BUTTON_DELETE_BORDER_COLOR
        },

        // pcCss: {
        //     'display': 'inline-block'
        // },
        // tabletCss: {
        //     'display': 'inline-block'
        // },
        // mobileCss: {
        //     'display': 'block'
        // }
    },

    DeleteLeft: {

        defaultSet: {
            css: {
                'background-color': TritonTheme.FLAT_BUTTON_DELETE_BACKGROUND_COLOR,
                'color': TritonTheme.FLAT_BUTTON_DELETE_TEXT_COLOR,
                'border-color': TritonTheme.FLAT_BUTTON_DELETE_BORDER_COLOR
            },
            attr: {}
        },

        hoveringSet: {

            css: {
                'background-color': TritonTheme.FLAT_BUTTON_DELETE_HOVER_BACKGROUND_COLOR,
                'color': TritonTheme.FLAT_BUTTON_DELETE_HOVER_TEXT_COLOR,
                'border-color': TritonTheme.FLAT_BUTTON_DELETE_HOVER_BORDER_COLOR
            },
            attr: {}
        },

        icon: {

            css: {

                'float': 'left',
                'margin-right': '3px',
                'margin-top': '9px'
            }
        },

        css: {
            'cursor': 'pointer',
            'height': '30px',
            'line-height': '30px',
            'font-size': '13px',
            'display': 'inline-block',
            '*zoom': '1',
            '*display': 'inline',
            'text-align': 'center',
            'padding-left': '20px',
            'padding-right': '15px',
            'border-top-left-radius': '50px',
            'border-bottom-left-radius': '50px',
            'font-family': 'notokr-medium, NanumGothicBold',
            'background-color': TritonTheme.FLAT_BUTTON_DELETE_BACKGROUND_COLOR,
            'color': TritonTheme.FLAT_BUTTON_DELETE_TEXT_COLOR,
            'border': '1px solid ' + TritonTheme.FLAT_BUTTON_DELETE_BORDER_COLOR
        },

        // pcCss: {
        //     'padding-left': '20px',
        //     'padding-right': '15px',
        //     'display': 'inline-block',
        //     'border-top-right-radius': '0px',
        //     'border-bottom-right-radius': '0px',
        //     'border-top-left-radius': '50px',
        //     'border-bottom-left-radius': '50px'
        // },
        // tabletCss: {
        //     'padding-left': '20px',
        //     'padding-right': '15px',
        //     'display': 'inline-block',
        //     'border-top-right-radius': '0px',
        //     'border-bottom-right-radius': '0px',
        //     'border-top-left-radius': '50px',
        //     'border-bottom-left-radius': '50px'
        // },
        // mobileCss: {
        //     'padding-left': '15px',
        //     'padding-right': '15px',
        //     'display': 'block',
        //     'border-top-right-radius': '50px',
        //     'border-bottom-right-radius': '50px',
        //     'border-top-left-radius': '50px',
        //     'border-bottom-left-radius': '50px'
        // }
    },

    DeleteRight: {

        defaultSet: {
            css: {
                'background-color': TritonTheme.FLAT_BUTTON_DELETE_BACKGROUND_COLOR,
                'color': TritonTheme.FLAT_BUTTON_DELETE_TEXT_COLOR,
                'border-color': TritonTheme.FLAT_BUTTON_DELETE_BORDER_COLOR
            },
            attr: {}
        },

        hoveringSet: {

            css: {
                'background-color': TritonTheme.FLAT_BUTTON_DELETE_HOVER_BACKGROUND_COLOR,
                'color': TritonTheme.FLAT_BUTTON_DELETE_HOVER_TEXT_COLOR,
                'border-color': TritonTheme.FLAT_BUTTON_DELETE_HOVER_BORDER_COLOR
            },
            attr: {}
        },

        icon: {

            css: {
                'float': 'left',
                'margin-right': '5px',
                'margin-top': '10px'
            }
        },

        css: {
            'cursor': 'pointer',
            'height': '30px',
            'line-height': '30px',
            'font-size': '13px',
            'display': 'inline-block',
            '*zoom': '1',
            '*display': 'inline',
            'text-align': 'center',
            'padding-left': '15px',
            'padding-right': '20px',
            'border-top-right-radius': '50px',
            'border-bottom-right-radius': '50px',
            'font-family': 'notokr-medium, NanumGothicBold',
            'background-color': TritonTheme.FLAT_BUTTON_DELETE_BACKGROUND_COLOR,
            'color': TritonTheme.FLAT_BUTTON_DELETE_TEXT_COLOR,
            'border': '1px solid ' + TritonTheme.FLAT_BUTTON_DELETE_BORDER_COLOR
        },

        // pcCss: {
        //     'padding-left': '15px',
        //     'padding-right': '20px',
        //     'display': 'inline-block',
        //     'border-top-left-radius': '0px',
        //     'border-bottom-left-radius': '0px',
        //     'border-top-right-radius': '50px',
        //     'border-bottom-right-radius': '50px'
        // },
        // tabletCss: {
        //     'padding-left': '15px',
        //     'padding-right': '20px',
        //     'display': 'inline-block',
        //     'border-top-left-radius': '0px',
        //     'border-bottom-left-radius': '0px',
        //     'border-top-right-radius': '50px',
        //     'border-bottom-right-radius': '50px'
        // },
        // mobileCss: {
        //     'padding-left': '15px',
        //     'padding-right': '15px',
        //     'display': 'block',
        //     'border-top-left-radius': '50px',
        //     'border-bottom-left-radius': '50px',
        //     'border-top-right-radius': '50px',
        //     'border-bottom-right-radius': '50px'
        // }
    },

    DetailDelete: {

        defaultSet: {
            css: {
                'background-color': TritonTheme.FLAT_BUTTON_DELETE_BACKGROUND_COLOR,
                'color': TritonTheme.FLAT_BUTTON_DELETE_TEXT_COLOR,
                'border-color': TritonTheme.FLAT_BUTTON_DELETE_BORDER_COLOR
            },
            attr: {}
        },

        hoveringSet: {

            css: {
                'background-color': TritonTheme.FLAT_BUTTON_DELETE_HOVER_BACKGROUND_COLOR,
                'color': TritonTheme.FLAT_BUTTON_DELETE_HOVER_TEXT_COLOR,
                'border-color': TritonTheme.FLAT_BUTTON_DELETE_HOVER_BORDER_COLOR
            },
            attr: {}
        },

        icon: {

            css: {
                'float': 'left',
                'margin-right': '5px',
                'margin-top': '8px'
            }
        },

        css: {
            'cursor': 'pointer',
            'height': '30px',
            'line-height': '30px',
            'font-size': '12px',
            'display': 'inline-block',
            '*zoom': '1',
            '*display': 'inline',
            'text-align': 'center',
            'padding': '0px 15px',
            'border-radius': '50px',
            'font-family': 'notokr-medium, NanumGothicBold',
            'background-color': TritonTheme.FLAT_BUTTON_DELETE_BACKGROUND_COLOR,
            'color': TritonTheme.FLAT_BUTTON_DELETE_TEXT_COLOR,
            'border': '1px solid ' + TritonTheme.FLAT_BUTTON_DELETE_BORDER_COLOR
        },

        // pcCss: {
        //     'display': 'inline-block'
        // },
        // tabletCss: {
        //     'display': 'inline-block'
        // },
        // mobileCss: {
        //     'display': 'block'
        // }

    },


    Shade: {

        defaultSet: {
            css: {
                'background-color': TritonTheme.FLAT_BUTTON_SHADE_BACKGROUND_COLOR,
                'color': TritonTheme.FLAT_BUTTON_SHADE_TEXT_COLOR,
                'border-color': TritonTheme.FLAT_BUTTON_SHADE_BORDER_COLOR
            },
            attr: {}
        },

        hoveringSet: {

            css: {
                'background-color': TritonTheme.FLAT_BUTTON_SHADE_HOVER_BACKGROUND_COLOR,
                'color': TritonTheme.FLAT_BUTTON_SHADE_HOVER_TEXT_COLOR,
                'border-color': TritonTheme.FLAT_BUTTON_SHADE_HOVER_BORDER_COLOR
            },
            attr: {}
        },

        icon: {

            css: {
                'float': 'left',
                'margin-right': '5px',
                'margin-top': '10px'
            }
        },

        css: {
            'cursor': 'pointer',
            'height': '30px',
            'line-height': '30px',
            'font-size': '13px',
            'display': 'inline-block',
            '*zoom': '1',
            '*display': 'inline',
            'text-align': 'center',
            'padding': '0px 15px',
            'border-radius': '50px',
            'font-family': 'notokr-medium, NanumGothicBold',
            'background-color': TritonTheme.FLAT_BUTTON_SHADE_BACKGROUND_COLOR,
            'color': TritonTheme.FLAT_BUTTON_SHADE_TEXT_COLOR,
            'border': '1px solid ' + TritonTheme.FLAT_BUTTON_SHADE_BORDER_COLOR
        },

        // pcCss: {
        //     'display': 'inline-block'
        // },
        // tabletCss: {
        //     'display': 'inline-block'
        // },
        // mobileCss: {
        //     'display': 'block'
        // }
    },


    ShadeSelected: {

        defaultSet: {
            css: {
                'background-color': TritonTheme.FLAT_BUTTON_SHADE_HOVER_BACKGROUND_COLOR,
                'color': TritonTheme.FLAT_BUTTON_SHADE_HOVER_TEXT_COLOR,
                'border-color': TritonTheme.FLAT_BUTTON_SHADE_HOVER_BORDER_COLOR
            },
            attr: {}
        },

        hoveringSet: {

            css: {
                'background-color': TritonTheme.FLAT_BUTTON_SHADE_HOVER_BACKGROUND_COLOR,
                'color': TritonTheme.FLAT_BUTTON_SHADE_HOVER_TEXT_COLOR,
                'border-color': TritonTheme.FLAT_BUTTON_SHADE_HOVER_BORDER_COLOR
            },
            attr: {}
        },

        icon: {

            css: {
                'float': 'left',
                'margin-right': '5px',
                'margin-top': '10px'
            }
        },

        css: {
            'cursor': 'pointer',
            'height': '30px',
            'line-height': '30px',
            'font-size': '13px',
            'display': 'inline-block',
            '*zoom': '1',
            '*display': 'inline',
            'text-align': 'center',
            'padding': '0px 15px',
            'border-radius': '50px',
            'font-family': 'notokr-medium, NanumGothicBold',
            'background-color': TritonTheme.FLAT_BUTTON_SHADE_HOVER_BACKGROUND_COLOR,
            'color': TritonTheme.FLAT_BUTTON_SHADE_HOVER_TEXT_COLOR,
            'border': '1px solid ' + TritonTheme.FLAT_BUTTON_SHADE_HOVER_BORDER_COLOR
        },

        // pcCss: {
        //     'display': 'inline-block'
        // },
        // tabletCss: {
        //     'display': 'inline-block'
        // },
        // mobileCss: {
        //     'display': 'block'
        // }
    },


    Search: {

        defaultSet: {
            css: {
                'background-color': TritonTheme.FLAT_BUTTON_SEARCH_BACKGROUND_COLOR,
                'color': TritonTheme.FLAT_BUTTON_SEARCH_TEXT_COLOR,
                'border-color': TritonTheme.FLAT_BUTTON_SEARCH_BORDER_COLOR
            },
            attr: {}
        },

        hoveringSet: {

            css: {
                'background-color': TritonTheme.FLAT_BUTTON_SEARCH_HOVER_BACKGROUND_COLOR,
                'color': TritonTheme.FLAT_BUTTON_SEARCH_HOVER_TEXT_COLOR,
                'border-color': TritonTheme.FLAT_BUTTON_SEARCH_HOVER_BORDER_COLOR
            },
            attr: {}
        },

        icon: {

            url: TritonTheme.FLAT_BUTTON_SEARCH_ICON_IMAGE_URL,
            css: {
                'float': 'left',
                'margin-right': '3px',
                'margin-top': '9px'
            }
        },

        css: {
            'cursor': 'pointer',
            'height': '30px',
            'line-height': '30px',
            'font-size': '13px',
            'display': 'inline-block',
            '*zoom': '1',
            '*display': 'inline',
            'text-align': 'center',
            'padding': '0px 15px',
            'font-family': 'notokr-medium, NanumGothicBold',
            'background-color': TritonTheme.FLAT_BUTTON_SEARCH_BACKGROUND_COLOR,
            'color': TritonTheme.FLAT_BUTTON_SEARCH_TEXT_COLOR,
            'border': '1px solid ' + TritonTheme.FLAT_BUTTON_SEARCH_BORDER_COLOR
        },

        // pcCss: {
        //     'display': 'inline-block'
        // },
        // tabletCss: {
        //     'display': 'inline-block'
        // },
        // mobileCss: {
        //     'display': 'block'
        // }
    },


    ListSearch: {

        defaultSet: {
            css: {
                'background-color': TritonTheme.FLAT_BUTTON_SEARCH_BACKGROUND_COLOR,
                'color': TritonTheme.FLAT_BUTTON_SEARCH_TEXT_COLOR,
                'border-color': TritonTheme.FLAT_BUTTON_SEARCH_BORDER_COLOR
            },
            attr: {}
        },

        hoveringSet: {

            css: {
                'background-color': TritonTheme.FLAT_BUTTON_SEARCH_HOVER_BACKGROUND_COLOR,
                'color': TritonTheme.FLAT_BUTTON_SEARCH_HOVER_TEXT_COLOR,
                'border-color': TritonTheme.FLAT_BUTTON_SEARCH_HOVER_BORDER_COLOR
            },
            attr: {}
        },

        icon: {

            url: TritonTheme.FLAT_BUTTON_SEARCH_ICON_IMAGE_URL,
            css: {
                'float': 'left',
                'margin-right': '5px',
                'margin-top': '5px'
            }
        },

        css: {
            'cursor': 'pointer',
            'height': '24px',
            'line-height': '24px',
            'font-size': '12px',
            'display': 'inline-block',
            '*zoom': '1',
            '*display': 'inline',
            'text-align': 'center',
            'padding': '0px 15px',
            'font-family': 'notokr-medium, NanumGothicBold',
            'background-color': TritonTheme.FLAT_BUTTON_SEARCH_BACKGROUND_COLOR,
            'color': TritonTheme.FLAT_BUTTON_SEARCH_TEXT_COLOR,
            'border': '1px solid ' + TritonTheme.FLAT_BUTTON_SEARCH_BORDER_COLOR
        }
    },


    ShadeLeft: {

        defaultSet: {
            css: {
                'background-color': TritonTheme.FLAT_BUTTON_SHADE_BACKGROUND_COLOR,
                'color': TritonTheme.FLAT_BUTTON_SHADE_TEXT_COLOR,
                'border-color': TritonTheme.FLAT_BUTTON_SHADE_BORDER_COLOR
            },
            attr: {}
        },

        hoveringSet: {

            css: {
                'background-color': TritonTheme.FLAT_BUTTON_SHADE_HOVER_BACKGROUND_COLOR,
                'color': TritonTheme.FLAT_BUTTON_SHADE_HOVER_TEXT_COLOR,
                'border-color': TritonTheme.FLAT_BUTTON_SHADE_HOVER_BORDER_COLOR
            },
            attr: {}
        },

        icon: {

            css: {
                'float': 'left',
                'margin-right': '3px',
                'margin-top': '9px'
            }
        },

        css: {
            'cursor': 'pointer',
            'height': '30px',
            'line-height': '30px',
            'font-size': '13px',
            'display': 'inline-block',
            '*zoom': '1',
            '*display': 'inline',
            'text-align': 'center',
            'padding-left': '20px',
            'padding-right': '15px',
            'border-top-left-radius': '50px',
            'border-bottom-left-radius': '50px',
            'font-family': 'notokr-medium, NanumGothicBold',
            'background-color': TritonTheme.FLAT_BUTTON_SHADE_BACKGROUND_COLOR,
            'color': TritonTheme.FLAT_BUTTON_SHADE_TEXT_COLOR,
            'border': '1px solid ' + TritonTheme.FLAT_BUTTON_SHADE_BORDER_COLOR
        },


        // pcCss: {
        //     'padding-left': '20px',
        //     'padding-right': '15px',
        //     'display': 'inline-block',
        //     'border-top-right-radius': '0px',
        //     'border-bottom-right-radius': '0px',
        //     'border-top-left-radius': '50px',
        //     'border-bottom-left-radius': '50px'
        // },
        // tabletCss: {
        //     'padding-left': '20px',
        //     'padding-right': '15px',
        //     'display': 'inline-block',
        //     'border-top-right-radius': '0px',
        //     'border-bottom-right-radius': '0px',
        //     'border-top-left-radius': '50px',
        //     'border-bottom-left-radius': '50px'
        // },
        // mobileCss: {
        //     'padding-left': '15px',
        //     'padding-right': '15px',
        //     'display': 'block',
        //     'border-top-right-radius': '50px',
        //     'border-bottom-right-radius': '50px',
        //     'border-top-left-radius': '50px',
        //     'border-bottom-left-radius': '50px'
        // }
    },

    ShadeRight: {

        defaultSet: {
            css: {
                'background-color': TritonTheme.FLAT_BUTTON_SHADE_BACKGROUND_COLOR,
                'color': TritonTheme.FLAT_BUTTON_SHADE_TEXT_COLOR,
                'border-color': TritonTheme.FLAT_BUTTON_SHADE_BORDER_COLOR
            },
            attr: {}
        },

        hoveringSet: {

            css: {
                'background-color': TritonTheme.FLAT_BUTTON_SHADE_HOVER_BACKGROUND_COLOR,
                'color': TritonTheme.FLAT_BUTTON_SHADE_HOVER_TEXT_COLOR,
                'border-color': TritonTheme.FLAT_BUTTON_SHADE_HOVER_BORDER_COLOR
            },
            attr: {}
        },
        icon: {

            css: {
                'float': 'left',
                'margin-right': '3px',
                'margin-top': '9px'
            }
        },

        css: {
            'cursor': 'pointer',
            'height': '30px',
            'line-height': '30px',
            'font-size': '13px',
            'display': 'inline-block',
            '*zoom': '1',
            '*display': 'inline',
            'text-align': 'center',
            'padding-left': '15px',
            'padding-right': '20px',
            'border-top-right-radius': '50px',
            'border-bottom-right-radius': '50px',
            'font-family': 'notokr-medium, NanumGothicBold',
            'background-color': TritonTheme.FLAT_BUTTON_SHADE_BACKGROUND_COLOR,
            'color': TritonTheme.FLAT_BUTTON_SHADE_TEXT_COLOR,
            'border': '1px solid ' + TritonTheme.FLAT_BUTTON_SHADE_BORDER_COLOR
        },

        // pcCss: {
        //     'padding-left': '15px',
        //     'padding-right': '20px',
        //     'display': 'inline-block',
        //     'border-top-left-radius': '0px',
        //     'border-bottom-left-radius': '0px',
        //     'border-top-right-radius': '50px',
        //     'border-bottom-right-radius': '50px'
        // },
        // tabletCss: {
        //     'padding-left': '15px',
        //     'padding-right': '20px',
        //     'display': 'inline-block',
        //     'border-top-left-radius': '0px',
        //     'border-bottom-left-radius': '0px',
        //     'border-top-right-radius': '50px',
        //     'border-bottom-right-radius': '50px'
        // },
        // mobileCss: {
        //     'padding-left': '15px',
        //     'padding-right': '15px',
        //     'display': 'block',
        //     'border-top-left-radius': '50px',
        //     'border-bottom-left-radius': '50px',
        //     'border-top-right-radius': '50px',
        //     'border-bottom-right-radius': '50px'
        // }
    },


    ShadeLightRight: {

        defaultSet: {
            css: {
                'background-color': TritonTheme.FLAT_BUTTON_SHADE_LIGHT_BACKGROUND_COLOR,
                'color': TritonTheme.FLAT_BUTTON_SHADE_LIGHT_TEXT_COLOR,
                'border-color': TritonTheme.FLAT_BUTTON_SHADE_LIGHT_BORDER_COLOR
            },
            attr: {}
        },

        hoveringSet: {

            css: {
                'background-color': TritonTheme.FLAT_BUTTON_SHADE_LIGHT_HOVER_BACKGROUND_COLOR,
                'color': TritonTheme.FLAT_BUTTON_SHADE_LIGHT_HOVER_TEXT_COLOR,
                'border-color': TritonTheme.FLAT_BUTTON_SHADE_LIGHT_HOVER_BORDER_COLOR
            },
            attr: {}
        },
        icon: {

            css: {
                'float': 'left',
                'margin-right': '3px',
                'margin-top': '9px'
            }
        },

        css: {
            'cursor': 'pointer',
            'height': '30px',
            'line-height': '30px',
            'font-size': '13px',
            'display': 'inline-block',
            '*zoom': '1',
            '*display': 'inline',
            'text-align': 'center',
            'padding-left': '15px',
            'padding-right': '20px',
            'border-top-right-radius': '50px',
            'border-bottom-right-radius': '50px',
            'font-family': 'notokr-medium, NanumGothicBold',
            'background-color': TritonTheme.FLAT_BUTTON_SHADE_LIGHT_BACKGROUND_COLOR,
            'color': TritonTheme.FLAT_BUTTON_SHADE_LIGHT_TEXT_COLOR,
            'border': '1px solid ' + TritonTheme.FLAT_BUTTON_SHADE_LIGHT_BORDER_COLOR
        },

        // pcCss: {
        //     'padding-left': '15px',
        //     'padding-right': '20px',
        //     'display': 'inline-block',
        //     'border-top-left-radius': '0px',
        //     'border-bottom-left-radius': '0px',
        //     'border-top-right-radius': '50px',
        //     'border-bottom-right-radius': '50px'
        // },
        // tabletCss: {
        //     'padding-left': '15px',
        //     'padding-right': '20px',
        //     'display': 'inline-block',
        //     'border-top-left-radius': '0px',
        //     'border-bottom-left-radius': '0px',
        //     'border-top-right-radius': '50px',
        //     'border-bottom-right-radius': '50px'
        // },
        // mobileCss: {
        //     'padding-left': '15px',
        //     'padding-right': '15px',
        //     'display': 'block',
        //     'border-top-left-radius': '50px',
        //     'border-bottom-left-radius': '50px',
        //     'border-top-right-radius': '50px',
        //     'border-bottom-right-radius': '50px'
        // }
    },


    ExcelLeft: {

        defaultSet: {
            css: {
                'background-color': TritonTheme.FLAT_BUTTON_SHADE_BACKGROUND_COLOR,
                'color': TritonTheme.FLAT_BUTTON_SHADE_TEXT_COLOR,
                'border-color': TritonTheme.FLAT_BUTTON_SHADE_BORDER_COLOR
            },
            attr: {}
        },

        hoveringSet: {

            css: {
                'background-color': TritonTheme.FLAT_BUTTON_SHADE_HOVER_BACKGROUND_COLOR,
                'color': TritonTheme.FLAT_BUTTON_SHADE_HOVER_TEXT_COLOR,
                'border-color': TritonTheme.FLAT_BUTTON_SHADE_HOVER_BORDER_COLOR
            },
            attr: {}
        },

        icon: {

            url: TritonTheme.FLAT_BUTTON_EXCEL_ICON_IMAGE_URL,
            css: {
                'float': 'left',
                'margin-right': '3px',
                'margin-top': '9px'
            }
        },

        css: {
            'cursor': 'pointer',
            'height': '30px',
            'line-height': '30px',
            'font-size': '13px',
            'display': 'inline-block',
            '*zoom': '1',
            '*display': 'inline',
            'text-align': 'center',
            'padding-left': '20px',
            'padding-right': '15px',
            'border-top-left-radius': '50px',
            'border-bottom-left-radius': '50px',
            'font-family': 'notokr-medium, NanumGothicBold',
            'background-color': TritonTheme.FLAT_BUTTON_SHADE_BACKGROUND_COLOR,
            'color': TritonTheme.FLAT_BUTTON_SHADE_TEXT_COLOR,
            'border': '1px solid ' + TritonTheme.FLAT_BUTTON_SHADE_BORDER_COLOR
        },

        // pcCss: {
        //     'padding-left': '20px',
        //     'padding-right': '15px',
        //     'display': 'inline-block',
        //     'border-top-right-radius': '0px',
        //     'border-bottom-right-radius': '0px',
        //     'border-top-left-radius': '50px',
        //     'border-bottom-left-radius': '50px'
        // },
        // tabletCss: {
        //     'padding-left': '20px',
        //     'padding-right': '15px',
        //     'display': 'inline-block',
        //     'border-top-right-radius': '0px',
        //     'border-bottom-right-radius': '0px',
        //     'border-top-left-radius': '50px',
        //     'border-bottom-left-radius': '50px'
        // },
        // mobileCss: {
        //     'padding-left': '15px',
        //     'padding-right': '15px',
        //     'display': 'block',
        //     'border-top-right-radius': '50px',
        //     'border-bottom-right-radius': '50px',
        //     'border-top-left-radius': '50px',
        //     'border-bottom-left-radius': '50px'
        // }
    },

    Excel: {

        defaultSet: {
            css: {
                'background-color': TritonTheme.FLAT_BUTTON_SHADE_BACKGROUND_COLOR,
                'color': TritonTheme.FLAT_BUTTON_SHADE_TEXT_COLOR,
                'border-color': TritonTheme.FLAT_BUTTON_SHADE_BORDER_COLOR
            },
            attr: {}
        },

        hoveringSet: {

            css: {
                'background-color': TritonTheme.FLAT_BUTTON_SHADE_HOVER_BACKGROUND_COLOR,
                'color': TritonTheme.FLAT_BUTTON_SHADE_HOVER_TEXT_COLOR,
                'border-color': TritonTheme.FLAT_BUTTON_SHADE_HOVER_BORDER_COLOR
            },
            attr: {}
        },

        icon: {

            url: TritonTheme.FLAT_BUTTON_EXCEL_ICON_IMAGE_URL,
            css: {
                'float': 'left',
                'margin-right': '5px',
                'margin-top': '10px'
            }
        },

        css: {
            'cursor': 'pointer',
            'height': '30px',
            'line-height': '30px',
            'font-size': '13px',
            'display': 'inline-block',
            '*zoom': '1',
            '*display': 'inline',
            'text-align': 'center',
            'padding': '0px 15px',
            'border-radius': '50px',
            'font-family': 'notokr-medium, NanumGothicBold',
            'background-color': TritonTheme.FLAT_BUTTON_SHADE_BACKGROUND_COLOR,
            'color': TritonTheme.FLAT_BUTTON_SHADE_TEXT_COLOR,
            'border': '1px solid ' + TritonTheme.FLAT_BUTTON_SHADE_BORDER_COLOR
        },

        // pcCss: {
        //     'display': 'inline-block'
        // },
        // tabletCss: {
        //     'display': 'inline-block'
        // },
        // mobileCss: {
        //     'display': 'block'
        // }
    },

    Refresh: {

        defaultSet: {
            css: {
                'background-color': TritonTheme.FLAT_BUTTON_SHADE_BACKGROUND_COLOR,
                'color': TritonTheme.FLAT_BUTTON_SHADE_TEXT_COLOR,
                'border-color': TritonTheme.FLAT_BUTTON_SHADE_BORDER_COLOR
            },
            attr: {}
        },

        hoveringSet: {

            css: {
                'background-color': TritonTheme.FLAT_BUTTON_SHADE_HOVER_BACKGROUND_COLOR,
                'color': TritonTheme.FLAT_BUTTON_SHADE_HOVER_TEXT_COLOR,
                'border-color': TritonTheme.FLAT_BUTTON_SHADE_HOVER_BORDER_COLOR
            },
            attr: {}
        },

        icon: {

            url: TritonTheme.FLAT_BUTTON_REFRESH_ICON_IMAGE_URL,
            css: {
                'float': 'left',
                'margin-right': '3px',
                'margin-top': '9px'
            }
        },

        css: {
            'cursor': 'pointer',
            'height': '30px',
            'line-height': '30px',
            'font-size': '13px',
            'display': 'inline-block',
            '*zoom': '1',
            '*display': 'inline',
            'text-align': 'center',
            'padding': '0px 15px',
            'border-radius': '50px',
            'font-family': 'notokr-medium, NanumGothicBold',
            'background-color': TritonTheme.FLAT_BUTTON_SHADE_BACKGROUND_COLOR,
            'color': TritonTheme.FLAT_BUTTON_SHADE_TEXT_COLOR,
            'border': '1px solid ' + TritonTheme.FLAT_BUTTON_SHADE_BORDER_COLOR
        },

        // pcCss: {
        //     'display': 'inline-block'
        // },
        // tabletCss: {
        //     'display': 'inline-block'
        // },
        // mobileCss: {
        //     'display': 'block'
        // }
    },


    ListEdit: {

        defaultSet: {
            css: {
                'background-color': TritonTheme.FLAT_BUTTON_SHADE_BACKGROUND_COLOR,
                'color': TritonTheme.FLAT_BUTTON_SHADE_TEXT_COLOR,
                'border-color': TritonTheme.FLAT_BUTTON_SHADE_BORDER_COLOR
            },
            attr: {}
        },

        hoveringSet: {

            css: {
                'background-color': TritonTheme.FLAT_BUTTON_SHADE_HOVER_BACKGROUND_COLOR,
                'color': TritonTheme.FLAT_BUTTON_SHADE_HOVER_TEXT_COLOR,
                'border-color': TritonTheme.FLAT_BUTTON_SHADE_HOVER_BORDER_COLOR
            },
            attr: {}
        },

        icon: {

            url: TritonTheme.FLAT_BUTTON_EDIT_SMALL_ICON_IMAGE_URL,
            css: {
                'float': 'left',
                'margin-right': '5px',
                'margin-top': '8px'
            }
        },

        css: {
            'cursor': 'pointer',
            'height': '24px',
            'line-height': '24px',
            'font-size': '12px',
            'display': 'inline-block',
            '*zoom': '1',
            '*display': 'inline',
            'text-align': 'center',
            'padding': '0px 15px',
            'border-radius': '50px',
            'font-family': 'notokr-medium, NanumGothicBold',
            'background-color': TritonTheme.FLAT_BUTTON_SHADE_BACKGROUND_COLOR,
            'color': TritonTheme.FLAT_BUTTON_SHADE_TEXT_COLOR,
            'border': '1px solid ' + TritonTheme.FLAT_BUTTON_SHADE_BORDER_COLOR
        }
    },

    BigListEdit: {

        defaultSet: {
            css: {
                'background-color': TritonTheme.FLAT_BUTTON_SHADE_BACKGROUND_COLOR,
                'color': TritonTheme.FLAT_BUTTON_SHADE_TEXT_COLOR,
                'border-color': TritonTheme.FLAT_BUTTON_SHADE_BORDER_COLOR
            },
            attr: {}
        },

        hoveringSet: {

            css: {
                'background-color': TritonTheme.FLAT_BUTTON_SHADE_HOVER_BACKGROUND_COLOR,
                'color': TritonTheme.FLAT_BUTTON_SHADE_HOVER_TEXT_COLOR,
                'border-color': TritonTheme.FLAT_BUTTON_SHADE_HOVER_BORDER_COLOR
            },
            attr: {}
        },

        icon: {

            url: TritonTheme.FLAT_BUTTON_EDIT_SMALL_ICON_IMAGE_URL,
            css: {
                'float': 'left',
                'margin-right': '5px',
                'margin-top': '11px'
            }
        },

        css: {
            'cursor': 'pointer',
            'height': '30px',
            'line-height': '30px',
            'font-size': '12px',
            'display': 'inline-block',
            '*zoom': '1',
            '*display': 'inline',
            'text-align': 'center',
            'padding': '0px 15px',
            'border-radius': '50px',
            'font-family': 'notokr-medium, NanumGothicBold',
            'background-color': TritonTheme.FLAT_BUTTON_SHADE_BACKGROUND_COLOR,
            'color': TritonTheme.FLAT_BUTTON_SHADE_TEXT_COLOR,
            'border': '1px solid ' + TritonTheme.FLAT_BUTTON_SHADE_BORDER_COLOR
        },

        // pcCss: {
        //     'display': 'inline-block'
        // },
        // tabletCss: {
        //     'display': 'inline-block'
        // },
        // mobileCss: {
        //     'display': 'block'
        // }
    },

    ListInquiry: {

        defaultSet: {
            css: {
                'background-color': TritonTheme.FLAT_BUTTON_SHADE_BACKGROUND_COLOR,
                'color': TritonTheme.FLAT_BUTTON_SHADE_TEXT_COLOR,
                'border-color': TritonTheme.FLAT_BUTTON_SHADE_BORDER_COLOR
            },
            attr: {}
        },

        hoveringSet: {

            css: {
                'background-color': TritonTheme.FLAT_BUTTON_SHADE_HOVER_BACKGROUND_COLOR,
                'color': TritonTheme.FLAT_BUTTON_SHADE_HOVER_TEXT_COLOR,
                'border-color': TritonTheme.FLAT_BUTTON_SHADE_HOVER_BORDER_COLOR
            },
            attr: {}
        },

        icon: {

            url: TritonTheme.FLAT_BUTTON_INQUIRY_SMALL_ICON_IMAGE_URL,
            css: {
                'float': 'left',
                'margin-right': '5px',
                'margin-top': '8px'
            }
        },

        css: {
            'cursor': 'pointer',
            'height': '24px',
            'line-height': '24px',
            'font-size': '12px',
            'display': 'inline-block',
            '*zoom': '1',
            '*display': 'inline',
            'text-align': 'center',
            'padding': '0px 15px',
            'border-radius': '50px',
            'font-family': 'notokr-medium, NanumGothicBold',
            'background-color': TritonTheme.FLAT_BUTTON_SHADE_BACKGROUND_COLOR,
            'color': TritonTheme.FLAT_BUTTON_SHADE_TEXT_COLOR,
            'border': '1px solid ' + TritonTheme.FLAT_BUTTON_SHADE_BORDER_COLOR
        }
    },

    ListDelete: {

        defaultSet: {
            css: {
                'background-color': TritonTheme.FLAT_BUTTON_DELETE_BACKGROUND_COLOR,
                'color': TritonTheme.FLAT_BUTTON_DELETE_TEXT_COLOR,
                'border-color': TritonTheme.FLAT_BUTTON_DELETE_BORDER_COLOR
            },
            attr: {}
        },

        hoveringSet: {

            css: {
                'background-color': TritonTheme.FLAT_BUTTON_DELETE_HOVER_BACKGROUND_COLOR,
                'color': TritonTheme.FLAT_BUTTON_DELETE_HOVER_TEXT_COLOR,
                'border-color': TritonTheme.FLAT_BUTTON_DELETE_HOVER_BORDER_COLOR
            },
            attr: {}
        },

        icon: {

            url: TritonTheme.FLAT_BUTTON_DELETE_SMALL_ICON_IMAGE_URL,
            css: {
                'float': 'left',
                'margin-right': '5px',
                'margin-top': '9px'
            }
        },

        css: {
            'cursor': 'pointer',
            'height': '24px',
            'line-height': '24px',
            'font-size': '12px',
            'display': 'inline-block',
            '*zoom': '1',
            '*display': 'inline',
            'text-align': 'center',
            'padding': '0px 15px',
            'border-radius': '50px',
            'font-family': 'notokr-medium, NanumGothicBold',
            'background-color': TritonTheme.FLAT_BUTTON_DELETE_BACKGROUND_COLOR,
            'color': TritonTheme.FLAT_BUTTON_DELETE_TEXT_COLOR,
            'border': '1px solid ' + TritonTheme.FLAT_BUTTON_DELETE_BORDER_COLOR
        }
    },

    ListDeleteLeft: {

        defaultSet: {
            css: {
                'background-color': TritonTheme.FLAT_BUTTON_DELETE_BACKGROUND_COLOR,
                'color': TritonTheme.FLAT_BUTTON_DELETE_TEXT_COLOR,
                'border-color': TritonTheme.FLAT_BUTTON_DELETE_BORDER_COLOR
            },
            attr: {}
        },

        hoveringSet: {

            css: {
                'background-color': TritonTheme.FLAT_BUTTON_DELETE_HOVER_BACKGROUND_COLOR,
                'color': TritonTheme.FLAT_BUTTON_DELETE_HOVER_TEXT_COLOR,
                'border-color': TritonTheme.FLAT_BUTTON_DELETE_HOVER_BORDER_COLOR
            },
            attr: {}
        },

        icon: {

            url: TritonTheme.FLAT_BUTTON_DELETE_SMALL_ICON_IMAGE_URL,
            css: {
                'float': 'left',
                'margin-right': '5px',
                'margin-top': '9px'
            }
        },

        css: {
            'cursor': 'pointer',
            'height': '24px',
            'line-height': '24px',
            'font-size': '12px',
            'display': 'inline-block',
            '*zoom': '1',
            '*display': 'inline',
            'text-align': 'center',
            'padding-left': '20px',
            'padding-right': '15px',
            'border-top-left-radius': '50px',
            'border-bottom-left-radius': '50px',
            'font-family': 'notokr-medium, NanumGothicBold',
            'background-color': TritonTheme.FLAT_BUTTON_DELETE_BACKGROUND_COLOR,
            'color': TritonTheme.FLAT_BUTTON_DELETE_TEXT_COLOR,
            'border': '1px solid ' + TritonTheme.FLAT_BUTTON_DELETE_BORDER_COLOR
        }
    },

    ListDeleteRight: {

        defaultSet: {
            css: {
                'background-color': TritonTheme.FLAT_BUTTON_DELETE_BACKGROUND_COLOR,
                'color': TritonTheme.FLAT_BUTTON_DELETE_TEXT_COLOR,
                'border-color': TritonTheme.FLAT_BUTTON_DELETE_BORDER_COLOR
            },
            attr: {}
        },

        hoveringSet: {

            css: {
                'background-color': TritonTheme.FLAT_BUTTON_DELETE_HOVER_BACKGROUND_COLOR,
                'color': TritonTheme.FLAT_BUTTON_DELETE_HOVER_TEXT_COLOR,
                'border-color': TritonTheme.FLAT_BUTTON_DELETE_HOVER_BORDER_COLOR
            },
            attr: {}
        },

        icon: {

            url: TritonTheme.FLAT_BUTTON_DELETE_SMALL_ICON_IMAGE_URL,
            css: {
                'float': 'left',
                'margin-right': '5px',
                'margin-top': '9px'
            }
        },

        css: {
            'cursor': 'pointer',
            'height': '24px',
            'line-height': '24px',
            'font-size': '12px',
            'display': 'inline-block',
            '*zoom': '1',
            '*display': 'inline',
            'text-align': 'center',
            'padding-left': '15px',
            'padding-right': '20px',
            'border-top-right-radius': '50px',
            'border-bottom-right-radius': '50px',
            'font-family': 'notokr-medium, NanumGothicBold',
            'background-color': TritonTheme.FLAT_BUTTON_DELETE_BACKGROUND_COLOR,
            'color': TritonTheme.FLAT_BUTTON_DELETE_TEXT_COLOR,
            'border': '1px solid ' + TritonTheme.FLAT_BUTTON_DELETE_BORDER_COLOR
        }
    },

    ListEditLeft: {

        defaultSet: {
            css: {
                'background-color': TritonTheme.FLAT_BUTTON_SHADE_BACKGROUND_COLOR,
                'color': TritonTheme.FLAT_BUTTON_SHADE_TEXT_COLOR,
                'border-color': TritonTheme.FLAT_BUTTON_SHADE_BORDER_COLOR
            },
            attr: {}
        },

        hoveringSet: {

            css: {
                'background-color': TritonTheme.FLAT_BUTTON_SHADE_HOVER_BACKGROUND_COLOR,
                'color': TritonTheme.FLAT_BUTTON_SHADE_HOVER_TEXT_COLOR,
                'border-color': TritonTheme.FLAT_BUTTON_SHADE_HOVER_BORDER_COLOR
            },
            attr: {}
        },

        icon: {

            url: TritonTheme.FLAT_BUTTON_EDIT_SMALL_ICON_IMAGE_URL,
            css: {
                'float': 'left',
                'margin-right': '5px',
                'margin-top': '8px'
            }
        },

        css: {
            'cursor': 'pointer',
            'height': '24px',
            'line-height': '24px',
            'font-size': '12px',
            'display': 'inline-block',
            '*zoom': '1',
            '*display': 'inline',
            'text-align': 'center',
            'padding-left': '20px',
            'padding-right': '15px',
            'border-top-left-radius': '50px',
            'border-bottom-left-radius': '50px',
            'font-family': 'notokr-medium, NanumGothicBold',
            'background-color': TritonTheme.FLAT_BUTTON_SHADE_BACKGROUND_COLOR,
            'color': TritonTheme.FLAT_BUTTON_SHADE_TEXT_COLOR,
            'border': '1px solid ' + TritonTheme.FLAT_BUTTON_SHADE_BORDER_COLOR
        }
    },

    ListEditRight: {

        defaultSet: {
            css: {
                'background-color': TritonTheme.FLAT_BUTTON_SHADE_BACKGROUND_COLOR,
                'color': TritonTheme.FLAT_BUTTON_SHADE_TEXT_COLOR,
                'border-color': TritonTheme.FLAT_BUTTON_SHADE_BORDER_COLOR
            },
            attr: {}
        },

        hoveringSet: {

            css: {
                'background-color': TritonTheme.FLAT_BUTTON_SHADE_HOVER_BACKGROUND_COLOR,
                'color': TritonTheme.FLAT_BUTTON_SHADE_HOVER_TEXT_COLOR,
                'border-color': TritonTheme.FLAT_BUTTON_SHADE_HOVER_BORDER_COLOR
            },
            attr: {}
        },

        icon: {

            url: TritonTheme.FLAT_BUTTON_EDIT_SMALL_ICON_IMAGE_URL,
            css: {
                'float': 'left',
                'margin-right': '5px',
                'margin-top': '8px'
            }
        },

        css: {
            'cursor': 'pointer',
            'height': '24px',
            'line-height': '24px',
            'font-size': '12px',
            'display': 'inline-block',
            '*zoom': '1',
            '*display': 'inline',
            'text-align': 'center',
            'padding-left': '15px',
            'padding-right': '20px',
            'border-top-right-radius': '50px',
            'border-bottom-right-radius': '50px',
            'font-family': 'notokr-medium, NanumGothicBold',
            'background-color': TritonTheme.FLAT_BUTTON_SHADE_BACKGROUND_COLOR,
            'color': TritonTheme.FLAT_BUTTON_SHADE_TEXT_COLOR,
            'border': '1px solid ' + TritonTheme.FLAT_BUTTON_SHADE_BORDER_COLOR
        }
    },

    ListInquiryLeft: {

        defaultSet: {
            css: {
                'background-color': TritonTheme.FLAT_BUTTON_SHADE_BACKGROUND_COLOR,
                'color': TritonTheme.FLAT_BUTTON_SHADE_TEXT_COLOR,
                'border-color': TritonTheme.FLAT_BUTTON_SHADE_BORDER_COLOR
            },
            attr: {}
        },

        hoveringSet: {

            css: {
                'background-color': TritonTheme.FLAT_BUTTON_SHADE_HOVER_BACKGROUND_COLOR,
                'color': TritonTheme.FLAT_BUTTON_SHADE_HOVER_TEXT_COLOR,
                'border-color': TritonTheme.FLAT_BUTTON_SHADE_HOVER_BORDER_COLOR
            },
            attr: {}
        },

        icon: {

            url: TritonTheme.FLAT_BUTTON_INQUIRY_SMALL_ICON_IMAGE_URL,
            css: {
                'float': 'left',
                'margin-right': '5px',
                'margin-top': '8px'
            }
        },

        css: {
            'cursor': 'pointer',
            'height': '24px',
            'line-height': '24px',
            'font-size': '12px',
            'display': 'inline-block',
            '*zoom': '1',
            '*display': 'inline',
            'text-align': 'center',
            'padding-left': '20px',
            'padding-right': '15px',
            'border-top-left-radius': '50px',
            'border-bottom-left-radius': '50px',
            'font-family': 'notokr-medium, NanumGothicBold',
            'background-color': TritonTheme.FLAT_BUTTON_SHADE_BACKGROUND_COLOR,
            'color': TritonTheme.FLAT_BUTTON_SHADE_TEXT_COLOR,
            'border': '1px solid ' + TritonTheme.FLAT_BUTTON_SHADE_BORDER_COLOR
        }
    },

    ListInquiryRight: {

        defaultSet: {
            css: {
                'background-color': TritonTheme.FLAT_BUTTON_SHADE_BACKGROUND_COLOR,
                'color': TritonTheme.FLAT_BUTTON_SHADE_TEXT_COLOR,
                'border-color': TritonTheme.FLAT_BUTTON_SHADE_BORDER_COLOR
            },
            attr: {}
        },

        hoveringSet: {

            css: {
                'background-color': TritonTheme.FLAT_BUTTON_SHADE_HOVER_BACKGROUND_COLOR,
                'color': TritonTheme.FLAT_BUTTON_SHADE_HOVER_TEXT_COLOR,
                'border-color': TritonTheme.FLAT_BUTTON_SHADE_HOVER_BORDER_COLOR
            },
            attr: {}
        },

        icon: {

            url: TritonTheme.FLAT_BUTTON_INQUIRY_SMALL_ICON_IMAGE_URL,
            css: {
                'float': 'left',
                'margin-right': '5px',
                'margin-top': '8px'
            }
        },

        css: {
            'cursor': 'pointer',
            'height': '24px',
            'line-height': '24px',
            'font-size': '12px',
            'display': 'inline-block',
            '*zoom': '1',
            '*display': 'inline',
            'text-align': 'center',
            'padding-left': '15px',
            'padding-right': '20px',
            'border-top-right-radius': '50px',
            'border-bottom-right-radius': '50px',
            'font-family': 'notokr-medium, NanumGothicBold',
            'background-color': TritonTheme.FLAT_BUTTON_SHADE_BACKGROUND_COLOR,
            'color': TritonTheme.FLAT_BUTTON_SHADE_TEXT_COLOR,
            'border': '1px solid ' + TritonTheme.FLAT_BUTTON_SHADE_BORDER_COLOR
        }
    },


    ListNormal: {

        defaultSet: {
            css: {
                'background-color': TritonTheme.FLAT_BUTTON_SHADE_BACKGROUND_COLOR,
                'color': TritonTheme.FLAT_BUTTON_SHADE_TEXT_COLOR,
                'border-color': TritonTheme.FLAT_BUTTON_SHADE_BORDER_COLOR
            },
            attr: {}
        },

        hoveringSet: {

            css: {
                'background-color': TritonTheme.FLAT_BUTTON_SHADE_HOVER_BACKGROUND_COLOR,
                'color': TritonTheme.FLAT_BUTTON_SHADE_HOVER_TEXT_COLOR,
                'border-color': TritonTheme.FLAT_BUTTON_SHADE_HOVER_BORDER_COLOR
            },
            attr: {}
        },

        icon: {

            css: {
                'float': 'left',
                'margin-right': '5px',
                'margin-top': '8px'
            }
        },

        css: {
            'cursor': 'pointer',
            'height': '24px',
            'line-height': '24px',
            'font-size': '12px',
            'display': 'inline-block',
            '*zoom': '1',
            '*display': 'inline',
            'text-align': 'center',
            'padding': '0px 15px',
            'border-radius': '50px',
            'font-family': 'notokr-medium, NanumGothicBold',
            'background-color': TritonTheme.FLAT_BUTTON_SHADE_BACKGROUND_COLOR,
            'color': TritonTheme.FLAT_BUTTON_SHADE_TEXT_COLOR,
            'border': '1px solid ' + TritonTheme.FLAT_BUTTON_SHADE_BORDER_COLOR
        }
    },

    DetailNormal: {

        defaultSet: {
            css: {
                'background-color': TritonTheme.FLAT_BUTTON_SHADE_BACKGROUND_COLOR,
                'color': TritonTheme.FLAT_BUTTON_SHADE_TEXT_COLOR,
                'border-color': TritonTheme.FLAT_BUTTON_SHADE_BORDER_COLOR
            },
            attr: {}
        },

        hoveringSet: {

            css: {
                'background-color': TritonTheme.FLAT_BUTTON_SHADE_HOVER_BACKGROUND_COLOR,
                'color': TritonTheme.FLAT_BUTTON_SHADE_HOVER_TEXT_COLOR,
                'border-color': TritonTheme.FLAT_BUTTON_SHADE_HOVER_BORDER_COLOR
            },
            attr: {}
        },

        icon: {

            css: {
                'float': 'left',
                'margin-right': '5px',
                'margin-top': '8px'
            }
        },

        css: {
            'cursor': 'pointer',
            'height': '30px',
            'line-height': '30px',
            'font-size': '12px',
            'display': 'inline-block',
            '*zoom': '1',
            '*display': 'inline',
            'text-align': 'center',
            'padding': '0px 20px',
            'border-radius': '50px',
            'font-family': 'notokr-medium, NanumGothicBold',
            'background-color': TritonTheme.FLAT_BUTTON_SHADE_BACKGROUND_COLOR,
            'color': TritonTheme.FLAT_BUTTON_SHADE_TEXT_COLOR,
            'border': '1px solid ' + TritonTheme.FLAT_BUTTON_SHADE_BORDER_COLOR
        },

        pcCss: {
            'display': 'inline-block'
        },
        tabletCss: {
            'display': 'inline-block'
        },
        mobileCss: {
            'display': 'block'
        }
    },


    ListNoFlat: {

        defaultSet: {
            css: {
                'background-color': TritonTheme.FLAT_BUTTON_SHADE_BACKGROUND_COLOR,
                'color': TritonTheme.FLAT_BUTTON_SHADE_TEXT_COLOR,
                'border-color': TritonTheme.FLAT_BUTTON_SHADE_BORDER_COLOR
            },
            attr: {}
        },

        hoveringSet: {

            css: {
                'background-color': TritonTheme.FLAT_BUTTON_SHADE_HOVER_BACKGROUND_COLOR,
                'color': TritonTheme.FLAT_BUTTON_SHADE_HOVER_TEXT_COLOR,
                'border-color': TritonTheme.FLAT_BUTTON_SHADE_HOVER_BORDER_COLOR
            },
            attr: {}
        },

        icon: {

            css: {
                'float': 'left',
                'margin-right': '5px',
                'margin-top': '8px'
            }
        },

        css: {
            'cursor': 'pointer',
            'height': '39px',
            'line-height': '39px',
            'font-size': '12px',
            'display': 'inline-block',
            '*zoom': '1',
            '*display': 'inline',
            'text-align': 'center',
            'padding': '0px 20px',
            'border-radius': '50px',
            'font-family': 'notokr-medium, NanumGothicBold',
            'background-color': TritonTheme.FLAT_BUTTON_SHADE_BACKGROUND_COLOR,
            'color': TritonTheme.FLAT_BUTTON_SHADE_TEXT_COLOR,
            'border': '1px solid ' + TritonTheme.FLAT_BUTTON_SHADE_BORDER_COLOR
        }
    }
};

Triton.FlatButton.create = function (options) {
    return new Triton.FlatButton(options).getJView();
};
Triton.FlatButton.append = function (j, options) {
    var jView = Triton.FlatButton.create(options);
    j.append(jView);
    return Triton.findTritonContent(jView);
};


/*
 * status
 * pressed
 * onChecked : function( status ) {}
 * manual
 * link
 */
Triton.CheckBox = function (options) {
    this.init(options);
};
Triton.CheckBox.prototype = new Triton();
Triton.CheckBox.prototype.init = function (options) {

    options = Triton.combineOptions(options, {
        theme: Triton.CheckBox.Theme.Normal
    });

    var j = Triton.createJQueryElement(Triton.CheckBox.HTML);
    j = Triton.applyOptions(j, options);

    var jCheckImg = this.jCheckImg = Triton.findTriton(j, 'triton_check_box_img');
    var theme = Lia.pd(Triton.CheckBox.Theme.Normal, options, 'theme');
    var status = Triton.CheckBox.Status.NORMAL;
    var pressed = Lia.p(options, 'pressed');
    if (pressed != undefined) {
        status = Triton.CheckBox.convertStatus(pressed);
    } else {
        status = Lia.pd(Triton.CheckBox.Status.NORMAL, options, 'status');
    }

    var jContent = Triton.findTritonContent(j);
    var content = Lia.p(options, 'content');
    if (String.isNullOrWhitespace(content)) {
        jContent.hide();
    }

    var imgCss = Lia.p(theme, 'img', 'css');
    if (imgCss != undefined) {
        jCheckImg.css(imgCss);
    }

    var contentCss = Lia.p(theme, 'content', 'css');
    if (contentCss != undefined) {
        jContent.css(contentCss);
    }

    this.onChecked = Lia.p(options, 'onChecked');
    this.theme = theme;
    this.status = status;

    this.link = Lia.pd(true, options, 'link');

    var manual = Lia.pd(false, options, 'manual');
    if (manual == false) {

        j.on('click', {
            checkBox: this
        }, function (e) {

            e.stopPropagation();

            var checkBox = e.data.checkBox;

            var status = Lia.pd(Triton.CheckBox.Status.NORMAL, checkBox.status);
            if (status == Triton.CheckBox.Status.NORMAL) {
                status = Triton.CheckBox.Status.PRESSED;
            } else if (status == Triton.CheckBox.Status.PRESSED) {
                status = Triton.CheckBox.Status.NORMAL;
            } else {
                // 비활성화 상태라서 리턴
                return;
            }

            checkBox.setValue(status);
        });
    }

    this.jView = j;
    this.jContent = j.find('.triton_content');
    this.initTriton(options);

    this.setStatus(status);
};

Triton.CheckBox.prototype.setStatus = function (status) {

    var theme = this.theme;
    this.status = status;

    var jCheckImg = this.jCheckImg;
    jCheckImg.attr('src', Triton.CheckBox.getThemeImageUrl(theme, status));

    var jCheckBox = this.get();
    if (this.link == false || status == Triton.CheckBox.Status.INACTIVE || status == Triton.CheckBox.Status.PRESSED_INACTIVE) {
        jCheckBox.css('cursor', 'default');
    } else {
        jCheckBox.css('cursor', 'pointer');
    }
};

Triton.CheckBox.prototype.getStatus = function () {
    return this.status;
};

Triton.CheckBox.prototype.setValue = function (status, unExecuteOnChecked) {

    var newStatus = this.status;

    if (status != newStatus) {

        this.setStatus(status);
        if (unExecuteOnChecked != undefined && unExecuteOnChecked == true) {
            return;
        }

        this.change();
    }
};

Triton.CheckBox.prototype.change = function () {
    var onChecked = this.onChecked;
    if (onChecked != undefined) {
        var status = this.status;
        onChecked.call(this.get(), status);
    }
};

Triton.CheckBox.prototype.getValue = function () {
    return this.getStatus();
};

Triton.CheckBox.prototype.getPressed = function () {
    return Triton.CheckBox.convertPressed(this.getStatus());
};

Triton.CheckBox.prototype.setPressed = function (pressed, unExecuteOnChecked) {
    this.setValue(Triton.CheckBox.convertStatus(pressed), unExecuteOnChecked);
};


Triton.CheckBox.prototype.apply = function (status, executeOnChecked) {
    this.setValue(status, !executeOnChecked);
};

Triton.CheckBox.prototype.applyPressed = function (pressed, executeOnChecked) {
    this.setPressed(pressed, !executeOnChecked);
};

Triton.CheckBox.getThemeImageUrl = function (theme, status) {

    if (status == Triton.CheckBox.Status.NORMAL) {
        return Lia.p(theme, 'normalImageUrl');
    }

    if (status == Triton.CheckBox.Status.INACTIVE) {
        return Lia.p(theme, 'inactiveImageUrl');
    }

    if (status == Triton.CheckBox.Status.PRESSED) {
        return Lia.p(theme, 'pressedImageUrl');
    }
};

Triton.CheckBox.convertStatus = function (pressed) {

    if (pressed == true)
        return Triton.CheckBox.Status.PRESSED;

    if (pressed == false)
        return Triton.CheckBox.Status.NORMAL;

    if (pressed == 0)
        return Triton.CheckBox.Status.NORMAL;

    if (pressed == 1)
        return Triton.CheckBox.Status.PRESSED;

    return Triton.CheckBox.Status.INACTIVE;
};

Triton.CheckBox.convertPressed = function (status) {

    if (status == Triton.CheckBox.Status.PRESSED)
        return true;
    else if (status == Triton.CheckBox.Status.NORMAL)
        return false;

    return undefined;
};


Triton.CheckBox.Theme = {

    Normal: {

        normalImageUrl: TritonTheme.CHECK_BOX_NORMAL_IMAGE_URL,
        pressedImageUrl: TritonTheme.CHECK_BOX_PRESSED_IMAGE_URL,
        inactiveImageUrl: TritonTheme.CHECK_BOX_INACTIVE_IMAGE_URL,
        pressedInactiveImageUrl: TritonTheme.CHECK_BOX_PRESSED_INACTIVE_IMAGE_URL,

        img: {
            css: {
                'float': 'left'
            }
        },

        content: {

            css: {
                'margin-left': '10px',
                'float': 'left',
                'line-height': '19px'
            }
        }
    },

    Toggle: {

        normalImageUrl: TritonTheme.CHECK_BOX_TOGGLE_IMAGE_URL,
        pressedImageUrl: TritonTheme.CHECK_BOX_TOGGLE_PRESSED_IMAGE_URL,

        img: {
            css: {
                'float': 'left'
            }
        },

        content: {

            css: {
                'margin-left': '10px',
                'float': 'left',
                'line-height': '25px',
                'font-weight': 'bold'
            }
        }

    }
};
Triton.CheckBox.Status = {
    NORMAL: 0,
    PRESSED: 1,
    INACTIVE: -1,
    PRESSED_INACTIVE: -2
};

Triton.CheckBox.NAME = 'triton_check_box';
Triton.CheckBox.HTML = '<div class="triton_check_box triton_value" style="vertical-align:middle;display:inline-block"><img class="triton_check_box_img" alt="triton check box img" /><span class="triton_content"></span></div>';

Triton.CheckBox.create = function (options) {
    return new Triton.CheckBox(options).getJView();
};
Triton.CheckBox.append = function (j, options) {
    var jView = Triton.CheckBox.create(options);
    j.append(jView);
    return Triton.findTritonContent(jView);
};

// deprecated
Triton.CheckBox.setStatus = function (jCheckBox, status) {
    jCheckBox.getTriton().setStatus(status);
};

Triton.CheckBox.apply = function (jCheckBox, status, executeOnChecked) {
    jCheckBox.getTriton().apply(status, executeOnChecked);
};

Triton.CheckBox.getStatus = function (jCheckBox) {
    return jCheckBox.getTriton().getStatus(jCheckBox);
};

Triton.CheckBox.getPressed = function (jCheckBox) {
    return jCheckBox.getTriton().getPressed();
};

Triton.CheckBox.applyPressed = function (jCheckBox, pressed, executeOnChecked) {
    jCheckBox.getTriton().applyPressed(pressed, executeOnChecked);
};


/*
 * status
 * pressed
 * onChecked : function( status ) {}
 */
Triton.RadioButton = function (options) {
    this.init(options);
};
Triton.RadioButton.prototype = new Triton();
Triton.RadioButton.prototype.init = function (options) {

    if (options == undefined) {
        options = {};
    }

    var option = this.option = Lia.p(options, 'option');

    var content = Lia.p(options, 'content');
    if (content == undefined) {
        options['content'] = content = Lia.p(option, 'name');
    }

    options = Triton.combineOptions(options, {
        theme: Triton.RadioButton.Theme.Normal
    });

    var j = Triton.createJQueryElement(Triton.RadioButton.HTML);
    j = Triton.applyOptions(j, options);

    var jRadioImg = this.jRadioImg = Triton.findTriton(j, 'triton_radio_button_img');
    var theme = Lia.pd(Triton.RadioButton.Theme.Normal, options, 'theme');
    var status = Triton.RadioButton.Status.NORMAL;
    var pressed = Lia.p(options, 'pressed');
    if (pressed != undefined) {
        status = Triton.RadioButton.convertStatus(pressed);
    } else {
        status = Lia.pd(Triton.RadioButton.Status.NORMAL, options, 'status');
    }

    var jContent = Triton.findTritonContent(j);
    if (String.isNullOrWhitespace(content)) {
        jContent.hide();
    }

    var imgCss = Lia.p(theme, 'img', 'css');
    if (imgCss != undefined) {
        jRadioImg.css(imgCss);
    }

    var contentCss = Lia.p(theme, 'content', 'css');
    if (contentCss != undefined) {
        jContent.css(contentCss);
    }

    this.onChecked = Lia.p(options, 'onChecked');
    this.theme = theme;
    this.status = status;

    this.link = Lia.pd(true, options, 'link');

    var manual = Lia.pd(false, options, 'manual');
    if (manual == false) {

        j.on('click', {
            radioButton: this
        }, function (e) {

            e.stopPropagation();

            var radioButton = e.data.radioButton;

            var status = radioButton.status;
            if (status == Triton.RadioButton.Status.NORMAL) {
                status = Triton.RadioButton.Status.PRESSED;
            } else if (status == Triton.RadioButton.Status.PRESSED) {
            } else {
                // 비활성화 상태라서 리턴
                return;
            }

            radioButton.setValue(status);
        });
    }

    this.jView = j;
    this.initTriton(options);

    this.setStatus(status);
};
Triton.RadioButton.prototype.getOption = function () {
    return this.option;
};
Triton.RadioButton.prototype.setStatus = function (status) {

    var theme = this.theme;
    this.status = status;

    var jRadioImg = this.jRadioImg;
    jRadioImg.attr('src', Triton.RadioButton.getThemeImageUrl(theme, status));

    var jCheckBox = this.get();
    if (this.link == false || status == Triton.RadioButton.Status.INACTIVE) {
        jCheckBox.css('cursor', 'default');
    } else {
        jCheckBox.css('cursor', 'pointer');
    }
};

Triton.RadioButton.prototype.getStatus = function () {
    return this.status;
};

Triton.RadioButton.prototype.setValue = function (status, unPropagateRadioButtonSection) {

    var newStatus = this.status;

    if (status != newStatus) {

        this.setStatus(status);

        if (unPropagateRadioButtonSection != undefined && unPropagateRadioButtonSection == true) {
            return;
        }

        var option = this.getOption();
        var value = Lia.p(option, 'value');

        var jRadioButtonSection = this.closest('.triton_radio_button_section');
        var triton = jRadioButtonSection.getTriton();
        if (triton != undefined) {
            triton.setValue(value);
        }
    }
};

Triton.RadioButton.prototype.getValue = function () {
    return this.getStatus();
};

Triton.RadioButton.prototype.getPressed = function () {
    return Triton.CheckBox.convertPressed(this.getStatus());
};

Triton.RadioButton.prototype.setPressed = function (pressed, unExecuteOnChecked) {
    this.setValue(Triton.RadioButton.convertStatus(pressed), unExecuteOnChecked);
};


Triton.RadioButton.prototype.apply = function (status, executeOnChecked) {
    this.setValue(status, !executeOnChecked);
};

Triton.RadioButton.prototype.applyPressed = function (pressed, executeOnChecked) {
    this.setPressed(pressed, !executeOnChecked);
};

Triton.RadioButton.getThemeImageUrl = function (theme, status) {

    if (status == Triton.RadioButton.Status.NORMAL) {
        return Lia.p(theme, 'normalImageUrl');
    }

    if (status == Triton.RadioButton.Status.INACTIVE) {
        return Lia.p(theme, 'inactiveImageUrl');
    }

    if (status == Triton.RadioButton.Status.PRESSED) {
        return Lia.p(theme, 'pressedImageUrl');
    }
};

Triton.RadioButton.convertStatus = function (pressed) {

    if (pressed == true)
        return Triton.RadioButton.Status.PRESSED;

    if (pressed == false)
        return Triton.RadioButton.Status.NORMAL;

    if (pressed == 0)
        return Triton.RadioButton.Status.NORMAL;

    if (pressed == 1)
        return Triton.RadioButton.Status.PRESSED;

    return Triton.RadioButton.Status.INACTIVE;
};

Triton.RadioButton.convertPressed = function (status) {

    if (status == Triton.RadioButton.Status.PRESSED)
        return true;
    else if (status == Triton.RadioButton.Status.NORMAL)
        return false;

    return undefined;
};


Triton.RadioButton.Theme = {

    Line: {

        normalImageUrl: TritonTheme.RADIO_BUTTON_NORMAL_IMAGE_URL,
        pressedImageUrl: TritonTheme.RADIO_BUTTON_PRESSED_IMAGE_URL,
        inactiveImageUrl: TritonTheme.RADIO_BUTTON_INACTIVE_IMAGE_URL,

        img: {
            css: {
                'margin-top': '6px',
                'float': 'left'
            }
        },

        content: {

            css: {
                'margin-left': '10px',
                'float': 'left',
                'line-height': '29px'
            }
        },

        css: {
            'display': 'block',
            'overflow': 'auto',
            'line-height': '30px'
        }
    },

    Normal: {

        normalImageUrl: TritonTheme.RADIO_BUTTON_NORMAL_IMAGE_URL,
        pressedImageUrl: TritonTheme.RADIO_BUTTON_PRESSED_IMAGE_URL,
        inactiveImageUrl: TritonTheme.RADIO_BUTTON_INACTIVE_IMAGE_URL,

        img: {
            css: {
                'float': 'left'
            }
        },

        content: {

            css: {
                'margin-left': '10px',
                'float': 'left'
            }
        }
    },


    NoFirst: {

        normalImageUrl: TritonTheme.RADIO_BUTTON_NORMAL_IMAGE_URL,
        pressedImageUrl: TritonTheme.RADIO_BUTTON_PRESSED_IMAGE_URL,
        inactiveImageUrl: TritonTheme.RADIO_BUTTON_INACTIVE_IMAGE_URL,

        img: {
            css: {
                'float': 'left'
            }
        },

        content: {

            css: {
                'margin-left': '10px',
                'float': 'left',
                'line-height': '19px'
            }
        },

        css: {

            'margin-left': '20px'
        }
    }
};
Triton.RadioButton.Status = {
    NORMAL: 0,
    PRESSED: 1,
    INACTIVE: -1
};

Triton.RadioButton.NAME = 'triton_radio_button';
Triton.RadioButton.HTML = '<div class="triton_radio_button triton_value" style="vertical-align:middle;display:inline-block"><img class="triton_radio_button_img" alt="triton radio button img"/><span class="triton_content"></span></div>';

Triton.RadioButton.create = function (options) {
    return new Triton.RadioButton(options).getJView();
};
Triton.RadioButton.append = function (j, options) {
    var jView = Triton.RadioButton.create(options);
    j.append(jView);
    return Triton.findTritonContent(jView);
};


/*
 onSelected ( val, selectedOption, options) )
 selectedValue
 optionMap = { key : value, key : value, ... }
 optionList = [ { name : 'name',  value : 'value', selected : true }, { name : 'name',  value : 'value', selected : false, disabled : true }, ... ]
 */
Triton.RadioButtonSection = function (options) {
    this.init(options);
};
Triton.RadioButtonSection.prototype = new Triton();
Triton.RadioButtonSection.prototype.init = function (options) {

    this.count = 0;

    this.jView = Triton.createJQueryElement(Triton.RadioButtonSection.HTML);
    Triton.applyOptions(this.jView, options);
    this.jContent = Triton.findTritonContent(this.jView);

    var radioButtonTheme = options['radioButtonTheme'];
    var manual = Lia.pd(false, options['manual']);
    var link = Lia.pd(true, options['link']);

    var onSelected = this.onSelected = Lia.p(options, 'onSelected');

    var selectedValue = options['selectedValue'];

    var optionList = options['optionList'];
    if (optionList != undefined) {

        for (var i = 0, l = optionList.length; i < l; i++) {
            var option = optionList[i];

            var name = option['name'];
            var value = option['value'];

            var status = Triton.RadioButton.Status.NORMAL;

            if ((selectedValue != undefined && selectedValue == value) || option['selected'] == true) {
                status = Triton.RadioButton.Status.PRESSED;
            } else if (option['disabled'] == true) {
                status = Triton.RadioButton.Status.INACTIVE;
            }

            this.appendRadioButton({
                theme: radioButtonTheme,
                status: status,
                option: option,
                manual: manual,
                link: link
            });
        }
    }

    var optionMap = options['optionMap'];
    if (optionMap != null) {
        for (var key in optionMap) {

            var name = optionMap[key];

            var status = Triton.RadioButton.Status.NORMAL;
            if (selectedValue != undefined && selectedValue == key) {
                status = Triton.RadioButton.Status.PRESSED;
            }

            this.appendRadioButton({
                theme: radioButtonTheme,
                status: status,
                manual: manual,
                link: link,
                option: {name: name, value: key}
            });
        }
    }


    this.initTriton(options);
};

Triton.RadioButtonSection.prototype.appendRadioButton = function (options) {

    options = Triton.combineOptions(options, {
        theme: (this.count == 0) ? Triton.RadioButton.Theme.Normal : Triton.RadioButton.Theme.NoFirst
    });

    this.append(new Triton.RadioButton(options));
    ++this.count;
};


Triton.RadioButtonSection.prototype.setValue = function (value, unExecuteOnSelectedListener) {

    var jRadioButtonList = this.find('.triton_radio_button');
    for (var i = 0, l = jRadioButtonList.length; i < l; i++) {

        var jRadioButton = jRadioButtonList.eq(i);
        var triton = jRadioButton.getTriton();
        var option = triton.getOption();
        if (Lia.p(option, 'value') == value) {
            triton.setValue(Triton.RadioButton.Status.PRESSED, true);
        } else {
            triton.setValue(Triton.RadioButton.Status.NORMAL, true);
        }
    }

    this.change(unExecuteOnSelectedListener);

    return this;
};

Triton.RadioButtonSection.prototype.change = function (unExecuteOnSelectedListener) {

    if (unExecuteOnSelectedListener == true) {
        return this;
    }

    if (this.onSelected != undefined) {

        var option = this.getSelectedOption();
        var options = this.getOptions();

        this.onSelected.call(this.getJView(), Lia.p(option, 'value'), option, options);
    }

    return this;
};

Triton.RadioButtonSection.prototype.getSelectedOption = function () {

    var jRadioButtonList = this.find('.triton_radio_button');
    for (var i = 0, l = jRadioButtonList.length; i < l; i++) {

        var jRadioButton = jRadioButtonList.eq(i);
        var triton = jRadioButton.getTriton();
        var option = triton.getOption();
        if (triton.getValue() == Triton.RadioButton.Status.PRESSED) {
            return option;
        }
    }

    return undefined;
};

Triton.RadioButtonSection.prototype.getValue = function () {
    return Lia.p(this.getSelectedOption(), 'value');
};


Triton.RadioButtonSection.NAME = 'triton_radio_button_section';
Triton.RadioButtonSection.HTML = '<div class="triton_radio_button_section triton_content"></div>';
Triton.RadioButtonSection.Theme = {
    Normal: {
        css: {
            'overflow': 'auto'
        }
    }
};
Triton.RadioButtonSection.create = function (options) {
    return new Triton.Section(options).getJView();
};
Triton.RadioButtonSection.append = function (j, options) {
    var jView = Triton.RadioButtonSection.create(options);
    j.append(jView);
    return Triton.findTritonContent(jView);
};


/*
 * status
 * pressed
 * onChecked : function( status ) {}
 */
Triton.FlagRadioButton = function (options) {
    this.init(options);
};
Triton.FlagRadioButton.prototype = new Triton();
Triton.FlagRadioButton.prototype.init = function (options) {

    if (options == undefined) {
        options = {};
    }

    var option = this.option = Lia.p(options, 'option');

    var content = Lia.p(options, 'content');
    if (content == undefined) {
        options['content'] = content = Lia.p(option, 'name');
    }

    options = Triton.combineOptions(options, {
        theme: Triton.FlagRadioButton.Theme.Normal
    });

    var j = Triton.createJQueryElement(Triton.FlagRadioButton.HTML);
    j = Triton.applyOptions(j, options);

    var theme = Lia.pd(Triton.FlagRadioButton.Theme.Normal, options, 'theme');

    var status = Triton.FlagRadioButton.Status.NORMAL;
    var pressed = Lia.p(options, 'pressed');
    if (pressed != undefined) {
        status = Triton.FlagRadioButton.convertStatus(pressed);
    } else {
        status = Lia.pd(Triton.FlagRadioButton.Status.NORMAL, options, 'status');
    }

    var jContent = this.jContent = Triton.findTritonContent(j);

    var jFlag = this.jFlag = Triton.findTriton(j, 'triton_flag_radio_button_flag');
    var jImage = Triton.findTriton(j, 'triton_flag_radio_button_image');
    var jMore = this.jMore = Triton.findTriton(j, 'triton_flag_radio_button_more');

    var themeFlagCss = Lia.p(theme, 'flag', 'css');
    if (themeFlagCss != undefined) {
        jFlag.css(themeFlagCss);
    }

    var themeTextCss = Lia.p(theme, 'text', 'css');
    if (themeTextCss != undefined) {
        jContent.css(themeTextCss);
    }

    var themeImageCss = Lia.p(theme, 'image', 'css');
    if (themeImageCss != undefined) {
        jImage.css(themeImageCss);
    }

    var themeImageAttr = Lia.p(theme, 'image', 'attr');
    if (themeImageAttr != undefined) {
        jImage.attr(themeImageAttr);
    }

    var optionsFlagCss = Lia.p(options, 'flagOptions', 'css');
    if (optionsFlagCss != undefined) {
        jFlag.show();
        jFlag.css(optionsFlagCss);
    } else {
        jFlag.hide();
    }

    if (String.isNullOrWhitespace(content)) {
        jContent.hide();
    }

    var themeMoreCss = Lia.p(theme, 'more', 'css');
    if (themeMoreCss != undefined) {
        jMore.css(themeMoreCss);
    }

    var themeMoreAttr = Lia.p(theme, 'more', 'attr');
    if (themeMoreAttr != undefined) {
        jMore.attr(themeMoreAttr);
    }

    var onClickMoreButton = this.onClickMoreButton = Lia.p(options, 'onClickMoreButton');
    if (onClickMoreButton != undefined) {

        jMore.on('click', {

            options: options,
            onClickMoreButton: onClickMoreButton

        }, function (e) {

            e.stopPropagation();

            var options = e.data.options;
            var onClickMoreButton = e.data.onClickMoreButton;

            onClickMoreButton.call(this, options);
        });
        jMore.show();

    } else {
        jMore.hide();
    }


    this.executeBySameValue = Lia.p(options, 'executeBySameValue');
    this.onChecked = Lia.p(options, 'onChecked');
    this.theme = theme;
    this.status = status;

    this.link = Lia.pd(true, options, 'link');
    if (this.link == true) {
        j.css({
            'cursor': 'pointer'
        })
    }

    this.selectable = Lia.pd(true, options, 'selectable');
    if (this.selectable == true) {
        j.addClass('triton_flag_radio_button_selectable');
    }

    var manual = Lia.pd(false, options, 'manual');
    if (manual == false) {

        j.on('click', {
            flagRadioButton: this
        }, function (e) {

            e.stopPropagation();

            var flagRadioButton = e.data.flagRadioButton;
            if (flagRadioButton.selectable != true) {
                return;
            }

            var status = flagRadioButton.status;
            if (status == Triton.FlagRadioButton.Status.NORMAL) {
                status = Triton.FlagRadioButton.Status.PRESSED;
            } else if (status == Triton.FlagRadioButton.Status.PRESSED) {
            } else {
                // 비활성화 상태라서 리턴
                return;
            }

            flagRadioButton.setValue(status);
        });
    }

    this.jView = j;
    this.initTriton(options);

    if (this.selectable == true) {
        this.setStatus(status);
    }

};
Triton.FlagRadioButton.prototype.getOption = function () {
    return this.option;
};
Triton.FlagRadioButton.prototype.setStatus = function (status) {

    var theme = this.theme;
    this.status = status;

    var jCheckBox = this.get();
    var jMore = this.jMore;

    var selectedCss = Lia.p(theme, 'selected', 'css');
    var disabledCss = Lia.p(theme, 'disabled', 'css');
    var css = Lia.p(theme, 'css');

    if (status == Triton.FlagRadioButton.Status.NORMAL) {

        jCheckBox.css(css);

    } else if (status == Triton.FlagRadioButton.Status.PRESSED) {

        jCheckBox.css(selectedCss);

    } else if (status == Triton.FlagRadioButton.Status.INACTIVE) {

        jCheckBox.css(disabledCss);
    }

    if (this.onClickMoreButton != undefined) {

        var themeMoreAttr = Lia.p(theme, 'more', 'attr');
        var themeMoreSelectedAttr = Lia.p(theme, 'more', 'selected', 'attr');
        var themeMoreDisabledAttr = Lia.p(theme, 'more', 'disabled', 'attr');

        if (status == Triton.FlagRadioButton.Status.NORMAL) {
            jMore.attr(themeMoreAttr);
        } else if (status == Triton.FlagRadioButton.Status.PRESSED) {
            jMore.attr(themeMoreSelectedAttr);

        } else if (status == Triton.FlagRadioButton.Status.INACTIVE) {
            jMore.attr(themeMoreDisabledAttr);
        }
    }


    if (this.link == false || status == Triton.FlagRadioButton.Status.INACTIVE) {
        jCheckBox.css('cursor', 'default');
    } else {
        jCheckBox.css('cursor', 'pointer');
    }
};


Triton.FlagRadioButton.prototype.setOptions = function (options) {

    if (options == undefined) {
        options = {};
    }

    var option = this.option = Lia.p(options, 'option');

    var content = Lia.p(options, 'content');
    if (content == undefined) {
        options['content'] = content = Lia.p(option, 'name');
    }

    options = Triton.combineOptions(options, {
        theme: Triton.FlagRadioButton.Theme.Normal
    });

    var j = this.jView;
    j = Triton.applyOptions(j, options);

    var theme = Lia.pd(Triton.FlagRadioButton.Theme.Normal, options, 'theme');

    var status = Triton.FlagRadioButton.Status.NORMAL;
    var pressed = Lia.p(options, 'pressed');
    if (pressed != undefined) {
        status = Triton.FlagRadioButton.convertStatus(pressed);
    } else {
        status = Lia.pd(Triton.FlagRadioButton.Status.NORMAL, options, 'status');
    }

    var jContent = Triton.findTritonContent(j);

    var jFlag = this.jFlag = Triton.findTriton(j, 'triton_flag_radio_button_flag');
    var jImage = Triton.findTriton(j, 'triton_flag_radio_button_image');
    var jMore = this.jMore = Triton.findTriton(j, 'triton_flag_radio_button_more');

    var themeFlagCss = Lia.p(theme, 'flag', 'css');
    if (themeFlagCss != undefined) {
        jFlag.css(themeFlagCss);
    }

    var themeTextCss = Lia.p(theme, 'text', 'css');
    if (themeTextCss != undefined) {
        jContent.css(themeTextCss);
    }

    var themeImageCss = Lia.p(theme, 'image', 'css');
    if (themeImageCss != undefined) {
        jImage.css(themeImageCss);
    }

    var themeImageAttr = Lia.p(theme, 'image', 'attr');
    if (themeImageAttr != undefined) {
        jImage.attr(themeImageAttr);
    }

    var optionsFlagCss = Lia.p(options, 'flagOptions', 'css');
    if (optionsFlagCss != undefined) {
        jFlag.show();
        jFlag.css(optionsFlagCss);
    } else {
        jFlag.hide();
    }

    if (String.isNullOrWhitespace(content)) {
        jContent.hide();
    }

    var themeMoreCss = Lia.p(theme, 'more', 'css');
    if (themeMoreCss != undefined) {
        jMore.css(themeMoreCss);
    }

    var themeMoreAttr = Lia.p(theme, 'more', 'attr');
    if (themeMoreAttr != undefined) {
        jMore.attr(themeMoreAttr);
    }

    var onClickMoreButton = this.onClickMoreButton = Lia.p(options, 'onClickMoreButton');
    if (onClickMoreButton != undefined) {

        jMore.on('click', {

            options: options,
            onClickMoreButton: onClickMoreButton

        }, function (e) {

            e.stopPropagation();

            var options = e.data.options;
            var onClickMoreButton = e.data.onClickMoreButton;

            onClickMoreButton.call(this, options);
        });
        jMore.show();

    } else {
        jMore.hide();
    }


    this.onChecked = Lia.p(options, 'onChecked');
    this.theme = theme;
    this.status = status;

    this.link = Lia.pd(true, options, 'link');
    if (this.link == true) {
        j.css({
            'cursor': 'pointer'
        })
    }

    this.selectable = Lia.pd(true, options, 'selectable');
    if (this.selectable == true) {
        j.addClass('triton_flag_radio_button_selectable');
    }

    var manual = Lia.pd(false, options, 'manual');
    if (manual == false) {

        j.on('click', {
            flagRadioButton: this
        }, function (e) {

            e.stopPropagation();

            var flagRadioButton = e.data.flagRadioButton;
            if (flagRadioButton.selectable != true) {
                return;
            }

            var status = flagRadioButton.status;
            if (status == Triton.FlagRadioButton.Status.NORMAL) {
                status = Triton.FlagRadioButton.Status.PRESSED;
            } else if (status == Triton.FlagRadioButton.Status.PRESSED) {
            } else {
                // 비활성화 상태라서 리턴
                return;
            }

            flagRadioButton.setValue(status);
        });
    }

    this.jView = j;
    this.initTriton(options);

    if (this.selectable == true) {
        this.setStatus(status);
    }

};


Triton.FlagRadioButton.prototype.setFlagCss = function (css) {
    var jFlag = this.jFlag;
    if (css != undefined) {
        jFlag.show();
        jFlag.css(css);
    } else {
        jFlag.hide();
    }
};

Triton.FlagRadioButton.prototype.getStatus = function () {
    return this.status;
};

Triton.FlagRadioButton.prototype.setValue = function (status, unPropagateFlagRadioButtonSection) {

    var newStatus = this.status;
    var executeBySameValue = this.executeBySameValue;

    if (executeBySameValue == true || status != newStatus) {

        this.setStatus(status);

        if (unPropagateFlagRadioButtonSection != undefined && unPropagateFlagRadioButtonSection == true) {
            return;
        }

        var option = this.getOption();
        var value = Lia.p(option, 'value');

        var jFlagRadioButtonSection = this.closest('.triton_flag_radio_button_section');
        var triton = jFlagRadioButtonSection.getTriton();
        if (triton != undefined) {
            triton.setValue(value);
        }
    }
};

Triton.FlagRadioButton.prototype.getValue = function () {
    return this.getStatus();
};

Triton.FlagRadioButton.prototype.getPressed = function () {
    return Triton.CheckBox.convertPressed(this.getStatus());
};

Triton.FlagRadioButton.prototype.setPressed = function (pressed, unExecuteOnChecked) {
    this.setValue(Triton.FlagRadioButton.convertStatus(pressed), unExecuteOnChecked);
};


Triton.FlagRadioButton.prototype.apply = function (status, executeOnChecked) {
    this.setValue(status, !executeOnChecked);
};

Triton.FlagRadioButton.prototype.applyPressed = function (pressed, executeOnChecked) {
    this.setPressed(pressed, !executeOnChecked);
};

Triton.FlagRadioButton.prototype.applyResponsive = function (responsiveType, BeforeResponsiveType) {

    if (Triton.Responsive.inited == false) {
        return this;
    }

    // 필요시 구현
};

Triton.FlagRadioButton.convertStatus = function (pressed) {

    if (pressed == true)
        return Triton.FlagRadioButton.Status.PRESSED;

    if (pressed == false)
        return Triton.FlagRadioButton.Status.NORMAL;

    if (pressed == 0)
        return Triton.FlagRadioButton.Status.NORMAL;

    if (pressed == 1)
        return Triton.FlagRadioButton.Status.PRESSED;

    return Triton.FlagRadioButton.Status.INACTIVE;
};

Triton.FlagRadioButton.convertPressed = function (status) {

    if (status == Triton.FlagRadioButton.Status.PRESSED)
        return true;
    else if (status == Triton.FlagRadioButton.Status.NORMAL)
        return false;

    return undefined;
};


Triton.FlagRadioButton.Theme = {
    Normal: {

        css: {
            'border-radius': '5px',
            'background-color': 'transparent',
            'border': '1px solid #e1e1e1',
            'height': '28px',
            'padding-left': '10px',
            'padding-right': '10px',

            'color': '#5d5d5d',
            'line-height': '28px',
            'font-family': 'notokr-medium, NanumGothicBold'

        },

        selected: {
            css: {
                'color': '#1c4999',
                'background-color': '#ffffff',
                'border': '1px solid #1c4999'
            }
        },

        disabled: {
            css: {
                'color': '#5d5d5d',
                'background-color': '#e1e1e1',
                'border': '1px solid #e1e1e1'
            }
        },

        flag: {
            css: {
                'width': '12px',
                'height': '12px',
                'margin-top': '8px',
                'margin-right': '8px'
            }
        },

        text: {
            css: {}
        },

        image: {}
    },

    Category: {

        css: {
            'border-radius': '5px',
            'height': '30px',
            'padding-left': '12px',
            'padding-right': '12px',
            'line-height': '30px',
            'font-family': 'notokr-medium, NanumGothicBold',

            'background-color': '#ffffff',
            'border': '1px solid #d0d0d0',
            'color': '#5d5d5d'
        },

        selected: {
            css: {
                'background-color': '#1c4999',
                'border': '1px solid #1c4999',
                'color': '#ffffff'
            }
        },

        disabled: {
            css: {

                'background-color': '#e1e1e1',
                'border': '1px solid #e1e1e1',
                'color': '#5d5d5d'
            }
        },

        flag: {
            css: {
                'width': '12px',
                'height': '12px',
                'margin-top': '8px',
                'margin-right': '8px'
            }
        },

        text: {
            css: {}
        },

        image: {},


        more: {

            css: {

                'padding-left': '15px',
                'padding-right': '8px',
                'padding-top': '8px',
                'padding-bottom': '9px',
                'cursor': 'pointer'

            },

            attr: {
                src: Triton.ReplaceMap.BASE_PATH + '/img/btn_category_more_gray.png'
            },

            selected: {
                attr: {
                    src: Triton.ReplaceMap.BASE_PATH + '/img/btn_category_more_white.png'
                }
            },

            disabled: {
                attr: {
                    src: Triton.ReplaceMap.BASE_PATH + '/img/btn_category_more_white.png'
                }
            }

        }
    },

    CategoryNext: {

        css: {
            'height': '30px'
        },

        selected: {
            css: {}
        },

        disabled: {
            css: {}
        },

        flag: {
            css: {}
        },

        text: {
            css: {}
        },

        image: {
            css: {
                'margin-top': '8px',
                display: 'block'
            },
            attr: {
                src: Triton.ReplaceMap.BASE_PATH + '/img/img_next_arrow.png'
            }
        }
    }

};
Triton.FlagRadioButton.Status = {
    NORMAL: 0,
    PRESSED: 1,
    INACTIVE: -1
};

Triton.FlagRadioButton.NAME = 'triton_flag_radio_button';
Triton.FlagRadioButton.HTML = '<div class="triton_flag_radio_button triton_value" style="display:inline-block;overflow:auto;">' +
    '<img class="triton_flag_radio_button_image" style="float:left;display:none;" alt="triton flag radio button image"/>' +
    '<div class="triton_flag_radio_button_flag" style="float:left;display:none;"></div>' +
    '<div class="triton_flag_radio_button_text triton_content" style="float:left;"></div>' +
    '<img class="triton_flag_radio_button_more" style="float:left;display:none;"  alt="triton flag radio button image"/>' +
    '</div>';

Triton.FlagRadioButton.create = function (options) {
    return new Triton.FlagRadioButton(options).getJView();
};
Triton.FlagRadioButton.append = function (j, options) {
    var jView = Triton.FlagRadioButton.create(options);
    j.append(jView);
    return Triton.findTritonContent(jView);
};


/*
 onSelected ( val, selectedOption, options) )
 selectedValue
 optionMap = { key : value, key : value, ... }
 optionList = [ { name : 'name',  value : 'value', selected : true }, { name : 'name',  value : 'value', selected : false, disabled : true }, ... ]
 */
Triton.FlagRadioButtonSection = function (options) {
    this.init(options);
};
Triton.FlagRadioButtonSection.prototype = new Triton();
Triton.FlagRadioButtonSection.prototype.init = function (options) {

    this.count = 0;

    options = Triton.combineOptions(options, {
        theme: Triton.FlagRadioButtonSection.Theme.Normal
    });

    this.jView = Triton.createJQueryElement(Triton.FlagRadioButtonSection.HTML);
    Triton.applyOptions(this.jView, options);
    this.jContent = Triton.findTritonContent(this.jView);

    var flagRadioButtonTheme = options['flagRadioButtonTheme'];
    var manual = Lia.pd(false, options['manual']);
    var link = Lia.pd(true, options['link']);

    var onSelected = this.onSelected = Lia.p(options, 'onSelected');
    var executeBySameValue = this.executeBySameValue = Lia.p(options, 'executeBySameValue');

    var titleThemeCss = Lia.p(options, 'theme', 'title', 'css');
    var listThemeCss = Lia.p(options, 'theme', 'list', 'css');

    var jTitle = this.jView.find('.triton_flag_radio_button_section_title');
    if (titleThemeCss != undefined) {
        jTitle.css(titleThemeCss);
    }

    if (listThemeCss != undefined) {
        this.jView.find('.triton_flag_radio_button_section_list').css(listThemeCss);
    }

    var title = Lia.p(options, 'title');
    if (String.isNotBlank(title)) {
        jTitle.html(title);
        jTitle.show();
    } else {
        jTitle.hide();
    }

    var selectedValue = options['selectedValue'];

    var optionList = options['optionList'];
    if (optionList != undefined) {

        for (var i = 0, l = optionList.length; i < l; i++) {
            var option = optionList[i];

            var name = option['name'];
            var value = option['value'];
            var flagOptions = option['flagOptions'];
            var onClickMoreButton = option['onClickMoreButton'];

            var status = Triton.FlagRadioButton.Status.NORMAL;

            if ((selectedValue != undefined && selectedValue == value) || option['selected'] == true) {
                status = Triton.FlagRadioButton.Status.PRESSED;
            } else if (option['disabled'] == true) {
                status = Triton.FlagRadioButton.Status.INACTIVE;
            }

            this.appendFlagRadioButton({
                theme: flagRadioButtonTheme,
                status: status,
                option: option,
                manual: manual,
                link: link,
                flagOptions: flagOptions,
                onClickMoreButton: onClickMoreButton,
                executeBySameValue: executeBySameValue
            });
        }
    }

    var optionMap = options['optionMap'];
    if (optionMap != null) {
        for (var key in optionMap) {

            var name = optionMap[key];

            var status = Triton.FlagRadioButton.Status.NORMAL;
            if (selectedValue != undefined && selectedValue == key) {
                status = Triton.FlagRadioButton.Status.PRESSED;
            }

            this.appendFlagRadioButton({
                theme: flagRadioButtonTheme,
                status: status,
                manual: manual,
                link: link,
                option: {name: name, value: key},
                executeBySameValue: executeBySameValue
            });
        }
    }


    this.initTriton(options);
};

Triton.FlagRadioButtonSection.prototype.appendFlagRadioButton = function (options) {

    options = Triton.combineOptions(options, {
        theme: Triton.FlagRadioButton.Theme.Normal
    });

    var button = new Triton.FlagRadioButton(options);
    this.append(button);

    this.count = this.find('.triton_content').children().length;
    if (this.count > 1) {
        button.css({
            'margin-left': '10px'
        });
    }

    return button;
};


Triton.FlagRadioButtonSection.prototype.setValue = function (value, unExecuteOnSelectedListener) {

    var jFlagRadioButtonList = this.find('.triton_flag_radio_button.triton_flag_radio_button_selectable');
    for (var i = 0, l = jFlagRadioButtonList.length; i < l; i++) {

        var jFlagRadioButton = jFlagRadioButtonList.eq(i);
        var triton = jFlagRadioButton.getTriton();
        var option = triton.getOption();
        if (Lia.p(option, 'value') == value) {
            triton.setValue(Triton.FlagRadioButton.Status.PRESSED, true);
        } else {
            triton.setValue(Triton.FlagRadioButton.Status.NORMAL, true);
        }
    }

    this.change(unExecuteOnSelectedListener);

    return this;
};

Triton.FlagRadioButtonSection.prototype.change = function (unExecuteOnSelectedListener) {

    if (unExecuteOnSelectedListener == true) {
        return this;
    }

    if (this.onSelected != undefined) {

        var option = this.getSelectedOption();
        var options = this.getOptions();

        this.onSelected.call(this.getJView(), Lia.p(option, 'value'), option, options);
    }

    return this;
};

Triton.FlagRadioButtonSection.prototype.getSelectedOption = function () {

    var jFlagRadioButtonList = this.find('.triton_flag_radio_button');
    for (var i = 0, l = jFlagRadioButtonList.length; i < l; i++) {

        var jFlagRadioButton = jFlagRadioButtonList.eq(i);
        var triton = jFlagRadioButton.getTriton();
        var option = triton.getOption();
        if (triton.getValue() == Triton.FlagRadioButton.Status.PRESSED) {
            return option;
        }
    }

    return undefined;
};

Triton.FlagRadioButtonSection.prototype.getValue = function () {
    return Lia.p(this.getSelectedOption(), 'value');
};

Triton.FlagRadioButtonSection.prototype.applyResponsive = function (responsiveType, BeforeResponsiveType) {

    if (Triton.Responsive.inited == false) {
        return this;
    }

    // 필요시 구현
};


Triton.FlagRadioButtonSection.NAME = 'triton_flag_radio_button_section';
Triton.FlagRadioButtonSection.HTML = '<div class="triton_flag_radio_button_section">' +
    '<div class="triton_flag_radio_button_section_title" style="display:none;"></div>' +
    '<div class="triton_flag_radio_button_section_list triton_content"></div>' +
    '</div>';
Triton.FlagRadioButtonSection.Theme = {
    Normal: {

        title: {
            css: {
                'font-family': 'notokr-medium, NanumGothicBold',
                'float': 'left',
                'font-size': '14px',
                'color': '#5d5d5d',
                'line-height': '28px',
                'margin-right': '15px'
            }
        },

        list: {
            css: {
                'overflow': 'auto'
            }
        },

        css: {
            'overflow': 'auto'
        }
    },

    Category: {

        title: {
            css: {
                'font-family': 'notokr-medium, NanumGothicBold',
                'float': 'left',
                'font-size': '14px',
                'color': '#5d5d5d',
                'line-height': '28px',
                'margin-right': '15px'
            }
        },

        list: {
            css: {
                'overflow': 'auto'
            }
        },

        css: {
            'overflow': 'auto'
        }
    }
};
Triton.FlagRadioButtonSection.create = function (options) {
    return new Triton.Section(options).getJView();
};
Triton.FlagRadioButtonSection.append = function (j, options) {
    var jView = Triton.FlagRadioButtonSection.create(options);
    j.append(jView);
    return Triton.findTritonContent(jView);
};









Triton.TextEditor = function (options) {
    this.init(options);
};
Triton.TextEditor.prototype = new Triton();
Triton.TextEditor.prototype.init = function (options) {

    options = Triton.combineOptions(options, {
        theme: Triton.TextEditor.Theme.Normal
    });

    this.jView = Triton.createJQueryElement(Triton.TextEditor.HTML);
    Triton.applyOptions(this.jView, options);

    var theme = options['theme'];

    this.value = Lia.p(options, 'value');
    this.textEditorOptions = Triton.combineOptions(options['textEditorOptions'], theme['textEditorOptions']);
    this.jValue = Triton.findTritonValue(this.jView);

    this.initTriton(options);
};
Triton.TextEditor.prototype.initTextEditor = function () {
    this.jValue.initTextEditor(this.textEditorOptions);

    if (this.value != undefined) {
        this.jValue.textEditorVal(this.value);
    }

    return this;
};
Triton.TextEditor.prototype.setValue = function (value) {
    this.jValue.textEditorVal(value);
    return this;
};
Triton.TextEditor.prototype.getValue = function () {
    return this.jValue.textEditorVal();
};

Triton.TextEditor.prototype.attachValue = function ( value ) {
    return this.jValue.attachTextEditorVal( value );
};

Triton.TextEditor.HTML = '<iframe title="triton text editor" class="triton_text_editor triton_content triton_value"></iframe>';
Triton.TextEditor.Theme = {

    Normal: {

        attr: {

            frameborder: "0",
            scrolling: "no",
            allowfullscreen: 'true',
            allowTransparency: "true"
        },

        css: {

            width: '100%',
            'height': '300px',
            'overflow': 'hidden'
        },

        textEditorOptions: {
            'height': '300px'
        }
    }
};


Triton.TextEditor.create = function (options) {
    return new Triton.TextEditor(options).getJView();
};
Triton.TextEditor.append = function (j, options) {
    var jView = Triton.TextEditor.create(options);
    j.append(jView);
    return Triton.findTritonContent(jView);
};
Triton.TextEditor.getValue = function (j) {
    var jValue = Triton.findTritonValue(j);
    return jValue.textEditorVal();
};








Triton.Pager = function (options) {
    this.init(options);
};
Triton.Pager.prototype = new Triton();
Triton.Pager.prototype.init = function (options) {

    var j = Triton.createJQueryElement(Triton.Pager.HTML);
    j = Triton.applyOptions(j, options);

    var jPager = Triton.findTritonContent(j);

    var countPerPage = undefined;
    var countPerBlock = Triton.Pager.COUNT_PER_BLOCK;
    var totalCount = 0;
    var pageNumber = 1;

    var onPageSelected = undefined;

    if (options != undefined) {

        if (options['countPerPage'] != undefined) {
            countPerPage = parseInt(options['countPerPage']);
        }
        if (options['countPerBlock'] != undefined) {
            countPerBlock = parseInt(options['countPerBlock']);
        }
        if (options['totalCount'] != undefined) {
            totalCount = parseInt(options['totalCount']);
        }
        if (options['pageNumber'] != undefined) {
            pageNumber = parseInt(options['pageNumber']);
        }
        if (options['onPageSelected'] != undefined) {
            onPageSelected = options['onPageSelected'];
        }
    }

    if (countPerPage == undefined || countPerPage <= 0) {
        countPerPage = totalCount;
    }

    var totalPageCount = Math.ceil(totalCount / countPerPage);

    var currentBlockNumber = Math.ceil(pageNumber / countPerBlock);
    var startPageNumber = (currentBlockNumber - 1) * countPerBlock + 1;
    var endPageNumber = Math.min(currentBlockNumber * countPerBlock, totalPageCount);

    var prevBlockNumber = currentBlockNumber - 1; // 이전블럭
    var nextBlockNumber = currentBlockNumber + 1; // 다음블럭

    var prevBlockPageNumber = Math.max((prevBlockNumber - 1) * countPerBlock + 1, 1);
    var nextBlockPageNumber = Math.min(nextBlockNumber * countPerBlock - (countPerBlock - 1), totalPageCount);

    var jPagerFirstButton = j.find('.triton_pager_first_button');
    var jPagerPrevButton = j.find('.triton_pager_prev_button');
    var jPagerNextButton = j.find('.triton_pager_next_button');
    var jPagerLastButton = j.find('.triton_pager_last_button');

    {
        var pagerFirstButtonOptions = {
            defaultSet: {
                attr: {
                    src: TritonTheme.PAGER_ARROW_FIRST_IMAGE_URL
                },
                css: {
                    'background-color': TritonTheme.PAGER_BACKGROUND_COLOR
                }
            },
            hoveringSet: {
                attr: {
                    src: TritonTheme.PAGER_ARROW_FIRST_PRESSED_IMAGE_URL
                },
                css: {
                    'background-color': TritonTheme.PAGER_PRESSED_BACKGROUND_COLOR
                }
            }
        };

        if (pageNumber <= 1) {
            pagerFirstButtonOptions['isDefault'] = true;
            jPagerFirstButton.attr('triton-paging-number', '');
        } else {
            pagerFirstButtonOptions['css'] = {'cursor': 'pointer'};
            jPagerFirstButton.attr('triton-paging-number', 1);
        }

        Triton.applyThemeOptions(jPagerFirstButton, pagerFirstButtonOptions);
    }

    {
        var pagerLastButtonOptions = {
            defaultSet: {
                attr: {
                    src: TritonTheme.PAGER_ARROW_LAST_IMAGE_URL
                },
                css: {
                    'background-color': TritonTheme.PAGER_BACKGROUND_COLOR
                }
            },
            hoveringSet: {
                attr: {
                    src: TritonTheme.PAGER_ARROW_LAST_PRESSED_IMAGE_URL
                },
                css: {
                    'background-color': TritonTheme.PAGER_PRESSED_BACKGROUND_COLOR
                }
            }
        };

        if (pageNumber >= totalPageCount) {
            pagerLastButtonOptions['isDefault'] = true;
            jPagerLastButton.attr('triton-paging-number', '');
        } else {
            pagerLastButtonOptions['css'] = {'cursor': 'pointer'};
            jPagerLastButton.attr('triton-paging-number', totalPageCount);
        }

        Triton.applyThemeOptions(jPagerLastButton, pagerLastButtonOptions);
    }

    {
        var pagerPrevButtonOptions = {
            defaultSet: {
                attr: {
                    src: TritonTheme.PAGER_ARROW_PREV_IMAGE_URL
                },
                css: {
                    'background-color': TritonTheme.PAGER_BACKGROUND_COLOR
                }
            },
            hoveringSet: {
                attr: {
                    src: TritonTheme.PAGER_ARROW_PREV_PRESSED_IMAGE_URL
                },
                css: {
                    'background-color': TritonTheme.PAGER_PRESSED_BACKGROUND_COLOR
                }
            }
        };

        if (pageNumber <= 1) {
            pagerPrevButtonOptions['isDefault'] = true;
            jPagerPrevButton.attr('triton-paging-number', '');
        } else {
            pagerPrevButtonOptions['css'] = {'cursor': 'pointer'};
            jPagerPrevButton.attr('triton-paging-number', prevBlockPageNumber);
        }

        Triton.applyThemeOptions(jPagerPrevButton, pagerPrevButtonOptions);
    }

    {
        var pagerNextButtonOptions = {
            defaultSet: {
                attr: {
                    src: TritonTheme.PAGER_ARROW_NEXT_IMAGE_URL
                },
                css: {
                    'background-color': TritonTheme.PAGER_BACKGROUND_COLOR
                }
            },
            hoveringSet: {
                attr: {
                    src: TritonTheme.PAGER_ARROW_NEXT_PRESSED_IMAGE_URL
                },
                css: {
                    'background-color': TritonTheme.PAGER_PRESSED_BACKGROUND_COLOR
                }
            }
        };

        if (pageNumber >= totalPageCount) {
            pagerNextButtonOptions['isDefault'] = true;
            jPagerNextButton.attr('triton-paging-number', '');
        } else {
            pagerNextButtonOptions['css'] = {'cursor': 'pointer'};
            jPagerNextButton.attr('triton-paging-number', nextBlockPageNumber);
        }

        Triton.applyThemeOptions(jPagerNextButton, pagerNextButtonOptions);
    }


    for (var i = startPageNumber, l = endPageNumber; i <= l; i++) {

        var buttonOptions = {
            content: i,
            appendTo: jPager,
            onPageSelected: onPageSelected
        };

        if (i == pageNumber) {
            buttonOptions['isHovered'] = true;
        } else {
            buttonOptions['css'] = {'cursor': 'pointer'};
            buttonOptions['pagingNumber'] = i;
            buttonOptions['pageOptions'] = options;
            buttonOptions['onClick'] = function (e) {

                var options = e.data;
                var pagingNumber = options['pagingNumber'];
                var onPageSelected = options['onPageSelected'];
                var pageOptions = options['pageOptions'];

                onPageSelected(pagingNumber, pageOptions);
            }
        }

        new Triton.Pager.Button(buttonOptions);
    }

    // 없을때
    if (startPageNumber > endPageNumber || isNaN(endPageNumber)) {

        new Triton.Pager.Button({
            appendTo: jPager,
            content: pageNumber,
            isHovered: true
        });
    }

    if (onPageSelected != undefined) {
        j.find('.triton_paging_button').on('click', {
            options: options,
            onPageSelected: onPageSelected
        }, function (e) {

            var onPageSelected = e.data.onPageSelected;
            if (onPageSelected != undefined) {
                var pagingNumber = $(this).attr('triton-paging-number');
                if (String.isNotBlank(pagingNumber)) {
                    onPageSelected(pagingNumber, e.data.options);
                }


            }
        });
    }

    this.jView = j;

    this.initTriton(options);
};

Triton.Pager.COUNT_PER_BLOCK = 10;

Triton.Pager.NAME = 'triton_pager';
Triton.Pager.HTML = '<div class="triton_pager" style="display:inline-block;*zoom:1;*display:inline;">' +
    '<div style="display:inline-block;*zoom:1;*display:inline;line-height:0;">' +
    '<div class="triton_paging_button triton_pager_first_button" style="position:relative;display:inline-block;*zoom:1;*display:inline;border:1px solid ' + TritonTheme.PAGER_BORDER_COLOR + ';width:30px;height:30px;line-height:30px;font-family: notokr-medium, NanumGothicBold;font-size:12px">' +
    '<img src="' + TritonTheme.PAGER_ARROW_FIRST_IMAGE_URL + '" style="display:block;position:absolute;left:8px;top:10px;" alt="triton paging button triton pager first button"/>' +
    '</div>' +
    '<div class="triton_paging_button triton_pager_prev_button" style="position:relative;display:inline-block;*zoom:1;*display:inline;border:1px solid ' + TritonTheme.PAGER_BORDER_COLOR + ';border-left:none;width:30px;height:30px;line-height:30px;font-family: notokr-medium, NanumGothicBold;font-size:12px">' +
    '<img src="' + TritonTheme.PAGER_ARROW_PREV_IMAGE_URL + '" style="display:block;position:absolute;left:12px;top:10px;" alt="triton paging button triton pager prev button"/>' +
    '</div>' +
    '</div>' +

    '<div class="triton_content" style="display:inline-block;*zoom:1;*display:inline;margin-left:10px;line-height:0;margin-right:10px;border-left:1px solid ' + TritonTheme.PAGER_BORDER_COLOR + ';"></div>' +

    '<div style="display:inline-block;*zoom:1;*display:inline;line-height:0;">' +
    '<div class="triton_paging_button triton_pager_next_button" style="position:relative;display:inline-block;*zoom:1;*display:inline;border:1px solid ' + TritonTheme.PAGER_BORDER_COLOR + ';width:30px;height:30px;line-height:30px;font-family: notokr-medium, NanumGothicBold;font-size:12px">' +
    '<img src="' + TritonTheme.PAGER_ARROW_NEXT_IMAGE_URL + '" style="display:block;position:absolute;left:12px;top:10px;" alt="triton paging button triton pager next button"/>' +
    '</div>' +
    '<div class="triton_paging_button triton_pager_last_button" style="position:relative;display:inline-block;*zoom:1;*display:inline;border:1px solid ' + TritonTheme.PAGER_BORDER_COLOR + ';border-left:none;width:30px;height:30px;line-height:30px;font-family: notokr-medium, NanumGothicBold;font-size:12px">' +
    '<img src="' + TritonTheme.PAGER_ARROW_LAST_IMAGE_URL + '" style="display:block;position:absolute;left:8px;top:10px;" alt="triton paging button triton pager last button"/>' +
    '</div>' +
    '</div>' +
    '</div>';

Triton.Pager.Button = function (options) {
    this.init(options);
};
Triton.Pager.Button.prototype = new Triton();
Triton.Pager.Button.prototype.init = function (options) {

    var j = Triton.createJQueryElement(Triton.Pager.Button.HTML);
    options = Triton.combineOptions(options, {
        theme: Triton.Pager.Button.Theme.Normal
    });
    j = Triton.applyOptions(j, options);

    this.jView = j;
    this.initTriton(options);
};
Triton.Pager.Button.HTML = '<div class="triton_pager_button" style="position:relative;display:inline-block;*zoom:1;*display:inline;border:1px solid ' + TritonTheme.PAGER_BORDER_COLOR + ';border-left:none;width:30px;height:30px;line-height:30px;font-size:11px">' +
    '<div class="triton_content" style="position:absolute;text-align:center;left:0px;top:0px;display:block;width:30px;height:30px;line-height:30px;"></div>' +
    '</div>';
Triton.Pager.Button.Theme = {

    Normal: {
        hoveringSet: {
            css: {
                'background-color': TritonTheme.PAGER_PRESSED_BACKGROUND_COLOR,
                'color': TritonTheme.PAGER_PRESSED_TEXT_COLOR,
                'font-family': "notokr-medium, NanumGothicBold"
            }

        },
        defaultSet: {
            css: {
                'background-color': TritonTheme.PAGER_BACKGROUND_COLOR,
                'color': TritonTheme.PAGER_TEXT_COLOR,
                'font-family': "NanumGothic"
            }

        }
    }
};


Triton.Pager.create = function (options) {
    return new Triton.Pager(options).getJView();
};
Triton.Pager.append = function (j, options) {
    var jView = Triton.Pager.create(options);
    j.append(jView);
    return Triton.findTritonContent(jView);
};


Triton.PhoneNumberInput = function (options) {
    this.init(options);
};
Triton.PhoneNumberInput.prototype = new Triton();
Triton.PhoneNumberInput.prototype.init = function (options) {

    options = Triton.combineOptions(options, {
        theme: Triton.PhoneNumberInput.Theme.Normal
    });

    var j = Triton.createJQueryElement(Triton.PhoneNumberInput.HTML);
    j = Triton.applyOptions(j, options);

    var theme = options['theme'];

    var number1Options = Triton.combineOptions(options['number1Options'], Lia.p(theme, 'number1'));

    var number2Options = Triton.combineOptions(options['number2Options'], Lia.p(theme, 'number2'));

    var number3Options = Triton.combineOptions(options['number3Options'], Lia.p(theme, 'number3'));

    number1Options['appendTo'] = j.find('.triton_phone_number_input_number1');
    this.input1 = new Triton.ComboBox(number1Options);

    number2Options['appendTo'] = j.find('.triton_phone_number_input_number2');
    this.input2 = new Triton.TextInput(number2Options);

    number3Options['appendTo'] = j.find('.triton_phone_number_input_number3');
    this.input3 = new Triton.TextInput(number3Options);

    var hyphen1Options = Triton.combineOptions(options['hyphenOptions'], Lia.p(options, 'theme', 'hyphen'));
    hyphen1Options['appendTo'] = j.find('.triton_phone_number_input_hyphen1');
    hyphen1Options['content'] = '-';
    new Triton.Span(hyphen1Options);

    var hyphen2Options = Triton.combineOptions(options['hyphenOptions'], Lia.p(options, 'theme', 'hyphen'));
    hyphen2Options['appendTo'] = j.find('.triton_phone_number_input_hyphen2');
    hyphen2Options['content'] = '-';
    new Triton.Span(hyphen2Options);

    this.responsive = Lia.p(options, 'responsive');
    this.gap = Lia.extractPropertyFromTwoMap(options, Lia.p(options, 'theme'), 'gap');
    this.inputWidth = Lia.extractPropertyFromTwoMap(options, Lia.p(options, 'theme'), 'inputWidth');
    this.responsiveWidth = parseInt(Lia.extractPropertyFromTwoMap(options, Lia.p(options, 'theme'), 'responsiveWidth'));
    this.jView = j;

    this.initTriton(options);
    this.onResponsiveResize();
};


Triton.PhoneNumberInput.prototype.onResponsiveResize = function () {

    var width = this.jView.outerWidth(true);
    if (this.responsive == true && width < this.responsiveWidth) {


        this.find('.triton_phone_number_input_number1').css({
            width: '100%',
            'float': ''
        });
        this.find('.triton_phone_number_input_number2').css({
            width: '100%',
            'float': '',
            'margin-top': this.gap
        });
        this.find('.triton_phone_number_input_number3').css({
            width: '100%',
            'float': '',
            'margin-top': this.gap
        });

        this.input1.css({
            width: '100%'
        });
        this.input2.css({
            width: '100%'
        });

        this.input3.css({
            width: '100%'
        });

        this.find('.triton_phone_number_input_hyphen1').hide();
        this.find('.triton_phone_number_input_hyphen2').hide();

    } else {

        this.find('.triton_phone_number_input_number1').css({
            width: '',
            'float': 'left'
        });
        this.find('.triton_phone_number_input_number2').css({
            width: '',
            'float': 'left',
            'margin-top': ''
        });
        this.find('.triton_phone_number_input_number3').css({
            width: '',
            'float': 'left',
            'margin-top': ''
        });

        this.input1.css({
            width: this.inputWidth
        });
        this.input2.css({
            width: this.inputWidth
        });

        this.input3.css({
            width: this.inputWidth
        });


        this.find('.triton_phone_number_input_hyphen1').show();
        this.find('.triton_phone_number_input_hyphen2').show();
    }
};


Triton.PhoneNumberInput.prototype.getValue = function () {

    var input1 = this.input1.getValue();
    var input2 = this.input2.getValue();
    var input3 = this.input3.getValue();

    if (String.isBlank(input1) || String.isBlank(input2) || String.isBlank(input3)) {
        return undefined;
    }

    return input1 + '-' + input2 + '-' + input3;
};

Triton.PhoneNumberInput.prototype.setValue = function (phoneNumber) {

    var input1 = '';
    var input2 = '';
    var input3 = '';

    if (String.isNotBlank(phoneNumber)) {

        var split = phoneNumber.split('-');
        input1 = Lia.p(split, 0);
        input2 = Lia.p(split, 1);
        input3 = Lia.p(split, 2);
    }

    this.input1.setValue(input1);
    this.input2.setValue(input2);
    this.input3.setValue(input3);
};


Triton.PhoneNumberInput.prototype.applyResponsive = function () {
};
Triton.PhoneNumberInput.create = function (options) {
    return new Triton.PhoneNumberInput(options).getJView();
};
Triton.PhoneNumberInput.append = function (j, options) {
    var jView = Triton.PhoneNumberInput.create(options);
    j.append(jView);
    return Triton.findTritonContent(jView);
};
Triton.PhoneNumberInput.DefaultValues = {

    cellPhoneNumber1OptionList: [
        {name: '선택', value: ''},
        {name: '010', value: '010'},
        {name: '011', value: '011'},
        {name: '016', value: '016'},
        {name: '017', value: '017'},
        {name: '018', value: '018'},
        {name: '019', value: '019'}
    ],

    homePhoneNumber1OptionList: [
        {name: '선택', value: ''},
        {name: '02', value: '02'},
        {name: '031', value: '031'},
        {name: '032', value: '032'},
        {name: '033', value: '033'},
        {name: '041', value: '041'},
        {name: '042', value: '042'},
        {name: '043', value: '043'},
        {name: '051', value: '051'},
        {name: '052', value: '052'},
        {name: '053', value: '053'},
        {name: '054', value: '054'},
        {name: '055', value: '055'},
        {name: '061', value: '061'},
        {name: '062', value: '062'},
        {name: '063', value: '063'},
        {name: '064', value: '064'},
        {name: '070', value: '070'}
    ],

    totalPhoneNumber1OptionList: [
        {name: '선택', value: ''},
        {name: '010', value: '010'},
        {name: '011', value: '011'},
        {name: '016', value: '016'},
        {name: '017', value: '017'},
        {name: '018', value: '018'},
        {name: '019', value: '019'},
        {name: '02', value: '02'},
        {name: '031', value: '031'},
        {name: '032', value: '032'},
        {name: '033', value: '033'},
        {name: '041', value: '041'},
        {name: '042', value: '042'},
        {name: '043', value: '043'},
        {name: '051', value: '051'},
        {name: '052', value: '052'},
        {name: '053', value: '053'},
        {name: '054', value: '054'},
        {name: '055', value: '055'},
        {name: '061', value: '061'},
        {name: '062', value: '062'},
        {name: '063', value: '063'},
        {name: '064', value: '064'},
        {name: '070', value: '070'}
    ],

    officePhoneNumber1OptionList: [
        {name: '선택', value: ''},
        {name: '010', value: '010'},
        {name: '011', value: '011'},
        {name: '016', value: '016'},
        {name: '017', value: '017'},
        {name: '018', value: '018'},
        {name: '019', value: '019'},
        {name: '02', value: '02'},
        {name: '031', value: '031'},
        {name: '032', value: '032'},
        {name: '033', value: '033'},
        {name: '041', value: '041'},
        {name: '042', value: '042'},
        {name: '043', value: '043'},
        {name: '051', value: '051'},
        {name: '052', value: '052'},
        {name: '053', value: '053'},
        {name: '054', value: '054'},
        {name: '055', value: '055'},
        {name: '061', value: '061'},
        {name: '062', value: '062'},
        {name: '063', value: '063'},
        {name: '064', value: '064'},
        {name: '070', value: '070'}
    ]
};

Triton.PhoneNumberInput.Theme = {

    Normal: {

        gap: '5px',
        inputWidth: '150px',
        responsiveWidth: '500px',

        number1: {
            css: {}
        },

        number2: {
            css: {}
        },

        number3: {
            css: {}
        },

        hyphen: {

            css: {
                'box-sizing': 'border-box',
                'float': 'left',
                'height': '30px',
                'line-height': '30px',
                'padding-left': '10px',
                'padding-right': '10px',
                'text-align': 'center'
            }
        }
    }
};

Triton.PhoneNumberInput.NAME = 'triton_phone_number_input';
Triton.PhoneNumberInput.HTML = '<div class="triton_phone_number_input triton_responsive_resizable" style="overflow:auto;">' +
    '<div class="triton_phone_number_input_number1"></div>' +
    '<div class="triton_phone_number_input_hyphen1"></div>' +
    '<div class="triton_phone_number_input_number2"></div>' +
    '<div class="triton_phone_number_input_hyphen2"></div>' +
    '<div class="triton_phone_number_input_number3"></div>' +
    '</div>';


Triton.EmailInput = function (options) {
    this.init(options);
};
Triton.EmailInput.prototype = new Triton();
Triton.EmailInput.prototype.init = function (options) {

    options = Triton.combineOptions(options, {
        theme: Triton.EmailInput.Theme.Normal
    });

    var j = Triton.createJQueryElement(Triton.EmailInput.HTML);
    j = Triton.applyOptions(j, options);

    var theme = options['theme'];

    var nameOptions = Triton.combineOptions(options['nameOptions'], Lia.p(theme, 'name'));
    nameOptions['appendTo'] = j.find('.triton_email_input_name');
    this.nameInput = new Triton.TextInput(nameOptions);

    var domainOptions = Triton.combineOptions(options['domainOptions'], Lia.p(theme, 'domain'));
    domainOptions['jEmailInput'] = j;
    domainOptions['emailInput'] = this;

    if (domainOptions['onSelected'] == undefined) {
        domainOptions['onSelected'] = function (selectedValue, selectedOption, options) {

            var j = options['jEmailInput'];
            var emailInput = options['emailInput'];

            if (j != undefined) {

                if (String.isBlank(selectedValue)) {

                    j.find('.triton_email_input_direct').show();
                    selectedValue = '';

                } else {

                    j.find('.triton_email_input_direct').hide();
                }

                emailInput.directInput.setValue(selectedValue);
            }
        };
    }

    domainOptions['appendTo'] = j.find('.triton_email_input_domain');
    this.domainComBox = new Triton.ComboBox(domainOptions);
    this.domainComBox.change(true);

    var directOptions = Triton.combineOptions(options['directOptions'], Lia.p(theme, 'direct'));
    directOptions['css'] = Triton.combineOptions(directOptions['css'], {width: '150px'});
    directOptions['appendTo'] = j.find('.triton_email_input_direct');
    this.directInput = new Triton.TextInput(directOptions);

    var atOptions = Triton.combineOptions(options['atOptions'], Lia.p(options, 'theme', 'at'));
    atOptions['appendTo'] = j.find('.triton_email_input_at');
    atOptions['content'] = '@';
    new Triton.Span(atOptions);

    this.responsive = Lia.p(options, 'responsive');
    this.gap = Lia.extractPropertyFromTwoMap(options, Lia.p(options, 'theme'), 'gap');
    this.inputWidth = Lia.extractPropertyFromTwoMap(options, Lia.p(options, 'theme'), 'inputWidth');
    this.responsiveWidth = parseInt(Lia.extractPropertyFromTwoMap(options, Lia.p(options, 'theme'), 'responsiveWidth'));
    this.jView = j;

    this.initTriton(options);
    this.onResponsiveResize();

    var email = options['email'];
    if (email != undefined) {
        this.setEmail(email);
    }
};

Triton.EmailInput.prototype.getValue = function () {
    return this.getEmail();
};

Triton.EmailInput.prototype.setValue = function (email) {
    this.setEmail(email);
};

Triton.EmailInput.prototype.getEmail = function () {

    var name = this.nameInput.getValue();
    var domain = this.directInput.getValue();

    if (String.isBlank(name) || String.isBlank(domain)) {
        return undefined;
    }

    return name + '@' + domain;
};

Triton.EmailInput.prototype.setEmail = function (email) {

    var name = '';
    var domain = '';
    var direct = '';

    if (email != undefined) {

        var split = email.split('@');

        name = split[0];
        direct = split[1];
    }

    this.nameInput.setValue(name);

    // 체크 해 주어야 함
    var jOptionList = this.find('.triton_email_input_domain option');
    for (var i = 0, l = jOptionList.length; i < l; i++) {
        var jOption = jOptionList.eq(i);
        var value = jOption.attr('value');
        if (value == direct) {
            domain = direct;
        }
    }

    this.domainComBox.setValue(domain);
    this.directInput.setValue(direct);
};

Triton.EmailInput.prototype.onResponsiveResize = function () {

    var width = this.jView.outerWidth(true);
    if (this.responsive == true && width < this.responsiveWidth) {

        this.find('.triton_email_input_name').css({
            'float': ''
        });
        this.find('.triton_email_input_domain').css({
            'float': '',
            'margin-top': this.gap
        });
        this.find('.triton_email_input_direct').css({
            'float': '',
            'margin-top': this.gap,
            'margin-left': ''
        });

        this.nameInput.css({
            width: '100%'
        });
        this.domainComBox.css({
            width: '100%'
        });

        this.directInput.css({
            width: '100%'
        });

        this.find('.triton_email_input_at').hide();

    } else {

        this.find('.triton_email_input_name').css({
            'float': 'left'
        });
        this.find('.triton_email_input_domain').css({
            'float': 'left',
            'margin-top': ''
        });
        this.find('.triton_email_input_direct').css({
            'float': 'left',
            'margin-top': '',
            'margin-left': this.gap
        });


        this.nameInput.css({
            width: this.inputWidth
        });
        this.domainComBox.css({
            width: this.inputWidth
        });

        this.directInput.css({
            width: this.inputWidth
        });

        this.find('.triton_email_input_at').show();
    }


};
Triton.EmailInput.prototype.applyResponsive = function () {
};


Triton.EmailInput.create = function (options) {
    return new Triton.EmailInput(options).getJView();
};
Triton.EmailInput.append = function (j, options) {
    var jView = Triton.EmailInput.create(options);
    j.append(jView);
    return Triton.findTritonContent(jView);
};

Triton.EmailInput.NAME = 'triton_email_input';
Triton.EmailInput.HTML = '<div class="triton_email_input triton_responsive_resizable" style="overflow:auto;">' +
    '<div class="triton_email_input_name" style=""></div>' +
    '<div class="triton_email_input_at" style="text-align:center;"></div>' +
    '<div class="triton_email_input_domain"></div>' +
    '<div class="triton_email_input_direct" style="display:none;"></div>' +
    '</div>';

Triton.EmailInput.DefaultValues = {

    emailOptionList: [
        {name: 'gmail.com', value: 'gmail.com'},
        {name: 'naver.com', value: 'naver.com'},
        {name: 'hanmail.net', value: 'hanmail.net'},
        {name: 'daum.net', value: 'daum.net'},
        {name: 'hotmail.com', value: 'hotmail.com'},
        {name: '직접입력', value: ''}
    ],

    militaryEmailOptionList: [
        {name: 'mnd.mil', value: 'mnd.mil'},
        {name: 'af.mil', value: 'af.mil'},
        {name: 'army.mil', value: 'army.mil'},
        {name: 'navy.mil', value: 'navy.mil'}
    ]
};

Triton.EmailInput.Theme = {

    Normal: {

        'gap': '5px',
        'inputWidth': '150px',
        'responsiveWidth': '500px',

        at: {

            css: {
                'text-align': 'center',
                'float': 'left',
                'height': '30px',
                'line-height': '30px',
                'margin-left': '10px',
                'margin-right': '10px'
            }
        },

        name: {
            css: {}
        },

        domain: {
            css: {}
        },

        direct: {
            css: {}
        }

    }

};
Triton.EmailInput.setEmail = function (j, email) {
    var triton = j.getTriton();
    triton.setEmail(email);
};

/*

new Triton.AddressInput({
    searchType: Triton.AddressInput.SearchType.DAUM,

    address1Options: {
        form: {name: 'postcode'}
    },
    //address2Options : {
    //    form : { name : 'address2'},
    //    value : zipCode2
    //},
    address3Options: {
        form: {name: 'address1'}
    },
    address4Options: {
        form: {name: 'address2'}
    },
    buttonOptions: {}
})

 */
Triton.AddressInput = function (options) {
    this.init(options);
};
Triton.AddressInput.prototype = new Triton();
Triton.AddressInput.prototype.init = function (options) {

    options = Triton.combineOptions(options, {
        theme: Triton.AddressInput.Theme.Normal
    });

    var j = Triton.createJQueryElement(Triton.AddressInput.HTML);
    j = Triton.applyOptions(j, options);

    var theme = options['theme'];

    var postCodeHidden = Triton.combineOptions(options['postCodeHidden'], Lia.p(theme, 'postCodeHidden'));
    if (postCodeHidden == true) {
        j.find('.triton_address_input_line').hide();
    }

    var address1Options = Triton.combineOptions(options['address1Options'], Lia.p(theme, 'address1'));
    address1Options['appendTo'] = j.find('.triton_address_input_address1');
    this.address1Input = new Triton.TextInput(address1Options);

    var address3Options = Triton.combineOptions(options['address3Options'], Lia.p(theme, 'address3'));
    address3Options['appendTo'] = j.find('.triton_address_input_address3');
    this.address3Input = new Triton.TextInput(address3Options);

    var address4Options = Triton.combineOptions(options['address4Options'], Lia.p(theme, 'address4'));
    address4Options['appendTo'] = j.find('.triton_address_input_address4');
    this.address4Input = new Triton.TextInput(address4Options);

    // 간격 설정
    var gap = this.gap = Lia.extractPropertyFromTwoMap(options, Lia.p(options, 'theme'), 'gap');
    if (gap != undefined) {
        j.find('.triton_address_input_line').css({
            'margin-bottom': gap
        });
        j.find('.triton_address_input_address3').css({
            'margin-right': gap
        });
    }

    // 검색
    var searchType = Lia.p(options, 'searchType');
    if (searchType != undefined) {

        var searchOptions = undefined;
        if (searchType == Triton.AddressInput.SearchType.DAUM) {

            searchOptions = {

                addressInput: this,
                jAddressInput: j,

                onClick: function (e) {

                    var jAddressInput = Lia.p(e, 'data', 'jAddressInput');
                    var addressInput = Lia.p(e, 'data', 'addressInput');

                    if (jAddressInput != undefined) {

                        new daum.Postcode({
                            oncomplete: function (data) {

                                addressInput.searchData = data;
                                addressInput.address1Input.setValue(Lia.pd('', data, 'zonecode'));
                                addressInput.address3Input.setValue(Lia.pd('', data, 'address'));
                            }
                        }).open();

                    }

                }
            };
        }

        if (searchOptions != undefined) {

            var buttonOptions = Triton.combineOptions(options['buttonOptions'], Lia.p(theme, 'button'));
            buttonOptions['css'] = Triton.combineOptions(buttonOptions['css'], {width: '100px'});

            buttonOptions = Lia.combine(buttonOptions, searchOptions);

            if (buttonOptions['content'] == undefined) {
                buttonOptions['content'] = Lia.Strings.getString(Lia.Strings.TRITON.ADDRESS_INPUT.SEARCH);
            }

            buttonOptions['appendTo'] = j.find('.triton_address_input_search_button');
            new Triton.FlatButton(buttonOptions);

            if (gap != undefined) {
                j.find('.triton_address_input_search_button').css({
                    'margin-left': gap
                });
            }

        }
    }

    this.responsive = Lia.p(options, 'responsive');
    this.addressWidth = Lia.extractPropertyFromTwoMap(options, Lia.p(options, 'theme'), 'addressWidth');
    this.responsiveWidth = parseInt(Lia.extractPropertyFromTwoMap(options, Lia.p(options, 'theme'), 'responsiveWidth'));
    this.jView = j;

    this.initTriton(options);
    this.onResponsiveResize();
};

Triton.AddressInput.prototype.getSearchData = function () {
    return this.searchData;
};


Triton.AddressInput.prototype.onResponsiveResize = function () {

    var width = this.jView.outerWidth(true);
    if (this.responsive == true && width < this.responsiveWidth) {


        this.find('.triton_address_input_address3').css({
            'width': '100%'
        });

        this.find('.triton_address_input_address4').css({
            'width': '100%'
        });

        this.address3Input.css({
            'width': '100%'
        });

        this.address4Input.css({
            'margin-top': this.gap,
            'width': '100%'
        });


    } else {


        this.find('.triton_address_input_address3').css({
            'width': ''
        });

        this.find('.triton_address_input_address4').css({
            'width': ''
        });

        this.address3Input.css({
            'width': this.addressWidth
        });


        this.address4Input.css({
            'margin-top': '',
            'width': this.addressWidth
        });
    }
};

Triton.AddressInput.prototype.applyResponsive = function () {
};


Triton.AddressInput.create = function (options) {
    return new Triton.AddressInput(options).getJView();
};
Triton.AddressInput.append = function (j, options) {
    var jView = Triton.AddressInput.create(options);
    j.append(jView);
    return Triton.findTritonContent(jView);
};

Triton.AddressInput.SearchType = {
    // <script src="http://dmaps.daum.net/map_js_init/postcode.v2.js"></script>
    DAUM: 'daum'
};

Triton.AddressInput.Theme = {

    Normal: {

        'gap': '5px',
        'addressWidth': '300px',
        'responsiveWidth': '610px',

        hyphen: {

            css: {
                'float': 'left',
                'height': '30px',
                'line-height': '30px'
            }
        },

        address1: {
            css: {
                'width': '150px'
            }
        },

        //address2 : {
        //},

        address3: {

            css: {}
        },

        address4: {
            css: {}
        },

        button: {

            defaultColor: '#ffffff',
            hoverColor: '#f7f7f7',

            css: {
                'height': '30px',
                'line-height': '30px',
                'font-size': '13px',
                'width': '80px',
                'display': 'inline-block',
                '*zoom': '1',
                '*display': 'inline',
                'color': '#9a9a9a',
                'text-align': 'center',
                'padding': '0px',
                'border': '1px solid #9a9a9a',
                'border-radius': '0px',
                'font-family': 'notokr-medium, NanumGothicBold'
            }

        }

    }
};

Triton.AddressInput.NAME = 'triton_address_input';
Triton.AddressInput.HTML = '<div class="triton_address_input triton_responsive_resizable">' +
    '<div class="triton_address_input_line" style="overflow:auto;clear:both;">' +
    '<div class="triton_address_input_address1" style="float:left;"></div>' +
    //'<span class="triton_address_input_hyphen"> - </span>' +
    //'<div class="triton_address_input_address2" style="float:left;"></div>' +
    '<div class="triton_address_input_search_button" style="float:left;"></div>' +
    '</div>' +
    '<div class="triton_address_input_line_end" style="overflow:auto;clear:both;">' +
    '<div class="triton_address_input_address3" style="float:left;"></div>' +
    '<div class="triton_address_input_address4" style="float:left;"></div>' +
    '</div>' +
    '</div>';


Triton.ContextMenu = function (options) {
    this.init(options);
};


// hideWhenClick
// removeWhenClick
// onItemClick ( item, contextMenu )
Triton.ContextMenu.prototype = new Triton();
Triton.ContextMenu.prototype.init = function (options) {

    this.jView = jQuery(Triton.ContextMenu.HTML);

    options = Triton.combineOptions(options, {
        theme: Triton.ContextMenu.Theme.ContextMenu.Text
    });

    Triton.applyOptions(this.jView, options);

    this.hideWhenClick = Lia.pd(false, options, 'hideWhenClick');
    this.removeWhenClick = Lia.pd(false, options, 'removeWhenClick');

    var onItemClickList = Lia.p(options, 'onItemClickList');
    if (onItemClickList == undefined) {
        onItemClickList = [];
    }

    var onItemClick = Lia.p(options, 'onItemClick');
    if (onItemClick != undefined)
        onItemClickList.push({
            'onItemClick': onItemClick,
            'object': undefined
        });

    this.onItemClickList = onItemClickList;

    this.options = options;

    this.initTriton(options);
};

Triton.ContextMenu.prototype.getHideWhenClick = function () {
    return this.hideWhenClick;
};

Triton.ContextMenu.prototype.getRemoveWhenClick = function () {
    return this.removeWhenClick;
};

Triton.ContextMenu.prototype.getOnItemClickList = function () {
    return this.onItemClickList;
};

Triton.ContextMenu.prototype.addOnItemClick = function (onItemClick, object) {
    this.onItemClickList.push({
        'onItemClick': onItemClick,
        'object': object
    });
    return this;
};

Triton.ContextMenu.prototype.setPosition = function (x, y) {
    this.jView.css({
        'left': x,
        'top': y
    });
    return this;
};
Triton.ContextMenu.prototype.setWidth = function (width) {
    this.jView.css({
        'width': width
    });
    return this;
};

Triton.ContextMenu.prototype.add = function (item) {

    var jItem = jQuery(Triton.ContextMenu.HTML_ITEM);

    item = Triton.combineOptions(item, {
        theme: Triton.ContextMenu.Theme.ContextMenuItem.Text
    });

    Triton.applyOptions(jItem, item);

    var jChildren = this.jView.children();
    var notLast = Lia.pt(item, item['theme'], 'notLast');
    Triton.applyTheme(jChildren.eq(jChildren.length - 1), notLast);

    jItem.on('click', {
        contentMenu: this,
        item: item
    }, function (e) {

        var contextMenu = Lia.p(e.data, 'contentMenu');
        var hideWhenClick = contextMenu.getHideWhenClick();
        if (hideWhenClick) {
            contextMenu.hide();
        }

        var removeWhenClick = contextMenu.getRemoveWhenClick();
        if (removeWhenClick) {
            contextMenu.remove();
        }

        var onItemClickList = contextMenu.getOnItemClickList();
        if (onItemClickList != undefined) {

            for (var i = 0, l = onItemClickList.length; i < l; i++) {

                var item = onItemClickList[i];
                var onItemClick = item['onItemClick'];
                var object = item['object'];

                onItemClick(Lia.p(e.data, 'item'), contextMenu, object);
            }
        }
    });

    this.jView.append(jItem);
    return this;
};


Triton.ContextMenu.NAME = 'triton_context_menu';
Triton.ContextMenu.HTML = '<div class="triton_context_menu triton_content"></div>';
Triton.ContextMenu.HTML_ITEM = '<div class="triton_context_menu_item triton_content"></div>';
Triton.ContextMenu.Theme = {

    ContextMenu: {

        Text: {

            css: {

                'border': '1px solid #b8b8b8',
                'border-radius': '5px',
                'overflow': 'hidden',
                'position': 'fixed',
                'background-color': '#ffffff'
            },

            attr: {}
        },

        Button: {

            css: {

                'border': '1px solid #9a9a9a',
                'border-radius': '5px',
                'overflow': 'hidden',
                'position': 'fixed'
            },

            attr: {}
        }
    },

    ContextMenuItem: {

        Text: {

            css: {
                'height': '30px',
                'line-height': '30px',
                'padding-left': '15px',
                'padding-right': '15px',
                'text-align': 'center',
                'background-color': '#ffffff',
                'cursor': 'pointer'
            },
            attr: {},

            notLast: {

                css: {
                    'border-bottom': '1px solid #b8b8b8',
                    'background-color': 'transparent'
                },
                attr: {}
            },

            defaultSet: {
                css: {
                    'background-color': 'transparent'
                },
                attr: {}
            },

            hoveringSet: {

                css: {
                    'background-color': '#f7f7f7'
                },
                attr: {}
            }
        },

        TextNoPadding: {

            css: {
                'height': '30px',
                'line-height': '30px',
                'text-align': 'center',
                'background-color': '#ffffff',
                'cursor': 'pointer'
            },
            attr: {},

            notLast: {

                css: {
                    'border-bottom': '1px solid #b8b8b8',
                    'background-color': 'transparent'
                },
                attr: {}
            },

            defaultSet: {
                css: {
                    'background-color': 'transparent'
                },
                attr: {}
            },

            hoveringSet: {

                css: {
                    'background-color': '#f7f7f7'
                },
                attr: {}
            }
        },

        Button: {

            css: {
                'height': '33px',
                'line-height': '33px',
                'padding-left': '15px',
                'padding-right': '15px',
                'text-align': 'center',
                'background-color': '#ffffff',
                'cursor': 'pointer',
                color: '#9a9a9a',
                'font-family': 'notokr-medium, NanumGothicBold'
            },
            attr: {},

            notLast: {

                css: {
                    'border-bottom': '1px solid #eeeeee',
                    'background-color': '#ffffff'
                },
                attr: {}
            },

            defaultSet: {
                css: {
                    'background-color': '#ffffff'
                },
                attr: {}
            },

            hoveringSet: {

                css: {
                    'background-color': '#f7f7f7'
                },
                attr: {}
            }
        }
    }
};


Triton.SeparateSection = function (options) {
    this.init(options);
};
Triton.SeparateSection.prototype = new Triton();
Triton.SeparateSection.prototype.init = function (options) {

    this.jView = Triton.createJQueryElement(Triton.SeparateSection.HTML);
    Triton.applyOptions(this.jView, options);
    this.jContent = Triton.findTritonContent(this.jView);

    var bar = Lia.p(options, 'bar');
    var barLeft = Lia.pd('0px', bar, 'left');
    var barWidth = Lia.pd('4px', bar, 'width');

    this.onResize = Lia.p(options, 'onResize');

    this.jView.find('.triton_separate_bar').on('mousedown', {
        separateSection: this,
        jView: this.jView
    }, function (e) {

        var jView = e.data.jView;
        var separateSection = e.data.separateSection;
        var jBar = jView.find('.triton_separate_bar');

        var pageX = e.pageX;
        var left = parseFloat(jBar.css('left'));

        jView.data('triton-separate-bar-left', left);
        jView.data('triton-separate-bar-page-x', pageX);

        jView.css({
            'cursor': 'e-resize'
        }).addClass('triton_separate_bar_moving');

        if (separateSection.onResize != undefined) {
            separateSection.onResize(left);
        }

    }).on('mousemove', {
        separateSection: this,
        jView: this.jView
    }, function (e) {

        var jView = e.data.jView;
        var separateSection = e.data.separateSection;
        var jBar = jView.find('.triton_separate_bar');

        if (jView.hasClass('triton_separate_bar_moving')) {

            var pageX = e.pageX;

            var baseLeft = jView.data('triton-separate-bar-left');
            var basePageX = jView.data('triton-separate-bar-page-x');

            var left = baseLeft + pageX - basePageX;
            jBar.css({'left': left});

            if (separateSection.onResize != undefined) {
                separateSection.onResize(left);
            }
        }

    }).on('mouseup', {
        separateSection: this,
        jView: this.jView
    }, function (e) {

        var jView = e.data.jView;
        var separateSection = e.data.separateSection;
        var jBar = jView.find('.triton_separate_bar');

        jView.css({
            'cursor': 'default'
        }).removeClass('triton_separate_bar_moving');

        if (separateSection.onResize != undefined) {

            var left = parseFloat(jBar.css('left'));
            separateSection.onResize(left);
        }
    });


    this.jView.on('mousemove', {
        separateSection: this,
        jView: this.jView
    }, function (e) {
        e.preventDefault();

        var jView = e.data.jView;
        var separateSection = e.data.separateSection;
        var jBar = jView.find('.triton_separate_bar');

        if (jView.hasClass('triton_separate_bar_moving')) {

            var pageX = e.pageX;

            var baseLeft = jView.data('triton-separate-bar-left');
            var basePageX = jView.data('triton-separate-bar-page-x');

            jBar.css({'left': baseLeft + pageX - basePageX});

            if (separateSection.onResize != undefined) {
                separateSection.onResize(jBar.css('left'));
            }
        }

    }).on('mouseup', function (e) {

        $(this).css({
            'cursor': 'default'
        }).removeClass('triton_separate_bar_moving');
    });

    this.jView.find('.triton_separate_bar').css({
        'left': barLeft,
        'width': barWidth
    });

    this.initTriton(options);
};

Triton.SeparateSection.NAME = 'triton_separate_section';
Triton.SeparateSection.HTML = '<div class="triton_separate_section" style="position:relative;">' +
    '<div class="triton_content"></div>' +
    '<div class="triton_separate_bar" style="position:absolute;top:0;bottom:0;cursor:e-resize;"></div>' +
    '</div>';
Triton.SeparateSection.Theme = {
    Normal: {}
};
Triton.SeparateSection.create = function (options) {
    return new Triton.SeparateSection(options).getJView();
};
Triton.SeparateSection.append = function (j, options) {
    var jView = Triton.SeparateSection.create(options);
    j.append(jView);
    return Triton.findTritonContent(jView);
};


/*

    page.calendar = new Triton.Calendar({
        appendTo : container,

        onHeaderPrevButtonClick : function( page ) {

            // 해더 위의 < 버튼 클릭시
            page.movePrevMonth();
            var date = page.getCurrentDate();
            PageManager.cpcpm({'year': date.toString('yyyy'), 'month':date.getMonth() });
        },
        onHeaderNextButtonClick : function( page ){

            // 해더 위의 > 버튼 클릭시
            page.moveNextMonth();
            var date = page.getCurrentDate();
            PageManager.cpcpm({'year': date.toString('yyyy'), 'month': date.getMonth() });
        },
        isItemClickable : function( data ) {

            // 해당 아이템이 클릭 가능한지 체크
            // true 로 하면 cursor:pointer 로 설정됨

        },
        onItemClick : function( data ) {

            // 해당 아이템이 클릭 가능한지 체크
            // 아이템 클릭했을 시

        },
        onDayClick: function( date ) {

            // 해당일 클릭 시
        }
    });

    var calenderList = [];
    calenderList.push({
        start_date : '2020-07-01 00:00:00',
        end_date : '2020-07-08 00:00:00',
        title : '타이틀',
        background_color : '#000000',
        color : '#ffffff'
    })

    var currentDate = new Date();
    var year = PageManager.pcd(currentDate.getFullYear(), 'year');
    var month = PageManager.pcd(currentDate.getMonth(), 'month');

    var calendarDate = new Date(year, month);
    page.calendar.setList(calenderList, true);
    page.calendar.setDate(calendarDate);
 */

Triton.Calendar = function (options) {
    this.init(options);
};

Triton.Calendar.useMonthPicker = false;
Triton.Calendar.setUseMonthPicker = function (use) {
    Triton.Calendar.useMonthPicker = use;
};

Triton.Calendar.VIEW_MODE_MONTH = 1;
Triton.Calendar.VIEW_MODE_WEEK = 2;

Triton.Calendar.DAYS_LABELS = ['일', '월', '화', '수', '목', '금', '토'];
Triton.Calendar.DAYS_WIDTH = ['14.5%', '14.2%', '14.2%', '14.2%', '14.2%', '14.2%', '14.5%'];
Triton.Calendar.DAYS_COLOR = ['#e95050', '', '', '', '', '', '#3291d4'];

Triton.Calendar.prototype = new Triton();
Triton.Calendar.prototype.getCurrentDate = function () {
    return this.date;
};

Triton.Calendar.prototype.init = function (options) {

    var page = this;

    page.viewMode = Lia.pd(Triton.Calendar.VIEW_MODE_MONTH, options, 'viewMode');

    page.onHeaderPrevButtonClick = Lia.pd(function (page) {
        page.movePrevMonth();
    }, options, 'onHeaderPrevButtonClick');
    page.onHeaderNextButtonClick = Lia.pd(function (page) {
        page.moveNextMonth();
    }, options, 'onHeaderNextButtonClick');

    page.onMonthSelected = Lia.pd(function (page, date) {
        page.setDate(date);
    }, options, 'onMonthSelected');

    page.onItemClick = Lia.p(options, 'onItemClick');
    page.weekTimelineHourMode = Lia.p(options, 'weekTimelineHourMode');
    page.weekContentMinHeight = Lia.p(options, 'weekContentMinHeight');
    page.isItemClickable = Lia.p(options, 'isItemClickable');
    page.onDayClick = Lia.p(options, 'onDayClick');
    page.useMonthPicker = Lia.pd(Triton.Calendar.useMonthPicker, options, 'useMonthPicker');

    page.section = new Triton.Section(options);
    page.section.addClass('triton_calendar');

    page.calendarSection = new Triton.Section({
        appendTo: page.section,
        css: {position: 'relative', 'width': '`100%'}
    });

    {
        page.headerSection = new Triton.Section({
            appendTo: page.calendarSection,
            css: {
                'position': 'relative'
            }
        });

        page.headerTitleSection = new Triton.Section({
            appendTo: page.headerSection,
            css: {
                'font-family': 'notokr-medium, NanumGothicBold',
                'background-color': '#084897',
                'color': '#ffffff',
                'font-size': '14px',
                'text-align': 'center',
                'line-height': '44px',
                'height': '44px',
                'position': 'relative',
                'top': 0
            }
        });


        page.headerTitleTextContainerSection = new Triton.Section({
            appendTo: page.headerTitleSection,
            css: {
                width: '280px',
                position: 'relative',
                'margin': '0 auto'
            }
        });


        if (page.useMonthPicker == true) {

            page.headerTitleTextInput = new Triton.TextInput({
                appendTo: page.headerTitleTextContainerSection,
                css: {
                    'position': 'absolute',
                    'bottom': '0',
                    width: '0px',
                    height: '0px',
                    'padding': '0',
                    'margin': '0',
                    'border': '0'
                }
            });

            var datePickerOptions = {
                pattern: 'mm/yyyy',
                openOnFocus: true,
                monthNames: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월']
            };
            page.headerTitleTextInput.getJView().monthpicker(datePickerOptions);
            page.headerTitleTextInput.getJView().bind('monthpicker-click-month', function (e, year) {

                var selectedMonth = page.headerTitleTextInput.getValue();
                page.onMonthSelected(page, Date.parse(selectedMonth));
            });
        }


        page.headerTitleTextSection = new Triton.Section({
            appendTo: page.headerTitleTextContainerSection,
            css: {
                'text-align': 'center',
                'display': 'inline'
            },
            onClick: function () {

                page.headerTitleTextInput.getJView().monthpicker('show');

            }
        });


        new Triton.Image({
            appendTo: page.headerTitleTextContainerSection,
            attr: {'src': '/res/lia/triton/img/img_calendar_left.png'},
            css: {
                'display': 'inline-block',
                'position': 'absolute',
                'cursor': 'pointer',
                'padding': '15px 20px',
                'top': '0',
                'left': '0'
            },
            page: page,
            onClick: function (e) {

                var page = e.data.page;
                page.onHeaderPrevButtonClick(page);
            }
        });

        new Triton.Image({
            appendTo: page.headerTitleTextContainerSection,
            attr: {'src': '/res/lia/triton/img/img_calendar_right.png'},
            css: {
                'display': 'inline-block',
                'position': 'absolute',
                'cursor': 'pointer',
                'padding': '15px 20px',
                'top': '0',
                'right': '0'
            },
            page: page,
            onClick: function (e) {

                var page = e.data.page;
                page.onHeaderNextButtonClick(page);
            }
        });
    }

    {
        page.bodySection = new Triton.Section({
            appendTo: page.calendarSection,
            css: {
                'border-top': '1px solid #e1e1e1',
                'border-left': '1px solid #e1e1e1',
                'box-sizing': 'border-box',
                'overflow': 'auto'
            }
        });
    }

    var headerVisibility = Lia.pd(true, options, 'headerVisibility');
    if (headerVisibility == false) {
        page.setHeaderVisibility(headerVisibility);
    }

    var contentVisibility = Lia.pd(true, options, 'contentVisibility');
    if (contentVisibility == false) {
        page.setContentVisibility(contentVisibility);
    }
};


Triton.Calendar.prototype.setDate = function (date, withoutRender) {
    var page = this;
    page.date = date;

    if (page.useMonthPicker == true) {


        var datePickerOptions = {
            pattern: 'mm/yyyy',
            openOnFocus: true,
            selectedYear: '2019',
            selectedMonth: '02',
            monthNames: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월']
        };
        page.headerTitleTextInput.getJView().monthpicker(datePickerOptions);

        page.headerTitleTextInput.getJView().monthpicker('setWidgetDate', {
            year: date.toString('yyyy'),
            month: date.toString('MM')
        });
    }

    if (withoutRender != true) {
        page.render();
    }
};


Triton.Calendar.prototype.setHeaderVisibility = function (v) {

    var page = this;

    if (v == true) {
        page.headerSection.show();
    } else {
        page.headerSection.hide();
    }
};
Triton.Calendar.prototype.setContentVisibility = function (v) {

    var page = this;

    if (v == true) {
        page.bodySection.show();
    } else {
        page.bodySection.hide();
    }
};


Triton.Calendar.prototype.movePrevMonth = function (withoutRender) {

    var page = this;

    var date = page.date;
    if (date == undefined) {
        date = new Date();
    } else {
        date = date.clone();
    }

    date.addMonths(-1);

    page.setViewMode(Triton.Calendar.VIEW_MODE_MONTH, true);
    page.setDate(date, withoutRender);
};

Triton.Calendar.prototype.moveNextMonth = function (withoutRender) {

    var page = this;

    var date = page.date;
    if (date == undefined) {
        date = new Date();
    } else {
        date = date.clone();
    }

    date.addMonths(1);

    page.setViewMode(Triton.Calendar.VIEW_MODE_MONTH, true);
    page.setDate(date, withoutRender);
};


Triton.Calendar.prototype.movePrevWeek = function (withoutRender) {

    var page = this;

    var date = page.date;
    if (date == undefined) {
        date = new Date();
    } else {
        date = date.clone();
    }

    date.addDays(-7);

    page.setViewMode(Triton.Calendar.VIEW_MODE_WEEK, true);
    page.setDate(date, withoutRender);
};

Triton.Calendar.prototype.moveNextWeek = function (withoutRender) {

    var page = this;

    var date = page.date;
    if (date == undefined) {
        date = new Date();
    } else {
        date = date.clone();
    }

    date.addDays(7);

    page.setViewMode(Triton.Calendar.VIEW_MODE_WEEK, true);
    page.setDate(date, withoutRender);
};


Triton.Calendar.prototype.moveCurrentMonth = function (withoutRender) {
    var page = this;
    page.setViewMode(Triton.Calendar.VIEW_MODE_MONTH, true);

    var currentDate = new Date();
    page.setDate(currentDate, withoutRender);
};

Triton.Calendar.prototype.moveMonth = function (year, month, withoutRender) {
    var page = this;
    page.setViewMode(Triton.Calendar.VIEW_MODE_MONTH, true);

    var currentDate = new Date(year, month - 1, 1);
    page.setDate(currentDate, withoutRender);
};


Triton.Calendar.prototype.setViewMode = function (viewMode, withoutRender) {
    var page = this;
    page.viewMode = viewMode;

    if (withoutRender != true) {
        page.render();
    }
};


Triton.Calendar.prototype.setList = function (list, withoutRender) {
    var page = this;
    page.list = list;

    if (page.list != undefined) {

        page.list.sort(function (item1, item2) {

            var startDate1 = Lia.p(item1, 'start_date');
            var startDate2 = Lia.p(item2, 'start_date');

            if (startDate1 > startDate2) {
                return 1;
            } else {
                return -1;
            }
        });
    }

    if (withoutRender != true) {
        page.render();
    }
};

Triton.Calendar.prototype.render = function () {

    var page = this;
    if (page.viewMode == Triton.Calendar.VIEW_MODE_MONTH) {

        page.renderMonth();

    } else if (page.viewMode == Triton.Calendar.VIEW_MODE_WEEK) {

        page.renderWeek();
    }
};


Triton.Calendar.prototype.renderMonth = function () {

    var page = this;

    // 일단 캘린더 레이아웃 그리기
    var currentDate = new Date();
    currentDate.setHours(0, 0, 0, 0);

    var baseDate = page.date;
    if (baseDate == undefined) {
        baseDate = currentDate;
    }
    page.date = baseDate.clone();

    var month = parseInt(baseDate.toString('MM'));
    var year = parseInt(baseDate.toString('yyyy'));

    var dateYear = year;
    var dateMonth = month - 1;

    var firstDay = new Date(dateYear, dateMonth, 1);
    var lastDay = new Date(dateYear, dateMonth, 1).moveToLastDayOfMonth();

    var lastDayInPrevMonth = new Date(dateYear, dateMonth, 1).addDays(-1);
    var prevMonthLength = Date.getDaysInMonth(lastDayInPrevMonth.getFullYear(), lastDayInPrevMonth.getMonth());

    var monthLength = Date.getDaysInMonth(dateYear, dateMonth);

    var startDate = new Date(dateYear, dateMonth, 1).moveToDayOfWeek(0, -1);
    var dayLength = prevMonthLength - startDate.getDate() + 1 + monthLength;
    var lineCount = Math.ceil(dayLength / 7);
    var endDate = startDate.clone().addDays(lineCount * 7).addMilliseconds(-1);

    page.headerTitleTextSection.html(firstDay.toString('yyyy. MM.'));

    page.bodySection.empty();

    // 요일 생성
    {
        page.dayWeekSection = new Triton.Section({
            appendTo: page.bodySection,
            css: {
                'position': 'relative',
                'overflow': 'auto'
            }
        });

        for (var i = 0, l = Triton.Calendar.DAYS_LABELS.length; i < l; i++) {

            new Triton.Section({
                appendTo: page.dayWeekSection,
                css: {
                    'float': 'left',
                    'border-bottom': '1px solid #e1e1e1',
                    'border-right': '1px solid #e1e1e1',
                    'font-family': 'notokr-medium, NanumGothicBold',
                    'line-height': '30px',
                    'text-align': 'center',
                    'height': '30px',
                    'width': Triton.Calendar.DAYS_WIDTH[i],
                    'color': Triton.Calendar.DAYS_COLOR[i],
                    'font-size': '14px',
                    'box-sizing': 'border-box'
                },
                content: Triton.Calendar.DAYS_LABELS[i]
            });
        }
    }


    page.daysSection = new Triton.Section({
        appendTo: page.bodySection,
        css: {
            'position': 'relative',
            'overflow': 'auto',
            'clear': 'both'
        }
    });

    page.popupSection = new Triton.Section({
        appendTo: page.bodySection,
        css: {
            'position': 'absolute',
            'left': '0',
            'top': '0',
            'right': '0',
            'bottom': '0',
            'z-index': '101'
        },
        page: page,
        onMouseEnter: function (e) {

            var page = e.data.page;
            page.popupSection.empty();
            page.popupSection.hide();

        }
    });
    page.popupSection.hide();


    page.dateListMap = {};

    // 해당 날짜에 몇개의 일정이 있는지 체크
    if (page.list != undefined) {

        for (var k = 0, kl = page.list.length; k < kl; k++) {
            var item = page.list[k];
            item['triton_calendar_index'] = 0;
        }

        for (var k = 0, kl = page.list.length; k < kl; k++) {

            var item = page.list[k];

            var itemStartDate = Date.parse(Lia.p(item, 'start_date'));
            var itemEndDate = Date.parse(Lia.p(item, 'end_date'));

            while (itemStartDate <= itemEndDate) {

                if (!(itemEndDate < startDate || endDate < itemStartDate)) {

                    var itemStartDateString = itemStartDate.toString('yyyy-MM-dd');

                    if (page.dateListMap[itemStartDateString] == undefined) {
                        page.dateListMap[itemStartDateString] = [];
                    }


                    var index = 0;
                    var length = page.dateListMap[itemStartDateString].length;
                    if (length > 0) {
                        index = Lia.p(page.dateListMap, itemStartDateString, length - 1, 'item', 'triton_calendar_index') + 1;
                    }

                    page.dateListMap[itemStartDateString].push({
                        index: index,
                        item: item
                    });

                    if (index > item['triton_calendar_index']) {
                        item['triton_calendar_index'] = index;
                    }
                }

                itemStartDate.addDays(1);
            }

        }
    }

    var moreCount = 3;

    for (var i = 0; i < lineCount; i++) {

        var calendarRowSection = new Triton.Section({
            appendTo: page.daysSection,
            css: {
                'position': 'relative',
                'height': '126px',
                'overflow': 'auto',
                'clear': 'both'
            }
        });

        var weekStartDate = startDate.clone();
        var weekEndDate = startDate.clone().addDays(7).addMilliseconds(-1);

        for (var j = 0; j < 7; j++) {

            var loopDate = startDate.clone();
            startDate.addDays(1);

            var isToday = currentDate.equals(loopDate);
            var inPrevMonth = Date.compare(firstDay, loopDate) > 0;
            var inNextMonth = Date.compare(lastDay, loopDate) < 0;
            var inMonth = (!inPrevMonth && !inNextMonth);

            var currentDateString = loopDate.toString('yyyy-MM-dd');

            var backgroundColor = (isToday) ? '#f2f6fa' : '#ffffff';
            var opacity = inMonth ? 1 : 0.3;

            var calendarDaySectionOptions = {
                appendTo: calendarRowSection,
                css: {
                    'float': 'left',
                    'position': 'relative',
                    'min-height': '126px',
                    'width': Triton.Calendar.DAYS_WIDTH[j],
                    'background-color': backgroundColor,
                    'box-sizing': 'border-box',
                    'border-bottom': '1px solid #e1e1e1',
                    'border-right': '1px solid #e1e1e1'
                },
                page: page,
                date: loopDate
            };


            if (page.onDayClick != undefined) {

                calendarDaySectionOptions['onMouseEnter'] = function (e) {

                    var triton = jQuery(this).getTriton();
                    triton.dayTextSection.css({
                        'text-decoration': 'underline'
                    });
                };

                calendarDaySectionOptions['onMouseLeave'] = function (e) {

                    var triton = jQuery(this).getTriton();
                    triton.dayTextSection.css({
                        'text-decoration': ''
                    });
                };

                calendarDaySectionOptions['onClick'] = function (e) {

                    var date = e.data.date;
                    var page = e.data.page;
                    if (page.onDayClick != undefined) {
                        page.onDayClick.call(page, date);
                    }
                };
            }

            var calendarDaySection = new Triton.Section(calendarDaySectionOptions);
            calendarDaySection.dayTextSection = new Triton.Section({
                appendTo: calendarDaySection,
                content: loopDate.getDate(),
                css: {
                    'opacity': opacity,
                    'font-family': 'notokr-medium, NanumGothicBold',
                    'font-size': '13px',
                    'line-height': '25px',
                    'height': '25px',
                    'color': Triton.Calendar.DAYS_COLOR[j],
                    'text-align': 'right',
                    'padding-right': '5px'
                }
            });


            var maxIndex = 0;
            var listLength = 0;
            var list = page.dateListMap[currentDateString];
            if (list != undefined) {

                listLength = Lia.p(list, 'length');
                for (var k = 0, kl = listLength; k < kl; k++) {

                    var index = Lia.p(list, k, 'index');
                    if (index > maxIndex) {
                        maxIndex = index;
                    }
                }
            }

            if (maxIndex < moreCount) {
                continue;
            }

            {
                new Triton.Section({
                    appendTo: calendarDaySection,
                    css: {
                        'position': 'absolute',
                        'left': '0',
                        'top': '0',
                        'bottom': '0',
                        'right': '0',
                        'z-index': '100'
                    },
                    weekIndex: j,
                    date: loopDate,
                    day: loopDate.getDate(),
                    list: list,
                    page: page,
                    onMouseEnter: function (e) {

                        var weekIndex = e.data.weekIndex;
                        var day = e.data.day;
                        var page = e.data.page;
                        var date = e.data.date;

                        page.popupSection.empty();
                        page.popupSection.show();

                        var thisOffset = jQuery(this).offset();
                        var popupOffset = page.popupSection.offset();
                        var popupHeight = page.popupSection.height();

                        var left = thisOffset.left - popupOffset.left;
                        var top = thisOffset.top - popupOffset.top;

                        var dayPopupSection = new Triton.Section({
                            appendTo: page.popupSection,
                            css: {
                                'position': 'absolute',
                                'left': (left) + 'px',
                                'top': (top - 1) + 'px',
                                'width': Triton.Calendar.DAYS_WIDTH[weekIndex],
                                'box-sizing': 'border-box',
                                'border': '1px solid #777777',
                                'background-color': '#ffffff'
                            },
                            page: page,
                            onMouseEnter: function (e) {
                                e.preventDefault();
                                e.stopPropagation();
                            },
                            onMouseLeave: function (e) {

                                var page = e.data.page;

                                page.popupSection.empty();
                                page.popupSection.hide();
                            }
                        });


                        var dayPopupSectionOptions = {
                            appendTo: dayPopupSection,
                            content: day,
                            css: {
                                'position': 'relative',
                                'font-family': 'notokr-medium, NanumGothicBold',
                                'font-size': '13px',
                                'line-height': '25px',
                                'height': '28px',
                                'color': Triton.Calendar.DAYS_COLOR[weekIndex],
                                'text-align': 'right',
                                'padding-right': '5px'
                            },
                            page: page,
                            date: date
                        };

                        if (page.onDayClick != undefined) {

                            dayPopupSectionOptions['onMouseEnter'] = function (e) {


                                jQuery(this).css({
                                    'text-decoration': 'underline'
                                });
                            };

                            dayPopupSectionOptions['onMouseLeave'] = function (e) {


                                jQuery(this).css({
                                    'text-decoration': ''
                                });
                            };

                            dayPopupSectionOptions['onClick'] = function (e) {

                                var date = e.data.date;
                                var page = e.data.page;
                                if (page.onDayClick != undefined) {
                                    page.onDayClick.call(page, date);
                                }
                            };
                        }

                        new Triton.Section(dayPopupSectionOptions);


                        var list = e.data.list;
                        var currentIndex = 0;

                        for (var i = 0, l = list.length; i < l; i++) {

                            var item = Lia.p(list, i, 'item');

                            // 더미 데이터 설정
                            var index = Lia.p(item, 'triton_calendar_index');
                            if (currentIndex < index) {

                                for (var i2 = currentIndex, l2 = index; i2 < l2; i2++) {

                                    new Triton.Section({
                                        appendTo: dayPopupSection,
                                        css: {
                                            'font-family': 'notokr-regular, NanumGothic',
                                            'font-size': '13px',
                                            'position': 'relative',
                                            'top': 0,
                                            'left': 0,
                                            'height': '22px',
                                            'margin-bottom': '2px',
                                            'padding-left': '10px',
                                            'padding-right': '10px',
                                            'line-height': '22px',
                                            'box-sizing': 'border-box',
                                            'text-overflow': 'ellipsis',
                                            '-o-text-overflow': 'ellipsis',
                                            'overflow': 'hidden',
                                            'white-space': 'nowrap',
                                            'word-wrap': 'normal !important'
                                        }
                                    });
                                }
                            }

                            currentIndex = index + 1;

                            var backgroundColor = item['background_color'];
                            var color = item['color'];
                            var title = item['title'];

                            var options = {
                                appendTo: dayPopupSection,
                                css: {
                                    'font-family': 'notokr-regular, NanumGothic',
                                    'font-size': '13px',
                                    'position': 'relative',
                                    'top': 0,
                                    'left': 0,
                                    'height': '22px',
                                    'margin-bottom': (i != l - 1) ? '2px' : '',
                                    'padding-left': '10px',
                                    'padding-right': '10px',
                                    'line-height': '22px',
                                    'box-sizing': 'border-box',
                                    'text-overflow': 'ellipsis',
                                    '-o-text-overflow': 'ellipsis',
                                    'overflow': 'hidden',
                                    'white-space': 'nowrap',
                                    'word-wrap': 'normal !important',
                                    'background-color': backgroundColor,
                                    'color': color
                                },
                                content: title,
                                page: page,
                                item: item
                            };


                            var clickable = false;
                            if (page.isItemClickable != undefined && page.onItemClick != undefined) {
                                clickable = page.isItemClickable.call(page, item);

                                if (clickable == true) {


                                    options['css']['cursor'] = 'pointer';
                                    options['onMouseEnter'] = function (e) {

                                        jQuery(this).css({
                                            'text-decoration': 'underline'
                                        });
                                    };
                                    options['onMouseLeave'] = function (e) {

                                        jQuery(this).css({
                                            'text-decoration': ''
                                        });
                                    };
                                    options['onClick'] = function (e) {

                                        e.preventDefault();
                                        e.stopPropagation();

                                        var page = e.data.page;
                                        var item = e.data.item;

                                        if (page.onItemClick != undefined) {
                                            page.onItemClick.call(page, item);
                                        }
                                    }
                                }
                            }


                            new Triton.Section(options);
                        }


                        var dayPopupHeight = dayPopupSection.height();
                        if (top + dayPopupHeight > popupHeight) {

                            dayPopupSection.css({

                                'top': (popupHeight - dayPopupHeight) + 'px'
                            });
                        }

                    }
                });
            }

            // 더보기 관련 처리
            var options = {
                appendTo: calendarDaySection,
                css: {
                    'font-family': 'notokr-regular, NanumGothic',
                    'font-size': '13px',
                    'position': 'absolute',
                    'right': '0',
                    'bottom': '2px',
                    'height': '22px',
                    'line-height': '22px',
                    'color': '#777777',
                    'cursor': 'pointer',
                    'box-sizing': 'border-box',
                    'display': 'block',
                    'text-align': 'right',
                    'overflow': 'hidden',
                    'padding-right': '5px'
                },
                content: '+ ' + (maxIndex + 1 - moreCount) + '건 더보기'
            };

            new Triton.Section(options);
        }


        if (page.list != undefined) {

            for (var i3 = 0, l3 = page.list.length; i3 < l3; i3++) {

                var item = page.list[i3];

                var itemStartDate = Date.parse(Lia.p(item, 'start_date').substr(0, 10));
                var itemEndDate = Date.parse(Lia.p(item, 'end_date').substr(0, 10));

                // 바깥에 걸치는게 아니면
                if (!(itemEndDate < weekStartDate || weekEndDate < itemStartDate)) {

                    var index = item['triton_calendar_index'];

                    var started = true;
                    if (itemStartDate < weekStartDate) {
                        itemStartDate = weekStartDate;
                        started = false;
                    }

                    var ended = true;
                    if (weekEndDate < itemEndDate) {
                        itemEndDate = weekEndDate;
                        ended = false;
                    }

                    if (index >= moreCount) {
                        continue;
                    }

                    var startIndex = (itemStartDate - weekStartDate) / 86400000;
                    var endIndex = startIndex + (itemEndDate - itemStartDate) / 86400000;

                    var left = 0;
                    for (var k = 0; k < startIndex; k++) {
                        left += parseFloat(Triton.Calendar.DAYS_WIDTH[k]);
                    }
                    if (started == true) {
                        left += 0.1;
                    }

                    var width = 0;
                    for (var k = startIndex; k <= endIndex; k++) {
                        width += parseFloat(Triton.Calendar.DAYS_WIDTH[k]);
                    }
                    if (started == true) {
                        width -= 0.1;
                    }
                    if (ended == true) {
                        width -= 0.1;
                    }

                    var backgroundColor = item['background_color'];
                    var color = item['color'];
                    var title = item['title'];

                    var options = {
                        appendTo: calendarRowSection,
                        css: {
                            'font-family': 'notokr-regular, NanumGothic',
                            'font-size': '13px',
                            'position': 'absolute',
                            'left': left + '%',
                            'width': width + '%',
                            'top': (28 + index * 24) + 'px',
                            'height': '22px',
                            'padding-left': '10px',
                            'padding-right': '10px',
                            'line-height': '22px',
                            'box-sizing': 'border-box',
                            'border-top-left-radius': started ? '5px' : '',
                            'border-bottom-left-radius': started ? '5px' : '',
                            'border-top-right-radius': ended ? '5px' : '',
                            'border-bottom-right-radius': ended ? '5px' : '',
                            'text-overflow': 'ellipsis',
                            '-o-text-overflow': 'ellipsis',
                            'overflow': 'hidden',
                            'white-space': 'nowrap',
                            'word-wrap': 'normal !important',
                            'background-color': backgroundColor,
                            'color': color
                        },
                        content: title,
                        page: page,
                        item: item
                    };

                    var viewList = item['triton_calendar_view_list'];
                    if (viewList == undefined) {
                        viewList = item['triton_calendar_view_list'] = [];
                    }

                    var clickable = false;
                    if (page.isItemClickable != undefined && page.onItemClick != undefined) {
                        clickable = page.isItemClickable.call(page, item);

                        if (clickable == true) {

                            options['viewList'] = viewList;
                            options['css']['cursor'] = 'pointer';
                            options['onMouseEnter'] = function (e) {

                                var page = e.data.page;
                                var item = e.data.item;
                                var viewList = e.data.viewList;

                                for (var i = 0, l = viewList.length; i < l; i++) {

                                    var view = viewList[i];
                                    view.css({
                                        'text-decoration': 'underline'
                                    });
                                }
                            };
                            options['onMouseLeave'] = function (e) {

                                var page = e.data.page;
                                var item = e.data.item;
                                var viewList = e.data.viewList;

                                for (var i = 0, l = viewList.length; i < l; i++) {

                                    var view = viewList[i];
                                    view.css({
                                        'text-decoration': ''
                                    });
                                }
                            };
                            options['onClick'] = function (e) {

                                e.preventDefault();
                                e.stopPropagation();

                                var page = e.data.page;
                                var item = e.data.item;
                                if (page.onItemClick != undefined) {
                                    page.onItemClick.call(page, item);
                                }
                            }
                        }
                    }

                    viewList.push(new Triton.Section(options));
                }

            }
        }

    }
};


Triton.Calendar.prototype.renderWeek = function () {

    var page = this;

    // 일단 캘린더 레이아웃 그리기
    var currentDate = new Date();
    currentDate.setHours(0, 0, 0, 0);

    var baseDate = page.date;
    if (baseDate == undefined) {
        baseDate = currentDate;
    }

    baseDate.setHours(0, 0, 0, 0);
    page.date = baseDate.clone();

    var weekStartDate = baseDate.clone().addDays(-1 * baseDate.getDay());
    var weekEndDate = weekStartDate.clone().addDays(7).addMilliseconds(-1);

    var headerString = '';
    var firstHeaderString = weekStartDate.toString('yyyy. MM. dd.');
    var lastHeaderString = weekEndDate.toString('yyyy. MM. dd.');
    if (firstHeaderString != lastHeaderString) {
        headerString = firstHeaderString + ' ~ ' + lastHeaderString;
    } else {
        headerString = firstHeaderString;
    }

    page.headerTitleTextSection.html(headerString);

    page.bodySection.empty();

    // 요일 생성
    {
        page.dayWeekSection = new Triton.Section({
            appendTo: page.bodySection,
            css: {
                'position': 'relative',
                'overflow': 'auto'
            }
        });

        var forStartDate = weekStartDate.clone();
        for (var i = 0, l = Triton.Calendar.DAYS_LABELS.length; i < l; i++) {

            var dayWeekItemSection = new Triton.Section({
                appendTo: page.dayWeekSection,
                css: {
                    'float': 'left',
                    'border-bottom': '1px solid #e1e1e1',
                    'border-right': '1px solid #e1e1e1',
                    'font-family': 'notokr-medium, NanumGothicBold',
                    'text-align': 'center',
                    'width': Triton.Calendar.DAYS_WIDTH[i],
                    'color': Triton.Calendar.DAYS_COLOR[i],
                    'font-size': '14px',
                    'box-sizing': 'border-box',
                    'padding-top': '10px',
                    'padding-bottom': '10px'
                },
                content: Triton.Calendar.DAYS_LABELS[i]
            });

            new Triton.Section({
                css: {
                    'font-size': '18px',
                    'margin-top': '5px'
                },
                appendTo: dayWeekItemSection,
                content: forStartDate.toString('MM. dd.')
            });

            forStartDate = forStartDate.addDays(1);
        }
    }

    page.daysSection = new Triton.Section({
        appendTo: page.bodySection,
        css: {
            'position': 'relative',
            'overflow': 'auto',
            'clear': 'both'
        }
    });


    page.dateListMap = {};

    // 해당 날짜에 몇개의 일정이 있는지 체크
    if (page.list != undefined) {

        for (var k = 0, kl = page.list.length; k < kl; k++) {
            var item = page.list[k];
            item['triton_calendar_index'] = 0;
        }

        if ( page.weekTimelineHourMode == true ) {

            page.hourMap = {};

            for (var k = 0, kl = page.list.length; k < kl; k++) {

                var item = page.list[k];

                var itemStartDate = Date.parse(Lia.p(item, 'start_date'));
                var itemEndDate = Date.parse(Lia.p(item, 'end_date'));

                while (itemStartDate <= itemEndDate) {

                    if (!(itemEndDate < weekStartDate || weekEndDate < itemStartDate)) {

                        var hour = parseInt(itemStartDate.toString('HH'));
                        if (page.hourMap[hour] == undefined) {
                            page.hourMap[hour] = 0;
                        }

                        page.hourMap[hour]++;
                    }

                    itemStartDate.addDays(1);
                }
            }

            var baseIndex = 0;

            for ( var i = 1; i <= 12; ++i ) {

                if ( page.hourMap[i] != undefined ) {

                    var prevIndex = baseIndex;
                    baseIndex+=page.hourMap[i];
                    page.hourMap[i] = prevIndex;
                }
            }

            for (var k = 0, kl = page.list.length; k < kl; k++) {

                var item = page.list[k];

                var itemStartDate = Date.parse(Lia.p(item, 'start_date'));
                var itemEndDate = Date.parse(Lia.p(item, 'end_date'));

                while (itemStartDate <= itemEndDate) {

                    if (!(itemEndDate < weekStartDate || weekEndDate < itemStartDate)) {

                        var hour = parseInt(itemStartDate.toString('HH'));
                        var itemStartDateString = itemStartDate.toString('yyyy-MM-dd');
                        if (page.dateListMap[itemStartDateString] == undefined) {
                            page.dateListMap[itemStartDateString] = [];
                        }

                        var index =  page.hourMap[hour];
                        var length = page.dateListMap[itemStartDateString].length;
                        if (length > 0) {

                            var nextIndex = Lia.p(page.dateListMap, itemStartDateString, length - 1, 'item', 'triton_calendar_index');
                            if ( nextIndex != undefined ) {
                                index = nextIndex  + 1;
                            }
                        }

                        page.dateListMap[itemStartDateString].push({
                            index: index,
                            item: item
                        });

                        if (index > item['triton_calendar_index']) {
                            item['triton_calendar_index'] = index;
                        }
                    }

                    itemStartDate.addDays(1);
                }

            }

        } else {

            for (var k = 0, kl = page.list.length; k < kl; k++) {

                var item = page.list[k];

                var itemStartDate = Date.parse(Lia.p(item, 'start_date'));
                var itemEndDate = Date.parse(Lia.p(item, 'end_date'));

                while (itemStartDate <= itemEndDate) {

                    if (!(itemEndDate < weekStartDate || weekEndDate < itemStartDate)) {

                        var itemStartDateString = itemStartDate.toString('yyyy-MM-dd');
                        if (page.dateListMap[itemStartDateString] == undefined) {
                            page.dateListMap[itemStartDateString] = [];
                        }

                        var index = 0;
                        var length = page.dateListMap[itemStartDateString].length;
                        if (length > 0) {
                            index = Lia.p(page.dateListMap, itemStartDateString, length - 1, 'item', 'triton_calendar_index') + 1;
                        }

                        page.dateListMap[itemStartDateString].push({
                            index: index,
                            item: item
                        });

                        if (index > item['triton_calendar_index']) {
                            item['triton_calendar_index'] = index;
                        }
                    }

                    itemStartDate.addDays(1);
                }

            }

        }


    }

    var calendarRowSection = new Triton.Section({
        appendTo: page.daysSection,
        css: {
            'position': 'relative',
            'overflow': 'auto',
            'clear': 'both'
        }
    });

    var forStartDate = weekStartDate.clone();
    var forEndDate = weekEndDate.clone();

    var maxHeight = 0;
    var minHeight = Lia.pd(2 + 44 * 2 + 2, page.weekContentMinHeight);

    for (var i2 = 0; i2 < 7; i2++) {

        // 표 라인
        var calendarDaySectionOptions = {
            appendTo: calendarRowSection,
            css: {
                'float': 'left',
                'position': 'relative',
                'min-height': minHeight + 'px',
                'width': Triton.Calendar.DAYS_WIDTH[i2],
                'box-sizing': 'border-box',
                'border-bottom': '1px solid #e1e1e1',
                'border-right': '1px solid #e1e1e1'
            },
            page: page,
            date: loopDate
        };

        new Triton.Section(calendarDaySectionOptions);
    }


    for (var i2 = 0; i2 < 7; i2++) {

        var loopDate = forStartDate.clone();
        forStartDate.addDays(1);

        if (page.list != undefined) {

            for (var i3 = 0, l3 = page.list.length; i3 < l3; i3++) {

                var item = page.list[i3];

                var itemStartDate = Date.parse(Lia.p(item, 'start_date').substr(0, 10));
                var itemEndDate = Date.parse(Lia.p(item, 'end_date').substr(0, 10));

                // 바깥에 걸치는게 아니면
                if (!(itemEndDate < weekStartDate || weekEndDate < itemStartDate)) {

                    var index = item['triton_calendar_index'];

                    var started = true;
                    if (itemStartDate < weekStartDate) {
                        itemStartDate = weekStartDate;
                        started = false;
                    }

                    var ended = true;
                    if (weekEndDate < itemEndDate) {
                        itemEndDate = weekEndDate;
                        ended = false;
                    }

                    var startIndex = (itemStartDate - weekStartDate) / 86400000;
                    var endIndex = startIndex + (itemEndDate - itemStartDate) / 86400000;

                    var left = 0;
                    for (var k = 0; k < startIndex; k++) {
                        left += parseFloat(Triton.Calendar.DAYS_WIDTH[k]);
                    }

                    if (started == true) {
                        left += 0.1;
                    }

                    var width = 0;
                    for (var k = startIndex; k <= endIndex; k++) {
                        width += parseFloat(Triton.Calendar.DAYS_WIDTH[k]);
                    }
                    if (started == true) {
                        width -= 0.1;
                    }
                    if (ended == true) {
                        width -= 0.1;
                    }

                    var backgroundColor = item['background_color'];
                    var color = item['color'];
                    var title = item['title'];

                    var startDateObject = Date.parse(Lia.p(item, 'start_date'));
                    var endDateObject = Date.parse(Lia.p(item, 'end_date'));

                    var startDateString = startDateObject.toString('MM-dd');
                    var endDateString = endDateObject.toString('MM-dd');

                    var startDateTimeString = startDateObject.toString('HH:ss');
                    var endDateTimeString = endDateObject.toString('HH:ss');

                    var timeString = item['time'];

                    if ( String.isBlank(timeString) ) {

                        if (startDateString == endDateString) {
                            timeString = startDateTimeString + ' ~ ' + endDateTimeString;
                        } else {
                            timeString = startDateString + ' ~ ' + endDateString;
                        }
                    }

                    var options = {
                        appendTo: calendarRowSection,
                        css: {
                            'position': 'absolute',
                            'left': left + '%',
                            'width': width + '%',
                            'top': (2 + (index) * 46) + 'px',
                            'height': '44px',
                            'padding-left': '10px',
                            'padding-right': '10px',
                            'line-height': '22px',
                            'box-sizing': 'border-box',
                            'border-top-left-radius': started ? '5px' : '',
                            'border-bottom-left-radius': started ? '5px' : '',
                            'border-top-right-radius': ended ? '5px' : '',
                            'border-bottom-right-radius': ended ? '5px' : '',
                            'text-overflow': 'ellipsis',
                            '-o-text-overflow': 'ellipsis',
                            'overflow': 'hidden',
                            'white-space': 'nowrap',
                            'word-wrap': 'normal !important',
                            'background-color': backgroundColor,
                            'color': color
                        },
                        content: timeString + '<br/>' + title,
                        page: page,
                        item: item
                    };


                    var nowHeight = (2 + (index + 1) * 46);
                    if (maxHeight < nowHeight) {
                        maxHeight = nowHeight;
                    }

                    var viewList = item['triton_calendar_view_list'];
                    if (viewList == undefined) {
                        viewList = item['triton_calendar_view_list'] = [];
                    }

                    var clickable = false;
                    if (page.isItemClickable != undefined && page.onItemClick != undefined) {
                        clickable = page.isItemClickable.call(page, item);

                        if (clickable == true) {

                            options['viewList'] = viewList;
                            options['css']['cursor'] = 'pointer';
                            options['onMouseEnter'] = function (e) {

                                var page = e.data.page;
                                var item = e.data.item;
                                var viewList = e.data.viewList;

                                for (var i = 0, l = viewList.length; i < l; i++) {

                                    var view = viewList[i];
                                    view.css({
                                        'text-decoration': 'underline'
                                    });
                                }
                            };
                            options['onMouseLeave'] = function (e) {

                                var page = e.data.page;
                                var item = e.data.item;
                                var viewList = e.data.viewList;

                                for (var i = 0, l = viewList.length; i < l; i++) {

                                    var view = viewList[i];
                                    view.css({
                                        'text-decoration': ''
                                    });
                                }
                            };
                            options['onClick'] = function (e) {

                                e.preventDefault();
                                e.stopPropagation();

                                var page = e.data.page;
                                var item = e.data.item;
                                if (page.onItemClick != undefined) {
                                    page.onItemClick.call(page, item);
                                }
                            }
                        }
                    }

                    viewList.push(new Triton.Section(options));
                }


                if (nowHeight > minHeight) {

                    var jChildren = calendarRowSection.children();

                    for (var i2 = 0; i2 < 7; i2++) {

                        jChildren.eq(i2).css({
                            'height': maxHeight + 'px'
                        });
                    }
                }


            }
        }

    }
};




var CodeEditor = Triton.CodeEditor = function (options) {
    this.init(options);
};
Triton.CodeEditor.prototype = new Triton();
Triton.CodeEditor.prototype.init = function (options) {

    options = Triton.combineOptions(options, {
        theme: Triton.CodeEditor.Theme.Normal
    });

    this.jView = Triton.createJQueryElement(Triton.CodeEditor.HTML);
    Triton.applyOptions(this.jView, options);

    var theme = options['theme'];

    this.value = Lia.p(options, 'value');
    this.codeEditorOptions = Triton.combineOptions(options['codeEditorOptions'], theme['codeEditorOptions']);
    this.jValue = Triton.findTritonValue(this.jView);

    this.initTriton(options);
};
Triton.CodeEditor.prototype.initCodeEditor = function () {

    this.jValue.initCodeEditor(this.codeEditorOptions);

    if (this.value != undefined) {
        this.jValue.codeEditorVal(this.value);
    }

    return this;
};
Triton.CodeEditor.prototype.setValue = function (value) {
    this.jValue.codeEditorVal(value);
    return this;
};
Triton.CodeEditor.prototype.getValue = function () {
    return this.jValue.codeEditorVal();
};

Triton.CodeEditor.HTML = '<iframe title="triton code editor" class="triton_code_editor triton_content triton_value"></iframe>';
Triton.CodeEditor.Theme = {

    Normal: {

        attr: {

            frameborder: "0",
            scrolling: "no",
            allowfullscreen: 'true',
            allowTransparency: "true"
        },

        css: {

            width: '100%',
            'height': '300px',
            'overflow': 'hidden'
        },

        codeEditorOptions: {
            'height': '300px'
        }
    }
};


Triton.CodeEditor.create = function (options) {
    return new Triton.CodeEditor(options).getJView();
};
Triton.CodeEditor.append = function (j, options) {
    var jView = Triton.CodeEditor.create(options);
    j.append(jView);
    return Triton.findTritonContent(jView);
};
Triton.CodeEditor.getValue = function (j) {
    var jValue = Triton.findTritonValue(j);
    return jValue.codeEditorVal();
};






















var Searcher = Triton.Searcher;
var Image = Triton.Image;
var TextInput = Triton.TextInput;
var TextArea = Triton.TextArea;
var ComboBox = Triton.ComboBox;
var DatetimePicker = Triton.DatetimePicker;
var DatetimePeriodPicker = Triton.DatetimePeriodPicker;
var Uploader = Triton.Uploader;
var ThumbnailUploader = Triton.ThumbnailUploader;
var ListTable = Triton.ListTable;
var DetailTable = Triton.DetailTable;
var SeparateTable = Triton.SeparateTable;
var Title = Triton.Title;
var SubTitle = Triton.SubTitle;
var Container = Triton.Container;
var Section = Triton.Section;
var LeftRightSection = Triton.LeftRightSection;
var ButtonSection = Triton.ButtonSection;
var Panel = Triton.Panel;
var FoldablePanel = Triton.FoldablePanel;
var Label = Triton.Label;
var Span = Triton.Span;
var FlagSpan = Triton.FlagSpan;
var MoreSection = Triton.MoreSection;
var KeyValueSection = Triton.KeyValueSection;
var AttachmentItem = Triton.AttachmentItem;
var FlatButton = Triton.FlatButton;
var CheckBox = Triton.CheckBox;
var RadioButton = Triton.RadioButton;
var RadioButtonSection = Triton.RadioButtonSection;
var FlagRadioButton = Triton.FlagRadioButton;
var FlagRadioButtonSection = Triton.FlagRadioButtonSection;
var TextEditor = Triton.TextEditor;
var Pager = Triton.Pager;
var PhoneNumberInput = Triton.PhoneNumberInput;
var EmailInput = Triton.EmailInput;
var AddressInput = Triton.AddressInput;
var ContextMenu = Triton.ContextMenu;
var SeparateSection = Triton.SeparateSection;
var Calendar = Triton.Calendar;






// var CustomTriton = function (options) {
//     this.init(options);
// };
//
// CustomTriton.prototype = new Triton();
//
// CustomTriton.prototype.init = function (options) {
//
//     var page = this;
//
//     var section = new Triton.Section({});
//
//     this.jView = section.get();
//     this.initTriton(options);
// };
