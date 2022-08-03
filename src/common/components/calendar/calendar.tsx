import { OutlinedInput } from "@mui/material";
import React, { useState } from "react";
import Datetime from 'react-datetime';
import styles from './calendar.module.css';

export const Calendar = () => {
    const [startDate, setStartDate] = useState(new Date());
    //console.log(styles)
    return (
        <Datetime
            dateFormat="YYYY"
            timeFormat={false}
            inputProps={{
                placeholder: 'Année',
                className: styles.popper
            }}
            renderView={(mode, renderDefault) =>
                renderView(mode, renderDefault)
            }
            renderInput={renderInput}
            className={styles.datePicker}
        />
    );
}

const renderInput = (props) => {
    return (

        <OutlinedInput
            {...props}
            inputProps={{
                'aria-label': 'weight',
            }}
        />


    );
}

const renderView = (mode, renderDefault) => {
    return (
        <div>
           
                {renderDefault()}
            
        </div>

    );
}


export default Calendar