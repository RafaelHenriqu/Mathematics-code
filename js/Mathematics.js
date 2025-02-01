"use strict";
const Configs = require("../Config/Configs");
const fs = require("fs");
var Calculations = {
    Division: function (N1 = 1, N2 = 1, N3 = 1, N4 = 1, N5 = 1, N6 = 1, N7 = 1, N8 = 1, N9 = 1, N10 = 1) { return N1 / N2 / N3 / N4 / N5 / N6 / N7 / N8 / N9 / N10; },
    Multiply: function (N1 = 1, N2 = 1, N3 = 1, N4 = 1, N5 = 1, N6 = 1, N7 = 1, N8 = 1, N9 = 1, N10 = 1) { return N1 * N2 * N3 * N4 * N5 * N6 * N7 * N8 * N9 * N10; },
    Add: function (N1 = 0, N2 = 0, N3 = 0, N4 = 0, N5 = 0, N6 = 0, N7 = 0, N8 = 0, N9 = 0, N10 = 0) { return N1 + N2 + N3 + N4 + N5 + N6 + N7 + N8 + N9 + N10; },
    Subtraction: function (N1 = 0, N2 = 0, N3 = 0, N4 = 0, N5 = 0, N6 = 0, N7 = 0, N8 = 0, N9 = 0, N10 = 0) { return N1 - N2 - N3 - N4 - N5 - N6 - N7 - N8 - N9 - N10; },
    Percentage: function (Number1, Number2) { if (typeof (Number1) != 'number' || typeof (Number2) != 'number') {
        return Configs.Settings.Language.Invalid_Value;
    } return (Number1 / 100) * Number2; },
    Factorial: function (Number) {
        if (typeof (Number) != 'number') {
            return Configs.Settings.Language.Invalid_Value;
        }
        let n = Number;
        for (Number; Number > 1; Number--) {
            n = n * (Number - 1);
        }
        return n;
    },
    Fibonacci: function (limit) {
        if (typeof (limit) != 'number') {
            return Configs.Settings.Language.Invalid_Value;
        }
        let Fibonacci_table = [1, 1];
        while (true) {
            if (Fibonacci_table[1] >= limit) {
                return Fibonacci_table[1];
            }
            else {
                Fibonacci_table[0] = Fibonacci_table[0] + Fibonacci_table[1];
                Fibonacci_table[1] = Fibonacci_table[0] - Fibonacci_table[1];
            }
        }
    },
    IMC: function (Weight = 1, Height = 1) { if (typeof (Weight) != 'number' || typeof (Height) != 'number') {
        return Configs.Settings.Language.Invalid_Value;
    } return Weight / (Height * Height); },
    Arithmetic_Average: function (Numbers = [0, 0], text_formatted = false) {
        if (typeof (Numbers) != 'object') {
            return Configs.Settings.Language.Invalid_Value;
        }
        Final_Number = 0;
        Numbers.forEach((Dados) => {
            Final_Number = Final_Number + Dados;
        });
        if (text_formatted) {
            return Math.floor(Final_Number / Numbers.length);
        }
        else {
            return Final_Number / Numbers.length;
        }
    },
    Geometric_Mean: function (Numbers = [0, 0], text_formatted = false) {
        if (typeof (Numbers) != 'object') {
            return Configs.Settings.Language.Invalid_Value;
        }
        Number = 1;
        Numbers.forEach(items => {
            Number = Number * items;
        });
        if (text_formatted) {
            return Math.floor(Math.pow(Number, 1 / Numbers.length));
        }
        else {
            return Math.pow(Number, 1 / Numbers.length);
        }
    },
    Root: function (Number) {
        if (typeof (Number) != 'number') {
            return Configs.Settings.Language.Invalid_Value;
        }
        for (i = 0; i < Number; i++) {
            return Math.sqrt(Number);
        }
    },
    Area: function (Height = 0, Width = 0, geometric_figures = "Square", ray = 0, smaller_base = 0, Larger_base = 0) {
        if (geometric_figures == "Rectangle")
            return Height * Width;
        if (geometric_figures == "Square")
            return Width * Width;
        if (geometric_figures == "Triangle")
            return (Height * Width) / 2;
        if (geometric_figures == "Circle")
            return Infos.Pi() * (Math.pow(ray, 2));
        if (geometric_figures == "trapeze")
            return (Larger_base + smaller_base) * Height / 2;
        return Configs.Settings.Language.Area_ERROR;
        /*
        Rectangle: Área = base × altura
        Square: Área = lado × lado (ou lado²)
        Circle: Área = π × raio²
        Triangle: Área = (base × altura) / 2
        trapeze: Área = (base maior + base menor) × altura / 2
        */
    },
    Meters_converter: function (Number = 0, Type = "Pés") {
        if (typeof (Number) != 'number') {
            return Configs.Settings.Language.Invalid_Value;
        }
        if (Type == "Feet") {
            return Number * 3.281;
        }
        if (Type == "Inch") {
            return Number * 39.37;
        }
        if (Type == "Yard") {
            return Number * 1.094;
        }
        if (Type == "Cubit") {
            return Number * 0.4572;
        }
        return Configs.Settings.Language.Meters_converter;
    },
    Celsius_Converter: function (Number = 0, Type = "Fahrenheit") {
        if (typeof (Number) != 'number') {
            return Configs.Settings.Language.Invalid_Value;
        }
        if (Type == "Fahrenheit") {
            return (Number * 9 / 5) + 32;
        }
        if (Type == "Kelvin") {
            return Number + 273.15;
        }
        return Configs.Settings.Language.Celsius_Converter;
    },
    Module: function (Number = 0, divider = 0) {
        return Number % divider;
    },
    Pair: function (n = 0) {
        return n % 2 === 0;
    },
};
var Infos = {
    RandomNumber: function (Max) { if (typeof (Max) != 'number') {
        return Configs.Settings.Language.Invalid_Value;
    } return Math.floor(Math.random() * Max); },
    Pi: function () { return Math.PI; },
    Character_Counter: function (Text = "") { return Text.length; }
};


















function Convert(text, reverse, Type = "binary") {
    var TypeFilter = Type.toLowerCase()
    TypeFilter = TypeFilter + ".json"
    var Items = fs.readdirSync("./json/Convert")
    if (Items.includes(TypeFilter)){
        if (text == null){return Configs.Settings.Language.Invalid_Value}
        var ASCII_TABLE = require(`../json/Convert/${TypeFilter}`)
        if (reverse){
            let Text2 = ""
            let tc = text.split(' ')
            for (i=0;text.split(' ').length > i;i++){
                if (tc[i]=='')return Text2
                Text2 = Text2 + ASCII_TABLE[tc[i]]
                Text2 = Text2 + ""
            }
            if (TypeFilter == "hexadecimal"){return Text2.replace(/\s+/g,'')}
            return Text2
        }else{
            let Text2 = ""
            for (var i=0;text.length > i;i++){
                Text2 = Text2 + ASCII_TABLE[text[i]]
                Text2 = Text2 + " "
            }
            if (TypeFilter == "hexadecimal"){return Text2.replace(/\s+/g,'')}
            return Text2
        }
    }else{
        return Configs.Settings.Language.Convert_ERROR
    }

    /*
    var TypeFilter = Type.toLowerCase()
    var Items = ["octal","decimal","binary","hexadecimal"]
    
    if (Items.includes(TypeFilter)){
        if (text == null){return Configs.Settings.Language.Invalid_Value}
        if (TypeFilter == "octal"){ASCII_TABLE = require("../json/Convert/Octal.json")}
        if (TypeFilter == "decimal"){ASCII_TABLE = require("../json/Convert/Decimal.json")}
        if (TypeFilter == "binary"){ASCII_TABLE = require("../json/Convert/Binary.json")}
        if (TypeFilter == "hexadecimal"){ASCII_TABLE = require("../json/Convert/Hexadecimal.json")}
        
        

        





        




        if (reverse){
            let Text2 = ""
            let tc = text.split(' ')
            for (i=0;text.split(' ').length > i;i++){
                if (tc[i]=='')return Text2
                Text2 = Text2 + ASCII_TABLE[tc[i]]
                Text2 = Text2 + ""
            }
            if (TypeFilter == "hexadecimal"){return Text2.replace(/\s+/g,'')}
            return Text2
        }else{
            let Text2 = ""
            for (i=0;text.length > i;i++){
                Text2 = Text2 + ASCII_TABLE[text[i]]
                Text2 = Text2 + " "
            }
            if (TypeFilter == "hexadecimal"){return Text2.replace(/\s+/g,'')}
            return Text2
        }


    }else{
        return Configs.Settings.Language.Convert_ERROR
    }


    */
}
module.exports = {
    Calculations,
    Convert,
    Infos,
};
