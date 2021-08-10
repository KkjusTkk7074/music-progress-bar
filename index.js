  
const progress = async(bar,current, total,size) {
        const percent = current / total * size;
        const progbar = new Array(size).fill(bar);
        progbar[Math.round(percent)] = '🎶';
        return {
            bar: progbar.join(''),
            percent
        };
    }

module.exports = progress
