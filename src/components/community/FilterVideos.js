import React from 'react';
import { VscSearch } from 'react-icons/vsc';

const FilterVideos = ({sort, search}) => {

    const sortOption = [
        {
            id: 0,
            name: "",
            option: "Choisir la commande"
        },
        {
            id: 1,
            name: "alphabet",
            option: "Ordre alphabétique"
        },
        {
            id: 2,
            name: "date",
            option: "Ordre de date"
        }
    ];

    return (
        <div className='filtersContainer col-12 p-0'>
            <form className='sorterBox'>
                <label className='label'>Trier par</label>
                <div className='sorterWrapper'>
                    <select
                        className='sorter'
                        name='sort'
                        id='sort'
                        onChange={(event => sort(event.target.value))}
                    >
                        {
                            sortOption.map(i => {
                                return <option
                                    key={i.id}
                                    name={i.name}
                                    value={i.name}
                                >
                                    {i.option}
                                </option>
                            })
                        }
                    </select>
                </div>
            </form>
            <form className='form-group searchBox'>
                <div className='inputBox'>
                    <VscSearch className='searchIcon' />
                    <input
                        type='search'
                        placeholder='Rechercher'
                        name='search'
                        className='searchInput'
                        onChange={(event) =>
                            search(event.target.value)}
                    />
                </div>
            </form>
        </div>
    );
};

export default FilterVideos;