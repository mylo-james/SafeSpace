import { useEffect, useState } from 'react';

function Drink({ clean }) {
    const [state, setState] = useState('');

    useEffect(() => {
        switch (clean) {
            case 1:
                setState('Never');
                break;
            case 2:
                setState('Almost Never');
                break;
            case 3:
                setState('Socially');
                break;
            case 4:
                setState('Often');
                break;
            default:
                setState('Very Often');
                break;
        }
    }, [clean]);

    return (
        <>
            <div>How often do you drink?</div>
            <div>{state}</div>
        </>
    );
}

export default Drink;
