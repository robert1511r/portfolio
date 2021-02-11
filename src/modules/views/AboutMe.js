import * as React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '../components/Typography';

const styles = (theme) => ({
  root: {
    display: 'flex',
    backgroundColor: theme.palette.secondary.light,
    overflow: 'hidden',
  },
  container: {
    marginTop: theme.spacing(10),
    marginBottom: theme.spacing(15),
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  item: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(0, 5),
  },
  title: {
    marginBottom: theme.spacing(14),
  },
});

function AboutMe(props) {
  const { classes } = props;

  return (
    <section id="about-me" className={classes.root}>
      <Container className={classes.container}>
        <Typography
          variant="h4"
          marked="center"
          className={classes.title}
          component="h2"
        >
          About Me
        </Typography>
        <div>
          <Grid container spacing={5}>
            <Grid>
              <div className={classes.item}>
                <Typography variant="h5" align="center">
                  I am a full-stack software developer mainly focused on building web apps.
                  Always looking forward to solving new challenges. Intrigued by new technologies 
                  to help improve software development with effective communication and team collaboration 
                  through agile methodologies.
                </Typography>
              </div>
            </Grid>
          </Grid>
        </div>
      </Container>
    </section>
  );
}

AboutMe.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AboutMe);
