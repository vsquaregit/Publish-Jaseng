/**
 * @license Copyright (c) 2003-2014, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.html or http://ckeditor.com/license
 */

CKEDITOR.editorConfig = function( config ) {
	// Define changes to default configuration here.
	// For the complete reference:
	// http://docs.ckeditor.com/#!/api/CKEDITOR.config

	config.extraPlugins = 'panelbutton';
	config.extraPlugins = 'colorbutton';
	// The toolbar groups arrangement, optimized for two toolbar rows.
	config.toolbarGroups = [
		{ name: 'colors', groups: ['textcolor', 'bgcolor']},
		{ name: 'basicstyles', groups: [ 'basicstyles', 'cleanup' ] },
		{ name: 'paragraph',   groups: [ 'list', 'indent', 'blocks', 'align', 'bidi' ] },
		{ name: 'styles' },
		{ name: 'clipboard',   groups: [ 'clipboard', 'undo' ] },
		{ name: 'editing',     groups: [ 'find', 'selection', 'spellchecker' ] },
		{ name: 'links' },
		{ name: 'insert' },
		{ name: 'forms' },
		{ name: 'tools' },
		{ name: 'document',	   groups: [ 'mode', 'document', 'doctools' ] },
		{ name: 'others' }
		//'/',
		//{ name: 'about' }
	];

	// Remove some buttons, provided by the standard plugins, which we don't
	// need to have in the Standard(s) toolbar.
	config.removeButtons = 'Underline,Subscript,Superscript';
	config.removePlugins = 'elementspath';
	// Se the most common block elements.
	config.format_tags = 'p;h1;h2;h3;pre';

	// Make dialogs simpler.
	config.removeDialogTabs = 'image:advanced;link:advanced';

	config.font_defaultLabel = 'NanumGothic';
	config.font_names = 'NanumGothic/NanumGothic;Gulim/Gulim;Dotum/Dotum;Batang/Batang;Gungsuh/Gungsuh;Arial/Arial;Tahoma/Tahoma;Verdana/Verdana';
	config.fontSize_defaultLabel = '12px';
	config.fontSize_sizes = '8/8px;9/9px;10/10px;11/11px;12/12px;14/14px;16/16px;18/18px;20/20px;22/22px;24/24px;26/26px;28/28px;36/36px;48/48px;';
	config.language = "ko";
	config.resize_enabled = false;
	config.enterMode = CKEDITOR.ENTER_P;
	config.shiftEnterMode = CKEDITOR.ENTER_P;
	config.startupFocus = false;
	config.uiColor = '#ffffff';
};
