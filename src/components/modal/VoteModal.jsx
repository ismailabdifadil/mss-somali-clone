import { useState } from 'react';
import Modal from 'react-modal';
import styles from './vote.module.scss';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { handleClick } from '../../features/modal/modalSlice';
import {
  addVoteToCompetitor,
  decreaseVote,
  increaseVote,
  resetState,
} from '../../features/competirors/competitorSlice';
import { FaTimes } from 'react-icons/fa';

Modal.setAppElement('#root');

const VoteModal = () => {
  const { currentCompetitor, voteCount } = useSelector(
    (store) => store.competitor
  );

  const backgroundStyle = {
    width: '100%',
    height: '400px',
    background: `linear-gradient(0deg,#29ae65b2,rgba(0,0,0,0) 60%,rgba(0,0,0,0)),url('${currentCompetitor?.Photo}')`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    borderBottomRightRadius: '10px',
  };

  const { isOpen } = useSelector((store) => store.modal);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addVoteToCompetitor(currentCompetitor.Id));
    dispatch(handleClick());
    dispatch(resetState());
  };

  return (
    <div>
      <Modal
        isOpen={isOpen}
        onRequestClose={() => dispatch(handleClick())}
        contentLabel="Example Modal"
        className={styles.content}
        overlayClassName={styles.overlay}
      >
        <div className={styles.modal_container}>
          <div className={styles.competitor_info}>
            <div className={styles.image} style={backgroundStyle}>
              <FaTimes
                color="#fff"
                className={styles.close_icon}
                onClick={() => dispatch(handleClick())}
              />
            </div>
            <div className={styles.bio}>
              <div className={styles.divider}>
                <label htmlFor="">Full Name</label>
                <span>
                  {currentCompetitor?.FirstName +
                    ' ' +
                    currentCompetitor?.LastName}
                </span>
              </div>
              <div className={styles.divider}>
                <label htmlFor="">State</label>
                <span>{currentCompetitor?.RepresentingState}</span>
              </div>
              <div className={styles.divider}>
                <label htmlFor="">Background Study</label>
                <span>{currentCompetitor?.PersonalBackground}</span>
              </div>
              <div className={styles.divider}>
                <label htmlFor="">Employment</label>
                <span>{currentCompetitor?.EmploymentorSchool}</span>
              </div>
            </div>
          </div>

          <div className={styles.vote_container}>
            <div className={styles.vote_count}>
              <span>Purchase Votes</span>
              <div className={styles.vote_controls}>
                <button onClick={() => dispatch(decreaseVote())}>
                  <AiOutlineMinus className={styles.icon} />
                </button>
                <span>{voteCount}</span>
                <button onClick={() => dispatch(increaseVote())}>
                  <AiOutlinePlus className={styles.icon} />
                </button>
              </div>
            </div>
            <form onSubmit={handleSubmit}>
              <span>Pay with EVC, Zaad, Sahal</span>
              <input
                type="text"
                placeholder="Enter your phone"
                className={styles.form_control}
              />
              <button type="submit">Vote Now</button>
            </form>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default VoteModal;
