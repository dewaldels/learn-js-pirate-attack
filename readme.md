# PIRATE ATTACK!!
-----------------       

The game has a global game object called 'game'
The following properties are available:

## Game object
`game.gameover: boolean`
`game.didPlayerWin: function: boolean`

## Player object
`game.player: object`

## Enemy object
`game.enemy: object`

## Step 1:

Instantiate/Cache the two global element references
- playerInfo
- gameInfo

In the `#section-player-name` main div create the following elements:
    - `<label>`
    - `<input />` (type text) 
    - `<p>` with the id 'new-name'
    - `<button>` with the text Accept

    ## INPUT KEYUP FUCNTION
        - The input should have a onkeyup event listener linked to a function - `onNameChange()`
        - When the name changes the player name should be updated using the global game object
        Example: `game.player.name = INPUT_VALUE_HERE`
        The `new-name` p tag should be updated to read: 'Your player name will be PLAYER_NAME_HERE'

    ## ACCEPT FUNCTION
    - The Accept button must have a onclick event bound to a `acceptName` function. When this function is clicked, 
        * the section woth the id: section-player-name must be hidden
        * the playerInfo section innerText must be set to the player name
        * the div with the id intro must be hidden
        * the main tag with the id game must be displayed

## Step 2:

Inside the `#attack` section, after the game info, we need to add a couple of elements. 
We'd like our player to select a weapon

    - `<label>` with the text: Select your weapon:
    - `<select>` with 5 options
        - option 1: value="" text="-- Choose your weapon --"
        - option 2: value="sword" text="Sword"
        - option 3: value="pistol" text="Pistol"
        - option 4: value="knife" text="Knife"
        - option 5: value="fists" text="Bare hands"
    - `<button>` with the text: Attack!!

    ## WEAPON CHANGE FUNCTION

    The select onchange function should update the players weapon using the `player.takeWeapon()` function. It should also update the playerInfo with the new weapon. 
    It shoudl read: PLAYER_NAME_HERE with a PLAYER_WEAPON_HERE

    ## ATTACK FUNCTION

    The button onclick attack() function should execute the player attack and update the gameInfo innerText with the result of the attack() function.

    The attack function should also check if the game is over and if the winner is the player. 
    - Show an alert with the text: You won! And have defended the ship! Good work!! if the player is the winner.

    - Show and alert with the text: 'You Lost! :( ' if the enemy won.

