let teamWithBall;
let possessionTracker;

let teamOnePossession = 0;
let teamTwoPossession = 0;
let totalGameTime = 0;

document.addEventListener("keydown", whatKeyPressed);

let isGamePaused = false;

function whatKeyPressed(event)
{
    if(event.keyCode == 80)
    {
        pauseGame()
    }
    else if(event.keyCode == 32)
    {
        changePossession()
    }
}

function startGame()
{
    startButton.style.display = "none";
    endButton.style.display = "block";
    pauseButton.style.display = "block";
    teamWithBall = 1;
    button.setAttribute("onclick","changePossession()");
    possessionTracker = setInterval(trackPossession, 10);
}

function pauseGame()
{
    if(isGamePaused == false)
    {
        clearInterval(possessionTracker);
        // button.setAttribute("onclick","");
        // Uneccesary code now
        pauseButton.style.display = "none";
        unpauseButton.style.display = "block";
        isGamePaused = true;
    }
    else
    {
        unpauseGame()
    }
}

function unpauseGame()
{
    possessionTracker = setInterval(trackPossession, 10);
    // button.setAttribute("onclick","changePossession()");
    // Uneccesary code now
    isGamePaused = false;
    pauseButton.style.display = "block";
    unpauseButton.style.display = "none";
}

function endGame()
{
    clearInterval(possessionTracker);
    button.setAttribute("onclick","");
    endButton.style.display = "none";
    unpauseButton.style.display = "none";
    pauseButton.style.display = "none";
    document.removeEventListener("keydown", whatKeyPressed)
}

function trackPossession()
{
    if(teamWithBall == 1)
    {
        teamOnePossession++
    }
    else
    {
        teamTwoPossession++
    }
    totalGameTime++

    teamOne.style.width = teamOnePossession/totalGameTime*100+"%";
    teamTwo.style.width = teamTwoPossession/totalGameTime*100+"%";
    teamOnePercentage.textContent = Math.round(teamOnePossession/totalGameTime*100)+"%";
    teamTwoPercentage.textContent = Math.round(teamTwoPossession/totalGameTime*100)+"%";

    let gameTimeSeconds = Math.round(totalGameTime/100);
    let gameTimeMinutes = Math.floor(gameTimeSeconds/60).toLocaleString('en-US', {minimumIntegerDigits: 2});
    gameTimeDisplay.textContent = gameTimeMinutes+":"+gameTimeSeconds.toLocaleString('en-US', {minimumIntegerDigits: 2});
}

function changePossession()
{
    if(teamWithBall == 1)
    {
        teamWithBall = 2
        body.style.backgroundColor = "red"
    }
    else
    {
        teamWithBall = 1
        body.style.backgroundColor = "blue"
    }
}