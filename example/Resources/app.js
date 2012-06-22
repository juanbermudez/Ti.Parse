/* 
 * PARSE SAMPLE CODE
 * from: https://parse.com/apps/quickstart?rf=js#js/blank
 */
var _ = require('lib/underscore');
require('lib/ti.parse');
//Get your  Keys here: https://www.parse.com/apps/quickstart#js/blank
Parse.initialize("XXXXXX", "XXXXXXXX");


var loginWin = Ti.UI.createWindow({
	backgroundColor: '#0076C4'
})

var parseText = Ti.UI.createLabel({
	font:{fontSize:40},
	color:"#FFF",
	top:20,
	text:"Ti.Parse",
	shadowColor:'#04589f',
	shadowOffeset:{x:0, y:-1}
})
loginWin.add(parseText)
var usernameField = Ti.UI.createTextField({
	backgroundColor: '#FFFFFF',
	borderRadius: 5,
	borderWidth:1,
	borderColor:'#CCC',
	font: {fontSize:26},
	height:60,
	width:280,
	top:90,
	hintText:'Username'
})
loginWin.add(usernameField);


var passField = Ti.UI.createTextField({
	backgroundColor: '#FFFFFF',
	borderRadius: 5,
	borderWidth:1,
	font: {fontSize:26},
	borderColor:'#CCC',
	height:60,
	width:280,
	top:170,
	hintText:'Password',
	passwordMask:true
});
loginWin.add(passField);



passField.addEventListener('return', onLogin);

function onLogin(e){
	Parse.User.logIn(usernameField.value, passField.value, {
		  success: function(user) {
		    // Show the tabs
		    init();
		  },
		  error: function(user, error) {
		    // The login failed. Check error to see why.
		    alert(error.message)
		  }
	});
}

loginWin.open();
//Set Focus on the usernamee field to skip making a login btn.
usernameField.focus();


function init(){

	// this sets the background color of the master UIView (when there are no windows/tab groups on it)
	Titanium.UI.setBackgroundColor('#000');
	
	// create tab group
	var tabGroup = Titanium.UI.createTabGroup();
	
	
	//
	// create base UI tab and root window
	//
	var win1 = Titanium.UI.createWindow({  
	    title:'Tab 1',
	    backgroundColor:'#fff'
	});
	var tab1 = Titanium.UI.createTab({  
	    icon:'KS_nav_views.png',
	    title:'Tab 1',
	    window:win1
	});

	var label1 = Titanium.UI.createLabel({
		color:'#999',
		text:Parse.User.current().attributes.email,
		font:{fontSize:20,fontFamily:'Helvetica Neue'},
		textAlign:'center',
		width:'auto'
	});
	
	win1.add(label1);
	
	//
	// create controls tab and root window
	//
	var win2 = Titanium.UI.createWindow({  
	    title:'Tab 2',
	    backgroundColor:'#fff',
	    url:'win2.js'
	});
	var tab2 = Titanium.UI.createTab({  
	    icon:'KS_nav_ui.png',
	    title:'Tab 2',
	    window:win2
	});
	
	
	
	win2.add(label2);
	
	
	
	//
	//  add tabs
	//
	tabGroup.addTab(tab1);  
	tabGroup.addTab(tab2);  
	
	
	// open tab group
	tabGroup.open();
}
