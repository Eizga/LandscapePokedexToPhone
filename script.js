const API = "https://pokeapi.co/api/v2";

const STORAGE_KEY = "pokedexGameCaughtV3";
const CAUGHT_BACKUP_KEY = "pokedexGameCaughtBackupV1";
const VOICE_SETTINGS_KEY = "pokedexVoiceSettingsV1";

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
    const match = /^Generation (I|II|III|IV|V|VI|VII|VIII|IX)$/.exec(generation);
    if (match) return `Generation ${romanToArabic[match[1]]}`;
    return generation === "Mobile" ? "Mobile / Special" : generation;
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

    gameAvailabilityCache: new Map(),

    pokemonDbLocationCache: new Map(),

    dexEntriesById: new Map(),

    speciesCache: new Map(),

    moveCache: new Map(),

    movePage: 0,

    moveSort: "name",

    searchIndex: null

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
            ${type}
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
        .textContent = dexId === "national" ? dex.name : `Pokédex ${dex.name}`;

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
                    Pokédexin lataaminen epäonnistui.
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

async function renderDexEntries(entries, append = false, requestId = state.dexRequest) {
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
            return createPokemonCard(pokemon, entry.id);
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
        .textContent = "Games";

    document.getElementById("gameTitle")
        .textContent = game.name;

    document.getElementById("gameDescription")
        .textContent =
        `Pelikohtainen Pokémon-lista · ${formatGenerationName(game.generation)}`;

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
                Tässä näkymässä ei ole tällä hetkellä Pokémonia.
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
        caughtButton.innerHTML = `<span aria-hidden="true">${caught ? "✓" : "+"}</span><span>${caught ? "Caught" : "Mark caught"}</span>`;
        caughtButton.setAttribute("aria-label", `${caught ? "Unmark" : "Mark"} ${formatPokemonName(pokemon.name)} as caught in ${game.name}`);
    };

    updateCaughtButton();
    caughtButton.addEventListener("click", async event => {
        event.stopPropagation();
        const nextCaught = !isCaught(game.id, speciesId);
        if (!setCaught(game.id, speciesId, nextCaught)) {
            alert("Caught-merkintää ei voitu tallentaa tähän selaimeen.");
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
    document.getElementById("gameProgressLabel").textContent = state.currentGameDex === "regional" ? "Regional" : "National";

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

    if (state.pokemonNavigationContext === "dex") {
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
        "Pokémon";


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
                        <button class="detail-tab active" data-detail-tab="overview">Overview</button>
                        <button class="detail-tab" data-detail-tab="type-chart">Type Chart</button>
                        <button class="detail-tab" data-detail-tab="evolution">Evolutions</button>

                        <button
                            class="detail-tab"
                            data-detail-tab="games"
                        >
                            Games
                        </button>

                        <button
                            class="detail-tab"
                            data-detail-tab="moves"
                        >
                            Moves
                        </button>
                        <button class="detail-tab" data-detail-tab="forms">Forms</button>
                        <button class="detail-tab" data-detail-tab="locations">Locations</button>

                    </div>

                    <div class="detail-tab-content active" data-detail-content="overview">
                        <div class="pokemon-summary-grid">
                            <section class="pokemon-summary-card">
                                <div class="species-heading">
                                    <h3>Species</h3>
                                    <button id="readSpeciesButton" class="species-speak-button" type="button" aria-label="Read species description aloud" aria-pressed="false" disabled>🔊 Listen</button>
                                </div>
                                <p id="speciesDescription">Loading species description...</p>
                            </section>
                            <section class="pokemon-summary-card">
                                <div class="overview-facts">
                                    <span><small>Category</small><strong id="pokemonGenus">Loading...</strong></span>
                                    <span><small>Height</small><strong>${pokemon.height / 10} m</strong></span>
                                    <span><small>Weight</small><strong>${pokemon.weight / 10} kg</strong></span>
                                    <span><small>Base XP</small><strong>${pokemon.base_experience ?? "-"}</strong></span>
                                    <span><small>Abilities</small><strong>${pokemon.abilities.map(a => capitalize(a.ability.name)).join(", ")}</strong></span>
                                </div>
                            </section>
                        </div>
                    </div>

                    <div class="detail-tab-content" data-detail-content="type-chart">
                        <div class="pokemon-chart-grid">
                            <section class="matchup-section">
                                <h3>Defence</h3>
                                <div id="pokemonDefenses" class="pokemon-matchups"></div>
                            </section>
                            <section class="matchup-section">
                                <h3>Attacks</h3>
                                <div id="pokemonAttacks" class="pokemon-matchups"></div>
                            </section>
                        </div>
                    </div>

                    <div class="detail-tab-content" data-detail-content="evolution">
                        <div id="evolutionChain" class="evolution-tree">Ladataan kehityspolkua...</div>
                    </div>


                    <div
                        class="detail-tab-content"
                        data-detail-content="games"
                    >

                        <div
                            id="pokemonGamesList"
                            class="game-list"
                        >
                            Ladataan pelejä...
                        </div>

                    </div>


                    <div
                        class="detail-tab-content"
                        data-detail-content="moves"
                    >
                        <div class="moves-toolbar">
                            <label for="moveSort">Sort by</label>
                            <select id="moveSort">
                                <option value="name">Name</option>
                                <option value="bp">BP</option>
                                <option value="acc">Acc</option>
                            </select>
                        </div>
                        <div id="pokemonMovesList" class="pokemon-moves-grid"></div>
                        <button id="loadMoreMovesButton" class="load-more-button" hidden>Lataa lisää liikkeitä</button>
                    </div>

                    <div class="detail-tab-content" data-detail-content="forms">
                        <div id="pokemonFormsList" class="pokemon-forms-grid">Ladataan muotoja...</div>
                    </div>

                    <div class="detail-tab-content" data-detail-content="locations">
                        <div class="location-toolbar">
                            <label for="pokemonLocationGameSelect">Game</label>
                            <select id="pokemonLocationGameSelect" disabled>
                                <option>Loading available games...</option>
                            </select>
                        </div>
                        <div id="pokemonLocationsList" class="pokemon-locations">
                            <div class="empty-state">Loading game locations...</div>
                        </div>
                    </div>

                </div>

            </div>

        </div>

    `;


    setupDetailTabs();
    state.moveSort = "name";
    document.getElementById("readSpeciesButton").addEventListener("click", toggleSpeciesSpeech);
    document.getElementById("moveSort").addEventListener("change", async event => {
        const selectedSort = event.target.value;
        state.moveSort = selectedSort;
        const movesContainer = document.getElementById("pokemonMovesList");
        if (selectedSort !== "name") {
            movesContainer.innerHTML = `<div class="empty-state">Loading move stats for sorting...</div>`;
            await loadAllMoveDetails(pokemon);
        }
        if (state.currentPokemon?.id !== pokemon.id || state.moveSort !== selectedSort) return;
        await renderPokemonMoves(pokemon);
    });
    document.getElementById("loadMoreMovesButton").addEventListener("click", () => {
        loadMoreMoves();
    });
    observeInfiniteScrollButton(document.getElementById("loadMoreMovesButton"));

    renderPokemonMatchups(pokemon);
    await Promise.all([
        renderSpeciesDescription(species),
        renderEvolutionChain(species, requestId),
        renderPokemonGames(species.id, requestId),
        renderPokemonForms(species, requestId),
        renderPokemonLocations(species.id, requestId),
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

            }
        );

    });

}


/* =========================================================
   POKEMON GAMES
========================================================= */

function renderSpeciesDescription(species) {
    const description = document.getElementById("speciesDescription");
    const entry = species.flavor_text_entries.find(item => item.language.name === "fi")
        || species.flavor_text_entries.find(item => item.language.name === "en");
    const genus = species.genera?.find(item => item.language.name === "en")?.genus || "";
    const genusElement = document.getElementById("pokemonGenus");
    const readButton = document.getElementById("readSpeciesButton");
    if (genusElement) genusElement.textContent = genus || "Not available";
    description.textContent = entry
        ? entry.flavor_text.replace(/[\n\f\r]+/g, " ").replace(/\s+/g, " ").trim()
        : "Tästä Pokémonista ei ole lajikuvausta saatavilla.";
    description.dataset.speechLang = entry?.language.name || "en";
    description.dataset.speechName = formatPokemonName(state.currentPokemon?.name || species.name);
    description.dataset.speechGenus = genus;
    description.dataset.speechHeight = String((state.currentPokemon?.height ?? 0) / 10);
    description.dataset.speechWeight = String((state.currentPokemon?.weight ?? 0) / 10);
    const speechAvailable = "speechSynthesis" in window && "SpeechSynthesisUtterance" in window;
    readButton.disabled = !entry || !speechAvailable;
    readButton.title = speechAvailable ? "" : "Text-to-speech is not supported by this browser.";
}


let activeSpeciesSpeech = null;

function stopSpeciesSpeech() {
    if ("speechSynthesis" in window) window.speechSynthesis.cancel();

    if (activeSpeciesSpeech?.button.isConnected) {
        activeSpeciesSpeech.button.textContent = "🔊 Listen";
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

    const types = state.currentPokemon?.types?.map(item => item.type.name) || [];
    const typeNames = description.dataset.speechLang === "fi"
        ? {
            bug: "ötökkä", dark: "pimeys", dragon: "lohikäärme", electric: "sähkö",
            fairy: "keiju", fighting: "taistelu", fire: "tuli", flying: "lento",
            ghost: "aave", grass: "ruoho", ground: "maa", ice: "jää",
            normal: "normaali", poison: "myrkky", psychic: "meedio",
            rock: "kivi", steel: "teräs", water: "vesi"
        }
        : {};
    const spokenTypes = types.map(type => typeNames[type] || capitalize(type));
    const typeIntroduction = spokenTypes.length
        ? `${description.dataset.speechLang === "fi" ? (spokenTypes.length > 1 ? "Tyypit: " : "Tyyppi: ") : (spokenTypes.length > 1 ? "Types: " : "Type: ")}${spokenTypes.join(description.dataset.speechLang === "fi" ? " ja " : " and ")}. `
        : "";
    const isFinnish = description.dataset.speechLang === "fi";
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
    button.textContent = "■ Stop";
    button.setAttribute("aria-pressed", "true");

    const resetButton = () => {
        if (activeSpeciesSpeech?.utterance !== utterance) return;
        activeSpeciesSpeech = null;
        if (!button.isConnected) return;
        button.textContent = "🔊 Listen";
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

    return methods.sort((a, b) => Number(a.startsWith("Level up near")) - Number(b.startsWith("Level up near"))).join(" or ");
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
        container.textContent = "Kehityspolkua ei voitu ladata.";
    }
}


function matchupRows(groups) {
    const labels = ["×4", "×2", "×1", "×½", "×¼", "×0"];
    return labels.filter(label => groups[label]?.length).map(label => `
        <div class="pokemon-matchup-row">
            <strong>${label}</strong>
            <div class="type-row">${groups[label].map(getTypeBadge).join("")}</div>
        </div>
    `).join("") || `<span class="matchup-empty">Ei erityisiä tyyppivaikutuksia.</span>`;
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
                <div class="pokemon-attack-heading">${getTypeBadge(attackingType)} <span>moves</span></div>
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
            button.innerHTML = `<img src="${image || ""}" alt="" loading="lazy"><span>${formatPokemonName(pokemon.name)}</span>${variety.is_default ? "<small>Default form</small>" : ""}`;
            button.addEventListener("click", () => openPokemon(pokemon.id, state.currentGame?.id || null));
            container.appendChild(button);
        });
    } catch (error) {
        if (requestId !== state.pokemonRequest) return;
        console.warn("Pokemon forms load failed", error);
        container.textContent = "Muotoja ei voitu ladata.";
    }
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
    const moveEntries = [...pokemon.moves];
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
    const cards = await Promise.all(moves.map(async entry => {
        try {
            const move = await getMove(entry.move.name);
            const card = document.createElement("article");
            card.className = "pokemon-move-card";
            const learnInfo = entry.version_group_details.at(-1);
            const level = learnInfo?.level_learned_at;
            card.innerHTML = `
                <strong>${capitalize(move.name)}</strong>
                <div><span>BP</span><b>${move.power ?? "—"}</b><span>Acc</span><b>${move.accuracy == null ? "—" : `${move.accuracy}%`}</b><span>PP</span><b>${move.pp ?? "—"}</b></div>
                ${level ? `<small>Level ${level}</small>` : ""}
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
    let normalized = ` ${normalizePokemonDbText(label)} `;
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
    if (node.nodeName === "BR") return " ";
    return [...node.childNodes].map(getPokemonDbNodeText).join(" ");
}


function parsePokemonDbLocations(html) {
    const page = new DOMParser().parseFromString(html, "text/html");
    const heading = [...page.querySelectorAll("h1, h2, h3")]
        .find(element => /where to find/i.test(element.textContent || ""));
    const locationsTable = heading && [...page.querySelectorAll("table")]
        .find(table => (heading.compareDocumentPosition(table) & 4) !== 0);
    if (!locationsTable) throw new Error("PokémonDB locations table was not found");

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
            .map(text => text.replace(/\s+/g, " ").trim())
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
    return `https://pokemondb.net/pokedex/${encodeURIComponent(slug)}#locations`;
}


function getPokemonDbLocations(speciesId, speciesName) {
    if (state.pokemonDbLocationCache.has(speciesId)) {
        return state.pokemonDbLocationCache.get(speciesId);
    }

    const pageUrl = getPokemonDbPageUrl(speciesName);
    const request = pokemonDbRequestQueue.then(async () => {
        const delay = Math.max(0, 4000 - (Date.now() - pokemonDbLastRequestTime));
        if (delay) await new Promise(resolve => setTimeout(resolve, delay));
        pokemonDbLastRequestTime = Date.now();
        const sourceUrl = pageUrl.replace(/#.*$/, "");

        try {
            const response = await fetch(sourceUrl);
            if (response.ok) {
                const byGame = parsePokemonDbLocations(await response.text());
                return { pageUrl, byGame };
            }
        } catch (error) {
            // PokémonDB may not allow direct cross-origin page reads from GitHub Pages.
            console.info("Direct PokémonDB read unavailable; trying the reader relay.", error);
        }

        const relayResponse = await fetch(`https://r.jina.ai/${sourceUrl}`, {
            headers: { "X-Respond-With": "html" }
        });
        if (!relayResponse.ok) throw new Error(`PokémonDB reader returned ${relayResponse.status}`);
        return { pageUrl, byGame: parsePokemonDbLocations(await relayResponse.text()) };
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


function getGameAcquisitionSummary(encounters, game) {
    const versions = getGameApiVersionNames(game.id);
    const summaries = new Set();
    encounters.forEach(encounter => {
        const matchingDetails = (encounter.version_details || []).filter(item => versions.has(getEncounterVersionName(item)));
        if (!matchingDetails.length) return;
        const methods = formatEncounterDetails(matchingDetails);
        summaries.add(`${formatEncounterLocation(encounter.location_area.name)}: ${methods.join(", ") || "Encounter listed; method not specified"}`);
    });
    if (summaries.size) return [...summaries].join("; ");
    return "No encounter listed by PokéAPI; trade, transfer, and other acquisition methods are not documented.";
}


async function renderPokemonLocations(speciesId, requestId = state.pokemonRequest) {
    const gameSelect = document.getElementById("pokemonLocationGameSelect");
    const container = document.getElementById("pokemonLocationsList");
    if (!gameSelect || !container) return;

    try {
        const [encounters, availableGames] = await Promise.all([
            getPokemonEncounters(speciesId).catch(error => {
                console.warn("Pokemon encounter data load failed", error);
                return [];
            }),
            getAvailableGamesForPokemon(speciesId)
        ]);
        if (requestId !== state.pokemonRequest || getPokemonIdFromUrl(state.currentPokemon?.species?.url || "") !== speciesId) return;
        const availableGameIds = new Set(availableGames.map(game => game.id));
        const encounteredVersions = new Set(encounters.flatMap(encounter =>
            (encounter.version_details || []).map(getEncounterVersionName).filter(Boolean)
        ));
        const locationGames = GAMES.filter(game => {
            if (game.id === "pokemon-go") return false;
            const withinNationalDex = speciesId <= game.nationalLimit
                || Boolean(game.nationalExtras?.includes(speciesId));
            const hasEncounter = [...getGameApiVersionNames(game.id)]
                .some(version => encounteredVersions.has(version));
            if (game.regionalOnlyNational) {
                return availableGameIds.has(game.id) || hasEncounter;
            }
            return availableGameIds.has(game.id) || withinNationalDex || hasEncounter;
        });
        if (!locationGames.length) {
            gameSelect.disabled = true;
            container.innerHTML = `<div class="empty-state">No games with a Pokédex entry were found for this Pokémon.</div>`;
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

            if (!byLocation.size) {
                container.innerHTML = `<div class="empty-state">PokéAPI has no encounter locations for ${game.name}.</div>`;
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
                details.textContent = [...versions, ...methods].join(" · ") || "Encounter method not specified";
                card.append(title, details);
                results.appendChild(card);
            });
        };

        gameSelect.onchange = renderSelectedGame;
        renderSelectedGame();
    } catch (error) {
        if (requestId !== state.pokemonRequest || getPokemonIdFromUrl(state.currentPokemon?.species?.url || "") !== speciesId) return;
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
    container.innerHTML = `<div class="empty-state">Etsitään pelejä...</div>`;

    const [availableGames, encounters] = await Promise.all([
        getAvailableGamesForPokemon(speciesId),
        getPokemonEncounters(speciesId).catch(error => {
            console.warn("Pokemon acquisition data load failed", error);
            return [];
        })
    ]);
    if (requestId !== state.pokemonRequest) return;

    container.innerHTML = "";
    if (!availableGames.length) {
        container.innerHTML = `<div class="empty-state">Pokémonille ei löytynyt saatavilla olevia pelejä.</div>`;
        return;
    }

    const acquisitionByGame = new Map();
    availableGames.forEach(game => {
        const caught = isCaught(game.id, speciesId);
        const button = document.createElement("button");
        button.type = "button";
        button.className = `game-catch-button${caught ? " caught" : ""}`;
        button.setAttribute("aria-pressed", String(caught));
        const name = document.createElement("span");
        name.textContent = game.name;
        const acquisition = document.createElement("small");
        acquisition.textContent = getGameAcquisitionSummary(encounters, game);
        acquisitionByGame.set(game.id, acquisition);
        const caughtStatus = document.createElement("strong");
        caughtStatus.textContent = caught ? "Caught ✓" : "Merkitse napatuksi";
        button.append(name, acquisition, caughtStatus);
        button.addEventListener("click", () => {
            const nextCaught = !isCaught(game.id, speciesId);
            if (!setCaught(game.id, speciesId, nextCaught)) {
                alert("Caught-merkintää ei voitu tallentaa tähän selaimeen.");
                return;
            }
            button.classList.toggle("caught", nextCaught);
            button.setAttribute("aria-pressed", String(nextCaught));
            caughtStatus.textContent = nextCaught ? "Caught ✓" : "Merkitse napatuksi";
            if (state.currentGame?.id === game.id) updateGameProgress();
            if (state.currentView === "pokemonView") updatePokemonNavigation();
            if (state.currentView === "profileView") renderProfile();
        });
        container.appendChild(button);
    });

    const missingApiDetails = availableGames.filter(game =>
        getGameAcquisitionSummary(encounters, game).startsWith("No encounter listed")
    );
    if (!missingApiDetails.length) return;

    const speciesName = state.currentPokemon?.species?.name || String(speciesId);
    missingApiDetails.forEach(game => {
        const field = acquisitionByGame.get(game.id);
        if (field) field.textContent = "PokéAPI has no encounter entry; checking PokémonDB…";
    });
    getPokemonDbLocations(speciesId, speciesName).then(database => {
        if (requestId !== state.pokemonRequest) return;
        missingApiDetails.forEach(game => {
            const field = acquisitionByGame.get(game.id);
            if (!field) return;
            const details = database.byGame.get(game.id) || [];
            field.textContent = details.length
                ? `${details.join("; ")} · PokémonDB`
                : "PokéAPI and PokémonDB have no acquisition details for this game.";
        });
    }).catch(error => {
        console.warn("PokemonDB game availability fallback failed", error);
    });
}


/* =========================================================
   SEARCH
========================================================= */

async function prepareSearchIndex() {

    if (state.searchIndex) {
        return state.searchIndex;
    }
    const entries = await getNationalEntries();
    state.searchIndex = entries.map(entry => ({ id: entry.id, name: entry.name }));
    return state.searchIndex;

}


async function searchPokemon(
    query
) {
    const requestId = ++state.searchRequest;
    const rawQuery = query.trim().replace(/^#/, "");
    const container = document.getElementById("searchSuggestions");
    if (!rawQuery) {
        container.innerHTML = "";
        return;
    }
    const index =
        await prepareSearchIndex();
    if (requestId !== state.searchRequest) return;
    const numericQuery = /^\d+$/.test(rawQuery);
    const normalizedQuery = rawQuery.toLowerCase().replace(/\s+/g, "-");
    const results = index.filter(item => numericQuery
        ? item.id === Number(rawQuery)
        : item.name.includes(normalizedQuery)).slice(0, 8);
    container.innerHTML = "";
    if (!results.length) {
        container.innerHTML = `<div class="search-no-results">Pokémonia ei löytynyt.</div>`;
        return;
    }

    results.forEach(
        result => {

            const button =
                document.createElement(
                    "button"
                );

            button.className =
                "search-suggestion";


            button.innerHTML = `

                <img
                    src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${result.id}.png"
                    alt=""
                >

                <span>
                    #${String(result.id).padStart(4, "0")}
                    ${formatPokemonName(result.name)}
                </span>

            `;


            button.addEventListener(
                "click",
                () => {

                    container.innerHTML = "";

                    document.getElementById(
                        "searchInput"
                    ).value = "";

                    openPokemonSpecies(
                        result.id,
                        null,
                        null
                    );

                }
            );


            container.appendChild(
                button
            );

        }
    );

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
        `<button class="type-choice-button type-choice-none${selectedType ? "" : " active"}" type="button" data-type="" aria-pressed="${!selectedType}"><span class="type-choice-icon">×</span><span>None</span></button>`,
        ...TYPES.map(type => `
            <button class="type-choice-button${selectedType === type ? " active" : ""}" type="button" data-type="${type}" style="--type-color:${TYPE_COLORS[type]}" aria-pressed="${selectedType === type}" aria-label="${capitalize(type)}">
                <span class="type-choice-icon">${capitalize(type).charAt(0)}</span>
                <span>${capitalize(type)}</span>
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
                Valitse vähintään yksi tyyppi.
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
                Defensive matchup
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
                Offensive matchup
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
    container.innerHTML = `<div class="empty-state">Lasketaan...</div>`;
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
            <h3>Koko National Pokédex</h3>
            <p>Saman Pokémonin merkintä riittää riippumatta siitä, missä pelissä se on napattu.</p>
            <div class="profile-progress"><div class="profile-progress-bar" style="width:${nationalPercent}%"></div></div>
            <div class="profile-count">${nationalCaught} / ${nationalTotal} Pokémonia (${nationalPercent}%)</div>
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
            <article class="profile-card profile-game-card" data-profile-game="${game.id}" role="button" tabindex="0" aria-label="Open ${game.name}">
                <h3>${game.name}</h3>
                <p>${formatGenerationName(game.generation)}</p>
                <div class="profile-dex-progress">
                    <div class="profile-dex-heading"><strong>Regional</strong><span>${regionalCaught} / ${regionalIds.length} (${regionalPercent}%)</span></div>
                    <div class="profile-progress"><div class="profile-progress-bar" style="width:${regionalPercent}%"></div></div>
                </div>
                <div class="profile-dex-progress">
                    <div class="profile-dex-heading"><strong>National</strong><span>${nationalCaughtForGame} / ${gameNational.length} (${gameNationalPercent}%)</span></div>
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
                <span>${generationCards.length} games <span class="profile-generation-arrow" aria-hidden="true">›</span></span>
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
        <button class="submenu-button${dex.id === "national" ? " active" : ""}" data-dex="${dex.id}"><span>${dex.name}</span><small>${dex.subtitle}</small></button>
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
                ${games.map(game => `<button class="game-button" data-game="${game.id}">${game.name.replace(/^Pokémon\s+/, "")}</button>`).join("")}
            </div>
        </section>
    `).join("");
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

            document.getElementById(
                "pageTitle"
            ).textContent =
                "Types";

            document.getElementById(
                "breadcrumb"
            ).textContent =
                "Types";

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
                "Profile";

            document.getElementById(
                "breadcrumb"
            ).textContent =
                "Profile";

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
                "Settings";

            document.getElementById(
                "breadcrumb"
            ).textContent =
                "Settings";

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
const observedLoadMoreButtons = new Set();

function reloadForPwaUpdate() {
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

function setupPwaInstallPrompt() {
    const installButton = document.getElementById("installPwaButton");
    if (!installButton) return;

    let installPrompt = null;
    window.addEventListener("beforeinstallprompt", event => {
        event.preventDefault();
        installPrompt = event;
        installButton.hidden = false;
    });

    installButton.addEventListener("click", async () => {
        if (!installPrompt) return;
        const prompt = installPrompt;
        installPrompt = null;
        installButton.hidden = true;
        await prompt.prompt();
        await prompt.userChoice;
    });

    window.addEventListener("appinstalled", () => {
        installPrompt = null;
        installButton.hidden = true;
    });
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
    if (status) status.textContent = "Haetaan päivityksiä…";

    try {
        if (!("serviceWorker" in navigator) || !window.isSecureContext) {
            if (status) status.textContent = "Ladataan uusin sivu…";
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
            if (status) status.textContent = "Uusi versio löytyi. Päivitetään sovellus…";
            waitingWorker.postMessage({ type: "SKIP_WAITING" });
            return;
        }
        if (installingWorker) {
            if (status) status.textContent = "Uusi versio latautuu. Sovellus avautuu päivityksen jälkeen…";
            installingWorker.addEventListener("statechange", () => {
                if (installingWorker.state === "redundant") {
                    pwaManualUpdatePending = false;
                    if (status) status.textContent = "Päivityksen lataus epäonnistui. Yritä uudelleen.";
                }
            });
            return;
        }

        if (status) status.textContent = "Päivitystarkistus valmis. Ladataan uusin sisältö…";
        window.setTimeout(reloadForPwaUpdate, 250);
    } catch (error) {
        console.warn("PWA update check failed", error);
        pwaManualUpdatePending = false;
        if (status) status.textContent = "Päivitysten haku epäonnistui. Tarkista verkkoyhteys.";
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

    updateButton.addEventListener("click", () => void checkForPwaUpdate());
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
    button.textContent = "Ladataan lisää...";

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
    setupPwaInstallPrompt();
    setupPwaUpdateButton();
    setupPullToRefresh();

    const clearGameSelect = document.getElementById("clearGameSelect");
    clearGameSelect.innerHTML = GAMES.map(game => `<option value="${game.id}">${game.name}</option>`).join("");

    document.getElementById(
        "searchInput"
    ).addEventListener(
        "input",
        event => {

            searchPokemon(
                event.target.value
            );

        }
    );


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
                confirm(
                    "Haluatko varmasti poistaa kaikki caught-merkinnät?"
                );


            if (!confirmed) return;


            if (!saveCaughtData({})) {
                alert("Caught-merkintöjä ei voitu tyhjentää tästä selaimesta.");
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
            if (!game || !confirm(`Poistetaanko kaikki ${game.name}-pelin caught-merkinnät?`)) return;
            const data = getCaughtData();
            delete data[gameId];
            if (gameId === "brilliantdiamond") delete data.brilliantdiamond2;
            if (gameId === "shiningpearl") delete data.shiningpearl2;
            if (!saveCaughtData(data)) {
                alert(`${game.name}-pelin caught-merkintöjä ei voitu tyhjentää tästä selaimesta.`);
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

            const search =
                document.getElementById(
                    "searchSuggestions"
                );

            const input =
                document.getElementById(
                    "searchInput"
                );


            if (
                !search.contains(event.target) &&
                event.target !== input
            ) {

                search.innerHTML = "";

            }

        }
    );

}


/* =========================================================
   INIT
========================================================= */

async function init() {

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
