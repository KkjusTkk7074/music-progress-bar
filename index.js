  
const progress = (bar,current, total,slider,size) => {
        const percent = current / total * size;
        const progbar = new Array(size).fill(bar);
        progbar[Math.round(percent)] = slider;
        return {
            bar: progbar.join(''),
            percent
        };
    }

module.exports = {
  
  progress
}
