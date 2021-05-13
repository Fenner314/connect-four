class ConnectFour {
    constructor(selector) {
        this.rows = 6
        this.cols = 7
        this.selector = selector
        this.player = 'red'
        this.createGrid()
        this.setupEventListeners()
    }

    createGrid() {
        const $board = $(this.selector)

        for (let row = 0; row < this.rows; row++) {
            const $row = $('<div>').addClass('row')
            for (let col = 0; col < this.cols; col++) {
                const $col = $('<div>')
                    .addClass('col empty')
                    .attr('data-col', col)
                    .attr('data-row', row)
                $row.append($col)
            }
            $board.append($row)
        }
    }

    setupEventListeners() {
        const $board = $(this.selector)
        const that = this

        function findLastEmptyCell(col) {
            const cells = $(`.col[data-col='${col}']`)
            for (let i = cells.length - 1; i >= 0; i--) {
                const $cell = $(cells[i])
                if ($cell.hasClass('empty')) {
                    return $cell
                }
            }
            return null
        } 

        $board.on('mouseenter', '.col.empty', function() {
            const col = $(this).data('col')
            const $lastEmptyCell = findLastEmptyCell(col)
            $lastEmptyCell.addClass(`${that.player}-hover`)
        })

        $board.on('mouseleave', '.col', function() {
            $('.col').removeClass(`${that.player}-hover`)
        })

        $board.on('click', '.col.empty', function() {
            const col = $(this).data('col')
            const row = $(this).data('row')
            const $lastEmptyCell = findLastEmptyCell(col)
            $lastEmptyCell.removeClass(`empty ${that.player}-hover`)
            $lastEmptyCell.addClass(`${that.player}-piece`)
            that.player = (that.player === 'red') ? 'black' : 'red'
            $(this).trigger('mouseenter')
        })
    }
} 
