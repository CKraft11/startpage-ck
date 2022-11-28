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
    Status: 'ping' = Displays Online/Offline Status and Ping, ' ' = Normal Link
*/

var links_var = [

    [
        ['inbox', 'https://inbox.google.com', ' '],
        ['drive', 'https://drive.google.com', ' '],
        ['trello', 'https://trello.com/b/EWzYRoDI/school', ' '],
        ['okta', 'https://iastate.okta.com/app/UserHome', ' '],
        ['canvas', 'https://canvas.iastate.edu/?login_success=1', ' '],
    ],
    [
        ['amazon', 'https://amazon.com', ' '],
        ['aliexpress', 'https://aliexpress.com', ' '],
        ['shopmech', 'https://shopmech.com', ' '],
        ['thocstock', 'https://thocstock.com', ' '],
        ['ebay', 'https://ebay.com', ' '],
    ],
    [
        ['/r/3dprinting', 'https://reddit.com/r/3dprinting', ' '],
        ['/r/mechanicalkeyboards', 'https://reddit.com/r/mechanicalkeyboards', ' '],
        ['/r/customkeyboards', 'https://reddit.com/r/customkeyboards', ' '],
        ['/r/startpages', 'https://reddit.com/r/startpages', ' '],
        ['/r/news', 'https://reddit.com/r/news', ' '],
    ],
    [
        ['fivethirtyeight', 'https://fivethirtyeight.com/', ' '],
        ['associated press', 'https://apnews.com', ' '],
        ['reuters', 'https://www.reuters.com/', ' '],
        ['aljazeera', 'https://www.aljazeera.com/', ' '],
        ['ars technica', 'https://arstechnica.com', ' '],
    
    ],
    [
        ['dashboard', 'https://dash.cadenkraft.com', 'ping'],
        ['ghost blog', 'http://ghost.cadenkraft.com/ghost', 'ping'],
        ['3D printer', 'http://fluidd.cadenkraft.com', 'ping'],
        ['radon portainer', 'http://radon.cadenkraft.com:9000', 'ping'],
        ['router', 'https://router.cadenkraft.com', 'ping'],
    
    ],
    //-----------------------6-10
    [
        ['link-26', 'aaa', ' '],
        ['link-27', 'aaa', ' '],
        ['link-28', 'aaa', ' '],
        ['link-29', 'aaa', ' '],
        ['link-30', 'aaa', ' '],
    
    ],
    [
        ['link-31', 'aaa', ' '],
        ['link-32', 'aaa', ' '],
        ['link-33', 'aaa', ' '],
        ['link-34', 'aaa', ' '],
        ['link-35', 'aaa', ' '],
    
    ],
    [
        ['link-36', 'aaa', ' '],
        ['link-37', 'aaa', ' '],
        ['link-38', 'aaa', ' '],
        ['link-39', 'aaa', ' '],
        ['link-40', 'aaa', ' '],
    
    ],
    [
        ['link-41', 'aaa', ' '],
        ['link-42', 'aaa', ' '],
        ['link-43', 'aaa', ' '],
        ['link-44', 'aaa', ' '],
        ['link-45', 'aaa', ' '],
    ],
    [
        ['link-46', 'aaa', ' '],
        ['link-47', 'aaa', ' '],
        ['link-48', 'aaa', ' '],
        ['link-49', 'aaa', ' '],
        ['link-50', 'aaa', ' '],
    ],
    //-----------------------11-15
    [
        ['link-51', 'aaa', ' '],
        ['link-52', 'aaa', ' '],
        ['link-53', 'aaa', ' '],
        ['link-54', 'aaa', ' '],
        ['link-55', 'aaa', ' '],
    ],
    [
        ['link-56', 'aaa', ' '],
        ['link-57', 'aaa', ' '],
        ['link-58', 'aaa', ' '],
        ['link-59', 'aaa', ' '],
        ['link-60', 'aaa', ' '],
    ],
    [
        ['link-61', 'aaa', ' '],
        ['link-62', 'aaa', ' '],
        ['link-63', 'aaa', ' '],
        ['link-64', 'aaa', ' '],
        ['link-65', 'aaa', ' '],
    ],
    [
        ['link-66', 'aaa', ' '],
        ['link-67', 'aaa', ' '],
        ['link-68', 'aaa', ' '],
        ['link-69', 'aaa', ' '],
        ['link-70', 'aaa', ' '],
    ],
    [
        ['link-71', 'aaa', ' '],
        ['link-72', 'aaa', ' '],
        ['link-73', 'aaa', ' '],
        ['link-74', 'aaa', ' '],
        ['link-75', 'aaa', ' '],
    ],
    
];
