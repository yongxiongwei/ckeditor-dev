/* bender-tags: balloontoolbar */
/* bender-ckeditor-plugins: balloontoolbar, richcombo, toolbar, button, stylescombo */


( function() {
	'use strict';

	bender.editor = {};

	var tests = {
		'test stylescombo state': function() {
			var editor = this.editor,
				panel;

			panel = new CKEDITOR.ui.balloonToolbar( this.editor, {
				width: 'auto',
				height: 40
			} );

			panel.addItems( {
					Styles: editor.ui.create( 'Styles' )
				} );
			panel.attach( editor.editable() );
			assert.isNotNull( panel._view.parts.content.findOne( '.cke_combo_off' ) );
			assert.isTrue( panel._items.Styles.getState() === 2 );
		}
	};

	bender.test( tests );
} )();
