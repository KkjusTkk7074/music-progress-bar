  
const progress = async(bar,current, total,slider,size=11) {
        const percent = current / total * size;
        const progbar = new Array(size).fill(bar);
        progbar[Math.round(percent)] = slider';
        return {
            bar: progbar.join(''),
            percent
        };
    }

module.exports = progress
