let activeKeys = new Set();
let registeredCallbacks = new Map();
let latestReleasedKey = 'None';
let lastDebugUpdate = 0;
const DEBUG_UPDATE_INTERVAL = 1000; // Update debug every 1 second

// Initialize NUI callback
RegisterNuiCallback('keyPressed', (data, cb) => {
    const { keyCode, pressed } = data;
    
    if (pressed) {
        activeKeys.add(keyCode);
    } else {
        activeKeys.delete(keyCode);
        latestReleasedKey = keyCode;
    }
    
    // Only process callbacks if we have any registered
    if (registeredCallbacks.has(keyCode)) {
        const callbacks = registeredCallbacks.get(keyCode);
        if (callbacks.size > 0) {
            callbacks.forEach(callback => {
                try {
                    callback(pressed);
                } catch (err) {}
            });
        }
    }

    // Throttle debug updates
    const now = GetGameTimer();
    if (now - lastDebugUpdate >= DEBUG_UPDATE_INTERVAL) {
        updateDebugInfo();
        lastDebugUpdate = now;
    }
    
    cb('ok');
});

// Clean API for key mapping
global.TsarKeyMapping = (key, callback) => {
    console.log(`Registering callback for key: ${key}`);
    return {
        register: () => {
            if (!registeredCallbacks.has(key)) {
                registeredCallbacks.set(key, new Set());
            }
            // Wrap the callback to include key information
            const wrappedCallback = (pressed) => {
                // Find the key name by looking up the value
                const keyName = Object.entries(Key).find(([name, code]) => code === key)?.[0] || key;
                callback(pressed, {
                    code: key,
                    name: keyName
                });
            };
            registeredCallbacks.get(key).add(wrappedCallback);
            return true;
        },
        unregister: () => {
            if (registeredCallbacks.has(key)) {
                registeredCallbacks.get(key).delete(callback);
                return true;
            }
            return false;
        },
        isPressed: () => {
            return activeKeys.has(key);
        }
    };
};

// Initialize NUI
setTimeout(() => {
    SetNuiFocus(true, false);
    SetNuiFocusKeepInput(true);
    
    SendNuiMessage(JSON.stringify({
        type: 'show',
        config: {
            debug: Config.debug,
            keyNames: Config.keyNames
        }
    }));
}, 1000);

function updateDebugInfo() {
    // Only send debug info if we have active keys or callbacks
    if (activeKeys.size > 0 || registeredCallbacks.size > 0) {
        const debugText = `
            Current Keys Pressed: ${Array.from(activeKeys).join(', ') || 'None'}
            Latest Released Key: ${latestReleasedKey}
            Active Controls: ${JSON.stringify(Array.from(registeredCallbacks.keys()))}
        `;
        
        SendNuiMessage(JSON.stringify({
            type: 'updateDebug',
            text: debugText
        }));
    }
} 