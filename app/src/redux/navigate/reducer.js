import Navigator from '../../navigation/routes/index';

export default function reducer(state, action) {
    const newState = Navigator.router.getStateForAction(action, state);
    return newState || state;
}
