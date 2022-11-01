import React from 'react';
import './Block.css';

interface BlockProps {
  hasItem: boolean;
  clicked: boolean;
  clickedBlock: React.MouseEventHandler;
}

const classNames = ['block'];

const Block: React.FC<BlockProps> = ({hasItem, clicked,clickedBlock}) => {

    let win: string = '';

    if (clicked) {
      classNames.push('hideItem');
    } else if (hasItem) {
      win = 'O';
    }


  return (
    <div className={classNames.join(' ')} onClick={clickedBlock}>
      {win}
    </div>
  );
};

export default Block;