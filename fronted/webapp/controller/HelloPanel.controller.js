sap.ui.define([
	"jquery.sap.global",
	"sap/ui/core/mvc/Controller",
	"sap/ui/core/UIComponent",
	"sap/ui/model/json/JSONModel",
	"sap/m/MessageToast"
	
	
], function (Jquery,Controller, MessageToast) {
	"use strict";

	return Controller.extend("sap.ui.demo.walkthrough.controller.HelloPanel", {

		onShowHello : function () {
			// read msg from i18n model
			var oBundle = this.getView().getModel("i18n").getResourceBundle();
			var sRecipient = this.getView().getModel().getProperty("/recipient/name");
			var sMsg = oBundle.getText("helloMsg", [sRecipient]);

			// show message
			MessageToast.show(sMsg);
		},

		onOpenDialog : function () {
			this.getOwnerComponent().openHelloDialog();
		},

		//Tiles Functions
		presscreateNewAccount : function(evt) {
		
			// show message
			MessageToast.show("Create New Account");
			//var oRouter = UIComponent.getRouterFor(this);
			//oRouter.navTo("employeeList");
		},

		onPressaccountInfoPage : function(evt) {
			var oRouter = UIComponent.getRouterFor(this);
			oRouter.navTo("accountInfoPage");
		},

		onPresstrialAccountPage : function(evt) {
			var oRouter = UIComponent.getRouterFor(this);
			oRouter.navTo("trialAccountPage");
		},
		press : function(evt) {
			MessageToast.show("The GenericTile is pressed.");
		}
	
	});

});