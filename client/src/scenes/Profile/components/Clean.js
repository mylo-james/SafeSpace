import { useEffect, useState } from 'react';

function Clean({ clean }) {
    const [state, setState] = useState('');

    useEffect(() => {
        switch (clean) {
            case 1:
                setState('Very Dirty');
                break;
            case 2:
                setState('Dirty');
                break;
            case 3:
                setState('Normal');
                break;
            case 4:
                setState('Clean');
                break;
            default:
                setState('Very Clean');
                break;
        }
    }, [clean]);

    return (
        <>
            <div>How do you like your space kept?</div>
            <div>{state}</div>
        </>
    );
}

export default Clean;
