const fs = require("fs")

const LanguageArray = fs.readdirSync("./json/Language")

const Settings = {
    Language:require(`../json/Language/en-us.json`)
}




function Set_Language(Language="en-us"){
    Language = Language + ".json"
    if (LanguageArray.includes(Language.toLowerCase())){
        Settings.Language = require(`../json/Language/${Language}`) 
    }else{
        console.log(Settings.Language.Set_Language_ERROR)
    }
}



module.exports={
    Set_Language,
    Settings,
}

