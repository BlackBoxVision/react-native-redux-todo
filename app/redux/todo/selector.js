const Filters = {
    ALL: 'all',
    ACTIVE: 'active',
    COMPLETE: 'complete'
};

export function getByFilter({ todo: { items, filter } }) {
    switch (filter) {
        case Filters.ACTIVE:
            return items.filter(item => !item.completed);
        case Filters.COMPLETE:
            return items.filter(item => item.completed);
        case Filters.ALL:
        default:
            return items;
    }
}