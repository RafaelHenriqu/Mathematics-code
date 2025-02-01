// ConfigJs
const ConfigJs = require("../Config/Configs.js")
const os = require('os')
const T = new Date()

type TipsType = string | number; // Corrigido para minúsculo 'string'
interface Time {
    Day: number;
    Year: number;
    Month: number;
    Seconds: number;
    Time: number;
}

interface Infos {
    Platform: string;
    Machine: string;
    Type: string;
    CPU: string;
    Desktop_Name: string;
    UserName: string;
    System: string;
    Free_Memory: string;

    Tips: (Table_Customize?: Array<TipsType>) => TipsType; // Definindo o tipo da função
    Memory: (text_formatted: boolean) => string; // Definindo o tipo da função
}

const Time: Time = {
    Day: T.getUTCDate(),
    Year: T.getUTCFullYear(),
    Month: T.getUTCMonth() + 1,
    Seconds: T.getUTCSeconds(),
    Time: T.getHours(),
};

const Infos: Infos = {
    Platform: os.platform(),
    Machine: os.machine(),
    Type: os.type(),
    CPU: os.cpus()[0].model,
    Desktop_Name: os.hostname(),
    UserName: os.userInfo()["username"],
    System: os.version(),
    Free_Memory: os.freemem().toString(), // Convertendo para string, se necessário

    Tips: function (Table_Customize: Array<TipsType> = [""]): TipsType {
        const informatic__tips = ConfigJs.Settings.Language.informatic__tips[0];
        if (Table_Customize.length == 1) {
            return informatic__tips[Math.floor(Math.random() * informatic__tips.length)];
        } else {
            return Table_Customize[Math.floor(Math.random() * Table_Customize.length)];
        }
    },
    
    Memory: function (text_formatted: boolean = false): string {
        const Converte = (os.totalmem() / 1073741824).toString();
        if (text_formatted) {
            const Memory = `${Converte.split('.')[0]},${Converte.split('.')[1][0]} GB`;
            return Memory;
        } else {
            const Memory = Converte.split('.')[0];
            return Memory;
        }
    }
};

export {
    Time,
    Infos
};