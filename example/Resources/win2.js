var win = Ti.UI.currentWindow;

win.backgroundColor = '#ff0000';
var _ = require('lib/underscore');
require('lib/ti.parse');

Parse.initialize("XXXXXXX", "XXXXXXXXX");


//Doing the same thinkg in a different context, using
//Parse.User to access the logged in user data. 
var label2 = Titanium.UI.createLabel({
	color:'#999',
	text:Parse.User.current().attributes.email,
	font:{fontSize:20,fontFamily:'Helvetica Neue'},
	textAlign:'center',
	width:'auto'
});
win.add(label2);
