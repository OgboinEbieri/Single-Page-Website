function updateTimeAndDay() {
    const now = new Date();
    
    // Update time
    document.getElementById('currentTime').textContent = now.toLocaleString('en-US', { 
      hour: '2-digit', 
      minute: '2-digit', 
      second: '2-digit',
      timeZone: 'UTC'
    });
    
    // Update day
    document.getElementById('currentDay').textContent = now.toLocaleString('en-US', { 
      weekday: 'long',
      timeZone: 'UTC'
    });
  }
  
  // Update immediately and then every second
  updateTimeAndDay();
  setInterval(updateTimeAndDay, 1000);