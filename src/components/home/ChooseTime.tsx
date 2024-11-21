"use client"
import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import {Action, Time} from "@/const/const";
import {TextField} from "@mui/material";

export default function ChooseTime() {
    const [value, setValue] = React.useState<number>();
    const [name, setName] = React.useState('Cat in the Hat');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = (event.target as HTMLInputElement).value
        setValue(+value);
    };

    return (
        <fieldset>
            <legend>Choose time</legend>
            <FormControl>
                <RadioGroup
                    value={value}
                    onChange={handleChange}
                >
                    <FormControlLabel value={Time.tenMinutes} control={<Radio/>} label="10 minutes"/>
                    <FormControlLabel value={Time.twentyMinutes} control={<Radio/>} label="20 minutes"/>
                    <FormControlLabel value={Time.halfAnHour} control={<Radio/>} label="Half an hour"/>
                    <FormControlLabel value={Time.oneHour} control={<Radio/>} label="1 hour"/>
                    <FormControlLabel value={Time.twoHours} control={<Radio/>} label="2 hours"/>
                        <FormControlLabel value={Time.threeHours} control={<Radio/>} label="3 hours"/>
                    <FormControlLabel value={Time.fourHours} control={<Radio/>} label="4 hours"/>
                    <FormControlLabel value={Time.fiveHours} control={<Radio/>} label="5 hours"/>
                    <TextField label="Custom time (seconds)" variant="outlined" value={name}
                               onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                   setName(event.target.value);
                               }}/>

                </RadioGroup>
            </FormControl>
        </fieldset>
    );
}