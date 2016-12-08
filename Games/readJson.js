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

function init() {
    loadJSON(function(response) {

        var actual_JSON = JSON.parse(response);

        $("#featured").on('click', function(featured) {
            var featured = actual_JSON['featured']
            featured.forEach(function(item) {
                var itemDetails = onClickParams(item);
                populate(itemDetails);
            })
        })

        $("#slots").on('click', function(featured) {
            var featured = actual_JSON['slots']
            featured.forEach(function(item) {
                var itemDetails = onClickParams(item);
                populate(itemDetails);
            })
        })

        $("#card").on('click', function(featured) {
            var featured = actual_JSON['card']
            featured.forEach(function(item) {
                var itemDetails = onClickParams(item);
                populate(itemDetails);
            })
        })

        $("#table").on('click', function(featured) {
            var featured = actual_JSON['table']
            featured.forEach(function(item) {
                var itemDetails = onClickParams(item);
                populate(itemDetails);
            })
        })
    })
}

function populate(context) {

    var gameTemplateScript = $("#game-template").html();

    var gameTemplate = Handlebars.compile(gameTemplateScript);

    var theCompiledHtml = gameTemplate(context);
    console.log(context.gameName);
    $(".container").append(theCompiledHtml);
}

function onClickParams(game = actual_JSON['featured'][1]) {

    var gameNameClean = clearUppercaseAndSymbols(game.game_name);
    var gameUrl = appendResultToUrl(gameNameClean);


    return {
        gameName: game.game_name,
        gameCode: game.game_code,
        gameMachineID: game.machine_id,
        gameDenomination: game.denominations,
        gameHands: game.hands,
        gameUrl: gameUrl
    }
}

init();

function clearUppercaseAndSymbols(entry) {

    var replaceSpecialChars = entry.replace(/[^0-9a-z]/gi, '');
    var replaceCapiralLetters = replaceSpecialChars.toLowerCase();
    return replaceCapiralLetters;
}

function appendResultToUrl(entry, url = 'http://cacheimg.casinomidas.com/images/www/games/minipods/', urlending = '-minipod.jpg') {
    let entireUrl = url + entry + urlending;
    return entireUrl;
}