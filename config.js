// Configuration file for TSAR's Keymapper

const Config = {
    // Debug mode - set to false in production
    debug: false,
    
    // Default key bindings
    defaultBindings: {
        // Example: 'action': 'keyCode'
        'example_action': '71', // G key
    },
    
    // Blacklisted keys that cannot be mapped
    blacklistedKeys: [
        '116', // F5
        '117', // F6
        '118', // F7
        '119', // F8
        '120', // F9
    ],

    // Key name mappings using DOM_VK constants
    keyNames: {
        // Letters
        '65': 'A',          // DOM_VK_A
        '66': 'B',          // DOM_VK_B
        '67': 'C',          // DOM_VK_C
        '68': 'D',          // DOM_VK_D
        '69': 'E',          // DOM_VK_E
        '70': 'F',          // DOM_VK_F
        '71': 'G',          // DOM_VK_G
        '72': 'H',          // DOM_VK_H
        '73': 'I',          // DOM_VK_I
        '74': 'J',          // DOM_VK_J
        '75': 'K',          // DOM_VK_K
        '76': 'L',          // DOM_VK_L
        '77': 'M',          // DOM_VK_M
        '78': 'N',          // DOM_VK_N
        '79': 'O',          // DOM_VK_O
        '80': 'P',          // DOM_VK_P
        '81': 'Q',          // DOM_VK_Q
        '82': 'R',          // DOM_VK_R
        '83': 'S',          // DOM_VK_S
        '84': 'T',          // DOM_VK_T
        '85': 'U',          // DOM_VK_U
        '86': 'V',          // DOM_VK_V
        '87': 'W',          // DOM_VK_W
        '88': 'X',          // DOM_VK_X
        '89': 'Y',          // DOM_VK_Y
        '90': 'Z',          // DOM_VK_Z

        // Numbers (Top row)
        '48': 'DIGIT0',     // DOM_VK_0
        '49': 'DIGIT1',     // DOM_VK_1
        '50': 'DIGIT2',     // DOM_VK_2
        '51': 'DIGIT3',     // DOM_VK_3
        '52': 'DIGIT4',     // DOM_VK_4
        '53': 'DIGIT5',     // DOM_VK_5
        '54': 'DIGIT6',     // DOM_VK_6
        '55': 'DIGIT7',     // DOM_VK_7
        '56': 'DIGIT8',     // DOM_VK_8
        '57': 'DIGIT9',     // DOM_VK_9

        // Special Keys
        '9': 'TAB',         // DOM_VK_TAB
        '13': 'ENTER',      // DOM_VK_RETURN
        '16': 'SHIFT',      // DOM_VK_SHIFT
        '17': 'CTRL',       // DOM_VK_CONTROL
        '18': 'ALT',        // DOM_VK_ALT
        '27': 'ESCAPE',     // DOM_VK_ESCAPE
        '32': 'SPACE',      // DOM_VK_SPACE
        '33': 'PAGEUP',     // DOM_VK_PAGE_UP
        '34': 'PAGEDOWN',   // DOM_VK_PAGE_DOWN
        '35': 'END',        // DOM_VK_END
        '36': 'HOME',       // DOM_VK_HOME
        '37': 'LEFTARROW',  // DOM_VK_LEFT
        '38': 'UPARROW',    // DOM_VK_UP
        '39': 'RIGHTARROW', // DOM_VK_RIGHT
        '40': 'DOWNARROW',  // DOM_VK_DOWN
        '45': 'INSERT',     // DOM_VK_INSERT
        '46': 'DELETE',     // DOM_VK_DELETE

        // Function Keys
        '112': 'F1',        // DOM_VK_F1
        '113': 'F2',        // DOM_VK_F2
        '114': 'F3',        // DOM_VK_F3
        '115': 'F4',        // DOM_VK_F4
        '116': 'F5',        // DOM_VK_F5
        '117': 'F6',        // DOM_VK_F6
        '118': 'F7',        // DOM_VK_F7
        '119': 'F8',        // DOM_VK_F8
        '120': 'F9',        // DOM_VK_F9
        '121': 'F10',       // DOM_VK_F10
        '122': 'F11',       // DOM_VK_F11
        '123': 'F12',       // DOM_VK_F12

        // Numpad
        '96': 'NUMPAD0',
        '97': 'NUMPAD1',
        '98': 'NUMPAD2',
        '99': 'NUMPAD3',
        '100': 'NUMPAD4',
        '101': 'NUMPAD5',
        '102': 'NUMPAD6',
        '103': 'NUMPAD7',
        '104': 'NUMPAD8',
        '105': 'NUMPAD9',
        '106': 'MULTIPLY',
        '107': 'ADD',
        '109': 'SUBTRACT',
        '110': 'DECIMAL',
        '111': 'DIVIDE',
    }
};

// Proper export for RedM/FiveM
exports('Config', Config); 