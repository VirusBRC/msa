var Config;
var Model = require("backbone-thin").Model;

// simple user config
module.exports = Config = Model.extend({

  defaults:
    {registerMouseHover: false,
    registerMouseClicks: true,
    importProxy: "", // Use proxy to deal with same-origin security policy. Was "https://cors-anywhere.herokuapp.com/".
    importProxyStripHttp: false, // Was true.
    eventBus: true,
    alphabetSize: 20,
    dropImport: false,
    debug: false,
    hasRef: false, // hasReference
    bootstrapMenu: false,
    manualRendering: false // not recommended to turn on
    }
});
