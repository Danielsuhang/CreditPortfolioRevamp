import React from 'react';

import Slider from '@material-ui/core/Slider';
import Input from '@material-ui/core/Input';
import Typography from '@material-ui/core/Typography';

import { withStyles, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    inputSpending: {
        width: 166,
    },
    typeInput: {
        width: 20,
    },
    sliderTitle: {
        marginTop: '2vh',
        marginRight: '1vw',
    }
});

const PrettoSlider = withStyles({
    root: {
      color: '#52af77',
      height: 8,
    },
    thumb: {
      height: 24,
      width: 24,
      backgroundColor: '#fff',
      border: '2px solid currentColor',
      marginTop: -8,
      marginLeft: -12,
      '&:focus, &:hover, &$active': {
        boxShadow: 'inherit',
      },
    },
    active: {},
    valueLabel: {
      left: 'calc(-50% + 4px)',
    },
    track: {
      height: 8,
      borderRadius: 4,
    },
    rail: {
      height: 8,
      borderRadius: 4,
    },
  })(Slider);

function SpendingCategoryInput(props) {
    const classes = useStyles();
    return (
        <>
            <Typography className={classes.sliderTitle}>
            {props.spendingCategoryName} Spending <Input
                className={classes.typeInput}
                value={props.spending}
                margin="dense"
                onChange={(event) => {props.setSpending(event.target.value)}}
                disableUnderline={true}
            />%
            </Typography>
            <div className="form_container">
                <PrettoSlider className={classes.inputSpending}
                    value={props.spending} onChange={(_, newValue) => props.setSpending(newValue)}>
                </PrettoSlider>
            </div>
        </>
    )
}

export default SpendingCategoryInput;