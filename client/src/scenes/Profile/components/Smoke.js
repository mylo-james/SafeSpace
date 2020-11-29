import { useEffect, useState } from 'react';

function Smoke({ smoke }) {
    const [state, setState] = useState('');

    useEffect(() => {
        switch (smoke) {
            case 1:
                setState('Never');
                break;
            case 2:
                setState('Almost Never');
                break;
            case 3:
                setState('Socailly');
                break;
            case 4:
                setState('Often');
                break;
            default:
                setState('Very Often');
                break;
        }
    }, [smoke]);

    return (
        <>
            <div>How often do you smoke?</div>
            <div>{state}</div>
        </>
    );
}

export default Smoke;
