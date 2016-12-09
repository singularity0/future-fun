var jsonLocation = '../games(1).json',
    clickables = ["featured", "slots", "card", "table"],
    galleryUrl = 'http://cacheimg.casinomidas.com/images/www/games/minipods/',
    urlending = '-minipod.jpg';

function loadJSON(callback) {

    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', jsonLocation, true);
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

        var menuClickableSections = clickables

        menuClickableSections.forEach(function(clickItem) {
            var clickItemId = '#' + clickItem;
            $clickItemElement = $(clickItemId);
            $clickItemElement.on('click', function() {

                $(".container").html("");

                var category = actual_JSON[clickItem]

                category.forEach(function(item) {
                    var itemDetails = onClickParams(item);
                    populate(itemDetails);
                })
            })
        })
    })
}

function populate(context) {

    var gameTemplateScript = $("#game-template").html();
    var gameTemplate = Handlebars.compile(gameTemplateScript)
    var theCompiledHtml = gameTemplate(context);

    $(".container").append(theCompiledHtml);

    $(".galleryItem:last-of-type").on('click', function() {
        openGame(context.gameName, context.gameCode, context.gameMachineID, context.gameDenomination, context.gameHands);
    })
}

function openGame(game_name, game_code, machine_id, denominations, hands) {
    console.log(game_name);
    console.log(game_code);
    console.log(machine_id);
    console.log(denominations);
    console.log(hands);
}

function onClickParams(game) {

    var gameNameClean = clearUppercaseAndSymbols(game.game_name);
    var gameUrl = appendResultToUrl(gameNameClean, galleryUrl, urlending);

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

    var replaceSpecialChars = entry.replace(/[^0-9a-z+]/gi, '');
    var replaceCapiralLetters = replaceSpecialChars.toLowerCase();
    return replaceCapiralLetters;
}

function appendResultToUrl(entry, url = galleryUrl, urlending = urlending) {
    let entireUrl = url + entry + urlending;
    return entireUrl;
}