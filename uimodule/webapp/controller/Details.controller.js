sap.ui.define([
	"sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/core/routing/History",
	"sap/ui/model/json/JSONModel",
	"sap/ui/dom/jquery/getSelectedText",

], function(Controller,
	MessageToast,
	History,
	JSONModel,
	getSelectedText)
 {
	"use strict";

	return Controller.extend("com.ianbadan.BGRecrutamento.controller.Details", {

        onInit: function () {
			this.getOwnerComponent().getRouter().getRoute("Details").attachPatternMatched(this._onObjectMatched, this);
		},
		_onObjectMatched: function (oEvent) {
            let sInvoice = oEvent.getParameter("arguments").invoicePath;
            this.getView().bindElement("/" + sInvoice);
		},
        onNavBack: function(){
            let oHistory = History.getInstance();
            let sPreviousHash = oHistory.getPreviousHash();

            if(sPreviousHash !== undefined){
                window.history.go(-1);
            } else{
                let oRouter = this.getOwnerComponent().getRouter();
                oRouter.navTo("app", {}, true);
            }
        }
	});
});