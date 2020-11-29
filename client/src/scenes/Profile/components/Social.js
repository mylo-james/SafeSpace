import { useEffect, useState } from 'react';

function Smoke({ smoke }) {
    const [state, setState] = useState('');

    useEffect(() => {
        switch (smoke) {
            case 1:
                setState('I keep to myself');
                break;
            case 2:
                setState('Introverted');
                break;
            case 3:
                setState('Social');
                break;
            case 4:
                setState('Extroverted');
                break;
            default:
                setState('I do not like to be alone');
                break;
        }
    }, [smoke]);

    return (
        <>
            <div>How would you describe your social life?</div>
            <div>{state}</div>
        </>
    );
}

export default Smoke;
