import Navigator from '../../config/navigation';

export default function reducer(state, action) {
    const newState = Navigator.router.getStateForAction(action, state);
    return newState || state;
};