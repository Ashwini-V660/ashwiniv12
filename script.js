document.getElementById('compareBtn').addEventListener('click', function() {
    const date1 = new Date(document.getElementById('date1').value);
    const date2 = new Date(document.getElementById('date2').value);
    
    if (!date1 || !date2) {
        alert("Please select both dates");
        return;
    }
    
    const timeDiff = Math.abs(date2.getTime() - date1.getTime());
    const daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));
    const weeksDiff = Math.ceil(daysDiff / 7);
    const monthsDiff = Math.ceil(daysDiff / 30);

    document.getElementById('daysDifference').textContent = `Difference in days: ${daysDiff} days`;
    document.getElementById('weeksDifference').textContent = `Difference in weeks: ${weeksDiff} weeks`;
    document.getElementById('monthsDifference').textContent = `Difference in months: ${monthsDiff} months`;

    document.getElementById('result').style.display = 'block';
});






