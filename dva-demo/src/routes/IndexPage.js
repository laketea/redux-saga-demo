import React, { Component, PropTypes } from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router';
import styles from './IndexPage.css';

function IndexPage({ count, onIncrease, onDecrease }) {
  return (
    <div className={styles.normal}>
      <h1 className={styles.title}>Yay! Welcome to dva!</h1>
      <div className={styles.welcome} />
      Count: { count }
      <button onClick={onIncrease}>+</button>
      <button onClick={onDecrease}>-</button>
    </div>
  );
}

IndexPage.propTypes = {
};

function mapStateToProps({ example }) {
  return {
    ...example,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onIncrease() {
      dispatch({ type: 'example/increase' });
    },
    onDecrease() {
      dispatch({ type: 'example/decrease' });
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(IndexPage);
