function loadJSON(callback) {

    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', '../games(1).json', true);
    xobj.onreadystatechange = function() {
        if (xobj.readyState == 4 && xobj.status == "200") {
            // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
            callback(xobj.responseText);
        }
    };
    xobj.send(null);
}

function getLoadedJson() {
    loadJSON(function(response) {
        // Parse JSON string into object
        var actual_JSON = JSON.parse(response);

        getGameName(actual_JSON);
        //console.log(onClickParams(game = actual_JSON['featured'][0]).gameMachineID)
    })
}

getLoadedJson();

function getGameName(actual_JSON) {
    return actual_JSON['featured'].forEach(function(item) {
        // console.log(item['game_name']);
    })
}

var entry = "Text and some-rndome % dd In thEs"

function clearUppercaseAndSymbols(entry) {

    var replaceSpecialChars = entry.replace(/[^0-9a-z]/gi, '');
    var replaceCapiralLetters = replaceSpecialChars.toLowerCase();
    return replaceCapiralLetters;
}

function appendResultToUrl(entry, url = 'http://cacheimg.casinomidas.com/images/www/games/minipods/', urlending = '-minipod.jpg') {
    let entireUrl = url + entry + urlending;
    return entireUrl;
}

// console.log(appendResultToUrl('ronin'));

var onClickParams = function(game = actual_JSON['featured'][0]) {

    // console.log(game.game_name);
    return {
        gameName: game.game_name,
        gameCode: game.game_code,
        gameMachineID: game.machine_id,
        gameDenomination: game.denominations,
        gameHands: game.hands
    }
}

function populate(onClickParams) {

    var gameTemplateScript = $("#game-template").html();

    var gameTemplate = Handlebars.compile(gameTemplateScript);

    var theCompiledHtml = gameTemplate(onClickParams.game_name);

    $(".container").html(theCompiledHtml);
}

$("#featured").on('click', populate)
console.log('end');