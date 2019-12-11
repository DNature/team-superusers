import React from 'react'
import { withStyles } from '@material-ui/core';

import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import { useTheme } from '@material-ui/styles';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const styles = theme => ({
  ...theme.theme,
  root: {
    height: '80vh',
    width: '100vw',
    overflow: 'hidden'
  },

  label: {
    position: 'relative',
    height: '80vh',
    width: '100vw',
    overflow: 'hidden'
  },

  img: {
    // height: '100%',
    width: '100%',
    position: 'absolute',
    left: 0,
    bottom: -20,
  }
})

const HomepageSlider = ({ classes }) => {
  const [activeStep, setActiveStep] = React.useState(0);
  const theme = useTheme()
  const handleStepChange = step => {
    setActiveStep(step);
  };

  const data = [
    {
      id: '1',
      url: '/images/sliders/1.jpg'
    },
    {
      id: '2',
      url: 'images/sliders/2.jpg'
    },
    {
      id: '3',
      url: '/images/sliders/3.jpg'
    },
    {
      id: '4',
      url: '/images/sliders/4.jpg'
    },
    {
      id: '5',
      url: '/images/sliders/5.jpg'
    },
  ]
  return (
    <div className={classes.root}>
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
        className={classes.swipeable}
      >
        {data.map((step, index) => (
          <div key={step.label} className={classes.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <img className={classes.img} src={step.url} alt={step.url} />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
    </div>
  )
}

export default withStyles(styles)(HomepageSlider)
