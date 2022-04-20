export function parseTime(s:any) {
    var part = s.match(/(\d+):(\d+)(?: )?(am|pm)?/i);
    var hh = parseInt(part[1], 10);
    var mm = parseInt(part[2], 10);
    var ap = part[3] ? part[3].toUpperCase() : null;
    if (ap === "AM") {
        if (hh == 12) {
            hh = 0;
        }
    }
    if (ap === "PM") {
        if (hh != 12) {
            hh += 12;
        }
    }
    return { hh: hh, mm: mm };
}
export const accessJoin = (date:string,start:string,end:string,before:number,validity:number):boolean=>{
    var today = new Date();
    var sessionDay = new Date(date);
    var Difference_In_Time = today.getTime() - sessionDay.getTime();
    var Difference_In_Days = Math.floor(Difference_In_Time / (1000 * 60 * 60 * 24));
    if(Difference_In_Days===0){
        const startTime = parseTime(start);
        var startDate = new Date(today.getFullYear(),today.getMonth(),today.getDate(), startTime.hh, startTime.mm);
        var accessDate = new Date(startDate.getTime()-before*60000);
        var accessMax = new Date(startDate.getTime()+validity*60000);
        if(today.getTime()>accessDate.getTime()&&today.getTime()<accessMax.getTime()){
            return true;
        }
        return false;
    }
    return false;
}