import React, { useState } from 'react';

function ToggleMode() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleMode = () => {
        setIsDarkMode(prevMode => !prevMode);
        const root = document.documentElement;
        if (isDarkMode) {
            root.style.setProperty('--background-color', '#ffffff');
            root.style.setProperty('--text-color', '#000000');
        } else {
            root.style.setProperty('--background-color', '#333333');
            root.style.setProperty('--text-color', '#ffffff');
        }
    };

    return (
        <div>
            <button onClick={toggleMode}>
                {isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            </button>
        </div>
    );
}

export default ToggleMode;
