import React from "react";
import styles from "./timer.module.scss";
import Countdown from "react-countdown";
import Time from "./Time";

function Timer() {
    const Completion = () => <span>You are good to go!</span>;

    const renderer = ({ days, hours, minutes, seconds, completed }) => {
        if (completed) {
            return <Completion />;
        } else {
            return (
                <Time days={days} hours={hours} minutes={minutes} seconds={seconds} />
            );
        }
    };

    // 30 maalmood Waxay u dhigantaa 2592000000
    const thirtyDaysInMs = 30 * 24 * 60 * 60 * 1000; 

    return (
        <div className={styles.countdown}>
            <Countdown date={Date.now() + thirtyDaysInMs} renderer={renderer} />
        </div>
    );
}

export default Timer;