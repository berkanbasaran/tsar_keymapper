fx_version 'adamant'
game 'rdr3'
rdr3_warning 'I acknowledge that this is a prerelease build of RedM, and I am aware my resources *will* become incompatible once RedM ships.'

author 'TSAR'
description 'TSAR\'s Keymapping System for RedM'
version '1.0.0'

-- UI
ui_page 'html/index.html'

-- Shared Scripts
shared_scripts {
    'shared/*.js',
    'config.js'
}

-- Client Scripts
client_scripts {
    'client/*.js',
    'example.js'
}

-- Server Scripts
server_scripts {
    'server/*.js'
}

-- Files needed for NUI
files {
    'html/index.html',
    'html/style.css',
    'html/script.js'
}
