import React from 'react';
import useStyles from './style';
import { Add } from '@material-ui/icons';

const body: React.FC = () => {
    const classes = useStyles();

    return (
        <React.Fragment>
            <div className={classes.component}>
                <div className={classes.center}>
                    <Add fontSize="large" />
                </div>
            </div>
            <iframe className={classes.iframe} id="inline-frame" src="https://www.google.com/"></iframe>
        </React.Fragment>
    );
}

export default body;