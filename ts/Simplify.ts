const Config = require("../Config/Configs")
type All = Number | String | Boolean | Array<String> | Array<Number>

interface WebType {
    Api:  (URL: String) => All
}

interface Extra{
    Array_Separation: (Arrays:Array<All>, Data:String) => All,
    Tiny: (Text:String) => All,
    String_Invert:(Text:String) => All

}


const Web :WebType = {
    Api:function(URL:String){
        if (URL == null){return Config.Settings.Language.Invalid_Value}
        return fetch(URL="").then(response => {
            if (!response.ok){
                console.log(Config.Settings.Language.Invalid_Value)
            }else{
                return response.json()
            }
        })
    },

    
}

const Extra = {
    Array_Separation:function(Arrays=[],Data=""){

        if (typeof(Arrays) != "object" || typeof(Data) != "string")return Config.Settings.Language.Invalid_Value
        var i
        for (i=0;i<Arrays.length;i++){
            if (Arrays[i] === Data){
                return Arrays[i]
            }
        }
    },
    
    Tiny:function(Text:String=""){
        if (typeof(Text) != "string") return Config.Settings.Language.Invalid_Value
        return Text.toLowerCase()
    },

    String_Invert:function(Text:String=""){
        if (typeof(Text) != "string") return Config.Settings.Language.Invalid_Value
        return Text.split('').reverse().join('')
    },

    

}


export {
    Web,
    Extra
}