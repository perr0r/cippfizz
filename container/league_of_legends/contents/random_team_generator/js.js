$(".mode:eq(0)").on('click', function() {
    $('#box').css('display', 'none');
    $('#mode1').css('display', 'block');
    for (var i = 0 ; i < 5 ; i ++) {
        $(".name1:eq(" + i + ')').val('');
    }
    $('#result1').val('');
})

$(".mode:eq(1)").on('click', function() {
    $('#box').css('display', 'none');
    $('#mode2').css('display', 'block');
    for (var i = 0 ; i < 10 ; i ++) {
        $(".name2:eq(" + i + ')').val('');
    }
    $('#result2').val('');
})

$(".mode:eq(2)").on('click', function() {
    $('#box').css('display', 'none');
    $('#mode3').css('display', 'block');
    for (var i = 0 ; i < 10 ; i ++) {
        $(".name3:eq(" + i + ')').val('');
    }
    $('#result3').val('');
})

$(".mode:eq(3)").on('click', function() {
    $('#box').css('display', 'none');
    $('#mode4').css('display', 'block');
    for (var i = 0 ; i < 10 ; i ++) {
        $(".name4:eq(" + i + ')').val('');
    }
    $('#result4').val('');
})

$(".mode:eq(4)").on('click', function() {
    $('#box').css('display', 'none');
    $('#mode5').css('display', 'block');
    for (var i = 0 ; i < 10 ; i ++) {
        $(".name5:eq(" + i + ')').val('');
    }
    $('#result5').val('');
})

$(".back").on('click', function() {
    for (var i = 0 ; i < 5 ; i ++) {
        $('#mode'+(i + 1)).css('display', 'none');
        $('#box').css('display', 'block');
    }
})


function shuffle(array) {
    var index = array.length;
    var ran = 0;
    while (index != 0) {
        ran = (Math.random() * index)|0;
        index--;
        [array[index], array[ran]] = [array[ran], array[index]];
    }
}

function ran_teams(n) {
    var names = new Array();
    var teams = [new Array(5), new Array(5)];
    for (var i = 0 ; i < 10 ; i ++) {
        names.push($('.name'+n+':eq(' + i + ')').val());
    }
    shuffle(names);
    for (var i = 0 ; i < 2 ; i ++) {
        for (var j = 0 ; j < 5 ; j ++) {
            teams[i][j] = names[i*5 + j];
        }
    }
    return teams;
}

$('#gen1').on('click', function() {
    const line = ['탑', '정글', '미드', '원딜', '서폿'];
    var names = new Array();
    for (var i = 0 ; i < 5 ; i ++) {
        names.push($('.name1:eq(' + i + ')').val());
    }
    shuffle(names);
    var temp = '';
    for (var i = 0 ; i < 5 ; i ++) {
        if (i != 4) {
            temp += line[i] + ': ' + names[i] + ' / ';
        } else {
            temp += line[i] + ': ' + names[i];
        }
    }
    $('#result1').val(temp);
})


$('#gen2').on('click', function() {
    var teams = ran_teams(2);
    var temp = '';
    for (var i = 0 ; i < 2 ; i ++) {
        if (i == 1) {
            temp += '\n';
        }
        temp += (i + 1) + '팀: ';
        for (var j = 0 ; j < 5 ; j ++) {
            if (j !== 4) {
                temp += teams[i][j] + ', ';
            } else {
                temp += teams[i][j];
            }
        }
    }
    $('#result2').val(temp);
})

$('#gen3').on('click', function() {
    const line = ['탑', '정글', '미드', '원딜', '서폿'];
    var teams = ran_teams(3);
    var temp = '';
    for (var i = 0 ; i < 2 ; i ++) {
        if (i == 1) {
            temp += '\n';
        }
        temp += (i + 1) + '팀: ';
        for (var j = 0 ; j < 5 ; j ++) {
            if (j !== 4) {
                temp += line[j] + ': ' + teams[i][j] + ', ';
            } else {
                temp += line[j] + ': ' + teams[i][j];
            }
        }
    }
    $('#result3').val(temp);
})

$('#gen4').on('click', function() {
    const line = ['　탑', '정글', '미드', '원딜', '서폿'];
    var teams = [[,], [,], [,], [,], [,]];
    for (var i = 0 ; i < 5 ; i ++) {
        for (var j = 0 ; j < 2 ; j ++) {
            teams[i][j] = $('.name4:eq(' + ( i * 2 + j ) + ')').val();
        }
    }
    for (var i = 0 ; i < 5 ; i ++) {
        shuffle(teams[i]);
    }
    shuffle(teams);
    var temp = '\n';
    for (var i = 0 ; i < 5 ; i ++) {
        temp += line[i] + '  ' + '1팀: ' + teams[i][0] + ' / 2팀: ' + teams[i][1] + '\n';
    }
    $('#result4').val(temp);
})

$('#gen5').on('click', function() {
    const line = ['　탑', '정글', '미드', '원딜', '서폿'];
    var teams = [[,], [,], [,], [,], [,]];
    for (var i = 0 ; i < 5 ; i ++) {
        for (var j = 0 ; j < 2 ; j ++) {
            teams[i][j] = $('.name5:eq(' + ( i * 2 + j ) + ')').val();
        }
    }
    for (var i = 0 ; i < 5 ; i ++) {
        shuffle(teams[i]);
    }
    var temp = '\n';
    for (var i = 0 ; i < 5 ; i ++) {
        temp += line[i] + '  ' + '1팀: ' + teams[i][0] + ' / 2팀: ' + teams[i][1] + '\n';
    }
    $('#result5').val(temp);
})