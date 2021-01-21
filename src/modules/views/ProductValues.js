import * as React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '../components/Typography';
import LaptopWorking from '../components/LaptopWorking';
import ModernTechnologies from '../components/ModernTechnologies';
import FlyingYoga from '../components/FlyingYoga';

const styles = (theme) => ({
  root: {
    display: 'flex',
    overflow: 'hidden',
    backgroundColor: theme.palette.secondary.light,
  },
  container: {
    marginBottom: theme.spacing(10),
    display: 'flex',
    position: 'relative',
  },
  item: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(0, 5),
  },
  image: {
    height: 55,
  },
  title: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5),
  },
  curvyLines: {
    pointerEvents: 'none',
    position: 'absolute',
    top: -180,
  },
});

function ProductValues(props) {
  const { classes } = props;

  return (
    <section className={classes.root}>
      <Container className={classes.container}>
        <img
          src="/static/themes/onepirate/productCurvyLines.png"
          className={classes.curvyLines}
          alt="curvy lines"
        />
        <Grid container spacing={5}>
          <Grid item xs={12} md={4}>
            <div className={classes.item}>
              <LaptopWorking />
              <Typography variant="h6" className={classes.title}>
                Quality Software
              </Typography>
              <Typography variant="h5">
                Prioritizing performance and efficiency while writing code so it can scale 
                and be maintained accordingly. Constantly following the Don’t Repeat Yourself (DRY)
                principles and Test Driven Development (TDD) process. 
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <div className={classes.item}>
              <FlyingYoga />
              <Typography variant="h6" className={classes.title}>
                Agile Development
              </Typography>
              <Typography variant="h5">
                Comfortable working with agile development processes like SCRUM. 
                Driven towards the DevOps mindset to continuously write and deliver 
                code that adds value to the project based on client’s and business model requirements.
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <div className={classes.item}>
              <ModernTechnologies />
              <Typography variant="h6" className={classes.title}>
                Responsive Design
              </Typography>
              <Typography variant="h5">
                Following the mobile first approach using CSS frameworks when implementing the design, 
                offering fast and seamless user experience. 
              </Typography>
            </div>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
}

ProductValues.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductValues);
