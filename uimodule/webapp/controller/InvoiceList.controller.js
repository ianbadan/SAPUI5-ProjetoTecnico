sap.ui.define([
	"sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator",
    "sap/m/MessageToast"
], function( Controller, JSONModel, Filter, FilterOperator, MessageToast) {
	"use strict";

	return Controller.extend("com.ianbadan.BGRecrutamento.controller.InvoiceList", {


        onSearch: function (oEvent) {
            // add filter for search
            let aFilters = [];
            let sQuery = oEvent.getSource().getValue();
            if (sQuery && sQuery.length > 0) {
                let filter = new Filter("title", FilterOperator.Contains, sQuery);
                aFilters.push(filter);
            }

            // update list binding
            let oList = this.byId("idTable");
            var oBinding = oList.getBinding("items");
            oBinding.filter(aFilters, "Application");
        },

        onCompletadoSelect: function(oEvent){
            let isChecked = oEvent.getParameter("selected");
            let oObject = oEvent.getSource().getBindingContext().getObject();
            MessageToast.show("Objeto: " + JSON.stringify(oObject));
        },

        onButtonDetalhes: function(oEvent){
            let sSelectedItem = oEvent.getSource().getBindingContext().getPath().substring(1);
            this.getOwnerComponent().getRouter().navTo("Details",{
                invoicePath:sSelectedItem
            });
        } 
	});
});