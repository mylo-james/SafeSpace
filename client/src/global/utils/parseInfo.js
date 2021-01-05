export default function parseInfo(name, info, setState) {
    if (['smoke', 'drink', 'clean', 'social'].includes(name)) {
        switch (info) {
            case 1:
                return 'Never';
            case 2:
                return 'Almost Never';
            case 3:
                return 'Regularly';
            case 4:
                return 'Often';
            default:
                return 'Very Often';
        }
    } else if (name === 'salary') {
        const formatter = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
        });
        return formatter.format(info);
    } else {
        return info;
    }
}
