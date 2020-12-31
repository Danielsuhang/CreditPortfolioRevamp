import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';

const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
  });

function CreditCard(props) {
    const classes = useStyles();
    return (
        <Card>
            <CardHeader title={props.title}/>
        </Card>
    )
}

export default CreditCard;