// JS for Caden Kraft's Startpage

// Page Configuration ############################

var num_of_pages = 3; // Number of pages (groups of 5 tabs)

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
    //-----------------------7-12
    [
        ['link-26', 'aaa', 'false'],
        ['link-27', 'aaa', 'false'],
        ['link-28', 'aaa', 'false'],
        ['link-29', 'aaa', 'false'],
        ['link-30', 'aaa', 'false'],
    
    ],
    [
        ['link-31', 'aaa', 'false'],
        ['link-32', 'aaa', 'false'],
        ['link-33', 'aaa', 'false'],
        ['link-34', 'aaa', 'false'],
        ['link-35', 'aaa', 'false'],
    
    ],
    [
        ['link-36', 'aaa', 'false'],
        ['link-37', 'aaa', 'false'],
        ['link-38', 'aaa', 'false'],
        ['link-39', 'aaa', 'false'],
        ['link-40', 'aaa', 'false'],
    
    ],
    [
        ['link-41', 'aaa', 'false'],
        ['link-42', 'aaa', 'false'],
        ['link-43', 'aaa', 'false'],
        ['link-44', 'aaa', 'false'],
        ['link-45', 'aaa', 'false'],
    ],
    [
        ['link-46', 'aaa', 'false'],
        ['link-47', 'aaa', 'false'],
        ['link-48', 'aaa', 'false'],
        ['link-49', 'aaa', 'false'],
        ['link-50', 'aaa', 'false'],
    ],
    [
        ['link-51', 'aaa', 'false'],
        ['link-52', 'aaa', 'false'],
        ['link-53', 'aaa', 'false'],
        ['link-54', 'aaa', 'false'],
        ['link-55', 'aaa', 'false'],
    ],
    //-----------------------13-18
    [
        ['link-56', 'aaa', 'false'],
        ['link-57', 'aaa', 'false'],
        ['link-58', 'aaa', 'false'],
        ['link-59', 'aaa', 'false'],
        ['link-60', 'aaa', 'false'],
    ],
    [
        ['link-61', 'aaa', 'false'],
        ['link-62', 'aaa', 'false'],
        ['link-63', 'aaa', 'false'],
        ['link-64', 'aaa', 'false'],
        ['link-65', 'aaa', 'false'],
    ],
    [
        ['link-66', 'aaa', 'false'],
        ['link-67', 'aaa', 'false'],
        ['link-68', 'aaa', 'false'],
        ['link-69', 'aaa', 'false'],
        ['link-70', 'aaa', 'false'],
    ],
    [
        ['link-71', 'aaa', 'false'],
        ['link-72', 'aaa', 'false'],
        ['link-73', 'aaa', 'false'],
        ['link-74', 'aaa', 'false'],
        ['link-75', 'aaa', 'false'],
    ],
    [
        ['link-76', 'aaa', 'false'],
        ['link-77', 'aaa', 'false'],
        ['link-78', 'aaa', 'false'],
        ['link-79', 'aaa', 'false'],
        ['link-80', 'aaa', 'false'],
    ],
    [
        ['link-81', 'aaa', 'false'],
        ['link-82', 'aaa', 'false'],
        ['link-83', 'aaa', 'false'],
        ['link-84', 'aaa', 'false'],
        ['link-85', 'aaa', 'false'],
    ],
    
];
