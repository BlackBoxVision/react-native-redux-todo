export function getItemsByFilter({ todo: { items, filter } }) {
    switch (filter) {
        case 'active':
            return items.filter(item => !item.completed);
        case 'completed':
            return items.filter(item => item.completed);
        case 'all':
        default:
            return items;
    }
}