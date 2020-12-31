import React, { useState } from 'react';
import './CreditCalculator.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import CreditCardHand from '../../Images/CreditCardHand.png'
import { TextField, Select, MenuItem } from '@material-ui/core';
import Slider from '@material-ui/core/Slider';
import Input from '@material-ui/core/Input';

import SpendingCategoryInput from '../SpendingCategoryInput/SpendingCategoryInput';

const useStyles = makeStyles({
    root: {
        width: 250,
    },
    inputSpending: {
        width: 166,
    },
    typeInput: {
        width: 15,
    },
    enterInfo: {
        marginBottom: '1vh',
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

const creditScores = {
    NONE: 'None',
    POOR: 'Poor',
    FAIR: 'Fair',
    GOOD: 'Good',
    VERY_GOOD: 'Very Good',
    EXCELLENT: 'Excellent',
}

function CreditCalculator() {
    const [creditScore, setCreditScore] = useState(creditScores.NONE)

    const [foodSpending, setFoodSpending] = useState(0);
    const [grocerySpending, setGrocerySpending] = useState(0);
    const [gasSpending, setGasSpending] = useState(0);
    const [travelSpending, setTravelSpending] = useState(0);
    const [billsUtilitiesSpending, setBillsUtilitiesSpending] = useState(0);
    const [entertainmentSpending, setEntertainmentSpending] = useState(0);
    
    const classes = useStyles();
    return (
        <div className="jumbotron" style={{ marginBottom: 0, backgroundColor: 'white' }}>
            <div style={{paddingLeft: '3vw'}}>
                <h1 className="display-3">Credit Card Portfolio Builder</h1>
                <p style={{ color: 'green' }}>Let us help you build your optimized wallet.</p>
                <h5>Enter Some Information</h5>
                <form>
                    <div className={classes.enterInfo}>
                            <TextField label="Monthly Spending ($)" style={{ verticalAlign: 'bottom', marginRight: '1vw' }} />
                            <Select value={creditScore} onChange={(event) => setCreditScore(event.target.value)}>
                                {Object.entries(creditScores).map((scores) => {
                                    let [_, value] = scores;
                                    return (
                                        <MenuItem value={value}>
                                            {value}
                                        </MenuItem>
                                    );
                                })}
                            </Select>
                        </div>
                        <div className="form_container">
                            <div>
                                <Typography className={classes.sliderTitle} >Restarant Spending {foodSpending}%</Typography>
                                <PrettoSlider className={classes.inputSpending}
                                    value={foodSpending} onChange={(_, newValue) => setFoodSpending(newValue)}>
                                </PrettoSlider>

                                <Typography className={classes.sliderTitle}>Grocery Spending {grocerySpending}%</Typography>
                                <PrettoSlider className={classes.inputSpending}
                                    value={grocerySpending} onChange={(_, newValue) => setGrocerySpending(newValue)}>
                                </PrettoSlider>

                                <Typography className={classes.sliderTitle}>Bills &amp; Utilities Spending {billsUtilitiesSpending}%</Typography>
                                <PrettoSlider className={classes.inputSpending}
                                    value={billsUtilitiesSpending} onChange={(_, newValue) => setBillsUtilitiesSpending(newValue)}>
                                </PrettoSlider>
                            </div>
                            <div>
                                <Typography className={classes.sliderTitle}>Travel Spending {travelSpending}%</Typography>
                                <PrettoSlider className={classes.inputSpending}
                                    value={travelSpending} onChange={(_, newValue) => setTravelSpending(newValue)}>
                                </PrettoSlider>

                                <SpendingCategoryInput spendingCategoryName="Gas Spending" spending={gasSpending} setSpending={setGasSpending}/>

                                <Typography className={classes.sliderTitle}>
                                    Entertainment Spending <Input
                                        className={classes.typeInput}
                                        value={entertainmentSpending}
                                        margin="dense"
                                        onChange={(event) => {setEntertainmentSpending(event.target.value)}}
                                        disableUnderline={true}
                                    />%
                                </Typography>
                                <div className="form_container">
                                    <PrettoSlider className={classes.inputSpending}
                                        value={entertainmentSpending} onChange={(_, newValue) => setEntertainmentSpending(newValue)}>
                                    </PrettoSlider>
                                </div>
                            </div>
                        </div>
                    </form>

                    <img src={CreditCardHand} alt="Animated Credit Cards" style={{ position: 'absolute', left: '50%', top: '30%' }} />
            </div>
        </div>
    );
}

export default CreditCalculator;