import React, {useState, useEffect} from 'react';
import {View} from 'react-native';

import {expandableClick} from '../../../apis';

import ExpandableCard from './expandableCard';
import ExpandableContent from './expandableContent';

const ExpandableComponent = ({
  category,
  content,
  counted,
  total,
  mark = null,
  marked = null,
  opened,
}) => {
  const [filled, setFilled] = useState(false);
  const [open, setOpen] = useState(opened);
  const toggleOpen = () => {
    setOpen(!open);
    expandableClick(category);
  };
  useEffect(() => {
    if (counted === total - 1) {
      setFilled(true);
    }
  }, [counted, total]);
  useEffect(() => {
    if (filled && counted === total) {
      setOpen(false);
      setFilled(false);
    }
  }, [filled, counted, total]);
  return (
    <View>
      <ExpandableCard
        title={category}
        counter={counted >= 0 && total >= 0 ? `${counted} of ${total}` : ''}
        open={open}
        toggleOpen={toggleOpen}>
        <ExpandableContent contents={content} select={mark} selected={marked} />
      </ExpandableCard>
    </View>
  );
};

export default ExpandableComponent;
