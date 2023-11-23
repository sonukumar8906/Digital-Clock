const clock = () => {
    let date = new Date();
    let hTime = date.getHours();
    let mTime = date.getMinutes();
    let sTime = date.getSeconds();

    let period = (hTime < 12) ? "Am" : "Pm";

    hTime = (hTime < 10) ? "0" + hTime : hTime;
    mTime = (mTime < 10) ? "0" + mTime : mTime;
    sTime = (sTime < 10) ? "0" + sTime : sTime;

    hours.innerText = hTime;
    minutes.innerText = mTime;
    second.innerText = sTime;
    amPm.innerText = period;

}
setInterval(clock, 1000)