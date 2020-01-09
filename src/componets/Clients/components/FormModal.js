import React from 'react';

import { func, bool, string, obj } from 'prop-types'

import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';

import FormClients from './FormClients';

import {compose} from 'recompose'
import { setModal } from '../../../redux/actions/clientModalReducer'
import withRedux from '../../../redux/withRedux';


const rand = () => (Math.round(Math.random() * 20) - 10)

const getModalStyle = () => {
    const top = 50 + rand();
    const left = 50 + rand();

    return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles(theme => ({
    paper: {
      position: 'absolute',
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
}));

const FormModal = ({
    open,
    title,
    handleClose,
    contentForm,
    isModalOpen,
    setModal
}) => {
    const [modalStyle] = React.useState(getModalStyle);
    const classes = useStyles();

    console.log(isModalOpen);

    return (
        <Modal
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
            open={open}
            onClose={handleClose}
            // open={isModalOpen}
            // onClose={() => setModal(false)}
        >
            <div style={modalStyle} className={classes.paper}>
                <h2 id="simple-modal-title">{title}</h2>
                <FormClients closeModal={handleClose} contentForm={contentForm} />
            </div>
        </Modal>
    );
}


FormModal.prototype ={
    open: bool,
    title : string,
    handleClose: func,
    contentForm: obj,
    isModalOpen: bool,
    setModal: func
}

// const mapStateToProps = state => ({
//     isModalOpen: state.isModalOpen
// });

// const mapDispatchToProps = dispatch =>({
//   setModal: bindActionCreators(setModal, dispatch)
// })

export default compose(
    // connect(mapStateToProps, mapDispatchToProps),
    withRedux(null, { setModal }),
    withRedux( state => ({
        isModalOpen: state.modalClient.isModalOpen
        // console.log(state);
    }))
)(FormModal)
