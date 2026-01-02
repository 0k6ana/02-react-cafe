import { useState } from 'react';
import css from './App.module.css';

import CafeInfo from '../CafeInfo/CafeInfo.tsx';
import VoteOptions from '../VoteOptions/VoteOptions.tsx';
import VoteStats from '../VoteStats/VoteStats.tsx';
import Notification from '../Notification/Notification.tsx';
import type { VoteType } from '../../types/votes.ts';

const initialVotes = {
  good: 0,
  neutral: 0,
  bad: 0,
};

export default function App() {
  const [votes, setVotes] = useState(initialVotes);

  const handleVote = (type: VoteType) => {
    setVotes(prev => ({
      ...prev,
      [type]: prev[type] + 1,
    }));
  };

  const resetVotes = () => {
    setVotes(initialVotes);
  };

  const totalVotes = votes.good + votes.neutral + votes.bad;

  return (
    <div className={css.app}>
      <CafeInfo />
      <VoteOptions onVote={handleVote} onReset={resetVotes} />

      {}
      {totalVotes > 0 ? (
        <VoteStats votes={votes} />
      ) : (
        <Notification message="No feedback yet" />
      )}
    </div>
  );
}


