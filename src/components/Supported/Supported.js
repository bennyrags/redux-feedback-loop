import React, { Component } from 'react'
import { connect } from 'react-redux'
import ReviewFeedback from '../ReviewFeedback/ReviewFeedback';
//material ui
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import CardActions from '@material-ui/core/CardActions';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core'
import Slide from '@material-ui/core/Slide';

const styles = {
    card: {
        padding: 20,
        marginTop: 20,
    },

    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
    button: {
        backgroundColor: `#033076`,
        color: `#fff`,
        float: `right`,
    },
    hover: {
        backgroundColor: `#043a8f`,
    },

    label: {
        display: `block`,
        textAlign: `left`,
        marginTop: 40,
        marginBottom: 20
    },

    input: {
        display: `block`,
        padding: 10,
    },
    cardActions: {
        float: `right`,
        marginTop: 40
    }
};


class Supported extends Component {

    state = {
        supported: ''
    }

    handleClick = (e) => {
        this.props.dispatch({ type: 'SUPPORTED', payload: this.state.supported });
        this.props.history.push(`/comments`);
    }

    handleChange = (e) => {
        if (e.target.value > 5 || e.target.value < 0) {
            alert('Choose a number between 1 and 5!');
            e.target.value = 0;
            return
        }
        this.setState({
            supported: e.target.value,
        })

    }
    render() {

        const { classes } = this.props;


        return (
            <section>
                <Grid
                    container
                    direction="row"
                    justify="center"
                    alignItems="center"
                >
                    <Grid item>
                        <Slide direction="right" in mountOnEnter unmountOnExit>
                            <Card className={classes.card}>
                                <h1>
                                    Are You feeling supported today
                                </h1>
                                <label className={classes.label}>Supported? On a Scale of 1-5</label>
                                <input className={classes.input} type="number" onChange={this.handleChange} value={this.state.supported} />
                                <CardActions className={classes.cardActions}>
                                    <Button className={classes.button} onClick={this.handleClick}>Next</Button>
                                </CardActions>
                            </Card>
                        </Slide>
                    </Grid>
                </Grid>

                <ReviewFeedback />
            </section>
        )
    }
}

const mapReduxStateToProps = reduxState => ({
    reduxState
});

export default withStyles(styles)(connect(mapReduxStateToProps)(Supported));
