"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Extra = exports.Web = void 0;
const Config = require("../Config/Configs");
const Web = {
    Api: function (URL) {
        if (URL == null) {
            return Config.Settings.Language.Invalid_Value;
        }
        return fetch(URL = "").then(response => {
            if (!response.ok) {
                console.log(Config.Settings.Language.Invalid_Value);
            }
            else {
                return response.json();
            }
        });
    },
};
exports.Web = Web;
const Extra = {
    Array_Separation: function (Arrays = [], Data = "") {
        if (typeof (Arrays) != "object" || typeof (Data) != "string")
            return Config.Settings.Language.Invalid_Value;
        var i;
        for (i = 0; i < Arrays.length; i++) {
            if (Arrays[i] === Data) {
                return Arrays[i];
            }
        }
    },
    Tiny: function (Text = "") {
        if (typeof (Text) != "string")
            return Config.Settings.Language.Invalid_Value;
        return Text.toLowerCase();
    },
    String_Invert: function (Text = "") {
        if (typeof (Text) != "string")
            return Config.Settings.Language.Invalid_Value;
        return Text.split('').reverse().join('');
    },
};
exports.Extra = Extra;
