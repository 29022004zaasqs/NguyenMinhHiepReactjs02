import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext'; // Import the context

export default function NmhUseContext2() {
    const theme = useContext(ThemeContext);

    return (
        <div className={theme + ' m-3'} >
            <h2>NmhUsecontext2</h2>
            <p>
                <b>Nguyễn Minh Hiep</b>
                <b>220109100</b>
                <i>K22CNTT1</i>
            </p>
        </div>
    );
}
