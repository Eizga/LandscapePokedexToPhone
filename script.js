const API = "https://pokeapi.co/api/v2";

const STORAGE_KEY = "pokedexGameCaughtV3";
const CAUGHT_BACKUP_KEY = "pokedexGameCaughtBackupV1";
const VOICE_SETTINGS_KEY = "pokedexVoiceSettingsV1";
const LANGUAGE_STORAGE_KEY = "pokedexLanguageV1";
const DESCRIPTION_TRANSLATION_CACHE_KEY = "pokedexDescriptionTranslationsV1";

const UI_TEXT = {
    fi: {
        pokedex: "Pokédex", games: "Pelit", types: "Tyyppikaavio", profile: "Profiili", settings: "Asetukset",
        searchPokemon: "Hae Pokémonia", nationalPokedex: "Kansallinen Pokédex", regionalPokedex: "Alueellinen Pokédex",
        typeMatchup: "Tyyppikaavio", typeMatchupHelp: "Tarkastele Pokémon-tyyppien hyökkäys- ja puolustusvaikutuksia.",
        typeOne: "Tyyppi 1", typeTwo: "Tyyppi 2", none: "Ei mitään", sort: "Järjestys", pokedexNumber: "Pokédex-numero", name: "Nimi",
        loading: "Ladataan...", loadMore: "Lataa lisää", back: "← Takaisin", previous: "‹ Edellinen", next: "Seuraava ›",
        nationalListSubtitle: "Koko kansallinen lista", gameCollectionDescription: "Pelin Pokédex · {generation}",
        gameCover: "Pelin kansikuva", collected: "kerätty", regional: "Alueellinen", national: "Kansallinen",
        all: "Kaikki", caught: "Napattu", missing: "Puuttuvat", profileDescription: "Kansallinen yhteistilanne sekä jokaisen pelin alueellinen ja kansallinen laskuri.",
        language: "Kieli", languageDescription: "Valitse Pokédexissä ja ääneen luetuissa kuvauksissa käytettävä kieli.",
        pokedexVoice: "Pokédexin puheääni", voiceDescription: "Matalampi sävelkorkeus kuulostaa syvemmältä. Säätö ulottuu selaimen tukemaan alarajaan.",
        pitch: "Sävelkorkeus", readingSpeed: "Lukunopeus", clearOneGame: "Tyhjennä yhden pelin tiedot", clearOneGameDescription: "Poistaa valitun pelin napattu-merkinnät.",
        selectGame: "Valitse peli", clearGame: "Tyhjennä peli", clearAll: "Tyhjennä kaikki tiedot", clearAllDescription: "Poistaa kaikkien pelien napattu-merkinnät.", clearAllButton: "Tyhjennä kaikki",
        overview: "Yleiskuvaus", species: "Pokédex-kuvaus", readPokedexEntry: "Lue Pokédex-kuvaus ääneen", listen: "🔊 Kuuntele", stop: "■ Pysäytä", category: "Laji", height: "Pituus", weight: "Paino", baseXp: "Peruskokemus", abilities: "Kyvyt",
        typeChart: "Tyyppikaavio", defense: "Puolustus", attack: "Hyökkäys", evolutions: "Evoluutiot", moves: "Liikkeet", forms: "Formit", locations: "Sijainnit", gamesTab: "Pelit",
        notAvailable: "Ei saatavilla", noSpeciesDescription: "Tästä Pokémonista ei ole Pokédex-kuvausta saatavilla.", speechUnsupported: "Tämä selain ei tue tekstin puheeksi lukemista.",
        overviewVersion: "Versio", noOverviewForLanguage: "Tälle Pokémonille ei ole kuvausta saatavilla.", translating: "Käännetään kuvausta…", searchResults: "Hakutulokset", noSearchResults: "Hakua vastaavia Pokémoneja ei löytynyt.", allGenerations: "Kaikki sukupolvet", moveSort: "Järjestä", moveGeneration: "Sukupolvi", bp: "BP", acc: "Acc", pp: "PP", level: "Taso",
        defenseMatchup: "Puolustus", attackMatchup: "Hyökkäys", chooseType: "Valitse vähintään yksi tyyppi.", caughtStatus: "Napattu ✓", markCaught: "Merkitse napatuksi", gameListLoading: "Etsitään pelejä...", noAvailableGames: "Pokémonille ei löytynyt saatavilla olevia pelejä.",
        pokemon: "Pokémon", generation: "Sukupolvi", mobileSpecial: "Mobiili / erikoisversio", nationalSummaryTitle: "Koko kansallinen Pokédex", nationalSummaryDescription: "Saman Pokémonin merkintä riittää riippumatta siitä, missä pelissä se on napattu.", pokemonCount: "Pokémonia", gamesCount: "peliä", regionalCount: "Alueellinen", nationalCount: "Kansallinen", defaultForm: "Oletusmuoto", movesWord: "liikkeet", openGame: "Avaa peli",
        typeNames: { normal: "normaali", fire: "tuli", water: "vesi", electric: "sähkö", grass: "ruoho", ice: "jää", fighting: "taistelu", poison: "myrkky", ground: "maa", flying: "lento", psychic: "meedio", bug: "ötökkä", rock: "kivi", ghost: "aave", dragon: "lohikäärme", dark: "pimeys", steel: "teräs", fairy: "keiju" },
        whereToFind: "Mistä löytää", howToObtain: "Miten saada", sourcePokeApi: "Lähde: PokéAPI", encounterMethodUnspecified: "Kohtaamistapaa ei ole määritetty",
        menuToggle: "Avaa tai sulje valikko", checkUpdates: "Hae sovelluksen päivitykset", typeFire: "Tulityyppi", markInGame: "Merkitse napatuksi pelissä", unmarkInGame: "Poista napattu-merkintä pelistä",
        noGameDex: "Tässä näkymässä ei ole tällä hetkellä Pokémonia.", locationsLoading: "Ladataan sijainteja...", noLocationGames: "Pokédex-merkintää sisältäviä pelejä ei löytynyt.", noEncounterDetails: "Kohtaamis- tai saamistietoja ei löytynyt pelille {game}.",
        evolutionLoadFailed: "Evoluutioketjua ei voitu ladata.", formsLoadFailed: "Muotoja ei voitu ladata.", caughtSaveFailed: "Napattu-merkintää ei voitu tallentaa tähän selaimeen.",
        clearAllConfirm: "Haluatko varmasti poistaa kaikki napattu-merkinnät?", caughtClearFailed: "Napattu-merkintöjä ei voitu tyhjentää tästä selaimesta.", clearGameConfirm: "Poistetaanko kaikki pelin {game} napattu-merkinnät?", gameCaughtClearFailed: "Pelin {game} napattu-merkintöjä ei voitu tyhjentää tästä selaimesta.",
        checkingUpdates: "Haetaan päivityksiä...", loadingMore: "Ladataan lisää...", updateLoadingPage: "Ladataan uusin sivu...", updateFound: "Uusi versio löytyi. Päivitetään sovellus...", updateDownloading: "Uusi versio latautuu. Sovellus avautuu päivityksen jälkeen...", updateFailed: "Päivitysten haku epäonnistui. Tarkista verkkoyhteys.", updateDone: "Päivitystarkistus valmis. Ladataan uusin sisältö...", updateDownloadFailed: "Päivityksen lataus epäonnistui. Yritä uudelleen."
    },
    en: {
        pokedex: "Pokédex", games: "Games", types: "Type Chart", profile: "Profile", settings: "Settings",
        searchPokemon: "Search Pokémon", nationalPokedex: "National Pokédex", regionalPokedex: "Regional Pokédex",
        typeMatchup: "Type Matchup", typeMatchupHelp: "Review the offensive and defensive effects of Pokémon types.",
        typeOne: "Type 1", typeTwo: "Type 2", none: "None", sort: "Sort", pokedexNumber: "Pokédex number", name: "Name",
        loading: "Loading...", loadMore: "Load more", back: "← Back", previous: "‹ Previous", next: "Next ›",
        nationalListSubtitle: "Full national list", gameCollectionDescription: "Game Pokédex · {generation}",
        gameCover: "Game cover", collected: "caught", regional: "Regional", national: "National",
        all: "All", caught: "Caught", missing: "Missing", profileDescription: "National progress and regional and national counts for each game.",
        language: "Language", languageDescription: "Choose the language used throughout the Pokédex and for spoken descriptions.",
        pokedexVoice: "Pokédex voice", voiceDescription: "Lower pitch values sound deeper. Pitch can be lowered to the browser-supported minimum.",
        pitch: "Pitch", readingSpeed: "Reading speed", clearOneGame: "Clear one game's data", clearOneGameDescription: "Removes caught marks for the selected game.",
        selectGame: "Select a game", clearGame: "Clear game", clearAll: "Clear all data", clearAllDescription: "Removes caught marks from all games.", clearAllButton: "Clear all",
        overview: "Overview", species: "Pokédex entry", readPokedexEntry: "Read Pokédex entry aloud", listen: "🔊 Listen", stop: "■ Stop", category: "Species", height: "Height", weight: "Weight", baseXp: "Base XP", abilities: "Abilities",
        typeChart: "Type Chart", defense: "Defense", attack: "Attack", evolutions: "Evolutions", moves: "Moves", forms: "Forms", locations: "Locations", gamesTab: "Games",
        notAvailable: "Not available", noSpeciesDescription: "No species description is available for this Pokémon.", speechUnsupported: "Text-to-speech is not supported by this browser.",
        overviewVersion: "Version", noOverviewForLanguage: "No description is available for this Pokémon.", translating: "Translating description…", searchResults: "Search results", noSearchResults: "No Pokémon matched your search.", moveSort: "Sort", moveGeneration: "Generation", allGenerations: "All generations", bp: "BP", acc: "Acc", pp: "PP", level: "Level",
        defenseMatchup: "Defense", attackMatchup: "Attack", chooseType: "Choose at least one type.", caughtStatus: "Caught ✓", markCaught: "Mark caught", gameListLoading: "Looking up games...", noAvailableGames: "No available games were found for this Pokémon.",
        pokemon: "Pokémon", generation: "Generation", mobileSpecial: "Mobile / Special", nationalSummaryTitle: "Entire National Pokédex", nationalSummaryDescription: "A Pokémon only needs to be marked once, regardless of which game it was caught in.", pokemonCount: "Pokémon", gamesCount: "games", regionalCount: "Regional", nationalCount: "National", defaultForm: "Default form", movesWord: "moves", openGame: "Open game",
        typeNames: { normal: "Normal", fire: "Fire", water: "Water", electric: "Electric", grass: "Grass", ice: "Ice", fighting: "Fighting", poison: "Poison", ground: "Ground", flying: "Flying", psychic: "Psychic", bug: "Bug", rock: "Rock", ghost: "Ghost", dragon: "Dragon", dark: "Dark", steel: "Steel", fairy: "Fairy" },
        whereToFind: "Where to find", howToObtain: "How to obtain", sourcePokeApi: "Source: PokéAPI", encounterMethodUnspecified: "Encounter method not specified",
        menuToggle: "Open or close menu", checkUpdates: "Check for app updates", typeFire: "Fire type", markInGame: "Mark caught in game", unmarkInGame: "Remove caught mark from game",
        noGameDex: "There are no Pokémon in this view.", locationsLoading: "Loading locations...", noLocationGames: "No games with a Pokédex entry were found.", noEncounterDetails: "No encounter or acquisition details were found for {game}.",
        evolutionLoadFailed: "The evolution chain could not be loaded.", formsLoadFailed: "Forms could not be loaded.", caughtSaveFailed: "Could not save the caught mark in this browser.",
        clearAllConfirm: "Are you sure you want to remove all caught marks?", caughtClearFailed: "Caught marks could not be cleared in this browser.", clearGameConfirm: "Remove all caught marks for {game}?", gameCaughtClearFailed: "Caught marks for {game} could not be cleared in this browser.",
        checkingUpdates: "Checking for updates...", loadingMore: "Loading more...", updateLoadingPage: "Loading the latest page...", updateFound: "A new version was found. Updating the app...", updateDownloading: "The new version is downloading. The app will reopen when it is ready...", updateFailed: "Could not check for updates. Check your connection.", updateDone: "Update check complete. Loading the latest content...", updateDownloadFailed: "The update could not be downloaded. Try again."
    }
};

function getStoredLanguage() {
    try {
        return localStorage.getItem(LANGUAGE_STORAGE_KEY) === "fi" ? "fi" : "en";
    } catch {
        return "en";
    }
}

let appLanguage = getStoredLanguage();

function t(key) {
    return UI_TEXT[appLanguage]?.[key] ?? UI_TEXT.en[key] ?? key;
}

function applyStaticTranslations() {
    document.documentElement.lang = appLanguage;
    document.querySelectorAll("[data-i18n]").forEach(element => {
        element.textContent = t(element.dataset.i18n);
    });
    document.querySelectorAll("[data-i18n-aria-label]").forEach(element => {
        element.setAttribute("aria-label", t(element.dataset.i18nAriaLabel));
    });
    document.querySelectorAll("[data-i18n-title]").forEach(element => {
        element.title = t(element.dataset.i18nTitle);
    });
    const languageSelect = document.getElementById("appLanguageSelect");
    if (languageSelect) languageSelect.value = appLanguage;
}

const POKEMON_PAGE_SIZE = 60;


/* =========================================================
   TYPE COLORS
========================================================= */

const TYPE_COLORS = {
    normal: "#A8A77A",
    fire: "#EE8130",
    water: "#6390F0",
    electric: "#F7D02C",
    grass: "#7AC74C",
    ice: "#96D9D6",
    fighting: "#C22E28",
    poison: "#A33EA1",
    ground: "#E2BF65",
    flying: "#A98FF3",
    psychic: "#F95587",
    bug: "#A6B91A",
    rock: "#B6A136",
    ghost: "#735797",
    dragon: "#6F35FC",
    dark: "#705746",
    steel: "#B7B7CE",
    fairy: "#D685AD"
};


const TYPES = Object.keys(TYPE_COLORS);


/* =========================================================
   TYPE EFFECTIVENESS
========================================================= */

const TYPE_EFFECTIVENESS = {

    normal: {
        rock: .5,
        ghost: 0,
        steel: .5
    },

    fire: {
        fire: .5,
        water: .5,
        grass: 2,
        ice: 2,
        bug: 2,
        rock: .5,
        dragon: .5,
        steel: 2
    },

    water: {
        fire: 2,
        water: .5,
        grass: .5,
        ground: 2,
        rock: 2,
        dragon: .5
    },

    electric: {
        water: 2,
        electric: .5,
        grass: .5,
        ground: 0,
        flying: 2,
        dragon: .5
    },

    grass: {
        fire: .5,
        water: 2,
        grass: .5,
        poison: .5,
        ground: 2,
        flying: .5,
        bug: .5,
        rock: 2,
        dragon: .5,
        steel: .5
    },

    ice: {
        fire: .5,
        water: .5,
        grass: 2,
        ice: .5,
        ground: 2,
        flying: 2,
        dragon: 2,
        steel: .5
    },

    fighting: {
        normal: 2,
        ice: 2,
        rock: 2,
        dark: 2,
        steel: 2,
        poison: .5,
        flying: .5,
        psychic: .5,
        bug: .5,
        fairy: .5,
        ghost: 0
    },

    poison: {
        grass: 2,
        poison: .5,
        ground: .5,
        rock: .5,
        ghost: .5,
        steel: 0,
        fairy: 2
    },

    ground: {
        fire: 2,
        electric: 2,
        grass: .5,
        poison: 2,
        flying: 0,
        bug: .5,
        rock: 2,
        steel: 2
    },

    flying: {
        electric: .5,
        grass: 2,
        fighting: 2,
        bug: 2,
        rock: .5,
        steel: .5
    },

    psychic: {
        fighting: 2,
        poison: 2,
        psychic: .5,
        steel: .5,
        dark: 0
    },

    bug: {
        fire: .5,
        grass: 2,
        fighting: .5,
        poison: .5,
        flying: .5,
        psychic: 2,
        ghost: .5,
        dark: 2,
        steel: .5,
        fairy: .5
    },

    rock: {
        fire: 2,
        ice: 2,
        fighting: .5,
        ground: .5,
        flying: 2,
        bug: 2,
        steel: .5
    },

    ghost: {
        normal: 0,
        psychic: 2,
        ghost: 2,
        dark: .5
    },

    dragon: {
        dragon: 2,
        steel: .5,
        fairy: 0
    },

    dark: {
        fighting: .5,
        psychic: 2,
        ghost: 2,
        dark: .5,
        fairy: .5
    },

    steel: {
        fire: .5,
        water: .5,
        electric: .5,
        ice: 2,
        rock: 2,
        fairy: 2,
        steel: .5
    },

    fairy: {
        fire: .5,
        fighting: 2,
        poison: .5,
        dragon: 2,
        dark: 2,
        steel: .5
    }
};


/* =========================================================
   POKEDEX CONFIG
========================================================= */

const POKEDEXES = [
    { id: "national", name: "National Pokédex", subtitle: "Koko kansallinen lista", api: "national" },
    { id: "kanto", name: "Kanto", subtitle: "Generation 1", api: "kanto" },
    { id: "johto", name: "Johto", subtitle: "Generation 2", api: "original-johto" },
    { id: "hoenn", name: "Hoenn", subtitle: "Generation 3", api: "hoenn" },
    { id: "sinnoh", name: "Sinnoh", subtitle: "Generation 4", api: "original-sinnoh" },
    { id: "unova", name: "Unova", subtitle: "Generation 5", api: "updated-unova" },
    { id: "kalos", name: "Kalos", subtitle: "Generation 6", api: ["kalos-central", "kalos-coastal", "kalos-mountain"] },
    { id: "alola", name: "Alola", subtitle: "Generation 7", api: "updated-alola" },
    { id: "galar", name: "Galar", subtitle: "Generation 8", api: "galar" },
    { id: "hisui", name: "Hisui", subtitle: "Legends: Arceus", api: "hisui" },
    { id: "paldea", name: "Paldea", subtitle: "Generation 9", api: "paldea" }
];


/* =========================================================
   GAMES
========================================================= */

const GAMES = [
    { id: "red", name: "Pokémon Red", generation: "Generation I", dexes: ["kanto"], nationalLimit: 151 },
    { id: "blue", name: "Pokémon Blue", generation: "Generation I", dexes: ["kanto"], nationalLimit: 151 },
    { id: "green", name: "Pokémon Green", generation: "Generation I", dexes: ["kanto"], nationalLimit: 151 },
    { id: "yellow", name: "Pokémon Yellow", generation: "Generation I", dexes: ["kanto"], nationalLimit: 151 },
    { id: "gold", name: "Pokémon Gold", generation: "Generation II", dexes: ["johto"], nationalLimit: 251 },
    { id: "silver", name: "Pokémon Silver", generation: "Generation II", dexes: ["johto"], nationalLimit: 251 },
    { id: "crystal", name: "Pokémon Crystal", generation: "Generation II", dexes: ["johto"], nationalLimit: 251 },
    { id: "ruby", name: "Pokémon Ruby", generation: "Generation III", dexes: ["hoenn"], nationalLimit: 386 },
    { id: "sapphire", name: "Pokémon Sapphire", generation: "Generation III", dexes: ["hoenn"], nationalLimit: 386 },
    { id: "emerald", name: "Pokémon Emerald", generation: "Generation III", dexes: ["hoenn"], nationalLimit: 386 },
    { id: "firered", name: "Pokémon FireRed", generation: "Generation III", dexes: ["kanto"], nationalLimit: 386 },
    { id: "leafgreen", name: "Pokémon LeafGreen", generation: "Generation III", dexes: ["kanto"], nationalLimit: 386 },
    { id: "diamond", name: "Pokémon Diamond", generation: "Generation IV", dexes: ["sinnoh"], nationalLimit: 493, excludesRegional: [490] },
    { id: "pearl", name: "Pokémon Pearl", generation: "Generation IV", dexes: ["sinnoh"], nationalLimit: 493, excludesRegional: [490] },
    { id: "platinum", name: "Pokémon Platinum", generation: "Generation IV", dexes: ["sinnoh-platinum"], nationalLimit: 493 },
    { id: "heartgold", name: "Pokémon HeartGold", generation: "Generation IV", dexes: ["johto"], nationalLimit: 493 },
    { id: "soulsilver", name: "Pokémon SoulSilver", generation: "Generation IV", dexes: ["johto"], nationalLimit: 493 },
    { id: "black", name: "Pokémon Black", generation: "Generation V", dexes: ["unova-original"], nationalLimit: 649 },
    { id: "white", name: "Pokémon White", generation: "Generation V", dexes: ["unova-original"], nationalLimit: 649 },
    { id: "black2", name: "Pokémon Black 2", generation: "Generation V", dexes: ["unova"], nationalLimit: 649 },
    { id: "white2", name: "Pokémon White 2", generation: "Generation V", dexes: ["unova"], nationalLimit: 649 },
    { id: "x", name: "Pokémon X", generation: "Generation VI", dexes: ["kalos"], nationalLimit: 721 },
    { id: "y", name: "Pokémon Y", generation: "Generation VI", dexes: ["kalos"], nationalLimit: 721 },
    { id: "omegaruby", name: "Pokémon Omega Ruby", generation: "Generation VI", dexes: ["hoenn"], nationalLimit: 721 },
    { id: "alphasapphire", name: "Pokémon Alpha Sapphire", generation: "Generation VI", dexes: ["hoenn"], nationalLimit: 721 },
    { id: "sun", name: "Pokémon Sun", generation: "Generation VII", dexes: ["alola-original"], nationalLimit: 809 },
    { id: "moon", name: "Pokémon Moon", generation: "Generation VII", dexes: ["alola-original"], nationalLimit: 809 },
    { id: "ultrasun", name: "Pokémon Ultra Sun", generation: "Generation VII", dexes: ["alola"], nationalLimit: 809 },
    { id: "ultramoon", name: "Pokémon Ultra Moon", generation: "Generation VII", dexes: ["alola"], nationalLimit: 809 },
    { id: "letsgopikachu", name: "Pokémon Let's Go Pikachu", generation: "Generation VII", dexes: ["kanto"], nationalLimit: 151, nationalExtras: [808, 809] },
    { id: "letsgoeevee", name: "Pokémon Let's Go Eevee", generation: "Generation VII", dexes: ["kanto"], nationalLimit: 151, nationalExtras: [808, 809] },
    { id: "sword", name: "Pokémon Sword", generation: "Generation VIII", dexes: ["galar", "isle-of-armor", "crown-tundra"], nationalLimit: 898, regionalOnlyNational: true },
    { id: "shield", name: "Pokémon Shield", generation: "Generation VIII", dexes: ["galar", "isle-of-armor", "crown-tundra"], nationalLimit: 898, regionalOnlyNational: true },
    { id: "legendsarceus", name: "Pokémon Legends: Arceus", generation: "Generation VIII", dexes: ["hisui"], nationalLimit: 905, regionalOnlyNational: true },
    { id: "brilliantdiamond", name: "Pokémon Brilliant Diamond", generation: "Generation VIII", dexes: ["sinnoh"], nationalLimit: 493, excludesRegional: [490] },
    { id: "shiningpearl", name: "Pokémon Shining Pearl", generation: "Generation VIII", dexes: ["sinnoh"], nationalLimit: 493, excludesRegional: [490] },
    { id: "scarlet", name: "Pokémon Scarlet", generation: "Generation IX", dexes: ["paldea", "kitakami", "blueberry"], nationalLimit: 1025, regionalOnlyNational: true },
    { id: "violet", name: "Pokémon Violet", generation: "Generation IX", dexes: ["paldea", "kitakami", "blueberry"], nationalLimit: 1025, regionalOnlyNational: true },
    { id: "legendsza", name: "Pokémon Legends: Z-A", generation: "Generation IX", dexes: ["lumiose-city", "hyperspace"], nationalLimit: 1025, regionalOnlyNational: true },
    { id: "pokemon-go", name: "Pokémon GO", generation: "Mobile", dexes: ["national"], nationalLimit: 1025 }
];

function formatGenerationName(generation) {
    const romanToArabic = {
        I: 1, II: 2, III: 3, IV: 4, V: 5,
        VI: 6, VII: 7, VIII: 8, IX: 9
    };
    const arabicMatch = /^Generation ([1-9])$/.exec(generation);
    if (arabicMatch) return `${t("generation")} ${arabicMatch[1]}`;
    const match = /^Generation (I|II|III|IV|V|VI|VII|VIII|IX)$/.exec(generation);
    if (match) return `${t("generation")} ${romanToArabic[match[1]]}`;
    return generation === "Mobile" ? t("mobileSpecial") : generation;
}

const VERSION_GROUP_GENERATIONS = new Map([
    [1, ["red-blue", "yellow"]],
    [2, ["gold-silver", "crystal"]],
    [3, ["ruby-sapphire", "emerald", "firered-leafgreen"]],
    [4, ["diamond-pearl", "platinum", "heartgold-soulsilver"]],
    [5, ["black-white", "black-2-white-2"]],
    [6, ["x-y", "omega-ruby-alpha-sapphire"]],
    [7, ["sun-moon", "ultra-sun-ultra-moon", "lets-go-pikachu-lets-go-eevee"]],
    [8, ["sword-shield", "brilliant-diamond-shining-pearl", "legends-arceus"]],
    [9, ["scarlet-violet"]]
].flatMap(([generation, groups]) => groups.map(group => [group, generation])));

function getMoveGenerationLearnInfo(entry, generation = state.moveGeneration) {
    const details = entry.version_group_details || [];
    if (generation === "all") return details.at(-1);
    return details.find(detail => VERSION_GROUP_GENERATIONS.get(detail.version_group?.name) === Number(generation));
}

function getPokemonMoveGenerations(pokemon) {
    const generations = new Set();
    for (const move of pokemon.moves || []) {
        for (const detail of move.version_group_details || []) {
            const generation = VERSION_GROUP_GENERATIONS.get(detail.version_group?.name);
            if (generation) generations.add(generation);
        }
    }
    return [...generations].sort((a, b) => a - b);
}

const GAME_API_VERSIONS = {
    red: ["red"], blue: ["blue"], green: ["red", "blue"], yellow: ["yellow"],
    gold: ["gold"], silver: ["silver"], crystal: ["crystal"],
    ruby: ["ruby"], sapphire: ["sapphire"], emerald: ["emerald"],
    firered: ["firered"], leafgreen: ["leafgreen"],
    diamond: ["diamond"], pearl: ["pearl"], platinum: ["platinum"],
    heartgold: ["heartgold"], soulsilver: ["soulsilver"],
    black: ["black"], white: ["white"], black2: ["black-2"], white2: ["white-2"],
    x: ["x"], y: ["y"], omegaruby: ["omega-ruby"], alphasapphire: ["alpha-sapphire"],
    sun: ["sun"], moon: ["moon"], ultrasun: ["ultra-sun"], ultramoon: ["ultra-moon"],
    letsgopikachu: ["lets-go-pikachu"], letsgoeevee: ["lets-go-eevee"],
    sword: ["sword"], shield: ["shield"], legendsarceus: ["legends-arceus"],
    brilliantdiamond: ["brilliant-diamond", "brilliant-diamond-shining-pearl", "brilliant-diamond-and-shining-pearl"],
    shiningpearl: ["shining-pearl", "brilliant-diamond-shining-pearl", "brilliant-diamond-and-shining-pearl"],
    scarlet: ["scarlet"], violet: ["violet"], legendsza: ["legends-z-a"],
    "pokemon-go": []
};

function normalizeApiVersionName(name) {
    return String(name || "")
        .trim()
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-|-$/g, "");
}

function getGameApiVersionNames(gameId) {
    return new Set((GAME_API_VERSIONS[gameId] || []).map(normalizeApiVersionName));
}

function getEncounterVersionName(versionDetail) {
    return normalizeApiVersionName(versionDetail?.version?.name);
}

const POKEMONDB_GAME_LABELS = [
    ["Let's Go Pikachu", "letsgopikachu"], ["Let's Go Eevee", "letsgoeevee"],
    ["Brilliant Diamond", "brilliantdiamond"], ["Shining Pearl", "shiningpearl"],
    ["Legends: Arceus", "legendsarceus"], ["Legends: Z-A", "legendsza"],
    ["Alpha Sapphire", "alphasapphire"], ["Omega Ruby", "omegaruby"],
    ["Ultra Sun", "ultrasun"], ["Ultra Moon", "ultramoon"],
    ["Black 2", "black2"], ["White 2", "white2"],
    ["HeartGold", "heartgold"], ["SoulSilver", "soulsilver"],
    ["FireRed", "firered"], ["LeafGreen", "leafgreen"],
    ["Red", "red"], ["Blue", "blue"], ["Yellow", "yellow"],
    ["Gold", "gold"], ["Silver", "silver"], ["Crystal", "crystal"],
    ["Ruby", "ruby"], ["Sapphire", "sapphire"], ["Emerald", "emerald"],
    ["Diamond", "diamond"], ["Pearl", "pearl"], ["Platinum", "platinum"],
    ["Black", "black"], ["White", "white"], ["X", "x"], ["Y", "y"],
    ["Sun", "sun"], ["Moon", "moon"], ["Sword", "sword"], ["Shield", "shield"],
    ["Scarlet", "scarlet"], ["Violet", "violet"]
];

// Covers are shipped with the app so the Games view does not depend on an
// external image service being available at runtime.
const GAME_COVER_FILE_NAMES = {
    "pokemon-go": "pokemongo",
    legendsarceus: "pokemonlegendsarceus",
    legendsza: "pokemonlegendsz-a",
    letsgopikachu: "pokemonletsgopikachu",
    letsgoeevee: "pokemonletsgoeevee",
    scarlet: "pokemonscarlet",
    shield: "pokemonshield",
    sword: "pokemonsword",
    violet: "pokemonviolet"
};

const GAME_COVER_ART = Object.fromEntries(
    GAMES.map(({ id }) => [
        id,
        `assets/game-covers/${GAME_COVER_FILE_NAMES[id] || id}.png`
    ])
);

/* =========================================================
   STATE
========================================================= */

const state = {

    currentView: "dex",

    currentDex: "national",

    currentPokemon: null,

    pokemonNavigationContext: null,

    currentGame: null,

    typeSelection: { type1: "", type2: "" },

    currentGameDex: "regional",

    gamePage: 0,

    gameFilter: "all",

    dexSort: "number",

    gameSort: "number",

    dexEntries: [],

    nationalEntries: [],

    dexPage: 0,

    searchRequest: 0,

    dexRequest: 0,

    gameRequest: 0,

    gameRenderRequest: 0,

    pokemonRequest: 0,

    moveRenderRequest: 0,

    profileRequest: 0,

    gameRegionalEntries: [],

    gameNationalEntries: [],

    pokemonCache: new Map(),

    dexCache: new Map(),

    encounterCache: new Map(),

    pokemonDbLocationCache: new Map(),

    gameAvailabilityCache: new Map(),

    dexEntriesById: new Map(),

    speciesCache: new Map(),

    moveCache: new Map(),

    abilityCache: new Map(),

    movePage: 0,

    moveSort: "name",

    moveGeneration: "all",

    currentSpecies: null,

    overviewEntries: [],

    overviewTextIndex: 0,

    searchIndex: null,

    searchResults: [],

    searchQuery: ""

};


/* =========================================================
   STORAGE
========================================================= */

function getCaughtData() {

    try {
        const parseStoredObject = key => {
            const stored = localStorage.getItem(key);
            if (!stored) return null;
            try {
                const parsed = JSON.parse(stored);
                return parsed && typeof parsed === "object" && !Array.isArray(parsed)
                    ? parsed
                    : null;
            } catch {
                return null;
            }
        };
        let data = parseStoredObject(STORAGE_KEY);
        const backup = parseStoredObject(CAUGHT_BACKUP_KEY);
        if (!data) {
            data = backup;
            if (data) {
                try {
                    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
                } catch (error) {
                    console.warn("Caught data backup could not be restored to the primary key", error);
                }
            }
        } else if (!backup) {
            try {
                localStorage.setItem(CAUGHT_BACKUP_KEY, JSON.stringify(data));
            } catch (error) {
                console.warn("Caught data backup could not be initialized", error);
            }
        }
        data ||= {};
        if (!data.brilliantdiamond && data.brilliantdiamond2) data.brilliantdiamond = data.brilliantdiamond2;
        if (!data.shiningpearl && data.shiningpearl2) data.shiningpearl = data.shiningpearl2;
        return data;

    } catch {

        return {};

    }

}


function saveCaughtData(data) {
    try {
        const serialized = JSON.stringify(data);
        localStorage.setItem(STORAGE_KEY, serialized);
        try {
            localStorage.setItem(CAUGHT_BACKUP_KEY, serialized);
        } catch (error) {
            console.warn("Caught data backup could not be saved", error);
        }
        return true;
    } catch (error) {
        console.warn("Caught data could not be saved", error);
        return false;
    }
}


function isCaught(gameId, pokemonId) {

    const data = getCaughtData();

    return !!(
        data[gameId] &&
        data[gameId][pokemonId]
    );

}


function setCaught(gameId, pokemonId, value) {

    const data = getCaughtData();

    if (!data[gameId]) {
        data[gameId] = {};
    }

    if (value) {

        data[gameId][pokemonId] = true;

    } else {

        delete data[gameId][pokemonId];

    }

    return saveCaughtData(data);

}


/* =========================================================
   API
========================================================= */

async function apiFetch(url) {

    const response = await fetch(url);

    if (!response.ok) {
        throw new Error(
            `API error ${response.status}`
        );
    }

    return response.json();

}


async function getPokemon(id) {

    const key = String(id);

    if (state.pokemonCache.has(key)) {
        return state.pokemonCache.get(key);
    }

    const pokemon = await apiFetch(
        `${API}/pokemon/${key}`
    );

    state.pokemonCache.set(
        key,
        pokemon
    );

    return pokemon;

}


async function getPokemonSpecies(id) {
    const key = String(id);
    if (state.speciesCache.has(key)) return state.speciesCache.get(key);
    const species = await apiFetch(`${API}/pokemon-species/${key}`);
    state.speciesCache.set(key, species);
    return species;
}


async function getMove(name) {
    if (state.moveCache.has(name)) return state.moveCache.get(name);
    const move = await apiFetch(`${API}/move/${name}`);
    state.moveCache.set(name, move);
    return move;
}

async function getAbility(name) {
    if (state.abilityCache.has(name)) return state.abilityCache.get(name);
    const ability = await apiFetch(`${API}/ability/${name}`);
    state.abilityCache.set(name, ability);
    return ability;
}


async function openPokemonSpecies(speciesId, gameId = null, navigationContext = undefined) {
    const requestId = ++state.pokemonRequest;
    const species = await getPokemonSpecies(speciesId);
    if (requestId !== state.pokemonRequest) return;
    const defaultPokemon = species.varieties.find(item => item.is_default) || species.varieties[0];
    const pokemonId = getPokemonIdFromPokemonUrl(defaultPokemon.pokemon.url);
    await openPokemon(pokemonId, gameId, navigationContext, requestId);
}


async function getPokedex(apiName) {

    if (state.dexCache.has(apiName)) {
        return state.dexCache.get(apiName);
    }

    const data = await apiFetch(
        `${API}/pokedex/${apiName}`
    );

    state.dexCache.set(
        apiName,
        data
    );

    return data;

}


const DEX_API_BY_ID = {
    kanto: "kanto",
    johto: "original-johto",
    hoenn: "hoenn",
    sinnoh: "original-sinnoh",
    "sinnoh-platinum": "extended-sinnoh",
    "unova-original": "original-unova",
    unova: "updated-unova",
    kalos: ["kalos-central", "kalos-coastal", "kalos-mountain"],
    alola: "updated-alola",
    "alola-original": "original-alola",
    galar: "galar",
    "isle-of-armor": "isle-of-armor",
    "crown-tundra": "crown-tundra",
    hisui: "hisui",
    paldea: "paldea",
    kitakami: "kitakami",
    blueberry: "blueberry",
    "lumiose-city": "lumiose-city",
    hyperspace: "hyperspace",
    national: "national"
};


function getDexApi(dexId) {
    return DEX_API_BY_ID[dexId] || dexId;
}


async function getDexData(apiNames) {
    const names = Array.isArray(apiNames) ? apiNames : [apiNames];
    const datasets = await Promise.all(names.map(getPokedex));
    return {
        pokemon_entries: datasets.flatMap(data => data.pokemon_entries)
    };
}


async function getNationalEntries() {
    if (state.nationalEntries.length) return state.nationalEntries;
    const data = await getPokedex("national");
    state.nationalEntries = data.pokemon_entries.map(entry => ({
        id: entry.entry_number,
        pokemonId: getPokemonIdFromUrl(entry.pokemon_species.url),
        name: entry.pokemon_species.name
    }));
    return state.nationalEntries;
}


async function getDexEntriesById(dexId) {
    if (state.dexEntriesById.has(dexId)) return state.dexEntriesById.get(dexId);
    const dexData = await getDexData(getDexApi(dexId));
    const entries = dexData.pokemon_entries.map(entry => ({
        id: entry.entry_number,
        pokemonId: getPokemonIdFromUrl(entry.pokemon_species.url),
        name: entry.pokemon_species.name
    }));
    state.dexEntriesById.set(dexId, entries);
    return entries;
}


function getPokemonIdFromUrl(url) {

    const match = url.match(
        /\/pokemon-species\/(\d+)\//
    );

    if (match) {
        return Number(match[1]);
    }

    return null;

}


function getPokemonIdFromPokemonUrl(url) {

    const match = url.match(
        /\/pokemon\/(\d+)\//
    );

    if (match) {
        return Number(match[1]);
    }

    return null;

}


/* =========================================================
   HELPERS
========================================================= */

function capitalize(value) {

    return value
        .replace(/-/g, " ")
        .replace(/\b\w/g, letter =>
            letter.toUpperCase()
        );

}


function formatPokemonName(value) {
    const name = String(value || "");
    const normalized = name.toLowerCase().replaceAll("_", "-");
    if (["nidoran-f", "nidoran-female"].includes(normalized)) return "Nidoran♀";
    if (["nidoran-m", "nidoran-male"].includes(normalized)) return "Nidoran♂";
    return capitalize(name);
}

function localizedResourceName(resource, fallbackName = "") {
    const localized = resource?.names?.find(item => item.language?.name === appLanguage)?.name;
    return localized || fallbackName || capitalize(resource?.name || "");
}

function getDexDisplayName(dex) {
    return dex.id === "national" ? t("nationalPokedex") : dex.name;
}

function getDexSubtitle(dex) {
    if (dex.id === "national") return t("nationalListSubtitle");
    const generationNumber = /Generation (\d+)/.exec(dex.subtitle)?.[1];
    if (generationNumber) return formatGenerationName(`Generation ${generationNumber}`);
    return dex.subtitle;
}

function displayGameName(game) {
    return game.name.replace(/^Pokémon\s+/, "");
}

function displayVersionName(versionName) {
    const version = normalizeApiVersionName(versionName);
    const game = GAMES.find(item => item.id === version
        || (GAME_API_VERSIONS[item.id] || []).includes(version));
    if (game) return displayGameName(game);

    const groupedVersions = {
        "red-blue": "Red/Blue",
        "gold-silver": "Gold/Silver",
        "ruby-sapphire": "Ruby/Sapphire",
        "firered-leafgreen": "FireRed/LeafGreen",
        "diamond-pearl": "Diamond/Pearl",
        "black-white": "Black/White"
    };
    return groupedVersions[version] || capitalize(version.replaceAll("-", " "));
}


function hexToRgba(hex, alpha = .25) {

    const clean = hex.replace("#", "");

    const r = parseInt(
        clean.substring(0, 2),
        16
    );

    const g = parseInt(
        clean.substring(2, 4),
        16
    );

    const b = parseInt(
        clean.substring(4, 6),
        16
    );

    return `rgba(${r},${g},${b},${alpha})`;

}


function getTypeBadge(type) {

    const color =
        TYPE_COLORS[type] || "#777";

    return `
        <span
            class="type-badge"
            style="--type-color:${color}"
        >
            ${UI_TEXT[appLanguage].typeNames[type] || type}
        </span>
    `;

}


function getCardTypeStyle(pokemon) {

    const first =
        pokemon.types[0]?.type.name || "normal";

    const second =
        pokemon.types[1]?.type.name || first;

    const firstColor =
        TYPE_COLORS[first];

    const secondColor =
        TYPE_COLORS[second];

    return `
        --type-color:${firstColor};
        --type-color-2:${secondColor};
        --type-shadow:${hexToRgba(firstColor, .22)};
    `;

}


/* =========================================================
   VIEW MANAGEMENT
========================================================= */

function showView(viewId) {

    if (viewId !== "pokemonView") stopSpeciesSpeech();

    document.querySelectorAll(".view")
        .forEach(view => {

            view.classList.remove(
                "active-view"
            );

        });

    const view =
        document.getElementById(viewId);

    if (view) {
        view.classList.add(
            "active-view"
        );
    }

    state.currentView = viewId;

}


function setSidebarSelection(mainButtonId, childButtonSelector = null) {
    document.querySelectorAll(
        ".sidebar-nav .nav-main-button.active, .sidebar-nav .submenu-button.active, .sidebar-nav .game-button.active"
    ).forEach(button => button.classList.remove("active"));

    document.getElementById(mainButtonId)?.classList.add("active");
    if (childButtonSelector) {
        document.querySelector(childButtonSelector)?.classList.add("active");
    }
}


/* =========================================================
   POKEDEX
========================================================= */

async function openDex(dexId) {
    const dex = POKEDEXES.find(item => item.id === dexId);
    if (!dex) return;

    const requestId = ++state.dexRequest;
    state.gameRequest += 1;
    state.pokemonRequest += 1;
    stopSpeciesSpeech();

    state.currentDex = dexId;
    state.currentGame = null;
    state.pokemonNavigationContext = "dex";

    state.dexSort =
        document.getElementById("dexSort").value;

    setSidebarSelection(
        "pokedexMenuButton",
        `.submenu-button[data-dex="${dexId}"]`
    );

    showView("dexView");

    document.getElementById("pageTitle")
        .textContent = dexId === "national" ? t("nationalPokedex") : `${t("pokedex")} ${dex.name}`;

    document.getElementById("breadcrumb")
        .textContent = "";

    document.getElementById("pokemonGrid")
        .innerHTML = "";
    document.getElementById("loadMoreButton").hidden = true;

    state.dexPage = 0;

    document.getElementById("loading")
        .classList.add("active");

    try {

        if (dexId === "national") {

            await loadNationalDex(requestId);

        } else {

            const data =
                await getDexData(dex.api);
            if (requestId !== state.dexRequest) return;

            state.dexEntries =
                data.pokemon_entries.map((entry, order) => {

                    return {
                        id: entry.entry_number,
                        order,
                        pokemonId:
                            getPokemonIdFromUrl(
                                entry.pokemon_species.url
                            ),
                        name:
                            entry.pokemon_species.name
                    };

                });

            const seenPokemon = new Set();
            state.dexEntries = state.dexEntries.filter(entry => {
                if (dexId === "sinnoh" && entry.pokemonId === 490) return false;
                if (seenPokemon.has(entry.pokemonId)) return false;
                seenPokemon.add(entry.pokemonId);
                return true;
            });

            await renderDexEntries(
                state.dexEntries,
                false,
                requestId
            );

        }

    } catch (error) {
        if (requestId !== state.dexRequest) return;

        console.error(error);

        document.getElementById("pokemonGrid")
            .innerHTML = `
                <div class="error-state">
                    ${appLanguage === "fi" ? "Pokédexin lataaminen epäonnistui." : "The Pokédex could not be loaded."}
                    <br><br>
                    ${error.message}
                </div>
            `;

    }

    if (requestId === state.dexRequest) {
        document.getElementById("loading")
            .classList.remove("active");
    }

}


/* =========================================================
   NATIONAL DEX
========================================================= */

async function loadNationalDex(requestId = state.dexRequest) {
    const entries = await getNationalEntries();
    if (requestId !== state.dexRequest) return;
    state.dexEntries = entries;
    await renderDexEntries(
        state.dexEntries,
        false,
        requestId
    );

}


/* =========================================================
   RENDER DEX
========================================================= */

async function renderDexEntries(entries, append = false, requestId = state.dexRequest, navigationContext = state.pokemonNavigationContext === "search" ? "search" : "dex") {
    if (requestId !== state.dexRequest) return;

    const sorted =
        [...entries].sort(
            (a, b) => {

                if (
                    state.dexSort === "name"
                ) {
                    return a.name.localeCompare(
                        b.name
                    );
                }

                return (a.order ?? a.id) - (b.order ?? b.id);

            }
        );

    const grid =
        document.getElementById(
            "pokemonGrid"
        );

    if (!append) {
        grid.innerHTML = "";
        document.getElementById("loadMoreButton").hidden = true;
    }

    const start = state.dexPage * POKEMON_PAGE_SIZE;
    const page = sorted.slice(start, start + POKEMON_PAGE_SIZE);
    const cards = await Promise.all(page.map(async entry => {
        try {
            const pokemon = await getPokemon(entry.pokemonId);
            return createPokemonCard(pokemon, entry.id, navigationContext);
        } catch (error) {
            console.warn("Pokemon load failed", entry, error);
            return null;
        }
    }));
    if (requestId !== state.dexRequest) return;
    cards.filter(Boolean).forEach(card => grid.appendChild(card));

    const loadMoreButton = document.getElementById("loadMoreButton");
    loadMoreButton.hidden = start + page.length >= sorted.length;

}


function createPokemonCard(
    pokemon,
    displayNumber = pokemon.id,
    navigationContext = "dex"
) {

    const card =
        document.createElement("article");

    card.className =
        "pokemon-card";

    card.style.cssText =
        getCardTypeStyle(pokemon);

    const types =
        pokemon.types
            .map(type =>
                getTypeBadge(
                    type.type.name
                )
            )
            .join("");

    card.innerHTML = `

        <div class="pokemon-card-top">

            <span class="pokemon-number">
                #${String(displayNumber).padStart(3, "0")}
            </span>

        </div>

        <img
            class="pokemon-image"
            src="${
                pokemon.sprites.other?.["official-artwork"]?.front_default
                || pokemon.sprites.front_default
            }"
            alt="${formatPokemonName(pokemon.name)}"
            loading="lazy"
        >

        <div class="pokemon-card-bottom">

            <h3 class="pokemon-card-name">
                ${formatPokemonName(pokemon.name)}
            </h3>

            <div class="type-row">
                ${types}
            </div>

        </div>

    `;

    card.addEventListener(
        "click",
        () => openPokemon(
            pokemon.id,
            navigationContext === "game" ? state.currentGame?.id || null : null,
            navigationContext
        )
    );

    return card;

}


/* =========================================================
   GAME
========================================================= */

async function openGame(gameId) {

    const game =
        GAMES.find(
            item => item.id === gameId
        );

    if (!game) return;

    const requestId = ++state.gameRequest;
    state.pokemonRequest += 1;
    stopSpeciesSpeech();

    setSidebarSelection(
        "gamesMenuButton",
        `.game-button[data-game="${gameId}"]`
    );

    const selectedGameButton = document.querySelector(`.game-button[data-game="${gameId}"]`);
    const generationGroup = selectedGameButton?.closest(".generation-group");
    const gamesSection = document.getElementById("gamesSubmenu")?.closest(".nav-section");
    gamesSection?.classList.add("open");
    generationGroup?.classList.add("open");
    generationGroup?.querySelector(".generation-toggle")?.setAttribute("aria-expanded", "true");

    state.currentGame = game;

    state.currentGameDex =
        "regional";

    state.gamePage = 0;
    document.getElementById("loadMoreGameButton").hidden = true;

    state.gameFilter =
        "all";

    document.querySelectorAll(
        ".game-button"
    ).forEach(button => {

        button.classList.toggle(
            "active",
            button.dataset.game === gameId
        );

    });

    showView("gameView");

    document.getElementById("pageTitle")
        .textContent = game.name;

    document.getElementById("breadcrumb")
        .textContent = t("games");

    document.getElementById("gameTitle")
        .textContent = game.name;

    document.getElementById("gameDescription")
        .textContent =
        t("gameCollectionDescription").replace("{generation}", formatGenerationName(game.generation));

    renderGameCover(game);

    document.querySelectorAll(
        ".game-tab"
    ).forEach(button => {

        button.classList.toggle(
            "active",
            button.dataset.gameDex === "regional"
        );

    });

    document.querySelectorAll(
        ".game-filter"
    ).forEach(button => {

        button.classList.toggle(
            "active",
            button.dataset.filter === "all"
        );

    });

    await loadGameDex(game, requestId);

}


function renderGameCover(game) {
    const image = document.getElementById("gameCoverArt");
    const fallback = document.getElementById("gameCoverFallback");
    if (!image || !fallback) return;

    image.hidden = true;
    image.removeAttribute("src");
    image.alt = `${game.name} cover art`;
    fallback.hidden = false;
    fallback.textContent = game.name.replace(/^Pokémon\s+/, "");

    const source = GAME_COVER_ART[game.id];
    if (!source) return;

    image.dataset.gameId = game.id;
    image.onload = () => {
        if (image.dataset.gameId !== game.id || state.currentGame?.id !== game.id) return;
        image.hidden = false;
        fallback.hidden = true;
    };
    image.onerror = () => {
        if (image.dataset.gameId !== game.id || state.currentGame?.id !== game.id) return;
        image.hidden = true;
        fallback.hidden = false;
    };
    image.src = source;
}


async function loadGameDex(game = state.currentGame, requestId = state.gameRequest) {

    if (!game) return;

    const regionalIds = new Set();
    const regionalEntries = [];

    for (const dexId of game.dexes) {
        try {
            const entries = await getDexEntriesById(dexId);
            if (requestId !== state.gameRequest) return;
            entries.forEach(entry => {
                if (game.excludesRegional?.includes(entry.pokemonId)) return;
                if (regionalIds.has(entry.pokemonId)) return;
                regionalIds.add(entry.pokemonId);
                regionalEntries.push({ ...entry, order: regionalEntries.length });
            });
        } catch (error) {
            console.warn(`Could not load ${getDexApi(dexId)}`, error);
        }
    }

    if (requestId !== state.gameRequest) return;

    state.gameRegionalEntries =
        regionalEntries;


    try {
        const national = await getNationalEntries();
        if (requestId !== state.gameRequest) return;
        state.gameNationalEntries = national.filter(entry => {
            const withinLimit = entry.id <= game.nationalLimit || game.nationalExtras?.includes(entry.pokemonId);
            const availableInGame = game.regionalOnlyNational
                ? regionalIds.has(entry.pokemonId)
                : withinLimit;
            return availableInGame;
        });
    } catch (error) {
        if (requestId !== state.gameRequest) return;
        console.error("National dex error", error);
        state.gameNationalEntries = [];
    }

    if (requestId !== state.gameRequest) return;
    state.gamePage = 0;
    await renderGameDex();

}


/* =========================================================
   RENDER GAME DEX
========================================================= */

async function renderGameDex(append = false) {

    const game = state.currentGame;
    if (!game) return;
    const requestId = state.gameRequest;
    const renderId = ++state.gameRenderRequest;

    const entries =
        state.currentGameDex === "regional"
            ? state.gameRegionalEntries
            : state.gameNationalEntries;

    const caughtData = getCaughtData()[game.id] || {};
    const filtered =
        entries.filter(entry => {

            if (
                state.gameFilter === "caught"
            ) {

                return (
                    !!caughtData[entry.pokemonId]
                );

            }

            if (
                state.gameFilter === "missing"
            ) {

                return (
                    !caughtData[entry.pokemonId]
                );

            }

            return true;

        });


    const sorted =
        [...filtered].sort(
            (a, b) => {

                if (
                    state.gameSort === "name"
                ) {

                    return a.name.localeCompare(
                        b.name
                    );

                }

                return (a.order ?? a.id) - (b.order ?? b.id);

            }
        );

    const lastPage = Math.max(0, Math.ceil(sorted.length / POKEMON_PAGE_SIZE) - 1);
    state.gamePage = Math.min(state.gamePage, lastPage);


    const grid =
        document.getElementById(
            "gamePokemonGrid"
        );

    const loadMoreButton = document.getElementById("loadMoreGameButton");
    if (!append) {
        grid.innerHTML = "";
        loadMoreButton.hidden = true;
    }


    if (!sorted.length) {

        grid.innerHTML = `
            <div class="empty-state">
                ${t("noGameDex")}
            </div>
        `;

        loadMoreButton.hidden = true;

        updateGameProgress();

        return;

    }


    const start = state.gamePage * POKEMON_PAGE_SIZE;
    const page = sorted.slice(start, start + POKEMON_PAGE_SIZE);
    const cards = await Promise.all(page.map(async entry => {
        try {
            const pokemon = await getPokemon(entry.pokemonId);
            return createGamePokemonCard(pokemon, entry);
        } catch (error) {
            console.warn(error);
            return null;
        }
    }));
    if (requestId !== state.gameRequest || renderId !== state.gameRenderRequest || game !== state.currentGame) return;
    cards.filter(Boolean).forEach(card => grid.appendChild(card));
    loadMoreButton.hidden = start + page.length >= sorted.length;

    updateGameProgress();

}


/* =========================================================
   GAME CARD
========================================================= */

function createGamePokemonCard(
    pokemon,
    entry
) {

    const card =
        createPokemonCard(
            pokemon,
            entry.id,
            "game"
        );

    const game = state.currentGame;
    if (!game) return card;

    card.classList.add("game-pokemon-card");
    const speciesId = entry.pokemonId ?? pokemon.id;
    const caughtButton = document.createElement("button");
    caughtButton.type = "button";
    caughtButton.className = "game-card-catch-button";

    const updateCaughtButton = () => {
        const caught = isCaught(game.id, speciesId);
        caughtButton.classList.toggle("caught", caught);
        caughtButton.setAttribute("aria-pressed", String(caught));
        caughtButton.innerHTML = `<span aria-hidden="true">${caught ? "✓" : "+"}</span><span>${caught ? t("caughtStatus") : t("markCaught")}</span>`;
        caughtButton.setAttribute("aria-label", `${caught ? t("unmarkInGame") : t("markInGame")} ${formatPokemonName(pokemon.name)} · ${game.name}`);
    };

    updateCaughtButton();
    caughtButton.addEventListener("click", async event => {
        event.stopPropagation();
        const nextCaught = !isCaught(game.id, speciesId);
        if (!setCaught(game.id, speciesId, nextCaught)) {
            alert(appLanguage === "fi" ? "Napattu-merkintää ei voitu tallentaa tähän selaimeen." : "Could not save the caught mark in this browser.");
            return;
        }
        updateCaughtButton();
        updateGameProgress();
        if (state.currentView === "pokemonView") updatePokemonNavigation();
        if (state.gameFilter !== "all") {
            state.gamePage = 0;
            await renderGameDex();
        }
    });
    card.appendChild(caughtButton);


    return card;

}


/* =========================================================
   GAME PROGRESS
========================================================= */

function updateGameProgress() {

    const game =
        state.currentGame;

    if (!game) return;


    const currentEntries = state.currentGameDex === "regional"
        ? state.gameRegionalEntries
        : state.gameNationalEntries;
    const availableIds = new Set(currentEntries.map(entry => entry.pokemonId));
    const caughtData = getCaughtData()[game.id] || {};


    const total =
        availableIds.size;


    let caught = 0;


    availableIds.forEach(
        pokemonId => {

            if (caughtData[pokemonId]) {

                caught++;

            }

        }
    );


    const percent =
        total === 0
            ? 0
            : Math.round(
                caught / total * 100
            );


    document.getElementById(
        "gameCaughtCount"
    ).textContent = caught;


    document.getElementById(
        "gameTotalCount"
    ).textContent = total;


    document.getElementById(
        "gameProgressPercent"
    ).textContent = `${percent}%`;


    document.getElementById(
        "gameProgressRing"
    ).style.setProperty(
        "--progress",
        percent
    );

    const regionalCaught = state.gameRegionalEntries.filter(entry => caughtData[entry.pokemonId]).length;
    const nationalCaught = state.gameNationalEntries.filter(entry => caughtData[entry.pokemonId]).length;
    document.getElementById("gameRegionalCount").textContent = `${regionalCaught}/${state.gameRegionalEntries.length}`;
    document.getElementById("gameNationalCount").textContent = `${nationalCaught}/${state.gameNationalEntries.length}`;
    document.getElementById("gameProgressLabel").textContent = state.currentGameDex === "regional" ? t("regional") : t("national");

}


/* =========================================================
   POKEMON DETAIL
========================================================= */

function getPokemonNavigationEntries() {
    if (state.pokemonNavigationContext === "game" && state.currentGame) {
        const entries = state.currentGameDex === "regional"
            ? state.gameRegionalEntries
            : state.gameNationalEntries;
        const caughtData = getCaughtData()[state.currentGame.id] || {};
        return [...entries].filter(entry => {
            if (state.gameFilter === "caught") return Boolean(caughtData[entry.pokemonId]);
            if (state.gameFilter === "missing") return !caughtData[entry.pokemonId];
            return true;
        }).sort((a, b) => state.gameSort === "name"
            ? a.name.localeCompare(b.name)
            : (a.order ?? a.id) - (b.order ?? b.id));
    }

    if (state.pokemonNavigationContext === "dex" || state.pokemonNavigationContext === "search") {
        return [...state.dexEntries].sort((a, b) => state.dexSort === "name"
            ? a.name.localeCompare(b.name)
            : (a.order ?? a.id) - (b.order ?? b.id));
    }

    return [];
}


function updatePokemonNavigation() {
    const controls = document.getElementById("pokemonNavigation");
    const previous = document.getElementById("previousPokemonButton");
    const next = document.getElementById("nextPokemonButton");
    const position = document.getElementById("pokemonNavigationPosition");
    if (!controls || !previous || !next || !position) return;

    const entries = getPokemonNavigationEntries();
    const speciesId = getPokemonIdFromUrl(state.currentPokemon?.species?.url);
    const index = entries.findIndex(entry => entry.pokemonId === speciesId);
    controls.hidden = index < 0;
    if (index < 0) return;

    position.textContent = `${index + 1} / ${entries.length}`;
    previous.disabled = index === 0;
    next.disabled = index === entries.length - 1;
}


function navigatePokemon(offset) {
    const entries = getPokemonNavigationEntries();
    const speciesId = getPokemonIdFromUrl(state.currentPokemon?.species?.url);
    const index = entries.findIndex(entry => entry.pokemonId === speciesId);
    if (index < 0) return;
    const destination = entries[index + offset];
    if (!destination) return;

    const gameId = state.pokemonNavigationContext === "game" ? state.currentGame?.id || null : null;
    openPokemonSpecies(destination.pokemonId, gameId, state.pokemonNavigationContext);
}

async function openPokemon(
    pokemonId,
    gameId = null,
    navigationContext = undefined,
    requestId = null
) {

    if (requestId === null) requestId = ++state.pokemonRequest;
    if (requestId !== state.pokemonRequest) return;
    state.gameRequest += 1;
    state.gameRenderRequest += 1;
    state.moveRenderRequest += 1;

    stopSpeciesSpeech();

    const pokemon =
        await getPokemon(
            pokemonId
        );
    if (requestId !== state.pokemonRequest) return;
    const speciesId = getPokemonIdFromUrl(pokemon.species.url) || pokemon.id;
    const species = await getPokemonSpecies(speciesId);
    if (requestId !== state.pokemonRequest) return;

    state.currentPokemon =
        pokemon;
    state.currentSpecies = species;
    state.moveGeneration = "all";
    state.overviewTextIndex = 0;

    state.currentGame = gameId
        ? GAMES.find(game => game.id === gameId) || null
        : null;
    if (navigationContext !== undefined) state.pokemonNavigationContext = navigationContext;


    showView("pokemonView");
    updatePokemonNavigation();

    document.getElementById(
        "pageTitle"
    ).textContent =
        formatPokemonName(pokemon.name);


    document.getElementById(
        "breadcrumb"
    ).textContent =
        t("pokemon");


    const detail =
        document.getElementById(
            "pokemonDetail"
        );


    const types =
        pokemon.types
            .map(type =>
                getTypeBadge(
                    type.type.name
                )
            )
            .join("");

    const moveGenerations = getPokemonMoveGenerations(pokemon);

    detail.innerHTML = `

        <div class="detail-container">

            <div class="detail-hero">

                <div class="detail-image-area">

                    <img
                        class="detail-image"
                        src="${
                            pokemon.sprites.other?.["official-artwork"]?.front_default
                            || pokemon.sprites.front_default
                        }"
                        alt="${formatPokemonName(pokemon.name)}"
                    >

                </div>


                <div class="detail-info">

                    <div class="detail-number">
                        #${String(species.id).padStart(4, "0")}
                    </div>

                    <h2>
                        ${formatPokemonName(pokemon.name)}
                    </h2>

                    <div class="type-row">
                        ${types}
                    </div>

                    <div class="detail-tabs">
                        <button class="detail-tab active" data-detail-tab="overview">${t("overview")}</button>
                        <button class="detail-tab" data-detail-tab="type-chart">${t("typeChart")}</button>
                        <button class="detail-tab" data-detail-tab="evolution">${t("evolutions")}</button>

                        <button
                            class="detail-tab"
                            data-detail-tab="games"
                        >
                            ${t("gamesTab")}
                        </button>

                        <button
                            class="detail-tab"
                            data-detail-tab="moves"
                        >
                            ${t("moves")}
                        </button>
                        <button class="detail-tab" data-detail-tab="forms">${t("forms")}</button>
                        <button class="detail-tab" data-detail-tab="locations">${t("locations")}</button>

                    </div>

                    <div class="detail-tab-content active" data-detail-content="overview">
                        <div class="pokemon-summary-grid">
                            <section class="pokemon-summary-card">
                                <div class="species-heading">
                                    <h3>${t("species")}</h3>
                                    <div class="species-heading-actions">
                                        <div class="overview-version-switcher" aria-label="${t("overviewVersion")}">
                                            <button id="previousOverviewText" type="button" aria-label="${t("previous")}" disabled>‹</button>
                                            <span id="overviewVersionLabel"></span>
                                            <button id="nextOverviewText" type="button" aria-label="${t("next")}" disabled>›</button>
                                        </div>
                                        <button id="readSpeciesButton" class="species-speak-button" type="button" aria-label="${t("readPokedexEntry")}" aria-pressed="false" disabled>${t("listen")}</button>
                                    </div>
                                </div>
                                <p id="speciesDescription">${t("loading")}</p>
                            </section>
                            <section class="pokemon-summary-card">
                                <div class="overview-facts">
                                    <span><small>${t("category")}</small><strong id="pokemonGenus">${t("loading")}</strong></span>
                                    <span><small>${t("height")}</small><strong>${pokemon.height / 10} m</strong></span>
                                    <span><small>${t("weight")}</small><strong>${pokemon.weight / 10} kg</strong></span>
                                    <span><small>${t("baseXp")}</small><strong>${pokemon.base_experience ?? "-"}</strong></span>
                                    <span><small>${t("abilities")}</small><strong id="pokemonAbilities">${pokemon.abilities.map(a => capitalize(a.ability.name)).join(", ")}</strong></span>
                                </div>
                            </section>
                        </div>
                    </div>

                    <div class="detail-tab-content" data-detail-content="type-chart">
                        <div class="pokemon-chart-grid">
                            <section class="matchup-section">
                                <h3>${t("defense")}</h3>
                                <div id="pokemonDefenses" class="pokemon-matchups"></div>
                            </section>
                            <section class="matchup-section">
                                <h3>${t("attack")}</h3>
                                <div id="pokemonAttacks" class="pokemon-matchups"></div>
                            </section>
                        </div>
                    </div>

                    <div class="detail-tab-content" data-detail-content="evolution">
                        <div id="evolutionChain" class="evolution-tree">${appLanguage === "fi" ? "Ladataan evoluutioketjua..." : "Loading evolution chain..."}</div>
                    </div>


                    <div
                        class="detail-tab-content"
                        data-detail-content="games"
                    >

                        <div
                            id="pokemonGamesList"
                            class="game-list"
                        >
                            ${t("loading")}
                        </div>

                    </div>


                    <div
                        class="detail-tab-content"
                        data-detail-content="moves"
                    >
                        <div class="moves-toolbar">
                            <label for="moveSort">${t("moveSort")}</label>
                            <select id="moveSort">
                                <option value="name">${t("name")}</option>
                                <option value="acc">${t("acc")}</option>
                                <option value="bp">${t("bp")}</option>
                            </select>
                            <label for="moveGenerationFilter">${t("moveGeneration")}</label>
                            <select id="moveGenerationFilter">
                                <option value="all">${t("allGenerations")}</option>
                                ${moveGenerations.map(generation => `<option value="${generation}">${formatGenerationName(`Generation ${generation}`)}</option>`).join("")}
                            </select>
                        </div>
                        <div id="pokemonMovesList" class="pokemon-moves-grid"></div>
                        <button id="loadMoreMovesButton" class="load-more-button" hidden>${t("loadMore")}</button>
                    </div>

                    <div class="detail-tab-content" data-detail-content="forms">
                        <div id="pokemonFormsList" class="pokemon-forms-grid">${t("loading")}</div>
                    </div>

                    <div class="detail-tab-content" data-detail-content="locations">
                        <div class="location-toolbar">
                            <label for="pokemonLocationGameSelect">${t("gamesTab")}</label>
                            <select id="pokemonLocationGameSelect" disabled>
                                <option>${t("loading")}</option>
                            </select>
                        </div>
                        <div id="pokemonLocationsList" class="pokemon-locations">
                            <div class="empty-state">${t("loading")}</div>
                        </div>
                    </div>

                </div>

            </div>

        </div>

    `;


    setupDetailTabs();
    state.moveSort = "name";
    document.getElementById("readSpeciesButton").addEventListener("click", toggleSpeciesSpeech);
    document.getElementById("previousOverviewText").addEventListener("click", () => moveOverviewText(-1));
    document.getElementById("nextOverviewText").addEventListener("click", () => moveOverviewText(1));
    document.getElementById("moveSort").addEventListener("change", async event => {
        const selectedSort = event.target.value;
        state.moveSort = selectedSort;
        const movesContainer = document.getElementById("pokemonMovesList");
        if (selectedSort !== "name") {
            movesContainer.innerHTML = `<div class="empty-state">${appLanguage === "fi" ? "Ladataan liikkeiden tietoja..." : "Loading move details..."}</div>`;
            await loadAllMoveDetails(pokemon);
        }
        if (state.currentPokemon?.id !== pokemon.id || state.moveSort !== selectedSort) return;
        await renderPokemonMoves(pokemon);
    });
    document.getElementById("moveGenerationFilter").addEventListener("change", event => {
        state.moveGeneration = event.target.value;
        void renderPokemonMoves(pokemon);
    });
    document.getElementById("loadMoreMovesButton").addEventListener("click", () => {
        loadMoreMoves();
    });
    observeInfiniteScrollButton(document.getElementById("loadMoreMovesButton"));

    renderPokemonMatchups(pokemon);
    await Promise.all([
        renderSpeciesDescription(species),
        renderPokemonAbilities(pokemon, requestId),
        renderEvolutionChain(species, requestId),
        renderPokemonGames(species.id, requestId),
        renderPokemonForms(species, requestId),
        renderPokemonMoves(pokemon, false, requestId)
    ]);

}


function setupDetailTabs() {

    document.querySelectorAll(
        ".detail-tab"
    ).forEach(button => {

        button.addEventListener(
            "click",
            () => {

                const tab =
                    button.dataset.detailTab;

                document.querySelectorAll(
                    ".detail-tab"
                ).forEach(item => {

                    item.classList.toggle(
                        "active",
                        item === button
                    );

                });

                document.querySelectorAll(
                    ".detail-tab-content"
                ).forEach(content => {

                    content.classList.toggle(
                        "active",
                        content.dataset.detailContent ===
                        tab
                    );

                });

                if (tab === "locations") {
                    const pokemon = state.currentPokemon;
                    const speciesId = getPokemonIdFromUrl(pokemon?.species?.url || "");
                    const gameSelect = document.getElementById("pokemonLocationGameSelect");
                    const container = document.getElementById("pokemonLocationsList");
                    if (!speciesId || !gameSelect || !container
                        || container.dataset.loadedFor === String(speciesId)
                        || container.dataset.loadingFor === String(speciesId)) return;

                    container.dataset.loadingFor = String(speciesId);
                    gameSelect.disabled = true;
                    container.innerHTML = `<div class="empty-state">${t("locationsLoading")}</div>`;
                    void renderPokemonLocations(speciesId, state.pokemonRequest);
                }

            }
        );

    });

}


/* =========================================================
   POKEMON GAMES
========================================================= */

function renderSpeciesDescription(species) {
    state.currentSpecies = species;
    const allEntries = species.flavor_text_entries || [];
    const localizedEntries = allEntries
        .filter(item => item.language?.name === appLanguage)
        .reduce((entries, item) => {
            const version = item.version?.name || "unknown";
            if (!entries.some(entry => entry.version?.name === version)) entries.push(item);
            return entries;
        }, []);
    const englishEntries = allEntries
        .filter(item => item.language?.name === "en")
        .reduce((entries, item) => {
            const version = item.version?.name || "unknown";
            if (!entries.some(entry => entry.version?.name === version)) entries.push(item);
            return entries;
        }, []);
    state.overviewEntries = localizedEntries.length ? localizedEntries : englishEntries;
    state.overviewTextIndex = Math.max(0, state.overviewEntries.length - 1);
    updateSpeciesOverviewText();
}

function moveOverviewText(offset) {
    const nextIndex = state.overviewTextIndex + offset;
    if (nextIndex < 0 || nextIndex >= state.overviewEntries.length) return;
    stopSpeciesSpeech();
    state.overviewTextIndex = nextIndex;
    updateSpeciesOverviewText();
}

function loadDescriptionTranslations() {
    try {
        return JSON.parse(localStorage.getItem(DESCRIPTION_TRANSLATION_CACHE_KEY) || "{}");
    } catch {
        return {};
    }
}


const FINNISH_POKEMON_GENUS_OVERRIDES = {
    "tiny turtle": "Pieni kilpikonna Pokémon",
    shellfish: "Simpukka Pokémon",
    butterfly: "Perhos Pokémon",
    "poison bee": "Myrkyllinen ampiainen Pokémon",
    "fire cat": "Tuli kissa Pokémon",
    heel: "Pahis Pokémon"
};

const FINNISH_GENUS_WORDS = {
    ant: "muurahainen", armor: "panssari", ball: "pallo", balloon: "ilmapallo", barrier: "suoja",
    bat: "lepakko", bear: "karhu", bee: "ampiainen", beetle: "kovakuoriainen", big: "suuri",
    bird: "lintu", blimp: "ilmalaiva", blossom: "kukka", bug: "ötökkä", butterfly: "perhos",
    cat: "kissa", cave: "luola", chime: "kello", claw: "kynsi", coal: "hiili", cobra: "kobra",
    coconut: "kookos", cocoon: "kotelo", color: "väri", comet: "komeetta", cotton: "puuvilla",
    duck: "ankka", eel: "ankerias", electric: "sähkö", emotion: "tunne", egg: "muna",
    fairy: "keiju", fire: "tuli", fish: "kala", flame: "liekki", flower: "kukka", fox: "kettu",
    frost: "pakkanen", gas: "kaasu", goldfish: "kultakala", grass: "ruoho", hairy: "karvainen",
    hand: "käsi", horse: "hevonen", insect: "hyönteis", iron: "rauta", joy: "ilo", key: "avain",
    legendary: "legendaarinen", lizard: "lisko", little: "pieni", long: "pitkä", louse: "täi",
    magnet: "magneetti", mantis: "sirkka", mythical: "myyttinen", mole: "myyrä", monkey: "apina",
    mountain: "vuori", mouse: "hiiri", mud: "muta", mushroom: "sieni", mysterious: "mysteeri",
    neck: "kaula", night: "yö", parasite: "loinen", pin: "piikki", pigeon: "kyyhkynen",
    pig: "possu", poison: "myrkyllinen", puppy: "pentu", rabbit: "kani", rat: "rotta",
    rare: "harvinainen", rock: "kivi", sea: "meri", seed: "siemen", shield: "kilpi", shellfish: "simpukka",
    shape: "muoto", sludge: "lieju", snake: "käärme", snow: "lumi", snowman: "lumiukko",
    song: "laulu", sound: "ääni", sparrow: "varpunen", spider: "hämähäkki", sprout: "taimi",
    star: "tähti", steel: "teräs", seedling: "taimi", sword: "miekka", tadpole: "nuijapää",
    tiny: "pieni", turtle: "kilpikonna", virtual: "virtuaalinen", water: "vesi", weather: "sää",
    weed: "rikkaruoho", white: "valkoinen", wild: "villi", wind: "tuuli", wish: "toive",
    wolf: "susi", dragon: "lohikäärme", darkness: "pimeys", drill: "pora", scorpion: "skorpioni",
    predator: "saalistaja", rascal: "veijari", heel: "pahis", fiery: "tulinen", lunar: "kuu",
    solar: "aurinko", island: "saari", guardian: "suojelija", sun: "aurinko", wing: "siipi",
    winged: "siivekäs", spirit: "henki", ghost: "aave", vengeful: "kostonhimoinen",
    moon: "kuu"
};


function translatePokemonGenusToFinnish(genus) {
    const withoutPokemon = String(genus || "")
        .replace(/\s+pok(?:é|e)mon$/i, "")
        .trim();
    const normalized = withoutPokemon.toLowerCase();
    if (FINNISH_POKEMON_GENUS_OVERRIDES[normalized]) {
        return Promise.resolve(FINNISH_POKEMON_GENUS_OVERRIDES[normalized]);
    }

    const words = normalized.split(/\s+/).filter(Boolean);
    if (words.length && words.every(word => FINNISH_GENUS_WORDS[word])) {
        return Promise.resolve(`${words.map(word => FINNISH_GENUS_WORDS[word]).join(" ")} Pokémon`);
    }
    return translateEnglishTextToFinnish(genus);
}


async function translateEnglishTextToFinnish(value) {
    const sourceText = String(value || "").replace(/[\n\f\r]+/g, " ").replace(/\s+/g, " ").trim();
    if (!sourceText) return null;
    const translations = loadDescriptionTranslations();
    if (translations[sourceText]) return translations[sourceText];

    const chunks = [];
    let remaining = sourceText;
    const getByteLength = text => new TextEncoder().encode(text).length;
    while (getByteLength(remaining) > 430) {
        const candidate = remaining.slice(0, 400);
        const splitAt = candidate.lastIndexOf(" ");
        const boundary = splitAt > 0 ? splitAt : 400;
        chunks.push(remaining.slice(0, boundary).trim());
        remaining = remaining.slice(boundary).trim();
    }
    if (remaining) chunks.push(remaining);

    const translatedChunks = [];
    for (const chunk of chunks) {
        try {
            const params = new URLSearchParams({ q: chunk, langpair: "en|fi" });
            const response = await fetch(`https://api.mymemory.translated.net/get?${params}`);
            if (!response.ok) return null;
            const data = await response.json();
            const translated = data.responseData?.translatedText?.trim();
            if (!translated || Number(data.responseStatus) >= 400) return null;
            translatedChunks.push(translated);
        } catch {
            return null;
        }
    }

    const translatedText = translatedChunks.join(" ").replace(/\s+/g, " ").trim();
    if (!translatedText || translatedText.toLowerCase() === sourceText.toLowerCase()) return null;
    translations[sourceText] = translatedText;
    try {
        localStorage.setItem(DESCRIPTION_TRANSLATION_CACHE_KEY, JSON.stringify(translations));
    } catch {
        // The translation remains usable in this view if local storage is full or unavailable.
    }
    return translatedText;
}


async function updateSpeciesOverviewText() {
    const description = document.getElementById("speciesDescription");
    if (!description) return;
    const entry = state.overviewEntries[state.overviewTextIndex];
    const species = state.currentSpecies;
    const language = appLanguage;
    const localGenus = species?.genera?.find(item => item.language?.name === language)?.genus || "";
    const englishGenus = species?.genera?.find(item => item.language?.name === "en")?.genus || "";
    const sourceGenus = localGenus || englishGenus;
    const genusElement = document.getElementById("pokemonGenus");
    const readButton = document.getElementById("readSpeciesButton");
    const versionLabel = document.getElementById("overviewVersionLabel");
    const previousButton = document.getElementById("previousOverviewText");
    const nextButton = document.getElementById("nextOverviewText");
    const sourceText = entry?.flavor_text?.replace(/[\n\f\r]+/g, " ").replace(/\s+/g, " ").trim() || "";
    const sourceLanguage = entry?.language?.name || language;
    const needsTranslation = language === "fi" && sourceLanguage === "en";
    const speechLanguage = needsTranslation ? "en" : sourceLanguage;
    if (genusElement) genusElement.textContent = (language === "fi" && !localGenus ? t("translating") : sourceGenus) || t("notAvailable");
    description.textContent = entry ? (needsTranslation ? t("translating") : sourceText) : t("noOverviewForLanguage");
    description.dataset.speechLang = speechLanguage;
    description.dataset.speechName = formatPokemonName(state.currentPokemon?.name || species?.name);
    description.dataset.speechGenus = sourceGenus;
    description.dataset.speechHeight = String((state.currentPokemon?.height ?? 0) / 10);
    description.dataset.speechWeight = String((state.currentPokemon?.weight ?? 0) / 10);
    const speechAvailable = "speechSynthesis" in window && "SpeechSynthesisUtterance" in window;
    if (readButton) {
        readButton.disabled = !entry || !speechAvailable || needsTranslation;
        readButton.title = speechAvailable ? "" : t("speechUnsupported");
    }
    if (versionLabel) {
        const version = entry?.version?.name ? displayVersionName(entry.version.name) : "";
        versionLabel.textContent = version;
        versionLabel.title = version;
    }
    if (previousButton) previousButton.disabled = !entry || state.overviewTextIndex <= 0;
    if (nextButton) nextButton.disabled = !entry || state.overviewTextIndex >= state.overviewEntries.length - 1;

    if (!entry) return;
    const selectedIndex = state.overviewTextIndex;
    const translateGenus = language === "fi" && !localGenus && Boolean(englishGenus);
    const [translatedText, translatedGenus] = await Promise.all([
        needsTranslation ? translateEnglishTextToFinnish(sourceText) : Promise.resolve(null),
        translateGenus ? translatePokemonGenusToFinnish(englishGenus) : Promise.resolve(null)
    ]);
    if (state.currentSpecies !== species || state.overviewTextIndex !== selectedIndex || appLanguage !== language) return;

    if (translatedText) {
        description.textContent = translatedText;
        description.dataset.speechLang = "fi";
    } else if (needsTranslation) {
        description.textContent = sourceText;
        description.dataset.speechLang = "en";
    }
    if (translatedGenus) {
        if (genusElement) genusElement.textContent = translatedGenus;
        description.dataset.speechGenus = translatedGenus;
    } else if (translateGenus && genusElement) {
        genusElement.textContent = englishGenus || t("notAvailable");
    }
    if (readButton) readButton.disabled = !speechAvailable || !sourceText;
}


let activeSpeciesSpeech = null;

function stopSpeciesSpeech() {
    if ("speechSynthesis" in window) window.speechSynthesis.cancel();

    if (activeSpeciesSpeech?.button.isConnected) {
        activeSpeciesSpeech.button.textContent = t("listen");
        activeSpeciesSpeech.button.setAttribute("aria-pressed", "false");
    }

    activeSpeciesSpeech = null;
}


function toggleSpeciesSpeech() {
    const button = document.getElementById("readSpeciesButton");
    const description = document.getElementById("speciesDescription");
    if (!button || !description || button.disabled) return;

    if (activeSpeciesSpeech?.button === button) {
        stopSpeciesSpeech();
        return;
    }

    stopSpeciesSpeech();

    const isFinnish = description.dataset.speechLang === "fi";
    const types = state.currentPokemon?.types?.map(item => item.type.name) || [];
    const spokenTypes = types.map(type => UI_TEXT[appLanguage].typeNames[type] || capitalize(type));
    const typeIntroduction = spokenTypes.length
        ? `${isFinnish ? (spokenTypes.length > 1 ? "Tyypit: " : "Tyyppi: ") : (spokenTypes.length > 1 ? "Types: " : "Type: ")}${spokenTypes.join(isFinnish ? " ja " : " and ")}. `
        : "";
    const genus = description.dataset.speechGenus;
    const genusIntroduction = genus
        ? `${isFinnish ? "Laji" : "Category"}: ${genus}. `
        : "";
    const numberFormat = new Intl.NumberFormat(isFinnish ? "fi-FI" : "en-US", { maximumFractionDigits: 1 });
    const height = Number(description.dataset.speechHeight);
    const weight = Number(description.dataset.speechWeight);
    const heightText = isFinnish
        ? `${numberFormat.format(height)} ${height === 1 ? "metri" : "metriä"}`
        : `${numberFormat.format(height)} ${height === 1 ? "meter" : "meters"}`;
    const weightText = isFinnish
        ? `${numberFormat.format(weight)} ${weight === 1 ? "kilogramma" : "kilogrammaa"}`
        : `${numberFormat.format(weight)} ${weight === 1 ? "kilogram" : "kilograms"}`;
    const measurements = isFinnish
        ? `Pituus: ${heightText}. Paino: ${weightText}. `
        : `Height: ${heightText}. Weight: ${weightText}. `;
    const spokenText = `${description.dataset.speechName}. ${typeIntroduction}${genusIntroduction}${measurements}${description.textContent}`;
    const utterance = new SpeechSynthesisUtterance(spokenText);
    const voiceSettings = getPokedexVoiceSettings();
    utterance.lang = description.dataset.speechLang === "fi" ? "fi-FI" : "en-US";
    utterance.pitch = voiceSettings.pitch;
    utterance.rate = voiceSettings.rate;

    activeSpeciesSpeech = { button, utterance };
    button.textContent = t("stop");
    button.setAttribute("aria-pressed", "true");

    const resetButton = () => {
        if (activeSpeciesSpeech?.utterance !== utterance) return;
        activeSpeciesSpeech = null;
        if (!button.isConnected) return;
        button.textContent = t("listen");
        button.setAttribute("aria-pressed", "false");
    };

    utterance.onend = resetButton;
    utterance.onerror = resetButton;
    window.speechSynthesis.speak(utterance);
}


function getPokedexVoiceSettings() {
    const defaults = { pitch: 1, rate: 1 };
    try {
        const saved = JSON.parse(localStorage.getItem(VOICE_SETTINGS_KEY)) || {};
        const clamp = (value, minimum) => {
            const numericValue = Number(value);
            const validValue = Number.isFinite(numericValue) ? numericValue : 1;
            return Math.min(2, Math.max(minimum, validValue));
        };
        return {
            pitch: clamp(saved.pitch ?? defaults.pitch, 0),
            rate: clamp(saved.rate ?? defaults.rate, 0.5)
        };
    } catch {
        return defaults;
    }
}


function setupPokedexVoiceSettings() {
    const pitchInput = document.getElementById("voicePitch");
    const rateInput = document.getElementById("voiceRate");
    const pitchOutput = document.getElementById("voicePitchValue");
    const rateOutput = document.getElementById("voiceRateValue");
    if (!pitchInput || !rateInput) return;

    const settings = getPokedexVoiceSettings();
    pitchInput.value = settings.pitch;
    rateInput.value = settings.rate;

    const updateSettings = () => {
        const nextSettings = {
            pitch: Number(pitchInput.value),
            rate: Number(rateInput.value)
        };
        pitchOutput.textContent = nextSettings.pitch.toFixed(2);
        rateOutput.textContent = `${nextSettings.rate.toFixed(1)}×`;
        try {
            localStorage.setItem(VOICE_SETTINGS_KEY, JSON.stringify(nextSettings));
        } catch (error) {
            console.warn("Could not save voice settings", error);
        }
    };

    pitchInput.addEventListener("input", updateSettings);
    rateInput.addEventListener("input", updateSettings);
    updateSettings();
}


function evolutionMethodText(details, targetSpeciesName = "") {
    if (!details?.length) return "";
    const mossyRockAreas = new Set([
        "moss-rock", "eterna-forest", "pinwheel-forest", "kalos-route-20",
        "petalburg-woods", "lush-jungle", "-tall-grass-moss-rock"
    ]);
    const icyRockAreas = new Set([
        "ice-rock", "frost-cavern", "sinnoh-route-217", "twist-mountain",
        "shoal-cave", "mount-lanakila"
    ]);
    const readable = value => capitalize(value.replaceAll("-", " "));
    const methods = [...new Set(details.map(method => {
        const conditions = [];
        const trigger = method.trigger?.name;
        const location = method.location?.name;
        const itemName = method.item?.name ? readable(method.item.name) : "item";
        let action = "Meet the evolution requirement";

        if (trigger === "level-up") {
            action = method.min_level ? `Level ${method.min_level}` : "Level up";
            if (method.near_special_rock && (targetSpeciesName === "glaceon" || (location && icyRockAreas.has(location)))) {
                action = "Level up near an Icy Rock";
            } else if (method.near_special_rock || (location && (mossyRockAreas.has(location) || location.includes("moss-rock")))) {
                action = "Level up near a Mossy Rock";
            } else if (location && icyRockAreas.has(location)) action = "Level up near an Icy Rock";
            else if (location) conditions.push(`at ${readable(location)}`);
        } else if (trigger === "trade") {
            action = method.trade_species?.name
                ? `Trade for ${readable(method.trade_species.name)}`
                : "Trade";
        } else if (trigger === "use-item") action = `Using ${itemName}`;
        else if (trigger === "shed") action = "Level up with an empty party slot and a Poké Ball in your bag";
        else if (trigger === "spin") action = "Spin around with this Pokémon in your party";
        else if (trigger === "three-critical-hits") action = "Land 3 critical hits in one battle";
        else if (trigger === "tower-of-darkness") action = "Complete the Tower of Darkness trial";
        else if (trigger === "tower-of-waters") action = "Complete the Tower of Waters trial";
        else if (trigger === "take-damage") action = method.min_damage
            ? `Take ${method.min_damage} damage, then visit the required location`
            : "Take damage, then visit the required location";
        else if (trigger) action = readable(trigger);

        if (method.item?.name && trigger !== "use-item") conditions.push(`use ${itemName}`);
        if (method.held_item?.name) conditions.push(`holding ${readable(method.held_item.name)}`);
        if (method.time_of_day) conditions.push(`at ${method.time_of_day}`);
        if (method.min_happiness) conditions.push("with high friendship");
        if (method.min_affection) conditions.push("with high affection");
        if (method.min_beauty) conditions.push(`with Beauty ${method.min_beauty}+`);
        if (method.min_steps) conditions.push(`after walking ${method.min_steps} steps`);
        if (method.gender === 1) conditions.push("if female");
        if (method.gender === 2) conditions.push("if male");
        if (method.known_move?.name) conditions.push(`while knowing ${readable(method.known_move.name)}`);
        if (method.known_move_type?.name) conditions.push(`while knowing a ${readable(method.known_move_type.name)} move`);
        if (location && trigger !== "level-up") conditions.push(`at ${readable(location)}`);
        if (method.party_species?.name) conditions.push(`with ${readable(method.party_species.name)} in your party`);
        if (method.party_type?.name) conditions.push(`with a ${readable(method.party_type.name)}-type Pokémon in your party`);
        if (method.needs_overworld_rain) conditions.push("while it is raining");
        if (method.turn_upside_down) conditions.push("while holding the device upside down");
        if (method.relative_physical_stats !== null && method.relative_physical_stats !== undefined) {
            conditions.push(method.relative_physical_stats === 1 ? "when Attack is higher than Defense" : method.relative_physical_stats === -1 ? "when Defense is higher than Attack" : "when Attack and Defense are equal");
        }
        return conditions.length ? `${action} ${conditions.join(", ")}` : action;
    }))];

    const orderedMethods = methods.sort((a, b) => Number(a.startsWith("Level up near")) - Number(b.startsWith("Level up near")));
    if (appLanguage !== "fi") return orderedMethods.join(" or ");
    const translate = value => value
        .replaceAll("Level up near an Icy Rock", "Tasonnousu jääkiven lähellä")
        .replaceAll("Level up near a Mossy Rock", "Tasonnousu sammaleisen kiven lähellä")
        .replaceAll("Level up with an empty party slot and a Poké Ball in your bag", "Tasonnousu, kun ryhmässä on tilaa ja laukussa Poképallo")
        .replace(/Level (\d+)/g, "Taso $1")
        .replaceAll("Level up", "Tasonnousu")
        .replaceAll("Meet the evolution requirement", "Täytä evoluution ehdot")
        .replaceAll("Trade for ", "Vaihda Pokémoniin ")
        .replaceAll("Trade", "Vaihda")
        .replaceAll("Using ", "Käytä ")
        .replaceAll("Spin around with this Pokémon in your party", "Pyörähdä, kun tämä Pokémon on ryhmässäsi")
        .replaceAll("Land 3 critical hits in one battle", "Tee 3 kriittistä osumaa saman taistelun aikana")
        .replaceAll("Complete the Tower of Darkness trial", "Suorita Pimeyden tornin koe")
        .replaceAll("Complete the Tower of Waters trial", "Suorita Vesitornin koe")
        .replaceAll("Take damage, then visit the required location", "Ota vahinkoa ja käy vaaditussa paikassa")
        .replaceAll("then visit the required location", "ja käy vaaditussa paikassa")
        .replaceAll("damage, then visit", "vahinkoa ja käy")
        .replaceAll("with high friendship", "kun ystävyys on korkea")
        .replaceAll("with high affection", "kun kiintymys on korkea")
        .replaceAll("with Beauty ", "Kauneus-arvo ")
        .replaceAll("after walking ", "kun olet kävellyt ")
        .replaceAll(" steps", " askelta")
        .replaceAll("if female", "jos Pokémon on naaras")
        .replaceAll("if male", "jos Pokémon on uros")
        .replaceAll("while knowing a ", "kun se osaa ")
        .replaceAll("-type Pokémon in your party", "-tyypin Pokémon on ryhmässäsi")
        .replaceAll(" move", "-liikkeen")
        .replaceAll("while knowing ", "kun se osaa liikkeen ")
        .replaceAll("holding the device upside down", "pitämällä laitetta ylösalaisin")
        .replaceAll("while it is raining", "kun ulkona sataa")
        .replaceAll("holding ", "kun sillä on varusteena ")
        .replaceAll("at night", "yöllä")
        .replaceAll("at day", "päivällä")
        .replaceAll("at dusk", "hämärässä")
        .replaceAll("at ", "paikassa ")
        .replaceAll("use ", "käytä ")
        .replaceAll("when Attack is higher than Defense", "kun hyökkäys on puolustusta suurempi")
        .replaceAll("when Defense is higher than Attack", "kun puolustus on hyökkäystä suurempi")
        .replaceAll("when Attack and Defense are equal", "kun hyökkäys ja puolustus ovat yhtä suuret");
    return orderedMethods.map(translate).join(" tai ");
}


async function getPokemonEncounters(id) {
    const key = String(id);
    if (!state.encounterCache.has(key)) {
        state.encounterCache.set(key, apiFetch(`${API}/pokemon/${key}/encounters`));
    }
    try {
        return await state.encounterCache.get(key);
    } catch (error) {
        state.encounterCache.delete(key);
        throw error;
    }
}


function renderEvolutionNode(node, isRoot = true) {
    const speciesId = getPokemonIdFromUrl(node.species.url);
    const children = node.evolves_to || [];
    return `
        <div class="evolution-path-node${isRoot ? " root" : ""}">
            <button class="evolution-pokemon" data-species-id="${speciesId}">
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${speciesId}.png" alt="" loading="lazy">
                <span>#${String(speciesId).padStart(4, "0")} ${formatPokemonName(node.species.name)}</span>
            </button>
            ${children.length ? `<div class="evolution-branches">${children.map(child => `
                <div class="evolution-branch">
                    <div class="evolution-transition"><span aria-hidden="true">→</span><small>${evolutionMethodText(child.evolution_details, child.species.name)}</small></div>
                    ${renderEvolutionNode(child, false)}
                </div>
            `).join("")}</div>` : ""}
        </div>
    `;
}


async function renderEvolutionChain(species, requestId = state.pokemonRequest) {
    const container = document.getElementById("evolutionChain");
    try {
        const data = await apiFetch(species.evolution_chain.url);
        if (requestId !== state.pokemonRequest) return;
        container.innerHTML = renderEvolutionNode(data.chain);
        container.querySelectorAll("[data-species-id]").forEach(button => {
            button.addEventListener("click", () => openPokemonSpecies(Number(button.dataset.speciesId), state.currentGame?.id || null));
        });
    } catch (error) {
        if (requestId !== state.pokemonRequest) return;
        console.warn("Evolution chain load failed", error);
        container.textContent = t("evolutionLoadFailed");
    }
}


function matchupRows(groups) {
    const labels = ["×4", "×2", "×1", "×½", "×¼", "×0"];
    return labels.filter(label => groups[label]?.length).map(label => `
        <div class="pokemon-matchup-row">
            <strong>${label}</strong>
            <div class="type-row">${groups[label].map(getTypeBadge).join("")}</div>
        </div>
    `).join("") || `<span class="matchup-empty">${appLanguage === "fi" ? "Ei erityisiä tyyppivaikutuksia." : "No special type effects."}</span>`;
}


function renderPokemonMatchups(pokemon) {
    const defenseTypes = pokemon.types.map(item => item.type.name);
    const defenses = { "×4": [], "×2": [], "×1": [], "×½": [], "×¼": [], "×0": [] };
    TYPES.forEach(attackingType => {
        const multiplier = getCombinedDefenseMultiplier(attackingType, defenseTypes);
        const label = getMultiplierLabel(multiplier);
        if (defenses[label]) defenses[label].push(attackingType);
    });
    document.getElementById("pokemonDefenses").innerHTML = matchupRows(defenses);

    document.getElementById("pokemonAttacks").innerHTML = defenseTypes.map(attackingType => {
        const attacks = { "×4": [], "×2": [], "×1": [], "×½": [], "×¼": [], "×0": [] };
        TYPES.forEach(defendingType => {
            const label = getMultiplierLabel(getEffectiveness(attackingType, defendingType));
            attacks[label]?.push(defendingType);
        });
        return `
            <div class="pokemon-attack-type">
                <div class="pokemon-attack-heading">${getTypeBadge(attackingType)} <span>${t("movesWord")}</span></div>
                ${matchupRows(attacks)}
            </div>
        `;
    }).join("");
}


async function renderPokemonForms(species, requestId = state.pokemonRequest) {
    const container = document.getElementById("pokemonFormsList");
    try {
        const forms = await Promise.all(species.varieties.map(async variety => {
            const pokemon = await getPokemon(getPokemonIdFromPokemonUrl(variety.pokemon.url));
            return { variety, pokemon };
        }));
        if (requestId !== state.pokemonRequest) return;
        container.innerHTML = "";
        forms.forEach(({ variety, pokemon }) => {
            const button = document.createElement("button");
            button.className = "pokemon-form-card";
            const image = pokemon.sprites.other?.["official-artwork"]?.front_default || pokemon.sprites.front_default;
            button.innerHTML = `<img src="${image || ""}" alt="" loading="lazy"><span>${formatPokemonName(pokemon.name)}</span>${variety.is_default ? `<small>${t("defaultForm")}</small>` : ""}`;
            button.addEventListener("click", () => openPokemon(pokemon.id, state.currentGame?.id || null));
            container.appendChild(button);
        });
    } catch (error) {
        if (requestId !== state.pokemonRequest) return;
        console.warn("Pokemon forms load failed", error);
        container.textContent = t("formsLoadFailed");
    }
}

async function renderPokemonAbilities(pokemon, requestId = state.pokemonRequest) {
    const container = document.getElementById("pokemonAbilities");
    if (!container) return;
    const abilities = await Promise.all(pokemon.abilities.map(async entry => {
        try {
            const ability = await getAbility(entry.ability.name);
            return localizedResourceName(ability, capitalize(entry.ability.name));
        } catch {
            return capitalize(entry.ability.name);
        }
    }));
    if (requestId !== state.pokemonRequest || !container.isConnected) return;
    container.textContent = abilities.join(", ") || t("notAvailable");
}


async function loadAllMoveDetails(pokemon) {
    const missing = pokemon.moves.filter(entry => !state.moveCache.has(entry.move.name));
    for (let start = 0; start < missing.length; start += 12) {
        await Promise.all(missing.slice(start, start + 12).map(async entry => {
            try {
                await getMove(entry.move.name);
            } catch (error) {
                console.warn("Move details load failed", entry.move.name, error);
            }
        }));
    }
}


async function renderPokemonMoves(pokemon, append = false, requestId = state.pokemonRequest) {
    const container = document.getElementById("pokemonMovesList");
    const loadMore = document.getElementById("loadMoreMovesButton");
    if (!container || !loadMore) return;
    const renderId = ++state.moveRenderRequest;
    if (!append) loadMore.hidden = true;
    const moveEntries = pokemon.moves.filter(entry => getMoveGenerationLearnInfo(entry));
    if (state.moveSort === "name") {
        moveEntries.sort((a, b) => a.move.name.localeCompare(b.move.name));
    } else {
        const statKey = state.moveSort === "bp" ? "power" : "accuracy";
        moveEntries.sort((a, b) => {
            const aValue = state.moveCache.get(a.move.name)?.[statKey];
            const bValue = state.moveCache.get(b.move.name)?.[statKey];
            if (aValue == null && bValue == null) return a.move.name.localeCompare(b.move.name);
            if (aValue == null) return 1;
            if (bValue == null) return -1;
            return bValue - aValue || a.move.name.localeCompare(b.move.name);
        });
    }
    if (!append) {
        state.movePage = 0;
        container.innerHTML = "";
    } else {
        state.movePage += 1;
    }
    const pageSize = 16;
    const start = state.movePage * pageSize;
    const moves = moveEntries.slice(start, start + pageSize);
    if (!moves.length && !append) {
        container.innerHTML = `<div class="empty-state">${appLanguage === "fi" ? "Tälle Pokémonille ei löytynyt liikkeitä tässä sukupolvessa." : "No moves were found for this Pokémon in this generation."}</div>`;
        loadMore.hidden = true;
        return;
    }
    const cards = await Promise.all(moves.map(async entry => {
        try {
            const move = await getMove(entry.move.name);
            const card = document.createElement("article");
            card.className = "pokemon-move-card";
            const learnInfo = getMoveGenerationLearnInfo(entry);
            const level = learnInfo?.level_learned_at;
            card.innerHTML = `
                <strong>${localizedResourceName(move, capitalize(move.name))}</strong>
                <div><span>BP</span><b>${move.power ?? "—"}</b><span>Acc</span><b>${move.accuracy == null ? "—" : `${move.accuracy}%`}</b><span>PP</span><b>${move.pp ?? "—"}</b></div>
                ${level ? `<small>${t("level")} ${level}</small>` : ""}
            `;
            return card;
        } catch (error) {
            console.warn("Move details load failed", entry.move.name, error);
            return null;
        }
    }));
    if (requestId !== state.pokemonRequest || renderId !== state.moveRenderRequest) return;
    cards.filter(Boolean).forEach(card => container.appendChild(card));
    loadMore.hidden = start + moves.length >= moveEntries.length;
}


async function getAvailableGamesForPokemon(speciesId) {
    if (state.gameAvailabilityCache.has(speciesId)) {
        return state.gameAvailabilityCache.get(speciesId);
    }
    const availabilityPromise = Promise.all(GAMES.map(async game => {
        let available = speciesId <= game.nationalLimit;
        if (game.id === "pokemon-go") return { game, available: true };
        if (game.regionalOnlyNational || game.id === "letsgopikachu" || game.id === "letsgoeevee") {
            try {
                const entries = (await Promise.all(game.dexes.map(getDexEntriesById))).flat();
                available = entries.some(entry => entry.pokemonId === speciesId)
                    || Boolean(game.nationalExtras?.includes(speciesId));
            } catch {
                available = false;
            }
        }
        return { game, available };
    })).then(availability => availability.filter(item => item.available).map(item => item.game));
    state.gameAvailabilityCache.set(speciesId, availabilityPromise);
    return availabilityPromise;
}


function formatEncounterLocation(locationName) {
    if (/^kanto-safari-zone(?:-|$)/i.test(locationName)) {
        return "Kanto Safari Zone";
    }

    const name = locationName
        .replace(/-area(?:-[a-z0-9-]+)?$/i, "")
        .replace(/-south-towards-/g, " south toward ")
        .replace(/-north-towards-/g, " north toward ")
        .replace(/-towards-/g, " toward ")
        .replace(/-/g, " ");
    return name.split(" ").map(word => /^\d+$/.test(word) ? word : capitalize(word)).join(" ");
}


function getEncounterMethodLabel(methodName) {
    const labels = {
        walk: "Walking", surf: "Surfing", "old-rod": "Old Rod", "good-rod": "Good Rod",
        "super-rod": "Super Rod", "rock-smash": "Rock Smash", headbutt: "Headbutt",
        gift: "Gift", "gift-egg": "Gift egg", "only-one": "One-time encounter",
        pokeflute: "Poké Flute", honey: "Honey", "sos-encounter": "SOS encounter"
    };
    return labels[methodName] || capitalize(methodName.replaceAll("-", " "));
}


function formatEncounterDetails(versionDetails) {
    const summaries = new Set();
    versionDetails.forEach(version => (version.encounter_details || []).forEach(detail => {
        const parts = [getEncounterMethodLabel(detail.method?.name || "encounter")];
        const minLevel = detail.min_level;
        const maxLevel = detail.max_level;
        if (minLevel && maxLevel) parts.push(minLevel === maxLevel ? `Lv. ${minLevel}` : `Lv. ${minLevel}–${maxLevel}`);
        const conditions = (detail.condition_values || []).map(condition => capitalize(condition.name.replace(/^time-/, "").replaceAll("-", " ")));
        if (conditions.length) parts.push(conditions.join(", "));
        summaries.add(parts.join(" · "));
    }));
    return [...summaries];
}


function normalizePokemonDbText(value) {
    return String(value || "")
        .toLowerCase()
        .replace(/pok[eé]mon/g, " ")
        .replace(/&/g, " and ")
        .replace(/[^a-z0-9]+/g, " ")
        .replace(/\s+/g, " ")
        .trim();
}


function getPokemonDbGameIds(label) {
    const normalized = ` ${normalizePokemonDbText(label)} `;
    const matches = POKEMONDB_GAME_LABELS
        .map(([name, id]) => [normalizePokemonDbText(name), id])
        .sort((a, b) => b[0].length - a[0].length)
        .filter(([name]) => normalized.includes(` ${name} `))
        .map(([, id]) => id);
    const ids = new Set(matches);
    [
        ["ultrasun", "sun"], ["ultramoon", "moon"],
        ["black2", "black"], ["white2", "white"],
        ["omegaruby", "ruby"], ["alphasapphire", "sapphire"],
        ["brilliantdiamond", "diamond"], ["shiningpearl", "pearl"]
    ].forEach(([specific, base]) => {
        if (ids.has(specific)) ids.delete(base);
    });
    return [...ids];
}


function getPokemonDbNodeText(node) {
    if (node.nodeType === Node.TEXT_NODE) return node.nodeValue || "";
    if (node.nodeName === "BR") return " · ";
    return [...node.childNodes].map(getPokemonDbNodeText).join(" ");
}


function parsePokemonDbLocations(html) {
    const page = new DOMParser().parseFromString(html, "text/html");
    const heading = [...page.querySelectorAll("h1, h2, h3")]
        .find(element => /where to find/i.test(element.textContent || ""));
    const locationsTable = heading && [...page.querySelectorAll("table")]
        .find(table => (heading.compareDocumentPosition(table) & Node.DOCUMENT_POSITION_FOLLOWING) !== 0);
    if (!locationsTable) throw new Error("PokémonDB Where to find table was not found");

    const byGame = new Map();
    let spanningGames = [];
    let spanningRows = 0;
    [...locationsTable.querySelectorAll("tr")].forEach(row => {
        const cells = [...row.children].filter(cell => ["TD", "TH"].includes(cell.tagName));
        if (!cells.length) return;
        const currentGameIds = getPokemonDbGameIds(getPokemonDbNodeText(cells[0]));
        let gameIds = currentGameIds;
        let infoCells = cells.slice(1);
        if (currentGameIds.length) {
            spanningGames = currentGameIds;
            spanningRows = Math.max(0, Number(cells[0].rowSpan || 1) - 1);
        } else if (spanningRows > 0) {
            gameIds = spanningGames;
            infoCells = cells;
            spanningRows -= 1;
        } else {
            return;
        }

        const acquisition = infoCells
            .map(getPokemonDbNodeText)
            .map(text => text.replace(/\s+/g, " ").replace(/\s+,/g, ",").replace(/,\s*/g, ", ").trim())
            .filter(Boolean)
            .join(" · ");
        if (!acquisition) return;
        gameIds.forEach(gameId => {
            const values = byGame.get(gameId) || [];
            if (!values.includes(acquisition)) values.push(acquisition);
            byGame.set(gameId, values);
        });
    });
    return byGame;
}


let pokemonDbRequestQueue = Promise.resolve();
let pokemonDbLastRequestTime = 0;

function getPokemonDbPageUrl(speciesName) {
    const normalizedName = String(speciesName || "").toLowerCase();
    const knownSlugs = {
        "nidoran-female": "nidoran-f",
        "nidoran-male": "nidoran-m"
    };
    const slug = knownSlugs[normalizedName] || normalizedName
        .replace(/♀/g, "-f")
        .replace(/♂/g, "-m")
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-|-$/g, "");
    return `https://pokemondb.net/pokedex/${encodeURIComponent(slug)}`;
}


function getPokemonDbLocations(speciesId, speciesName) {
    if (state.pokemonDbLocationCache.has(speciesId)) {
        return state.pokemonDbLocationCache.get(speciesId);
    }

    const pageUrl = getPokemonDbPageUrl(speciesName);
    const request = pokemonDbRequestQueue.then(async () => {
        const delay = Math.max(0, 2200 - (Date.now() - pokemonDbLastRequestTime));
        if (delay) await new Promise(resolve => setTimeout(resolve, delay));
        pokemonDbLastRequestTime = Date.now();

        try {
            const response = await fetch(pageUrl);
            if (response.ok) return { pageUrl, byGame: parsePokemonDbLocations(await response.text()) };
        } catch (error) {
            console.info("Direct PokémonDB read unavailable; trying the reader service.", error);
        }

        const readerResponse = await fetch(`https://r.jina.ai/${pageUrl}`, {
            headers: { "X-Respond-With": "html" }
        });
        if (!readerResponse.ok) throw new Error(`PokémonDB reader returned ${readerResponse.status}`);
        return { pageUrl, byGame: parsePokemonDbLocations(await readerResponse.text()) };
    });
    pokemonDbRequestQueue = request.catch(() => undefined);
    const cachedRequest = request.catch(error => {
        if (state.pokemonDbLocationCache.get(speciesId) === cachedRequest) {
            state.pokemonDbLocationCache.delete(speciesId);
        }
        throw error;
    });
    state.pokemonDbLocationCache.set(speciesId, cachedRequest);
    return cachedRequest;
}


async function renderPokemonLocations(speciesId, requestId = state.pokemonRequest) {
    const gameSelect = document.getElementById("pokemonLocationGameSelect");
    const container = document.getElementById("pokemonLocationsList");
    if (!gameSelect || !container) return;

    try {
        const speciesName = state.currentPokemon?.species?.name || String(speciesId);
        const [encounters, availableGames, pokemonDb] = await Promise.all([
            getPokemonEncounters(speciesId).catch(error => {
                console.warn("Pokemon encounter data load failed", error);
                return [];
            }),
            getAvailableGamesForPokemon(speciesId),
            getPokemonDbLocations(speciesId, speciesName).catch(error => {
                console.warn("PokémonDB location data load failed", error);
                return null;
            })
        ]);
        if (requestId !== state.pokemonRequest || getPokemonIdFromUrl(state.currentPokemon?.species?.url || "") !== speciesId) return;
        container.dataset.loadedFor = String(speciesId);
        delete container.dataset.loadingFor;
        const availableGameIds = new Set(availableGames.map(game => game.id));
        const databaseEntriesByGame = pokemonDb?.byGame || new Map();
        const encounteredVersions = new Set(encounters.flatMap(encounter =>
            (encounter.version_details || []).map(getEncounterVersionName).filter(Boolean)
        ));
        const locationGames = GAMES.filter(game => {
            if (game.id === "pokemon-go") return false;
            const databaseEntries = databaseEntriesByGame.get(game.id) || [];
            const explicitlyUnavailable = databaseEntries.some(entry => /not available in this game/i.test(entry));
            const withinNationalDex = speciesId <= game.nationalLimit
                || Boolean(game.nationalExtras?.includes(speciesId));
            const hasEncounter = [...getGameApiVersionNames(game.id)]
                .some(version => encounteredVersions.has(version));
            if (explicitlyUnavailable && !hasEncounter) return false;
            if (databaseEntries.some(entry => !/not available in this game/i.test(entry))) return true;
            if (game.regionalOnlyNational) {
                return availableGameIds.has(game.id) || hasEncounter;
            }
            return availableGameIds.has(game.id) || withinNationalDex || hasEncounter;
        });
        if (!locationGames.length) {
            gameSelect.disabled = true;
            container.innerHTML = `<div class="empty-state">${t("noLocationGames")}</div>`;
            return;
        }

        gameSelect.innerHTML = locationGames.map(game => `<option value="${game.id}">${game.name}</option>`).join("");
        gameSelect.disabled = false;

        const renderSelectedGame = async () => {
            const game = locationGames.find(item => item.id === gameSelect.value);
            if (!game) return;
            const versions = getGameApiVersionNames(game.id);
            const locations = encounters.map(encounter => ({
                ...encounter,
                versionDetails: (encounter.version_details || []).filter(item => versions.has(getEncounterVersionName(item)))
            })).filter(encounter => encounter.versionDetails.length);

            const byLocation = new Map();
            locations.forEach(location => {
                const name = formatEncounterLocation(location.location_area.name);
                const key = name.toLocaleLowerCase();
                const existing = byLocation.get(key) || { name, versionDetails: [] };
                existing.versionDetails.push(...location.versionDetails);
                byLocation.set(key, existing);
            });

            const databaseDetails = (databaseEntriesByGame.get(game.id) || [])
                .filter(entry => !/not available in this game/i.test(entry));
            const databaseLocations = databaseDetails
                .filter(entry => !/location data not yet available/i.test(entry));

            if (databaseLocations.length) {
                container.innerHTML = `<div class="pokemon-location-list" id="pokemonLocationResults"></div>`;
                const results = document.getElementById("pokemonLocationResults");
                databaseLocations.forEach(entry => {
                    const card = document.createElement("article");
                    card.className = "pokemon-location-card";
                    const title = document.createElement("strong");
                    title.textContent = /^(trade|migrate|transfer|breed|evolve|gift|starter)/i.test(entry)
                        ? t("howToObtain")
                        : t("whereToFind");
                    const details = document.createElement("span");
                    details.textContent = entry;
                    card.append(title, details);
                    results.appendChild(card);
                });
                return;
            }

            if (!byLocation.size) {
                if (databaseDetails.length) {
                    const emptyState = document.createElement("div");
                    emptyState.className = "empty-state";
                    emptyState.textContent = databaseDetails.join(" · ");
                    container.replaceChildren(emptyState);
                } else if (!pokemonDb) {
                    container.innerHTML = `<div class="empty-state">PokémonDB location data could not be loaded, and PokéAPI has no encounter record for ${game.name}.</div>`;
                } else {
                    container.innerHTML = `<div class="empty-state">${t("noEncounterDetails").replace("{game}", game.name)}</div>`;
                }
                return;
            }

            container.innerHTML = `<div class="pokemon-location-list" id="pokemonLocationResults"></div>`;
            const results = document.getElementById("pokemonLocationResults");
            [...byLocation.values()].forEach(location => {
                const card = document.createElement("article");
                card.className = "pokemon-location-card";
                const title = document.createElement("strong");
                title.textContent = location.name;
                const details = document.createElement("span");
                const versionChances = new Map();
                location.versionDetails.forEach(item => {
                    const versionName = getEncounterVersionName(item);
                    if (!versionName) return;
                    const chance = Number(item.max_chance);
                    const previousChance = versionChances.get(versionName);
                    versionChances.set(versionName, Number.isFinite(chance)
                        ? Math.max(previousChance ?? 0, chance)
                        : previousChance);
                });
                const versions = [...versionChances].map(([name, chance]) => {
                    const label = name.startsWith("brilliant-diamond-")
                        ? game.name
                        : capitalize(name.replaceAll("-", " "));
                    return chance === undefined ? label : `${label} · max chance ${chance}%`;
                });
                const methods = formatEncounterDetails(location.versionDetails);
                details.textContent = [...versions, ...methods].join(" · ") || t("encounterMethodUnspecified");
                const source = document.createElement("small");
                source.textContent = t("sourcePokeApi");
                card.append(title, details, source);
                results.appendChild(card);
            });
        };

        gameSelect.onchange = renderSelectedGame;
        renderSelectedGame();
    } catch (error) {
        if (requestId !== state.pokemonRequest || getPokemonIdFromUrl(state.currentPokemon?.species?.url || "") !== speciesId) return;
        delete container.dataset.loadingFor;
        console.warn("Pokemon location load failed", error);
        gameSelect.disabled = true;
        container.innerHTML = `<div class="empty-state">Location data could not be loaded.</div>`;
    }
}


async function renderPokemonGames(
    speciesId,
    requestId = state.pokemonRequest
) {
    const container = document.getElementById("pokemonGamesList");
    if (!container) return;
    container.innerHTML = `<div class="empty-state">${t("gameListLoading")}</div>`;

    const availableGames = await getAvailableGamesForPokemon(speciesId);
    if (requestId !== state.pokemonRequest) return;

    container.innerHTML = "";
    if (!availableGames.length) {
        container.innerHTML = `<div class="empty-state">${t("noAvailableGames")}</div>`;
        return;
    }

    const generations = [...new Set(availableGames.map(game => game.generation))];
    container.className = "pokemon-games-panel";
    container.innerHTML = `
        <label class="pokemon-games-filter" for="pokemonGamesGenerationFilter">
            <span>${t("generation")}</span>
            <select id="pokemonGamesGenerationFilter">
                <option value="all">${t("allGenerations")}</option>
                ${generations.map(generation => `<option value="${generation}">${formatGenerationName(generation)}</option>`).join("")}
            </select>
        </label>
        <div id="pokemonGameCatchButtons" class="game-list"></div>
    `;

    const buttonList = document.getElementById("pokemonGameCatchButtons");
    const generationFilter = document.getElementById("pokemonGamesGenerationFilter");
    const renderButtons = () => {
        const selectedGeneration = generationFilter.value;
        buttonList.innerHTML = "";
        availableGames
            .filter(game => selectedGeneration === "all" || game.generation === selectedGeneration)
            .forEach(game => {
                const caught = isCaught(game.id, speciesId);
                const button = document.createElement("button");
                button.type = "button";
                button.className = `game-catch-button${caught ? " caught" : ""}`;
                button.setAttribute("aria-pressed", String(caught));
                const name = document.createElement("span");
                name.textContent = displayGameName(game);
                const caughtStatus = document.createElement("strong");
                caughtStatus.textContent = caught ? t("caughtStatus") : t("markCaught");
                button.append(name, caughtStatus);
                button.addEventListener("click", () => {
                    const nextCaught = !isCaught(game.id, speciesId);
                    if (!setCaught(game.id, speciesId, nextCaught)) {
                        alert(t("caughtSaveFailed"));
                        return;
                    }
                    button.classList.toggle("caught", nextCaught);
                    button.setAttribute("aria-pressed", String(nextCaught));
                    caughtStatus.textContent = nextCaught ? t("caughtStatus") : t("markCaught");
                    if (state.currentGame?.id === game.id) updateGameProgress();
                    if (state.currentView === "pokemonView") updatePokemonNavigation();
                    if (state.currentView === "profileView") renderProfile();
                });
                buttonList.appendChild(button);
            });
    };
    generationFilter.addEventListener("change", renderButtons);
    renderButtons();
}


/* =========================================================
   SEARCH
========================================================= */

async function prepareSearchIndex() {

    if (state.searchIndex) {
        return state.searchIndex;
    }
    const entries = await getNationalEntries();
    state.searchIndex = entries.map((entry, order) => ({ ...entry, order }));
    return state.searchIndex;

}


async function showSearchResults(query, results) {
    const requestId = ++state.dexRequest;
    state.gameRequest += 1;
    state.pokemonRequest += 1;
    state.currentGame = null;
    state.pokemonNavigationContext = "search";
    state.searchQuery = query;
    state.searchResults = results;
    state.dexEntries = results;
    state.dexPage = 0;

    showView("dexView");
    document.getElementById("pageTitle").textContent = t("searchResults");
    document.getElementById("breadcrumb").textContent = query;
    document.getElementById("pokemonGrid").innerHTML = "";
    document.getElementById("loadMoreButton").hidden = true;

    if (!results.length) {
        document.getElementById("pokemonGrid").innerHTML = `<div class="empty-state">${t("noSearchResults")}</div>`;
        document.getElementById("loading").classList.remove("active");
        return;
    }

    document.getElementById("loading").classList.add("active");
    await renderDexEntries(results, false, requestId, "search");
    if (requestId === state.dexRequest) document.getElementById("loading").classList.remove("active");
}


async function searchPokemon(query) {
    const requestId = ++state.searchRequest;
    const rawQuery = query.trim().replace(/^#/, "");
    if (!rawQuery) {
        return;
    }
    const index =
        await prepareSearchIndex();
    if (requestId !== state.searchRequest) return;
    const numericQuery = /^\d+$/.test(rawQuery);
    const normalizedQuery = rawQuery.toLowerCase().trim().replace(/[\s_]+/g, "-");
    const results = index.filter(item => numericQuery
        ? item.id === Number(rawQuery)
        : item.name.includes(normalizedQuery));

    if (results.length === 1) {
        state.searchQuery = rawQuery;
        state.searchResults = results;
        state.dexEntries = results;
        state.currentGame = null;
        state.pokemonNavigationContext = "search";
        await openPokemonSpecies(results[0].pokemonId, null, "search");
        return;
    }

    await showSearchResults(rawQuery, results);

}


/* =========================================================
   TYPES
========================================================= */

function setupTypeSelectors() {
    renderTypeSelector("type1");
    renderTypeSelector("type2");
    renderTypeMatchup();
}


function renderTypeSelector(slot) {
    const container = document.getElementById(`${slot}Choices`);
    if (!container) return;

    const selectedType = state.typeSelection[slot];
    const buttons = [
        `<button class="type-choice-button type-choice-none${selectedType ? "" : " active"}" type="button" data-type="" aria-pressed="${!selectedType}" aria-label="${t("none")}"><span class="type-badge" style="--type-color:#626a76">${t("none")}</span></button>`,
        ...TYPES.map(type => `
            <button class="type-choice-button${selectedType === type ? " active" : ""}" type="button" data-type="${type}" style="--type-color:${TYPE_COLORS[type]}" aria-pressed="${selectedType === type}" aria-label="${UI_TEXT[appLanguage].typeNames[type] || capitalize(type)}">
                ${getTypeBadge(type)}
            </button>
        `)
    ];
    container.innerHTML = buttons.join("");

    container.querySelectorAll(".type-choice-button").forEach(button => {
        button.addEventListener("click", () => {
            const chosenType = button.dataset.type;
            const otherSlot = slot === "type1" ? "type2" : "type1";
            state.typeSelection[slot] = chosenType === selectedType ? "" : chosenType;
            if (chosenType && state.typeSelection[otherSlot] === chosenType) {
                state.typeSelection[otherSlot] = "";
            }
            renderTypeSelector("type1");
            renderTypeSelector("type2");
            renderTypeMatchup();
        });
    });
}


function getEffectiveness(
    attackingType,
    defendingType
) {

    return (
        TYPE_EFFECTIVENESS[
            attackingType
        ]?.[defendingType]
        ?? 1
    );

}


function getCombinedDefenseMultiplier(
    attackingType,
    defenseTypes
) {

    return defenseTypes.reduce(
        (multiplier, defenseType) =>
            multiplier *
            getEffectiveness(
                attackingType,
                defenseType
            ),
        1
    );

}


function getMultiplierLabel(
    multiplier
) {

    if (multiplier === 0) return "×0";

    if (multiplier === .25) return "×¼";

    if (multiplier === .5) return "×½";

    if (multiplier === 2) return "×2";

    if (multiplier === 4) return "×4";

    return "×1";

}


function renderTypeMatchup() {
    const { type1, type2 } = state.typeSelection;


    const container =
        document.getElementById(
            "typeMatchup"
        );


    if (!type1 && !type2) {

        container.innerHTML = `
            <div class="empty-state">
            ${t("chooseType")}
            </div>
        `;

        return;

    }


    const defenseTypes =
        [type1, type2]
            .filter(Boolean);


    /*
        DEFENSIVE
    */

    const defensiveGroups = {
        "×4": [],
        "×2": [],
        "×1": [],
        "×½": [],
        "×¼": [],
        "×0": []
    };


    TYPES.forEach(
        attackType => {

            const multiplier =
                getCombinedDefenseMultiplier(
                    attackType,
                    defenseTypes
                );


            const label =
                getMultiplierLabel(
                    multiplier
                );


            defensiveGroups[label]
                ?.push(
                    attackType
                );

        }
    );


    /*
        OFFENSIVE
    */

    const offensiveGroups = {
        "×4": [],
        "×2": [],
        "×1": [],
        "×½": [],
        "×¼": [],
        "×0": []
    };


    defenseTypes.forEach(
        attackType => {

            TYPES.forEach(
                defenseType => {

                    const multiplier =
                        getEffectiveness(
                            attackType,
                            defenseType
                        );


                    const label =
                        getMultiplierLabel(
                            multiplier
                        );


                    offensiveGroups[label]
                        ?.push({
                            attack:
                                attackType,
                            defense:
                                defenseType
                        });

                }
            );

        }
    );


    container.innerHTML = `

        <div class="matchup-section">

            <h3>
                ${t("defenseMatchup")}
            </h3>

            ${
                Object.entries(
                    defensiveGroups
                )
                .filter(
                    ([, types]) =>
                        types.length
                )
                .map(
                    ([multiplier, types]) => `

                        <div class="matchup-group">

                            <div class="matchup-label">
                                ${multiplier}
                            </div>

                            <div class="matchup-types">

                                ${
                                    types
                                        .map(
                                            type =>
                                                getTypeBadge(
                                                    type
                                                )
                                        )
                                        .join("")
                                }

                            </div>

                        </div>

                    `
                )
                .join("")
            }

        </div>


        <div class="matchup-section">

            <h3>
                ${t("attackMatchup")}
            </h3>

            ${
                Object.entries(
                    offensiveGroups
                )
                .filter(
                    ([, items]) =>
                        items.length
                )
                .map(
                    ([multiplier, items]) => {

                        /*
                            Poistetaan duplikaatit.
                        */

                        const unique =
                            [
                                ...new Map(
                                    items.map(
                                        item => [
                                            item.defense,
                                            item
                                        ]
                                    )
                                ).values()
                            ];


                        return `

                            <div class="matchup-group">

                                <div class="matchup-label">
                                    ${multiplier}
                                </div>

                                <div class="matchup-types">

                                    ${
                                        unique
                                            .map(
                                                item =>
                                                    getTypeBadge(
                                                        item.defense
                                                    )
                                            )
                                            .join("")
                                    }

                                </div>

                            </div>

                        `;

                    }
                )
                .join("")
            }

        </div>

    `;

}


/* =========================================================
   PROFILE
========================================================= */

async function renderProfile() {
    const requestId = ++state.profileRequest;
    const container = document.getElementById("profileStats");
    container.innerHTML = `<div class="empty-state">${appLanguage === "fi" ? "Lasketaan..." : "Calculating..."}</div>`;
    const national = await getNationalEntries();
    if (requestId !== state.profileRequest) return;
    const dexIds = [...new Set(GAMES.flatMap(game => game.dexes))];
    const dexEntriesById = new Map(await Promise.all(dexIds.map(async id => [
        id,
        await getDexEntriesById(id).catch(() => [])
    ])));
    if (requestId !== state.profileRequest) return;
    const caughtData = getCaughtData();
    const nationalIds = new Set(national.map(entry => entry.pokemonId));
    const caughtAcrossGames = new Set();
    Object.values(caughtData).forEach(gameData => Object.entries(gameData || {}).forEach(([id, caught]) => {
        if (caught && nationalIds.has(Number(id))) caughtAcrossGames.add(Number(id));
    }));
    const nationalTotal = nationalIds.size;
    const nationalCaught = caughtAcrossGames.size;
    const nationalPercent = nationalTotal ? Math.round(nationalCaught / nationalTotal * 100) : 0;

    const cards = [`
        <article class="profile-card profile-national-card">
            <h3>${t("nationalSummaryTitle")}</h3>
            <p>${t("nationalSummaryDescription")}</p>
            <div class="profile-progress"><div class="profile-progress-bar" style="width:${nationalPercent}%"></div></div>
            <div class="profile-count">${nationalCaught} / ${nationalTotal} ${t("pokemonCount")} (${nationalPercent}%)</div>
        </article>
    `];
    const gameCardsByGeneration = new Map();

    for (const game of GAMES) {
        const lists = game.dexes.map(id => dexEntriesById.get(id) || []);
        const regionalById = new Map();
        lists.flat().forEach(entry => {
            if (!game.excludesRegional?.includes(entry.pokemonId)) regionalById.set(entry.pokemonId, entry);
        });
        const regionalIds = [...regionalById.keys()];
        const gameNational = game.regionalOnlyNational
            ? regionalIds
            : national.filter(entry => entry.id <= game.nationalLimit || game.nationalExtras?.includes(entry.pokemonId)).map(entry => entry.pokemonId);
        const gameCaught = caughtData[game.id] || {};
        const countCaught = ids => ids.reduce((count, id) => count + (gameCaught[id] ? 1 : 0), 0);
        const regionalCaught = countCaught(regionalIds);
        const nationalCaughtForGame = countCaught(gameNational);
        const regionalPercent = regionalIds.length ? Math.round(regionalCaught / regionalIds.length * 100) : 0;
        const gameNationalPercent = gameNational.length ? Math.round(nationalCaughtForGame / gameNational.length * 100) : 0;
        const gameCard = `
            <article class="profile-card profile-game-card" data-profile-game="${game.id}" role="button" tabindex="0" aria-label="${t("openGame")} ${game.name}">
                <h3>${game.name}</h3>
                <p>${formatGenerationName(game.generation)}</p>
                <div class="profile-dex-progress">
                    <div class="profile-dex-heading"><strong>${t("regionalCount")}</strong><span>${regionalCaught} / ${regionalIds.length} (${regionalPercent}%)</span></div>
                    <div class="profile-progress"><div class="profile-progress-bar" style="width:${regionalPercent}%"></div></div>
                </div>
                <div class="profile-dex-progress">
                    <div class="profile-dex-heading"><strong>${t("nationalCount")}</strong><span>${nationalCaughtForGame} / ${gameNational.length} (${gameNationalPercent}%)</span></div>
                    <div class="profile-progress"><div class="profile-progress-bar" style="width:${gameNationalPercent}%"></div></div>
                </div>
            </article>
        `;
        if (!gameCardsByGeneration.has(game.generation)) gameCardsByGeneration.set(game.generation, []);
        gameCardsByGeneration.get(game.generation).push(gameCard);
    }
    const generationSections = [...gameCardsByGeneration.entries()].map(([generation, generationCards]) => `
        <section class="profile-generation-group">
            <button class="profile-generation-toggle" type="button" aria-expanded="false">
                <span>${formatGenerationName(generation)}</span>
                <span>${generationCards.length} ${t("gamesCount")} <span class="profile-generation-arrow" aria-hidden="true">›</span></span>
            </button>
            <div class="profile-generation-cards">${generationCards.join("")}</div>
        </section>
    `);
    if (requestId !== state.profileRequest) return;
    container.innerHTML = [...cards, ...generationSections].join("");
    container.querySelectorAll(".profile-generation-toggle").forEach(button => {
        button.addEventListener("click", () => {
            const group = button.closest(".profile-generation-group");
            const opening = !group.classList.contains("open");
            group.classList.toggle("open", opening);
            button.setAttribute("aria-expanded", String(opening));
        });
    });
    container.querySelectorAll("[data-profile-game]").forEach(card => {
        const openGameFromProfile = () => openGame(card.dataset.profileGame);
        card.addEventListener("click", openGameFromProfile);
        card.addEventListener("keydown", event => {
            if (event.key !== "Enter" && event.key !== " ") return;
            event.preventDefault();
            openGameFromProfile();
        });
    });
}


/* =========================================================
   SIDEBAR
========================================================= */

function animateSidebarOrb(button, opening) {
    if (!button) return;
    button.classList.remove("flash-open", "flash-close");
    void button.offsetWidth;
    button.classList.add(opening ? "flash-open" : "flash-close");
    window.setTimeout(() => button.classList.remove("flash-open", "flash-close"), opening ? 1000 : 500);
}


function toggleMobileSidebar(button) {
    const sidebar = document.getElementById("sidebar");
    const opening = !sidebar.classList.contains("mobile-open");
    sidebar.classList.toggle("mobile-open", opening);
    sidebar.closest(".app")?.classList.toggle("sidebar-open", opening);
    button?.setAttribute("aria-expanded", String(opening));
    animateSidebarOrb(button, opening);
}


function renderSidebarLists() {
    const pokedexSubmenu = document.getElementById("pokedexSubmenu");
    pokedexSubmenu.innerHTML = POKEDEXES.map(dex => `
        <button class="submenu-button${dex.id === "national" ? " active" : ""}" data-dex="${dex.id}"><span>${getDexDisplayName(dex)}</span><small>${getDexSubtitle(dex)}</small></button>
    `).join("");

    const gamesSubmenu = document.getElementById("gamesSubmenu");
    const groups = new Map();
    GAMES.forEach(game => {
        if (!groups.has(game.generation)) groups.set(game.generation, []);
        groups.get(game.generation).push(game);
    });
    gamesSubmenu.innerHTML = [...groups.entries()].map(([generation, games]) => `
        <section class="generation-group">
            <button class="generation-toggle" type="button" aria-expanded="false">
                <span>${formatGenerationName(generation)}</span>
                <span class="generation-arrow" aria-hidden="true">›</span>
            </button>
            <div class="generation-games">
                ${games.map(game => `<button class="game-button" data-game="${game.id}">${displayGameName(game)}</button>`).join("")}
            </div>
        </section>
    `).join("");
}

function refreshSidebarLocalization() {
    document.querySelectorAll(".submenu-button[data-dex]").forEach(button => {
        const dex = POKEDEXES.find(item => item.id === button.dataset.dex);
        if (!dex) return;
        const [name, subtitle] = button.querySelectorAll("span, small");
        if (name) name.textContent = getDexDisplayName(dex);
        if (subtitle) subtitle.textContent = getDexSubtitle(dex);
    });
    document.querySelectorAll(".generation-group").forEach(group => {
        const gameId = group.querySelector(".game-button")?.dataset.game;
        const game = GAMES.find(item => item.id === gameId);
        const label = group.querySelector(".generation-toggle span:first-child");
        if (game && label) label.textContent = formatGenerationName(game.generation);
    });
}

function setupSidebar() {

    renderSidebarLists();

    document.querySelectorAll(".generation-toggle").forEach(button => {
        button.addEventListener("click", () => {
            const group = button.closest(".generation-group");
            const opening = !group.classList.contains("open");
            group.classList.toggle("open", opening);
            button.setAttribute("aria-expanded", String(opening));
        });
    });

    const sidebar =
        document.getElementById(
            "sidebar"
        );


    document.getElementById(
        "sidebarToggle"
    ).addEventListener(
        "click",
        event => {
            const compact = window.matchMedia("(max-width: 700px), (orientation: landscape) and (max-height: 600px) and (max-width: 1100px)").matches;
            if (compact) {
                toggleMobileSidebar(event.currentTarget);
            } else {
                const opening = sidebar.classList.contains("collapsed");
                sidebar.classList.toggle("collapsed", !opening);
                animateSidebarOrb(event.currentTarget, opening);
            }
        }
    );


    document.getElementById(
        "pokedexMenuButton"
    ).addEventListener(
        "click",
        () => {

            const section =
                document
                    .getElementById(
                        "pokedexSubmenu"
                    )
                    .closest(
                        ".nav-section"
                    );

            section.classList.toggle(
                "open"
            );

        }
    );


    document.getElementById(
        "gamesMenuButton"
    ).addEventListener(
        "click",
        () => {

            const section =
                document
                    .getElementById(
                        "gamesSubmenu"
                    )
                    .closest(
                        ".nav-section"
                    );

            section.classList.toggle(
                "open"
            );

        }
    );


    document.querySelectorAll(
        ".submenu-button"
    ).forEach(
        button => {

            button.addEventListener(
                "click",
                () => {

                    document.querySelectorAll(
                        ".submenu-button"
                    ).forEach(
                        item =>
                            item.classList.remove(
                                "active"
                            )
                    );

                    button.classList.add(
                        "active"
                    );

                    openDex(
                        button.dataset.dex
                    );

                }
            );

        }
    );


    document.querySelectorAll(
        ".game-button"
    ).forEach(
        button => {

            button.addEventListener(
                "click",
                () => {

                    openGame(
                        button.dataset.game
                    );

                }
            );

        }
    );


    document.getElementById(
        "typesButton"
    ).addEventListener(
        "click",
        () => {

            setSidebarSelection("typesButton");

            showView("typeView");
            renderTypeSelector("type1");
            renderTypeSelector("type2");
            renderTypeMatchup();

            document.getElementById(
                "pageTitle"
            ).textContent =
                t("types");

            document.getElementById(
                "breadcrumb"
            ).textContent =
                t("types");

        }
    );


    document.getElementById(
        "profileButton"
    ).addEventListener(
        "click",
        () => {

            setSidebarSelection("profileButton");

            showView(
                "profileView"
            );

            document.getElementById(
                "pageTitle"
            ).textContent =
                t("profile");

            document.getElementById(
                "breadcrumb"
            ).textContent =
                t("profile");

            renderProfile();

        }
    );


    document.getElementById(
        "settingsButton"
    ).addEventListener(
        "click",
        () => {

            setSidebarSelection("settingsButton");

            showView(
                "settingsView"
            );

            document.getElementById(
                "pageTitle"
            ).textContent =
                t("settings");

            document.getElementById(
                "breadcrumb"
            ).textContent =
                t("settings");

        }
    );

}


/* =========================================================
   EVENTS
========================================================= */

let infiniteScrollObserver = null;
let pwaServiceWorkerRegistration = null;
let pwaUpdateCheckInProgress = false;
let pwaManualUpdatePending = false;
let pwaReloadQueued = false;
let pwaUpdateAnimationPending = false;
let pwaReloadRequested = false;
const observedLoadMoreButtons = new Set();

function reloadForPwaUpdate() {
    if (pwaUpdateAnimationPending) {
        pwaReloadRequested = true;
        return;
    }
    if (pwaReloadQueued) return;
    pwaReloadQueued = true;
    window.location.reload();
}

function observeInfiniteScrollButton(button) {
    if (!button || !infiniteScrollObserver) return;

    for (const observedButton of observedLoadMoreButtons) {
        if (!observedButton.isConnected) {
            infiniteScrollObserver.unobserve(observedButton);
            observedLoadMoreButtons.delete(observedButton);
        }
    }

    if (!observedLoadMoreButtons.has(button)) {
        observedLoadMoreButtons.add(button);
        infiniteScrollObserver.observe(button);
    }
}

function registerPwaServiceWorker() {
    if (!("serviceWorker" in navigator) || !window.isSecureContext) return;

    let hasController = Boolean(navigator.serviceWorker.controller);
    let reloadingForControllerChange = false;

    navigator.serviceWorker.addEventListener("controllerchange", () => {
        if (!hasController) {
            hasController = true;
            if (!pwaManualUpdatePending) return;
        }

        if (reloadingForControllerChange) return;
        reloadingForControllerChange = true;
        reloadForPwaUpdate();
    });

    navigator.serviceWorker.register("./service-worker.js", { scope: "./" })
        .then(registration => {
            pwaServiceWorkerRegistration = registration;
            registration.update()
                .catch(error => console.warn("PWA update check failed", error));

            document.addEventListener("visibilitychange", () => {
                if (document.visibilityState === "visible") {
                    registration.update()
                        .catch(error => console.warn("PWA update check failed", error));
                }
            });
        })
        .catch(error => console.warn("PWA offline support could not be enabled", error));
}

async function checkForPwaUpdate() {
    if (pwaUpdateCheckInProgress) return;
    pwaUpdateCheckInProgress = true;
    pwaManualUpdatePending = true;
    const updateButton = document.getElementById("pwaUpdateButton");
    const status = document.getElementById("pwaUpdateStatus");
    if (updateButton) {
        updateButton.disabled = true;
        updateButton.setAttribute("aria-busy", "true");
    }
    if (status) status.textContent = t("checkingUpdates");

    try {
        if (!("serviceWorker" in navigator) || !window.isSecureContext) {
            if (status) status.textContent = t("updateLoadingPage");
            reloadForPwaUpdate();
            return;
        }

        let registration = pwaServiceWorkerRegistration
            || await navigator.serviceWorker.getRegistration("./");

        if (!registration) {
            registration = await navigator.serviceWorker.register("./service-worker.js", { scope: "./" });
        }

        pwaServiceWorkerRegistration = registration;
        await registration.update();

        const waitingWorker = registration.waiting;
        const installingWorker = registration.installing;
        if (waitingWorker) {
            if (status) status.textContent = t("updateFound");
            waitingWorker.postMessage({ type: "SKIP_WAITING" });
            return;
        }
        if (installingWorker) {
            if (status) status.textContent = t("updateDownloading");
            installingWorker.addEventListener("statechange", () => {
                if (installingWorker.state === "redundant") {
                    pwaManualUpdatePending = false;
                    if (status) status.textContent = t("updateDownloadFailed");
                }
            });
            return;
        }

        if (status) status.textContent = t("updateDone");
        window.setTimeout(reloadForPwaUpdate, 250);
    } catch (error) {
        console.warn("PWA update check failed", error);
        pwaManualUpdatePending = false;
        if (status) status.textContent = t("updateFailed");
    } finally {
        pwaUpdateCheckInProgress = false;
        if (updateButton) {
            updateButton.disabled = false;
            updateButton.setAttribute("aria-busy", "false");
        }
    }
}

function setupPwaUpdateButton() {
    const updateButton = document.getElementById("pwaUpdateButton");
    if (!updateButton) return;

    let animationTimer = null;
    updateButton.addEventListener("click", () => {
        if (pwaUpdateAnimationPending) return;
        pwaUpdateAnimationPending = true;
        updateButton.classList.remove("animating");
        void updateButton.offsetWidth;
        updateButton.classList.add("animating");
        window.clearTimeout(animationTimer);
        animationTimer = window.setTimeout(() => {
            updateButton.classList.remove("animating");
            pwaUpdateAnimationPending = false;
            if (pwaReloadRequested) {
                pwaReloadRequested = false;
                reloadForPwaUpdate();
                return;
            }
            void checkForPwaUpdate();
        }, 3400);
    });
}

function setupPullToRefresh() {
    const scroller = document.querySelector(".main-content");
    if (!scroller || !("ontouchstart" in window)) return;

    const refreshThreshold = 72;
    let startX = 0;
    let startY = 0;
    let pullDistance = 0;
    let trackingPull = false;

    scroller.addEventListener("touchstart", event => {
        if (event.touches.length !== 1 || scroller.scrollTop > 0) {
            trackingPull = false;
            return;
        }

        if (event.target.closest(".topbar, .sidebar")) {
            trackingPull = false;
            return;
        }

        startX = event.touches[0].clientX;
        startY = event.touches[0].clientY;
        pullDistance = 0;
        trackingPull = true;
    }, { passive: true });

    scroller.addEventListener("touchmove", event => {
        if (!trackingPull || event.touches.length !== 1) return;

        const deltaX = event.touches[0].clientX - startX;
        const deltaY = event.touches[0].clientY - startY;
        if (deltaY <= 0 || Math.abs(deltaX) > deltaY) {
            trackingPull = false;
            return;
        }

        pullDistance = deltaY;
        if (pullDistance > 8 && event.cancelable) event.preventDefault();
    }, { passive: false });

    scroller.addEventListener("touchend", () => {
        if (trackingPull && pullDistance >= refreshThreshold) {
            void checkForPwaUpdate();
        }

        trackingPull = false;
        pullDistance = 0;
    }, { passive: true });

    scroller.addEventListener("touchcancel", () => {
        trackingPull = false;
        pullDistance = 0;
    }, { passive: true });
}

function setupInfiniteScroll() {
    if (!("IntersectionObserver" in window)) return;

    infiniteScrollObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            const button = entry.target;
            if (!entry.isIntersecting || button.hidden || button.disabled) return;

            if (button.id === "loadMoreButton") loadMoreDex();
            if (button.id === "loadMoreGameButton") loadMoreGameDex();
            if (button.id === "loadMoreMovesButton") loadMoreMoves();
        });
    }, {
        root: document.querySelector(".main-content"),
        rootMargin: "0px 0px 280px 0px",
        threshold: 0
    });

    observeInfiniteScrollButton(document.getElementById("loadMoreButton"));
    observeInfiniteScrollButton(document.getElementById("loadMoreGameButton"));
}

async function runLoadMore(button, loadPage) {
    if (!button || button.hidden || button.dataset.loading === "true") return;

    const label = button.textContent.trim();
    button.dataset.loading = "true";
    button.disabled = true;
    button.textContent = t("loadingMore");

    try {
        await loadPage();
    } catch (error) {
        console.error("Automatic list loading failed", error);
    } finally {
        button.disabled = false;
        delete button.dataset.loading;
        button.textContent = label;

        // Re-observing checks again if the next page still fits near the viewport.
        if (button.isConnected && !button.hidden) {
            infiniteScrollObserver?.unobserve(button);
            infiniteScrollObserver?.observe(button);
        }
    }
}

function loadMoreDex() {
    const button = document.getElementById("loadMoreButton");
    return runLoadMore(button, async () => {
        state.dexPage += 1;
        await renderDexEntries(state.dexEntries, true);
    });
}

function loadMoreGameDex() {
    const button = document.getElementById("loadMoreGameButton");
    return runLoadMore(button, async () => {
        state.gamePage += 1;
        await renderGameDex(true);
    });
}

function loadMoreMoves() {
    const button = document.getElementById("loadMoreMovesButton");
    const pokemon = state.currentPokemon;
    if (!pokemon) return Promise.resolve();
    return runLoadMore(button, () => renderPokemonMoves(pokemon, true));
}

function setupEvents() {

    setupInfiniteScroll();
    setupPokedexVoiceSettings();
    setupPwaUpdateButton();
    setupPullToRefresh();

    const languageSelect = document.getElementById("appLanguageSelect");
    if (languageSelect) {
        languageSelect.value = appLanguage;
        languageSelect.addEventListener("change", event => {
            const nextLanguage = event.target.value === "en" ? "en" : "fi";
            try {
                localStorage.setItem(LANGUAGE_STORAGE_KEY, nextLanguage);
            } catch (error) {
                console.warn("Could not save language preference", error);
            }
            appLanguage = nextLanguage;
            applyStaticTranslations();
            refreshSidebarLocalization();
            stopSpeciesSpeech();
            if (state.currentView === "settingsView") {
                document.getElementById("pageTitle").textContent = t("settings");
                document.getElementById("breadcrumb").textContent = t("settings");
            }
        });
    }

    const clearGameSelect = document.getElementById("clearGameSelect");
    clearGameSelect.innerHTML = GAMES.map(game => `<option value="${game.id}">${game.name}</option>`).join("");

    document.getElementById("searchForm").addEventListener("submit", event => {
        event.preventDefault();
        void searchPokemon(document.getElementById("searchInput").value);
    });


    document.getElementById(
        "dexSort"
    ).addEventListener(
        "change",
        event => {

            state.dexSort =
                event.target.value;

            openDex(
                state.currentDex
            );

        }
    );

    document.getElementById("loadMoreButton")
        .addEventListener("click", loadMoreDex);


    document.getElementById(
        "gameSort"
    ).addEventListener(
        "change",
        async event => {

            state.gameSort =
                event.target.value;

            state.gamePage = 0;
            await renderGameDex();

        }
    );

    document.getElementById("loadMoreGameButton")
        .addEventListener("click", loadMoreGameDex);


    document.querySelectorAll(
        ".game-tab"
    ).forEach(
        button => {

            button.addEventListener(
                "click",
                async () => {

                    state.currentGameDex =
                        button.dataset.gameDex;

                    state.gamePage = 0;


                    document.querySelectorAll(
                        ".game-tab"
                    ).forEach(
                        item =>
                            item.classList.toggle(
                                "active",
                                item === button
                            )
                    );


                    await renderGameDex();

                }
            );

        }
    );


    document.querySelectorAll(
        ".game-filter"
    ).forEach(
        button => {

            button.addEventListener(
                "click",
                async () => {

                    state.gameFilter =
                        button.dataset.filter;

                    state.gamePage = 0;


                    document.querySelectorAll(
                        ".game-filter"
                    ).forEach(
                        item =>
                            item.classList.toggle(
                                "active",
                                item === button
                            )
                    );


                    await renderGameDex();

                }
            );

        }
    );


    document.getElementById(
        "backButton"
    ).addEventListener(
        "click",
        () => {

            if (state.pokemonNavigationContext === "search") {
                void showSearchResults(state.searchQuery, state.searchResults);
                return;
            }

            if (
                state.currentGame
            ) {

                openGame(
                    state.currentGame.id
                );

            } else {

                openDex(
                    state.currentDex
                );

            }

        }
    );

    document.getElementById("previousPokemonButton")
        .addEventListener("click", () => navigatePokemon(-1));

    document.getElementById("nextPokemonButton")
        .addEventListener("click", () => navigatePokemon(1));


    document.getElementById(
        "gameBackButton"
    ).addEventListener(
        "click",
        () => {

            openDex(
                state.currentDex
            );

        }
    );


    document.getElementById(
        "clearCaughtButton"
    ).addEventListener(
        "click",
        () => {

            const confirmed =
                confirm(t("clearAllConfirm"));


            if (!confirmed) return;


            if (!saveCaughtData({})) {
                alert(t("caughtClearFailed"));
                return;
            }


            if (
                state.currentGame
            ) {

                updateGameProgress();

                renderGameDex();

            }


            if (
                state.currentView ===
                "profileView"
            ) {

                renderProfile();

            }

        }
    );

    document.getElementById("clearGameCaughtButton")
        .addEventListener("click", () => {
            const gameId = clearGameSelect.value;
            const game = GAMES.find(item => item.id === gameId);
            if (!game || !confirm(t("clearGameConfirm").replace("{game}", game.name))) return;
            const data = getCaughtData();
            delete data[gameId];
            if (gameId === "brilliantdiamond") delete data.brilliantdiamond2;
            if (gameId === "shiningpearl") delete data.shiningpearl2;
            if (!saveCaughtData(data)) {
                alert(t("gameCaughtClearFailed").replace("{game}", game.name));
                return;
            }
            if (state.currentGame?.id === gameId) {
                updateGameProgress();
                renderGameDex();
            }
            if (state.currentView === "profileView") renderProfile();
        });


    document.getElementById(
        "mobileMenuButton"
    ).addEventListener(
        "click",
        event => toggleMobileSidebar(event.currentTarget)
    );


    document.addEventListener(
        "click",
        event => {

            const sidebar = document.getElementById("sidebar");
            const mobileMenuButton = document.getElementById("mobileMenuButton");
            const reflowCompact = window.matchMedia("(max-width: 700px), (orientation: landscape) and (max-height: 600px) and (max-width: 1100px)").matches;
            if (
                sidebar.classList.contains("mobile-open") &&
                !reflowCompact &&
                !sidebar.contains(event.target) &&
                !mobileMenuButton.contains(event.target)
            ) {
                sidebar.classList.remove("mobile-open");
                sidebar.closest(".app")?.classList.remove("sidebar-open");
                mobileMenuButton.setAttribute("aria-expanded", "false");
                animateSidebarOrb(mobileMenuButton, false);
            }

        }
    );

}


/* =========================================================
   INIT
========================================================= */

async function init() {

    applyStaticTranslations();

    registerPwaServiceWorker();
    setupSidebar();

    setupEvents();

    setupTypeSelectors();

    /*
        Avaa Pokédex-valikko aluksi.
    */

    document
        .getElementById(
            "pokedexMenuButton"
        )
        .closest(
            ".nav-section"
        )
        .classList.add(
            "open"
        );


    await openDex(
        "national"
    );

}


init();
