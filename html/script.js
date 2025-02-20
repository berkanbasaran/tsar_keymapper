let pressedKeys = new Set();
let lastKey = null;
let debugEnabled = false;
let keyNames = {};

// Function to update debug information
function updateDebugInfo(keyCode, eventType) {
    if (!debugEnabled) return;
    
    const debugCorner = document.getElementById('debug-corner');
    if (!debugCorner) return;
    
    debugCorner.style.display = 'block';
    
    const keyName = keyNames[keyCode] || keyCode;
    const lastKeyName = lastKey ? (keyNames[lastKey] || lastKey) : 'None';
    
    debugCorner.innerHTML = `
        <div style="margin-bottom: 5px;">Current Key: ${keyName || 'None'}</div>
        <div style="margin-bottom: 5px;">Event Type: ${eventType || 'None'}</div>
        <div>Latest Released Key: ${lastKeyName}</div>
    `;
}

// Handle messages from the client
window.addEventListener('message', (event) => {
    const data = event.data;

    if (data.type === 'show') {
        debugEnabled = data.config.debug;
        keyNames = data.config.keyNames || {};
        
        if (debugEnabled) {
            const debugCorner = document.getElementById('debug-corner');
            if (debugCorner) {
                debugCorner.style.display = 'block';
                updateDebugInfo();
            }
        }
    }

    if (data.type === 'updateDebug') {
        const debugElement = document.getElementById('debug');
        if (debugElement) {
            // Replace newlines with <br> for HTML display
            debugElement.innerHTML = data.text.replace(/\n/g, '<br>');
        }
    }
});

// Update the game keys handling approach
const gameKeys = new Set([
    87,  // W
    65,  // A
    83,  // S
    68,  // D
    // ... keep other game keys
]);

// Function to send key state to client
function sendKeyState(keyCode, pressed) {
    fetch(`https://${GetParentResourceName()}/keyPressed`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json; charset=UTF-8',
        },
        body: JSON.stringify({
            keyCode: keyCode.toString(),
            pressed: pressed
        })
    }).catch(() => {});
}

// Update key handlers to still track game keys but not prevent their default behavior
window.onkeydown = (event) => {
    const keyCode = getKeyCode(event);
    const keyCodeStr = keyCode.toString();

    if (!pressedKeys.has(keyCode)) {
        pressedKeys.add(keyCode);
        updateDebugInfo(keyCodeStr, 'Hold');
        sendKeyState(keyCode, true);
    }

    // Only prevent default for non-game keys (except F5)
    if (!gameKeys.has(keyCode) && keyCode !== 116) {
        event.preventDefault();
        return false;
    }
};

window.onkeyup = (event) => {
    const keyCode = getKeyCode(event);
    const keyCodeStr = keyCode.toString();

    if (pressedKeys.has(keyCode)) {
        pressedKeys.delete(keyCode);
        lastKey = keyCodeStr;
        updateDebugInfo(keyCodeStr, 'Release');
        sendKeyState(keyCode, false);
    }

    // Only prevent default for non-game keys (except F5)
    if (!gameKeys.has(keyCode) && keyCode !== 116) {
        event.preventDefault();
        return false;
    }
};

// Remove or update onkeypress since we're handling everything in keydown/keyup
window.onkeypress = (event) => {
    const keyCode = getKeyCode(event);
    
    // Only prevent default for non-game keys (except F5)
    if (!gameKeys.has(keyCode) && keyCode !== 116) {
        event.preventDefault();
        return false;
    }
};

// Update getKeyCode function to ensure consistent key codes
function getKeyCode(event) {
    const keyCodeMap = {
        'KeyW': 87,
        'KeyA': 65,
        'KeyS': 83,
        'KeyD': 68,
        // ... other mappings
    };

    return keyCodeMap[event.code] || event.keyCode;
}

window.focus();

console.log('All event listeners registered!'); 