import {atom} from "recoil";

export const animalState = atom({
    key: 'animalState',
    default: [
        {
            name: '멍멍이',
            type: 'Dog'
        },
        {
            name: '야옹이',
            type: 'Cat'
        },
        {
            name: '꿀꿀이',
            type: 'Pig'
        },
        {
            name: '곰탱이',
            type: 'Bear'
        },
    ]
})
export const animalFilterState = atom({
    key: 'animalFilterState',
    default:['Dog','Bear'],
});
