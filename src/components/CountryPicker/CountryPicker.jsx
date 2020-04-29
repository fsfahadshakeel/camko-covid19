import React,{ useState, useEffect } from 'react';
import { NativeSelect, FormControl, StylesProvider } from '@material-ui/core';
import styles from './CountryPicker.module.css';
import { fetchCountries } from '../../api';

export default function CountryPicker( {handleCountryChange} ) {
    const [fetchedCountries, setfetchedCountries] = useState([]);

    useEffect(() =>{
       const fetchedAPI = async () =>{
           setfetchedCountries(await fetchCountries());
       }

       fetchedAPI();
    },[setfetchedCountries]);

    return (
        <div className={styles.container}>
            <FormControl className={StylesProvider.formControl}>
            <NativeSelect defaultValue="" onChange={(e) => { handleCountryChange(e.target.value) }}>
                <option value="">Gobal</option>
    { fetchedCountries.map((country,i) => <option key={i} value={country}>{country}</option>) }
            </NativeSelect>
        </FormControl>
        </div>
    )
}
