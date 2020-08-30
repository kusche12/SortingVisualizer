const SelectionSort = (list) => {
  let result = [];
  for (let i = 0; i < list.length; i++) {
    let num = list[i];
    let min = num;
    let pos = i;

    for (let j = i; j < list.length; j++) {
      if (list[j] < min) {
        min = Math.min(min, list[j]);
        pos = j;
      }
      let curr = [...list];
      curr.push(i); // current index
      curr.push(pos); // minimum index
      curr.push(j); // compare index
      result.push(curr); // for result
    }

    let temp = list[i];
    list[i] = min;
    list[pos] = temp;
    //result.push('swap'); TODO: Add this in to let the visualizer know when to do the swap animation
  }
  let end = [...list];
  end.push(null, null, null);
  result.push(end);
  return result;
};

export default SelectionSort;
