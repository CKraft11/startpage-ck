// JS configuration for Caden Kraft's Startpage

// Page Configuration ############################

var debug_mode = false; // Debug mode (true/false)

// OpenWeatherMap API Key ########################

var weather_API_key = 'e5b292ae2f9dae5f29e11499c2d82ece';

// Mboum Finance RapidAPI Keys ###################

/* 
Notes:
    - Single API key limited to 500 requests per month and 10 requests per minute.
    - link to API: https://rapidapi.com/sparior/api/mboum-finance/
*/

var rapid_API_keys = ['2b481c0d48msh7b3ae80c17e8e0dp1733f9jsn854791a17134','3651f35b61msh6e13de27c1bf677p102fe9jsn9b81f28c1726'];

// Stock Tickers #################################

/* 
Notes:
    - Add "^" before ticker for index (e.g. ^SPX for S&P 500)
*/

var stocks = [
    'TSM',
    'AAPL',
    'AMZN',
    'GOOGL',
    '^SPX'
    ];

// Startpage Links ################################

/* 
Notes:
    Format: ["Link Name", "Link URL", "Status"]
    Status: Displays Online/Offline Status and Ping (true/false)
*/

var links_var = [

    [
        ['inbox', 'https://inbox.google.com', 'false'],
        ['drive', 'https://drive.google.com', 'false'],
        ['outlook', 'https://outlook.office.com/mail/', 'false'],
        ['okta', 'https://iastate.okta.com/app/UserHome', 'false'],
        ['canvas', 'https://canvas.iastate.edu/?login_success=1', 'false'],
    ],
    [
        ['amazon', 'https://amazon.com', 'false'],
        ['aliexpress', 'https://aliexpress.com', 'false'],
        ['ebay', 'https://ebay.com', 'false'],
        ['drop', 'https://drop.com/home', 'false'],
        ['newegg', 'https://www.newegg.com', 'false'],
    ],
    [
        ['/r/3dprinting', 'https://reddit.com/r/3dprinting', 'false'],
        ['/r/mechanicalkeyboards', 'https://reddit.com/r/mechanicalkeyboards', 'false'],
        ['/r/homelab', 'https://www.reddit.com/r/homelab/', 'false'],
        ['/r/selfhosted', 'https://www.reddit.com/r/selfhosted/', 'false'],
        ['/r/custom keyboards', 'https://reddit.com/r/customkeyboards', 'false'],
    ],
    [
        ['fivethirtyeight', 'https://fivethirtyeight.com/', 'false'],
        ['associated press', 'https://apnews.com', 'false'],
        ['reuters', 'https://www.reuters.com/', 'false'],
        ['aljazeera', 'https://www.aljazeera.com/', 'false'],
        ['ars technica', 'https://arstechnica.com', 'false'],
    
    ],
    [
        ['github', 'https://github.com/CKraft11', 'false'],
        ['tailscale', 'https://login.tailscale.com/admin/machines', 'false'],
        ['send', 'https://send.vis.ee', 'false'],
        ['dccu', 'https://my.deereemployeescu.com/login', 'false'],
        ['fidelity', 'https://www.fidelity.com', 'false'],
    
    ],
    [
        ['dashboard', 'https://dash.cadenkraft.com', 'true'],
        ['ghost blog', 'http://ghost.cadenkraft.com/ghost', 'true'],
        ['3D printer', 'http://fluidd.cadenkraft.com', 'true'],
        ['radon portainer', 'http://radon.cadenkraft.com:9000', 'true'],
        ['router', 'https://router.cadenkraft.com', 'true'],
    
    ],
];
