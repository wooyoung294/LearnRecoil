import React from 'react';
import './App.css';
import { selector, useRecoilState, useRecoilValue} from "recoil";
import {animalFilterState, animalState} from "./atoms/animalState";

function App() {
    const [animal, setAnimal] = useRecoilState(animalState);

    const feedingBear = ()=>{
        setAnimal((prevValue)=>(
            prevValue.map((animal)=>
                animal.type==='Bear'
                    ? {type:'Human',name:'웅녀'}
                    :animal

            )
        ))
    }

    const filteredAnimalsState = selector({
        key: 'animalListState',
        get: ({get}) => {
            const filter = get(animalFilterState);
            const animals = get(animalState);
            return animals.filter(animal => filter.includes(animal.type));
        },
    });
    const filterValue = useRecoilValue(filteredAnimalsState)
    return (
        <>
            <h3>Atom</h3>
            <div className="App">
                <div>
                    All Animal
                    <ul>
                        {animal.map(({type, name}) => <li>{type}:{name}</li>)}
                    </ul>
                    <button onClick={feedingBear}>곰한태 마늘/쑥 먹이기</button>
                </div>
                <div>
                    Filter Animal
                    <ul>
                        {filterValue.map(({type, name}) => <li>{type}:{name}</li>)}
                    </ul>
                </div>
            </div>
        </>
    );
}

export default App;
