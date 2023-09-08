function getCurrentUTCTime() {
    const now = new Date();
    const currentMinute = now.getUTCMinutes();
  
    const minTime = (currentMinute - 2 + 60) % 60;
    const maxTime = (currentMinute + 2) % 60;
  
    if (now.getUTCMinutes() >= minTime && now.getUTCMinutes() <= maxTime) {

      return now.toISOString().slice(0, -5) + "Z"; 
    
    } 
  }
  
  module.exports = getCurrentUTCTime;
