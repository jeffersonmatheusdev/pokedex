function bgColorSelector(type) {
    switch (type) {
        case 'fire':
            return '#fd7d24'
        case 'grass':
            return '#9bcc50'
        case 'poison':
            return '#b97fc9'
        case 'flying':
            return '#e0e0e0'
        case 'normal':
            return '#e9e9e9'
        case 'water':
            return '#4592c4'
        case 'bug':
            return '#729f3f'
        case 'electric':
            return '#E5ff00'
        case 'ground':
            return '#Ffd000'
        case 'fairy':
            return '#fdb9e9'
        case 'fighting':
            return '#d56723'
        case 'psychic':
            return '#f366b9'
    }
}

export default bgColorSelector;