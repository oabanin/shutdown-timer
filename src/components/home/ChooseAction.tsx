"use client"
import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import {ActionType} from "@/const/const";

export default function ChooseAction() {
    const [value, setValue] = React.useState<ActionType>(ActionType.shutdown);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = (event.target as HTMLInputElement).value
        setValue(value as ActionType);
    };

    return (
        <fieldset>
            <legend>Select action</legend>
            <FormControl>
                <RadioGroup
                    value={value}
                    onChange={handleChange}
                >
                    <FormControlLabel value={ActionType.shutdown} control={<Radio/>} label="Shutdown"/>
                    <FormControlLabel value={ActionType.restart} control={<Radio/>} label="Restart"/>
                    <FormControlLabel value={ActionType.sleep} control={<Radio/>} label="Sleep"/>
                    <FormControlLabel value={ActionType.hibernate} control={<Radio/>} label="Hibernate"/>
                    <FormControlLabel value={ActionType.logout} control={<Radio/>} label="Logout"/>
                    <FormControlLabel value={ActionType.lock} control={<Radio/>} label="Lock"/>
                </RadioGroup>
            </FormControl>
        </fieldset>
    );
}