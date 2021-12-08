export function millisToMinutesAndSecounds(millis){
    const minutes = Math.floor(millis / 60000);
    const secounds = ((millis % 60000)/ 1000).toFixed(0);
    return secounds == 60
    ? minutes + 1 + ":00"
    : minutes + ":" + (secounds < 10 ? "0" : "") + secounds;
    





}