"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Infos = exports.Time = void 0;
// ConfigJs
const ConfigJs = require("../Config/Configs.js");
const os = require('os');
const T = new Date();
const Time = {
    Day: T.getUTCDate(),
    Year: T.getUTCFullYear(),
    Month: T.getUTCMonth() + 1,
    Seconds: T.getUTCSeconds(),
    Time: T.getHours(),
};
exports.Time = Time;
const Infos = {
    Platform: os.platform(),
    Machine: os.machine(),
    Type: os.type(),
    CPU: os.cpus()[0].model,
    Desktop_Name: os.hostname(),
    UserName: os.userInfo()["username"],
    System: os.version(),
    Free_Memory: os.freemem().toString(), // Convertendo para string, se necessário
    Tips: function (Table_Customize = [""]) {
        const informatic__tips = ConfigJs.Settings.Language.informatic__tips[0];
        if (Table_Customize.length == 1) {
            return informatic__tips[Math.floor(Math.random() * informatic__tips.length)];
        }
        else {
            return Table_Customize[Math.floor(Math.random() * Table_Customize.length)];
        }
    },
    Memory: function (text_formatted = false) {
        const Converte = (os.totalmem() / 1073741824).toString();
        if (text_formatted) {
            const Memory = `${Converte.split('.')[0]},${Converte.split('.')[1][0]} GB`;
            return Memory;
        }
        else {
            const Memory = Converte.split('.')[0];
            return Memory;
        }
    }
};
exports.Infos = Infos;
