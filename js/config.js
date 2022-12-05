// JS for Caden Kraft's Startpage

// Page Configuration ############################

var debug_mode = false; // Debug mode (true/false)

// OpenWeatherMap API Key ########################

var weather_API_key = 'e5b292ae2f9dae5f29e11499c2d82ece';

// AlphaVantage Stock API Keys ###################

/* 
Notes:
    - Single API key limited to 5 requests per minute and 500 requests per day.
    - One API key per pageload will be randomly selected from the array below to prevent hitting the limit.
*/

var stock_API_keys = [
    '8OSQY6KIKSU4GCW2',
    'NPJ3BB5K0I826NDN',
    'AJWEPIG90ZIZG55A'
];

// Stock Tickers #################################

/* 
Notes:
    - API Allows Max 5 Tickers.
*/

var stocks = [
    'TSM',
    'AAPL',
    'AMZN',
    'GOOGL',
    'SPY'
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
