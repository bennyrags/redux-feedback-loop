import React, { Component } from 'react';
import { connect } from 'react-redux';
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


class Comments extends Component {
    state = {
        comments: ''
    }

    handleClick = (e) => {
        this.props.dispatch({ type: 'COMMENTS', payload: this.state.comments });
        this.props.history.push(`/ReviewFeedback`);
    }

    handleChange = (e) => {
        this.setState({
            comments: e.target.value,
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
                    alignItems="center">
                    <Grid item>
                        <Slide direction="right" in mountOnEnter unmountOnExit>
                            <Card className={classes.card}>
                                <h1>
                                    Any Comments You Want To Leave?
                </h1>
                                <label className={classes.label}>Comments?</label>
                                <input className={classes.input} type="text" onChange={this.handleChange} value={this.state.comments} />
                                
                        <Button className={classes.button} onClick={this.handleClick}>Next</Button>
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
    reduxState,
})

export default withStyles(styles)(connect(mapReduxStateToProps)(Comments));