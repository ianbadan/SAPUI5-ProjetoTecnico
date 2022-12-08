sap.ui.define(
    ["sap/ui/core/UIComponent", 
    "sap/ui/Device", 
    "com/ianbadan/BGRecrutamento/model/models",
    "sap/ui/model/json/JSONModel",
    "sap/m/MessageToast"
    ],
    /**
     * @param {typeof sap.ui.core.UIComponent} UIComponent
     * @param {typeof sap.ui.Device} Device
     */
    function (UIComponent, Device, models, JSONModel, MessageToast) {
        "use strict";

        return UIComponent.extend("com.ianbadan.BGRecrutamento.Component", {
            metadata: {
                manifest: "json",
            },

            /**
             * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
             * @public
             * @override
             */
            init: function () {

                var oModel = new JSONModel("https://jsonplaceholder.typicode.com/todos");
                this.setModel(oModel);

                // call the base component's init function
                UIComponent.prototype.init.apply(this, arguments);

                // enable routing
                this.getRouter().initialize();

                // set the device model
                this.setModel(models.createDeviceModel(), "device");
            },
            
            createDeviceModel : function () {
                var oModel = new JSONModel(Device);
                oModel.setDefaultBindingMode("OneWay");
                return oModel;
            }
        });
    }
);
