// Example usage of the key mapping system
(() => {
    // Wait for TsarKeyMapping to be available
    setTimeout(() => {
        let keyInfo = null; // Store key info when we receive it

        // Create a key mapping for F key
        const fKeyMapping = TsarKeyMapping(Key.F7, (pressed, key) => {
            keyInfo = key; // Store the key info
            if (pressed) {
                TriggerEvent('chat:addMessage', {
                    color: [255, 255, 0],
                    multiline: true,
                    args: ['KeyMapper', `You have pressed ${key.name}!`]
                });
            }
        });

        // Register the key mapping
        fKeyMapping.register();

        // Example holding key
        setTick(() => {
            if (fKeyMapping.isPressed() && keyInfo) {
                TriggerEvent('chat:addMessage', {
                    color: [255, 255, 0],
                    multiline: true,
                    args: ['KeyMapper', `You are holding key ${keyInfo.name}!`]
                });
            }
        });

        // Example of how to unregister (if needed)
        // fKeyMapping.unregister();

        console.log('Key mapping example script loaded!');
    }, 1000); // Wait for other scripts to initialize
})(); 