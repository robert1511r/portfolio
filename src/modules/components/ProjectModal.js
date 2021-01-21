import React from 'react';
import Modal from '@material-ui/core/Modal';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = (theme) => ({
  paper: {
    backgroundColor: '#fff',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    height: '90%',
    width: '90%',
    borderRadius: '5px',
    border: 'none',
    outline: 'none'
  },
});

function ProjectModal(props) {
  console.log(props)
  const { classes, open, handleCloseModal } = props;
  console.log(classes.paper)

  const body = (
    <div className={classes.paper}>
      <h2 id="simple-modal-title">Text in a modal</h2>
      <p id="simple-modal-description">
        Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
      </p>
      <ProjectModal />
    </div>
  );

  return (
    <div>
      <Modal
        open={open}
        onClose={handleCloseModal}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div className={classes.paper}>
          <h2 id="simple-modal-title">Text in a modal</h2>
          <p id="simple-modal-description">
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </p>
        </div>
      </Modal>
    </div>
  );
}

ProjectModal.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProjectModal);
