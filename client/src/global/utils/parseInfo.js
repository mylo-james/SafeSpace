export default function parseInfo(name, info, setState) {
    if (['smoke', 'drink', 'clean', 'social'].includes(name)) {
        switch (info) {
            case 1:
                setState('Never');
                break;
            case 2:
                setState('Almost Never');
                break;
            case 3:
                setState('Regularly');
                break;
            case 4:
                setState('Often');
                break;
            default:
                setState('Very Often');
                break;
        }
    } else if (name === 'salary') {
        const formatter = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
        });
        setState(formatter.format(info));
    } else {
        setState(info);
    }
}
