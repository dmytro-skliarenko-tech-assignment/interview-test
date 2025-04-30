export const calculateVersion = () => {
    let result = 0;
    let i = 0;
    while (i < 100000000) {
        result += Math.sqrt(Math.sqrt(i) * Math.random());
        i++;
    }
    return Math.floor(Math.sqrt(result / (Math.random() * Math.random())));
}