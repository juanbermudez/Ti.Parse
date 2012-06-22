var win = Ti.UI.currentWindow;

win.backgroundColor = '#ff0000';
var _ = require('lib/underscore');
require('lib/ti.parse');

Parse.initialize("kmqAG45Quhp8DX2lTMK0Pa70nUOTEncfPnVwuq0R", "4l3NO63UAsNkssxMt5uVYF7paIsZckWy5hIDFkVR");


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
