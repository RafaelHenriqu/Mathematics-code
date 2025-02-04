const fs = require("fs")

const LanguageArray = ["en-us.json","pt-br.json","ru-ru.json","zh-cn.json"]

const Settings = {
    Language:require(`${__dirname}/json/Language/en-us.json`)
}




function Set_Language(Language="en-us"){
    Language = Language + ".json"
    if (LanguageArray.includes(Language.toLowerCase())){
        Settings.Language = require(`${__dirname}/json/Language/${Language}`) 
    }else{
        console.log(Settings.Language.Set_Language_ERROR)
    }
}



module.exports={
    Set_Language,
    Settings,
}

