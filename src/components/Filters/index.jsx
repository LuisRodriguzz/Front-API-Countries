import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllCountries, getActivity } from '../../redux/action'
import './index.css'


export default function Filters({ byName, byPopulation, byContinent, byActivities }) {
  const dispatch = useDispatch()

 const [selected, setSelected] = useState({Continent: 'All', Alphabetically: 'alpha', Population: 'order', Activities: 'All'});

  function handleClick(e) {
    console.log(e)
    e.preventDefault()
    dispatch(getAllCountries())
    setSelected ({Continent: 'All', Alphabetically: 'alpha', Population: 'order', Activities: 'All'});
  }

  useEffect(() => {
    dispatch(getAllCountries())
  }, [dispatch])

  const allActivities = useSelector((input) => input.activities);
  useEffect(() => {
    dispatch(getActivity())
  }, [dispatch]);

  function onChangeSelect(event) {
    console.log(event)
    event.preventDefault()
    setSelected({
      ...selected,
      [event.target.name]: event.target.value
      })
      if (event.target.name === "Continent")
      byContinent(event)
      if (event.target.name === "Alphabetically")
      byName(event)
      if (event.target.name === "Population")
      byPopulation(event)
      if (event.target.name === "Activities")
      byActivities(event)
  }


  return (
    <div className='cntnav'>
      <button className='btnreload' onClick={(e) => { handleClick(e) }}>RESTART</button>
      <div className='cntselect'>
        <h3>Order by</h3>
        <select className='select' value= {selected.Continent} name= 'Continent' onChange={(e) => onChangeSelect(e)}>
          <option value="All" key='All' disabled selected >Continent</option>
          <option value="Africa" key='Africa'>Africa</option>
          <option value="Americas" key='Americas'>America</option>
          <option value="Antarctic" key='Antarctic'>Antarctic</option>
          <option value="Asia" key='Asia'>Asia</option>
          <option value="Europe" key='Europe'>Europe</option>
          <option value="Oceania" key='Oceania'>Oceania</option>
        </select>
        <select className='select' value= {selected.Alphabetically} name= 'Alphabetically' onChange={(e) => onChangeSelect(e)}>
          <option value="alpha" key='alpha' disabled selected >Alphabetically</option>
          <option value='A to Z' key='A to Z'>A to Z</option>
          <option value='Z to A' key='Z to A'>Z to A</option>
        </select>
        <select className='select' value= {selected.Population} name= 'Population' onChange={(e) => onChangeSelect(e)}>
          <option value='order' key='order' disabled selected >Population</option>
          <option value='Upward' key='Upward'>Upward</option>
          <option value='Falling' key='Falling' >Falling</option>
        </select>
        <h3>With</h3>
        <select className='select' value= {selected.Activities} name= 'Activities' onChange={(el) => onChangeSelect(el)}>
          <option value='All' disabled selected>Activities</option>
          {allActivities?.map((e) => { return <option key={e.id} value={e.name}>{e.name}</option> })}
        </select>
      </div>
    </div>
  )
}