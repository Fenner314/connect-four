$(document).ready(function() {
    // Make grid
    const connectFour = new ConnectFour('.connect-four')

    connectFour.onPlayerMove = function() {
        $('#player').text(connectFour.player)
    }

    $('#restart').click(function() {
        connectFour.restart()
    })
})
